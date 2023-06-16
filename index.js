const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats;
}

function appendCat(name) {
    let copyOfCats = [...cats]
    copyOfCats = [...cats, name]
    return copyOfCats;
}

function prependCat(name) {
    let copyOfCats = [...cats]
    copyOfCats = [name, ...cats]
    return copyOfCats;
}

function removeLastCat() {
    let copyOfCats = [...cats]
    copyOfCats.pop()
    return copyOfCats;
}

function removeFirstCat() {
    let copyOfCats = [...cats]
    copyOfCats.shift()
    return copyOfCats;
}