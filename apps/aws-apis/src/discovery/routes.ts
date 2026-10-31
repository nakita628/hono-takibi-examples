import { createRoute, z } from '@hono/zod-openapi'

const AssociateConfigurationItemsToApplicationResponseSchema = z
  .object({})
  .openapi('AssociateConfigurationItemsToApplicationResponse')

const ApplicationIdSchema = z.string().regex(/\S+/).max(200).openapi('ApplicationId')

const ConfigurationIdSchema = z.string().regex(/\S*/).max(200).openapi('ConfigurationId')

const ConfigurationIdListSchema = z.array(ConfigurationIdSchema).openapi('ConfigurationIdList')

const AssociateConfigurationItemsToApplicationRequestSchema = z
  .object({
    applicationConfigurationId: ApplicationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration ID of an application with which items are to be associated.',
        }),
    ),
    configurationIds: ConfigurationIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of each configuration item to be associated with an application.',
        }),
    ),
  })
  .openapi({
    required: ['applicationConfigurationId', 'configurationIds'],
    title: 'AssociateConfigurationItemsToApplicationRequest',
  })
  .openapi('AssociateConfigurationItemsToApplicationRequest')

const AuthorizationErrorExceptionSchema = z.any().openapi('AuthorizationErrorException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const ServerInternalErrorExceptionSchema = z.any().openapi('ServerInternalErrorException')

const HomeRegionNotSetExceptionSchema = z.any().openapi('HomeRegionNotSetException')

const ImportTaskIdentifierSchema = z.string().regex(/\S*/).max(200).openapi('ImportTaskIdentifier')

const BatchDeleteImportDataErrorCodeSchema = z
  .enum(['NOT_FOUND', 'INTERNAL_SERVER_ERROR', 'OVER_LIMIT'])
  .openapi('BatchDeleteImportDataErrorCode')

const BatchDeleteImportDataErrorDescriptionSchema = z
  .string()
  .openapi('BatchDeleteImportDataErrorDescription')

const BatchDeleteImportDataErrorSchema = z
  .object({
    importTaskId: ImportTaskIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The unique import ID associated with the error that occurred.' }),
    ).exactOptional(),
    errorCode: BatchDeleteImportDataErrorCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of error that occurred for a specific import task.' }),
    ).exactOptional(),
    errorDescription: BatchDeleteImportDataErrorDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The description of the error that occurred for a specific import task.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Error messages returned for each import task that you deleted as a response for this command.',
    required: [],
  })
  .openapi('BatchDeleteImportDataError')

const BatchDeleteImportDataErrorListSchema = z
  .array(BatchDeleteImportDataErrorSchema)
  .openapi('BatchDeleteImportDataErrorList')

const BatchDeleteImportDataResponseSchema = z
  .object({
    errors: BatchDeleteImportDataErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Error messages returned for each import task that you deleted as a response for this command.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteImportDataResponse')

const ToDeleteIdentifierListSchema = z
  .array(ImportTaskIdentifierSchema)
  .min(1)
  .max(10)
  .openapi('ToDeleteIdentifierList')

const BatchDeleteImportDataRequestSchema = z
  .object({
    importTaskIds: ToDeleteIdentifierListSchema.and(
      z.any().openapi({ description: 'The IDs for the import tasks that you want to delete.' }),
    ),
  })
  .openapi({ required: ['importTaskIds'], title: 'BatchDeleteImportDataRequest' })
  .openapi('BatchDeleteImportDataRequest')

const StringSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(10000)
  .openapi('String')

const CreateApplicationResponseSchema = z
  .object({
    configurationId: StringSchema.and(
      z.any().openapi({ description: 'Configuration ID of an application to be created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateApplicationResponse')

const ApplicationNameSchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .max(127)
  .openapi('ApplicationName')

const ApplicationDescriptionSchema = z
  .string()
  .regex(/(^$|[\s\S]*\S[\s\S]*)/)
  .max(1000)
  .openapi('ApplicationDescription')

const CreateApplicationRequestSchema = z
  .object({
    name: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of the application to be created.' }),
    ),
    description: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the application to be created.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateApplicationRequest' })
  .openapi('CreateApplicationRequest')

const CreateTagsResponseSchema = z.object({}).openapi('CreateTagsResponse')

const TagKeySchema = z.string().openapi('TagKey')

const TagValueSchema = z.string().openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: 'The type of tag on which to filter.' })),
    value: TagValueSchema.and(
      z.any().openapi({ description: 'A value for a tag key on which to filter.' }),
    ),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      '<p>Metadata that help you categorize IT assets.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>',
  })
  .openapi('Tag')

const TagSetSchema = z.array(TagSchema).openapi('TagSet')

const CreateTagsRequestSchema = z
  .object({
    configurationIds: ConfigurationIdListSchema.and(
      z.any().openapi({ description: 'A list of configuration items that you want to tag.' }),
    ),
    tags: TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags that you want to associate with one or more configuration items. Specify the tags that you want to create in a <i>key</i>-<i>value</i> format. For example:</p> <p> <code>{"key": "serverType", "value": "webServer"}</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['configurationIds', 'tags'], title: 'CreateTagsRequest' })
  .openapi('CreateTagsRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeleteApplicationsResponseSchema = z.object({}).openapi('DeleteApplicationsResponse')

const ApplicationIdsListSchema = z.array(ApplicationIdSchema).openapi('ApplicationIdsList')

const DeleteApplicationsRequestSchema = z
  .object({
    configurationIds: ApplicationIdsListSchema.and(
      z.any().openapi({ description: 'Configuration ID of an application to be deleted.' }),
    ),
  })
  .openapi({ required: ['configurationIds'], title: 'DeleteApplicationsRequest' })
  .openapi('DeleteApplicationsRequest')

const DeleteTagsResponseSchema = z.object({}).openapi('DeleteTagsResponse')

const DeleteTagsRequestSchema = z
  .object({
    configurationIds: ConfigurationIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of configuration items with tags that you want to delete.',
        }),
    ),
    tags: TagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags that you want to delete from one or more configuration items. Specify the tags that you want to delete in a <i>key</i>-<i>value</i> format. For example:</p> <p> <code>{"key": "serverType", "value": "webServer"}</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['configurationIds'], title: 'DeleteTagsRequest' })
  .openapi('DeleteTagsRequest')

const AgentIdSchema = z.string().regex(/\S+/).min(10).max(20).openapi('AgentId')

const AgentNetworkInfoSchema = z
  .object({
    ipAddress: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The IP address for the host where the agent/connector resides.' }),
    ).exactOptional(),
    macAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The MAC address for the host where the agent/connector resides.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Network details about the host where the agent/connector resides.',
    required: [],
  })
  .openapi('AgentNetworkInfo')

const AgentNetworkInfoListSchema = z.array(AgentNetworkInfoSchema).openapi('AgentNetworkInfoList')

