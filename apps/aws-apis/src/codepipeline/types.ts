type AcknowledgeJobInput = { jobId: {}; nonce: {} }
type AcknowledgeJobOutput = { status?: {} | undefined }
type AcknowledgeThirdPartyJobInput = { jobId: {}; nonce: {}; clientToken: {} }
type AcknowledgeThirdPartyJobOutput = { status?: {} | undefined }
type CreateCustomActionTypeInput = {
  category: {}
  provider: {}
  version: {}
  settings?:
    | {
        thirdPartyConfigurationUrl?: {} | undefined
        entityUrlTemplate?: {} | undefined
        executionUrlTemplate?: {} | undefined
        revisionUrlTemplate?: {} | undefined
      }
    | undefined
  configurationProperties?: {} | undefined
  inputArtifactDetails: { minimumCount: {}; maximumCount: {} }
  outputArtifactDetails: { minimumCount: {}; maximumCount: {} }
  tags?: {} | undefined
}
type CreateCustomActionTypeOutput = {
  actionType: {
    id: { category: {}; owner: {}; provider: {}; version: {} }
    settings?:
      | {
          thirdPartyConfigurationUrl?: {} | undefined
          entityUrlTemplate?: {} | undefined
          executionUrlTemplate?: {} | undefined
          revisionUrlTemplate?: {} | undefined
        }
      | undefined
    actionConfigurationProperties?: {} | undefined
    inputArtifactDetails: { minimumCount: {}; maximumCount: {} }
    outputArtifactDetails: { minimumCount: {}; maximumCount: {} }
  }
  tags?: {} | undefined
}
type CreatePipelineInput = {
  pipeline: {
    name: {}
    roleArn: {}
    artifactStore?:
      | { type: {}; location: {}; encryptionKey?: { id: {}; type: {} } | undefined }
      | undefined
    artifactStores?: {} | undefined
    stages: {}
    version?: {} | undefined
  }
  tags?: {} | undefined
}
type CreatePipelineOutput = {
  pipeline?:
    | {
        name: {}
        roleArn: {}
        artifactStore?:
          | { type: {}; location: {}; encryptionKey?: { id: {}; type: {} } | undefined }
          | undefined
        artifactStores?: {} | undefined
        stages: {}
        version?: {} | undefined
      }
    | undefined
  tags?: {} | undefined
}
type DeleteCustomActionTypeInput = { category: {}; provider: {}; version: {} }
type DeletePipelineInput = { name: {} }
type DeleteWebhookInput = { name: {} }
type DeleteWebhookOutput = { [x: string]: unknown }
type DeregisterWebhookWithThirdPartyInput = { webhookName?: {} | undefined }
type DeregisterWebhookWithThirdPartyOutput = { [x: string]: unknown }
type DisableStageTransitionInput = {
  pipelineName: {}
  stageName: {}
  transitionType: {}
  reason: {}
}
type EnableStageTransitionInput = { pipelineName: {}; stageName: {}; transitionType: {} }
type GetActionTypeInput = { category: {}; owner: {}; provider: {}; version: {} }
type GetActionTypeOutput = {
  actionType?:
    | {
        description?: {} | undefined
        executor: {
          configuration: {
            lambdaExecutorConfiguration?: { lambdaFunctionArn: {} } | undefined
            jobWorkerExecutorConfiguration?:
              | { pollingAccounts?: {} | undefined; pollingServicePrincipals?: {} | undefined }
              | undefined
          }
          type: {}
          policyStatementsTemplate?: {} | undefined
          jobTimeout?: {} | undefined
        }
        id: { category: {}; owner: {}; provider: {}; version: {} }
        inputArtifactDetails: { minimumCount: {}; maximumCount: {} }
        outputArtifactDetails: { minimumCount: {}; maximumCount: {} }
        permissions?: { allowedAccounts: {} } | undefined
        properties?: { [x: string]: unknown } | undefined
        urls?:
          | {
              configurationUrl?: {} | undefined
              entityUrlTemplate?: {} | undefined
              executionUrlTemplate?: {} | undefined
              revisionUrlTemplate?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetJobDetailsInput = { jobId: {} }
type GetJobDetailsOutput = {
  jobDetails?:
    | {
        id?: {} | undefined
        data?:
          | {
              actionTypeId?: { category: {}; owner: {}; provider: {}; version: {} } | undefined
              actionConfiguration?: { configuration?: {} | undefined } | undefined
              pipelineContext?:
                | {
                    pipelineName?: {} | undefined
                    stage?: { name?: {} | undefined } | undefined
                    action?:
                      | { name?: {} | undefined; actionExecutionId?: {} | undefined }
                      | undefined
                    pipelineArn?: {} | undefined
                    pipelineExecutionId?: {} | undefined
                  }
                | undefined
              inputArtifacts?: {} | undefined
              outputArtifacts?: {} | undefined
              artifactCredentials?:
                | { accessKeyId: {}; secretAccessKey: {}; sessionToken: {} }
                | undefined
              continuationToken?: {} | undefined
              encryptionKey?: { id: {}; type: {} } | undefined
            }
          | undefined
        accountId?: {} | undefined
      }
    | undefined
}
type GetPipelineInput = { name: {}; version?: {} | undefined }
type GetPipelineOutput = {
  pipeline?:
    | {
        name: {}
        roleArn: {}
        artifactStore?:
          | { type: {}; location: {}; encryptionKey?: { id: {}; type: {} } | undefined }
          | undefined
        artifactStores?: {} | undefined
        stages: {}
        version?: {} | undefined
      }
    | undefined
  metadata?:
    | {
        pipelineArn?: {} | undefined
        created?: {} | undefined
        updated?: {} | undefined
        pollingDisabledAt?: {} | undefined
      }
    | undefined
}
type GetPipelineExecutionInput = { pipelineName: {}; pipelineExecutionId: {} }
type GetPipelineExecutionOutput = {
  pipelineExecution?:
    | {
        pipelineName?: {} | undefined
        pipelineVersion?: {} | undefined
        pipelineExecutionId?: {} | undefined
        status?: {} | undefined
        statusSummary?: {} | undefined
        artifactRevisions?: {} | undefined
      }
    | undefined
}
type GetPipelineStateInput = { name: {} }
type GetPipelineStateOutput = {
  pipelineName?: {} | undefined
  pipelineVersion?: {} | undefined
  stageStates?: {} | undefined
  created?: {} | undefined
  updated?: {} | undefined
}
type GetThirdPartyJobDetailsInput = { jobId: {}; clientToken: {} }
type GetThirdPartyJobDetailsOutput = {
  jobDetails?:
    | {
        id?: {} | undefined
        data?:
          | {
              actionTypeId?: { category: {}; owner: {}; provider: {}; version: {} } | undefined
              actionConfiguration?: { configuration?: {} | undefined } | undefined
              pipelineContext?:
                | {
                    pipelineName?: {} | undefined
                    stage?: { name?: {} | undefined } | undefined
                    action?:
                      | { name?: {} | undefined; actionExecutionId?: {} | undefined }
                      | undefined
                    pipelineArn?: {} | undefined
                    pipelineExecutionId?: {} | undefined
                  }
                | undefined
              inputArtifacts?: {} | undefined
              outputArtifacts?: {} | undefined
              artifactCredentials?:
                | { accessKeyId: {}; secretAccessKey: {}; sessionToken: {} }
                | undefined
              continuationToken?: {} | undefined
              encryptionKey?: { id: {}; type: {} } | undefined
            }
          | undefined
        nonce?: {} | undefined
      }
    | undefined
}
type ListActionExecutionsInput = {
  pipelineName: {}
  filter?: { pipelineExecutionId?: {} | undefined } | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListActionExecutionsOutput = {
  actionExecutionDetails?: {} | undefined
  nextToken?: {} | undefined
}
type ListActionTypesInput = {
  actionOwnerFilter?: {} | undefined
  nextToken?: {} | undefined
  regionFilter?: {} | undefined
}
type ListActionTypesOutput = { actionTypes: {}; nextToken?: {} | undefined }
type ListPipelineExecutionsInput = {
  pipelineName: {}
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListPipelineExecutionsOutput = {
  pipelineExecutionSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListPipelinesInput = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type ListPipelinesOutput = { pipelines?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceInput = {
  resourceArn: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListTagsForResourceOutput = { tags?: {} | undefined; nextToken?: {} | undefined }
type ListWebhooksInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListWebhooksOutput = { webhooks?: {} | undefined; NextToken?: {} | undefined }
type PollForJobsInput = {
  actionTypeId: { category: {}; owner: {}; provider: {}; version: {} }
  maxBatchSize?: {} | undefined
  queryParam?: {} | undefined
}
type PollForJobsOutput = { jobs?: {} | undefined }
type PollForThirdPartyJobsInput = {
  actionTypeId: { category: {}; owner: {}; provider: {}; version: {} }
  maxBatchSize?: {} | undefined
}
type PollForThirdPartyJobsOutput = { jobs?: {} | undefined }
type PutActionRevisionInput = {
  pipelineName: {}
  stageName: {}
  actionName: {}
  actionRevision: { revisionId: {}; revisionChangeId: {}; created: {} }
}
type PutActionRevisionOutput = {
  newRevision?: {} | undefined
  pipelineExecutionId?: {} | undefined
}
type PutApprovalResultInput = {
  pipelineName: {}
  stageName: {}
  actionName: {}
  result: { summary: {}; status: {} }
  token: {}
}
type PutApprovalResultOutput = { approvedAt?: {} | undefined }
type PutJobFailureResultInput = {
  jobId: {}
  failureDetails: { type: {}; message: {}; externalExecutionId?: {} | undefined }
}
type PutJobSuccessResultInput = {
  jobId: {}
  currentRevision?:
    | {
        revision: {}
        changeIdentifier: {}
        created?: {} | undefined
        revisionSummary?: {} | undefined
      }
    | undefined
  continuationToken?: {} | undefined
  executionDetails?:
    | {
        summary?: {} | undefined
        externalExecutionId?: {} | undefined
        percentComplete?: {} | undefined
      }
    | undefined
  outputVariables?: {} | undefined
}
type PutThirdPartyJobFailureResultInput = {
  jobId: {}
  clientToken: {}
  failureDetails: { type: {}; message: {}; externalExecutionId?: {} | undefined }
}
type PutThirdPartyJobSuccessResultInput = {
  jobId: {}
  clientToken: {}
  currentRevision?:
    | {
        revision: {}
        changeIdentifier: {}
        created?: {} | undefined
        revisionSummary?: {} | undefined
      }
    | undefined
  continuationToken?: {} | undefined
  executionDetails?:
    | {
        summary?: {} | undefined
        externalExecutionId?: {} | undefined
        percentComplete?: {} | undefined
      }
    | undefined
}
type PutWebhookInput = {
  webhook: {
    name: {}
    targetPipeline: {}
    targetAction: {}
    filters: {}
    authentication: {}
    authenticationConfiguration: { AllowedIPRange?: {} | undefined; SecretToken?: {} | undefined }
  }
  tags?: {} | undefined
}
type PutWebhookOutput = {
  webhook?:
    | {
        definition: {
          name: {}
          targetPipeline: {}
          targetAction: {}
          filters: {}
          authentication: {}
          authenticationConfiguration: {
            AllowedIPRange?: {} | undefined
            SecretToken?: {} | undefined
          }
        }
        url: {}
        errorMessage?: {} | undefined
        errorCode?: {} | undefined
        lastTriggered?: {} | undefined
        arn?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type RegisterWebhookWithThirdPartyInput = { webhookName?: {} | undefined }
type RegisterWebhookWithThirdPartyOutput = { [x: string]: unknown }
type RetryStageExecutionInput = {
  pipelineName: {}
  stageName: {}
  pipelineExecutionId: {}
  retryMode: {}
}
type RetryStageExecutionOutput = { pipelineExecutionId?: {} | undefined }
type StartPipelineExecutionInput = { name: {}; clientRequestToken?: {} | undefined }
type StartPipelineExecutionOutput = { pipelineExecutionId?: {} | undefined }
type StopPipelineExecutionInput = {
  pipelineName: {}
  pipelineExecutionId: {}
  abandon?: {} | undefined
  reason?: {} | undefined
}
type StopPipelineExecutionOutput = { pipelineExecutionId?: {} | undefined }
type TagResourceInput = { resourceArn: {}; tags: {} }
type TagResourceOutput = { [x: string]: unknown }
type UntagResourceInput = { resourceArn: {}; tagKeys: {} }
type UntagResourceOutput = { [x: string]: unknown }
type UpdateActionTypeInput = {
  actionType: {
    description?: {} | undefined
    executor: {
      configuration: {
        lambdaExecutorConfiguration?: { lambdaFunctionArn: {} } | undefined
        jobWorkerExecutorConfiguration?:
          | { pollingAccounts?: {} | undefined; pollingServicePrincipals?: {} | undefined }
          | undefined
      }
      type: {}
      policyStatementsTemplate?: {} | undefined
      jobTimeout?: {} | undefined
    }
    id: { category: {}; owner: {}; provider: {}; version: {} }
    inputArtifactDetails: { minimumCount: {}; maximumCount: {} }
    outputArtifactDetails: { minimumCount: {}; maximumCount: {} }
    permissions?: { allowedAccounts: {} } | undefined
    properties?: { [x: string]: unknown } | undefined
    urls?:
      | {
          configurationUrl?: {} | undefined
          entityUrlTemplate?: {} | undefined
          executionUrlTemplate?: {} | undefined
          revisionUrlTemplate?: {} | undefined
        }
      | undefined
  }
}
type UpdatePipelineInput = {
  pipeline: {
    name: {}
    roleArn: {}
    artifactStore?:
      | { type: {}; location: {}; encryptionKey?: { id: {}; type: {} } | undefined }
      | undefined
    artifactStores?: {} | undefined
    stages: {}
    version?: {} | undefined
  }
}
type UpdatePipelineOutput = {
  pipeline?:
    | {
        name: {}
        roleArn: {}
        artifactStore?:
          | { type: {}; location: {}; encryptionKey?: { id: {}; type: {} } | undefined }
          | undefined
        artifactStores?: {} | undefined
        stages: {}
        version?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.AcknowledgeJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcknowledgeJobInput }
        output: AcknowledgeJobOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.AcknowledgeThirdPartyJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcknowledgeThirdPartyJobInput }
        output: AcknowledgeThirdPartyJobOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.CreateCustomActionType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCustomActionTypeInput }
        output: CreateCustomActionTypeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.CreatePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.CreatePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePipelineInput }
        output: CreatePipelineOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.DeleteCustomActionType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCustomActionTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.DeletePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.DeletePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePipelineInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.DeleteWebhook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.DeleteWebhook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWebhookInput }
        output: DeleteWebhookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.DeregisterWebhookWithThirdParty'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterWebhookWithThirdPartyInput }
        output: DeregisterWebhookWithThirdPartyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.DisableStageTransition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.DisableStageTransition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableStageTransitionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.EnableStageTransition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.EnableStageTransition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableStageTransitionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.GetActionType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.GetActionType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetActionTypeInput }
        output: GetActionTypeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.GetJobDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.GetJobDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobDetailsInput }
        output: GetJobDetailsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.GetPipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.GetPipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPipelineInput }
        output: GetPipelineOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.GetPipelineExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPipelineExecutionInput }
        output: GetPipelineExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.GetPipelineState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.GetPipelineState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPipelineStateInput }
        output: GetPipelineStateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.GetThirdPartyJobDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetThirdPartyJobDetailsInput }
        output: GetThirdPartyJobDetailsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.ListActionExecutions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.ListActionExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListActionExecutionsInput }
        output: ListActionExecutionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.ListActionTypes': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.ListActionTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListActionTypesInput }
        output: ListActionTypesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.ListPipelineExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPipelineExecutionsInput }
        output: ListPipelineExecutionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.ListPipelines': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.ListPipelines'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPipelinesInput }
        output: ListPipelinesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.ListTagsForResource': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceInput }
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.ListWebhooks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.ListWebhooks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWebhooksInput }
        output: ListWebhooksOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PollForJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PollForJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PollForJobsInput }
        output: PollForJobsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PollForThirdPartyJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PollForThirdPartyJobsInput }
        output: PollForThirdPartyJobsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PutActionRevision': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PutActionRevision'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutActionRevisionInput }
        output: PutActionRevisionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PutApprovalResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PutApprovalResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutApprovalResultInput }
        output: PutApprovalResultOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PutJobFailureResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutJobFailureResultInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PutJobSuccessResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutJobSuccessResultInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PutThirdPartyJobFailureResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutThirdPartyJobFailureResultInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PutThirdPartyJobSuccessResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutThirdPartyJobSuccessResultInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.PutWebhook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.PutWebhook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutWebhookInput }
        output: PutWebhookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.RegisterWebhookWithThirdParty'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterWebhookWithThirdPartyInput }
        output: RegisterWebhookWithThirdPartyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.RetryStageExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.RetryStageExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RetryStageExecutionInput }
        output: RetryStageExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.StartPipelineExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartPipelineExecutionInput }
        output: StartPipelineExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.StopPipelineExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopPipelineExecutionInput }
        output: StopPipelineExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceInput }
        output: TagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceInput }
        output: UntagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.UpdateActionType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.UpdateActionType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateActionTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodePipeline_20150709.UpdatePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodePipeline_20150709.UpdatePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePipelineInput }
        output: UpdatePipelineOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
