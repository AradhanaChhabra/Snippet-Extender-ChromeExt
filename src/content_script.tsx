// replace the value of the element
async function tryReplace(element: any, starting: number, ending: number) {
    // ending char is exluded
    var variableName = element.value.substring(starting + 1, ending)
    var value;
    chrome.storage.sync.get(variableName, function (result) {
        let key_value = Object.entries(result)[0]
        // if the variableName key is present in storage
        if (key_value != undefined) {
            console.log("bro");
            element.value = element.value.substring(0, starting) + key_value[1] + element.value.substring(ending + 1,
                element.value.length);
            value = true;
        }
        else {
            value = false;
        }
    })
    return value;
}

async function tryParse(element:any) {
    var i = 0;
    var ifReplaced;
    while (i < element.value.length) {
        if (element.value[i] == "<") {
            let j = i + 1
            // all the values inside the input enclosed with arrows will be replaced
            while (j < element.value.length && element.value[j]!= ">") { j += 1 }
            if (j  != element.value.length) {
                ifReplaced = await tryReplace(element, i, j)
            }
        }
        i += 1
    }
    // remove the period after replacing
    if (ifReplaced && element.value[element.value.length-1] == ".") {
        element.value = element.value.substring(0, element.value.length-1)
    }
}

const addListenerToType=(type:string)=> {
    var elements = document.querySelectorAll(type)
    for (let x=0; x<elements.length; x++) {
        let element = elements[x]
        try {
            // Unlike the keypress event, the keydown event is fired for all keys when a key is pressed.,
            // regardless of whether they produce a character value.
            element.addEventListener('keydown', function(event:any) {
                if (event.key == ".") {
                    tryParse(element);
                }
            })
        }
        catch {
        }
    }
}

function addListenersToTypes(types: string[]) {
    types.forEach(type => addListenerToType(type))
}

function onInterval(types:string[],lengths:number[]) {
    var new_lengths = types.map(type => document.querySelectorAll(type).length)
    // whenever node elements get updated
    for (let x=0; x<new_lengths.length; x++) {
        if (new_lengths[x] != lengths[x]) {
            lengths[x] = new_lengths[x]
            addListenerToType(types[x])
        }
    }
}
window.onload = function() {
    const types = ["input","textarea"]
    const lengths = types.map(type => document.querySelectorAll(type).length)
    addListenersToTypes(types)
    // continues calling the function until clearInterval() is called, or the window is closed.
    setInterval(() => onInterval(types, lengths), 5000)
    
}
