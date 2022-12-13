const theme = document.querySelector("#theme");

function themeclick() {
    theme.addEventListener("click", () => {
        theme.querySelector("span").classList.toggle("fa-moon");
        // theme.querySelector("span").classList.toggle("fa-solid");
    })
}

let sideopt = document.querySelectorAll('.sideopt');
// console.log(sideopt);
for(let i = 0;i<sideopt.length;i++) {
    sideopt[i].onclick = function() {
        let j = 0;
        while(j < sideopt.length) {
            sideopt[j++].className = "sideopt";
        }
        sideopt[i].className = "sideopt active"
    }
}

const home = document.getElementById("home");
const demandedbooks = document.getElementById("demanded-books");
const borrowedbooks = document.getElementById("borrowed-books");
const contentlist = document.querySelector(".sidebar").children[1];
const listhome = contentlist.children[0];
const listdemandedbooks = contentlist.children[1];
const listborrowedbooks = contentlist.children[2];

function setActiveClass(e,f) {
    if(e.getBoundingClientRect().top<=70 && e.getBoundingClientRect().bottom>=70) {
        if(f.className=="sideopt")
        f.className="sideopt active";
    }
    else {
        if(f.className=="sideopt active")
        f.className="sideopt";
    }
}

document.addEventListener("scroll", function() {
    setActiveClass(home,listhome);
    setActiveClass(demandedbooks,listdemandedbooks);
    setActiveClass(borrowedbooks,listborrowedbooks);
});

// document.querySelector(".sidebar").onmousemove = function() {
//     console.log("Over the sidebar");
//     document.querySelector(".main-content").style.overflow="hidden";
// };

let srbi = document.querySelectorAll('.search-results-bookinfo');
// console.log(sideopt);
for(let i = 0;i<srbi.length;i++) {
    srbi[i].onclick = function(e) {
        if(e.target != srbi[i].children[2] && e.target != srbi[i].children[2].children[0] && e.target != srbi[i].children[2].children[0].children[0]) {
            if(srbi[i].children[2].classList.contains("active")==false) {
                let j = 0;
                while(j < srbi.length) {
                    srbi[j].children[2].classList.remove("active");
                    srbi[j].children[1].lastElementChild.innerHTML = "Click to show options";
                    j++;
                }
                srbi[i].children[2].classList.add("active");
                srbi[i].children[1].lastElementChild.innerHTML = "Click to hide options";
            }
            else {
                srbi[i].children[2].classList.remove("active");
                srbi[i].children[1].lastElementChild.innerHTML = "Click to show options";
            }
        }
    }
}