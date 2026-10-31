import { createRoute, z } from '@hono/zod-openapi'

const BandwidthLimitSchema = z
  .object({
    limitMbps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Bandwidth rate in megabytes per second, distributed across all the agents in the pool.',
      }),
  })
  .openapi({ description: 'Specifies a bandwidth limit for an agent pool.', required: [] })
  .openapi('BandwidthLimit')

const AgentPoolSchema = z
  .object({
    bandwidthLimit: BandwidthLimitSchema.exactOptional().openapi({
      description:
        "Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.",
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the client-specified AgentPool description.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'CREATED', 'DELETING'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the state of the AgentPool.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents an On-Premises Agent pool.', required: [] })
  .openapi('AgentPool')

const AwsAccessKeySchema = z
  .object({
    accessKeyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. AWS access key ID.' }),
    secretAccessKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. AWS secret access key. This field is not returned in RPC responses.',
      }),
  })
  .openapi({
    description:
      'AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).',
    required: [],
  })
  .openapi('AwsAccessKey')

const S3CompatibleMetadataSchema = z
  .object({
    authMethod: z
      .enum([
        'AUTH_METHOD_UNSPECIFIED',
        'AUTH_METHOD_AWS_SIGNATURE_V4',
        'AUTH_METHOD_AWS_SIGNATURE_V2',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use.',
      }),
    listApi: z
      .enum(['LIST_API_UNSPECIFIED', 'LIST_OBJECTS_V2', 'LIST_OBJECTS'])
      .exactOptional()
      .openapi({
        description:
          'The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use.',
      }),
    protocol: z
      .enum(['NETWORK_PROTOCOL_UNSPECIFIED', 'NETWORK_PROTOCOL_HTTPS', 'NETWORK_PROTOCOL_HTTP'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.',
      }),
    requestModel: z
      .enum([
        'REQUEST_MODEL_UNSPECIFIED',
        'REQUEST_MODEL_VIRTUAL_HOSTED_STYLE',
        'REQUEST_MODEL_PATH_STYLE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.',
      }),
  })
  .openapi({
    description:
      'S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.',
    required: [],
  })
  .openapi('S3CompatibleMetadata')

const AwsS3CompatibleDataSchema = z
  .object({
    bucketName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Specifies the name of the bucket.' }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Specifies the endpoint of the storage service.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Specifies the root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty region.',
      }),
    s3Metadata: S3CompatibleMetadataSchema.exactOptional().openapi({
      description: 'A S3 compatible metadata.',
    }),
  })
  .openapi({ description: 'An AwsS3CompatibleData resource.', required: [] })
  .openapi('AwsS3CompatibleData')

const AwsS3DataSchema = z
  .object({
    awsAccessKey: AwsAccessKeySchema.exactOptional().openapi({
      description:
        'Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be granted to the access ID of the AWS access key. For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).',
    }),
    bucketName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. S3 Bucket name (see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      }),
    roleArn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Amazon Resource Name (ARN) of the role to support temporary credentials via `AssumeRoleWithWebIdentity`. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a `AssumeRoleWithWebIdentity` call for the provided role using the GoogleServiceAccount for this project.',
      }),
  })
  .openapi({
    description:
      "An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.",
    required: [],
  })
  .openapi('AwsS3Data')

const AzureCredentialsSchema = z
  .object({
    sasToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Azure shared access signature (SAS). For more information about SAS, see [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).',
      }),
  })
  .openapi({
    description:
      'Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).',
    required: [],
  })
  .openapi('AzureCredentials')

const AzureBlobStorageDataSchema = z
  .object({
    azureCredentials: AzureCredentialsSchema.exactOptional().openapi({
      description:
        'Required. Input only. Credentials used to authenticate API requests to Azure. For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).',
    }),
    container: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The container to transfer from the Azure Storage account.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      }),
    storageAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the Azure Storage account.' }),
  })
  .openapi({
    description:
      "An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).",
    required: [],
  })
  .openapi('AzureBlobStorageData')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ErrorLogEntrySchema = z
  .object({
    errorDetails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of messages that carry the error details.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A URL that refers to the target (a data source, a data sink, or an object) with which the error is associated.',
      }),
  })
  .openapi({ description: 'An entry describing an error that has occurred.', required: [] })
  .openapi('ErrorLogEntry')

