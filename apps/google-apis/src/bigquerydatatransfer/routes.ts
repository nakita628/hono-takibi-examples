import { createRoute, z } from '@hono/zod-openapi'

type DataSourceParameterType = {
  allowedValues?: string[]
  deprecated?: boolean
  description?: string
  displayName?: string
  fields?: DataSourceParameterType[]
  immutable?: boolean
  maxValue?: number
  minValue?: number
  paramId?: string
  recurse?: boolean
  repeated?: boolean
  required?: boolean
  type?: 'TYPE_UNSPECIFIED' | 'STRING' | 'INTEGER' | 'DOUBLE' | 'BOOLEAN' | 'RECORD' | 'PLUS_PAGE'
  validationDescription?: string
  validationHelpUrl?: string
  validationRegex?: string
}

const CheckValidCredsRequestSchema = z
  .object({})
  .openapi({
    description:
      'A request to determine whether the user has valid credentials. This method is used to limit the number of OAuth popups in the user interface. The user id is inferred from the API call context. If the data source has the Google+ authorization type, this method returns false, as it cannot be determined whether the credentials are already valid merely based on the user id.',
  })
  .openapi('CheckValidCredsRequest')

const CheckValidCredsResponseSchema = z
  .object({
    hasValidCreds: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to `true`, the credentials exist and are valid.' }),
  })
  .openapi({
    description: 'A response indicating whether the credentials exist and are valid.',
    required: [],
  })
  .openapi('CheckValidCredsResponse')

const DataSourceParameterSchema: z.ZodType<DataSourceParameterType> = z
  .lazy(() =>
    z
      .object({
        allowedValues: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'All possible values for the parameter.' }),
        deprecated: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, it should not be used in new transfers, and it should not be visible to users.',
          }),
        description: z.string().exactOptional().openapi({ description: 'Parameter description.' }),
        displayName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Parameter display name in the user interface.' }),
        fields: z
          .array(DataSourceParameterSchema)
          .exactOptional()
          .openapi({ description: 'Deprecated. This field has no effect.' }),
        immutable: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Cannot be changed after initial creation.' }),
        maxValue: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'For integer and double values specifies maximum allowed value.',
          }),
        minValue: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'For integer and double values specifies minimum allowed value.',
          }),
        paramId: z.string().exactOptional().openapi({ description: 'Parameter identifier.' }),
        recurse: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Deprecated. This field has no effect.' }),
        repeated: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Deprecated. This field has no effect.' }),
        required: z.boolean().exactOptional().openapi({ description: 'Is parameter required.' }),
        type: z
          .enum([
            'TYPE_UNSPECIFIED',
            'STRING',
            'INTEGER',
            'DOUBLE',
            'BOOLEAN',
            'RECORD',
            'PLUS_PAGE',
          ])
          .exactOptional()
          .openapi({ description: 'Parameter type.' }),
        validationDescription: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values.',
          }),
        validationHelpUrl: z
          .string()
          .exactOptional()
          .openapi({
            description: 'URL to a help document to further explain the naming requirements.',
          }),
        validationRegex: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Regular expression which can be used for parameter validation.',
          }),
      })
      .openapi({
        description: 'A parameter used to define custom fields in a data source definition.',
        required: [],
      }),
  )
  .openapi('DataSourceParameter')

const DataSourceSchema = z
  .object({
    authorizationType: z
      .enum([
        'AUTHORIZATION_TYPE_UNSPECIFIED',
        'AUTHORIZATION_CODE',
        'GOOGLE_PLUS_AUTHORIZATION_CODE',
        'FIRST_PARTY_OAUTH',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the type of authorization.' }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Data source client id which should be used to receive refresh token.',
      }),
    dataRefreshType: z
      .enum(['DATA_REFRESH_TYPE_UNSPECIFIED', 'SLIDING_WINDOW', 'CUSTOM_SLIDING_WINDOW'])
      .exactOptional()
      .openapi({
        description:
          "Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically.",
      }),
    dataSourceId: z.string().exactOptional().openapi({ description: 'Data source id.' }),
    defaultDataRefreshWindowDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.',
      }),
    defaultSchedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User friendly data source description string.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User friendly data source name.' }),
    helpUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Url for the help document for this data source.' }),
    manualRunsDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Disables backfilling and manual run scheduling for the data source.',
      }),
    minimumScheduleInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'The minimum interval for scheduler to schedule runs.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Data source resource name.', readOnly: true }),
    parameters: z
      .array(DataSourceParameterSchema)
      .exactOptional()
      .openapi({ description: 'Data source parameters.' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery',
      }),
    supportsCustomSchedule: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.',
      }),
    supportsMultipleTransfers: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    transferType: z
      .enum(['TRANSFER_TYPE_UNSPECIFIED', 'BATCH', 'STREAMING'])
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    updateDeadlineSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.',
      }),
  })
  .openapi({
    description: 'Defines the properties and custom parameters for a data source.',
    required: [],
  })
  .openapi('DataSource')

