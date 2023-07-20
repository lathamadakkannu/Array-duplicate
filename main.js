var a=[89,45,34,89,65,48,45,34,78];
document.write("a=[89,45,34,89,65,48,45,56,78]"+"<br>"+"<br>");
var b=[];
a.sort();
let temp;
let c=[];
for(let i=0;i<a.length;i++){
	if(a[i]!==temp){
		b.push(a[i]);
		temp=a[i];
	}
	else{
		c.push(a[i]);
	}
}
document.write("original numbers ="+b+"<br>"+"<br>");
console.log(b);
document.write("duplicate numbers ="+c+"<br>"+"<br>");
console.log(c);