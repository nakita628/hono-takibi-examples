import { createRoute, z } from '@hono/zod-openapi'

const IdentityPoolIdSchema = z
  .string()
  .regex(/[\w-]+:[0-9a-f-]+/)
  .min(1)
  .max(55)
  .openapi('IdentityPoolId')

const BulkPublishResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The output for the BulkPublish operation.', required: [] })
  .openapi('BulkPublishResponse')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const DuplicateRequestExceptionSchema = z.any().openapi('DuplicateRequestException')

const AlreadyStreamedExceptionSchema = z.any().openapi('AlreadyStreamedException')

const IdentityIdSchema = z
  .string()
  .regex(/[\w-]+:[0-9a-f-]+/)
  .min(1)
  .max(55)
  .openapi('IdentityId')

const DatasetNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.:-]+/)
  .min(1)
  .max(128)
  .openapi('DatasetName')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const StringSchema = z.string().openapi('String')

const LongSchema = z.int().openapi('Long')

const DatasetSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
        }),
    ).exactOptional(),
    DatasetName: DatasetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
        }),
    ).exactOptional(),
    CreationDate: DateSchema.and(
      z.any().openapi({ description: 'Date on which the dataset was created.' }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'Date when the dataset was last modified.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The device that made the last change to this dataset.' }),
    ).exactOptional(),
    DataStorage: LongSchema.and(
      z.any().openapi({ description: 'Total size in bytes of the records in this dataset.' }),
    ).exactOptional(),
    NumRecords: LongSchema.and(
      z.any().openapi({ description: 'Number of records in this dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.",
    required: [],
  })
  .openapi('Dataset')

const DeleteDatasetResponseSchema = z
  .object({
    Dataset: DatasetSchema.and(
      z
        .any()
        .openapi({
          description:
            "A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response to a successful DeleteDataset request.', required: [] })
  .openapi('DeleteDatasetResponse')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ResourceConflictExceptionSchema = z.any().openapi('ResourceConflictException')

const DescribeDatasetResponseSchema = z
  .object({
    Dataset: DatasetSchema.and(
      z
        .any()
        .openapi({
          description:
            "Meta data for a collection of data for an identity. An identity can have multiple datasets. A dataset can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response to a successful DescribeDataset request.', required: [] })
  .openapi('DescribeDatasetResponse')

const IdentityPoolUsageSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
        }),
    ).exactOptional(),
    SyncSessionsCount: LongSchema.and(
      z.any().openapi({ description: 'Number of sync sessions for the identity pool.' }),
    ).exactOptional(),
    DataStorage: LongSchema.and(
      z.any().openapi({ description: 'Data storage information for the identity pool.' }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'Date on which the identity pool was last modified.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Usage information for the identity pool.', required: [] })
  .openapi('IdentityPoolUsage')

const DescribeIdentityPoolUsageResponseSchema = z
  .object({
    IdentityPoolUsage: IdentityPoolUsageSchema.and(
      z.any().openapi({ description: 'Information about the usage of the identity pool.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Response to a successful DescribeIdentityPoolUsage request.',
    required: [],
  })
  .openapi('DescribeIdentityPoolUsageResponse')

const IntegerSchema = z.int().openapi('Integer')

const IdentityUsageSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
        }),
    ).exactOptional(),
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'Date on which the identity was last modified.' }),
    ).exactOptional(),
    DatasetCount: IntegerSchema.and(
      z.any().openapi({ description: 'Number of datasets for the identity.' }),
    ).exactOptional(),
    DataStorage: LongSchema.and(
      z.any().openapi({ description: 'Total data storage for this identity.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Usage information for the identity.', required: [] })
  .openapi('IdentityUsage')

const DescribeIdentityUsageResponseSchema = z
  .object({
    IdentityUsage: IdentityUsageSchema.and(
      z.any().openapi({ description: 'Usage information for the identity.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response to a successful DescribeIdentityUsage request.',
    required: [],
  })
  .openapi('DescribeIdentityUsageResponse')

const BulkPublishStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'FAILED', 'SUCCEEDED'])
  .openapi('BulkPublishStatus')

const GetBulkPublishDetailsResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
        }),
    ).exactOptional(),
    BulkPublishStartTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The date/time at which the last bulk publish was initiated.' }),
    ).exactOptional(),
    BulkPublishCompleteTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.',
        }),
    ).exactOptional(),
    BulkPublishStatus: BulkPublishStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Status of the last bulk publish operation, valid values are: <p>NOT_STARTED - No bulk publish has been requested for this identity pool</p> <p>IN_PROGRESS - Data is being published to the configured stream</p> <p>SUCCEEDED - All data for the identity pool has been published to the configured stream</p> <p>FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause.</p>',
        }),
    ).exactOptional(),
    FailureMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The output for the GetBulkPublishDetails operation.', required: [] })
  .openapi('GetBulkPublishDetailsResponse')

