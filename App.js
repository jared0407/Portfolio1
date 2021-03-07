import "./App.css"
import Menu from "./components/Menu"
function App() {
  let data = [
    {
      menuName: "Graphics Cards",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "399.99",
          itemName: "NVIDIA GEFORCE RTX 3060 TI",
          itemDescription:
            "Cooling System: Fan. Boost Clock Speed: 1.67 GHz GPU Memory Size: 8 GB",
        },
        {
          itemId: 2,
          itemPrice: "499.99",
          itemName: "NVIDIA GEFORCE RTX 3070",
          itemDescription: "Cooling System: Fan. Boost Clock Speed: 1.73 GHz GPU Memory Size: 8 GB",
        },
        {
          itemId: 3,
          itemPrice: "699.99",
          itemName: "NVIDIA GEFORCE RTX 3080",
          itemDescription:
            "Cooling System: Fan. Boost Clock Speed: 1.71 GHz GPU Memory Size: 10 GB.",
        },
      ],
    },
    {
      menuName: "Storage",
      menuItems: [
        {
          itemId: 45,
          itemPrice: "49.99",
          itemName: "WD - Mainstream 1TB Internal SATA Hard Drive ",
          itemDescription: "Internal Hard drive from the brand Western Digital, offering 1000GB of storage",
        },
        {
          itemId: 47,
          itemPrice: "69.99",
          itemName: "WD - Mainstream 2TB Internal SATA Hard Drive",
          itemDescription:
            "Internal Hard drive from the brand Western Digital, offering 2000GB of storage.",
        },
        {
          itemId: 49,
          itemPrice: "109.99",
          itemName: "WD - Everyday 4TB Internal SATA Hard Drive",
          itemDescription:
            "Internal Hard drive from the brand Western Digital, offering 4000GB of storage",
        },
      ],
    },
  ]
  return (
    <div className="App">
      {data.map((menu) => (
        <Menu {...menu}></Menu>
      ))}
    </div>
  )
}
export default App