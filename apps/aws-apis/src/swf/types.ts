type CountClosedWorkflowExecutionsInput = {
  domain: {}
  startTimeFilter?: { oldestDate: {}; latestDate?: {} | undefined } | undefined
  closeTimeFilter?: { oldestDate: {}; latestDate?: {} | undefined } | undefined
  executionFilter?: { workflowId: {} } | undefined
  typeFilter?: { name: {}; version?: {} | undefined } | undefined
  tagFilter?: { tag: {} } | undefined
  closeStatusFilter?: { status: {} } | undefined
}
type WorkflowExecutionCount = { count: {}; truncated?: {} | undefined }
type CountOpenWorkflowExecutionsInput = {
  domain: {}
  startTimeFilter: { oldestDate: {}; latestDate?: {} | undefined }
  typeFilter?: { name: {}; version?: {} | undefined } | undefined
  tagFilter?: { tag: {} } | undefined
  executionFilter?: { workflowId: {} } | undefined
}
type CountPendingActivityTasksInput = { domain: {}; taskList: { name: {} } }
type PendingTaskCount = { count: {}; truncated?: {} | undefined }
type CountPendingDecisionTasksInput = { domain: {}; taskList: { name: {} } }
type DeprecateActivityTypeInput = { domain: {}; activityType: { name: {}; version: {} } }
type DeprecateDomainInput = { name: {} }
type DeprecateWorkflowTypeInput = { domain: {}; workflowType: { name: {}; version: {} } }
type DescribeActivityTypeInput = { domain: {}; activityType: { name: {}; version: {} } }
type ActivityTypeDetail = {
  typeInfo: {
    activityType: { name: {}; version: {} }
    status: {}
    description?: {} | undefined
    creationDate: {}
    deprecationDate?: {} | undefined
  }
  configuration: {
    defaultTaskStartToCloseTimeout?: {} | undefined
    defaultTaskHeartbeatTimeout?: {} | undefined
    defaultTaskList?: { name: {} } | undefined
    defaultTaskPriority?: {} | undefined
    defaultTaskScheduleToStartTimeout?: {} | undefined
    defaultTaskScheduleToCloseTimeout?: {} | undefined
  }
}
type DescribeDomainInput = { name: {} }
type DomainDetail = {
  domainInfo: { name: {}; status: {}; description?: {} | undefined; arn?: {} | undefined }
  configuration: { workflowExecutionRetentionPeriodInDays: {} }
}
type DescribeWorkflowExecutionInput = { domain: {}; execution: { workflowId: {}; runId: {} } }
type WorkflowExecutionDetail = {
  executionInfo: {
    execution: { workflowId: {}; runId: {} }
    workflowType: { name: {}; version: {} }
    startTimestamp: {}
    closeTimestamp?: {} | undefined
    executionStatus: {}
    closeStatus?: {} | undefined
    parent?: { workflowId: {}; runId: {} } | undefined
    tagList?: {} | undefined
    cancelRequested?: {} | undefined
  }
  executionConfiguration: {
    taskStartToCloseTimeout: {}
    executionStartToCloseTimeout: {}
    taskList: { name: {} }
    taskPriority?: {} | undefined
    childPolicy: {}
    lambdaRole?: {} | undefined
  }
  openCounts: {
    openActivityTasks: {}
    openDecisionTasks: {}
    openTimers: {}
    openChildWorkflowExecutions: {}
    openLambdaFunctions?: {} | undefined
  }
  latestActivityTaskTimestamp?: {} | undefined
  latestExecutionContext?: {} | undefined
}
type DescribeWorkflowTypeInput = { domain: {}; workflowType: { name: {}; version: {} } }
type WorkflowTypeDetail = {
  typeInfo: {
    workflowType: { name: {}; version: {} }
    status: {}
    description?: {} | undefined
    creationDate: {}
    deprecationDate?: {} | undefined
  }
  configuration: {
    defaultTaskStartToCloseTimeout?: {} | undefined
    defaultExecutionStartToCloseTimeout?: {} | undefined
    defaultTaskList?: { name: {} } | undefined
    defaultTaskPriority?: {} | undefined
    defaultChildPolicy?: {} | undefined
    defaultLambdaRole?: {} | undefined
  }
}
type GetWorkflowExecutionHistoryInput = {
  domain: {}
  execution: { workflowId: {}; runId: {} }
  nextPageToken?: {} | undefined
  maximumPageSize?: {} | undefined
  reverseOrder?: {} | undefined
}
type History = { events: {}; nextPageToken?: {} | undefined }
type ListActivityTypesInput = {
  domain: {}
  name?: {} | undefined
  registrationStatus: {}
  nextPageToken?: {} | undefined
  maximumPageSize?: {} | undefined
  reverseOrder?: {} | undefined
}
type ActivityTypeInfos = { typeInfos: {}; nextPageToken?: {} | undefined }
type ListClosedWorkflowExecutionsInput = {
  domain: {}
  startTimeFilter?: { oldestDate: {}; latestDate?: {} | undefined } | undefined
  closeTimeFilter?: { oldestDate: {}; latestDate?: {} | undefined } | undefined
  executionFilter?: { workflowId: {} } | undefined
  closeStatusFilter?: { status: {} } | undefined
  typeFilter?: { name: {}; version?: {} | undefined } | undefined
  tagFilter?: { tag: {} } | undefined
  nextPageToken?: {} | undefined
  maximumPageSize?: {} | undefined
  reverseOrder?: {} | undefined
}
type WorkflowExecutionInfos = { executionInfos: {}; nextPageToken?: {} | undefined }
type ListDomainsInput = {
  nextPageToken?: {} | undefined
  registrationStatus: {}
  maximumPageSize?: {} | undefined
  reverseOrder?: {} | undefined
}
type DomainInfos = { domainInfos: {}; nextPageToken?: {} | undefined }
type ListOpenWorkflowExecutionsInput = {
  domain: {}
  startTimeFilter: { oldestDate: {}; latestDate?: {} | undefined }
  typeFilter?: { name: {}; version?: {} | undefined } | undefined
  tagFilter?: { tag: {} } | undefined
  nextPageToken?: {} | undefined
  maximumPageSize?: {} | undefined
  reverseOrder?: {} | undefined
  executionFilter?: { workflowId: {} } | undefined
}
type ListTagsForResourceInput = { resourceArn: {} }
type ListTagsForResourceOutput = { tags?: {} | undefined }
type ListWorkflowTypesInput = {
  domain: {}
  name?: {} | undefined
  registrationStatus: {}
  nextPageToken?: {} | undefined
  maximumPageSize?: {} | undefined
  reverseOrder?: {} | undefined
}
type WorkflowTypeInfos = { typeInfos: {}; nextPageToken?: {} | undefined }
type PollForActivityTaskInput = { domain: {}; taskList: { name: {} }; identity?: {} | undefined }
type ActivityTask = {
  taskToken: {}
  activityId: {}
  startedEventId: {}
  workflowExecution: { workflowId: {}; runId: {} }
  activityType: { name: {}; version: {} }
  input?: {} | undefined
}
type PollForDecisionTaskInput = {
  domain: {}
  taskList: { name: {} }
  identity?: {} | undefined
  nextPageToken?: {} | undefined
  maximumPageSize?: {} | undefined
  reverseOrder?: {} | undefined
}
type DecisionTask = {
  taskToken: {}
  startedEventId: {}
  workflowExecution: { workflowId: {}; runId: {} }
  workflowType: { name: {}; version: {} }
  events: {}
  nextPageToken?: {} | undefined
  previousStartedEventId?: {} | undefined
}
type RecordActivityTaskHeartbeatInput = { taskToken: {}; details?: {} | undefined }
type ActivityTaskStatus = { cancelRequested: {} }
type RegisterActivityTypeInput = {
  domain: {}
  name: {}
  version: {}
  description?: {} | undefined
  defaultTaskStartToCloseTimeout?: {} | undefined
  defaultTaskHeartbeatTimeout?: {} | undefined
  defaultTaskList?: { name: {} } | undefined
  defaultTaskPriority?: {} | undefined
  defaultTaskScheduleToStartTimeout?: {} | undefined
  defaultTaskScheduleToCloseTimeout?: {} | undefined
}
type RegisterDomainInput = {
  name: {}
  description?: {} | undefined
  workflowExecutionRetentionPeriodInDays: {}
  tags?: {} | undefined
}
type RegisterWorkflowTypeInput = {
  domain: {}
  name: {}
  version: {}
  description?: {} | undefined
  defaultTaskStartToCloseTimeout?: {} | undefined
  defaultExecutionStartToCloseTimeout?: {} | undefined
  defaultTaskList?: { name: {} } | undefined
  defaultTaskPriority?: {} | undefined
  defaultChildPolicy?: {} | undefined
  defaultLambdaRole?: {} | undefined
}
type RequestCancelWorkflowExecutionInput = { domain: {}; workflowId: {}; runId?: {} | undefined }
type RespondActivityTaskCanceledInput = { taskToken: {}; details?: {} | undefined }
type RespondActivityTaskCompletedInput = { taskToken: {}; result?: {} | undefined }
type RespondActivityTaskFailedInput = {
  taskToken: {}
  reason?: {} | undefined
  details?: {} | undefined
}
type RespondDecisionTaskCompletedInput = {
  taskToken: {}
  decisions?: {} | undefined
  executionContext?: {} | undefined
}
type SignalWorkflowExecutionInput = {
  domain: {}
  workflowId: {}
  runId?: {} | undefined
  signalName: {}
  input?: {} | undefined
}
type StartWorkflowExecutionInput = {
  domain: {}
  workflowId: {}
  workflowType: { name: {}; version: {} }
  taskList?: { name: {} } | undefined
  taskPriority?: {} | undefined
  input?: {} | undefined
  executionStartToCloseTimeout?: {} | undefined
  tagList?: {} | undefined
  taskStartToCloseTimeout?: {} | undefined
  childPolicy?: {} | undefined
  lambdaRole?: {} | undefined
}
type Run = { runId?: {} | undefined }
type TagResourceInput = { resourceArn: {}; tags: {} }
type TerminateWorkflowExecutionInput = {
  domain: {}
  workflowId: {}
  runId?: {} | undefined
  reason?: {} | undefined
  details?: {} | undefined
  childPolicy?: {} | undefined
}
type UndeprecateActivityTypeInput = { domain: {}; activityType: { name: {}; version: {} } }
type UndeprecateDomainInput = { name: {} }
type UndeprecateWorkflowTypeInput = { domain: {}; workflowType: { name: {}; version: {} } }
type UntagResourceInput = { resourceArn: {}; tagKeys: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.CountClosedWorkflowExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CountClosedWorkflowExecutionsInput }
        output: WorkflowExecutionCount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.CountOpenWorkflowExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CountOpenWorkflowExecutionsInput }
        output: WorkflowExecutionCount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.CountPendingActivityTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CountPendingActivityTasksInput }
        output: PendingTaskCount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.CountPendingDecisionTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CountPendingDecisionTasksInput }
        output: PendingTaskCount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.DeprecateActivityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeprecateActivityTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.DeprecateDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeprecateDomainInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.DeprecateWorkflowType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeprecateWorkflowTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.DescribeActivityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.DescribeActivityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeActivityTypeInput }
        output: ActivityTypeDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.DescribeDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.DescribeDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDomainInput }
        output: DomainDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.DescribeWorkflowExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkflowExecutionInput }
        output: WorkflowExecutionDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.DescribeWorkflowType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkflowTypeInput }
        output: WorkflowTypeDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory': {
      $post: {
        input: {
          query: { maximumPageSize?: string | undefined; nextPageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.GetWorkflowExecutionHistory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWorkflowExecutionHistoryInput }
        output: History
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.ListActivityTypes': {
      $post: {
        input: {
          query: { maximumPageSize?: string | undefined; nextPageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.ListActivityTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListActivityTypesInput }
        output: ActivityTypeInfos
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions': {
      $post: {
        input: {
          query: { maximumPageSize?: string | undefined; nextPageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.ListClosedWorkflowExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListClosedWorkflowExecutionsInput }
        output: WorkflowExecutionInfos
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.ListDomains': {
      $post: {
        input: {
          query: { maximumPageSize?: string | undefined; nextPageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.ListDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDomainsInput }
        output: DomainInfos
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions': {
      $post: {
        input: {
          query: { maximumPageSize?: string | undefined; nextPageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.ListOpenWorkflowExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOpenWorkflowExecutionsInput }
        output: WorkflowExecutionInfos
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.ListTagsForResource'
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
    '/#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes': {
      $post: {
        input: {
          query: { maximumPageSize?: string | undefined; nextPageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.ListWorkflowTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkflowTypesInput }
        output: WorkflowTypeInfos
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.PollForActivityTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.PollForActivityTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PollForActivityTaskInput }
        output: ActivityTask
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask': {
      $post: {
        input: {
          query: { maximumPageSize?: string | undefined; nextPageToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.PollForDecisionTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PollForDecisionTaskInput }
        output: DecisionTask
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RecordActivityTaskHeartbeat'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RecordActivityTaskHeartbeatInput }
        output: ActivityTaskStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RegisterActivityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RegisterActivityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterActivityTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RegisterDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RegisterDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterDomainInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RegisterWorkflowType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterWorkflowTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RequestCancelWorkflowExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RequestCancelWorkflowExecutionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RespondActivityTaskCanceled'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RespondActivityTaskCanceledInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RespondActivityTaskCompleted'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RespondActivityTaskCompletedInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RespondActivityTaskFailed'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RespondActivityTaskFailedInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.RespondDecisionTaskCompleted'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RespondDecisionTaskCompletedInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.SignalWorkflowExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SignalWorkflowExecutionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.StartWorkflowExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartWorkflowExecutionInput }
        output: Run
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.TerminateWorkflowExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateWorkflowExecutionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.UndeprecateActivityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UndeprecateActivityTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.UndeprecateDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UndeprecateDomainInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.UndeprecateWorkflowType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UndeprecateWorkflowTypeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SimpleWorkflowService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SimpleWorkflowService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
