type AssociateKmsKeyRequest = {
  logGroupName?: {} | undefined
  kmsKeyId: {}
  resourceIdentifier?: {} | undefined
}
type CancelExportTaskRequest = { taskId: {} }
type CreateExportTaskRequest = {
  taskName?: {} | undefined
  logGroupName: {}
  logStreamNamePrefix?: {} | undefined
  from: {}
  to: {}
  destination: {}
  destinationPrefix?: {} | undefined
}
type CreateExportTaskResponse = { taskId?: {} | undefined }
type CreateLogGroupRequest = { logGroupName: {}; kmsKeyId?: {} | undefined; tags?: {} | undefined }
type CreateLogStreamRequest = { logGroupName: {}; logStreamName: {} }
type DeleteAccountPolicyRequest = { policyName: {}; policyType: {} }
type DeleteDataProtectionPolicyRequest = { logGroupIdentifier: {} }
type DeleteDestinationRequest = { destinationName: {} }
type DeleteLogGroupRequest = { logGroupName: {} }
type DeleteLogStreamRequest = { logGroupName: {}; logStreamName: {} }
type DeleteMetricFilterRequest = { logGroupName: {}; filterName: {} }
type DeleteQueryDefinitionRequest = { queryDefinitionId: {} }
type DeleteQueryDefinitionResponse = { success?: {} | undefined }
type DeleteResourcePolicyRequest = { policyName?: {} | undefined }
type DeleteRetentionPolicyRequest = { logGroupName: {} }
type DeleteSubscriptionFilterRequest = { logGroupName: {}; filterName: {} }
type DescribeAccountPoliciesRequest = {
  policyType: {}
  policyName?: {} | undefined
  accountIdentifiers?: {} | undefined
}
type DescribeAccountPoliciesResponse = { accountPolicies?: {} | undefined }
type DescribeDestinationsRequest = {
  DestinationNamePrefix?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
}
type NextToken = string
type DescribeDestinationsResponse = {
  destinations?: {} | undefined
  nextToken?: NextToken | undefined
}
type DescribeExportTasksRequest = {
  taskId?: {} | undefined
  statusCode?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
}
type DescribeExportTasksResponse = {
  exportTasks?: {} | undefined
  nextToken?: NextToken | undefined
}
type DescribeLogGroupsRequest = {
  accountIdentifiers?: {} | undefined
  logGroupNamePrefix?: {} | undefined
  logGroupNamePattern?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
  includeLinkedAccounts?: {} | undefined
}
type DescribeLogGroupsResponse = { logGroups?: {} | undefined; nextToken?: NextToken | undefined }
type DescribeLogStreamsRequest = {
  logGroupName?: {} | undefined
  logGroupIdentifier?: {} | undefined
  logStreamNamePrefix?: {} | undefined
  orderBy?: {} | undefined
  descending?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
}
type DescribeLogStreamsResponse = { logStreams?: {} | undefined; nextToken?: NextToken | undefined }
type DescribeMetricFiltersRequest = {
  logGroupName?: {} | undefined
  filterNamePrefix?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
  metricName?: {} | undefined
  metricNamespace?: {} | undefined
}
type DescribeMetricFiltersResponse = {
  metricFilters?: {} | undefined
  nextToken?: NextToken | undefined
}
type DescribeQueriesRequest = {
  logGroupName?: {} | undefined
  status?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: NextToken | undefined
}
type DescribeQueriesResponse = { queries?: {} | undefined; nextToken?: NextToken | undefined }
type DescribeQueryDefinitionsRequest = {
  queryDefinitionNamePrefix?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: NextToken | undefined
}
type DescribeQueryDefinitionsResponse = {
  queryDefinitions?: {} | undefined
  nextToken?: NextToken | undefined
}
type DescribeResourcePoliciesRequest = { nextToken?: NextToken | undefined; limit?: {} | undefined }
type DescribeResourcePoliciesResponse = {
  resourcePolicies?: {} | undefined
  nextToken?: NextToken | undefined
}
type DescribeSubscriptionFiltersRequest = {
  logGroupName: {}
  filterNamePrefix?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
}
type DescribeSubscriptionFiltersResponse = {
  subscriptionFilters?: {} | undefined
  nextToken?: NextToken | undefined
}
type DisassociateKmsKeyRequest = {
  logGroupName?: {} | undefined
  resourceIdentifier?: {} | undefined
}
type FilterLogEventsRequest = {
  logGroupName?: {} | undefined
  logGroupIdentifier?: {} | undefined
  logStreamNames?: {} | undefined
  logStreamNamePrefix?: {} | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
  filterPattern?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
  interleaved?: {} | undefined
  unmask?: {} | undefined
}
type FilterLogEventsResponse = {
  events?: {} | undefined
  searchedLogStreams?: {} | undefined
  nextToken?: {} | undefined
}
type GetDataProtectionPolicyRequest = { logGroupIdentifier: {} }
type GetDataProtectionPolicyResponse = {
  logGroupIdentifier?: {} | undefined
  policyDocument?: {} | undefined
  lastUpdatedTime?: {} | undefined
}
type GetLogEventsRequest = {
  logGroupName?: {} | undefined
  logGroupIdentifier?: {} | undefined
  logStreamName: {}
  startTime?: {} | undefined
  endTime?: {} | undefined
  nextToken?: {} | undefined
  limit?: {} | undefined
  startFromHead?: {} | undefined
  unmask?: {} | undefined
}
type GetLogEventsResponse = {
  events?: {} | undefined
  nextForwardToken?: {} | undefined
  nextBackwardToken?: {} | undefined
}
type GetLogGroupFieldsRequest = {
  logGroupName?: {} | undefined
  time?: {} | undefined
  logGroupIdentifier?: {} | undefined
}
type GetLogGroupFieldsResponse = { logGroupFields?: {} | undefined }
type GetLogRecordRequest = { logRecordPointer: {}; unmask?: {} | undefined }
type GetLogRecordResponse = { logRecord?: {} | undefined }
type GetQueryResultsRequest = { queryId: {} }
type GetQueryResultsResponse = {
  results?: {} | undefined
  statistics?:
    | {
        recordsMatched?: {} | undefined
        recordsScanned?: {} | undefined
        bytesScanned?: {} | undefined
      }
    | undefined
  status?: {} | undefined
  encryptionKey?: {} | undefined
}
type ListTagsForResourceRequest = { resourceArn: {} }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type ListTagsLogGroupRequest = { logGroupName: {} }
type ListTagsLogGroupResponse = { tags?: {} | undefined }
type PutAccountPolicyRequest = {
  policyName: {}
  policyDocument: {}
  policyType: {}
  scope?: {} | undefined
}
type PutAccountPolicyResponse = {
  accountPolicy?:
    | {
        policyName?: {} | undefined
        policyDocument?: {} | undefined
        lastUpdatedTime?: {} | undefined
        policyType?: {} | undefined
        scope?: {} | undefined
        accountId?: {} | undefined
      }
    | undefined
}
type PutDataProtectionPolicyRequest = { logGroupIdentifier: {}; policyDocument: {} }
type PutDataProtectionPolicyResponse = {
  logGroupIdentifier?: {} | undefined
  policyDocument?: {} | undefined
  lastUpdatedTime?: {} | undefined
}
type PutDestinationRequest = {
  destinationName: {}
  targetArn: {}
  roleArn: {}
  tags?: {} | undefined
}
type PutDestinationResponse = {
  destination?:
    | {
        destinationName?: {} | undefined
        targetArn?: {} | undefined
        roleArn?: {} | undefined
        accessPolicy?: {} | undefined
        arn?: {} | undefined
        creationTime?: {} | undefined
      }
    | undefined
}
type PutDestinationPolicyRequest = {
  destinationName: {}
  accessPolicy: {}
  forceUpdate?: {} | undefined
}
type PutLogEventsRequest = {
  logGroupName: {}
  logStreamName: {}
  logEvents: {}
  sequenceToken?: {} | undefined
}
type PutLogEventsResponse = {
  nextSequenceToken?: {} | undefined
  rejectedLogEventsInfo?:
    | {
        tooNewLogEventStartIndex?: {} | undefined
        tooOldLogEventEndIndex?: {} | undefined
        expiredLogEventEndIndex?: {} | undefined
      }
    | undefined
}
type PutMetricFilterRequest = {
  logGroupName: {}
  filterName: {}
  filterPattern: {}
  metricTransformations: {}
}
type PutQueryDefinitionRequest = {
  name: {}
  queryDefinitionId?: {} | undefined
  logGroupNames?: {} | undefined
  queryString: {}
}
type PutQueryDefinitionResponse = { queryDefinitionId?: {} | undefined }
type PutResourcePolicyRequest = { policyName?: {} | undefined; policyDocument?: {} | undefined }
type PutResourcePolicyResponse = {
  resourcePolicy?:
    | {
        policyName?: {} | undefined
        policyDocument?: {} | undefined
        lastUpdatedTime?: {} | undefined
      }
    | undefined
}
type Days = number
type PutRetentionPolicyRequest = { logGroupName: {}; retentionInDays: Days }
type PutSubscriptionFilterRequest = {
  logGroupName: {}
  filterName: {}
  filterPattern: {}
  destinationArn: {}
  roleArn?: {} | undefined
  distribution?: {} | undefined
}
type StartQueryRequest = {
  logGroupName?: {} | undefined
  logGroupNames?: {} | undefined
  logGroupIdentifiers?: {} | undefined
  startTime: {}
  endTime: {}
  queryString: {}
  limit?: {} | undefined
}
type StartQueryResponse = { queryId?: {} | undefined }
type StopQueryRequest = { queryId: {} }
type StopQueryResponse = { success?: {} | undefined }
type TagLogGroupRequest = { logGroupName: {}; tags: {} }
type TagResourceRequest = { resourceArn: {}; tags: {} }
type FilterPattern = string
type TestMetricFilterRequest = { filterPattern: FilterPattern; logEventMessages: {} }
type TestMetricFilterResponse = { matches?: {} | undefined }
type UntagLogGroupRequest = { logGroupName: {}; tags: {} }
type UntagResourceRequest = { resourceArn: {}; tagKeys: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Logs_20140328.AssociateKmsKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.AssociateKmsKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateKmsKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.CancelExportTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.CancelExportTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelExportTaskRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.CreateExportTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.CreateExportTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateExportTaskRequest }
        output: CreateExportTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.CreateLogGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.CreateLogGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLogGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.CreateLogStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.CreateLogStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLogStreamRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteAccountPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteAccountPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccountPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteDataProtectionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDataProtectionPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteDestination': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDestinationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteLogGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteLogGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLogGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteLogStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteLogStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLogStreamRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteMetricFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteMetricFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMetricFilterRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteQueryDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteQueryDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteQueryDefinitionRequest }
        output: DeleteQueryDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourcePolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteRetentionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRetentionPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DeleteSubscriptionFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSubscriptionFilterRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeAccountPolicies': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeAccountPolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountPoliciesRequest }
        output: DescribeAccountPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeDestinations': {
      $post: {
        input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeDestinations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDestinationsRequest }
        output: DescribeDestinationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeExportTasks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeExportTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeExportTasksRequest }
        output: DescribeExportTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeLogGroups': {
      $post: {
        input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeLogGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLogGroupsRequest }
        output: DescribeLogGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeLogStreams': {
      $post: {
        input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeLogStreams'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLogStreamsRequest }
        output: DescribeLogStreamsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeMetricFilters': {
      $post: {
        input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeMetricFilters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMetricFiltersRequest }
        output: DescribeMetricFiltersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeQueries': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeQueries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeQueriesRequest }
        output: DescribeQueriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeQueryDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeQueryDefinitionsRequest }
        output: DescribeQueryDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeResourcePolicies': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeResourcePolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeResourcePoliciesRequest }
        output: DescribeResourcePoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters': {
      $post: {
        input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Logs_20140328.DescribeSubscriptionFilters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSubscriptionFiltersRequest }
        output: DescribeSubscriptionFiltersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.DisassociateKmsKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.DisassociateKmsKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateKmsKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.FilterLogEvents': {
      $post: {
        input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Logs_20140328.FilterLogEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: FilterLogEventsRequest }
        output: FilterLogEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.GetDataProtectionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataProtectionPolicyRequest }
        output: GetDataProtectionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.GetLogEvents': {
      $post: {
        input: { query: { limit?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Logs_20140328.GetLogEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLogEventsRequest }
        output: GetLogEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.GetLogGroupFields': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.GetLogGroupFields'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLogGroupFieldsRequest }
        output: GetLogGroupFieldsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.GetLogRecord': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.GetLogRecord'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLogRecordRequest }
        output: GetLogRecordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.GetQueryResults': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.GetQueryResults'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQueryResultsRequest }
        output: GetQueryResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.ListTagsLogGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.ListTagsLogGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsLogGroupRequest }
        output: ListTagsLogGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutAccountPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutAccountPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAccountPolicyRequest }
        output: PutAccountPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutDataProtectionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutDataProtectionPolicyRequest }
        output: PutDataProtectionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutDestination': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutDestinationRequest }
        output: PutDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutDestinationPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutDestinationPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutDestinationPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutLogEvents': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutLogEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutLogEventsRequest }
        output: PutLogEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutMetricFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutMetricFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutMetricFilterRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutQueryDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutQueryDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutQueryDefinitionRequest }
        output: PutQueryDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResourcePolicyRequest }
        output: PutResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutRetentionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutRetentionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRetentionPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.PutSubscriptionFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.PutSubscriptionFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutSubscriptionFilterRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.StartQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.StartQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartQueryRequest }
        output: StartQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.StopQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.StopQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopQueryRequest }
        output: StopQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.TagLogGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.TagLogGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagLogGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.TestMetricFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.TestMetricFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TestMetricFilterRequest }
        output: TestMetricFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.UntagLogGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.UntagLogGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagLogGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Logs_20140328.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Logs_20140328.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
