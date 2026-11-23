type AddTagsToResourceMessage = { ResourceArn: {}; Tags: {} }
type AddTagsToResourceResponse = { [x: string]: unknown }
type ResourceNotFoundFault = { [x: string]: unknown }
type ApplyPendingMaintenanceActionMessage = {
  ReplicationInstanceArn: {}
  ApplyAction: {}
  OptInType: {}
}
type ApplyPendingMaintenanceActionResponse = {
  ResourcePendingMaintenanceActions?:
    | { ResourceIdentifier?: {} | undefined; PendingMaintenanceActionDetails?: {} | undefined }
    | undefined
}
type BatchStartRecommendationsRequest = { Data?: {} | undefined }
type BatchStartRecommendationsResponse = { ErrorEntries?: {} | undefined }
type InvalidResourceStateFault = { [x: string]: unknown }
type AccessDeniedFault = { [x: string]: unknown }
type CancelReplicationTaskAssessmentRunMessage = { ReplicationTaskAssessmentRunArn: {} }
type CancelReplicationTaskAssessmentRunResponse = {
  ReplicationTaskAssessmentRun?:
    | {
        ReplicationTaskAssessmentRunArn?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        Status?: {} | undefined
        ReplicationTaskAssessmentRunCreationDate?: {} | undefined
        AssessmentProgress?:
          | {
              IndividualAssessmentCount?: {} | undefined
              IndividualAssessmentCompletedCount?: {} | undefined
            }
          | undefined
        LastFailureMessage?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        ResultLocationBucket?: {} | undefined
        ResultLocationFolder?: {} | undefined
        ResultEncryptionMode?: {} | undefined
        ResultKmsKeyArn?: {} | undefined
        AssessmentRunName?: {} | undefined
      }
    | undefined
}
type RedshiftSettings = {
  AcceptAnyDate?: {} | undefined
  AfterConnectScript?: {} | undefined
  BucketFolder?: {} | undefined
  BucketName?: {} | undefined
  CaseSensitiveNames?: {} | undefined
  CompUpdate?: {} | undefined
  ConnectionTimeout?: {} | undefined
  DatabaseName?: {} | undefined
  DateFormat?: {} | undefined
  EmptyAsNull?: {} | undefined
  EncryptionMode?: {} | undefined
  ExplicitIds?: {} | undefined
  FileTransferUploadStreams?: {} | undefined
  LoadTimeout?: {} | undefined
  MaxFileSize?: {} | undefined
  Password?: {} | undefined
  Port?: {} | undefined
  RemoveQuotes?: {} | undefined
  ReplaceInvalidChars?: {} | undefined
  ReplaceChars?: {} | undefined
  ServerName?: {} | undefined
  ServiceAccessRoleArn?: {} | undefined
  ServerSideEncryptionKmsKeyId?: {} | undefined
  TimeFormat?: {} | undefined
  TrimBlanks?: {} | undefined
  TruncateColumns?: {} | undefined
  Username?: {} | undefined
  WriteBufferSize?: {} | undefined
  SecretsManagerAccessRoleArn?: {} | undefined
  SecretsManagerSecretId?: {} | undefined
  MapBooleanAsBoolean?: {} | undefined
}
type DocDbSettings = {
  Username?: {} | undefined
  Password?: {} | undefined
  ServerName?: {} | undefined
  Port?: {} | undefined
  DatabaseName?: {} | undefined
  NestingLevel?: {} | undefined
  ExtractDocId?: {} | undefined
  DocsToInvestigate?: {} | undefined
  KmsKeyId?: {} | undefined
  SecretsManagerAccessRoleArn?: {} | undefined
  SecretsManagerSecretId?: {} | undefined
}
type CreateEndpointMessage = {
  EndpointIdentifier: {}
  EndpointType: {}
  EngineName: {}
  Username?: {} | undefined
  Password?: {} | undefined
  ServerName?: {} | undefined
  Port?: {} | undefined
  DatabaseName?: {} | undefined
  ExtraConnectionAttributes?: {} | undefined
  KmsKeyId?: {} | undefined
  Tags?: {} | undefined
  CertificateArn?: {} | undefined
  SslMode?: {} | undefined
  ServiceAccessRoleArn?: {} | undefined
  ExternalTableDefinition?: {} | undefined
  DynamoDbSettings?: { ServiceAccessRoleArn: {} } | undefined
  S3Settings?:
    | {
        ServiceAccessRoleArn?: {} | undefined
        ExternalTableDefinition?: {} | undefined
        CsvRowDelimiter?: {} | undefined
        CsvDelimiter?: {} | undefined
        BucketFolder?: {} | undefined
        BucketName?: {} | undefined
        CompressionType?: {} | undefined
        EncryptionMode?: {} | undefined
        ServerSideEncryptionKmsKeyId?: {} | undefined
        DataFormat?: {} | undefined
        EncodingType?: {} | undefined
        DictPageSizeLimit?: {} | undefined
        RowGroupLength?: {} | undefined
        DataPageSize?: {} | undefined
        ParquetVersion?: {} | undefined
        EnableStatistics?: {} | undefined
        IncludeOpForFullLoad?: {} | undefined
        CdcInsertsOnly?: {} | undefined
        TimestampColumnName?: {} | undefined
        ParquetTimestampInMillisecond?: {} | undefined
        CdcInsertsAndUpdates?: {} | undefined
        DatePartitionEnabled?: {} | undefined
        DatePartitionSequence?: {} | undefined
        DatePartitionDelimiter?: {} | undefined
        UseCsvNoSupValue?: {} | undefined
        CsvNoSupValue?: {} | undefined
        PreserveTransactions?: {} | undefined
        CdcPath?: {} | undefined
        UseTaskStartTimeForFullLoadTimestamp?: {} | undefined
        CannedAclForObjects?: {} | undefined
        AddColumnName?: {} | undefined
        CdcMaxBatchInterval?: {} | undefined
        CdcMinFileSize?: {} | undefined
        CsvNullValue?: {} | undefined
        IgnoreHeaderRows?: {} | undefined
        MaxFileSize?: {} | undefined
        Rfc4180?: {} | undefined
        DatePartitionTimezone?: {} | undefined
        AddTrailingPaddingCharacter?: {} | undefined
        ExpectedBucketOwner?: {} | undefined
        GlueCatalogGeneration?: {} | undefined
      }
    | undefined
  DmsTransferSettings?:
    | { ServiceAccessRoleArn?: {} | undefined; BucketName?: {} | undefined }
    | undefined
  MongoDbSettings?:
    | {
        Username?: {} | undefined
        Password?: {} | undefined
        ServerName?: {} | undefined
        Port?: {} | undefined
        DatabaseName?: {} | undefined
        AuthType?: {} | undefined
        AuthMechanism?: {} | undefined
        NestingLevel?: {} | undefined
        ExtractDocId?: {} | undefined
        DocsToInvestigate?: {} | undefined
        AuthSource?: {} | undefined
        KmsKeyId?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  KinesisSettings?:
    | {
        StreamArn?: {} | undefined
        MessageFormat?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        IncludeTransactionDetails?: {} | undefined
        IncludePartitionValue?: {} | undefined
        PartitionIncludeSchemaTable?: {} | undefined
        IncludeTableAlterOperations?: {} | undefined
        IncludeControlDetails?: {} | undefined
        IncludeNullAndEmpty?: {} | undefined
        NoHexPrefix?: {} | undefined
      }
    | undefined
  KafkaSettings?:
    | {
        Broker?: {} | undefined
        Topic?: {} | undefined
        MessageFormat?: {} | undefined
        IncludeTransactionDetails?: {} | undefined
        IncludePartitionValue?: {} | undefined
        PartitionIncludeSchemaTable?: {} | undefined
        IncludeTableAlterOperations?: {} | undefined
        IncludeControlDetails?: {} | undefined
        MessageMaxBytes?: {} | undefined
        IncludeNullAndEmpty?: {} | undefined
        SecurityProtocol?: {} | undefined
        SslClientCertificateArn?: {} | undefined
        SslClientKeyArn?: {} | undefined
        SslClientKeyPassword?: {} | undefined
        SslCaCertificateArn?: {} | undefined
        SaslUsername?: {} | undefined
        SaslPassword?: {} | undefined
        NoHexPrefix?: {} | undefined
        SaslMechanism?: {} | undefined
      }
    | undefined
  ElasticsearchSettings?:
    | {
        ServiceAccessRoleArn: {}
        EndpointUri: {}
        FullLoadErrorPercentage?: {} | undefined
        ErrorRetryDuration?: {} | undefined
        UseNewMappingType?: {} | undefined
      }
    | undefined
  NeptuneSettings?:
    | {
        ServiceAccessRoleArn?: {} | undefined
        S3BucketName: {}
        S3BucketFolder: {}
        ErrorRetryDuration?: {} | undefined
        MaxFileSize?: {} | undefined
        MaxRetryCount?: {} | undefined
        IamAuthEnabled?: {} | undefined
      }
    | undefined
  RedshiftSettings?: RedshiftSettings | undefined
  PostgreSQLSettings?:
    | {
        AfterConnectScript?: {} | undefined
        CaptureDdls?: {} | undefined
        MaxFileSize?: {} | undefined
        DatabaseName?: {} | undefined
        DdlArtifactsSchema?: {} | undefined
        ExecuteTimeout?: {} | undefined
        FailTasksOnLobTruncation?: {} | undefined
        HeartbeatEnable?: {} | undefined
        HeartbeatSchema?: {} | undefined
        HeartbeatFrequency?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        Username?: {} | undefined
        SlotName?: {} | undefined
        PluginName?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
        TrimSpaceInChar?: {} | undefined
        MapBooleanAsBoolean?: {} | undefined
      }
    | undefined
  MySQLSettings?:
    | {
        AfterConnectScript?: {} | undefined
        CleanSourceMetadataOnMismatch?: {} | undefined
        DatabaseName?: {} | undefined
        EventsPollInterval?: {} | undefined
        TargetDbType?: {} | undefined
        MaxFileSize?: {} | undefined
        ParallelLoadThreads?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        ServerTimezone?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  OracleSettings?:
    | {
        AddSupplementalLogging?: {} | undefined
        ArchivedLogDestId?: {} | undefined
        AdditionalArchivedLogDestId?: {} | undefined
        ExtraArchivedLogDestIds?: {} | undefined
        AllowSelectNestedTables?: {} | undefined
        ParallelAsmReadThreads?: {} | undefined
        ReadAheadBlocks?: {} | undefined
        AccessAlternateDirectly?: {} | undefined
        UseAlternateFolderForOnline?: {} | undefined
        OraclePathPrefix?: {} | undefined
        UsePathPrefix?: {} | undefined
        ReplacePathPrefix?: {} | undefined
        EnableHomogenousTablespace?: {} | undefined
        DirectPathNoLog?: {} | undefined
        ArchivedLogsOnly?: {} | undefined
        AsmPassword?: {} | undefined
        AsmServer?: {} | undefined
        AsmUser?: {} | undefined
        CharLengthSemantics?: {} | undefined
        DatabaseName?: {} | undefined
        DirectPathParallelLoad?: {} | undefined
        FailTasksOnLobTruncation?: {} | undefined
        NumberDatatypeScale?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ReadTableSpaceName?: {} | undefined
        RetryInterval?: {} | undefined
        SecurityDbEncryption?: {} | undefined
        SecurityDbEncryptionName?: {} | undefined
        ServerName?: {} | undefined
        SpatialDataOptionToGeoJsonFunctionName?: {} | undefined
        StandbyDelayTime?: {} | undefined
        Username?: {} | undefined
        UseBFile?: {} | undefined
        UseDirectPathFullLoad?: {} | undefined
        UseLogminerReader?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
        SecretsManagerOracleAsmAccessRoleArn?: {} | undefined
        SecretsManagerOracleAsmSecretId?: {} | undefined
        TrimSpaceInChar?: {} | undefined
        ConvertTimestampWithZoneToUTC?: {} | undefined
      }
    | undefined
  SybaseSettings?:
    | {
        DatabaseName?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  MicrosoftSQLServerSettings?:
    | {
        Port?: {} | undefined
        BcpPacketSize?: {} | undefined
        DatabaseName?: {} | undefined
        ControlTablesFileGroup?: {} | undefined
        Password?: {} | undefined
        QuerySingleAlwaysOnNode?: {} | undefined
        ReadBackupOnly?: {} | undefined
        SafeguardPolicy?: {} | undefined
        ServerName?: {} | undefined
        Username?: {} | undefined
        UseBcpFullLoad?: {} | undefined
        UseThirdPartyBackupDevice?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
        TrimSpaceInChar?: {} | undefined
        TlogAccessMode?: {} | undefined
        ForceLobLookup?: {} | undefined
      }
    | undefined
  IBMDb2Settings?:
    | {
        DatabaseName?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        SetDataCaptureChanges?: {} | undefined
        CurrentLsn?: {} | undefined
        MaxKBytesPerRead?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  ResourceIdentifier?: {} | undefined
  DocDbSettings?: DocDbSettings | undefined
  RedisSettings?:
    | {
        ServerName: {}
        Port: {}
        SslSecurityProtocol?: {} | undefined
        AuthType?: {} | undefined
        AuthUserName?: {} | undefined
        AuthPassword?: {} | undefined
        SslCaCertificateArn?: {} | undefined
      }
    | undefined
  GcpMySQLSettings?:
    | {
        AfterConnectScript?: {} | undefined
        CleanSourceMetadataOnMismatch?: {} | undefined
        DatabaseName?: {} | undefined
        EventsPollInterval?: {} | undefined
        TargetDbType?: {} | undefined
        MaxFileSize?: {} | undefined
        ParallelLoadThreads?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        ServerTimezone?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
}
type CreateEndpointResponse = {
  Endpoint?:
    | {
        EndpointIdentifier?: {} | undefined
        EndpointType?: {} | undefined
        EngineName?: {} | undefined
        EngineDisplayName?: {} | undefined
        Username?: {} | undefined
        ServerName?: {} | undefined
        Port?: {} | undefined
        DatabaseName?: {} | undefined
        ExtraConnectionAttributes?: {} | undefined
        Status?: {} | undefined
        KmsKeyId?: {} | undefined
        EndpointArn?: {} | undefined
        CertificateArn?: {} | undefined
        SslMode?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        ExternalTableDefinition?: {} | undefined
        ExternalId?: {} | undefined
        DynamoDbSettings?: { ServiceAccessRoleArn: {} } | undefined
        S3Settings?:
          | {
              ServiceAccessRoleArn?: {} | undefined
              ExternalTableDefinition?: {} | undefined
              CsvRowDelimiter?: {} | undefined
              CsvDelimiter?: {} | undefined
              BucketFolder?: {} | undefined
              BucketName?: {} | undefined
              CompressionType?: {} | undefined
              EncryptionMode?: {} | undefined
              ServerSideEncryptionKmsKeyId?: {} | undefined
              DataFormat?: {} | undefined
              EncodingType?: {} | undefined
              DictPageSizeLimit?: {} | undefined
              RowGroupLength?: {} | undefined
              DataPageSize?: {} | undefined
              ParquetVersion?: {} | undefined
              EnableStatistics?: {} | undefined
              IncludeOpForFullLoad?: {} | undefined
              CdcInsertsOnly?: {} | undefined
              TimestampColumnName?: {} | undefined
              ParquetTimestampInMillisecond?: {} | undefined
              CdcInsertsAndUpdates?: {} | undefined
              DatePartitionEnabled?: {} | undefined
              DatePartitionSequence?: {} | undefined
              DatePartitionDelimiter?: {} | undefined
              UseCsvNoSupValue?: {} | undefined
              CsvNoSupValue?: {} | undefined
              PreserveTransactions?: {} | undefined
              CdcPath?: {} | undefined
              UseTaskStartTimeForFullLoadTimestamp?: {} | undefined
              CannedAclForObjects?: {} | undefined
              AddColumnName?: {} | undefined
              CdcMaxBatchInterval?: {} | undefined
              CdcMinFileSize?: {} | undefined
              CsvNullValue?: {} | undefined
              IgnoreHeaderRows?: {} | undefined
              MaxFileSize?: {} | undefined
              Rfc4180?: {} | undefined
              DatePartitionTimezone?: {} | undefined
              AddTrailingPaddingCharacter?: {} | undefined
              ExpectedBucketOwner?: {} | undefined
              GlueCatalogGeneration?: {} | undefined
            }
          | undefined
        DmsTransferSettings?:
          | { ServiceAccessRoleArn?: {} | undefined; BucketName?: {} | undefined }
          | undefined
        MongoDbSettings?:
          | {
              Username?: {} | undefined
              Password?: {} | undefined
              ServerName?: {} | undefined
              Port?: {} | undefined
              DatabaseName?: {} | undefined
              AuthType?: {} | undefined
              AuthMechanism?: {} | undefined
              NestingLevel?: {} | undefined
              ExtractDocId?: {} | undefined
              DocsToInvestigate?: {} | undefined
              AuthSource?: {} | undefined
              KmsKeyId?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        KinesisSettings?:
          | {
              StreamArn?: {} | undefined
              MessageFormat?: {} | undefined
              ServiceAccessRoleArn?: {} | undefined
              IncludeTransactionDetails?: {} | undefined
              IncludePartitionValue?: {} | undefined
              PartitionIncludeSchemaTable?: {} | undefined
              IncludeTableAlterOperations?: {} | undefined
              IncludeControlDetails?: {} | undefined
              IncludeNullAndEmpty?: {} | undefined
              NoHexPrefix?: {} | undefined
            }
          | undefined
        KafkaSettings?:
          | {
              Broker?: {} | undefined
              Topic?: {} | undefined
              MessageFormat?: {} | undefined
              IncludeTransactionDetails?: {} | undefined
              IncludePartitionValue?: {} | undefined
              PartitionIncludeSchemaTable?: {} | undefined
              IncludeTableAlterOperations?: {} | undefined
              IncludeControlDetails?: {} | undefined
              MessageMaxBytes?: {} | undefined
              IncludeNullAndEmpty?: {} | undefined
              SecurityProtocol?: {} | undefined
              SslClientCertificateArn?: {} | undefined
              SslClientKeyArn?: {} | undefined
              SslClientKeyPassword?: {} | undefined
              SslCaCertificateArn?: {} | undefined
              SaslUsername?: {} | undefined
              SaslPassword?: {} | undefined
              NoHexPrefix?: {} | undefined
              SaslMechanism?: {} | undefined
            }
          | undefined
        ElasticsearchSettings?:
          | {
              ServiceAccessRoleArn: {}
              EndpointUri: {}
              FullLoadErrorPercentage?: {} | undefined
              ErrorRetryDuration?: {} | undefined
              UseNewMappingType?: {} | undefined
            }
          | undefined
        NeptuneSettings?:
          | {
              ServiceAccessRoleArn?: {} | undefined
              S3BucketName: {}
              S3BucketFolder: {}
              ErrorRetryDuration?: {} | undefined
              MaxFileSize?: {} | undefined
              MaxRetryCount?: {} | undefined
              IamAuthEnabled?: {} | undefined
            }
          | undefined
        RedshiftSettings?:
          | {
              AcceptAnyDate?: {} | undefined
              AfterConnectScript?: {} | undefined
              BucketFolder?: {} | undefined
              BucketName?: {} | undefined
              CaseSensitiveNames?: {} | undefined
              CompUpdate?: {} | undefined
              ConnectionTimeout?: {} | undefined
              DatabaseName?: {} | undefined
              DateFormat?: {} | undefined
              EmptyAsNull?: {} | undefined
              EncryptionMode?: {} | undefined
              ExplicitIds?: {} | undefined
              FileTransferUploadStreams?: {} | undefined
              LoadTimeout?: {} | undefined
              MaxFileSize?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              RemoveQuotes?: {} | undefined
              ReplaceInvalidChars?: {} | undefined
              ReplaceChars?: {} | undefined
              ServerName?: {} | undefined
              ServiceAccessRoleArn?: {} | undefined
              ServerSideEncryptionKmsKeyId?: {} | undefined
              TimeFormat?: {} | undefined
              TrimBlanks?: {} | undefined
              TruncateColumns?: {} | undefined
              Username?: {} | undefined
              WriteBufferSize?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              MapBooleanAsBoolean?: {} | undefined
            }
          | undefined
        PostgreSQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CaptureDdls?: {} | undefined
              MaxFileSize?: {} | undefined
              DatabaseName?: {} | undefined
              DdlArtifactsSchema?: {} | undefined
              ExecuteTimeout?: {} | undefined
              FailTasksOnLobTruncation?: {} | undefined
              HeartbeatEnable?: {} | undefined
              HeartbeatSchema?: {} | undefined
              HeartbeatFrequency?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              SlotName?: {} | undefined
              PluginName?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              MapBooleanAsBoolean?: {} | undefined
            }
          | undefined
        MySQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CleanSourceMetadataOnMismatch?: {} | undefined
              DatabaseName?: {} | undefined
              EventsPollInterval?: {} | undefined
              TargetDbType?: {} | undefined
              MaxFileSize?: {} | undefined
              ParallelLoadThreads?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              ServerTimezone?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        OracleSettings?:
          | {
              AddSupplementalLogging?: {} | undefined
              ArchivedLogDestId?: {} | undefined
              AdditionalArchivedLogDestId?: {} | undefined
              ExtraArchivedLogDestIds?: {} | undefined
              AllowSelectNestedTables?: {} | undefined
              ParallelAsmReadThreads?: {} | undefined
              ReadAheadBlocks?: {} | undefined
              AccessAlternateDirectly?: {} | undefined
              UseAlternateFolderForOnline?: {} | undefined
              OraclePathPrefix?: {} | undefined
              UsePathPrefix?: {} | undefined
              ReplacePathPrefix?: {} | undefined
              EnableHomogenousTablespace?: {} | undefined
              DirectPathNoLog?: {} | undefined
              ArchivedLogsOnly?: {} | undefined
              AsmPassword?: {} | undefined
              AsmServer?: {} | undefined
              AsmUser?: {} | undefined
              CharLengthSemantics?: {} | undefined
              DatabaseName?: {} | undefined
              DirectPathParallelLoad?: {} | undefined
              FailTasksOnLobTruncation?: {} | undefined
              NumberDatatypeScale?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ReadTableSpaceName?: {} | undefined
              RetryInterval?: {} | undefined
              SecurityDbEncryption?: {} | undefined
              SecurityDbEncryptionName?: {} | undefined
              ServerName?: {} | undefined
              SpatialDataOptionToGeoJsonFunctionName?: {} | undefined
              StandbyDelayTime?: {} | undefined
              Username?: {} | undefined
              UseBFile?: {} | undefined
              UseDirectPathFullLoad?: {} | undefined
              UseLogminerReader?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              SecretsManagerOracleAsmAccessRoleArn?: {} | undefined
              SecretsManagerOracleAsmSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              ConvertTimestampWithZoneToUTC?: {} | undefined
            }
          | undefined
        SybaseSettings?:
          | {
              DatabaseName?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        MicrosoftSQLServerSettings?:
          | {
              Port?: {} | undefined
              BcpPacketSize?: {} | undefined
              DatabaseName?: {} | undefined
              ControlTablesFileGroup?: {} | undefined
              Password?: {} | undefined
              QuerySingleAlwaysOnNode?: {} | undefined
              ReadBackupOnly?: {} | undefined
              SafeguardPolicy?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              UseBcpFullLoad?: {} | undefined
              UseThirdPartyBackupDevice?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              TlogAccessMode?: {} | undefined
              ForceLobLookup?: {} | undefined
            }
          | undefined
        IBMDb2Settings?:
          | {
              DatabaseName?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              SetDataCaptureChanges?: {} | undefined
              CurrentLsn?: {} | undefined
              MaxKBytesPerRead?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        DocDbSettings?: DocDbSettings | undefined
        RedisSettings?:
          | {
              ServerName: {}
              Port: {}
              SslSecurityProtocol?: {} | undefined
              AuthType?: {} | undefined
              AuthUserName?: {} | undefined
              AuthPassword?: {} | undefined
              SslCaCertificateArn?: {} | undefined
            }
          | undefined
        GcpMySQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CleanSourceMetadataOnMismatch?: {} | undefined
              DatabaseName?: {} | undefined
              EventsPollInterval?: {} | undefined
              TargetDbType?: {} | undefined
              MaxFileSize?: {} | undefined
              ParallelLoadThreads?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              ServerTimezone?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type KMSKeyNotAccessibleFault = { [x: string]: unknown }
type ResourceAlreadyExistsFault = { [x: string]: unknown }
type ResourceQuotaExceededFault = { [x: string]: unknown }
type S3AccessDeniedFault = { [x: string]: unknown }
type CreateEventSubscriptionMessage = {
  SubscriptionName: {}
  SnsTopicArn: {}
  SourceType?: {} | undefined
  EventCategories?: {} | undefined
  SourceIds?: {} | undefined
  Enabled?: {} | undefined
  Tags?: {} | undefined
}
type CreateEventSubscriptionResponse = {
  EventSubscription?:
    | {
        CustomerAwsId?: {} | undefined
        CustSubscriptionId?: {} | undefined
        SnsTopicArn?: {} | undefined
        Status?: {} | undefined
        SubscriptionCreationTime?: {} | undefined
        SourceType?: {} | undefined
        SourceIdsList?: {} | undefined
        EventCategoriesList?: {} | undefined
        Enabled?: {} | undefined
      }
    | undefined
}
type SNSInvalidTopicFault = { [x: string]: unknown }
type SNSNoAuthorizationFault = { [x: string]: unknown }
type KMSAccessDeniedFault = { [x: string]: unknown }
type KMSDisabledFault = { [x: string]: unknown }
type KMSInvalidStateFault = { [x: string]: unknown }
type KMSNotFoundFault = { [x: string]: unknown }
type KMSThrottlingFault = { [x: string]: unknown }
type CreateFleetAdvisorCollectorRequest = {
  CollectorName: {}
  Description?: {} | undefined
  ServiceAccessRoleArn: {}
  S3BucketName: {}
}
type CreateFleetAdvisorCollectorResponse = {
  CollectorReferencedId?: {} | undefined
  CollectorName?: {} | undefined
  Description?: {} | undefined
  ServiceAccessRoleArn?: {} | undefined
  S3BucketName?: {} | undefined
}
type S3ResourceNotFoundFault = { [x: string]: unknown }
type CreateReplicationInstanceMessage = {
  ReplicationInstanceIdentifier: {}
  AllocatedStorage?: {} | undefined
  ReplicationInstanceClass: {}
  VpcSecurityGroupIds?: {} | undefined
  AvailabilityZone?: {} | undefined
  ReplicationSubnetGroupIdentifier?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  MultiAZ?: {} | undefined
  EngineVersion?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
  PubliclyAccessible?: {} | undefined
  DnsNameServers?: {} | undefined
  ResourceIdentifier?: {} | undefined
  NetworkType?: {} | undefined
}
type CreateReplicationInstanceResponse = {
  ReplicationInstance?:
    | {
        ReplicationInstanceIdentifier?: {} | undefined
        ReplicationInstanceClass?: {} | undefined
        ReplicationInstanceStatus?: {} | undefined
        AllocatedStorage?: {} | undefined
        InstanceCreateTime?: {} | undefined
        VpcSecurityGroups?: {} | undefined
        AvailabilityZone?: {} | undefined
        ReplicationSubnetGroup?:
          | {
              ReplicationSubnetGroupIdentifier?: {} | undefined
              ReplicationSubnetGroupDescription?: {} | undefined
              VpcId?: {} | undefined
              SubnetGroupStatus?: {} | undefined
              Subnets?: {} | undefined
              SupportedNetworkTypes?: {} | undefined
            }
          | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PendingModifiedValues?:
          | {
              ReplicationInstanceClass?: {} | undefined
              AllocatedStorage?: {} | undefined
              MultiAZ?: {} | undefined
              EngineVersion?: {} | undefined
              NetworkType?: {} | undefined
            }
          | undefined
        MultiAZ?: {} | undefined
        EngineVersion?: {} | undefined
        AutoMinorVersionUpgrade?: {} | undefined
        KmsKeyId?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        ReplicationInstancePublicIpAddress?: {} | undefined
        ReplicationInstancePrivateIpAddress?: {} | undefined
        ReplicationInstancePublicIpAddresses?: {} | undefined
        ReplicationInstancePrivateIpAddresses?: {} | undefined
        ReplicationInstanceIpv6Addresses?: {} | undefined
        PubliclyAccessible?: {} | undefined
        SecondaryAvailabilityZone?: {} | undefined
        FreeUntil?: {} | undefined
        DnsNameServers?: {} | undefined
        NetworkType?: {} | undefined
      }
    | undefined
}
type InsufficientResourceCapacityFault = { [x: string]: unknown }
type StorageQuotaExceededFault = { [x: string]: unknown }
type ReplicationSubnetGroupDoesNotCoverEnoughAZs = { [x: string]: unknown }
type InvalidSubnet = { [x: string]: unknown }
type CreateReplicationSubnetGroupMessage = {
  ReplicationSubnetGroupIdentifier: {}
  ReplicationSubnetGroupDescription: {}
  SubnetIds: {}
  Tags?: {} | undefined
}
type CreateReplicationSubnetGroupResponse = {
  ReplicationSubnetGroup?:
    | {
        ReplicationSubnetGroupIdentifier?: {} | undefined
        ReplicationSubnetGroupDescription?: {} | undefined
        VpcId?: {} | undefined
        SubnetGroupStatus?: {} | undefined
        Subnets?: {} | undefined
        SupportedNetworkTypes?: {} | undefined
      }
    | undefined
}
type CreateReplicationTaskMessage = {
  ReplicationTaskIdentifier: {}
  SourceEndpointArn: {}
  TargetEndpointArn: {}
  ReplicationInstanceArn: {}
  MigrationType: {}
  TableMappings: {}
  ReplicationTaskSettings?: {} | undefined
  CdcStartTime?: {} | undefined
  CdcStartPosition?: {} | undefined
  CdcStopPosition?: {} | undefined
  Tags?: {} | undefined
  TaskData?: {} | undefined
  ResourceIdentifier?: {} | undefined
}
type CreateReplicationTaskResponse = {
  ReplicationTask?:
    | {
        ReplicationTaskIdentifier?: {} | undefined
        SourceEndpointArn?: {} | undefined
        TargetEndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        MigrationType?: {} | undefined
        TableMappings?: {} | undefined
        ReplicationTaskSettings?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        StopReason?: {} | undefined
        ReplicationTaskCreationDate?: {} | undefined
        ReplicationTaskStartDate?: {} | undefined
        CdcStartPosition?: {} | undefined
        CdcStopPosition?: {} | undefined
        RecoveryCheckpoint?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        ReplicationTaskStats?:
          | {
              FullLoadProgressPercent?: {} | undefined
              ElapsedTimeMillis?: {} | undefined
              TablesLoaded?: {} | undefined
              TablesLoading?: {} | undefined
              TablesQueued?: {} | undefined
              TablesErrored?: {} | undefined
              FreshStartDate?: {} | undefined
              StartDate?: {} | undefined
              StopDate?: {} | undefined
              FullLoadStartDate?: {} | undefined
              FullLoadFinishDate?: {} | undefined
            }
          | undefined
        TaskData?: {} | undefined
        TargetReplicationInstanceArn?: {} | undefined
      }
    | undefined
}
type DeleteCertificateMessage = { CertificateArn: {} }
type DeleteCertificateResponse = {
  Certificate?:
    | {
        CertificateIdentifier?: {} | undefined
        CertificateCreationDate?: {} | undefined
        CertificatePem?: {} | undefined
        CertificateWallet?: {} | undefined
        CertificateArn?: {} | undefined
        CertificateOwner?: {} | undefined
        ValidFromDate?: {} | undefined
        ValidToDate?: {} | undefined
        SigningAlgorithm?: {} | undefined
        KeyLength?: {} | undefined
      }
    | undefined
}
type DeleteConnectionMessage = { EndpointArn: {}; ReplicationInstanceArn: {} }
type DeleteConnectionResponse = {
  Connection?:
    | {
        ReplicationInstanceArn?: {} | undefined
        EndpointArn?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        EndpointIdentifier?: {} | undefined
        ReplicationInstanceIdentifier?: {} | undefined
      }
    | undefined
}
type DeleteEndpointMessage = { EndpointArn: {} }
type DeleteEndpointResponse = {
  Endpoint?:
    | {
        EndpointIdentifier?: {} | undefined
        EndpointType?: {} | undefined
        EngineName?: {} | undefined
        EngineDisplayName?: {} | undefined
        Username?: {} | undefined
        ServerName?: {} | undefined
        Port?: {} | undefined
        DatabaseName?: {} | undefined
        ExtraConnectionAttributes?: {} | undefined
        Status?: {} | undefined
        KmsKeyId?: {} | undefined
        EndpointArn?: {} | undefined
        CertificateArn?: {} | undefined
        SslMode?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        ExternalTableDefinition?: {} | undefined
        ExternalId?: {} | undefined
        DynamoDbSettings?: { ServiceAccessRoleArn: {} } | undefined
        S3Settings?:
          | {
              ServiceAccessRoleArn?: {} | undefined
              ExternalTableDefinition?: {} | undefined
              CsvRowDelimiter?: {} | undefined
              CsvDelimiter?: {} | undefined
              BucketFolder?: {} | undefined
              BucketName?: {} | undefined
              CompressionType?: {} | undefined
              EncryptionMode?: {} | undefined
              ServerSideEncryptionKmsKeyId?: {} | undefined
              DataFormat?: {} | undefined
              EncodingType?: {} | undefined
              DictPageSizeLimit?: {} | undefined
              RowGroupLength?: {} | undefined
              DataPageSize?: {} | undefined
              ParquetVersion?: {} | undefined
              EnableStatistics?: {} | undefined
              IncludeOpForFullLoad?: {} | undefined
              CdcInsertsOnly?: {} | undefined
              TimestampColumnName?: {} | undefined
              ParquetTimestampInMillisecond?: {} | undefined
              CdcInsertsAndUpdates?: {} | undefined
              DatePartitionEnabled?: {} | undefined
              DatePartitionSequence?: {} | undefined
              DatePartitionDelimiter?: {} | undefined
              UseCsvNoSupValue?: {} | undefined
              CsvNoSupValue?: {} | undefined
              PreserveTransactions?: {} | undefined
              CdcPath?: {} | undefined
              UseTaskStartTimeForFullLoadTimestamp?: {} | undefined
              CannedAclForObjects?: {} | undefined
              AddColumnName?: {} | undefined
              CdcMaxBatchInterval?: {} | undefined
              CdcMinFileSize?: {} | undefined
              CsvNullValue?: {} | undefined
              IgnoreHeaderRows?: {} | undefined
              MaxFileSize?: {} | undefined
              Rfc4180?: {} | undefined
              DatePartitionTimezone?: {} | undefined
              AddTrailingPaddingCharacter?: {} | undefined
              ExpectedBucketOwner?: {} | undefined
              GlueCatalogGeneration?: {} | undefined
            }
          | undefined
        DmsTransferSettings?:
          | { ServiceAccessRoleArn?: {} | undefined; BucketName?: {} | undefined }
          | undefined
        MongoDbSettings?:
          | {
              Username?: {} | undefined
              Password?: {} | undefined
              ServerName?: {} | undefined
              Port?: {} | undefined
              DatabaseName?: {} | undefined
              AuthType?: {} | undefined
              AuthMechanism?: {} | undefined
              NestingLevel?: {} | undefined
              ExtractDocId?: {} | undefined
              DocsToInvestigate?: {} | undefined
              AuthSource?: {} | undefined
              KmsKeyId?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        KinesisSettings?:
          | {
              StreamArn?: {} | undefined
              MessageFormat?: {} | undefined
              ServiceAccessRoleArn?: {} | undefined
              IncludeTransactionDetails?: {} | undefined
              IncludePartitionValue?: {} | undefined
              PartitionIncludeSchemaTable?: {} | undefined
              IncludeTableAlterOperations?: {} | undefined
              IncludeControlDetails?: {} | undefined
              IncludeNullAndEmpty?: {} | undefined
              NoHexPrefix?: {} | undefined
            }
          | undefined
        KafkaSettings?:
          | {
              Broker?: {} | undefined
              Topic?: {} | undefined
              MessageFormat?: {} | undefined
              IncludeTransactionDetails?: {} | undefined
              IncludePartitionValue?: {} | undefined
              PartitionIncludeSchemaTable?: {} | undefined
              IncludeTableAlterOperations?: {} | undefined
              IncludeControlDetails?: {} | undefined
              MessageMaxBytes?: {} | undefined
              IncludeNullAndEmpty?: {} | undefined
              SecurityProtocol?: {} | undefined
              SslClientCertificateArn?: {} | undefined
              SslClientKeyArn?: {} | undefined
              SslClientKeyPassword?: {} | undefined
              SslCaCertificateArn?: {} | undefined
              SaslUsername?: {} | undefined
              SaslPassword?: {} | undefined
              NoHexPrefix?: {} | undefined
              SaslMechanism?: {} | undefined
            }
          | undefined
        ElasticsearchSettings?:
          | {
              ServiceAccessRoleArn: {}
              EndpointUri: {}
              FullLoadErrorPercentage?: {} | undefined
              ErrorRetryDuration?: {} | undefined
              UseNewMappingType?: {} | undefined
            }
          | undefined
        NeptuneSettings?:
          | {
              ServiceAccessRoleArn?: {} | undefined
              S3BucketName: {}
              S3BucketFolder: {}
              ErrorRetryDuration?: {} | undefined
              MaxFileSize?: {} | undefined
              MaxRetryCount?: {} | undefined
              IamAuthEnabled?: {} | undefined
            }
          | undefined
        RedshiftSettings?:
          | {
              AcceptAnyDate?: {} | undefined
              AfterConnectScript?: {} | undefined
              BucketFolder?: {} | undefined
              BucketName?: {} | undefined
              CaseSensitiveNames?: {} | undefined
              CompUpdate?: {} | undefined
              ConnectionTimeout?: {} | undefined
              DatabaseName?: {} | undefined
              DateFormat?: {} | undefined
              EmptyAsNull?: {} | undefined
              EncryptionMode?: {} | undefined
              ExplicitIds?: {} | undefined
              FileTransferUploadStreams?: {} | undefined
              LoadTimeout?: {} | undefined
              MaxFileSize?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              RemoveQuotes?: {} | undefined
              ReplaceInvalidChars?: {} | undefined
              ReplaceChars?: {} | undefined
              ServerName?: {} | undefined
              ServiceAccessRoleArn?: {} | undefined
              ServerSideEncryptionKmsKeyId?: {} | undefined
              TimeFormat?: {} | undefined
              TrimBlanks?: {} | undefined
              TruncateColumns?: {} | undefined
              Username?: {} | undefined
              WriteBufferSize?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              MapBooleanAsBoolean?: {} | undefined
            }
          | undefined
        PostgreSQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CaptureDdls?: {} | undefined
              MaxFileSize?: {} | undefined
              DatabaseName?: {} | undefined
              DdlArtifactsSchema?: {} | undefined
              ExecuteTimeout?: {} | undefined
              FailTasksOnLobTruncation?: {} | undefined
              HeartbeatEnable?: {} | undefined
              HeartbeatSchema?: {} | undefined
              HeartbeatFrequency?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              SlotName?: {} | undefined
              PluginName?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              MapBooleanAsBoolean?: {} | undefined
            }
          | undefined
        MySQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CleanSourceMetadataOnMismatch?: {} | undefined
              DatabaseName?: {} | undefined
              EventsPollInterval?: {} | undefined
              TargetDbType?: {} | undefined
              MaxFileSize?: {} | undefined
              ParallelLoadThreads?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              ServerTimezone?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        OracleSettings?:
          | {
              AddSupplementalLogging?: {} | undefined
              ArchivedLogDestId?: {} | undefined
              AdditionalArchivedLogDestId?: {} | undefined
              ExtraArchivedLogDestIds?: {} | undefined
              AllowSelectNestedTables?: {} | undefined
              ParallelAsmReadThreads?: {} | undefined
              ReadAheadBlocks?: {} | undefined
              AccessAlternateDirectly?: {} | undefined
              UseAlternateFolderForOnline?: {} | undefined
              OraclePathPrefix?: {} | undefined
              UsePathPrefix?: {} | undefined
              ReplacePathPrefix?: {} | undefined
              EnableHomogenousTablespace?: {} | undefined
              DirectPathNoLog?: {} | undefined
              ArchivedLogsOnly?: {} | undefined
              AsmPassword?: {} | undefined
              AsmServer?: {} | undefined
              AsmUser?: {} | undefined
              CharLengthSemantics?: {} | undefined
              DatabaseName?: {} | undefined
              DirectPathParallelLoad?: {} | undefined
              FailTasksOnLobTruncation?: {} | undefined
              NumberDatatypeScale?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ReadTableSpaceName?: {} | undefined
              RetryInterval?: {} | undefined
              SecurityDbEncryption?: {} | undefined
              SecurityDbEncryptionName?: {} | undefined
              ServerName?: {} | undefined
              SpatialDataOptionToGeoJsonFunctionName?: {} | undefined
              StandbyDelayTime?: {} | undefined
              Username?: {} | undefined
              UseBFile?: {} | undefined
              UseDirectPathFullLoad?: {} | undefined
              UseLogminerReader?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              SecretsManagerOracleAsmAccessRoleArn?: {} | undefined
              SecretsManagerOracleAsmSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              ConvertTimestampWithZoneToUTC?: {} | undefined
            }
          | undefined
        SybaseSettings?:
          | {
              DatabaseName?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        MicrosoftSQLServerSettings?:
          | {
              Port?: {} | undefined
              BcpPacketSize?: {} | undefined
              DatabaseName?: {} | undefined
              ControlTablesFileGroup?: {} | undefined
              Password?: {} | undefined
              QuerySingleAlwaysOnNode?: {} | undefined
              ReadBackupOnly?: {} | undefined
              SafeguardPolicy?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              UseBcpFullLoad?: {} | undefined
              UseThirdPartyBackupDevice?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              TlogAccessMode?: {} | undefined
              ForceLobLookup?: {} | undefined
            }
          | undefined
        IBMDb2Settings?:
          | {
              DatabaseName?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              SetDataCaptureChanges?: {} | undefined
              CurrentLsn?: {} | undefined
              MaxKBytesPerRead?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        DocDbSettings?: DocDbSettings | undefined
        RedisSettings?:
          | {
              ServerName: {}
              Port: {}
              SslSecurityProtocol?: {} | undefined
              AuthType?: {} | undefined
              AuthUserName?: {} | undefined
              AuthPassword?: {} | undefined
              SslCaCertificateArn?: {} | undefined
            }
          | undefined
        GcpMySQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CleanSourceMetadataOnMismatch?: {} | undefined
              DatabaseName?: {} | undefined
              EventsPollInterval?: {} | undefined
              TargetDbType?: {} | undefined
              MaxFileSize?: {} | undefined
              ParallelLoadThreads?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              ServerTimezone?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DeleteEventSubscriptionMessage = { SubscriptionName: {} }
type DeleteEventSubscriptionResponse = {
  EventSubscription?:
    | {
        CustomerAwsId?: {} | undefined
        CustSubscriptionId?: {} | undefined
        SnsTopicArn?: {} | undefined
        Status?: {} | undefined
        SubscriptionCreationTime?: {} | undefined
        SourceType?: {} | undefined
        SourceIdsList?: {} | undefined
        EventCategoriesList?: {} | undefined
        Enabled?: {} | undefined
      }
    | undefined
}
type DeleteCollectorRequest = { CollectorReferencedId: {} }
type CollectorNotFoundFault = { [x: string]: unknown }
type DeleteFleetAdvisorDatabasesRequest = { DatabaseIds: {} }
type DeleteFleetAdvisorDatabasesResponse = { DatabaseIds?: {} | undefined }
type InvalidOperationFault = { [x: string]: unknown }
type DeleteReplicationInstanceMessage = { ReplicationInstanceArn: {} }
type DeleteReplicationInstanceResponse = {
  ReplicationInstance?:
    | {
        ReplicationInstanceIdentifier?: {} | undefined
        ReplicationInstanceClass?: {} | undefined
        ReplicationInstanceStatus?: {} | undefined
        AllocatedStorage?: {} | undefined
        InstanceCreateTime?: {} | undefined
        VpcSecurityGroups?: {} | undefined
        AvailabilityZone?: {} | undefined
        ReplicationSubnetGroup?:
          | {
              ReplicationSubnetGroupIdentifier?: {} | undefined
              ReplicationSubnetGroupDescription?: {} | undefined
              VpcId?: {} | undefined
              SubnetGroupStatus?: {} | undefined
              Subnets?: {} | undefined
              SupportedNetworkTypes?: {} | undefined
            }
          | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PendingModifiedValues?:
          | {
              ReplicationInstanceClass?: {} | undefined
              AllocatedStorage?: {} | undefined
              MultiAZ?: {} | undefined
              EngineVersion?: {} | undefined
              NetworkType?: {} | undefined
            }
          | undefined
        MultiAZ?: {} | undefined
        EngineVersion?: {} | undefined
        AutoMinorVersionUpgrade?: {} | undefined
        KmsKeyId?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        ReplicationInstancePublicIpAddress?: {} | undefined
        ReplicationInstancePrivateIpAddress?: {} | undefined
        ReplicationInstancePublicIpAddresses?: {} | undefined
        ReplicationInstancePrivateIpAddresses?: {} | undefined
        ReplicationInstanceIpv6Addresses?: {} | undefined
        PubliclyAccessible?: {} | undefined
        SecondaryAvailabilityZone?: {} | undefined
        FreeUntil?: {} | undefined
        DnsNameServers?: {} | undefined
        NetworkType?: {} | undefined
      }
    | undefined
}
type DeleteReplicationSubnetGroupMessage = { ReplicationSubnetGroupIdentifier: {} }
type DeleteReplicationSubnetGroupResponse = { [x: string]: unknown }
type DeleteReplicationTaskMessage = { ReplicationTaskArn: {} }
type DeleteReplicationTaskResponse = {
  ReplicationTask?:
    | {
        ReplicationTaskIdentifier?: {} | undefined
        SourceEndpointArn?: {} | undefined
        TargetEndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        MigrationType?: {} | undefined
        TableMappings?: {} | undefined
        ReplicationTaskSettings?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        StopReason?: {} | undefined
        ReplicationTaskCreationDate?: {} | undefined
        ReplicationTaskStartDate?: {} | undefined
        CdcStartPosition?: {} | undefined
        CdcStopPosition?: {} | undefined
        RecoveryCheckpoint?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        ReplicationTaskStats?:
          | {
              FullLoadProgressPercent?: {} | undefined
              ElapsedTimeMillis?: {} | undefined
              TablesLoaded?: {} | undefined
              TablesLoading?: {} | undefined
              TablesQueued?: {} | undefined
              TablesErrored?: {} | undefined
              FreshStartDate?: {} | undefined
              StartDate?: {} | undefined
              StopDate?: {} | undefined
              FullLoadStartDate?: {} | undefined
              FullLoadFinishDate?: {} | undefined
            }
          | undefined
        TaskData?: {} | undefined
        TargetReplicationInstanceArn?: {} | undefined
      }
    | undefined
}
type DeleteReplicationTaskAssessmentRunMessage = { ReplicationTaskAssessmentRunArn: {} }
type DeleteReplicationTaskAssessmentRunResponse = {
  ReplicationTaskAssessmentRun?:
    | {
        ReplicationTaskAssessmentRunArn?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        Status?: {} | undefined
        ReplicationTaskAssessmentRunCreationDate?: {} | undefined
        AssessmentProgress?:
          | {
              IndividualAssessmentCount?: {} | undefined
              IndividualAssessmentCompletedCount?: {} | undefined
            }
          | undefined
        LastFailureMessage?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        ResultLocationBucket?: {} | undefined
        ResultLocationFolder?: {} | undefined
        ResultEncryptionMode?: {} | undefined
        ResultKmsKeyArn?: {} | undefined
        AssessmentRunName?: {} | undefined
      }
    | undefined
}
type DescribeAccountAttributesMessage = { [x: string]: unknown }
type DescribeAccountAttributesResponse = {
  AccountQuotas?: {} | undefined
  UniqueAccountIdentifier?: {} | undefined
}
type DescribeApplicableIndividualAssessmentsMessage = {
  ReplicationTaskArn?: {} | undefined
  ReplicationInstanceArn?: {} | undefined
  SourceEngineName?: {} | undefined
  TargetEngineName?: {} | undefined
  MigrationType?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeApplicableIndividualAssessmentsResponse = {
  IndividualAssessmentNames?: {} | undefined
  Marker?: {} | undefined
}
type DescribeCertificatesMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeCertificatesResponse = { Marker?: {} | undefined; Certificates?: {} | undefined }
type DescribeConnectionsMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeConnectionsResponse = { Marker?: {} | undefined; Connections?: {} | undefined }
type DescribeEndpointSettingsMessage = {
  EngineName: {}
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeEndpointSettingsResponse = {
  Marker?: {} | undefined
  EndpointSettings?: {} | undefined
}
type DescribeEndpointTypesMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeEndpointTypesResponse = {
  Marker?: {} | undefined
  SupportedEndpointTypes?: {} | undefined
}
type DescribeEndpointsMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeEndpointsResponse = { Marker?: {} | undefined; Endpoints?: {} | undefined }
type DescribeEventCategoriesMessage = { SourceType?: {} | undefined; Filters?: {} | undefined }
type DescribeEventCategoriesResponse = { EventCategoryGroupList?: {} | undefined }
type DescribeEventSubscriptionsMessage = {
  SubscriptionName?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeEventSubscriptionsResponse = {
  Marker?: {} | undefined
  EventSubscriptionsList?: {} | undefined
}
type DescribeEventsMessage = {
  SourceIdentifier?: {} | undefined
  SourceType?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Duration?: {} | undefined
  EventCategories?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeEventsResponse = { Marker?: {} | undefined; Events?: {} | undefined }
type DescribeFleetAdvisorCollectorsRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorCollectorsResponse = {
  Collectors?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorDatabasesRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorDatabasesResponse = {
  Databases?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorLsaAnalysisRequest = {
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorLsaAnalysisResponse = {
  Analysis?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorSchemaObjectSummaryRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorSchemaObjectSummaryResponse = {
  FleetAdvisorSchemaObjects?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorSchemasRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAdvisorSchemasResponse = {
  FleetAdvisorSchemas?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOrderableReplicationInstancesMessage = {
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeOrderableReplicationInstancesResponse = {
  OrderableReplicationInstances?: {} | undefined
  Marker?: {} | undefined
}
type DescribePendingMaintenanceActionsMessage = {
  ReplicationInstanceArn?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribePendingMaintenanceActionsResponse = {
  PendingMaintenanceActions?: {} | undefined
  Marker?: {} | undefined
}
type DescribeRecommendationLimitationsRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRecommendationLimitationsResponse = {
  NextToken?: {} | undefined
  Limitations?: {} | undefined
}
type DescribeRecommendationsRequest = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRecommendationsResponse = {
  NextToken?: {} | undefined
  Recommendations?: {} | undefined
}
type DescribeRefreshSchemasStatusMessage = { EndpointArn: {} }
type DescribeRefreshSchemasStatusResponse = {
  RefreshSchemasStatus?:
    | {
        EndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        Status?: {} | undefined
        LastRefreshDate?: {} | undefined
        LastFailureMessage?: {} | undefined
      }
    | undefined
}
type DescribeReplicationInstanceTaskLogsMessage = {
  ReplicationInstanceArn: {}
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReplicationInstanceTaskLogsResponse = {
  ReplicationInstanceArn?: {} | undefined
  ReplicationInstanceTaskLogs?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReplicationInstancesMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReplicationInstancesResponse = {
  Marker?: {} | undefined
  ReplicationInstances?: {} | undefined
}
type DescribeReplicationSubnetGroupsMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReplicationSubnetGroupsResponse = {
  Marker?: {} | undefined
  ReplicationSubnetGroups?: {} | undefined
}
type DescribeReplicationTaskAssessmentResultsMessage = {
  ReplicationTaskArn?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReplicationTaskAssessmentResultsResponse = {
  Marker?: {} | undefined
  BucketName?: {} | undefined
  ReplicationTaskAssessmentResults?: {} | undefined
}
type DescribeReplicationTaskAssessmentRunsMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReplicationTaskAssessmentRunsResponse = {
  Marker?: {} | undefined
  ReplicationTaskAssessmentRuns?: {} | undefined
}
type DescribeReplicationTaskIndividualAssessmentsMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReplicationTaskIndividualAssessmentsResponse = {
  Marker?: {} | undefined
  ReplicationTaskIndividualAssessments?: {} | undefined
}
type DescribeReplicationTasksMessage = {
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  WithoutSettings?: {} | undefined
}
type DescribeReplicationTasksResponse = {
  Marker?: {} | undefined
  ReplicationTasks?: {} | undefined
}
type DescribeSchemasMessage = {
  EndpointArn: {}
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeSchemasResponse = { Marker?: {} | undefined; Schemas?: {} | undefined }
type DescribeTableStatisticsMessage = {
  ReplicationTaskArn: {}
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  Filters?: {} | undefined
}
type DescribeTableStatisticsResponse = {
  ReplicationTaskArn?: {} | undefined
  TableStatistics?: {} | undefined
  Marker?: {} | undefined
}
type ImportCertificateMessage = {
  CertificateIdentifier: {}
  CertificatePem?: {} | undefined
  CertificateWallet?: {} | undefined
  Tags?: {} | undefined
}
type ImportCertificateResponse = {
  Certificate?:
    | {
        CertificateIdentifier?: {} | undefined
        CertificateCreationDate?: {} | undefined
        CertificatePem?: {} | undefined
        CertificateWallet?: {} | undefined
        CertificateArn?: {} | undefined
        CertificateOwner?: {} | undefined
        ValidFromDate?: {} | undefined
        ValidToDate?: {} | undefined
        SigningAlgorithm?: {} | undefined
        KeyLength?: {} | undefined
      }
    | undefined
}
type InvalidCertificateFault = { [x: string]: unknown }
type ListTagsForResourceMessage = { ResourceArn?: {} | undefined; ResourceArnList?: {} | undefined }
type ListTagsForResourceResponse = { TagList?: {} | undefined }
type ModifyEndpointMessage = {
  EndpointArn: {}
  EndpointIdentifier?: {} | undefined
  EndpointType?: {} | undefined
  EngineName?: {} | undefined
  Username?: {} | undefined
  Password?: {} | undefined
  ServerName?: {} | undefined
  Port?: {} | undefined
  DatabaseName?: {} | undefined
  ExtraConnectionAttributes?: {} | undefined
  CertificateArn?: {} | undefined
  SslMode?: {} | undefined
  ServiceAccessRoleArn?: {} | undefined
  ExternalTableDefinition?: {} | undefined
  DynamoDbSettings?: { ServiceAccessRoleArn: {} } | undefined
  S3Settings?:
    | {
        ServiceAccessRoleArn?: {} | undefined
        ExternalTableDefinition?: {} | undefined
        CsvRowDelimiter?: {} | undefined
        CsvDelimiter?: {} | undefined
        BucketFolder?: {} | undefined
        BucketName?: {} | undefined
        CompressionType?: {} | undefined
        EncryptionMode?: {} | undefined
        ServerSideEncryptionKmsKeyId?: {} | undefined
        DataFormat?: {} | undefined
        EncodingType?: {} | undefined
        DictPageSizeLimit?: {} | undefined
        RowGroupLength?: {} | undefined
        DataPageSize?: {} | undefined
        ParquetVersion?: {} | undefined
        EnableStatistics?: {} | undefined
        IncludeOpForFullLoad?: {} | undefined
        CdcInsertsOnly?: {} | undefined
        TimestampColumnName?: {} | undefined
        ParquetTimestampInMillisecond?: {} | undefined
        CdcInsertsAndUpdates?: {} | undefined
        DatePartitionEnabled?: {} | undefined
        DatePartitionSequence?: {} | undefined
        DatePartitionDelimiter?: {} | undefined
        UseCsvNoSupValue?: {} | undefined
        CsvNoSupValue?: {} | undefined
        PreserveTransactions?: {} | undefined
        CdcPath?: {} | undefined
        UseTaskStartTimeForFullLoadTimestamp?: {} | undefined
        CannedAclForObjects?: {} | undefined
        AddColumnName?: {} | undefined
        CdcMaxBatchInterval?: {} | undefined
        CdcMinFileSize?: {} | undefined
        CsvNullValue?: {} | undefined
        IgnoreHeaderRows?: {} | undefined
        MaxFileSize?: {} | undefined
        Rfc4180?: {} | undefined
        DatePartitionTimezone?: {} | undefined
        AddTrailingPaddingCharacter?: {} | undefined
        ExpectedBucketOwner?: {} | undefined
        GlueCatalogGeneration?: {} | undefined
      }
    | undefined
  DmsTransferSettings?:
    | { ServiceAccessRoleArn?: {} | undefined; BucketName?: {} | undefined }
    | undefined
  MongoDbSettings?:
    | {
        Username?: {} | undefined
        Password?: {} | undefined
        ServerName?: {} | undefined
        Port?: {} | undefined
        DatabaseName?: {} | undefined
        AuthType?: {} | undefined
        AuthMechanism?: {} | undefined
        NestingLevel?: {} | undefined
        ExtractDocId?: {} | undefined
        DocsToInvestigate?: {} | undefined
        AuthSource?: {} | undefined
        KmsKeyId?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  KinesisSettings?:
    | {
        StreamArn?: {} | undefined
        MessageFormat?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        IncludeTransactionDetails?: {} | undefined
        IncludePartitionValue?: {} | undefined
        PartitionIncludeSchemaTable?: {} | undefined
        IncludeTableAlterOperations?: {} | undefined
        IncludeControlDetails?: {} | undefined
        IncludeNullAndEmpty?: {} | undefined
        NoHexPrefix?: {} | undefined
      }
    | undefined
  KafkaSettings?:
    | {
        Broker?: {} | undefined
        Topic?: {} | undefined
        MessageFormat?: {} | undefined
        IncludeTransactionDetails?: {} | undefined
        IncludePartitionValue?: {} | undefined
        PartitionIncludeSchemaTable?: {} | undefined
        IncludeTableAlterOperations?: {} | undefined
        IncludeControlDetails?: {} | undefined
        MessageMaxBytes?: {} | undefined
        IncludeNullAndEmpty?: {} | undefined
        SecurityProtocol?: {} | undefined
        SslClientCertificateArn?: {} | undefined
        SslClientKeyArn?: {} | undefined
        SslClientKeyPassword?: {} | undefined
        SslCaCertificateArn?: {} | undefined
        SaslUsername?: {} | undefined
        SaslPassword?: {} | undefined
        NoHexPrefix?: {} | undefined
        SaslMechanism?: {} | undefined
      }
    | undefined
  ElasticsearchSettings?:
    | {
        ServiceAccessRoleArn: {}
        EndpointUri: {}
        FullLoadErrorPercentage?: {} | undefined
        ErrorRetryDuration?: {} | undefined
        UseNewMappingType?: {} | undefined
      }
    | undefined
  NeptuneSettings?:
    | {
        ServiceAccessRoleArn?: {} | undefined
        S3BucketName: {}
        S3BucketFolder: {}
        ErrorRetryDuration?: {} | undefined
        MaxFileSize?: {} | undefined
        MaxRetryCount?: {} | undefined
        IamAuthEnabled?: {} | undefined
      }
    | undefined
  RedshiftSettings?: RedshiftSettings | undefined
  PostgreSQLSettings?:
    | {
        AfterConnectScript?: {} | undefined
        CaptureDdls?: {} | undefined
        MaxFileSize?: {} | undefined
        DatabaseName?: {} | undefined
        DdlArtifactsSchema?: {} | undefined
        ExecuteTimeout?: {} | undefined
        FailTasksOnLobTruncation?: {} | undefined
        HeartbeatEnable?: {} | undefined
        HeartbeatSchema?: {} | undefined
        HeartbeatFrequency?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        Username?: {} | undefined
        SlotName?: {} | undefined
        PluginName?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
        TrimSpaceInChar?: {} | undefined
        MapBooleanAsBoolean?: {} | undefined
      }
    | undefined
  MySQLSettings?:
    | {
        AfterConnectScript?: {} | undefined
        CleanSourceMetadataOnMismatch?: {} | undefined
        DatabaseName?: {} | undefined
        EventsPollInterval?: {} | undefined
        TargetDbType?: {} | undefined
        MaxFileSize?: {} | undefined
        ParallelLoadThreads?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        ServerTimezone?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  OracleSettings?:
    | {
        AddSupplementalLogging?: {} | undefined
        ArchivedLogDestId?: {} | undefined
        AdditionalArchivedLogDestId?: {} | undefined
        ExtraArchivedLogDestIds?: {} | undefined
        AllowSelectNestedTables?: {} | undefined
        ParallelAsmReadThreads?: {} | undefined
        ReadAheadBlocks?: {} | undefined
        AccessAlternateDirectly?: {} | undefined
        UseAlternateFolderForOnline?: {} | undefined
        OraclePathPrefix?: {} | undefined
        UsePathPrefix?: {} | undefined
        ReplacePathPrefix?: {} | undefined
        EnableHomogenousTablespace?: {} | undefined
        DirectPathNoLog?: {} | undefined
        ArchivedLogsOnly?: {} | undefined
        AsmPassword?: {} | undefined
        AsmServer?: {} | undefined
        AsmUser?: {} | undefined
        CharLengthSemantics?: {} | undefined
        DatabaseName?: {} | undefined
        DirectPathParallelLoad?: {} | undefined
        FailTasksOnLobTruncation?: {} | undefined
        NumberDatatypeScale?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ReadTableSpaceName?: {} | undefined
        RetryInterval?: {} | undefined
        SecurityDbEncryption?: {} | undefined
        SecurityDbEncryptionName?: {} | undefined
        ServerName?: {} | undefined
        SpatialDataOptionToGeoJsonFunctionName?: {} | undefined
        StandbyDelayTime?: {} | undefined
        Username?: {} | undefined
        UseBFile?: {} | undefined
        UseDirectPathFullLoad?: {} | undefined
        UseLogminerReader?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
        SecretsManagerOracleAsmAccessRoleArn?: {} | undefined
        SecretsManagerOracleAsmSecretId?: {} | undefined
        TrimSpaceInChar?: {} | undefined
        ConvertTimestampWithZoneToUTC?: {} | undefined
      }
    | undefined
  SybaseSettings?:
    | {
        DatabaseName?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  MicrosoftSQLServerSettings?:
    | {
        Port?: {} | undefined
        BcpPacketSize?: {} | undefined
        DatabaseName?: {} | undefined
        ControlTablesFileGroup?: {} | undefined
        Password?: {} | undefined
        QuerySingleAlwaysOnNode?: {} | undefined
        ReadBackupOnly?: {} | undefined
        SafeguardPolicy?: {} | undefined
        ServerName?: {} | undefined
        Username?: {} | undefined
        UseBcpFullLoad?: {} | undefined
        UseThirdPartyBackupDevice?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
        TrimSpaceInChar?: {} | undefined
        TlogAccessMode?: {} | undefined
        ForceLobLookup?: {} | undefined
      }
    | undefined
  IBMDb2Settings?:
    | {
        DatabaseName?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        SetDataCaptureChanges?: {} | undefined
        CurrentLsn?: {} | undefined
        MaxKBytesPerRead?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  DocDbSettings?:
    | {
        Username?: {} | undefined
        Password?: {} | undefined
        ServerName?: {} | undefined
        Port?: {} | undefined
        DatabaseName?: {} | undefined
        NestingLevel?: {} | undefined
        ExtractDocId?: {} | undefined
        DocsToInvestigate?: {} | undefined
        KmsKeyId?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
  RedisSettings?:
    | {
        ServerName: {}
        Port: {}
        SslSecurityProtocol?: {} | undefined
        AuthType?: {} | undefined
        AuthUserName?: {} | undefined
        AuthPassword?: {} | undefined
        SslCaCertificateArn?: {} | undefined
      }
    | undefined
  ExactSettings?: {} | undefined
  GcpMySQLSettings?:
    | {
        AfterConnectScript?: {} | undefined
        CleanSourceMetadataOnMismatch?: {} | undefined
        DatabaseName?: {} | undefined
        EventsPollInterval?: {} | undefined
        TargetDbType?: {} | undefined
        MaxFileSize?: {} | undefined
        ParallelLoadThreads?: {} | undefined
        Password?: {} | undefined
        Port?: {} | undefined
        ServerName?: {} | undefined
        ServerTimezone?: {} | undefined
        Username?: {} | undefined
        SecretsManagerAccessRoleArn?: {} | undefined
        SecretsManagerSecretId?: {} | undefined
      }
    | undefined
}
type ModifyEndpointResponse = {
  Endpoint?:
    | {
        EndpointIdentifier?: {} | undefined
        EndpointType?: {} | undefined
        EngineName?: {} | undefined
        EngineDisplayName?: {} | undefined
        Username?: {} | undefined
        ServerName?: {} | undefined
        Port?: {} | undefined
        DatabaseName?: {} | undefined
        ExtraConnectionAttributes?: {} | undefined
        Status?: {} | undefined
        KmsKeyId?: {} | undefined
        EndpointArn?: {} | undefined
        CertificateArn?: {} | undefined
        SslMode?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        ExternalTableDefinition?: {} | undefined
        ExternalId?: {} | undefined
        DynamoDbSettings?: { ServiceAccessRoleArn: {} } | undefined
        S3Settings?:
          | {
              ServiceAccessRoleArn?: {} | undefined
              ExternalTableDefinition?: {} | undefined
              CsvRowDelimiter?: {} | undefined
              CsvDelimiter?: {} | undefined
              BucketFolder?: {} | undefined
              BucketName?: {} | undefined
              CompressionType?: {} | undefined
              EncryptionMode?: {} | undefined
              ServerSideEncryptionKmsKeyId?: {} | undefined
              DataFormat?: {} | undefined
              EncodingType?: {} | undefined
              DictPageSizeLimit?: {} | undefined
              RowGroupLength?: {} | undefined
              DataPageSize?: {} | undefined
              ParquetVersion?: {} | undefined
              EnableStatistics?: {} | undefined
              IncludeOpForFullLoad?: {} | undefined
              CdcInsertsOnly?: {} | undefined
              TimestampColumnName?: {} | undefined
              ParquetTimestampInMillisecond?: {} | undefined
              CdcInsertsAndUpdates?: {} | undefined
              DatePartitionEnabled?: {} | undefined
              DatePartitionSequence?: {} | undefined
              DatePartitionDelimiter?: {} | undefined
              UseCsvNoSupValue?: {} | undefined
              CsvNoSupValue?: {} | undefined
              PreserveTransactions?: {} | undefined
              CdcPath?: {} | undefined
              UseTaskStartTimeForFullLoadTimestamp?: {} | undefined
              CannedAclForObjects?: {} | undefined
              AddColumnName?: {} | undefined
              CdcMaxBatchInterval?: {} | undefined
              CdcMinFileSize?: {} | undefined
              CsvNullValue?: {} | undefined
              IgnoreHeaderRows?: {} | undefined
              MaxFileSize?: {} | undefined
              Rfc4180?: {} | undefined
              DatePartitionTimezone?: {} | undefined
              AddTrailingPaddingCharacter?: {} | undefined
              ExpectedBucketOwner?: {} | undefined
              GlueCatalogGeneration?: {} | undefined
            }
          | undefined
        DmsTransferSettings?:
          | { ServiceAccessRoleArn?: {} | undefined; BucketName?: {} | undefined }
          | undefined
        MongoDbSettings?:
          | {
              Username?: {} | undefined
              Password?: {} | undefined
              ServerName?: {} | undefined
              Port?: {} | undefined
              DatabaseName?: {} | undefined
              AuthType?: {} | undefined
              AuthMechanism?: {} | undefined
              NestingLevel?: {} | undefined
              ExtractDocId?: {} | undefined
              DocsToInvestigate?: {} | undefined
              AuthSource?: {} | undefined
              KmsKeyId?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        KinesisSettings?:
          | {
              StreamArn?: {} | undefined
              MessageFormat?: {} | undefined
              ServiceAccessRoleArn?: {} | undefined
              IncludeTransactionDetails?: {} | undefined
              IncludePartitionValue?: {} | undefined
              PartitionIncludeSchemaTable?: {} | undefined
              IncludeTableAlterOperations?: {} | undefined
              IncludeControlDetails?: {} | undefined
              IncludeNullAndEmpty?: {} | undefined
              NoHexPrefix?: {} | undefined
            }
          | undefined
        KafkaSettings?:
          | {
              Broker?: {} | undefined
              Topic?: {} | undefined
              MessageFormat?: {} | undefined
              IncludeTransactionDetails?: {} | undefined
              IncludePartitionValue?: {} | undefined
              PartitionIncludeSchemaTable?: {} | undefined
              IncludeTableAlterOperations?: {} | undefined
              IncludeControlDetails?: {} | undefined
              MessageMaxBytes?: {} | undefined
              IncludeNullAndEmpty?: {} | undefined
              SecurityProtocol?: {} | undefined
              SslClientCertificateArn?: {} | undefined
              SslClientKeyArn?: {} | undefined
              SslClientKeyPassword?: {} | undefined
              SslCaCertificateArn?: {} | undefined
              SaslUsername?: {} | undefined
              SaslPassword?: {} | undefined
              NoHexPrefix?: {} | undefined
              SaslMechanism?: {} | undefined
            }
          | undefined
        ElasticsearchSettings?:
          | {
              ServiceAccessRoleArn: {}
              EndpointUri: {}
              FullLoadErrorPercentage?: {} | undefined
              ErrorRetryDuration?: {} | undefined
              UseNewMappingType?: {} | undefined
            }
          | undefined
        NeptuneSettings?:
          | {
              ServiceAccessRoleArn?: {} | undefined
              S3BucketName: {}
              S3BucketFolder: {}
              ErrorRetryDuration?: {} | undefined
              MaxFileSize?: {} | undefined
              MaxRetryCount?: {} | undefined
              IamAuthEnabled?: {} | undefined
            }
          | undefined
        RedshiftSettings?:
          | {
              AcceptAnyDate?: {} | undefined
              AfterConnectScript?: {} | undefined
              BucketFolder?: {} | undefined
              BucketName?: {} | undefined
              CaseSensitiveNames?: {} | undefined
              CompUpdate?: {} | undefined
              ConnectionTimeout?: {} | undefined
              DatabaseName?: {} | undefined
              DateFormat?: {} | undefined
              EmptyAsNull?: {} | undefined
              EncryptionMode?: {} | undefined
              ExplicitIds?: {} | undefined
              FileTransferUploadStreams?: {} | undefined
              LoadTimeout?: {} | undefined
              MaxFileSize?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              RemoveQuotes?: {} | undefined
              ReplaceInvalidChars?: {} | undefined
              ReplaceChars?: {} | undefined
              ServerName?: {} | undefined
              ServiceAccessRoleArn?: {} | undefined
              ServerSideEncryptionKmsKeyId?: {} | undefined
              TimeFormat?: {} | undefined
              TrimBlanks?: {} | undefined
              TruncateColumns?: {} | undefined
              Username?: {} | undefined
              WriteBufferSize?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              MapBooleanAsBoolean?: {} | undefined
            }
          | undefined
        PostgreSQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CaptureDdls?: {} | undefined
              MaxFileSize?: {} | undefined
              DatabaseName?: {} | undefined
              DdlArtifactsSchema?: {} | undefined
              ExecuteTimeout?: {} | undefined
              FailTasksOnLobTruncation?: {} | undefined
              HeartbeatEnable?: {} | undefined
              HeartbeatSchema?: {} | undefined
              HeartbeatFrequency?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              SlotName?: {} | undefined
              PluginName?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              MapBooleanAsBoolean?: {} | undefined
            }
          | undefined
        MySQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CleanSourceMetadataOnMismatch?: {} | undefined
              DatabaseName?: {} | undefined
              EventsPollInterval?: {} | undefined
              TargetDbType?: {} | undefined
              MaxFileSize?: {} | undefined
              ParallelLoadThreads?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              ServerTimezone?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        OracleSettings?:
          | {
              AddSupplementalLogging?: {} | undefined
              ArchivedLogDestId?: {} | undefined
              AdditionalArchivedLogDestId?: {} | undefined
              ExtraArchivedLogDestIds?: {} | undefined
              AllowSelectNestedTables?: {} | undefined
              ParallelAsmReadThreads?: {} | undefined
              ReadAheadBlocks?: {} | undefined
              AccessAlternateDirectly?: {} | undefined
              UseAlternateFolderForOnline?: {} | undefined
              OraclePathPrefix?: {} | undefined
              UsePathPrefix?: {} | undefined
              ReplacePathPrefix?: {} | undefined
              EnableHomogenousTablespace?: {} | undefined
              DirectPathNoLog?: {} | undefined
              ArchivedLogsOnly?: {} | undefined
              AsmPassword?: {} | undefined
              AsmServer?: {} | undefined
              AsmUser?: {} | undefined
              CharLengthSemantics?: {} | undefined
              DatabaseName?: {} | undefined
              DirectPathParallelLoad?: {} | undefined
              FailTasksOnLobTruncation?: {} | undefined
              NumberDatatypeScale?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ReadTableSpaceName?: {} | undefined
              RetryInterval?: {} | undefined
              SecurityDbEncryption?: {} | undefined
              SecurityDbEncryptionName?: {} | undefined
              ServerName?: {} | undefined
              SpatialDataOptionToGeoJsonFunctionName?: {} | undefined
              StandbyDelayTime?: {} | undefined
              Username?: {} | undefined
              UseBFile?: {} | undefined
              UseDirectPathFullLoad?: {} | undefined
              UseLogminerReader?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              SecretsManagerOracleAsmAccessRoleArn?: {} | undefined
              SecretsManagerOracleAsmSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              ConvertTimestampWithZoneToUTC?: {} | undefined
            }
          | undefined
        SybaseSettings?:
          | {
              DatabaseName?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        MicrosoftSQLServerSettings?:
          | {
              Port?: {} | undefined
              BcpPacketSize?: {} | undefined
              DatabaseName?: {} | undefined
              ControlTablesFileGroup?: {} | undefined
              Password?: {} | undefined
              QuerySingleAlwaysOnNode?: {} | undefined
              ReadBackupOnly?: {} | undefined
              SafeguardPolicy?: {} | undefined
              ServerName?: {} | undefined
              Username?: {} | undefined
              UseBcpFullLoad?: {} | undefined
              UseThirdPartyBackupDevice?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
              TrimSpaceInChar?: {} | undefined
              TlogAccessMode?: {} | undefined
              ForceLobLookup?: {} | undefined
            }
          | undefined
        IBMDb2Settings?:
          | {
              DatabaseName?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              SetDataCaptureChanges?: {} | undefined
              CurrentLsn?: {} | undefined
              MaxKBytesPerRead?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
        DocDbSettings?: DocDbSettings | undefined
        RedisSettings?:
          | {
              ServerName: {}
              Port: {}
              SslSecurityProtocol?: {} | undefined
              AuthType?: {} | undefined
              AuthUserName?: {} | undefined
              AuthPassword?: {} | undefined
              SslCaCertificateArn?: {} | undefined
            }
          | undefined
        GcpMySQLSettings?:
          | {
              AfterConnectScript?: {} | undefined
              CleanSourceMetadataOnMismatch?: {} | undefined
              DatabaseName?: {} | undefined
              EventsPollInterval?: {} | undefined
              TargetDbType?: {} | undefined
              MaxFileSize?: {} | undefined
              ParallelLoadThreads?: {} | undefined
              Password?: {} | undefined
              Port?: {} | undefined
              ServerName?: {} | undefined
              ServerTimezone?: {} | undefined
              Username?: {} | undefined
              SecretsManagerAccessRoleArn?: {} | undefined
              SecretsManagerSecretId?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ModifyEventSubscriptionMessage = {
  SubscriptionName: {}
  SnsTopicArn?: {} | undefined
  SourceType?: {} | undefined
  EventCategories?: {} | undefined
  Enabled?: {} | undefined
}
type ModifyEventSubscriptionResponse = {
  EventSubscription?:
    | {
        CustomerAwsId?: {} | undefined
        CustSubscriptionId?: {} | undefined
        SnsTopicArn?: {} | undefined
        Status?: {} | undefined
        SubscriptionCreationTime?: {} | undefined
        SourceType?: {} | undefined
        SourceIdsList?: {} | undefined
        EventCategoriesList?: {} | undefined
        Enabled?: {} | undefined
      }
    | undefined
}
type ModifyReplicationInstanceMessage = {
  ReplicationInstanceArn: {}
  AllocatedStorage?: {} | undefined
  ApplyImmediately?: {} | undefined
  ReplicationInstanceClass?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  MultiAZ?: {} | undefined
  EngineVersion?: {} | undefined
  AllowMajorVersionUpgrade?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  ReplicationInstanceIdentifier?: {} | undefined
  NetworkType?: {} | undefined
}
type ModifyReplicationInstanceResponse = {
  ReplicationInstance?:
    | {
        ReplicationInstanceIdentifier?: {} | undefined
        ReplicationInstanceClass?: {} | undefined
        ReplicationInstanceStatus?: {} | undefined
        AllocatedStorage?: {} | undefined
        InstanceCreateTime?: {} | undefined
        VpcSecurityGroups?: {} | undefined
        AvailabilityZone?: {} | undefined
        ReplicationSubnetGroup?:
          | {
              ReplicationSubnetGroupIdentifier?: {} | undefined
              ReplicationSubnetGroupDescription?: {} | undefined
              VpcId?: {} | undefined
              SubnetGroupStatus?: {} | undefined
              Subnets?: {} | undefined
              SupportedNetworkTypes?: {} | undefined
            }
          | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PendingModifiedValues?:
          | {
              ReplicationInstanceClass?: {} | undefined
              AllocatedStorage?: {} | undefined
              MultiAZ?: {} | undefined
              EngineVersion?: {} | undefined
              NetworkType?: {} | undefined
            }
          | undefined
        MultiAZ?: {} | undefined
        EngineVersion?: {} | undefined
        AutoMinorVersionUpgrade?: {} | undefined
        KmsKeyId?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        ReplicationInstancePublicIpAddress?: {} | undefined
        ReplicationInstancePrivateIpAddress?: {} | undefined
        ReplicationInstancePublicIpAddresses?: {} | undefined
        ReplicationInstancePrivateIpAddresses?: {} | undefined
        ReplicationInstanceIpv6Addresses?: {} | undefined
        PubliclyAccessible?: {} | undefined
        SecondaryAvailabilityZone?: {} | undefined
        FreeUntil?: {} | undefined
        DnsNameServers?: {} | undefined
        NetworkType?: {} | undefined
      }
    | undefined
}
type UpgradeDependencyFailureFault = { [x: string]: unknown }
type ModifyReplicationSubnetGroupMessage = {
  ReplicationSubnetGroupIdentifier: {}
  ReplicationSubnetGroupDescription?: {} | undefined
  SubnetIds: {}
}
type ModifyReplicationSubnetGroupResponse = {
  ReplicationSubnetGroup?:
    | {
        ReplicationSubnetGroupIdentifier?: {} | undefined
        ReplicationSubnetGroupDescription?: {} | undefined
        VpcId?: {} | undefined
        SubnetGroupStatus?: {} | undefined
        Subnets?: {} | undefined
        SupportedNetworkTypes?: {} | undefined
      }
    | undefined
}
type SubnetAlreadyInUse = { [x: string]: unknown }
type ModifyReplicationTaskMessage = {
  ReplicationTaskArn: {}
  ReplicationTaskIdentifier?: {} | undefined
  MigrationType?: {} | undefined
  TableMappings?: {} | undefined
  ReplicationTaskSettings?: {} | undefined
  CdcStartTime?: {} | undefined
  CdcStartPosition?: {} | undefined
  CdcStopPosition?: {} | undefined
  TaskData?: {} | undefined
}
type ModifyReplicationTaskResponse = {
  ReplicationTask?:
    | {
        ReplicationTaskIdentifier?: {} | undefined
        SourceEndpointArn?: {} | undefined
        TargetEndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        MigrationType?: {} | undefined
        TableMappings?: {} | undefined
        ReplicationTaskSettings?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        StopReason?: {} | undefined
        ReplicationTaskCreationDate?: {} | undefined
        ReplicationTaskStartDate?: {} | undefined
        CdcStartPosition?: {} | undefined
        CdcStopPosition?: {} | undefined
        RecoveryCheckpoint?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        ReplicationTaskStats?:
          | {
              FullLoadProgressPercent?: {} | undefined
              ElapsedTimeMillis?: {} | undefined
              TablesLoaded?: {} | undefined
              TablesLoading?: {} | undefined
              TablesQueued?: {} | undefined
              TablesErrored?: {} | undefined
              FreshStartDate?: {} | undefined
              StartDate?: {} | undefined
              StopDate?: {} | undefined
              FullLoadStartDate?: {} | undefined
              FullLoadFinishDate?: {} | undefined
            }
          | undefined
        TaskData?: {} | undefined
        TargetReplicationInstanceArn?: {} | undefined
      }
    | undefined
}
type MoveReplicationTaskMessage = { ReplicationTaskArn: {}; TargetReplicationInstanceArn: {} }
type MoveReplicationTaskResponse = {
  ReplicationTask?:
    | {
        ReplicationTaskIdentifier?: {} | undefined
        SourceEndpointArn?: {} | undefined
        TargetEndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        MigrationType?: {} | undefined
        TableMappings?: {} | undefined
        ReplicationTaskSettings?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        StopReason?: {} | undefined
        ReplicationTaskCreationDate?: {} | undefined
        ReplicationTaskStartDate?: {} | undefined
        CdcStartPosition?: {} | undefined
        CdcStopPosition?: {} | undefined
        RecoveryCheckpoint?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        ReplicationTaskStats?:
          | {
              FullLoadProgressPercent?: {} | undefined
              ElapsedTimeMillis?: {} | undefined
              TablesLoaded?: {} | undefined
              TablesLoading?: {} | undefined
              TablesQueued?: {} | undefined
              TablesErrored?: {} | undefined
              FreshStartDate?: {} | undefined
              StartDate?: {} | undefined
              StopDate?: {} | undefined
              FullLoadStartDate?: {} | undefined
              FullLoadFinishDate?: {} | undefined
            }
          | undefined
        TaskData?: {} | undefined
        TargetReplicationInstanceArn?: {} | undefined
      }
    | undefined
}
type RebootReplicationInstanceMessage = {
  ReplicationInstanceArn: {}
  ForceFailover?: {} | undefined
  ForcePlannedFailover?: {} | undefined
}
type RebootReplicationInstanceResponse = {
  ReplicationInstance?:
    | {
        ReplicationInstanceIdentifier?: {} | undefined
        ReplicationInstanceClass?: {} | undefined
        ReplicationInstanceStatus?: {} | undefined
        AllocatedStorage?: {} | undefined
        InstanceCreateTime?: {} | undefined
        VpcSecurityGroups?: {} | undefined
        AvailabilityZone?: {} | undefined
        ReplicationSubnetGroup?:
          | {
              ReplicationSubnetGroupIdentifier?: {} | undefined
              ReplicationSubnetGroupDescription?: {} | undefined
              VpcId?: {} | undefined
              SubnetGroupStatus?: {} | undefined
              Subnets?: {} | undefined
              SupportedNetworkTypes?: {} | undefined
            }
          | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PendingModifiedValues?:
          | {
              ReplicationInstanceClass?: {} | undefined
              AllocatedStorage?: {} | undefined
              MultiAZ?: {} | undefined
              EngineVersion?: {} | undefined
              NetworkType?: {} | undefined
            }
          | undefined
        MultiAZ?: {} | undefined
        EngineVersion?: {} | undefined
        AutoMinorVersionUpgrade?: {} | undefined
        KmsKeyId?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        ReplicationInstancePublicIpAddress?: {} | undefined
        ReplicationInstancePrivateIpAddress?: {} | undefined
        ReplicationInstancePublicIpAddresses?: {} | undefined
        ReplicationInstancePrivateIpAddresses?: {} | undefined
        ReplicationInstanceIpv6Addresses?: {} | undefined
        PubliclyAccessible?: {} | undefined
        SecondaryAvailabilityZone?: {} | undefined
        FreeUntil?: {} | undefined
        DnsNameServers?: {} | undefined
        NetworkType?: {} | undefined
      }
    | undefined
}
type RefreshSchemasMessage = { EndpointArn: {}; ReplicationInstanceArn: {} }
type RefreshSchemasResponse = {
  RefreshSchemasStatus?:
    | {
        EndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        Status?: {} | undefined
        LastRefreshDate?: {} | undefined
        LastFailureMessage?: {} | undefined
      }
    | undefined
}
type ReloadTablesMessage = {
  ReplicationTaskArn: {}
  TablesToReload: {}
  ReloadOption?: {} | undefined
}
type ReloadTablesResponse = { ReplicationTaskArn?: {} | undefined }
type RemoveTagsFromResourceMessage = { ResourceArn: {}; TagKeys: {} }
type RemoveTagsFromResourceResponse = { [x: string]: unknown }
type RunFleetAdvisorLsaAnalysisResponse = {
  LsaAnalysisId?: {} | undefined
  Status?: {} | undefined
}
type StartRecommendationsRequest = {
  DatabaseId: {}
  Settings: { InstanceSizingType: {}; WorkloadType: {} }
}
type StartReplicationTaskMessage = {
  ReplicationTaskArn: {}
  StartReplicationTaskType: {}
  CdcStartTime?: {} | undefined
  CdcStartPosition?: {} | undefined
  CdcStopPosition?: {} | undefined
}
type StartReplicationTaskResponse = {
  ReplicationTask?:
    | {
        ReplicationTaskIdentifier?: {} | undefined
        SourceEndpointArn?: {} | undefined
        TargetEndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        MigrationType?: {} | undefined
        TableMappings?: {} | undefined
        ReplicationTaskSettings?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        StopReason?: {} | undefined
        ReplicationTaskCreationDate?: {} | undefined
        ReplicationTaskStartDate?: {} | undefined
        CdcStartPosition?: {} | undefined
        CdcStopPosition?: {} | undefined
        RecoveryCheckpoint?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        ReplicationTaskStats?:
          | {
              FullLoadProgressPercent?: {} | undefined
              ElapsedTimeMillis?: {} | undefined
              TablesLoaded?: {} | undefined
              TablesLoading?: {} | undefined
              TablesQueued?: {} | undefined
              TablesErrored?: {} | undefined
              FreshStartDate?: {} | undefined
              StartDate?: {} | undefined
              StopDate?: {} | undefined
              FullLoadStartDate?: {} | undefined
              FullLoadFinishDate?: {} | undefined
            }
          | undefined
        TaskData?: {} | undefined
        TargetReplicationInstanceArn?: {} | undefined
      }
    | undefined
}
type StartReplicationTaskAssessmentMessage = { ReplicationTaskArn: {} }
type StartReplicationTaskAssessmentResponse = {
  ReplicationTask?:
    | {
        ReplicationTaskIdentifier?: {} | undefined
        SourceEndpointArn?: {} | undefined
        TargetEndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        MigrationType?: {} | undefined
        TableMappings?: {} | undefined
        ReplicationTaskSettings?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        StopReason?: {} | undefined
        ReplicationTaskCreationDate?: {} | undefined
        ReplicationTaskStartDate?: {} | undefined
        CdcStartPosition?: {} | undefined
        CdcStopPosition?: {} | undefined
        RecoveryCheckpoint?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        ReplicationTaskStats?:
          | {
              FullLoadProgressPercent?: {} | undefined
              ElapsedTimeMillis?: {} | undefined
              TablesLoaded?: {} | undefined
              TablesLoading?: {} | undefined
              TablesQueued?: {} | undefined
              TablesErrored?: {} | undefined
              FreshStartDate?: {} | undefined
              StartDate?: {} | undefined
              StopDate?: {} | undefined
              FullLoadStartDate?: {} | undefined
              FullLoadFinishDate?: {} | undefined
            }
          | undefined
        TaskData?: {} | undefined
        TargetReplicationInstanceArn?: {} | undefined
      }
    | undefined
}
type StartReplicationTaskAssessmentRunMessage = {
  ReplicationTaskArn: {}
  ServiceAccessRoleArn: {}
  ResultLocationBucket: {}
  ResultLocationFolder?: {} | undefined
  ResultEncryptionMode?: {} | undefined
  ResultKmsKeyArn?: {} | undefined
  AssessmentRunName: {}
  IncludeOnly?: {} | undefined
  Exclude?: {} | undefined
}
type StartReplicationTaskAssessmentRunResponse = {
  ReplicationTaskAssessmentRun?:
    | {
        ReplicationTaskAssessmentRunArn?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        Status?: {} | undefined
        ReplicationTaskAssessmentRunCreationDate?: {} | undefined
        AssessmentProgress?:
          | {
              IndividualAssessmentCount?: {} | undefined
              IndividualAssessmentCompletedCount?: {} | undefined
            }
          | undefined
        LastFailureMessage?: {} | undefined
        ServiceAccessRoleArn?: {} | undefined
        ResultLocationBucket?: {} | undefined
        ResultLocationFolder?: {} | undefined
        ResultEncryptionMode?: {} | undefined
        ResultKmsKeyArn?: {} | undefined
        AssessmentRunName?: {} | undefined
      }
    | undefined
}
type KMSFault = { [x: string]: unknown }
type StopReplicationTaskMessage = { ReplicationTaskArn: {} }
type StopReplicationTaskResponse = {
  ReplicationTask?:
    | {
        ReplicationTaskIdentifier?: {} | undefined
        SourceEndpointArn?: {} | undefined
        TargetEndpointArn?: {} | undefined
        ReplicationInstanceArn?: {} | undefined
        MigrationType?: {} | undefined
        TableMappings?: {} | undefined
        ReplicationTaskSettings?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        StopReason?: {} | undefined
        ReplicationTaskCreationDate?: {} | undefined
        ReplicationTaskStartDate?: {} | undefined
        CdcStartPosition?: {} | undefined
        CdcStopPosition?: {} | undefined
        RecoveryCheckpoint?: {} | undefined
        ReplicationTaskArn?: {} | undefined
        ReplicationTaskStats?:
          | {
              FullLoadProgressPercent?: {} | undefined
              ElapsedTimeMillis?: {} | undefined
              TablesLoaded?: {} | undefined
              TablesLoading?: {} | undefined
              TablesQueued?: {} | undefined
              TablesErrored?: {} | undefined
              FreshStartDate?: {} | undefined
              StartDate?: {} | undefined
              StopDate?: {} | undefined
              FullLoadStartDate?: {} | undefined
              FullLoadFinishDate?: {} | undefined
            }
          | undefined
        TaskData?: {} | undefined
        TargetReplicationInstanceArn?: {} | undefined
      }
    | undefined
}
type TestConnectionMessage = { ReplicationInstanceArn: {}; EndpointArn: {} }
type TestConnectionResponse = {
  Connection?:
    | {
        ReplicationInstanceArn?: {} | undefined
        EndpointArn?: {} | undefined
        Status?: {} | undefined
        LastFailureMessage?: {} | undefined
        EndpointIdentifier?: {} | undefined
        ReplicationInstanceIdentifier?: {} | undefined
      }
    | undefined
}
type UpdateSubscriptionsToEventBridgeMessage = { ForceMove?: {} | undefined }
type UpdateSubscriptionsToEventBridgeResponse = { Result?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.AddTagsToResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToResourceMessage }
            output: AddTagsToResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.AddTagsToResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToResourceMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ApplyPendingMaintenanceAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplyPendingMaintenanceActionMessage }
            output: ApplyPendingMaintenanceActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ApplyPendingMaintenanceAction'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplyPendingMaintenanceActionMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.BatchStartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchStartRecommendationsRequest }
            output: BatchStartRecommendationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.BatchStartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchStartRecommendationsRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.BatchStartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchStartRecommendationsRequest }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.BatchStartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchStartRecommendationsRequest }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelReplicationTaskAssessmentRunMessage }
            output: CancelReplicationTaskAssessmentRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelReplicationTaskAssessmentRunMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelReplicationTaskAssessmentRunMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelReplicationTaskAssessmentRunMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: CreateEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEndpointMessage }
            output: S3AccessDeniedFault
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: CreateEventSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SNSInvalidTopicFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SNSNoAuthorizationFault
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: KMSAccessDeniedFault
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: KMSDisabledFault
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: KMSInvalidStateFault
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: KMSNotFoundFault
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: KMSThrottlingFault
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetAdvisorCollectorRequest }
            output: CreateFleetAdvisorCollectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetAdvisorCollectorRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetAdvisorCollectorRequest }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetAdvisorCollectorRequest }
            output: S3AccessDeniedFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetAdvisorCollectorRequest }
            output: S3ResourceNotFoundFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetAdvisorCollectorRequest }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: CreateReplicationInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: InsufficientResourceCapacityFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: ReplicationSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: InvalidSubnet
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationInstanceMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationSubnetGroupMessage }
            output: CreateReplicationSubnetGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationSubnetGroupMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationSubnetGroupMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationSubnetGroupMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationSubnetGroupMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationSubnetGroupMessage }
            output: ReplicationSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationSubnetGroupMessage }
            output: InvalidSubnet
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationTaskMessage }
            output: CreateReplicationTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationTaskMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationTaskMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationTaskMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationTaskMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationTaskMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.CreateReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateReplicationTaskMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteCertificate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCertificateMessage }
            output: DeleteCertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteCertificate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCertificateMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteCertificate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCertificateMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConnectionMessage }
            output: DeleteConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConnectionMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConnectionMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConnectionMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointMessage }
            output: DeleteEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEndpointMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEventSubscriptionMessage }
            output: DeleteEventSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEventSubscriptionMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEventSubscriptionMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectorRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectorRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteFleetAdvisorCollector'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCollectorRequest }
            output: CollectorNotFoundFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteFleetAdvisorDatabases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetAdvisorDatabasesRequest }
            output: DeleteFleetAdvisorDatabasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteFleetAdvisorDatabases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetAdvisorDatabasesRequest }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteFleetAdvisorDatabases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetAdvisorDatabasesRequest }
            output: InvalidOperationFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationInstanceMessage }
            output: DeleteReplicationInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationInstanceMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationInstanceMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationSubnetGroupMessage }
            output: DeleteReplicationSubnetGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationSubnetGroupMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationSubnetGroupMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationTaskMessage }
            output: DeleteReplicationTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationTaskMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationTaskMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationTaskAssessmentRunMessage }
            output: DeleteReplicationTaskAssessmentRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationTaskAssessmentRunMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationTaskAssessmentRunMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReplicationTaskAssessmentRunMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDMSv20160101.DescribeAccountAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountAttributesMessage }
        output: DescribeAccountAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeApplicableIndividualAssessments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeApplicableIndividualAssessmentsMessage }
            output: DescribeApplicableIndividualAssessmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeApplicableIndividualAssessments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeApplicableIndividualAssessmentsMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeApplicableIndividualAssessments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeApplicableIndividualAssessmentsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeApplicableIndividualAssessments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeApplicableIndividualAssessmentsMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeCertificates'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCertificatesMessage }
            output: DescribeCertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeCertificates'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCertificatesMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeConnections': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsMessage }
            output: DescribeConnectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings': {
      $post: {
        input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonDMSv20160101.DescribeEndpointSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointSettingsMessage }
        output: DescribeEndpointSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes': {
      $post: {
        input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonDMSv20160101.DescribeEndpointTypes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointTypesMessage }
        output: DescribeEndpointTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeEndpoints'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndpointsMessage }
            output: DescribeEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeEndpoints'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndpointsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDMSv20160101.DescribeEventCategories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventCategoriesMessage }
        output: DescribeEventCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeEventSubscriptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventSubscriptionsMessage }
            output: DescribeEventSubscriptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeEventSubscriptions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventSubscriptionsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEvents': {
      $post: {
        input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonDMSv20160101.DescribeEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventsMessage }
        output: DescribeEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors': {
      $post:
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorCollectors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorCollectorsRequest }
            output: DescribeFleetAdvisorCollectorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorCollectors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorCollectorsRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases': {
      $post:
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorDatabases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorDatabasesRequest }
            output: DescribeFleetAdvisorDatabasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorDatabases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorDatabasesRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis': {
      $post:
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorLsaAnalysisRequest }
            output: DescribeFleetAdvisorLsaAnalysisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorLsaAnalysisRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary': {
      $post:
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorSchemaObjectSummaryRequest }
            output: DescribeFleetAdvisorSchemaObjectSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorSchemaObjectSummaryRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas': {
      $post:
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorSchemasRequest }
            output: DescribeFleetAdvisorSchemasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeFleetAdvisorSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAdvisorSchemasRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances': {
      $post: {
        input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonDMSv20160101.DescribeOrderableReplicationInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOrderableReplicationInstancesMessage }
        output: DescribeOrderableReplicationInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribePendingMaintenanceActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePendingMaintenanceActionsMessage }
            output: DescribePendingMaintenanceActionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribePendingMaintenanceActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePendingMaintenanceActionsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations': {
      $post:
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRecommendationLimitations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRecommendationLimitationsRequest }
            output: DescribeRecommendationLimitationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRecommendationLimitations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRecommendationLimitationsRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRecommendationLimitations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRecommendationLimitationsRequest }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations': {
      $post:
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRecommendationsRequest }
            output: DescribeRecommendationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRecommendationsRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxRecords?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRecommendationsRequest }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRefreshSchemasStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRefreshSchemasStatusMessage }
            output: DescribeRefreshSchemasStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRefreshSchemasStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRefreshSchemasStatusMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeRefreshSchemasStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRefreshSchemasStatusMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationInstanceTaskLogsMessage }
            output: DescribeReplicationInstanceTaskLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationInstanceTaskLogsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationInstanceTaskLogsMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationInstancesMessage }
            output: DescribeReplicationInstancesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationInstancesMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationSubnetGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationSubnetGroupsMessage }
            output: DescribeReplicationSubnetGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationSubnetGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationSubnetGroupsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTaskAssessmentResultsMessage }
            output: DescribeReplicationTaskAssessmentResultsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTaskAssessmentResultsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTaskAssessmentRunsMessage }
            output: DescribeReplicationTaskAssessmentRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTaskAssessmentRunsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTaskIndividualAssessmentsMessage }
            output: DescribeReplicationTaskIndividualAssessmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTaskIndividualAssessmentsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTasksMessage }
            output: DescribeReplicationTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeReplicationTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReplicationTasksMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSchemasMessage }
            output: DescribeSchemasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSchemasMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSchemasMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics': {
      $post:
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeTableStatistics'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableStatisticsMessage }
            output: DescribeTableStatisticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeTableStatistics'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableStatisticsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { MaxRecords?: string | undefined; Marker?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.DescribeTableStatistics'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTableStatisticsMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ImportCertificate': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ImportCertificate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportCertificateMessage }
            output: ImportCertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ImportCertificate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportCertificateMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ImportCertificate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportCertificateMessage }
            output: InvalidCertificateFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ImportCertificate'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ImportCertificateMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceMessage }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEndpointMessage }
            output: ModifyEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEndpointMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEndpointMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEndpointMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEndpointMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEndpointMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: ModifyEventSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: SNSInvalidTopicFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: SNSNoAuthorizationFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: KMSAccessDeniedFault
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: KMSDisabledFault
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: KMSInvalidStateFault
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: KMSNotFoundFault
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyEventSubscription'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: KMSThrottlingFault
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: ModifyReplicationInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: InsufficientResourceCapacityFault
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationInstanceMessage }
            output: UpgradeDependencyFailureFault
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationSubnetGroupMessage }
            output: ModifyReplicationSubnetGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationSubnetGroupMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationSubnetGroupMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationSubnetGroupMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationSubnetGroupMessage }
            output: SubnetAlreadyInUse
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationSubnetGroupMessage }
            output: ReplicationSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationSubnetGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationSubnetGroupMessage }
            output: InvalidSubnet
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationTaskMessage }
            output: ModifyReplicationTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationTaskMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationTaskMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationTaskMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ModifyReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReplicationTaskMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.MoveReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MoveReplicationTaskMessage }
            output: MoveReplicationTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.MoveReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MoveReplicationTaskMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.MoveReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MoveReplicationTaskMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.MoveReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MoveReplicationTaskMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.MoveReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MoveReplicationTaskMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.MoveReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MoveReplicationTaskMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RebootReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootReplicationInstanceMessage }
            output: RebootReplicationInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RebootReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootReplicationInstanceMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RebootReplicationInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootReplicationInstanceMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RefreshSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RefreshSchemasMessage }
            output: RefreshSchemasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RefreshSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RefreshSchemasMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RefreshSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RefreshSchemasMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RefreshSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RefreshSchemasMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RefreshSchemas'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RefreshSchemasMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.ReloadTables': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ReloadTables'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ReloadTablesMessage }
            output: ReloadTablesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ReloadTables'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ReloadTablesMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.ReloadTables'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ReloadTablesMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RemoveTagsFromResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromResourceMessage }
            output: RemoveTagsFromResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RemoveTagsFromResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromResourceMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RunFleetAdvisorLsaAnalysisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.StartRecommendations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRecommendationsRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRecommendationsRequest }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRecommendationsRequest }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartRecommendations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartRecommendationsRequest }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskMessage }
            output: StartReplicationTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentMessage }
            output: StartReplicationTaskAssessmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: StartReplicationTaskAssessmentRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: KMSAccessDeniedFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: KMSDisabledFault
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: KMSFault
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: KMSInvalidStateFault
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: KMSNotFoundFault
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: S3AccessDeniedFault
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: S3ResourceNotFoundFault
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartReplicationTaskAssessmentRunMessage }
            output: ResourceAlreadyExistsFault
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StopReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopReplicationTaskMessage }
            output: StopReplicationTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StopReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopReplicationTaskMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.StopReplicationTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopReplicationTaskMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.TestConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.TestConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestConnectionMessage }
            output: TestConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.TestConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestConnectionMessage }
            output: ResourceNotFoundFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.TestConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestConnectionMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.TestConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestConnectionMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.TestConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestConnectionMessage }
            output: ResourceQuotaExceededFault
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.TestConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestConnectionMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateSubscriptionsToEventBridgeMessage }
            output: UpdateSubscriptionsToEventBridgeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateSubscriptionsToEventBridgeMessage }
            output: AccessDeniedFault
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateSubscriptionsToEventBridgeMessage }
            output: InvalidResourceStateFault
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
