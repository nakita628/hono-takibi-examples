import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const S3ImportSourceSchema = z
  .object({
    S3LocationUri: StringSchema.and(
      z.any().openapi({ description: ' The URI for the source S3 bucket. ' }),
    ),
    S3BucketRegion: StringSchema.and(
      z.any().openapi({ description: ' The region associated with the source S3 bucket. ' }),
    ),
    S3BucketAccessRoleArn: StringSchema.and(
      z.any().openapi({ description: ' The IAM ARN role used to access the source S3 bucket. ' }),
    ),
  })
  .openapi({
    required: ['S3LocationUri', 'S3BucketRegion', 'S3BucketAccessRoleArn'],
    description: ' The settings for the source S3 bucket. ',
  })
  .openapi('S3ImportSource')

type ImportSourceType = { S3: z.infer<typeof S3ImportSourceSchema> & { [key: string]: unknown } }

const AddTagsResponseSchema = z
  .object({})
  .openapi({
    description: 'Returns the objects or data if successful. Otherwise, returns an error.',
  })
  .openapi('AddTagsResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(1).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      'A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, or channel.',
  })
  .openapi('Tag')

const TagsListSchema = z
  .array(TagSchema)
  .max(200)
  .openapi({ description: 'A list of tags.' })
  .openapi('TagsList')

const AddTagsRequestSchema = z
  .object({
    ResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the trail, event data store, or channel to which one or more tags will be added.</p> <p>The format of a trail ARN is: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p> <p>The format of an event data store ARN is: <code>arn:aws:cloudtrail:us-east-2:12345678910:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code> </p> <p>The format of a channel ARN is: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code> </p>',
        }),
    ),
    TagsList: TagsListSchema.and(
      z.any().openapi({ description: 'Contains a list of tags, up to a limit of 50' }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'TagsList'],
    title: 'AddTagsRequest',
    description: 'Specifies the tags to add to a trail, event data store, or channel.',
  })
  .openapi('AddTagsRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const CloudTrailARNInvalidExceptionSchema = z.any().openapi('CloudTrailARNInvalidException')

const ResourceTypeNotSupportedExceptionSchema = z.any().openapi('ResourceTypeNotSupportedException')

const TagsLimitExceededExceptionSchema = z.any().openapi('TagsLimitExceededException')

const InvalidTrailNameExceptionSchema = z.any().openapi('InvalidTrailNameException')

const InvalidTagParameterExceptionSchema = z.any().openapi('InvalidTagParameterException')

const InactiveEventDataStoreExceptionSchema = z.any().openapi('InactiveEventDataStoreException')

const EventDataStoreNotFoundExceptionSchema = z.any().openapi('EventDataStoreNotFoundException')

const ChannelNotFoundExceptionSchema = z.any().openapi('ChannelNotFoundException')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const OperationNotPermittedExceptionSchema = z.any().openapi('OperationNotPermittedException')

const NotOrganizationMasterAccountExceptionSchema = z
  .any()
  .openapi('NotOrganizationMasterAccountException')

const NoManagementAccountSLRExistsExceptionSchema = z
  .any()
  .openapi('NoManagementAccountSLRExistsException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const UUIDSchema = z
  .string()
  .regex(/^[a-f0-9\-]+$/)
  .length(36)
  .openapi('UUID')

const QueryStatusSchema = z
  .enum(['QUEUED', 'RUNNING', 'FINISHED', 'FAILED', 'CANCELLED', 'TIMED_OUT'])
  .openapi('QueryStatus')

const CancelQueryResponseSchema = z
  .object({
    QueryId: UUIDSchema.and(z.any().openapi({ description: 'The ID of the canceled query.' })),
    QueryStatus: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the status of a query after a <code>CancelQuery</code> request. Typically, the values shown are either <code>RUNNING</code> or <code>CANCELLED</code>.',
        }),
    ),
  })
  .openapi({ required: ['QueryId', 'QueryStatus'] })
  .openapi('CancelQueryResponse')

const EventDataStoreArnSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._\/\-:]+$/)
  .min(3)
  .max(256)
  .openapi('EventDataStoreArn')

const CancelQueryRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The ARN (or the ID suffix of the ARN) of an event data store on which the specified query is running.EventDataStore is no longer required by CancelQueryRequest',
        }),
    ).exactOptional(),
    QueryId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the query that you want to cancel. The <code>QueryId</code> comes from the response of a <code>StartQuery</code> operation.',
        }),
    ),
  })
  .openapi({ required: ['QueryId'], title: 'CancelQueryRequest' })
  .openapi('CancelQueryRequest')

const EventDataStoreARNInvalidExceptionSchema = z.any().openapi('EventDataStoreARNInvalidException')

const InactiveQueryExceptionSchema = z.any().openapi('InactiveQueryException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const QueryIdNotFoundExceptionSchema = z.any().openapi('QueryIdNotFoundException')

const ChannelArnSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._\/\-:]+$/)
  .min(3)
  .max(256)
  .openapi('ChannelArn')

const ChannelNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._\-]+$/)
  .min(3)
  .max(128)
  .openapi('ChannelName')

const SourceSchema = z.string().regex(/.*/).min(1).max(256).openapi('Source')

const DestinationTypeSchema = z.enum(['EVENT_DATA_STORE', 'AWS_SERVICE']).openapi('DestinationType')

const LocationSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._\/\-:]+$/)
  .min(3)
  .max(1024)
  .openapi('Location')

const DestinationSchema = z
  .object({
    Type: DestinationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of destination for events arriving from a channel. For channels used for a CloudTrail Lake integration, the value is <code>EventDataStore</code>. For service-linked channels, the value is <code>AWS_SERVICE</code>. ',
        }),
    ),
    Location: LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel. For service-linked channels, the location is the name of the Amazon Web Services service.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Location'],
    description: 'Contains information about the destination receiving events.',
  })
  .openapi('Destination')

const DestinationsSchema = z.array(DestinationSchema).min(1).max(200).openapi('Destinations')

const CreateChannelResponseSchema = z
  .object({
    ChannelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the new channel.' }),
    ).exactOptional(),
    Name: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the new channel.' }),
    ).exactOptional(),
    Source: SourceSchema.and(
      z.any().openapi({ description: 'The partner or external event source name.' }),
    ).exactOptional(),
    Destinations: DestinationsSchema.and(
      z
        .any()
        .openapi({
          description: 'The event data stores that log the events arriving through the channel.',
        }),
    ).exactOptional(),
    Tags: TagsListSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelResponse')

const CreateChannelRequestSchema = z
  .object({
    Name: ChannelNameSchema.and(z.any().openapi({ description: 'The name of the channel.' })),
    Source: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the partner or external event source. You cannot change this name after you create the channel. A maximum of one channel is allowed per source.</p> <p> A source can be either <code>Custom</code> for all valid non-Amazon Web Services events, or the name of a partner event source. For information about the source names for available partners, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information">Additional information about integration partners</a> in the CloudTrail User Guide. </p>',
        }),
    ),
    Destinations: DestinationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more event data stores to which events arriving through a channel will be logged.',
        }),
    ),
    Tags: TagsListSchema.exactOptional(),
  })
  .openapi({ required: ['Name', 'Source', 'Destinations'], title: 'CreateChannelRequest' })
  .openapi('CreateChannelRequest')

const ChannelMaxLimitExceededExceptionSchema = z.any().openapi('ChannelMaxLimitExceededException')

const InvalidSourceExceptionSchema = z.any().openapi('InvalidSourceException')

const ChannelAlreadyExistsExceptionSchema = z.any().openapi('ChannelAlreadyExistsException')

const InvalidEventDataStoreCategoryExceptionSchema = z
  .any()
  .openapi('InvalidEventDataStoreCategoryException')

const EventDataStoreNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._\-]+$/)
  .min(3)
  .max(128)
  .openapi('EventDataStoreName')

const EventDataStoreStatusSchema = z
  .enum(['CREATED', 'ENABLED', 'PENDING_DELETION'])
  .openapi('EventDataStoreStatus')

const SelectorNameSchema = z.string().regex(/.*/).min(0).max(1000).openapi('SelectorName')

const SelectorFieldSchema = z
  .string()
  .regex(/[\w|\d|\.|_]+/)
  .min(1)
  .max(1000)
  .openapi('SelectorField')

const OperatorValueSchema = z.string().regex(/.+/).min(1).max(2048).openapi('OperatorValue')

const OperatorSchema = z.array(OperatorValueSchema).min(1).openapi('Operator')

const AdvancedFieldSelectorSchema = z
  .object({
    Field: SelectorFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> A field in a CloudTrail event record on which to filter events to be logged. For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, the field is used only for selecting events as filtering is not supported. </p> <p> For CloudTrail event records, supported fields include <code>readOnly</code>, <code>eventCategory</code>, <code>eventSource</code> (for management events), <code>eventName</code>, <code>resources.type</code>, and <code>resources.ARN</code>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, the only supported field is <code>eventCategory</code>. </p> <ul> <li> <p> <b> <code>readOnly</code> </b> - Optional. Can be set to <code>Equals</code> a value of <code>true</code> or <code>false</code>. If you do not add this field, CloudTrail logs both <code>read</code> and <code>write</code> events. A value of <code>true</code> logs only <code>read</code> events. A value of <code>false</code> logs only <code>write</code> events.</p> </li> <li> <p> <b> <code>eventSource</code> </b> - For filtering management events only. This can be set only to <code>NotEquals</code> <code>kms.amazonaws.com</code>.</p> </li> <li> <p> <b> <code>eventName</code> </b> - Can use any operator. You can use it to ﬁlter in or ﬁlter out any data event logged to CloudTrail, such as <code>PutBucket</code> or <code>GetSnapshotBlock</code>. You can have multiple values for this ﬁeld, separated by commas.</p> </li> <li> <p> <b> <code>eventCategory</code> </b> - This is required and must be set to <code>Equals</code>. </p> <ul> <li> <p> For CloudTrail event records, the value must be <code>Management</code> or <code>Data</code>. </p> </li> <li> <p> For Config configuration items, the value must be <code>ConfigurationItem</code>. </p> </li> <li> <p> For Audit Manager evidence, the value must be <code>Evidence</code>. </p> </li> <li> <p> For non-Amazon Web Services events, the value must be <code>ActivityAuditLog</code>. </p> </li> </ul> </li> <li> <p> <b> <code>resources.type</code> </b> - This ﬁeld is required for CloudTrail data events. <code>resources.type</code> can only use the <code>Equals</code> operator, and the value can be one of the following:</p> <ul> <li> <p> <code>AWS::CloudTrail::Channel</code> </p> </li> <li> <p> <code>AWS::S3::Object</code> </p> </li> <li> <p> <code>AWS::Lambda::Function</code> </p> </li> <li> <p> <code>AWS::DynamoDB::Table</code> </p> </li> <li> <p> <code>AWS::S3Outposts::Object</code> </p> </li> <li> <p> <code>AWS::ManagedBlockchain::Node</code> </p> </li> <li> <p> <code>AWS::S3ObjectLambda::AccessPoint</code> </p> </li> <li> <p> <code>AWS::EC2::Snapshot</code> </p> </li> <li> <p> <code>AWS::S3::AccessPoint</code> </p> </li> <li> <p> <code>AWS::DynamoDB::Stream</code> </p> </li> <li> <p> <code>AWS::Glue::Table</code> </p> </li> <li> <p> <code>AWS::FinSpace::Environment</code> </p> </li> <li> <p> <code>AWS::SageMaker::ExperimentTrialComponent</code> </p> </li> <li> <p> <code>AWS::SageMaker::FeatureGroup</code> </p> </li> </ul> <p> You can have only one <code>resources.type</code> ﬁeld per selector. To log data events on more than one resource type, add another selector.</p> </li> <li> <p> <b> <code>resources.ARN</code> </b> - You can use any operator with <code>resources.ARN</code>, but if you use <code>Equals</code> or <code>NotEquals</code>, the value must exactly match the ARN of a valid resource of the type you've speciﬁed in the template as the value of resources.type. For example, if resources.type equals <code>AWS::S3::Object</code>, the ARN must be in one of the following formats. To log all data events for all objects in a specific S3 bucket, use the <code>StartsWith</code> operator, and include only the bucket ARN as the matching value.</p> <p>The trailing slash is intentional; do not exclude it. Replace the text between less than and greater than symbols (&lt;&gt;) with resource-specific information. </p> <ul> <li> <p> <code>arn:&lt;partition&gt;:s3:::&lt;bucket_name&gt;/</code> </p> </li> <li> <p> <code>arn:&lt;partition&gt;:s3:::&lt;bucket_name&gt;/&lt;object_path&gt;/</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::S3::AccessPoint</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in one of the following formats. To log events on all objects in an S3 access point, we recommend that you use only the access point ARN, don’t include the object path, and use the <code>StartsWith</code> or <code>NotStartsWith</code> operators.</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:s3:&lt;region&gt;:&lt;account_ID&gt;:accesspoint/&lt;access_point_name&gt;</code> </p> </li> <li> <p> <code>arn:&lt;partition&gt;:s3:&lt;region&gt;:&lt;account_ID&gt;:accesspoint/&lt;access_point_name&gt;/object/&lt;object_path&gt;</code> </p> </li> </ul> <p>When resources.type equals <code>AWS::Lambda::Function</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:lambda:&lt;region&gt;:&lt;account_ID&gt;:function:&lt;function_name&gt;</code> </p> </li> </ul> <p>When resources.type equals <code>AWS::DynamoDB::Table</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:dynamodb:&lt;region&gt;:&lt;account_ID&gt;:table/&lt;table_name&gt;</code> </p> </li> </ul> <p>When resources.type equals <code>AWS::CloudTrail::Channel</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:cloudtrail:&lt;region&gt;:&lt;account_ID&gt;:channel/&lt;channel_UUID&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::S3Outposts::Object</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:s3-outposts:&lt;region&gt;:&lt;account_ID&gt;:&lt;object_path&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::ManagedBlockchain::Node</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:managedblockchain:&lt;region&gt;:&lt;account_ID&gt;:nodes/&lt;node_ID&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::S3ObjectLambda::AccessPoint</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:s3-object-lambda:&lt;region&gt;:&lt;account_ID&gt;:accesspoint/&lt;access_point_name&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::EC2::Snapshot</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:ec2:&lt;region&gt;::snapshot/&lt;snapshot_ID&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::DynamoDB::Stream</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:dynamodb:&lt;region&gt;:&lt;account_ID&gt;:table/&lt;table_name&gt;/stream/&lt;date_time&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::Glue::Table</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:glue:&lt;region&gt;:&lt;account_ID&gt;:table/&lt;database_name&gt;/&lt;table_name&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::FinSpace::Environment</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:finspace:&lt;region&gt;:&lt;account_ID&gt;:environment/&lt;environment_ID&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::SageMaker::ExperimentTrialComponent</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:sagemaker:&lt;region&gt;:&lt;account_ID&gt;:experiment-trial-component/&lt;experiment_trial_component_name&gt;</code> </p> </li> </ul> <p>When <code>resources.type</code> equals <code>AWS::SageMaker::FeatureGroup</code>, and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p> <ul> <li> <p> <code>arn:&lt;partition&gt;:sagemaker:&lt;region&gt;:&lt;account_ID&gt;:feature-group/&lt;feature_group_name&gt;</code> </p> </li> </ul> </li> </ul>",
        }),
    ),
    Equals: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An operator that includes events that match the exact value of the event record field specified as the value of <code>Field</code>. This is the only valid operator that you can use with the <code>readOnly</code>, <code>eventCategory</code>, and <code>resources.type</code> fields.',
        }),
    ).exactOptional(),
    StartsWith: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'An operator that includes events that match the first few characters of the event record field specified as the value of <code>Field</code>.',
        }),
    ).exactOptional(),
    EndsWith: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'An operator that includes events that match the last few characters of the event record field specified as the value of <code>Field</code>.',
        }),
    ).exactOptional(),
    NotEquals: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An operator that excludes events that match the exact value of the event record field specified as the value of <code>Field</code>. ',
        }),
    ).exactOptional(),
    NotStartsWith: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An operator that excludes events that match the first few characters of the event record field specified as the value of <code>Field</code>. ',
        }),
    ).exactOptional(),
    NotEndsWith: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An operator that excludes events that match the last few characters of the event record field specified as the value of <code>Field</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Field'],
    description: 'A single selector statement in an advanced event selector.',
  })
  .openapi('AdvancedFieldSelector')