const AgentStatusSchema = z
  .enum(['HEALTHY', 'UNHEALTHY', 'RUNNING', 'UNKNOWN', 'BLACKLISTED', 'SHUTDOWN'])
  .openapi('AgentStatus')

const AgentInfoSchema = z
  .object({
    agentId: AgentIdSchema.and(
      z.any().openapi({ description: 'The agent or connector ID.' }),
    ).exactOptional(),
    hostName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the host where the agent or connector resides. The host can be a server or virtual machine.',
        }),
    ).exactOptional(),
    agentNetworkInfoList: AgentNetworkInfoListSchema.and(
      z
        .any()
        .openapi({
          description: 'Network details about the host where the agent or connector resides.',
        }),
    ).exactOptional(),
    connectorId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the connector.' }),
    ).exactOptional(),
    version: StringSchema.and(
      z.any().openapi({ description: 'The agent or connector version.' }),
    ).exactOptional(),
    health: AgentStatusSchema.and(
      z.any().openapi({ description: 'The health of the agent or connector.' }),
    ).exactOptional(),
    lastHealthPingTime: StringSchema.and(
      z.any().openapi({ description: 'Time since agent or connector health was reported.' }),
    ).exactOptional(),
    collectionStatus: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Status of the collection process for an agent or connector.' }),
    ).exactOptional(),
    agentType: StringSchema.and(z.any().openapi({ description: 'Type of agent.' })).exactOptional(),
    registeredTime: StringSchema.and(
      z.any().openapi({ description: "Agent's first registration timestamp in UTC." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about agents or connectors associated with the user’s Amazon Web Services account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.',
    required: [],
  })
  .openapi('AgentInfo')

const AgentsInfoSchema = z.array(AgentInfoSchema).openapi('AgentsInfo')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeAgentsResponseSchema = z
  .object({
    agentsInfo: AgentsInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an agent/Connector ID. The output includes agent/Connector IDs, IP addresses, media access control (MAC) addresses, agent/Connector health, host name where the agent/Connector resides, and the version number of each agent/Connector.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to retrieve the next set of results. For example, if you specified 100 IDs for <code>DescribeAgentsRequest$agentIds</code> but set <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAgentsResponse')

const AgentIdsSchema = z.array(AgentIdSchema).openapi('AgentIds')

const FilterValueSchema = z
  .string()
  .regex(/(^$|[\s\S]*\S[\s\S]*)/)
  .max(1000)
  .openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).openapi('FilterValues')

const ConditionSchema = z.string().regex(/\S+/).max(200).openapi('Condition')

const FilterSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the filter.' })),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string value on which to filter. For example, if you choose the <code>destinationServer.osVersion</code> filter name, you could specify <code>Ubuntu</code> for the value.',
        }),
    ),
    condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as though concatenated by <i>AND</i>. If you specify multiple values for a particular filter, the system differentiates the values using <i>OR</i>. Calling either <i>DescribeConfigurations</i> or <i>ListConfigurations</i> returns attributes of matching configuration items.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'condition'],
    description:
      '<p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>. </p>',
  })
  .openapi('Filter')

const FiltersSchema = z.array(FilterSchema).openapi('Filters')

const IntegerSchema = z.int().openapi('Integer')

const DescribeAgentsRequestSchema = z
  .object({
    agentIds: AgentIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The agent or the Connector IDs for which you want information. If you specify no IDs, the system returns information about all agents/Connectors associated with your Amazon Web Services user account.',
        }),
    ).exactOptional(),
    filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can filter the request using various logical operators and a <i>key</i>-<i>value</i> format. For example: </p> <p> <code>{"key": "collectionStatus", "value": "STARTED"}</code> </p>',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of agents/Connectors to return in a single page of output. The maximum value is 100.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to retrieve the next set of results. For example, if you previously specified 100 IDs for <code>DescribeAgentsRequest$agentIds</code> but set <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAgentsRequest', required: [] })
  .openapi('DescribeAgentsRequest')

const DescribeConfigurationsAttributeSchema = z
  .record(z.string(), StringSchema)
  .openapi('DescribeConfigurationsAttribute')

const DescribeConfigurationsAttributesSchema = z
  .array(DescribeConfigurationsAttributeSchema)
  .openapi('DescribeConfigurationsAttributes')

