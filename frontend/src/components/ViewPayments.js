//viewing unverified payments
import React, { useEffect, useState } from 'react';

function ViewPayments() {
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState(null);

    // Replace with actual JWT token for authorized access
    const jwtToken = "your_jwt_token_here";

    useEffect(() => {
        // Fetch payments list from API
        const fetchPayments = async () => {
            try {
                const response = await fetch('/api/employee/payments', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch payments');
                }

                const data = await response.json();
                setPayments(data); // Assumes `data` is an array of payment objects
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPayments();
    }, [jwtToken]);

    return (
        <div>
            <h2>Unverified Payments</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <ul>
                    {payments.map((payment, index) => (
                        <li key={index}>
                            <p><strong>Payer Account Number:</strong> {payment.payerAccountNumber}</p>
                            <p><strong>Amount:</strong> {payment.amount}</p>
                            <p><strong>Currency:</strong> {payment.currency}</p>
                            <p><strong>Provider:</strong> {payment.provider}</p>
                            <p><strong>Payee Account Number:</strong> {payment.payeeAccountNumber}</p>
                            <p><strong>Payee Account Owner:</strong> {payment.payeeAccountOwner}</p>
                            <p><strong>Swift Code:</strong> {payment.swiftCode}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ViewPayments;
