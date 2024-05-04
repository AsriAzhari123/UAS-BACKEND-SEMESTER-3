const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Backpacks
  const alattulis_titles = [
    "buku tulis",
    "pensi",
    "penghapus",

  ];
  const alattulis_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/9/449ba515-3309-4c3b-9112-7195e0380030.jpg",
    "https://images.tokopedia.net/img/cache/900/product-1/2019/1/17/47610274/47610274_c81f3de1-d7bc-4540-8082-2218088dd348_700_700.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/22/e27709ae-6d3a-4b45-a0b6-3a1d26a4a7d2.jpg",
  ];

  //--------------------Travel Bags
  const electronik_titles = [
    "DIGITAL SMART LED LG 32 INCH USB HDMI - 32 LQ 630",
    "POLYTRON PLD 32 TV 1855 + SPK DVB T2 DIGITAL LED TV 32",
    "LED SAMSUNG 32 INCH SMART TV WIFI BROWSER INTERNET 32T4500 T 4500 UA",
  ];

  const electronik_imgs = [
   "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/20/46423630-fe34-4dd2-9889-eb825e437235.jpg",
   "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/6/27/7ff48caf-dac9-4340-8bdb-5e384cc66b0b.jpg",
   "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/1/11/b10d30be-f52e-45d3-8eb0-bb137fac676c.jpg",
  ];

  //--------------------Briefcases
  const Baju_titles = [
   "Baju OffWhite",
   "Baju PDIP",
   "Baju Pemuda Pancasila",
  ];

  const Baju_imgs = [
    "https://images.tokopedia.net/img/cache/900/product-1/2019/7/3/500873023/500873023_23d8514e-1e2a-421e-8abb-b6eeaa1e6ba7_1512_1512.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/5/f37ec447-9f15-49c6-af97-09463f4ee766.jpg",
    "https://images.tokopedia.net/img/cache/900/product-1/2017/6/16/19802343/19802343_73e1ec3d-fda6-4b76-be04-67300ac4e091_1300_1733.jpg"
  ];

  //--------------------Mini Bags
  const Laptop_titles = [
    "HP Victus 15-fb0011AX Ryzen 5 5600H RX6500M 512GB SSD 16GB Win11+OHS - Mica Silver",
    "Macbook Pro Touchbar 2019 13 inch Space Grey Mulus - i5 1.4/8/128GB",
    "LAPTOP INFINIX INBOOK X2 i7-1065G7 8G 512G INTEL IRIS PLUS 14 FHD W11",
  ];
  const Laptop_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/27/6de08c01-cea8-4e77-8fac-41b4dc5e54df.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/28/f00a2f5c-8c42-4165-8467-0c2a54e92c79.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/23/e9130fcf-3ff0-4a5a-afb8-f2ddfe83c42c.jpg",
  ];

  //--------------------Large Handags

  const Sepatu_titles = [
    "Air Jordan 1 Mid Light Smoke Grey Anthracite",
    "Adidass Yeezy 350 Boost V2 Beluga FULL REFLECTIVE",
    "Sepatu Sneakers Converse All Star Petir High Black White",
  ];
  const Sepatu_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/22/e2bff5b6-0e9f-4ce1-8fa9-6ba5f0dcdf09.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/7/c589c12a-525f-4821-81ef-928b04e8bdfc.jpg",
    "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/1/3/66e6c222-b96c-4957-b3e8-baa2ec6b9fb8.jpg",
  ];

  //-----------------------Purses
  const Sambal_titles = [
    "SAMBAL CUMI ASIN/PETAI/BAJAK EBI / TERI /ANEKA SAMBEL MR CRISPY - SAMBAL BAJAKEBI",
    "SAMBAL MR CRISPY SAMBAL BAWANG TRASI BALADO RICA HIJAU THAI - SAMBAL TRASI",
    "ABC Saus Sambal Asli 1 kg",
  ];
  const Sambal_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/5/31/5291c45e-892d-4d76-862a-3f16d2ba1d68.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/6/25/b04a5415-7927-4b88-abba-4cc5893bba37.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/23/88e57684-7e09-407c-881a-48d08e9fa9c2.jpg"
  ];

  //-----------------Totes

  const Handphone_titles = [
    "Samsung Galaxy S21 FE 8/128 8/256 GB RAM 8 ROM 128 256 Handphone - Green, 8/256GB",
    "Samsung Galaxy A52 8/128 8/256 GB Kamera 4K RAM 8 ROM 128 256 Resmi - Awesome Black, A52 8/256 GB",
    "Xiaomi Redmi 9A Ram - 4/128GB- Garansi 1 Tahun Helio G25 13MP AI - Biru, 4/64"
  ];
  const Handphone_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/17/12315c68-8846-4f2d-a745-362eff5bf4ae.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/31/dec1018c-0904-4a57-a12b-9766c87dd248.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/25/790421fe-97da-4dc2-bc10-006ce7eaff6d.jpg"
  ];

  const Aksesoris_titles = [
    "Gelang Karet",
    "Cincin Korea Titanium Panlandwoo Anti Karat - Demi - 4, Gold",
    "Amazfit Bip 3 Pro Smartwatch 1.69 Touch Screen, GPS jam tangan SpO2 - Hitam"
  ];
  const Aksesoris_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/1/18/3b1d2a10-f3b7-479c-ad83-96fbe8ebc0b7.jpg",
    "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/1/14/3b5de135-6bca-40c1-bb1e-a538f3f014c2.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/14/196ae557-78b9-4b73-bfc0-a74eda4f19e6.jpg"
  ]

  const Komputer_titles = [
    "VGA ASUS ROG Strix RTX 4080 16GB GDDR6X OC Edition",
    "PROCESSOR INTEL CORE I9 13900 5.60 GHz BOX SOCKET 1700",
    "ASUS ROG STRIX B560-F GAMING WIFI | B560F ATX MOTHERBOARD"
  ]
  const Komputer_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/11/3f90565b-87e2-43f8-b854-1d2622be7fb0.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/2/1fb6e24b-6449-4a36-bb00-df748372fd78.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/22/3818a234-6c8a-40cc-8e11-0e7e639d941b.jpg"
  ]

  const Figure_titles = [
    "ACTION FIGURE HATSUNE MIKU VOCALOID SAKURA CHERRY BLOSSOM COLLECTION - No. 6",
    "Nendo 1560 Anime Chainsaw Man Nendoroid 1580 Power Denji Figure - Power",
    "Luffy Gear 5 Sun God Nika Action Figure One Piece With Effect - 21CM GOLD BOX"
  ]
  const Figure_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/25/6b3eccf0-2ea9-4cbc-ba24-1be90f9f3336.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/17/2acc8089-9594-4e9a-bc94-eac721fdabd9.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/26/7de65025-20dc-4088-9ca7-0e31ef6a9a7a.jpg"
  ]

  const Kaset_titles = [
    "kaset ps4 spellforce 3 reforced/ ps4 spellforce 3 reforced",
    "kaset ps4 final fantasy 7 remake/ ps4 final fantasy 7 remake std reg3",
    "kaset ps4 yakuza like a dragon/ ps4 yakuza like a dragon"
  ]
  const Kaset_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/23/4c9ffb1c-7251-43c0-9359-2f82f2d3bd7c.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/23/fd41762a-b9b8-4e69-a134-a59a39097677.jpg",
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/23/e7b31efd-9607-4d89-9c2a-5a8ad09a8f34.jpg"
  ]
  const Game_titles = [
    "Game Stick 4K Game Console Wireless Gamepad HDMI TV Retro Video Game - 64GB 10K Game",
    "Gameboy 2 Player Retro Mini 400 in 1 SUP / Game Box Portable Game Boy - Hitam",
    "Wanle Gameboy Powerbank 8000 Mah 416 in 1 Game BoY Retro Import - Putih"
  ]
  const Game_imgs = [
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/26/b4e17499-ad98-4135-868c-21629f81580b.jpg",
    "https://images.tokopedia.net/img/cache/900/product-1/2020/7/10/47240405/47240405_ff5409cd-774a-456e-9700-5d8f111e9c5b_2048_2048",
    "https://images.tokopedia.net/img/cache/900/attachment/2020/4/3/158589591676325/158589591676325_eb121df8-ddab-4ade-880e-6569520698cd.png"
  ]
  const Game_desk = [

  ]

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10000, max: 10000000 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(alattulis_titles, alattulis_imgs, "AlatTulis");
  await seedProducts(Baju_titles, Baju_imgs, "Baju");
  await seedProducts(electronik_titles, electronik_imgs, "Electronik");
  await seedProducts(Laptop_titles, Laptop_imgs, "Laptop");
  await seedProducts(Sepatu_titles,Sepatu_imgs,"Sepatu");
  await seedProducts(Sambal_titles, Sambal_imgs, "Sambal");
  await seedProducts(Handphone_titles, Handphone_imgs, "Handphone");
  await seedProducts(Aksesoris_titles, Aksesoris_imgs, "Aksesoris");
  await seedProducts(Komputer_titles, Komputer_imgs, "Komputer");
  await seedProducts(Figure_titles, Figure_imgs, "Figure");
  await seedProducts(Kaset_titles, Kaset_imgs, "Kaset");
  await seedProducts(Game_titles, Game_imgs, "Game");


  await closeDB();
}

seedDB();
