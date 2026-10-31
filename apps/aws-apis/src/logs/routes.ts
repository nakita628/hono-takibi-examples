import { createRoute, z } from '@hono/zod-openapi'

const LogGroupNameSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9]+/)
  .min(1)
  .max(512)
  .openapi('LogGroupName')

const KmsKeyIdSchema = z.string().max(256).openapi('KmsKeyId')

const ResourceIdentifierSchema = z
  .string()
  .regex(/[\w+=\/:,.@\-\*]*/)
  .min(1)
  .max(2048)
  .openapi('ResourceIdentifier')

const AssociateKmsKeyRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the log group.</p> <p>In your <code>AssociateKmsKey</code> operation, you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you can't specify both.</p>",
        }),
    ).exactOptional(),
    kmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data. This must be a symmetric KMS key. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource Names</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.',
        }),
    ),
    resourceIdentifier: ResourceIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the target for this operation. You must specify one of the following:</p> <ul> <li> <p>Specify the following ARN to have future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> operations in this account encrypt the results with the specified KMS key. Replace <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p> <p> <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:query-result:*</code> </p> </li> <li> <p>Specify the ARN of a log group to have CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log group. The log group ARN must be in the following format. Replace <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p> <p> <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:log-group:<i>LOG_GROUP_NAME</i> </code> </p> </li> </ul> <p>In your <code>AssociateKmsKey</code> operation, you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you can\'t specify both.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['kmsKeyId'], title: 'AssociateKmsKeyRequest' })
  .openapi('AssociateKmsKeyRequest')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const OperationAbortedExceptionSchema = z.any().openapi('OperationAbortedException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ExportTaskIdSchema = z.string().min(1).max(512).openapi('ExportTaskId')

const CancelExportTaskRequestSchema = z
  .object({
    taskId: ExportTaskIdSchema.and(z.any().openapi({ description: 'The ID of the export task.' })),
  })
  .openapi({ required: ['taskId'], title: 'CancelExportTaskRequest' })
  .openapi('CancelExportTaskRequest')

const InvalidOperationExceptionSchema = z.any().openapi('InvalidOperationException')

const CreateExportTaskResponseSchema = z
  .object({
    taskId: ExportTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the export task.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateExportTaskResponse')

const ExportTaskNameSchema = z.string().min(1).max(512).openapi('ExportTaskName')

const LogStreamNameSchema = z
  .string()
  .regex(/[^:*]*/)
  .min(1)
  .max(512)
  .openapi('LogStreamName')

const TimestampSchema = z.int().min(0).openapi('Timestamp')

const ExportDestinationBucketSchema = z.string().min(1).max(512).openapi('ExportDestinationBucket')

const ExportDestinationPrefixSchema = z.string().openapi('ExportDestinationPrefix')

const CreateExportTaskRequestSchema = z
  .object({
    taskName: ExportTaskNameSchema.and(
      z.any().openapi({ description: 'The name of the export task.' }),
    ).exactOptional(),
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    logStreamNamePrefix: LogStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "Export only log streams that match the provided prefix. If you don't specify a value, no prefix filter is applied.",
        }),
    ).exactOptional(),
    from: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time of the range for the request, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp earlier than this time are not exported.',
        }),
    ),
    to: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end time of the range for the request, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp later than this time are not exported.</p> <p>You must specify a time that is not earlier than when this log group was created.</p>',
        }),
    ),
    destination: ExportDestinationBucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services Region.',
        }),
    ),
    destinationPrefix: ExportDestinationPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            "The prefix used as the start of the key for every object exported. If you don't specify a value, the default is <code>exportedlogs</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['logGroupName', 'from', 'to', 'destination'],
    title: 'CreateExportTaskRequest',
  })
  .openapi('CreateExportTaskRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('TagValue')

const TagsSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('Tags')

const CreateLogGroupRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    kmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource Names</a>.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The key-value pairs to use for the tags.</p> <p>You can grant users access to certain log groups while preventing them from accessing other log groups. To do so, tag your groups and use IAM policies that refer to those tags. To assign tags when you create a log group, you must have either the <code>logs:TagResource</code> or <code>logs:TagLogGroup</code> permission. For more information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['logGroupName'], title: 'CreateLogGroupRequest' })
  .openapi('CreateLogGroupRequest')

const CreateLogStreamRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    logStreamName: LogStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the log stream.' }),
    ),
  })
  .openapi({ required: ['logGroupName', 'logStreamName'], title: 'CreateLogStreamRequest' })
  .openapi('CreateLogStreamRequest')

const PolicyNameSchema = z.string().openapi('PolicyName')

const PolicyTypeSchema = z.literal('DATA_PROTECTION_POLICY').openapi('PolicyType')

const DeleteAccountPolicyRequestSchema = z
  .object({
    policyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the policy to delete.' }),
    ),
    policyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of policy to delete. Currently, the only valid value is <code>DATA_PROTECTION_POLICY</code>.',
        }),
    ),
  })
  .openapi({ required: ['policyName', 'policyType'], title: 'DeleteAccountPolicyRequest' })
  .openapi('DeleteAccountPolicyRequest')

const LogGroupIdentifierSchema = z
  .string()
  .regex(/[\w#+=\/:,.@-]*/)
  .min(1)
  .max(2048)
  .openapi('LogGroupIdentifier')

const DeleteDataProtectionPolicyRequestSchema = z
  .object({
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the log group that you want to delete the data protection policy for.',
        }),
    ),
  })
  .openapi({ required: ['logGroupIdentifier'], title: 'DeleteDataProtectionPolicyRequest' })
  .openapi('DeleteDataProtectionPolicyRequest')

const DestinationNameSchema = z
  .string()
  .regex(/[^:*]*/)
  .min(1)
  .max(512)
  .openapi('DestinationName')

const DeleteDestinationRequestSchema = z
  .object({
    destinationName: DestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the destination.' }),
    ),
  })
  .openapi({ required: ['destinationName'], title: 'DeleteDestinationRequest' })
  .openapi('DeleteDestinationRequest')

const DeleteLogGroupRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
  })
  .openapi({ required: ['logGroupName'], title: 'DeleteLogGroupRequest' })
  .openapi('DeleteLogGroupRequest')

const DeleteLogStreamRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    logStreamName: LogStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the log stream.' }),
    ),
  })
  .openapi({ required: ['logGroupName', 'logStreamName'], title: 'DeleteLogStreamRequest' })
  .openapi('DeleteLogStreamRequest')

const FilterNameSchema = z
  .string()
  .regex(/[^:*]*/)
  .min(1)
  .max(512)
  .openapi('FilterName')

const DeleteMetricFilterRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    filterName: FilterNameSchema.and(
      z.any().openapi({ description: 'The name of the metric filter.' }),
    ),
  })
  .openapi({ required: ['logGroupName', 'filterName'], title: 'DeleteMetricFilterRequest' })
  .openapi('DeleteMetricFilterRequest')

const SuccessSchema = z.boolean().openapi('Success')

const DeleteQueryDefinitionResponseSchema = z
  .object({
    success: SuccessSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value of TRUE indicates that the operation succeeded. FALSE indicates that the operation failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteQueryDefinitionResponse')

const QueryIdSchema = z.string().min(0).max(256).openapi('QueryId')

const DeleteQueryDefinitionRequestSchema = z
  .object({
    queryDefinitionId: QueryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the query definition that you want to delete. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the IDs of your saved query definitions.',
        }),
    ),
  })
  .openapi({ required: ['queryDefinitionId'], title: 'DeleteQueryDefinitionRequest' })
  .openapi('DeleteQueryDefinitionRequest')

const DeleteResourcePolicyRequestSchema = z
  .object({
    policyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the policy to be revoked. This parameter is required.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteResourcePolicyRequest', required: [] })
  .openapi('DeleteResourcePolicyRequest')

const DeleteRetentionPolicyRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
  })
  .openapi({ required: ['logGroupName'], title: 'DeleteRetentionPolicyRequest' })
  .openapi('DeleteRetentionPolicyRequest')

const DeleteSubscriptionFilterRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    filterName: FilterNameSchema.and(
      z.any().openapi({ description: 'The name of the subscription filter.' }),
    ),
  })
  .openapi({ required: ['logGroupName', 'filterName'], title: 'DeleteSubscriptionFilterRequest' })
  .openapi('DeleteSubscriptionFilterRequest')

const AccountPolicyDocumentSchema = z.string().openapi('AccountPolicyDocument')

const ScopeSchema = z.literal('ALL').openapi('Scope')

const AccountIdSchema = z
  .string()
  .regex(/^\d{12}$/)
  .length(12)
  .openapi('AccountId')

const AccountPolicySchema = z
  .object({
    policyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the account policy.' }),
    ).exactOptional(),
    policyDocument: AccountPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The policy document for this account policy.</p> <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>',
        }),
    ).exactOptional(),
    lastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that this policy was most recently updated.' }),
    ).exactOptional(),
    policyType: PolicyTypeSchema.and(
      z.any().openapi({ description: 'The type of policy for this account policy.' }),
    ).exactOptional(),
    scope: ScopeSchema.and(
      z.any().openapi({ description: 'The scope of the account policy.' }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID that the policy applies to.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains information about one CloudWatch Logs account policy.',
    required: [],
  })
  .openapi('AccountPolicy')

const AccountPoliciesSchema = z.array(AccountPolicySchema).openapi('AccountPolicies')

const DescribeAccountPoliciesResponseSchema = z
  .object({
    accountPolicies: AccountPoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of structures that contain information about the CloudWatch Logs account policies that match the specified filters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountPoliciesResponse')

const AccountIdsSchema = z.array(AccountIdSchema).min(0).max(20).openapi('AccountIds')

const DescribeAccountPoliciesRequestSchema = z
  .object({
    policyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to limit the returned policies to only the policies that match the policy type that you specify. Currently, the only valid value is <code>DATA_PROTECTION_POLICY</code>.',
        }),
    ),
    policyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to limit the returned policies to only the policy with the name that you specify.',
        }),
    ).exactOptional(),
    accountIdentifiers: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you are using an account that is set up as a monitoring account for CloudWatch unified cross-account observability, you can use this to specify the account ID of a source account. If you do, the operation returns the account policy for the specified account. Currently, you can specify only one account ID in this parameter.</p> <p>If you omit this parameter, only the policy in the current account is returned.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['policyType'], title: 'DescribeAccountPoliciesRequest' })
  .openapi('DescribeAccountPoliciesRequest')

