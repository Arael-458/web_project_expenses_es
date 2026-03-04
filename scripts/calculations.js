let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (gasto of expenseEntries) {
  totalExpensesValue += gasto[1];
}
console.log(`Valor total de los gastos: ${totalExpensesValue} `);

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

balanceColor = "green";
function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
  return balanceColor;
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let largestCategory = "";
  let maxTotal = 0;

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const total = calculateCategoryExpenses(category);

    if (total > maxTotal) {
      maxTotal = total;
      largestCategory = category;
    }
  }
  return largestCategory;
}

function addExpenseEntry(newExpense) {
  expenseEntries.push(newExpense);
  totalExpensesValue += newExpense[1];
  const average = calculateAverageExpense();
  const balance = calculateBalance();
  const color = updateBalanceColor();
  const largestCategory = calculateLargestCategory();

  console.log(`Nuevo gasto agregado: ${newExpense[0]} - ${newExpense[1]}`);
  console.log(`Gastos totales: ${totalExpensesValue}`);
  console.log(`Gasto promedio: ${average.toFixed(2)}`);
  console.log(`Saldo: ${balance}`);
  console.log(`Color del saldo: ${color}`);
  console.log(`Categoría con mayor gasto: ${largestCategory}`);
}
