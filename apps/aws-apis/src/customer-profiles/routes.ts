import { createRoute, z } from '@hono/zod-openapi'

const S3BucketNameSchema = z
  .string()
  .regex(/^[a-z0-9.-]+$/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const S3KeyNameCustomerOutputConfigSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(800)
  .openapi('S3KeyNameCustomerOutputConfig')

const S3ExportingConfigSchema = z
  .object({
    S3BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the S3 bucket where Identity Resolution Jobs write result files.',
        }),
    ),
    S3KeyName: S3KeyNameCustomerOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 key name of the location where Identity Resolution Jobs write result files.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3BucketName'],
    description:
      'Configuration information about the S3 bucket where Identity Resolution Jobs write result files.',
  })
  .openapi('S3ExportingConfig')

type ExportingConfigType = {
  S3Exporting?: z.infer<typeof S3ExportingConfigSchema> & { [key: string]: unknown }
}

const MarketoConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'BETWEEN',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('MarketoConnectorOperator')

const S3ConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('S3ConnectorOperator')

const SalesforceConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'CONTAINS',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('SalesforceConnectorOperator')

const ServiceNowConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'CONTAINS',
    'LESS_THAN',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('ServiceNowConnectorOperator')

const ZendeskConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'GREATER_THAN',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('ZendeskConnectorOperator')

type ConnectorOperatorType = {
  Marketo?: z.infer<typeof MarketoConnectorOperatorSchema> & { [key: string]: unknown }
  S3?: z.infer<typeof S3ConnectorOperatorSchema> & { [key: string]: unknown }
  Salesforce?: z.infer<typeof SalesforceConnectorOperatorSchema> & { [key: string]: unknown }
  ServiceNow?: z.infer<typeof ServiceNowConnectorOperatorSchema> & { [key: string]: unknown }
  Zendesk?: z.infer<typeof ZendeskConnectorOperatorSchema> & { [key: string]: unknown }
}

const S3KeyNameSchema = z.string().regex(/.*/).min(1).max(1024).openapi('S3KeyName')

const S3ExportingLocationSchema = z
  .object({
    S3BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the S3 bucket name where Identity Resolution Jobs write result files.',
        }),
    ).exactOptional(),
    S3KeyName: S3KeyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 key name of the location where Identity Resolution Jobs write result files.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The S3 location where Identity Resolution Jobs write result files.',
    required: [],
  })
  .openapi('S3ExportingLocation')

type ExportingLocationType = {
  S3Exporting?: z.infer<typeof S3ExportingLocationSchema> & { [key: string]: unknown }
}

const SourceConnectorTypeSchema = z
  .enum(['Salesforce', 'Marketo', 'Zendesk', 'Servicenow', 'S3'])
  .openapi('SourceConnectorType')

const ConnectorProfileNameSchema = z
  .string()
  .regex(/[\w\/!@#+=.-]+/)
  .max(256)
  .openapi('ConnectorProfileName')

const String1To255Schema = z.string().min(1).max(255).openapi('String1To255')

const AppflowIntegrationWorkflowAttributesSchema = z
  .object({
    SourceConnectorType: SourceConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the source connector type, such as Salesforce, ServiceNow, and Marketo. Indicates source of ingestion.',
        }),
    ),
    ConnectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the AppFlow connector profile used for ingestion.' }),
    ),
    RoleArn: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceConnectorType', 'ConnectorProfileName'],
    description:
      'Structure holding all <code>APPFLOW_INTEGRATION</code> specific workflow attributes.',
  })
  .openapi('AppflowIntegrationWorkflowAttributes')

type WorkflowAttributesType = {
  AppflowIntegration?: z.infer<typeof AppflowIntegrationWorkflowAttributesSchema> & {
    [key: string]: unknown
  }
}

const LongSchema = z.int().openapi('Long')

const AppflowIntegrationWorkflowMetricsSchema = z
  .object({
    RecordsProcessed: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'Number of records processed in <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    StepsCompleted: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'Total steps completed in <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    TotalSteps: LongSchema.and(
      z.any().openapi({ description: 'Total steps in <code>APPFLOW_INTEGRATION</code> workflow.' }),
    ),
  })
  .openapi({
    required: ['RecordsProcessed', 'StepsCompleted', 'TotalSteps'],
    description:
      'Workflow specific execution metrics for <code>APPFLOW_INTEGRATION</code> workflow.',
  })
  .openapi('AppflowIntegrationWorkflowMetrics')

type WorkflowMetricsType = {
  AppflowIntegration?: z.infer<typeof AppflowIntegrationWorkflowMetricsSchema> & {
    [key: string]: unknown
  }
}

const ScheduleExpressionSchema = z.string().regex(/.*/).max(256).openapi('ScheduleExpression')

const DataPullModeSchema = z.enum(['Incremental', 'Complete']).openapi('DataPullMode')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const TimezoneSchema = z.string().regex(/.*/).max(256).openapi('Timezone')

const ScheduleOffsetSchema = z.int().min(0).max(36000).openapi('ScheduleOffset')

const ScheduledTriggerPropertiesSchema = z
  .object({
    ScheduleExpression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduling expression that determines the rate at which the schedule will run, for example rate (5 minutes).',
        }),
    ),
    DataPullMode: DataPullModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run.',
        }),
    ).exactOptional(),
    ScheduleStartTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the scheduled start time for a scheduled-trigger flow.',
        }),
    ).exactOptional(),
    ScheduleEndTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the scheduled end time for a scheduled-trigger flow.' }),
    ).exactOptional(),
    Timezone: TimezoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time zone used when referring to the date and time of a scheduled-triggered flow, such as America/New_York.',
        }),
    ).exactOptional(),
    ScheduleOffset: ScheduleOffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the optional offset that is added to the time interval for a schedule-triggered flow.',
        }),
    ).exactOptional(),
    FirstExecutionFrom: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the date range for the records to import from the connector in the first flow run.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ScheduleExpression'],
    description:
      'Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.',
  })
  .openapi('ScheduledTriggerProperties')

type TriggerPropertiesType = {
  Scheduled?: z.infer<typeof ScheduledTriggerPropertiesSchema> & { [key: string]: unknown }
}

const NameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(64)
  .openapi('Name')

const RequestValueListSchema = z.array(String1To255Schema).openapi('RequestValueList')

const AddProfileKeyResponseSchema = z
  .object({
    KeyName: NameSchema.and(
      z.any().openapi({ description: 'A searchable identifier of a customer profile.' }),
    ).exactOptional(),
    Values: RequestValueListSchema.and(
      z.any().openapi({ description: 'A list of key values.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddProfileKeyResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ExpirationDaysIntegerSchema = z.int().min(1).max(1098).openapi('ExpirationDaysInteger')

const EncryptionKeySchema = z.string().min(0).max(255).openapi('EncryptionKey')

const SqsQueueUrlSchema = z.string().min(0).max(255).openapi('SqsQueueUrl')

const OptionalBooleanSchema = z.boolean().openapi('OptionalBoolean')

const JobScheduleDayOfTheWeekSchema = z
  .enum(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'])
  .openapi('JobScheduleDayOfTheWeek')

const JobScheduleTimeSchema = z
  .string()
  .regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  .min(3)
  .max(5)
  .openapi('JobScheduleTime')

const JobScheduleSchema = z
  .object({
    DayOfTheWeek: JobScheduleDayOfTheWeekSchema.and(
      z
        .any()
        .openapi({
          description: 'The day when the Identity Resolution Job should run every week.',
        }),
    ),
    Time: JobScheduleTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the Identity Resolution Job should run every week.',
        }),
    ),
  })
  .openapi({
    required: ['DayOfTheWeek', 'Time'],
    description:
      'The day and time when do you want to start the Identity Resolution Job every week.',
  })
  .openapi('JobSchedule')

const MatchingAttributesSchema = z
  .array(String1To255Schema)
  .min(1)
  .max(20)
  .openapi('MatchingAttributes')

const MatchingAttributesListSchema = z
  .array(MatchingAttributesSchema)
  .min(1)
  .max(10)
  .openapi('MatchingAttributesList')

const ConsolidationSchema = z
  .object({
    MatchingAttributesList: MatchingAttributesListSchema.and(
      z.any().openapi({ description: 'A list of matching criteria.' }),
    ),
  })
  .openapi({
    required: ['MatchingAttributesList'],
    description: 'The matching criteria to be used during the auto-merging process. ',
  })
  .openapi('Consolidation')

const ConflictResolvingModelSchema = z.enum(['RECENCY', 'SOURCE']).openapi('ConflictResolvingModel')

const ConflictResolutionSchema = z
  .object({
    ConflictResolvingModel: ConflictResolvingModelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>How the auto-merging process should resolve conflicts between different profiles.</p> <ul> <li> <p> <code>RECENCY</code>: Uses the data that was most recently updated.</p> </li> <li> <p> <code>SOURCE</code>: Uses the data from a specific source. For example, if a company has been aquired or two departments have merged, data from the specified source is used. If two duplicate profiles are from the same source, then <code>RECENCY</code> is used again.</p> </li> </ul>',
        }),
    ),
    SourceName: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ObjectType</code> name that is used to resolve profile merging conflicts when choosing <code>SOURCE</code> as the <code>ConflictResolvingModel</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConflictResolvingModel'],
    description:
      'How the auto-merging process should resolve conflicts between different profiles.',
  })
  .openapi('ConflictResolution')

const Double0To1Schema = z.float64().min(0).max(1).openapi('Double0To1')

const AutoMergingSchema = z
  .object({
    Enabled: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({ description: 'The flag that enables the auto-merging of duplicate profiles.' }),
    ),
    Consolidation: ConsolidationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of matching attributes that represent matching criteria. If two profiles meet at least one of the requirements in the matching attributes list, they will be merged.',
        }),
    ).exactOptional(),
    ConflictResolution: ConflictResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'How the auto-merging process should resolve conflicts between different profiles. For example, if Profile A and Profile B have the same <code>FirstName</code> and <code>LastName</code> (and that is the matching criteria), which <code>EmailAddress</code> should be used? ',
        }),
    ).exactOptional(),
    MinAllowedConfidenceScoreForMerging: Double0To1Schema.and(
      z
        .any()
        .openapi({
          description:
            'A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process. A higher score means higher similarity required to merge profiles. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description: 'Configuration settings for how to perform the auto-merging of profiles.',
  })
  .openapi('AutoMerging')

const ExportingConfigSchema: z.ZodType<ExportingConfigType> = z
  .lazy(() =>
    z
      .object({
        S3Exporting: S3ExportingConfigSchema.and(
          z
            .any()
            .openapi({
              description: 'The S3 location where Identity Resolution Jobs write result files.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you\'ll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note>',
        required: [],
      }),
  )
  .openapi('ExportingConfig')

const MatchingResponseSchema = z
  .object({
    Enabled: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'The flag that enables the matching process of duplicate profiles.',
        }),
    ).exactOptional(),
    JobSchedule: JobScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day and time when do you want to start the Identity Resolution Job every week.',
        }),
    ).exactOptional(),
    AutoMerging: AutoMergingSchema.and(
      z.any().openapi({ description: 'Configuration information about the auto-merging process.' }),
    ).exactOptional(),
    ExportingConfig: ExportingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The flag that enables the matching process of duplicate profiles.',
    required: [],
  })
  .openapi('MatchingResponse')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const CreateDomainResponseSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    DefaultExpirationDays: ExpirationDaysIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The default number of days until the data within the domain expires.',
        }),
    ),
    DefaultEncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.',
        }),
    ).exactOptional(),
    DeadLetterQueueUrl: SqsQueueUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.',
        }),
    ).exactOptional(),
    Matching: MatchingResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p>',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'DefaultExpirationDays', 'CreatedAt', 'LastUpdatedAt'] })
  .openapi('CreateDomainResponse')

const UuidSchema = z
  .string()
  .regex(/[a-f0-9]{32}/)
  .openapi('Uuid')

const CreateIntegrationWorkflowResponseSchema = z
  .object({
    WorkflowId: UuidSchema.and(
      z.any().openapi({ description: 'Unique identifier for the workflow.' }),
    ),
    Message: String1To255Schema.and(
      z.any().openapi({ description: 'A message indicating create request was received.' }),
    ),
  })
  .openapi({ required: ['WorkflowId', 'Message'] })
  .openapi('CreateIntegrationWorkflowResponse')

const FlowDescriptionSchema = z
  .string()
  .regex(/[\w!@#\-.?,\s]*/)
  .max(2048)
  .openapi('FlowDescription')

const FlowNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][\w!@#.-]+/)
  .max(256)
  .openapi('FlowName')

const KmsArnSchema = z
  .string()
  .regex(/arn:aws:kms:.*:[0-9]+:.*/)
  .min(20)
  .max(2048)
  .openapi('KmsArn')

const DatetimeTypeFieldNameSchema = z.string().regex(/.*/).max(256).openapi('DatetimeTypeFieldName')

const IncrementalPullConfigSchema = z
  .object({
    DatetimeTypeFieldName: DatetimeTypeFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the configuration used when importing incremental records from the source.',
    required: [],
  })
  .openapi('IncrementalPullConfig')

const ObjectSchema = z.string().regex(/\S+/).max(512).openapi('Object')

const MarketoSourcePropertiesSchema = z
  .object({
    Object: ObjectSchema.and(
      z.any().openapi({ description: 'The object specified in the Marketo flow source.' }),
    ),
  })
  .openapi({
    required: ['Object'],
    description: 'The properties that are applied when Marketo is being used as a source.',
  })
  .openapi('MarketoSourceProperties')

const BucketNameSchema = z.string().regex(/\S+/).min(3).max(63).openapi('BucketName')

const BucketPrefixSchema = z.string().regex(/.*/).max(512).openapi('BucketPrefix')

const S3SourcePropertiesSchema = z
  .object({
    BucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon S3 bucket name where the source files are stored.' }),
    ),
    BucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object key for the Amazon S3 bucket in which the source files are stored.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketName'],
    description: 'The properties that are applied when Amazon S3 is being used as the flow source.',
  })
  .openapi('S3SourceProperties')

const BooleanSchema = z.boolean().openapi('Boolean')

const SalesforceSourcePropertiesSchema = z
  .object({
    Object: ObjectSchema.and(
      z.any().openapi({ description: 'The object specified in the Salesforce flow source.' }),
    ),
    EnableDynamicFieldUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.',
        }),
    ).exactOptional(),
    IncludeDeletedRecords: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether Amazon AppFlow includes deleted files in the flow run.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Object'],
    description: 'The properties that are applied when Salesforce is being used as a source.',
  })
  .openapi('SalesforceSourceProperties')