const TargetArnSchema = z.string().min(1).openapi('TargetArn')

const RoleArnSchema = z.string().min(1).openapi('RoleArn')

const AccessPolicySchema = z.string().min(1).openapi('AccessPolicy')

const ArnSchema = z.string().openapi('Arn')

const DestinationSchema = z
  .object({
    destinationName: DestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the destination.' }),
    ).exactOptional(),
    targetArn: TargetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the physical target where the log events are delivered (for example, a Kinesis stream).',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A role for impersonation, used when delivering log events to the target.',
        }),
    ).exactOptional(),
    accessPolicy: AccessPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM policy document that governs which Amazon Web Services accounts can create subscription filters against this destination.',
        }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of this destination.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creation time of the destination, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a cross-account destination that receives subscription log events.',
    required: [],
  })
  .openapi('Destination')

const DestinationsSchema = z.array(DestinationSchema).openapi('Destinations')

const NextTokenSchema = z
  .string()
  .min(1)
  .openapi({
    description: 'The token for the next set of items to return. The token expires after 24 hours.',
  })
  .openapi('NextToken')

const DescribeDestinationsResponseSchema = z
  .object({
    destinations: DestinationsSchema.and(
      z.any().openapi({ description: 'The destinations.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDestinationsResponse')

const DescribeLimitSchema = z.int().min(1).max(50).openapi('DescribeLimit')

const DescribeDestinationsRequestSchema = z
  .object({
    DestinationNamePrefix: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The prefix to match. If you don't specify a value, no prefix filter is applied.",
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: DescribeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of items returned. If you don't specify a value, the default maximum value of 50 items is used.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDestinationsRequest', required: [] })
  .openapi('DescribeDestinationsRequest')

const ExportTaskStatusCodeSchema = z
  .enum(['CANCELLED', 'COMPLETED', 'FAILED', 'PENDING', 'PENDING_CANCEL', 'RUNNING'])
  .openapi('ExportTaskStatusCode')

const ExportTaskStatusMessageSchema = z.string().openapi('ExportTaskStatusMessage')

const ExportTaskStatusSchema = z
  .object({
    code: ExportTaskStatusCodeSchema.and(
      z.any().openapi({ description: 'The status code of the export task.' }),
    ).exactOptional(),
    message: ExportTaskStatusMessageSchema.and(
      z.any().openapi({ description: 'The status message related to the status code.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the status of an export task.', required: [] })
  .openapi('ExportTaskStatus')

const ExportTaskExecutionInfoSchema = z
  .object({
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creation time of the export task, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
    completionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The completion time of the export task, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the status of an export task.', required: [] })
  .openapi('ExportTaskExecutionInfo')

const ExportTaskSchema = z
  .object({
    taskId: ExportTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the export task.' }),
    ).exactOptional(),
    taskName: ExportTaskNameSchema.and(
      z.any().openapi({ description: 'The name of the export task.' }),
    ).exactOptional(),
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the log group from which logs data was exported.' }),
    ).exactOptional(),
    from: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp before this time are not exported.',
        }),
    ).exactOptional(),
    to: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end time, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp later than this time are not exported.',
        }),
    ).exactOptional(),
    destination: ExportDestinationBucketSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the S3 bucket to which the log data was exported.' }),
    ).exactOptional(),
    destinationPrefix: ExportDestinationPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix that was used as the start of Amazon S3 key for every object exported.',
        }),
    ).exactOptional(),
    status: ExportTaskStatusSchema.and(
      z.any().openapi({ description: 'The status of the export task.' }),
    ).exactOptional(),
    executionInfo: ExportTaskExecutionInfoSchema.and(
      z.any().openapi({ description: 'Execution information about the export task.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an export task.', required: [] })
  .openapi('ExportTask')

const ExportTasksSchema = z.array(ExportTaskSchema).openapi('ExportTasks')

const DescribeExportTasksResponseSchema = z
  .object({
    exportTasks: ExportTasksSchema.and(
      z.any().openapi({ description: 'The export tasks.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExportTasksResponse')

const DescribeExportTasksRequestSchema = z
  .object({
    taskId: ExportTaskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the export task. Specifying a task ID filters the results to one or zero export tasks.',
        }),
    ).exactOptional(),
    statusCode: ExportTaskStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status code of the export task. Specifying a status code filters the results to zero or more export tasks.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: DescribeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeExportTasksRequest', required: [] })
  .openapi('DescribeExportTasksRequest')

const DaysSchema = z
  .int()
  .openapi({
    description:
      '<p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>',
  })
  .openapi('Days')

const FilterCountSchema = z.int().openapi('FilterCount')

const StoredBytesSchema = z.int().min(0).openapi('StoredBytes')

const DataProtectionStatusSchema = z
  .enum(['ACTIVATED', 'DELETED', 'ARCHIVED', 'DISABLED'])
  .openapi('DataProtectionStatus')

const InheritedPropertySchema = z.literal('ACCOUNT_DATA_PROTECTION').openapi('InheritedProperty')

const InheritedPropertiesSchema = z.array(InheritedPropertySchema).openapi('InheritedProperties')

const LogGroupSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.',
        }),
    ).exactOptional(),
    retentionInDays: DaysSchema.exactOptional(),
    metricFilterCount: FilterCountSchema.and(
      z.any().openapi({ description: 'The number of metric filters.' }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the log group.' }),
    ).exactOptional(),
    storedBytes: StoredBytesSchema.and(
      z.any().openapi({ description: 'The number of bytes stored.' }),
    ).exactOptional(),
    kmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data.',
        }),
    ).exactOptional(),
    dataProtectionStatus: DataProtectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays whether this log group has a protection policy, or whether it had one in the past. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.',
        }),
    ).exactOptional(),
    inheritedProperties: InheritedPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays all the properties that this log group has inherited from account-level settings.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a log group.', required: [] })
  .openapi('LogGroup')

const LogGroupsSchema = z.array(LogGroupSchema).openapi('LogGroups')

const DescribeLogGroupsResponseSchema = z
  .object({
    logGroups: LogGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The log groups.</p> <p>If the <code>retentionInDays</code> value is not included for a log group, then that log group's events do not expire.</p>",
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLogGroupsResponse')

const LogGroupNamePatternSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9]*/)
  .min(0)
  .max(512)
  .openapi('LogGroupNamePattern')

const IncludeLinkedAccountsSchema = z.boolean().openapi('IncludeLinkedAccounts')

const DescribeLogGroupsRequestSchema = z
  .object({
    accountIdentifiers: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>includeLinkedAccounts</code> is set to <code>True</code>, use this parameter to specify the list of accounts to search. You can specify as many as 20 account IDs in the array. ',
        }),
    ).exactOptional(),
    logGroupNamePrefix: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix to match.</p> <note> <p> <code>logGroupNamePrefix</code> and <code>logGroupNamePattern</code> are mutually exclusive. Only one of these parameters can be passed. </p> </note>',
        }),
    ).exactOptional(),
    logGroupNamePattern: LogGroupNamePatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specify a string for this parameter, the operation returns only log groups that have names that match the string based on a case-sensitive substring search. For example, if you specify <code>Foo</code>, log groups named <code>FooBar</code>, <code>aws/Foo</code>, and <code>GroupFoo</code> would match, but <code>foo</code>, <code>F/o/o</code> and <code>Froo</code> would not match.</p> <p>If you specify <code>logGroupNamePattern</code> in your request, then only <code>arn</code>, <code>creationTime</code>, and <code>logGroupName</code> are included in the response. </p> <note> <p> <code>logGroupNamePattern</code> and <code>logGroupNamePrefix</code> are mutually exclusive. Only one of these parameters can be passed. </p> </note>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: DescribeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items.",
        }),
    ).exactOptional(),
    includeLinkedAccounts: IncludeLinkedAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you are using a monitoring account, set this to <code>True</code> to have the operation return log groups in the accounts listed in <code>accountIdentifiers</code>.</p> <p>If this parameter is set to <code>true</code> and <code>accountIdentifiers</code> contains a null value, the operation returns all log groups in the monitoring account and all log groups in all source accounts that are linked to the monitoring account. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeLogGroupsRequest', required: [] })
  .openapi('DescribeLogGroupsRequest')

const SequenceTokenSchema = z.string().min(1).openapi('SequenceToken')

const LogStreamSchema = z
  .object({
    logStreamName: LogStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the log stream.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creation time of the stream, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
    firstEventTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the first event, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
    lastEventTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. The <code>lastEventTime</code> value updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but in rare situations might take longer.',
        }),
    ).exactOptional(),
    lastIngestionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ingestion time, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code> The <code>lastIngestionTime</code> value updates on an eventual consistency basis. It typically updates in less than an hour after ingestion, but in rare situations might take longer.',
        }),
    ).exactOptional(),
    uploadSequenceToken: SequenceTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The sequence token.</p> <important> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted regardless of receiving an invalid sequence token. You don't need to obtain <code>uploadSequenceToken</code> to use a <code>PutLogEvents</code> action.</p> </important>",
        }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the log stream.' }),
    ).exactOptional(),
    storedBytes: StoredBytesSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>The number of bytes stored.</p> <p> <b>Important:</b> As of June 17, 2019, this parameter is no longer supported for log streams, and is always reported as zero. This change applies only to log streams. The <code>storedBytes</code> parameter for log groups is not affected.</p>Starting on June 17, 2019, this parameter will be deprecated for log streams, and will be reported as zero. This change applies only to log streams. The storedBytes parameter for log groups is not affected.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a log stream, which is a sequence of log events from a single emitter of logs.',
    required: [],
  })
  .openapi('LogStream')

const LogStreamsSchema = z.array(LogStreamSchema).openapi('LogStreams')