const AdvancedFieldSelectorsSchema = z
  .array(AdvancedFieldSelectorSchema)
  .min(1)
  .openapi('AdvancedFieldSelectors')

const AdvancedEventSelectorSchema = z
  .object({
    Name: SelectorNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".',
        }),
    ).exactOptional(),
    FieldSelectors: AdvancedFieldSelectorsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains all selector statements in an advanced event selector.',
        }),
    ),
  })
  .openapi({
    required: ['FieldSelectors'],
    description:
      '<p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p> <ul> <li> <p> <code>readOnly</code> </p> </li> <li> <p> <code>eventSource</code> </p> </li> <li> <p> <code>eventName</code> </p> </li> <li> <p> <code>eventCategory</code> </p> </li> <li> <p> <code>resources.type</code> </p> </li> <li> <p> <code>resources.ARN</code> </p> </li> </ul> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>',
  })
  .openapi('AdvancedEventSelector')

const AdvancedEventSelectorsSchema = z
  .array(AdvancedEventSelectorSchema)
  .openapi('AdvancedEventSelectors')

const BooleanSchema = z.boolean().openapi('Boolean')

const RetentionPeriodSchema = z.int().min(7).max(2557).openapi('RetentionPeriod')

const TerminationProtectionEnabledSchema = z.boolean().openapi('TerminationProtectionEnabled')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const EventDataStoreKmsKeyIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._\/\-:]+$/)
  .min(1)
  .max(350)
  .openapi('EventDataStoreKmsKeyId')

const CreateEventDataStoreResponseSchema = z
  .object({
    EventDataStoreArn: EventDataStoreArnSchema.and(
      z.any().openapi({ description: 'The ARN of the event data store.' }),
    ).exactOptional(),
    Name: EventDataStoreNameSchema.and(
      z.any().openapi({ description: 'The name of the event data store.' }),
    ).exactOptional(),
    Status: EventDataStoreStatusSchema.and(
      z.any().openapi({ description: 'The status of event data store creation.' }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The advanced event selectors that were used to select the events for the data store.',
        }),
    ).exactOptional(),
    MultiRegionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the event data store collects events from all regions, or only from the region in which it was created.',
        }),
    ).exactOptional(),
    OrganizationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether an event data store is collecting logged events for an organization in Organizations.',
        }),
    ).exactOptional(),
    RetentionPeriod: RetentionPeriodSchema.and(
      z.any().openapi({ description: 'The retention period of an event data store, in days.' }),
    ).exactOptional(),
    TerminationProtectionEnabled: TerminationProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether termination protection is enabled for the event data store.',
        }),
    ).exactOptional(),
    TagsList: TagsListSchema.exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that shows when the event data store was created.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp that shows when an event data store was updated, if applicable. <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in <code>CreatedTimestamp</code>.',
        }),
    ).exactOptional(),
    KmsKeyId: EventDataStoreKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEventDataStoreResponse')

const CreateEventDataStoreRequestSchema = z
  .object({
    Name: EventDataStoreNameSchema.and(
      z.any().openapi({ description: 'The name of the event data store.' }),
    ),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The advanced event selectors to use to select the events for the data store. You can configure up to five advanced event selectors for each event data store.</p> <p> For more information about how to use advanced event selectors to log CloudTrail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">Log events by using advanced event selectors</a> in the CloudTrail User Guide.</p> <p>For more information about how to use advanced event selectors to include Config configuration items in your event data store, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-eds-config">Create an event data store for Config configuration items</a> in the CloudTrail User Guide.</p> <p>For more information about how to use advanced event selectors to include non-Amazon Web Services events in your event data store, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-integration">Create an integration to log events from outside Amazon Web Services</a> in the CloudTrail User Guide.</p>',
        }),
    ).exactOptional(),
    MultiRegionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the event data store includes events from all regions, or only from the region in which the event data store is created.',
        }),
    ).exactOptional(),
    OrganizationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether an event data store collects events logged for an organization in Organizations.',
        }),
    ).exactOptional(),
    RetentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retention period of the event data store, in days. You can set a retention period of up to 2557 days, the equivalent of seven years.',
        }),
    ).exactOptional(),
    TerminationProtectionEnabled: TerminationProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.',
        }),
    ).exactOptional(),
    TagsList: TagsListSchema.exactOptional(),
    KmsKeyId: EventDataStoreKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <important> <p>Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.</p> </important> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p> <code>alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p> <code>12345678-1234-1234-1234-123456789012</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateEventDataStoreRequest' })
  .openapi('CreateEventDataStoreRequest')

const EventDataStoreAlreadyExistsExceptionSchema = z
  .any()
  .openapi('EventDataStoreAlreadyExistsException')

const EventDataStoreMaxLimitExceededExceptionSchema = z
  .any()
  .openapi('EventDataStoreMaxLimitExceededException')

const InvalidEventSelectorsExceptionSchema = z.any().openapi('InvalidEventSelectorsException')

const InsufficientEncryptionPolicyExceptionSchema = z
  .any()
  .openapi('InsufficientEncryptionPolicyException')

const InvalidKmsKeyIdExceptionSchema = z.any().openapi('InvalidKmsKeyIdException')

const KmsKeyNotFoundExceptionSchema = z.any().openapi('KmsKeyNotFoundException')

const KmsExceptionSchema = z.any().openapi('KmsException')

const CloudTrailAccessNotEnabledExceptionSchema = z
  .any()
  .openapi('CloudTrailAccessNotEnabledException')

const InsufficientDependencyServiceAccessPermissionExceptionSchema = z
  .any()
  .openapi('InsufficientDependencyServiceAccessPermissionException')

const OrganizationsNotInUseExceptionSchema = z.any().openapi('OrganizationsNotInUseException')

const OrganizationNotInAllFeaturesModeExceptionSchema = z
  .any()
  .openapi('OrganizationNotInAllFeaturesModeException')

const CreateTrailResponseSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'Specifies the name of the trail.' }),
    ).exactOptional(),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Amazon S3 bucket designated for publishing log files.',
        }),
    ).exactOptional(),
    S3KeyPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>.',
        }),
    ).exactOptional(),
    SnsTopicName: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'This field is no longer in use. Use SnsTopicARN.',
        }),
    ).exactOptional(),
    SnsTopicARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:</p> <p> <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code> </p>',
        }),
    ).exactOptional(),
    IncludeGlobalServiceEvents: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail is publishing events from global services such as IAM to the log files.',
        }),
    ).exactOptional(),
    IsMultiRegionTrail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the trail exists in one region or in all regions.',
        }),
    ).exactOptional(),
    TrailARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the trail that was created. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ).exactOptional(),
    LogFileValidationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether log file integrity validation is enabled.' }),
    ).exactOptional(),
    CloudWatchLogsLogGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.',
        }),
    ).exactOptional(),
    CloudWatchLogsRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.",
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
    IsOrganizationTrail: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the trail is an organization trail.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
    required: [],
  })
  .openapi('CreateTrailResponse')

const CreateTrailRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the trail. The name must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>',
        }),
    ),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3 Bucket Naming Requirements</a>.',
        }),
    ),
    S3KeyPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.',
        }),
    ).exactOptional(),
    SnsTopicName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.',
        }),
    ).exactOptional(),
    IncludeGlobalServiceEvents: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail is publishing events from global services such as IAM to the log files.',
        }),
    ).exactOptional(),
    IsMultiRegionTrail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail is created in the current region or in all regions. The default is false, which creates a trail only in the region where you are signed in. As a best practice, consider creating trails that log events in all regions.',
        }),
    ).exactOptional(),
    EnableLogFileValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether log file integrity validation is enabled. The default is false.</p> <note> <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p> </note>',
        }),
    ).exactOptional(),
    CloudWatchLogsLogGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. You must use a log group that exists in your account.</p> <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>',
        }),
    ).exactOptional(),
    CloudWatchLogsRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.",
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p> <code>alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p> <code>12345678-1234-1234-1234-123456789012</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    IsOrganizationTrail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations.',
        }),
    ).exactOptional(),
    TagsList: TagsListSchema.exactOptional(),
  })
  .openapi({
    required: ['Name', 'S3BucketName'],
    title: 'CreateTrailRequest',
    description: 'Specifies the settings for each trail.',
  })
  .openapi('CreateTrailRequest')

const MaximumNumberOfTrailsExceededExceptionSchema = z
  .any()
  .openapi('MaximumNumberOfTrailsExceededException')

const TrailAlreadyExistsExceptionSchema = z.any().openapi('TrailAlreadyExistsException')

const S3BucketDoesNotExistExceptionSchema = z.any().openapi('S3BucketDoesNotExistException')

const InsufficientS3BucketPolicyExceptionSchema = z
  .any()
  .openapi('InsufficientS3BucketPolicyException')

const InsufficientSnsTopicPolicyExceptionSchema = z
  .any()
  .openapi('InsufficientSnsTopicPolicyException')

const InvalidS3BucketNameExceptionSchema = z.any().openapi('InvalidS3BucketNameException')

const InvalidS3PrefixExceptionSchema = z.any().openapi('InvalidS3PrefixException')

const InvalidSnsTopicNameExceptionSchema = z.any().openapi('InvalidSnsTopicNameException')

const TrailNotProvidedExceptionSchema = z.any().openapi('TrailNotProvidedException')

const InvalidParameterCombinationExceptionSchema = z
  .any()
  .openapi('InvalidParameterCombinationException')

const KmsKeyDisabledExceptionSchema = z.any().openapi('KmsKeyDisabledException')

const InvalidCloudWatchLogsLogGroupArnExceptionSchema = z
  .any()
  .openapi('InvalidCloudWatchLogsLogGroupArnException')

const InvalidCloudWatchLogsRoleArnExceptionSchema = z
  .any()
  .openapi('InvalidCloudWatchLogsRoleArnException')

const CloudWatchLogsDeliveryUnavailableExceptionSchema = z
  .any()
  .openapi('CloudWatchLogsDeliveryUnavailableException')

const CloudTrailInvalidClientTokenIdExceptionSchema = z
  .any()
  .openapi('CloudTrailInvalidClientTokenIdException')

const DeleteChannelResponseSchema = z.object({}).openapi('DeleteChannelResponse')

const DeleteChannelRequestSchema = z
  .object({
    Channel: ChannelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN or the <code>UUID</code> value of the channel that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['Channel'], title: 'DeleteChannelRequest' })
  .openapi('DeleteChannelRequest')

const ChannelARNInvalidExceptionSchema = z.any().openapi('ChannelARNInvalidException')

const DeleteEventDataStoreResponseSchema = z.object({}).openapi('DeleteEventDataStoreResponse')

const DeleteEventDataStoreRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN (or the ID suffix of the ARN) of the event data store to delete.',
        }),
    ),
  })
  .openapi({ required: ['EventDataStore'], title: 'DeleteEventDataStoreRequest' })
  .openapi('DeleteEventDataStoreRequest')

const EventDataStoreTerminationProtectedExceptionSchema = z
  .any()
  .openapi('EventDataStoreTerminationProtectedException')

const EventDataStoreHasOngoingImportExceptionSchema = z
  .any()
  .openapi('EventDataStoreHasOngoingImportException')

const ChannelExistsForEDSExceptionSchema = z.any().openapi('ChannelExistsForEDSException')

const DeleteResourcePolicyResponseSchema = z.object({}).openapi('DeleteResourcePolicyResponse')

const ResourceArnSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._\/\-:]+$/)
  .min(3)
  .max(256)
  .openapi('ResourceArn')

const DeleteResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            " The Amazon Resource Name (ARN) of the CloudTrail channel you're deleting the resource-based policy from. The following is the format of a resource ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>. ",
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const ResourceARNNotValidExceptionSchema = z.any().openapi('ResourceARNNotValidException')

const ResourcePolicyNotFoundExceptionSchema = z.any().openapi('ResourcePolicyNotFoundException')

const DeleteTrailResponseSchema = z
  .object({})
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
  })
  .openapi('DeleteTrailResponse')

const DeleteTrailRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name or the CloudTrail ARN of the trail to be deleted. The following is the format of a trail ARN. <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> ',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    title: 'DeleteTrailRequest',
    description: 'The request that specifies the name of a trail to delete.',
  })
  .openapi('DeleteTrailRequest')

const TrailNotFoundExceptionSchema = z.any().openapi('TrailNotFoundException')

const InvalidHomeRegionExceptionSchema = z.any().openapi('InvalidHomeRegionException')

const DeregisterOrganizationDelegatedAdminResponseSchema = z
  .object({})
  .openapi({
    description: 'Returns the following response if successful. Otherwise, returns an error.',
  })
  .openapi('DeregisterOrganizationDelegatedAdminResponse')

const AccountIdSchema = z.string().regex(/\d+/).min(12).max(16).openapi('AccountId')

const DeregisterOrganizationDelegatedAdminRequestSchema = z
  .object({
    DelegatedAdminAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A delegated administrator account ID. This is a member account in an organization that is currently designated as a delegated administrator.',
        }),
    ),
  })
  .openapi({
    required: ['DelegatedAdminAccountId'],
    title: 'DeregisterOrganizationDelegatedAdminRequest',
    description:
      'Removes CloudTrail delegated administrator permissions from a specified member account in an organization that is currently designated as a delegated administrator.',
  })
  .openapi('DeregisterOrganizationDelegatedAdminRequest')

const AccountNotFoundExceptionSchema = z.any().openapi('AccountNotFoundException')

const AccountNotRegisteredExceptionSchema = z.any().openapi('AccountNotRegisteredException')

const NotOrganizationManagementAccountExceptionSchema = z
  .any()
  .openapi('NotOrganizationManagementAccountException')

const QueryStatementSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .min(1)
  .max(10000)
  .openapi('QueryStatement')

const LongSchema = z.int().openapi('Long')

const IntegerSchema = z.int().openapi('Integer')

const QueryStatisticsForDescribeQuerySchema = z
  .object({
    EventsMatched: LongSchema.and(
      z.any().openapi({ description: 'The number of events that matched a query.' }),
    ).exactOptional(),
    EventsScanned: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of events that the query scanned in the event data store.',
        }),
    ).exactOptional(),
    BytesScanned: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total bytes that the query scanned in the event data store. This value matches the number of bytes for which your account is billed for the query, unless the query is still running.',
        }),
    ).exactOptional(),
    ExecutionTimeInMillis: IntegerSchema.and(
      z.any().openapi({ description: "The query's run time, in milliseconds." }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The creation time of the query.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Gets metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time.",
    required: [],
  })
  .openapi('QueryStatisticsForDescribeQuery')

