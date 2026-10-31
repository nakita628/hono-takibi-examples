import { createRoute, z } from '@hono/zod-openapi'

const AssociateResourceResponseSchema = z.object({}).openapi('AssociateResourceResponse')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const UUIDSchema = z
  .string()
  .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
  .openapi('UUID')

const CanaryNameSchema = z
  .string()
  .regex(/^[0-9a-z_\-]+$/)
  .min(1)
  .max(21)
  .openapi('CanaryName')

const StringSchema = z.string().min(1).max(1024).openapi('String')

const CanaryCodeOutputSchema = z
  .object({
    SourceLocationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Lambda layer where Synthetics stores the canary script code.',
        }),
    ).exactOptional(),
    Handler: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The entry point to use for the source code when running the canary.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.",
    required: [],
  })
  .openapi('CanaryCodeOutput')

const RoleArnSchema = z
  .string()
  .regex(/arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
  .min(1)
  .max(2048)
  .openapi('RoleArn')

const MaxOneYearInSecondsSchema = z.int().min(0).max(31622400).openapi('MaxOneYearInSeconds')

const CanaryScheduleOutputSchema = z
  .object({
    Expression: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A <code>rate</code> expression or a <code>cron</code> expression that defines how often the canary is to run.</p> <p>For a rate expression, The syntax is <code>rate(<i>number unit</i>)</code>. <i>unit</i> can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p> <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every 10 minutes, and <code>rate(1 hour)</code> runs it once every hour. You can specify a frequency between <code>rate(1 minute)</code> and <code>rate(1 hour)</code>.</p> <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value that causes the canary to run only once when it is started.</p> <p>Use <code>cron(<i>expression</i>)</code> to specify a cron expression. For information about the syntax for cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html"> Scheduling canary runs using cron</a>.</p>',
        }),
    ).exactOptional(),
    DurationInSeconds: MaxOneYearInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in seconds, for the canary to continue making regular runs after it was created. The runs are performed according to the schedule in the <code>Expression</code> value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.',
    required: [],
  })
  .openapi('CanaryScheduleOutput')

const MaxFifteenMinutesInSecondsSchema = z
  .int()
  .min(3)
  .max(840)
  .openapi('MaxFifteenMinutesInSeconds')

const MaxSize3008Schema = z.int().min(960).max(3008).openapi('MaxSize3008')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const CanaryRunConfigOutputSchema = z
  .object({
    TimeoutInSeconds: MaxFifteenMinutesInSecondsSchema.and(
      z
        .any()
        .openapi({ description: 'How long the canary is allowed to run before it must stop.' }),
    ).exactOptional(),
    MemoryInMB: MaxSize3008Schema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.',
        }),
    ).exactOptional(),
    ActiveTracing: NullableBooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Displays whether this canary run used active X-Ray tracing. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains information about a canary run.',
    required: [],
  })
  .openapi('CanaryRunConfigOutput')

const MaxSize1024Schema = z.int().min(1).max(1024).openapi('MaxSize1024')

const CanaryStateSchema = z
  .enum([
    'CREATING',
    'READY',
    'STARTING',
    'RUNNING',
    'UPDATING',
    'STOPPING',
    'STOPPED',
    'ERROR',
    'DELETING',
  ])
  .openapi('CanaryState')

const CanaryStateReasonCodeSchema = z
  .enum([
    'INVALID_PERMISSIONS',
    'CREATE_PENDING',
    'CREATE_IN_PROGRESS',
    'CREATE_FAILED',
    'UPDATE_PENDING',
    'UPDATE_IN_PROGRESS',
    'UPDATE_COMPLETE',
    'ROLLBACK_COMPLETE',
    'ROLLBACK_FAILED',
    'DELETE_IN_PROGRESS',
    'DELETE_FAILED',
    'SYNC_DELETE_IN_PROGRESS',
  ])
  .openapi('CanaryStateReasonCode')

const CanaryStatusSchema = z
  .object({
    State: CanaryStateSchema.and(
      z.any().openapi({ description: 'The current state of the canary.' }),
    ).exactOptional(),
    StateReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the canary has insufficient permissions to run, this field provides more details.',
        }),
    ).exactOptional(),
    StateReasonCode: CanaryStateReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'If the canary cannot run or has failed, this field displays the reason.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains the current state of the canary.',
    required: [],
  })
  .openapi('CanaryStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const CanaryTimelineSchema = z
  .object({
    Created: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the canary was created.' }),
    ).exactOptional(),
    LastModified: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the canary was most recently modified.' }),
    ).exactOptional(),
    LastStarted: TimestampSchema.and(
      z
        .any()
        .openapi({ description: "The date and time that the canary's most recent run started." }),
    ).exactOptional(),
    LastStopped: TimestampSchema.and(
      z
        .any()
        .openapi({ description: "The date and time that the canary's most recent run ended." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure contains information about when the canary was created and modified.',
    required: [],
  })
  .openapi('CanaryTimeline')

const FunctionArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
  )
  .min(1)
  .max(2048)
  .openapi('FunctionArn')

const VpcIdSchema = z.string().openapi('VpcId')

const SubnetIdSchema = z.string().openapi('SubnetId')

const SubnetIdsSchema = z.array(SubnetIdSchema).min(0).max(16).openapi('SubnetIds')

const SecurityGroupIdSchema = z.string().openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z
  .array(SecurityGroupIdSchema)
  .min(0)
  .max(5)
  .openapi('SecurityGroupIds')

const VpcConfigOutputSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The IDs of the VPC where this canary is to run.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'The IDs of the subnets where this canary is to run.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z.any().openapi({ description: 'The IDs of the security groups for this canary.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.',
    required: [],
  })
  .openapi('VpcConfigOutput')

const BaseScreenshotConfigIgnoreCoordinateSchema = z
  .string()
  .regex(/^(-?\d{1,5}\.?\d{0,2},){3}(-?\d{1,5}\.?\d{0,2}){1}$/)
  .openapi('BaseScreenshotConfigIgnoreCoordinate')

const BaseScreenshotIgnoreCoordinatesSchema = z
  .array(BaseScreenshotConfigIgnoreCoordinateSchema)
  .min(0)
  .max(20)
  .openapi('BaseScreenshotIgnoreCoordinates')

const BaseScreenshotSchema = z
  .object({
    ScreenshotName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the screenshot. This is generated the first time the canary is run after the <code>UpdateCanary</code> operation that specified for this canary to perform visual monitoring.',
        }),
    ),
    IgnoreCoordinates: BaseScreenshotIgnoreCoordinatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Coordinates that define the part of a screen to ignore during screenshot comparisons. To obtain the coordinates to use here, use the CloudWatch console to draw the boundaries on the screen. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/synthetics_canaries_deletion.html"> Editing or deleting a canary</a> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ScreenshotName'],
    description:
      'A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.',
  })
  .openapi('BaseScreenshot')

