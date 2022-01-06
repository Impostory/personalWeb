// 111111111111111111111111111111111
// let data0={
//     name:"IO",
//     year:"800 BC"
// }

// let data1={
//     name:"Norn",
//     year:"200 BC"
// }

// show = [data0, data1]

// console.log(show)
// console.log(show[1])


// 222222222222222222222222222

let months=["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
let blogs=[]
let format=0

function AddData(a){
    console.log("data has been added")
    a.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let image = document.getElementById("input-blog-image").files
    let content = document.getElementById("input-blog-content").value

    image = URL.createObjectURL(image[0])
    console.log(image)

    let blog={
        title: title,
        content: content,
        image: image,
        postAt: new Date(),
        author:"Impostory"
    }
  
    blogs.push(blog)

    exchangecontent()
}

function postDate(time,author){

  let date = time.getDate()
  let month = months[time.getMonth()]
  let year = time.getFullYear()
  let minuteshours = time.getHours() + ":" + time.getMinutes()

  let TimeOfPost= `${date} ${month} ${year} ${minuteshours} WIB | ${author} ` 

  return TimeOfPost
}


function elapsedTimes(then,now){
  let milis= now-then

  let milisInSecond= 999
  let secondsInMinute= 59
  let minutesInHour= 59
  let hoursInDay=23

  let elapsedDays = Math.floor (milis/(milisInSecond*secondsInMinute*minutesInHour*hoursInDay))
  let elapsedHours = Math.floor (milis/(milisInSecond*secondsInMinute*minutesInHour))
  let elapsedMinutes = Math.floor (milis/(milisInSecond*secondsInMinute))
  let elapsedseconds = Math.floor (milis/milisInSecond)



  switch(format){
    case 0:
      console.log(elapsedseconds)
      if(elapsedseconds>=60){
        format=+1
      }
      return elapsedseconds + " seconds ago"
      break;
    case 1:
      console.log(elapsedMinutes)
      if(elapsedMinutes>=60){
        format++
      }
      return elapsedMinutes + " minutes ago"
      break;

    case 2:
      console.log(elapsedMinutes)
      if(elapsedHours>=24){
        format++
      }
      return elapsedHours + " Hours ago"
      break;

    case 3:
      console.log(elapsedDays)
      return elapsedDays + " Days ago"
      break;
  }
}

function exchangecontent(){
    let targetChange= document.getElementById("contents")
    
    targetChange.innerHTML=''
    for(let i=0; i<blogs.length ;i++){
        format=0
        elapsedTimes(blogs[i].postAt,new Date())

        targetChange.innerHTML +=  `<div id="contents" class="blog-list">
        <!-- dynamic content would be here -->
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              <p>
              ${postDate(blogs[i].postAt, blogs[i].author)}
              </p>

              <p>
              ${elapsedTimes(blogs[i].postAt, new Date())}
              </p>
            </div>
            <p>
              ${blogs[i].content}
            </p>
          </div>
        </div>
      </div>`
    }
}

setInterval (exchangecontent,10000)
