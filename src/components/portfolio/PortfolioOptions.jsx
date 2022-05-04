import './portfolio.css'

export default function PortfolioOptions({id,title,active,setSelected}) {
    return(
        <div className={active ? 'container portfolio__options active' : "container portfolio__options"} onClick ={()=> setSelected(id)}>{title}</div>
    )
}