const EmailPreferencesSchema = z
  .object({
    enableFailureEmail: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, email notifications will be sent on transfer run failures.',
      }),
  })
  .openapi({
    description: 'Represents preferences for sending email notifications for transfer run events.',
    required: [],
  })
  .openapi('EmailPreferences')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const EnrollDataSourcesRequestSchema = z
  .object({
    dataSourceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Data sources that are enrolled. It is required to provide at least one data source id.',
      }),
  })
  .openapi({
    description:
      "A request to enroll a set of data sources so they are visible in the BigQuery UI's `Transfer` tab.",
    required: [],
  })
  .openapi('EnrollDataSourcesRequest')

const ListDataSourcesResponseSchema = z
  .object({
    dataSources: z
      .array(DataSourceSchema)
      .exactOptional()
      .openapi({ description: 'List of supported data sources and their transfer settings.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Returns list of supported data sources and their metadata.',
    required: [],
  })
  .openapi('ListDataSourcesResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
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
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const UserInfoSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'E-mail address of the user.' }),
  })
  .openapi({ description: 'Information about a user.', required: [] })
  .openapi('UserInfo')

const ScheduleOptionsSchema = z
  .object({
    disableAutoScheduling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.',
      }),
  })
  .openapi({ description: 'Options customizing the data transfer schedule.', required: [] })
  .openapi('ScheduleOptions')

