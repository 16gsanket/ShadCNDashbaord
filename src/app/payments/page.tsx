import React from 'react'
import { Payment,columns } from './columns';
import { DataTable } from './data-table';
const getData = async():Promise<Payment[]> =>{
    return  [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  { id: "91a4bf29", amount: 300, status: "success", email: "john.doe@mail.com" },
  { id: "c83b2f67", amount: 450, status: "failed", email: "amy.watson@outlook.com" },
  { id: "b29df4e1", amount: 75, status: "pending", email: "rohan123@yahoo.com" },
  { id: "a15edc90", amount: 999, status: "success", email: "nina@company.com" },
  { id: "f37b2a61", amount: 600, status: "processing", email: "mark.tan@live.com" },
  { id: "e09ac547", amount: 220, status: "failed", email: "claire.ross@gmail.com" },
  { id: "d78a1c32", amount: 540, status: "pending", email: "alex.jones@hotmail.com" },
  { id: "c62fb5a8", amount: 870, status: "success", email: "susan89@icloud.com" },
  { id: "b14ed3f0", amount: 155, status: "processing", email: "harry.potter@hogwarts.edu" },
  { id: "a39bf27e", amount: 480, status: "failed", email: "meera.k@protonmail.com" },
  { id: "f02cb1d5", amount: 720, status: "success", email: "david.king@mail.com" },
  { id: "e71bc3a9", amount: 210, status: "pending", email: "olivia.gray@gmail.com" },
  { id: "d54af2e4", amount: 910, status: "processing", email: "ravi.sharma@rediff.com" },
  { id: "c81de590", amount: 330, status: "failed", email: "lisa.wu@yahoo.com" },
  { id: "b40cd127", amount: 690, status: "pending", email: "ethan.m@company.org" },
  { id: "a03ed58b", amount: 250, status: "success", email: "kelly.r@inbox.com" },
  { id: "f76ca245", amount: 820, status: "processing", email: "steve.b@techmail.com" },
  { id: "e12ad69f", amount: 135, status: "failed", email: "sophie.t@zoho.com" },
  { id: "d49be870", amount: 950, status: "success", email: "jacob.p@service.com" },
  { id: "c23df1a6", amount: 405, status: "pending", email: "tina.lee@gmail.com" },
  { id: "b97ed314", amount: 780, status: "processing", email: "liam.hall@yahoo.com" },
  { id: "a86fb2e9", amount: 300, status: "failed", email: "emma.j@domain.com" },
  { id: "f59cd841", amount: 640, status: "pending", email: "noah.w@company.co" },
  { id: "e84bd327", amount: 120, status: "success", email: "ava.b@bizmail.com" },
  { id: "d33ef729", amount: 505, status: "processing", email: "will.lee@gmail.com" },
  { id: "c65ac180", amount: 870, status: "failed", email: "mia.l@workmail.com" },
  { id: "b21da958", amount: 275, status: "success", email: "lucas.s@mail.com" },
  { id: "a98bf637", amount: 715, status: "pending", email: "zoe.taylor@gmail.com" },
];
}
    
   


async function page() {

    const data = await getData();
  return (
    <div className=''>
        <div className="mb-8 px-4 py-2 bg-secondary rounded-md">

            <h1 className='font-semibold'>All Payments</h1>

        </div>
        <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default page