const quantCateg = document.querySelector('#categories');

console.log('Number of categories:', quantCateg.children.length);

const nameItem = document.querySelector('.item');
console.log('Category:', nameItem.firstElementChild.textContent);

const descCateg = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesElts.length}`);
descCateg.forEach((element) => {
    return console.log(`Category: ${element.querySelector("h2").textContent}
Elements: ${element.querySelectorAll("li").length}`);
})