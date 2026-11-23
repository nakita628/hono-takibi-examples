type BatchGetNamedQueryInput = { NamedQueryIds: {} }
type BatchGetNamedQueryOutput = {
  NamedQueries?: {} | undefined
  UnprocessedNamedQueryIds?: {} | undefined
}
type BatchGetPreparedStatementInput = { PreparedStatementNames: {}; WorkGroup: {} }
type BatchGetPreparedStatementOutput = {
  PreparedStatements?: {} | undefined
  UnprocessedPreparedStatementNames?: {} | undefined
}
type BatchGetQueryExecutionInput = { QueryExecutionIds: {} }
type BatchGetQueryExecutionOutput = {
  QueryExecutions?: {} | undefined
  UnprocessedQueryExecutionIds?: {} | undefined
}
type CancelCapacityReservationInput = { Name: {} }
type CancelCapacityReservationOutput = { [x: string]: unknown }
type CreateCapacityReservationInput = { TargetDpus: {}; Name: {}; Tags?: {} | undefined }
type CreateCapacityReservationOutput = { [x: string]: unknown }
type CreateDataCatalogInput = {
  Name: {}
  Type: {}
  Description?: {} | undefined
  Parameters?: {} | undefined
  Tags?: {} | undefined
}
type CreateDataCatalogOutput = { [x: string]: unknown }
type CreateNamedQueryInput = {
  Name: {}
  Description?: {} | undefined
  Database: {}
  QueryString: {}
  ClientRequestToken?: {} | undefined
  WorkGroup?: {} | undefined
}
type CreateNamedQueryOutput = { NamedQueryId?: {} | undefined }
type CreateNotebookInput = { WorkGroup: {}; Name: {}; ClientRequestToken?: {} | undefined }
type CreateNotebookOutput = { NotebookId?: {} | undefined }
type CreatePreparedStatementInput = {
  StatementName: {}
  WorkGroup: {}
  QueryStatement: {}
  Description?: {} | undefined
}
type CreatePreparedStatementOutput = { [x: string]: unknown }
type CreatePresignedNotebookUrlRequest = { SessionId: {} }
type CreatePresignedNotebookUrlResponse = {
  NotebookUrl: {}
  AuthToken: {}
  AuthTokenExpirationTime: {}
}
type CreateWorkGroupInput = {
  Name: {}
  Configuration?:
    | {
        ResultConfiguration?:
          | {
              OutputLocation?: {} | undefined
              EncryptionConfiguration?:
                | { EncryptionOption: {}; KmsKey?: {} | undefined }
                | undefined
              ExpectedBucketOwner?: {} | undefined
              AclConfiguration?: { S3AclOption: {} } | undefined
            }
          | undefined
        EnforceWorkGroupConfiguration?: {} | undefined
        PublishCloudWatchMetricsEnabled?: {} | undefined
        BytesScannedCutoffPerQuery?: {} | undefined
        RequesterPaysEnabled?: {} | undefined
        EngineVersion?:
          | { SelectedEngineVersion?: {} | undefined; EffectiveEngineVersion?: {} | undefined }
          | undefined
        AdditionalConfiguration?: {} | undefined
        ExecutionRole?: {} | undefined
        CustomerContentEncryptionConfiguration?: { KmsKey: {} } | undefined
        EnableMinimumEncryptionConfiguration?: {} | undefined
      }
    | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateWorkGroupOutput = { [x: string]: unknown }
type DeleteCapacityReservationInput = { Name: {} }
type DeleteCapacityReservationOutput = { [x: string]: unknown }
type DeleteDataCatalogInput = { Name: {} }
type DeleteDataCatalogOutput = { [x: string]: unknown }
type DeleteNamedQueryInput = { NamedQueryId: {} }
type DeleteNamedQueryOutput = { [x: string]: unknown }
type DeleteNotebookInput = { NotebookId: {} }
type DeleteNotebookOutput = { [x: string]: unknown }
type DeletePreparedStatementInput = { StatementName: {}; WorkGroup: {} }
type DeletePreparedStatementOutput = { [x: string]: unknown }
type DeleteWorkGroupInput = { WorkGroup: {}; RecursiveDeleteOption?: {} | undefined }
type DeleteWorkGroupOutput = { [x: string]: unknown }
type ExportNotebookInput = { NotebookId: {} }
type ExportNotebookOutput = {
  NotebookMetadata?:
    | {
        NotebookId?: {} | undefined
        Name?: {} | undefined
        WorkGroup?: {} | undefined
        CreationTime?: {} | undefined
        Type?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
  Payload?: {} | undefined
}
type GetCalculationExecutionRequest = { CalculationExecutionId: {} }
type GetCalculationExecutionResponse = {
  CalculationExecutionId?: {} | undefined
  SessionId?: {} | undefined
  Description?: {} | undefined
  WorkingDirectory?: {} | undefined
  Status?:
    | {
        SubmissionDateTime?: {} | undefined
        CompletionDateTime?: {} | undefined
        State?: {} | undefined
        StateChangeReason?: {} | undefined
      }
    | undefined
  Statistics?: { DpuExecutionInMillis?: {} | undefined; Progress?: {} | undefined } | undefined
  Result?:
    | {
        StdOutS3Uri?: {} | undefined
        StdErrorS3Uri?: {} | undefined
        ResultS3Uri?: {} | undefined
        ResultType?: {} | undefined
      }
    | undefined
}
type GetCalculationExecutionCodeRequest = { CalculationExecutionId: {} }
type GetCalculationExecutionCodeResponse = { CodeBlock?: {} | undefined }
type GetCalculationExecutionStatusRequest = { CalculationExecutionId: {} }
type GetCalculationExecutionStatusResponse = {
  Status?:
    | {
        SubmissionDateTime?: {} | undefined
        CompletionDateTime?: {} | undefined
        State?: {} | undefined
        StateChangeReason?: {} | undefined
      }
    | undefined
  Statistics?: { DpuExecutionInMillis?: {} | undefined; Progress?: {} | undefined } | undefined
}
type GetCapacityAssignmentConfigurationInput = { CapacityReservationName: {} }
type GetCapacityAssignmentConfigurationOutput = {
  CapacityAssignmentConfiguration: {
    CapacityReservationName?: {} | undefined
    CapacityAssignments?: {} | undefined
  }
}
type GetCapacityReservationInput = { Name: {} }
type CapacityAllocation = {
  Status: {}
  StatusMessage?: {} | undefined
  RequestTime: {}
  RequestCompletionTime?: {} | undefined
}
type GetCapacityReservationOutput = {
  CapacityReservation: {
    Name: {}
    Status: {}
    TargetDpus: {}
    AllocatedDpus: {}
    LastAllocation?: CapacityAllocation | undefined
    LastSuccessfulAllocationTime?: {} | undefined
    CreationTime: {}
  }
}
type GetDataCatalogInput = { Name: {} }
type GetDataCatalogOutput = {
  DataCatalog?:
    | { Name: {}; Description?: {} | undefined; Type: {}; Parameters?: {} | undefined }
    | undefined
}
type GetDatabaseInput = { CatalogName: {}; DatabaseName: {} }
type GetDatabaseOutput = {
  Database?: { Name: {}; Description?: {} | undefined; Parameters?: {} | undefined } | undefined
}
type GetNamedQueryInput = { NamedQueryId: {} }
type GetNamedQueryOutput = {
  NamedQuery?:
    | {
        Name: {}
        Description?: {} | undefined
        Database: {}
        QueryString: {}
        NamedQueryId?: {} | undefined
        WorkGroup?: {} | undefined
      }
    | undefined
}
type GetNotebookMetadataInput = { NotebookId: {} }
type GetNotebookMetadataOutput = {
  NotebookMetadata?:
    | {
        NotebookId?: {} | undefined
        Name?: {} | undefined
        WorkGroup?: {} | undefined
        CreationTime?: {} | undefined
        Type?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type GetPreparedStatementInput = { StatementName: {}; WorkGroup: {} }
type GetPreparedStatementOutput = {
  PreparedStatement?:
    | {
        StatementName?: {} | undefined
        QueryStatement?: {} | undefined
        WorkGroupName?: {} | undefined
        Description?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type GetQueryExecutionInput = { QueryExecutionId: {} }
type GetQueryExecutionOutput = {
  QueryExecution?:
    | {
        QueryExecutionId?: {} | undefined
        Query?: {} | undefined
        StatementType?: {} | undefined
        ResultConfiguration?:
          | {
              OutputLocation?: {} | undefined
              EncryptionConfiguration?:
                | { EncryptionOption: {}; KmsKey?: {} | undefined }
                | undefined
              ExpectedBucketOwner?: {} | undefined
              AclConfiguration?: { S3AclOption: {} } | undefined
            }
          | undefined
        ResultReuseConfiguration?:
          | {
              ResultReuseByAgeConfiguration?:
                | { Enabled: {}; MaxAgeInMinutes?: {} | undefined }
                | undefined
            }
          | undefined
        QueryExecutionContext?: { Database?: {} | undefined; Catalog?: {} | undefined } | undefined
        Status?:
          | {
              State?: {} | undefined
              StateChangeReason?: {} | undefined
              SubmissionDateTime?: {} | undefined
              CompletionDateTime?: {} | undefined
              AthenaError?:
                | {
                    ErrorCategory?: {} | undefined
                    ErrorType?: {} | undefined
                    Retryable?: {} | undefined
                    ErrorMessage?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Statistics?:
          | {
              EngineExecutionTimeInMillis?: {} | undefined
              DataScannedInBytes?: {} | undefined
              DataManifestLocation?: {} | undefined
              TotalExecutionTimeInMillis?: {} | undefined
              QueryQueueTimeInMillis?: {} | undefined
              QueryPlanningTimeInMillis?: {} | undefined
              ServiceProcessingTimeInMillis?: {} | undefined
              ResultReuseInformation?: { ReusedPreviousResult: {} } | undefined
            }
          | undefined
        WorkGroup?: {} | undefined
        EngineVersion?:
          | { SelectedEngineVersion?: {} | undefined; EffectiveEngineVersion?: {} | undefined }
          | undefined
        ExecutionParameters?: {} | undefined
        SubstatementType?: {} | undefined
      }
    | undefined
}
type GetQueryResultsInput = {
  QueryExecutionId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetQueryResultsOutput = {
  UpdateCount?: {} | undefined
  ResultSet?:
    | { Rows?: {} | undefined; ResultSetMetadata?: { ColumnInfo?: {} | undefined } | undefined }
    | undefined
  NextToken?: {} | undefined
}
type GetQueryRuntimeStatisticsInput = { QueryExecutionId: {} }
type QueryRuntimeStatisticsTimeline = {
  QueryQueueTimeInMillis?: {} | undefined
  QueryPlanningTimeInMillis?: {} | undefined
  EngineExecutionTimeInMillis?: {} | undefined
  ServiceProcessingTimeInMillis?: {} | undefined
  TotalExecutionTimeInMillis?: {} | undefined
}
type QueryRuntimeStatisticsRows = {
  InputRows?: {} | undefined
  InputBytes?: {} | undefined
  OutputBytes?: {} | undefined
  OutputRows?: {} | undefined
}
type GetQueryRuntimeStatisticsOutput = {
  QueryRuntimeStatistics?:
    | {
        Timeline?: QueryRuntimeStatisticsTimeline | undefined
        Rows?: QueryRuntimeStatisticsRows | undefined
        OutputStage?:
          | {
              StageId?: {} | undefined
              State?: {} | undefined
              OutputBytes?: {} | undefined
              OutputRows?: {} | undefined
              InputBytes?: {} | undefined
              InputRows?: {} | undefined
              ExecutionTime?: {} | undefined
              QueryStagePlan?:
                | {
                    Name?: {} | undefined
                    Identifier?: {} | undefined
                    Children?: {} | undefined
                    RemoteSources?: {} | undefined
                  }
                | undefined
              SubStages?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetSessionRequest = { SessionId: {} }
type EncryptionConfiguration = { EncryptionOption: {}; KmsKey?: {} | undefined }
type GetSessionResponse = {
  SessionId?: {} | undefined
  Description?: {} | undefined
  WorkGroup?: {} | undefined
  EngineVersion?: {} | undefined
  EngineConfiguration?:
    | {
        CoordinatorDpuSize?: {} | undefined
        MaxConcurrentDpus: {}
        DefaultExecutorDpuSize?: {} | undefined
        AdditionalConfigs?: {} | undefined
        SparkProperties?: {} | undefined
      }
    | undefined
  NotebookVersion?: {} | undefined
  SessionConfiguration?:
    | {
        ExecutionRole?: {} | undefined
        WorkingDirectory?: {} | undefined
        IdleTimeoutSeconds?: {} | undefined
        EncryptionConfiguration?: EncryptionConfiguration | undefined
      }
    | undefined
  Status?:
    | {
        StartDateTime?: {} | undefined
        LastModifiedDateTime?: {} | undefined
        EndDateTime?: {} | undefined
        IdleSinceDateTime?: {} | undefined
        State?: {} | undefined
        StateChangeReason?: {} | undefined
      }
    | undefined
  Statistics?: { DpuExecutionInMillis?: {} | undefined } | undefined
}
type GetSessionStatusRequest = { SessionId: {} }
type GetSessionStatusResponse = {
  SessionId?: {} | undefined
  Status?:
    | {
        StartDateTime?: {} | undefined
        LastModifiedDateTime?: {} | undefined
        EndDateTime?: {} | undefined
        IdleSinceDateTime?: {} | undefined
        State?: {} | undefined
        StateChangeReason?: {} | undefined
      }
    | undefined
}
type GetTableMetadataInput = { CatalogName: {}; DatabaseName: {}; TableName: {} }
type GetTableMetadataOutput = {
  TableMetadata?:
    | {
        Name: {}
        CreateTime?: {} | undefined
        LastAccessTime?: {} | undefined
        TableType?: {} | undefined
        Columns?: {} | undefined
        PartitionKeys?: {} | undefined
        Parameters?: {} | undefined
      }
    | undefined
}
type GetWorkGroupInput = { WorkGroup: {} }
type GetWorkGroupOutput = {
  WorkGroup?:
    | {
        Name: {}
        State?: {} | undefined
        Configuration?:
          | {
              ResultConfiguration?:
                | {
                    OutputLocation?: {} | undefined
                    EncryptionConfiguration?:
                      | { EncryptionOption: {}; KmsKey?: {} | undefined }
                      | undefined
                    ExpectedBucketOwner?: {} | undefined
                    AclConfiguration?: { S3AclOption: {} } | undefined
                  }
                | undefined
              EnforceWorkGroupConfiguration?: {} | undefined
              PublishCloudWatchMetricsEnabled?: {} | undefined
              BytesScannedCutoffPerQuery?: {} | undefined
              RequesterPaysEnabled?: {} | undefined
              EngineVersion?:
                | {
                    SelectedEngineVersion?: {} | undefined
                    EffectiveEngineVersion?: {} | undefined
                  }
                | undefined
              AdditionalConfiguration?: {} | undefined
              ExecutionRole?: {} | undefined
              CustomerContentEncryptionConfiguration?: { KmsKey: {} } | undefined
              EnableMinimumEncryptionConfiguration?: {} | undefined
            }
          | undefined
        Description?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type ImportNotebookInput = {
  WorkGroup: {}
  Name: {}
  Payload: {}
  Type: {}
  ClientRequestToken?: {} | undefined
}
type ImportNotebookOutput = { NotebookId?: {} | undefined }
type ListApplicationDPUSizesInput = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListApplicationDPUSizesOutput = {
  ApplicationDPUSizes?: {} | undefined
  NextToken?: {} | undefined
}
type ListCalculationExecutionsRequest = {
  SessionId: {}
  StateFilter?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCalculationExecutionsResponse = {
  NextToken?: {} | undefined
  Calculations?: {} | undefined
}
type ListCapacityReservationsInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListCapacityReservationsOutput = { NextToken?: {} | undefined; CapacityReservations: {} }
type ListDataCatalogsInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListDataCatalogsOutput = { DataCatalogsSummary?: {} | undefined; NextToken?: {} | undefined }
type ListDatabasesInput = {
  CatalogName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDatabasesOutput = { DatabaseList?: {} | undefined; NextToken?: {} | undefined }
type ListEngineVersionsInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListEngineVersionsOutput = { EngineVersions?: {} | undefined; NextToken?: {} | undefined }
type ListExecutorsRequest = {
  SessionId: {}
  ExecutorStateFilter?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListExecutorsResponse = {
  SessionId: {}
  NextToken?: {} | undefined
  ExecutorsSummary?: {} | undefined
}
type ListNamedQueriesInput = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  WorkGroup?: {} | undefined
}
type ListNamedQueriesOutput = { NamedQueryIds?: {} | undefined; NextToken?: {} | undefined }
type ListNotebookMetadataInput = {
  Filters?: { Name?: {} | undefined } | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  WorkGroup: {}
}
type ListNotebookMetadataOutput = {
  NextToken?: {} | undefined
  NotebookMetadataList?: {} | undefined
}
type ListNotebookSessionsRequest = {
  NotebookId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListNotebookSessionsResponse = { NotebookSessionsList: {}; NextToken?: {} | undefined }
type ListPreparedStatementsInput = {
  WorkGroup: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPreparedStatementsOutput = {
  PreparedStatements?: {} | undefined
  NextToken?: {} | undefined
}
type ListQueryExecutionsInput = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  WorkGroup?: {} | undefined
}
type ListQueryExecutionsOutput = { QueryExecutionIds?: {} | undefined; NextToken?: {} | undefined }
type ListSessionsRequest = {
  WorkGroup: {}
  StateFilter?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListSessionsResponse = { NextToken?: {} | undefined; Sessions?: {} | undefined }
type ListTableMetadataInput = {
  CatalogName: {}
  DatabaseName: {}
  Expression?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTableMetadataOutput = { TableMetadataList?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceInput = {
  ResourceARN: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTagsForResourceOutput = { Tags?: {} | undefined; NextToken?: {} | undefined }
type ListWorkGroupsInput = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListWorkGroupsOutput = { WorkGroups?: {} | undefined; NextToken?: {} | undefined }
type PutCapacityAssignmentConfigurationInput = {
  CapacityReservationName: {}
  CapacityAssignments: {}
}
type PutCapacityAssignmentConfigurationOutput = { [x: string]: unknown }
type StartCalculationExecutionRequest = {
  SessionId: {}
  Description?: {} | undefined
  CalculationConfiguration?: { CodeBlock?: {} | undefined } | undefined
  CodeBlock?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type StartCalculationExecutionResponse = {
  CalculationExecutionId?: {} | undefined
  State?: {} | undefined
}
type StartQueryExecutionInput = {
  QueryString: {}
  ClientRequestToken?: {} | undefined
  QueryExecutionContext?: { Database?: {} | undefined; Catalog?: {} | undefined } | undefined
  ResultConfiguration?:
    | {
        OutputLocation?: {} | undefined
        EncryptionConfiguration?: { EncryptionOption: {}; KmsKey?: {} | undefined } | undefined
        ExpectedBucketOwner?: {} | undefined
        AclConfiguration?: { S3AclOption: {} } | undefined
      }
    | undefined
  WorkGroup?: {} | undefined
  ExecutionParameters?: {} | undefined
  ResultReuseConfiguration?:
    | {
        ResultReuseByAgeConfiguration?:
          | { Enabled: {}; MaxAgeInMinutes?: {} | undefined }
          | undefined
      }
    | undefined
}
type StartQueryExecutionOutput = { QueryExecutionId?: {} | undefined }
type StartSessionRequest = {
  Description?: {} | undefined
  WorkGroup: {}
  EngineConfiguration: {
    CoordinatorDpuSize?: {} | undefined
    MaxConcurrentDpus: {}
    DefaultExecutorDpuSize?: {} | undefined
    AdditionalConfigs?: {} | undefined
    SparkProperties?: {} | undefined
  }
  NotebookVersion?: {} | undefined
  SessionIdleTimeoutInMinutes?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type StartSessionResponse = { SessionId?: {} | undefined; State?: {} | undefined }
type StopCalculationExecutionRequest = { CalculationExecutionId: {} }
type StopCalculationExecutionResponse = { State?: {} | undefined }
type StopQueryExecutionInput = { QueryExecutionId: {} }
type StopQueryExecutionOutput = { [x: string]: unknown }
type TagResourceInput = { ResourceARN: {}; Tags: {} }
type TagResourceOutput = { [x: string]: unknown }
type TerminateSessionRequest = { SessionId: {} }
type TerminateSessionResponse = { State?: {} | undefined }
type UntagResourceInput = { ResourceARN: {}; TagKeys: {} }
type UntagResourceOutput = { [x: string]: unknown }
type UpdateCapacityReservationInput = { TargetDpus: {}; Name: {} }
type UpdateCapacityReservationOutput = { [x: string]: unknown }
type UpdateDataCatalogInput = {
  Name: {}
  Type: {}
  Description?: {} | undefined
  Parameters?: {} | undefined
}
type UpdateDataCatalogOutput = { [x: string]: unknown }
type UpdateNamedQueryInput = {
  NamedQueryId: {}
  Name: {}
  Description?: {} | undefined
  QueryString: {}
}
type UpdateNamedQueryOutput = { [x: string]: unknown }
type UpdateNotebookInput = {
  NotebookId: {}
  Payload: {}
  Type: {}
  SessionId?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type UpdateNotebookOutput = { [x: string]: unknown }
type UpdateNotebookMetadataInput = { NotebookId: {}; ClientRequestToken?: {} | undefined; Name: {} }
type UpdateNotebookMetadataOutput = { [x: string]: unknown }
type UpdatePreparedStatementInput = {
  StatementName: {}
  WorkGroup: {}
  QueryStatement: {}
  Description?: {} | undefined
}
type UpdatePreparedStatementOutput = { [x: string]: unknown }
type CustomerContentEncryptionConfiguration = { KmsKey: {} }
type UpdateWorkGroupInput = {
  WorkGroup: {}
  Description?: {} | undefined
  ConfigurationUpdates?:
    | {
        EnforceWorkGroupConfiguration?: {} | undefined
        ResultConfigurationUpdates?:
          | {
              OutputLocation?: {} | undefined
              RemoveOutputLocation?: {} | undefined
              EncryptionConfiguration?:
                | { EncryptionOption: {}; KmsKey?: {} | undefined }
                | undefined
              RemoveEncryptionConfiguration?: {} | undefined
              ExpectedBucketOwner?: {} | undefined
              RemoveExpectedBucketOwner?: {} | undefined
              AclConfiguration?: { S3AclOption: {} } | undefined
              RemoveAclConfiguration?: {} | undefined
            }
          | undefined
        PublishCloudWatchMetricsEnabled?: {} | undefined
        BytesScannedCutoffPerQuery?: {} | undefined
        RemoveBytesScannedCutoffPerQuery?: {} | undefined
        RequesterPaysEnabled?: {} | undefined
        EngineVersion?:
          | { SelectedEngineVersion?: {} | undefined; EffectiveEngineVersion?: {} | undefined }
          | undefined
        RemoveCustomerContentEncryptionConfiguration?: {} | undefined
        AdditionalConfiguration?: {} | undefined
        ExecutionRole?: {} | undefined
        CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration | undefined
        EnableMinimumEncryptionConfiguration?: {} | undefined
      }
    | undefined
  State?: {} | undefined
}
type UpdateWorkGroupOutput = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonAthena.BatchGetNamedQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.BatchGetNamedQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetNamedQueryInput }
        output: BatchGetNamedQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.BatchGetPreparedStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetPreparedStatementInput }
        output: BatchGetPreparedStatementOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.BatchGetQueryExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.BatchGetQueryExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetQueryExecutionInput }
        output: BatchGetQueryExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CancelCapacityReservation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CancelCapacityReservation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelCapacityReservationInput }
        output: CancelCapacityReservationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CreateCapacityReservation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CreateCapacityReservation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCapacityReservationInput }
        output: CreateCapacityReservationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CreateDataCatalog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CreateDataCatalog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDataCatalogInput }
        output: CreateDataCatalogOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CreateNamedQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CreateNamedQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateNamedQueryInput }
        output: CreateNamedQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CreateNotebook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CreateNotebook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateNotebookInput }
        output: CreateNotebookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CreatePreparedStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CreatePreparedStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePreparedStatementInput }
        output: CreatePreparedStatementOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CreatePresignedNotebookUrl'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePresignedNotebookUrlRequest }
        output: CreatePresignedNotebookUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.CreateWorkGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.CreateWorkGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkGroupInput }
        output: CreateWorkGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.DeleteCapacityReservation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.DeleteCapacityReservation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCapacityReservationInput }
        output: DeleteCapacityReservationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.DeleteDataCatalog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.DeleteDataCatalog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDataCatalogInput }
        output: DeleteDataCatalogOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.DeleteNamedQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.DeleteNamedQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNamedQueryInput }
        output: DeleteNamedQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.DeleteNotebook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.DeleteNotebook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNotebookInput }
        output: DeleteNotebookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.DeletePreparedStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.DeletePreparedStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePreparedStatementInput }
        output: DeletePreparedStatementOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.DeleteWorkGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.DeleteWorkGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWorkGroupInput }
        output: DeleteWorkGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ExportNotebook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.ExportNotebook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportNotebookInput }
        output: ExportNotebookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetCalculationExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCalculationExecutionRequest }
        output: GetCalculationExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetCalculationExecutionCode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCalculationExecutionCodeRequest }
        output: GetCalculationExecutionCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetCalculationExecutionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCalculationExecutionStatusRequest }
        output: GetCalculationExecutionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetCapacityAssignmentConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCapacityAssignmentConfigurationInput }
        output: GetCapacityAssignmentConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetCapacityReservation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetCapacityReservation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCapacityReservationInput }
        output: GetCapacityReservationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetDataCatalog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetDataCatalog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataCatalogInput }
        output: GetDataCatalogOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDatabaseInput }
        output: GetDatabaseOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetNamedQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetNamedQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetNamedQueryInput }
        output: GetNamedQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetNotebookMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetNotebookMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetNotebookMetadataInput }
        output: GetNotebookMetadataOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetPreparedStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetPreparedStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPreparedStatementInput }
        output: GetPreparedStatementOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetQueryExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetQueryExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQueryExecutionInput }
        output: GetQueryExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetQueryResults': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetQueryResults'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQueryResultsInput }
        output: GetQueryResultsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetQueryRuntimeStatistics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQueryRuntimeStatisticsInput }
        output: GetQueryRuntimeStatisticsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSessionRequest }
        output: GetSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetSessionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetSessionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSessionStatusRequest }
        output: GetSessionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetTableMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetTableMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTableMetadataInput }
        output: GetTableMetadataOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.GetWorkGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.GetWorkGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWorkGroupInput }
        output: GetWorkGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ImportNotebook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.ImportNotebook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportNotebookInput }
        output: ImportNotebookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListApplicationDPUSizes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApplicationDPUSizesInput }
        output: ListApplicationDPUSizesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListCalculationExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListCalculationExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCalculationExecutionsRequest }
        output: ListCalculationExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListCapacityReservations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListCapacityReservations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCapacityReservationsInput }
        output: ListCapacityReservationsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListDataCatalogs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListDataCatalogs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataCatalogsInput }
        output: ListDataCatalogsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListDatabases': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListDatabases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatabasesInput }
        output: ListDatabasesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListEngineVersions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListEngineVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEngineVersionsInput }
        output: ListEngineVersionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListExecutors': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListExecutors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListExecutorsRequest }
        output: ListExecutorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListNamedQueries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListNamedQueries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListNamedQueriesInput }
        output: ListNamedQueriesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListNotebookMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListNotebookMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListNotebookMetadataInput }
        output: ListNotebookMetadataOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListNotebookSessions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListNotebookSessions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListNotebookSessionsRequest }
        output: ListNotebookSessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListPreparedStatements': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListPreparedStatements'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPreparedStatementsInput }
        output: ListPreparedStatementsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListQueryExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListQueryExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListQueryExecutionsInput }
        output: ListQueryExecutionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListSessions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListSessions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSessionsRequest }
        output: ListSessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListTableMetadata': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListTableMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTableMetadataInput }
        output: ListTableMetadataOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.ListTagsForResource': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListTagsForResource'
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
    '/#X-Amz-Target=AmazonAthena.ListWorkGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonAthena.ListWorkGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkGroupsInput }
        output: ListWorkGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.PutCapacityAssignmentConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutCapacityAssignmentConfigurationInput }
        output: PutCapacityAssignmentConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.StartCalculationExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.StartCalculationExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartCalculationExecutionRequest }
        output: StartCalculationExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.StartQueryExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.StartQueryExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartQueryExecutionInput }
        output: StartQueryExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.StartSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.StartSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartSessionRequest }
        output: StartSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.StopCalculationExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.StopCalculationExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopCalculationExecutionRequest }
        output: StopCalculationExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.StopQueryExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.StopQueryExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopQueryExecutionInput }
        output: StopQueryExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.TagResource'
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
    '/#X-Amz-Target=AmazonAthena.TerminateSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.TerminateSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateSessionRequest }
        output: TerminateSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UntagResource'
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
    '/#X-Amz-Target=AmazonAthena.UpdateCapacityReservation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UpdateCapacityReservation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCapacityReservationInput }
        output: UpdateCapacityReservationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.UpdateDataCatalog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UpdateDataCatalog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDataCatalogInput }
        output: UpdateDataCatalogOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.UpdateNamedQuery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UpdateNamedQuery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNamedQueryInput }
        output: UpdateNamedQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.UpdateNotebook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UpdateNotebook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNotebookInput }
        output: UpdateNotebookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UpdateNotebookMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNotebookMetadataInput }
        output: UpdateNotebookMetadataOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.UpdatePreparedStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UpdatePreparedStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePreparedStatementInput }
        output: UpdatePreparedStatementOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonAthena.UpdateWorkGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonAthena.UpdateWorkGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateWorkGroupInput }
        output: UpdateWorkGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
