import React from "react";
import '../CSS/HomePage.css';


const HomePage = () =>{
    return(
        <div class="homePage">
      
    <div class="main">
      <div class="headContent">
        <p>Bilgi Teknolojilerinde
        23 Yillik Tecrübe</p>
      </div>
      <div class="content">
        Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farkli
        sektörlerde tecrübe kazanmş uzman kadrolarimizla Proje Yönetimi, İş
        Analizi ve Test Yönetimi hizmetleri sunmaktayiz.
      </div>
      <div class="textSubmit">
        <input
        type="text"
        class="text"
        placeholder="Mail bültenimize kayit ol"
        />
        <input type="button" class="btn" value="Kayit Ol" />
      </div>
    </div>
  </div>
    )
}

export default HomePage;