const ServiceNowSourcePropertiesSchema = z
  .object({
    Object: ObjectSchema.and(
      z.any().openapi({ description: 'The object specified in the ServiceNow flow source.' }),
    ),
  })
  .openapi({
    required: ['Object'],
    description: 'The properties that are applied when ServiceNow is being used as a source.',
  })
  .openapi('ServiceNowSourceProperties')

const ZendeskSourcePropertiesSchema = z
  .object({
    Object: ObjectSchema.and(
      z.any().openapi({ description: 'The object specified in the Zendesk flow source.' }),
    ),
  })
  .openapi({
    required: ['Object'],
    description: 'The properties that are applied when using Zendesk as a flow source.',
  })
  .openapi('ZendeskSourceProperties')

const SourceConnectorPropertiesSchema = z
  .object({
    Marketo: MarketoSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties that are applied when Marketo is being used as a source.',
        }),
    ).exactOptional(),
    S3: S3SourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The properties that are applied when Amazon S3 is being used as the flow source.',
        }),
    ).exactOptional(),
    Salesforce: SalesforceSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties that are applied when Salesforce is being used as a source.',
        }),
    ).exactOptional(),
    ServiceNow: ServiceNowSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties that are applied when ServiceNow is being used as a source.',
        }),
    ).exactOptional(),
    Zendesk: ZendeskSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties that are applied when using Zendesk as a flow source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.',
    required: [],
  })
  .openapi('SourceConnectorProperties')

const SourceFlowConfigSchema = z
  .object({
    ConnectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the AppFlow connector profile. This name must be unique for each connector profile in the AWS account.',
        }),
    ).exactOptional(),
    ConnectorType: SourceConnectorTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of connector, such as Salesforce, Marketo, and so on.' }),
    ),
    IncrementalPullConfig: IncrementalPullConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.',
        }),
    ).exactOptional(),
    SourceConnectorProperties: SourceConnectorPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the information that is required to query a particular source connector.',
        }),
    ),
  })
  .openapi({
    required: ['ConnectorType', 'SourceConnectorProperties'],
    description:
      'Contains information about the configuration of the source connector used in the flow.',
  })
  .openapi('SourceFlowConfig')

const ConnectorOperatorSchema: z.ZodType<ConnectorOperatorType> = z
  .lazy(() =>
    z
      .object({
        Marketo: MarketoConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: 'The operation to be performed on the provided Marketo source fields.',
            }),
        ).exactOptional(),
        S3: S3ConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: 'The operation to be performed on the provided Amazon S3 source fields.',
            }),
        ).exactOptional(),
        Salesforce: SalesforceConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                'The operation to be performed on the provided Salesforce source fields.',
            }),
        ).exactOptional(),
        ServiceNow: ServiceNowConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                'The operation to be performed on the provided ServiceNow source fields.',
            }),
        ).exactOptional(),
        Zendesk: ZendeskConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: 'The operation to be performed on the provided Zendesk source fields.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'The operation to be performed on the provided source fields.',
        required: [],
      }),
  )
  .openapi('ConnectorOperator')

const DestinationFieldSchema = z.string().regex(/.*/).max(256).openapi('DestinationField')

const StringTo2048Schema = z.string().regex(/.*/).max(2048).openapi('StringTo2048')

const SourceFieldsSchema = z.array(StringTo2048Schema).openapi('SourceFields')

const PropertySchema = z.string().regex(/.+/).max(2048).openapi('Property')

const TaskPropertiesMapSchema = z.record(z.string(), PropertySchema).openapi('TaskPropertiesMap')

const TaskTypeSchema = z
  .enum(['Arithmetic', 'Filter', 'Map', 'Mask', 'Merge', 'Truncate', 'Validate'])
  .openapi('TaskType')

const TaskSchema = z
  .object({
    ConnectorOperator: ConnectorOperatorSchema.and(
      z
        .any()
        .openapi({ description: 'The operation to be performed on the provided source fields.' }),
    ).exactOptional(),
    DestinationField: DestinationFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            'A field in a destination connector, or a field value against which Amazon AppFlow validates a source field.',
        }),
    ).exactOptional(),
    SourceFields: SourceFieldsSchema.and(
      z.any().openapi({ description: 'The source fields to which a particular task is applied.' }),
    ),
    TaskProperties: TaskPropertiesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map used to store task-related information. The service looks for particular information based on the TaskType.',
        }),
    ).exactOptional(),
    TaskType: TaskTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the particular task implementation that Amazon AppFlow performs.',
        }),
    ),
  })
  .openapi({
    required: ['SourceFields', 'TaskType'],
    description:
      'A class for modeling different type of tasks. Task implementation varies based on the TaskType.',
  })
  .openapi('Task')

const TasksSchema = z.array(TaskSchema).openapi('Tasks')

const TriggerTypeSchema = z.enum(['Scheduled', 'Event', 'OnDemand']).openapi('TriggerType')

const TriggerPropertiesSchema: z.ZodType<TriggerPropertiesType> = z
  .lazy(() =>
    z
      .object({
        Scheduled: ScheduledTriggerPropertiesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Specifies the configuration details of a schedule-triggered flow that you define.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.',
        required: [],
      }),
  )
  .openapi('TriggerProperties')

const TriggerConfigSchema = z
  .object({
    TriggerType: TriggerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of flow trigger. It can be OnDemand, Scheduled, or Event.',
        }),
    ),
    TriggerProperties: TriggerPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the configuration details of a schedule-triggered flow that you define. Currently, these settings only apply to the Scheduled trigger type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TriggerType'],
    description:
      'The trigger settings that determine how and when Amazon AppFlow runs the specified flow.',
  })
  .openapi('TriggerConfig')

const FlowDefinitionSchema = z
  .object({
    Description: FlowDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the flow you want to create.' }),
    ).exactOptional(),
    FlowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specified name of the flow. Use underscores (_) or hyphens (-) only. Spaces are not allowed.',
        }),
    ),
    KmsArn: KmsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name of the AWS Key Management Service (KMS) key you provide for encryption.',
        }),
    ),
    SourceFlowConfig: SourceFlowConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that controls how Customer Profiles retrieves data from the source.',
        }),
    ),
    Tasks: TasksSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tasks that Customer Profiles performs while transferring the data in the flow run.',
        }),
    ),
    TriggerConfig: TriggerConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The trigger settings that determine how and when the flow runs.',
        }),
    ),
  })
  .openapi({
    required: ['FlowName', 'KmsArn', 'SourceFlowConfig', 'Tasks', 'TriggerConfig'],
    description:
      'The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.',
  })
  .openapi('FlowDefinition')

const BatchSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'Start time of batch to split ingestion.' }),
    ),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'End time of batch to split ingestion.' }),
    ),
  })
  .openapi({
    required: ['StartTime', 'EndTime'],
    description:
      'Batch defines the boundaries for ingestion for each step in <code>APPFLOW_INTEGRATION</code> workflow. <code>APPFLOW_INTEGRATION</code> workflow splits ingestion based on these boundaries.',
  })
  .openapi('Batch')

const BatchesSchema = z.array(BatchSchema).openapi('Batches')

const AppflowIntegrationSchema = z
  .object({
    FlowDefinition: FlowDefinitionSchema,
    Batches: BatchesSchema.and(
      z
        .any()
        .openapi({ description: 'Batches in workflow of type <code>APPFLOW_INTEGRATION</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FlowDefinition'],
    description: 'Details for workflow of type <code>APPFLOW_INTEGRATION</code>.',
  })
  .openapi('AppflowIntegration')

const CreateProfileResponseSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
  })
  .openapi({ required: ['ProfileId'] })
  .openapi('CreateProfileResponse')

const MessageSchema = z.string().openapi('Message')

const DeleteDomainResponseSchema = z
  .object({
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message that indicates the delete request is done.' }),
    ),
  })
  .openapi({ required: ['Message'] })
  .openapi('DeleteDomainResponse')

const DeleteIntegrationResponseSchema = z
  .object({
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message that indicates the delete request is done.' }),
    ),
  })
  .openapi({ required: ['Message'] })
  .openapi('DeleteIntegrationResponse')

const DeleteProfileResponseSchema = z
  .object({
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message that indicates the delete request is done.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteProfileResponse')

const DeleteProfileKeyResponseSchema = z
  .object({
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message that indicates the delete request is done.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteProfileKeyResponse')

const DeleteProfileObjectResponseSchema = z
  .object({
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message that indicates the delete request is done.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteProfileObjectResponse')

const DeleteProfileObjectTypeResponseSchema = z
  .object({
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message that indicates the delete request is done.' }),
    ),
  })
  .openapi({ required: ['Message'] })
  .openapi('DeleteProfileObjectTypeResponse')

const DeleteWorkflowResponseSchema = z.object({}).openapi('DeleteWorkflowResponse')

const GetAutoMergingPreviewResponseSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    NumberOfMatchesInSample: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of match groups in the domain that have been reviewed in this preview dry run.',
        }),
    ).exactOptional(),
    NumberOfProfilesInSample: LongSchema.and(
      z.any().openapi({ description: 'The number of profiles found in this preview dry run.' }),
    ).exactOptional(),
    NumberOfProfilesWillBeMerged: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of profiles that would be merged if this wasn't a preview dry run.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName'] })
  .openapi('GetAutoMergingPreviewResponse')

const DomainStatsSchema = z
  .object({
    ProfileCount: LongSchema.and(
      z.any().openapi({ description: 'The total number of profiles currently in the domain.' }),
    ).exactOptional(),
    MeteringProfileCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of profiles that you are currently paying for in the domain. If you have more than 100 objects associated with a single profile, that profile counts as two profiles. If you have more than 200 objects, that profile counts as three, and so on.',
        }),
    ).exactOptional(),
    ObjectCount: LongSchema.and(
      z.any().openapi({ description: 'The total number of objects in domain.' }),
    ).exactOptional(),
    TotalSize: LongSchema.and(
      z.any().openapi({ description: 'The total size, in bytes, of all objects in the domain.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Usage-specific statistics about the domain.', required: [] })
  .openapi('DomainStats')

const GetDomainResponseSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    DefaultExpirationDays: ExpirationDaysIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The default number of days until the data within the domain expires.',
        }),
    ).exactOptional(),
    DefaultEncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.',
        }),
    ).exactOptional(),
    DeadLetterQueueUrl: SqsQueueUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.',
        }),
    ).exactOptional(),
    Stats: DomainStatsSchema.and(
      z.any().openapi({ description: 'Usage-specific statistics about the domain.' }),
    ).exactOptional(),
    Matching: MatchingResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p>',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'CreatedAt', 'LastUpdatedAt'] })
  .openapi('GetDomainResponse')

const IdentityResolutionJobStatusSchema = z
  .enum([
    'PENDING',
    'PREPROCESSING',
    'FIND_MATCHING',
    'MERGING',
    'COMPLETED',
    'PARTIAL_SUCCESS',
    'FAILED',
  ])
  .openapi('IdentityResolutionJobStatus')

const ExportingLocationSchema: z.ZodType<ExportingLocationType> = z
  .lazy(() =>
    z
      .object({
        S3Exporting: S3ExportingLocationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Information about the S3 location where Identity Resolution Jobs write result files.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'The S3 location where Identity Resolution Jobs write result files.',
        required: [],
      }),
  )
  .openapi('ExportingLocation')

const JobStatsSchema = z
  .object({
    NumberOfProfilesReviewed: LongSchema.and(
      z.any().openapi({ description: 'The number of profiles reviewed.' }),
    ).exactOptional(),
    NumberOfMatchesFound: LongSchema.and(
      z.any().openapi({ description: 'The number of matches found.' }),
    ).exactOptional(),
    NumberOfMergesDone: LongSchema.and(
      z.any().openapi({ description: 'The number of merges completed.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Statistics about the Identity Resolution Job.', required: [] })
  .openapi('JobStats')

const GetIdentityResolutionJobResponseSchema = z
  .object({
    DomainName: NameSchema.and(
      z.any().openapi({ description: 'The unique name of the domain.' }),
    ).exactOptional(),
    JobId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of the Identity Resolution Job.' }),
    ).exactOptional(),
    Status: IdentityResolutionJobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the Identity Resolution Job.</p> <ul> <li> <p> <code>PENDING</code>: The Identity Resolution Job is scheduled but has not started yet. If you turn off the Identity Resolution feature in your domain, jobs in the <code>PENDING</code> state are deleted.</p> </li> <li> <p> <code>PREPROCESSING</code>: The Identity Resolution Job is loading your data.</p> </li> <li> <p> <code>FIND_MATCHING</code>: The Identity Resolution Job is using the machine learning model to identify profiles that belong to the same matching group.</p> </li> <li> <p> <code>MERGING</code>: The Identity Resolution Job is merging duplicate profiles.</p> </li> <li> <p> <code>COMPLETED</code>: The Identity Resolution Job completed successfully.</p> </li> <li> <p> <code>PARTIAL_SUCCESS</code>: There's a system error and not all of the data is merged. The Identity Resolution Job writes a message indicating the source of the problem.</p> </li> <li> <p> <code>FAILED</code>: The Identity Resolution Job did not merge any data. It writes a message indicating the source of the problem.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Message: StringTo2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'The error messages that are generated when the Identity Resolution Job runs.',
        }),
    ).exactOptional(),
    JobStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of when the Identity Resolution Job was started or will be started.',
        }),
    ).exactOptional(),
    JobEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of when the Identity Resolution Job was completed.',
        }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of when the Identity Resolution Job was most recently edited.',
        }),
    ).exactOptional(),
    JobExpirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the Identity Resolution Job will expire.' }),
    ).exactOptional(),
    AutoMerging: AutoMergingSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration settings for how to perform the auto-merging of profiles.',
        }),
    ).exactOptional(),
    ExportingLocation: ExportingLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The S3 location where the Identity Resolution Job writes result files.',
        }),
    ).exactOptional(),
    JobStats: JobStatsSchema.and(
      z.any().openapi({ description: 'Statistics about the Identity Resolution Job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIdentityResolutionJobResponse')

const TypeNameSchema = z
  .string()
  .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
  .min(1)
  .max(255)
  .openapi('TypeName')

const ObjectTypeNamesSchema = z.record(z.string(), TypeNameSchema).openapi('ObjectTypeNames')

const GetIntegrationResponseSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    Uri: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The URI of the S3 bucket or any other type of data source.' }),
    ),
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
    ObjectTypeNames: ObjectTypeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.',
        }),
    ).exactOptional(),
    WorkflowId: String1To255Schema.and(
      z.any().openapi({ description: 'Unique identifier for the workflow.' }),
    ).exactOptional(),
    IsUnstructured: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Boolean that shows if the Flow that's associated with the Integration is created in Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in flowDefinition.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'Uri', 'CreatedAt', 'LastUpdatedAt'] })
  .openapi('GetIntegrationResponse')

