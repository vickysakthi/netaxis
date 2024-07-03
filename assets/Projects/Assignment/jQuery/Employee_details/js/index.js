let empData = [
        {
                "id": 1,
                "name": "Vicky",
                "position": "Angular Developer",
                "salary": 50000,
                "products": [
                        {
                                "id": 101,
                                "product": "Iphone",
                                "price": 7000
                        },
                        {
                                "id": 106,
                                "product": "Laptop",
                                "price": 8000
                        }
                ]
        },
        {
                "id": 2,
                "name": "Rajesh",
                "position": "Back-end Developer",
                "salary": 65000,
                "products": [
                        {
                                "id": 102,
                                "product": "Oppo",
                                "price": 45000
                        },
                        {
                                "id": 101,
                                "product": "Iphone",
                                "price": 7000
                        },
                        {
                                "id": 107,
                                "product": "pc",
                                "price": 10000
                        }
                ]
        },
        {
                "id": 3,
                "name": "Suresh",
                "position": "Assitant engineer",
                "salary": 80000,
                "products": [
                        {
                                "id": 103,
                                "product": "One-plus",
                                "price": 6000
                        },
                        {
                                "id": 107,
                                "product": "pc",
                                "price": 10000
                        }
                ]
        },
        {
                "id": 4,
                "name": "Praba",
                "position": "Testing",
                "salary": 70000,
                "products": [
                        {
                                "id": 104,
                                "product": "Vivo",
                                "price": 4000
                        },
                        {
                                "id": 107,
                                "product": "pc",
                                "price": 10000
                        }
                ]
        },
        {
                "id": 5,
                "name": "Sakthi",
                "position": "Front-end Developer",
                "salary": 60000,
                "products": [
                        {
                                "id": 105,
                                "product": "Samsung",
                                "price": 5000
                        },
                        {
                                "id": 108,
                                "product": "Headset",
                                "price": 2000
                        }
                ]
        }
];

let proData = [
        {
                "id": 101,
                "product": "Iphone",
                "price": 7000
        },
        {
                "id": 102,
                "product": "Oppo",
                "price": 45000
        },
        {
                "id": 103,
                "product": "One-plus",
                "price": 6000
        },
        {
                "id": 104,
                "product": "Vivo",
                "price": 4000
        },
        {
                "id": 105,
                "product": "Samsung",
                "price": 5000
        },
        {
                "id": 106,
                "product": "Laptop",
                "price": 8000
        },
        {
                "id": 107,
                "product": "pc",
                "price": 10000
        },
        {
                "id": 108,
                "product": "Headset",
                "price": 2000
        }
];

function displayData(data) {
        let $empContainer = $('#emp-data');
    
        // search input field
        let $search = $('<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">');
        $empContainer.append($search);
    
        // render the employee data
        function renderEmployees(employees) {
            $empContainer.find('.employee').remove();
            employees.forEach(employee => {
                let $personContainer = $('<div class="employee border rounded-2 border-warning p-2 m-2 text-center"></div>');
                $personContainer.text(employee.name);
                $empContainer.append($personContainer);
            });
        }
    
        renderEmployees(data);
    
        // Search functionality
        $search.on('keyup', function() {
            let searchTerm = $(this).val().toLowerCase();
            let filteredData = data.filter(employee => employee.name.toLowerCase().includes(searchTerm));
            renderEmployees(filteredData);
        });
    }
    
    function productData(data) {
        let $productDetailsContainer = $('#product-data');
        data.forEach(product => {
            let $productContainer = $('<div class="border rounded-2 border-warning p-2 m-2 text-center"></div>');
            $productContainer.text(product.product);
            $productDetailsContainer.append($productContainer);
        });
    }
    displayData(empData);
    productData(proData);
