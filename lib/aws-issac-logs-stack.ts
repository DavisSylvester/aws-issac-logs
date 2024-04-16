import { MicroService } from '@sylvesterllc/aws-constructs';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { microServiceProps } from '../config/config';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsIssacLogsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new MicroService(this, 'Microservice', microServiceProps);
  }
}
