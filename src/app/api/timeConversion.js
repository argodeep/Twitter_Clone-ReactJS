export default function calculateTime(date) {
    let now = new Date().getTime();
     let time = new Date(date).getTime();
    //  let timeLocale = time - new Date().getTimezoneOffset() * 60 * 1000
     let diff = (now - time) / 1000;
     if (diff <= 59) {
       let show = diff.toFixed() + ' Sec';
       return show;
     } else if (diff >= 59 && diff < 120) {
       let show = (diff / 60).toFixed() + '  Min';
       return show;
     } else if (diff >= 119 && diff < 3600) {
       let show = (diff / 60).toFixed() + '  Mins';
       return show;
     } else if (diff >= 3600 && diff < 3600 * 2) {
       let show = (diff / 60 / 60).toFixed() + ' Hr';
       return show;
     } else if (diff >= 3600 * 2 - 1 && diff < 3600 * 24 - 1) {
       let show = (diff / 60 / 60).toFixed() + ' Hrs';
       return show;
     } else if (diff >= 3600 * 24) {
       return new Date(date).toDateString().slice(4, 10)
     } 
    return ''
   }