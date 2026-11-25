import React, { useState, useRef } from "react";

const ProductInvoice = () => {

    const [msg, setMsg] = useState("");
    const [invoice, setInvoice] = useState(null);

    let pid = useRef();
    let pname = useRef();
    let price = useRef();
    let quantity = useRef();

    const printInvoice = () => {

        let productId = pid.current.value;
        let productName = pname.current.value;
        let productPrice = Number(price.current.value);
        let productQuantity = Number(quantity.current.value);

        let total = productPrice * productQuantity;

        let discount = 0;

        if (total < 20000) {
            discount = total * 0.15;
        }
        else if (total >= 20000 && total < 50000) {
            discount = total * 0.21;
        }
        else if (total >= 50000) {
            discount = total * 0.31;
        }

        let gst = (total - discount) * 0.18;

        let final_bill = total - discount + gst;

        setInvoice({
            productId,
            productName,
            productPrice,
            productQuantity,
            total,
            discount,
            gst,
            final_bill
        });

        setMsg("Invoice Generated Successfully");
    };

    return (
        <>
            <h1>Product Invoice</h1>

            Product ID:
            <input type="text" ref={pid} />
            <br /><br />

            Product Name:
            <input type="text" ref={pname} />
            <br /><br />

            Price:
            <input type="number" ref={price} />
            <br /><br />

            Quantity:
            <input type="number" ref={quantity} />
            <br /><br />

            <button onClick={printInvoice}>
                printInvoice
            </button>

            <hr />

            <p>{msg}</p>

            {invoice && (
                <>
                    <h2>Product Invoice Details</h2>

                    <p>Product Id: {invoice.productId}</p>
                    <p>Product name: {invoice.productName}</p>
                    <p>Price: {invoice.productPrice.toFixed(2)}</p>
                    <p>Quantity: {invoice.productQuantity}</p>
                    <p>Total: {invoice.total.toFixed(2)}</p>
                    <p>Discount: {invoice.discount.toFixed(2)}</p>
                    <p>GST: {invoice.gst.toFixed(2)}</p>

                    <h3>
                        Final_bill: {invoice.final_bill.toFixed(2)}
                    </h3>
                </>
            )}
        </>
    );
};

export default ProductInvoice;