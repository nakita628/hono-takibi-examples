type CancelQueryRequest = { QueryId: {} }
type CancelQueryResponse = { CancellationMessage?: {} | undefined }
type CreateScheduledQueryRequest = {
  Name: {}
  QueryString: {}
  ScheduleConfiguration: { ScheduleExpression: {} }
  NotificationConfiguration: { SnsConfiguration: { TopicArn: {} } }
  TargetConfiguration?:
    | {
        TimestreamConfiguration: {
          DatabaseName: {}
          TableName: {}
          TimeColumn: {}
          DimensionMappings: {}
          MultiMeasureMappings?:
            | { TargetMultiMeasureName?: {} | undefined; MultiMeasureAttributeMappings: {} }
            | undefined
          MixedMeasureMappings?: {} | undefined
          MeasureNameColumn?: {} | undefined
        }
      }
    | undefined
  ClientToken?: {} | undefined
  ScheduledQueryExecutionRoleArn: {}
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
  ErrorReportConfiguration: {
    S3Configuration: {
      BucketName: {}
      ObjectKeyPrefix?: {} | undefined
      EncryptionOption?: {} | undefined
    }
  }
}
type CreateScheduledQueryResponse = { Arn: {} }
type DeleteScheduledQueryRequest = { ScheduledQueryArn: {} }
type DescribeEndpointsRequest = { [x: string]: unknown }
type DescribeEndpointsResponse = { Endpoints: {} }
type DescribeScheduledQueryRequest = { ScheduledQueryArn: {} }
type DescribeScheduledQueryResponse = {
  ScheduledQuery: {
    Arn: {}
    Name: {}
    QueryString: {}
    CreationTime?: {} | undefined
    State: {}
    PreviousInvocationTime?: {} | undefined
    NextInvocationTime?: {} | undefined
    ScheduleConfiguration: { ScheduleExpression: {} }
    NotificationConfiguration: { SnsConfiguration: { TopicArn: {} } }
    TargetConfiguration?:
      | {
          TimestreamConfiguration: {
            DatabaseName: {}
            TableName: {}
            TimeColumn: {}
            DimensionMappings: {}
            MultiMeasureMappings?:
              | { TargetMultiMeasureName?: {} | undefined; MultiMeasureAttributeMappings: {} }
              | undefined
            MixedMeasureMappings?: {} | undefined
            MeasureNameColumn?: {} | undefined
          }
        }
      | undefined
    ScheduledQueryExecutionRoleArn?: {} | undefined
    KmsKeyId?: {} | undefined
    ErrorReportConfiguration?:
      | {
          S3Configuration: {
            BucketName: {}
            ObjectKeyPrefix?: {} | undefined
            EncryptionOption?: {} | undefined
          }
        }
      | undefined
    LastRunSummary?:
      | {
          InvocationTime?: {} | undefined
          TriggerTime?: {} | undefined
          RunStatus?: {} | undefined
          ExecutionStats?:
            | {
                ExecutionTimeInMillis?: {} | undefined
                DataWrites?: {} | undefined
                BytesMetered?: {} | undefined
                RecordsIngested?: {} | undefined
                QueryResultRows?: {} | undefined
              }
            | undefined
          ErrorReportLocation?:
            | {
                S3ReportLocation?:
                  | { BucketName?: {} | undefined; ObjectKey?: {} | undefined }
                  | undefined
              }
            | undefined
          FailureReason?: {} | undefined
        }
      | undefined
    RecentlyFailedRuns?: {} | undefined
  }
}
type ExecuteScheduledQueryRequest = {
  ScheduledQueryArn: {}
  InvocationTime: {}
  ClientToken?: {} | undefined
}
type ListScheduledQueriesRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListScheduledQueriesResponse = { ScheduledQueries: {}; NextToken?: {} | undefined }
type ListTagsForResourceRequest = {
  ResourceARN: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags: {}; NextToken?: {} | undefined }
type PrepareQueryRequest = { QueryString: {}; ValidateOnly?: {} | undefined }
type PrepareQueryResponse = { QueryString: {}; Columns: {}; Parameters: {} }
type QueryRequest = {
  QueryString: {}
  ClientToken?: {} | undefined
  NextToken?: {} | undefined
  MaxRows?: {} | undefined
}
type QueryResponse = {
  QueryId: {}
  NextToken?: {} | undefined
  Rows: {}
  ColumnInfo: {}
  QueryStatus?:
    | {
        ProgressPercentage?: {} | undefined
        CumulativeBytesScanned?: {} | undefined
        CumulativeBytesMetered?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateScheduledQueryRequest = { ScheduledQueryArn: {}; State: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Timestream_20181101.CancelQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.CancelQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelQueryRequest }
        output: CancelQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.CreateScheduledQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.CreateScheduledQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateScheduledQueryRequest }
        output: CreateScheduledQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DeleteScheduledQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteScheduledQueryRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DescribeEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DescribeEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointsRequest }
        output: DescribeEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.DescribeScheduledQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScheduledQueryRequest }
        output: DescribeScheduledQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ExecuteScheduledQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExecuteScheduledQueryRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.ListScheduledQueries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ListScheduledQueries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListScheduledQueriesRequest }
        output: ListScheduledQueriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.ListTagsForResource': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Timestream_20181101.ListTagsForResource'
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
    '/#X-Amz-Target=Timestream_20181101.PrepareQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.PrepareQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PrepareQueryRequest }
        output: PrepareQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.Query': {
      $post: {
        input: { query: { MaxRows?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Timestream_20181101.Query'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: QueryRequest }
        output: QueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Timestream_20181101.UpdateScheduledQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateScheduledQueryRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