const ErrorSummarySchema = z
  .object({
    errorCode: z
      .enum([
        'OK',
        'CANCELLED',
        'UNKNOWN',
        'INVALID_ARGUMENT',
        'DEADLINE_EXCEEDED',
        'NOT_FOUND',
        'ALREADY_EXISTS',
        'PERMISSION_DENIED',
        'UNAUTHENTICATED',
        'RESOURCE_EXHAUSTED',
        'FAILED_PRECONDITION',
        'ABORTED',
        'OUT_OF_RANGE',
        'UNIMPLEMENTED',
        'INTERNAL',
        'UNAVAILABLE',
        'DATA_LOSS',
      ])
      .exactOptional()
      .openapi({ description: 'Required.' }),
    errorCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Count of this type of error.' }),
    errorLogEntries: z
      .array(ErrorLogEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Error samples. At most 5 error log entries are recorded for a given error code for a single transfer operation.',
      }),
  })
  .openapi({
    description: 'A summary of errors by error code, plus a count and sample error log entries.',
    required: [],
  })
  .openapi('ErrorSummary')

const EventStreamSchema = z
  .object({
    eventStreamExpirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated.',
      }),
    eventStreamStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.",
      }),
  })
  .openapi({
    description:
      'Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files.',
    required: [],
  })
  .openapi('EventStream')

const GcsDataSchema = z
  .object({
    bucketName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Cloud Storage bucket name. Must meet [Bucket Name Requirements](/storage/docs/naming#requirements).',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. The root path value must meet [Object Name Requirements](/storage/docs/naming#objectnames).",
      }),
  })
  .openapi({
    description:
      "In a GcsData resource, an object's name is the Cloud Storage object's name and its \"last modification time\" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.",
    required: [],
  })
  .openapi('GcsData')

const GoogleServiceAccountSchema = z
  .object({
    accountEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the service account.' }),
    subjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the service account.' }),
  })
  .openapi({ description: 'Google service account', required: [] })
  .openapi('GoogleServiceAccount')

const HttpDataSchema = z
  .object({
    listUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.',
      }),
  })
  .openapi({
    description:
      'An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer.',
    required: [],
  })
  .openapi('HttpData')

const ListAgentPoolsResponseSchema = z
  .object({
    agentPools: z
      .array(AgentPoolSchema)
      .exactOptional()
      .openapi({ description: 'A list of agent pools.' }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'The list next page token.' }),
  })
  .openapi({ description: 'Response from ListAgentPools.', required: [] })
  .openapi('ListAgentPoolsResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned unique name. The format of `name` is `transferOperations/some/unique/name`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const LoggingConfigSchema = z
  .object({
    enableOnpremGcsTransferLogs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.',
      }),
    logActionStates: z
      .array(z.enum(['LOGGABLE_ACTION_STATE_UNSPECIFIED', 'SUCCEEDED', 'FAILED']))
      .exactOptional()
      .openapi({
        description:
          'States in which `log_actions` are logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead.',
      }),
    logActions: z
      .array(z.enum(['LOGGABLE_ACTION_UNSPECIFIED', 'FIND', 'DELETE', 'COPY']))
      .exactOptional()
      .openapi({
        description:
          'Specifies the actions to be logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead.',
      }),
  })
  .openapi({
    description:
      'Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.',
    required: [],
  })
  .openapi('LoggingConfig')