const DescribeConfigurationsResponseSchema = z
  .object({
    configurations: DescribeConfigurationsAttributesSchema.and(
      z.any().openapi({ description: 'A key in the response map. The value is an array of data.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConfigurationsResponse')

const DescribeConfigurationsRequestSchema = z
  .object({
    configurationIds: ConfigurationIdListSchema.and(
      z.any().openapi({ description: 'One or more configuration IDs.' }),
    ),
  })
  .openapi({ required: ['configurationIds'], title: 'DescribeConfigurationsRequest' })
  .openapi('DescribeConfigurationsRequest')

const ConfigurationsExportIdSchema = z
  .string()
  .regex(/\S*/)
  .max(200)
  .openapi('ConfigurationsExportId')

const ContinuousExportStatusSchema = z
  .enum([
    'START_IN_PROGRESS',
    'START_FAILED',
    'ACTIVE',
    'ERROR',
    'STOP_IN_PROGRESS',
    'STOP_FAILED',
    'INACTIVE',
  ])
  .openapi('ContinuousExportStatus')

const StringMax255Schema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(255)
  .openapi('StringMax255')

const S3BucketSchema = z.string().openapi('S3Bucket')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const DataSourceSchema = z.literal('AGENT').openapi('DataSource')

const SchemaStorageConfigSchema = z.record(z.string(), StringSchema).openapi('SchemaStorageConfig')

const ContinuousExportDescriptionSchema = z
  .object({
    exportId: ConfigurationsExportIdSchema.and(
      z.any().openapi({ description: 'The unique ID assigned to this export.' }),
    ).exactOptional(),
    status: ContinuousExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the status of the export. Can be one of the following values:</p> <ul> <li> <p>START_IN_PROGRESS - setting up resources to start continuous export.</p> </li> <li> <p>START_FAILED - an error occurred setting up continuous export. To recover, call start-continuous-export again.</p> </li> <li> <p>ACTIVE - data is being exported to the customer bucket.</p> </li> <li> <p>ERROR - an error occurred during export. To fix the issue, call stop-continuous-export and start-continuous-export.</p> </li> <li> <p>STOP_IN_PROGRESS - stopping the export.</p> </li> <li> <p>STOP_FAILED - an error occurred stopping the export. To recover, call stop-continuous-export again.</p> </li> <li> <p>INACTIVE - the continuous export has been stopped. Data is no longer being exported to the customer bucket.</p> </li> </ul>',
        }),
    ).exactOptional(),
    statusDetail: StringMax255Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains information about any errors that have occurred. This data type can have the following values:</p> <ul> <li> <p>ACCESS_DENIED - You don’t have permission to start Data Exploration in Amazon Athena. Contact your Amazon Web Services administrator for help. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html">Setting Up Amazon Web Services Application Discovery Service</a> in the Application Discovery Service User Guide.</p> </li> <li> <p>DELIVERY_STREAM_LIMIT_FAILURE - You reached the limit for Amazon Kinesis Data Firehose delivery streams. Reduce the number of streams or request a limit increase and try again. For more information, see <a href="http://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the Amazon Kinesis Data Streams Developer Guide.</p> </li> <li> <p>FIREHOSE_ROLE_MISSING - The Data Exploration feature is in an error state because your IAM User is missing the AWSApplicationDiscoveryServiceFirehose role. Turn on Data Exploration in Amazon Athena and try again. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html#setting-up-user-policy">Step 3: Provide Application Discovery Service Access to Non-Administrator Users by Attaching Policies</a> in the Application Discovery Service User Guide.</p> </li> <li> <p>FIREHOSE_STREAM_DOES_NOT_EXIST - The Data Exploration feature is in an error state because your IAM User is missing one or more of the Kinesis data delivery streams.</p> </li> <li> <p>INTERNAL_FAILURE - The Data Exploration feature is in an error state because of an internal failure. Try again later. If this problem persists, contact Amazon Web Services Support.</p> </li> <li> <p>LAKE_FORMATION_ACCESS_DENIED - You don\'t have sufficient lake formation permissions to start continuous export. For more information, see <a href="http://docs.aws.amazon.com/lake-formation/latest/dg/upgrade-glue-lake-formation.html"> Upgrading Amazon Web Services Glue Data Permissions to the Amazon Web Services Lake Formation Model </a> in the Amazon Web Services <i>Lake Formation Developer Guide</i>. </p> <p>You can use one of the following two ways to resolve this issue.</p> <ol> <li> <p>If you don’t want to use the Lake Formation permission model, you can change the default Data Catalog settings to use only Amazon Web Services Identity and Access Management (IAM) access control for new databases. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/getting-started-setup.html#setup-change-cat-settings">Change Data Catalog Settings</a> in the <i>Lake Formation Developer Guide</i>.</p> </li> <li> <p>You can give the service-linked IAM roles AWSServiceRoleForApplicationDiscoveryServiceContinuousExport and AWSApplicationDiscoveryServiceFirehose the required Lake Formation permissions. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/granting-database-permissions.html"> Granting Database Permissions</a> in the <i>Lake Formation Developer Guide</i>. </p> <ol> <li> <p>AWSServiceRoleForApplicationDiscoveryServiceContinuousExport - Grant database creator permissions, which gives the role database creation ability and implicit permissions for any created tables. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/implicit-permissions.html"> Implicit Lake Formation Permissions </a> in the <i>Lake Formation Developer Guide</i>.</p> </li> <li> <p>AWSApplicationDiscoveryServiceFirehose - Grant describe permissions for all tables in the database.</p> </li> </ol> </li> </ol> </li> <li> <p>S3_BUCKET_LIMIT_FAILURE - You reached the limit for Amazon S3 buckets. Reduce the number of S3 buckets or request a limit increase and try again. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the Amazon Simple Storage Service Developer Guide.</p> </li> <li> <p>S3_NOT_SIGNED_UP - Your account is not signed up for the Amazon S3 service. You must sign up before you can use Amazon S3. You can sign up at the following URL: <a href="https://aws.amazon.com/s3">https://aws.amazon.com/s3</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    s3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the s3 bucket where the export data parquet files are stored.',
        }),
    ).exactOptional(),
    startTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp representing when the continuous export was started.',
        }),
    ).exactOptional(),
    stopTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that represents when this continuous export was stopped.',
        }),
    ).exactOptional(),
    dataSource: DataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data collector used to gather this data (currently only offered for AGENT).',
        }),
    ).exactOptional(),
    schemaStorageConfig: SchemaStorageConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object which describes how the data is stored.</p> <ul> <li> <p> <code>databaseName</code> - the name of the Glue database used to store the schema.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of continuous export descriptions.', required: [] })
  .openapi('ContinuousExportDescription')

const ContinuousExportDescriptionsSchema = z
  .array(ContinuousExportDescriptionSchema)
  .openapi('ContinuousExportDescriptions')

const DescribeContinuousExportsResponseSchema = z
  .object({
    descriptions: ContinuousExportDescriptionsSchema.and(
      z.any().openapi({ description: 'A list of continuous export descriptions.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token from the previous call to <code>DescribeExportTasks</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeContinuousExportsResponse')

const ContinuousExportIdsSchema = z
  .array(ConfigurationsExportIdSchema)
  .openapi('ContinuousExportIds')

const DescribeContinuousExportsMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('DescribeContinuousExportsMaxResults')

const DescribeContinuousExportsRequestSchema = z
  .object({
    exportIds: ContinuousExportIdsSchema.and(
      z.any().openapi({ description: 'The unique IDs assigned to the exports.' }),
    ).exactOptional(),
    maxResults: DescribeContinuousExportsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number between 1 and 100 specifying the maximum number of continuous export descriptions returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token from the previous call to <code>DescribeExportTasks</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeContinuousExportsRequest', required: [] })
  .openapi('DescribeContinuousExportsRequest')

const OperationNotPermittedExceptionSchema = z.any().openapi('OperationNotPermittedException')

const ExportStatusSchema = z.enum(['FAILED', 'SUCCEEDED', 'IN_PROGRESS']).openapi('ExportStatus')

const ExportStatusMessageSchema = z.string().openapi('ExportStatusMessage')

const ConfigurationsDownloadUrlSchema = z.string().openapi('ConfigurationsDownloadUrl')

const ExportRequestTimeSchema = z.iso.datetime({ offset: true }).openapi('ExportRequestTime')

const BooleanSchema = z.boolean().openapi('Boolean')

const ExportInfoSchema = z
  .object({
    exportId: ConfigurationsExportIdSchema.and(
      z.any().openapi({ description: 'A unique identifier used to query an export.' }),
    ),
    exportStatus: ExportStatusSchema.and(
      z.any().openapi({ description: 'The status of the data export job.' }),
    ),
    statusMessage: ExportStatusMessageSchema.and(
      z.any().openapi({ description: 'A status message provided for API callers.' }),
    ),
    configurationsDownloadUrl: ConfigurationsDownloadUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A URL for an Amazon S3 bucket where you can review the exported data. The URL is displayed only if the export succeeded.',
        }),
    ).exactOptional(),
    exportRequestTime: ExportRequestTimeSchema.and(
      z.any().openapi({ description: 'The time that the data export was initiated.' }),
    ),
    isTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If true, the export of agent information exceeded the size limit for a single export and the exported data is incomplete for the requested time range. To address this, select a smaller time range for the export by using <code>startDate</code> and <code>endDate</code>.',
        }),
    ).exactOptional(),
    requestedStartTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of <code>startTime</code> parameter in the <code>StartExportTask</code> request. If no <code>startTime</code> was requested, this result does not appear in <code>ExportInfo</code>.',
        }),
    ).exactOptional(),
    requestedEndTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>endTime</code> used in the <code>StartExportTask</code> request. If no <code>endTime</code> was requested, this result does not appear in <code>ExportInfo</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['exportId', 'exportStatus', 'statusMessage', 'exportRequestTime'],
    description:
      'Information regarding the export status of discovered data. The value is an array of objects.',
  })
  .openapi('ExportInfo')

