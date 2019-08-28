
class BookComponent {
    //could also just pass through book
    //and use book.title, book.plot, book.imgFile
    constructor(title, plot, imgFile) {
        this.title = title;
        this.plot = plot;
        this.imgFile = imgFile;
        this.template = `
            <div class="card float-card">
                <img class="card-img-top" src="${this.imgFile}" alt="${this.title}>
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <a href="#" id="${this.title}" class="btn btn-primary">Show Description</a>
                </div>
            </div>`
    }
};

class BookListComponent {
    template = `<div>
                    ${new BookComponent("Leviathan Wakes", `Two hundred years after migrating into space, mankind is in turmoil. 
                    When a reluctant ship's captain and washed-up detective find themselves involved in the case of a missing girl, 
                    what they discover brings our solar system to the brink of civil war, and exposes the greatest conspiracy in human history.`, "Images/LeviathanWakes.jpg").template}
                    
                    ${new BookComponent("The Eye of the World", `The Wheel of Time turns and Ages come and go, leaving memories that become legend. Legend fades to myth, and even myth is 
                    long forgotten when the Age that gave it birth returns again. In the Third Age, an Age of Prophecy, the World and Time themselves hang in the balance. 
                    What was, what will be, and what is, may yet fall under the Shadow.`, "Images/eyeOfTheWorld.jpg").template}
                    
                    ${new BookComponent("Lands of Lost Borders", `A brilliant, fierce writer, and winner of the 2019 RBC Taylor Prize, makes her debut with this enthralling travelogue 
                    and memoir of her journey by bicycle along the Silk Road—an illuminating and thought-provoking fusion of The Places in Between, Lab Girl, and Wild
                    that dares us to challenge the limits we place on ourselves and the natural world.`, "Images/lostBorders.jpg").template}
                    
                    ${new BookComponent("Redwall", `Welcome to Mossflower Wood, where the gentle mice have gathered to celebrate a year of peace and abundance. 
                    All is well…until a sinister shadow falls across the ancient stone abbey of Redwall. It is rumored that Cluny is coming—Cluny, the terrible 
                    one-eyed rat and his savage horde—Cluny, who has vowed to conquer Redwall Abbey! The only hope for the besieged mice lies in the lost sword of the 
                    legendary Martin the Warrior. And so begins the epic quest of a bumbling young apprentice—a courageous mouse who would rise up, fight back…and 
                    become a legend himself.`, "Images/redwall.jpg").template}
                   
                    ${new BookComponent("Emma", `Beautiful, clever, rich—and single—Emma Woodhouse is perfectly content with her life and sees no need for either love or 
                    marriage. Nothing, however, delights her more than interfering in the romantic lives of others. But when she ignores the warnings of her good friend 
                    Mr. Knightley and attempts to arrange a suitable match for her protegee Harriet Smith, her carefully laid plans soon unravel and have consequences 
                    that she never expected. With its imperfect but charming heroine and its witty and subtle exploration of relationships, Emma is often seen as 
                    Jane Austen's most flawless work.`, "Images/emma.jpg").template}
                    </div>`

    // template = `${this.bookList.map(book => new BookComponent(book.title).template)}`

}
document.getElementById("root").innerHTML = `${new BookListComponent().template}`;

document.addEventListener("click", function (e) {

    if (e.target && e.target.id == "Leviathan Wakes") {
        if (document.getElementById("Leviathan Wakes").innerText == "Show Description") {
            document.getElementById("description").innerText = `Two hundred years after migrating into space, mankind is in turmoil. When a reluctant ship's captain and washed-up detective find themselves involved in the case of a missing girl, what they discover brings our solar system to the brink of civil war, and exposes the greatest conspiracy in human history.`;
            document.getElementById("Leviathan Wakes").innerText = "Hide Description";
            document.getElementById("Leviathan Wakes").style.backgroundColor = "red";
        } else {
            document.getElementById("description").innerText = "";
            document.getElementById("Leviathan Wakes").innerText = "Show Description";
            document.getElementById("Leviathan Wakes").style.backgroundColor = "blue";
        }
    }
    else if (e.target && e.target.id == "The Eye of the World") {
        if (document.getElementById("The Eye of the World").innerText == "Show Description") {
            document.getElementById("description").innerText = `The Wheel of Time turns and Ages come and go, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. In the Third Age, an Age of Prophecy, the World and Time themselves hang in the balance. What was, what will be, and what is, may yet fall under the Shadow.`;
            document.getElementById("The Eye of the World").innerText = "Hide Description";
            document.getElementById("The Eye of the World").style.backgroundColor = "red";
        } else {
            document.getElementById("description").innerText = "";
            document.getElementById("The Eye of the World").innerText = "Show Description";
            document.getElementById("The Eye of the World").style.backgroundColor = "blue";
        }
    }
    else if (e.target && e.target.id == "Lands of Lost Borders") {
        if (document.getElementById("Lands of Lost Borders").innerText == "Show Description") {
            document.getElementById("description").innerText = `A brilliant, fierce writer, and winner of the 2019 RBC Taylor Prize, makes her debut with this enthralling travelogue and memoir of her journey by bicycle along the Silk Road—an illuminating and thought-provoking fusion of The Places in Between, Lab Girl, and Wild that dares us to challenge the limits we place on ourselves and the natural world.`;
            document.getElementById("Lands of Lost Borders").innerText = "Hide Description";
            document.getElementById("Lands of Lost Borders").style.backgroundColor = "red";
        } else {
            document.getElementById("description").innerText = "";
            document.getElementById("Lands of Lost Borders").innerText = "Show Description";
            document.getElementById("Lands of Lost Borders").style.backgroundColor = "blue";
        }
    }
    else if (e.target && e.target.id == "Redwall") {
        if (document.getElementById("Redwall").innerText == "Show Description") {
            document.getElementById("description").innerText = `Welcome to Mossflower Wood, where the gentle mice have gathered to celebrate a year of peace and abundance. All is well…until a sinister shadow falls across the ancient stone abbey of Redwall. It is rumored that Cluny is coming—Cluny, the terrible one-eyed rat and his savage horde—Cluny, who has vowed to conquer Redwall Abbey! The only hope for the besieged mice lies in the lost sword of the legendary Martin the Warrior. And so begins the epic quest of a bumbling young apprentice—a courageous mouse who would rise up, fight back…and become a legend himself.`;
            document.getElementById("Redwall").innerText = "Hide Description";
            document.getElementById("Redwall").style.backgroundColor = "red";
        } else {
            document.getElementById("description").innerText = "";
            document.getElementById("Redwall").innerText = "Show Description";
            document.getElementById("Redwall").style.backgroundColor = "blue";
        }
    }
    else if (e.target && e.target.id == "Emma") {
        if (document.getElementById("Emma").innerText == "Show Description") {
            document.getElementById("description").innerText = `Beautiful, clever, rich—and single—Emma Woodhouse is perfectly content with her life and sees no need for either love or marriage. Nothing, however, delights her more than interfering in the romantic lives of others. But when she ignores the warnings of her good friend Mr. Knightley and attempts to arrange a suitable match for her protegee Harriet Smith, her carefully laid plans soon unravel and have consequences that she never expected. With its imperfect but charming heroine and its witty and subtle exploration of relationships, Emma is often seen as Jane Austen's most flawless work.`;
            document.getElementById("Emma").innerText = "Hide Description";
            document.getElementById("Emma").style.backgroundColor = "red";
        } else {
            document.getElementById("description").innerText = "";
            document.getElementById("Emma").innerText = "Show Description";
            document.getElementById("Emma").style.backgroundColor = "blue";
        }
    }
})
