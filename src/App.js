import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useState } from 'react';



function App(){
    <p>bchsmbcshvbchs</p>
  const [items,setItems]= useState( 
    [
      {
        id:1,
        checked:true,
        item:"Pratice Coding"
      },
      {
        id:2,
        checked:true,
        item:"Learn ReactJS"
      }
    ]
  );

  const[newItem,setNewItem]=useState('')
  const[search,setSearch]=useState('')

  const addItem=(item)=>{
  
    const id=items.length?items[items.length-1].id+1:1;

    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]

   setItems(listItems)
   /* localStorage.setItem("todoo_list",JSON.stringify(listItems))*/
  }

  const handleCheck=(id)=>{
    const listItems = items.map((item)=>item.id===id?{...item,checked:item.checked}:item)
   setItems(listItems)
    /*localStorage.setItem("todoo-list",JSON.stringify(listItems))*/
}
const hanndleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id)
   setItems(listItems)
    /*localStorage.setItem("todoo-list",JSON.stringify(listItems))*/
}

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem)return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}


return(
  <div ClassName="App">
    <Header title = "To do List"/>
    <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />

    <SearchItem
    search={search}
    setSearch={setSearch}
    />

    <Content
    items={items}
    handleCheck={handleCheck}
    hanndleDelete={hanndleDelete}
    
    />
    
      <Footer
        length={items.length}
        />
        /</div>
)}
export default App