const BaseScreenshotsSchema = z.array(BaseScreenshotSchema).openapi('BaseScreenshots')

const VisualReferenceOutputSchema = z
  .object({
    BaseScreenshots: BaseScreenshotsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of screenshots that are used as the baseline for comparisons during visual monitoring.',
        }),
    ).exactOptional(),
    BaseCanaryRunId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the canary run that produced the baseline screenshots that are used for visual monitoring comparisons by this canary.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>',
    required: [],
  })
  .openapi('VisualReferenceOutput')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const EncryptionModeSchema = z.enum(['SSE_S3', 'SSE_KMS']).openapi('EncryptionMode')

const KmsKeyArnSchema = z
  .string()
  .regex(/arn:(aws[a-zA-Z-]*)?:kms:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:key\/[\w\-\/]+/)
  .min(1)
  .max(2048)
  .openapi('KmsKeyArn')

const S3EncryptionConfigSchema = z
  .object({
    EncryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The encryption method to use for artifacts created by this canary. Specify <code>SSE_S3</code> to use server-side encryption (SSE) with an Amazon S3-managed key. Specify <code>SSE-KMS</code> to use server-side encryption with a customer-managed KMS key.</p> <p>If you omit this parameter, an Amazon Web Services-managed KMS key is used. </p>',
        }),
    ).exactOptional(),
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the customer-managed KMS key to use, if you specify <code>SSE-KMS</code> for <code>EncryptionMode</code> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary uploads to Amazon S3. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> </p>',
    required: [],
  })
  .openapi('S3EncryptionConfig')

const ArtifactConfigOutputSchema = z
  .object({
    S3Encryption: S3EncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the configuration of encryption settings for canary artifacts that are stored in Amazon S3. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.',
    required: [],
  })
  .openapi('ArtifactConfigOutput')

const CanarySchema = z
  .object({
    Id: UUIDSchema.and(
      z.any().openapi({ description: 'The unique ID of this canary.' }),
    ).exactOptional(),
    Name: CanaryNameSchema.and(
      z.any().openapi({ description: 'The name of the canary.' }),
    ).exactOptional(),
    Code: CanaryCodeOutputSchema.exactOptional(),
    ExecutionRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role used to run the canary. This role must include <code>lambda.amazonaws.com</code> as a principal in the trust policy.',
        }),
    ).exactOptional(),
    Schedule: CanaryScheduleOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains information about how often the canary is to run, and when these runs are to stop.',
        }),
    ).exactOptional(),
    RunConfig: CanaryRunConfigOutputSchema.exactOptional(),
    SuccessRetentionPeriodInDays: MaxSize1024Schema.and(
      z
        .any()
        .openapi({
          description: 'The number of days to retain data about successful runs of this canary.',
        }),
    ).exactOptional(),
    FailureRetentionPeriodInDays: MaxSize1024Schema.and(
      z
        .any()
        .openapi({
          description: 'The number of days to retain data about failed runs of this canary.',
        }),
    ).exactOptional(),
    Status: CanaryStatusSchema.and(
      z
        .any()
        .openapi({
          description: "A structure that contains information about the canary's status.",
        }),
    ).exactOptional(),
    Timeline: CanaryTimelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains information about when the canary was created, modified, and most recently run.',
        }),
    ).exactOptional(),
    ArtifactS3Location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location in Amazon S3 where Synthetics stores artifacts from the runs of this canary. Artifacts include the log file, screenshots, and HAR files.',
        }),
    ).exactOptional(),
    EngineArn: FunctionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Lambda function that is used as your canary\'s engine. For more information about Lambda ARN format, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html">Resources and Conditions for Lambda Actions</a>.',
        }),
    ).exactOptional(),
    RuntimeVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the runtime version to use for the canary. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigOutputSchema.exactOptional(),
    VisualReference: VisualReferenceOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates of any parts of the screen to ignore during the visual monitoring comparison.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of key-value pairs that are associated with the canary.',
        }),
    ).exactOptional(),
    ArtifactConfig: ArtifactConfigOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This structure contains all information about one canary in your account.',
    required: [],
  })
  .openapi('Canary')