const NotificationConfigSchema = z
  .object({
    eventTypes: z
      .array(
        z.enum([
          'EVENT_TYPE_UNSPECIFIED',
          'TRANSFER_OPERATION_SUCCESS',
          'TRANSFER_OPERATION_FAILED',
          'TRANSFER_OPERATION_ABORTED',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Event types for which a notification is desired. If empty, send notifications for all event types.',
      }),
    payloadFormat: z
      .enum(['PAYLOAD_FORMAT_UNSPECIFIED', 'NONE', 'JSON'])
      .exactOptional()
      .openapi({
        description: 'Required. The desired format of the notification message payloads.',
      }),
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The `Topic.name` of the Pub/Sub topic to which to publish notifications. Must be of the format: `projects/{project}/topics/{topic}`. Not matching this format results in an INVALID_ARGUMENT error.',
      }),
  })
  .openapi({
    description:
      'Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.',
    required: [],
  })
  .openapi('NotificationConfig')

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const ScheduleSchema = z
  .object({
    endTimeOfDay: TimeOfDaySchema.exactOptional().openapi({
      description:
        'The time in UTC that no further transfer operations are scheduled. Combined with schedule_end_date, `end_time_of_day` specifies the end date and time for starting new transfer operations. This field must be greater than or equal to the timestamp corresponding to the combintation of schedule_start_date and start_time_of_day, and is subject to the following: * If `end_time_of_day` is not set and `schedule_end_date` is set, then a default value of `23:59:59` is used for `end_time_of_day`. * If `end_time_of_day` is set and `schedule_end_date` is not set, then INVALID_ARGUMENT is returned.',
    }),
    repeatInterval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour.',
      }),
    scheduleEndDate: DateSchema.exactOptional().openapi({
      description:
        'The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs once per 24 hours within the following guidelines: * If `schedule_end_date` and schedule_start_date are the same and in the future relative to UTC, the transfer is executed only one time. * If `schedule_end_date` is later than `schedule_start_date` and `schedule_end_date` is in the future relative to UTC, the job runs each day at start_time_of_day through `schedule_end_date`.',
    }),
    scheduleStartDate: DateSchema.exactOptional().openapi({
      description:
        "Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If `schedule_start_date` and start_time_of_day are in the past relative to the job's creation time, the transfer starts the day after you schedule the transfer request. **Note:** When starting jobs at or near midnight UTC it is possible that a job starts later than expected. For example, if you send an outbound request on June 1 one millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it creates a TransferJob with `schedule_start_date` set to June 2 and a `start_time_of_day` set to midnight UTC. The first scheduled TransferOperation takes place on June 3 at midnight UTC.",
    }),
    startTimeOfDay: TimeOfDaySchema.exactOptional().openapi({
      description:
        'The time in UTC that a transfer job is scheduled to run. Transfers may start later than this time. If `start_time_of_day` is not specified: * One-time transfers run immediately. * Recurring transfers run immediately, and each day at midnight UTC, through schedule_end_date. If `start_time_of_day` is specified: * One-time transfers run at the specified time. * Recurring transfers run at the specified time each day, through `schedule_end_date`.',
    }),
  })
  .openapi({
    description: 'Transfers can be scheduled to recur or to run just once.',
    required: [],
  })
  .openapi('Schedule')

const ObjectConditionsSchema = z
  .object({
    excludePrefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`: * Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`. * None of the exclude-prefix values can be empty, if specified. * Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix. * If include_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).',
      }),
    includePrefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`: * Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`. * None of the include-prefix values can be empty, if specified. * Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).',
      }),
    lastModifiedBefore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If specified, only objects with a "last modification time" before this timestamp and objects that don\'t have a "last modification time" are transferred.',
      }),
    lastModifiedSince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If specified, only objects with a "last modification time" on or after this timestamp and objects that don\'t have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day\'s worth of data at a time. For that you\'d set each of the fields as follows: * `last_modified_since` to the start of the day * `last_modified_before` to the end of the day',
      }),
    maxTimeElapsedSinceLastModification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.',
      }),
    minTimeElapsedSinceLastModification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.',
      }),
  })
  .openapi({
    description:
      'Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object\'s content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don\'t support `ObjectConditions`.',
    required: [],
  })
  .openapi('ObjectConditions')

const PosixFilesystemSchema = z
  .object({
    rootDirectory: z
      .string()
      .exactOptional()
      .openapi({ description: 'Root directory path to the filesystem.' }),
  })
  .openapi({ description: 'A POSIX filesystem resource.', required: [] })
  .openapi('PosixFilesystem')

const TransferManifestSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have `storage.objects.get` permission for this object. An example path is `gs://bucket_name/path/manifest.csv`.',
      }),
  })
  .openapi({ description: 'Specifies where the manifest is located.', required: [] })
  .openapi('TransferManifest')

