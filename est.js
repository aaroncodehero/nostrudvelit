let obj = {a: 1, b: 2, c: 3};
for (let key in node_each(obj)) {
    console.log(key, obj[key]);
}