const TokenSchema = z.string().min(1).max(1024).openapi('Token')

const MatchesNumberSchema = z.int().min(0).openapi('MatchesNumber')

const ProfileIdListSchema = z.array(UuidSchema).openapi('ProfileIdList')

const DoubleSchema = z.float64().openapi('Double')

const MatchItemSchema = z
  .object({
    MatchId: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The unique identifiers for this group of profiles that match.' }),
    ).exactOptional(),
    ProfileIds: ProfileIdListSchema.and(
      z.any().openapi({ description: 'A list of identifiers for profiles that match.' }),
    ).exactOptional(),
    ConfidenceScore: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number between 0 and 1, where a higher score means higher similarity. Examining match confidence scores lets you distinguish between groups of similar records in which the system is highly confident (which you may decide to merge), groups of similar records about which the system is uncertain (which you may decide to have reviewed by a human), and groups of similar records that the system deems to be unlikely (which you may decide to reject). Given confidence scores vary as per the data input, it should not be used an absolute measure of matching quality.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The Match group object.', required: [] })
  .openapi('MatchItem')

const MatchesListSchema = z.array(MatchItemSchema).openapi('MatchesList')

const GetMatchesResponseSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
    MatchGenerationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp this version of Match Result generated.' }),
    ).exactOptional(),
    PotentialMatches: MatchesNumberSchema.and(
      z.any().openapi({ description: 'The number of potential matches found.' }),
    ).exactOptional(),
    Matches: MatchesListSchema.and(
      z.any().openapi({ description: 'The list of matched profiles for this instance.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMatchesResponse')

const TextSchema = z.string().min(1).max(1000).openapi('Text')

const FieldContentTypeSchema = z
  .enum(['STRING', 'NUMBER', 'PHONE_NUMBER', 'EMAIL_ADDRESS', 'NAME'])
  .openapi('FieldContentType')

const ObjectTypeFieldSchema = z
  .object({
    Source: TextSchema.and(
      z
        .any()
        .openapi({
          description:
            'A field of a ProfileObject. For example: _source.FirstName, where “_source” is a ProfileObjectType of a Zendesk user and “FirstName” is a field in that ObjectType.',
        }),
    ).exactOptional(),
    Target: TextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.',
        }),
    ).exactOptional(),
    ContentType: FieldContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content type of the field. Used for determining equality when searching.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a field in a ProfileObjectType.', required: [] })
  .openapi('ObjectTypeField')

const FieldMapSchema = z.record(z.string(), ObjectTypeFieldSchema).openapi('FieldMap')

const StandardIdentifierSchema = z
  .enum(['PROFILE', 'ASSET', 'CASE', 'UNIQUE', 'SECONDARY', 'LOOKUP_ONLY', 'NEW_ONLY', 'ORDER'])
  .openapi('StandardIdentifier')

const StandardIdentifierListSchema = z
  .array(StandardIdentifierSchema)
  .openapi('StandardIdentifierList')

const FieldNameListSchema = z.array(NameSchema).openapi('FieldNameList')

const ObjectTypeKeySchema = z
  .object({
    StandardIdentifiers: StandardIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of keys that a ProfileObject can have. Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE, ASSET, CASE, or ORDER means that this key can be used to tie an object to a PROFILE, ASSET, CASE, or ORDER respectively. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.',
        }),
    ).exactOptional(),
    FieldNames: FieldNameListSchema.and(
      z.any().openapi({ description: 'The reference for the key name of the fields map.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.',
    required: [],
  })
  .openapi('ObjectTypeKey')

const ObjectTypeKeyListSchema = z.array(ObjectTypeKeySchema).openapi('ObjectTypeKeyList')

const KeyMapSchema = z.record(z.string(), ObjectTypeKeyListSchema).openapi('KeyMap')

const GetProfileObjectTypeResponseSchema = z
  .object({
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ),
    Description: TextSchema.and(
      z.any().openapi({ description: 'The description of the profile object type.' }),
    ),
    TemplateId: NameSchema.and(
      z.any().openapi({ description: 'A unique identifier for the object template.' }),
    ).exactOptional(),
    ExpirationDays: ExpirationDaysIntegerSchema.and(
      z.any().openapi({ description: 'The number of days until the data in the object expires.' }),
    ).exactOptional(),
    EncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer-provided key to encrypt the profile object that will be created in this profile object type.',
        }),
    ).exactOptional(),
    AllowProfileCreation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.',
        }),
    ).exactOptional(),
    SourceLastUpdatedTimestampFormat: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up.',
        }),
    ).exactOptional(),
    Fields: FieldMapSchema.and(
      z.any().openapi({ description: 'A map of the name and ObjectType field.' }),
    ).exactOptional(),
    Keys: KeyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of unique keys that can be used to map data to the profile.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectTypeName', 'Description'] })
  .openapi('GetProfileObjectTypeResponse')

const GetProfileObjectTypeTemplateResponseSchema = z
  .object({
    TemplateId: NameSchema.and(
      z.any().openapi({ description: 'A unique identifier for the object template.' }),
    ).exactOptional(),
    SourceName: NameSchema.and(
      z.any().openapi({ description: 'The name of the source of the object template.' }),
    ).exactOptional(),
    SourceObject: NameSchema.and(
      z.any().openapi({ description: 'The source of the object template.' }),
    ).exactOptional(),
    AllowProfileCreation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.',
        }),
    ).exactOptional(),
    SourceLastUpdatedTimestampFormat: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up.',
        }),
    ).exactOptional(),
    Fields: FieldMapSchema.and(
      z.any().openapi({ description: 'A map of the name and ObjectType field.' }),
    ).exactOptional(),
    Keys: KeyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of unique keys that can be used to map data to the profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProfileObjectTypeTemplateResponse')

const WorkflowTypeSchema = z.literal('APPFLOW_INTEGRATION').openapi('WorkflowType')

const StatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETE', 'FAILED', 'SPLIT', 'RETRY', 'CANCELLED'])
  .openapi('Status')

const WorkflowAttributesSchema: z.ZodType<WorkflowAttributesType> = z
  .lazy(() =>
    z
      .object({
        AppflowIntegration: AppflowIntegrationWorkflowAttributesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Workflow attributes specific to <code>APPFLOW_INTEGRATION</code> workflow.',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'Structure to hold workflow attributes.', required: [] }),
  )
  .openapi('WorkflowAttributes')

const WorkflowMetricsSchema: z.ZodType<WorkflowMetricsType> = z
  .lazy(() =>
    z
      .object({
        AppflowIntegration: AppflowIntegrationWorkflowMetricsSchema.and(
          z
            .any()
            .openapi({
              description:
                'Workflow execution metrics for <code>APPFLOW_INTEGRATION</code> workflow.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Generic object containing workflow execution metrics.',
        required: [],
      }),
  )
  .openapi('WorkflowMetrics')

const GetWorkflowResponseSchema = z
  .object({
    WorkflowId: UuidSchema.and(
      z.any().openapi({ description: 'Unique identifier for the workflow.' }),
    ).exactOptional(),
    WorkflowType: WorkflowTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of workflow. The only supported value is APPFLOW_INTEGRATION.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'Status of workflow execution.' }),
    ).exactOptional(),
    ErrorDescription: String1To255Schema.and(
      z.any().openapi({ description: 'Workflow error messages during execution (if any).' }),
    ).exactOptional(),
    StartDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that represents when workflow execution started.' }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that represents when workflow execution last updated.',
        }),
    ).exactOptional(),
    Attributes: WorkflowAttributesSchema.and(
      z.any().openapi({ description: 'Attributes provided for workflow execution.' }),
    ).exactOptional(),
    Metrics: WorkflowMetricsSchema.and(
      z.any().openapi({ description: 'Workflow specific execution metrics.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWorkflowResponse')

const AppflowIntegrationWorkflowStepSchema = z
  .object({
    FlowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the flow created during execution of workflow step. <code>APPFLOW_INTEGRATION</code> workflow type creates an appflow flow during workflow step execution on the customers behalf.',
        }),
    ),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Workflow step status for <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    ExecutionMessage: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'Message indicating execution of workflow step for <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    RecordsProcessed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total number of records processed during execution of workflow step for <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    BatchRecordsStartTime: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'Start datetime of records pulled in batch during execution of workflow step for <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    BatchRecordsEndTime: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'End datetime of records pulled in batch during execution of workflow step for <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Creation timestamp of workflow step for <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Last updated timestamp for workflow step for <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ),
  })
  .openapi({
    required: [
      'FlowName',
      'Status',
      'ExecutionMessage',
      'RecordsProcessed',
      'BatchRecordsStartTime',
      'BatchRecordsEndTime',
      'CreatedAt',
      'LastUpdatedAt',
    ],
    description: 'Workflow step details for <code>APPFLOW_INTEGRATION</code> workflow.',
  })
  .openapi('AppflowIntegrationWorkflowStep')

const WorkflowStepItemSchema = z
  .object({
    AppflowIntegration: AppflowIntegrationWorkflowStepSchema.and(
      z
        .any()
        .openapi({
          description:
            'Workflow step information specific to <code>APPFLOW_INTEGRATION</code> workflow.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'List containing steps in workflow.', required: [] })
  .openapi('WorkflowStepItem')

const WorkflowStepsListSchema = z.array(WorkflowStepItemSchema).openapi('WorkflowStepsList')

const GetWorkflowStepsResponseSchema = z
  .object({
    WorkflowId: UuidSchema.and(
      z.any().openapi({ description: 'Unique identifier for the workflow.' }),
    ).exactOptional(),
    WorkflowType: WorkflowTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of workflow. The only supported value is APPFLOW_INTEGRATION.',
        }),
    ).exactOptional(),
    Items: WorkflowStepsListSchema.and(
      z.any().openapi({ description: 'List containing workflow step details.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWorkflowStepsResponse')

const ListIntegrationItemSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    Uri: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The URI of the S3 bucket or any other type of data source.' }),
    ),
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
    ObjectTypeNames: ObjectTypeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.',
        }),
    ).exactOptional(),
    WorkflowId: String1To255Schema.and(
      z.any().openapi({ description: 'Unique identifier for the workflow.' }),
    ).exactOptional(),
    IsUnstructured: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Boolean that shows if the Flow that's associated with the Integration is created in Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in flowDefinition.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName', 'Uri', 'CreatedAt', 'LastUpdatedAt'],
    description: 'An integration in list of integrations.',
  })
  .openapi('ListIntegrationItem')

const IntegrationListSchema = z.array(ListIntegrationItemSchema).openapi('IntegrationList')

const ListAccountIntegrationsResponseSchema = z
  .object({
    Items: IntegrationListSchema.and(
      z.any().openapi({ description: 'The list of ListAccountIntegration instances.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token from the previous ListAccountIntegrations API call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountIntegrationsResponse')

const ListDomainItemSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName', 'CreatedAt', 'LastUpdatedAt'],
    description: 'An object in a list that represents a domain.',
  })
  .openapi('ListDomainItem')

const DomainListSchema = z.array(ListDomainItemSchema).openapi('DomainList')

const ListDomainsResponseSchema = z
  .object({
    Items: DomainListSchema.and(
      z.any().openapi({ description: 'The list of ListDomains instances.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token from the previous ListDomains API call.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDomainsResponse')

const IdentityResolutionJobSchema = z
  .object({
    DomainName: NameSchema.and(
      z.any().openapi({ description: 'The unique name of the domain.' }),
    ).exactOptional(),
    JobId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of the Identity Resolution Job.' }),
    ).exactOptional(),
    Status: IdentityResolutionJobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the Identity Resolution Job.</p> <ul> <li> <p> <code>PENDING</code>: The Identity Resolution Job is scheduled but has not started yet. If you turn off the Identity Resolution feature in your domain, jobs in the <code>PENDING</code> state are deleted.</p> </li> <li> <p> <code>PREPROCESSING</code>: The Identity Resolution Job is loading your data.</p> </li> <li> <p> <code>FIND_MATCHING</code>: The Identity Resolution Job is using the machine learning model to identify profiles that belong to the same matching group.</p> </li> <li> <p> <code>MERGING</code>: The Identity Resolution Job is merging duplicate profiles.</p> </li> <li> <p> <code>COMPLETED</code>: The Identity Resolution Job completed successfully.</p> </li> <li> <p> <code>PARTIAL_SUCCESS</code>: There's a system error and not all of the data is merged. The Identity Resolution Job writes a message indicating the source of the problem.</p> </li> <li> <p> <code>FAILED</code>: The Identity Resolution Job did not merge any data. It writes a message indicating the source of the problem.</p> </li> </ul>",
        }),
    ).exactOptional(),
    JobStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the job was started or will be started.' }),
    ).exactOptional(),
    JobEndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the job was completed.' }),
    ).exactOptional(),
    JobStats: JobStatsSchema.and(
      z.any().openapi({ description: 'Statistics about an Identity Resolution Job.' }),
    ).exactOptional(),
    ExportingLocation: ExportingLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The S3 location where the Identity Resolution Job writes result files.',
        }),
    ).exactOptional(),
    Message: StringTo2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'The error messages that are generated when the Identity Resolution Job runs.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the Identity Resolution Job.', required: [] })
  .openapi('IdentityResolutionJob')