const CreateCanaryResponseSchema = z
  .object({
    Canary: CanarySchema.and(
      z.any().openapi({ description: 'The full details about the canary you have created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCanaryResponse')

const BlobSchema = z.string().min(1).max(10000000).openapi('Blob')

const CodeHandlerSchema = z
  .string()
  .regex(/^([0-9a-zA-Z_-]+\/)*[0-9A-Za-z_\\-]+\.[A-Za-z_][A-Za-z0-9_]*$/)
  .min(1)
  .max(128)
  .openapi('CodeHandler')

const EnvironmentVariableValueSchema = z.string().openapi('EnvironmentVariableValue')

const EnvironmentVariablesMapSchema = z
  .record(z.string(), EnvironmentVariableValueSchema)
  .openapi('EnvironmentVariablesMap')

const RequestEntityTooLargeExceptionSchema = z.any().openapi('RequestEntityTooLargeException')

const GroupNameSchema = z.string().min(1).max(64).openapi('GroupName')

const GroupArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:group:[0-9a-z]+/,
  )
  .min(1)
  .max(128)
  .openapi('GroupArn')

const GroupSchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the group.' }),
    ).exactOptional(),
    Name: GroupNameSchema.and(
      z.any().openapi({ description: 'The name of the group.' }),
    ).exactOptional(),
    Arn: GroupArnSchema.and(
      z.any().openapi({ description: 'The ARN of the group.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of key-value pairs that are associated with the canary.',
        }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the group was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the group was most recently updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'This structure contains information about one group.', required: [] })
  .openapi('Group')

const CreateGroupResponseSchema = z
  .object({
    Group: GroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains information about the group that was just created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupResponse')

const DeleteCanaryResponseSchema = z.object({}).openapi('DeleteCanaryResponse')

const DeleteGroupResponseSchema = z.object({}).openapi('DeleteGroupResponse')

const CanariesSchema = z.array(CanarySchema).openapi('Canaries')

const TokenSchema = z.string().min(4).max(252).openapi('Token')

const DescribeCanariesResponseSchema = z
  .object({
    Canaries: CanariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns an array. Each item in the array contains the full information about one canary.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCanariesResponse')

const CanaryRunStateSchema = z.enum(['RUNNING', 'PASSED', 'FAILED']).openapi('CanaryRunState')

const CanaryRunStateReasonCodeSchema = z
  .enum(['CANARY_FAILURE', 'EXECUTION_FAILURE'])
  .openapi('CanaryRunStateReasonCode')

const CanaryRunStatusSchema = z
  .object({
    State: CanaryRunStateSchema.and(
      z.any().openapi({ description: 'The current state of the run.' }),
    ).exactOptional(),
    StateReason: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'If run of the canary failed, this field contains the reason for the error.',
        }),
    ).exactOptional(),
    StateReasonCode: CanaryRunStateReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is <code>CANARY_FAILURE</code>, an exception occurred in the canary code. If this value is <code>EXECUTION_FAILURE</code>, an exception occurred in CloudWatch Synthetics.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This structure contains the status information about a canary run.',
    required: [],
  })
  .openapi('CanaryRunStatus')

const CanaryRunTimelineSchema = z
  .object({
    Started: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of the run.' }),
    ).exactOptional(),
    Completed: TimestampSchema.and(
      z.any().openapi({ description: 'The end time of the run.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This structure contains the start and end times of a single canary run.',
    required: [],
  })
  .openapi('CanaryRunTimeline')

const CanaryRunSchema = z
  .object({
    Id: UUIDSchema.and(
      z.any().openapi({ description: 'A unique ID that identifies this canary run.' }),
    ).exactOptional(),
    Name: CanaryNameSchema.and(
      z.any().openapi({ description: 'The name of the canary.' }),
    ).exactOptional(),
    Status: CanaryRunStatusSchema.and(
      z.any().openapi({ description: 'The status of this run.' }),
    ).exactOptional(),
    Timeline: CanaryRunTimelineSchema.and(
      z
        .any()
        .openapi({ description: 'A structure that contains the start and end times of this run.' }),
    ).exactOptional(),
    ArtifactS3Location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location where the canary stored artifacts from the run. Artifacts include the log file, screenshots, and HAR files.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This structure contains the details about one run of one canary.',
    required: [],
  })
  .openapi('CanaryRun')

const CanaryLastRunSchema = z
  .object({
    CanaryName: CanaryNameSchema.and(
      z.any().openapi({ description: 'The name of the canary.' }),
    ).exactOptional(),
    LastRun: CanaryRunSchema.and(
      z.any().openapi({ description: "The results from this canary's most recent run." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure contains information about the most recent run of a single canary.',
    required: [],
  })
  .openapi('CanaryLastRun')

const CanariesLastRunSchema = z.array(CanaryLastRunSchema).openapi('CanariesLastRun')

const DescribeCanariesLastRunResponseSchema = z
  .object({
    CanariesLastRun: CanariesLastRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains the information from the most recent run of each canary.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCanariesLastRunResponse')

const RuntimeVersionSchema = z
  .object({
    VersionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the runtime version. For a list of valid runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the runtime version, created by Amazon.' }),
    ).exactOptional(),
    ReleaseDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the runtime version was released.' }),
    ).exactOptional(),
    DeprecationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this runtime version is deprecated, this value is the date of deprecation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
    required: [],
  })
  .openapi('RuntimeVersion')

const RuntimeVersionListSchema = z.array(RuntimeVersionSchema).openapi('RuntimeVersionList')

const DescribeRuntimeVersionsResponseSchema = z
  .object({
    RuntimeVersions: RuntimeVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that display the details about each Synthetics canary runtime version.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRuntimeVersionsResponse')

const DisassociateResourceResponseSchema = z.object({}).openapi('DisassociateResourceResponse')

const GetCanaryResponseSchema = z
  .object({
    Canary: CanarySchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains the full information about the canary.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCanaryResponse')

const CanaryRunsSchema = z.array(CanaryRunSchema).openapi('CanaryRuns')

const GetCanaryRunsResponseSchema = z
  .object({
    CanaryRuns: CanaryRunsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of structures. Each structure contains the details of one of the retrieved canary runs.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCanaryRunsResponse')

const GetGroupResponseSchema = z
  .object({
    Group: GroupSchema.and(
      z.any().openapi({ description: 'A structure that contains information about the group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGroupResponse')

const GroupSummarySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the group.' }),
    ).exactOptional(),
    Name: GroupNameSchema.and(
      z.any().openapi({ description: 'The name of the group.' }),
    ).exactOptional(),
    Arn: GroupArnSchema.and(
      z.any().openapi({ description: 'The ARN of the group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A structure containing some information about a group.', required: [] })
  .openapi('GroupSummary')

const GroupSummaryListSchema = z.array(GroupSummarySchema).openapi('GroupSummaryList')

const PaginationTokenSchema = z.string().regex(/^.+$/).min(1).max(512).openapi('PaginationToken')

const ListAssociatedGroupsResponseSchema = z
  .object({
    Groups: GroupSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of structures that contain information about the groups that this canary is associated with.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>ListAssociatedGroups</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssociatedGroupsResponse')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const ListGroupResourcesResponseSchema = z
  .object({
    Resources: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of ARNs. These ARNs are for the canaries that are associated with the group.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>ListGroupResources</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupResourcesResponse')

const ListGroupsResponseSchema = z
  .object({
    Groups: GroupSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of structures that each contain information about one group.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>ListGroups</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of tag keys and values associated with the resource that you specified.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const StartCanaryResponseSchema = z.object({}).openapi('StartCanaryResponse')

const StopCanaryResponseSchema = z.object({}).openapi('StopCanaryResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateCanaryResponseSchema = z.object({}).openapi('UpdateCanaryResponse')

const ArtifactConfigInputSchema = z
  .object({
    S3Encryption: S3EncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. Artifact encryption functionality is available only for canaries that use Synthetics runtime version syn-nodejs-puppeteer-3.3 or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.',
    required: [],
  })
  .openapi('ArtifactConfigInput')

const GroupIdentifierSchema = z.string().min(1).max(128).openapi('GroupIdentifier')

const CanaryArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:canary:[0-9a-z_\-]{1,21}/,
  )
  .min(1)
  .max(2048)
  .openapi('CanaryArn')

const AssociateResourceRequestSchema = z
  .object({
    ResourceArn: CanaryArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the canary that you want to associate with the specified group.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'AssociateResourceRequest' })
  .openapi('AssociateResourceRequest')

const CanaryCodeInputSchema = z
  .object({
    S3Bucket: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If your canary script is located in S3, specify the bucket name here. Do not include <code>s3://</code> as the start of the bucket name.',
        }),
    ).exactOptional(),
    S3Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 key of your script. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html">Working with Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    S3Version: StringSchema.and(
      z.any().openapi({ description: 'The S3 version ID of your script.' }),
    ).exactOptional(),
    ZipFile: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you input your canary script directly into the canary instead of referring to an S3 location, the value of this parameter is the base64-encoded contents of the .zip file that contains the script. It must be smaller than 225 Kb.</p> <p>For large canary scripts, we recommend that you use an S3 location instead of inputting it directly with this parameter.</p>',
        }),
    ).exactOptional(),
    Handler: CodeHandlerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entry point to use for the source code when running the canary. For canaries that use the <code>syn-python-selenium-1.0</code> runtime or a <code>syn-nodejs.puppeteer</code> runtime earlier than <code>syn-nodejs.puppeteer-3.4</code>, the handler must be specified as <code> <i>fileName</i>.handler</code>. For <code>syn-python-selenium-1.1</code>, <code>syn-nodejs.puppeteer-3.4</code>, and later runtimes, the handler can be specified as <code> <i>fileName</i>.<i>functionName</i> </code>, or you can specify a folder where canary scripts reside as <code> <i>folder</i>/<i>fileName</i>.<i>functionName</i> </code>.',
        }),
    ),
  })
  .openapi({
    required: ['Handler'],
    description:
      'Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. ',
  })
  .openapi('CanaryCodeInput')

const CanaryRunConfigInputSchema = z
  .object({
    TimeoutInSeconds: MaxFifteenMinutesInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>How long the canary is allowed to run before it must stop. You can't set this time to be longer than the frequency of the runs of this canary.</p> <p>If you omit this field, the frequency of the canary is used as this value, up to a maximum of 14 minutes.</p>",
        }),
    ).exactOptional(),
    MemoryInMB: MaxSize3008Schema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.',
        }),
    ).exactOptional(),
    ActiveTracing: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this canary is to use active X-Ray tracing when it runs. Active tracing enables this canary run to be displayed in the ServiceLens and X-Ray service maps even if the canary does not hit an endpoint that has X-Ray tracing enabled. Using X-Ray tracing incurs charges. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_tracing.html"> Canaries and X-Ray tracing</a>.</p> <p>You can enable active tracing only for canaries that use version <code>syn-nodejs-2.0</code> or later for their canary runtime.</p>',
        }),
    ).exactOptional(),
    EnvironmentVariables: EnvironmentVariablesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the keys and values to use for any environment variables used in the canary script. Use the following format:</p> <p>{ "key1" : "value1", "key2" : "value2", ...}</p> <p>Keys must start with a letter and be at least two characters. The total size of your environment variables cannot exceed 4 KB. You can\'t specify any Lambda reserved environment variables as the keys for your environment variables. For more information about reserved keys, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime"> Runtime environment variables</a>.</p> <important> <p>The environment variables keys and values are not encrypted. Do not store sensitive information in this field.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains input information for a canary run.',
    required: [],
  })
  .openapi('CanaryRunConfigInput')

const CanaryScheduleInputSchema = z
  .object({
    Expression: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A <code>rate</code> expression or a <code>cron</code> expression that defines how often the canary is to run.</p> <p>For a rate expression, The syntax is <code>rate(<i>number unit</i>)</code>. <i>unit</i> can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p> <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every 10 minutes, and <code>rate(1 hour)</code> runs it once every hour. You can specify a frequency between <code>rate(1 minute)</code> and <code>rate(1 hour)</code>.</p> <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value that causes the canary to run only once when it is started.</p> <p>Use <code>cron(<i>expression</i>)</code> to specify a cron expression. You can\'t schedule a canary to wait for more than a year before running. For information about the syntax for cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html"> Scheduling canary runs using cron</a>.</p>',
        }),
    ),
    DurationInSeconds: MaxOneYearInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value. If you specify 0, the canary continues making runs until you stop it. If you omit this field, the default of 0 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Expression'],
    description:
      'This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.',
  })
  .openapi('CanaryScheduleInput')

const VpcConfigInputSchema = z
  .object({
    SubnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'The IDs of the subnets where this canary is to run.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z.any().openapi({ description: 'The IDs of the security groups for this canary.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.',
    required: [],
  })
  .openapi('VpcConfigInput')

const CreateCanaryRequestSchema = z
  .object({
    Name: CanaryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>',
        }),
    ),
    Code: CanaryCodeInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that includes the entry point from which the canary should start running your script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. ',
        }),
    ),
    ArtifactS3Location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).",
        }),
    ),
    ExecutionRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:PutLogEvents</code> </p> </li> </ul>',
        }),
    ),
    Schedule: CanaryScheduleInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains information about how often the canary is to run and when these test runs are to stop.',
        }),
    ),
    RunConfig: CanaryRunConfigInputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A structure that contains the configuration for individual canary runs, such as timeout value and environment variables.</p> <important> <p>The environment variables keys and values are not encrypted. Do not store sensitive information in this field.</p> </important>',
        }),
    ).exactOptional(),
    SuccessRetentionPeriodInDays: MaxSize1024Schema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.',
        }),
    ).exactOptional(),
    FailureRetentionPeriodInDays: MaxSize1024Schema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.',
        }),
    ).exactOptional(),
    RuntimeVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
        }),
    ),
    VpcConfig: VpcConfigInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>',
        }),
    ).exactOptional(),
    ArtifactConfig: ArtifactConfigInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Name',
      'Code',
      'ArtifactS3Location',
      'ExecutionRoleArn',
      'Schedule',
      'RuntimeVersion',
    ],
    title: 'CreateCanaryRequest',
  })
  .openapi('CreateCanaryRequest')

