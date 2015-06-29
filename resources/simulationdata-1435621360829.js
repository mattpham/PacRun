function initData() {
  jimData.variables["RunData"] = "";
  jimData.variables["MapName"] = "[MapName]";
  jimData.variables["Mail"] = "";
  jimData.variables["RunPanel"] = "1";
  jimData.variables["MapID"] = "1";
  jimData.datamasters["Mail"] = [
    {
      "id": 1,
      "datamaster": "Mail",
      "userdata": {
        "From": "Danny Pej",
        "Subject": "Material Design",
        "Body": "There is the new Material Design Style, take a look.",
        "Read": "That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "15m",
        "Picture": "./images/4b824737-1d11-45eb-9e53-23e21196ac5e.png",
        "Star": "./images/83a80f0c-f80b-4bc3-8fd6-e338929751f9.png"
      }
    },
    {
      "id": 2,
      "datamaster": "Mail",
      "userdata": {
        "From": "Milena Intelisan",
        "Subject": "Weekend meeting?",
        "Body": "Can you meet this weekend with us at the restaurant?",
        "Read": "Of course, call me on friday to fix the hour, please. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "3h",
        "Picture": "./images/44ceb277-b758-40e8-85f9-eddafd8a885d.png",
        "Star": "./images/8f1cc740-ab82-41d7-93c0-5f8fad1d78b3.png"
      }
    },
    {
      "id": 3,
      "datamaster": "Mail",
      "userdata": {
        "From": "Imma Mustard",
        "Subject": "Take a look",
        "Body": "There is a new design. Check it the layouts and tell me something.",
        "Read": "That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "1:39pm",
        "Picture": "./images/cb071203-b362-41a0-8716-03521ad73585.png",
        "Star": "./images/0a0151b8-0864-496b-9d10-8d16dffa290c.png"
      }
    },
    {
      "id": 4,
      "datamaster": "Mail",
      "userdata": {
        "From": "Montse Hall",
        "Subject": "Important news",
        "Body": "That is awesome!! Please read this...",
        "Read": "Great news!, congratulations!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Nov 03",
        "Picture": "./images/42ff11c4-0410-4bde-b7b0-1e97b24f95e2.png",
        "Star": "./images/d9514fbe-0f40-40af-8f74-17e6b7a8af48.png"
      }
    },
    {
      "id": 5,
      "datamaster": "Mail",
      "userdata": {
        "From": "Albert Lives",
        "Subject": "What's for dinner?",
        "Body": "If you need some inspiration for your own dinner tonight, call me.",
        "Read": "This is  a surprise!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Oct 29",
        "Picture": "./images/71cd18d0-807c-4fdf-be01-bdd72cfbe877.png",
        "Star": "./images/d6351c95-b09c-4484-9752-22af14be119d.png"
      }
    },
    {
      "id": 6,
      "datamaster": "Mail",
      "userdata": {
        "From": "Imma Gari",
        "Subject": "Hello there!!",
        "Body": "It's been a long time since we last met",
        "Read": "Can you give me some time to think about this and can we talk tomorrow? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Oct 27",
        "Picture": "./images/4b78e670-1458-42db-9762-68dfab7569ad.png",
        "Star": "./images/b01912fa-c2d4-4ea3-b8a1-14e41d406fef.png"
      }
    },
    {
      "id": 7,
      "datamaster": "Mail",
      "userdata": {
        "From": "Xavier Commes",
        "Subject": "New route!!",
        "Body": "I found this interesting route, let's ride this sunday.",
        "Read": "Great route. This weekend lests ride! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "sample text",
        "Picture": "./images/48738ed2-5a34-4c0c-b0c3-6995951a090c.png",
        "Star": "./images/1d805fd2-49ad-40ff-9f5d-63c52e073ce2.png"
      }
    }
  ];

  jimData.datamasters["RunData"] = [
    {
      "id": 1,
      "datamaster": "RunData",
      "userdata": {
        "id": "1",
        "name": "Mile Square Run",
        "location": "3.5",
        "city": "Fountain Valley, CA",
        "distance": "4.0",
        "tokens": "40",
        "favorites": "97",
        "favorited": "1",
        "recent": "1"
      }
    },
    {
      "id": 2,
      "datamaster": "RunData",
      "userdata": {
        "id": "2",
        "name": "Lake Center Dr Dash",
        "location": "0.1",
        "city": "Santa Ana, CA",
        "distance": "0.2",
        "tokens": "2",
        "favorites": "13",
        "favorited": "0",
        "recent": "1"
      }
    },
    {
      "id": 3,
      "datamaster": "RunData",
      "userdata": {
        "id": "3",
        "name": "The Longest Run",
        "location": "100.0",
        "city": "Santa Maria, CA",
        "distance": "100.0",
        "tokens": "1000",
        "favorites": "1000",
        "favorited": "1",
        "recent": "0"
      }
    },
    {
      "id": 4,
      "datamaster": "RunData",
      "userdata": {
        "id": "4",
        "name": "North Southrun Arch",
        "location": "7.3",
        "city": "Garden Grove, CA",
        "distance": "1.9",
        "tokens": "19",
        "favorites": "1123",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 5,
      "datamaster": "RunData",
      "userdata": {
        "id": "5",
        "name": "Frank Woolley",
        "location": "1.8",
        "city": "Santa Ana, CA",
        "distance": "1.1",
        "tokens": "11",
        "favorites": "78",
        "favorited": "1",
        "recent": "0"
      }
    },
    {
      "id": 6,
      "datamaster": "RunData",
      "userdata": {
        "id": "6",
        "name": "Goldenhill Pike",
        "location": "2.3",
        "city": "Fountain Valley, CA",
        "distance": "0.0",
        "tokens": "0",
        "favorites": "76",
        "favorited": "1",
        "recent": "1"
      }
    },
    {
      "id": 7,
      "datamaster": "RunData",
      "userdata": {
        "id": "7",
        "name": "Tuxford Mews",
        "location": "10.2",
        "city": "Laguna Beach, CA",
        "distance": "1.0",
        "tokens": "10",
        "favorites": "10",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 8,
      "datamaster": "RunData",
      "userdata": {
        "id": "8",
        "name": "Felsberg Crescent North",
        "location": "0.8",
        "city": "Santa Ana, CA",
        "distance": "1.6",
        "tokens": "16",
        "favorites": "78",
        "favorited": "1",
        "recent": "0"
      }
    },
    {
      "id": 9,
      "datamaster": "RunData",
      "userdata": {
        "id": "9",
        "name": "Northwest Daylily Canyon",
        "location": "10.3",
        "city": "Huntington Beach, CA",
        "distance": "1.1",
        "tokens": "11",
        "favorites": "558",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 10,
      "datamaster": "RunData",
      "userdata": {
        "id": "10",
        "name": "Mediati Route",
        "location": "4.0",
        "city": "Irvine, CA",
        "distance": "0.2",
        "tokens": "2",
        "favorites": "6",
        "favorited": "1",
        "recent": "0"
      }
    },
    {
      "id": 11,
      "datamaster": "RunData",
      "userdata": {
        "id": "11",
        "name": "West Nicole Close",
        "location": "4.3",
        "city": "Irvine, CA",
        "distance": "1.1",
        "tokens": "11",
        "favorites": "58",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 12,
      "datamaster": "RunData",
      "userdata": {
        "id": "12",
        "name": "East Plover Hill Avenue",
        "location": "0.0",
        "city": "Santa Ana, CA",
        "distance": "2.4",
        "tokens": "24",
        "favorites": "919",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 13,
      "datamaster": "RunData",
      "userdata": {
        "id": "13",
        "name": "Old Liberty North",
        "location": "0.1",
        "city": "Santa Ana, CA",
        "distance": "2.6",
        "tokens": "26",
        "favorites": "234",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 14,
      "datamaster": "RunData",
      "userdata": {
        "id": "14",
        "name": "East Lower Circle",
        "location": "0.7",
        "city": "Santa Ana, CA",
        "distance": "4.6",
        "tokens": "46",
        "favorites": "108",
        "favorited": "0",
        "recent": "1"
      }
    },
    {
      "id": 15,
      "datamaster": "RunData",
      "userdata": {
        "id": "15",
        "name": "Greenhayes Path",
        "location": "1.3",
        "city": "Costa Mesa, CA",
        "distance": "0.5",
        "tokens": "5",
        "favorites": "25",
        "favorited": "1",
        "recent": "1"
      }
    },
    {
      "id": 16,
      "datamaster": "RunData",
      "userdata": {
        "id": "16",
        "name": "Tea Rock",
        "location": "4.1",
        "city": "Irvine, CA",
        "distance": "9.0",
        "tokens": "90",
        "favorites": "337",
        "favorited": "1",
        "recent": "1"
      }
    },
    {
      "id": 17,
      "datamaster": "RunData",
      "userdata": {
        "id": "17",
        "name": "Southeast Colshaw Arch",
        "location": "1.9",
        "city": "Tustin, CA",
        "distance": "4.1",
        "tokens": "41",
        "favorites": "368",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 18,
      "datamaster": "RunData",
      "userdata": {
        "id": "18",
        "name": "North Swithin Grade",
        "location": "23.7",
        "city": "San Pedro, CA",
        "distance": "2.0",
        "tokens": "20",
        "favorites": "225",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 19,
      "datamaster": "RunData",
      "userdata": {
        "id": "19",
        "name": "Hannington Vale North",
        "location": "9.5",
        "city": "Westminster, CA",
        "distance": "9.2",
        "tokens": "92",
        "favorites": "44",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 20,
      "datamaster": "RunData",
      "userdata": {
        "id": "20",
        "name": "Northeast Lambridge Route",
        "location": "11.1",
        "city": "Cypress, CA",
        "distance": "1.8",
        "tokens": "18",
        "favorites": "291",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 21,
      "datamaster": "RunData",
      "userdata": {
        "id": "21",
        "name": "Upper Brentwood",
        "location": "10.8",
        "city": "Anaheim, CA",
        "distance": "9.9",
        "tokens": "99",
        "favorites": "76",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 22,
      "datamaster": "RunData",
      "userdata": {
        "id": "22",
        "name": "Mark Terrace",
        "location": "1.1",
        "city": "Santa Ana, CA",
        "distance": "3.5",
        "tokens": "35",
        "favorites": "87",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 23,
      "datamaster": "RunData",
      "userdata": {
        "id": "23",
        "name": "West Wing Vale",
        "location": "5.9",
        "city": "Orange, CA",
        "distance": "0.5",
        "tokens": "5",
        "favorites": "18",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 24,
      "datamaster": "RunData",
      "userdata": {
        "id": "24",
        "name": "West Altamead Trace",
        "location": "7.3",
        "city": "Orange, CA",
        "distance": "13.3",
        "tokens": "133",
        "favorites": "204",
        "favorited": "0",
        "recent": "1"
      }
    },
    {
      "id": 25,
      "datamaster": "RunData",
      "userdata": {
        "id": "25",
        "name": "Ethridge Rise",
        "location": "1.7",
        "city": "Irvine, CA",
        "distance": "0.8",
        "tokens": "8",
        "favorites": "87",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 26,
      "datamaster": "RunData",
      "userdata": {
        "id": "26",
        "name": "el Campo Grove",
        "location": "11.4",
        "city": "Mission Viejo, CA",
        "distance": "3.5",
        "tokens": "35",
        "favorites": "106",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 27,
      "datamaster": "RunData",
      "userdata": {
        "id": "27",
        "name": "McKinsey Street",
        "location": "8.2",
        "city": "Lake Forest, CA",
        "distance": "9.4",
        "tokens": "94",
        "favorites": "106",
        "favorited": "0",
        "recent": "0"
      }
    },
    {
      "id": 28,
      "datamaster": "RunData",
      "userdata": {
        "id": "28",
        "name": "Southeast Hatchway Spur ",
        "location": "2.8",
        "city": "Fountain Valley, CA",
        "distance": "2.7",
        "tokens": "27",
        "favorites": "87",
        "favorited": "0",
        "recent": "0"
      }
    }
  ];

  jimData.datamasters["Run3"] = [
    {
      "id": 1,
      "datamaster": "Run3",
      "userdata": {
        "name": "The Circuit",
        "description": "10.0 Miles | 100 Coins",
        "favorite": "./images/170f0da1-1590-43e2-96d5-7c93e7428cf2.png"
      }
    },
    {
      "id": 2,
      "datamaster": "Run3",
      "userdata": {
        "name": "Lake Center Dr. Dash",
        "description": "0.2 Miles | 2 Coins",
        "favorite": "./images/4b0dfb06-8016-43ef-8ee2-fd1298fdb6c8.png"
      }
    },
    {
      "id": 3,
      "datamaster": "Run3",
      "userdata": {
        "name": "Stand Still Run",
        "description": "0.0 Miles | 0 Coins",
        "favorite": "./images/3401bf96-95cb-4872-b519-18bef63e57bd.png"
      }
    },
    {
      "id": 4,
      "datamaster": "Run3",
      "userdata": {
        "name": "Mile Square Trail",
        "description": "4.0 Miles | 40 Coins",
        "favorite": "./images/b6b02e02-02d7-412c-ab93-0ce03ca1a594.png"
      }
    },
    {
      "id": 5,
      "datamaster": "Run3",
      "userdata": {
        "name": "Odd Length Path",
        "description": "12.3 Miles | 123 Coins",
        "favorite": "./images/38173323-7a4e-42a6-a8da-7576ba83a452.png"
      }
    }
  ];

  jimData.datamasters["Run"] = [
    {
      "id": 1,
      "datamaster": "Run",
      "userdata": {
        "name": "Mile Square Trail",
        "description": "4.0 Miles | 40 Coins",
        "favorite": "./images/b6b02e02-02d7-412c-ab93-0ce03ca1a594.png",
        "isFavorite": "true"
      }
    },
    {
      "id": 2,
      "datamaster": "Run",
      "userdata": {
        "name": "Lake Center Dr. Dash",
        "description": "0.2 Miles | 2 Coins",
        "favorite": "./images/4b0dfb06-8016-43ef-8ee2-fd1298fdb6c8.png",
        "isFavorite": "false"
      }
    },
    {
      "id": 3,
      "datamaster": "Run",
      "userdata": {
        "name": "A Really Long Trail",
        "description": "100.0 Miles | 1000 Coins",
        "favorite": "./images/d2422d91-f4b2-43ca-a16e-64237e742bf7.png",
        "isFavorite": "true"
      }
    },
    {
      "id": 4,
      "datamaster": "Run",
      "userdata": {
        "name": "Stand Still Run",
        "description": "0.0 Miles | 0 Coins",
        "favorite": "./images/3401bf96-95cb-4872-b519-18bef63e57bd.png",
        "isFavorite": "true"
      }
    },
    {
      "id": 5,
      "datamaster": "Run",
      "userdata": {
        "name": "5 Mile",
        "description": "5.0 Miles | 50 Coins",
        "favorite": "./images/4ac808ff-471b-4a23-a4d7-ad890ef486e0.png",
        "isFavorite": "false"
      }
    },
    {
      "id": 6,
      "datamaster": "Run",
      "userdata": {
        "name": "Odd Length Path",
        "description": "12.3 Miles | 123 Coins",
        "favorite": "./images/38173323-7a4e-42a6-a8da-7576ba83a452.png",
        "isFavorite": "false"
      }
    },
    {
      "id": 7,
      "datamaster": "Run",
      "userdata": {
        "name": "Zigzag Way",
        "description": "1.0 Miles | 10 Coins",
        "favorite": "./images/267392c4-0ebe-43d0-b0c6-2c42ba4f00c7.png",
        "isFavorite": "false"
      }
    },
    {
      "id": 8,
      "datamaster": "Run",
      "userdata": {
        "name": "The Circuit",
        "description": "10.0 Miles | 100 Coins",
        "favorite": "./images/170f0da1-1590-43e2-96d5-7c93e7428cf2.png",
        "isFavorite": "true"
      }
    }
  ];

  jimData.datamasters["Run2"] = [
    {
      "id": 1,
      "datamaster": "Run2",
      "userdata": {
        "name": "Mile Square Trail",
        "description": "4.0 Miles | 40 Coins",
        "favorite": "./images/b6b02e02-02d7-412c-ab93-0ce03ca1a594.png"
      }
    },
    {
      "id": 2,
      "datamaster": "Run2",
      "userdata": {
        "name": "A Really Long Trail",
        "description": "100.0 Miles | 1000 Coins",
        "favorite": "./images/d2422d91-f4b2-43ca-a16e-64237e742bf7.png"
      }
    },
    {
      "id": 3,
      "datamaster": "Run2",
      "userdata": {
        "name": "Stand Still Run",
        "description": "0.0 Miles | 0 Coins",
        "favorite": "./images/3401bf96-95cb-4872-b519-18bef63e57bd.png"
      }
    }
  ];

  jimData.isInitialized = true;
}