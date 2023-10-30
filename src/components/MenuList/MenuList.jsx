import { MenuListeItem } from "../MenuListItem/MenuListeItem"
import s from "./style.module.css"

export const MenuList =({difficulty,onItemClick, isSelected})=>{
return(
    <div className={s.container}>
        <MenuListeItem onClick={onItemClick}difficulty="Low" isSelected={difficulty==="Low"}/>

        <MenuListeItem onClick={onItemClick}difficulty="Medium"isSelected={difficulty==="Medium"}/>
        
        <MenuListeItem onClick={onItemClick}difficulty="High"isSelected={difficulty==="High"}/>
        
        <MenuListeItem onClick={onItemClick}difficulty="Insane"isSelected={difficulty==="Insane"}/>
    </div>
)

}