const IdentityResolutionJobsListSchema = z
  .array(IdentityResolutionJobSchema)
  .openapi('IdentityResolutionJobsList')

const ListIdentityResolutionJobsResponseSchema = z
  .object({
    IdentityResolutionJobsList: IdentityResolutionJobsListSchema.and(
      z.any().openapi({ description: 'A list of Identity Resolution Jobs.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIdentityResolutionJobsResponse')

const ListIntegrationsResponseSchema = z
  .object({
    Items: IntegrationListSchema.and(
      z.any().openapi({ description: 'The list of ListIntegrations instances.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token from the previous ListIntegrations API call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIntegrationsResponse')

const ListProfileObjectTypeTemplateItemSchema = z
  .object({
    TemplateId: NameSchema.and(
      z.any().openapi({ description: 'A unique identifier for the object template.' }),
    ).exactOptional(),
    SourceName: NameSchema.and(
      z.any().openapi({ description: 'The name of the source of the object template.' }),
    ).exactOptional(),
    SourceObject: NameSchema.and(
      z.any().openapi({ description: 'The source of the object template.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.',
    required: [],
  })
  .openapi('ListProfileObjectTypeTemplateItem')

const ProfileObjectTypeTemplateListSchema = z
  .array(ListProfileObjectTypeTemplateItemSchema)
  .openapi('ProfileObjectTypeTemplateList')

const ListProfileObjectTypeTemplatesResponseSchema = z
  .object({
    Items: ProfileObjectTypeTemplateListSchema.and(
      z.any().openapi({ description: 'The list of ListProfileObjectType template instances.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token from the previous ListObjectTypeTemplates API call. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProfileObjectTypeTemplatesResponse')

const ListProfileObjectTypeItemSchema = z
  .object({
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ),
    Description: TextSchema.and(
      z.any().openapi({ description: 'Description of the profile object type.' }),
    ),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectTypeName', 'Description'],
    description: 'A ProfileObjectType instance.',
  })
  .openapi('ListProfileObjectTypeItem')

const ProfileObjectTypeListSchema = z
  .array(ListProfileObjectTypeItemSchema)
  .openapi('ProfileObjectTypeList')

const ListProfileObjectTypesResponseSchema = z
  .object({
    Items: ProfileObjectTypeListSchema.and(
      z.any().openapi({ description: 'The list of ListProfileObjectTypes instances.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProfileObjectTypesResponse')

const StringifiedJsonSchema = z.string().min(1).max(256000).openapi('StringifiedJson')

const ListProfileObjectsItemSchema = z
  .object({
    ObjectTypeName: TypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the kind of object being added to a profile, such as "Salesforce-Account."',
        }),
    ).exactOptional(),
    ProfileObjectUniqueKey: String1To255Schema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the ProfileObject generated by the service.',
        }),
    ).exactOptional(),
    Object: StringifiedJsonSchema.and(
      z
        .any()
        .openapi({
          description: 'A JSON representation of a ProfileObject that belongs to a profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A ProfileObject in a list of ProfileObjects.', required: [] })
  .openapi('ListProfileObjectsItem')

const ProfileObjectListSchema = z.array(ListProfileObjectsItemSchema).openapi('ProfileObjectList')

const ListProfileObjectsResponseSchema = z
  .object({
    Items: ProfileObjectListSchema.and(
      z.any().openapi({ description: 'The list of ListProfileObject instances.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token from the previous call to ListProfileObjects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProfileObjectsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListWorkflowsItemSchema = z
  .object({
    WorkflowType: WorkflowTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of workflow. The only supported value is APPFLOW_INTEGRATION.',
        }),
    ),
    WorkflowId: String1To255Schema.and(
      z.any().openapi({ description: 'Unique identifier for the workflow.' }),
    ),
    Status: StatusSchema.and(z.any().openapi({ description: 'Status of workflow execution.' })),
    StatusDescription: String1To255Schema.and(
      z.any().openapi({ description: 'Description for workflow execution status.' }),
    ),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'Creation timestamp for workflow.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'Last updated timestamp for workflow.' }),
    ),
  })
  .openapi({
    required: [
      'WorkflowType',
      'WorkflowId',
      'Status',
      'StatusDescription',
      'CreatedAt',
      'LastUpdatedAt',
    ],
    description: 'A workflow in list of workflows.',
  })
  .openapi('ListWorkflowsItem')

const WorkflowListSchema = z.array(ListWorkflowsItemSchema).openapi('WorkflowList')

const ListWorkflowsResponseSchema = z
  .object({
    Items: WorkflowListSchema.and(
      z.any().openapi({ description: 'List containing workflow details.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the token for the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWorkflowsResponse')

const MergeProfilesResponseSchema = z
  .object({
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message that indicates the merge request is complete.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MergeProfilesResponse')

const AttributeSourceIdMapSchema = z.record(z.string(), UuidSchema).openapi('AttributeSourceIdMap')

const PutIntegrationResponseSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    Uri: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The URI of the S3 bucket or any other type of data source.' }),
    ),
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
    ObjectTypeNames: ObjectTypeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.',
        }),
    ).exactOptional(),
    WorkflowId: String1To255Schema.and(
      z.any().openapi({ description: 'Unique identifier for the workflow.' }),
    ).exactOptional(),
    IsUnstructured: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Boolean that shows if the Flow that's associated with the Integration is created in Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in flowDefinition.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'Uri', 'CreatedAt', 'LastUpdatedAt'] })
  .openapi('PutIntegrationResponse')

const PutProfileObjectResponseSchema = z
  .object({
    ProfileObjectUniqueKey: String1To255Schema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the profile object generated by the service.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutProfileObjectResponse')

const PutProfileObjectTypeResponseSchema = z
  .object({
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ),
    Description: TextSchema.and(
      z.any().openapi({ description: 'Description of the profile object type.' }),
    ),
    TemplateId: NameSchema.and(
      z.any().openapi({ description: 'A unique identifier for the object template.' }),
    ).exactOptional(),
    ExpirationDays: ExpirationDaysIntegerSchema.and(
      z.any().openapi({ description: 'The number of days until the data in the object expires.' }),
    ).exactOptional(),
    EncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer-provided key to encrypt the profile object that will be created in this profile object type.',
        }),
    ).exactOptional(),
    AllowProfileCreation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.',
        }),
    ).exactOptional(),
    SourceLastUpdatedTimestampFormat: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up in fields that were parsed using <a href="https://docs.oracle.com/javase/10/docs/api/java/text/SimpleDateFormat.html">SimpleDateFormat</a>. If you have <code>sourceLastUpdatedTimestamp</code> in your field, you must set up <code>sourceLastUpdatedTimestampFormat</code>.',
        }),
    ).exactOptional(),
    Fields: FieldMapSchema.and(
      z.any().openapi({ description: 'A map of the name and ObjectType field.' }),
    ).exactOptional(),
    Keys: KeyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of unique keys that can be used to map data to the profile.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectTypeName', 'Description'] })
  .openapi('PutProfileObjectTypeResponse')

const String1To1000Schema = z.string().min(1).max(1000).openapi('String1To1000')

const PartyTypeSchema = z
  .enum(['INDIVIDUAL', 'BUSINESS', 'OTHER'])
  .openapi({ deprecated: true })
  .openapi('PartyType')

const GenderSchema = z
  .enum(['MALE', 'FEMALE', 'UNSPECIFIED'])
  .openapi({ deprecated: true })
  .openapi('Gender')

const AddressSchema = z
  .object({
    Address1: String1To255Schema.and(
      z.any().openapi({ description: 'The first line of a customer address.' }),
    ).exactOptional(),
    Address2: String1To255Schema.and(
      z.any().openapi({ description: 'The second line of a customer address.' }),
    ).exactOptional(),
    Address3: String1To255Schema.and(
      z.any().openapi({ description: 'The third line of a customer address.' }),
    ).exactOptional(),
    Address4: String1To255Schema.and(
      z.any().openapi({ description: 'The fourth line of a customer address.' }),
    ).exactOptional(),
    City: String1To255Schema.and(
      z.any().openapi({ description: 'The city in which a customer lives.' }),
    ).exactOptional(),
    County: String1To255Schema.and(
      z.any().openapi({ description: 'The county in which a customer lives.' }),
    ).exactOptional(),
    State: String1To255Schema.and(
      z.any().openapi({ description: 'The state in which a customer lives.' }),
    ).exactOptional(),
    Province: String1To255Schema.and(
      z.any().openapi({ description: 'The province in which a customer lives.' }),
    ).exactOptional(),
    Country: String1To255Schema.and(
      z.any().openapi({ description: 'The country in which a customer lives.' }),
    ).exactOptional(),
    PostalCode: String1To255Schema.and(
      z.any().openapi({ description: 'The postal code of a customer address.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A generic address associated with the customer that is not mailing, shipping, or billing.',
    required: [],
  })
  .openapi('Address')

const AttributesSchema = z.record(z.string(), String1To255Schema).openapi('Attributes')

const FoundByKeyValueSchema = z
  .object({
    KeyName: NameSchema.and(
      z.any().openapi({ description: 'A searchable identifier of a customer profile.' }),
    ).exactOptional(),
    Values: RequestValueListSchema.and(
      z.any().openapi({ description: 'A list of key values.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that were used to find a profile returned in response to a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request. ',
    required: [],
  })
  .openapi('FoundByKeyValue')

const FoundByListSchema = z.array(FoundByKeyValueSchema).min(1).max(5).openapi('FoundByList')

const ProfileSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ).exactOptional(),
    AccountNumber: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'A unique account number that you have given to the customer.' }),
    ).exactOptional(),
    AdditionalInformation: String1To1000Schema.and(
      z
        .any()
        .openapi({ description: 'Any additional information relevant to the customer’s profile.' }),
    ).exactOptional(),
    PartyType: PartyTypeSchema.and(
      z.any().openapi({ description: 'The type of profile used to describe the customer.' }),
    ).exactOptional(),
    BusinessName: String1To255Schema.and(
      z.any().openapi({ description: 'The name of the customer’s business.' }),
    ).exactOptional(),
    FirstName: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s first name.' }),
    ).exactOptional(),
    MiddleName: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s middle name.' }),
    ).exactOptional(),
    LastName: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s last name.' }),
    ).exactOptional(),
    BirthDate: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s birth date. ' }),
    ).exactOptional(),
    Gender: GenderSchema.and(
      z.any().openapi({ description: 'The gender with which the customer identifies. ' }),
    ).exactOptional(),
    PhoneNumber: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            "The customer's phone number, which has not been specified as a mobile, home, or business number.",
        }),
    ).exactOptional(),
    MobilePhoneNumber: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s mobile phone number.' }),
    ).exactOptional(),
    HomePhoneNumber: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s home phone number.' }),
    ).exactOptional(),
    BusinessPhoneNumber: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s home phone number.' }),
    ).exactOptional(),
    EmailAddress: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The customer’s email address, which has not been specified as a personal or business address. ',
        }),
    ).exactOptional(),
    PersonalEmailAddress: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s personal email address.' }),
    ).exactOptional(),
    BusinessEmailAddress: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s business email address.' }),
    ).exactOptional(),
    Address: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'A generic address associated with the customer that is not mailing, shipping, or billing.',
        }),
    ).exactOptional(),
    ShippingAddress: AddressSchema.and(
      z.any().openapi({ description: 'The customer’s shipping address.' }),
    ).exactOptional(),
    MailingAddress: AddressSchema.and(
      z.any().openapi({ description: 'The customer’s mailing address.' }),
    ).exactOptional(),
    BillingAddress: AddressSchema.and(
      z.any().openapi({ description: 'The customer’s billing address.' }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z.any().openapi({ description: 'A key value pair of attributes of a customer profile.' }),
    ).exactOptional(),
    FoundByItems: FoundByListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of items used to find a profile returned in a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> response. An item is a key-value(s) pair that matches an attribute in the profile.</p> <p>If the optional <code>AdditionalSearchKeys</code> parameter was included in the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request, the <code>FoundByItems</code> list should be interpreted based on the <code>LogicalOperator</code> used in the request:</p> <ul> <li> <p> <code>AND</code> - The profile included in the response matched all of the search keys specified in the request. The <code>FoundByItems</code> will include all of the key-value(s) pairs that were specified in the request (as this is a requirement of <code>AND</code> search logic).</p> </li> <li> <p> <code>OR</code> - The profile included in the response matched at least one of the search keys specified in the request. The <code>FoundByItems</code> will include each of the key-value(s) pairs that the profile was found by.</p> </li> </ul> <p>The <code>OR</code> relationship is the default behavior if the <code>LogicalOperator</code> parameter is not included in the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request.</p>',
        }),
    ).exactOptional(),
    PartyTypeString: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'An alternative to PartyType which accepts any string as input.' }),
    ).exactOptional(),
    GenderString: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'An alternative to Gender which accepts any string as input.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The standard profile of a customer.', required: [] })
  .openapi('Profile')

const ProfileListSchema = z.array(ProfileSchema).openapi('ProfileList')