const ExportsInfoSchema = z.array(ExportInfoSchema).openapi('ExportsInfo')

const DescribeExportConfigurationsResponseSchema = z
  .object({
    exportsInfo: ExportsInfoSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The token from the previous call to describe-export-tasks.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExportConfigurationsResponse')

const ExportIdsSchema = z.array(ConfigurationsExportIdSchema).openapi('ExportIds')

const DescribeExportConfigurationsRequestSchema = z
  .object({
    exportIds: ExportIdsSchema.and(
      z.any().openapi({ description: 'A list of continuous export IDs to search for.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number between 1 and 100 specifying the maximum number of continuous export descriptions returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The token from the previous call to describe-export-tasks.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeExportConfigurationsRequest', required: [] })
  .openapi('DescribeExportConfigurationsRequest')

const DescribeExportTasksResponseSchema = z
  .object({
    exportsInfo: ExportsInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains one or more sets of export request details. When the status of a request is <code>SUCCEEDED</code>, the response includes a URL for an Amazon S3 bucket where you can view the data in a CSV file.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>DescribeExportTasks</code> request. When the results of a <code>DescribeExportTasks</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExportTasksResponse')

const FilterNameSchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .max(1000)
  .openapi('FilterName')

const ExportFilterSchema = z
  .object({
    name: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single <code>ExportFilter</code> name. Supported filters: <code>agentIds</code>.',
        }),
    ),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single agent ID for a Discovery Agent. An agent ID can be found using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html">DescribeAgents</a> action. Typically an ADS agent ID is in the form <code>o-0123456789abcdef0</code>.',
        }),
    ),
    condition: ConditionSchema.and(
      z.any().openapi({ description: 'Supported condition: <code>EQUALS</code> ' }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'condition'],
    description:
      'Used to select which agent\'s data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.',
  })
  .openapi('ExportFilter')

const ExportFiltersSchema = z.array(ExportFilterSchema).openapi('ExportFilters')

const DescribeExportTasksRequestSchema = z
  .object({
    exportIds: ExportIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more unique identifiers used to query the status of an export request.',
        }),
    ).exactOptional(),
    filters: ExportFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more filters.</p> <ul> <li> <p> <code>AgentId</code> - ID of the agent whose collected data will be exported</p> </li> </ul>',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of volume results returned by <code>DescribeExportTasks</code> in paginated output. When this parameter is used, <code>DescribeExportTasks</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous paginated <code>DescribeExportTasks</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeExportTasksRequest', required: [] })
  .openapi('DescribeExportTasksRequest')

const ClientRequestTokenSchema = z.string().min(1).max(100).openapi('ClientRequestToken')

const ImportTaskNameSchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(255)
  .openapi('ImportTaskName')

const ImportURLSchema = z
  .string()
  .regex(/\S+:\/\/\S+\/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(4000)
  .openapi('ImportURL')

const ImportStatusSchema = z
  .enum([
    'IMPORT_IN_PROGRESS',
    'IMPORT_COMPLETE',
    'IMPORT_COMPLETE_WITH_ERRORS',
    'IMPORT_FAILED',
    'IMPORT_FAILED_SERVER_LIMIT_EXCEEDED',
    'IMPORT_FAILED_RECORD_LIMIT_EXCEEDED',
    'DELETE_IN_PROGRESS',
    'DELETE_COMPLETE',
    'DELETE_FAILED',
    'DELETE_FAILED_LIMIT_EXCEEDED',
    'INTERNAL_ERROR',
  ])
  .openapi('ImportStatus')

const S3PresignedUrlSchema = z.string().openapi('S3PresignedUrl')

const ImportTaskSchema = z
  .object({
    importTaskId: ImportTaskIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique ID for a specific import task. These IDs aren't globally unique, but they are unique within an Amazon Web Services account.",
        }),
    ).exactOptional(),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique token used to prevent the same import request from occurring more than once. If you didn't provide a token, a token was automatically generated when the import task request was sent.",
        }),
    ).exactOptional(),
    name: ImportTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive name for an import task. You can use this name to filter future requests related to this import task, such as identifying applications and servers that were included in this import task. We recommend that you use a meaningful name for each import task.',
        }),
    ).exactOptional(),
    importUrl: ImportURLSchema.and(
      z
        .any()
        .openapi({
          description: "The URL for your import file that you've uploaded to Amazon S3.",
        }),
    ).exactOptional(),
    status: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the import task. An import can have the status of <code>IMPORT_COMPLETE</code> and still have some records fail to import from the overall request. More information can be found in the downloadable archive defined in the <code>errorsAndFailedEntriesZip</code> field, or in the Migration Hub management console.',
        }),
    ).exactOptional(),
    importRequestTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the import task request was made, presented in the Unix time stamp format.',
        }),
    ).exactOptional(),
    importCompletionTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the import task request finished, presented in the Unix time stamp format.',
        }),
    ).exactOptional(),
    importDeletedTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the import task request was deleted, presented in the Unix time stamp format.',
        }),
    ).exactOptional(),
    serverImportSuccess: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of server records in the import file that were successfully imported.',
        }),
    ).exactOptional(),
    serverImportFailure: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of server records in the import file that failed to be imported.',
        }),
    ).exactOptional(),
    applicationImportSuccess: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of application records in the import file that were successfully imported.',
        }),
    ).exactOptional(),
    applicationImportFailure: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of application records in the import file that failed to be imported.',
        }),
    ).exactOptional(),
    errorsAndFailedEntriesZip: S3PresignedUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A link to a compressed archive folder (in the ZIP format) that contains an error log and a file of failed records. You can use these two files to quickly identify records that failed, why they failed, and correct those records. Afterward, you can upload the corrected file to your Amazon S3 bucket and create another import task request.</p> <p>This field also includes authorization information so you can confirm the authenticity of the compressed archive before you download it.</p> <p>If some records failed to be imported we recommend that you correct the records in the failed entries file and then imports that failed entries file. This prevents you from having to correct and update the larger original file and attempt importing it again.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.',
    required: [],
  })
  .openapi('ImportTask')

const ImportTaskListSchema = z.array(ImportTaskSchema).openapi('ImportTaskList')

const DescribeImportTasksResponseSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
    tasks: ImportTaskListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A returned array of import tasks that match any applied filters, up to the specified number of maximum results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImportTasksResponse')

const ImportTaskFilterNameSchema = z
  .enum(['IMPORT_TASK_ID', 'STATUS', 'NAME'])
  .openapi('ImportTaskFilterName')

const ImportTaskFilterValueSchema = z.string().min(1).max(255).openapi('ImportTaskFilterValue')

