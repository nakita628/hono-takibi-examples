import { createRoute, z } from '@hono/zod-openapi'

const ArnSchema = z.string().min(1).max(256).openapi('Arn')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const CreateActivityOutputSchema = z
  .object({
    activityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the created activity.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the activity is created.' }),
    ),
  })
  .openapi({ required: ['activityArn', 'creationDate'] })
  .openapi('CreateActivityOutput')

const NameSchema = z.string().min(1).max(80).openapi('Name')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: 'The key of a tag.' })).exactOptional(),
    value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of a tag.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateActivityInputSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the activity to create. This name must be unique for your Amazon Web Services account and region for 90 days. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions"> Limits Related to State Machine Executions</a> in the <i>Step Functions Developer Guide</i>.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of tags to add to a resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateActivityInput' })
  .openapi('CreateActivityInput')

const ActivityLimitExceededSchema = z.any().openapi('ActivityLimitExceeded')

const InvalidNameSchema = z.any().openapi('InvalidName')

const TooManyTagsSchema = z.any().openapi('TooManyTags')

const CreateStateMachineOutputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the created state machine.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the state machine is created.' }),
    ),
    stateMachineVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the created state machine version. If you do not set the <code>publish</code> parameter to <code>true</code>, this field returns null value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn', 'creationDate'] })
  .openapi('CreateStateMachineOutput')

const DefinitionSchema = z.string().min(1).max(1048576).openapi('Definition')

const StateMachineTypeSchema = z.enum(['STANDARD', 'EXPRESS']).openapi('StateMachineType')

const LogLevelSchema = z.enum(['ALL', 'ERROR', 'FATAL', 'OFF']).openapi('LogLevel')

const IncludeExecutionDataSchema = z.boolean().openapi('IncludeExecutionData')

const CloudWatchLogsLogGroupSchema = z
  .object({
    logGroupArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN must end with <code>:*</code> ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('CloudWatchLogsLogGroup')

const LogDestinationSchema = z
  .object({
    cloudWatchLogsLogGroup: CloudWatchLogsLogGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object describing a CloudWatch log group. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">AWS::Logs::LogGroup</a> in the CloudFormation User Guide.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('LogDestination')

const LogDestinationListSchema = z.array(LogDestinationSchema).openapi('LogDestinationList')

const LoggingConfigurationSchema = z
  .object({
    level: LogLevelSchema.and(
      z
        .any()
        .openapi({ description: 'Defines which category of execution history events are logged.' }),
    ).exactOptional(),
    includeExecutionData: IncludeExecutionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether execution data is included in your log. When set to <code>false</code>, data is excluded.',
        }),
    ).exactOptional(),
    destinations: LogDestinationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describes where your execution history events will be logged. Limited to size 1. Required, if your log level is not set to <code>OFF</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.',
    required: [],
  })
  .openapi('LoggingConfiguration')

const EnabledSchema = z.boolean().openapi('Enabled')

const TracingConfigurationSchema = z
  .object({
    enabled: EnabledSchema.and(
      z.any().openapi({ description: 'When set to <code>true</code>, X-Ray tracing is enabled.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Selects whether or not the state machine's X-Ray tracing is enabled. Default is <code>false</code> ",
    required: [],
  })
  .openapi('TracingConfiguration')

const PublishSchema = z.boolean().openapi('Publish')

const VersionDescriptionSchema = z.string().max(256).openapi('VersionDescription')

const CreateStateMachineInputSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the state machine. </p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    definition: DefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.',
        }),
    ),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to use for this state machine.',
        }),
    ),
    type: StateMachineTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether a Standard or Express state machine is created. The default is <code>STANDARD</code>. You cannot update the <code>type</code> of a state machine once it has been created.',
        }),
    ).exactOptional(),
    loggingConfiguration: LoggingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines what execution history events are logged and where they are logged.</p> <note> <p>By default, the <code>level</code> is set to <code>OFF</code>. For more information see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html">Log Levels</a> in the Step Functions User Guide.</p> </note>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags to be added when creating a state machine.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>',
        }),
    ).exactOptional(),
    tracingConfiguration: TracingConfigurationSchema.and(
      z.any().openapi({ description: 'Selects whether X-Ray tracing is enabled.' }),
    ).exactOptional(),
    publish: PublishSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to publish the first version of the state machine during creation. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    versionDescription: VersionDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets description about the state machine version. You can only set the description if the <code>publish</code> parameter is set to <code>true</code>. Otherwise, if you set <code>versionDescription</code>, but <code>publish</code> to <code>false</code>, this API action throws <code>ValidationException</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'definition', 'roleArn'], title: 'CreateStateMachineInput' })
  .openapi('CreateStateMachineInput')

const InvalidArnSchema = z.any().openapi('InvalidArn')

const InvalidDefinitionSchema = z.any().openapi('InvalidDefinition')

const InvalidLoggingConfigurationSchema = z.any().openapi('InvalidLoggingConfiguration')

const InvalidTracingConfigurationSchema = z.any().openapi('InvalidTracingConfiguration')

const StateMachineAlreadyExistsSchema = z.any().openapi('StateMachineAlreadyExists')

const StateMachineDeletingSchema = z.any().openapi('StateMachineDeleting')

const StateMachineLimitExceededSchema = z.any().openapi('StateMachineLimitExceeded')

const StateMachineTypeNotSupportedSchema = z.any().openapi('StateMachineTypeNotSupported')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const CreateStateMachineAliasOutputSchema = z
  .object({
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the created state machine alias.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the state machine alias was created.' }),
    ),
  })
  .openapi({ required: ['stateMachineAliasArn', 'creationDate'] })
  .openapi('CreateStateMachineAliasOutput')

const AliasDescriptionSchema = z.string().max(256).openapi('AliasDescription')

const CharacterRestrictedNameSchema = z
  .string()
  .regex(/^(?=.*[a-zA-Z_\-\.])[a-zA-Z0-9_\-\.]+$/)
  .min(1)
  .max(80)
  .openapi('CharacterRestrictedName')

const VersionWeightSchema = z.int().min(0).max(100).openapi('VersionWeight')

const RoutingConfigurationListItemSchema = z
  .object({
    stateMachineVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.</p> <p>If you specify the ARN of a second version, it must belong to the same state machine as the first version.</p>',
        }),
    ),
    weight: VersionWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of traffic you want to route to the second state machine version. The sum of the weights in the routing configuration must be equal to 100.',
        }),
    ),
  })
  .openapi({
    required: ['stateMachineVersionArn', 'weight'],
    description:
      'Contains details about the routing configuration of a state machine alias. In a routing configuration, you define an array of objects that specify up to two state machine versions. You also specify the percentage of traffic to be routed to each version.',
  })
  .openapi('RoutingConfigurationListItem')

const RoutingConfigurationListSchema = z
  .array(RoutingConfigurationListItemSchema)
  .min(1)
  .max(2)
  .openapi('RoutingConfigurationList')

const CreateStateMachineAliasInputSchema = z
  .object({
    description: AliasDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the state machine alias.' }),
    ).exactOptional(),
    name: CharacterRestrictedNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the state machine alias.</p> <p>To avoid conflict with version ARNs, don't use an integer in the name of the alias.</p>",
        }),
    ),
    routingConfiguration: RoutingConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The routing configuration of a state machine alias. The routing configuration shifts execution traffic between two state machine versions. <code>routingConfiguration</code> contains an array of <code>RoutingConfig</code> objects that specify up to two state machine versions. Step Functions then randomly choses which version to run an execution with based on the weight assigned to each <code>RoutingConfig</code>.',
        }),
    ),
  })
  .openapi({ required: ['name', 'routingConfiguration'], title: 'CreateStateMachineAliasInput' })
  .openapi('CreateStateMachineAliasInput')

const ResourceNotFoundSchema = z.any().openapi('ResourceNotFound')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const DeleteActivityOutputSchema = z.object({}).openapi('DeleteActivityOutput')

const DeleteActivityInputSchema = z
  .object({
    activityArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the activity to delete.' }),
    ),
  })
  .openapi({ required: ['activityArn'], title: 'DeleteActivityInput' })
  .openapi('DeleteActivityInput')

const DeleteStateMachineOutputSchema = z.object({}).openapi('DeleteStateMachineOutput')

const DeleteStateMachineInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the state machine to delete.' }),
    ),
  })
  .openapi({ required: ['stateMachineArn'], title: 'DeleteStateMachineInput' })
  .openapi('DeleteStateMachineInput')

const DeleteStateMachineAliasOutputSchema = z.object({}).openapi('DeleteStateMachineAliasOutput')

const DeleteStateMachineAliasInputSchema = z
  .object({
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the state machine alias to delete.',
        }),
    ),
  })
  .openapi({ required: ['stateMachineAliasArn'], title: 'DeleteStateMachineAliasInput' })
  .openapi('DeleteStateMachineAliasInput')

const DeleteStateMachineVersionOutputSchema = z
  .object({})
  .openapi('DeleteStateMachineVersionOutput')

const LongArnSchema = z.string().min(1).max(2000).openapi('LongArn')

const DeleteStateMachineVersionInputSchema = z
  .object({
    stateMachineVersionArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the state machine version to delete.',
        }),
    ),
  })
  .openapi({ required: ['stateMachineVersionArn'], title: 'DeleteStateMachineVersionInput' })
  .openapi('DeleteStateMachineVersionInput')

const DescribeActivityOutputSchema = z
  .object({
    activityArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) that identifies the activity.' }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the activity.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the activity is created.' }),
    ),
  })
  .openapi({ required: ['activityArn', 'name', 'creationDate'] })
  .openapi('DescribeActivityOutput')

const DescribeActivityInputSchema = z
  .object({
    activityArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the activity to describe.' }),
    ),
  })
  .openapi({ required: ['activityArn'], title: 'DescribeActivityInput' })
  .openapi('DescribeActivityInput')

const ActivityDoesNotExistSchema = z.any().openapi('ActivityDoesNotExist')

const ExecutionStatusSchema = z
  .enum(['RUNNING', 'SUCCEEDED', 'FAILED', 'TIMED_OUT', 'ABORTED'])
  .openapi('ExecutionStatus')

const SensitiveDataSchema = z.string().max(262144).openapi('SensitiveData')

