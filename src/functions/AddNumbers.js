const { app } = require('@azure/functions');

// This is the second function with the same function app

// First function: AddNumbers
// i am trying this if it succed
app.http('AddNumbers', {
    methods: ['GET'],
    authLevel: 'anonymous',

    handler: async (request, context) => {
        const num1 = parseInt(request.query.get("num1")); // Parse num1 from query parameter
        const num2 = parseInt(request.query.get("num2")); // Parse num2 from query parameter
        
        if (num1 && num2){
        // Call the MultiplyNumber function with num1 and num2
            const result = await MultiplyNumber(num1, num2);

            return { body: `The result of ${num1} * ${num2} is ${result}` };            
        }else{
            return {status:404,
            body: "not given"
            }
        }

    }
});

// Second function: MultiplyNumber
const MultiplyNumber = async (num1, num2) => {
    return num1 * num2;
}