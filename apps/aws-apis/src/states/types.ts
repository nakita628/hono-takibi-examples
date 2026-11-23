type CreateActivityInput = { name: {}; tags?: {} | undefined }
type CreateActivityOutput = { activityArn: {}; creationDate: {} }
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
type CreateStateMachineAliasInput = {
  description?: {} | undefined
  name: {}
  routingConfiguration: {}
}
type CreateStateMachineAliasOutput = { stateMachineAliasArn: {}; creationDate: {} }
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
type GetExecutionHistoryInput = {
  executionArn: {}
  maxResults?: {} | undefined
  reverseOrder?: {} | undefined
  nextToken?: {} | undefined
  includeExecutionData?: {} | undefined
}
type GetExecutionHistoryOutput = { events: {}; nextToken?: {} | undefined }
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
type SendTaskHeartbeatInput = { taskToken: {} }
type SendTaskHeartbeatOutput = { [x: string]: unknown }
type SendTaskSuccessInput = { taskToken: {}; output: {} }
type SendTaskSuccessOutput = { [x: string]: unknown }
type StartExecutionInput = {
  stateMachineArn: {}
  name?: {} | undefined
  input?: {} | undefined
  traceHeader?: {} | undefined
}
type StartExecutionOutput = { executionArn: {}; startDate: {} }
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
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachine': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteActivity': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachine': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeActivity': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeExecution': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeMapRun': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachine': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.GetActivityTask': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.GetExecutionHistory': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListActivities': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListExecutions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListMapRuns': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachines': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.ListTagsForResource': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.SendTaskFailure': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.SendTaskSuccess': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.StartExecution': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.StartSyncExecution': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.StopExecution': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.TagResource': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UntagResource': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UpdateMapRun': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachine': {
      $post: {
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
    }
  } & {
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias': {
      $post: {
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
    }
  },
  '/'
>
export default routes
