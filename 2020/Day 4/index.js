const input = require(`./input.json`);
let count = 0;

for (i = 0; i < input.length; i++) {
    const byr = parseInt(input[i].byr);
    const iyr = parseInt(input[i].iyr);
    const eyr = parseInt(input[i].eyr);
    const hgt = input[i].hgt;
    const hcl = input[i].hcl;
    const ecl = input[i].ecl;
    const pid = input[i].pid;
    let hgts = false;
    const eclarr = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

    if (hgt) {
    if ((hgt.endsWith("cm") && parseInt(hgt) >= 150 && parseInt(hgt) <= 193) || (hgt.endsWith("in") && parseInt(hgt) >= 59 && parseInt(hgt) <= 76)) hgts = true;
    }
    if ((byr >= 1920 && byr <= 2002) && (iyr >= 2010 && iyr <= 2020) && (eyr >= 2020 && eyr <= 2030) && (hgts) && (/^#[0-9a-f]{6}$/.test(hcl)) && eclarr.includes(ecl) && (pid && pid.match(/^[0-9]{9}$/))) count++;
}
console.log(count);