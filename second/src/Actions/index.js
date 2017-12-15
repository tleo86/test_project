export const showBigModal = ()=>{
 alert ('покажи Модалку');
 return {
   type: "MODAL_SHOW",
   payload: window
 }

};
