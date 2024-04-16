
import { MicroserviceProps, TsgAuthorizerType } from "@sylvesterllc/aws-constructs";
import { AttributeType, BillingMode, ProjectionType } from "aws-cdk-lib/aws-dynamodb";
import { Runtime } from "aws-cdk-lib/aws-lambda";

export const microServiceProps: MicroserviceProps = {
    GLOBALS: {
        name: `issac-logs-sample`,
        stackRuntime: Runtime.NODEJS_LATEST,
        prefix: `issac`,
        accountNumber: process.env.CDK_DEFAULT_ACCOUNT!,
        region: process.env.CDK_DEFAULT_REGION!,
    },
    API: {
        Name: `api`,
        Description: 'Issac API',
    },
    RESOURCES: {
        LAMBDA: [
            {
                name: `get-random-number`,
                codePath: './resources/lambda/get.ts',
                handler: 'main',
                apiGateway: {
                    method: 'get',
                    route: '/random',
                    useRouteOverride: true,

                },
                environment: {}
            },
        ],
    }
}; 
