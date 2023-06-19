//**********let ve const ile Değişken Tanımlama**********

//var ile değişken tanımlamak:
   /* var serverName="api.kodluyoruz.org"
    console.log(serverName)*/

//let ile değişkeni boş tanımlamak:

        let serverName;
        console.log(serverName);

//let ile değişkene bilgi atamak:
        serverName="https://kodluyoruz.org"
        console.log(serverName);

//let ile değişkene bilgi atayarak tanımlamak:

        let password="1234";
        console.log(password);

//değişken ataması yapmadan önce kullanmaya çalışmak:
    /*HATALI KULLANIM:
        console.log(fullName)
        let fullName="Rabia Aksamaz"
    */
   let fullName="Rabia Aksamaz"
//let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
        fullName="Lorem Ipsum Dolar";
        console.log(fullName)

//birleştirme veya ekleme işlemi
        fullName + "Yeni Eklenen Bilgi";
        console.log(fullName + " Test Bilgisi")// Ekle ve Göster ama Değişkene Eklemedik

        fullName=fullName + " Yeni Bilgi";
        fullName= "2. Yeni Bilgi" + fullName;

        fullName="Sıfırlandı";
        fullName+=" ve yeni bilgi eklendi."
        console.log(fullName);
//const ile değişkeni boş tanımlamaya çalışmak:

       // const serverPassword; //sadece değişken tanımlandı ama içi boş?
// const ile değişken tanımlamak: 

        const SERVER_PASSWORD="sdfgjh546544";
        console.log(SERVER_PASSWORD);
       /* SERVER_PASSWORD="1234";//const ile kaydetttiğimiz için hata alıyoruz.
        console.log(SERVER_PASSWORD)*/