const MetadataOptionsSchema = z
  .object({
    acl: z
      .enum(['ACL_UNSPECIFIED', 'ACL_DESTINATION_BUCKET_DEFAULT', 'ACL_PRESERVE'])
      .exactOptional()
      .openapi({
        description:
          "Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT.",
      }),
    gid: z
      .enum(['GID_UNSPECIFIED', 'GID_SKIP', 'GID_NUMBER'])
      .exactOptional()
      .openapi({
        description:
          "Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.",
      }),
    kmsKey: z
      .enum(['KMS_KEY_UNSPECIFIED', 'KMS_KEY_DESTINATION_BUCKET_DEFAULT', 'KMS_KEY_PRESERVE'])
      .exactOptional()
      .openapi({
        description:
          "Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT.",
      }),
    mode: z
      .enum(['MODE_UNSPECIFIED', 'MODE_SKIP', 'MODE_PRESERVE'])
      .exactOptional()
      .openapi({
        description:
          "Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.",
      }),
    storageClass: z
      .enum([
        'STORAGE_CLASS_UNSPECIFIED',
        'STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT',
        'STORAGE_CLASS_PRESERVE',
        'STORAGE_CLASS_STANDARD',
        'STORAGE_CLASS_NEARLINE',
        'STORAGE_CLASS_COLDLINE',
        'STORAGE_CLASS_ARCHIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT.',
      }),
    symlink: z
      .enum(['SYMLINK_UNSPECIFIED', 'SYMLINK_SKIP', 'SYMLINK_PRESERVE'])
      .exactOptional()
      .openapi({
        description:
          'Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.',
      }),
    temporaryHold: z
      .enum(['TEMPORARY_HOLD_UNSPECIFIED', 'TEMPORARY_HOLD_SKIP', 'TEMPORARY_HOLD_PRESERVE'])
      .exactOptional()
      .openapi({
        description:
          "Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE.",
      }),
    timeCreated: z
      .enum([
        'TIME_CREATED_UNSPECIFIED',
        'TIME_CREATED_SKIP',
        'TIME_CREATED_PRESERVE_AS_CUSTOM_TIME',
      ])
      .exactOptional()
      .openapi({
        description:
          "Specifies how each object's `timeCreated` metadata is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TIME_CREATED_SKIP.",
      }),
    uid: z
      .enum(['UID_UNSPECIFIED', 'UID_SKIP', 'UID_NUMBER'])
      .exactOptional()
      .openapi({
        description:
          "Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.",
      }),
  })
  .openapi({ description: 'Specifies the metadata options for running a transfer.', required: [] })
  .openapi('MetadataOptions')

const TransferOptionsSchema = z
  .object({
    deleteObjectsFromSourceAfterTransfer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option and delete_objects_unique_in_sink are mutually exclusive.',
      }),
    deleteObjectsUniqueInSink: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether objects that exist only in the sink should be deleted. **Note:** This option and delete_objects_from_source_after_transfer are mutually exclusive.',
      }),
    metadataOptions: MetadataOptionsSchema.exactOptional().openapi({
      description: 'Represents the selected metadata options for a transfer job.',
    }),
    overwriteObjectsAlreadyExistingInSink: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are ovewritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object.',
      }),
    overwriteWhen: z
      .enum(['OVERWRITE_WHEN_UNSPECIFIED', 'DIFFERENT', 'NEVER', 'ALWAYS'])
      .exactOptional()
      .openapi({
        description:
          'When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink.',
      }),
  })
  .openapi({
    description: 'TransferOptions define the actions to be performed on objects in a transfer.',
    required: [],
  })
  .openapi('TransferOptions')

