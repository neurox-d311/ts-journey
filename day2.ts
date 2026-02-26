let clientName: string = "Ledger and cycle";
let monthlyRevenue: number = 45000.50;
let isTaxDeclared: boolean = false;
console.log(clientName);
console.log(monthlyRevenue);
console.log(isTaxDeclared);
//clientName = 10012;
//expenseRecords.push("200");
//制定一个档案袋标准（Interface)
interface ClientAccount {
    name: string;
    revenue: number;
    isTaxDeclared: boolean;
    foundedYear: number;
}
let myFirstClient: ClientAccount = {
    name: "Ledger and cycle.",
    revenue: 85352.44,
    isTaxDeclared: true,
    foundedYear: 1754
};
console.log(myFirstClient);
console.log(myFirstClient.revenue);