const DescribeLogStreamsResponseSchema = z
  .object({
    logStreams: LogStreamsSchema.and(
      z.any().openapi({ description: 'The log streams.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLogStreamsResponse')

const OrderBySchema = z.enum(['LogStreamName', 'LastEventTime']).openapi('OrderBy')

const DescendingSchema = z.boolean().openapi('Descending')

const DescribeLogStreamsRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the log group.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify either the name or ARN of the log group to view. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
    logStreamNamePrefix: LogStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix to match.</p> <p>If <code>orderBy</code> is <code>LastEventTime</code>, you cannot specify this parameter.</p>',
        }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the value is <code>LogStreamName</code>, the results are ordered by log stream name. If the value is <code>LastEventTime</code>, the results are ordered by the event time. The default value is <code>LogStreamName</code>.</p> <p>If you order the results by event time, you cannot specify the <code>logStreamNamePrefix</code> parameter.</p> <p> <code>lastEventTimestamp</code> represents the time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. <code>lastEventTimestamp</code> updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but in rare situations might take longer.</p>',
        }),
    ).exactOptional(),
    descending: DescendingSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the value is true, results are returned in descending order. If the value is to false, results are returned in ascending order. The default value is false.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: DescribeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeLogStreamsRequest', required: [] })
  .openapi('DescribeLogStreamsRequest')

const FilterPatternSchema = z
  .string()
  .min(0)
  .max(1024)
  .openapi({
    description:
      'A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.',
  })
  .openapi('FilterPattern')

const MetricNameSchema = z
  .string()
  .regex(/[^:*$]*/)
  .max(255)
  .openapi({
    description:
      'The name of the CloudWatch metric to which the monitored log information should be published. For example, you might publish to a metric named ErrorCount.',
  })
  .openapi('MetricName')

const MetricNamespaceSchema = z
  .string()
  .regex(/[^:*$]*/)
  .max(255)
  .openapi('MetricNamespace')

const MetricValueSchema = z
  .string()
  .max(100)
  .openapi({
    description:
      "The value to publish to the CloudWatch metric. For example, if you're counting the occurrences of a term like <code>Error</code>, the value is <code>1</code> for each occurrence. If you're counting the bytes transferred, the value is the value in the log event.",
  })
  .openapi('MetricValue')

const DefaultValueSchema = z.float64().openapi('DefaultValue')

const DimensionsValueSchema = z.string().max(255).openapi('DimensionsValue')

const DimensionsSchema = z.record(z.string(), DimensionsValueSchema).openapi('Dimensions')

const StandardUnitSchema = z
  .enum([
    'Seconds',
    'Microseconds',
    'Milliseconds',
    'Bytes',
    'Kilobytes',
    'Megabytes',
    'Gigabytes',
    'Terabytes',
    'Bits',
    'Kilobits',
    'Megabits',
    'Gigabits',
    'Terabits',
    'Percent',
    'Count',
    'Bytes/Second',
    'Kilobytes/Second',
    'Megabytes/Second',
    'Gigabytes/Second',
    'Terabytes/Second',
    'Bits/Second',
    'Kilobits/Second',
    'Megabits/Second',
    'Gigabits/Second',
    'Terabits/Second',
    'Count/Second',
    'None',
  ])
  .openapi('StandardUnit')

const MetricTransformationSchema = z
  .object({
    metricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the CloudWatch metric.' }),
    ),
    metricNamespace: MetricNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace">Namespaces</a>.',
        }),
    ),
    metricValue: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value to publish to the CloudWatch metric when a filter pattern matches a log event.',
        }),
    ),
    defaultValue: DefaultValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The value to emit when a filter pattern does not match a log event. This value can be null.',
        }),
    ).exactOptional(),
    dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>',
        }),
    ).exactOptional(),
    unit: StandardUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit to assign to the metric. If you omit this, the unit is set as <code>None</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['metricName', 'metricNamespace', 'metricValue'],
    description:
      'Indicates how to transform ingested log events to metric data in a CloudWatch metric.',
  })
  .openapi('MetricTransformation')

const MetricTransformationsSchema = z
  .array(MetricTransformationSchema)
  .length(1)
  .openapi('MetricTransformations')

const MetricFilterSchema = z
  .object({
    filterName: FilterNameSchema.and(
      z.any().openapi({ description: 'The name of the metric filter.' }),
    ).exactOptional(),
    filterPattern: FilterPatternSchema.exactOptional(),
    metricTransformations: MetricTransformationsSchema.and(
      z.any().openapi({ description: 'The metric transformations.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creation time of the metric filter, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.',
    required: [],
  })
  .openapi('MetricFilter')

const MetricFiltersSchema = z.array(MetricFilterSchema).openapi('MetricFilters')

const DescribeMetricFiltersResponseSchema = z
  .object({
    metricFilters: MetricFiltersSchema.and(
      z.any().openapi({ description: 'The metric filters.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMetricFiltersResponse')

const DescribeMetricFiltersRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ).exactOptional(),
    filterNamePrefix: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix to match. CloudWatch Logs uses the value that you set here only if you also include the <code>logGroupName</code> parameter in your request.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: DescribeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items.",
        }),
    ).exactOptional(),
    metricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters results to include only those with the specified metric name. If you include this parameter in your request, you must also include the <code>metricNamespace</code> parameter.',
        }),
    ).exactOptional(),
    metricNamespace: MetricNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters results to include only those in the specified namespace. If you include this parameter in your request, you must also include the <code>metricName</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeMetricFiltersRequest', required: [] })
  .openapi('DescribeMetricFiltersRequest')

const QueryStringSchema = z.string().min(0).max(10000).openapi('QueryString')

const QueryStatusSchema = z
  .enum(['Scheduled', 'Running', 'Complete', 'Failed', 'Cancelled', 'Timeout', 'Unknown'])
  .openapi('QueryStatus')

const QueryInfoSchema = z
  .object({
    queryId: QueryIdSchema.and(
      z.any().openapi({ description: 'The unique ID number of this query.' }),
    ).exactOptional(),
    queryString: QueryStringSchema.and(
      z.any().openapi({ description: 'The query string used in this query.' }),
    ).exactOptional(),
    status: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of this query. Possible values are <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>, and <code>Unknown</code>.',
        }),
    ).exactOptional(),
    createTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that this query was created.' }),
    ).exactOptional(),
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group scanned by this query.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. ',
    required: [],
  })
  .openapi('QueryInfo')

const QueryInfoListSchema = z.array(QueryInfoSchema).openapi('QueryInfoList')

const DescribeQueriesResponseSchema = z
  .object({
    queries: QueryInfoListSchema.and(
      z.any().openapi({ description: 'The list of queries that match the request.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeQueriesResponse')

const DescribeQueriesMaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('DescribeQueriesMaxResults')

const DescribeQueriesRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Limits the returned queries to only those for the specified log group.',
        }),
    ).exactOptional(),
    status: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Limits the returned queries to only those that have the specified status. Valid values are <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>, and <code>Scheduled</code>.',
        }),
    ).exactOptional(),
    maxResults: DescribeQueriesMaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'Limits the number of returned queries to the specified number.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeQueriesRequest', required: [] })
  .openapi('DescribeQueriesRequest')

const QueryDefinitionNameSchema = z.string().min(1).max(255).openapi('QueryDefinitionName')

const QueryDefinitionStringSchema = z.string().min(1).max(10000).openapi('QueryDefinitionString')

const LogGroupNamesSchema = z.array(LogGroupNameSchema).openapi('LogGroupNames')

const QueryDefinitionSchema = z
  .object({
    queryDefinitionId: QueryIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query definition.' }),
    ).exactOptional(),
    name: QueryDefinitionNameSchema.and(
      z.any().openapi({ description: 'The name of the query definition.' }),
    ).exactOptional(),
    queryString: QueryDefinitionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The query string to use for this definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.',
        }),
    ).exactOptional(),
    lastModified: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date that the query definition was most recently modified.' }),
    ).exactOptional(),
    logGroupNames: LogGroupNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this query definition contains a list of log groups that it is limited to, that list appears here.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure contains details about a saved CloudWatch Logs Insights query definition.',
    required: [],
  })
  .openapi('QueryDefinition')

const QueryDefinitionListSchema = z.array(QueryDefinitionSchema).openapi('QueryDefinitionList')

const DescribeQueryDefinitionsResponseSchema = z
  .object({
    queryDefinitions: QueryDefinitionListSchema.and(
      z.any().openapi({ description: 'The list of query definitions that match your request.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeQueryDefinitionsResponse')

const QueryListMaxResultsSchema = z.int().min(1).max(1000).openapi('QueryListMaxResults')

const DescribeQueryDefinitionsRequestSchema = z
  .object({
    queryDefinitionNamePrefix: QueryDefinitionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to filter your results to only the query definitions that have names that start with the prefix you specify.',
        }),
    ).exactOptional(),
    maxResults: QueryListMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'Limits the number of returned query definitions to the specified number.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeQueryDefinitionsRequest', required: [] })
  .openapi('DescribeQueryDefinitionsRequest')

const PolicyDocumentSchema = z.string().min(1).max(5120).openapi('PolicyDocument')

const ResourcePolicySchema = z
  .object({
    policyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the resource policy.' }),
    ).exactOptional(),
    policyDocument: PolicyDocumentSchema.and(
      z.any().openapi({ description: 'The details of the policy.' }),
    ).exactOptional(),
    lastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp showing when this policy was last updated, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A policy enabling one or more entities to put logs to a log group in this account.',
    required: [],
  })
  .openapi('ResourcePolicy')

const ResourcePoliciesSchema = z.array(ResourcePolicySchema).openapi('ResourcePolicies')