const ImportTaskFilterValueListSchema = z
  .array(ImportTaskFilterValueSchema)
  .min(1)
  .max(100)
  .openapi('ImportTaskFilterValueList')

const ImportTaskFilterSchema = z
  .object({
    name: ImportTaskFilterNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name, status, or import task ID for a specific import task.',
        }),
    ).exactOptional(),
    values: ImportTaskFilterValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that you can provide to match against a specific name, status, or import task ID to filter the results for your import task queries.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>',
    required: [],
  })
  .openapi('ImportTaskFilter')

const DescribeImportTasksFilterListSchema = z
  .array(ImportTaskFilterSchema)
  .openapi('DescribeImportTasksFilterList')

const DescribeImportTasksMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('DescribeImportTasksMaxResults')

const DescribeImportTasksRequestSchema = z
  .object({
    filters: DescribeImportTasksFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of name-value pairs that you provide to filter the results for the <code>DescribeImportTask</code> request to a specific subset of results. Currently, wildcard values aren't supported for filters.",
        }),
    ).exactOptional(),
    maxResults: DescribeImportTasksMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results that you want this request to return, up to 100.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to request a specific page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeImportTasksRequest', required: [] })
  .openapi('DescribeImportTasksRequest')

const ConfigurationItemTypeSchema = z
  .enum(['SERVER', 'PROCESS', 'CONNECTION', 'APPLICATION'])
  .openapi('ConfigurationItemType')

const ConfigurationTagSchema = z
  .object({
    configurationType: ConfigurationItemTypeSchema.and(
      z.any().openapi({ description: 'A type of IT asset to tag.' }),
    ).exactOptional(),
    configurationId: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration ID for the item to tag. You can specify a list of keys and values.',
        }),
    ).exactOptional(),
    key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description: 'A type of tag on which to filter. For example, <i>serverType</i>.',
        }),
    ).exactOptional(),
    value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value on which to filter. For example <i>key = serverType</i> and <i>value = web server</i>.',
        }),
    ).exactOptional(),
    timeOfCreation: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the configuration tag was created in Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Tags for a configuration item. Tags are metadata that help you categorize IT assets.',
    required: [],
  })
  .openapi('ConfigurationTag')

const ConfigurationTagSetSchema = z.array(ConfigurationTagSchema).openapi('ConfigurationTagSet')

const DescribeTagsResponseSchema = z
  .object({
    tags: ConfigurationTagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Depending on the input, this is a list of configuration items tagged with a specific tag, or a list of tags for a specific configuration item.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The call returns a token. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTagsResponse')

const TagFilterSchema = z
  .object({
    name: FilterNameSchema.and(z.any().openapi({ description: 'A name of the tag filter.' })),
    values: FilterValuesSchema.and(z.any().openapi({ description: 'Values for the tag filter.' })),
  })
  .openapi({
    required: ['name', 'values'],
    description:
      'The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.',
  })
  .openapi('TagFilter')

const TagFiltersSchema = z.array(TagFilterSchema).openapi('TagFilters')

const DescribeTagsRequestSchema = z
  .object({
    filters: TagFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can filter the list using a <i>key</i>-<i>value</i> format. You can separate these items by using logical operators. Allowed filters include <code>tagKey</code>, <code>tagValue</code>, and <code>configurationId</code>. ',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items to return in a single page of output. The maximum value is 100.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token to start the list. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeTagsRequest', required: [] })
  .openapi('DescribeTagsRequest')

const DisassociateConfigurationItemsFromApplicationResponseSchema = z
  .object({})
  .openapi('DisassociateConfigurationItemsFromApplicationResponse')

const DisassociateConfigurationItemsFromApplicationRequestSchema = z
  .object({
    applicationConfigurationId: ApplicationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration ID of an application from which each item is disassociated.',
        }),
    ),
    configurationIds: ConfigurationIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration ID of each item to be disassociated from an application.',
        }),
    ),
  })
  .openapi({
    required: ['applicationConfigurationId', 'configurationIds'],
    title: 'DisassociateConfigurationItemsFromApplicationRequest',
  })
  .openapi('DisassociateConfigurationItemsFromApplicationRequest')

const ExportConfigurationsResponseSchema = z
  .object({
    exportId: ConfigurationsExportIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier that you can use to query the export status.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportConfigurationsResponse')

const LongSchema = z.int().openapi('Long')

const CustomerAgentInfoSchema = z
  .object({
    activeAgents: IntegerSchema.and(
      z.any().openapi({ description: 'Number of active discovery agents.' }),
    ),
    healthyAgents: IntegerSchema.and(
      z.any().openapi({ description: 'Number of healthy discovery agents' }),
    ),
    blackListedAgents: IntegerSchema.and(
      z.any().openapi({ description: 'Number of blacklisted discovery agents.' }),
    ),
    shutdownAgents: IntegerSchema.and(
      z.any().openapi({ description: 'Number of discovery agents with status SHUTDOWN.' }),
    ),
    unhealthyAgents: IntegerSchema.and(
      z.any().openapi({ description: 'Number of unhealthy discovery agents.' }),
    ),
    totalAgents: IntegerSchema.and(
      z.any().openapi({ description: 'Total number of discovery agents.' }),
    ),
    unknownAgents: IntegerSchema.and(
      z.any().openapi({ description: 'Number of unknown discovery agents.' }),
    ),
  })
  .openapi({
    required: [
      'activeAgents',
      'healthyAgents',
      'blackListedAgents',
      'shutdownAgents',
      'unhealthyAgents',
      'totalAgents',
      'unknownAgents',
    ],
    description: 'Inventory data for installed discovery agents.',
  })
  .openapi('CustomerAgentInfo')

const CustomerConnectorInfoSchema = z
  .object({
    activeConnectors: IntegerSchema.and(
      z.any().openapi({ description: 'Number of active discovery connectors.' }),
    ),
    healthyConnectors: IntegerSchema.and(
      z.any().openapi({ description: 'Number of healthy discovery connectors.' }),
    ),
    blackListedConnectors: IntegerSchema.and(
      z.any().openapi({ description: 'Number of blacklisted discovery connectors.' }),
    ),
    shutdownConnectors: IntegerSchema.and(
      z.any().openapi({ description: 'Number of discovery connectors with status SHUTDOWN,' }),
    ),
    unhealthyConnectors: IntegerSchema.and(
      z.any().openapi({ description: 'Number of unhealthy discovery connectors.' }),
    ),
    totalConnectors: IntegerSchema.and(
      z.any().openapi({ description: 'Total number of discovery connectors.' }),
    ),
    unknownConnectors: IntegerSchema.and(
      z.any().openapi({ description: 'Number of unknown discovery connectors.' }),
    ),
  })
  .openapi({
    required: [
      'activeConnectors',
      'healthyConnectors',
      'blackListedConnectors',
      'shutdownConnectors',
      'unhealthyConnectors',
      'totalConnectors',
      'unknownConnectors',
    ],
    description: 'Inventory data for installed discovery connectors.',
  })
  .openapi('CustomerConnectorInfo')

const CustomerMeCollectorInfoSchema = z
  .object({
    activeMeCollectors: IntegerSchema.and(
      z.any().openapi({ description: ' The number of active Migration Evaluator collectors. ' }),
    ),
    healthyMeCollectors: IntegerSchema.and(
      z.any().openapi({ description: ' The number of healthy Migration Evaluator collectors. ' }),
    ),
    denyListedMeCollectors: IntegerSchema.and(
      z
        .any()
        .openapi({ description: ' The number of deny-listed Migration Evaluator collectors. ' }),
    ),
    shutdownMeCollectors: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of Migration Evaluator collectors with <code>SHUTDOWN</code> status. ',
        }),
    ),
    unhealthyMeCollectors: IntegerSchema.and(
      z.any().openapi({ description: ' The number of unhealthy Migration Evaluator collectors. ' }),
    ),
    totalMeCollectors: IntegerSchema.and(
      z.any().openapi({ description: ' The total number of Migration Evaluator collectors. ' }),
    ),
    unknownMeCollectors: IntegerSchema.and(
      z.any().openapi({ description: ' The number of unknown Migration Evaluator collectors. ' }),
    ),
  })
  .openapi({
    required: [
      'activeMeCollectors',
      'healthyMeCollectors',
      'denyListedMeCollectors',
      'shutdownMeCollectors',
      'unhealthyMeCollectors',
      'totalMeCollectors',
      'unknownMeCollectors',
    ],
    description: ' The inventory data for installed Migration Evaluator collectors. ',
  })
  .openapi('CustomerMeCollectorInfo')

