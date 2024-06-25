import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SampleProjectPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: "testPipeline",
      synth: new ShellStep('synth', {
        input: CodePipelineSource.gitHub('topervillablanca/aws-pipeline-sample', 'master'),
        commands: [
          'cd sample-project-pipeline-stack', 
          'npm ci',
          'npm run build',
          'npm cdk synth'
        ],
        primaryOutputDirectory: 'sample-project-pipeline-stack/cdk.out',
      })
    })
  }
}
