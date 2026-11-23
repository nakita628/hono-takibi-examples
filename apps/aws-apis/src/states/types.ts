type CreateActivityInput = { name: {}; tags?: {} | undefined }
type CreateActivityOutput = { activityArn: {}; creationDate: {} }
type ActivityLimitExceeded = { [x: string]: unknown }
type InvalidName = { [x: string]: unknown }
type TooManyTags = { [x: string]: unknown }
type CreateStateMachineInput = {
  name: {}
  definition: {}
  roleArn: {}
  type?: {} | undefined
  loggingConfiguration?:
    | {
        level?: {} | undefined
        includeExecutionData?: {} | undefined
        destinations?: {} | undefined
      }
    | undefined
  tags?: {} | undefined
  tracingConfiguration?: { enabled?: {} | undefined } | undefined
  publish?: {} | undefined
  versionDescription?: {} | undefined
}
type CreateStateMachineOutput = {
  stateMachineArn: {}
  creationDate: {}
  stateMachineVersionArn?: {} | undefined
}
type InvalidArn = { [x: string]: unknown }
type InvalidDefinition = { [x: string]: unknown }
type InvalidLoggingConfiguration = { [x: string]: unknown }
type InvalidTracingConfiguration = { [x: string]: unknown }
type StateMachineAlreadyExists = { [x: string]: unknown }
type StateMachineDeleting = { [x: string]: unknown }
type StateMachineLimitExceeded = { [x: string]: unknown }
type StateMachineTypeNotSupported = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type CreateStateMachineAliasInput = {
  description?: {} | undefined
  name: {}
  routingConfiguration: {}
}
type CreateStateMachineAliasOutput = { stateMachineAliasArn: {}; creationDate: {} }
type ResourceNotFound = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type DeleteActivityInput = { activityArn: {} }
type DeleteActivityOutput = { [x: string]: unknown }
type DeleteStateMachineInput = { stateMachineArn: {} }
type DeleteStateMachineOutput = { [x: string]: unknown }
type DeleteStateMachineAliasInput = { stateMachineAliasArn: {} }
type DeleteStateMachineAliasOutput = { [x: string]: unknown }
type DeleteStateMachineVersionInput = { stateMachineVersionArn: {} }
type DeleteStateMachineVersionOutput = { [x: string]: unknown }
type DescribeActivityInput = { activityArn: {} }
type DescribeActivityOutput = { activityArn: {}; name: {}; creationDate: {} }
type ActivityDoesNotExist = { [x: string]: unknown }
type DescribeExecutionInput = { executionArn: {} }
type CloudWatchEventsExecutionDataDetails = { included?: {} | undefined }
type DescribeExecutionOutput = {
  executionArn: {}
  stateMachineArn: {}
  name?: {} | undefined
  status: {}
  startDate: {}
  stopDate?: {} | undefined
  input?: {} | undefined
  inputDetails?: CloudWatchEventsExecutionDataDetails | undefined
  output?: {} | undefined
  outputDetails?: CloudWatchEventsExecutionDataDetails | undefined
  traceHeader?: {} | undefined
  mapRunArn?: {} | undefined
  error?: {} | undefined
  cause?: {} | undefined
  stateMachineVersionArn?: {} | undefined
  stateMachineAliasArn?: {} | undefined
}
type ExecutionDoesNotExist = { [x: string]: unknown }
type DescribeMapRunInput = { mapRunArn: {} }
type DescribeMapRunOutput = {
  mapRunArn: {}
  executionArn: {}
  status: {}
  startDate: {}
  stopDate?: {} | undefined
  maxConcurrency: {}
  toleratedFailurePercentage: {}
  toleratedFailureCount: {}
  itemCounts: {
    pending: {}
    running: {}
    succeeded: {}
    failed: {}
    timedOut: {}
    aborted: {}
    total: {}
    resultsWritten: {}
  }
  executionCounts: {
    pending: {}
    running: {}
    succeeded: {}
    failed: {}
    timedOut: {}
    aborted: {}
    total: {}
    resultsWritten: {}
  }
}
type DescribeStateMachineInput = { stateMachineArn: {} }
type LoggingConfiguration = {
  level?: {} | undefined
  includeExecutionData?: {} | undefined
  destinations?: {} | undefined
}
type DescribeStateMachineOutput = {
  stateMachineArn: {}
  name: {}
  status?: {} | undefined
  definition: {}
  roleArn: {}
  type: {}
  creationDate: {}
  loggingConfiguration?: LoggingConfiguration | undefined
  tracingConfiguration?: { enabled?: {} | undefined } | undefined
  label?: {} | undefined
  revisionId?: {} | undefined
  description?: {} | undefined
}
type StateMachineDoesNotExist = { [x: string]: unknown }
type DescribeStateMachineAliasInput = { stateMachineAliasArn: {} }
type DescribeStateMachineAliasOutput = {
  stateMachineAliasArn?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  routingConfiguration?: {} | undefined
  creationDate?: {} | undefined
  updateDate?: {} | undefined
}
type DescribeStateMachineForExecutionInput = { executionArn: {} }
type DescribeStateMachineForExecutionOutput = {
  stateMachineArn: {}
  name: {}
  definition: {}
  roleArn: {}
  updateDate: {}
  loggingConfiguration?: LoggingConfiguration | undefined
  tracingConfiguration?: { enabled?: {} | undefined } | undefined
  mapRunArn?: {} | undefined
  label?: {} | undefined
  revisionId?: {} | undefined
}
type GetActivityTaskInput = { activityArn: {}; workerName?: {} | undefined }
type GetActivityTaskOutput = { taskToken?: {} | undefined; input?: {} | undefined }
type ActivityWorkerLimitExceeded = { [x: string]: unknown }
type GetExecutionHistoryInput = {
  executionArn: {}
  maxResults?: {} | undefined
  reverseOrder?: {} | undefined
  nextToken?: {} | undefined
  includeExecutionData?: {} | undefined
}
type GetExecutionHistoryOutput = { events: {}; nextToken?: {} | undefined }
type InvalidToken = { [x: string]: unknown }
type ListActivitiesInput = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListActivitiesOutput = { activities: {}; nextToken?: {} | undefined }
type ListExecutionsInput = {
  stateMachineArn?: {} | undefined
  statusFilter?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  mapRunArn?: {} | undefined
}
type ListExecutionsOutput = { executions: {}; nextToken?: {} | undefined }
type ListMapRunsInput = {
  executionArn: {}
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListMapRunsOutput = { mapRuns: {}; nextToken?: {} | undefined }
type ListStateMachineAliasesInput = {
  stateMachineArn: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListStateMachineAliasesOutput = { stateMachineAliases: {}; nextToken?: {} | undefined }
type ListStateMachineVersionsInput = {
  stateMachineArn: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListStateMachineVersionsOutput = { stateMachineVersions: {}; nextToken?: {} | undefined }
type ListStateMachinesInput = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type StateMachineListItem = { stateMachineArn: {}; name: {}; type: {}; creationDate: {} }
type StateMachineList = StateMachineListItem[]
type ListStateMachinesOutput = { stateMachines: StateMachineList; nextToken?: {} | undefined }
type ListTagsForResourceInput = { resourceArn: {} }
type ListTagsForResourceOutput = { tags?: {} | undefined }
type PublishStateMachineVersionInput = {
  stateMachineArn: {}
  revisionId?: {} | undefined
  description?: {} | undefined
}
type PublishStateMachineVersionOutput = { creationDate: {}; stateMachineVersionArn: {} }
type SendTaskFailureInput = { taskToken: {}; error?: {} | undefined; cause?: {} | undefined }
type SendTaskFailureOutput = { [x: string]: unknown }
type TaskDoesNotExist = { [x: string]: unknown }
type TaskTimedOut = { [x: string]: unknown }
type SendTaskHeartbeatInput = { taskToken: {} }
type SendTaskHeartbeatOutput = { [x: string]: unknown }
type SendTaskSuccessInput = { taskToken: {}; output: {} }
type SendTaskSuccessOutput = { [x: string]: unknown }
type InvalidOutput = { [x: string]: unknown }
type StartExecutionInput = {
  stateMachineArn: {}
  name?: {} | undefined
  input?: {} | undefined
  traceHeader?: {} | undefined
}
type StartExecutionOutput = { executionArn: {}; startDate: {} }
type ExecutionLimitExceeded = { [x: string]: unknown }
type ExecutionAlreadyExists = { [x: string]: unknown }
type InvalidExecutionInput = { [x: string]: unknown }
type StartSyncExecutionInput = {
  stateMachineArn: {}
  name?: {} | undefined
  input?: {} | undefined
  traceHeader?: {} | undefined
}
type StartSyncExecutionOutput = {
  executionArn: {}
  stateMachineArn?: {} | undefined
  name?: {} | undefined
  startDate: {}
  stopDate: {}
  status: {}
  error?: {} | undefined
  cause?: {} | undefined
  input?: {} | undefined
  inputDetails?: CloudWatchEventsExecutionDataDetails | undefined
  output?: {} | undefined
  outputDetails?: CloudWatchEventsExecutionDataDetails | undefined
  traceHeader?: {} | undefined
  billingDetails?:
    | { billedMemoryUsedInMB?: {} | undefined; billedDurationInMilliseconds?: {} | undefined }
    | undefined
}
type StopExecutionInput = { executionArn: {}; error?: {} | undefined; cause?: {} | undefined }
type StopExecutionOutput = { stopDate: {} }
type TagResourceInput = { resourceArn: {}; tags: {} }
type TagResourceOutput = { [x: string]: unknown }
type UntagResourceInput = { resourceArn: {}; tagKeys: {} }
type UntagResourceOutput = { [x: string]: unknown }
type UpdateMapRunInput = {
  mapRunArn: {}
  maxConcurrency?: {} | undefined
  toleratedFailurePercentage?: {} | undefined
  toleratedFailureCount?: {} | undefined
}
type UpdateMapRunOutput = { [x: string]: unknown }
type UpdateStateMachineInput = {
  stateMachineArn: {}
  definition?: {} | undefined
  roleArn?: {} | undefined
  loggingConfiguration?:
    | {
        level?: {} | undefined
        includeExecutionData?: {} | undefined
        destinations?: {} | undefined
      }
    | undefined
  tracingConfiguration?: { enabled?: {} | undefined } | undefined
  publish?: {} | undefined
  versionDescription?: {} | undefined
}
type UpdateStateMachineOutput = {
  updateDate: {}
  revisionId?: {} | undefined
  stateMachineVersionArn?: {} | undefined
}
type MissingRequiredParameter = { [x: string]: unknown }
type UpdateStateMachineAliasInput = {
  stateMachineAliasArn: {}
  description?: {} | undefined
  routingConfiguration?: {} | undefined
}
type UpdateStateMachineAliasOutput = { updateDate: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSStepFunctions.CreateActivity': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateActivityInput }
            output: CreateActivityOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateActivityInput }
            output: ActivityLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateActivityInput }
            output: InvalidName
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateActivityInput }
            output: TooManyTags
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachine': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: CreateStateMachineOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: InvalidDefinition
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: InvalidName
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: InvalidLoggingConfiguration
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: InvalidTracingConfiguration
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: StateMachineAlreadyExists
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: StateMachineDeleting
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: StateMachineLimitExceeded
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: StateMachineTypeNotSupported
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: TooManyTags
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: ValidationException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineInput }
            output: ConflictException
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: CreateStateMachineAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: InvalidName
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: StateMachineDeleting
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.CreateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStateMachineAliasInput }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteActivity': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteActivityInput }
            output: DeleteActivityOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteActivityInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachine': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineInput }
            output: DeleteStateMachineOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineInput }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineAliasInput }
            output: DeleteStateMachineAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineAliasInput }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineAliasInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineAliasInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineAliasInput }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineVersionInput }
            output: DeleteStateMachineVersionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineVersionInput }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineVersionInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DeleteStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStateMachineVersionInput }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeActivity': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeActivityInput }
            output: DescribeActivityOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeActivityInput }
            output: ActivityDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeActivity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeActivityInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExecutionInput }
            output: DescribeExecutionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExecutionInput }
            output: ExecutionDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExecutionInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeMapRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeMapRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMapRunInput }
            output: DescribeMapRunOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeMapRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMapRunInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeMapRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMapRunInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachine': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineInput }
            output: DescribeStateMachineOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineInput }
            output: StateMachineDoesNotExist
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineAliasInput }
            output: DescribeStateMachineAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineAliasInput }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineAliasInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineAliasInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachineForExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineForExecutionInput }
            output: DescribeStateMachineForExecutionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachineForExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineForExecutionInput }
            output: ExecutionDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.DescribeStateMachineForExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStateMachineForExecutionInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.GetActivityTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetActivityTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetActivityTaskInput }
            output: GetActivityTaskOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetActivityTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetActivityTaskInput }
            output: ActivityDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetActivityTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetActivityTaskInput }
            output: ActivityWorkerLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetActivityTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetActivityTaskInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.GetExecutionHistory': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetExecutionHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetExecutionHistoryInput }
            output: GetExecutionHistoryOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetExecutionHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetExecutionHistoryInput }
            output: ExecutionDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetExecutionHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetExecutionHistoryInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.GetExecutionHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetExecutionHistoryInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListActivities': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListActivities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListActivitiesInput }
            output: ListActivitiesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListActivities'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListActivitiesInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListExecutions': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExecutionsInput }
            output: ListExecutionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExecutionsInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExecutionsInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExecutionsInput }
            output: StateMachineDoesNotExist
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExecutionsInput }
            output: StateMachineTypeNotSupported
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExecutionsInput }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExecutionsInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListMapRuns': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListMapRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMapRunsInput }
            output: ListMapRunsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListMapRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMapRunsInput }
            output: ExecutionDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListMapRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMapRunsInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListMapRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMapRunsInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineAliasesInput }
            output: ListStateMachineAliasesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineAliasesInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineAliasesInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineAliasesInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineAliasesInput }
            output: StateMachineDoesNotExist
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineAliasesInput }
            output: StateMachineDeleting
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineVersionsInput }
            output: ListStateMachineVersionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineVersionsInput }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineVersionsInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachineVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachineVersionsInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachines': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachines'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachinesInput }
            output: ListStateMachinesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListStateMachines'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStateMachinesInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListTagsForResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.PublishStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishStateMachineVersionInput }
            output: PublishStateMachineVersionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.PublishStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishStateMachineVersionInput }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.PublishStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishStateMachineVersionInput }
            output: StateMachineDeleting
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.PublishStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishStateMachineVersionInput }
            output: StateMachineDoesNotExist
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.PublishStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishStateMachineVersionInput }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.PublishStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishStateMachineVersionInput }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.PublishStateMachineVersion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PublishStateMachineVersionInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.SendTaskFailure': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskFailure'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskFailureInput }
            output: SendTaskFailureOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskFailure'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskFailureInput }
            output: TaskDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskFailure'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskFailureInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskFailure'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskFailureInput }
            output: TaskTimedOut
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskHeartbeat'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskHeartbeatInput }
            output: SendTaskHeartbeatOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskHeartbeat'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskHeartbeatInput }
            output: TaskDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskHeartbeat'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskHeartbeatInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskHeartbeat'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskHeartbeatInput }
            output: TaskTimedOut
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.SendTaskSuccess': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskSuccessInput }
            output: SendTaskSuccessOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskSuccessInput }
            output: TaskDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskSuccessInput }
            output: InvalidOutput
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskSuccessInput }
            output: InvalidToken
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.SendTaskSuccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendTaskSuccessInput }
            output: TaskTimedOut
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.StartExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: StartExecutionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: ExecutionLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: ExecutionAlreadyExists
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: InvalidExecutionInput
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: InvalidName
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: StateMachineDoesNotExist
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: StateMachineDeleting
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartExecutionInput }
            output: ValidationException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.StartSyncExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartSyncExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSyncExecutionInput }
            output: StartSyncExecutionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartSyncExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSyncExecutionInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartSyncExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSyncExecutionInput }
            output: InvalidExecutionInput
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartSyncExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSyncExecutionInput }
            output: InvalidName
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartSyncExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSyncExecutionInput }
            output: StateMachineDoesNotExist
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartSyncExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSyncExecutionInput }
            output: StateMachineDeleting
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StartSyncExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartSyncExecutionInput }
            output: StateMachineTypeNotSupported
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.StopExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StopExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopExecutionInput }
            output: StopExecutionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StopExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopExecutionInput }
            output: ExecutionDoesNotExist
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StopExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopExecutionInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.StopExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopExecutionInput }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.TagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: TooManyTags
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UntagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UpdateMapRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateMapRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMapRunInput }
            output: UpdateMapRunOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateMapRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMapRunInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateMapRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMapRunInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateMapRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMapRunInput }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachine': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: UpdateStateMachineOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: InvalidDefinition
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: InvalidLoggingConfiguration
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: InvalidTracingConfiguration
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: MissingRequiredParameter
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: StateMachineDeleting
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: StateMachineDoesNotExist
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: ConflictException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachine'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineInput }
            output: ValidationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineAliasInput }
            output: UpdateStateMachineAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineAliasInput }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineAliasInput }
            output: InvalidArn
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineAliasInput }
            output: ResourceNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSStepFunctions.UpdateStateMachineAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStateMachineAliasInput }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
