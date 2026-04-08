console.log('hello');

document.cookie = "username=raninnnn";
document.cookie = "email=rabbbbbbni@zz.fr";
document.cookie = "password=password";


<script>alert("Bonjour le monde !");</script>


//
// function parseCookies() {
//     const cookieString = document.cookie || "";
//     return cookieString.split(";").reduce((cookies, pair) => {
//         const [name, value] = pair.split("=").map(c => c.trim());
//         if (name) {
//             cookies[decodeURIComponent(name)] = decodeURIComponent(value || "");
//         }
//         return cookies;
//     }, {});
// }
//
// let dataCookies = parseCookies();
//
// const url = "http://localhost:4000/api/auth/register";
//
// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         username: dataCookies['username'],
//         email: dataCookies['email'],
//         password: dataCookies['password'],
//     }),
// });
//
//
//
//


/** @info
 * A coller dans le input description pour la demo
 * */

// <script>
// const p = document.querySelectorAll('p');
//
// for (const e of p) {
//     e.style.color = 'red';
// }
//
// </script>
