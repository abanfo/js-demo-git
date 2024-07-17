const { app } = require('@azure/functions');

// updated
app.http('MultiplyNumbers', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name');
        const name1 = request.query.get('name1');

        if (name && name1){
            return { body: name *name1 };
        }else{
            return {status:400,
                body: "One of the input is missed or both"
            }
        }

        
    }
});
