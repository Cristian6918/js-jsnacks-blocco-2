console.log('js ok');
const firstArray = ['Mario', 'Carlo', 3, 'element', 'another element', 2, 6, 32, 2];
const secondArray = ['Mario', 'Carlo', 3, 'element', 'another element'];


if (firstArray.length < secondArray.length) {
    console.log(`Le grandezze dei due Array prima: Primo ${firstArray.length} Secondo ${secondArray.length}`);
    while (firstArray.length < secondArray.length) {
        firstArray.push(prompt('inserire dato:'));
    }
    console.log(`Le grandezze dei due Array Dopo: Primo ${firstArray.length} Secondo ${secondArray.length}`);
} else if (firstArray.length > secondArray.length) {
    console.log(`Le grandezze dei due Array prima: Primo ${firstArray.length} Secondo ${secondArray.length}`);
    while (firstArray.length > secondArray.length) {
        secondArray.push(prompt('inserire dato:'));
    }
    console.log(`Le grandezze dei due Array Dopo: Primo ${firstArray.length} Secondo ${secondArray.length}`);
} else {
    alert("I due Array sono della stessa misura");
}
