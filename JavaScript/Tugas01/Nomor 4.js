/*
No 4. Dari data dibawah ini

let data = {
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
address: 
{
street: "Kulas Light",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874",
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
}

a. Ubahlah data  tersebut menggunakan spread operator menjadi: 
name: nama anda
email: email anda
hobby: hobi anda

b. Ambilah data “street dan city” tersebut menggunakan destructuring
*/

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let newData = { ...data };
newData.name = "Ervin Nurhediyanto";
newData.email = "cafeinai311@gmail.com";
// newData.hobby

let {street, city} = newData.address;

console.log(data);
console.log(newData);
console.log(`
Street : ${street}
City : ${city}
`);