const CustomerAgentlessCollectorInfoSchema = z
  .object({
    activeAgentlessCollectors: IntegerSchema,
    healthyAgentlessCollectors: IntegerSchema,
    denyListedAgentlessCollectors: IntegerSchema,
    shutdownAgentlessCollectors: IntegerSchema,
    unhealthyAgentlessCollectors: IntegerSchema,
    totalAgentlessCollectors: IntegerSchema,
    unknownAgentlessCollectors: IntegerSchema,
  })
  .openapi({
    required: [
      'activeAgentlessCollectors',
      'healthyAgentlessCollectors',
      'denyListedAgentlessCollectors',
      'shutdownAgentlessCollectors',
      'unhealthyAgentlessCollectors',
      'totalAgentlessCollectors',
      'unknownAgentlessCollectors',
    ],
  })
  .openapi('CustomerAgentlessCollectorInfo')

const GetDiscoverySummaryResponseSchema = z
  .object({
    servers: LongSchema.and(
      z.any().openapi({ description: 'The number of servers discovered.' }),
    ).exactOptional(),
    applications: LongSchema.and(
      z.any().openapi({ description: 'The number of applications discovered.' }),
    ).exactOptional(),
    serversMappedToApplications: LongSchema.and(
      z.any().openapi({ description: 'The number of servers mapped to applications.' }),
    ).exactOptional(),
    serversMappedtoTags: LongSchema.and(
      z.any().openapi({ description: 'The number of servers mapped to tags.' }),
    ).exactOptional(),
    agentSummary: CustomerAgentInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about discovered agents, including agent status and health.',
        }),
    ).exactOptional(),
    connectorSummary: CustomerConnectorInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about discovered connectors, including connector status and health.',
        }),
    ).exactOptional(),
    meCollectorSummary: CustomerMeCollectorInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Details about Migration Evaluator collectors, including collector status and health. ',
        }),
    ).exactOptional(),
    agentlessCollectorSummary: CustomerAgentlessCollectorInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDiscoverySummaryResponse')

const GetDiscoverySummaryRequestSchema = z
  .object({})
  .openapi({ title: 'GetDiscoverySummaryRequest' })
  .openapi('GetDiscoverySummaryRequest')

const ConfigurationSchema = z.record(z.string(), StringSchema).openapi('Configuration')

const ConfigurationsSchema = z.array(ConfigurationSchema).openapi('Configurations')

const ListConfigurationsResponseSchema = z
  .object({
    configurations: ConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns configuration details, including the configuration ID, attribute names, and attribute values.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to retrieve the next set of results. For example, if your call to ListConfigurations returned 100 items, but you set <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConfigurationsResponse')

const OrderByElementFieldNameSchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .max(1000)
  .openapi('OrderByElementFieldName')

const OrderStringSchema = z.enum(['ASC', 'DESC']).openapi('OrderString')

const OrderByElementSchema = z
  .object({
    fieldName: OrderByElementFieldNameSchema.and(
      z.any().openapi({ description: 'The field on which to order.' }),
    ),
    sortOrder: OrderStringSchema.and(
      z.any().openapi({ description: 'Ordering direction.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['fieldName'], description: 'A field and direction for ordered output.' })
  .openapi('OrderByElement')

const OrderByListSchema = z.array(OrderByElementSchema).openapi('OrderByList')

const ListConfigurationsRequestSchema = z
  .object({
    configurationType: ConfigurationItemTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A valid configuration identified by Application Discovery Service. ',
        }),
    ),
    filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can filter the request using various logical operators and a <i>key</i>-<i>value</i> format. For example: </p> <p> <code>{"key": "serverType", "value": "webServer"}</code> </p> <p>For a complete list of filter options and guidance about using them with this action, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p>',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The total number of items to return. The maximum value is 100.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to retrieve the next set of results. For example, if a previous call to ListConfigurations returned 100 items, but you set <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.',
        }),
    ).exactOptional(),
    orderBy: OrderByListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Certain filter criteria return output that can be sorted in ascending or descending order. For a list of output characteristics for each filter, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['configurationType'], title: 'ListConfigurationsRequest' })
  .openapi('ListConfigurationsRequest')

const BoxedIntegerSchema = z.int().openapi('BoxedInteger')

const NeighborConnectionDetailSchema = z
  .object({
    sourceServerId: ConfigurationIdSchema.and(
      z.any().openapi({ description: 'The ID of the server that opened the network connection.' }),
    ),
    destinationServerId: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the server that accepted the network connection.' }),
    ),
    destinationPort: BoxedIntegerSchema.and(
      z.any().openapi({ description: 'The destination network port for the connection.' }),
    ).exactOptional(),
    transportProtocol: StringSchema.and(
      z.any().openapi({ description: 'The network protocol used for the connection.' }),
    ).exactOptional(),
    connectionsCount: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of open network connections with the neighboring server.',
        }),
    ),
  })
  .openapi({
    required: ['sourceServerId', 'destinationServerId', 'connectionsCount'],
    description: 'Details about neighboring servers.',
  })
  .openapi('NeighborConnectionDetail')

const NeighborDetailsListSchema = z
  .array(NeighborConnectionDetailSchema)
  .openapi('NeighborDetailsList')

const ListServerNeighborsResponseSchema = z
  .object({
    neighbors: NeighborDetailsListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of distinct servers that are one hop away from the given server.',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to retrieve the next set of results. For example, if you specified 100 IDs for <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.',
        }),
    ).exactOptional(),
    knownDependencyCount: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'Count of distinct servers that are one hop away from the given server.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['neighbors'] })
  .openapi('ListServerNeighborsResponse')

