import { randomInt } from "node:crypto";

const winston = require('winston');

export async function main(event: any): Promise<any> {

    const logger = loggerService();


    try {
        logger.info('A simple log from the lambda function');

        const startRange: number = 1;
        const endRange: number = 1000;
        const randomnumber: number = randomInt(startRange, endRange);

        const responseBody = {
            message: `Random number between ${startRange} and ${endRange} is ${randomnumber}`,
            value: randomnumber
        };

        logger.info('Random number generated', JSON.stringify(responseBody, null, 5));

        return {
            statusCode: 200,
            body: JSON.stringify(responseBody),
        };
    }

    catch (err) {
        return {
            statusCode: 400,
            body: 'Error getting random number'
        };
    }
}


const loggerService = () => {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'logging-service' },
        transports: [

            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.simple(),
        }));

    };
    return logger;

}