const TransferSpecSchema = z
  .object({
    awsS3CompatibleDataSource: AwsS3CompatibleDataSchema.exactOptional().openapi({
      description: 'An AWS S3 compatible data source.',
    }),
    awsS3DataSource: AwsS3DataSchema.exactOptional().openapi({
      description: 'An AWS S3 data source.',
    }),
    azureBlobStorageDataSource: AzureBlobStorageDataSchema.exactOptional().openapi({
      description: 'An Azure Blob Storage data source.',
    }),
    gcsDataSink: GcsDataSchema.exactOptional().openapi({
      description: 'A Cloud Storage data sink.',
    }),
    gcsDataSource: GcsDataSchema.exactOptional().openapi({
      description: 'A Cloud Storage data source.',
    }),
    gcsIntermediateDataLocation: GcsDataSchema.exactOptional().openapi({
      description: 'Cloud Storage intermediate data location.',
    }),
    httpDataSource: HttpDataSchema.exactOptional().openapi({
      description: 'An HTTP URL data source.',
    }),
    objectConditions: ObjectConditionsSchema.exactOptional().openapi({
      description:
        'Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects\' "last modification time" do not exclude objects in a data sink.',
    }),
    posixDataSink: PosixFilesystemSchema.exactOptional().openapi({
      description: 'A POSIX Filesystem data sink.',
    }),
    posixDataSource: PosixFilesystemSchema.exactOptional().openapi({
      description: 'A POSIX Filesystem data source.',
    }),
    sinkAgentPoolName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.',
      }),
    sourceAgentPoolName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.',
      }),
    transferManifest: TransferManifestSchema.exactOptional().openapi({
      description:
        'A manifest file provides a list of objects to be transferred from the data source. This field points to the location of the manifest file. Otherwise, the entire source bucket is used. ObjectConditions still apply.',
    }),
    transferOptions: TransferOptionsSchema.exactOptional().openapi({
      description:
        "If the option delete_objects_unique_in_sink is `true` and time-based object conditions such as 'last modification time' are specified, the request fails with an INVALID_ARGUMENT error.",
    }),
  })
  .openapi({ description: 'Configuration for running a transfer.', required: [] })
  .openapi('TransferSpec')

const TransferJobSchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time that the transfer job was created.',
        readOnly: true,
      }),
    deletionTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time that the transfer job was deleted.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.',
      }),
    eventStream: EventStreamSchema.exactOptional().openapi({
      description:
        'Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.',
    }),
    lastModificationTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time that the transfer job was last modified.',
        readOnly: true,
      }),
    latestOperationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.',
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Logging configuration.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.',
      }),
    notificationConfig: NotificationConfigSchema.exactOptional().openapi({
      description:
        'Notification configuration. This is not supported for transfers involving PosixFilesystem.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Google Cloud project that owns the job.' }),
    schedule: ScheduleSchema.exactOptional().openapi({
      description:
        'Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule.',
    }),
    status: z
      .enum(['STATUS_UNSPECIFIED', 'ENABLED', 'DISABLED', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.',
      }),
    transferSpec: TransferSpecSchema.exactOptional().openapi({
      description: 'Transfer specification.',
    }),
  })
  .openapi({
    description:
      'This resource represents the configuration of a transfer job that runs periodically.',
    required: [],
  })
  .openapi('TransferJob')

const ListTransferJobsResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional().openapi({ description: 'The list next page token.' }),
    transferJobs: z
      .array(TransferJobSchema)
      .exactOptional()
      .openapi({ description: 'A list of transfer jobs.' }),
  })
  .openapi({ description: 'Response from ListTransferJobs.', required: [] })
  .openapi('ListTransferJobsResponse')

const PauseTransferOperationRequestSchema = z
  .object({})
  .openapi({ description: 'Request passed to PauseTransferOperation.' })
  .openapi('PauseTransferOperationRequest')

const ResumeTransferOperationRequestSchema = z
  .object({})
  .openapi({ description: 'Request passed to ResumeTransferOperation.' })
  .openapi('ResumeTransferOperationRequest')

const RunTransferJobRequestSchema = z
  .object({
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the Google Cloud project that owns the transfer job.',
      }),
  })
  .openapi({ description: 'Request passed to RunTransferJob.', required: [] })
  .openapi('RunTransferJobRequest')

