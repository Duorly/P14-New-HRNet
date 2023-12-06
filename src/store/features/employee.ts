import {createSlice} from '@reduxjs/toolkit'
import Employee from "../../types/employee.ts";

const initialState: Employee[] = [{
    firstName: "Nebel",
    lastName: "Mass",
    dateOfBirth: "30/03/2000",
    startDate: "30/03/2023",
    city: "Brazzaville",
    state: "Congo",
    street: "40 rue Nkounka Batéké, Bacongo",
    department: "Brazzaville",
    zipCode: "00242"
}]

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const {addEmployee} = employeeSlice.actions

export default employeeSlice.reducer