const IncludedDetailsSchema = z.boolean().openapi('IncludedDetails')

const CloudWatchEventsExecutionDataDetailsSchema = z
  .object({
    included: IncludedDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether input or output was included in the response. Always <code>true</code> for API calls. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides details about execution input or output.', required: [] })
  .openapi('CloudWatchEventsExecutionDataDetails')

const TraceHeaderSchema = z
  .string()
  .regex(/\p{ASCII}*/u)
  .min(0)
  .max(256)
  .openapi('TraceHeader')

const SensitiveErrorSchema = z.string().min(0).max(256).openapi('SensitiveError')

const SensitiveCauseSchema = z.string().min(0).max(32768).openapi('SensitiveCause')

const DescribeExecutionOutputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) that identifies the execution.' }),
    ),
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the executed stated machine.' }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the execution.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ).exactOptional(),
    status: ExecutionStatusSchema.and(
      z.any().openapi({ description: 'The current status of the execution.' }),
    ),
    startDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the execution is started.' }),
    ),
    stopDate: TimestampSchema.and(
      z.any().openapi({ description: 'If the execution ended, the date the execution stopped.' }),
    ).exactOptional(),
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    inputDetails: CloudWatchEventsExecutionDataDetailsSchema.exactOptional(),
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p> <note> <p>This field is set only if the execution succeeds. If the execution fails, this field is null.</p> </note>',
        }),
    ).exactOptional(),
    outputDetails: CloudWatchEventsExecutionDataDetailsSchema.exactOptional(),
    traceHeader: TraceHeaderSchema.and(
      z.any().openapi({ description: 'The X-Ray trace header that was passed to the execution.' }),
    ).exactOptional(),
    mapRunArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution.',
        }),
    ).exactOptional(),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error string if the state machine execution failed.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'The cause string if the state machine execution failed.' }),
    ).exactOptional(),
    stateMachineVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the state machine version associated with the execution. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p> <p>If you start an execution from a <code>StartExecution</code> request without specifying a state machine version or alias ARN, Step Functions returns a null value.</p>',
        }),
    ).exactOptional(),
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, <code>stateMachineARN:PROD</code>.</p> <p>If you start an execution from a <code>StartExecution</code> request with a state machine version ARN, this field will be null.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['executionArn', 'stateMachineArn', 'status', 'startDate'] })
  .openapi('DescribeExecutionOutput')

const DescribeExecutionInputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the execution to describe.' }),
    ),
  })
  .openapi({ required: ['executionArn'], title: 'DescribeExecutionInput' })
  .openapi('DescribeExecutionInput')

const ExecutionDoesNotExistSchema = z.any().openapi('ExecutionDoesNotExist')

const MapRunStatusSchema = z
  .enum(['RUNNING', 'SUCCEEDED', 'FAILED', 'ABORTED'])
  .openapi('MapRunStatus')

const MaxConcurrencySchema = z.int().min(0).openapi('MaxConcurrency')

const ToleratedFailurePercentageSchema = z
  .float32()
  .min(0)
  .max(100)
  .openapi('ToleratedFailurePercentage')

const ToleratedFailureCountSchema = z.int().min(0).openapi('ToleratedFailureCount')

const UnsignedLongSchema = z.int().min(0).openapi('UnsignedLong')

const MapRunItemCountsSchema = z
  .object({
    pending: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of items to process in child workflow executions that haven't started running yet.",
        }),
    ),
    running: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items being processed in child workflow executions that are currently in-progress.',
        }),
    ),
    succeeded: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items processed in child workflow executions that have completed successfully.',
        }),
    ),
    failed: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items processed in child workflow executions that have failed.',
        }),
    ),
    timedOut: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items processed in child workflow executions that have timed out.',
        }),
    ),
    aborted: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items processed in child workflow executions that were either stopped by the user or by Step Functions, because the Map Run failed.',
        }),
    ),
    total: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items processed in all the child workflow executions started by a Map Run.',
        }),
    ),
    resultsWritten: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the count of items whose results were written by <code>ResultWriter</code>. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultwriter.html">ResultWriter</a> in the <i>Step Functions Developer Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: [
      'pending',
      'running',
      'succeeded',
      'failed',
      'timedOut',
      'aborted',
      'total',
      'resultsWritten',
    ],
    description:
      'Contains details about items that were processed in all of the child workflow executions that were started by a Map Run.',
  })
  .openapi('MapRunItemCounts')

const MapRunExecutionCountsSchema = z
  .object({
    pending: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of child workflow executions that were started by a Map Run, but haven't started executing yet. ",
        }),
    ),
    running: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of child workflow executions that were started by a Map Run and are currently in-progress.',
        }),
    ),
    succeeded: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of child workflow executions that were started by a Map Run and have completed successfully.',
        }),
    ),
    failed: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of child workflow executions that were started by a Map Run, but have failed.',
        }),
    ),
    timedOut: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of child workflow executions that were started by a Map Run and have timed out.',
        }),
    ),
    aborted: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of child workflow executions that were started by a Map Run and were running, but were either stopped by the user or by Step Functions because the Map Run failed. ',
        }),
    ),
    total: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of child workflow executions that were started by a Map Run.',
        }),
    ),
    resultsWritten: UnsignedLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the count of child workflow executions whose results were written by <code>ResultWriter</code>. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultwriter.html">ResultWriter</a> in the <i>Step Functions Developer Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: [
      'pending',
      'running',
      'succeeded',
      'failed',
      'timedOut',
      'aborted',
      'total',
      'resultsWritten',
    ],
    description:
      'Contains details about all of the child workflow executions started by a Map Run.',
  })
  .openapi('MapRunExecutionCounts')

const DescribeMapRunOutputSchema = z
  .object({
    mapRunArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) that identifies a Map Run.' }),
    ),
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started.',
        }),
    ),
    status: MapRunStatusSchema.and(
      z.any().openapi({ description: 'The current status of the Map Run.' }),
    ),
    startDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the Map Run was started.' }),
    ),
    stopDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the Map Run was stopped.' }),
    ).exactOptional(),
    maxConcurrency: MaxConcurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of child workflow executions configured to run in parallel for the Map Run at the same time.',
        }),
    ),
    toleratedFailurePercentage: ToleratedFailurePercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum percentage of failed child workflow executions before the Map Run fails.',
        }),
    ),
    toleratedFailureCount: ToleratedFailureCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of failed child workflow executions before the Map Run fails.',
        }),
    ),
    itemCounts: MapRunItemCountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON object that contains information about the total number of items, and the item count for each processing status, such as <code>pending</code> and <code>failed</code>.',
        }),
    ),
    executionCounts: MapRunExecutionCountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON object that contains information about the total number of child workflow executions for the Map Run, and the count of child workflow executions for each status, such as <code>failed</code> and <code>succeeded</code>.',
        }),
    ),
  })
  .openapi({
    required: [
      'mapRunArn',
      'executionArn',
      'status',
      'startDate',
      'maxConcurrency',
      'toleratedFailurePercentage',
      'toleratedFailureCount',
      'itemCounts',
      'executionCounts',
    ],
  })
  .openapi('DescribeMapRunOutput')

const DescribeMapRunInputSchema = z
  .object({
    mapRunArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) that identifies a Map Run.' }),
    ),
  })
  .openapi({ required: ['mapRunArn'], title: 'DescribeMapRunInput' })
  .openapi('DescribeMapRunInput')

const StateMachineStatusSchema = z.enum(['ACTIVE', 'DELETING']).openapi('StateMachineStatus')

const MapRunLabelSchema = z.string().openapi('MapRunLabel')

const RevisionIdSchema = z.string().openapi('RevisionId')

const DescribeStateMachineOutputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that identifies the state machine.</p> <p>If you specified a state machine version ARN in your request, the API returns the version ARN. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p>',
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the state machine.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    status: StateMachineStatusSchema.and(
      z.any().openapi({ description: 'The current status of the state machine.' }),
    ).exactOptional(),
    definition: DefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.',
        }),
    ),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used when creating this state machine. (The IAM role maintains security by granting Step Functions access to Amazon Web Services resources.)',
        }),
    ),
    type: StateMachineTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>type</code> of the state machine (<code>STANDARD</code> or <code>EXPRESS</code>).',
        }),
    ),
    creationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date the state machine is created.</p> <p>For a state machine version, <code>creationDate</code> is the date the version was created.</p>',
        }),
    ),
    loggingConfiguration: LoggingConfigurationSchema.exactOptional(),
    tracingConfiguration: TracingConfigurationSchema.and(
      z.any().openapi({ description: 'Selects whether X-Ray tracing is enabled.' }),
    ).exactOptional(),
    label: MapRunLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-defined or an auto-generated string that identifies a <code>Map</code> state. This parameter is present only if the <code>stateMachineArn</code> specified in input is a qualified state machine ARN.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The revision identifier for the state machine.</p> <p>Use the <code>revisionId</code> parameter to compare between versions of a state machine configuration used for executions without performing a diff of the properties, such as <code>definition</code> and <code>roleArn</code>.</p>',
        }),
    ).exactOptional(),
    description: VersionDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the state machine version.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['stateMachineArn', 'name', 'definition', 'roleArn', 'type', 'creationDate'],
  })
  .openapi('DescribeStateMachineOutput')

const DescribeStateMachineInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the state machine for which you want the information.</p> <p>If you specify a state machine version ARN, this API returns details about that version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.</p>',
        }),
    ),
  })
  .openapi({ required: ['stateMachineArn'], title: 'DescribeStateMachineInput' })
  .openapi('DescribeStateMachineInput')

const StateMachineDoesNotExistSchema = z.any().openapi('StateMachineDoesNotExist')

const DescribeStateMachineAliasOutputSchema = z
  .object({
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the state machine alias.' }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the state machine alias.' }),
    ).exactOptional(),
    description: AliasDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alias.' }),
    ).exactOptional(),
    routingConfiguration: RoutingConfigurationListSchema.and(
      z.any().openapi({ description: 'The routing configuration of the alias.' }),
    ).exactOptional(),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the state machine alias was created.' }),
    ).exactOptional(),
    updateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date the state machine alias was last updated.</p> <p>For a newly created state machine, this is the same as the creation date.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeStateMachineAliasOutput')

