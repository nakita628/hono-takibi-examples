type BatchCreatePartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionInputList: {}
}
type BatchCreatePartitionResponse = { Errors?: {} | undefined }
type BatchDeleteConnectionRequest = { CatalogId?: {} | undefined; ConnectionNameList: {} }
type BatchDeleteConnectionResponse = { Succeeded?: {} | undefined; Errors?: {} | undefined }
type BatchDeletePartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionsToDelete: {}
}
type BatchDeletePartitionResponse = { Errors?: {} | undefined }
type BatchDeleteTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TablesToDelete: {}
  TransactionId?: {} | undefined
}
type BatchDeleteTableResponse = { Errors?: {} | undefined }
type BatchDeleteTableVersionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  VersionIds: {}
}
type BatchDeleteTableVersionResponse = { Errors?: {} | undefined }
type BatchGetBlueprintsRequest = {
  Names: {}
  IncludeBlueprint?: {} | undefined
  IncludeParameterSpec?: {} | undefined
}
type BatchGetBlueprintsResponse = {
  Blueprints?: {} | undefined
  MissingBlueprints?: {} | undefined
}
type BatchGetCrawlersRequest = { CrawlerNames: {} }
type BatchGetCrawlersResponse = { Crawlers?: {} | undefined; CrawlersNotFound?: {} | undefined }
type BatchGetCustomEntityTypesRequest = { Names: {} }
type BatchGetCustomEntityTypesResponse = {
  CustomEntityTypes?: {} | undefined
  CustomEntityTypesNotFound?: {} | undefined
}
type BatchGetDataQualityResultRequest = { ResultIds: {} }
type BatchGetDataQualityResultResponse = { Results: {}; ResultsNotFound?: {} | undefined }
type BatchGetDevEndpointsRequest = { DevEndpointNames: {} }
type BatchGetDevEndpointsResponse = {
  DevEndpoints?: {} | undefined
  DevEndpointsNotFound?: {} | undefined
}
type BatchGetJobsRequest = { JobNames: {} }
type BatchGetJobsResponse = { Jobs?: {} | undefined; JobsNotFound?: {} | undefined }
type BatchGetPartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionsToGet: {}
}
type BatchGetPartitionResponse = { Partitions?: {} | undefined; UnprocessedKeys?: {} | undefined }
type BatchGetTriggersRequest = { TriggerNames: {} }
type BatchGetTriggersResponse = { Triggers?: {} | undefined; TriggersNotFound?: {} | undefined }
type BatchGetWorkflowsRequest = { Names: {}; IncludeGraph?: {} | undefined }
type BatchGetWorkflowsResponse = { Workflows?: {} | undefined; MissingWorkflows?: {} | undefined }
type BatchStopJobRunRequest = { JobName: {}; JobRunIds: {} }
type BatchStopJobRunResponse = { SuccessfulSubmissions?: {} | undefined; Errors?: {} | undefined }
type BatchUpdatePartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  Entries: {}
}
type BatchUpdatePartitionResponse = { Errors?: {} | undefined }
type CancelDataQualityRuleRecommendationRunRequest = { RunId: {} }
type CancelDataQualityRuleRecommendationRunResponse = { [x: string]: unknown }
type CancelDataQualityRulesetEvaluationRunRequest = { RunId: {} }
type CancelDataQualityRulesetEvaluationRunResponse = { [x: string]: unknown }
type CancelMLTaskRunRequest = { TransformId: {}; TaskRunId: {} }
type CancelMLTaskRunResponse = {
  TransformId?: {} | undefined
  TaskRunId?: {} | undefined
  Status?: {} | undefined
}
type CancelStatementRequest = { SessionId: {}; Id: {}; RequestOrigin?: {} | undefined }
type CancelStatementResponse = { [x: string]: unknown }
type CheckSchemaVersionValidityInput = { DataFormat: {}; SchemaDefinition: {} }
type CheckSchemaVersionValidityResponse = { Valid?: {} | undefined; Error?: {} | undefined }
type CreateBlueprintRequest = {
  Name: {}
  Description?: {} | undefined
  BlueprintLocation: {}
  Tags?: {} | undefined
}
type CreateBlueprintResponse = { Name?: {} | undefined }
type CreateClassifierRequest = {
  GrokClassifier?:
    | { Classification: {}; Name: {}; GrokPattern: {}; CustomPatterns?: {} | undefined }
    | undefined
  XMLClassifier?: { Classification: {}; Name: {}; RowTag?: {} | undefined } | undefined
  JsonClassifier?: { Name: {}; JsonPath: {} } | undefined
  CsvClassifier?:
    | {
        Name: {}
        Delimiter?: {} | undefined
        QuoteSymbol?: {} | undefined
        ContainsHeader?: {} | undefined
        Header?: {} | undefined
        DisableValueTrimming?: {} | undefined
        AllowSingleColumn?: {} | undefined
        CustomDatatypeConfigured?: {} | undefined
        CustomDatatypes?: {} | undefined
      }
    | undefined
}
type CreateClassifierResponse = { [x: string]: unknown }
type CreateConnectionRequest = {
  CatalogId?: {} | undefined
  ConnectionInput: {
    Name: {}
    Description?: {} | undefined
    ConnectionType: {}
    MatchCriteria?: {} | undefined
    ConnectionProperties: {}
    PhysicalConnectionRequirements?:
      | {
          SubnetId?: {} | undefined
          SecurityGroupIdList?: {} | undefined
          AvailabilityZone?: {} | undefined
        }
      | undefined
  }
  Tags?: {} | undefined
}
type CreateConnectionResponse = { [x: string]: unknown }
type CreateCrawlerRequest = {
  Name: {}
  Role: {}
  DatabaseName?: {} | undefined
  Description?: {} | undefined
  Targets: {
    S3Targets?: {} | undefined
    JdbcTargets?: {} | undefined
    MongoDBTargets?: {} | undefined
    DynamoDBTargets?: {} | undefined
    CatalogTargets?: {} | undefined
    DeltaTargets?: {} | undefined
    IcebergTargets?: {} | undefined
    HudiTargets?: {} | undefined
  }
  Schedule?: {} | undefined
  Classifiers?: {} | undefined
  TablePrefix?: {} | undefined
  SchemaChangePolicy?:
    | { UpdateBehavior?: {} | undefined; DeleteBehavior?: {} | undefined }
    | undefined
  RecrawlPolicy?: { RecrawlBehavior?: {} | undefined } | undefined
  LineageConfiguration?: { CrawlerLineageSettings?: {} | undefined } | undefined
  LakeFormationConfiguration?:
    | { UseLakeFormationCredentials?: {} | undefined; AccountId?: {} | undefined }
    | undefined
  Configuration?: {} | undefined
  CrawlerSecurityConfiguration?: {} | undefined
  Tags?: {} | undefined
}
type CreateCrawlerResponse = { [x: string]: unknown }
type CreateCustomEntityTypeRequest = {
  Name: {}
  RegexString: {}
  ContextWords?: {} | undefined
  Tags?: {} | undefined
}
type CreateCustomEntityTypeResponse = { Name?: {} | undefined }
type CreateDataQualityRulesetRequest = {
  Name: {}
  Description?: {} | undefined
  Ruleset: {}
  Tags?: {} | undefined
  TargetTable?: { TableName: {}; DatabaseName: {}; CatalogId?: {} | undefined } | undefined
  ClientToken?: {} | undefined
}
type CreateDataQualityRulesetResponse = { Name?: {} | undefined }
type CreateDatabaseRequest = {
  CatalogId?: {} | undefined
  DatabaseInput: {
    Name: {}
    Description?: {} | undefined
    LocationUri?: {} | undefined
    Parameters?: {} | undefined
    CreateTableDefaultPermissions?: {} | undefined
    TargetDatabase?:
      | { CatalogId?: {} | undefined; DatabaseName?: {} | undefined; Region?: {} | undefined }
      | undefined
    FederatedDatabase?: { Identifier?: {} | undefined; ConnectionName?: {} | undefined } | undefined
  }
  Tags?: {} | undefined
}
type CreateDatabaseResponse = { [x: string]: unknown }
type CreateDevEndpointRequest = {
  EndpointName: {}
  RoleArn: {}
  SecurityGroupIds?: {} | undefined
  SubnetId?: {} | undefined
  PublicKey?: {} | undefined
  PublicKeys?: {} | undefined
  NumberOfNodes?: {} | undefined
  WorkerType?: {} | undefined
  GlueVersion?: {} | undefined
  NumberOfWorkers?: {} | undefined
  ExtraPythonLibsS3Path?: {} | undefined
  ExtraJarsS3Path?: {} | undefined
  SecurityConfiguration?: {} | undefined
  Tags?: {} | undefined
  Arguments?: {} | undefined
}
type CreateDevEndpointResponse = {
  EndpointName?: {} | undefined
  Status?: {} | undefined
  SecurityGroupIds?: {} | undefined
  SubnetId?: {} | undefined
  RoleArn?: {} | undefined
  YarnEndpointAddress?: {} | undefined
  ZeppelinRemoteSparkInterpreterPort?: {} | undefined
  NumberOfNodes?: {} | undefined
  WorkerType?: {} | undefined
  GlueVersion?: {} | undefined
  NumberOfWorkers?: {} | undefined
  AvailabilityZone?: {} | undefined
  VpcId?: {} | undefined
  ExtraPythonLibsS3Path?: {} | undefined
  ExtraJarsS3Path?: {} | undefined
  FailureReason?: {} | undefined
  SecurityConfiguration?: {} | undefined
  CreatedTimestamp?: {} | undefined
  Arguments?: {} | undefined
}
type CreateJobRequest = {
  Name: {}
  Description?: {} | undefined
  LogUri?: {} | undefined
  Role: {}
  ExecutionProperty?: { MaxConcurrentRuns?: {} | undefined } | undefined
  Command: {
    Name?: {} | undefined
    ScriptLocation?: {} | undefined
    PythonVersion?: {} | undefined
    Runtime?: {} | undefined
  }
  DefaultArguments?: {} | undefined
  NonOverridableArguments?: {} | undefined
  Connections?: { Connections?: {} | undefined } | undefined
  MaxRetries?: {} | undefined
  AllocatedCapacity?: {} | undefined
  Timeout?: {} | undefined
  MaxCapacity?: {} | undefined
  SecurityConfiguration?: {} | undefined
  Tags?: {} | undefined
  NotificationProperty?: { NotifyDelayAfter?: {} | undefined } | undefined
  GlueVersion?: {} | undefined
  NumberOfWorkers?: {} | undefined
  WorkerType?: {} | undefined
  CodeGenConfigurationNodes?: {} | undefined
  ExecutionClass?: {} | undefined
  SourceControlDetails?:
    | {
        Provider?: {} | undefined
        Repository?: {} | undefined
        Owner?: {} | undefined
        Branch?: {} | undefined
        Folder?: {} | undefined
        LastCommitId?: {} | undefined
        AuthStrategy?: {} | undefined
        AuthToken?: {} | undefined
      }
    | undefined
}
type CreateJobResponse = { Name?: {} | undefined }
type CreateMLTransformRequest = {
  Name: {}
  Description?: {} | undefined
  InputRecordTables: {}
  Parameters: {
    TransformType: {}
    FindMatchesParameters?:
      | {
          PrimaryKeyColumnName?: {} | undefined
          PrecisionRecallTradeoff?: {} | undefined
          AccuracyCostTradeoff?: {} | undefined
          EnforceProvidedLabels?: {} | undefined
        }
      | undefined
  }
  Role: {}
  GlueVersion?: {} | undefined
  MaxCapacity?: {} | undefined
  WorkerType?: {} | undefined
  NumberOfWorkers?: {} | undefined
  Timeout?: {} | undefined
  MaxRetries?: {} | undefined
  Tags?: {} | undefined
  TransformEncryption?:
    | {
        MlUserDataEncryption?:
          | { MlUserDataEncryptionMode: {}; KmsKeyId?: {} | undefined }
          | undefined
        TaskRunSecurityConfigurationName?: {} | undefined
      }
    | undefined
}
type CreateMLTransformResponse = { TransformId?: {} | undefined }
type CreatePartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionInput: {
    Values?: {} | undefined
    LastAccessTime?: {} | undefined
    StorageDescriptor?:
      | {
          Columns?: {} | undefined
          Location?: {} | undefined
          AdditionalLocations?: {} | undefined
          InputFormat?: {} | undefined
          OutputFormat?: {} | undefined
          Compressed?: {} | undefined
          NumberOfBuckets?: {} | undefined
          SerdeInfo?:
            | {
                Name?: {} | undefined
                SerializationLibrary?: {} | undefined
                Parameters?: {} | undefined
              }
            | undefined
          BucketColumns?: {} | undefined
          SortColumns?: {} | undefined
          Parameters?: {} | undefined
          SkewedInfo?:
            | {
                SkewedColumnNames?: {} | undefined
                SkewedColumnValues?: {} | undefined
                SkewedColumnValueLocationMaps?: {} | undefined
              }
            | undefined
          StoredAsSubDirectories?: {} | undefined
          SchemaReference?:
            | {
                SchemaId?:
                  | {
                      SchemaArn?: {} | undefined
                      SchemaName?: {} | undefined
                      RegistryName?: {} | undefined
                    }
                  | undefined
                SchemaVersionId?: {} | undefined
                SchemaVersionNumber?: {} | undefined
              }
            | undefined
        }
      | undefined
    Parameters?: {} | undefined
    LastAnalyzedTime?: {} | undefined
  }
}
type CreatePartitionResponse = { [x: string]: unknown }
type CreatePartitionIndexRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionIndex: { Keys: {}; IndexName: {} }
}
type CreatePartitionIndexResponse = { [x: string]: unknown }
type CreateRegistryInput = { RegistryName: {}; Description?: {} | undefined; Tags?: {} | undefined }
type CreateRegistryResponse = {
  RegistryArn?: {} | undefined
  RegistryName?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateSchemaInput = {
  RegistryId?: { RegistryName?: {} | undefined; RegistryArn?: {} | undefined } | undefined
  SchemaName: {}
  DataFormat: {}
  Compatibility?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
  SchemaDefinition?: {} | undefined
}
type CreateSchemaResponse = {
  RegistryName?: {} | undefined
  RegistryArn?: {} | undefined
  SchemaName?: {} | undefined
  SchemaArn?: {} | undefined
  Description?: {} | undefined
  DataFormat?: {} | undefined
  Compatibility?: {} | undefined
  SchemaCheckpoint?: {} | undefined
  LatestSchemaVersion?: {} | undefined
  NextSchemaVersion?: {} | undefined
  SchemaStatus?: {} | undefined
  Tags?: {} | undefined
  SchemaVersionId?: {} | undefined
  SchemaVersionStatus?: {} | undefined
}
type CreateScriptRequest = {
  DagNodes?: {} | undefined
  DagEdges?: {} | undefined
  Language?: {} | undefined
}
type CreateScriptResponse = { PythonScript?: {} | undefined; ScalaCode?: {} | undefined }
type CreateSecurityConfigurationRequest = {
  Name: {}
  EncryptionConfiguration: {
    S3Encryption?: {} | undefined
    CloudWatchEncryption?:
      | { CloudWatchEncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
      | undefined
    JobBookmarksEncryption?:
      | { JobBookmarksEncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
      | undefined
  }
}
type CreateSecurityConfigurationResponse = {
  Name?: {} | undefined
  CreatedTimestamp?: {} | undefined
}
type CreateSessionRequest = {
  Id: {}
  Description?: {} | undefined
  Role: {}
  Command: { Name?: {} | undefined; PythonVersion?: {} | undefined }
  Timeout?: {} | undefined
  IdleTimeout?: {} | undefined
  DefaultArguments?: {} | undefined
  Connections?: { Connections?: {} | undefined } | undefined
  MaxCapacity?: {} | undefined
  NumberOfWorkers?: {} | undefined
  WorkerType?: {} | undefined
  SecurityConfiguration?: {} | undefined
  GlueVersion?: {} | undefined
  Tags?: {} | undefined
  RequestOrigin?: {} | undefined
}
type CreateSessionResponse = {
  Session?:
    | {
        Id?: {} | undefined
        CreatedOn?: {} | undefined
        Status?: {} | undefined
        ErrorMessage?: {} | undefined
        Description?: {} | undefined
        Role?: {} | undefined
        Command?: { Name?: {} | undefined; PythonVersion?: {} | undefined } | undefined
        DefaultArguments?: {} | undefined
        Connections?: { Connections?: {} | undefined } | undefined
        Progress?: {} | undefined
        MaxCapacity?: {} | undefined
        SecurityConfiguration?: {} | undefined
        GlueVersion?: {} | undefined
      }
    | undefined
}
type CreateTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableInput: {
    Name: {}
    Description?: {} | undefined
    Owner?: {} | undefined
    LastAccessTime?: {} | undefined
    LastAnalyzedTime?: {} | undefined
    Retention?: {} | undefined
    StorageDescriptor?:
      | {
          Columns?: {} | undefined
          Location?: {} | undefined
          AdditionalLocations?: {} | undefined
          InputFormat?: {} | undefined
          OutputFormat?: {} | undefined
          Compressed?: {} | undefined
          NumberOfBuckets?: {} | undefined
          SerdeInfo?:
            | {
                Name?: {} | undefined
                SerializationLibrary?: {} | undefined
                Parameters?: {} | undefined
              }
            | undefined
          BucketColumns?: {} | undefined
          SortColumns?: {} | undefined
          Parameters?: {} | undefined
          SkewedInfo?:
            | {
                SkewedColumnNames?: {} | undefined
                SkewedColumnValues?: {} | undefined
                SkewedColumnValueLocationMaps?: {} | undefined
              }
            | undefined
          StoredAsSubDirectories?: {} | undefined
          SchemaReference?:
            | {
                SchemaId?:
                  | {
                      SchemaArn?: {} | undefined
                      SchemaName?: {} | undefined
                      RegistryName?: {} | undefined
                    }
                  | undefined
                SchemaVersionId?: {} | undefined
                SchemaVersionNumber?: {} | undefined
              }
            | undefined
        }
      | undefined
    PartitionKeys?: {} | undefined
    ViewOriginalText?: {} | undefined
    ViewExpandedText?: {} | undefined
    TableType?: {} | undefined
    Parameters?: {} | undefined
    TargetTable?:
      | {
          CatalogId?: {} | undefined
          DatabaseName?: {} | undefined
          Name?: {} | undefined
          Region?: {} | undefined
        }
      | undefined
  }
  PartitionIndexes?: {} | undefined
  TransactionId?: {} | undefined
  OpenTableFormatInput?:
    | { IcebergInput?: { MetadataOperation: {}; Version?: {} | undefined } | undefined }
    | undefined
}
type CreateTableResponse = { [x: string]: unknown }
type CreateTriggerRequest = {
  Name: {}
  WorkflowName?: {} | undefined
  Type: {}
  Schedule?: {} | undefined
  Predicate?: { Logical?: {} | undefined; Conditions?: {} | undefined } | undefined
  Actions: {}
  Description?: {} | undefined
  StartOnCreation?: {} | undefined
  Tags?: {} | undefined
  EventBatchingCondition?: { BatchSize: {}; BatchWindow?: {} | undefined } | undefined
}
type CreateTriggerResponse = { Name?: {} | undefined }
type CreateUserDefinedFunctionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  FunctionInput: {
    FunctionName?: {} | undefined
    ClassName?: {} | undefined
    OwnerName?: {} | undefined
    OwnerType?: {} | undefined
    ResourceUris?: {} | undefined
  }
}
type CreateUserDefinedFunctionResponse = { [x: string]: unknown }
type CreateWorkflowRequest = {
  Name: {}
  Description?: {} | undefined
  DefaultRunProperties?: {} | undefined
  Tags?: {} | undefined
  MaxConcurrentRuns?: {} | undefined
}
type CreateWorkflowResponse = { Name?: {} | undefined }
type DeleteBlueprintRequest = { Name: {} }
type DeleteBlueprintResponse = { Name?: {} | undefined }
type DeleteClassifierRequest = { Name: {} }
type DeleteClassifierResponse = { [x: string]: unknown }
type DeleteColumnStatisticsForPartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionValues: {}
  ColumnName: {}
}
type DeleteColumnStatisticsForPartitionResponse = { [x: string]: unknown }
type DeleteColumnStatisticsForTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  ColumnName: {}
}
type DeleteColumnStatisticsForTableResponse = { [x: string]: unknown }
type DeleteConnectionRequest = { CatalogId?: {} | undefined; ConnectionName: {} }
type DeleteConnectionResponse = { [x: string]: unknown }
type DeleteCrawlerRequest = { Name: {} }
type DeleteCrawlerResponse = { [x: string]: unknown }
type DeleteCustomEntityTypeRequest = { Name: {} }
type DeleteCustomEntityTypeResponse = { Name?: {} | undefined }
type DeleteDataQualityRulesetRequest = { Name: {} }
type DeleteDataQualityRulesetResponse = { [x: string]: unknown }
type DeleteDatabaseRequest = { CatalogId?: {} | undefined; Name: {} }
type DeleteDatabaseResponse = { [x: string]: unknown }
type DeleteDevEndpointRequest = { EndpointName: {} }
type DeleteDevEndpointResponse = { [x: string]: unknown }
type DeleteJobRequest = { JobName: {} }
type DeleteJobResponse = { JobName?: {} | undefined }
type DeleteMLTransformRequest = { TransformId: {} }
type DeleteMLTransformResponse = { TransformId?: {} | undefined }
type DeletePartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionValues: {}
}
type DeletePartitionResponse = { [x: string]: unknown }
type DeletePartitionIndexRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  IndexName: {}
}
type DeletePartitionIndexResponse = { [x: string]: unknown }
type DeleteRegistryInput = {
  RegistryId: { RegistryName?: {} | undefined; RegistryArn?: {} | undefined }
}
type DeleteRegistryResponse = {
  RegistryName?: {} | undefined
  RegistryArn?: {} | undefined
  Status?: {} | undefined
}
type DeleteResourcePolicyRequest = {
  PolicyHashCondition?: {} | undefined
  ResourceArn?: {} | undefined
}
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type DeleteSchemaInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
}
type DeleteSchemaResponse = {
  SchemaArn?: {} | undefined
  SchemaName?: {} | undefined
  Status?: {} | undefined
}
type DeleteSchemaVersionsInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
  Versions: {}
}
type DeleteSchemaVersionsResponse = { SchemaVersionErrors?: {} | undefined }
type DeleteSecurityConfigurationRequest = { Name: {} }
type DeleteSecurityConfigurationResponse = { [x: string]: unknown }
type DeleteSessionRequest = { Id: {}; RequestOrigin?: {} | undefined }
type DeleteSessionResponse = { Id?: {} | undefined }
type DeleteTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  Name: {}
  TransactionId?: {} | undefined
}
type DeleteTableResponse = { [x: string]: unknown }
type DeleteTableVersionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  VersionId: {}
}
type DeleteTableVersionResponse = { [x: string]: unknown }
type DeleteTriggerRequest = { Name: {} }
type DeleteTriggerResponse = { Name?: {} | undefined }
type DeleteUserDefinedFunctionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  FunctionName: {}
}
type DeleteUserDefinedFunctionResponse = { [x: string]: unknown }
type DeleteWorkflowRequest = { Name: {} }
type DeleteWorkflowResponse = { Name?: {} | undefined }
type GetBlueprintRequest = {
  Name: {}
  IncludeBlueprint?: {} | undefined
  IncludeParameterSpec?: {} | undefined
}
type GetBlueprintResponse = {
  Blueprint?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        CreatedOn?: {} | undefined
        LastModifiedOn?: {} | undefined
        ParameterSpec?: {} | undefined
        BlueprintLocation?: {} | undefined
        BlueprintServiceLocation?: {} | undefined
        Status?: {} | undefined
        ErrorMessage?: {} | undefined
        LastActiveDefinition?:
          | {
              Description?: {} | undefined
              LastModifiedOn?: {} | undefined
              ParameterSpec?: {} | undefined
              BlueprintLocation?: {} | undefined
              BlueprintServiceLocation?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetBlueprintRunRequest = { BlueprintName: {}; RunId: {} }
type GetBlueprintRunResponse = {
  BlueprintRun?:
    | {
        BlueprintName?: {} | undefined
        RunId?: {} | undefined
        WorkflowName?: {} | undefined
        State?: {} | undefined
        StartedOn?: {} | undefined
        CompletedOn?: {} | undefined
        ErrorMessage?: {} | undefined
        RollbackErrorMessage?: {} | undefined
        Parameters?: {} | undefined
        RoleArn?: {} | undefined
      }
    | undefined
}
type GetBlueprintRunsRequest = {
  BlueprintName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetBlueprintRunsResponse = { BlueprintRuns?: {} | undefined; NextToken?: {} | undefined }
type GetCatalogImportStatusRequest = { CatalogId?: {} | undefined }
type GetCatalogImportStatusResponse = {
  ImportStatus?:
    | { ImportCompleted?: {} | undefined; ImportTime?: {} | undefined; ImportedBy?: {} | undefined }
    | undefined
}
type GetClassifierRequest = { Name: {} }
type GetClassifierResponse = {
  Classifier?:
    | {
        GrokClassifier?:
          | {
              Name: {}
              Classification: {}
              CreationTime?: {} | undefined
              LastUpdated?: {} | undefined
              Version?: {} | undefined
              GrokPattern: {}
              CustomPatterns?: {} | undefined
            }
          | undefined
        XMLClassifier?:
          | {
              Name: {}
              Classification: {}
              CreationTime?: {} | undefined
              LastUpdated?: {} | undefined
              Version?: {} | undefined
              RowTag?: {} | undefined
            }
          | undefined
        JsonClassifier?:
          | {
              Name: {}
              CreationTime?: {} | undefined
              LastUpdated?: {} | undefined
              Version?: {} | undefined
              JsonPath: {}
            }
          | undefined
        CsvClassifier?:
          | {
              Name: {}
              CreationTime?: {} | undefined
              LastUpdated?: {} | undefined
              Version?: {} | undefined
              Delimiter?: {} | undefined
              QuoteSymbol?: {} | undefined
              ContainsHeader?: {} | undefined
              Header?: {} | undefined
              DisableValueTrimming?: {} | undefined
              AllowSingleColumn?: {} | undefined
              CustomDatatypeConfigured?: {} | undefined
              CustomDatatypes?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetClassifiersRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type GetClassifiersResponse = { Classifiers?: {} | undefined; NextToken?: {} | undefined }
type GetColumnStatisticsForPartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionValues: {}
  ColumnNames: {}
}
type GetColumnStatisticsForPartitionResponse = {
  ColumnStatisticsList?: {} | undefined
  Errors?: {} | undefined
}
type GetColumnStatisticsForTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  ColumnNames: {}
}
type GetColumnStatisticsForTableResponse = {
  ColumnStatisticsList?: {} | undefined
  Errors?: {} | undefined
}
type GetConnectionRequest = { CatalogId?: {} | undefined; Name: {}; HidePassword?: {} | undefined }
type GetConnectionResponse = {
  Connection?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        ConnectionType?: {} | undefined
        MatchCriteria?: {} | undefined
        ConnectionProperties?: {} | undefined
        PhysicalConnectionRequirements?:
          | {
              SubnetId?: {} | undefined
              SecurityGroupIdList?: {} | undefined
              AvailabilityZone?: {} | undefined
            }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        LastUpdatedBy?: {} | undefined
      }
    | undefined
}
type GetConnectionsRequest = {
  CatalogId?: {} | undefined
  Filter?: { MatchCriteria?: {} | undefined; ConnectionType?: {} | undefined } | undefined
  HidePassword?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetConnectionsResponse = { ConnectionList?: {} | undefined; NextToken?: {} | undefined }
type GetCrawlerRequest = { Name: {} }
type GetCrawlerResponse = {
  Crawler?:
    | {
        Name?: {} | undefined
        Role?: {} | undefined
        Targets?:
          | {
              S3Targets?: {} | undefined
              JdbcTargets?: {} | undefined
              MongoDBTargets?: {} | undefined
              DynamoDBTargets?: {} | undefined
              CatalogTargets?: {} | undefined
              DeltaTargets?: {} | undefined
              IcebergTargets?: {} | undefined
              HudiTargets?: {} | undefined
            }
          | undefined
        DatabaseName?: {} | undefined
        Description?: {} | undefined
        Classifiers?: {} | undefined
        RecrawlPolicy?: { RecrawlBehavior?: {} | undefined } | undefined
        SchemaChangePolicy?:
          | { UpdateBehavior?: {} | undefined; DeleteBehavior?: {} | undefined }
          | undefined
        LineageConfiguration?: { CrawlerLineageSettings?: {} | undefined } | undefined
        State?: {} | undefined
        TablePrefix?: {} | undefined
        Schedule?: { ScheduleExpression?: {} | undefined; State?: {} | undefined } | undefined
        CrawlElapsedTime?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdated?: {} | undefined
        LastCrawl?:
          | {
              Status?: {} | undefined
              ErrorMessage?: {} | undefined
              LogGroup?: {} | undefined
              LogStream?: {} | undefined
              MessagePrefix?: {} | undefined
              StartTime?: {} | undefined
            }
          | undefined
        Version?: {} | undefined
        Configuration?: {} | undefined
        CrawlerSecurityConfiguration?: {} | undefined
        LakeFormationConfiguration?:
          | { UseLakeFormationCredentials?: {} | undefined; AccountId?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetCrawlerMetricsRequest = {
  CrawlerNameList?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetCrawlerMetricsResponse = { CrawlerMetricsList?: {} | undefined; NextToken?: {} | undefined }
type GetCrawlersRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type GetCrawlersResponse = { Crawlers?: {} | undefined; NextToken?: {} | undefined }
type GetCustomEntityTypeRequest = { Name: {} }
type GetCustomEntityTypeResponse = {
  Name?: {} | undefined
  RegexString?: {} | undefined
  ContextWords?: {} | undefined
}
type GetDataCatalogEncryptionSettingsRequest = { CatalogId?: {} | undefined }
type GetDataCatalogEncryptionSettingsResponse = {
  DataCatalogEncryptionSettings?:
    | {
        EncryptionAtRest?:
          | { CatalogEncryptionMode: {}; SseAwsKmsKeyId?: {} | undefined }
          | undefined
        ConnectionPasswordEncryption?:
          | { ReturnConnectionPasswordEncrypted: {}; AwsKmsKeyId?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetDataQualityResultRequest = { ResultId: {} }
type GetDataQualityResultResponse = {
  ResultId?: {} | undefined
  Score?: {} | undefined
  DataSource?:
    | {
        GlueTable: {
          DatabaseName: {}
          TableName: {}
          CatalogId?: {} | undefined
          ConnectionName?: {} | undefined
          AdditionalOptions?: {} | undefined
        }
      }
    | undefined
  RulesetName?: {} | undefined
  EvaluationContext?: {} | undefined
  StartedOn?: {} | undefined
  CompletedOn?: {} | undefined
  JobName?: {} | undefined
  JobRunId?: {} | undefined
  RulesetEvaluationRunId?: {} | undefined
  RuleResults?: {} | undefined
}
type GetDataQualityRuleRecommendationRunRequest = { RunId: {} }
type GetDataQualityRuleRecommendationRunResponse = {
  RunId?: {} | undefined
  DataSource?:
    | {
        GlueTable: {
          DatabaseName: {}
          TableName: {}
          CatalogId?: {} | undefined
          ConnectionName?: {} | undefined
          AdditionalOptions?: {} | undefined
        }
      }
    | undefined
  Role?: {} | undefined
  NumberOfWorkers?: {} | undefined
  Timeout?: {} | undefined
  Status?: {} | undefined
  ErrorString?: {} | undefined
  StartedOn?: {} | undefined
  LastModifiedOn?: {} | undefined
  CompletedOn?: {} | undefined
  ExecutionTime?: {} | undefined
  RecommendedRuleset?: {} | undefined
  CreatedRulesetName?: {} | undefined
}
type GetDataQualityRulesetRequest = { Name: {} }
type GetDataQualityRulesetResponse = {
  Name?: {} | undefined
  Description?: {} | undefined
  Ruleset?: {} | undefined
  TargetTable?: { TableName: {}; DatabaseName: {}; CatalogId?: {} | undefined } | undefined
  CreatedOn?: {} | undefined
  LastModifiedOn?: {} | undefined
  RecommendationRunId?: {} | undefined
}
type GetDataQualityRulesetEvaluationRunRequest = { RunId: {} }
type GetDataQualityRulesetEvaluationRunResponse = {
  RunId?: {} | undefined
  DataSource?:
    | {
        GlueTable: {
          DatabaseName: {}
          TableName: {}
          CatalogId?: {} | undefined
          ConnectionName?: {} | undefined
          AdditionalOptions?: {} | undefined
        }
      }
    | undefined
  Role?: {} | undefined
  NumberOfWorkers?: {} | undefined
  Timeout?: {} | undefined
  AdditionalRunOptions?:
    | { CloudWatchMetricsEnabled?: {} | undefined; ResultsS3Prefix?: {} | undefined }
    | undefined
  Status?: {} | undefined
  ErrorString?: {} | undefined
  StartedOn?: {} | undefined
  LastModifiedOn?: {} | undefined
  CompletedOn?: {} | undefined
  ExecutionTime?: {} | undefined
  RulesetNames?: {} | undefined
  ResultIds?: {} | undefined
  AdditionalDataSources?: {} | undefined
}
type GetDatabaseRequest = { CatalogId?: {} | undefined; Name: {} }
type GetDatabaseResponse = {
  Database?:
    | {
        Name: {}
        Description?: {} | undefined
        LocationUri?: {} | undefined
        Parameters?: {} | undefined
        CreateTime?: {} | undefined
        CreateTableDefaultPermissions?: {} | undefined
        TargetDatabase?:
          | { CatalogId?: {} | undefined; DatabaseName?: {} | undefined; Region?: {} | undefined }
          | undefined
        CatalogId?: {} | undefined
        FederatedDatabase?:
          | { Identifier?: {} | undefined; ConnectionName?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetDatabasesRequest = {
  CatalogId?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ResourceShareType?: {} | undefined
}
type GetDatabasesResponse = { DatabaseList: {}; NextToken?: {} | undefined }
type GetDataflowGraphRequest = { PythonScript?: {} | undefined }
type GetDataflowGraphResponse = { DagNodes?: {} | undefined; DagEdges?: {} | undefined }
type GetDevEndpointRequest = { EndpointName: {} }
type GetDevEndpointResponse = {
  DevEndpoint?:
    | {
        EndpointName?: {} | undefined
        RoleArn?: {} | undefined
        SecurityGroupIds?: {} | undefined
        SubnetId?: {} | undefined
        YarnEndpointAddress?: {} | undefined
        PrivateAddress?: {} | undefined
        ZeppelinRemoteSparkInterpreterPort?: {} | undefined
        PublicAddress?: {} | undefined
        Status?: {} | undefined
        WorkerType?: {} | undefined
        GlueVersion?: {} | undefined
        NumberOfWorkers?: {} | undefined
        NumberOfNodes?: {} | undefined
        AvailabilityZone?: {} | undefined
        VpcId?: {} | undefined
        ExtraPythonLibsS3Path?: {} | undefined
        ExtraJarsS3Path?: {} | undefined
        FailureReason?: {} | undefined
        LastUpdateStatus?: {} | undefined
        CreatedTimestamp?: {} | undefined
        LastModifiedTimestamp?: {} | undefined
        PublicKey?: {} | undefined
        PublicKeys?: {} | undefined
        SecurityConfiguration?: {} | undefined
        Arguments?: {} | undefined
      }
    | undefined
}
type GetDevEndpointsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type GetDevEndpointsResponse = { DevEndpoints?: {} | undefined; NextToken?: {} | undefined }
type GetJobRequest = { JobName: {} }
type GetJobResponse = {
  Job?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        LogUri?: {} | undefined
        Role?: {} | undefined
        CreatedOn?: {} | undefined
        LastModifiedOn?: {} | undefined
        ExecutionProperty?: { MaxConcurrentRuns?: {} | undefined } | undefined
        Command?:
          | {
              Name?: {} | undefined
              ScriptLocation?: {} | undefined
              PythonVersion?: {} | undefined
              Runtime?: {} | undefined
            }
          | undefined
        DefaultArguments?: {} | undefined
        NonOverridableArguments?: {} | undefined
        Connections?: { Connections?: {} | undefined } | undefined
        MaxRetries?: {} | undefined
        AllocatedCapacity?: {} | undefined
        Timeout?: {} | undefined
        MaxCapacity?: {} | undefined
        WorkerType?: {} | undefined
        NumberOfWorkers?: {} | undefined
        SecurityConfiguration?: {} | undefined
        NotificationProperty?: { NotifyDelayAfter?: {} | undefined } | undefined
        GlueVersion?: {} | undefined
        CodeGenConfigurationNodes?: {} | undefined
        ExecutionClass?: {} | undefined
        SourceControlDetails?:
          | {
              Provider?: {} | undefined
              Repository?: {} | undefined
              Owner?: {} | undefined
              Branch?: {} | undefined
              Folder?: {} | undefined
              LastCommitId?: {} | undefined
              AuthStrategy?: {} | undefined
              AuthToken?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetJobBookmarkRequest = { JobName: {}; RunId?: {} | undefined }
type GetJobBookmarkResponse = {
  JobBookmarkEntry?:
    | {
        JobName?: {} | undefined
        Version?: {} | undefined
        Run?: {} | undefined
        Attempt?: {} | undefined
        PreviousRunId?: {} | undefined
        RunId?: {} | undefined
        JobBookmark?: {} | undefined
      }
    | undefined
}
type GetJobRunRequest = { JobName: {}; RunId: {}; PredecessorsIncluded?: {} | undefined }
type GetJobRunResponse = {
  JobRun?:
    | {
        Id?: {} | undefined
        Attempt?: {} | undefined
        PreviousRunId?: {} | undefined
        TriggerName?: {} | undefined
        JobName?: {} | undefined
        StartedOn?: {} | undefined
        LastModifiedOn?: {} | undefined
        CompletedOn?: {} | undefined
        JobRunState?: {} | undefined
        Arguments?: {} | undefined
        ErrorMessage?: {} | undefined
        PredecessorRuns?: {} | undefined
        AllocatedCapacity?: {} | undefined
        ExecutionTime?: {} | undefined
        Timeout?: {} | undefined
        MaxCapacity?: {} | undefined
        WorkerType?: {} | undefined
        NumberOfWorkers?: {} | undefined
        SecurityConfiguration?: {} | undefined
        LogGroupName?: {} | undefined
        NotificationProperty?: { NotifyDelayAfter?: {} | undefined } | undefined
        GlueVersion?: {} | undefined
        DPUSeconds?: {} | undefined
        ExecutionClass?: {} | undefined
      }
    | undefined
}
type GetJobRunsRequest = { JobName: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type GetJobRunsResponse = { JobRuns?: {} | undefined; NextToken?: {} | undefined }
type GetJobsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type GetJobsResponse = { Jobs?: {} | undefined; NextToken?: {} | undefined }
type GetMLTaskRunRequest = { TransformId: {}; TaskRunId: {} }
type GetMLTaskRunResponse = {
  TransformId?: {} | undefined
  TaskRunId?: {} | undefined
  Status?: {} | undefined
  LogGroupName?: {} | undefined
  Properties?:
    | {
        TaskType?: {} | undefined
        ImportLabelsTaskRunProperties?:
          | { InputS3Path?: {} | undefined; Replace?: {} | undefined }
          | undefined
        ExportLabelsTaskRunProperties?: { OutputS3Path?: {} | undefined } | undefined
        LabelingSetGenerationTaskRunProperties?: { OutputS3Path?: {} | undefined } | undefined
        FindMatchesTaskRunProperties?:
          | { JobId?: {} | undefined; JobName?: {} | undefined; JobRunId?: {} | undefined }
          | undefined
      }
    | undefined
  ErrorString?: {} | undefined
  StartedOn?: {} | undefined
  LastModifiedOn?: {} | undefined
  CompletedOn?: {} | undefined
  ExecutionTime?: {} | undefined
}
type GetMLTaskRunsRequest = {
  TransformId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filter?:
    | {
        TaskRunType?: {} | undefined
        Status?: {} | undefined
        StartedBefore?: {} | undefined
        StartedAfter?: {} | undefined
      }
    | undefined
  Sort?: { Column: {}; SortDirection: {} } | undefined
}
type GetMLTaskRunsResponse = { TaskRuns?: {} | undefined; NextToken?: {} | undefined }
type GetMLTransformRequest = { TransformId: {} }
type GetMLTransformResponse = {
  TransformId?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  CreatedOn?: {} | undefined
  LastModifiedOn?: {} | undefined
  InputRecordTables?: {} | undefined
  Parameters?:
    | {
        TransformType: {}
        FindMatchesParameters?:
          | {
              PrimaryKeyColumnName?: {} | undefined
              PrecisionRecallTradeoff?: {} | undefined
              AccuracyCostTradeoff?: {} | undefined
              EnforceProvidedLabels?: {} | undefined
            }
          | undefined
      }
    | undefined
  EvaluationMetrics?:
    | {
        TransformType: {}
        FindMatchesMetrics?:
          | {
              AreaUnderPRCurve?: {} | undefined
              Precision?: {} | undefined
              Recall?: {} | undefined
              F1?: {} | undefined
              ConfusionMatrix?:
                | {
                    NumTruePositives?: {} | undefined
                    NumFalsePositives?: {} | undefined
                    NumTrueNegatives?: {} | undefined
                    NumFalseNegatives?: {} | undefined
                  }
                | undefined
              ColumnImportances?: {} | undefined
            }
          | undefined
      }
    | undefined
  LabelCount?: {} | undefined
  Schema?: {} | undefined
  Role?: {} | undefined
  GlueVersion?: {} | undefined
  MaxCapacity?: {} | undefined
  WorkerType?: {} | undefined
  NumberOfWorkers?: {} | undefined
  Timeout?: {} | undefined
  MaxRetries?: {} | undefined
  TransformEncryption?:
    | {
        MlUserDataEncryption?:
          | { MlUserDataEncryptionMode: {}; KmsKeyId?: {} | undefined }
          | undefined
        TaskRunSecurityConfigurationName?: {} | undefined
      }
    | undefined
}
type GetMLTransformsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filter?:
    | {
        Name?: {} | undefined
        TransformType?: {} | undefined
        Status?: {} | undefined
        GlueVersion?: {} | undefined
        CreatedBefore?: {} | undefined
        CreatedAfter?: {} | undefined
        LastModifiedBefore?: {} | undefined
        LastModifiedAfter?: {} | undefined
        Schema?: {} | undefined
      }
    | undefined
  Sort?: { Column: {}; SortDirection: {} } | undefined
}
type GetMLTransformsResponse = { Transforms: {}; NextToken?: {} | undefined }
type GetMappingRequest = {
  Source: { DatabaseName: {}; TableName: {} }
  Sinks?: {} | undefined
  Location?: { Jdbc?: {} | undefined; S3?: {} | undefined; DynamoDB?: {} | undefined } | undefined
}
type GetMappingResponse = { Mapping: {} }
type GetPartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionValues: {}
}
type GetPartitionResponse = {
  Partition?:
    | {
        Values?: {} | undefined
        DatabaseName?: {} | undefined
        TableName?: {} | undefined
        CreationTime?: {} | undefined
        LastAccessTime?: {} | undefined
        StorageDescriptor?:
          | {
              Columns?: {} | undefined
              Location?: {} | undefined
              AdditionalLocations?: {} | undefined
              InputFormat?: {} | undefined
              OutputFormat?: {} | undefined
              Compressed?: {} | undefined
              NumberOfBuckets?: {} | undefined
              SerdeInfo?:
                | {
                    Name?: {} | undefined
                    SerializationLibrary?: {} | undefined
                    Parameters?: {} | undefined
                  }
                | undefined
              BucketColumns?: {} | undefined
              SortColumns?: {} | undefined
              Parameters?: {} | undefined
              SkewedInfo?:
                | {
                    SkewedColumnNames?: {} | undefined
                    SkewedColumnValues?: {} | undefined
                    SkewedColumnValueLocationMaps?: {} | undefined
                  }
                | undefined
              StoredAsSubDirectories?: {} | undefined
              SchemaReference?:
                | {
                    SchemaId?:
                      | {
                          SchemaArn?: {} | undefined
                          SchemaName?: {} | undefined
                          RegistryName?: {} | undefined
                        }
                      | undefined
                    SchemaVersionId?: {} | undefined
                    SchemaVersionNumber?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Parameters?: {} | undefined
        LastAnalyzedTime?: {} | undefined
        CatalogId?: {} | undefined
      }
    | undefined
}
type GetPartitionIndexesRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  NextToken?: {} | undefined
}
type GetPartitionIndexesResponse = {
  PartitionIndexDescriptorList?: {} | undefined
  NextToken?: {} | undefined
}
type GetPartitionsRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  Expression?: {} | undefined
  NextToken?: {} | undefined
  Segment?: { SegmentNumber: {}; TotalSegments: {} } | undefined
  MaxResults?: {} | undefined
  ExcludeColumnSchema?: {} | undefined
  TransactionId?: {} | undefined
  QueryAsOfTime?: {} | undefined
}
type GetPartitionsResponse = { Partitions?: {} | undefined; NextToken?: {} | undefined }
type GetPlanRequest = {
  Mapping: {}
  Source: { DatabaseName: {}; TableName: {} }
  Sinks?: {} | undefined
  Location?: { Jdbc?: {} | undefined; S3?: {} | undefined; DynamoDB?: {} | undefined } | undefined
  Language?: {} | undefined
  AdditionalPlanOptionsMap?: {} | undefined
}
type GetPlanResponse = { PythonScript?: {} | undefined; ScalaCode?: {} | undefined }
type GetRegistryInput = {
  RegistryId: { RegistryName?: {} | undefined; RegistryArn?: {} | undefined }
}
type GetRegistryResponse = {
  RegistryName?: {} | undefined
  RegistryArn?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  CreatedTime?: {} | undefined
  UpdatedTime?: {} | undefined
}
type GetResourcePoliciesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type GetResourcePoliciesResponse = {
  GetResourcePoliciesResponseList?: {} | undefined
  NextToken?: {} | undefined
}
type GetResourcePolicyRequest = { ResourceArn?: {} | undefined }
type GetResourcePolicyResponse = {
  PolicyInJson?: {} | undefined
  PolicyHash?: {} | undefined
  CreateTime?: {} | undefined
  UpdateTime?: {} | undefined
}
type GetSchemaInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
}
type GetSchemaResponse = {
  RegistryName?: {} | undefined
  RegistryArn?: {} | undefined
  SchemaName?: {} | undefined
  SchemaArn?: {} | undefined
  Description?: {} | undefined
  DataFormat?: {} | undefined
  Compatibility?: {} | undefined
  SchemaCheckpoint?: {} | undefined
  LatestSchemaVersion?: {} | undefined
  NextSchemaVersion?: {} | undefined
  SchemaStatus?: {} | undefined
  CreatedTime?: {} | undefined
  UpdatedTime?: {} | undefined
}
type GetSchemaByDefinitionInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
  SchemaDefinition: {}
}
type GetSchemaByDefinitionResponse = {
  SchemaVersionId?: {} | undefined
  SchemaArn?: {} | undefined
  DataFormat?: {} | undefined
  Status?: {} | undefined
  CreatedTime?: {} | undefined
}
type GetSchemaVersionInput = {
  SchemaId?:
    | { SchemaArn?: {} | undefined; SchemaName?: {} | undefined; RegistryName?: {} | undefined }
    | undefined
  SchemaVersionId?: {} | undefined
  SchemaVersionNumber?:
    | { LatestVersion?: {} | undefined; VersionNumber?: {} | undefined }
    | undefined
}
type GetSchemaVersionResponse = {
  SchemaVersionId?: {} | undefined
  SchemaDefinition?: {} | undefined
  DataFormat?: {} | undefined
  SchemaArn?: {} | undefined
  VersionNumber?: {} | undefined
  Status?: {} | undefined
  CreatedTime?: {} | undefined
}
type GetSchemaVersionsDiffInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
  FirstSchemaVersionNumber: { LatestVersion?: {} | undefined; VersionNumber?: {} | undefined }
  SecondSchemaVersionNumber: { LatestVersion?: {} | undefined; VersionNumber?: {} | undefined }
  SchemaDiffType: {}
}
type GetSchemaVersionsDiffResponse = { Diff?: {} | undefined }
type GetSecurityConfigurationRequest = { Name: {} }
type GetSecurityConfigurationResponse = {
  SecurityConfiguration?:
    | {
        Name?: {} | undefined
        CreatedTimeStamp?: {} | undefined
        EncryptionConfiguration?:
          | {
              S3Encryption?: {} | undefined
              CloudWatchEncryption?:
                | { CloudWatchEncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
                | undefined
              JobBookmarksEncryption?:
                | { JobBookmarksEncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetSecurityConfigurationsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type GetSecurityConfigurationsResponse = {
  SecurityConfigurations?: {} | undefined
  NextToken?: {} | undefined
}
type GetSessionRequest = { Id: {}; RequestOrigin?: {} | undefined }
type GetSessionResponse = {
  Session?:
    | {
        Id?: {} | undefined
        CreatedOn?: {} | undefined
        Status?: {} | undefined
        ErrorMessage?: {} | undefined
        Description?: {} | undefined
        Role?: {} | undefined
        Command?: { Name?: {} | undefined; PythonVersion?: {} | undefined } | undefined
        DefaultArguments?: {} | undefined
        Connections?: { Connections?: {} | undefined } | undefined
        Progress?: {} | undefined
        MaxCapacity?: {} | undefined
        SecurityConfiguration?: {} | undefined
        GlueVersion?: {} | undefined
      }
    | undefined
}
type GetStatementRequest = { SessionId: {}; Id: {}; RequestOrigin?: {} | undefined }
type GetStatementResponse = {
  Statement?:
    | {
        Id?: {} | undefined
        Code?: {} | undefined
        State?: {} | undefined
        Output?:
          | {
              Data?: { TextPlain?: {} | undefined } | undefined
              ExecutionCount?: {} | undefined
              Status?: {} | undefined
              ErrorName?: {} | undefined
              ErrorValue?: {} | undefined
              Traceback?: {} | undefined
            }
          | undefined
        Progress?: {} | undefined
        StartedOn?: {} | undefined
        CompletedOn?: {} | undefined
      }
    | undefined
}
type GetTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  Name: {}
  TransactionId?: {} | undefined
  QueryAsOfTime?: {} | undefined
}
type GetTableResponse = {
  Table?:
    | {
        Name: {}
        DatabaseName?: {} | undefined
        Description?: {} | undefined
        Owner?: {} | undefined
        CreateTime?: {} | undefined
        UpdateTime?: {} | undefined
        LastAccessTime?: {} | undefined
        LastAnalyzedTime?: {} | undefined
        Retention?: {} | undefined
        StorageDescriptor?:
          | {
              Columns?: {} | undefined
              Location?: {} | undefined
              AdditionalLocations?: {} | undefined
              InputFormat?: {} | undefined
              OutputFormat?: {} | undefined
              Compressed?: {} | undefined
              NumberOfBuckets?: {} | undefined
              SerdeInfo?:
                | {
                    Name?: {} | undefined
                    SerializationLibrary?: {} | undefined
                    Parameters?: {} | undefined
                  }
                | undefined
              BucketColumns?: {} | undefined
              SortColumns?: {} | undefined
              Parameters?: {} | undefined
              SkewedInfo?:
                | {
                    SkewedColumnNames?: {} | undefined
                    SkewedColumnValues?: {} | undefined
                    SkewedColumnValueLocationMaps?: {} | undefined
                  }
                | undefined
              StoredAsSubDirectories?: {} | undefined
              SchemaReference?:
                | {
                    SchemaId?:
                      | {
                          SchemaArn?: {} | undefined
                          SchemaName?: {} | undefined
                          RegistryName?: {} | undefined
                        }
                      | undefined
                    SchemaVersionId?: {} | undefined
                    SchemaVersionNumber?: {} | undefined
                  }
                | undefined
            }
          | undefined
        PartitionKeys?: {} | undefined
        ViewOriginalText?: {} | undefined
        ViewExpandedText?: {} | undefined
        TableType?: {} | undefined
        Parameters?: {} | undefined
        CreatedBy?: {} | undefined
        IsRegisteredWithLakeFormation?: {} | undefined
        TargetTable?:
          | {
              CatalogId?: {} | undefined
              DatabaseName?: {} | undefined
              Name?: {} | undefined
              Region?: {} | undefined
            }
          | undefined
        CatalogId?: {} | undefined
        VersionId?: {} | undefined
        FederatedTable?:
          | {
              Identifier?: {} | undefined
              DatabaseIdentifier?: {} | undefined
              ConnectionName?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetTableVersionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  VersionId?: {} | undefined
}
type GetTableVersionResponse = {
  TableVersion?:
    | {
        Table?:
          | {
              Name: {}
              DatabaseName?: {} | undefined
              Description?: {} | undefined
              Owner?: {} | undefined
              CreateTime?: {} | undefined
              UpdateTime?: {} | undefined
              LastAccessTime?: {} | undefined
              LastAnalyzedTime?: {} | undefined
              Retention?: {} | undefined
              StorageDescriptor?:
                | {
                    Columns?: {} | undefined
                    Location?: {} | undefined
                    AdditionalLocations?: {} | undefined
                    InputFormat?: {} | undefined
                    OutputFormat?: {} | undefined
                    Compressed?: {} | undefined
                    NumberOfBuckets?: {} | undefined
                    SerdeInfo?:
                      | {
                          Name?: {} | undefined
                          SerializationLibrary?: {} | undefined
                          Parameters?: {} | undefined
                        }
                      | undefined
                    BucketColumns?: {} | undefined
                    SortColumns?: {} | undefined
                    Parameters?: {} | undefined
                    SkewedInfo?:
                      | {
                          SkewedColumnNames?: {} | undefined
                          SkewedColumnValues?: {} | undefined
                          SkewedColumnValueLocationMaps?: {} | undefined
                        }
                      | undefined
                    StoredAsSubDirectories?: {} | undefined
                    SchemaReference?:
                      | {
                          SchemaId?:
                            | {
                                SchemaArn?: {} | undefined
                                SchemaName?: {} | undefined
                                RegistryName?: {} | undefined
                              }
                            | undefined
                          SchemaVersionId?: {} | undefined
                          SchemaVersionNumber?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              PartitionKeys?: {} | undefined
              ViewOriginalText?: {} | undefined
              ViewExpandedText?: {} | undefined
              TableType?: {} | undefined
              Parameters?: {} | undefined
              CreatedBy?: {} | undefined
              IsRegisteredWithLakeFormation?: {} | undefined
              TargetTable?:
                | {
                    CatalogId?: {} | undefined
                    DatabaseName?: {} | undefined
                    Name?: {} | undefined
                    Region?: {} | undefined
                  }
                | undefined
              CatalogId?: {} | undefined
              VersionId?: {} | undefined
              FederatedTable?:
                | {
                    Identifier?: {} | undefined
                    DatabaseIdentifier?: {} | undefined
                    ConnectionName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        VersionId?: {} | undefined
      }
    | undefined
}
type GetTableVersionsRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetTableVersionsResponse = { TableVersions?: {} | undefined; NextToken?: {} | undefined }
type GetTablesRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  Expression?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  TransactionId?: {} | undefined
  QueryAsOfTime?: {} | undefined
}
type GetTablesResponse = { TableList?: {} | undefined; NextToken?: {} | undefined }
type GetTagsRequest = { ResourceArn: {} }
type GetTagsResponse = { Tags?: {} | undefined }
type GetTriggerRequest = { Name: {} }
type GetTriggerResponse = {
  Trigger?:
    | {
        Name?: {} | undefined
        WorkflowName?: {} | undefined
        Id?: {} | undefined
        Type?: {} | undefined
        State?: {} | undefined
        Description?: {} | undefined
        Schedule?: {} | undefined
        Actions?: {} | undefined
        Predicate?: { Logical?: {} | undefined; Conditions?: {} | undefined } | undefined
        EventBatchingCondition?: { BatchSize: {}; BatchWindow?: {} | undefined } | undefined
      }
    | undefined
}
type GetTriggersRequest = {
  NextToken?: {} | undefined
  DependentJobName?: {} | undefined
  MaxResults?: {} | undefined
}
type GetTriggersResponse = { Triggers?: {} | undefined; NextToken?: {} | undefined }
type GetUnfilteredPartitionMetadataRequest = {
  CatalogId: {}
  DatabaseName: {}
  TableName: {}
  PartitionValues: {}
  AuditContext?:
    | {
        AdditionalAuditContext?: {} | undefined
        RequestedColumns?: {} | undefined
        AllColumnsRequested?: {} | undefined
      }
    | undefined
  SupportedPermissionTypes: {}
}
type GetUnfilteredPartitionMetadataResponse = {
  Partition?:
    | {
        Values?: {} | undefined
        DatabaseName?: {} | undefined
        TableName?: {} | undefined
        CreationTime?: {} | undefined
        LastAccessTime?: {} | undefined
        StorageDescriptor?:
          | {
              Columns?: {} | undefined
              Location?: {} | undefined
              AdditionalLocations?: {} | undefined
              InputFormat?: {} | undefined
              OutputFormat?: {} | undefined
              Compressed?: {} | undefined
              NumberOfBuckets?: {} | undefined
              SerdeInfo?:
                | {
                    Name?: {} | undefined
                    SerializationLibrary?: {} | undefined
                    Parameters?: {} | undefined
                  }
                | undefined
              BucketColumns?: {} | undefined
              SortColumns?: {} | undefined
              Parameters?: {} | undefined
              SkewedInfo?:
                | {
                    SkewedColumnNames?: {} | undefined
                    SkewedColumnValues?: {} | undefined
                    SkewedColumnValueLocationMaps?: {} | undefined
                  }
                | undefined
              StoredAsSubDirectories?: {} | undefined
              SchemaReference?:
                | {
                    SchemaId?:
                      | {
                          SchemaArn?: {} | undefined
                          SchemaName?: {} | undefined
                          RegistryName?: {} | undefined
                        }
                      | undefined
                    SchemaVersionId?: {} | undefined
                    SchemaVersionNumber?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Parameters?: {} | undefined
        LastAnalyzedTime?: {} | undefined
        CatalogId?: {} | undefined
      }
    | undefined
  AuthorizedColumns?: {} | undefined
  IsRegisteredWithLakeFormation?: {} | undefined
}
type GetUnfilteredPartitionsMetadataRequest = {
  CatalogId: {}
  DatabaseName: {}
  TableName: {}
  Expression?: {} | undefined
  AuditContext?:
    | {
        AdditionalAuditContext?: {} | undefined
        RequestedColumns?: {} | undefined
        AllColumnsRequested?: {} | undefined
      }
    | undefined
  SupportedPermissionTypes: {}
  NextToken?: {} | undefined
  Segment?: { SegmentNumber: {}; TotalSegments: {} } | undefined
  MaxResults?: {} | undefined
}
type GetUnfilteredPartitionsMetadataResponse = {
  UnfilteredPartitions?: {} | undefined
  NextToken?: {} | undefined
}
type GetUnfilteredTableMetadataRequest = {
  CatalogId: {}
  DatabaseName: {}
  Name: {}
  AuditContext?:
    | {
        AdditionalAuditContext?: {} | undefined
        RequestedColumns?: {} | undefined
        AllColumnsRequested?: {} | undefined
      }
    | undefined
  SupportedPermissionTypes: {}
}
type GetUnfilteredTableMetadataResponse = {
  Table?:
    | {
        Name: {}
        DatabaseName?: {} | undefined
        Description?: {} | undefined
        Owner?: {} | undefined
        CreateTime?: {} | undefined
        UpdateTime?: {} | undefined
        LastAccessTime?: {} | undefined
        LastAnalyzedTime?: {} | undefined
        Retention?: {} | undefined
        StorageDescriptor?:
          | {
              Columns?: {} | undefined
              Location?: {} | undefined
              AdditionalLocations?: {} | undefined
              InputFormat?: {} | undefined
              OutputFormat?: {} | undefined
              Compressed?: {} | undefined
              NumberOfBuckets?: {} | undefined
              SerdeInfo?:
                | {
                    Name?: {} | undefined
                    SerializationLibrary?: {} | undefined
                    Parameters?: {} | undefined
                  }
                | undefined
              BucketColumns?: {} | undefined
              SortColumns?: {} | undefined
              Parameters?: {} | undefined
              SkewedInfo?:
                | {
                    SkewedColumnNames?: {} | undefined
                    SkewedColumnValues?: {} | undefined
                    SkewedColumnValueLocationMaps?: {} | undefined
                  }
                | undefined
              StoredAsSubDirectories?: {} | undefined
              SchemaReference?:
                | {
                    SchemaId?:
                      | {
                          SchemaArn?: {} | undefined
                          SchemaName?: {} | undefined
                          RegistryName?: {} | undefined
                        }
                      | undefined
                    SchemaVersionId?: {} | undefined
                    SchemaVersionNumber?: {} | undefined
                  }
                | undefined
            }
          | undefined
        PartitionKeys?: {} | undefined
        ViewOriginalText?: {} | undefined
        ViewExpandedText?: {} | undefined
        TableType?: {} | undefined
        Parameters?: {} | undefined
        CreatedBy?: {} | undefined
        IsRegisteredWithLakeFormation?: {} | undefined
        TargetTable?:
          | {
              CatalogId?: {} | undefined
              DatabaseName?: {} | undefined
              Name?: {} | undefined
              Region?: {} | undefined
            }
          | undefined
        CatalogId?: {} | undefined
        VersionId?: {} | undefined
        FederatedTable?:
          | {
              Identifier?: {} | undefined
              DatabaseIdentifier?: {} | undefined
              ConnectionName?: {} | undefined
            }
          | undefined
      }
    | undefined
  AuthorizedColumns?: {} | undefined
  IsRegisteredWithLakeFormation?: {} | undefined
  CellFilters?: {} | undefined
}
type GetUserDefinedFunctionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  FunctionName: {}
}
type GetUserDefinedFunctionResponse = {
  UserDefinedFunction?:
    | {
        FunctionName?: {} | undefined
        DatabaseName?: {} | undefined
        ClassName?: {} | undefined
        OwnerName?: {} | undefined
        OwnerType?: {} | undefined
        CreateTime?: {} | undefined
        ResourceUris?: {} | undefined
        CatalogId?: {} | undefined
      }
    | undefined
}
type GetUserDefinedFunctionsRequest = {
  CatalogId?: {} | undefined
  DatabaseName?: {} | undefined
  Pattern: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetUserDefinedFunctionsResponse = {
  UserDefinedFunctions?: {} | undefined
  NextToken?: {} | undefined
}
type GetWorkflowRequest = { Name: {}; IncludeGraph?: {} | undefined }
type GetWorkflowResponse = {
  Workflow?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        DefaultRunProperties?: {} | undefined
        CreatedOn?: {} | undefined
        LastModifiedOn?: {} | undefined
        LastRun?:
          | {
              Name?: {} | undefined
              WorkflowRunId?: {} | undefined
              PreviousRunId?: {} | undefined
              WorkflowRunProperties?: {} | undefined
              StartedOn?: {} | undefined
              CompletedOn?: {} | undefined
              Status?: {} | undefined
              ErrorMessage?: {} | undefined
              Statistics?:
                | {
                    TotalActions?: {} | undefined
                    TimeoutActions?: {} | undefined
                    FailedActions?: {} | undefined
                    StoppedActions?: {} | undefined
                    SucceededActions?: {} | undefined
                    RunningActions?: {} | undefined
                    ErroredActions?: {} | undefined
                    WaitingActions?: {} | undefined
                  }
                | undefined
              Graph?: { Nodes?: {} | undefined; Edges?: {} | undefined } | undefined
              StartingEventBatchCondition?:
                | { BatchSize?: {} | undefined; BatchWindow?: {} | undefined }
                | undefined
            }
          | undefined
        Graph?: { Nodes?: {} | undefined; Edges?: {} | undefined } | undefined
        MaxConcurrentRuns?: {} | undefined
        BlueprintDetails?: { BlueprintName?: {} | undefined; RunId?: {} | undefined } | undefined
      }
    | undefined
}
type GetWorkflowRunRequest = { Name: {}; RunId: {}; IncludeGraph?: {} | undefined }
type GetWorkflowRunResponse = {
  Run?:
    | {
        Name?: {} | undefined
        WorkflowRunId?: {} | undefined
        PreviousRunId?: {} | undefined
        WorkflowRunProperties?: {} | undefined
        StartedOn?: {} | undefined
        CompletedOn?: {} | undefined
        Status?: {} | undefined
        ErrorMessage?: {} | undefined
        Statistics?:
          | {
              TotalActions?: {} | undefined
              TimeoutActions?: {} | undefined
              FailedActions?: {} | undefined
              StoppedActions?: {} | undefined
              SucceededActions?: {} | undefined
              RunningActions?: {} | undefined
              ErroredActions?: {} | undefined
              WaitingActions?: {} | undefined
            }
          | undefined
        Graph?: { Nodes?: {} | undefined; Edges?: {} | undefined } | undefined
        StartingEventBatchCondition?:
          | { BatchSize?: {} | undefined; BatchWindow?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetWorkflowRunPropertiesRequest = { Name: {}; RunId: {} }
type GetWorkflowRunPropertiesResponse = { RunProperties?: {} | undefined }
type GetWorkflowRunsRequest = {
  Name: {}
  IncludeGraph?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetWorkflowRunsResponse = { Runs?: {} | undefined; NextToken?: {} | undefined }
type ImportCatalogToGlueRequest = { CatalogId?: {} | undefined }
type ImportCatalogToGlueResponse = { [x: string]: unknown }
type ListBlueprintsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Tags?: {} | undefined
}
type ListBlueprintsResponse = { Blueprints?: {} | undefined; NextToken?: {} | undefined }
type ListCrawlersRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Tags?: {} | undefined
}
type ListCrawlersResponse = { CrawlerNames?: {} | undefined; NextToken?: {} | undefined }
type ListCrawlsRequest = {
  CrawlerName: {}
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  NextToken?: {} | undefined
}
type ListCrawlsResponse = { Crawls?: {} | undefined; NextToken?: {} | undefined }
type ListCustomEntityTypesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Tags?: {} | undefined
}
type ListCustomEntityTypesResponse = {
  CustomEntityTypes?: {} | undefined
  NextToken?: {} | undefined
}
type ListDataQualityResultsRequest = {
  Filter?:
    | {
        DataSource?:
          | {
              GlueTable: {
                DatabaseName: {}
                TableName: {}
                CatalogId?: {} | undefined
                ConnectionName?: {} | undefined
                AdditionalOptions?: {} | undefined
              }
            }
          | undefined
        JobName?: {} | undefined
        JobRunId?: {} | undefined
        StartedAfter?: {} | undefined
        StartedBefore?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDataQualityResultsResponse = { Results: {}; NextToken?: {} | undefined }
type ListDataQualityRuleRecommendationRunsRequest = {
  Filter?:
    | {
        DataSource: {
          GlueTable: {
            DatabaseName: {}
            TableName: {}
            CatalogId?: {} | undefined
            ConnectionName?: {} | undefined
            AdditionalOptions?: {} | undefined
          }
        }
        StartedBefore?: {} | undefined
        StartedAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDataQualityRuleRecommendationRunsResponse = {
  Runs?: {} | undefined
  NextToken?: {} | undefined
}
type ListDataQualityRulesetEvaluationRunsRequest = {
  Filter?:
    | {
        DataSource: {
          GlueTable: {
            DatabaseName: {}
            TableName: {}
            CatalogId?: {} | undefined
            ConnectionName?: {} | undefined
            AdditionalOptions?: {} | undefined
          }
        }
        StartedBefore?: {} | undefined
        StartedAfter?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDataQualityRulesetEvaluationRunsResponse = {
  Runs?: {} | undefined
  NextToken?: {} | undefined
}
type ListDataQualityRulesetsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filter?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        CreatedBefore?: {} | undefined
        CreatedAfter?: {} | undefined
        LastModifiedBefore?: {} | undefined
        LastModifiedAfter?: {} | undefined
        TargetTable?: { TableName: {}; DatabaseName: {}; CatalogId?: {} | undefined } | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type ListDataQualityRulesetsResponse = { Rulesets?: {} | undefined; NextToken?: {} | undefined }
type ListDevEndpointsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Tags?: {} | undefined
}
type ListDevEndpointsResponse = { DevEndpointNames?: {} | undefined; NextToken?: {} | undefined }
type ListJobsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Tags?: {} | undefined
}
type ListJobsResponse = { JobNames?: {} | undefined; NextToken?: {} | undefined }
type ListMLTransformsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filter?:
    | {
        Name?: {} | undefined
        TransformType?: {} | undefined
        Status?: {} | undefined
        GlueVersion?: {} | undefined
        CreatedBefore?: {} | undefined
        CreatedAfter?: {} | undefined
        LastModifiedBefore?: {} | undefined
        LastModifiedAfter?: {} | undefined
        Schema?: {} | undefined
      }
    | undefined
  Sort?: { Column: {}; SortDirection: {} } | undefined
  Tags?: {} | undefined
}
type ListMLTransformsResponse = { TransformIds: {}; NextToken?: {} | undefined }
type ListRegistriesInput = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListRegistriesResponse = { Registries?: {} | undefined; NextToken?: {} | undefined }
type ListSchemaVersionsInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListSchemaVersionsResponse = { Schemas?: {} | undefined; NextToken?: {} | undefined }
type ListSchemasInput = {
  RegistryId?: { RegistryName?: {} | undefined; RegistryArn?: {} | undefined } | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListSchemasResponse = { Schemas?: {} | undefined; NextToken?: {} | undefined }
type ListSessionsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Tags?: {} | undefined
  RequestOrigin?: {} | undefined
}
type ListSessionsResponse = {
  Ids?: {} | undefined
  Sessions?: {} | undefined
  NextToken?: {} | undefined
}
type ListStatementsRequest = {
  SessionId: {}
  RequestOrigin?: {} | undefined
  NextToken?: {} | undefined
}
type ListStatementsResponse = { Statements?: {} | undefined; NextToken?: {} | undefined }
type ListTriggersRequest = {
  NextToken?: {} | undefined
  DependentJobName?: {} | undefined
  MaxResults?: {} | undefined
  Tags?: {} | undefined
}
type ListTriggersResponse = { TriggerNames?: {} | undefined; NextToken?: {} | undefined }
type ListWorkflowsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListWorkflowsResponse = { Workflows?: {} | undefined; NextToken?: {} | undefined }
type PutDataCatalogEncryptionSettingsRequest = {
  CatalogId?: {} | undefined
  DataCatalogEncryptionSettings: {
    EncryptionAtRest?: { CatalogEncryptionMode: {}; SseAwsKmsKeyId?: {} | undefined } | undefined
    ConnectionPasswordEncryption?:
      | { ReturnConnectionPasswordEncrypted: {}; AwsKmsKeyId?: {} | undefined }
      | undefined
  }
}
type PutDataCatalogEncryptionSettingsResponse = { [x: string]: unknown }
type PutResourcePolicyRequest = {
  PolicyInJson: {}
  ResourceArn?: {} | undefined
  PolicyHashCondition?: {} | undefined
  PolicyExistsCondition?: {} | undefined
  EnableHybrid?: {} | undefined
}
type PutResourcePolicyResponse = { PolicyHash?: {} | undefined }
type PutSchemaVersionMetadataInput = {
  SchemaId?:
    | { SchemaArn?: {} | undefined; SchemaName?: {} | undefined; RegistryName?: {} | undefined }
    | undefined
  SchemaVersionNumber?:
    | { LatestVersion?: {} | undefined; VersionNumber?: {} | undefined }
    | undefined
  SchemaVersionId?: {} | undefined
  MetadataKeyValue: { MetadataKey?: {} | undefined; MetadataValue?: {} | undefined }
}
type PutSchemaVersionMetadataResponse = {
  SchemaArn?: {} | undefined
  SchemaName?: {} | undefined
  RegistryName?: {} | undefined
  LatestVersion?: {} | undefined
  VersionNumber?: {} | undefined
  SchemaVersionId?: {} | undefined
  MetadataKey?: {} | undefined
  MetadataValue?: {} | undefined
}
type PutWorkflowRunPropertiesRequest = { Name: {}; RunId: {}; RunProperties: {} }
type PutWorkflowRunPropertiesResponse = { [x: string]: unknown }
type QuerySchemaVersionMetadataInput = {
  SchemaId?:
    | { SchemaArn?: {} | undefined; SchemaName?: {} | undefined; RegistryName?: {} | undefined }
    | undefined
  SchemaVersionNumber?:
    | { LatestVersion?: {} | undefined; VersionNumber?: {} | undefined }
    | undefined
  SchemaVersionId?: {} | undefined
  MetadataList?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type QuerySchemaVersionMetadataResponse = {
  MetadataInfoMap?: {} | undefined
  SchemaVersionId?: {} | undefined
  NextToken?: {} | undefined
}
type RegisterSchemaVersionInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
  SchemaDefinition: {}
}
type RegisterSchemaVersionResponse = {
  SchemaVersionId?: {} | undefined
  VersionNumber?: {} | undefined
  Status?: {} | undefined
}
type RemoveSchemaVersionMetadataInput = {
  SchemaId?:
    | { SchemaArn?: {} | undefined; SchemaName?: {} | undefined; RegistryName?: {} | undefined }
    | undefined
  SchemaVersionNumber?:
    | { LatestVersion?: {} | undefined; VersionNumber?: {} | undefined }
    | undefined
  SchemaVersionId?: {} | undefined
  MetadataKeyValue: { MetadataKey?: {} | undefined; MetadataValue?: {} | undefined }
}
type RemoveSchemaVersionMetadataResponse = {
  SchemaArn?: {} | undefined
  SchemaName?: {} | undefined
  RegistryName?: {} | undefined
  LatestVersion?: {} | undefined
  VersionNumber?: {} | undefined
  SchemaVersionId?: {} | undefined
  MetadataKey?: {} | undefined
  MetadataValue?: {} | undefined
}
type ResetJobBookmarkRequest = { JobName: {}; RunId?: {} | undefined }
type ResetJobBookmarkResponse = {
  JobBookmarkEntry?:
    | {
        JobName?: {} | undefined
        Version?: {} | undefined
        Run?: {} | undefined
        Attempt?: {} | undefined
        PreviousRunId?: {} | undefined
        RunId?: {} | undefined
        JobBookmark?: {} | undefined
      }
    | undefined
}
type ResumeWorkflowRunRequest = { Name: {}; RunId: {}; NodeIds: {} }
type ResumeWorkflowRunResponse = { RunId?: {} | undefined; NodeIds?: {} | undefined }
type RunStatementRequest = { SessionId: {}; Code: {}; RequestOrigin?: {} | undefined }
type RunStatementResponse = { Id?: {} | undefined }
type SearchTablesRequest = {
  CatalogId?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
  SearchText?: {} | undefined
  SortCriteria?: {} | undefined
  MaxResults?: {} | undefined
  ResourceShareType?: {} | undefined
}
type SearchTablesResponse = { NextToken?: {} | undefined; TableList?: {} | undefined }
type StartBlueprintRunRequest = { BlueprintName: {}; Parameters?: {} | undefined; RoleArn: {} }
type StartBlueprintRunResponse = { RunId?: {} | undefined }
type StartCrawlerRequest = { Name: {} }
type StartCrawlerResponse = { [x: string]: unknown }
type StartCrawlerScheduleRequest = { CrawlerName: {} }
type StartCrawlerScheduleResponse = { [x: string]: unknown }
type StartDataQualityRuleRecommendationRunRequest = {
  DataSource: {
    GlueTable: {
      DatabaseName: {}
      TableName: {}
      CatalogId?: {} | undefined
      ConnectionName?: {} | undefined
      AdditionalOptions?: {} | undefined
    }
  }
  Role: {}
  NumberOfWorkers?: {} | undefined
  Timeout?: {} | undefined
  CreatedRulesetName?: {} | undefined
  ClientToken?: {} | undefined
}
type StartDataQualityRuleRecommendationRunResponse = { RunId?: {} | undefined }
type StartDataQualityRulesetEvaluationRunRequest = {
  DataSource: {
    GlueTable: {
      DatabaseName: {}
      TableName: {}
      CatalogId?: {} | undefined
      ConnectionName?: {} | undefined
      AdditionalOptions?: {} | undefined
    }
  }
  Role: {}
  NumberOfWorkers?: {} | undefined
  Timeout?: {} | undefined
  ClientToken?: {} | undefined
  AdditionalRunOptions?:
    | { CloudWatchMetricsEnabled?: {} | undefined; ResultsS3Prefix?: {} | undefined }
    | undefined
  RulesetNames: {}
  AdditionalDataSources?: {} | undefined
}
type StartDataQualityRulesetEvaluationRunResponse = { RunId?: {} | undefined }
type StartExportLabelsTaskRunRequest = { TransformId: {}; OutputS3Path: {} }
type StartExportLabelsTaskRunResponse = { TaskRunId?: {} | undefined }
type StartImportLabelsTaskRunRequest = {
  TransformId: {}
  InputS3Path: {}
  ReplaceAllLabels?: {} | undefined
}
type StartImportLabelsTaskRunResponse = { TaskRunId?: {} | undefined }
type StartJobRunRequest = {
  JobName: {}
  JobRunId?: {} | undefined
  Arguments?: {} | undefined
  AllocatedCapacity?: {} | undefined
  Timeout?: {} | undefined
  MaxCapacity?: {} | undefined
  SecurityConfiguration?: {} | undefined
  NotificationProperty?: { NotifyDelayAfter?: {} | undefined } | undefined
  WorkerType?: {} | undefined
  NumberOfWorkers?: {} | undefined
  ExecutionClass?: {} | undefined
}
type StartJobRunResponse = { JobRunId?: {} | undefined }
type StartMLEvaluationTaskRunRequest = { TransformId: {} }
type StartMLEvaluationTaskRunResponse = { TaskRunId?: {} | undefined }
type StartMLLabelingSetGenerationTaskRunRequest = { TransformId: {}; OutputS3Path: {} }
type StartMLLabelingSetGenerationTaskRunResponse = { TaskRunId?: {} | undefined }
type StartTriggerRequest = { Name: {} }
type StartTriggerResponse = { Name?: {} | undefined }
type StartWorkflowRunRequest = { Name: {}; RunProperties?: {} | undefined }
type StartWorkflowRunResponse = { RunId?: {} | undefined }
type StopCrawlerRequest = { Name: {} }
type StopCrawlerResponse = { [x: string]: unknown }
type StopCrawlerScheduleRequest = { CrawlerName: {} }
type StopCrawlerScheduleResponse = { [x: string]: unknown }
type StopSessionRequest = { Id: {}; RequestOrigin?: {} | undefined }
type StopSessionResponse = { Id?: {} | undefined }
type StopTriggerRequest = { Name: {} }
type StopTriggerResponse = { Name?: {} | undefined }
type StopWorkflowRunRequest = { Name: {}; RunId: {} }
type StopWorkflowRunResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceArn: {}; TagsToAdd: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagsToRemove: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateBlueprintRequest = { Name: {}; Description?: {} | undefined; BlueprintLocation: {} }
type UpdateBlueprintResponse = { Name?: {} | undefined }
type UpdateClassifierRequest = {
  GrokClassifier?:
    | {
        Name: {}
        Classification?: {} | undefined
        GrokPattern?: {} | undefined
        CustomPatterns?: {} | undefined
      }
    | undefined
  XMLClassifier?: { Name: {}; Classification?: {} | undefined; RowTag?: {} | undefined } | undefined
  JsonClassifier?: { Name: {}; JsonPath?: {} | undefined } | undefined
  CsvClassifier?:
    | {
        Name: {}
        Delimiter?: {} | undefined
        QuoteSymbol?: {} | undefined
        ContainsHeader?: {} | undefined
        Header?: {} | undefined
        DisableValueTrimming?: {} | undefined
        AllowSingleColumn?: {} | undefined
        CustomDatatypeConfigured?: {} | undefined
        CustomDatatypes?: {} | undefined
      }
    | undefined
}
type UpdateClassifierResponse = { [x: string]: unknown }
type UpdateColumnStatisticsForPartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionValues: {}
  ColumnStatisticsList: {}
}
type UpdateColumnStatisticsForPartitionResponse = { Errors?: {} | undefined }
type UpdateColumnStatisticsForTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  ColumnStatisticsList: {}
}
type UpdateColumnStatisticsForTableResponse = { Errors?: {} | undefined }
type UpdateConnectionRequest = {
  CatalogId?: {} | undefined
  Name: {}
  ConnectionInput: {
    Name: {}
    Description?: {} | undefined
    ConnectionType: {}
    MatchCriteria?: {} | undefined
    ConnectionProperties: {}
    PhysicalConnectionRequirements?:
      | {
          SubnetId?: {} | undefined
          SecurityGroupIdList?: {} | undefined
          AvailabilityZone?: {} | undefined
        }
      | undefined
  }
}
type UpdateConnectionResponse = { [x: string]: unknown }
type UpdateCrawlerRequest = {
  Name: {}
  Role?: {} | undefined
  DatabaseName?: {} | undefined
  Description?: {} | undefined
  Targets?:
    | {
        S3Targets?: {} | undefined
        JdbcTargets?: {} | undefined
        MongoDBTargets?: {} | undefined
        DynamoDBTargets?: {} | undefined
        CatalogTargets?: {} | undefined
        DeltaTargets?: {} | undefined
        IcebergTargets?: {} | undefined
        HudiTargets?: {} | undefined
      }
    | undefined
  Schedule?: {} | undefined
  Classifiers?: {} | undefined
  TablePrefix?: {} | undefined
  SchemaChangePolicy?:
    | { UpdateBehavior?: {} | undefined; DeleteBehavior?: {} | undefined }
    | undefined
  RecrawlPolicy?: { RecrawlBehavior?: {} | undefined } | undefined
  LineageConfiguration?: { CrawlerLineageSettings?: {} | undefined } | undefined
  LakeFormationConfiguration?:
    | { UseLakeFormationCredentials?: {} | undefined; AccountId?: {} | undefined }
    | undefined
  Configuration?: {} | undefined
  CrawlerSecurityConfiguration?: {} | undefined
}
type UpdateCrawlerResponse = { [x: string]: unknown }
type UpdateCrawlerScheduleRequest = { CrawlerName: {}; Schedule?: {} | undefined }
type UpdateCrawlerScheduleResponse = { [x: string]: unknown }
type UpdateDataQualityRulesetRequest = {
  Name: {}
  Description?: {} | undefined
  Ruleset?: {} | undefined
}
type UpdateDataQualityRulesetResponse = {
  Name?: {} | undefined
  Description?: {} | undefined
  Ruleset?: {} | undefined
}
type UpdateDatabaseRequest = {
  CatalogId?: {} | undefined
  Name: {}
  DatabaseInput: {
    Name: {}
    Description?: {} | undefined
    LocationUri?: {} | undefined
    Parameters?: {} | undefined
    CreateTableDefaultPermissions?: {} | undefined
    TargetDatabase?:
      | { CatalogId?: {} | undefined; DatabaseName?: {} | undefined; Region?: {} | undefined }
      | undefined
    FederatedDatabase?: { Identifier?: {} | undefined; ConnectionName?: {} | undefined } | undefined
  }
}
type UpdateDatabaseResponse = { [x: string]: unknown }
type UpdateDevEndpointRequest = {
  EndpointName: {}
  PublicKey?: {} | undefined
  AddPublicKeys?: {} | undefined
  DeletePublicKeys?: {} | undefined
  CustomLibraries?:
    | { ExtraPythonLibsS3Path?: {} | undefined; ExtraJarsS3Path?: {} | undefined }
    | undefined
  UpdateEtlLibraries?: {} | undefined
  DeleteArguments?: {} | undefined
  AddArguments?: {} | undefined
}
type UpdateDevEndpointResponse = { [x: string]: unknown }
type UpdateJobRequest = {
  JobName: {}
  JobUpdate: {
    Description?: {} | undefined
    LogUri?: {} | undefined
    Role?: {} | undefined
    ExecutionProperty?: { MaxConcurrentRuns?: {} | undefined } | undefined
    Command?:
      | {
          Name?: {} | undefined
          ScriptLocation?: {} | undefined
          PythonVersion?: {} | undefined
          Runtime?: {} | undefined
        }
      | undefined
    DefaultArguments?: {} | undefined
    NonOverridableArguments?: {} | undefined
    Connections?: { Connections?: {} | undefined } | undefined
    MaxRetries?: {} | undefined
    AllocatedCapacity?: {} | undefined
    Timeout?: {} | undefined
    MaxCapacity?: {} | undefined
    WorkerType?: {} | undefined
    NumberOfWorkers?: {} | undefined
    SecurityConfiguration?: {} | undefined
    NotificationProperty?: { NotifyDelayAfter?: {} | undefined } | undefined
    GlueVersion?: {} | undefined
    CodeGenConfigurationNodes?: {} | undefined
    ExecutionClass?: {} | undefined
    SourceControlDetails?:
      | {
          Provider?: {} | undefined
          Repository?: {} | undefined
          Owner?: {} | undefined
          Branch?: {} | undefined
          Folder?: {} | undefined
          LastCommitId?: {} | undefined
          AuthStrategy?: {} | undefined
          AuthToken?: {} | undefined
        }
      | undefined
  }
}
type UpdateJobResponse = { JobName?: {} | undefined }
type UpdateJobFromSourceControlRequest = {
  JobName?: {} | undefined
  Provider?: {} | undefined
  RepositoryName?: {} | undefined
  RepositoryOwner?: {} | undefined
  BranchName?: {} | undefined
  Folder?: {} | undefined
  CommitId?: {} | undefined
  AuthStrategy?: {} | undefined
  AuthToken?: {} | undefined
}
type UpdateJobFromSourceControlResponse = { JobName?: {} | undefined }
type UpdateMLTransformRequest = {
  TransformId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  Parameters?:
    | {
        TransformType: {}
        FindMatchesParameters?:
          | {
              PrimaryKeyColumnName?: {} | undefined
              PrecisionRecallTradeoff?: {} | undefined
              AccuracyCostTradeoff?: {} | undefined
              EnforceProvidedLabels?: {} | undefined
            }
          | undefined
      }
    | undefined
  Role?: {} | undefined
  GlueVersion?: {} | undefined
  MaxCapacity?: {} | undefined
  WorkerType?: {} | undefined
  NumberOfWorkers?: {} | undefined
  Timeout?: {} | undefined
  MaxRetries?: {} | undefined
}
type UpdateMLTransformResponse = { TransformId?: {} | undefined }
type UpdatePartitionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableName: {}
  PartitionValueList: {}
  PartitionInput: {
    Values?: {} | undefined
    LastAccessTime?: {} | undefined
    StorageDescriptor?:
      | {
          Columns?: {} | undefined
          Location?: {} | undefined
          AdditionalLocations?: {} | undefined
          InputFormat?: {} | undefined
          OutputFormat?: {} | undefined
          Compressed?: {} | undefined
          NumberOfBuckets?: {} | undefined
          SerdeInfo?:
            | {
                Name?: {} | undefined
                SerializationLibrary?: {} | undefined
                Parameters?: {} | undefined
              }
            | undefined
          BucketColumns?: {} | undefined
          SortColumns?: {} | undefined
          Parameters?: {} | undefined
          SkewedInfo?:
            | {
                SkewedColumnNames?: {} | undefined
                SkewedColumnValues?: {} | undefined
                SkewedColumnValueLocationMaps?: {} | undefined
              }
            | undefined
          StoredAsSubDirectories?: {} | undefined
          SchemaReference?:
            | {
                SchemaId?:
                  | {
                      SchemaArn?: {} | undefined
                      SchemaName?: {} | undefined
                      RegistryName?: {} | undefined
                    }
                  | undefined
                SchemaVersionId?: {} | undefined
                SchemaVersionNumber?: {} | undefined
              }
            | undefined
        }
      | undefined
    Parameters?: {} | undefined
    LastAnalyzedTime?: {} | undefined
  }
}
type UpdatePartitionResponse = { [x: string]: unknown }
type UpdateRegistryInput = {
  RegistryId: { RegistryName?: {} | undefined; RegistryArn?: {} | undefined }
  Description: {}
}
type UpdateRegistryResponse = { RegistryName?: {} | undefined; RegistryArn?: {} | undefined }
type UpdateSchemaInput = {
  SchemaId: {
    SchemaArn?: {} | undefined
    SchemaName?: {} | undefined
    RegistryName?: {} | undefined
  }
  SchemaVersionNumber?:
    | { LatestVersion?: {} | undefined; VersionNumber?: {} | undefined }
    | undefined
  Compatibility?: {} | undefined
  Description?: {} | undefined
}
type UpdateSchemaResponse = {
  SchemaArn?: {} | undefined
  SchemaName?: {} | undefined
  RegistryName?: {} | undefined
}
type UpdateSourceControlFromJobRequest = {
  JobName?: {} | undefined
  Provider?: {} | undefined
  RepositoryName?: {} | undefined
  RepositoryOwner?: {} | undefined
  BranchName?: {} | undefined
  Folder?: {} | undefined
  CommitId?: {} | undefined
  AuthStrategy?: {} | undefined
  AuthToken?: {} | undefined
}
type UpdateSourceControlFromJobResponse = { JobName?: {} | undefined }
type UpdateTableRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  TableInput: {
    Name: {}
    Description?: {} | undefined
    Owner?: {} | undefined
    LastAccessTime?: {} | undefined
    LastAnalyzedTime?: {} | undefined
    Retention?: {} | undefined
    StorageDescriptor?:
      | {
          Columns?: {} | undefined
          Location?: {} | undefined
          AdditionalLocations?: {} | undefined
          InputFormat?: {} | undefined
          OutputFormat?: {} | undefined
          Compressed?: {} | undefined
          NumberOfBuckets?: {} | undefined
          SerdeInfo?:
            | {
                Name?: {} | undefined
                SerializationLibrary?: {} | undefined
                Parameters?: {} | undefined
              }
            | undefined
          BucketColumns?: {} | undefined
          SortColumns?: {} | undefined
          Parameters?: {} | undefined
          SkewedInfo?:
            | {
                SkewedColumnNames?: {} | undefined
                SkewedColumnValues?: {} | undefined
                SkewedColumnValueLocationMaps?: {} | undefined
              }
            | undefined
          StoredAsSubDirectories?: {} | undefined
          SchemaReference?:
            | {
                SchemaId?:
                  | {
                      SchemaArn?: {} | undefined
                      SchemaName?: {} | undefined
                      RegistryName?: {} | undefined
                    }
                  | undefined
                SchemaVersionId?: {} | undefined
                SchemaVersionNumber?: {} | undefined
              }
            | undefined
        }
      | undefined
    PartitionKeys?: {} | undefined
    ViewOriginalText?: {} | undefined
    ViewExpandedText?: {} | undefined
    TableType?: {} | undefined
    Parameters?: {} | undefined
    TargetTable?:
      | {
          CatalogId?: {} | undefined
          DatabaseName?: {} | undefined
          Name?: {} | undefined
          Region?: {} | undefined
        }
      | undefined
  }
  SkipArchive?: {} | undefined
  TransactionId?: {} | undefined
  VersionId?: {} | undefined
}
type UpdateTableResponse = { [x: string]: unknown }
type UpdateTriggerRequest = {
  Name: {}
  TriggerUpdate: {
    Name?: {} | undefined
    Description?: {} | undefined
    Schedule?: {} | undefined
    Actions?: {} | undefined
    Predicate?: { Logical?: {} | undefined; Conditions?: {} | undefined } | undefined
    EventBatchingCondition?: { BatchSize: {}; BatchWindow?: {} | undefined } | undefined
  }
}
type UpdateTriggerResponse = {
  Trigger?:
    | {
        Name?: {} | undefined
        WorkflowName?: {} | undefined
        Id?: {} | undefined
        Type?: {} | undefined
        State?: {} | undefined
        Description?: {} | undefined
        Schedule?: {} | undefined
        Actions?: {} | undefined
        Predicate?: { Logical?: {} | undefined; Conditions?: {} | undefined } | undefined
        EventBatchingCondition?: { BatchSize: {}; BatchWindow?: {} | undefined } | undefined
      }
    | undefined
}
type UpdateUserDefinedFunctionRequest = {
  CatalogId?: {} | undefined
  DatabaseName: {}
  FunctionName: {}
  FunctionInput: {
    FunctionName?: {} | undefined
    ClassName?: {} | undefined
    OwnerName?: {} | undefined
    OwnerType?: {} | undefined
    ResourceUris?: {} | undefined
  }
}
type UpdateUserDefinedFunctionResponse = { [x: string]: unknown }
type UpdateWorkflowRequest = {
  Name: {}
  Description?: {} | undefined
  DefaultRunProperties?: {} | undefined
  MaxConcurrentRuns?: {} | undefined
}
type UpdateWorkflowResponse = { Name?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSGlue.BatchCreatePartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchCreatePartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchCreatePartitionRequest }
        output: BatchCreatePartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchDeleteConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchDeleteConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteConnectionRequest }
        output: BatchDeleteConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchDeletePartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchDeletePartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeletePartitionRequest }
        output: BatchDeletePartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchDeleteTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchDeleteTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteTableRequest }
        output: BatchDeleteTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchDeleteTableVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchDeleteTableVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteTableVersionRequest }
        output: BatchDeleteTableVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetBlueprints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetBlueprints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetBlueprintsRequest }
        output: BatchGetBlueprintsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetCrawlers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetCrawlers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetCrawlersRequest }
        output: BatchGetCrawlersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetCustomEntityTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetCustomEntityTypesRequest }
        output: BatchGetCustomEntityTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetDataQualityResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetDataQualityResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetDataQualityResultRequest }
        output: BatchGetDataQualityResultResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetDevEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetDevEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetDevEndpointsRequest }
        output: BatchGetDevEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetJobsRequest }
        output: BatchGetJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetPartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetPartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetPartitionRequest }
        output: BatchGetPartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetTriggers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetTriggers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetTriggersRequest }
        output: BatchGetTriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchGetWorkflows': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchGetWorkflows'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetWorkflowsRequest }
        output: BatchGetWorkflowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchStopJobRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchStopJobRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchStopJobRunRequest }
        output: BatchStopJobRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.BatchUpdatePartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.BatchUpdatePartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchUpdatePartitionRequest }
        output: BatchUpdatePartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CancelDataQualityRuleRecommendationRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelDataQualityRuleRecommendationRunRequest }
        output: CancelDataQualityRuleRecommendationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CancelDataQualityRulesetEvaluationRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelDataQualityRulesetEvaluationRunRequest }
        output: CancelDataQualityRulesetEvaluationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CancelMLTaskRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CancelMLTaskRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelMLTaskRunRequest }
        output: CancelMLTaskRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CancelStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CancelStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelStatementRequest }
        output: CancelStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CheckSchemaVersionValidity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CheckSchemaVersionValidityInput }
        output: CheckSchemaVersionValidityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateBlueprint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateBlueprint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBlueprintRequest }
        output: CreateBlueprintResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateClassifier': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateClassifier'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClassifierRequest }
        output: CreateClassifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConnectionRequest }
        output: CreateConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateCrawler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateCrawler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCrawlerRequest }
        output: CreateCrawlerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateCustomEntityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateCustomEntityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCustomEntityTypeRequest }
        output: CreateCustomEntityTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateDataQualityRuleset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateDataQualityRuleset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDataQualityRulesetRequest }
        output: CreateDataQualityRulesetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatabaseRequest }
        output: CreateDatabaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateDevEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateDevEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDevEndpointRequest }
        output: CreateDevEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateJobRequest }
        output: CreateJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateMLTransform': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateMLTransform'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateMLTransformRequest }
        output: CreateMLTransformResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreatePartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreatePartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePartitionRequest }
        output: CreatePartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreatePartitionIndex': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreatePartitionIndex'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePartitionIndexRequest }
        output: CreatePartitionIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateRegistry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateRegistry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRegistryInput }
        output: CreateRegistryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSchemaInput }
        output: CreateSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateScript': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateScript'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateScriptRequest }
        output: CreateScriptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateSecurityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateSecurityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSecurityConfigurationRequest }
        output: CreateSecurityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSessionRequest }
        output: CreateSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTableRequest }
        output: CreateTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateTrigger': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateTrigger'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTriggerRequest }
        output: CreateTriggerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateUserDefinedFunction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateUserDefinedFunction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserDefinedFunctionRequest }
        output: CreateUserDefinedFunctionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.CreateWorkflow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.CreateWorkflow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkflowRequest }
        output: CreateWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteBlueprint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteBlueprint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBlueprintRequest }
        output: DeleteBlueprintResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteClassifier': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteClassifier'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClassifierRequest }
        output: DeleteClassifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteColumnStatisticsForPartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteColumnStatisticsForPartitionRequest }
        output: DeleteColumnStatisticsForPartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteColumnStatisticsForTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteColumnStatisticsForTableRequest }
        output: DeleteColumnStatisticsForTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConnectionRequest }
        output: DeleteConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteCrawler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteCrawler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCrawlerRequest }
        output: DeleteCrawlerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteCustomEntityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteCustomEntityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCustomEntityTypeRequest }
        output: DeleteCustomEntityTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteDataQualityRuleset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDataQualityRulesetRequest }
        output: DeleteDataQualityRulesetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDatabaseRequest }
        output: DeleteDatabaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteDevEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteDevEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDevEndpointRequest }
        output: DeleteDevEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteJobRequest }
        output: DeleteJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteMLTransform': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteMLTransform'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMLTransformRequest }
        output: DeleteMLTransformResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeletePartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeletePartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePartitionRequest }
        output: DeletePartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeletePartitionIndex': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeletePartitionIndex'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePartitionIndexRequest }
        output: DeletePartitionIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteRegistry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteRegistry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRegistryInput }
        output: DeleteRegistryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourcePolicyRequest }
        output: DeleteResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSchemaInput }
        output: DeleteSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteSchemaVersions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteSchemaVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSchemaVersionsInput }
        output: DeleteSchemaVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteSecurityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSecurityConfigurationRequest }
        output: DeleteSecurityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSessionRequest }
        output: DeleteSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTableRequest }
        output: DeleteTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteTableVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteTableVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTableVersionRequest }
        output: DeleteTableVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteTrigger': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteTrigger'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTriggerRequest }
        output: DeleteTriggerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteUserDefinedFunction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserDefinedFunctionRequest }
        output: DeleteUserDefinedFunctionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.DeleteWorkflow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.DeleteWorkflow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWorkflowRequest }
        output: DeleteWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetBlueprint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetBlueprint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBlueprintRequest }
        output: GetBlueprintResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetBlueprintRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetBlueprintRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBlueprintRunRequest }
        output: GetBlueprintRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetBlueprintRuns': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetBlueprintRuns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBlueprintRunsRequest }
        output: GetBlueprintRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetCatalogImportStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetCatalogImportStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCatalogImportStatusRequest }
        output: GetCatalogImportStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetClassifier': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetClassifier'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetClassifierRequest }
        output: GetClassifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetClassifiers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetClassifiers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetClassifiersRequest }
        output: GetClassifiersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetColumnStatisticsForPartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetColumnStatisticsForPartitionRequest }
        output: GetColumnStatisticsForPartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetColumnStatisticsForTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetColumnStatisticsForTableRequest }
        output: GetColumnStatisticsForTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConnectionRequest }
        output: GetConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetConnections': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetConnections'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConnectionsRequest }
        output: GetConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetCrawler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetCrawler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCrawlerRequest }
        output: GetCrawlerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetCrawlerMetrics': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetCrawlerMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCrawlerMetricsRequest }
        output: GetCrawlerMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetCrawlers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetCrawlers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCrawlersRequest }
        output: GetCrawlersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetCustomEntityType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetCustomEntityType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCustomEntityTypeRequest }
        output: GetCustomEntityTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDataCatalogEncryptionSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataCatalogEncryptionSettingsRequest }
        output: GetDataCatalogEncryptionSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDataQualityResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDataQualityResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataQualityResultRequest }
        output: GetDataQualityResultResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDataQualityRuleRecommendationRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataQualityRuleRecommendationRunRequest }
        output: GetDataQualityRuleRecommendationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDataQualityRuleset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDataQualityRuleset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataQualityRulesetRequest }
        output: GetDataQualityRulesetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDataQualityRulesetEvaluationRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataQualityRulesetEvaluationRunRequest }
        output: GetDataQualityRulesetEvaluationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDatabaseRequest }
        output: GetDatabaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDatabases': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDatabases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDatabasesRequest }
        output: GetDatabasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDataflowGraph': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDataflowGraph'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDataflowGraphRequest }
        output: GetDataflowGraphResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDevEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDevEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDevEndpointRequest }
        output: GetDevEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetDevEndpoints': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetDevEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDevEndpointsRequest }
        output: GetDevEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobRequest }
        output: GetJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetJobBookmark': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetJobBookmark'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobBookmarkRequest }
        output: GetJobBookmarkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetJobRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetJobRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobRunRequest }
        output: GetJobRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetJobRuns': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetJobRuns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobRunsRequest }
        output: GetJobRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobsRequest }
        output: GetJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetMLTaskRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetMLTaskRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMLTaskRunRequest }
        output: GetMLTaskRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetMLTaskRuns': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetMLTaskRuns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMLTaskRunsRequest }
        output: GetMLTaskRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetMLTransform': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetMLTransform'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMLTransformRequest }
        output: GetMLTransformResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetMLTransforms': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetMLTransforms'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMLTransformsRequest }
        output: GetMLTransformsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMappingRequest }
        output: GetMappingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetPartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetPartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPartitionRequest }
        output: GetPartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetPartitionIndexes': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetPartitionIndexes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPartitionIndexesRequest }
        output: GetPartitionIndexesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetPartitions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetPartitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPartitionsRequest }
        output: GetPartitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetPlan': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetPlan'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPlanRequest }
        output: GetPlanResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetRegistry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetRegistry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRegistryInput }
        output: GetRegistryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetResourcePolicies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetResourcePolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcePoliciesRequest }
        output: GetResourcePoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcePolicyRequest }
        output: GetResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSchemaInput }
        output: GetSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetSchemaByDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetSchemaByDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSchemaByDefinitionInput }
        output: GetSchemaByDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetSchemaVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetSchemaVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSchemaVersionInput }
        output: GetSchemaVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetSchemaVersionsDiff'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSchemaVersionsDiffInput }
        output: GetSchemaVersionsDiffResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetSecurityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetSecurityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSecurityConfigurationRequest }
        output: GetSecurityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetSecurityConfigurations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetSecurityConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSecurityConfigurationsRequest }
        output: GetSecurityConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetSession'
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
    '/#X-Amz-Target=AWSGlue.GetStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetStatementRequest }
        output: GetStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTableRequest }
        output: GetTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetTableVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetTableVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTableVersionRequest }
        output: GetTableVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetTableVersions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetTableVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTableVersionsRequest }
        output: GetTableVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetTables': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetTables'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTablesRequest }
        output: GetTablesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTagsRequest }
        output: GetTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetTrigger': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetTrigger'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTriggerRequest }
        output: GetTriggerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetTriggers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetTriggers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTriggersRequest }
        output: GetTriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetUnfilteredPartitionMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUnfilteredPartitionMetadataRequest }
        output: GetUnfilteredPartitionMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetUnfilteredPartitionsMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUnfilteredPartitionsMetadataRequest }
        output: GetUnfilteredPartitionsMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetUnfilteredTableMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUnfilteredTableMetadataRequest }
        output: GetUnfilteredTableMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetUserDefinedFunction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetUserDefinedFunction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserDefinedFunctionRequest }
        output: GetUserDefinedFunctionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetUserDefinedFunctions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetUserDefinedFunctions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserDefinedFunctionsRequest }
        output: GetUserDefinedFunctionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetWorkflow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetWorkflow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWorkflowRequest }
        output: GetWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetWorkflowRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetWorkflowRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWorkflowRunRequest }
        output: GetWorkflowRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetWorkflowRunProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.GetWorkflowRunProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWorkflowRunPropertiesRequest }
        output: GetWorkflowRunPropertiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.GetWorkflowRuns': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.GetWorkflowRuns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWorkflowRunsRequest }
        output: GetWorkflowRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ImportCatalogToGlue': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.ImportCatalogToGlue'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportCatalogToGlueRequest }
        output: ImportCatalogToGlueResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListBlueprints': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListBlueprints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBlueprintsRequest }
        output: ListBlueprintsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListCrawlers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListCrawlers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCrawlersRequest }
        output: ListCrawlersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListCrawls': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.ListCrawls'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCrawlsRequest }
        output: ListCrawlsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListCustomEntityTypes': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListCustomEntityTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCustomEntityTypesRequest }
        output: ListCustomEntityTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListDataQualityResults': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListDataQualityResults'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataQualityResultsRequest }
        output: ListDataQualityResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListDataQualityRuleRecommendationRuns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataQualityRuleRecommendationRunsRequest }
        output: ListDataQualityRuleRecommendationRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListDataQualityRulesetEvaluationRuns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataQualityRulesetEvaluationRunsRequest }
        output: ListDataQualityRulesetEvaluationRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListDataQualityRulesets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListDataQualityRulesets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataQualityRulesetsRequest }
        output: ListDataQualityRulesetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListDevEndpoints': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListDevEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDevEndpointsRequest }
        output: ListDevEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListJobsRequest }
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListMLTransforms': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListMLTransforms'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMLTransformsRequest }
        output: ListMLTransformsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListRegistries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListRegistries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRegistriesInput }
        output: ListRegistriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListSchemaVersions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListSchemaVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSchemaVersionsInput }
        output: ListSchemaVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListSchemas': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListSchemas'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSchemasInput }
        output: ListSchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListSessions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListSessions'
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
    '/#X-Amz-Target=AWSGlue.ListStatements': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.ListStatements'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStatementsRequest }
        output: ListStatementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListTriggers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListTriggers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTriggersRequest }
        output: ListTriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ListWorkflows': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.ListWorkflows'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkflowsRequest }
        output: ListWorkflowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.PutDataCatalogEncryptionSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutDataCatalogEncryptionSettingsRequest }
        output: PutDataCatalogEncryptionSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.PutResourcePolicy'
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
    '/#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.PutSchemaVersionMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutSchemaVersionMetadataInput }
        output: PutSchemaVersionMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.PutWorkflowRunProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.PutWorkflowRunProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutWorkflowRunPropertiesRequest }
        output: PutWorkflowRunPropertiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.QuerySchemaVersionMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: QuerySchemaVersionMetadataInput }
        output: QuerySchemaVersionMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.RegisterSchemaVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.RegisterSchemaVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterSchemaVersionInput }
        output: RegisterSchemaVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.RemoveSchemaVersionMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveSchemaVersionMetadataInput }
        output: RemoveSchemaVersionMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ResetJobBookmark': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.ResetJobBookmark'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetJobBookmarkRequest }
        output: ResetJobBookmarkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.ResumeWorkflowRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.ResumeWorkflowRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResumeWorkflowRunRequest }
        output: ResumeWorkflowRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.RunStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.RunStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RunStatementRequest }
        output: RunStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.SearchTables': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSGlue.SearchTables'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchTablesRequest }
        output: SearchTablesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartBlueprintRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartBlueprintRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartBlueprintRunRequest }
        output: StartBlueprintRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartCrawler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartCrawler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartCrawlerRequest }
        output: StartCrawlerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartCrawlerSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartCrawlerSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartCrawlerScheduleRequest }
        output: StartCrawlerScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartDataQualityRuleRecommendationRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDataQualityRuleRecommendationRunRequest }
        output: StartDataQualityRuleRecommendationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartDataQualityRulesetEvaluationRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDataQualityRulesetEvaluationRunRequest }
        output: StartDataQualityRulesetEvaluationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartExportLabelsTaskRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartExportLabelsTaskRunRequest }
        output: StartExportLabelsTaskRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartImportLabelsTaskRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartImportLabelsTaskRunRequest }
        output: StartImportLabelsTaskRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartJobRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartJobRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartJobRunRequest }
        output: StartJobRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartMLEvaluationTaskRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartMLEvaluationTaskRunRequest }
        output: StartMLEvaluationTaskRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartMLLabelingSetGenerationTaskRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartMLLabelingSetGenerationTaskRunRequest }
        output: StartMLLabelingSetGenerationTaskRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartTrigger': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartTrigger'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartTriggerRequest }
        output: StartTriggerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StartWorkflowRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StartWorkflowRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartWorkflowRunRequest }
        output: StartWorkflowRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StopCrawler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StopCrawler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopCrawlerRequest }
        output: StopCrawlerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StopCrawlerSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StopCrawlerSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopCrawlerScheduleRequest }
        output: StopCrawlerScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StopSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StopSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopSessionRequest }
        output: StopSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StopTrigger': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StopTrigger'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopTriggerRequest }
        output: StopTriggerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.StopWorkflowRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.StopWorkflowRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopWorkflowRunRequest }
        output: StopWorkflowRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.TagResource'
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
    '/#X-Amz-Target=AWSGlue.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UntagResource'
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
    '/#X-Amz-Target=AWSGlue.UpdateBlueprint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateBlueprint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBlueprintRequest }
        output: UpdateBlueprintResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateClassifier': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateClassifier'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateClassifierRequest }
        output: UpdateClassifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateColumnStatisticsForPartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateColumnStatisticsForPartitionRequest }
        output: UpdateColumnStatisticsForPartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateColumnStatisticsForTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateColumnStatisticsForTableRequest }
        output: UpdateColumnStatisticsForTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConnectionRequest }
        output: UpdateConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateCrawler': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateCrawler'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCrawlerRequest }
        output: UpdateCrawlerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateCrawlerSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCrawlerScheduleRequest }
        output: UpdateCrawlerScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateDataQualityRuleset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDataQualityRulesetRequest }
        output: UpdateDataQualityRulesetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDatabaseRequest }
        output: UpdateDatabaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateDevEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateDevEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDevEndpointRequest }
        output: UpdateDevEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateJobRequest }
        output: UpdateJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateJobFromSourceControl'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateJobFromSourceControlRequest }
        output: UpdateJobFromSourceControlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateMLTransform': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateMLTransform'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMLTransformRequest }
        output: UpdateMLTransformResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdatePartition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdatePartition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePartitionRequest }
        output: UpdatePartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateRegistry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateRegistry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRegistryInput }
        output: UpdateRegistryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSchemaInput }
        output: UpdateSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateSourceControlFromJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSourceControlFromJobRequest }
        output: UpdateSourceControlFromJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateTable': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTableRequest }
        output: UpdateTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateTrigger': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateTrigger'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTriggerRequest }
        output: UpdateTriggerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateUserDefinedFunction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserDefinedFunctionRequest }
        output: UpdateUserDefinedFunctionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSGlue.UpdateWorkflow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSGlue.UpdateWorkflow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateWorkflowRequest }
        output: UpdateWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
