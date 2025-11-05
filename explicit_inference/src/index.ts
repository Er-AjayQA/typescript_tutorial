function add(a: number, b: number, c: any) {
  return `${a + b}, This is ${c}`;
}

console.log(add(50, 3, true));

function processValue(value: unknown) {
  if (typeof value === "string") {
    return `Converted to Uppercase ${value.toUpperCase()}`;
  }

  if (Array.isArray(value)) {
    return `Length of the array is ${value.length}`;
  }
}

console.log(processValue("Hello World!"));
console.log(processValue([12, 23, 12, 32, "Ajay"]));

let val: string[] = [];
console.log(val.push("Vijay"));
console.log(val.push(""));

console.log(val);