const DescribeStateMachineAliasInputSchema = z
  .object({
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the state machine alias.' }),
    ),
  })
  .openapi({ required: ['stateMachineAliasArn'], title: 'DescribeStateMachineAliasInput' })
  .openapi('DescribeStateMachineAliasInput')

const DescribeStateMachineForExecutionOutputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the state machine associated with the execution.',
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the state machine associated with the execution.' }),
    ),
    definition: DefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.',
        }),
    ),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution. ',
        }),
    ),
    updateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time the state machine associated with an execution was updated. For a newly created state machine, this is the creation date.',
        }),
    ),
    loggingConfiguration: LoggingConfigurationSchema.exactOptional(),
    tracingConfiguration: TracingConfigurationSchema.and(
      z.any().openapi({ description: 'Selects whether X-Ray tracing is enabled.' }),
    ).exactOptional(),
    mapRunArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Map Run that started the child workflow execution. This field is returned only if the <code>executionArn</code> is a child workflow execution that was started by a Distributed Map state.',
        }),
    ).exactOptional(),
    label: MapRunLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-defined or an auto-generated string that identifies a <code>Map</code> state. This ﬁeld is returned only if the <code>executionArn</code> is a child workflow execution that was started by a Distributed Map state.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The revision identifier for the state machine. The first revision ID when you create the state machine is null.</p> <p>Use the state machine <code>revisionId</code> parameter to compare the revision of a state machine with the configuration of the state machine used for executions without performing a diff of the properties, such as <code>definition</code> and <code>roleArn</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn', 'name', 'definition', 'roleArn', 'updateDate'] })
  .openapi('DescribeStateMachineForExecutionOutput')

const DescribeStateMachineForExecutionInputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the execution you want state machine information for.',
        }),
    ),
  })
  .openapi({ required: ['executionArn'], title: 'DescribeStateMachineForExecutionInput' })
  .openapi('DescribeStateMachineForExecutionInput')

const TaskTokenSchema = z.string().min(1).max(1024).openapi('TaskToken')

const SensitiveDataJobInputSchema = z.string().max(262144).openapi('SensitiveDataJobInput')

const GetActivityTaskOutputSchema = z
  .object({
    taskToken: TaskTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that identifies the scheduled task. This token must be copied and included in subsequent calls to <a>SendTaskHeartbeat</a>, <a>SendTaskSuccess</a> or <a>SendTaskFailure</a> in order to report the progress or completion of the task.',
        }),
    ).exactOptional(),
    input: SensitiveDataJobInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that contains the JSON input data for the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetActivityTaskOutput')

const GetActivityTaskInputSchema = z
  .object({
    activityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task using <a>CreateActivity</a>.)',
        }),
    ),
    workerName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can provide an arbitrary name in order to identify the worker that the task is assigned to. This name is used when it is logged in the execution history.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['activityArn'], title: 'GetActivityTaskInput' })
  .openapi('GetActivityTaskInput')

const ActivityWorkerLimitExceededSchema = z.any().openapi('ActivityWorkerLimitExceeded')

const HistoryEventTypeSchema = z
  .enum([
    'ActivityFailed',
    'ActivityScheduled',
    'ActivityScheduleFailed',
    'ActivityStarted',
    'ActivitySucceeded',
    'ActivityTimedOut',
    'ChoiceStateEntered',
    'ChoiceStateExited',
    'ExecutionAborted',
    'ExecutionFailed',
    'ExecutionStarted',
    'ExecutionSucceeded',
    'ExecutionTimedOut',
    'FailStateEntered',
    'LambdaFunctionFailed',
    'LambdaFunctionScheduled',
    'LambdaFunctionScheduleFailed',
    'LambdaFunctionStarted',
    'LambdaFunctionStartFailed',
    'LambdaFunctionSucceeded',
    'LambdaFunctionTimedOut',
    'MapIterationAborted',
    'MapIterationFailed',
    'MapIterationStarted',
    'MapIterationSucceeded',
    'MapStateAborted',
    'MapStateEntered',
    'MapStateExited',
    'MapStateFailed',
    'MapStateStarted',
    'MapStateSucceeded',
    'ParallelStateAborted',
    'ParallelStateEntered',
    'ParallelStateExited',
    'ParallelStateFailed',
    'ParallelStateStarted',
    'ParallelStateSucceeded',
    'PassStateEntered',
    'PassStateExited',
    'SucceedStateEntered',
    'SucceedStateExited',
    'TaskFailed',
    'TaskScheduled',
    'TaskStarted',
    'TaskStartFailed',
    'TaskStateAborted',
    'TaskStateEntered',
    'TaskStateExited',
    'TaskSubmitFailed',
    'TaskSubmitted',
    'TaskSucceeded',
    'TaskTimedOut',
    'WaitStateAborted',
    'WaitStateEntered',
    'WaitStateExited',
    'MapRunAborted',
    'MapRunFailed',
    'MapRunStarted',
    'MapRunSucceeded',
  ])
  .openapi('HistoryEventType')

const EventIdSchema = z.int().openapi('EventId')

const ActivityFailedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about an activity that failed during an execution.',
    required: [],
  })
  .openapi('ActivityFailedEventDetails')

const ActivityScheduleFailedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about an activity schedule failure that occurred during an execution.',
    required: [],
  })
  .openapi('ActivityScheduleFailedEventDetails')

const TruncatedSchema = z.boolean().openapi('Truncated')

const HistoryEventExecutionDataDetailsSchema = z
  .object({
    truncated: TruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether input or output was truncated in the response. Always <code>false</code> for API calls.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides details about input or output in an execution history event.',
    required: [],
  })
  .openapi('HistoryEventExecutionDataDetails')

const TimeoutInSecondsSchema = z.int().openapi('TimeoutInSeconds')

const ActivityScheduledEventDetailsSchema = z
  .object({
    resource: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the scheduled activity.' }),
    ),
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data input to the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    inputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the input for an execution history event.',
        }),
    ).exactOptional(),
    timeoutInSeconds: TimeoutInSecondsSchema.and(
      z.any().openapi({ description: 'The maximum allowed duration of the activity task.' }),
    ).exactOptional(),
    heartbeatInSeconds: TimeoutInSecondsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum allowed duration between two heartbeats for the activity task.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resource'],
    description: 'Contains details about an activity scheduled during an execution.',
  })
  .openapi('ActivityScheduledEventDetails')

const IdentitySchema = z.string().max(256).openapi('Identity')

const ActivityStartedEventDetailsSchema = z
  .object({
    workerName: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the worker that the task is assigned to. These names are provided by the workers when calling <a>GetActivityTask</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the start of an activity during an execution.',
    required: [],
  })
  .openapi('ActivityStartedEventDetails')

const ActivitySucceededEventDetailsSchema = z
  .object({
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data output by the activity task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    outputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the output of an execution history event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about an activity that successfully terminated during an execution.',
    required: [],
  })
  .openapi('ActivitySucceededEventDetails')

const ActivityTimedOutEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the timeout.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about an activity timeout that occurred during an execution.',
    required: [],
  })
  .openapi('ActivityTimedOutEventDetails')

const TaskFailedEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resource'],
    description: 'Contains details about a task failure event.',
  })
  .openapi('TaskFailedEventDetails')

const ConnectorParametersSchema = z.string().min(0).max(262144).openapi('ConnectorParameters')

const TaskCredentialsSchema = z
  .object({
    roleArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role that Step Functions assumes for the task. The role can allow cross-account access to resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the credentials that Step Functions uses for a task.',
    required: [],
  })
  .openapi('TaskCredentials')

const TaskScheduledEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
    region: NameSchema.and(z.any().openapi({ description: 'The region of the scheduled task' })),
    parameters: ConnectorParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data passed to the resource referenced in a task state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ),
    timeoutInSeconds: TimeoutInSecondsSchema.and(
      z.any().openapi({ description: 'The maximum allowed duration of the task.' }),
    ).exactOptional(),
    heartbeatInSeconds: TimeoutInSecondsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum allowed duration between two heartbeats for the task.',
        }),
    ).exactOptional(),
    taskCredentials: TaskCredentialsSchema.and(
      z.any().openapi({ description: 'The credentials that Step Functions uses for the task.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resource', 'region', 'parameters'],
    description: 'Contains details about a task scheduled during an execution.',
  })
  .openapi('TaskScheduledEventDetails')

const TaskStartFailedEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resource'],
    description: 'Contains details about a task that failed to start during an execution.',
  })
  .openapi('TaskStartFailedEventDetails')

const TaskStartedEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
  })
  .openapi({
    required: ['resourceType', 'resource'],
    description: 'Contains details about the start of a task during an execution.',
  })
  .openapi('TaskStartedEventDetails')

const TaskSubmitFailedEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resource'],
    description: 'Contains details about a task that failed to submit during an execution.',
  })
  .openapi('TaskSubmitFailedEventDetails')

const TaskSubmittedEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response from a resource when a task has started. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    outputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the output of an execution history event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resource'],
    description: 'Contains details about a task submitted to a resource .',
  })
  .openapi('TaskSubmittedEventDetails')

const TaskSucceededEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full JSON response from a resource when a task has succeeded. This response becomes the output of the related task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    outputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the output of an execution history event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resource'],
    description: 'Contains details about the successful completion of a task state.',
  })
  .openapi('TaskSucceededEventDetails')

const TaskTimedOutEventDetailsSchema = z
  .object({
    resourceType: NameSchema.and(
      z.any().openapi({ description: 'The service name of the resource in a task state.' }),
    ),
    resource: NameSchema.and(
      z.any().openapi({ description: 'The action of the resource called by a task state.' }),
    ),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resource'],
    description: 'Contains details about a resource timeout that occurred during an execution.',
  })
  .openapi('TaskTimedOutEventDetails')

const ExecutionFailedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details about an execution failure event.', required: [] })
  .openapi('ExecutionFailedEventDetails')

const ExecutionStartedEventDetailsSchema = z
  .object({
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data input to the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    inputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the input for an execution history event.',
        }),
    ).exactOptional(),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used for executing Lambda tasks.',
        }),
    ).exactOptional(),
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies a state machine alias used for starting the state machine execution.',
        }),
    ).exactOptional(),
    stateMachineVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies a state machine version used for starting the state machine execution.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details about the start of the execution.', required: [] })
  .openapi('ExecutionStartedEventDetails')