const LambdaFunctionArnSchema = z.string().openapi('LambdaFunctionArn')

const EventsSchema = z
  .record(z.string(), LambdaFunctionArnSchema)
  .refine((val) => Object.keys(val).length <= 1)
  .openapi('Events')

const GetCognitoEventsResponseSchema = z
  .object({
    Events: EventsSchema.and(
      z
        .any()
        .openapi({ description: 'The Cognito Events returned from the GetCognitoEvents request' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from the GetCognitoEvents request', required: [] })
  .openapi('GetCognitoEventsResponse')

const ApplicationArnSchema = z
  .string()
  .regex(/arn:aws:sns:[-0-9a-z]+:\d+:app\/[A-Z_]+\/[a-zA-Z0-9_.-]+/)
  .openapi('ApplicationArn')

const ApplicationArnListSchema = z.array(ApplicationArnSchema).openapi('ApplicationArnList')

const AssumeRoleArnSchema = z
  .string()
  .regex(/arn:aws:iam::\d+:role\/.*/)
  .min(20)
  .max(2048)
  .openapi('AssumeRoleArn')

const PushSyncSchema = z
  .object({
    ApplicationArns: ApplicationArnListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of SNS platform application ARNs that could be used by clients.',
        }),
    ).exactOptional(),
    RoleArn: AssumeRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A role configured to allow Cognito to call SNS on behalf of the developer.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configuration options to be applied to the identity pool.',
    required: [],
  })
  .openapi('PushSync')

const StreamNameSchema = z.string().min(1).max(128).openapi('StreamName')

const StreamingStatusSchema = z.enum(['ENABLED', 'DISABLED']).openapi('StreamingStatus')

const CognitoStreamsSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.',
        }),
    ).exactOptional(),
    RoleArn: AssumeRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.',
        }),
    ).exactOptional(),
    StreamingStatus: StreamingStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Status of the Cognito streams. Valid values are: <p>ENABLED - Streaming of updates to identity pool is enabled.</p> <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Configuration options for configure Cognito streams.', required: [] })
  .openapi('CognitoStreams')

const GetIdentityPoolConfigurationResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.',
        }),
    ).exactOptional(),
    PushSync: PushSyncSchema.and(
      z
        .any()
        .openapi({
          description: 'Options to apply to this identity pool for push synchronization.',
        }),
    ).exactOptional(),
    CognitoStreams: CognitoStreamsSchema.and(
      z
        .any()
        .openapi({
          description: 'Options to apply to this identity pool for Amazon Cognito streams.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output for the GetIdentityPoolConfiguration operation.',
    required: [],
  })
  .openapi('GetIdentityPoolConfigurationResponse')

const DatasetListSchema = z.array(DatasetSchema).openapi('DatasetList')

const ListDatasetsResponseSchema = z
  .object({
    Datasets: DatasetListSchema.and(
      z.any().openapi({ description: 'A set of datasets.' }),
    ).exactOptional(),
    Count: IntegerSchema.and(
      z.any().openapi({ description: 'Number of datasets returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A pagination token for obtaining the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returned for a successful ListDatasets request.', required: [] })
  .openapi('ListDatasetsResponse')

const IdentityPoolUsageListSchema = z
  .array(IdentityPoolUsageSchema)
  .openapi('IdentityPoolUsageList')

const ListIdentityPoolUsageResponseSchema = z
  .object({
    IdentityPoolUsages: IdentityPoolUsageListSchema.and(
      z.any().openapi({ description: 'Usage information for the identity pools.' }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to be returned.' }),
    ).exactOptional(),
    Count: IntegerSchema.and(
      z.any().openapi({ description: 'Total number of identities for the identity pool.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A pagination token for obtaining the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returned for a successful ListIdentityPoolUsage request.',
    required: [],
  })
  .openapi('ListIdentityPoolUsageResponse')

const RecordKeySchema = z.string().min(1).max(1024).openapi('RecordKey')

const RecordValueSchema = z.string().max(1048575).openapi('RecordValue')

const RecordSchema = z
  .object({
    Key: RecordKeySchema.and(
      z.any().openapi({ description: 'The key for the record.' }),
    ).exactOptional(),
    Value: RecordValueSchema.and(
      z.any().openapi({ description: 'The value for the record.' }),
    ).exactOptional(),
    SyncCount: LongSchema.and(
      z.any().openapi({ description: 'The server sync count for this record.' }),
    ).exactOptional(),
    LastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The date on which the record was last modified.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user/device that made the last change to this record.' }),
    ).exactOptional(),
    DeviceLastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The last modified date of the client device.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The basic data structure of a dataset.', required: [] })
  .openapi('Record')

const RecordListSchema = z.array(RecordSchema).openapi('RecordList')

const MergedDatasetNameListSchema = z.array(StringSchema).openapi('MergedDatasetNameList')

const BooleanSchema = z.boolean().openapi('Boolean')

const ListRecordsResponseSchema = z
  .object({
    Records: RecordListSchema.and(
      z.any().openapi({ description: 'A list of all records.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A pagination token for obtaining the next page of results.' }),
    ).exactOptional(),
    Count: IntegerSchema.and(
      z.any().openapi({ description: 'Total number of records.' }),
    ).exactOptional(),
    DatasetSyncCount: LongSchema.and(
      z.any().openapi({ description: 'Server sync count for this dataset.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user/device that made the last change to this record.' }),
    ).exactOptional(),
    MergedDatasetNames: MergedDatasetNameListSchema.and(
      z.any().openapi({ description: 'Names of merged datasets.' }),
    ).exactOptional(),
    DatasetExists: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the dataset exists.' }),
    ).exactOptional(),
    DatasetDeletedAfterRequestedSyncCount: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A boolean value specifying whether to delete the dataset locally.',
        }),
    ).exactOptional(),
    SyncSessionToken: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A token containing a session ID, identity ID, and expiration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returned for a successful ListRecordsRequest.', required: [] })
  .openapi('ListRecordsResponse')

const DeviceIdSchema = z.string().min(1).max(256).openapi('DeviceId')

const RegisterDeviceResponseSchema = z
  .object({
    DeviceId: DeviceIdSchema.and(
      z.any().openapi({ description: 'The unique ID generated for this device by Cognito.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response to a RegisterDevice request.', required: [] })
  .openapi('RegisterDeviceResponse')

const InvalidConfigurationExceptionSchema = z.any().openapi('InvalidConfigurationException')

const SetIdentityPoolConfigurationResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.',
        }),
    ).exactOptional(),
    PushSync: PushSyncSchema.and(
      z
        .any()
        .openapi({
          description: 'Options to apply to this identity pool for push synchronization.',
        }),
    ).exactOptional(),
    CognitoStreams: CognitoStreamsSchema.and(
      z
        .any()
        .openapi({
          description: 'Options to apply to this identity pool for Amazon Cognito streams.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output for the SetIdentityPoolConfiguration operation',
    required: [],
  })
  .openapi('SetIdentityPoolConfigurationResponse')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const SubscribeToDatasetResponseSchema = z
  .object({})
  .openapi({ description: 'Response to a SubscribeToDataset request.' })
  .openapi('SubscribeToDatasetResponse')

const UnsubscribeFromDatasetResponseSchema = z
  .object({})
  .openapi({ description: 'Response to an UnsubscribeFromDataset request.' })
  .openapi('UnsubscribeFromDatasetResponse')

const UpdateRecordsResponseSchema = z
  .object({
    Records: RecordListSchema.and(
      z.any().openapi({ description: 'A list of records that have been updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returned for a successful UpdateRecordsRequest.', required: [] })
  .openapi('UpdateRecordsResponse')

const OperationSchema = z.enum(['replace', 'remove']).openapi('Operation')

const RecordPatchSchema = z
  .object({
    Op: OperationSchema.and(
      z.any().openapi({ description: 'An operation, either replace or remove.' }),
    ),
    Key: RecordKeySchema.and(
      z.any().openapi({ description: 'The key associated with the record patch.' }),
    ),
    Value: RecordValueSchema.and(
      z.any().openapi({ description: 'The value associated with the record patch.' }),
    ).exactOptional(),
    SyncCount: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'Last known server sync count for this record. Set to 0 if unknown.',
        }),
    ),
    DeviceLastModifiedDate: DateSchema.and(
      z.any().openapi({ description: 'The last modified date of the client device.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Op', 'Key', 'SyncCount'],
    description: 'An update operation for a record.',
  })
  .openapi('RecordPatch')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InvalidLambdaFunctionOutputExceptionSchema = z
  .any()
  .openapi('InvalidLambdaFunctionOutputException')

const LambdaThrottledExceptionSchema = z.any().openapi('LambdaThrottledException')

const BulkPublishRequestSchema = z
  .object({})
  .openapi({ title: 'BulkPublishRequest', description: 'The input for the BulkPublish operation.' })
  .openapi('BulkPublishRequest')

const ClientContextSchema = z.string().openapi('ClientContext')

const CognitoEventTypeSchema = z.string().openapi('CognitoEventType')

const DeleteDatasetRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDatasetRequest',
    description: 'A request to delete the specific dataset.',
  })
  .openapi('DeleteDatasetRequest')

const DescribeDatasetRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeDatasetRequest',
    description:
      'A request for meta data about a dataset (creation date, number of records, size) by owner and dataset name.',
  })
  .openapi('DescribeDatasetRequest')

const DescribeIdentityPoolUsageRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeIdentityPoolUsageRequest',
    description: 'A request for usage information about the identity pool.',
  })
  .openapi('DescribeIdentityPoolUsageRequest')

const DescribeIdentityUsageRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeIdentityUsageRequest',
    description: 'A request for information about the usage of an identity pool.',
  })
  .openapi('DescribeIdentityUsageRequest')

const GetBulkPublishDetailsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetBulkPublishDetailsRequest',
    description: 'The input for the GetBulkPublishDetails operation.',
  })
  .openapi('GetBulkPublishDetailsRequest')

const GetCognitoEventsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetCognitoEventsRequest',
    description: 'A request for a list of the configured Cognito Events',
  })
  .openapi('GetCognitoEventsRequest')

const GetIdentityPoolConfigurationRequestSchema = z
  .object({})
  .openapi({
    title: 'GetIdentityPoolConfigurationRequest',
    description: 'The input for the GetIdentityPoolConfiguration operation.',
  })
  .openapi('GetIdentityPoolConfigurationRequest')

const IntegerStringSchema = z.int().openapi('IntegerString')

const ListDatasetsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDatasetsRequest',
    description: 'Request for a list of datasets for an identity.',
  })
  .openapi('ListDatasetsRequest')

const ListIdentityPoolUsageRequestSchema = z
  .object({})
  .openapi({
    title: 'ListIdentityPoolUsageRequest',
    description: 'A request for usage information on an identity pool.',
  })
  .openapi('ListIdentityPoolUsageRequest')

const SyncSessionTokenSchema = z.string().openapi('SyncSessionToken')

const ListRecordsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRecordsRequest', description: 'A request for a list of records.' })
  .openapi('ListRecordsRequest')

const PlatformSchema = z.enum(['APNS', 'APNS_SANDBOX', 'GCM', 'ADM']).openapi('Platform')

const PushTokenSchema = z.string().openapi('PushToken')

const RecordPatchListSchema = z.array(RecordPatchSchema).openapi('RecordPatchList')

const RegisterDeviceRequestSchema = z
  .object({
    Platform: PlatformSchema.and(
      z
        .any()
        .openapi({ description: 'The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).' }),
    ),
    Token: PushTokenSchema.and(z.any().openapi({ description: 'The push token.' })),
  })
  .openapi({
    required: ['Platform', 'Token'],
    title: 'RegisterDeviceRequest',
    description: 'A request to RegisterDevice.',
  })
  .openapi('RegisterDeviceRequest')

const SetCognitoEventsRequestSchema = z
  .object({ Events: EventsSchema.and(z.any().openapi({ description: 'The events to configure' })) })
  .openapi({
    required: ['Events'],
    title: 'SetCognitoEventsRequest',
    description: '<p>A request to configure Cognito Events"</p>"',
  })
  .openapi('SetCognitoEventsRequest')