const DescribeResourcePoliciesResponseSchema = z
  .object({
    resourcePolicies: ResourcePoliciesSchema.and(
      z.any().openapi({ description: 'The resource policies that exist in this account.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourcePoliciesResponse')

const DescribeResourcePoliciesRequestSchema = z
  .object({
    nextToken: NextTokenSchema.exactOptional(),
    limit: DescribeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of resource policies to be displayed with one call of this API.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeResourcePoliciesRequest', required: [] })
  .openapi('DescribeResourcePoliciesRequest')

const DestinationArnSchema = z.string().min(1).openapi('DestinationArn')

const DistributionSchema = z
  .enum(['Random', 'ByLogStream'])
  .openapi({
    description:
      'The method used to distribute log data to the destination, which can be either random or grouped by log stream.',
  })
  .openapi('Distribution')

const SubscriptionFilterSchema = z
  .object({
    filterName: FilterNameSchema.and(
      z.any().openapi({ description: 'The name of the subscription filter.' }),
    ).exactOptional(),
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ).exactOptional(),
    filterPattern: FilterPatternSchema.exactOptional(),
    destinationArn: DestinationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the destination.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    distribution: DistributionSchema.exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creation time of the subscription filter, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a subscription filter.', required: [] })
  .openapi('SubscriptionFilter')

const SubscriptionFiltersSchema = z.array(SubscriptionFilterSchema).openapi('SubscriptionFilters')

const DescribeSubscriptionFiltersResponseSchema = z
  .object({
    subscriptionFilters: SubscriptionFiltersSchema.and(
      z.any().openapi({ description: 'The subscription filters.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSubscriptionFiltersResponse')

const DescribeSubscriptionFiltersRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    filterNamePrefix: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The prefix to match. If you don't specify a value, no prefix filter is applied.",
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: DescribeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['logGroupName'], title: 'DescribeSubscriptionFiltersRequest' })
  .openapi('DescribeSubscriptionFiltersRequest')

const DisassociateKmsKeyRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the log group.</p> <p>In your <code>DisassociateKmsKey</code> operation, you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you can't specify both.</p>",
        }),
    ).exactOptional(),
    resourceIdentifier: ResourceIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the target for this operation. You must specify one of the following:</p> <ul> <li> <p>Specify the ARN of a log group to stop having CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log group. After you run this operation, CloudWatch Logs encrypts ingested log events with the default CloudWatch Logs method. The log group ARN must be in the following format. Replace <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p> <p> <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:log-group:<i>LOG_GROUP_NAME</i> </code> </p> </li> <li> <p>Specify the following ARN to stop using this key to encrypt the results of future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in this account. Replace <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p> <p> <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:query-result:*</code> </p> </li> </ul> <p>In your <code>DisssociateKmsKey</code> operation, you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you can\'t specify both.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DisassociateKmsKeyRequest', required: [] })
  .openapi('DisassociateKmsKeyRequest')

const EventMessageSchema = z.string().min(1).openapi('EventMessage')

const EventIdSchema = z.string().openapi('EventId')

const FilteredLogEventSchema = z
  .object({
    logStreamName: LogStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the log stream to which this event belongs.' }),
    ).exactOptional(),
    timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
    message: EventMessageSchema.and(
      z.any().openapi({ description: 'The data contained in the log event.' }),
    ).exactOptional(),
    ingestionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event was ingested, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
    eventId: EventIdSchema.and(
      z.any().openapi({ description: 'The ID of the event.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a matched event.', required: [] })
  .openapi('FilteredLogEvent')

const FilteredLogEventsSchema = z.array(FilteredLogEventSchema).openapi('FilteredLogEvents')

const LogStreamSearchedCompletelySchema = z.boolean().openapi('LogStreamSearchedCompletely')

const SearchedLogStreamSchema = z
  .object({
    logStreamName: LogStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the log stream.' }),
    ).exactOptional(),
    searchedCompletely: LogStreamSearchedCompletelySchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether all the events in this log stream were searched.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the search status of a log stream.', required: [] })
  .openapi('SearchedLogStream')

const SearchedLogStreamsSchema = z.array(SearchedLogStreamSchema).openapi('SearchedLogStreams')

const FilterLogEventsResponseSchema = z
  .object({
    events: FilteredLogEventsSchema.and(
      z.any().openapi({ description: 'The matched events.' }),
    ).exactOptional(),
    searchedLogStreams: SearchedLogStreamsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>Important</b> As of May 15, 2020, this parameter is no longer supported. This parameter returns an empty list.</p> <p>Indicates which log streams have been searched and whether each has been searched completely.</p>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use when requesting the next set of items. The token expires after 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterLogEventsResponse')

const InputLogStreamNamesSchema = z
  .array(LogStreamNameSchema)
  .min(1)
  .max(100)
  .openapi('InputLogStreamNames')

const EventsLimitSchema = z.int().min(1).max(10000).openapi('EventsLimit')

const InterleavedSchema = z.boolean().openapi('Interleaved')

const UnmaskSchema = z.boolean().openapi('Unmask')

const FilterLogEventsRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the log group to search.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify either the name or ARN of the log group to view log events from. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
    logStreamNames: InputLogStreamNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the results to only logs from the log streams in this list.</p> <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, the action returns an <code>InvalidParameterException</code> error.</p>',
        }),
    ).exactOptional(),
    logStreamNamePrefix: LogStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the results to include only events from log streams that have names starting with this prefix.</p> <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, but the value for <code>logStreamNamePrefix</code> does not match any log stream names specified in <code>logStreamNames</code>, the action returns an <code>InvalidParameterException</code> error.</p>',
        }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the time range, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp before this time are not returned.',
        }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time range, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp later than this time are not returned.',
        }),
    ).exactOptional(),
    filterPattern: FilterPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filter pattern to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern Syntax</a>.</p> <p>If not provided, all the events are matched.</p>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of events to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: EventsLimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of events to return. The default is 10,000 events.',
        }),
    ).exactOptional(),
    interleaved: InterleavedSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>If the value is true, the operation attempts to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on.</p> <p> <b>Important</b> As of June 17, 2019, this parameter is ignored and the value is assumed to be true. The response from this operation always interleaves events from multiple log streams within a log group.</p>Starting on June 17, 2019, this parameter will be ignored and the value will be assumed to be true. The response from this operation will always interleave events from multiple log streams within a log group.',
        }),
    ).exactOptional(),
    unmask: UnmaskSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible. The default is <code>false</code>.</p> <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code> permission.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'FilterLogEventsRequest', required: [] })
  .openapi('FilterLogEventsRequest')

const DataProtectionPolicyDocumentSchema = z.string().openapi('DataProtectionPolicyDocument')

const GetDataProtectionPolicyResponseSchema = z
  .object({
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The log group name or ARN that you specified in your request.' }),
    ).exactOptional(),
    policyDocument: DataProtectionPolicyDocumentSchema.and(
      z.any().openapi({ description: 'The data protection policy document for this log group.' }),
    ).exactOptional(),
    lastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that this policy was most recently updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataProtectionPolicyResponse')

const GetDataProtectionPolicyRequestSchema = z
  .object({
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the log group that contains the data protection policy that you want to see.',
        }),
    ),
  })
  .openapi({ required: ['logGroupIdentifier'], title: 'GetDataProtectionPolicyRequest' })
  .openapi('GetDataProtectionPolicyRequest')

const OutputLogEventSchema = z
  .object({
    timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
    message: EventMessageSchema.and(
      z.any().openapi({ description: 'The data contained in the log event.' }),
    ).exactOptional(),
    ingestionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event was ingested, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a log event.', required: [] })
  .openapi('OutputLogEvent')

const OutputLogEventsSchema = z.array(OutputLogEventSchema).openapi('OutputLogEvents')

const GetLogEventsResponseSchema = z
  .object({
    events: OutputLogEventsSchema.and(
      z.any().openapi({ description: 'The events.' }),
    ).exactOptional(),
    nextForwardToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items in the forward direction. The token expires after 24 hours. If you have reached the end of the stream, it returns the same token you passed in.',
        }),
    ).exactOptional(),
    nextBackwardToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items in the backward direction. The token expires after 24 hours. This token is not null. If you have reached the end of the stream, it returns the same token you passed in.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLogEventsResponse')

const StartFromHeadSchema = z.boolean().openapi('StartFromHead')

const GetLogEventsRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the log group.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify either the name or ARN of the log group to view events from. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
    logStreamName: LogStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the log stream.' }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the time range, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp equal to this time or later than this time are included. Events with a timestamp earlier than this time are not included.',
        }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time range, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp equal to or later than this time are not included.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
    limit: EventsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of log events returned. If you don't specify a limit, the default is as many log events as can fit in a response size of 1 MB (up to 10,000 log events).",
        }),
    ).exactOptional(),
    startFromHead: StartFromHeadSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is false.</p> <p>If you are using a previous <code>nextForwardToken</code> value as the <code>nextToken</code> in this operation, you must specify <code>true</code> for <code>startFromHead</code>.</p>',
        }),
    ).exactOptional(),
    unmask: UnmaskSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible. The default is <code>false</code>.</p> <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code> permission.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['logStreamName'], title: 'GetLogEventsRequest' })
  .openapi('GetLogEventsRequest')

const FieldSchema = z.string().openapi('Field')

const PercentageSchema = z.int().min(0).max(100).openapi('Percentage')