const TransferCountersSchema = z
  .object({
    bytesCopiedToSink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Bytes that are copied to the data sink.' }),
    bytesDeletedFromSink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Bytes that are deleted from the data sink.' }),
    bytesDeletedFromSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Bytes that are deleted from the data source.' }),
    bytesFailedToDeleteFromSink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Bytes that failed to be deleted from the data sink.' }),
    bytesFoundFromSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Bytes found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.',
      }),
    bytesFoundOnlyFromSink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Bytes found only in the data sink that are scheduled to be deleted.',
      }),
    bytesFromSourceFailed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Bytes in the data source that failed to be transferred or that failed to be deleted after being transferred.',
      }),
    bytesFromSourceSkippedBySync: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Bytes in the data source that are not transferred because they already exist in the data sink.',
      }),
    directoriesFailedToListFromSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For transfers involving PosixFilesystem only. Number of listing failures for each directory found at the source. Potential failures when listing a directory include permission failure or block failure. If listing a directory fails, no files in the directory are transferred.',
      }),
    directoriesFoundFromSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For transfers involving PosixFilesystem only. Number of directories found while listing. For example, if the root directory of the transfer is `base/` and there are two other directories, `a/` and `b/` under this directory, the count after listing `base/`, `base/a/` and `base/b/` is 3.',
      }),
    directoriesSuccessfullyListedFromSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For transfers involving PosixFilesystem only. Number of successful listings for each directory found at the source.',
      }),
    intermediateObjectsCleanedUp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of successfully cleaned up intermediate objects.' }),
    intermediateObjectsFailedCleanedUp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of intermediate objects failed cleaned up.' }),
    objectsCopiedToSink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Objects that are copied to the data sink.' }),
    objectsDeletedFromSink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Objects that are deleted from the data sink.' }),
    objectsDeletedFromSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Objects that are deleted from the data source.' }),
    objectsFailedToDeleteFromSink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Objects that failed to be deleted from the data sink.' }),
    objectsFoundFromSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Objects found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.',
      }),
    objectsFoundOnlyFromSink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Objects found only in the data sink that are scheduled to be deleted.',
      }),
    objectsFromSourceFailed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Objects in the data source that failed to be transferred or that failed to be deleted after being transferred.',
      }),
    objectsFromSourceSkippedBySync: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Objects in the data source that are not transferred because they already exist in the data sink.',
      }),
  })
  .openapi({
    description: 'A collection of counters that report the progress of a transfer operation.',
    required: [],
  })
  .openapi('TransferCounters')

const TransferOperationSchema = z
  .object({
    counters: TransferCountersSchema.exactOptional().openapi({
      description: 'Information about the progress of the transfer operation.',
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'End time of this transfer execution.' }),
    errorBreakdowns: z
      .array(ErrorSummarySchema)
      .exactOptional()
      .openapi({ description: 'Summarizes errors encountered with sample error log entries.' }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Cloud Logging configuration.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A globally unique ID assigned by the system.' }),
    notificationConfig: NotificationConfigSchema.exactOptional().openapi({
      description: 'Notification configuration.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Google Cloud project that owns the operation.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start time of this transfer execution.' }),
    status: z
      .enum([
        'STATUS_UNSPECIFIED',
        'IN_PROGRESS',
        'PAUSED',
        'SUCCESS',
        'FAILED',
        'ABORTED',
        'QUEUED',
        'SUSPENDING',
      ])
      .exactOptional()
      .openapi({ description: 'Status of the transfer operation.' }),
    transferJobName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the transfer job that triggers this transfer operation.',
      }),
    transferSpec: TransferSpecSchema.exactOptional().openapi({
      description: 'Transfer specification.',
    }),
  })
  .openapi({ description: 'A description of the execution of a transfer.', required: [] })
  .openapi('TransferOperation')

