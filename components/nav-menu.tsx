
interface NavMenuProps {
    dropdown?: boolean
}

function NavMenu(props: NavMenuProps) {
    const { dropdown } = props;
    const classes = dropdown ? "flex flex-col" : "";
    return (
        <div className={classes}>
            <a href={"/hackathons"} className={`mr-5 py-2`}>Hack</a>
            <a href={"/events"} className={`mr-5 py-2`}>Events</a>
            <a href={"/groups"} className={`mr-5 py-2`}>Groups</a>
        </div>
    )
}

export default NavMenu