const LogGroupFieldSchema = z
  .object({
    name: FieldSchema.and(
      z.any().openapi({ description: 'The name of a log field.' }),
    ).exactOptional(),
    percent: PercentageSchema.and(
      z
        .any()
        .openapi({ description: 'The percentage of log events queried that contained the field.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.',
    required: [],
  })
  .openapi('LogGroupField')

const LogGroupFieldListSchema = z.array(LogGroupFieldSchema).openapi('LogGroupFieldList')

const GetLogGroupFieldsResponseSchema = z
  .object({
    logGroupFields: LogGroupFieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of fields found in the query. Each object in the array contains the name of the field, along with the percentage of time it appeared in the log events that were queried.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLogGroupFieldsResponse')

const GetLogGroupFieldsRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the log group to search.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
    time: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time to set as the center of the query. If you specify <code>time</code>, the 8 minutes before and 8 minutes after this time are searched. If you omit <code>time</code>, the most recent 15 minutes up to the current time are searched.</p> <p>The <code>time</code> value is specified as epoch time, which is the number of seconds since <code>January 1, 1970, 00:00:00 UTC</code>.</p>',
        }),
    ).exactOptional(),
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify either the name or ARN of the log group to view. If the log group is in a source account and you are using a monitoring account, you must specify the ARN.</p> <note> <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not both. </p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetLogGroupFieldsRequest', required: [] })
  .openapi('GetLogGroupFieldsRequest')

const ValueSchema = z.string().openapi('Value')

const LogRecordSchema = z.record(z.string(), ValueSchema).openapi('LogRecord')

const GetLogRecordResponseSchema = z
  .object({
    logRecord: LogRecordSchema.and(
      z.any().openapi({ description: 'The requested log event, as a JSON string.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLogRecordResponse')

const LogRecordPointerSchema = z.string().openapi('LogRecordPointer')

const GetLogRecordRequestSchema = z
  .object({
    logRecordPointer: LogRecordPointerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pointer corresponding to the log event record you want to retrieve. You get this from the response of a <code>GetQueryResults</code> operation. In that response, the value of the <code>@ptr</code> field for a log event is the value to use as <code>logRecordPointer</code> to retrieve that complete log event record.',
        }),
    ),
    unmask: UnmaskSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible. The default is <code>false</code>.</p> <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code> permission.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['logRecordPointer'], title: 'GetLogRecordRequest' })
  .openapi('GetLogRecordRequest')

const ResultFieldSchema = z
  .object({
    field: FieldSchema.and(
      z.any().openapi({ description: 'The log event field.' }),
    ).exactOptional(),
    value: ValueSchema.and(
      z.any().openapi({ description: 'The value of this field.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p> <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p>',
    required: [],
  })
  .openapi('ResultField')

const ResultRowsSchema = z.array(ResultFieldSchema).openapi('ResultRows')

const QueryResultsSchema = z.array(ResultRowsSchema).openapi('QueryResults')

const StatsValueSchema = z.float64().openapi('StatsValue')

const QueryStatisticsSchema = z
  .object({
    recordsMatched: StatsValueSchema.and(
      z.any().openapi({ description: 'The number of log events that matched the query string.' }),
    ).exactOptional(),
    recordsScanned: StatsValueSchema.and(
      z.any().openapi({ description: 'The total number of log events scanned during the query.' }),
    ).exactOptional(),
    bytesScanned: StatsValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of bytes in the log events scanned during the query.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.',
    required: [],
  })
  .openapi('QueryStatistics')

const EncryptionKeySchema = z.string().max(256).openapi('EncryptionKey')

const GetQueryResultsResponseSchema = z
  .object({
    results: QueryResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The log events that matched the query criteria during the most recent time it ran.</p> <p>The <code>results</code> value is an array of arrays. Each log event is one object in the top-level array. Each of these log event objects is an array of <code>field</code>/<code>value</code> pairs.</p>',
        }),
    ).exactOptional(),
    statistics: QueryStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Includes the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the scanned log events. These values reflect the full raw results of the query.',
        }),
    ).exactOptional(),
    status: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the most recent running of the query. Possible values are <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>, <code>Timeout</code>, and <code>Unknown</code>.</p> <p>Queries time out after 60 minutes of runtime. To avoid having your queries time out, reduce the time range being searched or partition your query into a number of queries.</p>',
        }),
    ).exactOptional(),
    encryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'If you associated an KMS key with the CloudWatch Logs Insights query results in this account, this field displays the ARN of the key that\'s used to encrypt the query results when <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> stores them.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQueryResultsResponse')

const GetQueryResultsRequestSchema = z
  .object({
    queryId: QueryIdSchema.and(z.any().openapi({ description: 'The ID number of the query.' })),
  })
  .openapi({ required: ['queryId'], title: 'GetQueryResultsRequest' })
  .openapi('GetQueryResultsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'The list of tags associated with the requested resource.&gt;' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z
  .string()
  .regex(/[\w+=\/:,.@-]*/)
  .min(1)
  .max(1011)
  .openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the resource that you want to view tags for.</p> <p>The ARN format of a log group is <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i> </code> </p> <p>The ARN format of a destination is <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs resources and operations</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTagsLogGroupResponseSchema = z
  .object({
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags for the log group.' }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description:
      'Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse',
    required: [],
  })
  .openapi('ListTagsLogGroupResponse')

const ListTagsLogGroupRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
  })
  .openapi({
    required: ['logGroupName'],
    deprecated: true,
    title: 'ListTagsLogGroupRequest',
    description:
      'Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse',
  })
  .openapi('ListTagsLogGroupRequest')

const PutAccountPolicyResponseSchema = z
  .object({
    accountPolicy: AccountPolicySchema.and(
      z.any().openapi({ description: 'The account policy that you created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutAccountPolicyResponse')

const PutAccountPolicyRequestSchema = z
  .object({
    policyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({ description: 'A name for the policy. This must be unique within the account.' }),
    ),
    policyDocument: AccountPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the data protection policy, in JSON.</p> <p>This policy must include two JSON blocks:</p> <ul> <li> <p>The first block must include both a <code>DataIdentifer</code> array and an <code>Operation</code> property with an <code>Audit</code> action. The <code>DataIdentifer</code> array lists the types of sensitive data that you want to mask. For more information about the available options, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html">Types of data that you can mask</a>.</p> <p>The <code>Operation</code> property with an <code>Audit</code> action is required to find the sensitive data terms. This <code>Audit</code> action must contain a <code>FindingsDestination</code> object. You can optionally use that <code>FindingsDestination</code> object to list one or more destinations to send audit findings to. If you specify destinations such as log groups, Kinesis Data Firehose streams, and S3 buckets, they must already exist.</p> </li> <li> <p>The second block must include both a <code>DataIdentifer</code> array and an <code>Operation</code> property with an <code>Deidentify</code> action. The <code>DataIdentifer</code> array must exactly match the <code>DataIdentifer</code> array in the first block of the policy.</p> <p>The <code>Operation</code> property with the <code>Deidentify</code> action is what actually masks the data, and it must contain the <code> "MaskConfig": {}</code> object. The <code> "MaskConfig": {}</code> object must be empty.</p> </li> </ul> <p>For an example data protection policy, see the <b>Examples</b> section on this page.</p> <important> <p>The contents of the two <code>DataIdentifer</code> arrays must match exactly.</p> </important> <p>In addition to the two JSON blocks, the <code>policyDocument</code> can also include <code>Name</code>, <code>Description</code>, and <code>Version</code> fields. The <code>Name</code> is different than the operation\'s <code>policyName</code> parameter, and is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch.</p> <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>',
        }),
    ),
    policyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Currently the only valid value for this parameter is <code>DATA_PROTECTION_POLICY</code>.',
        }),
    ),
    scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Currently the only valid value for this parameter is <code>ALL</code>, which specifies that the data protection policy applies to all log groups in the account. If you omit this parameter, the default of <code>ALL</code> is used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['policyName', 'policyDocument', 'policyType'],
    title: 'PutAccountPolicyRequest',
  })
  .openapi('PutAccountPolicyRequest')

const PutDataProtectionPolicyResponseSchema = z
  .object({
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The log group name or ARN that you specified in your request.' }),
    ).exactOptional(),
    policyDocument: DataProtectionPolicyDocumentSchema.and(
      z.any().openapi({ description: 'The data protection policy used for this log group.' }),
    ).exactOptional(),
    lastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that this policy was most recently updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutDataProtectionPolicyResponse')

const PutDataProtectionPolicyRequestSchema = z
  .object({
    logGroupIdentifier: LogGroupIdentifierSchema.and(
      z.any().openapi({ description: 'Specify either the log group name or log group ARN.' }),
    ),
    policyDocument: DataProtectionPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the data protection policy, in JSON.</p> <p>This policy must include two JSON blocks:</p> <ul> <li> <p>The first block must include both a <code>DataIdentifer</code> array and an <code>Operation</code> property with an <code>Audit</code> action. The <code>DataIdentifer</code> array lists the types of sensitive data that you want to mask. For more information about the available options, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html">Types of data that you can mask</a>.</p> <p>The <code>Operation</code> property with an <code>Audit</code> action is required to find the sensitive data terms. This <code>Audit</code> action must contain a <code>FindingsDestination</code> object. You can optionally use that <code>FindingsDestination</code> object to list one or more destinations to send audit findings to. If you specify destinations such as log groups, Kinesis Data Firehose streams, and S3 buckets, they must already exist.</p> </li> <li> <p>The second block must include both a <code>DataIdentifer</code> array and an <code>Operation</code> property with an <code>Deidentify</code> action. The <code>DataIdentifer</code> array must exactly match the <code>DataIdentifer</code> array in the first block of the policy.</p> <p>The <code>Operation</code> property with the <code>Deidentify</code> action is what actually masks the data, and it must contain the <code> "MaskConfig": {}</code> object. The <code> "MaskConfig": {}</code> object must be empty.</p> </li> </ul> <p>For an example data protection policy, see the <b>Examples</b> section on this page.</p> <important> <p>The contents of the two <code>DataIdentifer</code> arrays must match exactly.</p> </important> <p>In addition to the two JSON blocks, the <code>policyDocument</code> can also include <code>Name</code>, <code>Description</code>, and <code>Version</code> fields. The <code>Name</code> is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch.</p> <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>',
        }),
    ),
  })
  .openapi({
    required: ['logGroupIdentifier', 'policyDocument'],
    title: 'PutDataProtectionPolicyRequest',
  })
  .openapi('PutDataProtectionPolicyRequest')

