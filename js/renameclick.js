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


fin.View.addEventListener("created", function(event) {
    stopNavigation()
    let viewOptions = {
        url: '',
        printName: 'News',
        processAffinity: 'mw_1'
    }
        
    
    fin.Platform.getCurrentSync().createView(viewOptions, fin.me.identity)
    // let a = document.getElementsByTagName('a');
    // for (let i=0; i<a.length; i++){
    //     a[i].setAttribute('target', '_blank');
    // }
}
);


async function stopNavigation() {
    const view = await fin.View.getCurrent()
    return await view.stopNavigation();
}