const SearchProfilesResponseSchema = z
  .object({
    Items: ProfileListSchema.and(
      z.any().openapi({ description: 'The list of Profiles matching the search criteria.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token from the previous SearchProfiles API call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchProfilesResponse')

const AdditionalSearchKeySchema = z
  .object({
    KeyName: NameSchema.and(
      z.any().openapi({ description: 'A searchable identifier of a customer profile.' }),
    ),
    Values: RequestValueListSchema.and(z.any().openapi({ description: 'A list of key values.' })),
  })
  .openapi({
    required: ['KeyName', 'Values'],
    description:
      'A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that is used in conjunction with the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-KeyName">KeyName</a> and <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-Values">Values</a> parameters to search for profiles using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> API.',
  })
  .openapi('AdditionalSearchKey')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateDomainResponseSchema = z
  .object({
    DomainName: NameSchema.and(z.any().openapi({ description: 'The unique name of the domain.' })),
    DefaultExpirationDays: ExpirationDaysIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The default number of days until the data within the domain expires.',
        }),
    ).exactOptional(),
    DefaultEncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.',
        }),
    ).exactOptional(),
    DeadLetterQueueUrl: SqsQueueUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.',
        }),
    ).exactOptional(),
    Matching: MatchingResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p>',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of when the domain was created.' }),
    ),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the domain was most recently edited.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName', 'CreatedAt', 'LastUpdatedAt'] })
  .openapi('UpdateDomainResponse')

const UpdateProfileResponseSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
  })
  .openapi({ required: ['ProfileId'] })
  .openapi('UpdateProfileResponse')

const String0To255Schema = z.string().min(0).max(255).openapi('String0To255')

const AddProfileKeyRequestSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
    KeyName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.',
        }),
    ),
    Values: RequestValueListSchema.and(z.any().openapi({ description: 'A list of key values.' })),
  })
  .openapi({ required: ['ProfileId', 'KeyName', 'Values'], title: 'AddProfileKeyRequest' })
  .openapi('AddProfileKeyRequest')

const MatchingRequestSchema = z
  .object({
    Enabled: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'The flag that enables the matching process of duplicate profiles.',
        }),
    ),
    JobSchedule: JobScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day and time when do you want to start the Identity Resolution Job every week.',
        }),
    ).exactOptional(),
    AutoMerging: AutoMergingSchema.and(
      z.any().openapi({ description: 'Configuration information about the auto-merging process.' }),
    ).exactOptional(),
    ExportingConfig: ExportingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description: 'The flag that enables the matching process of duplicate profiles.',
  })
  .openapi('MatchingRequest')

const CreateDomainRequestSchema = z
  .object({
    DefaultExpirationDays: ExpirationDaysIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The default number of days until the data within the domain expires.',
        }),
    ),
    DefaultEncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.',
        }),
    ).exactOptional(),
    DeadLetterQueueUrl: SqsQueueUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.',
        }),
    ).exactOptional(),
    Matching: MatchingRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p>',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DefaultExpirationDays'], title: 'CreateDomainRequest' })
  .openapi('CreateDomainRequest')

const IntegrationConfigSchema = z
  .object({
    AppflowIntegration: AppflowIntegrationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration data for <code>APPFLOW_INTEGRATION</code> workflow type.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Configuration data for integration workflow.', required: [] })
  .openapi('IntegrationConfig')

const RoleArnSchema = z
  .string()
  .regex(/arn:aws:iam:.*:[0-9]+:.*/)
  .max(512)
  .openapi('RoleArn')

const CreateIntegrationWorkflowRequestSchema = z
  .object({
    WorkflowType: WorkflowTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of workflow. The only supported value is APPFLOW_INTEGRATION.',
        }),
    ),
    IntegrationConfig: IntegrationConfigSchema.and(
      z.any().openapi({ description: 'Configuration data for integration workflow.' }),
    ),
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.',
        }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WorkflowType', 'IntegrationConfig', 'ObjectTypeName', 'RoleArn'],
    title: 'CreateIntegrationWorkflowRequest',
  })
  .openapi('CreateIntegrationWorkflowRequest')

const CreateProfileRequestSchema = z
  .object({
    AccountNumber: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'A unique account number that you have given to the customer.' }),
    ).exactOptional(),
    AdditionalInformation: String1To1000Schema.and(
      z
        .any()
        .openapi({ description: 'Any additional information relevant to the customer’s profile.' }),
    ).exactOptional(),
    PartyType: PartyTypeSchema.and(
      z.any().openapi({ description: 'The type of profile used to describe the customer.' }),
    ).exactOptional(),
    BusinessName: String1To255Schema.and(
      z.any().openapi({ description: 'The name of the customer’s business.' }),
    ).exactOptional(),
    FirstName: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s first name.' }),
    ).exactOptional(),
    MiddleName: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s middle name.' }),
    ).exactOptional(),
    LastName: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s last name.' }),
    ).exactOptional(),
    BirthDate: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s birth date. ' }),
    ).exactOptional(),
    Gender: GenderSchema.and(
      z.any().openapi({ description: 'The gender with which the customer identifies. ' }),
    ).exactOptional(),
    PhoneNumber: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The customer’s phone number, which has not been specified as a mobile, home, or business number. ',
        }),
    ).exactOptional(),
    MobilePhoneNumber: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s mobile phone number.' }),
    ).exactOptional(),
    HomePhoneNumber: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s home phone number.' }),
    ).exactOptional(),
    BusinessPhoneNumber: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s business phone number.' }),
    ).exactOptional(),
    EmailAddress: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The customer’s email address, which has not been specified as a personal or business address. ',
        }),
    ).exactOptional(),
    PersonalEmailAddress: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s personal email address.' }),
    ).exactOptional(),
    BusinessEmailAddress: String1To255Schema.and(
      z.any().openapi({ description: 'The customer’s business email address.' }),
    ).exactOptional(),
    Address: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'A generic address associated with the customer that is not mailing, shipping, or billing.',
        }),
    ).exactOptional(),
    ShippingAddress: AddressSchema.and(
      z.any().openapi({ description: 'The customer’s shipping address.' }),
    ).exactOptional(),
    MailingAddress: AddressSchema.and(
      z.any().openapi({ description: 'The customer’s mailing address.' }),
    ).exactOptional(),
    BillingAddress: AddressSchema.and(
      z.any().openapi({ description: 'The customer’s billing address.' }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z.any().openapi({ description: 'A key value pair of attributes of a customer profile.' }),
    ).exactOptional(),
    PartyTypeString: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'An alternative to <code>PartyType</code> which accepts any string as input.',
        }),
    ).exactOptional(),
    GenderString: String1To255Schema.and(
      z
        .any()
        .openapi({
          description: 'An alternative to <code>Gender</code> which accepts any string as input.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateProfileRequest', required: [] })
  .openapi('CreateProfileRequest')

const DeleteDomainRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDomainRequest' })
  .openapi('DeleteDomainRequest')

const DeleteIntegrationRequestSchema = z
  .object({
    Uri: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The URI of the S3 bucket or any other type of data source.' }),
    ),
  })
  .openapi({ required: ['Uri'], title: 'DeleteIntegrationRequest' })
  .openapi('DeleteIntegrationRequest')

const DeleteProfileKeyRequestSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
    KeyName: NameSchema.and(
      z.any().openapi({ description: 'A searchable identifier of a customer profile.' }),
    ),
    Values: RequestValueListSchema.and(z.any().openapi({ description: 'A list of key values.' })),
  })
  .openapi({ required: ['ProfileId', 'KeyName', 'Values'], title: 'DeleteProfileKeyRequest' })
  .openapi('DeleteProfileKeyRequest')

const DeleteProfileObjectRequestSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
    ProfileObjectUniqueKey: String1To255Schema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the profile object generated by the service.',
        }),
    ),
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ),
  })
  .openapi({
    required: ['ProfileId', 'ProfileObjectUniqueKey', 'ObjectTypeName'],
    title: 'DeleteProfileObjectRequest',
  })
  .openapi('DeleteProfileObjectRequest')

const DeleteProfileObjectTypeRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProfileObjectTypeRequest' })
  .openapi('DeleteProfileObjectTypeRequest')

const DeleteProfileRequestSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
  })
  .openapi({ required: ['ProfileId'], title: 'DeleteProfileRequest' })
  .openapi('DeleteProfileRequest')

const DeleteWorkflowRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteWorkflowRequest' })
  .openapi('DeleteWorkflowRequest')

const FieldSourceProfileIdsSchema = z
  .object({
    AccountNumber: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the account number field to be merged. ',
        }),
    ).exactOptional(),
    AdditionalInformation: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the additional information field to be merged.',
        }),
    ).exactOptional(),
    PartyType: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the party type field to be merged.' }),
    ).exactOptional(),
    BusinessName: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the business name field to be merged.' }),
    ).exactOptional(),
    FirstName: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the first name field to be merged.' }),
    ).exactOptional(),
    MiddleName: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the middle name field to be merged.' }),
    ).exactOptional(),
    LastName: UuidSchema.and(
      z.any().openapi({ description: 'A unique identifier for the last name field to be merged.' }),
    ).exactOptional(),
    BirthDate: UuidSchema.and(
      z.any().openapi({ description: 'A unique identifier for the birthdate field to be merged.' }),
    ).exactOptional(),
    Gender: UuidSchema.and(
      z.any().openapi({ description: 'A unique identifier for the gender field to be merged.' }),
    ).exactOptional(),
    PhoneNumber: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the phone number field to be merged.' }),
    ).exactOptional(),
    MobilePhoneNumber: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the mobile phone number field to be merged.',
        }),
    ).exactOptional(),
    HomePhoneNumber: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the home phone number field to be merged.',
        }),
    ).exactOptional(),
    BusinessPhoneNumber: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the business phone number field to be merged.',
        }),
    ).exactOptional(),
    EmailAddress: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the email address field to be merged.' }),
    ).exactOptional(),
    PersonalEmailAddress: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the personal email address field to be merged.',
        }),
    ).exactOptional(),
    BusinessEmailAddress: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the party type field to be merged.' }),
    ).exactOptional(),
    Address: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the party type field to be merged.' }),
    ).exactOptional(),
    ShippingAddress: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the shipping address field to be merged.',
        }),
    ).exactOptional(),
    MailingAddress: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the mailing address field to be merged.',
        }),
    ).exactOptional(),
    BillingAddress: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the billing type field to be merged.' }),
    ).exactOptional(),
    Attributes: AttributeSourceIdMapSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the attributes field to be merged.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A duplicate customer profile that is to be merged into a main profile. ',
    required: [],
  })
  .openapi('FieldSourceProfileIds')

const GetAutoMergingPreviewRequestSchema = z
  .object({
    Consolidation: ConsolidationSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of matching attributes that represent matching criteria.',
        }),
    ),
    ConflictResolution: ConflictResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'How the auto-merging process should resolve conflicts between different profiles.',
        }),
    ),
    MinAllowedConfidenceScoreForMerging: Double0To1Schema.and(
      z
        .any()
        .openapi({
          description:
            'Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Consolidation', 'ConflictResolution'],
    title: 'GetAutoMergingPreviewRequest',
  })
  .openapi('GetAutoMergingPreviewRequest')

const GetDomainRequestSchema = z
  .object({})
  .openapi({ title: 'GetDomainRequest' })
  .openapi('GetDomainRequest')

const GetIdentityResolutionJobRequestSchema = z
  .object({})
  .openapi({ title: 'GetIdentityResolutionJobRequest' })
  .openapi('GetIdentityResolutionJobRequest')

const GetIntegrationRequestSchema = z
  .object({
    Uri: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The URI of the S3 bucket or any other type of data source.' }),
    ),
  })
  .openapi({ required: ['Uri'], title: 'GetIntegrationRequest' })
  .openapi('GetIntegrationRequest')

const MaxSize100Schema = z.int().min(1).max(100).openapi('MaxSize100')

const GetMatchesRequestSchema = z
  .object({})
  .openapi({ title: 'GetMatchesRequest' })
  .openapi('GetMatchesRequest')

const GetProfileObjectTypeRequestSchema = z
  .object({})
  .openapi({ title: 'GetProfileObjectTypeRequest' })
  .openapi('GetProfileObjectTypeRequest')

const GetProfileObjectTypeTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetProfileObjectTypeTemplateRequest' })
  .openapi('GetProfileObjectTypeTemplateRequest')

const GetWorkflowRequestSchema = z
  .object({})
  .openapi({ title: 'GetWorkflowRequest' })
  .openapi('GetWorkflowRequest')

const GetWorkflowStepsRequestSchema = z
  .object({})
  .openapi({ title: 'GetWorkflowStepsRequest' })
  .openapi('GetWorkflowStepsRequest')

const ListAccountIntegrationsRequestSchema = z
  .object({
    Uri: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The URI of the S3 bucket or any other type of data source.' }),
    ),
  })
  .openapi({ required: ['Uri'], title: 'ListAccountIntegrationsRequest' })
  .openapi('ListAccountIntegrationsRequest')

const ListDomainsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDomainsRequest' })
  .openapi('ListDomainsRequest')

const ListIdentityResolutionJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListIdentityResolutionJobsRequest' })
  .openapi('ListIdentityResolutionJobsRequest')

const ListIntegrationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListIntegrationsRequest' })
  .openapi('ListIntegrationsRequest')

const ListProfileObjectTypeTemplatesRequestSchema = z
  .object({})
  .openapi({ title: 'ListProfileObjectTypeTemplatesRequest' })
  .openapi('ListProfileObjectTypeTemplatesRequest')

const ListProfileObjectTypesRequestSchema = z
  .object({})
  .openapi({ title: 'ListProfileObjectTypesRequest' })
  .openapi('ListProfileObjectTypesRequest')

const ObjectFilterSchema = z
  .object({
    KeyName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A searchable identifier of a standard profile object. The predefined keys you can use to search for _asset include: _assetId, _assetName, _serialNumber. The predefined keys you can use to search for _case include: _caseId. The predefined keys you can use to search for _order include: _orderId.',
        }),
    ),
    Values: RequestValueListSchema.and(z.any().openapi({ description: 'A list of key values.' })),
  })
  .openapi({
    required: ['KeyName', 'Values'],
    description:
      'The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset, _case and _order.',
  })
  .openapi('ObjectFilter')

