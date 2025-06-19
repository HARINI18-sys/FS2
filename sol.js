let colors = ["Red", "Green", "Blue", "Yellow", "Violet"];
console.log(" Original colors:");
console.log(colors);
colors.push("Indigo"); 
console.log("After push :");
console.log(colors);
colors.pop();
console.log("After pop :");
console.log(colors);
colors.shift(); 
console.log(" After shift :");
console.log(colors);
colors.unshift("Orange");
console.log(" After unshift:");
console.log(colors);
colors.splice(2, 1, "lilac"); 
console.log(" After splice:");
console.log(colors);
console.log("access using loop:");
for (let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
