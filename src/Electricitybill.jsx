import React, { useState, useRef } from "react";

function Electricitybill() {

    const [bill, setBill] = useState(null);

    const cid = useRef();
    const cname = useRef();
    const current = useRef();
    const previous = useRef();

    const printBill = () => {

        let id = cid.current.value;
        let name = cname.current.value;
        let cr = Number(current.current.value);
        let pr = Number(previous.current.value);

        if (
            id === "" ||
            name.trim() === "" ||
            current.current.value === "" ||
            previous.current.value === ""
        ) {
            alert("Please enter all details");
            return;
        }

        let units = cr - pr;

        if (units < 0) {
            alert("Current reading cannot be less than previous reading");
            return;
        }

        let rate;

        if (units < 300) {
            rate = 1.75;
        }
        else if (units >= 300 && units < 500) {
            rate = 3.25;
        }
        else {
            rate = 7.25;
        }

        let total = units * rate;

        setBill({
            id: id,
            name: name,
            current: cr,
            previous: pr,
            units: units,
            rate: rate,
            total: total
        });
    };

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                gap: "20px",
                padding: "20px",
                border: "3px solid black"
            }}>

                {/* Input Form */}

                <div style={{
                    border: "3px solid black",
                    borderRadius: "20px",
                    padding: "25px",
                    width: "45%"
                }}>

                    <p>
                        Consumer Id:
                        <input type="number" ref={cid} />
                    </p>

                    <p>
                        Consumer Name:
                        <input type="text" ref={cname} />
                    </p>

                    <p>
                        Current Reading:
                        <input type="number" ref={current} />
                    </p>

                    <p>
                        Previous Reading:
                        <input type="number" ref={previous} />
                    </p>

                    <button onClick={printBill}>
                        PrintBill
                    </button>

                </div>

                {/* Output Format */}

                <div style={{
                    width: "45%",
                    padding: "15px"
                }}>


                    {bill && (
                        <>
                            <p>Consumer Id: {bill.id}</p>

                            <p>Consumer Name: {bill.name}</p>

                            <p>Current Reading: {bill.current}</p>

                            <p>Previous Reading: {bill.previous}</p>

                            <p>Units: {bill.units}</p>

                            <p>Rate: {bill.rate}</p>

                            <h3>
                                Total Bill: {bill.total.toFixed(2)}
                            </h3>
                        </>
                    )}

                </div>

            </div>
        </>
    );
}

export default Electricitybill;