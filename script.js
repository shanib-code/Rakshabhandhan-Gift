alert ("For sisters ONLY")
//alert("CLICK or HOVER to see the cool effect")
//alert ("🙂Please Upvote if you like it🙂")
alert ("Made with ❤️ by Shanib")

alert("FOR WHOM WHO DON'T KNOW WHAT IS RAKSHABANDHAN 👇 \n\n\n\nRaksha Bandhan is an Indian festival celebrated to symbolize the bond between a brother and sister. The sister ties a sacred thread, called a Rakhi, on her brother's wrist as a symbol of protection, and the brother vows to protect her. It's a day filled with love, gifts, and promises 😇😇");

alert("Don't forget to scroll and get your gift");

window.onload = function () {
let isSis = document.getElementById("agreeAsSister");
let viewButton = document.getElementById("viewButton");

viewButton.disabled = true;

isSis.addEventListener("click", () => {
    viewButton.disabled = !viewButton.disabled
});


document.getElementById("yourGift").disabled = true;


}