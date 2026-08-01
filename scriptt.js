/* =========================================
   CORIZO LEARN - MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. WELCOME MESSAGE
========================================= */

function showMessage() {

    alert("Welcome to Corizo E-Commerce Portal");

}


/* =========================================
   2. REGISTER USER
========================================= */

function registerUser() {

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let phone =
        document.getElementById("phone").value;

    let password =
        document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;


    /* Check empty fields */

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all the fields");

        return;

    }


    /* Check password */

    if (password !== confirmPassword) {

        alert("Passwords do not match");

        return;

    }


    /* Save user data */

    localStorage.setItem(
        "userName",
        name
    );

    localStorage.setItem(
        "userEmail",
        email
    );

    localStorage.setItem(
        "userPhone",
        phone
    );

    localStorage.setItem(
        "userPassword",
        password
    );


    alert(
        "Registration successful!"
    );


    window.location.href =
        "login.html";

}


/* =========================================
   3. LOGIN USER
========================================= */

function loginUser() {

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;


    /* Get registered details */

    let savedEmail =
        localStorage.getItem(
            "userEmail"
        );

    let savedPassword =
        localStorage.getItem(
            "userPassword"
        );


    /* Check login */

    if (
        email === savedEmail &&
        password === savedPassword
    ) {

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        alert(
            "Login successful! Welcome to CorizoLearn."
        );


        window.location.href =
            "courses.html";

    }

    else {

        alert(
            "Invalid email or password."
        );

    }

}


/* =========================================
   4. SELECT COURSE
========================================= */

function selectCourse(
    courseName,
    coursePrice
) {

    localStorage.setItem(
        "selectedCourse",
        courseName
    );


    localStorage.setItem(
        "selectedPrice",
        coursePrice
    );


    window.location.href =
        "product.html";

}


/* =========================================
   5. ADD COURSE TO CART
========================================= */

function addToCart(
    courseName,
    coursePrice
) {

    let cartItem = {

        name:
            courseName,

        price:
            coursePrice

    };


    localStorage.setItem(
        "cartItem",
        JSON.stringify(cartItem)
    );


    alert(
        courseName +
        " has been added to your cart!"
    );


    window.location.href =
        "cart.html";

}


/* =========================================
   6. LOAD PRODUCT DETAILS
========================================= */

function loadProduct() {

    let course =
        localStorage.getItem(
            "selectedCourse"
        );

    let price =
        localStorage.getItem(
            "selectedPrice"
        );


    if (course) {

        let courseElement =
            document.getElementById(
                "productCourse"
            );


        if (courseElement) {

            courseElement.innerText =
                course;

        }

    }


    if (price) {

        let priceElement =
            document.getElementById(
                "productPrice"
            );


        if (priceElement) {

            priceElement.innerText =
                "₹" + price;

        }

    }

}


/* =========================================
   7. LOAD CART
========================================= */