const UpdateTransferJobRequestSchema = z
  .object({
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the Google Cloud project that owns the job.' }),
    transferJob: TransferJobSchema.exactOptional().openapi({
      description:
        'Required. The job to update. `transferJob` is expected to specify one or more of five fields: description, transfer_spec, notification_config, logging_config, and status. An `UpdateTransferJobRequest` that specifies other fields are rejected with the error INVALID_ARGUMENT. Updating a job status to DELETED requires `storagetransfer.jobs.delete` permission.',
    }),
    updateTransferJobFieldMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field mask of the fields in `transferJob` that are to be updated in this request. Fields in `transferJob` that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the `transfer_spec` of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT.',
      }),
  })
  .openapi({ description: 'Request passed to UpdateTransferJob.', required: [] })
  .openapi('UpdateTransferJobRequest')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1GoogleServiceAccountsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v1/googleServiceAccounts/{projectId}',
  tags: ['googleServiceAccounts'],
  description:
    'Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.',
  operationId: 'storagetransfer.googleServiceAccounts.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the Google Cloud project that the Google service account is associated with.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleServiceAccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ProjectsProjectIdAgentPoolsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{projectId}/agentPools',
  tags: ['projects'],
  description: 'Lists agent pools.',
  operationId: 'storagetransfer.projects.agentPools.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'The list page size. The max allowed value is `256`.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Google Cloud project that owns the job.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAgentPoolsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdAgentPoolsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/agentPools',
  tags: ['projects'],
  description: 'Creates an agent pool resource.',
  operationId: 'storagetransfer.projects.agentPools.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      agentPoolId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.',
            in: 'query',
            name: 'agentPoolId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Google Cloud project that owns the agent pool.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AgentPoolSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AgentPoolSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1TransferJobsRoute = createRoute({
  method: 'get',
  path: '/v1/transferJobs',
  tags: ['transferJobs'],
  description: 'Lists transfer jobs.',
  operationId: 'storagetransfer.transferJobs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .openapi({
          param: {
            description:
              'Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...]}` Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `projectId` is required. `jobNames` and `jobStatuses` are optional. The valid values for `jobStatuses` are case-insensitive: ENABLED, DISABLED, and DELETED.',
            in: 'query',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pageSize: z
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
            description: 'The list page size. The max allowed value is 256.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTransferJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1TransferJobsRoute = createRoute({
  method: 'post',
  path: '/v1/transferJobs',
  tags: ['transferJobs'],
  description: 'Creates a transfer job that runs periodically.',
  operationId: 'storagetransfer.transferJobs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: TransferJobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransferJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1JobNameRoute = createRoute({
  method: 'get',
  path: '/v1/{jobName}',
  tags: ['transferJobs'],
  description: 'Gets a transfer job.',
  operationId: 'storagetransfer.transferJobs.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Google Cloud project that owns the job.',
            in: 'query',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      jobName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The job to get.',
            in: 'path',
            name: 'jobName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransferJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1JobNameRoute = createRoute({
  method: 'delete',
  path: '/v1/{jobName}',
  tags: ['transferJobs'],
  description: 'Deletes a transfer job. Deleting a transfer job sets its status to DELETED.',
  operationId: 'storagetransfer.transferJobs.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Google Cloud project that owns the job.',
            in: 'query',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      jobName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The job to delete.',
            in: 'path',
            name: 'jobName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1JobNameRoute = createRoute({
  method: 'patch',
  path: '/v1/{jobName}',
  tags: ['transferJobs'],
  description:
    "Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).",
  operationId: 'storagetransfer.transferJobs.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      jobName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of job to update.',
            in: 'path',
            name: 'jobName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTransferJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransferJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1JobNameRunRoute = createRoute({
  method: 'post',
  path: '/v1/{jobName}:run',
  tags: ['transferJobs'],
  description:
    'Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.',
  operationId: 'storagetransfer.transferJobs.run',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      jobName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the transfer job.',
            in: 'path',
            name: 'jobName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunTransferJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['transferOperations'],
  description:
    'Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.',
  operationId: 'storagetransfer.transferOperations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .openapi({
          param: {
            description:
              'Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "operationNames":["opid1","opid2",...], "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is required. `jobNames`, `operationNames`, and `transferStatuses` are optional. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.',
            in: 'query',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pageSize: z
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
            description: 'The list page size. The max allowed value is 256.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the type being listed; must be `transferOperations`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes an agent pool.',
  operationId: 'storagetransfer.projects.agentPools.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the agent pool to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates an existing agent pool resource.',
  operationId: 'storagetransfer.projects.agentPools.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AgentPoolSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AgentPoolSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['transferOperations'],
  description:
    "Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.",
  operationId: 'storagetransfer.transferOperations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NamePauseRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:pause',
  tags: ['transferOperations'],
  description: 'Pauses a transfer operation.',
  operationId: 'storagetransfer.transferOperations.pause',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the transfer operation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PauseTransferOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameResumeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:resume',
  tags: ['transferOperations'],
  description: 'Resumes a transfer operation that is paused.',
  operationId: 'storagetransfer.transferOperations.resume',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the transfer operation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResumeTransferOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
