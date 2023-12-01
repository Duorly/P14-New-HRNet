import DataTable from "react-data-table-component";
import {useMemo, useState} from "react";

export default function EmployeeList() {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = [
        {
            name: 'John Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        },
        {
            name: 'Janes Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        },
        {
            name: 'Jansdcdcd Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        },
        {
            name: 'Janedgdg Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        },
        {
            name: 'Jangdgfe Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        },
        {
            name: 'Janedggd Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        },
        {
            name: 'Janedgdg Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        },
        {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }, {
            name: 'Janehyry Doe',
            age: 32,
            address: '10 Downing Street',
            tags: ['employee', 'manager'],
        }
    ].filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true,
            right: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
            right: true,
        },
        {
            name: 'Tags',
            selector: row => row.tags,
            sortable: true,
            right: true,
        },
    ];

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        // return (
        //     <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        // );
        return <input
            style={{border: "1px solid #ccc", borderRadius: "5px", padding: "5px 10px", marginBottom: "10px"}}
            type={"search"}
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
            placeholder={"Search by name"}
        />


    }, [filterText, resetPaginationToggle]);

    return (
        <div className="container mx-auto my-5">
            <DataTable
                title="Employee List"
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
            />
        </div>
    );
}
