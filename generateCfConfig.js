import 'dotenv/config';
import fs from 'fs';

const cfConfig = {
    DistributionId: process.env.CF_DISTRIBUTION_ID,
    InvalidationBatch: {
        Paths: {
            Quantity: 1,
            Items: ['/*']
        },
        CallerReference: Date.now().toString()
    }
}

fs.writeFile('./cfConfig.json', JSON.stringify(cfConfig), (err) => {
    if (err) throw err;
});
