import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const menuData = {
  "Fruit": {
    "seasonal": [{ "name": "Mango", "price": 100 }, { "name": "Pineapple", "price": 70 }],
    "all-year": [{ "name": "banana", "price": 150 }],
  },
  "Vegetables": {
    "Leafy": [{ "name": "Spinach", "price": 20 }, { "name": "Methi", "price": 20 }],
    "Essentials": [{ "name": "Onion", "price": 35 }],
  },
  "Clothes": {
    "summer": [{name: "Cotton TShirt", price: 44}, {name: "Trousers", price: 77}],
    "winter": [{name: "Sweater", price: 44}, {name: "Jacket", price: 100}]
  }
}


// const menuData = [
//   {
//     name: "Fruits",
//     submenu: [
//       {
//         name: "seasonal",
//         submenu: [
//           { "name": "Mango", "price": 100 }, 
//           { "name": "Pineapple", "price": 70 }
//         ]
//       },
//       {
//         name: "all-year",
//         submenu: [
//           { "name": "banana", "price": 150 }
//         ]
//       }
//     ]
//   },
//   {
//     name: "Vegetables",
//     submenu: []
//   }
// ]

function App() {

  const menuKeys = Object.getOwnPropertyNames(menuData) //["Fruit", "Vegetables"]
  const [category, setCategory] = useState(menuKeys[0])

  const subCategoryKeys = Object.getOwnPropertyNames(menuData[category]) // ["seasonal", "all-year"]
  const [subCategory, setSubCategory] = useState(subCategoryKeys[0])

  const [item, setItem] = useState(menuData[category][subCategory][0]) //{ "name": "Mango", "price": 100 }

  const handleCategory = (e) => {
    const selectedCategory = e.target.value
    setCategory(selectedCategory)

    const currentSubCategory = Object.getOwnPropertyNames(menuData[selectedCategory])[0]
    setSubCategory(currentSubCategory)

    setItem(menuData[selectedCategory][currentSubCategory][0])
  }

  const handleSubCategory = (e) => {
    const selectedSubCategory = e.target.value
    setSubCategory(selectedSubCategory)

    setItem(menuData[category][selectedSubCategory][0])
  }

  const handleItem = (e) => {
    setItem(JSON.parse(e.target.value))
  }

  const menuOptions = menuKeys.map((menuKey, idx) => {

    return <option key={idx} value={menuKey}>{menuKey}</option>

  })


  const subCategoryOptions = Object.getOwnPropertyNames(menuData[category]).map((subCat, idx) => {
    
    return <option key={idx} value={subCat}>{subCat}</option>
  })


  const itemOptions = menuData[category][subCategory].map((item, idx) => {
    return <option key={idx} value={JSON.stringify(item)}>{`${item.name} - ${item.price}`}</option>
  })

  return (
    <div className="App">
      

      <select value={category} onChange={handleCategory}>
        {menuOptions}
      </select>

      <select value={subCategory} onChange={handleSubCategory}>
        {subCategoryOptions}
      </select>

      <select value={JSON.stringify(item)} onChange={handleItem}>
        {itemOptions}
      </select>
    </div>
  );
}

export default App;
