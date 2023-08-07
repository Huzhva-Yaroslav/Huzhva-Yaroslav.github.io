const TOKEN = "6666345319:AAGkmXBOdk53mgZa9ozNwSDfysjXGC_STXM";
const CHAT_ID="-1001886478905";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const success = document.getElementById("main-form-submit");
const notification = document.querySelector(".popup-model__send")
document.getElementById("main-form-request").addEventListener("submit",function(e){
    e.preventDefault();
    let message = `<b>Заява з сайту</b>\n`
    message+= `<b>Клієнт</b> ${this.phone.value}\n`
    axios.post( URL_API,{
        chat_id: CHAT_ID,
        parse_mode:'html',
        text:message,
    })
    .then((res)=>{
    this.phone.value="",
    success.textContent="Відправлено"
    setTimeout(() => {
        success.textContent = "Biдправити";
      }, 2000);
    })
    .catch((err)=>{
        console.warn(err);
    })
    .finally(()=>{
        console.log();   
    })
})
document.getElementById("popup_form").addEventListener("submit",function(e){
    e.preventDefault();
    let message = `<b>Заява з сайту</b>\n`
    message+= `<b>Модель</b> ${this.model.value}\n`
    message+= `<b>Имя</b> ${this.name.value}\n`
    message+= `<b>Телефон</b> ${this.phone.value}`
    console.log(message);
    axios.post( URL_API,{
        chat_id: CHAT_ID,
        parse_mode:'html',
        text:message,
    })
    .then((res)=>{
        this.phone.value="";
        this.name.value="";
        this.send.value="Повідомлення надіслано"
        setTimeout(() => {
            this.send.value = "Оставить заявку";
          }, 2000);
        })
        .catch((err)=>{
            console.warn(err);
        })
        .finally(()=>{
            console.log();   
        })
})
document.getElementById("subscription").addEventListener("submit",function(e){
    e.preventDefault();
    let message = `<b>Заява з сайту</b>\n`
    message+= `<b>Имя</b> ${this.name.value}\n`
    message+= `<b>Телефон</b> ${this.phone.value}`
    console.log(message);
    axios.post( URL_API,{
        chat_id: CHAT_ID,
        parse_mode:'html',
        text:message
    })
    .then((res)=>{
        this.phone.value="",
        this.name.value=""
        this.send.value="Повідомлення надіслано"
        setTimeout(() => {
            this.send.value = "Оставить заявку";
          }, 2000);
        })
        .catch((err)=>{
            console.warn(err);
        })
        .finally(()=>{
            console.log();   
        })
})
document.getElementById("popup__form_bottom").addEventListener("submit",function(e){
    e.preventDefault();
    let message = `<b>Заява з сайту</b>\n`
    message+= `<b>Телефон</b> ${this.phone.value}`
    console.log(message);
    axios.post( URL_API,{
        chat_id: CHAT_ID,
        parse_mode:'html',
        text:message
    })
    .then((res)=>{
        this.phone.value="",
        this.send.value="Повідомлення надіслано"
        setTimeout(() => {
            this.send.value = "Оставить заявку";
          }, 2000);
        })
        .catch((err)=>{
            console.warn(err);
        })
        .finally(()=>{
            console.log();   
        })
  
})