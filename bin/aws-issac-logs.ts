#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsIssacLogsStack } from '../lib/aws-issac-logs-stack';

const app = new cdk.App();
new AwsIssacLogsStack(app, 'AwsIssacLogsStack', {
});