const ErrorMessageSchema = z.string().regex(/.*/).min(4).max(1000).openapi('ErrorMessage')

const DeliveryS3UriSchema = z
  .string()
  .regex(/s3:\/\/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](\/.*)?/)
  .max(1024)
  .openapi('DeliveryS3Uri')

const DeliveryStatusSchema = z
  .enum([
    'SUCCESS',
    'FAILED',
    'FAILED_SIGNING_FILE',
    'PENDING',
    'RESOURCE_NOT_FOUND',
    'ACCESS_DENIED',
    'ACCESS_DENIED_SIGNING_FILE',
    'CANCELLED',
    'UNKNOWN',
  ])
  .openapi('DeliveryStatus')

const DescribeQueryResponseSchema = z
  .object({
    QueryId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the query.' }),
    ).exactOptional(),
    QueryString: QueryStatementSchema.and(
      z.any().openapi({ description: 'The SQL code of a query.' }),
    ).exactOptional(),
    QueryStatus: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of a query. Values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code> ',
        }),
    ).exactOptional(),
    QueryStatistics: QueryStatisticsForDescribeQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            "Metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time.",
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message returned if a query failed.' }),
    ).exactOptional(),
    DeliveryS3Uri: DeliveryS3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI for the S3 bucket where CloudTrail delivered query results, if applicable.',
        }),
    ).exactOptional(),
    DeliveryStatus: DeliveryStatusSchema.and(
      z.any().openapi({ description: 'The delivery status.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeQueryResponse')

const DescribeQueryRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The ARN (or the ID suffix of the ARN) of an event data store on which the specified query was run.EventDataStore is no longer required by DescribeQueryRequest',
        }),
    ).exactOptional(),
    QueryId: UUIDSchema.and(z.any().openapi({ description: 'The query ID.' })),
  })
  .openapi({ required: ['QueryId'], title: 'DescribeQueryRequest' })
  .openapi('DescribeQueryRequest')

const TrailSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the trail set by calling <a>CreateTrail</a>. The maximum length is 128 characters.',
        }),
    ).exactOptional(),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the Amazon S3 bucket into which CloudTrail delivers your trail files. See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3 Bucket Naming Requirements</a>.',
        }),
    ).exactOptional(),
    S3KeyPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.',
        }),
    ).exactOptional(),
    SnsTopicName: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'This field is no longer in use. Use SnsTopicARN.',
        }),
    ).exactOptional(),
    SnsTopicARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The following is the format of a topic ARN.</p> <p> <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code> </p>',
        }),
    ).exactOptional(),
    IncludeGlobalServiceEvents: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <b>True</b> to include Amazon Web Services API calls from Amazon Web Services global services such as IAM. Otherwise, <b>False</b>.',
        }),
    ).exactOptional(),
    IsMultiRegionTrail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail exists only in one region or exists in all regions.',
        }),
    ).exactOptional(),
    HomeRegion: StringSchema.and(
      z.any().openapi({ description: 'The region in which the trail was created.' }),
    ).exactOptional(),
    TrailARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the trail. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ).exactOptional(),
    LogFileValidationEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether log file validation is enabled.' }),
    ).exactOptional(),
    CloudWatchLogsLogGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.',
        }),
    ).exactOptional(),
    CloudWatchLogsRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.",
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
    HasCustomEventSelectors: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies if the trail has custom event selectors.' }),
    ).exactOptional(),
    HasInsightSelectors: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether a trail has insight types specified in an <code>InsightSelector</code> list.',
        }),
    ).exactOptional(),
    IsOrganizationTrail: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the trail is an organization trail.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The settings for a trail.', required: [] })
  .openapi('Trail')

const TrailListSchema = z.array(TrailSchema).openapi('TrailList')

const DescribeTrailsResponseSchema = z
  .object({
    trailList: TrailListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of trail objects. Trail objects with string values are only returned if values for the objects exist in a trail's configuration. For example, <code>SNSTopicName</code> and <code>SNSTopicARN</code> are only returned in results if a trail is configured to send SNS notifications. Similarly, <code>KMSKeyId</code> only appears in results if a trail's log files are encrypted with KMS customer managed keys.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
    required: [],
  })
  .openapi('DescribeTrailsResponse')

const TrailNameListSchema = z.array(StringSchema).openapi('TrailNameList')

const DescribeTrailsRequestSchema = z
  .object({
    trailNameList: TrailNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p> <p>If an empty list is specified, information for the trail in the current region is returned.</p> <ul> <li> <p>If an empty list is specified and <code>IncludeShadowTrails</code> is false, then information for all trails in the current region is returned.</p> </li> <li> <p>If an empty list is specified and IncludeShadowTrails is null or true, then information for all trails in the current region and any associated shadow trails in other regions is returned.</p> </li> </ul> <note> <p>If one or more trail names are specified, information is returned only if the names match the names of trails belonging only to the current region and current account. To return information about a trail in another region, you must specify its trail ARN.</p> </note>',
        }),
    ).exactOptional(),
    includeShadowTrails: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to include shadow trails in the response. A shadow trail is the replication in a region of a trail that was created in a different region, or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account and region replication trails will not be returned. The default is true.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeTrailsRequest',
    description: 'Returns information about the trail.',
    required: [],
  })
  .openapi('DescribeTrailsRequest')

const SourceConfigSchema = z
  .object({
    ApplyToAllRegions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether the channel applies to a single region or to all regions.',
        }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description: ' The advanced event selectors that are configured for the channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Contains configuration information about the channel. ', required: [] })
  .openapi('SourceConfig')

const IngestionStatusSchema = z
  .object({
    LatestIngestionSuccessTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time stamp of the most recent successful ingestion of events for the channel.',
        }),
    ).exactOptional(),
    LatestIngestionSuccessEventID: UUIDSchema.and(
      z
        .any()
        .openapi({
          description: 'The event ID of the most recent successful ingestion of events.',
        }),
    ).exactOptional(),
    LatestIngestionErrorCode: ErrorMessageSchema.and(
      z
        .any()
        .openapi({ description: 'The error code for the most recent failure to ingest events.' }),
    ).exactOptional(),
    LatestIngestionAttemptTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The time stamp of the most recent attempt to ingest events on the channel.',
        }),
    ).exactOptional(),
    LatestIngestionAttemptEventID: UUIDSchema.and(
      z.any().openapi({ description: 'The event ID of the most recent attempt to ingest events.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A table showing information about the most recent successful and failed attempts to ingest events.',
    required: [],
  })
  .openapi('IngestionStatus')

const GetChannelResponseSchema = z
  .object({
    ChannelArn: ChannelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of an channel returned by a <code>GetChannel</code> request.',
        }),
    ).exactOptional(),
    Name: ChannelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the CloudTrail channel. For service-linked channels, the name is <code>aws-service-channel/service-name/custom-suffix</code> where <code>service-name</code> represents the name of the Amazon Web Services service that created the channel and <code>custom-suffix</code> represents the suffix generated by the Amazon Web Services service. ',
        }),
    ).exactOptional(),
    Source: SourceSchema.and(
      z.any().openapi({ description: 'The source for the CloudTrail channel.' }),
    ).exactOptional(),
    SourceConfig: SourceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides information about the advanced event selectors configured for the channel, and whether the channel applies to all regions or a single region. ',
        }),
    ).exactOptional(),
    Destinations: DestinationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destinations for the channel. For channels created for integrations, the destinations are the event data stores that log events arriving through the channel. For service-linked channels, the destination is the Amazon Web Services service that created the service-linked channel to receive events.',
        }),
    ).exactOptional(),
    IngestionStatus: IngestionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A table showing information about the most recent successful and failed attempts to ingest events.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetChannelResponse')

const GetChannelRequestSchema = z
  .object({
    Channel: ChannelArnSchema.and(
      z.any().openapi({ description: 'The ARN or <code>UUID</code> of a channel.' }),
    ),
  })
  .openapi({ required: ['Channel'], title: 'GetChannelRequest' })
  .openapi('GetChannelRequest')

const GetEventDataStoreResponseSchema = z
  .object({
    EventDataStoreArn: EventDataStoreArnSchema.and(
      z.any().openapi({ description: 'The event data store Amazon Resource Number (ARN).' }),
    ).exactOptional(),
    Name: EventDataStoreNameSchema.and(
      z.any().openapi({ description: 'The name of the event data store.' }),
    ).exactOptional(),
    Status: EventDataStoreStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of an event data store. Values can be <code>ENABLED</code> and <code>PENDING_DELETION</code>.',
        }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description: 'The advanced event selectors used to select events for the data store.',
        }),
    ).exactOptional(),
    MultiRegionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the event data store includes events from all regions, or only from the region in which it was created.',
        }),
    ).exactOptional(),
    OrganizationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether an event data store is collecting logged events for an organization in Organizations.',
        }),
    ).exactOptional(),
    RetentionPeriod: RetentionPeriodSchema.and(
      z.any().openapi({ description: 'The retention period of the event data store, in days.' }),
    ).exactOptional(),
    TerminationProtectionEnabled: TerminationProtectionEnabledSchema.and(
      z.any().openapi({ description: 'Indicates that termination protection is enabled.' }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z.any().openapi({ description: "The timestamp of the event data store's creation." }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the time that an event data store was updated, if applicable. <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in <code>CreatedTimestamp</code>.',
        }),
    ).exactOptional(),
    KmsKeyId: EventDataStoreKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventDataStoreResponse')

const GetEventDataStoreRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (or ID suffix of the ARN) of the event data store about which you want information.',
        }),
    ),
  })
  .openapi({ required: ['EventDataStore'], title: 'GetEventDataStoreRequest' })
  .openapi('GetEventDataStoreRequest')

const ReadWriteTypeSchema = z.enum(['ReadOnly', 'WriteOnly', 'All']).openapi('ReadWriteType')

const DataResourceValuesSchema = z.array(StringSchema).openapi('DataResourceValues')

const DataResourceSchema = z
  .object({
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource type in which you want to log data events. You can specify the following <i>basic</i> event selector resource types:</p> <ul> <li> <p> <code>AWS::S3::Object</code> </p> </li> <li> <p> <code>AWS::Lambda::Function</code> </p> </li> <li> <p> <code>AWS::DynamoDB::Table</code> </p> </li> </ul> <p>The following resource types are also available through <i>advanced</i> event selectors. Basic event selector resource types are valid in advanced event selectors, but advanced event selector resource types are not valid in basic event selectors. For more information, see <a>AdvancedFieldSelector$Field</a>.</p> <ul> <li> <p> <code>AWS::CloudTrail::Channel</code> </p> </li> <li> <p> <code>AWS::S3Outposts::Object</code> </p> </li> <li> <p> <code>AWS::ManagedBlockchain::Node</code> </p> </li> <li> <p> <code>AWS::S3ObjectLambda::AccessPoint</code> </p> </li> <li> <p> <code>AWS::EC2::Snapshot</code> </p> </li> <li> <p> <code>AWS::S3::AccessPoint</code> </p> </li> <li> <p> <code>AWS::DynamoDB::Stream</code> </p> </li> <li> <p> <code>AWS::Glue::Table</code> </p> </li> <li> <p> <code>AWS::FinSpace::Environment</code> </p> </li> <li> <p> <code>AWS::SageMaker::ExperimentTrialComponent</code> </p> </li> <li> <p> <code>AWS::SageMaker::FeatureGroup</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Values: DataResourceValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.</p> <ul> <li> <p>To log data events for all objects in all S3 buckets in your Amazon Web Services account, specify the prefix as <code>arn:aws:s3</code>.</p> <note> <p>This also enables logging of data event activity performed by any user or role in your Amazon Web Services account, even if that activity is performed on a bucket that belongs to another Amazon Web Services account.</p> </note> </li> <li> <p>To log data events for all objects in an S3 bucket, specify the bucket and an empty object prefix such as <code>arn:aws:s3:::bucket-1/</code>. The trail logs data events for all objects in this S3 bucket.</p> </li> <li> <p>To log data events for specific objects, specify the S3 bucket and object prefix such as <code>arn:aws:s3:::bucket-1/example-images</code>. The trail logs data events for objects in this S3 bucket that match the prefix.</p> </li> <li> <p>To log data events for all Lambda functions in your Amazon Web Services account, specify the prefix as <code>arn:aws:lambda</code>.</p> <note> <p>This also enables logging of <code>Invoke</code> activity performed by any user or role in your Amazon Web Services account, even if that activity is performed on a function that belongs to another Amazon Web Services account. </p> </note> </li> <li> <p>To log data events for a specific Lambda function, specify the function ARN.</p> <note> <p>Lambda function ARNs are exact. For example, if you specify a function ARN <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld</i>, data events will only be logged for <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld</i>. They will not be logged for <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld2</i>.</p> </note> </li> <li> <p>To log data events for all DynamoDB tables in your Amazon Web Services account, specify the prefix as <code>arn:aws:dynamodb</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The Amazon S3 buckets, Lambda functions, or Amazon DynamoDB tables that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.</p> <p>If you are using advanced event selectors, the maximum total number of values for all conditions, across all advanced event selectors for the trail, is 500.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol>",
    required: [],
  })
  .openapi('DataResource')

const DataResourcesSchema = z.array(DataResourceSchema).openapi('DataResources')

const ExcludeManagementEventSourcesSchema = z
  .array(StringSchema)
  .openapi('ExcludeManagementEventSources')

const EventSelectorSchema = z
  .object({
    ReadWriteType: ReadWriteTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 <code>GetConsoleOutput</code> is a read-only API operation and <code>RunInstances</code> is a write-only API operation.</p> <p> By default, the value is <code>All</code>.</p>',
        }),
    ).exactOptional(),
    IncludeManagementEvents: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify if you want your event selector to include management events for your trail.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Management Events</a> in the <i>CloudTrail User Guide</i>.</p> <p>By default, the value is <code>true</code>.</p> <p>The first copy of management events is free. You are charged for additional copies of management events that you are logging on any subsequent trail in the same region. For more information about CloudTrail pricing, see <a href="http://aws.amazon.com/cloudtrail/pricing/">CloudTrail Pricing</a>.</p>',
        }),
    ).exactOptional(),
    DataResources: DataResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>CloudTrail supports data event logging for Amazon S3 objects, Lambda functions, and Amazon DynamoDB tables with basic event selectors. You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Data Events</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p>',
        }),
    ).exactOptional(),
    ExcludeManagementEventSources: ExcludeManagementEventSourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out Key Management Service or Amazon RDS Data API events by containing <code>kms.amazonaws.com</code> or <code>rdsdata.amazonaws.com</code>. By default, <code>ExcludeManagementEventSources</code> is empty, and KMS and Amazon RDS Data API events are logged to your trail. You can exclude management event sources only in regions that support the event source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>",
    required: [],
  })
  .openapi('EventSelector')

const EventSelectorsSchema = z.array(EventSelectorSchema).openapi('EventSelectors')

