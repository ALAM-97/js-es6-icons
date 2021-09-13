// FUNCTIONS
const printIcons = (arr, container) => {
    container.innerHTML = "";
    arr.forEach(
        (element) => {
            const {name, family, prefix, color} = element;

            container.innerHTML += 
            `
            <div class="single-icon">
                <i class="${family} ${prefix}${name}" style = "color: ${color}"></i>
                <div class="icon-name">${name}</div>
            </div>
            `
        }
    );
};

const addIcons = (arr, container) => {
    arr.forEach(
        (element) => {
            const { name, family, prefix, color } = element;

            container.innerHTML +=
                `
            <div class="single-icon">
                <i class="${family} ${prefix}${name}" style = "color: ${color}"></i>
                <div class="icon-name">${name}</div>
            </div>
            `
        }
    );
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// PROGRAM  

const icons = [
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
];


const container = document.getElementById("js-icon");

const colors = {
    food: "red",
    animal: "green",
    beverage: "yellow"
}

// Milestone 1
// Partendo dalla struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
printIcons(icons, container);

// Milestone 2
// Coloriamo le icone per ogni tipo
const coloredIcons = icons.map(
    (element) => {
        return {
            ...element,
            color: colors[element.category]
        };
    }
);

printIcons(coloredIcons, container);

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone.
const categories = [];
coloredIcons.forEach(
    (element) => {
        if ( categories.includes(element.category) == false) {
            categories.push(element.category);
        }
    }
);

const categoryOption = document.getElementById("category");

categories.forEach(
    (element) => {
        categoryOption.innerHTML += `<option value="${element}">${capitalizeFirstLetter(element)}</option>`;
    }
);

categoryOption.addEventListener("change",
    function() {
        const filteredIcons = coloredIcons.filter(
            (element) => {
                if (categoryOption.value == element.category || categoryOption.value == "") {
                    return true;
                }
                return false;
            }
        )  
        printIcons(filteredIcons, container);
    }
);

// BONUS 2
// Aggiungo la possibilità di inserire nuove icone

const createBtn = document.getElementById("create");

const userInputIcon = [];

createBtn.addEventListener("click",
    function () {
        const inputName = document.getElementById("input-name").value;
        const inputFamily = document.getElementById("input-family").value;
        const inputPrefix = document.getElementById("input-prefix").value;
        const inputCategory = document.getElementById("input-category").value;
        userInputIcon.push(
            {
                name: inputName,
                family: inputFamily,
                prefix: inputPrefix,
                category: inputCategory
            }
        );
        const userInputColoredIcons = userInputIcon.map(
            (element) => {
                return {
                    ...element,
                    color: colors[element.category]
                };
            }
        );
        addIcons(userInputColoredIcons, container);
    });