const ExecutionSucceededEventDetailsSchema = z
  .object({
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data output by the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    outputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the output of an execution history event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the successful termination of the execution.',
    required: [],
  })
  .openapi('ExecutionSucceededEventDetails')

const ExecutionAbortedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details about an abort of an execution.', required: [] })
  .openapi('ExecutionAbortedEventDetails')

const ExecutionTimedOutEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the timeout.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the execution timeout that occurred during the execution.',
    required: [],
  })
  .openapi('ExecutionTimedOutEventDetails')

const UnsignedIntegerSchema = z.int().min(0).openapi('UnsignedInteger')

const MapStateStartedEventDetailsSchema = z
  .object({
    length: UnsignedIntegerSchema.and(
      z.any().openapi({ description: 'The size of the array for Map state iterations.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a Map state that was started.', required: [] })
  .openapi('MapStateStartedEventDetails')

const MapIterationEventDetailsSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the iteration’s parent Map state.' }),
    ).exactOptional(),
    index: UnsignedIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The index of the array belonging to the Map state iteration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains details about an iteration of a Map state.', required: [] })
  .openapi('MapIterationEventDetails')

const LambdaFunctionFailedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about a Lambda function that failed during an execution.',
    required: [],
  })
  .openapi('LambdaFunctionFailedEventDetails')

const LambdaFunctionScheduleFailedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about a failed Lambda function schedule event that occurred during an execution.',
    required: [],
  })
  .openapi('LambdaFunctionScheduleFailedEventDetails')

const LambdaFunctionScheduledEventDetailsSchema = z
  .object({
    resource: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the scheduled Lambda function.',
        }),
    ),
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data input to the Lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    inputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Contains details about input for an execution history event.' }),
    ).exactOptional(),
    timeoutInSeconds: TimeoutInSecondsSchema.and(
      z.any().openapi({ description: 'The maximum allowed duration of the Lambda function.' }),
    ).exactOptional(),
    taskCredentials: TaskCredentialsSchema.and(
      z.any().openapi({ description: 'The credentials that Step Functions uses for the task.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resource'],
    description: 'Contains details about a Lambda function scheduled during an execution.',
  })
  .openapi('LambdaFunctionScheduledEventDetails')

const LambdaFunctionStartFailedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about a lambda function that failed to start during an execution.',
    required: [],
  })
  .openapi('LambdaFunctionStartFailedEventDetails')

const LambdaFunctionSucceededEventDetailsSchema = z
  .object({
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data output by the Lambda function. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    outputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the output of an execution history event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about a Lambda function that successfully terminated during an execution.',
    required: [],
  })
  .openapi('LambdaFunctionSucceededEventDetails')

const LambdaFunctionTimedOutEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the timeout.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about a Lambda function timeout that occurred during an execution.',
    required: [],
  })
  .openapi('LambdaFunctionTimedOutEventDetails')

const StateEnteredEventDetailsSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the state.' })),
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that contains the JSON input data for the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    inputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the input for an execution history event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    description: 'Contains details about a state entered during an execution.',
  })
  .openapi('StateEnteredEventDetails')

const StateExitedEventDetailsSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the state.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    outputDetails: HistoryEventExecutionDataDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the output of an execution history event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    description: 'Contains details about an exit from a state during an execution.',
  })
  .openapi('StateExitedEventDetails')

const MapRunStartedEventDetailsSchema = z
  .object({
    mapRunArn: LongArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of a Map Run that was started.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about a Map Run that was started during a state machine execution.',
    required: [],
  })
  .openapi('MapRunStartedEventDetails')

const MapRunFailedEventDetailsSchema = z
  .object({
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the Map Run failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about a Map Run failure event that occurred during a state machine execution.',
    required: [],
  })
  .openapi('MapRunFailedEventDetails')

const HistoryEventSchema = z
  .object({
    timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the event occurred.' }),
    ),
    type: HistoryEventTypeSchema.and(z.any().openapi({ description: 'The type of the event.' })),
    id: EventIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The id of the event. Events are numbered sequentially, starting at one.',
        }),
    ),
    previousEventId: EventIdSchema.and(
      z.any().openapi({ description: 'The id of the previous event.' }),
    ).exactOptional(),
    activityFailedEventDetails: ActivityFailedEventDetailsSchema.exactOptional(),
    activityScheduleFailedEventDetails: ActivityScheduleFailedEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains details about an activity schedule event that failed during an execution.',
        }),
    ).exactOptional(),
    activityScheduledEventDetails: ActivityScheduledEventDetailsSchema.exactOptional(),
    activityStartedEventDetails: ActivityStartedEventDetailsSchema.exactOptional(),
    activitySucceededEventDetails: ActivitySucceededEventDetailsSchema.exactOptional(),
    activityTimedOutEventDetails: ActivityTimedOutEventDetailsSchema.exactOptional(),
    taskFailedEventDetails: TaskFailedEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about the failure of a task.' }),
    ).exactOptional(),
    taskScheduledEventDetails: TaskScheduledEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about a task that was scheduled.' }),
    ).exactOptional(),
    taskStartFailedEventDetails: TaskStartFailedEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about a task that failed to start.' }),
    ).exactOptional(),
    taskStartedEventDetails: TaskStartedEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about a task that was started.' }),
    ).exactOptional(),
    taskSubmitFailedEventDetails: TaskSubmitFailedEventDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Contains details about a task that where the submit failed.' }),
    ).exactOptional(),
    taskSubmittedEventDetails: TaskSubmittedEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about a submitted task.' }),
    ).exactOptional(),
    taskSucceededEventDetails: TaskSucceededEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about a task that succeeded.' }),
    ).exactOptional(),
    taskTimedOutEventDetails: TaskTimedOutEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about a task that timed out.' }),
    ).exactOptional(),
    executionFailedEventDetails: ExecutionFailedEventDetailsSchema.exactOptional(),
    executionStartedEventDetails: ExecutionStartedEventDetailsSchema.exactOptional(),
    executionSucceededEventDetails: ExecutionSucceededEventDetailsSchema.exactOptional(),
    executionAbortedEventDetails: ExecutionAbortedEventDetailsSchema.exactOptional(),
    executionTimedOutEventDetails: ExecutionTimedOutEventDetailsSchema.exactOptional(),
    mapStateStartedEventDetails: MapStateStartedEventDetailsSchema.and(
      z.any().openapi({ description: 'Contains details about Map state that was started.' }),
    ).exactOptional(),
    mapIterationStartedEventDetails: MapIterationEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about an iteration of a Map state that was started.',
        }),
    ).exactOptional(),
    mapIterationSucceededEventDetails: MapIterationEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about an iteration of a Map state that succeeded.',
        }),
    ).exactOptional(),
    mapIterationFailedEventDetails: MapIterationEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about an iteration of a Map state that failed.',
        }),
    ).exactOptional(),
    mapIterationAbortedEventDetails: MapIterationEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about an iteration of a Map state that was aborted.',
        }),
    ).exactOptional(),
    lambdaFunctionFailedEventDetails: LambdaFunctionFailedEventDetailsSchema.exactOptional(),
    lambdaFunctionScheduleFailedEventDetails:
      LambdaFunctionScheduleFailedEventDetailsSchema.exactOptional(),
    lambdaFunctionScheduledEventDetails: LambdaFunctionScheduledEventDetailsSchema.exactOptional(),
    lambdaFunctionStartFailedEventDetails: LambdaFunctionStartFailedEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains details about a lambda function that failed to start during an execution.',
        }),
    ).exactOptional(),
    lambdaFunctionSucceededEventDetails: LambdaFunctionSucceededEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains details about a Lambda function that terminated successfully during an execution.',
        }),
    ).exactOptional(),
    lambdaFunctionTimedOutEventDetails: LambdaFunctionTimedOutEventDetailsSchema.exactOptional(),
    stateEnteredEventDetails: StateEnteredEventDetailsSchema.exactOptional(),
    stateExitedEventDetails: StateExitedEventDetailsSchema.exactOptional(),
    mapRunStartedEventDetails: MapRunStartedEventDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains details, such as <code>mapRunArn</code>, and the start date and time of a Map Run. <code>mapRunArn</code> is the Amazon Resource Name (ARN) of the Map Run that was started.',
        }),
    ).exactOptional(),
    mapRunFailedEventDetails: MapRunFailedEventDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Contains error and cause details about a Map Run that failed.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['timestamp', 'type', 'id'],
    description: 'Contains details about the events of an execution.',
  })
  .openapi('HistoryEvent')

const HistoryEventListSchema = z
  .array(HistoryEventSchema)
  .openapi({ description: 'Contains details about the events that occurred during an execution.' })
  .openapi('HistoryEventList')

const PageTokenSchema = z.string().min(1).max(1024).openapi('PageToken')

const GetExecutionHistoryOutputSchema = z
  .object({
    events: HistoryEventListSchema.and(
      z.any().openapi({ description: 'The list of events that occurred in the execution.' }),
    ),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['events'] })
  .openapi('GetExecutionHistoryOutput')

const PageSizeSchema = z.int().min(0).max(1000).openapi('PageSize')

const ReverseOrderSchema = z.boolean().openapi('ReverseOrder')

const IncludeExecutionDataGetExecutionHistorySchema = z
  .boolean()
  .openapi('IncludeExecutionDataGetExecutionHistory')

const GetExecutionHistoryInputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the execution.' }),
    ),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>',
        }),
    ).exactOptional(),
    reverseOrder: ReverseOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'Lists events in descending order of their <code>timeStamp</code>.',
        }),
    ).exactOptional(),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
    includeExecutionData: IncludeExecutionDataGetExecutionHistorySchema.and(
      z
        .any()
        .openapi({
          description:
            'You can select whether execution data (input or output of a history event) is returned. The default is <code>true</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['executionArn'], title: 'GetExecutionHistoryInput' })
  .openapi('GetExecutionHistoryInput')

const InvalidTokenSchema = z.any().openapi('InvalidToken')

const ActivityListItemSchema = z
  .object({
    activityArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) that identifies the activity.' }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the activity.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the activity is created.' }),
    ),
  })
  .openapi({
    required: ['activityArn', 'name', 'creationDate'],
    description: 'Contains details about an activity.',
  })
  .openapi('ActivityListItem')

