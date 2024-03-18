function cafe() {
    // functions
    let orders = [];
    // 1. Add an order
    function addOrder(orders) {
        const table = parseInt(prompt("Please, enter the number of the table"));
        if (isNaN(table)) {
            alert("You sly fox! You ought to write a number!");
            return null;
        }
        const dishes = [];
        let exit2 = false;
        while (exit2 == false) {
            let choice2 = prompt("1. Add the dish \n2. Proceed to status")
            if (choice2 == 1) {
                let dishName = prompt("Enter the name of the dish");
                let dishPrice = prompt("Enter the price of the dish");
                if (isNaN(dishPrice)) {
                    alert("You sly fox! You ought to write a number!");
                    return null;
                }
                dishes.push({ dishName, dishPrice });
            } else if (choice2 == 2) {
                exit2 = true;
            } else {
                alert("I think you've entered the wrong number");
            }
        }
        const status = prompt("Please, enter the status of the order");
        orders.push({ table, dishes, status });
    }
    // 2. Total amount for a particular table
    function getTotalAmount(orders) {
        let totalSum = 0;
        tableNumber = prompt("Please, enter the number of the table:");
        for (const order of orders) {
            if (order.table == tableNumber) {
                for (const dish of order.dishes) {
                    totalSum += parseFloat(dish.dishPrice);
                }
            }
        }
        return totalSum;
    }
    // 3. Change order status
    function changeOrderStatus(orders) {
        let count = 0;
        let tableNumber = prompt("Please, enter the number of the table:");
        for (const order of orders) {
            if (order.table == tableNumber) {
                order.status = prompt("Please, enter the new status for this table");
                count++;
            }
        }
        if (count == 0) {
            alert("No orders have been found for selected table");
        }
    }
    // 4. Cancel order
    function cancelOrder(orders) {
        let count = 0;
        let tableNumber = prompt("Please, enter the number of the table:");
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].table == tableNumber) {
                orders.splice(i, 1);
                count++;
            }
        }
        if (count == 0) {
            alert("No orders have been found for selected table");
        } else {
            alert("Order(s) has been deleted!");
        }
    }

    // menu
    let exit = false;
    while (exit == false) {
        let choice = prompt("Menu: \n \n 1. Add an order \n 2. Total amount for a particular table \n 3. Change order status \n 4. Cancel order \n 5. Exit \n \n (Please enter the menu item down below to select it)");
        if (choice == 1) {
            addOrder(orders);
            alert("A new order has been added!");
        } else if (choice == 2) {
            let totalSum = getTotalAmount(orders);
            alert("Total price of selected table is " + totalSum);
        } else if (choice == 3) {
            changeOrderStatus(orders);
            alert("Order's status has been changed!");
        } else if (choice == 4) {
            cancelOrder(orders);
        } else if (choice == 5) {
            alert("Okay, goodbye!");
            exit = true;
        } else {
            alert("I think you've entered the wrong number");
        }
    }
}
cafe();