const CreateGroupRequestSchema = z
  .object({
    Name: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the group. It can include any Unicode characters.</p> <p>The names for all groups in your account, across all Regions, must be unique.</p>',
        }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key-value pairs to associate with the group. You can associate as many as 50 tags with a group.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateGroupRequest' })
  .openapi('CreateGroupRequest')

const BooleanSchema = z.boolean().openapi('Boolean')

const DeleteCanaryRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCanaryRequest' })
  .openapi('DeleteCanaryRequest')

const DeleteGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteGroupRequest' })
  .openapi('DeleteGroupRequest')

const DescribeCanariesLastRunNameFilterSchema = z
  .array(CanaryNameSchema)
  .min(1)
  .max(5)
  .openapi('DescribeCanariesLastRunNameFilter')

const MaxSize100Schema = z.int().min(1).max(100).openapi('MaxSize100')

const DescribeCanariesLastRunRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to limit how many runs are returned each time you use the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.',
        }),
    ).exactOptional(),
    Names: DescribeCanariesLastRunNameFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeCanariesLastRunRequest', required: [] })
  .openapi('DescribeCanariesLastRunRequest')

const DescribeCanariesNameFilterSchema = z
  .array(CanaryNameSchema)
  .min(1)
  .max(5)
  .openapi('DescribeCanariesNameFilter')

const MaxCanaryResultsSchema = z.int().min(1).max(20).openapi('MaxCanaryResults')

const DescribeCanariesRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxCanaryResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to limit how many canaries are returned each time you use the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.',
        }),
    ).exactOptional(),
    Names: DescribeCanariesNameFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use this parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeCanariesRequest', required: [] })
  .openapi('DescribeCanariesRequest')

const DescribeRuntimeVersionsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to limit how many runs are returned each time you use the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRuntimeVersionsRequest', required: [] })
  .openapi('DescribeRuntimeVersionsRequest')

const DisassociateResourceRequestSchema = z
  .object({
    ResourceArn: CanaryArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the canary that you want to remove from the specified group.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DisassociateResourceRequest' })
  .openapi('DisassociateResourceRequest')

const EnvironmentVariableNameSchema = z
  .string()
  .regex(/[a-zA-Z]([a-zA-Z0-9_])+/)
  .openapi('EnvironmentVariableName')

const GetCanaryRequestSchema = z
  .object({})
  .openapi({ title: 'GetCanaryRequest' })
  .openapi('GetCanaryRequest')

const GetCanaryRunsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxSize100Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to limit how many runs are returned each time you use the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetCanaryRunsRequest', required: [] })
  .openapi('GetCanaryRunsRequest')

const GetGroupRequestSchema = z
  .object({})
  .openapi({ title: 'GetGroupRequest' })
  .openapi('GetGroupRequest')

const MaxGroupResultsSchema = z.int().min(1).max(20).openapi('MaxGroupResults')

const ListAssociatedGroupsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxGroupResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to limit how many groups are returned each time you use the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAssociatedGroupsRequest', required: [] })
  .openapi('ListAssociatedGroupsRequest')

const ListGroupResourcesRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxGroupResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to limit how many canary ARNs are returned each time you use the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGroupResourcesRequest', required: [] })
  .openapi('ListGroupResourcesRequest')

const ListGroupsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxGroupResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to limit how many groups are returned each time you use the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGroupsRequest', required: [] })
  .openapi('ListGroupsRequest')

const ResourceArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:(canary|group):[0-9a-z_\-]+/,
  )
  .min(1)
  .max(2048)
  .openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartCanaryRequestSchema = z
  .object({})
  .openapi({ title: 'StartCanaryRequest' })
  .openapi('StartCanaryRequest')

const StopCanaryRequestSchema = z
  .object({})
  .openapi({ title: 'StopCanaryRequest' })
  .openapi('StopCanaryRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'The list of key-value pairs to associate with the resource.' }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const VisualReferenceInputSchema = z
  .object({
    BaseScreenshots: BaseScreenshotsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of screenshots that will be used as the baseline for visual monitoring in future runs of this canary. If there is a screenshot that you don't want to be used for visual monitoring, remove it from this array.",
        }),
    ).exactOptional(),
    BaseCanaryRunId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which canary run to use the screenshots from as the baseline for future visual monitoring with this canary. Valid values are <code>nextrun</code> to use the screenshots from the next run after this update is made, <code>lastrun</code> to use the screenshots from the most recent run before this update was made, or the value of <code>Id</code> in the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRun.html"> CanaryRun</a> from any past run of this canary.',
        }),
    ),
  })
  .openapi({
    required: ['BaseCanaryRunId'],
    description:
      '<p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>',
  })
  .openapi('VisualReferenceInput')

const UpdateCanaryRequestSchema = z
  .object({
    Code: CanaryCodeInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that includes the entry point from which the canary should start running your script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. ',
        }),
    ).exactOptional(),
    ExecutionRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    RuntimeVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
        }),
    ).exactOptional(),
    Schedule: CanaryScheduleInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains information about how often the canary is to run, and when these runs are to stop.',
        }),
    ).exactOptional(),
    RunConfig: CanaryRunConfigInputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A structure that contains the timeout value that is used for each individual run of the canary.</p> <important> <p>The environment variables keys and values are not encrypted. Do not store sensitive information in this field.</p> </important>',
        }),
    ).exactOptional(),
    SuccessRetentionPeriodInDays: MaxSize1024Schema.and(
      z
        .any()
        .openapi({
          description: 'The number of days to retain data about successful runs of this canary.',
        }),
    ).exactOptional(),
    FailureRetentionPeriodInDays: MaxSize1024Schema.and(
      z
        .any()
        .openapi({
          description: 'The number of days to retain data about failed runs of this canary.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.',
        }),
    ).exactOptional(),
    VisualReference: VisualReferenceInputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the screenshots to use as the baseline for comparisons during visual monitoring comparisons during future runs of this canary. If you omit this parameter, no changes are made to any baseline screenshots that the canary might be using already.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>',
        }),
    ).exactOptional(),
    ArtifactS3Location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).",
        }),
    ).exactOptional(),
    ArtifactConfig: ArtifactConfigInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateCanaryRequest', required: [] })
  .openapi('UpdateCanaryRequest')

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