const ListServerNeighborsRequestSchema = z
  .object({
    configurationId: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration ID of the server for which neighbors are being listed.',
        }),
    ),
    portInformationNeeded: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Flag to indicate if port and protocol information is needed as part of the response.',
        }),
    ).exactOptional(),
    neighborConfigurationIds: ConfigurationIdListSchema.and(
      z.any().openapi({ description: 'List of configuration IDs to test for one-hop-away.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum number of results to return in a single page of output.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to retrieve the next set of results. For example, if you previously specified 100 IDs for <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['configurationId'], title: 'ListServerNeighborsRequest' })
  .openapi('ListServerNeighborsRequest')

const StartContinuousExportResponseSchema = z
  .object({
    exportId: ConfigurationsExportIdSchema.and(
      z.any().openapi({ description: 'The unique ID assigned to this export.' }),
    ).exactOptional(),
    s3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the s3 bucket where the export data parquet files are stored.',
        }),
    ).exactOptional(),
    startTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp representing when the continuous export was started.',
        }),
    ).exactOptional(),
    dataSource: DataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data collector used to gather this data (currently only offered for AGENT).',
        }),
    ).exactOptional(),
    schemaStorageConfig: SchemaStorageConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A dictionary which describes how the data is stored.</p> <ul> <li> <p> <code>databaseName</code> - the name of the Glue database used to store the schema.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartContinuousExportResponse')

const StartContinuousExportRequestSchema = z
  .object({})
  .openapi({ title: 'StartContinuousExportRequest' })
  .openapi('StartContinuousExportRequest')

const ConflictErrorExceptionSchema = z.any().openapi('ConflictErrorException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const AgentConfigurationStatusSchema = z
  .object({
    agentId: StringSchema.and(
      z.any().openapi({ description: 'The agent/connector ID.' }),
    ).exactOptional(),
    operationSucceeded: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the status of the <code>StartDataCollection</code> and <code>StopDataCollection</code> operations. The system has recorded the data collection operation. The agent/connector receives this command the next time it polls for a new command. ',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'A description of the operation performed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.',
    required: [],
  })
  .openapi('AgentConfigurationStatus')

const AgentConfigurationStatusListSchema = z
  .array(AgentConfigurationStatusSchema)
  .openapi('AgentConfigurationStatusList')

const StartDataCollectionByAgentIdsResponseSchema = z
  .object({
    agentsConfigurationStatus: AgentConfigurationStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about agents or the connector that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation performed, and whether the agent/connector configuration was updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDataCollectionByAgentIdsResponse')

const StartDataCollectionByAgentIdsRequestSchema = z
  .object({
    agentIds: AgentIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the agents or connectors from which to start collecting data. If you send a request to an agent/connector ID that you do not have permission to contact, according to your Amazon Web Services account, the service does not throw an exception. Instead, it returns the error in the <i>Description</i> field. If you send a request to multiple agents/connectors and you do not have permission to contact some of those agents/connectors, the system does not throw an exception. Instead, the system shows <code>Failed</code> in the <i>Description</i> field.',
        }),
    ),
  })
  .openapi({ required: ['agentIds'], title: 'StartDataCollectionByAgentIdsRequest' })
  .openapi('StartDataCollectionByAgentIdsRequest')

const StartExportTaskResponseSchema = z
  .object({
    exportId: ConfigurationsExportIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier used to query the status of an export request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartExportTaskResponse')

const ExportDataFormatSchema = z.enum(['CSV', 'GRAPHML']).openapi('ExportDataFormat')

const ExportDataFormatsSchema = z.array(ExportDataFormatSchema).openapi('ExportDataFormats')

const StartExportTaskRequestSchema = z
  .object({
    exportDataFormat: ExportDataFormatsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file format for the returned export data. Default value is <code>CSV</code>. <b>Note:</b> <i>The</i> <code>GRAPHML</code> <i>option has been deprecated.</i> ',
        }),
    ).exactOptional(),
    filters: ExportFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a filter is present, it selects the single <code>agentId</code> of the Application Discovery Agent for which data is exported. The <code>agentId</code> can be found in the results of the <code>DescribeAgents</code> API or CLI. If no filter is present, <code>startTime</code> and <code>endTime</code> are ignored and exported data includes both Agentless Discovery Connector data and summary data from Application Discovery agents. ',
        }),
    ).exactOptional(),
    startTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, data is exported starting from the first data collected by the agent.',
        }),
    ).exactOptional(),
    endTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, exported data includes the most recent data collected by the agent.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartExportTaskRequest', required: [] })
  .openapi('StartExportTaskRequest')

const StartImportTaskResponseSchema = z
  .object({
    task: ImportTaskSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of information related to the import task request including status information, times, IDs, the Amazon S3 Object URL for the import file, and more. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartImportTaskResponse')

const StartImportTaskRequestSchema = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Optional. A unique token that you can provide to prevent the same import request from occurring more than once. If you don't provide a token, a token is automatically generated.</p> <p>Sending more than one <code>StartImportTask</code> request with the same client request token will return information about the original import task with that client request token.</p>",
        }),
    ).exactOptional(),
    name: ImportTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A descriptive name for this request. You can use this name to filter future requests related to this import task, such as identifying applications and servers that were included in this import task. We recommend that you use a meaningful name for each import task.',
        }),
    ),
    importUrl: ImportURLSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The URL for your import file that you've uploaded to Amazon S3.</p> <note> <p>If you're using the Amazon Web Services CLI, this URL is structured as follows: <code>s3://BucketName/ImportFileName.CSV</code> </p> </note>",
        }),
    ),
  })
  .openapi({ required: ['name', 'importUrl'], title: 'StartImportTaskRequest' })
  .openapi('StartImportTaskRequest')

const StopContinuousExportResponseSchema = z
  .object({
    startTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp that represents when this continuous export started collecting data.',
        }),
    ).exactOptional(),
    stopTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'Timestamp that represents when this continuous export was stopped.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopContinuousExportResponse')

const StopContinuousExportRequestSchema = z
  .object({
    exportId: ConfigurationsExportIdSchema.and(
      z.any().openapi({ description: 'The unique ID assigned to this export.' }),
    ),
  })
  .openapi({ required: ['exportId'], title: 'StopContinuousExportRequest' })
  .openapi('StopContinuousExportRequest')

const StopDataCollectionByAgentIdsResponseSchema = z
  .object({
    agentsConfigurationStatus: AgentConfigurationStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the agents or connector that were instructed to stop collecting data. Information includes the agent/connector ID, a description of the operation performed, and whether the agent/connector configuration was updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopDataCollectionByAgentIdsResponse')

const StopDataCollectionByAgentIdsRequestSchema = z
  .object({
    agentIds: AgentIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'The IDs of the agents or connectors from which to stop collecting data.',
        }),
    ),
  })
  .openapi({ required: ['agentIds'], title: 'StopDataCollectionByAgentIdsRequest' })
  .openapi('StopDataCollectionByAgentIdsRequest')