const SetIdentityPoolConfigurationRequestSchema = z
  .object({
    PushSync: PushSyncSchema.and(
      z
        .any()
        .openapi({
          description: 'Options to apply to this identity pool for push synchronization.',
        }),
    ).exactOptional(),
    CognitoStreams: CognitoStreamsSchema.and(
      z
        .any()
        .openapi({
          description: 'Options to apply to this identity pool for Amazon Cognito streams.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'SetIdentityPoolConfigurationRequest',
    description: 'The input for the SetIdentityPoolConfiguration operation.',
    required: [],
  })
  .openapi('SetIdentityPoolConfigurationRequest')

const SubscribeToDatasetRequestSchema = z
  .object({})
  .openapi({
    title: 'SubscribeToDatasetRequest',
    description: 'A request to SubscribeToDatasetRequest.',
  })
  .openapi('SubscribeToDatasetRequest')

const UnsubscribeFromDatasetRequestSchema = z
  .object({})
  .openapi({
    title: 'UnsubscribeFromDatasetRequest',
    description: 'A request to UnsubscribeFromDataset.',
  })
  .openapi('UnsubscribeFromDatasetRequest')

const UpdateRecordsRequestSchema = z
  .object({
    DeviceId: DeviceIdSchema.and(
      z.any().openapi({ description: 'The unique ID generated for this device by Cognito.' }),
    ).exactOptional(),
    RecordPatches: RecordPatchListSchema.and(
      z.any().openapi({ description: 'A list of patch operations.' }),
    ).exactOptional(),
    SyncSessionToken: SyncSessionTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.',
        }),
    ),
  })
  .openapi({
    required: ['SyncSessionToken'],
    title: 'UpdateRecordsRequest',
    description:
      'A request to post updates to records or add and delete records for a dataset and user.',
  })
  .openapi('UpdateRecordsRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postIdentitypoolsIdentityPoolIdBulkpublishRoute = createRoute({
  method: 'post',
  path: '/identitypools/{IdentityPoolId}/bulkpublish',
  description:
    '<p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'BulkPublish',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BulkPublishResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'DuplicateRequestException',
      content: { 'application/json': { schema: DuplicateRequestExceptionSchema } },
    },
    485: {
      description: 'AlreadyStreamedException',
      content: { 'application/json': { schema: AlreadyStreamedExceptionSchema } },
    },
  },
})

