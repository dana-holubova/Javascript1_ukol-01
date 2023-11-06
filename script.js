const krestniJmeno = prompt("Zadejte vaše křestní jméno bez diakritiky: ")
const prijmeni = prompt("Zadejte vaše příjmení bez diakritiky: ")

const krestniJmenoZkratka = krestniJmeno.toLowerCase().trim().slice(0, 3)

const prijmeniZkratka = prijmeni.toLowerCase().trim().slice(0, 4)

console.log(krestniJmenoZkratka)
console.log(prijmeniZkratka)

document.body.innerHTML += `${prijmeniZkratka + krestniJmenoZkratka}@fit.cvut.cz`

