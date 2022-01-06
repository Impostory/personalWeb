//alert("masuk")


function klik(){
    

    let reciver = 'email@mail.com'

    let name = document.getElementById("name1").value
    let email = document.getElementById("email1").value
    let number = document.getElementById("phone1").value
    let selection = document.getElementById("subject1").value
    let isi = document.getElementById("content1").value


    if(name=='' || email=='' || number=='' || selection == ''|| isi==''){
        alert("isi semua")
    }
    else{
        console.log(name)
        console.log(email)
        console.log(number)
        console.log(selection)
        console.log(isi)
    

        let dataobject ={
            name:name,
            email:email,
            number:number,
            selection:selection
        }
        console.log("dataobject" + dataobject.name)

        let a = document.createElement('a')
        a.href = `mailto: ${reciver}?subject=${selection}&body=hallo saya ${name}, pesan saya ${isi}. mohon hubungi saya di ${number}` 
        a.click()
    }
}