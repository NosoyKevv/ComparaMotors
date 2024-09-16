import React from 'react'
import LightButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"


const DarkMode = () => {
    const [ theme, setTheme ] = React.useState( localStorage.getItem("theme") ? 
                                localStorage.getItem("theme") : "light" );

const element = document.documentElement; //acceso al elemento html/ envie el tema a localstorage 
 
React.useEffect(() => {
    localStorage.setItem("theme" , theme);
    if (theme == "dark"){
        element.classList.add("dark");
        element.classList.add("dark");
    }
    else{
        element.classList.remove("light");
        element.classList.remove("dark");
    }
})//prueba


  return (
    <div className="relative">
      <img
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")} 
      src={LightButton} 
      alt=""
      className={`w-12 cursor-pointer absolute right-0 z-10 ${ theme == "dark"? "opacity-0" : "opacity-100" }`}
      />
      
      <img 
      src={DarkButton} 
      alt=""
      className={`w-12 cursor-pointer }`}
      />
    </div>
  )
}

export default DarkMode
