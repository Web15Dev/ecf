/****************************************
** DOM
****************************************/

/**
 * Select one or more element
 * 
 * @param {*} selector 
 * @param {*} which 
 * @returns 
 */

function select(selector, which = "all") {
    let elements = document.querySelectorAll(selector);
    let size = elements.length;
    if (size === 1) return elements[0];
    if (size > 1) {
        if (which === "first") return elements[0];
        if (which === "last") return elements[size - 1];
        if (Number.isInteger(which) && elements[which] !== undefined) return elements[which];
        return elements;
    }
    return false;
}


function createElement(tag, options={}) {
    const element = document.createElement(tag);
    Object.entries(options).forEach(([key, value]) => {
        if (key === "class") addClass(element, value);
        if (key === "id") element.id = value; 
        if (key === "image" || key === "src") element.src = value; 
        if (key === "alt") element.alt = value; 
        if (key === "text") element.textContent = value;
        if (key === "inner") element.innerHTML = value;
        if (key === "href") element.href = value;
    })
    return element;
};

function appendChildTo(selectorChild, selectorParent=document.body) {
    selectorParent.appendChild(selectorChild);
}

/****************************************
** RELATED TO CLASS/STYLE
****************************************/

/*---------------------------------------
-- CLASS
---------------------------------------*/

/**
* 
* Check if element has one or more class defined
* 
* @param {*} selector  
* @param {*} which 
* @param {*} classCheck 
**/
function hasClass(selector, classCheck, which = "all") {
    let item = selector || select(selector, which);
    item = item.length > 1 ? [...item] : [item];

    for (const i in item) {
        if (item[i].classList.contains(classCheck)) {
            return true;
        }
    }
    return false;
}

/**
* 
* Add class to one or more element
* 
* @param {*} selector 
* @param {*} which 
* @param {*} classAdd 
**/
function addClass(selector, classAdd, which = "all") {
    let item = typeof selector != String ? selector : select(selector, which);
    const adapted_list = classAdd.split(" ");
    item = item.length > 1 ? [...item] : [item];

    for (const i in item) {
        for (const j in adapted_list) {
            if (!item[i].classList.contains(adapted_list[j])) {
                item[i].classList.add(adapted_list[j]);
            }
        }
    }
}

/**
* 
* Remove class to one or more element
* 
* @param {*} selector 
* @param {*} which 
* @param {*} classRemove 
**/
function removeClass(selector, classRemove, which = "all") {
    let item = typeof selector != String ? selector : select(selector, which);
    const adapted_list = classRemove.split(" ");
    item = item.length > 1 ? [...item] : [item];

    for (const i in item) {
        for (const j in adapted_list) {
            if (item[i].classList.contains(adapted_list[j])) {
                item[i].classList.remove(adapted_list[j]);
            }
        }
    }
}

/**
* 
* Toggle one or more class
* 
* @param {*} selector 
* @param {*} which 
* @param {*} classToggle 
**/
function toggleClass(selector, classToggle, which = "all") {
    let item = typeof selector != String ? selector : select(selector, which);
    const adapted_list = classToggle.split(" ");
    item = item.length > 1 ? [...item] : [item];

    for (const i in item) {
        for (const j in adapted_list) {
            item[i].classList.toggle(adapted_list[j]);
        }
    }
}

/**
* 
* Check if element has one or more class defined and add or remove it
* 
* @param {*} selector 
* @param {*} which 
* @param {*} klass 
**/
function checkAndToggleClass(selector, klass, which = "all") {
    let item = typeof selector != String ? selector : select(selector, which);
    const adapted_list = klass.split(" ");
    item = item.length > 1 ? [...item] : [item];

    for (const i in item) {
        for (const j in adapted_list) {
            if (hasClass(item[i], which, adapted_list[j])) {
                removeClass(item[i], which, adapted_list[j]);
            }
            else {
                addClass(item[i], which, adapted_list[j]);
            }
        }

    }
}

/**
* 
* Add class and remove class to the element
* 
* @param {*} selector 
* @param {*} which 
* @param {*} classAdd 
* @param {*} classRemove 
**/
function addAndRemoveClass(selector, classAdd, classRemove, which = "all") {
    let item = typeof selector != String ? selector : select(selector, which);
    item = item.length > 1 ? [...item] : [item];

    for (const i in item) {
        addClass(item[i], which, classAdd);
        removeClass(item[i], which, classRemove);
    }
}

/*---------------------------------------
-- STYLE
---------------------------------------*/

/**
* 
* Add one or more style
* 
* @param {*} selector 
* @param {*} which 
* @param {*} styleOptions 
*/
function addStyle(selector, which = "all", styleOptions) {
    let item = typeof selector != String ? selector : select(selector, which);
    item = item.length > 1 ? [...item] : [item];

    Object.entries(styleOptions).forEach(([key, value]) => {
        for (const i in item) {
            item[i].style[key] = value;
        }
    })
}