const GetEventSelectorsResponseSchema = z
  .object({
    TrailARN: StringSchema.and(
      z.any().openapi({ description: 'The specified trail ARN that has the event selectors.' }),
    ).exactOptional(),
    EventSelectors: EventSelectorsSchema.and(
      z.any().openapi({ description: 'The event selectors that are configured for the trail.' }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description: ' The advanced event selectors that are configured for the trail. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventSelectorsResponse')

const GetEventSelectorsRequestSchema = z
  .object({
    TrailName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the format:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['TrailName'], title: 'GetEventSelectorsRequest' })
  .openapi('GetEventSelectorsRequest')

const ImportDestinationsSchema = z
  .array(EventDataStoreArnSchema)
  .length(1)
  .openapi('ImportDestinations')

const ImportSourceSchema: z.ZodType<ImportSourceType> = z
  .lazy(() =>
    z
      .object({
        S3: S3ImportSourceSchema.and(z.any().openapi({ description: ' The source S3 bucket. ' })),
      })
      .openapi({ required: ['S3'], description: ' The import source. ' }),
  )
  .openapi('ImportSource')

const ImportStatusSchema = z
  .enum(['INITIALIZING', 'IN_PROGRESS', 'FAILED', 'STOPPED', 'COMPLETED'])
  .openapi('ImportStatus')

const ImportStatisticsSchema = z
  .object({
    PrefixesFound: LongSchema.and(
      z.any().openapi({ description: ' The number of S3 prefixes found for the import. ' }),
    ).exactOptional(),
    PrefixesCompleted: LongSchema.and(
      z.any().openapi({ description: ' The number of S3 prefixes that completed import. ' }),
    ).exactOptional(),
    FilesCompleted: LongSchema.and(
      z.any().openapi({ description: 'The number of log files that completed import.' }),
    ).exactOptional(),
    EventsCompleted: LongSchema.and(
      z
        .any()
        .openapi({
          description: ' The number of trail events imported into the event data store. ',
        }),
    ).exactOptional(),
    FailedEntries: LongSchema.and(
      z.any().openapi({ description: ' The number of failed entries. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Provides statistics for the specified <code>ImportID</code>. CloudTrail does not update import statistics in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import. ',
    required: [],
  })
  .openapi('ImportStatistics')

const GetImportResponseSchema = z
  .object({
    ImportId: UUIDSchema.and(
      z.any().openapi({ description: ' The ID of the import. ' }),
    ).exactOptional(),
    Destinations: ImportDestinationsSchema.and(
      z.any().openapi({ description: ' The ARN of the destination event data store. ' }),
    ).exactOptional(),
    ImportSource: ImportSourceSchema.and(
      z.any().openapi({ description: ' The source S3 bucket. ' }),
    ).exactOptional(),
    StartEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. ',
        }),
    ).exactOptional(),
    EndEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. ',
        }),
    ).exactOptional(),
    ImportStatus: ImportStatusSchema.and(
      z.any().openapi({ description: ' The status of the import. ' }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z.any().openapi({ description: " The timestamp of the import's creation. " }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z.any().openapi({ description: ' The timestamp of when the import was updated. ' }),
    ).exactOptional(),
    ImportStatistics: ImportStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides statistics for the import. CloudTrail does not update import statistics in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetImportResponse')

const GetImportRequestSchema = z
  .object({
    ImportId: UUIDSchema.and(z.any().openapi({ description: ' The ID for the import. ' })),
  })
  .openapi({ required: ['ImportId'], title: 'GetImportRequest' })
  .openapi('GetImportRequest')

const ImportNotFoundExceptionSchema = z.any().openapi('ImportNotFoundException')

const InsightTypeSchema = z
  .enum(['ApiCallRateInsight', 'ApiErrorRateInsight'])
  .openapi('InsightType')

const InsightSelectorSchema = z
  .object({
    InsightType: InsightTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of insights to log on a trail. <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code> are valid insight types.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A JSON string that contains a list of insight types that are logged on a trail.',
    required: [],
  })
  .openapi('InsightSelector')

const InsightSelectorsSchema = z.array(InsightSelectorSchema).openapi('InsightSelectors')

const GetInsightSelectorsResponseSchema = z
  .object({
    TrailARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a trail for which you want to get Insights selectors.',
        }),
    ).exactOptional(),
    InsightSelectors: InsightSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string that contains the insight types you want to log on a trail. In this release, <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code> are supported as insight types.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInsightSelectorsResponse')

const GetInsightSelectorsRequestSchema = z
  .object({
    TrailName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the format:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['TrailName'], title: 'GetInsightSelectorsRequest' })
  .openapi('GetInsightSelectorsRequest')

const InsightNotEnabledExceptionSchema = z.any().openapi('InsightNotEnabledException')

const QueryStatisticsSchema = z
  .object({
    ResultsCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of results returned.' }),
    ).exactOptional(),
    TotalResultsCount: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of results returned by a query.' }),
    ).exactOptional(),
    BytesScanned: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total bytes that the query scanned in the event data store. This value matches the number of bytes for which your account is billed for the query, unless the query is still running.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Metadata about a query, such as the number of results.', required: [] })
  .openapi('QueryStatistics')

const QueryResultValueSchema = z.string().openapi('QueryResultValue')

const QueryResultColumnSchema = z
  .record(z.string(), QueryResultValueSchema)
  .openapi('QueryResultColumn')

const QueryResultRowSchema = z.array(QueryResultColumnSchema).openapi('QueryResultRow')

const QueryResultRowsSchema = z.array(QueryResultRowSchema).openapi('QueryResultRows')

const PaginationTokenSchema = z.string().regex(/.*/).min(4).max(1000).openapi('PaginationToken')

const GetQueryResultsResponseSchema = z
  .object({
    QueryStatus: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the query. Values include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.',
        }),
    ).exactOptional(),
    QueryStatistics: QueryStatisticsSchema.and(
      z.any().openapi({ description: 'Shows the count of query results.' }),
    ).exactOptional(),
    QueryResultRows: QueryResultRowsSchema.and(
      z.any().openapi({ description: 'Contains the individual event results of the query.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'A token you can use to get the next page of query results.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message returned if a query failed.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQueryResultsResponse')

const MaxQueryResultsSchema = z.int().min(1).max(1000).openapi('MaxQueryResults')

const GetQueryResultsRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The ARN (or ID suffix of the ARN) of the event data store against which the query was run.EventDataStore is no longer required by GetQueryResultsRequest',
        }),
    ).exactOptional(),
    QueryId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the query for which you want to get results.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'A token you can use to get the next page of query results.' }),
    ).exactOptional(),
    MaxQueryResults: MaxQueryResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of query results to display on a single page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryId'], title: 'GetQueryResultsRequest' })
  .openapi('GetQueryResultsRequest')

const InvalidMaxResultsExceptionSchema = z.any().openapi('InvalidMaxResultsException')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ResourcePolicySchema = z.string().min(1).max(8192).openapi('ResourcePolicy')

const GetResourcePolicyResponseSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the CloudTrail channel attached to resource-based policy. ',
        }),
    ).exactOptional(),
    ResourcePolicy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A JSON-formatted string that contains the resource-based policy attached to the CloudTrail channel. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcePolicyResponse')

const GetResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy. The following is the format of a resource ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetResourcePolicyRequest' })
  .openapi('GetResourcePolicyRequest')

const GetTrailResponseSchema = z
  .object({ Trail: TrailSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetTrailResponse')

const GetTrailRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve settings information.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'GetTrailRequest' })
  .openapi('GetTrailRequest')

const GetTrailStatusResponseSchema = z
  .object({
    IsLogging: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the CloudTrail trail is currently logging Amazon Web Services API calls.',
        }),
    ).exactOptional(),
    LatestDeliveryError: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver log files to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error Responses</a> in the Amazon S3 API Reference. </p> <note> <p>This error occurs only when there is a problem with the destination S3 bucket, and does not occur for requests that time out. To resolve the issue, create a new bucket, and then call <code>UpdateTrail</code> to specify the new bucket; or fix the existing objects so that CloudTrail can again write to the bucket.</p> </note>',
        }),
    ).exactOptional(),
    LatestNotificationError: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays any Amazon SNS error that CloudTrail encountered when attempting to send a notification. For more information about Amazon SNS errors, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon SNS Developer Guide</a>. ',
        }),
    ).exactOptional(),
    LatestDeliveryTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the date and time that CloudTrail last delivered log files to an account's Amazon S3 bucket.",
        }),
    ).exactOptional(),
    LatestNotificationTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the date and time of the most recent Amazon SNS notification that CloudTrail has written a new log file to an account's Amazon S3 bucket.",
        }),
    ).exactOptional(),
    StartLoggingTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the most recent date and time when CloudTrail started recording API calls for an Amazon Web Services account.',
        }),
    ).exactOptional(),
    StopLoggingTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the most recent date and time when CloudTrail stopped recording API calls for an Amazon Web Services account.',
        }),
    ).exactOptional(),
    LatestCloudWatchLogsDeliveryError: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays any CloudWatch Logs error that CloudTrail encountered when attempting to deliver logs to CloudWatch Logs.',
        }),
    ).exactOptional(),
    LatestCloudWatchLogsDeliveryTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.',
        }),
    ).exactOptional(),
    LatestDigestDeliveryTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the date and time that CloudTrail last delivered a digest file to an account's Amazon S3 bucket.",
        }),
    ).exactOptional(),
    LatestDigestDeliveryError: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver a digest file to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error Responses</a> in the Amazon S3 API Reference. </p> <note> <p>This error occurs only when there is a problem with the destination S3 bucket, and does not occur for requests that time out. To resolve the issue, create a new bucket, and then call <code>UpdateTrail</code> to specify the new bucket; or fix the existing objects so that CloudTrail can again write to the bucket.</p> </note>',
        }),
    ).exactOptional(),
    LatestDeliveryAttemptTime: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer in use.' }),
    ).exactOptional(),
    LatestNotificationAttemptTime: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer in use.' }),
    ).exactOptional(),
    LatestNotificationAttemptSucceeded: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer in use.' }),
    ).exactOptional(),
    LatestDeliveryAttemptSucceeded: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer in use.' }),
    ).exactOptional(),
    TimeLoggingStarted: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer in use.' }),
    ).exactOptional(),
    TimeLoggingStopped: StringSchema.and(
      z.any().openapi({ description: 'This field is no longer in use.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
    required: [],
  })
  .openapi('GetTrailStatusResponse')

const GetTrailStatusRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a shadow trail (a replication of the trail in another region), you must specify its ARN. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    title: 'GetTrailStatusRequest',
    description: 'The name of a trail about which you want the current status.',
  })
  .openapi('GetTrailStatusRequest')

const ChannelSchema = z
  .object({
    ChannelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a channel.' }),
    ).exactOptional(),
    Name: ChannelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the CloudTrail channel. For service-linked channels, the name is <code>aws-service-channel/service-name/custom-suffix</code> where <code>service-name</code> represents the name of the Amazon Web Services service that created the channel and <code>custom-suffix</code> represents the suffix created by the Amazon Web Services service. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a returned CloudTrail channel.',
    required: [],
  })
  .openapi('Channel')

const ChannelsSchema = z.array(ChannelSchema).openapi('Channels')

const ListChannelsResponseSchema = z
  .object({
    Channels: ChannelsSchema.and(
      z.any().openapi({ description: ' The list of channels in the account. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next page of results after a previous API call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsResponse')

const ListChannelsMaxResultsCountSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListChannelsMaxResultsCount')

const ListChannelsRequestSchema = z
  .object({
    MaxResults: ListChannelsMaxResultsCountSchema.and(
      z
        .any()
        .openapi({
          description: ' The maximum number of CloudTrail channels to display on a single page. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListChannelsRequest', required: [] })
  .openapi('ListChannelsRequest')

const EventDataStoreSchema = z
  .object({
    EventDataStoreArn: EventDataStoreArnSchema.and(
      z.any().openapi({ description: 'The ARN of the event data store.' }),
    ).exactOptional(),
    Name: EventDataStoreNameSchema.and(
      z.any().openapi({ description: 'The name of the event data store.' }),
    ).exactOptional(),
    TerminationProtectionEnabled: TerminationProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Indicates whether the event data store is protected from termination.TerminationProtectionEnabled is no longer returned by ListEventDataStores',
        }),
    ).exactOptional(),
    Status: EventDataStoreStatusSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The status of an event data store. Values are <code>ENABLED</code> and <code>PENDING_DELETION</code>.Status is no longer returned by ListEventDataStores',
        }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The advanced event selectors that were used to select events for the data store.AdvancedEventSelectors is no longer returned by ListEventDataStores',
        }),
    ).exactOptional(),
    MultiRegionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Indicates whether the event data store includes events from all regions, or only from the region in which it was created.MultiRegionEnabled is no longer returned by ListEventDataStores',
        }),
    ).exactOptional(),
    OrganizationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Indicates that an event data store is collecting logged events for an organization.OrganizationEnabled is no longer returned by ListEventDataStores',
        }),
    ).exactOptional(),
    RetentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The retention period, in days.RetentionPeriod is no longer returned by ListEventDataStores',
        }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "The timestamp of the event data store's creation.CreatedTimestamp is no longer returned by ListEventDataStores",
        }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The timestamp showing when an event data store was updated, if applicable. <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in <code>CreatedTimestamp</code>.UpdatedTimestamp is no longer returned by ListEventDataStores',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 90 to 2557 days (about three months to up to seven years). To select events for an event data store, use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">advanced event selectors</a>.',
    required: [],
  })
  .openapi('EventDataStore')

const EventDataStoresSchema = z.array(EventDataStoreSchema).openapi('EventDataStores')

const ListEventDataStoresResponseSchema = z
  .object({
    EventDataStores: EventDataStoresSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about event data stores in the account, in the current region.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token you can use to get the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventDataStoresResponse')

const ListEventDataStoresMaxResultsCountSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListEventDataStoresMaxResultsCount')

const ListEventDataStoresRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token you can use to get the next page of event data store results.',
        }),
    ).exactOptional(),
    MaxResults: ListEventDataStoresMaxResultsCountSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of event data stores to display on a single page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEventDataStoresRequest', required: [] })
  .openapi('ListEventDataStoresRequest')

const ImportFailureStatusSchema = z
  .enum(['FAILED', 'RETRY', 'SUCCEEDED'])
  .openapi('ImportFailureStatus')

