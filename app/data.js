const allPosts= [
    {
        id: 1,
        timeAgo: "1 day ago",
        status: `সাদা মেঘ ☁ 
        লোকেশনঃ- বসুন্ধরা আবাসিক এলাকা। 
        Note 6 pro max`,
        image: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/347436876_651114033720968_1137642128257300031_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHk-3PCwUWsiuTUBuomRXDhPHsrbKfBmZk8eytsp8GZmV9J1GfVJleJJo2LdhUxyO8QVZZipNnxrCQYwYIhUNxx&_nc_ohc=CDkpSh7EFTsAX_PfuJ4&_nc_oc=AQkgjLw_TzgSH7A6fBeyUQ_ttljsPaLtPLtx1R0qxRd8jelwOtw3mewQDj9J_F2N_-8&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfAJCjiEyecKc13lcNu4eeQZvDYhdi3ehork9sj3FgrmqA&oe=64A7BE13",
        
        like: 20,
        comment: 10,
        author:[
            {
                name:"The Hossain Bro",
                photo:"https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/353623712_638366924995679_8466779813011989396_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGFJFvg3mHpB8bF5yT4VOiCVJfTsLRSt6dUl9OwtFK3p8EsRu-latKROrRCDjcRCf0SXbQuc_RjWTJhjoVETE_y&_nc_ohc=m36H07tlxx8AX8zcCnh&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfBI-Xt7DtSbKZSbk1ZJQiq3ja6wPjy8DVOntbHhPju_ag&oe=64A745C6"
            }
        ]
    },
    
    {
        id: 2,
        timeAgo: "23 hours ago",
        status: `HELLO FRIENDS 💝`,
        image: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/357702032_140148152428071_6875199716743839088_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF6_FKVNFrreNvRcDOTUyT6Eh_eISZQDD4SH94hJlAMPtBL3k1gbGHEjjxKMDnuR75yE9enpGqYOnAr21iBMkoq&_nc_ohc=UEPoaTnE3wIAX84yjDO&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfDOQfH5cyjBX7LNaK5yViEgLSLPaVHewePD6trtqB2gKA&oe=64A6EC70",
        
        like: 15,
        comment: 5,
        author:[
            {
                name:"শিরিন শিলা",
                photo:"https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/349573424_631965171858101_8607426934351773442_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGHSZb3919dQI1jwz5wkpm7i_2qGUVC-fuL_aoZRUL5--vBHtsauOuDW2NTwxsW2GPeLKpQtFej-t8JlQQ419pi&_nc_ohc=aYtR07VpJoYAX_fU_j4&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfCzgIvbphjSCpcQhk0WNJoljLDWUiAGU6p94rIc27-2Gw&oe=64A8242E"
            }
        ]
    },

    {
        id: 3,
        timeAgo: "20 hours ago",
        status: `ভাঙ্গুড়ায় ১ দিনের ব্যবধানে কাঁচা মরিচের দাম কমেছে কেজিতে ৩৪০ টাকা
        কাঁচা মরিচের দাম ১ দিনের ব্যবধানে প্রতিকেজিতে ৩২০ থেকে ৩৪০টাকা পর্যন্ত কমেছে। পাবনার ভাঙ্গুড়া বাজারে আজ সোমবার (৩ জুলাই) ২০২৩ প্রতি কেজি মরিচ বিক্রি হচ্ছে ২৫০ থেকে ২৬০ টাকায়।
        ছবিটি সোমবার (৩ জুলাই) ২০২৩ সকাল সোয়া নয়টার দিকে ভাঙ্গুড়া কাঁচা বাজার থেকে তোলা। ছবিটি তুলেছেন সাংবাদিক শেখ সাখাওয়াত হোসেন ভাঙ্গুড়া-পাবনা।`,
        image: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/357049595_153773101052293_7864219272424916272_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHC8vopyciKx3KPPv_zBiMW_GC8Ji0ZmLf8YLwmLRmYtx52fYJgtLLD_2LRhJyXzik1tY6ep0vKCFj8fFWW2MOg&_nc_ohc=0PneKwEkD3oAX9SoOtI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfC51EnO7HuGiog985vglKmZrAO2eZM9M4NrciPw6kzpAQ&oe=64A87CA2",
        
        like: 50,
        comment: 35,
        author:[
            {
                name:"হৃদয়ে ভাঙ্গুড়া",
                photo:"https://scontent.fjsr1-2.fna.fbcdn.net/v/t31.18172-8/30052281_2124430144438451_5664012706632716986_o.jpg?stp=dst-jpg_p960x960&_nc_cat=1&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeGZkuixBkz9-A0iLoXockqCBDNOVKNVlscEM05Uo1WWx2YAbHGlFZAbJJD5K_LHV-Udlb3l44NGjwpfYpza0wj9&_nc_ohc=tm7LtN_3UNoAX8QmwPX&_nc_pt=1&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfBfzBxiifkFwPEINZEYVdGXrNKaKkE6nkPTk724QHMxwg&oe=64CA2648"
            }
        ]
    },

    {
        id: 4,
        timeAgo: "15 hours ago",
        status: `বাবা - মামা এই নাম দুইটাই যথেষ্ট 🌼`,
        image: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/357681450_720088229923513_1593852654365642772_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHkDhek2MPhHiEnMWUeG8k30ED6znw8J3fQQPrOfDwnXcNs18YcONuvuKx41Ji1FtHtjkNnQ_sOkKxJ_wyxWgp&_nc_ohc=VBiS6DgfRe8AX_KHbWd&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfD_VQMOK5JqXfHDTGCOnZTfMEZX64Gw5ShC5Fzu7mcNYg&oe=64A6A973",
        
        like: 25,
        comment: 15,
        author:[
            {
                name:"S O R R Y ツ",
                photo:"https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/310832514_648983243599723_5061793633331246487_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEgeP9zckqJ4i45OyBGvgZmPKdqFm2vx-48p2oWba_H7hJvVtRmPhUDm6PjKac3SUOerDOVTh95QWY5mFGTEaTL&_nc_ohc=5Eh45YklkH0AX-elWxx&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfA6vVO0am_K1VDNQOQ9QzF6KYHSH23_IsoJ-N3i7VGyKA&oe=64A8138C"
            }
        ]
    },   

    {
        id: 5,
        timeAgo: "8 hours ago",
        status: `বঙ্গবন্ধু কন্যা মাননীয় প্রধানমন্ত্রী শেখ হাসিনার সঙ্গে দেখা করেছেন আর্জেন্টিনার বিশ্বকাপজয়ী দলের গোলকিপার এমিলিয়ানো মার্টিনেজ...`,
        image: "https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/357743936_652078030149680_7225945513053805866_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeESlgH3O3Yece5K3_lcmXRMcIDxtm519ntwgPG2bnX2eyvbYdQI8NbOfVULgURv8AAlt5hhuPUH4P4m0YQQBAg_&_nc_ohc=zYRneERhbgsAX8zBNfL&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfA-HwrBxNeG_rDganzSLNbvvlZ2_v9hRUv7VE2OakAbLQ&oe=64A7CD8F",
        
        like: 99,
        comment: 70,
        author:[
            {
                name:"Ripon Khan",
                photo:"https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/349840701_797091095276751_4172842926978910407_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFUqBJvffHswC-KBHuwx8wb9yQ4JTCXZmP3JDglMJdmY_c1OUB3S8gfxfov-Q3JRcWw-Lti2oHARo1C-4gQgivo&_nc_ohc=hSJuD67sPxYAX8ZdY3S&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfA4syFOYGWGcscO7iwovYah7cBgr9RvnM0a5al3a63xzg&oe=64A6E526"
            }
        ]
    },

        {
        id: 6,
        timeAgo: "5 hours ago",
        status: ``,
        image: "https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/357514934_218093874515348_1236394042580364694_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEtyHJS6U_rNHZNODaZ_HqWFFTTl_E4ezAUVNOX8Th7MM3K5fvuvTFxrNI1nMXgUrQKUd4gNMI6Ce_Z8NKMIQ0E&_nc_ohc=QnziLWKGZhcAX-RR680&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfDciTQYlyMiMZZxHJHMy-3DsvjhZ8MUyow-wl9TmBNxbg&oe=64A79407",
        
        like: 110,
        comment: 80,
        author:[
            {
                name:"خالد سيف الله",
                photo:"https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/298260934_1812097628984725_3653546864444756773_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH5k01-B5c4iDhpEjdJfxnkGiI0c83AoVAaIjRzzcChUP_uKlcF55jqq_2d9APkD9ZPftg3GbiAq6dC2S_SA2NJ&_nc_ohc=r7ppwgC_kAIAX_wvzQq&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfABMjOFSxF3iuI__PA9O-rxpxdzq6g17Sut21MdJrdsSA&oe=64A885EF"
            }
        ]
    },

    {
        id: 7,
        timeAgo: "48 minitues ago",
        status: `One day Insha'Allah ❤️‍🩹🥹`,
        image: "https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/357504674_714844753986519_5114373791278469177_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHVE9LcKw_b6eHI98E3MBZZVRaNEaaHGBtVFo0RpocYG9hQ2OCp4b2I3th8qLbpjvpoWuSfPdYz2_6iVrc-somW&_nc_ohc=--GT4WLuYGkAX-_It0s&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfDZ71oLEtj-VfRJxy3mJRDmr7vQiMnb1dTN033a38JpOQ&oe=64A6A20E",
        
        like: 32,
        comment: 5,
        author:[
            {
                name:"Tumi",
                photo:"https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-1/327801227_722476865918233_7453140953944554140_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeEe5OJSG2YdIaKQHvGsPbFFMJPdEqMZEEYwk90SoxkQRur0qoiDEdp1G3MIX0FHhTauvuavdME1TLigLfqo6joX&_nc_ohc=6GzWweW0ZLkAX9HNPVS&_nc_pt=1&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfCCo8RMSSYMhqnEkpON6CIVPN6MDcN4XBZqn8Qa8sX7aQ&oe=64A6F5A8"
            }
        ]
    },

    {
        id: 8,
        timeAgo: "20 minitues ago",
        status: `আপার (প্রধানমন্ত্রীর) কথায় ভালো করে  রোদে শুকিয়ে রেখেছিলাম, তারপর ১ ঘন্টা হলো ভিজিয়ে রেখেছি, আর তাজা হচ্ছে না।🥲`,
        image: "https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/357107578_286290063899232_5758299880671845890_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTxCjSONJSPYLtHuGktA44AftGauUo_4EB-0Zq5Sj_gWKFMhVNfkHRPIgOz0tCkh43Grp6AvaqKQM498_ApG1O&_nc_ohc=9sIpmL4iWwwAX-2pbGZ&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfCWx-mRoVneWJ8-vKDr1NUuM7H4LHVKR-glNp7vqCQWhg&oe=64A748C8",
        
        like: 220,
        comment: 150,
        author:[
            {
                name:"কাঠগোলাপ",
                photo:"https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/354031085_275634021631503_6909581931506144620_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH2XGaL6KJVDbB-ttfNHVVNiWEFdzbPyo-JYQV3Ns_Kj1yeExwZxDG1mzufGCbYSrGDVSTqRtXSN0_r8GAYPgSS&_nc_ohc=SSD6GUzn7nQAX_nWh-n&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfDkclJqlSBWRRT06b5-db3dB57EH2UhbuWLt37jPRe7Xg&oe=64A848CD"
            }
        ]
    },    

    {
        id: 9,
        timeAgo: "5 minitues ago",
        status: `০৩-০৭-২০২৩ ।। ৯ পৃষ্টায় ভাঙ্গুড়ার সংবাদ ।। ভাঙ্গুড়ায় বৃষ্টির পানিতে ডুবে শিশুর মৃত্যু ।। জাতীয় দৈনিক "প্রতিদিনের সংবাদ"`,
        image: "https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/357457467_595032559438281_2495935109280861404_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFV_UTXb0tsP1MujxMtEqdoM0yIvp4PG_IzTIi-ng8b8pgOe2evupDjV2Cq70a3bkCvVhK_cowVLJ_uDE0tEXWH&_nc_ohc=VAyrQHkGqQIAX_ngP73&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfBWOa3pbvvg8PkwargfIMCYO6y6Lfm7nNKE80u-ltBz0Q&oe=64A83236",
        
        like: 5,
        comment: 3,
        author:[
            {
                name:"Md. Shirazul Islam",
                photo:"https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/319743235_557547702415287_1120255351879798960_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEO29zPMp_wHm639ukPP6FH6dum2i4OdLXp26baLg50tZX132SGWuP_BfhbBtf1j91mdeXWPGUpeqj9mzVUaarc&_nc_ohc=e3wFl-NCU2EAX8tiSQV&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfCx2OeWViTanuBtdfF0OP9QELOidXZguFbLEv35I3PSgw&oe=64A7CD02"
            }
        ]
    }, 

    {
        id: 10,
        timeAgo: "Just now",
        status: `কি সুন্দর হাসতেছে, চলতেছে, আপনি বুঝতেই পারবেন না এই মানুষটা ভেতরে ভেতরে অনেকবার ম!/re গেছে!💔
        কারণ, আল্লাহর উপরে বিশ্বাস তাকে সবর করতে শিখিয়েছে! তিনি একদিন অবশ্যই এর প্রতিদান দিবেন! তাঁকে ডেকে কেউ কোনো দিন ব্যর্থ হয়নি!🌸`,
        image: "",
        
        like: 10,
        comment: 4,
        author:[
            {
                name:"Kawsar Ahamed",
                photo:src="assets/images/new.jpg"
            }
        ]
    },

];