const ActivityListSchema = z.array(ActivityListItemSchema).openapi('ActivityList')

const ListActivitiesOutputSchema = z
  .object({
    activities: ActivityListSchema.and(z.any().openapi({ description: 'The list of activities.' })),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['activities'] })
  .openapi('ListActivitiesOutput')

const ListActivitiesInputSchema = z
  .object({
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>',
        }),
    ).exactOptional(),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListActivitiesInput', required: [] })
  .openapi('ListActivitiesInput')

const ExecutionListItemSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) that identifies the execution.' }),
    ),
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the state machine that ran the execution.',
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the execution.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    status: ExecutionStatusSchema.and(
      z.any().openapi({ description: 'The current status of the execution.' }),
    ),
    startDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the execution started.' }),
    ),
    stopDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'If the execution already ended, the date the execution stopped.',
        }),
    ).exactOptional(),
    mapRunArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of a Map Run. This field is returned only if <code>mapRunArn</code> was specified in the <code>ListExecutions</code> API action. If <code>stateMachineArn</code> was specified in <code>ListExecutions</code>, the <code>mapRunArn</code> isn't returned.",
        }),
    ).exactOptional(),
    itemCount: UnsignedIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of items processed in a child workflow execution. This field is returned only if <code>mapRunArn</code> was specified in the <code>ListExecutions</code> API action. If <code>stateMachineArn</code> was specified in <code>ListExecutions</code>, the <code>itemCount</code> field isn't returned.",
        }),
    ).exactOptional(),
    stateMachineVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the state machine version associated with the execution.</p> <p>If the state machine execution was started with an unqualified ARN, it returns null.</p> <p>If the execution was started using a <code>stateMachineAliasArn</code>, both the <code>stateMachineAliasArn</code> and <code>stateMachineVersionArn</code> parameters contain the respective values.</p>',
        }),
    ).exactOptional(),
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the state machine alias used to start an execution.</p> <p>If the state machine execution was started with an unqualified ARN or a version ARN, it returns null.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['executionArn', 'stateMachineArn', 'name', 'status', 'startDate'],
    description: 'Contains details about an execution.',
  })
  .openapi('ExecutionListItem')

const ExecutionListSchema = z.array(ExecutionListItemSchema).openapi('ExecutionList')

const ListExecutionsPageTokenSchema = z.string().min(1).max(3096).openapi('ListExecutionsPageToken')

const ListExecutionsOutputSchema = z
  .object({
    executions: ExecutionListSchema.and(
      z.any().openapi({ description: 'The list of matching executions.' }),
    ),
    nextToken: ListExecutionsPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['executions'] })
  .openapi('ListExecutionsOutput')

const ListExecutionsInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the state machine whose executions is listed.</p> <p>You can specify either a <code>mapRunArn</code> or a <code>stateMachineArn</code>, but not both.</p> <p>You can also return a list of executions associated with a specific <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, by specifying an alias ARN or a version ARN in the <code>stateMachineArn</code> parameter.</p>',
        }),
    ).exactOptional(),
    statusFilter: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, only list the executions whose current execution status matches the given filter.',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>',
        }),
    ).exactOptional(),
    nextToken: ListExecutionsPageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
    mapRunArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If the <code>mapRunArn</code> field is specified, a list of all of the child workflow executions started by a Map Run is returned. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.</p> <p>You can specify either a <code>mapRunArn</code> or a <code>stateMachineArn</code>, but not both.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListExecutionsInput', required: [] })
  .openapi('ListExecutionsInput')

const MapRunListItemSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>executionArn</code> of the execution from which the Map Run was started.',
        }),
    ),
    mapRunArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Map Run.' }),
    ),
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the executed state machine.' }),
    ),
    startDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date on which the Map Run started.' }),
    ),
    stopDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date on which the Map Run stopped.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['executionArn', 'mapRunArn', 'stateMachineArn', 'startDate'],
    description: 'Contains details about a specific Map Run.',
  })
  .openapi('MapRunListItem')

const MapRunListSchema = z.array(MapRunListItemSchema).openapi('MapRunList')

const ListMapRunsOutputSchema = z
  .object({
    mapRuns: MapRunListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists information related to a Map Run, such as the Amazon Resource Name (ARN) of the Map Run and the ARN of the state machine that started the Map Run.',
        }),
    ),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['mapRuns'] })
  .openapi('ListMapRunsOutput')

const ListMapRunsInputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the execution for which the Map Runs must be listed.',
        }),
    ),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>',
        }),
    ).exactOptional(),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['executionArn'], title: 'ListMapRunsInput' })
  .openapi('ListMapRunsInput')

const StateMachineAliasListItemSchema = z
  .object({
    stateMachineAliasArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies a state machine alias. The alias ARN is a combination of state machine ARN and the alias name separated by a colon (:). For example, <code>stateMachineARN:PROD</code>.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date of a state machine alias.' }),
    ),
  })
  .openapi({
    required: ['stateMachineAliasArn', 'creationDate'],
    description: 'Contains details about a specific state machine alias.',
  })
  .openapi('StateMachineAliasListItem')

const StateMachineAliasListSchema = z
  .array(StateMachineAliasListItemSchema)
  .openapi('StateMachineAliasList')

const ListStateMachineAliasesOutputSchema = z
  .object({
    stateMachineAliases: StateMachineAliasListSchema.and(
      z.any().openapi({ description: 'Aliases for the state machine.' }),
    ),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineAliases'] })
  .openapi('ListStateMachineAliasesOutput')

const ListStateMachineAliasesInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the state machine for which you want to list aliases.</p> <p>If you specify a state machine version ARN, this API returns a list of aliases for that version.</p>',
        }),
    ),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn'], title: 'ListStateMachineAliasesInput' })
  .openapi('ListStateMachineAliasesInput')

const StateMachineVersionListItemSchema = z
  .object({
    stateMachineVersionArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies a state machine version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, <code>stateMachineARN:1</code>.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date of a state machine version.' }),
    ),
  })
  .openapi({
    required: ['stateMachineVersionArn', 'creationDate'],
    description: 'Contains details about a specific state machine version.',
  })
  .openapi('StateMachineVersionListItem')

const StateMachineVersionListSchema = z
  .array(StateMachineVersionListItemSchema)
  .openapi('StateMachineVersionList')

const ListStateMachineVersionsOutputSchema = z
  .object({
    stateMachineVersions: StateMachineVersionListSchema.and(
      z.any().openapi({ description: 'Versions for the state machine.' }),
    ),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineVersions'] })
  .openapi('ListStateMachineVersionsOutput')

const ListStateMachineVersionsInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the state machine.' }),
    ),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn'], title: 'ListStateMachineVersionsInput' })
  .openapi('ListStateMachineVersionsInput')

const StateMachineListItemSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the state machine.',
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the state machine.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ),
    type: StateMachineTypeSchema.and(z.any().openapi({ description: '<p/>' })),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the state machine is created.' }),
    ),
  })
  .openapi({
    required: ['stateMachineArn', 'name', 'type', 'creationDate'],
    description: 'Contains details about the state machine.',
  })
  .openapi('StateMachineListItem')

const StateMachineListSchema = z.array(StateMachineListItemSchema).openapi('StateMachineList')

const ListStateMachinesOutputSchema = z
  .object({
    stateMachines: StateMachineListSchema,
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachines'] })
  .openapi('ListStateMachinesOutput')

const ListStateMachinesInputSchema = z
  .object({
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>',
        }),
    ).exactOptional(),
    nextToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListStateMachinesInput', required: [] })
  .openapi('ListStateMachinesInput')

const ListTagsForResourceOutputSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'An array of tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const ListTagsForResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the Step Functions state machine or activity.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const PublishStateMachineVersionOutputSchema = z
  .object({
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the version was created.' }),
    ),
    stateMachineVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) (ARN) that identifies the state machine version.',
        }),
    ),
  })
  .openapi({ required: ['creationDate', 'stateMachineVersionArn'] })
  .openapi('PublishStateMachineVersionOutput')

const PublishStateMachineVersionInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the state machine.' }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Only publish the state machine version if the current state machine's revision ID matches the specified ID.</p> <p>Use this option to avoid publishing a version if the state machine changed since you last updated it. If the specified revision ID doesn't match the state machine's current revision ID, the API returns <code>ConflictException</code>.</p> <note> <p>To specify an initial revision ID for a state machine with no revision ID assigned, specify the string <code>INITIAL</code> for the <code>revisionId</code> parameter. For example, you can specify a <code>revisionID</code> of <code>INITIAL</code> when you create a state machine using the <a>CreateStateMachine</a> API action.</p> </note>",
        }),
    ).exactOptional(),
    description: VersionDescriptionSchema.and(
      z.any().openapi({ description: 'An optional description of the state machine version.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn'], title: 'PublishStateMachineVersionInput' })
  .openapi('PublishStateMachineVersionInput')

const SendTaskFailureOutputSchema = z.object({}).openapi('SendTaskFailureOutput')

const SendTaskFailureInputSchema = z
  .object({
    taskToken: TaskTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.',
        }),
    ),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['taskToken'], title: 'SendTaskFailureInput' })
  .openapi('SendTaskFailureInput')

const TaskDoesNotExistSchema = z.any().openapi('TaskDoesNotExist')

const TaskTimedOutSchema = z.any().openapi('TaskTimedOut')

const SendTaskHeartbeatOutputSchema = z.object({}).openapi('SendTaskHeartbeatOutput')

const SendTaskHeartbeatInputSchema = z
  .object({
    taskToken: TaskTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['taskToken'], title: 'SendTaskHeartbeatInput' })
  .openapi('SendTaskHeartbeatInput')

const SendTaskSuccessOutputSchema = z.object({}).openapi('SendTaskSuccessOutput')

const SendTaskSuccessInputSchema = z
  .object({
    taskToken: TaskTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/input-output-contextobject.html">context object</a> when a workflow enters a task state. See <a>GetActivityTaskOutput$taskToken</a>.',
        }),
    ),
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON output of the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ),
  })
  .openapi({ required: ['taskToken', 'output'], title: 'SendTaskSuccessInput' })
  .openapi('SendTaskSuccessInput')