const UpdateApplicationResponseSchema = z.object({}).openapi('UpdateApplicationResponse')

const UpdateApplicationRequestSchema = z
  .object({
    configurationId: ApplicationIdSchema.and(
      z.any().openapi({ description: 'Configuration ID of the application to be updated.' }),
    ),
    name: ApplicationNameSchema.and(
      z.any().openapi({ description: 'New name of the application to be updated.' }),
    ).exactOptional(),
    description: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'New description of the application to be updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['configurationId'], title: 'UpdateApplicationRequest' })
  .openapi('UpdateApplicationRequest')

const DatabaseNameSchema = z.string().min(1).max(252).openapi('DatabaseName')

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

export const postXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication',
    description: 'Associates one or more configuration items with an application.',
    operationId: 'AssociateConfigurationItemsToApplication',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: AssociateConfigurationItemsToApplicationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AssociateConfigurationItemsToApplicationResponseSchema },
        },
      },
      480: {
        description: 'AuthorizationErrorException',
        content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      483: {
        description: 'ServerInternalErrorException',
        content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
      },
      484: {
        description: 'HomeRegionNotSetException',
        content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData',
  description:
    "<p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>",
  operationId: 'BatchDeleteImportData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.BatchDeleteImportData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.BatchDeleteImportData'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDeleteImportDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteImportDataResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101CreateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication',
  description: 'Creates an application with the given name and description.',
  operationId: 'CreateApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.CreateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.CreateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101CreateTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags',
  description:
    '<p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>',
  operationId: 'CreateTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.CreateTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.CreateTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTagsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications',
  description: 'Deletes a list of applications and their associations with configuration items.',
  operationId: 'DeleteApplications',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DeleteApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.DeleteApplications'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApplicationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DeleteTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags',
  description:
    'Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.',
  operationId: 'DeleteTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DeleteTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.DeleteTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTagsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents',
  description:
    'Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.',
  operationId: 'DescribeAgents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DescribeAgents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.DescribeAgents'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAgentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAgentsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations',
  description:
    '<p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>',
  operationId: 'DescribeConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DescribeConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.DescribeConfigurations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigurationsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports',
  description:
    'Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.',
  operationId: 'DescribeContinuousExports',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DescribeContinuousExports')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.DescribeContinuousExports'],
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeContinuousExportsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeContinuousExportsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations',
    description:
      ' <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.',
    operationId: 'DescribeExportConfigurations',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSPoseidonService_V2015_11_01.DescribeExportConfigurations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSPoseidonService_V2015_11_01.DescribeExportConfigurations'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeExportConfigurationsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeExportConfigurationsResponseSchema } },
      },
      480: {
        description: 'AuthorizationErrorException',
        content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      484: {
        description: 'ServerInternalErrorException',
        content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
      },
      485: {
        description: 'HomeRegionNotSetException',
        content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
      },
    },
    deprecated: true,
  })

export const postXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks',
  description:
    'Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.',
  operationId: 'DescribeExportTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DescribeExportTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.DescribeExportTasks'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExportTasksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExportTasksResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks',
  description:
    'Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.',
  operationId: 'DescribeImportTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DescribeImportTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.DescribeImportTasks'],
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeImportTasksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImportTasksResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DescribeTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags',
  description:
    '<p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>',
  operationId: 'DescribeTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.DescribeTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.DescribeTags'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTagsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
    description: 'Disassociates one or more configuration items from an application.',
    operationId: 'DisassociateConfigurationItemsFromApplication',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DisassociateConfigurationItemsFromApplicationRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DisassociateConfigurationItemsFromApplicationResponseSchema,
          },
        },
      },
      480: {
        description: 'AuthorizationErrorException',
        content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      483: {
        description: 'ServerInternalErrorException',
        content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
      },
      484: {
        description: 'HomeRegionNotSetException',
        content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations',
  description:
    '<p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>',
  operationId: 'ExportConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.ExportConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.ExportConfigurations'],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportConfigurationsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary',
  description:
    '<p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>',
  operationId: 'GetDiscoverySummary',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.GetDiscoverySummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.GetDiscoverySummary'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDiscoverySummaryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDiscoverySummaryResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations',
  description:
    'Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.',
  operationId: 'ListConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.ListConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.ListConfigurations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConfigurationsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors',
  description: 'Retrieves a list of servers that are one network hop away from a specified server.',
  operationId: 'ListServerNeighbors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.ListServerNeighbors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.ListServerNeighbors'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServerNeighborsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServerNeighborsResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport',
  description: "Start the continuous flow of agent's discovered data into Amazon Athena.",
  operationId: 'StartContinuousExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.StartContinuousExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.StartContinuousExport'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartContinuousExportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartContinuousExportResponseSchema } },
    },
    480: {
      description: 'ConflictErrorException',
      content: { 'application/json': { schema: ConflictErrorExceptionSchema } },
    },
    481: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    485: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    487: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds',
    description: 'Instructs the specified agents or connectors to start collecting data.',
    operationId: 'StartDataCollectionByAgentIds',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartDataCollectionByAgentIdsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartDataCollectionByAgentIdsResponseSchema } },
      },
      480: {
        description: 'AuthorizationErrorException',
        content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      483: {
        description: 'ServerInternalErrorException',
        content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
      },
      484: {
        description: 'HomeRegionNotSetException',
        content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSPoseidonServiceV20151101StartExportTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask',
  description:
    '<p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>',
  operationId: 'StartExportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.StartExportTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.StartExportTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartExportTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartExportTaskResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101StartImportTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask',
  description:
    '<p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it\'s Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>',
  operationId: 'StartImportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.StartImportTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.StartImportTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartImportTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartImportTaskResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport',
  description: "Stop the continuous flow of agent's discovered data into Amazon Athena.",
  operationId: 'StopContinuousExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.StopContinuousExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSPoseidonService_V2015_11_01.StopContinuousExport'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopContinuousExportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopContinuousExportResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    487: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds',
    description: 'Instructs the specified agents or connectors to stop collecting data.',
    operationId: 'StopDataCollectionByAgentIds',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StopDataCollectionByAgentIdsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StopDataCollectionByAgentIdsResponseSchema } },
      },
      480: {
        description: 'AuthorizationErrorException',
        content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      483: {
        description: 'ServerInternalErrorException',
        content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
      },
      484: {
        description: 'HomeRegionNotSetException',
        content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication',
  description: 'Updates metadata about an application.',
  operationId: 'UpdateApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSPoseidonService_V2015_11_01.UpdateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSPoseidonService_V2015_11_01.UpdateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApplicationResponseSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'application/json': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServerInternalErrorException',
      content: { 'application/json': { schema: ServerInternalErrorExceptionSchema } },
    },
    484: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})