const PutDestinationResponseSchema = z
  .object({
    destination: DestinationSchema.and(
      z.any().openapi({ description: 'The destination.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutDestinationResponse')

const PutDestinationRequestSchema = z
  .object({
    destinationName: DestinationNameSchema.and(
      z.any().openapi({ description: 'A name for the destination.' }),
    ),
    targetArn: TargetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an Amazon Kinesis stream to which to deliver matching log events.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon Kinesis <code>PutRecord</code> operation on the destination stream.',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of key-value pairs to associate with the resource.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['destinationName', 'targetArn', 'roleArn'],
    title: 'PutDestinationRequest',
  })
  .openapi('PutDestinationRequest')

const ForceUpdateSchema = z.boolean().openapi('ForceUpdate')

const PutDestinationPolicyRequestSchema = z
  .object({
    destinationName: DestinationNameSchema.and(
      z.any().openapi({ description: 'A name for an existing destination.' }),
    ),
    accessPolicy: AccessPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM policy document that authorizes cross-account users to deliver their log events to the associated destination. This can be up to 5120 bytes.',
        }),
    ),
    forceUpdate: ForceUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual Amazon Web Services accounts. Before you update a destination policy this way, you must first update the subscription filters in the accounts that send logs to this destination. If you do not, the subscription filters might stop working. By specifying <code>true</code> for <code>forceUpdate</code>, you are affirming that you have already updated the subscription filters. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Cross-Account-Log_Subscription-Update.html"> Updating an existing cross-account subscription</a> </p> <p>If you omit this parameter, the default of <code>false</code> is used.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['destinationName', 'accessPolicy'], title: 'PutDestinationPolicyRequest' })
  .openapi('PutDestinationPolicyRequest')

const LogEventIndexSchema = z.int().openapi('LogEventIndex')

const RejectedLogEventsInfoSchema = z
  .object({
    tooNewLogEventStartIndex: LogEventIndexSchema.and(
      z.any().openapi({ description: 'The log events that are too new.' }),
    ).exactOptional(),
    tooOldLogEventEndIndex: LogEventIndexSchema.and(
      z.any().openapi({ description: 'The log events that are dated too far in the past.' }),
    ).exactOptional(),
    expiredLogEventEndIndex: LogEventIndexSchema.and(
      z.any().openapi({ description: 'The expired log events.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the rejected events.', required: [] })
  .openapi('RejectedLogEventsInfo')

const PutLogEventsResponseSchema = z
  .object({
    nextSequenceToken: SequenceTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The next sequence token.</p> <important> <p>This field has been deprecated.</p> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream and you do not need to wait for the response of a previous <code>PutLogEvents</code> action to obtain the <code>nextSequenceToken</code> value.</p> </important>',
        }),
    ).exactOptional(),
    rejectedLogEventsInfo: RejectedLogEventsInfoSchema.and(
      z.any().openapi({ description: 'The rejected events.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutLogEventsResponse')

const InputLogEventSchema = z
  .object({
    timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.',
        }),
    ),
    message: EventMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The raw event message. Each log event can be no larger than 256 KB.',
        }),
    ),
  })
  .openapi({
    required: ['timestamp', 'message'],
    description:
      'Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.',
  })
  .openapi('InputLogEvent')

const InputLogEventsSchema = z
  .array(InputLogEventSchema)
  .min(1)
  .max(10000)
  .openapi('InputLogEvents')

const PutLogEventsRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    logStreamName: LogStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the log stream.' }),
    ),
    logEvents: InputLogEventsSchema.and(z.any().openapi({ description: 'The log events.' })),
    sequenceToken: SequenceTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The sequence token obtained from the response of the previous <code>PutLogEvents</code> call.</p> <important> <p>The <code>sequenceToken</code> parameter is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are now accepted and never return <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['logGroupName', 'logStreamName', 'logEvents'],
    title: 'PutLogEventsRequest',
  })
  .openapi('PutLogEventsRequest')

const InvalidSequenceTokenExceptionSchema = z.any().openapi('InvalidSequenceTokenException')

const DataAlreadyAcceptedExceptionSchema = z.any().openapi('DataAlreadyAcceptedException')

const UnrecognizedClientExceptionSchema = z.any().openapi('UnrecognizedClientException')

const PutMetricFilterRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    filterName: FilterNameSchema.and(
      z.any().openapi({ description: 'A name for the metric filter.' }),
    ),
    filterPattern: FilterPatternSchema.and(
      z
        .any()
        .openapi({
          description: 'A filter pattern for extracting metric data out of ingested log events.',
        }),
    ),
    metricTransformations: MetricTransformationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of information that defines how metric data gets emitted.',
        }),
    ),
  })
  .openapi({
    required: ['logGroupName', 'filterName', 'filterPattern', 'metricTransformations'],
    title: 'PutMetricFilterRequest',
  })
  .openapi('PutMetricFilterRequest')

const PutQueryDefinitionResponseSchema = z
  .object({
    queryDefinitionId: QueryIdSchema.and(
      z.any().openapi({ description: 'The ID of the query definition.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutQueryDefinitionResponse')

const PutQueryDefinitionRequestSchema = z
  .object({
    name: QueryDefinitionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the query definition. If you are saving numerous query definitions, we recommend that you name them. This way, you can find the ones you want by using the first part of the name as a filter in the <code>queryDefinitionNamePrefix</code> parameter of <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a>.',
        }),
    ),
    queryDefinitionId: QueryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you are updating a query definition, use this parameter to specify the ID of the query definition that you want to update. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the IDs of your saved query definitions.</p> <p>If you are creating a query definition, do not specify this parameter. CloudWatch generates a unique ID for the new query definition and include it in the response to this operation.</p>',
        }),
    ).exactOptional(),
    logGroupNames: LogGroupNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this parameter to include specific log groups as part of your query definition.</p> <p>If you are updating a query definition and you omit this parameter, then the updated definition will contain no log groups.</p>',
        }),
    ).exactOptional(),
    queryString: QueryDefinitionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The query string to use for this definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.',
        }),
    ),
  })
  .openapi({ required: ['name', 'queryString'], title: 'PutQueryDefinitionRequest' })
  .openapi('PutQueryDefinitionRequest')

const PutResourcePolicyResponseSchema = z
  .object({
    resourcePolicy: ResourcePolicySchema.and(
      z.any().openapi({ description: 'The new policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutResourcePolicyResponse')

const PutResourcePolicyRequestSchema = z
  .object({
    policyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'Name of the new policy. This parameter is required.' }),
    ).exactOptional(),
    policyDocument: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. This parameter is required.</p> <p>The following example creates a resource policy enabling the Route 53 service to put DNS query logs in to the specified log group. Replace <code>"logArn"</code> with the ARN of your CloudWatch Logs resource, such as a log group or log stream.</p> <p>CloudWatch Logs also supports <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn">aws:SourceArn</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceaccount">aws:SourceAccount</a> condition context keys.</p> <p>In the example resource policy, you would replace the value of <code>SourceArn</code> with the resource making the call from Route 53 to CloudWatch Logs. You would also replace the value of <code>SourceAccount</code> with the Amazon Web Services account ID making that call.</p> <p/> <p> <code>{ "Version": "2012-10-17", "Statement": [ { "Sid": "Route53LogsToCloudWatchLogs", "Effect": "Allow", "Principal": { "Service": [ "route53.amazonaws.com" ] }, "Action": "logs:PutLogEvents", "Resource": "logArn", "Condition": { "ArnLike": { "aws:SourceArn": "myRoute53ResourceArn" }, "StringEquals": { "aws:SourceAccount": "myAwsAccountId" } } } ] }</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutResourcePolicyRequest', required: [] })
  .openapi('PutResourcePolicyRequest')

const PutRetentionPolicyRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    retentionInDays: DaysSchema,
  })
  .openapi({ required: ['logGroupName', 'retentionInDays'], title: 'PutRetentionPolicyRequest' })
  .openapi('PutRetentionPolicyRequest')

const PutSubscriptionFilterRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    filterName: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the subscription filter. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. To find the name of the filter currently associated with a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html">DescribeSubscriptionFilters</a>.',
        }),
    ),
    filterPattern: FilterPatternSchema.and(
      z
        .any()
        .openapi({
          description: 'A filter pattern for subscribing to a filtered stream of log events.',
        }),
    ),
    destinationArn: DestinationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the destination to deliver matching log events to. Currently, the supported destinations are:</p> <ul> <li> <p>An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination (specified using an ARN) belonging to a different account, for cross-account delivery.</p> <p>If you\'re setting up a cross-account subscription, the destination must have an IAM policy associated with it. The IAM policy must allow the sender to send logs to the destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a>.</p> </li> <li> <p>A Kinesis Data Firehose delivery stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A Lambda function belonging to the same account as the subscription filter, for same-account delivery.</p> </li> </ul>',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.",
        }),
    ).exactOptional(),
    distribution: DistributionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis data stream. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['logGroupName', 'filterName', 'filterPattern', 'destinationArn'],
    title: 'PutSubscriptionFilterRequest',
  })
  .openapi('PutSubscriptionFilterRequest')

const StartQueryResponseSchema = z
  .object({
    queryId: QueryIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the query. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartQueryResponse')

const LogGroupIdentifiersSchema = z.array(LogGroupIdentifierSchema).openapi('LogGroupIdentifiers')

const StartQueryRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The log group on which to perform the query.</p> <note> <p>A <code>StartQuery</code> operation must include exactly one of the following parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or <code>logGroupIdentifiers</code>. </p> </note>',
        }),
    ).exactOptional(),
    logGroupNames: LogGroupNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of log groups to be queried. You can include up to 50 log groups.</p> <note> <p>A <code>StartQuery</code> operation must include exactly one of the following parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or <code>logGroupIdentifiers</code>. </p> </note>',
        }),
    ).exactOptional(),
    logGroupIdentifiers: LogGroupIdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The list of log groups to query. You can include up to 50 log groups.</p> <p>You can specify them by the log group name or ARN. If a log group that you're querying is in a source account and you're using a monitoring account, you must specify the ARN of the log group here. The query definition must also be defined in the monitoring account.</p> <p>If you specify an ARN, the ARN can't end with an asterisk (*).</p> <p>A <code>StartQuery</code> operation must include exactly one of the following parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or <code>logGroupIdentifiers</code>. </p>",
        }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning of the time range to query. The range is inclusive, so the specified start time is included in the query. Specified as epoch time, the number of seconds since <code>January 1, 1970, 00:00:00 UTC</code>.',
        }),
    ),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time range to query. The range is inclusive, so the specified end time is included in the query. Specified as epoch time, the number of seconds since <code>January 1, 1970, 00:00:00 UTC</code>.',
        }),
    ),
    queryString: QueryStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The query string to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.',
        }),
    ),
    limit: EventsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of log events to return in the query. If the query string uses the <code>fields</code> command, only the specified fields and their values are returned. The default is 1000.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['startTime', 'endTime', 'queryString'], title: 'StartQueryRequest' })
  .openapi('StartQueryRequest')

const MalformedQueryExceptionSchema = z.any().openapi('MalformedQueryException')

const StopQueryResponseSchema = z
  .object({
    success: SuccessSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is true if the query was stopped by the <code>StopQuery</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopQueryResponse')

const StopQueryRequestSchema = z
  .object({
    queryId: QueryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID number of the query to stop. To find this ID number, use <code>DescribeQueries</code>.',
        }),
    ),
  })
  .openapi({ required: ['queryId'], title: 'StopQueryRequest' })
  .openapi('StopQueryRequest')

const TagLogGroupRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The key-value pairs to use for the tags.' }),
    ),
  })
  .openapi({
    required: ['logGroupName', 'tags'],
    deprecated: true,
    title: 'TagLogGroupRequest',
    description: 'Please use the generic tagging API model TagResourceRequest',
  })
  .openapi('TagLogGroupRequest')

const TagResourceRequestSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the resource that you\'re adding tags to.</p> <p>The ARN format of a log group is <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i> </code> </p> <p>The ARN format of a destination is <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs resources and operations</a>.</p>',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'The list of key-value pairs to associate with the resource.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const EventNumberSchema = z.int().openapi('EventNumber')