const InvalidOutputSchema = z.any().openapi('InvalidOutput')

const StartExecutionOutputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) that identifies the execution.' }),
    ),
    startDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the execution is started.' }),
    ),
  })
  .openapi({ required: ['executionArn', 'startDate'] })
  .openapi('StartExecutionOutput')

const StartExecutionInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the state machine to execute.</p> <p>The <code>stateMachineArn</code> parameter accepts one of the following inputs:</p> <ul> <li> <p> <b>An unqualified state machine ARN</b> – Refers to a state machine ARN that isn't qualified with a version or alias ARN. The following is an example of an unqualified state machine ARN.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> <p>Step Functions doesn't associate state machine executions that you start with an unqualified ARN with a version. This is true even if that version uses the same revision that the execution used.</p> </li> <li> <p> <b>A state machine version ARN</b> – Refers to a version ARN, which is a combination of state machine ARN and the version number separated by a colon (:). The following is an example of the ARN for version 10. </p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;:10</code> </p> <p>Step Functions doesn't associate executions that you start with a version ARN with any aliases that point to that version.</p> </li> <li> <p> <b>A state machine alias ARN</b> – Refers to an alias ARN, which is a combination of state machine ARN and the alias name separated by a colon (:). The following is an example of the ARN for an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <p>Step Functions associates executions that you start with an alias ARN with that alias and the state machine version used for that execution.</p> </li> </ul>",
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional name of the execution. This name must be unique for your Amazon Web Services account, Region, and state machine for 90 days. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html#service-limits-state-machine-executions"> Limits Related to State Machine Executions</a> in the <i>Step Functions Developer Guide</i>.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>white space</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \\ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul> <p>To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.</p>',
        }),
    ).exactOptional(),
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The string that contains the JSON input data for the execution, for example:</p> <p> <code>"input": "{\\"first_name\\" : \\"test\\"}"</code> </p> <note> <p>If you don\'t include any JSON input data, you still must include the two braces, for example: <code>"input": "{}"</code> </p> </note> <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>',
        }),
    ).exactOptional(),
    traceHeader: TraceHeaderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Passes the X-Ray trace header. The trace header can also be passed in the request payload.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn'], title: 'StartExecutionInput' })
  .openapi('StartExecutionInput')

const ExecutionLimitExceededSchema = z.any().openapi('ExecutionLimitExceeded')

const ExecutionAlreadyExistsSchema = z.any().openapi('ExecutionAlreadyExists')

const InvalidExecutionInputSchema = z.any().openapi('InvalidExecutionInput')

const SyncExecutionStatusSchema = z
  .enum(['SUCCEEDED', 'FAILED', 'TIMED_OUT'])
  .openapi('SyncExecutionStatus')

const BilledMemoryUsedSchema = z.int().min(0).openapi('BilledMemoryUsed')

const BilledDurationSchema = z.int().min(0).openapi('BilledDuration')

const BillingDetailsSchema = z
  .object({
    billedMemoryUsedInMB: BilledMemoryUsedSchema.and(
      z.any().openapi({ description: 'Billed memory consumption of your workflow, in MB.' }),
    ).exactOptional(),
    billedDurationInMilliseconds: BilledDurationSchema.and(
      z.any().openapi({ description: 'Billed duration of your workflow, in milliseconds.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that describes workflow billing details.', required: [] })
  .openapi('BillingDetails')

const StartSyncExecutionOutputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) that identifies the execution.' }),
    ),
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that identifies the state machine.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the execution.' }),
    ).exactOptional(),
    startDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the execution is started.' }),
    ),
    stopDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'If the execution has already ended, the date the execution stopped.',
        }),
    ),
    status: SyncExecutionStatusSchema.and(
      z.any().openapi({ description: 'The current status of the execution.' }),
    ),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.',
        }),
    ).exactOptional(),
    inputDetails: CloudWatchEventsExecutionDataDetailsSchema.exactOptional(),
    output: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p> <note> <p>This field is set only if the execution succeeds. If the execution fails, this field is null.</p> </note>',
        }),
    ).exactOptional(),
    outputDetails: CloudWatchEventsExecutionDataDetailsSchema.exactOptional(),
    traceHeader: TraceHeaderSchema.and(
      z.any().openapi({ description: 'The X-Ray trace header that was passed to the execution.' }),
    ).exactOptional(),
    billingDetails: BillingDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes workflow billing details, including billed duration and memory use.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['executionArn', 'startDate', 'stopDate', 'status'] })
  .openapi('StartSyncExecutionOutput')

const StartSyncExecutionInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the state machine to execute.',
        }),
    ),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the execution.' }),
    ).exactOptional(),
    input: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The string that contains the JSON input data for the execution, for example:</p> <p> <code>"input": "{\\"first_name\\" : \\"test\\"}"</code> </p> <note> <p>If you don\'t include any JSON input data, you still must include the two braces, for example: <code>"input": "{}"</code> </p> </note> <p>Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.</p>',
        }),
    ).exactOptional(),
    traceHeader: TraceHeaderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Passes the X-Ray trace header. The trace header can also be passed in the request payload.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn'], title: 'StartSyncExecutionInput' })
  .openapi('StartSyncExecutionInput')

const StopExecutionOutputSchema = z
  .object({
    stopDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the execution is stopped.' }),
    ),
  })
  .openapi({ required: ['stopDate'] })
  .openapi('StopExecutionOutput')

const StopExecutionInputSchema = z
  .object({
    executionArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the execution to stop.' }),
    ),
    error: SensitiveErrorSchema.and(
      z.any().openapi({ description: 'The error code of the failure.' }),
    ).exactOptional(),
    cause: SensitiveCauseSchema.and(
      z.any().openapi({ description: 'A more detailed explanation of the cause of the failure.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['executionArn'], title: 'StopExecutionInput' })
  .openapi('StopExecutionInput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the Step Functions state machine or activity.',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of tags to add to a resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>',
        }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the Step Functions state machine or activity.',
        }),
    ),
    tagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The list of tags to remove from the resource.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateMapRunOutputSchema = z.object({}).openapi('UpdateMapRunOutput')

const UpdateMapRunInputSchema = z
  .object({
    mapRunArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a Map Run.' }),
    ),
    maxConcurrency: MaxConcurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of child workflow executions that can be specified to run in parallel for the Map Run at the same time.',
        }),
    ).exactOptional(),
    toleratedFailurePercentage: ToleratedFailurePercentageSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum percentage of failed items before the Map Run fails.',
        }),
    ).exactOptional(),
    toleratedFailureCount: ToleratedFailureCountSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of failed items before the Map Run fails.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['mapRunArn'], title: 'UpdateMapRunInput' })
  .openapi('UpdateMapRunInput')

const UpdateStateMachineOutputSchema = z
  .object({
    updateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the state machine was updated.' }),
    ),
    revisionId: RevisionIdSchema.and(
      z.any().openapi({ description: 'The revision identifier for the updated state machine.' }),
    ).exactOptional(),
    stateMachineVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the published state machine version.</p> <p>If the <code>publish</code> parameter isn't set to <code>true</code>, this field returns null.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['updateDate'] })
  .openapi('UpdateStateMachineOutput')

const UpdateStateMachineInputSchema = z
  .object({
    stateMachineArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the state machine.' }),
    ),
    definition: DefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.',
        }),
    ).exactOptional(),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the IAM role of the state machine.',
        }),
    ).exactOptional(),
    loggingConfiguration: LoggingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the <code>LoggingConfiguration</code> data type to set CloudWatch Logs options.',
        }),
    ).exactOptional(),
    tracingConfiguration: TracingConfigurationSchema.and(
      z.any().openapi({ description: 'Selects whether X-Ray tracing is enabled.' }),
    ).exactOptional(),
    publish: PublishSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the state machine version is published. The default is <code>false</code>. To publish a version after updating the state machine, set <code>publish</code> to <code>true</code>.',
        }),
    ).exactOptional(),
    versionDescription: VersionDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An optional description of the state machine version to publish.</p> <p>You can only specify the <code>versionDescription</code> parameter if you've set <code>publish</code> to <code>true</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineArn'], title: 'UpdateStateMachineInput' })
  .openapi('UpdateStateMachineInput')

const MissingRequiredParameterSchema = z.any().openapi('MissingRequiredParameter')

const UpdateStateMachineAliasOutputSchema = z
  .object({
    updateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the state machine alias was updated.' }),
    ),
  })
  .openapi({ required: ['updateDate'] })
  .openapi('UpdateStateMachineAliasOutput')

const UpdateStateMachineAliasInputSchema = z
  .object({
    stateMachineAliasArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the state machine alias.' }),
    ),
    description: AliasDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the state machine alias.' }),
    ).exactOptional(),
    routingConfiguration: RoutingConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The routing configuration of the state machine alias.</p> <p>An array of <code>RoutingConfig</code> objects that specifies up to two state machine versions that the alias starts executions for.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['stateMachineAliasArn'], title: 'UpdateStateMachineAliasInput' })
  .openapi('UpdateStateMachineAliasInput')

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