export const getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute =
  createRoute({
    method: 'get',
    path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}',
    description:
      '<p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>',
    operationId: 'DescribeDataset',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        IdentityPoolId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityPoolId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        IdentityId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        DatasetName: z
          .string()
          .regex(/[a-zA-Z0-9_.:-]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'DatasetName',
              in: 'path',
              required: true,
              description:
                "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
              schema: { type: 'string', pattern: '[a-zA-Z0-9_.:-]+', minLength: 1, maxLength: 128 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
      },
      480: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute =
  createRoute({
    method: 'post',
    path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}',
    description:
      '<p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>',
    operationId: 'UpdateRecords',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-Client-Context': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amz-Client-Context',
              in: 'header',
              required: false,
              description:
                'Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.',
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        IdentityPoolId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityPoolId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        IdentityId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        DatasetName: z
          .string()
          .regex(/[a-zA-Z0-9_.:-]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'DatasetName',
              in: 'path',
              required: true,
              description:
                "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
              schema: { type: 'string', pattern: '[a-zA-Z0-9_.:-]+', minLength: 1, maxLength: 128 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                DeviceId: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({ description: 'The unique ID generated for this device by Cognito.' }),
                RecordPatches: z
                  .array(RecordPatchSchema)
                  .exactOptional()
                  .openapi({ description: 'A list of patch operations.' }),
                SyncSessionToken: z
                  .string()
                  .openapi({
                    description:
                      'The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.',
                  }),
              })
              .openapi({ required: ['SyncSessionToken'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateRecordsResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ResourceConflictException',
        content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
      },
      485: {
        description: 'InvalidLambdaFunctionOutputException',
        content: { 'application/json': { schema: InvalidLambdaFunctionOutputExceptionSchema } },
      },
      486: {
        description: 'LambdaThrottledException',
        content: { 'application/json': { schema: LambdaThrottledExceptionSchema } },
      },
      487: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      488: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute =
  createRoute({
    method: 'delete',
    path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}',
    description:
      "<p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>",
    operationId: 'DeleteDataset',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        IdentityPoolId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityPoolId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        IdentityId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        DatasetName: z
          .string()
          .regex(/[a-zA-Z0-9_.:-]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'DatasetName',
              in: 'path',
              required: true,
              description:
                "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
              schema: { type: 'string', pattern: '[a-zA-Z0-9_.:-]+', minLength: 1, maxLength: 128 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteDatasetResponseSchema } },
      },
      480: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'ResourceConflictException',
        content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
      },
    },
  })

export const getIdentitypoolsIdentityPoolIdRoute = createRoute({
  method: 'get',
  path: '/identitypools/{IdentityPoolId}',
  description:
    '<p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'DescribeIdentityPoolUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeIdentityPoolUsageResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdRoute = createRoute({
  method: 'get',
  path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}',
  description:
    '<p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>',
  operationId: 'DescribeIdentityUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
      IdentityId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeIdentityUsageResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postIdentitypoolsIdentityPoolIdGetBulkPublishDetailsRoute = createRoute({
  method: 'post',
  path: '/identitypools/{IdentityPoolId}/getBulkPublishDetails',
  description:
    '<p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'GetBulkPublishDetails',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBulkPublishDetailsResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const getIdentitypoolsIdentityPoolIdEventsRoute = createRoute({
  method: 'get',
  path: '/identitypools/{IdentityPoolId}/events',
  description:
    '<p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'GetCognitoEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description: 'The Cognito Identity Pool ID for the request',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCognitoEventsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postIdentitypoolsIdentityPoolIdEventsRoute = createRoute({
  method: 'post',
  path: '/identitypools/{IdentityPoolId}/events',
  description:
    '<p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'SetCognitoEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description: 'The Cognito Identity Pool to use when configuring Cognito Events',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Events: z
                .record(z.string(), LambdaFunctionArnSchema)
                .refine((val) => Object.keys(val).length <= 1)
                .openapi({ description: 'The events to configure' }),
            })
            .openapi({ required: ['Events'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getIdentitypoolsIdentityPoolIdConfigurationRoute = createRoute({
  method: 'get',
  path: '/identitypools/{IdentityPoolId}/configuration',
  description:
    '<p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'GetIdentityPoolConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIdentityPoolConfigurationResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postIdentitypoolsIdentityPoolIdConfigurationRoute = createRoute({
  method: 'post',
  path: '/identitypools/{IdentityPoolId}/configuration',
  description:
    '<p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'SetIdentityPoolConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PushSync: z
                .object({
                  ApplicationArns: ApplicationArnListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'List of SNS platform application ARNs that could be used by clients.',
                      }),
                  ).exactOptional(),
                  RoleArn: AssumeRoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A role configured to allow Cognito to call SNS on behalf of the developer.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Configuration options to be applied to the identity pool.',
                  required: [],
                }),
              CognitoStreams: z
                .object({
                  StreamName: StreamNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.',
                      }),
                  ).exactOptional(),
                  RoleArn: AssumeRoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.',
                      }),
                  ).exactOptional(),
                  StreamingStatus: StreamingStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Status of the Cognito streams. Valid values are: <p>ENABLED - Streaming of updates to identity pool is enabled.</p> <p>DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Configuration options for configure Cognito streams.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetIdentityPoolConfigurationResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsRoute = createRoute({
  method: 'get',
  path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets',
  description:
    '<p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>',
  operationId: 'ListDatasets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
      IdentityId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A pagination token for obtaining the next page of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getIdentitypoolsRoute = createRoute({
  method: 'get',
  path: '/identitypools',
  description:
    '<p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>',
  operationId: 'ListIdentityPoolUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A pagination token for obtaining the next page of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIdentityPoolUsageResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsRoute =
  createRoute({
    method: 'get',
    path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records',
    description:
      '<p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>',
    operationId: 'ListRecords',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        IdentityPoolId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityPoolId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        IdentityId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        DatasetName: z
          .string()
          .regex(/[a-zA-Z0-9_.:-]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'DatasetName',
              in: 'path',
              required: true,
              description:
                "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
              schema: { type: 'string', pattern: '[a-zA-Z0-9_.:-]+', minLength: 1, maxLength: 128 },
            },
          }),
      }),
      query: z.object({
        lastSyncCount: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'lastSyncCount',
              in: 'query',
              required: false,
              description: 'The last server sync count for this record.',
              schema: { type: 'integer' },
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description: 'A pagination token for obtaining the next page of results.',
              schema: { type: 'string' },
            },
          }),
        maxResults: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              required: false,
              description: 'The maximum number of results to be returned.',
              schema: { type: 'integer' },
            },
          }),
        syncSessionToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'syncSessionToken',
              in: 'query',
              required: false,
              description: 'A token containing a session ID, identity ID, and expiration.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListRecordsResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceRoute = createRoute({
  method: 'post',
  path: '/identitypools/{IdentityPoolId}/identity/{IdentityId}/device',
  description:
    '<p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>',
  operationId: 'RegisterDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IdentityPoolId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityPoolId',
            in: 'path',
            required: true,
            description:
              'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
      IdentityId: z
        .string()
        .regex(/[\w-]+:[0-9a-f-]+/)
        .min(1)
        .max(55)
        .openapi({
          param: {
            name: 'IdentityId',
            in: 'path',
            required: true,
            description: 'The unique ID for this identity.',
            schema: { type: 'string', pattern: '[\\w-]+:[0-9a-f-]+', minLength: 1, maxLength: 55 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Platform: z
                .enum(['APNS', 'APNS_SANDBOX', 'GCM', 'ADM'])
                .openapi({
                  description: 'The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).',
                }),
              Token: z.string().openapi({ description: 'The push token.' }),
            })
            .openapi({ required: ['Platform', 'Token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterDeviceResponseSchema } },
    },
    480: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidConfigurationException',
      content: { 'application/json': { schema: InvalidConfigurationExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute =
  createRoute({
    method: 'post',
    path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}',
    description:
      '<p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>',
    operationId: 'SubscribeToDataset',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        IdentityPoolId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityPoolId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        IdentityId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityId',
              in: 'path',
              required: true,
              description: 'Unique ID for this identity.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        DatasetName: z
          .string()
          .regex(/[a-zA-Z0-9_.:-]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'DatasetName',
              in: 'path',
              required: true,
              description: 'The name of the dataset to subcribe to.',
              schema: { type: 'string', pattern: '[a-zA-Z0-9_.:-]+', minLength: 1, maxLength: 128 },
            },
          }),
        DeviceId: z
          .string()
          .min(1)
          .max(256)
          .openapi({
            param: {
              name: 'DeviceId',
              in: 'path',
              required: true,
              description: 'The unique ID generated for this device by Cognito.',
              schema: { type: 'string', minLength: 1, maxLength: 256 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SubscribeToDatasetResponseSchema } },
      },
      480: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      484: {
        description: 'InvalidConfigurationException',
        content: { 'application/json': { schema: InvalidConfigurationExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute =
  createRoute({
    method: 'delete',
    path: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}',
    description:
      '<p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>',
    operationId: 'UnsubscribeFromDataset',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        IdentityPoolId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityPoolId',
              in: 'path',
              required: true,
              description:
                'A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        IdentityId: z
          .string()
          .regex(/[\w-]+:[0-9a-f-]+/)
          .min(1)
          .max(55)
          .openapi({
            param: {
              name: 'IdentityId',
              in: 'path',
              required: true,
              description: 'Unique ID for this identity.',
              schema: {
                type: 'string',
                pattern: '[\\w-]+:[0-9a-f-]+',
                minLength: 1,
                maxLength: 55,
              },
            },
          }),
        DatasetName: z
          .string()
          .regex(/[a-zA-Z0-9_.:-]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'DatasetName',
              in: 'path',
              required: true,
              description: 'The name of the dataset from which to unsubcribe.',
              schema: { type: 'string', pattern: '[a-zA-Z0-9_.:-]+', minLength: 1, maxLength: 128 },
            },
          }),
        DeviceId: z
          .string()
          .min(1)
          .max(256)
          .openapi({
            param: {
              name: 'DeviceId',
              in: 'path',
              required: true,
              description: 'The unique ID generated for this device by Cognito.',
              schema: { type: 'string', minLength: 1, maxLength: 256 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UnsubscribeFromDatasetResponseSchema } },
      },
      480: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      484: {
        description: 'InvalidConfigurationException',
        content: { 'application/json': { schema: InvalidConfigurationExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })
