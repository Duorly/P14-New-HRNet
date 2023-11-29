export default function EmployeeForm() {
    return (
        <div>
            <section className=" py-1 bg-green-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-green-700 text-xl font-bold">
                                    Create Employee
                                </h6>
                                <button
                                    className="bg-green-800 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button">
                                    Add employee
                                </button>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-green-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                First Name
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="lucky.jesse"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                Last Name
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="jesse@example.com"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                Date of Birth
                                            </label>
                                            <input type="date"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="Lucky"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                Start Date
                                            </label>
                                            <input type="date"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="Jesse"/>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-green-300"/>

                                <h6 className="text-green-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Address
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                Street
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600
                                                   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full
                                                   ease-linear transition-all duration-150"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                City
                                            </label>
                                            <input type="email"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600
                                                   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full
                                                   ease-linear transition-all duration-150"
                                                   value="New York"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                State
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600
                                                   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full
                                                   ease-linear transition-all duration-150"
                                                   value="United States"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2">
                                                Zip Code
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="Postal Code"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-full px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-green-600 text-xs font-bold mb-2">
                                                Department
                                            </label>
                                            <select name="cars"
                                                    className="border-0 px-3 py-3 placeholder-green-300 text-green-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
