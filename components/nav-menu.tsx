
interface NavMenuProps {
    dropdown?: boolean
}

function NavMenu(props: NavMenuProps) {
    const { dropdown } = props;
    const classes = dropdown ? "flex flex-col" : "";
    return (
        <div className={classes}>
            <a href={"/about"} className={`mr-5 py-2`}>About</a>
            <a href={"/jobs"} className={`mr-5 py-2`}>Jobs</a>
            <a href={"/login"} className={`mr-5 py-2`}>Login</a>
        </div>
    )
}

export default NavMenu