const ExtractedValuesSchema = z.record(z.string(), ValueSchema).openapi('ExtractedValues')

const MetricFilterMatchRecordSchema = z
  .object({
    eventNumber: EventNumberSchema.and(
      z.any().openapi({ description: 'The event number.' }),
    ).exactOptional(),
    eventMessage: EventMessageSchema.and(
      z.any().openapi({ description: 'The raw event data.' }),
    ).exactOptional(),
    extractedValues: ExtractedValuesSchema.and(
      z.any().openapi({ description: 'The values extracted from the event data by the filter.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a matched event.', required: [] })
  .openapi('MetricFilterMatchRecord')

const MetricFilterMatchesSchema = z
  .array(MetricFilterMatchRecordSchema)
  .openapi('MetricFilterMatches')

const TestMetricFilterResponseSchema = z
  .object({
    matches: MetricFilterMatchesSchema.and(
      z.any().openapi({ description: 'The matched events.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestMetricFilterResponse')

const TestEventMessagesSchema = z
  .array(EventMessageSchema)
  .min(1)
  .max(50)
  .openapi('TestEventMessages')

const TestMetricFilterRequestSchema = z
  .object({
    filterPattern: FilterPatternSchema,
    logEventMessages: TestEventMessagesSchema.and(
      z.any().openapi({ description: 'The log event messages to test.' }),
    ),
  })
  .openapi({ required: ['filterPattern', 'logEventMessages'], title: 'TestMetricFilterRequest' })
  .openapi('TestMetricFilterRequest')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]+)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagListSchema = z.array(TagKeySchema).min(1).openapi('TagList')

const UntagLogGroupRequestSchema = z
  .object({
    logGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tag keys. The corresponding tags are removed from the log group.',
        }),
    ),
  })
  .openapi({
    required: ['logGroupName', 'tags'],
    deprecated: true,
    title: 'UntagLogGroupRequest',
    description: 'Please use the generic tagging API model UntagResourceRequest',
  })
  .openapi('UntagLogGroupRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the CloudWatch Logs resource that you\'re removing tags from.</p> <p>The ARN format of a log group is <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i> </code> </p> <p>The ARN format of a destination is <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs resources and operations</a>.</p>',
        }),
    ),
    tagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The list of tag keys to remove from the resource.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const DimensionsKeySchema = z.string().max(255).openapi('DimensionsKey')

const TokenSchema = z.string().openapi('Token')

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