export const postXAmzTargetAWSStepFunctionsCreateActivityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.CreateActivity',
  description:
    "<p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency check is based on the activity <code>name</code>. If a following request has different <code>tags</code> values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>",
  operationId: 'CreateActivity',
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
        .literal('AWSStepFunctions.CreateActivity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.CreateActivity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateActivityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateActivityOutputSchema } },
    },
    480: {
      description: 'ActivityLimitExceeded',
      content: { 'application/json': { schema: ActivityLimitExceededSchema } },
    },
    481: {
      description: 'InvalidName',
      content: { 'application/json': { schema: InvalidNameSchema } },
    },
    482: {
      description: 'TooManyTags',
      content: { 'application/json': { schema: TooManyTagsSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsCreateStateMachineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.CreateStateMachine',
  description:
    '<p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the Step Functions User Guide.</p> <p>If you set the <code>publish</code> parameter of this API action to <code>true</code>, it publishes version <code>1</code> as the first revision of the state machine.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>\'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, <code>LoggingConfiguration</code>, and <code>TracingConfiguration</code>. The check is also based on the <code>publish</code> and <code>versionDescription</code> parameters. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>',
  operationId: 'CreateStateMachine',
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
        .literal('AWSStepFunctions.CreateStateMachine')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.CreateStateMachine'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateStateMachineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStateMachineOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'InvalidDefinition',
      content: { 'application/json': { schema: InvalidDefinitionSchema } },
    },
    482: {
      description: 'InvalidName',
      content: { 'application/json': { schema: InvalidNameSchema } },
    },
    483: {
      description: 'InvalidLoggingConfiguration',
      content: { 'application/json': { schema: InvalidLoggingConfigurationSchema } },
    },
    484: {
      description: 'InvalidTracingConfiguration',
      content: { 'application/json': { schema: InvalidTracingConfigurationSchema } },
    },
    485: {
      description: 'StateMachineAlreadyExists',
      content: { 'application/json': { schema: StateMachineAlreadyExistsSchema } },
    },
    486: {
      description: 'StateMachineDeleting',
      content: { 'application/json': { schema: StateMachineDeletingSchema } },
    },
    487: {
      description: 'StateMachineLimitExceeded',
      content: { 'application/json': { schema: StateMachineLimitExceededSchema } },
    },
    488: {
      description: 'StateMachineTypeNotSupported',
      content: { 'application/json': { schema: StateMachineTypeNotSupportedSchema } },
    },
    489: {
      description: 'TooManyTags',
      content: { 'application/json': { schema: TooManyTagsSchema } },
    },
    490: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    491: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsCreateStateMachineAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias',
  description:
    '<p>Creates an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> for a state machine that points to one or two <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> of the same state machine. You can set your application to call <a>StartExecution</a> with an alias and update the version the alias uses without changing the client\'s code.</p> <p>You can also map an alias to split <a>StartExecution</a> requests between two versions of a state machine. To do this, add a second <code>RoutingConfig</code> object in the <code>routingConfiguration</code> parameter. You must also specify the percentage of execution run requests each version should receive in both <code>RoutingConfig</code> objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify.</p> <p>To create an alias that points to a single version, specify a single <code>RoutingConfig</code> object with a <code>weight</code> set to 100.</p> <p>You can create up to 100 aliases for each state machine. You must delete unused aliases using the <a>DeleteStateMachineAlias</a> API action.</p> <p> <code>CreateStateMachineAlias</code> is an idempotent API. Step Functions bases the idempotency check on the <code>stateMachineArn</code>, <code>description</code>, <code>name</code>, and <code>routingConfiguration</code> parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate resource.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>',
  operationId: 'CreateStateMachineAlias',
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
        .literal('AWSStepFunctions.CreateStateMachineAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.CreateStateMachineAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateStateMachineAliasInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStateMachineAliasOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'InvalidName',
      content: { 'application/json': { schema: InvalidNameSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'StateMachineDeleting',
      content: { 'application/json': { schema: StateMachineDeletingSchema } },
    },
    484: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDeleteActivityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DeleteActivity',
  description: 'Deletes an activity.',
  operationId: 'DeleteActivity',
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
        .literal('AWSStepFunctions.DeleteActivity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DeleteActivity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteActivityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteActivityOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDeleteStateMachineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachine',
  description:
    '<p>Deletes a state machine. This is an asynchronous operation: It sets the state machine\'s status to <code>DELETING</code> and begins the deletion process. </p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine</code> </p> </li> </ul> <p>This API action also deletes all <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> and <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> associated with a state machine.</p> <note> <p>For <code>EXPRESS</code> state machines, the deletion happens eventually (usually in less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>',
  operationId: 'DeleteStateMachine',
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
        .literal('AWSStepFunctions.DeleteStateMachine')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DeleteStateMachine'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteStateMachineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStateMachineOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDeleteStateMachineAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias',
  description:
    '<p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <p>After you delete a state machine alias, you can\'t use it to start executions. When you delete a state machine alias, Step Functions doesn\'t delete the state machine versions that alias references.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> </ul>',
  operationId: 'DeleteStateMachineAlias',
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
        .literal('AWSStepFunctions.DeleteStateMachineAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DeleteStateMachineAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteStateMachineAliasInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStateMachineAliasOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDeleteStateMachineVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion',
  description:
    '<p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. After you delete a version, you can\'t call <a>StartExecution</a> using that version\'s ARN or use the version with a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <note> <p>Deleting a state machine version won\'t terminate its in-progress executions.</p> </note> <note> <p>You can\'t delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version.</p> </note> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>PublishStateMachineVersion</a> </p> </li> <li> <p> <a>ListStateMachineVersions</a> </p> </li> </ul>',
  operationId: 'DeleteStateMachineVersion',
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
        .literal('AWSStepFunctions.DeleteStateMachineVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DeleteStateMachineVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteStateMachineVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStateMachineVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDescribeActivityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DescribeActivity',
  description:
    '<p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>',
  operationId: 'DescribeActivity',
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
        .literal('AWSStepFunctions.DescribeActivity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DescribeActivity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeActivityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeActivityOutputSchema } },
    },
    480: {
      description: 'ActivityDoesNotExist',
      content: { 'application/json': { schema: ActivityDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDescribeExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DescribeExecution',
  description:
    "<p>Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run.</p> <p>If you specify a version or alias ARN when you call the <a>StartExecution</a> API action, <code>DescribeExecution</code> returns that ARN.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>Executions of an <code>EXPRESS</code> state machinearen't supported by <code>DescribeExecution</code> unless a Map Run dispatched them.</p>",
  operationId: 'DescribeExecution',
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
        .literal('AWSStepFunctions.DescribeExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DescribeExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExecutionOutputSchema } },
    },
    480: {
      description: 'ExecutionDoesNotExist',
      content: { 'application/json': { schema: ExecutionDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDescribeMapRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DescribeMapRun',
  description:
    'Provides information about a Map Run\'s configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.',
  operationId: 'DescribeMapRun',
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
        .literal('AWSStepFunctions.DescribeMapRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DescribeMapRun'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMapRunInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMapRunOutputSchema } },
    },
    480: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDescribeStateMachineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachine',
  description:
    "<p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>This API action returns the details for a state machine version if the <code>stateMachineArn</code> you specify is a state machine version ARN.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>",
  operationId: 'DescribeStateMachine',
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
        .literal('AWSStepFunctions.DescribeStateMachine')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DescribeStateMachine'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStateMachineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStateMachineOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'StateMachineDoesNotExist',
      content: { 'application/json': { schema: StateMachineDoesNotExistSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDescribeStateMachineAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias',
  description:
    '<p>Returns details about a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>',
  operationId: 'DescribeStateMachineAlias',
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
        .literal('AWSStepFunctions.DescribeStateMachineAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DescribeStateMachineAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStateMachineAliasInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStateMachineAliasOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution',
  description:
    "<p>Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>",
  operationId: 'DescribeStateMachineForExecution',
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
        .literal('AWSStepFunctions.DescribeStateMachineForExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.DescribeStateMachineForExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStateMachineForExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStateMachineForExecutionOutputSchema } },
    },
    480: {
      description: 'ExecutionDoesNotExist',
      content: { 'application/json': { schema: ExecutionDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsGetActivityTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.GetActivityTask',
  description:
    '<p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <note> <p>This API action isn\'t logged in CloudTrail.</p> </note> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>',
  operationId: 'GetActivityTask',
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
        .literal('AWSStepFunctions.GetActivityTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.GetActivityTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetActivityTaskInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetActivityTaskOutputSchema } },
    },
    480: {
      description: 'ActivityDoesNotExist',
      content: { 'application/json': { schema: ActivityDoesNotExistSchema } },
    },
    481: {
      description: 'ActivityWorkerLimitExceeded',
      content: { 'application/json': { schema: ActivityWorkerLimitExceededSchema } },
    },
    482: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsGetExecutionHistoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.GetExecutionHistory',
  description:
    '<p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>',
  operationId: 'GetExecutionHistory',
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
        .literal('AWSStepFunctions.GetExecutionHistory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.GetExecutionHistory'] },
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
      content: { 'application/json': { schema: GetExecutionHistoryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExecutionHistoryOutputSchema } },
    },
    480: {
      description: 'ExecutionDoesNotExist',
      content: { 'application/json': { schema: ExecutionDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsListActivitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.ListActivities',
  description:
    '<p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>',
  operationId: 'ListActivities',
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
        .literal('AWSStepFunctions.ListActivities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.ListActivities'] },
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
      content: { 'application/json': { schema: ListActivitiesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListActivitiesOutputSchema } },
    },
    480: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsListExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.ListExecutions',
  description:
    '<p>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN.</p> <p>You can also provide a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> ARN or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a> ARN to list the executions associated with a specific alias or version.</p> <p>Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>',
  operationId: 'ListExecutions',
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
        .literal('AWSStepFunctions.ListExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.ListExecutions'] },
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
      content: { 'application/json': { schema: ListExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExecutionsOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
    482: {
      description: 'StateMachineDoesNotExist',
      content: { 'application/json': { schema: StateMachineDoesNotExistSchema } },
    },
    483: {
      description: 'StateMachineTypeNotSupported',
      content: { 'application/json': { schema: StateMachineTypeNotSupportedSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsListMapRunsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.ListMapRuns',
  description:
    'Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.',
  operationId: 'ListMapRuns',
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
        .literal('AWSStepFunctions.ListMapRuns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.ListMapRuns'] },
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
    body: { content: { 'application/json': { schema: ListMapRunsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMapRunsOutputSchema } },
    },
    480: {
      description: 'ExecutionDoesNotExist',
      content: { 'application/json': { schema: ExecutionDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsListStateMachineAliasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases',
  description:
    '<p>Lists <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. </p> <p>To list aliases that reference a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, you can specify the version ARN in the <code>stateMachineArn</code> parameter.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>',
  operationId: 'ListStateMachineAliases',
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
        .literal('AWSStepFunctions.ListStateMachineAliases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.ListStateMachineAliases'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListStateMachineAliasesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStateMachineAliasesOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
    482: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    483: {
      description: 'StateMachineDoesNotExist',
      content: { 'application/json': { schema: StateMachineDoesNotExistSchema } },
    },
    484: {
      description: 'StateMachineDeleting',
      content: { 'application/json': { schema: StateMachineDeletingSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsListStateMachineVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions',
  description:
    '<p>Lists <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> for the specified state machine Amazon Resource Name (ARN).</p> <p>The results are sorted in descending order of the version creation time.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>PublishStateMachineVersion</a> </p> </li> <li> <p> <a>DeleteStateMachineVersion</a> </p> </li> </ul>',
  operationId: 'ListStateMachineVersions',
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
        .literal('AWSStepFunctions.ListStateMachineVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.ListStateMachineVersions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListStateMachineVersionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStateMachineVersionsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsListStateMachinesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.ListStateMachines',
  description:
    '<p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>',
  operationId: 'ListStateMachines',
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
        .literal('AWSStepFunctions.ListStateMachines')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.ListStateMachines'] },
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
      content: { 'application/json': { schema: ListStateMachinesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStateMachinesOutputSchema } },
    },
    480: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.ListTagsForResource',
  description:
    '<p>List tags for a given resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>',
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
      'X-Amz-Target': z
        .literal('AWSStepFunctions.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsPublishStateMachineVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion',
  description:
    "<p>Creates a <a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html\">version</a> from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use <a>CreateStateMachineAlias</a>.</p> <p>You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the <a>DeleteStateMachineVersion</a> API action.</p> <p> <code>PublishStateMachineVersion</code> is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases <code>PublishStateMachineVersion</code>'s idempotency check on the <code>stateMachineArn</code>, <code>name</code>, and <code>revisionId</code> parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a <code>revisionId</code>, Step Functions checks for a previously published version of the state machine's current revision.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteStateMachineVersion</a> </p> </li> <li> <p> <a>ListStateMachineVersions</a> </p> </li> </ul>",
  operationId: 'PublishStateMachineVersion',
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
        .literal('AWSStepFunctions.PublishStateMachineVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.PublishStateMachineVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublishStateMachineVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PublishStateMachineVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'StateMachineDeleting',
      content: { 'application/json': { schema: StateMachineDeletingSchema } },
    },
    482: {
      description: 'StateMachineDoesNotExist',
      content: { 'application/json': { schema: StateMachineDoesNotExistSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsSendTaskFailureRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.SendTaskFailure',
  description:
    'Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> failed.',
  operationId: 'SendTaskFailure',
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
        .literal('AWSStepFunctions.SendTaskFailure')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.SendTaskFailure'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendTaskFailureInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendTaskFailureOutputSchema } },
    },
    480: {
      description: 'TaskDoesNotExist',
      content: { 'application/json': { schema: TaskDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
    482: {
      description: 'TaskTimedOut',
      content: { 'application/json': { schema: TaskTimedOutSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsSendTaskHeartbeatRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat',
  description:
    '<p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine\'s Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine\'s Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval for heartbeats.</p> </note>',
  operationId: 'SendTaskHeartbeat',
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
        .literal('AWSStepFunctions.SendTaskHeartbeat')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.SendTaskHeartbeat'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendTaskHeartbeatInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendTaskHeartbeatOutputSchema } },
    },
    480: {
      description: 'TaskDoesNotExist',
      content: { 'application/json': { schema: TaskDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
    482: {
      description: 'TaskTimedOut',
      content: { 'application/json': { schema: TaskTimedOutSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsSendTaskSuccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.SendTaskSuccess',
  description:
    'Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> completed successfully.',
  operationId: 'SendTaskSuccess',
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
        .literal('AWSStepFunctions.SendTaskSuccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.SendTaskSuccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendTaskSuccessInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendTaskSuccessOutputSchema } },
    },
    480: {
      description: 'TaskDoesNotExist',
      content: { 'application/json': { schema: TaskDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidOutput',
      content: { 'application/json': { schema: InvalidOutputSchema } },
    },
    482: {
      description: 'InvalidToken',
      content: { 'application/json': { schema: InvalidTokenSchema } },
    },
    483: {
      description: 'TaskTimedOut',
      content: { 'application/json': { schema: TaskTimedOutSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsStartExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.StartExecution',
  description:
    '<p>Starts a state machine execution.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution.</p> <p>To start executions of a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, call <code>StartExecution</code> and provide the version ARN or the ARN of an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> that points to the version.</p> <note> <p> <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a <code>STANDARD</code> workflow, if you call <code>StartExecution</code> with the same name and input as a running execution, the call succeeds and return the same response as the original request. If the execution is closed or if the input is different, it returns a <code>400 ExecutionAlreadyExists</code> error. You can reuse names after 90 days. </p> <p> <code>StartExecution</code> isn\'t idempotent for <code>EXPRESS</code> workflows. </p> </note>',
  operationId: 'StartExecution',
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
        .literal('AWSStepFunctions.StartExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.StartExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartExecutionOutputSchema } },
    },
    480: {
      description: 'ExecutionLimitExceeded',
      content: { 'application/json': { schema: ExecutionLimitExceededSchema } },
    },
    481: {
      description: 'ExecutionAlreadyExists',
      content: { 'application/json': { schema: ExecutionAlreadyExistsSchema } },
    },
    482: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    483: {
      description: 'InvalidExecutionInput',
      content: { 'application/json': { schema: InvalidExecutionInputSchema } },
    },
    484: {
      description: 'InvalidName',
      content: { 'application/json': { schema: InvalidNameSchema } },
    },
    485: {
      description: 'StateMachineDoesNotExist',
      content: { 'application/json': { schema: StateMachineDoesNotExistSchema } },
    },
    486: {
      description: 'StateMachineDeleting',
      content: { 'application/json': { schema: StateMachineDeletingSchema } },
    },
    487: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsStartSyncExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.StartSyncExecution',
  description:
    "<p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code> is not available for <code>STANDARD</code> workflows.</p> <note> <p> <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. </p> </note> <note> <p>This API action isn't logged in CloudTrail.</p> </note>",
  operationId: 'StartSyncExecution',
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
        .literal('AWSStepFunctions.StartSyncExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.StartSyncExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartSyncExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSyncExecutionOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'InvalidExecutionInput',
      content: { 'application/json': { schema: InvalidExecutionInputSchema } },
    },
    482: {
      description: 'InvalidName',
      content: { 'application/json': { schema: InvalidNameSchema } },
    },
    483: {
      description: 'StateMachineDoesNotExist',
      content: { 'application/json': { schema: StateMachineDoesNotExistSchema } },
    },
    484: {
      description: 'StateMachineDeleting',
      content: { 'application/json': { schema: StateMachineDeletingSchema } },
    },
    485: {
      description: 'StateMachineTypeNotSupported',
      content: { 'application/json': { schema: StateMachineTypeNotSupportedSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsStopExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.StopExecution',
  description:
    '<p>Stops an execution.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>',
  operationId: 'StopExecution',
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
        .literal('AWSStepFunctions.StopExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.StopExecution'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopExecutionInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopExecutionOutputSchema } },
    },
    480: {
      description: 'ExecutionDoesNotExist',
      content: { 'application/json': { schema: ExecutionDoesNotExistSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.TagResource',
  description:
    '<p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>',
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
      'X-Amz-Target': z
        .literal('AWSStepFunctions.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    482: {
      description: 'TooManyTags',
      content: { 'application/json': { schema: TooManyTagsSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.UntagResource',
  description: 'Remove a tag from a Step Functions resource',
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
      'X-Amz-Target': z
        .literal('AWSStepFunctions.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsUpdateMapRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.UpdateMapRun',
  description:
    "Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.",
  operationId: 'UpdateMapRun',
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
        .literal('AWSStepFunctions.UpdateMapRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.UpdateMapRun'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateMapRunInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMapRunOutputSchema } },
    },
    480: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsUpdateStateMachineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachine',
  description:
    '<p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>After you update your state machine, you can set the <code>publish</code> parameter to <code>true</code> in the same action to publish a new <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. This way, you can opt-in to strict versioning of your state machine.</p> <note> <p>Step Functions assigns monotonically increasing integers for state machine versions, starting at version number 1.</p> </note> <note> <p>All <code>StartExecution</code> calls within a few seconds use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after you call <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>',
  operationId: 'UpdateStateMachine',
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
        .literal('AWSStepFunctions.UpdateStateMachine')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.UpdateStateMachine'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateStateMachineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateStateMachineOutputSchema } },
    },
    480: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    481: {
      description: 'InvalidDefinition',
      content: { 'application/json': { schema: InvalidDefinitionSchema } },
    },
    482: {
      description: 'InvalidLoggingConfiguration',
      content: { 'application/json': { schema: InvalidLoggingConfigurationSchema } },
    },
    483: {
      description: 'InvalidTracingConfiguration',
      content: { 'application/json': { schema: InvalidTracingConfigurationSchema } },
    },
    484: {
      description: 'MissingRequiredParameter',
      content: { 'application/json': { schema: MissingRequiredParameterSchema } },
    },
    485: {
      description: 'StateMachineDeleting',
      content: { 'application/json': { schema: StateMachineDeletingSchema } },
    },
    486: {
      description: 'StateMachineDoesNotExist',
      content: { 'application/json': { schema: StateMachineDoesNotExistSchema } },
    },
    487: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    488: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    489: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSStepFunctionsUpdateStateMachineAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias',
  description:
    '<p>Updates the configuration of an existing state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> by modifying its <code>description</code> or <code>routingConfiguration</code>.</p> <p>You must specify at least one of the <code>description</code> or <code>routingConfiguration</code> parameters to update a state machine alias.</p> <note> <p> <code>UpdateStateMachineAlias</code> is an idempotent API. Step Functions bases the idempotency check on the <code>stateMachineAliasArn</code>, <code>description</code>, and <code>routingConfiguration</code> parameters. Requests with the same parameters return an idempotent response.</p> </note> <note> <p>This operation is eventually consistent. All <a>StartExecution</a> requests made within a few seconds use the latest alias configuration. Executions started immediately after calling <code>UpdateStateMachineAlias</code> may use the previous routing configuration.</p> </note> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>',
  operationId: 'UpdateStateMachineAlias',
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
        .literal('AWSStepFunctions.UpdateStateMachineAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSStepFunctions.UpdateStateMachineAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateStateMachineAliasInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateStateMachineAliasOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidArn',
      content: { 'application/json': { schema: InvalidArnSchema } },
    },
    482: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
