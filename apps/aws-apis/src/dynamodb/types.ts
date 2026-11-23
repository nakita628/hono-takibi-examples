type ReturnConsumedCapacity = 'INDEXES' | 'TOTAL' | 'NONE'
type BatchExecuteStatementInput = {
  Statements: {}
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
}
type BatchExecuteStatementOutput = { Responses?: {} | undefined; ConsumedCapacity?: {} | undefined }
type RequestLimitExceeded = { [x: string]: unknown }
type InternalServerError = { [x: string]: unknown }
type BatchGetItemInput = {
  RequestItems: {}
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
}
type BatchGetItemOutput = {
  Responses?: {} | undefined
  UnprocessedKeys?: {} | undefined
  ConsumedCapacity?: {} | undefined
}
type ProvisionedThroughputExceededException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type BatchWriteItemInput = {
  RequestItems: {}
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  ReturnItemCollectionMetrics?: {} | undefined
}
type BatchWriteItemOutput = {
  UnprocessedItems?: {} | undefined
  ItemCollectionMetrics?: {} | undefined
  ConsumedCapacity?: {} | undefined
}
type ItemCollectionSizeLimitExceededException = { [x: string]: unknown }
type CreateBackupInput = { TableName: {}; BackupName: {} }
type CreateBackupOutput = {
  BackupDetails?:
    | {
        BackupArn: {}
        BackupName: {}
        BackupSizeBytes?: {} | undefined
        BackupStatus: {}
        BackupType: {}
        BackupCreationDateTime: {}
        BackupExpiryDateTime?: {} | undefined
      }
    | undefined
}
type TableNotFoundException = { [x: string]: unknown }
type TableInUseException = { [x: string]: unknown }
type ContinuousBackupsUnavailableException = { [x: string]: unknown }
type BackupInUseException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type CreateGlobalTableInput = { GlobalTableName: {}; ReplicationGroup: {} }
type CreateGlobalTableOutput = {
  GlobalTableDescription?:
    | {
        ReplicationGroup?: {} | undefined
        GlobalTableArn?: {} | undefined
        CreationDateTime?: {} | undefined
        GlobalTableStatus?: {} | undefined
        GlobalTableName?: {} | undefined
      }
    | undefined
}
type GlobalTableAlreadyExistsException = { [x: string]: unknown }
type CreateTableInput = {
  AttributeDefinitions: {}
  TableName: {}
  KeySchema: {}
  LocalSecondaryIndexes?: {} | undefined
  GlobalSecondaryIndexes?: {} | undefined
  BillingMode?: {} | undefined
  ProvisionedThroughput?: { ReadCapacityUnits: {}; WriteCapacityUnits: {} } | undefined
  StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
  SSESpecification?:
    | { Enabled?: {} | undefined; SSEType?: {} | undefined; KMSMasterKeyId?: {} | undefined }
    | undefined
  Tags?: {} | undefined
  TableClass?: {} | undefined
  DeletionProtectionEnabled?: {} | undefined
}
type CreateTableOutput = {
  TableDescription?:
    | {
        AttributeDefinitions?: {} | undefined
        TableName?: {} | undefined
        KeySchema?: {} | undefined
        TableStatus?: {} | undefined
        CreationDateTime?: {} | undefined
        ProvisionedThroughput?:
          | {
              LastIncreaseDateTime?: {} | undefined
              LastDecreaseDateTime?: {} | undefined
              NumberOfDecreasesToday?: {} | undefined
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
            }
          | undefined
        TableSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        BillingModeSummary?:
          | { BillingMode?: {} | undefined; LastUpdateToPayPerRequestDateTime?: {} | undefined }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
        StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
        LatestStreamLabel?: {} | undefined
        LatestStreamArn?: {} | undefined
        GlobalTableVersion?: {} | undefined
        Replicas?: {} | undefined
        RestoreSummary?:
          | {
              SourceBackupArn?: {} | undefined
              SourceTableArn?: {} | undefined
              RestoreDateTime: {}
              RestoreInProgress: {}
            }
          | undefined
        SSEDescription?:
          | {
              Status?: {} | undefined
              SSEType?: {} | undefined
              KMSMasterKeyArn?: {} | undefined
              InaccessibleEncryptionDateTime?: {} | undefined
            }
          | undefined
        ArchivalSummary?:
          | {
              ArchivalDateTime?: {} | undefined
              ArchivalReason?: {} | undefined
              ArchivalBackupArn?: {} | undefined
            }
          | undefined
        TableClassSummary?:
          | { TableClass?: {} | undefined; LastUpdateDateTime?: {} | undefined }
          | undefined
        DeletionProtectionEnabled?: {} | undefined
      }
    | undefined
}
type ResourceInUseException = { [x: string]: unknown }
type DeleteBackupInput = { BackupArn: {} }
type DeleteBackupOutput = {
  BackupDescription?:
    | {
        BackupDetails?:
          | {
              BackupArn: {}
              BackupName: {}
              BackupSizeBytes?: {} | undefined
              BackupStatus: {}
              BackupType: {}
              BackupCreationDateTime: {}
              BackupExpiryDateTime?: {} | undefined
            }
          | undefined
        SourceTableDetails?:
          | {
              TableName: {}
              TableId: {}
              TableArn?: {} | undefined
              TableSizeBytes?: {} | undefined
              KeySchema: {}
              TableCreationDateTime: {}
              ProvisionedThroughput: { ReadCapacityUnits: {}; WriteCapacityUnits: {} }
              ItemCount?: {} | undefined
              BillingMode?: {} | undefined
            }
          | undefined
        SourceTableFeatureDetails?:
          | {
              LocalSecondaryIndexes?: {} | undefined
              GlobalSecondaryIndexes?: {} | undefined
              StreamDescription?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
              TimeToLiveDescription?:
                | { TimeToLiveStatus?: {} | undefined; AttributeName?: {} | undefined }
                | undefined
              SSEDescription?:
                | {
                    Status?: {} | undefined
                    SSEType?: {} | undefined
                    KMSMasterKeyArn?: {} | undefined
                    InaccessibleEncryptionDateTime?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type BackupNotFoundException = { [x: string]: unknown }
type DeleteItemInput = {
  TableName: {}
  Key: {}
  Expected?: {} | undefined
  ConditionalOperator?: {} | undefined
  ReturnValues?: {} | undefined
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  ReturnItemCollectionMetrics?: {} | undefined
  ConditionExpression?: {} | undefined
  ExpressionAttributeNames?: {} | undefined
  ExpressionAttributeValues?: {} | undefined
  ReturnValuesOnConditionCheckFailure?: {} | undefined
}
type DeleteItemOutput = {
  Attributes?: {} | undefined
  ConsumedCapacity?:
    | {
        TableName?: {} | undefined
        CapacityUnits?: {} | undefined
        ReadCapacityUnits?: {} | undefined
        WriteCapacityUnits?: {} | undefined
        Table?:
          | {
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
              CapacityUnits?: {} | undefined
            }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
      }
    | undefined
  ItemCollectionMetrics?:
    | { ItemCollectionKey?: {} | undefined; SizeEstimateRangeGB?: {} | undefined }
    | undefined
}
type ConditionalCheckFailedException = { [x: string]: unknown }
type TransactionConflictException = { [x: string]: unknown }
type DeleteTableInput = { TableName: {} }
type DeleteTableOutput = {
  TableDescription?:
    | {
        AttributeDefinitions?: {} | undefined
        TableName?: {} | undefined
        KeySchema?: {} | undefined
        TableStatus?: {} | undefined
        CreationDateTime?: {} | undefined
        ProvisionedThroughput?:
          | {
              LastIncreaseDateTime?: {} | undefined
              LastDecreaseDateTime?: {} | undefined
              NumberOfDecreasesToday?: {} | undefined
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
            }
          | undefined
        TableSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        BillingModeSummary?:
          | { BillingMode?: {} | undefined; LastUpdateToPayPerRequestDateTime?: {} | undefined }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
        StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
        LatestStreamLabel?: {} | undefined
        LatestStreamArn?: {} | undefined
        GlobalTableVersion?: {} | undefined
        Replicas?: {} | undefined
        RestoreSummary?:
          | {
              SourceBackupArn?: {} | undefined
              SourceTableArn?: {} | undefined
              RestoreDateTime: {}
              RestoreInProgress: {}
            }
          | undefined
        SSEDescription?:
          | {
              Status?: {} | undefined
              SSEType?: {} | undefined
              KMSMasterKeyArn?: {} | undefined
              InaccessibleEncryptionDateTime?: {} | undefined
            }
          | undefined
        ArchivalSummary?:
          | {
              ArchivalDateTime?: {} | undefined
              ArchivalReason?: {} | undefined
              ArchivalBackupArn?: {} | undefined
            }
          | undefined
        TableClassSummary?:
          | { TableClass?: {} | undefined; LastUpdateDateTime?: {} | undefined }
          | undefined
        DeletionProtectionEnabled?: {} | undefined
      }
    | undefined
}
type DescribeBackupInput = { BackupArn: {} }
type DescribeBackupOutput = {
  BackupDescription?:
    | {
        BackupDetails?:
          | {
              BackupArn: {}
              BackupName: {}
              BackupSizeBytes?: {} | undefined
              BackupStatus: {}
              BackupType: {}
              BackupCreationDateTime: {}
              BackupExpiryDateTime?: {} | undefined
            }
          | undefined
        SourceTableDetails?:
          | {
              TableName: {}
              TableId: {}
              TableArn?: {} | undefined
              TableSizeBytes?: {} | undefined
              KeySchema: {}
              TableCreationDateTime: {}
              ProvisionedThroughput: { ReadCapacityUnits: {}; WriteCapacityUnits: {} }
              ItemCount?: {} | undefined
              BillingMode?: {} | undefined
            }
          | undefined
        SourceTableFeatureDetails?:
          | {
              LocalSecondaryIndexes?: {} | undefined
              GlobalSecondaryIndexes?: {} | undefined
              StreamDescription?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
              TimeToLiveDescription?:
                | { TimeToLiveStatus?: {} | undefined; AttributeName?: {} | undefined }
                | undefined
              SSEDescription?:
                | {
                    Status?: {} | undefined
                    SSEType?: {} | undefined
                    KMSMasterKeyArn?: {} | undefined
                    InaccessibleEncryptionDateTime?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeContinuousBackupsInput = { TableName: {} }
type DescribeContinuousBackupsOutput = {
  ContinuousBackupsDescription?:
    | {
        ContinuousBackupsStatus: {}
        PointInTimeRecoveryDescription?:
          | {
              PointInTimeRecoveryStatus?: {} | undefined
              EarliestRestorableDateTime?: {} | undefined
              LatestRestorableDateTime?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeContributorInsightsInput = { TableName: {}; IndexName?: {} | undefined }
type DescribeContributorInsightsOutput = {
  TableName?: {} | undefined
  IndexName?: {} | undefined
  ContributorInsightsRuleList?: {} | undefined
  ContributorInsightsStatus?: {} | undefined
  LastUpdateDateTime?: {} | undefined
  FailureException?:
    | { ExceptionName?: {} | undefined; ExceptionDescription?: {} | undefined }
    | undefined
}
type DescribeEndpointsRequest = { [x: string]: unknown }
type DescribeEndpointsResponse = { Endpoints: {} }
type DescribeExportInput = { ExportArn: {} }
type DescribeExportOutput = {
  ExportDescription?:
    | {
        ExportArn?: {} | undefined
        ExportStatus?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        ExportManifest?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        ExportTime?: {} | undefined
        ClientToken?: {} | undefined
        S3Bucket?: {} | undefined
        S3BucketOwner?: {} | undefined
        S3Prefix?: {} | undefined
        S3SseAlgorithm?: {} | undefined
        S3SseKmsKeyId?: {} | undefined
        FailureCode?: {} | undefined
        FailureMessage?: {} | undefined
        ExportFormat?: {} | undefined
        BilledSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
      }
    | undefined
}
type ExportNotFoundException = { [x: string]: unknown }
type DescribeGlobalTableInput = { GlobalTableName: {} }
type DescribeGlobalTableOutput = {
  GlobalTableDescription?:
    | {
        ReplicationGroup?: {} | undefined
        GlobalTableArn?: {} | undefined
        CreationDateTime?: {} | undefined
        GlobalTableStatus?: {} | undefined
        GlobalTableName?: {} | undefined
      }
    | undefined
}
type GlobalTableNotFoundException = { [x: string]: unknown }
type DescribeGlobalTableSettingsInput = { GlobalTableName: {} }
type DescribeGlobalTableSettingsOutput = {
  GlobalTableName?: {} | undefined
  ReplicaSettings?: {} | undefined
}
type DescribeImportInput = { ImportArn: {} }
type ProvisionedThroughput = { ReadCapacityUnits: {}; WriteCapacityUnits: {} }
type SSESpecification = {
  Enabled?: {} | undefined
  SSEType?: {} | undefined
  KMSMasterKeyId?: {} | undefined
}
type DescribeImportOutput = {
  ImportTableDescription: {
    ImportArn?: {} | undefined
    ImportStatus?: {} | undefined
    TableArn?: {} | undefined
    TableId?: {} | undefined
    ClientToken?: {} | undefined
    S3BucketSource?:
      | { S3BucketOwner?: {} | undefined; S3Bucket: {}; S3KeyPrefix?: {} | undefined }
      | undefined
    ErrorCount?: {} | undefined
    CloudWatchLogGroupArn?: {} | undefined
    InputFormat?: {} | undefined
    InputFormatOptions?:
      | { Csv?: { Delimiter?: {} | undefined; HeaderList?: {} | undefined } | undefined }
      | undefined
    InputCompressionType?: {} | undefined
    TableCreationParameters?:
      | {
          TableName: {}
          AttributeDefinitions: {}
          KeySchema: {}
          BillingMode?: {} | undefined
          ProvisionedThroughput?: ProvisionedThroughput | undefined
          SSESpecification?: SSESpecification | undefined
          GlobalSecondaryIndexes?: {} | undefined
        }
      | undefined
    StartTime?: {} | undefined
    EndTime?: {} | undefined
    ProcessedSizeBytes?: {} | undefined
    ProcessedItemCount?: {} | undefined
    ImportedItemCount?: {} | undefined
    FailureCode?: {} | undefined
    FailureMessage?: {} | undefined
  }
}
type ImportNotFoundException = { [x: string]: unknown }
type DescribeKinesisStreamingDestinationInput = { TableName: {} }
type DescribeKinesisStreamingDestinationOutput = {
  TableName?: {} | undefined
  KinesisDataStreamDestinations?: {} | undefined
}
type DescribeLimitsInput = { [x: string]: unknown }
type DescribeLimitsOutput = {
  AccountMaxReadCapacityUnits?: {} | undefined
  AccountMaxWriteCapacityUnits?: {} | undefined
  TableMaxReadCapacityUnits?: {} | undefined
  TableMaxWriteCapacityUnits?: {} | undefined
}
type DescribeTableInput = { TableName: {} }
type DescribeTableOutput = {
  Table?:
    | {
        AttributeDefinitions?: {} | undefined
        TableName?: {} | undefined
        KeySchema?: {} | undefined
        TableStatus?: {} | undefined
        CreationDateTime?: {} | undefined
        ProvisionedThroughput?:
          | {
              LastIncreaseDateTime?: {} | undefined
              LastDecreaseDateTime?: {} | undefined
              NumberOfDecreasesToday?: {} | undefined
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
            }
          | undefined
        TableSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        BillingModeSummary?:
          | { BillingMode?: {} | undefined; LastUpdateToPayPerRequestDateTime?: {} | undefined }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
        StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
        LatestStreamLabel?: {} | undefined
        LatestStreamArn?: {} | undefined
        GlobalTableVersion?: {} | undefined
        Replicas?: {} | undefined
        RestoreSummary?:
          | {
              SourceBackupArn?: {} | undefined
              SourceTableArn?: {} | undefined
              RestoreDateTime: {}
              RestoreInProgress: {}
            }
          | undefined
        SSEDescription?:
          | {
              Status?: {} | undefined
              SSEType?: {} | undefined
              KMSMasterKeyArn?: {} | undefined
              InaccessibleEncryptionDateTime?: {} | undefined
            }
          | undefined
        ArchivalSummary?:
          | {
              ArchivalDateTime?: {} | undefined
              ArchivalReason?: {} | undefined
              ArchivalBackupArn?: {} | undefined
            }
          | undefined
        TableClassSummary?:
          | { TableClass?: {} | undefined; LastUpdateDateTime?: {} | undefined }
          | undefined
        DeletionProtectionEnabled?: {} | undefined
      }
    | undefined
}
type DescribeTableReplicaAutoScalingInput = { TableName: {} }
type DescribeTableReplicaAutoScalingOutput = {
  TableAutoScalingDescription?:
    | { TableName?: {} | undefined; TableStatus?: {} | undefined; Replicas?: {} | undefined }
    | undefined
}
type DescribeTimeToLiveInput = { TableName: {} }
type DescribeTimeToLiveOutput = {
  TimeToLiveDescription?:
    | { TimeToLiveStatus?: {} | undefined; AttributeName?: {} | undefined }
    | undefined
}
type KinesisStreamingDestinationInput = { TableName: {}; StreamArn: {} }
type KinesisStreamingDestinationOutput = {
  TableName?: {} | undefined
  StreamArn?: {} | undefined
  DestinationStatus?: {} | undefined
}
type ExecuteStatementInput = {
  Statement: {}
  Parameters?: {} | undefined
  ConsistentRead?: {} | undefined
  NextToken?: {} | undefined
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  Limit?: {} | undefined
  ReturnValuesOnConditionCheckFailure?: {} | undefined
}
type ConsumedCapacity = {
  TableName?: {} | undefined
  CapacityUnits?: {} | undefined
  ReadCapacityUnits?: {} | undefined
  WriteCapacityUnits?: {} | undefined
  Table?:
    | {
        ReadCapacityUnits?: {} | undefined
        WriteCapacityUnits?: {} | undefined
        CapacityUnits?: {} | undefined
      }
    | undefined
  LocalSecondaryIndexes?: {} | undefined
  GlobalSecondaryIndexes?: {} | undefined
}
type ExecuteStatementOutput = {
  Items?: {} | undefined
  NextToken?: {} | undefined
  ConsumedCapacity?: ConsumedCapacity | undefined
  LastEvaluatedKey?: {} | undefined
}
type DuplicateItemException = { [x: string]: unknown }
type ExecuteTransactionInput = {
  TransactStatements: {}
  ClientRequestToken?: {} | undefined
  ReturnConsumedCapacity?: {} | undefined
}
type ExecuteTransactionOutput = { Responses?: {} | undefined; ConsumedCapacity?: {} | undefined }
type TransactionCanceledException = { [x: string]: unknown }
type TransactionInProgressException = { [x: string]: unknown }
type IdempotentParameterMismatchException = { [x: string]: unknown }
type ExportTableToPointInTimeInput = {
  TableArn: {}
  ExportTime?: {} | undefined
  ClientToken?: {} | undefined
  S3Bucket: {}
  S3BucketOwner?: {} | undefined
  S3Prefix?: {} | undefined
  S3SseAlgorithm?: {} | undefined
  S3SseKmsKeyId?: {} | undefined
  ExportFormat?: {} | undefined
}
type ExportTableToPointInTimeOutput = {
  ExportDescription?:
    | {
        ExportArn?: {} | undefined
        ExportStatus?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        ExportManifest?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        ExportTime?: {} | undefined
        ClientToken?: {} | undefined
        S3Bucket?: {} | undefined
        S3BucketOwner?: {} | undefined
        S3Prefix?: {} | undefined
        S3SseAlgorithm?: {} | undefined
        S3SseKmsKeyId?: {} | undefined
        FailureCode?: {} | undefined
        FailureMessage?: {} | undefined
        ExportFormat?: {} | undefined
        BilledSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
      }
    | undefined
}
type PointInTimeRecoveryUnavailableException = { [x: string]: unknown }
type InvalidExportTimeException = { [x: string]: unknown }
type ExportConflictException = { [x: string]: unknown }
type GetItemInput = {
  TableName: {}
  Key: {}
  AttributesToGet?: {} | undefined
  ConsistentRead?: {} | undefined
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  ProjectionExpression?: {} | undefined
  ExpressionAttributeNames?: {} | undefined
}
type GetItemOutput = {
  Item?: {} | undefined
  ConsumedCapacity?:
    | {
        TableName?: {} | undefined
        CapacityUnits?: {} | undefined
        ReadCapacityUnits?: {} | undefined
        WriteCapacityUnits?: {} | undefined
        Table?:
          | {
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
              CapacityUnits?: {} | undefined
            }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
      }
    | undefined
}
type ImportTableInput = {
  ClientToken?: {} | undefined
  S3BucketSource: { S3BucketOwner?: {} | undefined; S3Bucket: {}; S3KeyPrefix?: {} | undefined }
  InputFormat: {}
  InputFormatOptions?:
    | { Csv?: { Delimiter?: {} | undefined; HeaderList?: {} | undefined } | undefined }
    | undefined
  InputCompressionType?: {} | undefined
  TableCreationParameters: {
    TableName: {}
    AttributeDefinitions: {}
    KeySchema: {}
    BillingMode?: {} | undefined
    ProvisionedThroughput?: ProvisionedThroughput | undefined
    SSESpecification?: SSESpecification | undefined
    GlobalSecondaryIndexes?: {} | undefined
  }
}
type ImportTableOutput = {
  ImportTableDescription: {
    ImportArn?: {} | undefined
    ImportStatus?: {} | undefined
    TableArn?: {} | undefined
    TableId?: {} | undefined
    ClientToken?: {} | undefined
    S3BucketSource?:
      | { S3BucketOwner?: {} | undefined; S3Bucket: {}; S3KeyPrefix?: {} | undefined }
      | undefined
    ErrorCount?: {} | undefined
    CloudWatchLogGroupArn?: {} | undefined
    InputFormat?: {} | undefined
    InputFormatOptions?:
      | { Csv?: { Delimiter?: {} | undefined; HeaderList?: {} | undefined } | undefined }
      | undefined
    InputCompressionType?: {} | undefined
    TableCreationParameters?:
      | {
          TableName: {}
          AttributeDefinitions: {}
          KeySchema: {}
          BillingMode?: {} | undefined
          ProvisionedThroughput?: ProvisionedThroughput | undefined
          SSESpecification?: SSESpecification | undefined
          GlobalSecondaryIndexes?: {} | undefined
        }
      | undefined
    StartTime?: {} | undefined
    EndTime?: {} | undefined
    ProcessedSizeBytes?: {} | undefined
    ProcessedItemCount?: {} | undefined
    ImportedItemCount?: {} | undefined
    FailureCode?: {} | undefined
    FailureMessage?: {} | undefined
  }
}
type ImportConflictException = { [x: string]: unknown }
type ListBackupsInput = {
  TableName?: {} | undefined
  Limit?: {} | undefined
  TimeRangeLowerBound?: {} | undefined
  TimeRangeUpperBound?: {} | undefined
  ExclusiveStartBackupArn?: {} | undefined
  BackupType?: {} | undefined
}
type ListBackupsOutput = {
  BackupSummaries?: {} | undefined
  LastEvaluatedBackupArn?: {} | undefined
}
type ListContributorInsightsInput = {
  TableName?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListContributorInsightsOutput = {
  ContributorInsightsSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListExportsInput = {
  TableArn?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListExportsOutput = { ExportSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListGlobalTablesInput = {
  ExclusiveStartGlobalTableName?: {} | undefined
  Limit?: {} | undefined
  RegionName?: {} | undefined
}
type ListGlobalTablesOutput = {
  GlobalTables?: {} | undefined
  LastEvaluatedGlobalTableName?: {} | undefined
}
type ListImportsInput = {
  TableArn?: {} | undefined
  PageSize?: {} | undefined
  NextToken?: {} | undefined
}
type ListImportsOutput = { ImportSummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListTablesInput = { ExclusiveStartTableName?: {} | undefined; Limit?: {} | undefined }
type ListTablesOutput = { TableNames?: {} | undefined; LastEvaluatedTableName?: {} | undefined }
type ListTagsOfResourceInput = { ResourceArn: {}; NextToken?: {} | undefined }
type ListTagsOfResourceOutput = { Tags?: {} | undefined; NextToken?: {} | undefined }
type PutItemInput = {
  TableName: {}
  Item: {}
  Expected?: {} | undefined
  ReturnValues?: {} | undefined
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  ReturnItemCollectionMetrics?: {} | undefined
  ConditionalOperator?: {} | undefined
  ConditionExpression?: {} | undefined
  ExpressionAttributeNames?: {} | undefined
  ExpressionAttributeValues?: {} | undefined
  ReturnValuesOnConditionCheckFailure?: {} | undefined
}
type PutItemOutput = {
  Attributes?: {} | undefined
  ConsumedCapacity?:
    | {
        TableName?: {} | undefined
        CapacityUnits?: {} | undefined
        ReadCapacityUnits?: {} | undefined
        WriteCapacityUnits?: {} | undefined
        Table?:
          | {
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
              CapacityUnits?: {} | undefined
            }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
      }
    | undefined
  ItemCollectionMetrics?:
    | { ItemCollectionKey?: {} | undefined; SizeEstimateRangeGB?: {} | undefined }
    | undefined
}
type QueryInput = {
  TableName: {}
  IndexName?: {} | undefined
  Select?: {} | undefined
  AttributesToGet?: {} | undefined
  Limit?: {} | undefined
  ConsistentRead?: {} | undefined
  KeyConditions?: {} | undefined
  QueryFilter?: {} | undefined
  ConditionalOperator?: {} | undefined
  ScanIndexForward?: {} | undefined
  ExclusiveStartKey?: {} | undefined
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  ProjectionExpression?: {} | undefined
  FilterExpression?: {} | undefined
  KeyConditionExpression?: {} | undefined
  ExpressionAttributeNames?: {} | undefined
  ExpressionAttributeValues?: {} | undefined
}
type QueryOutput = {
  Items?: {} | undefined
  Count?: {} | undefined
  ScannedCount?: {} | undefined
  LastEvaluatedKey?: {} | undefined
  ConsumedCapacity?:
    | {
        TableName?: {} | undefined
        CapacityUnits?: {} | undefined
        ReadCapacityUnits?: {} | undefined
        WriteCapacityUnits?: {} | undefined
        Table?:
          | {
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
              CapacityUnits?: {} | undefined
            }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
      }
    | undefined
}
type RestoreTableFromBackupInput = {
  TargetTableName: {}
  BackupArn: {}
  BillingModeOverride?: {} | undefined
  GlobalSecondaryIndexOverride?: {} | undefined
  LocalSecondaryIndexOverride?: {} | undefined
  ProvisionedThroughputOverride?: { ReadCapacityUnits: {}; WriteCapacityUnits: {} } | undefined
  SSESpecificationOverride?:
    | { Enabled?: {} | undefined; SSEType?: {} | undefined; KMSMasterKeyId?: {} | undefined }
    | undefined
}
type RestoreTableFromBackupOutput = {
  TableDescription?:
    | {
        AttributeDefinitions?: {} | undefined
        TableName?: {} | undefined
        KeySchema?: {} | undefined
        TableStatus?: {} | undefined
        CreationDateTime?: {} | undefined
        ProvisionedThroughput?:
          | {
              LastIncreaseDateTime?: {} | undefined
              LastDecreaseDateTime?: {} | undefined
              NumberOfDecreasesToday?: {} | undefined
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
            }
          | undefined
        TableSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        BillingModeSummary?:
          | { BillingMode?: {} | undefined; LastUpdateToPayPerRequestDateTime?: {} | undefined }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
        StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
        LatestStreamLabel?: {} | undefined
        LatestStreamArn?: {} | undefined
        GlobalTableVersion?: {} | undefined
        Replicas?: {} | undefined
        RestoreSummary?:
          | {
              SourceBackupArn?: {} | undefined
              SourceTableArn?: {} | undefined
              RestoreDateTime: {}
              RestoreInProgress: {}
            }
          | undefined
        SSEDescription?:
          | {
              Status?: {} | undefined
              SSEType?: {} | undefined
              KMSMasterKeyArn?: {} | undefined
              InaccessibleEncryptionDateTime?: {} | undefined
            }
          | undefined
        ArchivalSummary?:
          | {
              ArchivalDateTime?: {} | undefined
              ArchivalReason?: {} | undefined
              ArchivalBackupArn?: {} | undefined
            }
          | undefined
        TableClassSummary?:
          | { TableClass?: {} | undefined; LastUpdateDateTime?: {} | undefined }
          | undefined
        DeletionProtectionEnabled?: {} | undefined
      }
    | undefined
}
type TableAlreadyExistsException = { [x: string]: unknown }
type RestoreTableToPointInTimeInput = {
  SourceTableArn?: {} | undefined
  SourceTableName?: {} | undefined
  TargetTableName: {}
  UseLatestRestorableTime?: {} | undefined
  RestoreDateTime?: {} | undefined
  BillingModeOverride?: {} | undefined
  GlobalSecondaryIndexOverride?: {} | undefined
  LocalSecondaryIndexOverride?: {} | undefined
  ProvisionedThroughputOverride?: { ReadCapacityUnits: {}; WriteCapacityUnits: {} } | undefined
  SSESpecificationOverride?:
    | { Enabled?: {} | undefined; SSEType?: {} | undefined; KMSMasterKeyId?: {} | undefined }
    | undefined
}
type RestoreTableToPointInTimeOutput = {
  TableDescription?:
    | {
        AttributeDefinitions?: {} | undefined
        TableName?: {} | undefined
        KeySchema?: {} | undefined
        TableStatus?: {} | undefined
        CreationDateTime?: {} | undefined
        ProvisionedThroughput?:
          | {
              LastIncreaseDateTime?: {} | undefined
              LastDecreaseDateTime?: {} | undefined
              NumberOfDecreasesToday?: {} | undefined
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
            }
          | undefined
        TableSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        BillingModeSummary?:
          | { BillingMode?: {} | undefined; LastUpdateToPayPerRequestDateTime?: {} | undefined }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
        StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
        LatestStreamLabel?: {} | undefined
        LatestStreamArn?: {} | undefined
        GlobalTableVersion?: {} | undefined
        Replicas?: {} | undefined
        RestoreSummary?:
          | {
              SourceBackupArn?: {} | undefined
              SourceTableArn?: {} | undefined
              RestoreDateTime: {}
              RestoreInProgress: {}
            }
          | undefined
        SSEDescription?:
          | {
              Status?: {} | undefined
              SSEType?: {} | undefined
              KMSMasterKeyArn?: {} | undefined
              InaccessibleEncryptionDateTime?: {} | undefined
            }
          | undefined
        ArchivalSummary?:
          | {
              ArchivalDateTime?: {} | undefined
              ArchivalReason?: {} | undefined
              ArchivalBackupArn?: {} | undefined
            }
          | undefined
        TableClassSummary?:
          | { TableClass?: {} | undefined; LastUpdateDateTime?: {} | undefined }
          | undefined
        DeletionProtectionEnabled?: {} | undefined
      }
    | undefined
}
type InvalidRestoreTimeException = { [x: string]: unknown }
type ScanInput = {
  TableName: {}
  IndexName?: {} | undefined
  AttributesToGet?: {} | undefined
  Limit?: {} | undefined
  Select?: {} | undefined
  ScanFilter?: {} | undefined
  ConditionalOperator?: {} | undefined
  ExclusiveStartKey?: {} | undefined
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  TotalSegments?: {} | undefined
  Segment?: {} | undefined
  ProjectionExpression?: {} | undefined
  FilterExpression?: {} | undefined
  ExpressionAttributeNames?: {} | undefined
  ExpressionAttributeValues?: {} | undefined
  ConsistentRead?: {} | undefined
}
type ScanOutput = {
  Items?: {} | undefined
  Count?: {} | undefined
  ScannedCount?: {} | undefined
  LastEvaluatedKey?: {} | undefined
  ConsumedCapacity?:
    | {
        TableName?: {} | undefined
        CapacityUnits?: {} | undefined
        ReadCapacityUnits?: {} | undefined
        WriteCapacityUnits?: {} | undefined
        Table?:
          | {
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
              CapacityUnits?: {} | undefined
            }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
      }
    | undefined
}
type TagResourceInput = { ResourceArn: {}; Tags: {} }
type TransactGetItemsInput = { TransactItems: {}; ReturnConsumedCapacity?: {} | undefined }
type TransactGetItemsOutput = { ConsumedCapacity?: {} | undefined; Responses?: {} | undefined }
type TransactWriteItemsInput = {
  TransactItems: {}
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  ReturnItemCollectionMetrics?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type TransactWriteItemsOutput = {
  ConsumedCapacity?: {} | undefined
  ItemCollectionMetrics?: {} | undefined
}
type UntagResourceInput = { ResourceArn: {}; TagKeys: {} }
type UpdateContinuousBackupsInput = {
  TableName: {}
  PointInTimeRecoverySpecification: { PointInTimeRecoveryEnabled: {} }
}
type UpdateContinuousBackupsOutput = {
  ContinuousBackupsDescription?:
    | {
        ContinuousBackupsStatus: {}
        PointInTimeRecoveryDescription?:
          | {
              PointInTimeRecoveryStatus?: {} | undefined
              EarliestRestorableDateTime?: {} | undefined
              LatestRestorableDateTime?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateContributorInsightsInput = {
  TableName: {}
  IndexName?: {} | undefined
  ContributorInsightsAction: {}
}
type UpdateContributorInsightsOutput = {
  TableName?: {} | undefined
  IndexName?: {} | undefined
  ContributorInsightsStatus?: {} | undefined
}
type UpdateGlobalTableInput = { GlobalTableName: {}; ReplicaUpdates: {} }
type UpdateGlobalTableOutput = {
  GlobalTableDescription?:
    | {
        ReplicationGroup?: {} | undefined
        GlobalTableArn?: {} | undefined
        CreationDateTime?: {} | undefined
        GlobalTableStatus?: {} | undefined
        GlobalTableName?: {} | undefined
      }
    | undefined
}
type ReplicaAlreadyExistsException = { [x: string]: unknown }
type ReplicaNotFoundException = { [x: string]: unknown }
type UpdateGlobalTableSettingsInput = {
  GlobalTableName: {}
  GlobalTableBillingMode?: {} | undefined
  GlobalTableProvisionedWriteCapacityUnits?: {} | undefined
  GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?:
    | {
        MinimumUnits?: {} | undefined
        MaximumUnits?: {} | undefined
        AutoScalingDisabled?: {} | undefined
        AutoScalingRoleArn?: {} | undefined
        ScalingPolicyUpdate?:
          | {
              PolicyName?: {} | undefined
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn?: {} | undefined
                ScaleInCooldown?: {} | undefined
                ScaleOutCooldown?: {} | undefined
                TargetValue: {}
              }
            }
          | undefined
      }
    | undefined
  GlobalTableGlobalSecondaryIndexSettingsUpdate?: {} | undefined
  ReplicaSettingsUpdate?: {} | undefined
}
type UpdateGlobalTableSettingsOutput = {
  GlobalTableName?: {} | undefined
  ReplicaSettings?: {} | undefined
}
type IndexNotFoundException = { [x: string]: unknown }
type UpdateItemInput = {
  TableName: {}
  Key: {}
  AttributeUpdates?: {} | undefined
  Expected?: {} | undefined
  ConditionalOperator?: {} | undefined
  ReturnValues?: {} | undefined
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined
  ReturnItemCollectionMetrics?: {} | undefined
  UpdateExpression?: {} | undefined
  ConditionExpression?: {} | undefined
  ExpressionAttributeNames?: {} | undefined
  ExpressionAttributeValues?: {} | undefined
  ReturnValuesOnConditionCheckFailure?: {} | undefined
}
type UpdateItemOutput = {
  Attributes?: {} | undefined
  ConsumedCapacity?:
    | {
        TableName?: {} | undefined
        CapacityUnits?: {} | undefined
        ReadCapacityUnits?: {} | undefined
        WriteCapacityUnits?: {} | undefined
        Table?:
          | {
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
              CapacityUnits?: {} | undefined
            }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
      }
    | undefined
  ItemCollectionMetrics?:
    | { ItemCollectionKey?: {} | undefined; SizeEstimateRangeGB?: {} | undefined }
    | undefined
}
type UpdateTableInput = {
  AttributeDefinitions?: {} | undefined
  TableName: {}
  BillingMode?: {} | undefined
  ProvisionedThroughput?: { ReadCapacityUnits: {}; WriteCapacityUnits: {} } | undefined
  GlobalSecondaryIndexUpdates?: {} | undefined
  StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
  SSESpecification?:
    | { Enabled?: {} | undefined; SSEType?: {} | undefined; KMSMasterKeyId?: {} | undefined }
    | undefined
  ReplicaUpdates?: {} | undefined
  TableClass?: {} | undefined
  DeletionProtectionEnabled?: {} | undefined
}
type UpdateTableOutput = {
  TableDescription?:
    | {
        AttributeDefinitions?: {} | undefined
        TableName?: {} | undefined
        KeySchema?: {} | undefined
        TableStatus?: {} | undefined
        CreationDateTime?: {} | undefined
        ProvisionedThroughput?:
          | {
              LastIncreaseDateTime?: {} | undefined
              LastDecreaseDateTime?: {} | undefined
              NumberOfDecreasesToday?: {} | undefined
              ReadCapacityUnits?: {} | undefined
              WriteCapacityUnits?: {} | undefined
            }
          | undefined
        TableSizeBytes?: {} | undefined
        ItemCount?: {} | undefined
        TableArn?: {} | undefined
        TableId?: {} | undefined
        BillingModeSummary?:
          | { BillingMode?: {} | undefined; LastUpdateToPayPerRequestDateTime?: {} | undefined }
          | undefined
        LocalSecondaryIndexes?: {} | undefined
        GlobalSecondaryIndexes?: {} | undefined
        StreamSpecification?: { StreamEnabled: {}; StreamViewType?: {} | undefined } | undefined
        LatestStreamLabel?: {} | undefined
        LatestStreamArn?: {} | undefined
        GlobalTableVersion?: {} | undefined
        Replicas?: {} | undefined
        RestoreSummary?:
          | {
              SourceBackupArn?: {} | undefined
              SourceTableArn?: {} | undefined
              RestoreDateTime: {}
              RestoreInProgress: {}
            }
          | undefined
        SSEDescription?:
          | {
              Status?: {} | undefined
              SSEType?: {} | undefined
              KMSMasterKeyArn?: {} | undefined
              InaccessibleEncryptionDateTime?: {} | undefined
            }
          | undefined
        ArchivalSummary?:
          | {
              ArchivalDateTime?: {} | undefined
              ArchivalReason?: {} | undefined
              ArchivalBackupArn?: {} | undefined
            }
          | undefined
        TableClassSummary?:
          | { TableClass?: {} | undefined; LastUpdateDateTime?: {} | undefined }
          | undefined
        DeletionProtectionEnabled?: {} | undefined
      }
    | undefined
}
type AutoScalingSettingsUpdate = {
  MinimumUnits?: {} | undefined
  MaximumUnits?: {} | undefined
  AutoScalingDisabled?: {} | undefined
  AutoScalingRoleArn?: {} | undefined
  ScalingPolicyUpdate?:
    | {
        PolicyName?: {} | undefined
        TargetTrackingScalingPolicyConfiguration: {
          DisableScaleIn?: {} | undefined
          ScaleInCooldown?: {} | undefined
          ScaleOutCooldown?: {} | undefined
          TargetValue: {}
        }
      }
    | undefined
}
type UpdateTableReplicaAutoScalingInput = {
  GlobalSecondaryIndexUpdates?: {} | undefined
  TableName: {}
  ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate | undefined
  ReplicaUpdates?: {} | undefined
}
type UpdateTableReplicaAutoScalingOutput = {
  TableAutoScalingDescription?:
    | { TableName?: {} | undefined; TableStatus?: {} | undefined; Replicas?: {} | undefined }
    | undefined
}
type UpdateTimeToLiveInput = {
  TableName: {}
  TimeToLiveSpecification: { Enabled: {}; AttributeName: {} }
}
type UpdateTimeToLiveOutput = {
  TimeToLiveSpecification?: { Enabled: {}; AttributeName: {} } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchExecuteStatementInput }
            output: BatchExecuteStatementOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchExecuteStatementInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchExecuteStatementInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.BatchGetItem': {
      $post:
        | {
            input: { query: { RequestItems?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchGetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetItemInput }
            output: BatchGetItemOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { RequestItems?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchGetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetItemInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { RequestItems?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchGetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetItemInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { RequestItems?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchGetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetItemInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { RequestItems?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchGetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetItemInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.BatchWriteItem': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchWriteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchWriteItemInput }
            output: BatchWriteItemOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchWriteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchWriteItemInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchWriteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchWriteItemInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchWriteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchWriteItemInput }
            output: ItemCollectionSizeLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchWriteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchWriteItemInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.BatchWriteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchWriteItemInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.CreateBackup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupInput }
            output: CreateBackupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupInput }
            output: TableNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupInput }
            output: TableInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupInput }
            output: ContinuousBackupsUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupInput }
            output: BackupInUseException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalTableInput }
            output: CreateGlobalTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalTableInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalTableInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalTableInput }
            output: GlobalTableAlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalTableInput }
            output: TableNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.CreateTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTableInput }
            output: CreateTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTableInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTableInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.CreateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTableInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DeleteBackup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupInput }
            output: DeleteBackupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupInput }
            output: BackupNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupInput }
            output: BackupInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DeleteItem': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: DeleteItemOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: ConditionalCheckFailedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: ItemCollectionSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: TransactionConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteItemInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DeleteTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTableInput }
            output: DeleteTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTableInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTableInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTableInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DeleteTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTableInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeBackup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBackupInput }
            output: DescribeBackupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBackupInput }
            output: BackupNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBackupInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeContinuousBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContinuousBackupsInput }
            output: DescribeContinuousBackupsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeContinuousBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContinuousBackupsInput }
            output: TableNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeContinuousBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContinuousBackupsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContributorInsightsInput }
            output: DescribeContributorInsightsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContributorInsightsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContributorInsightsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DynamoDB_20120810.DescribeEndpoints'
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
    '/#X-Amz-Target=DynamoDB_20120810.DescribeExport': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeExport'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExportInput }
            output: DescribeExportOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeExport'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExportInput }
            output: ExportNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeExport'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExportInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeExport'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeExportInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGlobalTableInput }
            output: DescribeGlobalTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGlobalTableInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGlobalTableInput }
            output: GlobalTableNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGlobalTableSettingsInput }
            output: DescribeGlobalTableSettingsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGlobalTableSettingsInput }
            output: GlobalTableNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGlobalTableSettingsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeImport': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeImport'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeImportInput }
            output: DescribeImportOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeImport'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeImportInput }
            output: ImportNotFoundException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKinesisStreamingDestinationInput }
            output: DescribeKinesisStreamingDestinationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKinesisStreamingDestinationInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeKinesisStreamingDestinationInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeLimits': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeLimits'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLimitsInput }
            output: DescribeLimitsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeLimits'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLimitsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableInput }
            output: DescribeTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableReplicaAutoScalingInput }
            output: DescribeTableReplicaAutoScalingOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableReplicaAutoScalingInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableReplicaAutoScalingInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTimeToLiveInput }
            output: DescribeTimeToLiveOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTimeToLiveInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DescribeTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTimeToLiveInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DisableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: KinesisStreamingDestinationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DisableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DisableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DisableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.DisableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.EnableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: KinesisStreamingDestinationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.EnableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.EnableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.EnableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.EnableKinesisStreamingDestination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: KinesisStreamingDestinationInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ExecuteStatement': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: ExecuteStatementOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: ConditionalCheckFailedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: ItemCollectionSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: TransactionConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteStatement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteStatementInput }
            output: DuplicateItemException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: ExecuteTransactionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: TransactionInProgressException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExecuteTransaction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteTransactionInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExportTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportTableToPointInTimeInput }
            output: ExportTableToPointInTimeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExportTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportTableToPointInTimeInput }
            output: TableNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExportTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportTableToPointInTimeInput }
            output: PointInTimeRecoveryUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExportTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportTableToPointInTimeInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExportTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportTableToPointInTimeInput }
            output: InvalidExportTimeException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExportTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportTableToPointInTimeInput }
            output: ExportConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ExportTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportTableToPointInTimeInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.GetItem': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.GetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetItemInput }
            output: GetItemOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.GetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetItemInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.GetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetItemInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.GetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetItemInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.GetItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetItemInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ImportTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ImportTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportTableInput }
            output: ImportTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ImportTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportTableInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ImportTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportTableInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ImportTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportTableInput }
            output: ImportConflictException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ListBackups': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListBackupsInput }
            output: ListBackupsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListBackupsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ListContributorInsights': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContributorInsightsInput }
            output: ListContributorInsightsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContributorInsightsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContributorInsightsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ListExports': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListExports'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExportsInput }
            output: ListExportsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListExports'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExportsInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListExports'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListExportsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ListGlobalTables': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListGlobalTables'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGlobalTablesInput }
            output: ListGlobalTablesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListGlobalTables'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGlobalTablesInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ListImports': {
      $post:
        | {
            input: { query: { PageSize?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListImports'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListImportsInput }
            output: ListImportsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageSize?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListImports'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListImportsInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ListTables': {
      $post:
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartTableName?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListTables'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTablesInput }
            output: ListTablesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartTableName?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListTables'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTablesInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListTagsOfResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsOfResourceInput }
            output: ListTagsOfResourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListTagsOfResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsOfResourceInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.ListTagsOfResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsOfResourceInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.PutItem': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: PutItemOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: ConditionalCheckFailedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: ItemCollectionSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: TransactionConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.PutItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutItemInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.Query': {
      $post:
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Query'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: QueryInput }
            output: QueryOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Query'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: QueryInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Query'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: QueryInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Query'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: QueryInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Query'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: QueryInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableFromBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableFromBackupInput }
            output: RestoreTableFromBackupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableFromBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableFromBackupInput }
            output: TableAlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableFromBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableFromBackupInput }
            output: TableInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableFromBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableFromBackupInput }
            output: BackupNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableFromBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableFromBackupInput }
            output: BackupInUseException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableFromBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableFromBackupInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableFromBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableFromBackupInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: RestoreTableToPointInTimeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: TableAlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: TableNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: TableInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: InvalidRestoreTimeException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: PointInTimeRecoveryUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.RestoreTableToPointInTime'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreTableToPointInTimeInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.Scan': {
      $post:
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Scan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScanInput }
            output: ScanOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Scan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScanInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Scan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScanInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Scan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScanInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { Limit?: string | undefined; ExclusiveStartKey?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.Scan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScanInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.TransactGetItems': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactGetItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactGetItemsInput }
            output: TransactGetItemsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactGetItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactGetItemsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactGetItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactGetItemsInput }
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactGetItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactGetItemsInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactGetItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactGetItemsInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactGetItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactGetItemsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.TransactWriteItems': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: TransactWriteItemsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: TransactionCanceledException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: TransactionInProgressException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.TransactWriteItems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TransactWriteItemsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UntagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateContinuousBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContinuousBackupsInput }
            output: UpdateContinuousBackupsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateContinuousBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContinuousBackupsInput }
            output: TableNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateContinuousBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContinuousBackupsInput }
            output: ContinuousBackupsUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateContinuousBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContinuousBackupsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContributorInsightsInput }
            output: UpdateContributorInsightsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContributorInsightsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateContributorInsights'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContributorInsightsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableInput }
            output: UpdateGlobalTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableInput }
            output: GlobalTableNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableInput }
            output: ReplicaAlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableInput }
            output: ReplicaNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableInput }
            output: TableNotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableSettingsInput }
            output: UpdateGlobalTableSettingsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableSettingsInput }
            output: GlobalTableNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableSettingsInput }
            output: ReplicaNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableSettingsInput }
            output: IndexNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableSettingsInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableSettingsInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateGlobalTableSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGlobalTableSettingsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateItem': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: UpdateItemOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: ConditionalCheckFailedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: ProvisionedThroughputExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: ItemCollectionSizeLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: TransactionConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateItem'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateItemInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTable': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableInput }
            output: UpdateTableOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTable'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableReplicaAutoScalingInput }
            output: UpdateTableReplicaAutoScalingOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableReplicaAutoScalingInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableReplicaAutoScalingInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableReplicaAutoScalingInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTableReplicaAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTableReplicaAutoScalingInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTimeToLiveInput }
            output: UpdateTimeToLiveOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTimeToLiveInput }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTimeToLiveInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTimeToLiveInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDB_20120810.UpdateTimeToLive'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTimeToLiveInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
