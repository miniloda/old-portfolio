let button_state = "off";
document.getElementsByClassName("show")[0].addEventListener("click", function(){
    if (button_state == "off"){
    const target = document.getElementsByClassName("certificates__list")[0];
    console.log(target);
    const parent = document.createElement('div');
    parent.classList.add("certificates__list__item", "new-box");
    const child = document.createElement('img');
    child.setAttribute("src", "src/certificates/IBM.png");
    console.log(child)
    parent.appendChild(child);
    target.appendChild(parent);
    document.getElementsByClassName("show")[0].innerText = "Show Less";
    // document.getElementsByClassName("certificates__list__item")[2].animate([
    //     // keyframes
    //     { transform: 'translateY(0px)' },
    //     { transform: 'translateY(-300px)' }
    //   ], {
    //     // timing options
    //     duration: 1000,
    //     iterations: Infinity
    //   });
    button_state = "on";
    return true;
    } else{
        const target = document.getElementsByClassName("certificates__list")[0];
        const parent = document.getElementsByClassName("certificates__list__item");
        const lastSelect = parent[parent.length - 1];
        target.removeChild(lastSelect);
        document.getElementsByClassName("show")[0].innerText = "Show More";
        button_state = "off";
        return true;
    }
})