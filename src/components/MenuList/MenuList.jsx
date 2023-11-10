import { MenuListeItem } from "../MenuListItem/MenuListeItem"
import { DIFFICULTIES } from "./constant"
import s from "./style.module.css"

export const MenuList =({difficulty,onItemClick, isSelected})=>{
return(
    <div className={s.container}>
{
    DIFFICULTIES.map((diff)=>(
        <MenuListeItem onClick={onItemClick}difficulty={diff} isSelected={difficulty===diff}/>))
}
   </div>
)
}