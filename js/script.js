// typing Animation
var typed = new Typed(".typing",{
    strings:["","UI Designer","Graphic Designer","Web Developer","App Developer"],
    typeSpeed:120,
    BackSpeed:90,
    loop:true
})

const nav = document.querySelector(".nav")
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;

for (let i=0; i<totalNavList; i++){
    // console.log(navList[i])
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){

        removeBackSection();
        
        for(let j=0; j<totalNavList; j++){

            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                // allSections[j].classList.add("back_section")
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 961){
            asideSectionTogglerBtn()
        }
    })
}
function removeBackSection(){

    for(let i=0; i<totalSections; i++){
        allSections[i].classList.remove("back_section")
    }
}
function addBackSection(num){
    allSections[num].classList.add("back_section")
}
function showSection(element){

    for(let i=0; i<totalSections; i++){
        allSections[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1]
    document.querySelector("#" + target).classList.add("active")

}
function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1]
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire_me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this)
    updateNav(this)
    removeBackSection();
    addBackSection(sectionIndex); 
})

const navTogglerBtn = document.querySelector(".nav_toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", ()=>{
          asideSectionTogglerBtn(); 
      })

      function asideSectionTogglerBtn(){
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
          for(let i=0; i<totalSections; i++){
              allSections[i].classList.toggle("open")
          }
      }