export const patchGroupGroupIdentifierAssociateRoute = createRoute({
  method: 'patch',
  path: '/group/{groupIdentifier}/associate',
  description:
    '<p>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>You must run this operation in the Region where the canary exists.</p>',
  operationId: 'AssociateResource',
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
      groupIdentifier: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'groupIdentifier',
            in: 'path',
            required: true,
            description:
              'Specifies the group. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .regex(
                  /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:canary:[0-9a-z_\-]{1,21}/,
                )
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    'The ARN of the canary that you want to associate with the specified group.',
                }),
            })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postCanaryRoute = createRoute({
  method: 'post',
  path: '/canary',
  description:
    '<p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>',
  operationId: 'CreateCanary',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[0-9a-z_\-]+$/)
                .min(1)
                .max(21)
                .openapi({
                  description:
                    '<p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>',
                }),
              Code: z
                .object({
                  S3Bucket: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If your canary script is located in S3, specify the bucket name here. Do not include <code>s3://</code> as the start of the bucket name.',
                      }),
                  ).exactOptional(),
                  S3Key: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The S3 key of your script. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html">Working with Amazon S3 Objects</a>.',
                      }),
                  ).exactOptional(),
                  S3Version: StringSchema.and(
                    z.any().openapi({ description: 'The S3 version ID of your script.' }),
                  ).exactOptional(),
                  ZipFile: BlobSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>If you input your canary script directly into the canary instead of referring to an S3 location, the value of this parameter is the base64-encoded contents of the .zip file that contains the script. It must be smaller than 225 Kb.</p> <p>For large canary scripts, we recommend that you use an S3 location instead of inputting it directly with this parameter.</p>',
                      }),
                  ).exactOptional(),
                  Handler: CodeHandlerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The entry point to use for the source code when running the canary. For canaries that use the <code>syn-python-selenium-1.0</code> runtime or a <code>syn-nodejs.puppeteer</code> runtime earlier than <code>syn-nodejs.puppeteer-3.4</code>, the handler must be specified as <code> <i>fileName</i>.handler</code>. For <code>syn-python-selenium-1.1</code>, <code>syn-nodejs.puppeteer-3.4</code>, and later runtimes, the handler can be specified as <code> <i>fileName</i>.<i>functionName</i> </code>, or you can specify a folder where canary scripts reside as <code> <i>folder</i>/<i>fileName</i>.<i>functionName</i> </code>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. ',
                  required: [],
                }),
              ArtifactS3Location: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).",
                }),
              ExecutionRoleArn: z
                .string()
                .regex(/arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    '<p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:PutLogEvents</code> </p> </li> </ul>',
                }),
              Schedule: z
                .object({
                  Expression: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A <code>rate</code> expression or a <code>cron</code> expression that defines how often the canary is to run.</p> <p>For a rate expression, The syntax is <code>rate(<i>number unit</i>)</code>. <i>unit</i> can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p> <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every 10 minutes, and <code>rate(1 hour)</code> runs it once every hour. You can specify a frequency between <code>rate(1 minute)</code> and <code>rate(1 hour)</code>.</p> <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value that causes the canary to run only once when it is started.</p> <p>Use <code>cron(<i>expression</i>)</code> to specify a cron expression. You can\'t schedule a canary to wait for more than a year before running. For information about the syntax for cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html"> Scheduling canary runs using cron</a>.</p>',
                      }),
                  ).exactOptional(),
                  DurationInSeconds: MaxOneYearInSecondsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value. If you specify 0, the canary continues making runs until you stop it. If you omit this field, the default of 0 is used.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.',
                  required: [],
                }),
              RunConfig: z
                .object({
                  TimeoutInSeconds: MaxFifteenMinutesInSecondsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>How long the canary is allowed to run before it must stop. You can't set this time to be longer than the frequency of the runs of this canary.</p> <p>If you omit this field, the frequency of the canary is used as this value, up to a maximum of 14 minutes.</p>",
                      }),
                  ).exactOptional(),
                  MemoryInMB: MaxSize3008Schema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.',
                      }),
                  ).exactOptional(),
                  ActiveTracing: NullableBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies whether this canary is to use active X-Ray tracing when it runs. Active tracing enables this canary run to be displayed in the ServiceLens and X-Ray service maps even if the canary does not hit an endpoint that has X-Ray tracing enabled. Using X-Ray tracing incurs charges. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_tracing.html"> Canaries and X-Ray tracing</a>.</p> <p>You can enable active tracing only for canaries that use version <code>syn-nodejs-2.0</code> or later for their canary runtime.</p>',
                      }),
                  ).exactOptional(),
                  EnvironmentVariables: EnvironmentVariablesMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies the keys and values to use for any environment variables used in the canary script. Use the following format:</p> <p>{ "key1" : "value1", "key2" : "value2", ...}</p> <p>Keys must start with a letter and be at least two characters. The total size of your environment variables cannot exceed 4 KB. You can\'t specify any Lambda reserved environment variables as the keys for your environment variables. For more information about reserved keys, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime"> Runtime environment variables</a>.</p> <important> <p>The environment variables keys and values are not encrypted. Do not store sensitive information in this field.</p> </important>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A structure that contains input information for a canary run.',
                  required: [],
                }),
              SuccessRetentionPeriodInDays: z
                .int()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.',
                }),
              FailureRetentionPeriodInDays: z
                .int()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.',
                }),
              RuntimeVersion: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
                }),
              VpcConfig: z
                .object({
                  SubnetIds: SubnetIdsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The IDs of the subnets where this canary is to run.',
                      }),
                  ).exactOptional(),
                  SecurityGroupIds: SecurityGroupIdsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The IDs of the security groups for this canary.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>',
                }),
              ArtifactConfig: z
                .object({
                  S3Encryption: S3EncryptionConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. Artifact encryption functionality is available only for canaries that use Synthetics runtime version syn-nodejs-puppeteer-3.3 or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.',
                  required: [],
                }),
            })
            .openapi({
              required: [
                'Name',
                'Code',
                'ArtifactS3Location',
                'ExecutionRoleArn',
                'Schedule',
                'RuntimeVersion',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCanaryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'RequestEntityTooLargeException',
      content: { 'application/json': { schema: RequestEntityTooLargeExceptionSchema } },
    },
  },
})