const ImportFailureListItemSchema = z
  .object({
    Location: StringSchema.and(
      z.any().openapi({ description: ' The location of the failure in the S3 bucket. ' }),
    ).exactOptional(),
    Status: ImportFailureStatusSchema.and(
      z.any().openapi({ description: ' The status of the import. ' }),
    ).exactOptional(),
    ErrorType: StringSchema.and(
      z.any().openapi({ description: ' The type of import error. ' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: ' Provides the reason the import failed. ' }),
    ).exactOptional(),
    LastUpdatedTime: DateSchema.and(
      z.any().openapi({ description: ' When the import was last updated. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Provides information about an import failure. ', required: [] })
  .openapi('ImportFailureListItem')

const ImportFailureListSchema = z.array(ImportFailureListItemSchema).openapi('ImportFailureList')

const ListImportFailuresResponseSchema = z
  .object({
    Failures: ImportFailureListSchema.and(
      z.any().openapi({ description: ' Contains information about the import failures. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: ' A token you can use to get the next page of results. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListImportFailuresResponse')

const ListImportFailuresMaxResultsCountSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListImportFailuresMaxResultsCount')

const ListImportFailuresRequestSchema = z
  .object({
    ImportId: UUIDSchema.and(z.any().openapi({ description: ' The ID of the import. ' })),
    MaxResults: ListImportFailuresMaxResultsCountSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of failures to display on a single page. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: ' A token you can use to get the next page of import failures. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ImportId'], title: 'ListImportFailuresRequest' })
  .openapi('ListImportFailuresRequest')

const ImportsListItemSchema = z
  .object({
    ImportId: UUIDSchema.and(
      z.any().openapi({ description: ' The ID of the import. ' }),
    ).exactOptional(),
    ImportStatus: ImportStatusSchema.and(
      z.any().openapi({ description: ' The status of the import. ' }),
    ).exactOptional(),
    Destinations: ImportDestinationsSchema.and(
      z.any().openapi({ description: ' The ARN of the destination event data store. ' }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z.any().openapi({ description: " The timestamp of the import's creation. " }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z.any().openapi({ description: " The timestamp of the import's last update. " }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Contains information about an import that was returned by a lookup request. ',
    required: [],
  })
  .openapi('ImportsListItem')

const ImportsListSchema = z.array(ImportsListItemSchema).openapi('ImportsList')

const ListImportsResponseSchema = z
  .object({
    Imports: ImportsListSchema.and(
      z.any().openapi({ description: ' The list of returned imports. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: ' A token you can use to get the next page of import results. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListImportsResponse')

const ListImportsMaxResultsCountSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListImportsMaxResultsCount')

const ListImportsRequestSchema = z
  .object({
    MaxResults: ListImportsMaxResultsCountSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of imports to display on a single page. ' }),
    ).exactOptional(),
    Destination: EventDataStoreArnSchema.and(
      z.any().openapi({ description: ' The ARN of the destination event data store. ' }),
    ).exactOptional(),
    ImportStatus: ImportStatusSchema.and(
      z.any().openapi({ description: ' The status of the import. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: ' A token you can use to get the next page of import results. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListImportsRequest', required: [] })
  .openapi('ListImportsRequest')

const ByteBufferSchema = z.string().openapi('ByteBuffer')

const PublicKeySchema = z
  .object({
    Value: ByteBufferSchema.and(
      z.any().openapi({ description: 'The DER encoded public key value in PKCS#1 format.' }),
    ).exactOptional(),
    ValidityStartTime: DateSchema.and(
      z.any().openapi({ description: 'The starting time of validity of the public key.' }),
    ).exactOptional(),
    ValidityEndTime: DateSchema.and(
      z.any().openapi({ description: 'The ending time of validity of the public key.' }),
    ).exactOptional(),
    Fingerprint: StringSchema.and(
      z.any().openapi({ description: 'The fingerprint of the public key.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a returned public key.', required: [] })
  .openapi('PublicKey')

const PublicKeyListSchema = z.array(PublicKeySchema).openapi('PublicKeyList')

const ListPublicKeysResponseSchema = z
  .object({
    PublicKeyList: PublicKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains an array of PublicKey objects.</p> <note> <p>The returned public keys may have validity time ranges that overlap.</p> </note>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
    required: [],
  })
  .openapi('ListPublicKeysResponse')

const ListPublicKeysRequestSchema = z
  .object({
    StartTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optionally specifies, in UTC, the start of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used, and the current public key is returned.',
        }),
    ).exactOptional(),
    EndTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optionally specifies, in UTC, the end of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListPublicKeysRequest',
    description: 'Requests the public keys for a specified time range.',
    required: [],
  })
  .openapi('ListPublicKeysRequest')

const InvalidTimeRangeExceptionSchema = z.any().openapi('InvalidTimeRangeException')

const InvalidTokenExceptionSchema = z.any().openapi('InvalidTokenException')

const QuerySchema = z
  .object({
    QueryId: UUIDSchema.and(z.any().openapi({ description: 'The ID of a query.' })).exactOptional(),
    QueryStatus: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the query. This can be <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The creation time of a query.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A SQL string of criteria about events that you want to collect in an event data store.',
    required: [],
  })
  .openapi('Query')

const QueriesSchema = z.array(QuerySchema).openapi('Queries')

const ListQueriesResponseSchema = z
  .object({
    Queries: QueriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists matching query results, and shows query ID, status, and creation time of each query.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token you can use to get the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListQueriesResponse')

const ListQueriesMaxResultsCountSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListQueriesMaxResultsCount')

const ListQueriesRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (or the ID suffix of the ARN) of an event data store on which queries were run.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token you can use to get the next page of results.' }),
    ).exactOptional(),
    MaxResults: ListQueriesMaxResultsCountSchema.and(
      z.any().openapi({ description: 'The maximum number of queries to show on a page.' }),
    ).exactOptional(),
    StartTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use with <code>EndTime</code> to bound a <code>ListQueries</code> request, and limit its results to only those queries run within a specified time period.',
        }),
    ).exactOptional(),
    EndTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use with <code>StartTime</code> to bound a <code>ListQueries</code> request, and limit its results to only those queries run within a specified time period.',
        }),
    ).exactOptional(),
    QueryStatus: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of queries that you want to return in results. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EventDataStore'], title: 'ListQueriesRequest' })
  .openapi('ListQueriesRequest')

const InvalidDateRangeExceptionSchema = z.any().openapi('InvalidDateRangeException')

const InvalidQueryStatusExceptionSchema = z.any().openapi('InvalidQueryStatusException')

const ResourceTagSchema = z
  .object({
    ResourceId: StringSchema.and(
      z.any().openapi({ description: 'Specifies the ARN of the resource.' }),
    ).exactOptional(),
    TagsList: TagsListSchema.and(
      z.any().openapi({ description: 'A list of tags.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A resource tag.', required: [] })
  .openapi('ResourceTag')

const ResourceTagListSchema = z.array(ResourceTagSchema).openapi('ResourceTagList')

const ListTagsResponseSchema = z
  .object({
    ResourceTagList: ResourceTagListSchema.and(
      z.any().openapi({ description: 'A list of resource tags.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
    required: [],
  })
  .openapi('ListTagsResponse')

const ResourceIdListSchema = z.array(StringSchema).openapi('ResourceIdList')

const ListTagsRequestSchema = z
  .object({
    ResourceIdList: ResourceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of trail, event data store, or channel ARNs whose tags will be listed. The list has a limit of 20 ARNs.',
        }),
    ),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceIdList'],
    title: 'ListTagsRequest',
    description: 'Specifies a list of tags to return.',
  })
  .openapi('ListTagsRequest')

const TrailInfoSchema = z
  .object({
    TrailARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN of a trail.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of a trail.' }),
    ).exactOptional(),
    HomeRegion: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services Region in which a trail was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).",
    required: [],
  })
  .openapi('TrailInfo')

const TrailsSchema = z.array(TrailInfoSchema).openapi('Trails')

const ListTrailsResponseSchema = z
  .object({
    Trails: TrailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the name, ARN, and home region of trails in the current account.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token to use to get the next page of results after a previous API call. If the token does not appear, there are no more results to return. The token must be passed in with the same parameters as the previous call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTrailsResponse')

const ListTrailsRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTrailsRequest', required: [] })
  .openapi('ListTrailsRequest')

const ResourceSchema = z
  .object({
    ResourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of a resource referenced by the event returned. When the resource type cannot be determined, null is returned. Some examples of resource types are: <b>Instance</b> for EC2, <b>Trail</b> for CloudTrail, <b>DBInstance</b> for Amazon RDS, and <b>AccessKey</b> for IAM. To learn more about how to look up and filter events by the resource types supported for a service, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events-console.html#filtering-cloudtrail-events">Filtering CloudTrail Events</a>.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the resource referenced by the event returned. These are user-created names whose values will depend on the environment. For example, the resource name might be "auto-scaling-test-group" for an Auto Scaling Group or "i-1234567" for an EC2 Instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the type and name of a resource referenced by an event.',
    required: [],
  })
  .openapi('Resource')

const ResourceListSchema = z
  .array(ResourceSchema)
  .openapi({ description: 'A list of resources referenced by the event returned.' })
  .openapi('ResourceList')

const EventSchema = z
  .object({
    EventId: StringSchema.and(
      z.any().openapi({ description: 'The CloudTrail ID of the event returned.' }),
    ).exactOptional(),
    EventName: StringSchema.and(
      z.any().openapi({ description: 'The name of the event returned.' }),
    ).exactOptional(),
    ReadOnly: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about whether the event is a write event or a read event. ',
        }),
    ).exactOptional(),
    AccessKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services access key ID that was used to sign the request. If the request was made with temporary security credentials, this is the access key ID of the temporary credentials.',
        }),
    ).exactOptional(),
    EventTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time of the event returned.' }),
    ).exactOptional(),
    EventSource: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services service to which the request was made.' }),
    ).exactOptional(),
    Username: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user name or role name of the requester that called the API in the event returned.',
        }),
    ).exactOptional(),
    Resources: ResourceListSchema.and(
      z.any().openapi({ description: 'A list of resources referenced by the event returned.' }),
    ).exactOptional(),
    CloudTrailEvent: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A JSON string that contains a representation of the event returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.',
    required: [],
  })
  .openapi('Event')

const EventsListSchema = z.array(EventSchema).openapi('EventsList')

const NextTokenSchema = z.string().openapi('NextToken')

const LookupEventsResponseSchema = z
  .object({
    Events: EventsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed first.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token to use to get the next page of results after a previous API call. If the token does not appear, there are no more results to return. The token must be passed in with the same parameters as the previous call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains a response to a LookupEvents action.', required: [] })
  .openapi('LookupEventsResponse')

const LookupAttributeKeySchema = z
  .enum([
    'EventId',
    'EventName',
    'ReadOnly',
    'Username',
    'ResourceType',
    'ResourceName',
    'EventSource',
    'AccessKeyId',
  ])
  .openapi('LookupAttributeKey')

const LookupAttributeValueSchema = z.string().min(1).max(2000).openapi('LookupAttributeValue')

const LookupAttributeSchema = z
  .object({
    AttributeKey: LookupAttributeKeySchema.and(
      z
        .any()
        .openapi({ description: 'Specifies an attribute on which to filter the events returned.' }),
    ),
    AttributeValue: LookupAttributeValueSchema.and(
      z.any().openapi({ description: 'Specifies a value for the specified AttributeKey.' }),
    ),
  })
  .openapi({
    required: ['AttributeKey', 'AttributeValue'],
    description: 'Specifies an attribute and value that filter the events returned.',
  })
  .openapi('LookupAttribute')

const LookupAttributesListSchema = z.array(LookupAttributeSchema).openapi('LookupAttributesList')

const EventCategorySchema = z.literal('insight').openapi('EventCategory')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const LookupEventsRequestSchema = z
  .object({
    LookupAttributes: LookupAttributesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a list of lookup attributes. Currently the list can contain only one item.',
        }),
    ).exactOptional(),
    StartTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned.',
        }),
    ).exactOptional(),
    EndTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that only events that occur before or at the specified time are returned. If the specified end time is before the specified start time, an error is returned.',
        }),
    ).exactOptional(),
    EventCategory: EventCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the event category. If you do not specify an event category, events of the category are not returned in the response. For example, if you do not specify <code>insight</code> as the value of <code>EventCategory</code>, no Insights events are returned.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of events to return. Possible values are 1 through 50. The default is 50.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'LookupEventsRequest',
    description: 'Contains a request for LookupEvents.',
    required: [],
  })
  .openapi('LookupEventsRequest')

const InvalidLookupAttributesExceptionSchema = z.any().openapi('InvalidLookupAttributesException')

const InvalidEventCategoryExceptionSchema = z.any().openapi('InvalidEventCategoryException')

const PutEventSelectorsResponseSchema = z
  .object({
    TrailARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the trail that was updated with event selectors. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ).exactOptional(),
    EventSelectors: EventSelectorsSchema.and(
      z.any().openapi({ description: 'Specifies the event selectors configured for your trail.' }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the advanced event selectors configured for your trail.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutEventSelectorsResponse')

const PutEventSelectorsRequestSchema = z
  .object({
    TrailName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the following format.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ),
    EventSelectors: EventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the settings for your event selectors. You can configure up to five event selectors for a trail. You can use either <code>EventSelectors</code> or <code>AdvancedEventSelectors</code> in a <code>PutEventSelectors</code> request, but not both. If you apply <code>EventSelectors</code> to a trail, any existing <code>AdvancedEventSelectors</code> are overwritten.',
        }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the settings for advanced event selectors. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TrailName'], title: 'PutEventSelectorsRequest' })
  .openapi('PutEventSelectorsRequest')

const PutInsightSelectorsResponseSchema = z
  .object({
    TrailARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a trail for which you want to change or add Insights selectors.',
        }),
    ).exactOptional(),
    InsightSelectors: InsightSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string that contains the Insights event types that you want to log on a trail. The valid Insights types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutInsightSelectorsResponse')

const PutInsightSelectorsRequestSchema = z
  .object({
    TrailName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the CloudTrail trail for which you want to change or add Insights selectors.',
        }),
    ),
    InsightSelectors: InsightSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON string that contains the insight types you want to log on a trail. <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code> are valid insight types.',
        }),
    ),
  })
  .openapi({ required: ['TrailName', 'InsightSelectors'], title: 'PutInsightSelectorsRequest' })
  .openapi('PutInsightSelectorsRequest')

const InvalidInsightSelectorsExceptionSchema = z.any().openapi('InvalidInsightSelectorsException')

const PutResourcePolicyResponseSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy. ',
        }),
    ).exactOptional(),
    ResourcePolicy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The JSON-formatted string of the Amazon Web Services resource-based policy attached to the CloudTrail channel. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutResourcePolicyResponse')

const PutResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy. The following is the format of a resource ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>. ',
        }),
    ),
    ResourcePolicy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A JSON-formatted string for an Amazon Web Services resource-based policy. </p> <p>The following are requirements for the resource policy:</p> <ul> <li> <p> Contains only one action: cloudtrail-data:PutAuditEvents </p> </li> <li> <p> Contains at least one statement. The policy can have a maximum of 20 statements. </p> </li> <li> <p> Each statement contains at least one principal. A statement can have a maximum of 50 principals. </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'ResourcePolicy'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const ResourcePolicyNotValidExceptionSchema = z.any().openapi('ResourcePolicyNotValidException')

const RegisterOrganizationDelegatedAdminResponseSchema = z
  .object({})
  .openapi({
    description: 'Returns the following response if successful. Otherwise, returns an error.',
  })
  .openapi('RegisterOrganizationDelegatedAdminResponse')

const RegisterOrganizationDelegatedAdminRequestSchema = z
  .object({
    MemberAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An organization member account ID that you want to designate as a delegated administrator.',
        }),
    ),
  })
  .openapi({
    required: ['MemberAccountId'],
    title: 'RegisterOrganizationDelegatedAdminRequest',
    description:
      'Specifies an organization member account ID as a CloudTrail delegated administrator.',
  })
  .openapi('RegisterOrganizationDelegatedAdminRequest')

const AccountRegisteredExceptionSchema = z.any().openapi('AccountRegisteredException')

const CannotDelegateManagementAccountExceptionSchema = z
  .any()
  .openapi('CannotDelegateManagementAccountException')

const DelegatedAdminAccountLimitExceededExceptionSchema = z
  .any()
  .openapi('DelegatedAdminAccountLimitExceededException')

const RemoveTagsResponseSchema = z
  .object({})
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
  })
  .openapi('RemoveTagsResponse')

