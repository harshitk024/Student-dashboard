import Logo from "../../assets/dashboardLogo.svg"


const Header = () => {

    return (
        <div class = "flex justify-between items-center p-2">
            <img src={Logo} alt="EDash" class = "h-35" />
        </div>
    )
}

export default Header;