import './style.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import NavBar from './nav';

const ListAdminCustomer = () => {
  const [custData,setcustData]=useState([]);
  
  const customerData=async()=>{
    try{
        const data=await axios.get(
         "http://localhost:5000/admin/listcustomer"
        );
       setcustData(data.data)
    }catch(e){
        console.log(e);
    }
  };  
  useEffect(()=>{
    customerData();
  },[]);
    return (
        <div>
        <NavBar/>
        <div className='list-customer mx-4 '>
             <div className="d-flex flex-row justify-content-center py-1">
                <h2 className="text-center text-black">Customer Details</h2>
            </div>
            <table className="table">
                <thead className="thead-dark text-white bg-dark">
                    <tr>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Adhar No.</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
              
                {custData.map((customer)=>{
                return ( <tr>
                    <td>{customer.custid}</td>
                    <td>{customer.cname}</td>
                        <td>{customer.adharno}</td>
                        <td>{customer.phoneno}</td>
                        <td>{customer.address}</td>
                        <td>{customer.balance}</td>
                    </tr>)
            })}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ListAdminCustomer;