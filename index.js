// const fs = require("fs");

// fs.writeFile("hello.txt", "Halo ini node js!", (err) => {
//     if(err) throw err;
//     console.log("File berhasil disimpan!");  
// })

// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// })


// var generateName = require("sillyname");
// import generateName from "sillyname"
// var sillyName = generateName();
// console.log(`Halo, nama aku ${sillyName}`);


// import {randomSuperhero} from "superheroes";
// var heroName = randomSuperhero();
// console.log(`Halo, nama aku ${heroName}`);

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{
        message : "Masukkan link dari linkedin kamu: ", 
        name: "url"
    }]).then((answer) => {
        var link = answer.url;
        var qr_svg = qr.image(link);
        qr_svg.pipe(fs.createWriteStream('linkedin.png'));
        fs.writeFile("url.txt", link, (err) => {
            if (err) {
                throw err;
            }
            console.log("Berhasil menyimpan linkedin!");
            
        });
})