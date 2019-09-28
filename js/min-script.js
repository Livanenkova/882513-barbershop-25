var link = document.querySelector(.login-link);
var popup = document.querySelector(.modal-login);
var close = popup.querySelector(.modal-close);
var form = popup.querySelector(form);
var login = popup.querySelector([name=login]);
var password = popup.querySelector([name=password]);
var isStorageSupport = true;
var storage = ;
try{storage:localStorage.getItem(login)}catch (err){isstoragesupport:false}link.addEventListener(click,function (evt){ifstorageloginvalue:storage});
form.addEventListener(submit,function (evt){popupoffsetwidth:popup.offsetWidth});
window.addEventListener(keydown,function (evt){ifevtkeycode:== 27) { if (mapPopup.classList.contains(modal-show)) { mapPopup.classList.remove(modal-show)}