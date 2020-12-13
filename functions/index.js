const functions = require('firebase-functions');
const stripe = require('stripe')(functions.config().stripe.key);
const cors = require('cors'); //パッケージ

// Send response when calling APIs
const sendResponse = (response, statusCode, body) => {
    response.send({
        statusCode,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(body)
    });
};

exports.stripeCustomer = functions.https.onRequest((req, res) => {
    const corsHandler = cors({origin: true});

    corsHandler(req, res, () => {
        if (req.method !== 'POST') {
            sendResponse(res, 405, {error: "Invalid Request"})
        }

        return stripe.customers.create({
            description: 'EC App demo user',
            email: req.body.email,
            metadata: {userId: req.body.userId},
            payment_method: req.body.paymentMethod,
        }).then((customer) => {
            sendResponse(res, 200, customer);
        }).catch((error) => {
            sendResponse(res, 500, {error: error})
        })

    })
})

exports.retrievePaymentMethod = functions.https.onRequest((req, res) => {
    const corsHandler = cors({origin: true});

    corsHandler(req, res, () => {
        if (req.method !== 'POST') {
            sendResponse(res, 405, {error: "Invalid Request"})
        }

        return stripe.paymentMethods.retrieve(
            req.body.paymentMethodId
        ).then((customer) => {
            sendResponse(res, 200, customer);
        }).catch((error) => {
            console.error(error);
            sendResponse(res, 500, {error: error})
        })

    })
})

exports.updatePaymentMethod = functions.https.onRequest((req, res) => {
    const corsHandler = cors({origin: true});

    corsHandler(req, res, () => {
        if (req.method !== 'POST') {
            sendResponse(res, 405, {error: "Invalid Request"})
        }

        return stripe.paymentMethods.detach(
            req.body.prevPaymentMethodId
        ).then((paymentMethod) => {
            return stripe.paymentMethods.attach(
                req.body.nextPaymentMethodId,
                {customer: req.body.customerId}
            ).then((nextPaymentMethodId) => {
                sendResponse(res, 200, nextPaymentMethodId);
            })
        }).catch((error) => {
            sendResponse(res, 500, {error: error})
        })

    })
})