function loadCart() {

    let cart =
        localStorage.getItem(
            "cartItem"
        );


    if (!cart) {

        return;

    }


    let cartData =
        JSON.parse(cart);


    let courseElement =
        document.getElementById(
            "cartCourse"
        );


    let priceElement =
        document.getElementById(
            "cartPrice"
        );


    if (courseElement) {

        courseElement.innerText =
            cartData.name;

    }


    if (priceElement) {

        priceElement.innerText =
            "₹" + cartData.price;

    }

}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder() {

    // Get student information

    let name =
        document.getElementById("studentName").value.trim();

    let email =
        document.getElementById("studentEmail").value.trim();

    let phone =
        document.getElementById("studentPhone").value.trim();


    // Get address

    let address =
        document.getElementById("studentAddress").value.trim();


    // Get Terms checkbox

    let terms =
        document.getElementById("terms").checked;


    // Check required fields

    if (
        name === "" ||
        email === "" ||
        phone === ""
    ) {

        alert(
            "Please fill in all required student details."
        );

        return;

    }


    // Check address

    if (address === "") {

        alert(
            "Please enter your address."
        );

        return;

    }


    // Check Terms & Conditions

    if (!terms) {

        alert(
            "Please agree to the Terms & Conditions."
        );

        return;

    }


    // Get selected payment method

    let paymentMethod =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    // Store student details

    localStorage.setItem(
        "studentName",
        name
    );


    localStorage.setItem(
        "studentEmail",
        email
    );


    localStorage.setItem(
        "studentPhone",
        phone
    );


    localStorage.setItem(
        "studentAddress",
        address
    );


    // Store course information

    localStorage.setItem(
        "courseName",
        "Full Stack Web Development Internship"
    );


    localStorage.setItem(
        "coursePrice",
        "₹4,999"
    );


    // Store payment method

    localStorage.setItem(
        "paymentMethod",
        paymentMethod
    );


    // Generate Order ID

    let orderID =
        "CRZ-" +
        Math.floor(
            1000 +
            Math.random() * 9000
        );


    localStorage.setItem(
        "orderID",
        orderID
    );


    // Store order date

    let orderDate =
        new Date().toLocaleDateString(
            "en-IN"
        );


    localStorage.setItem(
        "orderDate",
        orderDate
    );


    // Store order status

    localStorage.setItem(
        "orderStatus",
        "Order Confirmed"
    );


    // Remove previous cart item

    localStorage.removeItem(
        "cartItem"
    );


    // Success message

    alert(
        "Enrollment successful! Your order has been confirmed."
    );


    // Redirect to orders page

    window.location.href =
        "orders.html";

}

/* =========================================
   9. LOAD ORDER DETAILS
========================================= */

function loadOrder() {


    let studentName =
        localStorage.getItem(
            "studentName"
        );


    let courseName =
        localStorage.getItem(
            "courseName"
        );


    let coursePrice =
        localStorage.getItem(
            "coursePrice"
        );


    let orderID =
        localStorage.getItem(
            "orderID"
        );


    let orderDate =
        localStorage.getItem(
            "orderDate"
        );



    /* Student */

    let studentElement =
        document.getElementById(
            "studentName"
        );


    if (
        studentElement &&
        studentName
    ) {

        studentElement.innerText =
            studentName;

    }



    /* Course */

    let courseElement =
        document.getElementById(
            "courseName"
        );


    if (
        courseElement &&
        courseName
    ) {

        courseElement.innerText =
            courseName;

    }



    /* Price */

    let priceElement =
        document.getElementById(
            "coursePrice"
        );


    if (
        priceElement &&
        coursePrice
    ) {

        priceElement.innerText =
            coursePrice;

    }



    /* Order ID */

    let orderElement =
        document.getElementById(
            "orderId"
        );


    if (
        orderElement &&
        orderID
    ) {

        orderElement.innerText =
            orderID;

    }



    /* Date */

    let dateElement =
        document.getElementById(
            "orderDate"
        );


    if (
        dateElement &&
        orderDate
    ) {

        dateElement.innerText =
            orderDate;

    }

}


/* =========================================
   10. LOGOUT
========================================= */

function logoutUser() {

    localStorage.removeItem(
        "isLoggedIn"
    );


    alert(
        "You have been logged out."
    );


    window.location.href =
        "main.html";

}


/* =========================================
   11. ADMIN QUICK ACTIONS
========================================= */

function addCourse() {

    alert(
        "Add Course feature is ready for implementation."
    );

}


function viewStudents() {

    alert(
        "Student Management section opened."
    );

}


function viewOrders() {

    let orders =
        document.getElementById(
            "orders"
        );


    if (orders) {

        orders.scrollIntoView({
            behavior: "smooth"
        });

    }

}


function viewReports() {

    alert(
        "Report generation feature is ready."
    );

}


/* =========================================
   12. RUN FUNCTIONS WHEN PAGE LOADS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* Product page */

        if (
            document.getElementById(
                "productCourse"
            )
        ) {

            loadProduct();

        }


        /* Cart page */

        if (
            document.getElementById(
                "cartCourse"
            )
        ) {

            loadCart();

        }


        /* Orders page */

        if (
            document.getElementById(
                "orderId"
            )
        ) {

            loadOrder();

        }


    }
);