export const postGroupRoute = createRoute({
  method: 'post',
  path: '/group',
  description:
    '<p>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.</p> <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p> <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</p>',
  operationId: 'CreateGroup',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    '<p>The name for the group. It can include any Unicode characters.</p> <p>The names for all groups in your account, across all Regions, must be unique.</p>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list of key-value pairs to associate with the group. You can associate as many as 50 tags with a group.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getCanaryNameRoute = createRoute({
  method: 'get',
  path: '/canary/{name}',
  description:
    'Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.',
  operationId: 'GetCanary',
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
      name: z
        .string()
        .regex(/^[0-9a-z_\-]+$/)
        .min(1)
        .max(21)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the canary that you want details for.',
            schema: { type: 'string', pattern: '^[0-9a-z_\\-]+$', minLength: 1, maxLength: 21 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCanaryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteCanaryNameRoute = createRoute({
  method: 'delete',
  path: '/canary/{name}',
  description:
    "<p>Permanently deletes the specified canary.</p> <p>If you specify <code>DeleteLambda</code> to <code>true</code>, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.</p> <p>Other resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>",
  operationId: 'DeleteCanary',
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
      name: z
        .string()
        .regex(/^[0-9a-z_\-]+$/)
        .min(1)
        .max(21)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.',
            schema: { type: 'string', pattern: '^[0-9a-z_\\-]+$', minLength: 1, maxLength: 21 },
          },
        }),
    }),
    query: z.object({
      deleteLambda: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'deleteLambda',
            in: 'query',
            required: false,
            description:
              '<p>Specifies whether to also delete the Lambda functions and layers used by this canary. The default is false.</p> <p>Type: Boolean</p>',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCanaryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const patchCanaryNameRoute = createRoute({
  method: 'patch',
  path: '/canary/{name}',
  description:
    '<p>Updates the configuration of a canary that has already been created.</p> <p>You can\'t use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>',
  operationId: 'UpdateCanary',
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
      name: z
        .string()
        .regex(/^[0-9a-z_\-]+$/)
        .min(1)
        .max(21)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the canary that you want to update. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p> <p>You cannot change the name of a canary that has already been created.</p>',
            schema: { type: 'string', pattern: '^[0-9a-z_\\-]+$', minLength: 1, maxLength: 21 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z
                .object({
                  S3Bucket: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If your canary script is located in S3, specify the bucket name here. Do not include <code>s3://</code> as the start of the bucket name.',
                      }),
                  ).exactOptional(),
                  S3Key: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The S3 key of your script. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html">Working with Amazon S3 Objects</a>.',
                      }),
                  ).exactOptional(),
                  S3Version: StringSchema.and(
                    z.any().openapi({ description: 'The S3 version ID of your script.' }),
                  ).exactOptional(),
                  ZipFile: BlobSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>If you input your canary script directly into the canary instead of referring to an S3 location, the value of this parameter is the base64-encoded contents of the .zip file that contains the script. It must be smaller than 225 Kb.</p> <p>For large canary scripts, we recommend that you use an S3 location instead of inputting it directly with this parameter.</p>',
                      }),
                  ).exactOptional(),
                  Handler: CodeHandlerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The entry point to use for the source code when running the canary. For canaries that use the <code>syn-python-selenium-1.0</code> runtime or a <code>syn-nodejs.puppeteer</code> runtime earlier than <code>syn-nodejs.puppeteer-3.4</code>, the handler must be specified as <code> <i>fileName</i>.handler</code>. For <code>syn-python-selenium-1.1</code>, <code>syn-nodejs.puppeteer-3.4</code>, and later runtimes, the handler can be specified as <code> <i>fileName</i>.<i>functionName</i> </code>, or you can specify a folder where canary scripts reside as <code> <i>folder</i>/<i>fileName</i>.<i>functionName</i> </code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. ',
                  required: [],
                }),
              ExecutionRoleArn: z
                .string()
                .regex(/arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>',
                }),
              RuntimeVersion: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
                }),
              Schedule: z
                .object({
                  Expression: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A <code>rate</code> expression or a <code>cron</code> expression that defines how often the canary is to run.</p> <p>For a rate expression, The syntax is <code>rate(<i>number unit</i>)</code>. <i>unit</i> can be <code>minute</code>, <code>minutes</code>, or <code>hour</code>. </p> <p>For example, <code>rate(1 minute)</code> runs the canary once a minute, <code>rate(10 minutes)</code> runs it once every 10 minutes, and <code>rate(1 hour)</code> runs it once every hour. You can specify a frequency between <code>rate(1 minute)</code> and <code>rate(1 hour)</code>.</p> <p>Specifying <code>rate(0 minute)</code> or <code>rate(0 hour)</code> is a special value that causes the canary to run only once when it is started.</p> <p>Use <code>cron(<i>expression</i>)</code> to specify a cron expression. You can\'t schedule a canary to wait for more than a year before running. For information about the syntax for cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html"> Scheduling canary runs using cron</a>.</p>',
                      }),
                  ).exactOptional(),
                  DurationInSeconds: MaxOneYearInSecondsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value. If you specify 0, the canary continues making runs until you stop it. If you omit this field, the default of 0 is used.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.',
                  required: [],
                }),
              RunConfig: z
                .object({
                  TimeoutInSeconds: MaxFifteenMinutesInSecondsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>How long the canary is allowed to run before it must stop. You can't set this time to be longer than the frequency of the runs of this canary.</p> <p>If you omit this field, the frequency of the canary is used as this value, up to a maximum of 14 minutes.</p>",
                      }),
                  ).exactOptional(),
                  MemoryInMB: MaxSize3008Schema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum amount of memory available to the canary while it is running, in MB. This value must be a multiple of 64.',
                      }),
                  ).exactOptional(),
                  ActiveTracing: NullableBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies whether this canary is to use active X-Ray tracing when it runs. Active tracing enables this canary run to be displayed in the ServiceLens and X-Ray service maps even if the canary does not hit an endpoint that has X-Ray tracing enabled. Using X-Ray tracing incurs charges. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_tracing.html"> Canaries and X-Ray tracing</a>.</p> <p>You can enable active tracing only for canaries that use version <code>syn-nodejs-2.0</code> or later for their canary runtime.</p>',
                      }),
                  ).exactOptional(),
                  EnvironmentVariables: EnvironmentVariablesMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies the keys and values to use for any environment variables used in the canary script. Use the following format:</p> <p>{ "key1" : "value1", "key2" : "value2", ...}</p> <p>Keys must start with a letter and be at least two characters. The total size of your environment variables cannot exceed 4 KB. You can\'t specify any Lambda reserved environment variables as the keys for your environment variables. For more information about reserved keys, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime"> Runtime environment variables</a>.</p> <important> <p>The environment variables keys and values are not encrypted. Do not store sensitive information in this field.</p> </important>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A structure that contains input information for a canary run.',
                  required: [],
                }),
              SuccessRetentionPeriodInDays: z
                .int()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The number of days to retain data about successful runs of this canary.',
                }),
              FailureRetentionPeriodInDays: z
                .int()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The number of days to retain data about failed runs of this canary.',
                }),
              VpcConfig: z
                .object({
                  SubnetIds: SubnetIdsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The IDs of the subnets where this canary is to run.',
                      }),
                  ).exactOptional(),
                  SecurityGroupIds: SecurityGroupIdsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The IDs of the security groups for this canary.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.',
                  required: [],
                }),
              VisualReference: z
                .object({
                  BaseScreenshots: BaseScreenshotsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "An array of screenshots that will be used as the baseline for visual monitoring in future runs of this canary. If there is a screenshot that you don't want to be used for visual monitoring, remove it from this array.",
                      }),
                  ).exactOptional(),
                  BaseCanaryRunId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies which canary run to use the screenshots from as the baseline for future visual monitoring with this canary. Valid values are <code>nextrun</code> to use the screenshots from the next run after this update is made, <code>lastrun</code> to use the screenshots from the most recent run before this update was made, or the value of <code>Id</code> in the <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRun.html"> CanaryRun</a> from any past run of this canary.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>',
                  required: [],
                }),
              ArtifactS3Location: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).",
                }),
              ArtifactConfig: z
                .object({
                  S3Encryption: S3EncryptionConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. Artifact encryption functionality is available only for canaries that use Synthetics runtime version syn-nodejs-puppeteer-3.3 or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.',
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
      content: { 'application/json': { schema: UpdateCanaryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'RequestEntityTooLargeException',
      content: { 'application/json': { schema: RequestEntityTooLargeExceptionSchema } },
    },
  },
})

