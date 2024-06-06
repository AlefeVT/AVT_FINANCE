// "use client"

// import { useState } from "react"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

// export default function Component() {
//   const [expenses, setExpenses] = useState([
//     {
//       id: 1,
//       name: "Aluguel",
//       amount: 1000,
//       date: "2023-06-01",
//       category: "Moradia",
//     },
//     {
//       id: 2,
//       name: "Conta de luz",
//       amount: 150,
//       date: "2023-06-05",
//       category: "Utilidades",
//     },
//     {
//       id: 3,
//       name: "Supermercado",
//       amount: 300,
//       date: "2023-06-10",
//       category: "Alimentação",
//     },
//   ])
//   const [newExpense, setNewExpense] = useState({
//     name: "",
//     amount: "",
//     date: "",
//     category: "",
//   })
//   const handleInputChange = (e) => {
//     setNewExpense({ ...newExpense, [e.target.name]: e.target.value })
//   }
//   const handleAddExpense = () => {
//     if (
//       newExpense.name.trim() !== "" &&
//       newExpense.amount > 0 &&
//       newExpense.date !== "" &&
//       newExpense.category.trim() !== ""
//     ) {
//       setExpenses([...expenses, { id: expenses.length + 1, ...newExpense }])
//       setNewExpense({
//         name: "",
//         amount: "",
//         date: "",
//         category: "",
//       })
//     }
//   }
//   const handleEditExpense = (id) => {
//     const expenseToEdit = expenses.find((expense) => expense.id === id)
//     setNewExpense(expenseToEdit)
//   }
//   const handleUpdateExpense = () => {
//     const updatedExpenses = expenses.map((expense) =>
//       expense.id === newExpense.id ? { ...expense, ...newExpense } : expense,
//     )
//     setExpenses(updatedExpenses)
//     setNewExpense({
//       name: "",
//       amount: "",
//       date: "",
//       category: "",
//     })
//   }
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
//         <h2 className="text-lg font-semibold mb-4">Adicionar Despesa</h2>
//         <form className="space-y-4">
//           <div>
//             <Label htmlFor="name">Nome</Label>
//             <Input
//               id="name"
//               name="name"
//               value={newExpense.name}
//               onChange={handleInputChange}
//               placeholder="Digite o nome da despesa"
//             />
//           </div>
//           <div>
//             <Label htmlFor="amount">Valor</Label>
//             <Input
//               id="amount"
//               name="amount"
//               type="number"
//               value={newExpense.amount}
//               onChange={handleInputChange}
//               placeholder="Digite o valor da despesa"
//             />
//           </div>
//           <div>
//             <Label htmlFor="date">Data</Label>
//             <Input id="date" name="date" type="date" value={newExpense.date} onChange={handleInputChange} />
//           </div>
//           <div>
//             <Label htmlFor="category">Categoria</Label>
//             <Input
//               id="category"
//               name="category"
//               value={newExpense.category}
//               onChange={handleInputChange}
//               placeholder="Digite a categoria da despesa"
//             />
//           </div>
//           <div className="flex justify-end">
//             <Button onClick={handleAddExpense}>Adicionar</Button>
//             {newExpense.id && (
//               <Button variant="outline" className="ml-2" onClick={handleUpdateExpense}>
//                 Atualizar
//               </Button>
//             )}
//           </div>
//         </form>
//       </div>
//       <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
//         <h2 className="text-lg font-semibold mb-4">Despesas</h2>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Nome</TableHead>
//               <TableHead>Valor</TableHead>
//               <TableHead>Data</TableHead>
//               <TableHead>Categoria</TableHead>
//               <TableHead>Ações</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {expenses.map((expense) => (
//               <TableRow key={expense.id}>
//                 <TableCell>{expense.name}</TableCell>
//                 <TableCell>R$ {expense.amount.toFixed(2)}</TableCell>
//                 <TableCell>{expense.date}</TableCell>
//                 <TableCell>{expense.category}</TableCell>
//                 <TableCell>
//                   <Button variant="outline" size="icon" onClick={() => handleEditExpense(expense.id)}>
//                     <FilePenIcon className="h-4 w-4" />
//                     <span className="sr-only">Editar</span>
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   )
// }

// function FilePenIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//     </svg>
//   )
// }