export const postXAmzTargetLogs20140328AssociateKmsKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.AssociateKmsKey',
  description:
    '<p>Associates the specified KMS key with either one log group in the account, or with all stored CloudWatch Logs query insights results in the account.</p> <p>When you use <code>AssociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter or the <code>resourceIdentifier</code> parameter. You can\'t specify both of those parameters in the same operation.</p> <ul> <li> <p>Specify the <code>logGroupName</code> parameter to cause all log events stored in the log group to be encrypted with that key. Only the log events ingested after the key is associated are encrypted with that key.</p> <p>Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>Associating a key with a log group does not cause the results of queries of that log group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an <code>AssociateKmsKey</code> operation with the <code>resourceIdentifier</code> parameter that specifies a <code>query-result</code> resource. </p> </li> <li> <p>Specify the <code>resourceIdentifier</code> parameter with a <code>query-result</code> resource, to use that key to encrypt the stored results of all future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in the account. The response from a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> operation will still return the query results in plain text.</p> <p>Even if you have not associated a key with your query results, the query results are encrypted when stored, using the default CloudWatch Logs method.</p> <p>If you run a query from a monitoring account that queries logs in a source account, the query results key from the monitoring account, if any, is used.</p> </li> </ul> <important> <p>If you delete the key that is used to encrypt log events or log group query results, then all the associated stored log events or query results that were encrypted with that key will be unencryptable and unusable.</p> </important> <note> <p>CloudWatch Logs supports only symmetric KMS keys. Do not use an associate an asymmetric KMS key with your log group or query results. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </note> <p>It can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p>',
  operationId: 'AssociateKmsKey',
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
        .literal('Logs_20140328.AssociateKmsKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.AssociateKmsKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateKmsKeyRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328CancelExportTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.CancelExportTask',
  description:
    '<p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>',
  operationId: 'CancelExportTask',
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
        .literal('Logs_20140328.CancelExportTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.CancelExportTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelExportTaskRequestSchema } },
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
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328CreateExportTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.CreateExportTask',
  description:
    '<p>Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.</p> <p>Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. </p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <note> <p>Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.</p> </note>',
  operationId: 'CreateExportTask',
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
        .literal('Logs_20140328.CreateExportTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.CreateExportTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateExportTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExportTaskResponseSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328CreateLogGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.CreateLogGroup',
  description:
    "<p>Creates a log group with the specified name. You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a Region for an Amazon Web Services account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use <a href=\"https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html\">PutRetentionPolicy</a>.</p> <p>If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html\">Using Symmetric and Asymmetric Keys</a>.</p> </important>",
  operationId: 'CreateLogGroup',
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
        .literal('Logs_20140328.CreateLogGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.CreateLogGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLogGroupRequestSchema } },
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
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328CreateLogStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.CreateLogStream',
  description:
    "<p>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>Don't use ':' (colon) or '*' (asterisk) characters.</p> </li> </ul>",
  operationId: 'CreateLogStream',
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
        .literal('Logs_20140328.CreateLogStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.CreateLogStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLogStreamRequestSchema } },
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
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteAccountPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteAccountPolicy',
  description:
    '<p>Deletes a CloudWatch Logs account policy.</p> <p>To use this operation, you must be signed on with the <code>logs:DeleteDataProtectionPolicy</code> and <code>logs:DeleteAccountPolicy</code> permissions.</p>',
  operationId: 'DeleteAccountPolicy',
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
        .literal('Logs_20140328.DeleteAccountPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteAccountPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAccountPolicyRequestSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteDataProtectionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy',
  description:
    '<p>Deletes the data protection policy from the specified log group. </p> <p>For more information about data protection policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>',
  operationId: 'DeleteDataProtectionPolicy',
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
        .literal('Logs_20140328.DeleteDataProtectionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteDataProtectionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDataProtectionPolicyRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteDestination',
  description:
    'Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.',
  operationId: 'DeleteDestination',
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
        .literal('Logs_20140328.DeleteDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteDestination'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDestinationRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteLogGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteLogGroup',
  description:
    'Deletes the specified log group and permanently deletes all the archived log events associated with the log group.',
  operationId: 'DeleteLogGroup',
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
        .literal('Logs_20140328.DeleteLogGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteLogGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLogGroupRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteLogStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteLogStream',
  description:
    'Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.',
  operationId: 'DeleteLogStream',
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
        .literal('Logs_20140328.DeleteLogStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteLogStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLogStreamRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteMetricFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteMetricFilter',
  description: 'Deletes the specified metric filter.',
  operationId: 'DeleteMetricFilter',
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
        .literal('Logs_20140328.DeleteMetricFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteMetricFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMetricFilterRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteQueryDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteQueryDefinition',
  description:
    '<p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query.</p> <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p> <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform this operation.</p>',
  operationId: 'DeleteQueryDefinition',
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
        .literal('Logs_20140328.DeleteQueryDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteQueryDefinition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteQueryDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteQueryDefinitionResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteResourcePolicy',
  description:
    'Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.',
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
        .literal('Logs_20140328.DeleteResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourcePolicyRequestSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteRetentionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy',
  description:
    '<p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>',
  operationId: 'DeleteRetentionPolicy',
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
        .literal('Logs_20140328.DeleteRetentionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteRetentionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRetentionPolicyRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DeleteSubscriptionFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter',
  description: 'Deletes the specified subscription filter.',
  operationId: 'DeleteSubscriptionFilter',
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
        .literal('Logs_20140328.DeleteSubscriptionFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DeleteSubscriptionFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSubscriptionFilterRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeAccountPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeAccountPolicies',
  description: 'Returns a list of all CloudWatch Logs account policies in the account.',
  operationId: 'DescribeAccountPolicies',
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
        .literal('Logs_20140328.DescribeAccountPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeAccountPolicies'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAccountPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountPoliciesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeDestinationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeDestinations',
  description: 'Lists all your destinations. The results are ASCII-sorted by destination name.',
  operationId: 'DescribeDestinations',
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
        .literal('Logs_20140328.DescribeDestinations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeDestinations'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: DescribeDestinationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDestinationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeExportTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeExportTasks',
  description:
    'Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.',
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
        .literal('Logs_20140328.DescribeExportTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeExportTasks'] },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeLogGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeLogGroups',
  description:
    '<p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p> <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the <code>aws:ResourceTag/<i>key-name</i> </code> condition key. Other CloudWatch Logs actions do support the use of the <code>aws:ResourceTag/<i>key-name</i> </code> condition key to control access. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>',
  operationId: 'DescribeLogGroups',
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
        .literal('Logs_20140328.DescribeLogGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeLogGroups'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: DescribeLogGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLogGroupsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeLogStreamsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeLogStreams',
  description:
    '<p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can\'t include both. </p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>',
  operationId: 'DescribeLogStreams',
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
        .literal('Logs_20140328.DescribeLogStreams')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeLogStreams'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: DescribeLogStreamsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLogStreamsResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeMetricFiltersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeMetricFilters',
  description:
    'Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.',
  operationId: 'DescribeMetricFilters',
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
        .literal('Logs_20140328.DescribeMetricFilters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeMetricFilters'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: DescribeMetricFiltersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMetricFiltersResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeQueriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeQueries',
  description:
    'Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status.',
  operationId: 'DescribeQueries',
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
        .literal('Logs_20140328.DescribeQueries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeQueries'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeQueriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeQueriesResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeQueryDefinitionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions',
  description:
    '<p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p> <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the query definitions that have names that start with a certain string.</p>',
  operationId: 'DescribeQueryDefinitions',
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
        .literal('Logs_20140328.DescribeQueryDefinitions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeQueryDefinitions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeQueryDefinitionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeQueryDefinitionsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeResourcePoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeResourcePolicies',
  description: 'Lists the resource policies in this account.',
  operationId: 'DescribeResourcePolicies',
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
        .literal('Logs_20140328.DescribeResourcePolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeResourcePolicies'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeResourcePoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourcePoliciesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DescribeSubscriptionFiltersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters',
  description:
    'Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.',
  operationId: 'DescribeSubscriptionFilters',
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
        .literal('Logs_20140328.DescribeSubscriptionFilters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DescribeSubscriptionFilters'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: DescribeSubscriptionFiltersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSubscriptionFiltersResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328DisassociateKmsKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.DisassociateKmsKey',
  description:
    '<p>Disassociates the specified KMS key from the specified log group or from all CloudWatch Logs Insights query results in the account.</p> <p>When you use <code>DisassociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter or the <code>resourceIdentifier</code> parameter. You can\'t specify both of those parameters in the same operation.</p> <ul> <li> <p>Specify the <code>logGroupName</code> parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group. Instead, they will be encrypted with the default CloudWatch Logs method. The log events that were ingested while the key was associated with the log group are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.</p> </li> <li> <p>Specify the <code>resourceIdentifier</code> parameter with the <code>query-result</code> resource to stop using the KMS key to encrypt the results of all future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with the account are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.</p> </li> </ul> <p>It can take up to 5 minutes for this operation to take effect.</p>',
  operationId: 'DisassociateKmsKey',
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
        .literal('Logs_20140328.DisassociateKmsKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.DisassociateKmsKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateKmsKeyRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328FilterLogEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.FilterLogEvents',
  description:
    '<p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>You must have the <code>logs:FilterLogEvents</code> permission to perform this operation.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can\'t include both. </p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the specified time range. If the results include a token, that means there are more log events available. You can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>',
  operationId: 'FilterLogEvents',
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
        .literal('Logs_20140328.FilterLogEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.FilterLogEvents'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: FilterLogEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FilterLogEventsResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328GetDataProtectionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy',
  description: 'Returns information about a log group data protection policy.',
  operationId: 'GetDataProtectionPolicy',
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
        .literal('Logs_20140328.GetDataProtectionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.GetDataProtectionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDataProtectionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataProtectionPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328GetLogEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.GetLogEvents',
  description:
    '<p>Lists log events from the specified log stream. You can list all of the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can\'t include both. </p>',
  operationId: 'GetLogEvents',
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
        .literal('Logs_20140328.GetLogEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.GetLogEvents'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: GetLogEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLogEventsResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328GetLogGroupFieldsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.GetLogGroupFields',
  description:
    '<p>Returns a list of the fields that are included in log events in the specified log group. Includes the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must specify one of these parameters, but you can\'t specify both. </p> <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>',
  operationId: 'GetLogGroupFields',
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
        .literal('Logs_20140328.GetLogGroupFields')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.GetLogGroupFields'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLogGroupFieldsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLogGroupFieldsResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328GetLogRecordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.GetLogRecord',
  description:
    '<p>Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>The full unparsed log event is returned within <code>@message</code>.</p>',
  operationId: 'GetLogRecord',
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
        .literal('Logs_20140328.GetLogRecord')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.GetLogRecord'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLogRecordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLogRecordResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328GetQueryResultsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.GetQueryResults',
  description:
    '<p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field, which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start running a query. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>',
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
        .literal('Logs_20140328.GetQueryResults')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.GetQueryResults'] },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.ListTagsForResource',
  description:
    'Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.',
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
        .literal('Logs_20140328.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328ListTagsLogGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.ListTagsLogGroup',
  description:
    '<important> <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p> </important> <p>Lists the tags for the specified log group.</p>',
  operationId: 'ListTagsLogGroup',
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
        .literal('Logs_20140328.ListTagsLogGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.ListTagsLogGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsLogGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsLogGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetLogs20140328PutAccountPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutAccountPolicy',
  description:
    '<p>Creates an account-level data protection policy that applies to all log groups in the account. A data protection policy can help safeguard sensitive data that\'s ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level policy.</p> <important> <p>Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked.</p> </important> <p>If you use <code>PutAccountPolicy</code> to create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked.</p> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p> <p>To use the <code>PutAccountPolicy</code> operation, you must be signed on with the <code>logs:PutDataProtectionPolicy</code> and <code>logs:PutAccountPolicy</code> permissions.</p> <p>The <code>PutAccountPolicy</code> operation applies to all log groups in the account. You can also use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a> to create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.</p>',
  operationId: 'PutAccountPolicy',
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
        .literal('Logs_20140328.PutAccountPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutAccountPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutAccountPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAccountPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutDataProtectionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy',
  description:
    '<p>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that\'s ingested by the log group by auditing and masking the sensitive log data.</p> <important> <p>Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked.</p> </important> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p> <p>The <code>PutDataProtectionPolicy</code> operation applies to only the specified log group. You can also use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html">PutAccountPolicy</a> to create an account-level data protection policy that applies to all log groups in the account, including both existing log groups and log groups that are created level. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.</p>',
  operationId: 'PutDataProtectionPolicy',
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
        .literal('Logs_20140328.PutDataProtectionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutDataProtectionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutDataProtectionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDataProtectionPolicyResponseSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutDestination',
  description:
    '<p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p> <p>To perform a <code>PutDestination</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>',
  operationId: 'PutDestination',
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
        .literal('Logs_20140328.PutDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutDestination'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutDestinationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDestinationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutDestinationPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutDestinationPolicy',
  description:
    'Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.',
  operationId: 'PutDestinationPolicy',
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
        .literal('Logs_20140328.PutDestinationPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutDestinationPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutDestinationPolicyRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutLogEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutLogEvents',
  description:
    '<p>Uploads a batch of log events to the specified log stream.</p> <important> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted and never return <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream. </p> </important> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be more than 14 days in the past. Also, none of the log events can be from earlier than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>Each log event can be no larger than 256 KB.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <important> <p>The quota of five requests per second per log stream has been removed. Instead, <code>PutLogEvents</code> actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service.</p> </important> </li> </ul> <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>',
  operationId: 'PutLogEvents',
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
        .literal('Logs_20140328.PutLogEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutLogEvents'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutLogEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutLogEventsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidSequenceTokenException',
      content: { 'application/json': { schema: InvalidSequenceTokenExceptionSchema } },
    },
    482: {
      description: 'DataAlreadyAcceptedException',
      content: { 'application/json': { schema: DataAlreadyAcceptedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'UnrecognizedClientException',
      content: { 'application/json': { schema: UnrecognizedClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutMetricFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutMetricFilter',
  description:
    '<p>Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p> <p>When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>CloudWatch Logs disables a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>',
  operationId: 'PutMetricFilter',
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
        .literal('Logs_20140328.PutMetricFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutMetricFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutMetricFilterRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutQueryDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutQueryDefinition',
  description:
    '<p>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p> <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request. The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don\'t specify the <code>logGroupNames</code> parameter in your update operation, the query definition changes to contain no log groups.</p> <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform this operation.</p>',
  operationId: 'PutQueryDefinition',
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
        .literal('Logs_20140328.PutQueryDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutQueryDefinition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutQueryDefinitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutQueryDefinitionResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutResourcePolicy',
  description:
    'Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region.',
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
        .literal('Logs_20140328.PutResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutResourcePolicy'] },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutRetentionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutRetentionPolicy',
  description:
    '<p>Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group.</p> <note> <p>CloudWatch Logs doesn’t immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer.</p> <p>To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven’t been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. </p> </note>',
  operationId: 'PutRetentionPolicy',
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
        .literal('Logs_20140328.PutRetentionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutRetentionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRetentionPolicyRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328PutSubscriptionFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.PutSubscriptionFilter',
  description:
    '<p>Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.</p> <p>The following destinations are supported for subscription filters:</p> <ul> <li> <p>An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a> that belongs to a different account, for cross-account delivery. We currently support Kinesis Data Streams and Kinesis Data Firehose as logical destinations.</p> </li> <li> <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. </p> <p>To perform a <code>PutSubscriptionFilter</code> operation for any destination except a Lambda function, you must also have the <code>iam:PassRole</code> permission.</p>',
  operationId: 'PutSubscriptionFilter',
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
        .literal('Logs_20140328.PutSubscriptionFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.PutSubscriptionFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutSubscriptionFilterRequestSchema } },
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
      description: 'OperationAbortedException',
      content: { 'application/json': { schema: OperationAbortedExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328StartQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.StartQuery',
  description:
    '<p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>After you run a query using <code>StartQuery</code>, the query results are stored by CloudWatch Logs. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> to retrieve the results of a query, using the <code>queryId</code> that <code>StartQuery</code> returns. </p> <p>If you have associated a KMS key with the query results in this account, then <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> uses that key to encrypt the results when it stores them. If no key is associated with query results, the query results are encrypted with the default CloudWatch Logs encryption method.</p> <p>Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>. For a cross-account <code>StartQuery</code> operation, the query definition must be defined in the monitoring account.</p> <p>You can have up to 30 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards. </p>',
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
        .literal('Logs_20140328.StartQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.StartQuery'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartQueryRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartQueryResponseSchema } },
    },
    480: {
      description: 'MalformedQueryException',
      content: { 'application/json': { schema: MalformedQueryExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328StopQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.StopQuery',
  description:
    'Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.',
  operationId: 'StopQuery',
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
        .literal('Logs_20140328.StopQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.StopQuery'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopQueryRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopQueryResponseSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328TagLogGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.TagLogGroup',
  description:
    '<important> <p>The TagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a> instead.</p> </important> <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>',
  operationId: 'TagLogGroup',
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
        .literal('Logs_20140328.TagLogGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.TagLogGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagLogGroupRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetLogs20140328TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.TagResource',
  description:
    "<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch Logs resource.</p>",
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
        .literal('Logs_20140328.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328TestMetricFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.TestMetricFilter',
  description:
    'Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.',
  operationId: 'TestMetricFilter',
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
        .literal('Logs_20140328.TestMetricFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.TestMetricFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestMetricFilterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestMetricFilterResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetLogs20140328UntagLogGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.UntagLogGroup',
  description:
    '<important> <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p> </important> <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. </p>',
  operationId: 'UntagLogGroup',
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
        .literal('Logs_20140328.UntagLogGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.UntagLogGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagLogGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetLogs20140328UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Logs_20140328.UntagResource',
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
      'X-Amz-Target': z
        .literal('Logs_20140328.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Logs_20140328.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})