const RemoveTagsRequestSchema = z
  .object({
    ResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the trail, event data store, or channel from which tags should be removed.</p> <p> Example trail ARN format: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p> <p>Example event data store ARN format: <code>arn:aws:cloudtrail:us-east-2:12345678910:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code> </p> <p>Example channel ARN format: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code> </p>',
        }),
    ),
    TagsList: TagsListSchema.and(
      z.any().openapi({ description: 'Specifies a list of tags to be removed.' }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'TagsList'],
    title: 'RemoveTagsRequest',
    description: 'Specifies the tags to remove from a trail, event data store, or channel.',
  })
  .openapi('RemoveTagsRequest')

const RestoreEventDataStoreResponseSchema = z
  .object({
    EventDataStoreArn: EventDataStoreArnSchema.and(
      z.any().openapi({ description: 'The event data store ARN.' }),
    ).exactOptional(),
    Name: EventDataStoreNameSchema.and(
      z.any().openapi({ description: 'The name of the event data store.' }),
    ).exactOptional(),
    Status: EventDataStoreStatusSchema.and(
      z.any().openapi({ description: 'The status of the event data store.' }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({ description: 'The advanced event selectors that were used to select events.' }),
    ).exactOptional(),
    MultiRegionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the event data store is collecting events from all regions, or only from the region in which the event data store was created.',
        }),
    ).exactOptional(),
    OrganizationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether an event data store is collecting logged events for an organization in Organizations.',
        }),
    ).exactOptional(),
    RetentionPeriod: RetentionPeriodSchema.and(
      z.any().openapi({ description: 'The retention period, in days.' }),
    ).exactOptional(),
    TerminationProtectionEnabled: TerminationProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that termination protection is enabled and the event data store cannot be automatically deleted.',
        }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z.any().openapi({ description: "The timestamp of an event data store's creation." }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp that shows when an event data store was updated, if applicable. <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in <code>CreatedTimestamp</code>.',
        }),
    ).exactOptional(),
    KmsKeyId: EventDataStoreKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestoreEventDataStoreResponse')

const RestoreEventDataStoreRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (or the ID suffix of the ARN) of the event data store that you want to restore.',
        }),
    ),
  })
  .openapi({ required: ['EventDataStore'], title: 'RestoreEventDataStoreRequest' })
  .openapi('RestoreEventDataStoreRequest')

const InvalidEventDataStoreStatusExceptionSchema = z
  .any()
  .openapi('InvalidEventDataStoreStatusException')

const StartImportResponseSchema = z
  .object({
    ImportId: UUIDSchema.and(
      z.any().openapi({ description: ' The ID of the import. ' }),
    ).exactOptional(),
    Destinations: ImportDestinationsSchema.and(
      z.any().openapi({ description: ' The ARN of the destination event data store. ' }),
    ).exactOptional(),
    ImportSource: ImportSourceSchema.and(
      z.any().openapi({ description: ' The source S3 bucket for the import. ' }),
    ).exactOptional(),
    StartEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. ',
        }),
    ).exactOptional(),
    EndEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. ',
        }),
    ).exactOptional(),
    ImportStatus: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Shows the status of the import after a <code>StartImport</code> request. An import finishes with a status of <code>COMPLETED</code> if there were no failures, or <code>FAILED</code> if there were failures. ',
        }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z.any().openapi({ description: " The timestamp for the import's creation. " }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({ description: " The timestamp of the import's last update, if applicable. " }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartImportResponse')

const StartImportRequestSchema = z
  .object({
    Destinations: ImportDestinationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the destination event data store. Use this parameter for a new import. ',
        }),
    ).exactOptional(),
    ImportSource: ImportSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The source S3 bucket for the import. Use this parameter for a new import. ',
        }),
    ).exactOptional(),
    StartEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Use with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified <code>StartEventTime</code> and <code>EndEventTime</code> before attempting to import events. ',
        }),
    ).exactOptional(),
    EndEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Use with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified <code>StartEventTime</code> and <code>EndEventTime</code> before attempting to import events. ',
        }),
    ).exactOptional(),
    ImportId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the import. Use this parameter when you are retrying an import. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartImportRequest', required: [] })
  .openapi('StartImportRequest')

const AccountHasOngoingImportExceptionSchema = z.any().openapi('AccountHasOngoingImportException')

const InvalidImportSourceExceptionSchema = z.any().openapi('InvalidImportSourceException')

const StartLoggingResponseSchema = z
  .object({})
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
  })
  .openapi('StartLoggingResponse')

const StartLoggingRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs Amazon Web Services API calls. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    title: 'StartLoggingRequest',
    description:
      'The request to CloudTrail to start logging Amazon Web Services API calls for an account.',
  })
  .openapi('StartLoggingRequest')

const StartQueryResponseSchema = z
  .object({
    QueryId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the started query.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartQueryResponse')

const StartQueryRequestSchema = z
  .object({
    QueryStatement: QueryStatementSchema.and(
      z.any().openapi({ description: 'The SQL code of your query.' }),
    ),
    DeliveryS3Uri: DeliveryS3UriSchema.and(
      z
        .any()
        .openapi({
          description: ' The URI for the S3 bucket where CloudTrail delivers the query results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryStatement'], title: 'StartQueryRequest' })
  .openapi('StartQueryRequest')

const InvalidQueryStatementExceptionSchema = z.any().openapi('InvalidQueryStatementException')

const MaxConcurrentQueriesExceptionSchema = z.any().openapi('MaxConcurrentQueriesException')

const StopImportResponseSchema = z
  .object({
    ImportId: UUIDSchema.and(
      z.any().openapi({ description: ' The ID for the import. ' }),
    ).exactOptional(),
    ImportSource: ImportSourceSchema.and(
      z.any().openapi({ description: ' The source S3 bucket for the import. ' }),
    ).exactOptional(),
    Destinations: ImportDestinationsSchema.and(
      z.any().openapi({ description: ' The ARN of the destination event data store. ' }),
    ).exactOptional(),
    ImportStatus: ImportStatusSchema.and(
      z.any().openapi({ description: ' The status of the import. ' }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z.any().openapi({ description: " The timestamp of the import's creation. " }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z.any().openapi({ description: " The timestamp of the import's last update. " }),
    ).exactOptional(),
    StartEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. ',
        }),
    ).exactOptional(),
    EndEventTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. ',
        }),
    ).exactOptional(),
    ImportStatistics: ImportStatisticsSchema.and(
      z.any().openapi({ description: ' Returns information on the stopped import. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopImportResponse')

const StopImportRequestSchema = z
  .object({ ImportId: UUIDSchema.and(z.any().openapi({ description: ' The ID of the import. ' })) })
  .openapi({ required: ['ImportId'], title: 'StopImportRequest' })
  .openapi('StopImportRequest')

const StopLoggingResponseSchema = z
  .object({})
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
  })
  .openapi('StopLoggingResponse')

const StopLoggingRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging Amazon Web Services API calls. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    title: 'StopLoggingRequest',
    description:
      'Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.',
  })
  .openapi('StopLoggingRequest')

const UpdateChannelResponseSchema = z
  .object({
    ChannelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel that was updated.' }),
    ).exactOptional(),
    Name: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the channel that was updated.' }),
    ).exactOptional(),
    Source: SourceSchema.and(
      z.any().openapi({ description: 'The event source of the channel that was updated.' }),
    ).exactOptional(),
    Destinations: DestinationsSchema.and(
      z
        .any()
        .openapi({
          description: 'The event data stores that log events arriving through the channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChannelResponse')

const UpdateChannelRequestSchema = z
  .object({
    Channel: ChannelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN or ID (the ARN suffix) of the channel that you want to update.',
        }),
    ),
    Destinations: DestinationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of event data stores that you want to log events arriving through the channel.',
        }),
    ).exactOptional(),
    Name: ChannelNameSchema.and(
      z.any().openapi({ description: ' Changes the name of the channel. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Channel'], title: 'UpdateChannelRequest' })
  .openapi('UpdateChannelRequest')

const UpdateEventDataStoreResponseSchema = z
  .object({
    EventDataStoreArn: EventDataStoreArnSchema.and(
      z.any().openapi({ description: 'The ARN of the event data store.' }),
    ).exactOptional(),
    Name: EventDataStoreNameSchema.and(
      z.any().openapi({ description: 'The name of the event data store.' }),
    ).exactOptional(),
    Status: EventDataStoreStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of an event data store. Values can be <code>ENABLED</code> and <code>PENDING_DELETION</code>.',
        }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description: 'The advanced event selectors that are applied to the event data store.',
        }),
    ).exactOptional(),
    MultiRegionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the event data store includes events from all regions, or only from the region in which it was created.',
        }),
    ).exactOptional(),
    OrganizationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether an event data store is collecting logged events for an organization in Organizations.',
        }),
    ).exactOptional(),
    RetentionPeriod: RetentionPeriodSchema.and(
      z.any().openapi({ description: 'The retention period, in days.' }),
    ).exactOptional(),
    TerminationProtectionEnabled: TerminationProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether termination protection is enabled for the event data store.',
        }),
    ).exactOptional(),
    CreatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that shows when an event data store was first created.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp that shows when the event data store was last updated. <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in <code>CreatedTimestamp</code>.',
        }),
    ).exactOptional(),
    KmsKeyId: EventDataStoreKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEventDataStoreResponse')

const UpdateEventDataStoreRequestSchema = z
  .object({
    EventDataStore: EventDataStoreArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (or the ID suffix of the ARN) of the event data store that you want to update.',
        }),
    ),
    Name: EventDataStoreNameSchema.and(
      z.any().openapi({ description: 'The event data store name.' }),
    ).exactOptional(),
    AdvancedEventSelectors: AdvancedEventSelectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The advanced event selectors used to select events for the event data store. You can configure up to five advanced event selectors for each event data store.',
        }),
    ).exactOptional(),
    MultiRegionEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether an event data store collects events from all regions, or only from the region in which it was created.',
        }),
    ).exactOptional(),
    OrganizationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether an event data store collects events logged for an organization in Organizations.',
        }),
    ).exactOptional(),
    RetentionPeriod: RetentionPeriodSchema.and(
      z.any().openapi({ description: 'The retention period, in days.' }),
    ).exactOptional(),
    TerminationProtectionEnabled: TerminationProtectionEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that termination protection is enabled and the event data store cannot be automatically deleted.',
        }),
    ).exactOptional(),
    KmsKeyId: EventDataStoreKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <important> <p>Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.</p> </important> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p> <code>alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p> <code>12345678-1234-1234-1234-123456789012</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EventDataStore'], title: 'UpdateEventDataStoreRequest' })
  .openapi('UpdateEventDataStoreRequest')

const UpdateTrailResponseSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'Specifies the name of the trail.' }),
    ).exactOptional(),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Amazon S3 bucket designated for publishing log files.',
        }),
    ).exactOptional(),
    S3KeyPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your IAM Log Files</a>.',
        }),
    ).exactOptional(),
    SnsTopicName: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'This field is no longer in use. Use <a>UpdateTrailResponse$SnsTopicARN</a>.',
        }),
    ).exactOptional(),
    SnsTopicARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The following is the format of a topic ARN.</p> <p> <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code> </p>',
        }),
    ).exactOptional(),
    IncludeGlobalServiceEvents: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail is publishing events from global services such as IAM to the log files.',
        }),
    ).exactOptional(),
    IsMultiRegionTrail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the trail exists in one region or in all regions.',
        }),
    ).exactOptional(),
    TrailARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the trail that was updated. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ).exactOptional(),
    LogFileValidationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether log file integrity validation is enabled.' }),
    ).exactOptional(),
    CloudWatchLogsLogGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs are delivered.',
        }),
    ).exactOptional(),
    CloudWatchLogsRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.",
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
    IsOrganizationTrail: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the trail is an organization trail.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the objects or data listed below if successful. Otherwise, returns an error.',
    required: [],
  })
  .openapi('UpdateTrailResponse')

const UpdateTrailRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the trail or trail ARN. If <code>Name</code> is a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If <code>Name</code> is a trail ARN, it must be in the following format.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>',
        }),
    ),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3 Bucket Naming Requirements</a>.',
        }),
    ).exactOptional(),
    S3KeyPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.',
        }),
    ).exactOptional(),
    SnsTopicName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.',
        }),
    ).exactOptional(),
    IncludeGlobalServiceEvents: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail is publishing events from global services such as IAM to the log files.',
        }),
    ).exactOptional(),
    IsMultiRegionTrail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.',
        }),
    ).exactOptional(),
    EnableLogFileValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether log file validation is enabled. The default is false.</p> <note> <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p> </note>',
        }),
    ).exactOptional(),
    CloudWatchLogsLogGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered. You must use a log group that exists in your account.</p> <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>',
        }),
    ).exactOptional(),
    CloudWatchLogsRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.",
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p>alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</p> </li> <li> <p>12345678-1234-1234-1234-123456789012</p> </li> </ul>',
        }),
    ).exactOptional(),
    IsOrganizationTrail: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations. If the trail is not an organization trail and this is set to <code>true</code>, the trail will be created in all Amazon Web Services accounts that belong to the organization. If the trail is an organization trail and this is set to <code>false</code>, the trail will remain in the current Amazon Web Services account but be deleted from all member accounts in the organization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    title: 'UpdateTrailRequest',
    description: 'Specifies settings to update for the trail.',
  })
  .openapi('UpdateTrailRequest')

