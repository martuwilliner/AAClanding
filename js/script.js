window.onload = () => {
    const pops = Array.from(document.querySelectorAll(".pop"))
    const participantes = Array.from(document.querySelectorAll("#participantes .bio"))

    showPop = (...args) =>{
        let pop,data;
        if (args.length > 1) {
            [pop, data] = args;
            console.clear();
            console.log(pop,data);
            console.log();
            let items = data.items.split(" / ")
            let tags = data.tags.split(" / ")
            pop.querySelector("#name").innerHTML = data.name;
            pop.querySelector("#avatar").setAttribute("src",data.avatar);
            pop.querySelector("#localtion").innerHTML = data.localtion;
            pop.querySelector("#linkedin").setAttribute("href",data.linkedin);
            pop.querySelector("#content").setAttribute('class','');
            pop.querySelector("#content").classList.add(data.theme);
            pop.querySelector("#items").innerHTML = '';
            pop.querySelector("#items").innerHTML = '';
            items.forEach(item => {
                let listItem = document.createElement("li")
                listItem.innerHTML = item;
                listItem.classList.add("item");
                pop.querySelector("#items").appendChild(listItem);
            })
            tags.forEach(tag => {
                let listItem = document.createElement("li")
                listItem.innerHTML = tag;
                listItem.classList.add("item");
                pop.querySelector("#tags").appendChild(listItem);
            })
            
            if(!pop.classList.contains('active')){
                pops.forEach(pop => pop.classList.remove("active"));
                pop.classList.add('active');
            }else{
                pops.forEach(pop => pop.classList.remove("active"));
            }
            //select.classList.add("active")
        } else {
            [pop] = args;
            if(!pop.classList.contains('active')){
                pops.forEach(pop => pop.classList.remove("active"));
                pop.classList.add('active');
            }else{
                pops.forEach(pop => pop.classList.remove("active"));
            }
        }
    }

    participantes.forEach( p => {
        let parent = p.parentElement;
        let link = p.querySelector("a");
        let pop = parent.querySelector(".pop");
        link.onclick = (e) => {
            e.preventDefault();
            const target = e.target; 
            const item = target.parentElement;
            const pop = item.parentElement.querySelector(".pop")
            const dataset = item.dataset;
            showPop(pop,dataset)
        }
        pop.onclick = (e) => {
            e.preventDefault();
            const target = e.target;
            if(target.classList.contains('active')){
                target.classList.remove("active");
            }
        }

    })


}