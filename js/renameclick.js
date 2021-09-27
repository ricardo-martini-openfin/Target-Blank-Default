// const tab = document.title

// document.addEventListener("click", (e)=>{
//     const tabTitle = document.querySelector(".lm_title")
// if (e.target === tabTitle){
//     tabRename()
//     console.log(tab)
// } else {
//     return 1
// }
// })


// function tabRename(e){
//     const tabTitle = document.querySelector(".lm_title")
    
//     const input = e.target.value
//     tabTitle.innerHTML= input
// }


// fin.View.addEventListener("created", function(event) {
//     stopNavigation()
//     let viewOptions = {
//         url: '',
//         printName: 'News',
//         processAffinity: 'mw_1'
//     }
        
    
//     fin.Platform.getCurrentSync().createView(viewOptions, fin.me.identity)
//     // let a = document.getElementsByTagName('a');
//     // for (let i=0; i<a.length; i++){
//     //     a[i].setAttribute('target', '_blank');
//     // }
// }
// );

// async function click_me(event) {
//     // let a = document.getElementsByTagName('a');
//     // for (let i=0; i<a.length; i++){
//     //     a[i].setAttribute('target', '_blank');
//     // }
//     // stop the browser automatically opening a new window
//     event.preventDefault();
//     // alert('here');
//     // window.location = event.target.href;
//     // do whatever you want with the url
//     const { identity } = await fin.me.getCurrentWindow();
//     const url = event.target.href;
//     fin.Platform.getCurrentSync().createView({url}, identity);
// }

// async function stopNavigation() {
//     const view = await fin.View.getCurrent()
//     return await view.stopNavigation();
// }


let a_elements = Array.from(document.getElementsByTagName('a'));

console.log(a_elements)
a_elements.forEach(addEventListener("click", click_me))


async function click_me(event) {
    // stop the browser automatically navigating
    event.preventDefault();
    // alert('here');
    // window.location = event.target.href;
    // do whatever you want with the url
    const { identity } = await fin.me.getCurrentWindow();
    const url = event.target.href;
    fin.Platform.getCurrentSync().createView({url}, identity);
}