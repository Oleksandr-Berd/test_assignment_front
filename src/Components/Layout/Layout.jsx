import css from "./Layout.module.css"


const Layout = ({children}) => {
    return (<div className={css.Layout}>
       {children}
    </div> );
}
 
export default Layout;