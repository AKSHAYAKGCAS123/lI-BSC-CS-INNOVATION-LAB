const para="hello akshaya and ash"
const textmatch=para.match(/\b\w+\b/g);
console.log(textmatch.length);

const mobilenumber=9563256789;
const nummatch=/^[7-9]\d{9}/g;
if(nummatch.test(mobilenumber.toString())){
    console.log("matched")
}
else{
    console.log("mismatch pattern")

}
