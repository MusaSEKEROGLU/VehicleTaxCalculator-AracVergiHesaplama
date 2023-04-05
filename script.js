//Html kısmında body elementinin içinde yillar() fonksiyonunu tanımladık
function yillar(){
    var tarih = new Date();  //bilgisayardaki enson tarihe göre al
    var yil = tarih.getFullYear();  // sadece yılını al

    for(var i=yil;i>=1950;i--){
        var secenek = document.createElement("option");  //yeni select optionlar oluşturma
        document.getElementById("aracYili").options.add(secenek);  //selectin içine yeni oluşturulan option'ları ekle
        secenek.value = i;
        secenek.text = i;
    }
}

function vergiHesapla(){
    var aracTipi,aracGucu,aracYili;
    var odenecekVergi;
    var i;
    
    // 1.Döngü Bloğu-Araç Tipi Seçimini Alma
    for(i=0; i<document.getElementById("aracTipi").length; i++){

        if(document.getElementById("aracTipi").options[i].selected){

           aracTipi =  document.getElementById("aracTipi").options[i].value;
        }              
    }

    // 2.Döngü Bloğu-Araç Gücü Seçimini Alma
    for(i=0; i<document.getElementsByName("motorGucu").length; i++){

        if(document.getElementsByName("motorGucu")[i].checked){

            aracGucu =  document.getElementsByName("motorGucu")[i].value;
        }        
    }

    //3.Döngü Bloğu-Araç Yılı Seçimini Alama
    for(i=0; i<document.getElementById("aracYili").length; i++){

        if(document.getElementById("aracYili").options[i].selected){

            aracYili =  document.getElementById("aracYili").options[i].value;
        }              
    }

    // 1.Kontrol Bloğu-Araç Tipine Göre Vergi Belirleme
    if(aracTipi == "Motorsiklet"){

        odenecekVergi = 100;
    }
     else if(aracTipi == "Otomobil"){

         odenecekVergi = 200;
    }

    // 2.Kontrol Bloğu-Araç Gücüne Göre Vergi Üzerine Ekleme
    if(aracGucu == "1000cc-1600cc"){

        odenecekVergi = odenecekVergi +  50;
    }
    else if(aracGucu == "1601cc-2000cc"){

         odenecekVergi = odenecekVergi + 100;
    }
    else if(aracGucu == "2001cc"){

        odenecekVergi = odenecekVergi + 150;
    }

     // 3.Kontrol Bloğu-Araç Yılına Göre Vergi Tutarını Düzenleme
     if(aracYili <= 2005){

        odenecekVergi = odenecekVergi - 25;
    }   
     
    document.getElementById("sonuc").innerHTML = "Vergi Tutarı: " + odenecekVergi + " " + "Türk Lirasıdır.";
}