export const getGroupGroupIdentifierRoute = createRoute({
  method: 'get',
  path: '/group/{groupIdentifier}',
  description:
    'Returns information about one group. Groups are a global resource, so you can use this operation from any Region.',
  operationId: 'GetGroup',
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
      groupIdentifier: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'groupIdentifier',
            in: 'path',
            required: true,
            description:
              'Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteGroupGroupIdentifierRoute = createRoute({
  method: 'delete',
  path: '/group/{groupIdentifier}',
  description:
    "<p>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. </p> <p>Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</p>",
  operationId: 'DeleteGroup',
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
      groupIdentifier: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'groupIdentifier',
            in: 'path',
            required: true,
            description:
              'Specifies which group to delete. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCanariesRoute = createRoute({
  method: 'post',
  path: '/canaries',
  description:
    '<p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>',
  operationId: 'DescribeCanaries',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .min(4)
                .max(252)
                .exactOptional()
                .openapi({
                  description:
                    'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'Specify this parameter to limit how many canaries are returned each time you use the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.',
                }),
              Names: z
                .array(CanaryNameSchema)
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use this parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>',
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
      content: { 'application/json': { schema: DescribeCanariesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postCanariesLastRunRoute = createRoute({
  method: 'post',
  path: '/canaries/last-run',
  description:
    '<p>Use this operation to see information from the most recent run of each canary that you have created.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>',
  operationId: 'DescribeCanariesLastRun',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .min(4)
                .max(252)
                .exactOptional()
                .openapi({
                  description:
                    'A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next set of results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Specify this parameter to limit how many runs are returned each time you use the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.',
                }),
              Names: z
                .array(CanaryNameSchema)
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>',
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
      content: { 'application/json': { schema: DescribeCanariesLastRunResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRuntimeVersionsRoute = createRoute({
  method: 'post',
  path: '/runtime-versions',
  description:
    'Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.',
  operationId: 'DescribeRuntimeVersions',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .min(4)
                .max(252)
                .exactOptional()
                .openapi({
                  description:
                    'A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Specify this parameter to limit how many runs are returned each time you use the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.',
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
      content: { 'application/json': { schema: DescribeRuntimeVersionsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const patchGroupGroupIdentifierDisassociateRoute = createRoute({
  method: 'patch',
  path: '/group/{groupIdentifier}/disassociate',
  description:
    'Removes a canary from a group. You must run this operation in the Region where the canary exists.',
  operationId: 'DisassociateResource',
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
      groupIdentifier: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'groupIdentifier',
            in: 'path',
            required: true,
            description:
              'Specifies the group. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .regex(
                  /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:canary:[0-9a-z_\-]{1,21}/,
                )
                .min(1)
                .max(2048)
                .openapi({
                  description:
                    'The ARN of the canary that you want to remove from the specified group.',
                }),
            })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCanaryNameRunsRoute = createRoute({
  method: 'post',
  path: '/canary/{name}/runs',
  description: 'Retrieves a list of runs for a specified canary.',
  operationId: 'GetCanaryRuns',
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
      name: z
        .string()
        .regex(/^[0-9a-z_\-]+$/)
        .min(1)
        .max(21)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the canary that you want to see runs for.',
            schema: { type: 'string', pattern: '^[0-9a-z_\\-]+$', minLength: 1, maxLength: 21 },
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .min(4)
                .max(252)
                .exactOptional()
                .openapi({
                  description:
                    'A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Specify this parameter to limit how many runs are returned each time you use the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.',
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
      content: { 'application/json': { schema: GetCanaryRunsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postResourceResourceArnGroupsRoute = createRoute({
  method: 'post',
  path: '/resource/{resourceArn}/groups',
  description:
    'Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region.',
  operationId: 'ListAssociatedGroups',
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
        .regex(
          /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:canary:[0-9a-z_\-]{1,21}/,
        )
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the canary that you want to view groups for.',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:canary:[0-9a-z_\\-]{1,21}',
              minLength: 1,
              maxLength: 2048,
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .regex(/^.+$/)
                .min(1)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'Specify this parameter to limit how many groups are returned each time you use the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.',
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
      content: { 'application/json': { schema: ListAssociatedGroupsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postGroupGroupIdentifierResourcesRoute = createRoute({
  method: 'post',
  path: '/group/{groupIdentifier}/resources',
  description:
    'This operation returns a list of the ARNs of the canaries that are associated with the specified group.',
  operationId: 'ListGroupResources',
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
      groupIdentifier: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'groupIdentifier',
            in: 'path',
            required: true,
            description:
              'Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .regex(/^.+$/)
                .min(1)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'Specify this parameter to limit how many canary ARNs are returned each time you use the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.',
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
      content: { 'application/json': { schema: ListGroupResourcesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  description:
    'Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.',
  operationId: 'ListGroups',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .regex(/^.+$/)
                .min(1)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'Specify this parameter to limit how many groups are returned each time you use the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.',
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
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Displays the tags associated with a canary or group.',
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
        .regex(
          /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:(canary|group):[0-9a-z_\-]+/,
        )
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              '<p>The ARN of the canary or group that you want to view tags for.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>',
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:(canary|group):[0-9a-z_\\-]+',
              minLength: 1,
              maxLength: 2048,
            },
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    "<p>Assigns one or more tags (key-value pairs) to the specified canary or group. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary or group.</p>",
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
        .regex(
          /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:(canary|group):[0-9a-z_\-]+/,
        )
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              "<p>The ARN of the canary or group that you're adding tags to.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>",
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:(canary|group):[0-9a-z_\\-]+',
              minLength: 1,
              maxLength: 2048,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description: 'The list of key-value pairs to associate with the resource.',
                }),
            })
            .openapi({ required: ['Tags'] }),
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postCanaryNameStartRoute = createRoute({
  method: 'post',
  path: '/canary/{name}/start',
  description:
    'Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary\'s <code>Schedule</code>. To see a canary\'s schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.',
  operationId: 'StartCanary',
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
      name: z
        .string()
        .regex(/^[0-9a-z_\-]+$/)
        .min(1)
        .max(21)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the canary that you want to run. To find canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.',
            schema: { type: 'string', pattern: '^[0-9a-z_\\-]+$', minLength: 1, maxLength: 21 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartCanaryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCanaryNameStopRoute = createRoute({
  method: 'post',
  path: '/canary/{name}/stop',
  description:
    '<p>Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>',
  operationId: 'StopCanary',
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
      name: z
        .string()
        .regex(/^[0-9a-z_\-]+$/)
        .min(1)
        .max(21)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the canary that you want to stop. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">ListCanaries</a>.',
            schema: { type: 'string', pattern: '^[0-9a-z_\\-]+$', minLength: 1, maxLength: 21 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopCanaryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes one or more tags from the specified resource.',
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
        .regex(
          /arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:(canary|group):[0-9a-z_\-]+/,
        )
        .min(1)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              "<p>The ARN of the canary or group that you're removing tags from.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>",
            schema: {
              type: 'string',
              pattern:
                'arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:(canary|group):[0-9a-z_\\-]+',
              minLength: 1,
              maxLength: 2048,
            },
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})
