# AWS Lambda and Cloudwatch

A sample project to generate random logs in Cloudwatch

To run the project do the following

## AWS 
Ensure you have created AWS Access Keys for your account

1. Login into the AWS Console.
2. Go to `IAM`
3. Click your account name
4. Click `Security credentials`
5. Click `Create Access key`
6. Click `Command Line Interface (CLI)`

following the rest of the prompts.  *Keep that access key and secret safeguarded!*


7. Install the following applications
   1. [NodeJs](https://nodejs.org/en/download/current)
   2. [Git](https://git-scm.com/)
   3. [AWS CLI](msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi)
8. Clone the Repository `git clone https://github.com/DavisSylvester/aws-issac-logs.git`
9. Change into the directory `cd aws-issac-logs`
10. Configure AWS CLI `aws configure`
11. Install Typescript `npm install -g typescript`
12. Bootstrap the cdk project `cdk bootstrap`
13. Next run `cdk deploy`

We have now created resources inside your personal AWS account.

You can use the AWS Console to view the resources created.  The resources created are:

1. API Gateway 
2. Lambda
3. Cloudwatch Log Groups

Once `cdk deploy` has completed running you will get some output similair to 

```
Outputs:
AwsIssacLogsStack.issacrestapiwithoutDNSEndpointCB9E511D = https://oh7k6gytn8.execute-api.us-east-1.amazonaws.com/prod/
AwsIssacLogsStack.lambda0 = issac-get-random-number
```

You can copy the URL and append `random` to the end to execute the lambda and generate the logs 
in cloudwatch.

Then navigate to Cloudwatch and look for the Log Group `/aws/lambda/issac-get-random-number`


To add additional logs just add more `logger.info(<message>)` into `resources\lambda\get.ts`

After you are complete with testing destroy you stack so you aren't charged any fees.

`cdk destroy`

