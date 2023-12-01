import Logo from '/logo.webp'
import {Link, Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <div className="h-screen bg-green-50">
                <div className="border-b border-green-200">
                    <div className="container mx-auto py-4 font-[Raleway]">
                        <div className="w-full flex items-center justify-between">
                            <Link to="/" className="flex items-center space-x-2">
                                <img src={Logo} width={70} className="logo react" alt="React logo"/>
                                <h1 className="text-2xl font-bold">Wealth Health</h1>
                            </Link>
                            <Link to="employees" className="text-xl underline underline-offset-4">List Of Employees</Link>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}
