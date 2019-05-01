 // Required node modules.
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connects to the database.
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connection Successful");
    displayProducts();
});                

var displayProducts = function() {
	connection.query("Select * FROM products", function(err, res) {
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].ItemId + " || Product Name: " +
						res[i].Product + "Department: " + res[i].Department + " || Price: " + res[i].Price) + "Qty in Stock: " + res[i].StockQuantity;
		}
  		purchaseRequest();
	});
};

// Requests product and number of product items user wishes to purchase.
var purchaseRequest = function(res) {
	inquirer.prompt([{
		name: "choice",
		type: "input",
		message: "What would you like to buy? Quit with Q"
		
	}]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()=="Q"){
            process.exit();
        }
        for(var i=0; i <res.length;i++){
            if (res[i].Product==answer.choice){
                correct=tue;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    name: "amt",
                    type: "input",
                    message:"How many would you like to buy?",
                    validate: function(value) {
                        if (isNaN(value) === false){
                            return true;
                        }else{
                            return false; 
                        }  
                    }
                }).then(function(answer){
                    if((res[id].StockQuantity-answer.amt)>0){
                        connection.query("UPDATE products SET StockQuantity=' "+res[id].StockQuantity-answer.amt)+" 'WHERE Product=' "+Product+ " ' ", function(err, res2){
                            console.log("Purchase Complete!");
                            makeTable();
                        }
                    }else{
                        console.log("Not a valid Selection!")
                        purchaseRequest(res);
                    }
                })
            }
        }
        if(i==res.length && correct==false){
            console.log("Not a valid Selection!");
            purchaseRequest();
        }    
    })		
}