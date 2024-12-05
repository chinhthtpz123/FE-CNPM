import React, { useState } from 'react';
import Header from '../../layout/Nav';
import Footer from '../../layout/Footer';
import { IoAddSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { FiPrinter } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";

const UserManagement = () => {
    const [view, setView] = useState('employees');
    const [customers, setCustomers] = useState([
    {
      id: 'C001',
      name: 'Customer 1',
      email: 'customer1@example.com',
      type: 'Giảng viên',
      paperInfo: { A3: 10, A4: 20, A5: 30 },
    },
    {
      id: 'C002',
      name: 'Customer 2',
      email: 'customer2@example.com',
      type: 'Sinh viên',
      paperInfo: { A3: 5, A4: 10, A5: 15 },
    },
    ]);
    const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    email: '',
    active: 'Chưa điền thông tin',
    printers: [],
  });
  
    const [isPrinterDropdownOpen, setIsPrinterDropdownOpen] = useState(false);

    const availablePrinters = ['Printer A', 'Printer B', 'Printer C', 
                            'Printer D', 'Printer E', 'Printer F',
                            'Printer G', 'Printer H', 'Printer I',
                            'Printer J', 'Printer K', 'Printer L',
                        ];

    const handleAddEmployee = () => {
        setEmployees([...employees, newEmployee]);
        setNewEmployee({
            id: '',
            name: '',
            email: '',
            active: 'Chưa điền thông tin',
            printers: [],
        });
        setIsModalOpen(false);
        setIsPrinterDropdownOpen(false);
    };

    const togglePrinterSelection = (printer) => {
        setNewEmployee((prev) => {
        const isSelected = prev.printers.includes(printer);
        return {
            ...prev,
            printers: isSelected
            ? prev.printers.filter((p) => p !== printer) // Bỏ chọn
            : [...prev.printers, printer], // Thêm vào danh sách
        };
        });
    };
    const toggleEmployeeDropdown = (index) => {
        setSelectedEmployeeIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      const toggleCustomerDropdown = (index) => {
        setSelectedCustomerIndex((prevIndex) => (prevIndex === index ? null : index));
      };

const addPrinterToEmployee = (employeeIndex, printer) => {
    setEmployees((prev) =>
      prev.map((employee, index) =>
        index === employeeIndex
          ? { ...employee, printers: [...employee.printers, printer] }
          : employee
      )
    );
  };

const removePrinterFromEmployee = (employeeIndex, printer) => {
    setEmployees((prev) =>
      prev.map((employee, index) =>
        index === employeeIndex
          ? { ...employee, printers: employee.printers.filter((p) => p !== printer) }
          : employee
      )
    );
  };

  return (
    <>
    <Header />
    <div> 
        {/* Header for Switching Views */}
      <div className="tabs-header">
        <button
          className={view === 'employees' ? 'active-tab' : ''}
          onClick={() => setView('employees')}
        >
          Manage Employees
        </button>
        <button
          className={view === 'customers' ? 'active-tab' : ''}
          onClick={() => setView('customers')}
        >
          Manage Customers
        </button>
      </div>
        {/* Main Content */}
        <div className="managment-container">
        {view === 'employees' && (
            <div>
                <header class="tw-flex tw-items-center tw-justify-between tw-mb-3">
                    <h2 class="tw-text-lg tw-leading-6 tw-font-medium tw-text-customBlue">Employee List</h2>
                    <button className="add-emp-button tw-text-customBlue tw-group tw-flex tw-items-center 
                    tw-rounded-md tw-text-sm tw-font-medium tw-px-4 tw-py-2" 
                    onClick={() => setIsModalOpen(true)}>
                      <IoAddSharp className='tw-mr-1'/>
                     New
                    </button>
                </header>
        
                <div className="employee-list-mn">
                    <table>
                    <thead>
                        <tr className='tw-text-customBlue'>
                        <th className='first'>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th className='last'>Active</th>
                        {/* <th className='last'>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <React.Fragment key={index}>
                            <tr onClick={() => toggleEmployeeDropdown(index)}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.active}</td>
                            </tr>
                            {selectedEmployeeIndex === index && (
                                <tr>
                                <td colSpan="4" className="dropdown-row">
                                    <div className="printer-mana-dropdown">
                                    <h4>Printers Managed:</h4>
                                    {employee.printers.length > 0 ? (
                                        <ul>
                                        {employee.printers.map((printer, i) => (
                                            <li key={i}>
                                            {printer}
                                            <button
                                                className="remove-button"
                                                onClick={(e) => {
                                                e.stopPropagation();
                                                removePrinterFromEmployee(index, printer);
                                                }}
                                            >
                                                Delete
                                            </button>
                                            </li>
                                        ))}
                                        </ul>
                                    ) : (
                                        <p>No Printers Assigned</p>
                                    )}
                                    <div className="add-printer-dropdown">
                                        <h4>Add Printer</h4>
                                        {availablePrinters
                                        .filter((printer) => !employee.printers.includes(printer))
                                        .map((printer, i) => (
                                            <button
                                            key={i}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addPrinterToEmployee(index, printer);
                                            }}
                                            >
                                            {printer}
                                            </button>
                                        ))}
                                    </div>
                                    </div>
                                </td>
                                </tr>
                            )}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div> 
        )}
        {view === 'customers' && (
            <div>
                <header className='tw-flex tw-items-center tw-justify-between tw-mb-3'>
                <h2 className='tw-text-lg tw-leading-6 tw-font-medium tw-text-customBlue
                '>Customer List</h2>
                <div className='none-button'></div>
                </header>
                
                {customers.length === 0 ? (
                <p>No customers available.</p>
                ) : (
                    <div className="customer-list-mn">
                        <table>
                            <thead>
                            <tr >
                                <th className='first'>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className='last'>Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer, index) => (
                                <React.Fragment key={index}>
                                <tr onClick={() => toggleCustomerDropdown(index)}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.type}</td>
                                </tr>
                                {selectedCustomerIndex === index && (
                                    <tr>
                                    <td colSpan="4" className="dropdown-row">
                                        <div className="cus-mana-dropdown">
                                        <h4>Paper Information:</h4>
                                        <ul>
                                            <li>A3: {customer.paperInfo.A3}</li>
                                            <li>A4: {customer.paperInfo.A4}</li>
                                            <li>A5: {customer.paperInfo.A5}</li>
                                        </ul>
                                        </div>
                                    </td>
                                    </tr>
                                )}
                                </React.Fragment>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        )}
    </div>
    

      {isModalOpen && (
        <div className="modal-add-emp">
          <div className="modal-add-content">
          <h3>Thêm nhân viên</h3>

            <div className='tw-flex tw-font-semibold tw-text-lg'> 
            <CiUser />
            <input
              type="text"
              placeholder="Name"
              className='tw-w-[90%]'
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            />
            </div>
            
            <div className='tw-flex tw-font-semibold tw-text-lg'> <BiLogoGmail />
            <input
              type="email"
              placeholder="Email"
              className='tw-w-[90%]'
              value={newEmployee.email}
              onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
            />
            </div>
            {/* <div className='select-active'>        
            <select
              value={newEmployee.active}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, active: e.target.value })
              }
            >
              <option value="Đã điền thông tin">Đã điền thông tin</option>
              <option value="Chưa điền thông tin">Chưa điền thông tin</option>
            </select>
            </div> */}

            {/* Accordion Dropdown */}
            <div className="printer-modal-dropdown">
              <div className="tw-flex">
                <FiPrinter />
                <div
                  className="dropdown-header"
                  
                  onClick={() => setIsPrinterDropdownOpen(!isPrinterDropdownOpen)}
                >
                  <p className='tw-mb-0 tw-w-[90%]'>Printers Assigned</p>
                  <span>{isPrinterDropdownOpen ? <FaMinus />
                                                  : <IoAddSharp /> }</span>
                </div>

              </div>
              {isPrinterDropdownOpen && (
                <div className="dropdown-body tw-ml-[45px] tw-mt-2">
                  {availablePrinters.map((printer, index) => (
                    <div key={index} className="dropdown-item">
                      <input
                        type="checkbox"
                        id={`printer-${index}`}
                        className='tw-mr-3'
                        checked={newEmployee.printers.includes(printer)}
                        onChange={() => togglePrinterSelection(printer)}
                      />
                      <label htmlFor={`printer-${index}`}>{printer}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-buttons">
              <button onClick={handleAddEmployee}>Confirm</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};
    

export default UserManagement;
