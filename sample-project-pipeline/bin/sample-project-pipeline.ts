#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleProjectPipelineStack } from '../lib/sample-project-pipeline-stack';

const app = new cdk.App();
new SampleProjectPipelineStack(app, 'SampleProjectPipelineStack', {
  env: {
    account: "992382358172",
    region: "us-east-1"
  }
});

app.synth();