const QueryResultKeySchema = z.string().openapi('QueryResultKey')

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

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTagsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags',
    description:
      "Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home region).",
    operationId: 'AddTags',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags'],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AddTagsRequestSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AddTagsResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      482: {
        description: 'ResourceTypeNotSupportedException',
        content: { 'application/json': { schema: ResourceTypeNotSupportedExceptionSchema } },
      },
      483: {
        description: 'TagsLimitExceededException',
        content: { 'application/json': { schema: TagsLimitExceededExceptionSchema } },
      },
      484: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      485: {
        description: 'InvalidTagParameterException',
        content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
      },
      486: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      487: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      488: {
        description: 'ChannelNotFoundException',
        content: { 'application/json': { schema: ChannelNotFoundExceptionSchema } },
      },
      489: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      490: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      491: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      492: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      493: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CancelQueryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery',
    description:
      'Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.',
    operationId: 'CancelQuery',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CancelQueryRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CancelQueryResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      483: {
        description: 'InactiveQueryException',
        content: { 'application/json': { schema: InactiveQueryExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      485: {
        description: 'QueryIdNotFoundException',
        content: { 'application/json': { schema: QueryIdNotFoundExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      487: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      488: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      489: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannelRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel',
    description:
      'Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.',
    operationId: 'CreateChannel',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateChannelRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateChannelResponseSchema } },
      },
      480: {
        description: 'ChannelMaxLimitExceededException',
        content: { 'application/json': { schema: ChannelMaxLimitExceededExceptionSchema } },
      },
      481: {
        description: 'InvalidSourceException',
        content: { 'application/json': { schema: InvalidSourceExceptionSchema } },
      },
      482: {
        description: 'ChannelAlreadyExistsException',
        content: { 'application/json': { schema: ChannelAlreadyExistsExceptionSchema } },
      },
      483: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      484: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      485: {
        description: 'InvalidEventDataStoreCategoryException',
        content: { 'application/json': { schema: InvalidEventDataStoreCategoryExceptionSchema } },
      },
      486: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      487: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      488: {
        description: 'InvalidTagParameterException',
        content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
      },
      489: {
        description: 'TagsLimitExceededException',
        content: { 'application/json': { schema: TagsLimitExceededExceptionSchema } },
      },
      490: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      491: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateEventDataStoreRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore',
    description: 'Creates a new event data store.',
    operationId: 'CreateEventDataStore',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateEventDataStoreRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateEventDataStoreResponseSchema } },
      },
      480: {
        description: 'EventDataStoreAlreadyExistsException',
        content: { 'application/json': { schema: EventDataStoreAlreadyExistsExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreMaxLimitExceededException',
        content: { 'application/json': { schema: EventDataStoreMaxLimitExceededExceptionSchema } },
      },
      482: {
        description: 'InvalidEventSelectorsException',
        content: { 'application/json': { schema: InvalidEventSelectorsExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'InvalidTagParameterException',
        content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
      },
      485: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      486: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      487: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      488: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      489: {
        description: 'InvalidKmsKeyIdException',
        content: { 'application/json': { schema: InvalidKmsKeyIdExceptionSchema } },
      },
      490: {
        description: 'KmsKeyNotFoundException',
        content: { 'application/json': { schema: KmsKeyNotFoundExceptionSchema } },
      },
      491: {
        description: 'KmsException',
        content: { 'application/json': { schema: KmsExceptionSchema } },
      },
      492: {
        description: 'CloudTrailAccessNotEnabledException',
        content: { 'application/json': { schema: CloudTrailAccessNotEnabledExceptionSchema } },
      },
      493: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
      494: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      495: {
        description: 'OrganizationsNotInUseException',
        content: { 'application/json': { schema: OrganizationsNotInUseExceptionSchema } },
      },
      496: {
        description: 'OrganizationNotInAllFeaturesModeException',
        content: {
          'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema },
        },
      },
      497: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrailRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail',
    description:
      'Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. ',
    operationId: 'CreateTrail',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateTrailRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateTrailResponseSchema } },
      },
      480: {
        description: 'MaximumNumberOfTrailsExceededException',
        content: { 'application/json': { schema: MaximumNumberOfTrailsExceededExceptionSchema } },
      },
      481: {
        description: 'TrailAlreadyExistsException',
        content: { 'application/json': { schema: TrailAlreadyExistsExceptionSchema } },
      },
      482: {
        description: 'S3BucketDoesNotExistException',
        content: { 'application/json': { schema: S3BucketDoesNotExistExceptionSchema } },
      },
      483: {
        description: 'InsufficientS3BucketPolicyException',
        content: { 'application/json': { schema: InsufficientS3BucketPolicyExceptionSchema } },
      },
      484: {
        description: 'InsufficientSnsTopicPolicyException',
        content: { 'application/json': { schema: InsufficientSnsTopicPolicyExceptionSchema } },
      },
      485: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      486: {
        description: 'InvalidS3BucketNameException',
        content: { 'application/json': { schema: InvalidS3BucketNameExceptionSchema } },
      },
      487: {
        description: 'InvalidS3PrefixException',
        content: { 'application/json': { schema: InvalidS3PrefixExceptionSchema } },
      },
      488: {
        description: 'InvalidSnsTopicNameException',
        content: { 'application/json': { schema: InvalidSnsTopicNameExceptionSchema } },
      },
      489: {
        description: 'InvalidKmsKeyIdException',
        content: { 'application/json': { schema: InvalidKmsKeyIdExceptionSchema } },
      },
      490: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      491: {
        description: 'TrailNotProvidedException',
        content: { 'application/json': { schema: TrailNotProvidedExceptionSchema } },
      },
      492: {
        description: 'TagsLimitExceededException',
        content: { 'application/json': { schema: TagsLimitExceededExceptionSchema } },
      },
      493: {
        description: 'InvalidParameterCombinationException',
        content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
      },
      494: {
        description: 'KmsKeyNotFoundException',
        content: { 'application/json': { schema: KmsKeyNotFoundExceptionSchema } },
      },
      495: {
        description: 'KmsKeyDisabledException',
        content: { 'application/json': { schema: KmsKeyDisabledExceptionSchema } },
      },
      496: {
        description: 'KmsException',
        content: { 'application/json': { schema: KmsExceptionSchema } },
      },
      497: {
        description: 'InvalidCloudWatchLogsLogGroupArnException',
        content: {
          'application/json': { schema: InvalidCloudWatchLogsLogGroupArnExceptionSchema },
        },
      },
      498: {
        description: 'InvalidCloudWatchLogsRoleArnException',
        content: { 'application/json': { schema: InvalidCloudWatchLogsRoleArnExceptionSchema } },
      },
      499: {
        description: 'CloudWatchLogsDeliveryUnavailableException',
        content: {
          'application/json': { schema: CloudWatchLogsDeliveryUnavailableExceptionSchema },
        },
      },
      500: {
        description: 'InvalidTagParameterException',
        content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
      },
      501: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      502: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      503: {
        description: 'CloudTrailAccessNotEnabledException',
        content: { 'application/json': { schema: CloudTrailAccessNotEnabledExceptionSchema } },
      },
      504: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
      505: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      506: {
        description: 'OrganizationsNotInUseException',
        content: { 'application/json': { schema: OrganizationsNotInUseExceptionSchema } },
      },
      507: {
        description: 'OrganizationNotInAllFeaturesModeException',
        content: {
          'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema },
        },
      },
      508: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      509: {
        description: 'CloudTrailInvalidClientTokenIdException',
        content: { 'application/json': { schema: CloudTrailInvalidClientTokenIdExceptionSchema } },
      },
      510: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteChannelRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel',
    description: 'Deletes a channel.',
    operationId: 'DeleteChannel',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteChannelRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteChannelResponseSchema } },
      },
      480: {
        description: 'ChannelARNInvalidException',
        content: { 'application/json': { schema: ChannelARNInvalidExceptionSchema } },
      },
      481: {
        description: 'ChannelNotFoundException',
        content: { 'application/json': { schema: ChannelNotFoundExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteEventDataStoreRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore',
    description:
      '<p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>',
    operationId: 'DeleteEventDataStore',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteEventDataStoreRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteEventDataStoreResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'EventDataStoreTerminationProtectedException',
        content: {
          'application/json': { schema: EventDataStoreTerminationProtectedExceptionSchema },
        },
      },
      483: {
        description: 'EventDataStoreHasOngoingImportException',
        content: { 'application/json': { schema: EventDataStoreHasOngoingImportExceptionSchema } },
      },
      484: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      485: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      487: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      488: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      489: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      490: {
        description: 'ChannelExistsForEDSException',
        content: { 'application/json': { schema: ChannelExistsForEDSExceptionSchema } },
      },
      491: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteResourcePolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy',
    description: ' Deletes the resource-based policy attached to the CloudTrail channel. ',
    operationId: 'DeleteResourcePolicy',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteResourcePolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteResourcePolicyResponseSchema } },
      },
      480: {
        description: 'ResourceARNNotValidException',
        content: { 'application/json': { schema: ResourceARNNotValidExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ResourcePolicyNotFoundException',
        content: { 'application/json': { schema: ResourcePolicyNotFoundExceptionSchema } },
      },
      483: {
        description: 'ResourceTypeNotSupportedException',
        content: { 'application/json': { schema: ResourceTypeNotSupportedExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrailRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail',
    description:
      'Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.',
    operationId: 'DeleteTrail',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteTrailRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteTrailResponseSchema } },
      },
      480: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      482: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'InvalidHomeRegionException',
        content: { 'application/json': { schema: InvalidHomeRegionExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      487: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      488: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      489: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdminRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin',
    description:
      'Removes CloudTrail delegated administrator permissions from a member account in an organization.',
    operationId: 'DeregisterOrganizationDelegatedAdmin',
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
          .literal(
            'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DeregisterOrganizationDelegatedAdminRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeregisterOrganizationDelegatedAdminResponseSchema },
        },
      },
      480: {
        description: 'AccountNotFoundException',
        content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
      },
      481: {
        description: 'AccountNotRegisteredException',
        content: { 'application/json': { schema: AccountNotRegisteredExceptionSchema } },
      },
      482: {
        description: 'CloudTrailAccessNotEnabledException',
        content: { 'application/json': { schema: CloudTrailAccessNotEnabledExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
      485: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      486: {
        description: 'NotOrganizationManagementAccountException',
        content: {
          'application/json': { schema: NotOrganizationManagementAccountExceptionSchema },
        },
      },
      487: {
        description: 'OrganizationNotInAllFeaturesModeException',
        content: {
          'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema },
        },
      },
      488: {
        description: 'OrganizationsNotInUseException',
        content: { 'application/json': { schema: OrganizationsNotInUseExceptionSchema } },
      },
      489: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      490: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeQueryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery',
    description:
      'Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.',
    operationId: 'DescribeQuery',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeQueryRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeQueryResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'QueryIdNotFoundException',
        content: { 'application/json': { schema: QueryIdNotFoundExceptionSchema } },
      },
      485: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      486: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      487: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrailsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails',
    description:
      'Retrieves settings for one or more trails associated with the current region for your account.',
    operationId: 'DescribeTrails',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeTrailsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeTrailsResponseSchema } },
      },
      480: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      481: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      482: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      483: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetChannelRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel',
    description: ' Returns information about a specific channel. ',
    operationId: 'GetChannel',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetChannelRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetChannelResponseSchema } },
      },
      480: {
        description: 'ChannelARNInvalidException',
        content: { 'application/json': { schema: ChannelARNInvalidExceptionSchema } },
      },
      481: {
        description: 'ChannelNotFoundException',
        content: { 'application/json': { schema: ChannelNotFoundExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventDataStoreRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore',
    description:
      'Returns information about an event data store specified as either an ARN or the ID portion of the ARN.',
    operationId: 'GetEventDataStore',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetEventDataStoreRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetEventDataStoreResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      484: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      485: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectorsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors',
    description:
      '<p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a> </p> </li> </ul>',
    operationId: 'GetEventSelectors',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetEventSelectorsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetEventSelectorsResponseSchema } },
      },
      480: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      482: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      485: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImportRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport',
    description: ' Returns information about a specific import. ',
    operationId: 'GetImport',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport'],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GetImportRequestSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetImportResponseSchema } },
      },
      480: {
        description: 'ImportNotFoundException',
        content: { 'application/json': { schema: ImportNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectorsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors',
    description:
      '<p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>',
    operationId: 'GetInsightSelectors',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetInsightSelectorsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetInsightSelectorsResponseSchema } },
      },
      480: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      482: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      485: {
        description: 'InsightNotEnabledException',
        content: { 'application/json': { schema: InsightNotEnabledExceptionSchema } },
      },
      486: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetQueryResultsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults',
    description:
      'Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.',
    operationId: 'GetQueryResults',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults'],
              },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetQueryResultsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetQueryResultsResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      483: {
        description: 'InvalidMaxResultsException',
        content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
      },
      484: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      485: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      486: {
        description: 'QueryIdNotFoundException',
        content: { 'application/json': { schema: QueryIdNotFoundExceptionSchema } },
      },
      487: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      488: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      489: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      490: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy',
    description:
      ' Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. ',
    operationId: 'GetResourcePolicy',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetResourcePolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetResourcePolicyResponseSchema } },
      },
      480: {
        description: 'ResourceARNNotValidException',
        content: { 'application/json': { schema: ResourceARNNotValidExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ResourcePolicyNotFoundException',
        content: { 'application/json': { schema: ResourcePolicyNotFoundExceptionSchema } },
      },
      483: {
        description: 'ResourceTypeNotSupportedException',
        content: { 'application/json': { schema: ResourceTypeNotSupportedExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail',
    description: 'Returns settings information for a specified trail.',
    operationId: 'GetTrail',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail'],
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GetTrailRequestSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetTrailResponseSchema } },
      },
      480: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      481: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus',
    description:
      'Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.',
    operationId: 'GetTrailStatus',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetTrailStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetTrailStatusResponseSchema } },
      },
      480: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      481: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListChannelsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels',
    description: ' Lists the channels in the current account, and their source names. ',
    operationId: 'ListChannels',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListChannelsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListChannelsResponseSchema } },
      },
      480: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      481: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      482: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListEventDataStoresRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores',
    description:
      'Returns information about all event data stores in the account, in the current region.',
    operationId: 'ListEventDataStores',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores',
                ],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListEventDataStoresRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListEventDataStoresResponseSchema } },
      },
      480: {
        description: 'InvalidMaxResultsException',
        content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      484: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportFailuresRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures',
    description: ' Returns a list of failures for the specified import. ',
    operationId: 'ListImportFailures',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListImportFailuresRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListImportFailuresResponseSchema } },
      },
      480: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      481: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      482: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports',
    description:
      ' Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. ',
    operationId: 'ListImports',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListImportsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListImportsResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      484: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeysRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys',
    description:
      '<p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>',
    operationId: 'ListPublicKeys',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys'],
              },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListPublicKeysRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListPublicKeysResponseSchema } },
      },
      480: {
        description: 'InvalidTimeRangeException',
        content: { 'application/json': { schema: InvalidTimeRangeExceptionSchema } },
      },
      481: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'InvalidTokenException',
        content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueriesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries',
    description:
      'Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.',
    operationId: 'ListQueries',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListQueriesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListQueriesResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      483: {
        description: 'InvalidDateRangeException',
        content: { 'application/json': { schema: InvalidDateRangeExceptionSchema } },
      },
      484: {
        description: 'InvalidMaxResultsException',
        content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
      },
      485: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      486: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      487: {
        description: 'InvalidQueryStatusException',
        content: { 'application/json': { schema: InvalidQueryStatusExceptionSchema } },
      },
      488: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      489: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      490: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTagsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags',
    description:
      'Lists the tags for the trail, event data store, or channel in the current region.',
    operationId: 'ListTags',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags'],
              },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ListTagsRequestSchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListTagsResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      482: {
        description: 'ResourceTypeNotSupportedException',
        content: { 'application/json': { schema: ResourceTypeNotSupportedExceptionSchema } },
      },
      483: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      484: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      485: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      486: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      487: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      488: {
        description: 'InvalidTokenException',
        content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
      },
      489: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrailsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails',
    description: 'Lists trails that are in the current account.',
    operationId: 'ListTrails',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails'],
              },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListTrailsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListTrailsResponseSchema } },
      },
      480: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      481: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEventsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents',
    description:
      '<p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>',
    operationId: 'LookupEvents',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: LookupEventsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: LookupEventsResponseSchema } },
      },
      480: {
        description: 'InvalidLookupAttributesException',
        content: { 'application/json': { schema: InvalidLookupAttributesExceptionSchema } },
      },
      481: {
        description: 'InvalidTimeRangeException',
        content: { 'application/json': { schema: InvalidTimeRangeExceptionSchema } },
      },
      482: {
        description: 'InvalidMaxResultsException',
        content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
      },
      483: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      484: {
        description: 'InvalidEventCategoryException',
        content: { 'application/json': { schema: InvalidEventCategoryExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectorsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors',
    description:
      '<p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn\'t match any event selector, the trail doesn\'t log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn\'t match your event selector. The trail doesn\'t log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>',
    operationId: 'PutEventSelectors',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutEventSelectorsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutEventSelectorsResponseSchema } },
      },
      480: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      482: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      483: {
        description: 'InvalidHomeRegionException',
        content: { 'application/json': { schema: InvalidHomeRegionExceptionSchema } },
      },
      484: {
        description: 'InvalidEventSelectorsException',
        content: { 'application/json': { schema: InvalidEventSelectorsExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      487: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      488: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      489: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectorsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors',
    description:
      'Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.',
    operationId: 'PutInsightSelectors',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutInsightSelectorsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutInsightSelectorsResponseSchema } },
      },
      480: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      482: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      483: {
        description: 'InvalidHomeRegionException',
        content: { 'application/json': { schema: InvalidHomeRegionExceptionSchema } },
      },
      484: {
        description: 'InvalidInsightSelectorsException',
        content: { 'application/json': { schema: InvalidInsightSelectorsExceptionSchema } },
      },
      485: {
        description: 'InsufficientS3BucketPolicyException',
        content: { 'application/json': { schema: InsufficientS3BucketPolicyExceptionSchema } },
      },
      486: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      487: {
        description: 'S3BucketDoesNotExistException',
        content: { 'application/json': { schema: S3BucketDoesNotExistExceptionSchema } },
      },
      488: {
        description: 'KmsException',
        content: { 'application/json': { schema: KmsExceptionSchema } },
      },
      489: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      490: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      491: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      492: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutResourcePolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy',
    description:
      ' Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. ',
    operationId: 'PutResourcePolicy',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutResourcePolicyRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutResourcePolicyResponseSchema } },
      },
      480: {
        description: 'ResourceARNNotValidException',
        content: { 'application/json': { schema: ResourceARNNotValidExceptionSchema } },
      },
      481: {
        description: 'ResourcePolicyNotValidException',
        content: { 'application/json': { schema: ResourcePolicyNotValidExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ResourceTypeNotSupportedException',
        content: { 'application/json': { schema: ResourceTypeNotSupportedExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdminRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin',
    description:
      'Registers an organization’s member account as the CloudTrail delegated administrator.',
    operationId: 'RegisterOrganizationDelegatedAdmin',
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
          .literal(
            'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: RegisterOrganizationDelegatedAdminRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: RegisterOrganizationDelegatedAdminResponseSchema },
        },
      },
      480: {
        description: 'AccountRegisteredException',
        content: { 'application/json': { schema: AccountRegisteredExceptionSchema } },
      },
      481: {
        description: 'AccountNotFoundException',
        content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
      },
      482: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'CannotDelegateManagementAccountException',
        content: { 'application/json': { schema: CannotDelegateManagementAccountExceptionSchema } },
      },
      485: {
        description: 'CloudTrailAccessNotEnabledException',
        content: { 'application/json': { schema: CloudTrailAccessNotEnabledExceptionSchema } },
      },
      486: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      487: {
        description: 'DelegatedAdminAccountLimitExceededException',
        content: {
          'application/json': { schema: DelegatedAdminAccountLimitExceededExceptionSchema },
        },
      },
      488: {
        description: 'NotOrganizationManagementAccountException',
        content: {
          'application/json': { schema: NotOrganizationManagementAccountExceptionSchema },
        },
      },
      489: {
        description: 'OrganizationNotInAllFeaturesModeException',
        content: {
          'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema },
        },
      },
      490: {
        description: 'OrganizationsNotInUseException',
        content: { 'application/json': { schema: OrganizationsNotInUseExceptionSchema } },
      },
      491: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      492: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTagsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags',
    description: 'Removes the specified tags from a trail, event data store, or channel.',
    operationId: 'RemoveTags',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RemoveTagsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: RemoveTagsResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      482: {
        description: 'ResourceTypeNotSupportedException',
        content: { 'application/json': { schema: ResourceTypeNotSupportedExceptionSchema } },
      },
      483: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      484: {
        description: 'InvalidTagParameterException',
        content: { 'application/json': { schema: InvalidTagParameterExceptionSchema } },
      },
      485: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      486: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      487: {
        description: 'ChannelNotFoundException',
        content: { 'application/json': { schema: ChannelNotFoundExceptionSchema } },
      },
      488: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      489: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      490: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      491: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStoreRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore',
    description:
      'Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.',
    operationId: 'RestoreEventDataStore',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RestoreEventDataStoreRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: RestoreEventDataStoreResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'EventDataStoreMaxLimitExceededException',
        content: { 'application/json': { schema: EventDataStoreMaxLimitExceededExceptionSchema } },
      },
      483: {
        description: 'InvalidEventDataStoreStatusException',
        content: { 'application/json': { schema: InvalidEventDataStoreStatusExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      485: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      486: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      487: {
        description: 'CloudTrailAccessNotEnabledException',
        content: { 'application/json': { schema: CloudTrailAccessNotEnabledExceptionSchema } },
      },
      488: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
      489: {
        description: 'OrganizationsNotInUseException',
        content: { 'application/json': { schema: OrganizationsNotInUseExceptionSchema } },
      },
      490: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      491: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      492: {
        description: 'OrganizationNotInAllFeaturesModeException',
        content: {
          'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema },
        },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartImportRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport',
    description:
      '<p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket\'s <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>',
    operationId: 'StartImport',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartImportRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartImportResponseSchema } },
      },
      480: {
        description: 'AccountHasOngoingImportException',
        content: { 'application/json': { schema: AccountHasOngoingImportExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      482: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidEventDataStoreStatusException',
        content: { 'application/json': { schema: InvalidEventDataStoreStatusExceptionSchema } },
      },
      484: {
        description: 'InvalidEventDataStoreCategoryException',
        content: { 'application/json': { schema: InvalidEventDataStoreCategoryExceptionSchema } },
      },
      485: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      486: {
        description: 'InvalidImportSourceException',
        content: { 'application/json': { schema: InvalidImportSourceExceptionSchema } },
      },
      487: {
        description: 'ImportNotFoundException',
        content: { 'application/json': { schema: ImportNotFoundExceptionSchema } },
      },
      488: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      489: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      490: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      491: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      492: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      493: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartLoggingRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging',
    description:
      'Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.',
    operationId: 'StartLogging',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartLoggingRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartLoggingResponseSchema } },
      },
      480: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      484: {
        description: 'InvalidHomeRegionException',
        content: { 'application/json': { schema: InvalidHomeRegionExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      487: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      488: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      489: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartQueryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery',
    description:
      'Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.',
    operationId: 'StartQuery',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartQueryRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartQueryResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'InvalidQueryStatementException',
        content: { 'application/json': { schema: InvalidQueryStatementExceptionSchema } },
      },
      485: {
        description: 'MaxConcurrentQueriesException',
        content: { 'application/json': { schema: MaxConcurrentQueriesExceptionSchema } },
      },
      486: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      487: {
        description: 'InvalidS3PrefixException',
        content: { 'application/json': { schema: InvalidS3PrefixExceptionSchema } },
      },
      488: {
        description: 'InvalidS3BucketNameException',
        content: { 'application/json': { schema: InvalidS3BucketNameExceptionSchema } },
      },
      489: {
        description: 'InsufficientS3BucketPolicyException',
        content: { 'application/json': { schema: InsufficientS3BucketPolicyExceptionSchema } },
      },
      490: {
        description: 'S3BucketDoesNotExistException',
        content: { 'application/json': { schema: S3BucketDoesNotExistExceptionSchema } },
      },
      491: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      492: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      493: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImportRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport',
    description: ' Stops a specified import. ',
    operationId: 'StopImport',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StopImportRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StopImportResponseSchema } },
      },
      480: {
        description: 'ImportNotFoundException',
        content: { 'application/json': { schema: ImportNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopLoggingRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging',
    description:
      'Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.',
    operationId: 'StopLogging',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StopLoggingRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StopLoggingResponseSchema } },
      },
      480: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      482: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'InvalidHomeRegionException',
        content: { 'application/json': { schema: InvalidHomeRegionExceptionSchema } },
      },
      485: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      487: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      488: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      489: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateChannelRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel',
    description: 'Updates a channel specified by a required channel ARN or UUID.',
    operationId: 'UpdateChannel',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateChannelRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateChannelResponseSchema } },
      },
      480: {
        description: 'ChannelARNInvalidException',
        content: { 'application/json': { schema: ChannelARNInvalidExceptionSchema } },
      },
      481: {
        description: 'ChannelNotFoundException',
        content: { 'application/json': { schema: ChannelNotFoundExceptionSchema } },
      },
      482: {
        description: 'ChannelAlreadyExistsException',
        content: { 'application/json': { schema: ChannelAlreadyExistsExceptionSchema } },
      },
      483: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      484: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      485: {
        description: 'InvalidEventDataStoreCategoryException',
        content: { 'application/json': { schema: InvalidEventDataStoreCategoryExceptionSchema } },
      },
      486: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      487: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      488: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      489: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateEventDataStoreRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore',
    description:
      '<p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>',
    operationId: 'UpdateEventDataStore',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore',
                ],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateEventDataStoreRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateEventDataStoreResponseSchema } },
      },
      480: {
        description: 'EventDataStoreARNInvalidException',
        content: { 'application/json': { schema: EventDataStoreARNInvalidExceptionSchema } },
      },
      481: {
        description: 'EventDataStoreNotFoundException',
        content: { 'application/json': { schema: EventDataStoreNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidEventSelectorsException',
        content: { 'application/json': { schema: InvalidEventSelectorsExceptionSchema } },
      },
      483: {
        description: 'EventDataStoreHasOngoingImportException',
        content: { 'application/json': { schema: EventDataStoreHasOngoingImportExceptionSchema } },
      },
      484: {
        description: 'InactiveEventDataStoreException',
        content: { 'application/json': { schema: InactiveEventDataStoreExceptionSchema } },
      },
      485: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      486: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      487: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      488: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      489: {
        description: 'InvalidKmsKeyIdException',
        content: { 'application/json': { schema: InvalidKmsKeyIdExceptionSchema } },
      },
      490: {
        description: 'KmsKeyNotFoundException',
        content: { 'application/json': { schema: KmsKeyNotFoundExceptionSchema } },
      },
      491: {
        description: 'KmsException',
        content: { 'application/json': { schema: KmsExceptionSchema } },
      },
      492: {
        description: 'CloudTrailAccessNotEnabledException',
        content: { 'application/json': { schema: CloudTrailAccessNotEnabledExceptionSchema } },
      },
      493: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
      494: {
        description: 'OrganizationsNotInUseException',
        content: { 'application/json': { schema: OrganizationsNotInUseExceptionSchema } },
      },
      495: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      496: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      497: {
        description: 'OrganizationNotInAllFeaturesModeException',
        content: {
          'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema },
        },
      },
    },
  })