const ListProfileObjectsRequestSchema = z
  .object({
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ),
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
    ObjectFilter: ObjectFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Applies a filter to the response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset, _case and _order.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectTypeName', 'ProfileId'], title: 'ListProfileObjectsRequest' })
  .openapi('ListProfileObjectsRequest')

const TagArnSchema = z
  .string()
  .regex(/^arn:[a-z0-9]{1,10}:profile/)
  .max(256)
  .openapi('TagArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListWorkflowsRequestSchema = z
  .object({
    WorkflowType: WorkflowTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of workflow. The only supported value is APPFLOW_INTEGRATION.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'Status of workflow execution.' }),
    ).exactOptional(),
    QueryStartDate: TimestampSchema.and(
      z.any().openapi({ description: 'Retrieve workflows started after timestamp.' }),
    ).exactOptional(),
    QueryEndDate: TimestampSchema.and(
      z.any().openapi({ description: 'Retrieve workflows ended after timestamp.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWorkflowsRequest', required: [] })
  .openapi('ListWorkflowsRequest')

const ProfileIdToBeMergedListSchema = z
  .array(UuidSchema)
  .min(1)
  .max(20)
  .openapi('ProfileIdToBeMergedList')

const MergeProfilesRequestSchema = z
  .object({
    MainProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The identifier of the profile to be taken.' }),
    ),
    ProfileIdsToBeMerged: ProfileIdToBeMergedListSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the profile to be merged into MainProfileId.' }),
    ),
    FieldSourceProfileIds: FieldSourceProfileIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the fields in the profile that has the information you want to apply to the merge. For example, say you want to merge EmailAddress from Profile1 into MainProfile. This would be the identifier of the EmailAddress field in Profile1. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MainProfileId', 'ProfileIdsToBeMerged'], title: 'MergeProfilesRequest' })
  .openapi('MergeProfilesRequest')

const OperatorPropertiesKeysSchema = z
  .enum([
    'VALUE',
    'VALUES',
    'DATA_TYPE',
    'UPPER_BOUND',
    'LOWER_BOUND',
    'SOURCE_DATA_TYPE',
    'DESTINATION_DATA_TYPE',
    'VALIDATION_ACTION',
    'MASK_VALUE',
    'MASK_LENGTH',
    'TRUNCATE_LENGTH',
    'MATH_OPERATION_FIELDS_ORDER',
    'CONCAT_FORMAT',
    'SUBFIELD_CATEGORY_MAP',
  ])
  .openapi('OperatorPropertiesKeys')

const PutIntegrationRequestSchema = z
  .object({
    Uri: String1To255Schema.and(
      z
        .any()
        .openapi({ description: 'The URI of the S3 bucket or any other type of data source.' }),
    ).exactOptional(),
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
    FlowDefinition: FlowDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that controls how Customer Profiles retrieves data from the source.',
        }),
    ).exactOptional(),
    ObjectTypeNames: ObjectTypeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutIntegrationRequest', required: [] })
  .openapi('PutIntegrationRequest')

const PutProfileObjectRequestSchema = z
  .object({
    ObjectTypeName: TypeNameSchema.and(
      z.any().openapi({ description: 'The name of the profile object type.' }),
    ),
    Object: StringifiedJsonSchema.and(
      z.any().openapi({ description: 'A string that is serialized from a JSON object.' }),
    ),
  })
  .openapi({ required: ['ObjectTypeName', 'Object'], title: 'PutProfileObjectRequest' })
  .openapi('PutProfileObjectRequest')

const PutProfileObjectTypeRequestSchema = z
  .object({
    Description: TextSchema.and(
      z.any().openapi({ description: 'Description of the profile object type.' }),
    ),
    TemplateId: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a <code>BadRequestException</code>. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a <code>BadRequestException</code>.',
        }),
    ).exactOptional(),
    ExpirationDays: ExpirationDaysIntegerSchema.and(
      z.any().openapi({ description: 'The number of days until the data in the object expires.' }),
    ).exactOptional(),
    EncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer-provided key to encrypt the profile object that will be created in this profile object type.',
        }),
    ).exactOptional(),
    AllowProfileCreation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.',
        }),
    ).exactOptional(),
    SourceLastUpdatedTimestampFormat: String1To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up. ',
        }),
    ).exactOptional(),
    Fields: FieldMapSchema.and(
      z.any().openapi({ description: 'A map of the name and ObjectType field.' }),
    ).exactOptional(),
    Keys: KeyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of unique keys that can be used to map data to the profile.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Description'], title: 'PutProfileObjectTypeRequest' })
  .openapi('PutProfileObjectTypeRequest')

const AdditionalSearchKeysListSchema = z
  .array(AdditionalSearchKeySchema)
  .min(1)
  .max(4)
  .openapi('AdditionalSearchKeysList')

const LogicalOperatorSchema = z.enum(['AND', 'OR']).openapi('LogicalOperator')

const SearchProfilesRequestSchema = z
  .object({
    KeyName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.',
        }),
    ),
    Values: RequestValueListSchema.and(z.any().openapi({ description: 'A list of key values.' })),
    AdditionalSearchKeys: AdditionalSearchKeysListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>AdditionalSearchKey</code> objects that are each searchable identifiers of a profile. Each <code>AdditionalSearchKey</code> object contains a <code>KeyName</code> and a list of <code>Values</code> associated with that specific key (i.e., a key-value(s) pair). These additional search keys will be used in conjunction with the <code>LogicalOperator</code> and the required <code>KeyName</code> and <code>Values</code> parameters to search for profiles that satisfy the search criteria. ',
        }),
    ).exactOptional(),
    LogicalOperator: LogicalOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Relationship between all specified search keys that will be used to search for profiles. This includes the required <code>KeyName</code> and <code>Values</code> parameters as well as any key-value(s) pairs specified in the <code>AdditionalSearchKeys</code> list.</p> <p>This parameter influences which profiles will be returned in the response in the following manner:</p> <ul> <li> <p> <code>AND</code> - The response only includes profiles that match all of the search keys.</p> </li> <li> <p> <code>OR</code> - The response includes profiles that match at least one of the search keys.</p> </li> </ul> <p>The <code>OR</code> relationship is the default behavior if this parameter is not included in the request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['KeyName', 'Values'], title: 'SearchProfilesRequest' })
  .openapi('SearchProfilesRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAddressSchema = z
  .object({
    Address1: String0To255Schema.and(
      z.any().openapi({ description: 'The first line of a customer address.' }),
    ).exactOptional(),
    Address2: String0To255Schema.and(
      z.any().openapi({ description: 'The second line of a customer address.' }),
    ).exactOptional(),
    Address3: String0To255Schema.and(
      z.any().openapi({ description: 'The third line of a customer address.' }),
    ).exactOptional(),
    Address4: String0To255Schema.and(
      z.any().openapi({ description: 'The fourth line of a customer address.' }),
    ).exactOptional(),
    City: String0To255Schema.and(
      z.any().openapi({ description: 'The city in which a customer lives.' }),
    ).exactOptional(),
    County: String0To255Schema.and(
      z.any().openapi({ description: 'The county in which a customer lives.' }),
    ).exactOptional(),
    State: String0To255Schema.and(
      z.any().openapi({ description: 'The state in which a customer lives.' }),
    ).exactOptional(),
    Province: String0To255Schema.and(
      z.any().openapi({ description: 'The province in which a customer lives.' }),
    ).exactOptional(),
    Country: String0To255Schema.and(
      z.any().openapi({ description: 'The country in which a customer lives.' }),
    ).exactOptional(),
    PostalCode: String0To255Schema.and(
      z.any().openapi({ description: 'The postal code of a customer address.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Updates associated with the address properties of a customer profile.',
    required: [],
  })
  .openapi('UpdateAddress')

const UpdateAttributesSchema = z.record(z.string(), String0To255Schema).openapi('UpdateAttributes')

const UpdateDomainRequestSchema = z
  .object({
    DefaultExpirationDays: ExpirationDaysIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The default number of days until the data within the domain expires.',
        }),
    ).exactOptional(),
    DefaultEncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.',
        }),
    ).exactOptional(),
    DeadLetterQueueUrl: SqsQueueUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.',
        }),
    ).exactOptional(),
    Matching: MatchingRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p>',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags used to organize, track, or control access for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDomainRequest', required: [] })
  .openapi('UpdateDomainRequest')

const String0To1000Schema = z.string().min(0).max(1000).openapi('String0To1000')

const UpdateProfileRequestSchema = z
  .object({
    ProfileId: UuidSchema.and(
      z.any().openapi({ description: 'The unique identifier of a customer profile.' }),
    ),
    AdditionalInformation: String0To1000Schema.and(
      z
        .any()
        .openapi({ description: 'Any additional information relevant to the customer’s profile.' }),
    ).exactOptional(),
    AccountNumber: String0To255Schema.and(
      z
        .any()
        .openapi({ description: 'A unique account number that you have given to the customer.' }),
    ).exactOptional(),
    PartyType: PartyTypeSchema.and(
      z.any().openapi({ description: 'The type of profile used to describe the customer.' }),
    ).exactOptional(),
    BusinessName: String0To255Schema.and(
      z.any().openapi({ description: 'The name of the customer’s business.' }),
    ).exactOptional(),
    FirstName: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s first name.' }),
    ).exactOptional(),
    MiddleName: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s middle name.' }),
    ).exactOptional(),
    LastName: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s last name.' }),
    ).exactOptional(),
    BirthDate: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s birth date. ' }),
    ).exactOptional(),
    Gender: GenderSchema.and(
      z.any().openapi({ description: 'The gender with which the customer identifies. ' }),
    ).exactOptional(),
    PhoneNumber: String0To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The customer’s phone number, which has not been specified as a mobile, home, or business number. ',
        }),
    ).exactOptional(),
    MobilePhoneNumber: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s mobile phone number.' }),
    ).exactOptional(),
    HomePhoneNumber: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s home phone number.' }),
    ).exactOptional(),
    BusinessPhoneNumber: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s business phone number.' }),
    ).exactOptional(),
    EmailAddress: String0To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'The customer’s email address, which has not been specified as a personal or business address. ',
        }),
    ).exactOptional(),
    PersonalEmailAddress: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s personal email address.' }),
    ).exactOptional(),
    BusinessEmailAddress: String0To255Schema.and(
      z.any().openapi({ description: 'The customer’s business email address.' }),
    ).exactOptional(),
    Address: UpdateAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'A generic address associated with the customer that is not mailing, shipping, or billing.',
        }),
    ).exactOptional(),
    ShippingAddress: UpdateAddressSchema.and(
      z.any().openapi({ description: 'The customer’s shipping address.' }),
    ).exactOptional(),
    MailingAddress: UpdateAddressSchema.and(
      z.any().openapi({ description: 'The customer’s mailing address.' }),
    ).exactOptional(),
    BillingAddress: UpdateAddressSchema.and(
      z.any().openapi({ description: 'The customer’s billing address.' }),
    ).exactOptional(),
    Attributes: UpdateAttributesSchema.and(
      z.any().openapi({ description: 'A key value pair of attributes of a customer profile.' }),
    ).exactOptional(),
    PartyTypeString: String0To255Schema.and(
      z
        .any()
        .openapi({
          description:
            'An alternative to <code>PartyType</code> which accepts any string as input.',
        }),
    ).exactOptional(),
    GenderString: String0To255Schema.and(
      z
        .any()
        .openapi({
          description: 'An alternative to <code>Gender</code> which accepts any string as input.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProfileId'], title: 'UpdateProfileRequest' })
  .openapi('UpdateProfileRequest')

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

export const postDomainsDomainNameProfilesKeysRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles/keys',
  description:
    '<p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>',
  operationId: 'AddProfileKey',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProfileId: z
                .string()
                .regex(/[a-f0-9]{32}/)
                .openapi({ description: 'The unique identifier of a customer profile.' }),
              KeyName: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.',
                }),
              Values: z.array(String1To255Schema).openapi({ description: 'A list of key values.' }),
            })
            .openapi({ required: ['ProfileId', 'KeyName', 'Values'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddProfileKeyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}',
  description: 'Returns information about a specific domain.',
  operationId: 'GetDomain',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putDomainsDomainNameRoute = createRoute({
  method: 'put',
  path: '/domains/{DomainName}',
  description:
    '<p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>',
  operationId: 'UpdateDomain',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DefaultExpirationDays: z
                .int()
                .min(1)
                .max(1098)
                .exactOptional()
                .openapi({
                  description:
                    'The default number of days until the data within the domain expires.',
                }),
              DefaultEncryptionKey: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.',
                }),
              DeadLetterQueueUrl: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.',
                }),
              Matching: z
                .object({
                  Enabled: OptionalBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The flag that enables the matching process of duplicate profiles.',
                      }),
                  ).exactOptional(),
                  JobSchedule: JobScheduleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The day and time when do you want to start the Identity Resolution Job every week.',
                      }),
                  ).exactOptional(),
                  AutoMerging: AutoMergingSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Configuration information about the auto-merging process.',
                      }),
                  ).exactOptional(),
                  ExportingConfig: ExportingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The flag that enables the matching process of duplicate profiles.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource.',
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
      content: { 'application/json': { schema: UpdateDomainResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}',
  description:
    '<p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>',
  operationId: 'CreateDomain',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DefaultExpirationDays: z
                .int()
                .min(1)
                .max(1098)
                .openapi({
                  description:
                    'The default number of days until the data within the domain expires.',
                }),
              DefaultEncryptionKey: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.',
                }),
              DeadLetterQueueUrl: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.',
                }),
              Matching: z
                .object({
                  Enabled: OptionalBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The flag that enables the matching process of duplicate profiles.',
                      }),
                  ).exactOptional(),
                  JobSchedule: JobScheduleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The day and time when do you want to start the Identity Resolution Job every week.',
                      }),
                  ).exactOptional(),
                  AutoMerging: AutoMergingSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Configuration information about the auto-merging process.',
                      }),
                  ).exactOptional(),
                  ExportingConfig: ExportingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The flag that enables the matching process of duplicate profiles.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource.',
                }),
            })
            .openapi({ required: ['DefaultExpirationDays'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDomainResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteDomainsDomainNameRoute = createRoute({
  method: 'delete',
  path: '/domains/{DomainName}',
  description:
    'Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.',
  operationId: 'DeleteDomain',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDomainResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameWorkflowsIntegrationsRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/workflows/integrations',
  description:
    ' Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. ',
  operationId: 'CreateIntegrationWorkflow',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WorkflowType: z
                .literal('APPFLOW_INTEGRATION')
                .openapi({
                  description:
                    'The type of workflow. The only supported value is APPFLOW_INTEGRATION.',
                }),
              IntegrationConfig: z
                .object({
                  AppflowIntegration: AppflowIntegrationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration data for <code>APPFLOW_INTEGRATION</code> workflow type.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Configuration data for integration workflow.',
                  required: [],
                }),
              ObjectTypeName: z
                .string()
                .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the profile object type.' }),
              RoleArn: z
                .string()
                .regex(/arn:aws:iam:.*:[0-9]+:.*/)
                .max(512)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource.',
                }),
            })
            .openapi({
              required: ['WorkflowType', 'IntegrationConfig', 'ObjectTypeName', 'RoleArn'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIntegrationWorkflowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putDomainsDomainNameProfilesRoute = createRoute({
  method: 'put',
  path: '/domains/{DomainName}/profiles',
  description:
    '<p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>',
  operationId: 'UpdateProfile',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProfileId: z
                .string()
                .regex(/[a-f0-9]{32}/)
                .openapi({ description: 'The unique identifier of a customer profile.' }),
              AdditionalInformation: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'Any additional information relevant to the customer’s profile.',
                }),
              AccountNumber: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'A unique account number that you have given to the customer.',
                }),
              PartyType: z
                .enum(['INDIVIDUAL', 'BUSINESS', 'OTHER'])
                .exactOptional()
                .openapi({
                  description: 'The type of profile used to describe the customer.',
                  deprecated: true,
                }),
              BusinessName: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the customer’s business.' }),
              FirstName: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s first name.' }),
              MiddleName: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s middle name.' }),
              LastName: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s last name.' }),
              BirthDate: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s birth date. ' }),
              Gender: z
                .enum(['MALE', 'FEMALE', 'UNSPECIFIED'])
                .exactOptional()
                .openapi({
                  description: 'The gender with which the customer identifies. ',
                  deprecated: true,
                }),
              PhoneNumber: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The customer’s phone number, which has not been specified as a mobile, home, or business number. ',
                }),
              MobilePhoneNumber: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s mobile phone number.' }),
              HomePhoneNumber: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s home phone number.' }),
              BusinessPhoneNumber: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s business phone number.' }),
              EmailAddress: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The customer’s email address, which has not been specified as a personal or business address. ',
                }),
              PersonalEmailAddress: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s personal email address.' }),
              BusinessEmailAddress: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s business email address.' }),
              Address: z
                .object({
                  Address1: String0To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String0To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String0To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String0To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String0To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String0To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String0To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String0To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String0To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String0To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Updates associated with the address properties of a customer profile.',
                  required: [],
                }),
              ShippingAddress: z
                .object({
                  Address1: String0To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String0To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String0To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String0To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String0To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String0To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String0To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String0To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String0To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String0To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Updates associated with the address properties of a customer profile.',
                  required: [],
                }),
              MailingAddress: z
                .object({
                  Address1: String0To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String0To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String0To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String0To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String0To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String0To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String0To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String0To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String0To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String0To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Updates associated with the address properties of a customer profile.',
                  required: [],
                }),
              BillingAddress: z
                .object({
                  Address1: String0To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String0To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String0To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String0To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String0To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String0To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String0To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String0To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String0To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String0To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Updates associated with the address properties of a customer profile.',
                  required: [],
                }),
              Attributes: z
                .record(z.string(), String0To255Schema)
                .exactOptional()
                .openapi({ description: 'A key value pair of attributes of a customer profile.' }),
              PartyTypeString: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'An alternative to <code>PartyType</code> which accepts any string as input.',
                }),
              GenderString: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'An alternative to <code>Gender</code> which accepts any string as input.',
                }),
            })
            .openapi({ required: ['ProfileId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProfileResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameProfilesRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles',
  description:
    '<p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>',
  operationId: 'CreateProfile',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AccountNumber: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'A unique account number that you have given to the customer.',
                }),
              AdditionalInformation: z
                .string()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'Any additional information relevant to the customer’s profile.',
                }),
              PartyType: z
                .enum(['INDIVIDUAL', 'BUSINESS', 'OTHER'])
                .exactOptional()
                .openapi({
                  description: 'The type of profile used to describe the customer.',
                  deprecated: true,
                }),
              BusinessName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the customer’s business.' }),
              FirstName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s first name.' }),
              MiddleName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s middle name.' }),
              LastName: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s last name.' }),
              BirthDate: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s birth date. ' }),
              Gender: z
                .enum(['MALE', 'FEMALE', 'UNSPECIFIED'])
                .exactOptional()
                .openapi({
                  description: 'The gender with which the customer identifies. ',
                  deprecated: true,
                }),
              PhoneNumber: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The customer’s phone number, which has not been specified as a mobile, home, or business number. ',
                }),
              MobilePhoneNumber: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s mobile phone number.' }),
              HomePhoneNumber: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s home phone number.' }),
              BusinessPhoneNumber: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s business phone number.' }),
              EmailAddress: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The customer’s email address, which has not been specified as a personal or business address. ',
                }),
              PersonalEmailAddress: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s personal email address.' }),
              BusinessEmailAddress: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The customer’s business email address.' }),
              Address: z
                .object({
                  Address1: String1To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String1To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String1To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String1To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String1To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String1To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String1To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String1To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String1To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String1To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A generic address associated with the customer that is not mailing, shipping, or billing.',
                  required: [],
                }),
              ShippingAddress: z
                .object({
                  Address1: String1To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String1To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String1To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String1To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String1To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String1To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String1To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String1To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String1To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String1To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A generic address associated with the customer that is not mailing, shipping, or billing.',
                  required: [],
                }),
              MailingAddress: z
                .object({
                  Address1: String1To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String1To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String1To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String1To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String1To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String1To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String1To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String1To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String1To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String1To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A generic address associated with the customer that is not mailing, shipping, or billing.',
                  required: [],
                }),
              BillingAddress: z
                .object({
                  Address1: String1To255Schema.and(
                    z.any().openapi({ description: 'The first line of a customer address.' }),
                  ).exactOptional(),
                  Address2: String1To255Schema.and(
                    z.any().openapi({ description: 'The second line of a customer address.' }),
                  ).exactOptional(),
                  Address3: String1To255Schema.and(
                    z.any().openapi({ description: 'The third line of a customer address.' }),
                  ).exactOptional(),
                  Address4: String1To255Schema.and(
                    z.any().openapi({ description: 'The fourth line of a customer address.' }),
                  ).exactOptional(),
                  City: String1To255Schema.and(
                    z.any().openapi({ description: 'The city in which a customer lives.' }),
                  ).exactOptional(),
                  County: String1To255Schema.and(
                    z.any().openapi({ description: 'The county in which a customer lives.' }),
                  ).exactOptional(),
                  State: String1To255Schema.and(
                    z.any().openapi({ description: 'The state in which a customer lives.' }),
                  ).exactOptional(),
                  Province: String1To255Schema.and(
                    z.any().openapi({ description: 'The province in which a customer lives.' }),
                  ).exactOptional(),
                  Country: String1To255Schema.and(
                    z.any().openapi({ description: 'The country in which a customer lives.' }),
                  ).exactOptional(),
                  PostalCode: String1To255Schema.and(
                    z.any().openapi({ description: 'The postal code of a customer address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A generic address associated with the customer that is not mailing, shipping, or billing.',
                  required: [],
                }),
              Attributes: z
                .record(z.string(), String1To255Schema)
                .exactOptional()
                .openapi({ description: 'A key value pair of attributes of a customer profile.' }),
              PartyTypeString: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'An alternative to <code>PartyType</code> which accepts any string as input.',
                }),
              GenderString: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'An alternative to <code>Gender</code> which accepts any string as input.',
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
      content: { 'application/json': { schema: CreateProfileResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameIntegrationsDeleteRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/integrations/delete',
  description: 'Removes an integration from a specific domain.',
  operationId: 'DeleteIntegration',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Uri: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The URI of the S3 bucket or any other type of data source.',
                }),
            })
            .openapi({ required: ['Uri'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteIntegrationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameProfilesDeleteRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles/delete',
  description: 'Deletes the standard customer profile and all data pertaining to the profile.',
  operationId: 'DeleteProfile',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProfileId: z
                .string()
                .regex(/[a-f0-9]{32}/)
                .openapi({ description: 'The unique identifier of a customer profile.' }),
            })
            .openapi({ required: ['ProfileId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProfileResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameProfilesKeysDeleteRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles/keys/delete',
  description: 'Removes a searchable key from a customer profile.',
  operationId: 'DeleteProfileKey',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProfileId: z
                .string()
                .regex(/[a-f0-9]{32}/)
                .openapi({ description: 'The unique identifier of a customer profile.' }),
              KeyName: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .min(1)
                .max(64)
                .openapi({ description: 'A searchable identifier of a customer profile.' }),
              Values: z.array(String1To255Schema).openapi({ description: 'A list of key values.' }),
            })
            .openapi({ required: ['ProfileId', 'KeyName', 'Values'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProfileKeyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameProfilesObjectsDeleteRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles/objects/delete',
  description: 'Removes an object associated with a profile of a given ProfileObjectType.',
  operationId: 'DeleteProfileObject',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProfileId: z
                .string()
                .regex(/[a-f0-9]{32}/)
                .openapi({ description: 'The unique identifier of a customer profile.' }),
              ProfileObjectUniqueKey: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'The unique identifier of the profile object generated by the service.',
                }),
              ObjectTypeName: z
                .string()
                .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the profile object type.' }),
            })
            .openapi({ required: ['ProfileId', 'ProfileObjectUniqueKey', 'ObjectTypeName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProfileObjectResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameObjectTypesObjectTypeNameRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/object-types/{ObjectTypeName}',
  description: 'Returns the object types for a specific domain.',
  operationId: 'GetProfileObjectType',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
      ObjectTypeName: z
        .string()
        .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'ObjectTypeName',
            in: 'path',
            required: true,
            description: 'The name of the profile object type.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z_][a-zA-Z_0-9-]*$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProfileObjectTypeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putDomainsDomainNameObjectTypesObjectTypeNameRoute = createRoute({
  method: 'put',
  path: '/domains/{DomainName}/object-types/{ObjectTypeName}',
  description:
    '<p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>',
  operationId: 'PutProfileObjectType',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
      ObjectTypeName: z
        .string()
        .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'ObjectTypeName',
            in: 'path',
            required: true,
            description: 'The name of the profile object type.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z_][a-zA-Z_0-9-]*$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(1)
                .max(1000)
                .openapi({ description: 'Description of the profile object type.' }),
              TemplateId: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a <code>BadRequestException</code>. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a <code>BadRequestException</code>.',
                }),
              ExpirationDays: z
                .int()
                .min(1)
                .max(1098)
                .exactOptional()
                .openapi({
                  description: 'The number of days until the data in the object expires.',
                }),
              EncryptionKey: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The customer-provided key to encrypt the profile object that will be created in this profile object type.',
                }),
              AllowProfileCreation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.',
                }),
              SourceLastUpdatedTimestampFormat: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up. ',
                }),
              Fields: z
                .record(z.string(), ObjectTypeFieldSchema)
                .exactOptional()
                .openapi({ description: 'A map of the name and ObjectType field.' }),
              Keys: z
                .record(z.string(), ObjectTypeKeyListSchema)
                .exactOptional()
                .openapi({
                  description: 'A list of unique keys that can be used to map data to the profile.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource.',
                }),
            })
            .openapi({ required: ['Description'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutProfileObjectTypeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteDomainsDomainNameObjectTypesObjectTypeNameRoute = createRoute({
  method: 'delete',
  path: '/domains/{DomainName}/object-types/{ObjectTypeName}',
  description:
    'Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.',
  operationId: 'DeleteProfileObjectType',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
      ObjectTypeName: z
        .string()
        .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'ObjectTypeName',
            in: 'path',
            required: true,
            description: 'The name of the profile object type.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z_][a-zA-Z_0-9-]*$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProfileObjectTypeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameWorkflowsWorkflowIdRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/workflows/{WorkflowId}',
  description: 'Get details of specified workflow.',
  operationId: 'GetWorkflow',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
      WorkflowId: z
        .string()
        .regex(/[a-f0-9]{32}/)
        .openapi({
          param: {
            name: 'WorkflowId',
            in: 'path',
            required: true,
            description: 'Unique identifier for the workflow.',
            schema: { type: 'string', pattern: '[a-f0-9]{32}' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkflowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteDomainsDomainNameWorkflowsWorkflowIdRoute = createRoute({
  method: 'delete',
  path: '/domains/{DomainName}/workflows/{WorkflowId}',
  description:
    'Deletes the specified workflow and all its corresponding resources. This is an async process.',
  operationId: 'DeleteWorkflow',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
      WorkflowId: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'WorkflowId',
            in: 'path',
            required: true,
            description: 'Unique identifier for the workflow.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWorkflowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameIdentityResolutionJobsAutoMergingPreviewRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/identity-resolution-jobs/auto-merging-preview',
  description:
    "<p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>",
  operationId: 'GetAutoMergingPreview',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Consolidation: z
                .object({
                  MatchingAttributesList: MatchingAttributesListSchema.and(
                    z.any().openapi({ description: 'A list of matching criteria.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The matching criteria to be used during the auto-merging process. ',
                  required: [],
                }),
              ConflictResolution: z
                .object({
                  ConflictResolvingModel: ConflictResolvingModelSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>How the auto-merging process should resolve conflicts between different profiles.</p> <ul> <li> <p> <code>RECENCY</code>: Uses the data that was most recently updated.</p> </li> <li> <p> <code>SOURCE</code>: Uses the data from a specific source. For example, if a company has been aquired or two departments have merged, data from the specified source is used. If two duplicate profiles are from the same source, then <code>RECENCY</code> is used again.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  SourceName: String1To255Schema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <code>ObjectType</code> name that is used to resolve profile merging conflicts when choosing <code>SOURCE</code> as the <code>ConflictResolvingModel</code>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'How the auto-merging process should resolve conflicts between different profiles.',
                  required: [],
                }),
              MinAllowedConfidenceScoreForMerging: z
                .float64()
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    'Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.',
                }),
            })
            .openapi({ required: ['Consolidation', 'ConflictResolution'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAutoMergingPreviewResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameIdentityResolutionJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/identity-resolution-jobs/{JobId}',
  description:
    '<p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>',
  operationId: 'GetIdentityResolutionJob',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
      JobId: z
        .string()
        .regex(/[a-f0-9]{32}/)
        .openapi({
          param: {
            name: 'JobId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the Identity Resolution Job.',
            schema: { type: 'string', pattern: '[a-f0-9]{32}' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIdentityResolutionJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameIntegrationsRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/integrations',
  description: 'Lists all of the integrations in your domain.',
  operationId: 'ListIntegrations',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The pagination token from the previous ListIntegrations API call.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of objects returned per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      'include-hidden': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include-hidden',
            in: 'query',
            required: false,
            description:
              'Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIntegrationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putDomainsDomainNameIntegrationsRoute = createRoute({
  method: 'put',
  path: '/domains/{DomainName}/integrations',
  description:
    '<p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>',
  operationId: 'PutIntegration',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Uri: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'The URI of the S3 bucket or any other type of data source.',
                }),
              ObjectTypeName: z
                .string()
                .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the profile object type.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource.',
                }),
              FlowDefinition: z
                .object({
                  Description: FlowDescriptionSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A description of the flow you want to create.' }),
                  ).exactOptional(),
                  FlowName: FlowNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The specified name of the flow. Use underscores (_) or hyphens (-) only. Spaces are not allowed.',
                      }),
                  ).exactOptional(),
                  KmsArn: KmsArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name of the AWS Key Management Service (KMS) key you provide for encryption.',
                      }),
                  ).exactOptional(),
                  SourceFlowConfig: SourceFlowConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration that controls how Customer Profiles retrieves data from the source.',
                      }),
                  ).exactOptional(),
                  Tasks: TasksSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of tasks that Customer Profiles performs while transferring the data in the flow run.',
                      }),
                  ).exactOptional(),
                  TriggerConfig: TriggerConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The trigger settings that determine how and when the flow runs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.',
                  required: [],
                }),
              ObjectTypeNames: z
                .record(z.string(), TypeNameSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.',
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
      content: { 'application/json': { schema: PutIntegrationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameIntegrationsRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/integrations',
  description: 'Returns an integration for a domain.',
  operationId: 'GetIntegration',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Uri: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The URI of the S3 bucket or any other type of data source.',
                }),
            })
            .openapi({ required: ['Uri'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIntegrationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameMatchesRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/matches',
  description:
    '<p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>',
  operationId: 'GetMatches',
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
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
    params: z.object({
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMatchesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/templates/{TemplateId}',
  description:
    '<p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>',
  operationId: 'GetProfileObjectTypeTemplate',
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
      TemplateId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'TemplateId',
            in: 'path',
            required: true,
            description: 'A unique identifier for the object template.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProfileObjectTypeTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameWorkflowsWorkflowIdStepsRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/workflows/{WorkflowId}/steps',
  description: 'Get granular list of steps in workflow.',
  operationId: 'GetWorkflowSteps',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
      WorkflowId: z
        .string()
        .regex(/[a-f0-9]{32}/)
        .openapi({
          param: {
            name: 'WorkflowId',
            in: 'path',
            required: true,
            description: 'Unique identifier for the workflow.',
            schema: { type: 'string', pattern: '[a-f0-9]{32}' },
          },
        }),
    }),
    query: z.object({
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkflowStepsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postIntegrationsRoute = createRoute({
  method: 'post',
  path: '/integrations',
  description: 'Lists all of the integrations associated to a specific URI in the AWS account.',
  operationId: 'ListAccountIntegrations',
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
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The pagination token from the previous ListAccountIntegrations API call.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of objects returned per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      'include-hidden': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include-hidden',
            in: 'query',
            required: false,
            description:
              'Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.',
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Uri: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The URI of the S3 bucket or any other type of data source.',
                }),
            })
            .openapi({ required: ['Uri'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccountIntegrationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  description: 'Returns a list of all the domains for an AWS account that have been created.',
  operationId: 'ListDomains',
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
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The pagination token from the previous ListDomain API call.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of objects returned per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDomainsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameIdentityResolutionJobsRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/identity-resolution-jobs',
  description:
    'Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.',
  operationId: 'ListIdentityResolutionJobs',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIdentityResolutionJobsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  description: 'Lists all of the template information for object types.',
  operationId: 'ListProfileObjectTypeTemplates',
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
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The pagination token from the previous ListObjectTypeTemplates API call.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of objects returned per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProfileObjectTypeTemplatesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDomainsDomainNameObjectTypesRoute = createRoute({
  method: 'get',
  path: '/domains/{DomainName}/object-types',
  description: 'Lists all of the templates available within the service.',
  operationId: 'ListProfileObjectTypes',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'Identifies the next page of results to return.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of objects returned per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProfileObjectTypesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putDomainsDomainNameProfilesObjectsRoute = createRoute({
  method: 'put',
  path: '/domains/{DomainName}/profiles/objects',
  description:
    '<p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>',
  operationId: 'PutProfileObject',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectTypeName: z
                .string()
                .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the profile object type.' }),
              Object: z
                .string()
                .min(1)
                .max(256000)
                .openapi({ description: 'A string that is serialized from a JSON object.' }),
            })
            .openapi({ required: ['ObjectTypeName', 'Object'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutProfileObjectResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameProfilesObjectsRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles/objects',
  description: 'Returns a list of objects associated with a profile of a given ProfileObjectType.',
  operationId: 'ListProfileObjects',
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
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The pagination token from the previous call to ListProfileObjects.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of objects returned per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
    params: z.object({
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectTypeName: z
                .string()
                .regex(/^[a-zA-Z_][a-zA-Z_0-9-]*$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the profile object type.' }),
              ProfileId: z
                .string()
                .regex(/[a-f0-9]{32}/)
                .openapi({ description: 'The unique identifier of a customer profile.' }),
              ObjectFilter: z
                .object({
                  KeyName: NameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A searchable identifier of a standard profile object. The predefined keys you can use to search for _asset include: _assetId, _assetName, _serialNumber. The predefined keys you can use to search for _case include: _caseId. The predefined keys you can use to search for _order include: _orderId.',
                      }),
                  ).exactOptional(),
                  Values: RequestValueListSchema.and(
                    z.any().openapi({ description: 'A list of key values.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset, _case and _order.',
                  required: [],
                }),
            })
            .openapi({ required: ['ObjectTypeName', 'ProfileId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProfileObjectsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    'Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.',
  operationId: 'ListTagsForResource',
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
      resourceArn: z
        .string()
        .regex(/^arn:[a-z0-9]{1,10}:profile/)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource for which you want to view tags.',
            schema: { type: 'string', pattern: '^arn:[a-z0-9]{1,10}:profile', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    "<p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>",
  operationId: 'TagResource',
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
      resourceArn: z
        .string()
        .regex(/^arn:[a-z0-9]{1,10}:profile/)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: "The ARN of the resource that you're adding tags to.",
            schema: { type: 'string', pattern: '^arn:[a-z0-9]{1,10}:profile', maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'The tags used to organize, track, or control access for this resource.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameWorkflowsRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/workflows',
  description: 'Query to list all workflows.',
  operationId: 'ListWorkflows',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WorkflowType: z
                .literal('APPFLOW_INTEGRATION')
                .exactOptional()
                .openapi({
                  description:
                    'The type of workflow. The only supported value is APPFLOW_INTEGRATION.',
                }),
              Status: z
                .enum([
                  'NOT_STARTED',
                  'IN_PROGRESS',
                  'COMPLETE',
                  'FAILED',
                  'SPLIT',
                  'RETRY',
                  'CANCELLED',
                ])
                .exactOptional()
                .openapi({ description: 'Status of workflow execution.' }),
              QueryStartDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Retrieve workflows started after timestamp.' }),
              QueryEndDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Retrieve workflows ended after timestamp.' }),
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
      content: { 'application/json': { schema: ListWorkflowsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameProfilesObjectsMergeRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles/objects/merge',
  description:
    '<p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>',
  operationId: 'MergeProfiles',
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
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MainProfileId: z
                .string()
                .regex(/[a-f0-9]{32}/)
                .openapi({ description: 'The identifier of the profile to be taken.' }),
              ProfileIdsToBeMerged: z
                .array(UuidSchema)
                .min(1)
                .max(20)
                .openapi({
                  description: 'The identifier of the profile to be merged into MainProfileId.',
                }),
              FieldSourceProfileIds: z
                .object({
                  AccountNumber: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the account number field to be merged. ',
                      }),
                  ).exactOptional(),
                  AdditionalInformation: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the additional information field to be merged.',
                      }),
                  ).exactOptional(),
                  PartyType: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the party type field to be merged.',
                      }),
                  ).exactOptional(),
                  BusinessName: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the business name field to be merged.',
                      }),
                  ).exactOptional(),
                  FirstName: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the first name field to be merged.',
                      }),
                  ).exactOptional(),
                  MiddleName: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the middle name field to be merged.',
                      }),
                  ).exactOptional(),
                  LastName: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the last name field to be merged.',
                      }),
                  ).exactOptional(),
                  BirthDate: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the birthdate field to be merged.',
                      }),
                  ).exactOptional(),
                  Gender: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the gender field to be merged.',
                      }),
                  ).exactOptional(),
                  PhoneNumber: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the phone number field to be merged.',
                      }),
                  ).exactOptional(),
                  MobilePhoneNumber: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the mobile phone number field to be merged.',
                      }),
                  ).exactOptional(),
                  HomePhoneNumber: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the home phone number field to be merged.',
                      }),
                  ).exactOptional(),
                  BusinessPhoneNumber: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the business phone number field to be merged.',
                      }),
                  ).exactOptional(),
                  EmailAddress: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the email address field to be merged.',
                      }),
                  ).exactOptional(),
                  PersonalEmailAddress: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the personal email address field to be merged.',
                      }),
                  ).exactOptional(),
                  BusinessEmailAddress: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the party type field to be merged.',
                      }),
                  ).exactOptional(),
                  Address: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the party type field to be merged.',
                      }),
                  ).exactOptional(),
                  ShippingAddress: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the shipping address field to be merged.',
                      }),
                  ).exactOptional(),
                  MailingAddress: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique identifier for the mailing address field to be merged.',
                      }),
                  ).exactOptional(),
                  BillingAddress: UuidSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the billing type field to be merged.',
                      }),
                  ).exactOptional(),
                  Attributes: AttributeSourceIdMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique identifier for the attributes field to be merged.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A duplicate customer profile that is to be merged into a main profile. ',
                  required: [],
                }),
            })
            .openapi({ required: ['MainProfileId', 'ProfileIdsToBeMerged'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergeProfilesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDomainsDomainNameProfilesSearchRoute = createRoute({
  method: 'post',
  path: '/domains/{DomainName}/profiles/search',
  description:
    '<p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>',
  operationId: 'SearchProfiles',
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
      'next-token': z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The pagination token from the previous SearchProfiles API call.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of objects returned per page.</p> <p>The default is 20 if this parameter is not included in the request.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
    params: z.object({
      DomainName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'DomainName',
            in: 'path',
            required: true,
            description: 'The unique name of the domain.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              KeyName: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.',
                }),
              Values: z.array(String1To255Schema).openapi({ description: 'A list of key values.' }),
              AdditionalSearchKeys: z
                .array(AdditionalSearchKeySchema)
                .min(1)
                .max(4)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <code>AdditionalSearchKey</code> objects that are each searchable identifiers of a profile. Each <code>AdditionalSearchKey</code> object contains a <code>KeyName</code> and a list of <code>Values</code> associated with that specific key (i.e., a key-value(s) pair). These additional search keys will be used in conjunction with the <code>LogicalOperator</code> and the required <code>KeyName</code> and <code>Values</code> parameters to search for profiles that satisfy the search criteria. ',
                }),
              LogicalOperator: z
                .enum(['AND', 'OR'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Relationship between all specified search keys that will be used to search for profiles. This includes the required <code>KeyName</code> and <code>Values</code> parameters as well as any key-value(s) pairs specified in the <code>AdditionalSearchKeys</code> list.</p> <p>This parameter influences which profiles will be returned in the response in the following manner:</p> <ul> <li> <p> <code>AND</code> - The response only includes profiles that match all of the search keys.</p> </li> <li> <p> <code>OR</code> - The response includes profiles that match at least one of the search keys.</p> </li> </ul> <p>The <code>OR</code> relationship is the default behavior if this parameter is not included in the request.</p>',
                }),
            })
            .openapi({ required: ['KeyName', 'Values'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchProfilesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    'Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.',
  operationId: 'UntagResource',
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
      resourceArn: z
        .string()
        .regex(/^arn:[a-z0-9]{1,10}:profile/)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource from which you are removing tags.',
            schema: { type: 'string', pattern: '^arn:[a-z0-9]{1,10}:profile', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The list of tag keys to remove from the resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