const TransferConfigSchema = z
  .object({
    dataRefreshWindowDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.',
      }),
    dataSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list',
      }),
    datasetRegion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Region in which BigQuery dataset is located.',
        readOnly: true,
      }),
    destinationDatasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BigQuery target dataset id.' }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Is this config disabled. When set to true, no runs are scheduled for a given transfer.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User specified display name for the data transfer.' }),
    emailPreferences: EmailPreferencesSchema.exactOptional().openapi({
      description:
        'Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.',
      }),
    nextRunTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Next time when data transfer will run.',
        readOnly: true,
      }),
    notificationPubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`',
      }),
    ownerInfo: UserInfoSchema.exactOptional().openapi({
      description:
        'Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated.',
      readOnly: true,
    }),
    params: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          "Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq",
      }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.',
      }),
    scheduleOptions: ScheduleOptionsSchema.exactOptional().openapi({
      description: 'Options customizing the data transfer schedule.',
    }),
    state: z
      .enum([
        'TRANSFER_STATE_UNSPECIFIED',
        'PENDING',
        'RUNNING',
        'SUCCEEDED',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. State of the most recently updated transfer run.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Data transfer modification time. Ignored by server on input.',
        readOnly: true,
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Unique ID of the user on whose behalf transfer is done.',
      }),
  })
  .openapi({
    description:
      'Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.',
    required: [],
  })
  .openapi('TransferConfig')

const ListTransferConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferConfigsRequest.page_token` to request the next page of list results.',
        readOnly: true,
      }),
    transferConfigs: z
      .array(TransferConfigSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The stored pipeline transfer configurations.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The returned list of pipelines in the project.', required: [] })
  .openapi('ListTransferConfigsResponse')

const TransferMessageSchema = z
  .object({
    messageText: z.string().exactOptional().openapi({ description: 'Message text.' }),
    messageTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when message was logged.' }),
    severity: z
      .enum(['MESSAGE_SEVERITY_UNSPECIFIED', 'INFO', 'WARNING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'Message severity.' }),
  })
  .openapi({
    description: 'Represents a user facing message for a particular data transfer run.',
    required: [],
  })
  .openapi('TransferMessage')

const ListTransferLogsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results.',
        readOnly: true,
      }),
    transferMessages: z
      .array(TransferMessageSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The stored pipeline transfer messages.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The returned list transfer run messages.', required: [] })
  .openapi('ListTransferLogsResponse')

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

const TransferRunSchema = z
  .object({
    dataSourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Data source id.', readOnly: true }),
    destinationDatasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The BigQuery target dataset id.', readOnly: true }),
    emailPreferences: EmailPreferencesSchema.exactOptional().openapi({
      description:
        'Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from.',
      readOnly: true,
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time when transfer run ended. Parameter ignored by server for input requests.',
        readOnly: true,
      }),
    errorStatus: StatusSchema.exactOptional().openapi({
      description: 'Status of the transfer run.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`. The name is ignored when creating a transfer run.',
      }),
    notificationPubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`',
        readOnly: true,
      }),
    params: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          "Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq",
        readOnly: true,
      }),
    runTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For batch transfer runs, specifies the date and time of the data should be ingested.',
      }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.",
        readOnly: true,
      }),
    scheduleTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum time after which a transfer run can be started.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time when transfer run was started. Parameter ignored by server for input requests.',
        readOnly: true,
      }),
    state: z
      .enum([
        'TRANSFER_STATE_UNSPECIFIED',
        'PENDING',
        'RUNNING',
        'SUCCEEDED',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'Data transfer run state. Ignored for input requests.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last time the data transfer run state was updated.',
        readOnly: true,
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Unique ID of the user on whose behalf transfer is done.',
      }),
  })
  .openapi({ description: 'Represents a data transfer run.', required: [] })
  .openapi('TransferRun')

const ListTransferRunsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferRunsRequest.page_token` to request the next page of list results.',
        readOnly: true,
      }),
    transferRuns: z
      .array(TransferRunSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The stored pipeline transfer runs.', readOnly: true }),
  })
  .openapi({ description: 'The returned list of pipelines in the project.', required: [] })
  .openapi('ListTransferRunsResponse')

const ScheduleTransferRunsRequestSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`.',
      }),
  })
  .openapi({ description: 'A request to schedule transfer runs for a time range.', required: [] })
  .openapi('ScheduleTransferRunsRequest')

const ScheduleTransferRunsResponseSchema = z
  .object({
    runs: z
      .array(TransferRunSchema)
      .exactOptional()
      .openapi({ description: 'The transfer runs that were scheduled.' }),
  })
  .openapi({ description: 'A response to schedule transfer runs for a time range.', required: [] })
  .openapi('ScheduleTransferRunsResponse')

const TimeRangeSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`. The end_time must not be in the future. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`. The start_time must be strictly less than the end_time. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).',
      }),
  })
  .openapi({
    description:
      'A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).',
    required: [],
  })
  .openapi('TimeRange')

const StartManualTransferRunsRequestSchema = z
  .object({
    requestedRunTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specific run_time for a transfer run to be started. The requested_run_time must not be in the future.',
      }),
    requestedTimeRange: TimeRangeSchema.exactOptional().openapi({
      description: 'Time range for the transfer runs that should be started.',
    }),
  })
  .openapi({ description: 'A request to start manual transfer runs.', required: [] })
  .openapi('StartManualTransferRunsRequest')

const StartManualTransferRunsResponseSchema = z
  .object({
    runs: z
      .array(TransferRunSchema)
      .exactOptional()
      .openapi({ description: 'The transfer runs that were created.' }),
  })
  .openapi({ description: 'A response to start manual transfer runs.', required: [] })
  .openapi('StartManualTransferRunsResponse')

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
        'https://www.googleapis.com/auth/bigquery':
          'View and manage your data in Google BigQuery and see the email address for your Google Account',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
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
        'https://www.googleapis.com/auth/bigquery':
          'View and manage your data in Google BigQuery and see the email address for your Google Account',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Returns information about the particular transfer run.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.runs.get',
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
            description:
              'Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`',
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
      content: { 'application/json': { schema: TransferRunSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes the specified transfer run.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.runs.delete',
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
            description:
              'Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`',
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
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
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
  description:
    'Updates a data transfer configuration. All fields must be set, even if they are not updated.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.patch',
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
      authorizationCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.",
            in: 'query',
            name: 'authorizationCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).",
            in: 'query',
            name: 'serviceAccountName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Required list of fields to be updated in this request.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      versionInfo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional version info. This is required only if `transferConfig.dataSourceId` is not 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.",
            in: 'query',
            name: 'versionInfo',
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
              'The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransferConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransferConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'bigquerydatatransfer.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
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
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
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
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
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
            description: 'The resource that owns the locations collection, if applicable.',
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
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1NameCheckValidCredsRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:checkValidCreds',
  tags: ['projects'],
  description:
    'Returns true if valid credentials exist for the given data source and requesting user.',
  operationId: 'bigquerydatatransfer.projects.locations.dataSources.checkValidCreds',
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
            description:
              'Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckValidCredsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckValidCredsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1NameEnrollDataSourcesRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:enrollDataSources',
  tags: ['projects'],
  description:
    'Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).',
  operationId: 'bigquerydatatransfer.projects.locations.enrollDataSources',
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
            description: 'The name of the project resource in the form: `projects/{project_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnrollDataSourcesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDataSourcesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/dataSources',
  tags: ['projects'],
  description: 'Lists supported data sources and returns their settings.',
  operationId: 'bigquerydatatransfer.projects.locations.dataSources.list',
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
            description: 'Page size. The default page size is the maximum value of 1000 results.',
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
            description:
              'Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDataSourcesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1ParentRunsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/runs',
  tags: ['projects'],
  description: 'Returns information about running and completed transfer runs.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.runs.list',
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
            description: 'Page size. The default page size is the maximum value of 1000 results.',
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
            description:
              'Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      runAttempt: z
        .enum(['RUN_ATTEMPT_UNSPECIFIED', 'LATEST'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates how run attempts are to be pulled.',
            in: 'query',
            name: 'runAttempt',
            schema: { enum: ['RUN_ATTEMPT_UNSPECIFIED', 'LATEST'], type: 'string' },
            required: false,
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'TRANSFER_STATE_UNSPECIFIED',
              'PENDING',
              'RUNNING',
              'SUCCEEDED',
              'FAILED',
              'CANCELLED',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'When specified, only transfer runs with requested states are returned.',
            explode: true,
            in: 'query',
            name: 'states',
            schema: {
              items: {
                enum: [
                  'TRANSFER_STATE_UNSPECIFIED',
                  'PENDING',
                  'RUNNING',
                  'SUCCEEDED',
                  'FAILED',
                  'CANCELLED',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTransferRunsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1ParentTransferConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/transferConfigs',
  tags: ['projects'],
  description:
    'Returns information about all transfer configs owned by a project in the specified location.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.list',
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
      dataSourceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'When specified, only configurations of requested data sources are returned.',
            explode: true,
            in: 'query',
            name: 'dataSourceIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
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
            description: 'Page size. The default page size is the maximum value of 1000 results.',
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
            description:
              'Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The BigQuery project id for which transfer configs should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTransferConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1ParentTransferConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/transferConfigs',
  tags: ['projects'],
  description: 'Creates a new data transfer configuration.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.create',
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
      authorizationCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.",
            in: 'query',
            name: 'authorizationCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).",
            in: 'query',
            name: 'serviceAccountName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      versionInfo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional version info. This is required only if `transferConfig.dataSourceId` is not 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.",
            in: 'query',
            name: 'versionInfo',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransferConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransferConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentTransferLogsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/transferLogs',
  tags: ['projects'],
  description: 'Returns log messages for the transfer run.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list',
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
      messageTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['MESSAGE_SEVERITY_UNSPECIFIED', 'INFO', 'WARNING', 'ERROR'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.',
            explode: true,
            in: 'query',
            name: 'messageTypes',
            schema: {
              items: {
                enum: ['MESSAGE_SEVERITY_UNSPECIFIED', 'INFO', 'WARNING', 'ERROR'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
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
            description: 'Page size. The default page size is the maximum value of 1000 results.',
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
            description:
              'Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTransferLogsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1ParentScheduleRunsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:scheduleRuns',
  tags: ['projects'],
  description:
    'Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.scheduleRuns',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScheduleTransferRunsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScheduleTransferRunsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentStartManualRunsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:startManualRuns',
  tags: ['projects'],
  description:
    'Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.',
  operationId: 'bigquerydatatransfer.projects.transferConfigs.startManualRuns',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartManualTransferRunsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StartManualTransferRunsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigquery'],
      Oauth2c: ['https://www.googleapis.com/auth/bigquery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