export const postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrailRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail',
    description:
      'Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.',
    operationId: 'UpdateTrail',
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
          .literal('com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateTrailRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateTrailResponseSchema } },
      },
      480: {
        description: 'S3BucketDoesNotExistException',
        content: { 'application/json': { schema: S3BucketDoesNotExistExceptionSchema } },
      },
      481: {
        description: 'InsufficientS3BucketPolicyException',
        content: { 'application/json': { schema: InsufficientS3BucketPolicyExceptionSchema } },
      },
      482: {
        description: 'InsufficientSnsTopicPolicyException',
        content: { 'application/json': { schema: InsufficientSnsTopicPolicyExceptionSchema } },
      },
      483: {
        description: 'InsufficientEncryptionPolicyException',
        content: { 'application/json': { schema: InsufficientEncryptionPolicyExceptionSchema } },
      },
      484: {
        description: 'TrailNotFoundException',
        content: { 'application/json': { schema: TrailNotFoundExceptionSchema } },
      },
      485: {
        description: 'InvalidS3BucketNameException',
        content: { 'application/json': { schema: InvalidS3BucketNameExceptionSchema } },
      },
      486: {
        description: 'InvalidS3PrefixException',
        content: { 'application/json': { schema: InvalidS3PrefixExceptionSchema } },
      },
      487: {
        description: 'InvalidSnsTopicNameException',
        content: { 'application/json': { schema: InvalidSnsTopicNameExceptionSchema } },
      },
      488: {
        description: 'InvalidKmsKeyIdException',
        content: { 'application/json': { schema: InvalidKmsKeyIdExceptionSchema } },
      },
      489: {
        description: 'InvalidTrailNameException',
        content: { 'application/json': { schema: InvalidTrailNameExceptionSchema } },
      },
      490: {
        description: 'TrailNotProvidedException',
        content: { 'application/json': { schema: TrailNotProvidedExceptionSchema } },
      },
      491: {
        description: 'InvalidEventSelectorsException',
        content: { 'application/json': { schema: InvalidEventSelectorsExceptionSchema } },
      },
      492: {
        description: 'CloudTrailARNInvalidException',
        content: { 'application/json': { schema: CloudTrailARNInvalidExceptionSchema } },
      },
      493: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      494: {
        description: 'InvalidParameterCombinationException',
        content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
      },
      495: {
        description: 'InvalidHomeRegionException',
        content: { 'application/json': { schema: InvalidHomeRegionExceptionSchema } },
      },
      496: {
        description: 'KmsKeyNotFoundException',
        content: { 'application/json': { schema: KmsKeyNotFoundExceptionSchema } },
      },
      497: {
        description: 'KmsKeyDisabledException',
        content: { 'application/json': { schema: KmsKeyDisabledExceptionSchema } },
      },
      498: {
        description: 'KmsException',
        content: { 'application/json': { schema: KmsExceptionSchema } },
      },
      499: {
        description: 'InvalidCloudWatchLogsLogGroupArnException',
        content: {
          'application/json': { schema: InvalidCloudWatchLogsLogGroupArnExceptionSchema },
        },
      },
      500: {
        description: 'InvalidCloudWatchLogsRoleArnException',
        content: { 'application/json': { schema: InvalidCloudWatchLogsRoleArnExceptionSchema } },
      },
      501: {
        description: 'CloudWatchLogsDeliveryUnavailableException',
        content: {
          'application/json': { schema: CloudWatchLogsDeliveryUnavailableExceptionSchema },
        },
      },
      502: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      503: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      504: {
        description: 'CloudTrailAccessNotEnabledException',
        content: { 'application/json': { schema: CloudTrailAccessNotEnabledExceptionSchema } },
      },
      505: {
        description: 'InsufficientDependencyServiceAccessPermissionException',
        content: {
          'application/json': {
            schema: InsufficientDependencyServiceAccessPermissionExceptionSchema,
          },
        },
      },
      506: {
        description: 'OrganizationsNotInUseException',
        content: { 'application/json': { schema: OrganizationsNotInUseExceptionSchema } },
      },
      507: {
        description: 'NotOrganizationMasterAccountException',
        content: { 'application/json': { schema: NotOrganizationMasterAccountExceptionSchema } },
      },
      508: {
        description: 'OrganizationNotInAllFeaturesModeException',
        content: {
          'application/json': { schema: OrganizationNotInAllFeaturesModeExceptionSchema },
        },
      },
      509: {
        description: 'NoManagementAccountSLRExistsException',
        content: { 'application/json': { schema: NoManagementAccountSLRExistsExceptionSchema } },
      },
      510: {
        description: 'CloudTrailInvalidClientTokenIdException',
        content: { 'application/json': { schema: CloudTrailInvalidClientTokenIdExceptionSchema } },
      },
      511: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
    },
  })
