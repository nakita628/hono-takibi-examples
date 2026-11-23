import { createRoute, z } from '@hono/zod-openapi'

const AlertManagerDefinitionStatusCodeSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'CREATION_FAILED', 'UPDATE_FAILED'])
  .openapi({ description: 'State of an alert manager definition.' })
  .openapi('AlertManagerDefinitionStatusCode')

const StringSchema = z.string().openapi('String')

const AlertManagerDefinitionStatusSchema = z
  .object({
    statusCode: AlertManagerDefinitionStatusCodeSchema.openapi({
      description: 'Status code of this definition.',
    }),
    statusReason: StringSchema.exactOptional().openapi({
      description: 'The reason for failure if any.',
    }),
  })
  .openapi({ required: ['statusCode'], description: 'Represents the status of a definition.' })
  .openapi('AlertManagerDefinitionStatus')

const CreateAlertManagerDefinitionResponseSchema = z
  .object({
    status: AlertManagerDefinitionStatusSchema.openapi({
      description: 'The status of alert manager definition.',
    }),
  })
  .openapi({
    required: ['status'],
    description: 'Represents the output of a CreateAlertManagerDefinition operation.',
  })
  .openapi('CreateAlertManagerDefinitionResponse')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const LoggingConfigurationStatusCodeSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'CREATION_FAILED', 'UPDATE_FAILED'])
  .openapi({ description: 'State of a logging configuration.' })
  .openapi('LoggingConfigurationStatusCode')

const LoggingConfigurationStatusSchema = z
  .object({
    statusCode: LoggingConfigurationStatusCodeSchema.openapi({
      description: 'Status code of the logging configuration.',
    }),
    statusReason: StringSchema.exactOptional().openapi({
      description: 'The reason for failure if any.',
    }),
  })
  .openapi({
    required: ['statusCode'],
    description: 'Represents the status of a logging configuration.',
  })
  .openapi('LoggingConfigurationStatus')

const CreateLoggingConfigurationResponseSchema = z
  .object({
    status: LoggingConfigurationStatusSchema.openapi({
      description: 'The status of the logging configuration.',
    }),
  })
  .openapi({
    required: ['status'],
    description: 'Represents the output of a CreateLoggingConfiguration operation.',
  })
  .openapi('CreateLoggingConfigurationResponse')

const RuleGroupsNamespaceArnSchema = z
  .string()
  .openapi({ description: 'An ARN identifying a rule groups namespace.' })
  .openapi('RuleGroupsNamespaceArn')

const RuleGroupsNamespaceNameSchema = z
  .string()
  .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
  .min(1)
  .max(64)
  .openapi({ description: 'The namespace name that the rule group belong to.' })
  .openapi('RuleGroupsNamespaceName')

const RuleGroupsNamespaceStatusCodeSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'CREATION_FAILED', 'UPDATE_FAILED'])
  .openapi({ description: 'State of a namespace.' })
  .openapi('RuleGroupsNamespaceStatusCode')

const RuleGroupsNamespaceStatusSchema = z
  .object({
    statusCode: RuleGroupsNamespaceStatusCodeSchema.openapi({
      description: 'Status code of this namespace.',
    }),
    statusReason: StringSchema.exactOptional().openapi({
      description: 'The reason for failure if any.',
    }),
  })
  .openapi({ required: ['statusCode'], description: 'Represents the status of a namespace.' })
  .openapi('RuleGroupsNamespaceStatus')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi({ description: 'The list of tags assigned to the resource.' })
  .openapi('TagMap')

const CreateRuleGroupsNamespaceResponseSchema = z
  .object({
    arn: RuleGroupsNamespaceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of this rule groups namespace.',
    }),
    name: RuleGroupsNamespaceNameSchema.openapi({ description: 'The rule groups namespace name.' }),
    status: RuleGroupsNamespaceStatusSchema.openapi({
      description: 'The status of rule groups namespace.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of this rule groups namespace.',
    }),
  })
  .openapi({
    required: ['arn', 'name', 'status'],
    description: 'Represents the output of a CreateRuleGroupsNamespace operation.',
  })
  .openapi('CreateRuleGroupsNamespaceResponse')

const WorkspaceArnSchema = z
  .string()
  .openapi({ description: 'An ARN identifying a Workspace.' })
  .openapi('WorkspaceArn')

const WorkspaceStatusCodeSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'CREATION_FAILED'])
  .openapi({ description: 'State of a workspace.' })
  .openapi('WorkspaceStatusCode')

const WorkspaceStatusSchema = z
  .object({
    statusCode: WorkspaceStatusCodeSchema.openapi({
      description: 'Status code of this workspace.',
    }),
  })
  .openapi({ required: ['statusCode'], description: 'Represents the status of a workspace.' })
  .openapi('WorkspaceStatus')

const WorkspaceIdSchema = z
  .string()
  .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
  .min(1)
  .max(64)
  .openapi({ description: 'A workspace ID.' })
  .openapi('WorkspaceId')

const CreateWorkspaceResponseSchema = z
  .object({
    arn: WorkspaceArnSchema.openapi({
      description: 'The ARN of the workspace that was just created.',
    }),
    status: WorkspaceStatusSchema.openapi({
      description: 'The status of the workspace that was just created (usually CREATING).',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of this workspace.' }),
    workspaceId: WorkspaceIdSchema.openapi({
      description: 'The generated ID of the workspace that was just created.',
    }),
  })
  .openapi({
    required: ['arn', 'status', 'workspaceId'],
    description: 'Represents the output of a CreateWorkspace operation.',
  })
  .openapi('CreateWorkspaceResponse')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AlertManagerDefinitionDataSchema = z
  .string()
  .openapi({ description: 'The alert manager definition data.' })
  .openapi('AlertManagerDefinitionData')

const AlertManagerDefinitionDescriptionSchema = z
  .object({
    createdAt: TimestampSchema.openapi({
      description: 'The time when the alert manager definition was created.',
    }),
    data: AlertManagerDefinitionDataSchema.openapi({
      description: 'The alert manager definition.',
    }),
    modifiedAt: TimestampSchema.openapi({
      description: 'The time when the alert manager definition was modified.',
    }),
    status: AlertManagerDefinitionStatusSchema.openapi({
      description: 'The status of alert manager definition.',
    }),
  })
  .openapi({
    required: ['createdAt', 'data', 'modifiedAt', 'status'],
    description: 'Represents the properties of an alert manager definition.',
  })
  .openapi('AlertManagerDefinitionDescription')

const DescribeAlertManagerDefinitionResponseSchema = z
  .object({
    alertManagerDefinition: AlertManagerDefinitionDescriptionSchema.openapi({
      description: "The properties of the selected workspace's alert manager definition.",
    }),
  })
  .openapi({
    required: ['alertManagerDefinition'],
    description: 'Represents the output of a DescribeAlertManagerDefinition operation.',
  })
  .openapi('DescribeAlertManagerDefinitionResponse')

const LogGroupArnSchema = z
  .string()
  .regex(/^arn:aws[a-z0-9-]*:logs:[a-z0-9-]+:\d{12}:log-group:[A-Za-z0-9\.\-\_\#\/]{1,512}\:\*$/)
  .openapi('LogGroupArn')

const LoggingConfigurationMetadataSchema = z
  .object({
    createdAt: TimestampSchema.openapi({
      description: 'The time when the logging configuration was created.',
    }),
    logGroupArn: LogGroupArnSchema.openapi({
      description: 'The ARN of the CW log group to which the vended log data will be published.',
    }),
    modifiedAt: TimestampSchema.openapi({
      description: 'The time when the logging configuration was modified.',
    }),
    status: LoggingConfigurationStatusSchema.openapi({
      description: 'The status of the logging configuration.',
    }),
    workspace: WorkspaceIdSchema.openapi({
      description: 'The workspace where the logging configuration exists.',
    }),
  })
  .openapi({
    required: ['createdAt', 'logGroupArn', 'modifiedAt', 'status', 'workspace'],
    description: 'Represents the properties of a logging configuration metadata.',
  })
  .openapi('LoggingConfigurationMetadata')

const DescribeLoggingConfigurationResponseSchema = z
  .object({
    loggingConfiguration: LoggingConfigurationMetadataSchema.openapi({
      description:
        'Metadata object containing information about the logging configuration of a workspace.',
    }),
  })
  .openapi({
    required: ['loggingConfiguration'],
    description: 'Represents the output of a DescribeLoggingConfiguration operation.',
  })
  .openapi('DescribeLoggingConfigurationResponse')

const RuleGroupsNamespaceDataSchema = z
  .string()
  .openapi({ description: 'The rule groups namespace data.' })
  .openapi('RuleGroupsNamespaceData')

const RuleGroupsNamespaceDescriptionSchema = z
  .object({
    arn: RuleGroupsNamespaceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of this rule groups namespace.',
    }),
    createdAt: TimestampSchema.openapi({
      description: 'The time when the rule groups namespace was created.',
    }),
    data: RuleGroupsNamespaceDataSchema.openapi({ description: 'The rule groups namespace data.' }),
    modifiedAt: TimestampSchema.openapi({
      description: 'The time when the rule groups namespace was modified.',
    }),
    name: RuleGroupsNamespaceNameSchema.openapi({ description: 'The rule groups namespace name.' }),
    status: RuleGroupsNamespaceStatusSchema.openapi({
      description: 'The status of rule groups namespace.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of this rule groups namespace.',
    }),
  })
  .openapi({
    required: ['arn', 'createdAt', 'data', 'modifiedAt', 'name', 'status'],
    description: 'Represents a description of the rule groups namespace.',
  })
  .openapi('RuleGroupsNamespaceDescription')

const DescribeRuleGroupsNamespaceResponseSchema = z
  .object({
    ruleGroupsNamespace: RuleGroupsNamespaceDescriptionSchema.openapi({
      description: 'The selected rule groups namespace.',
    }),
  })
  .openapi({
    required: ['ruleGroupsNamespace'],
    description: 'Represents the output of a DescribeRuleGroupsNamespace operation.',
  })
  .openapi('DescribeRuleGroupsNamespaceResponse')

const WorkspaceAliasSchema = z
  .string()
  .min(1)
  .max(100)
  .openapi({ description: 'A user-assigned workspace alias.' })
  .openapi('WorkspaceAlias')

const UriSchema = z.string().min(1).max(1024).openapi('Uri')

const WorkspaceDescriptionSchema = z
  .object({
    alias: WorkspaceAliasSchema.exactOptional().openapi({
      description: 'Alias of this workspace.',
    }),
    arn: WorkspaceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of this workspace.',
    }),
    createdAt: TimestampSchema.openapi({ description: 'The time when the workspace was created.' }),
    prometheusEndpoint: UriSchema.exactOptional().openapi({
      description: 'Prometheus endpoint URI.',
    }),
    status: WorkspaceStatusSchema.openapi({ description: 'The status of this workspace.' }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of this workspace.' }),
    workspaceId: WorkspaceIdSchema.openapi({
      description: 'Unique string identifying this workspace.',
    }),
  })
  .openapi({
    required: ['arn', 'createdAt', 'status', 'workspaceId'],
    description: 'Represents the properties of a workspace.',
  })
  .openapi('WorkspaceDescription')

const DescribeWorkspaceResponseSchema = z
  .object({
    workspace: WorkspaceDescriptionSchema.openapi({
      description: 'The properties of the selected workspace.',
    }),
  })
  .openapi({
    required: ['workspace'],
    description: 'Represents the output of a DescribeWorkspace operation.',
  })
  .openapi('DescribeWorkspaceResponse')

const PaginationTokenSchema = z
  .string()
  .openapi({ description: 'A token used to access the next page in a paginated result set.' })
  .openapi('PaginationToken')

const RuleGroupsNamespaceSummarySchema = z
  .object({
    arn: RuleGroupsNamespaceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of this rule groups namespace.',
    }),
    createdAt: TimestampSchema.openapi({
      description: 'The time when the rule groups namespace was created.',
    }),
    modifiedAt: TimestampSchema.openapi({
      description: 'The time when the rule groups namespace was modified.',
    }),
    name: RuleGroupsNamespaceNameSchema.openapi({ description: 'The rule groups namespace name.' }),
    status: RuleGroupsNamespaceStatusSchema.openapi({
      description: 'The status of rule groups namespace.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of this rule groups namespace.',
    }),
  })
  .openapi({
    required: ['arn', 'createdAt', 'modifiedAt', 'name', 'status'],
    description: 'Represents a summary of the rule groups namespace.',
  })
  .openapi('RuleGroupsNamespaceSummary')

const RuleGroupsNamespaceSummaryListSchema = z
  .array(RuleGroupsNamespaceSummarySchema)
  .openapi({ description: 'A list of rule groups namespace summary.' })
  .openapi('RuleGroupsNamespaceSummaryList')

const ListRuleGroupsNamespacesResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Pagination token to use when requesting the next page in this list.',
    }),
    ruleGroupsNamespaces: RuleGroupsNamespaceSummaryListSchema.openapi({
      description: 'The list of the selected rule groups namespaces.',
    }),
  })
  .openapi({
    required: ['ruleGroupsNamespaces'],
    description: 'Represents the output of a ListRuleGroupsNamespaces operation.',
  })
  .openapi('ListRuleGroupsNamespacesResponse')

const ListTagsForResourceResponseSchema = z
  .object({ tags: TagMapSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const WorkspaceSummarySchema = z
  .object({
    alias: WorkspaceAliasSchema.exactOptional().openapi({
      description: 'Alias of this workspace.',
    }),
    arn: WorkspaceArnSchema.openapi({ description: 'The AmazonResourceName of this workspace.' }),
    createdAt: TimestampSchema.openapi({ description: 'The time when the workspace was created.' }),
    status: WorkspaceStatusSchema.openapi({ description: 'The status of this workspace.' }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of this workspace.' }),
    workspaceId: WorkspaceIdSchema.openapi({
      description: 'Unique string identifying this workspace.',
    }),
  })
  .openapi({
    required: ['arn', 'createdAt', 'status', 'workspaceId'],
    description: 'Represents a summary of the properties of a workspace.',
  })
  .openapi('WorkspaceSummary')

const WorkspaceSummaryListSchema = z
  .array(WorkspaceSummarySchema)
  .openapi({ description: 'A list of workspace summaries.' })
  .openapi('WorkspaceSummaryList')

const ListWorkspacesResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Pagination token to use when requesting the next page in this list.',
    }),
    workspaces: WorkspaceSummaryListSchema.openapi({
      description:
        'The list of existing workspaces, including those undergoing creation or deletion.',
    }),
  })
  .openapi({
    required: ['workspaces'],
    description: 'Represents the output of a ListWorkspaces operation.',
  })
  .openapi('ListWorkspacesResponse')

const PutAlertManagerDefinitionResponseSchema = z
  .object({
    status: AlertManagerDefinitionStatusSchema.openapi({
      description: 'The status of alert manager definition.',
    }),
  })
  .openapi({
    required: ['status'],
    description: 'Represents the output of a PutAlertManagerDefinition operation.',
  })
  .openapi('PutAlertManagerDefinitionResponse')

const PutRuleGroupsNamespaceResponseSchema = z
  .object({
    arn: RuleGroupsNamespaceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of this rule groups namespace.',
    }),
    name: RuleGroupsNamespaceNameSchema.openapi({ description: 'The rule groups namespace name.' }),
    status: RuleGroupsNamespaceStatusSchema.openapi({
      description: 'The status of rule groups namespace.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of this rule groups namespace.',
    }),
  })
  .openapi({
    required: ['arn', 'name', 'status'],
    description: 'Represents the output of a PutRuleGroupsNamespace operation.',
  })
  .openapi('PutRuleGroupsNamespaceResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateLoggingConfigurationResponseSchema = z
  .object({
    status: LoggingConfigurationStatusSchema.openapi({
      description: 'The status of the logging configuration.',
    }),
  })
  .openapi({
    required: ['status'],
    description: 'Represents the output of an UpdateLoggingConfiguration operation.',
  })
  .openapi('UpdateLoggingConfigurationResponse')

const IdempotencyTokenSchema = z
  .string()
  .regex(/[!-~]+/)
  .min(1)
  .max(64)
  .openapi({ description: 'An identifier used to ensure the idempotency of a write request.' })
  .openapi('IdempotencyToken')

const CreateAlertManagerDefinitionRequestSchema = z
  .object({
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
    data: AlertManagerDefinitionDataSchema.openapi({
      description: 'The alert manager definition data.',
    }),
  })
  .openapi({
    required: ['data'],
    title: 'CreateAlertManagerDefinitionRequest',
    description: 'Represents the input of a CreateAlertManagerDefinition operation.',
  })
  .openapi('CreateAlertManagerDefinitionRequest')

const CreateLoggingConfigurationRequestSchema = z
  .object({
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
    logGroupArn: LogGroupArnSchema.openapi({
      description: 'The ARN of the CW log group to which the vended log data will be published.',
    }),
  })
  .openapi({
    required: ['logGroupArn'],
    title: 'CreateLoggingConfigurationRequest',
    description: 'Represents the input of a CreateLoggingConfiguration operation.',
  })
  .openapi('CreateLoggingConfigurationRequest')

const CreateRuleGroupsNamespaceRequestSchema = z
  .object({
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
    data: RuleGroupsNamespaceDataSchema.openapi({
      description: 'The namespace data that define the rule groups.',
    }),
    name: RuleGroupsNamespaceNameSchema.openapi({ description: 'The rule groups namespace name.' }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Optional, user-provided tags for this rule groups namespace.',
    }),
  })
  .openapi({
    required: ['data', 'name'],
    title: 'CreateRuleGroupsNamespaceRequest',
    description: 'Represents the input of a CreateRuleGroupsNamespace operation.',
  })
  .openapi('CreateRuleGroupsNamespaceRequest')

const CreateWorkspaceRequestSchema = z
  .object({
    alias: WorkspaceAliasSchema.exactOptional().openapi({
      description:
        'An optional user-assigned alias for this workspace. This alias is for user reference and does not need to be unique.',
    }),
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Optional, user-provided tags for this workspace.',
    }),
  })
  .openapi({
    title: 'CreateWorkspaceRequest',
    description: 'Represents the input of a CreateWorkspace operation.',
    required: [],
  })
  .openapi('CreateWorkspaceRequest')

const DeleteAlertManagerDefinitionRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteAlertManagerDefinitionRequest',
    description: 'Represents the input of a DeleteAlertManagerDefinition operation.',
  })
  .openapi('DeleteAlertManagerDefinitionRequest')

const DeleteLoggingConfigurationRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteLoggingConfigurationRequest',
    description: 'Represents the input of a DeleteLoggingConfiguration operation.',
  })
  .openapi('DeleteLoggingConfigurationRequest')

const DeleteRuleGroupsNamespaceRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteRuleGroupsNamespaceRequest',
    description: 'Represents the input of a DeleteRuleGroupsNamespace operation.',
  })
  .openapi('DeleteRuleGroupsNamespaceRequest')

const DeleteWorkspaceRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteWorkspaceRequest',
    description: 'Represents the input of a DeleteWorkspace operation.',
  })
  .openapi('DeleteWorkspaceRequest')

const DescribeAlertManagerDefinitionRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeAlertManagerDefinitionRequest',
    description: 'Represents the input of a DescribeAlertManagerDefinition operation.',
  })
  .openapi('DescribeAlertManagerDefinitionRequest')

const DescribeLoggingConfigurationRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeLoggingConfigurationRequest',
    description: 'Represents the input of a DescribeLoggingConfiguration operation.',
  })
  .openapi('DescribeLoggingConfigurationRequest')

const DescribeRuleGroupsNamespaceRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeRuleGroupsNamespaceRequest',
    description: 'Represents the input of a DescribeRuleGroupsNamespace operation.',
  })
  .openapi('DescribeRuleGroupsNamespaceRequest')

const DescribeWorkspaceRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeWorkspaceRequest',
    description: 'Represents the input of a DescribeWorkspace operation.',
  })
  .openapi('DescribeWorkspaceRequest')

const ListRuleGroupsNamespacesRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListRuleGroupsNamespacesRequestMaxResultsInteger')

const ListRuleGroupsNamespacesRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListRuleGroupsNamespacesRequest',
    description: 'Represents the input of a ListRuleGroupsNamespaces operation.',
  })
  .openapi('ListRuleGroupsNamespacesRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListWorkspacesRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListWorkspacesRequestMaxResultsInteger')

const ListWorkspacesRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListWorkspacesRequest',
    description: 'Represents the input of a ListWorkspaces operation.',
  })
  .openapi('ListWorkspacesRequest')

const PutAlertManagerDefinitionRequestSchema = z
  .object({
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
    data: AlertManagerDefinitionDataSchema.openapi({
      description: 'The alert manager definition data.',
    }),
  })
  .openapi({
    required: ['data'],
    title: 'PutAlertManagerDefinitionRequest',
    description: 'Represents the input of a PutAlertManagerDefinition operation.',
  })
  .openapi('PutAlertManagerDefinitionRequest')

const PutRuleGroupsNamespaceRequestSchema = z
  .object({
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
    data: RuleGroupsNamespaceDataSchema.openapi({
      description: 'The namespace data that define the rule groups.',
    }),
  })
  .openapi({
    required: ['data'],
    title: 'PutRuleGroupsNamespaceRequest',
    description: 'Represents the input of a PutRuleGroupsNamespace operation.',
  })
  .openapi('PutRuleGroupsNamespaceRequest')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({ tags: TagMapSchema })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateLoggingConfigurationRequestSchema = z
  .object({
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
    logGroupArn: LogGroupArnSchema.openapi({
      description: 'The ARN of the CW log group to which the vended log data will be published.',
    }),
  })
  .openapi({
    required: ['logGroupArn'],
    title: 'UpdateLoggingConfigurationRequest',
    description: 'Represents the input of an UpdateLoggingConfiguration operation.',
  })
  .openapi('UpdateLoggingConfigurationRequest')

const UpdateWorkspaceAliasRequestSchema = z
  .object({
    alias: WorkspaceAliasSchema.exactOptional().openapi({
      description: 'The new alias of the workspace.',
    }),
    clientToken: IdempotencyTokenSchema.exactOptional().openapi({
      description:
        'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
    }),
  })
  .openapi({
    title: 'UpdateWorkspaceAliasRequest',
    description: 'Represents the input of an UpdateWorkspaceAlias operation.',
    required: [],
  })
  .openapi('UpdateWorkspaceAliasRequest')

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

export const getWorkspacesWorkspaceIdAlertmanagerDefinitionRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspaceId}/alertmanager/definition',
  description: 'Describes an alert manager definition.',
  operationId: 'DescribeAlertManagerDefinition',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to describe.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAlertManagerDefinitionResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putWorkspacesWorkspaceIdAlertmanagerDefinitionRoute = createRoute({
  method: 'put',
  path: '/workspaces/{workspaceId}/alertmanager/definition',
  description: 'Update an alert manager definition.',
  operationId: 'PutAlertManagerDefinition',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace in which to update the alert manager definition.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
              data: z.string().openapi({ description: 'The alert manager definition data.' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: PutAlertManagerDefinitionResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postWorkspacesWorkspaceIdAlertmanagerDefinitionRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/alertmanager/definition',
  description: 'Create an alert manager definition.',
  operationId: 'CreateAlertManagerDefinition',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace in which to create the alert manager definition.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
              data: z.string().openapi({ description: 'The alert manager definition data.' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAlertManagerDefinitionResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const deleteWorkspacesWorkspaceIdAlertmanagerDefinitionRoute = createRoute({
  method: 'delete',
  path: '/workspaces/{workspaceId}/alertmanager/definition',
  description: 'Deletes an alert manager definition.',
  operationId: 'DeleteAlertManagerDefinition',
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
      clientToken: z
        .string()
        .regex(/[!-~]+/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
            schema: {
              type: 'string',
              pattern: '[!-~]+',
              description: 'An identifier used to ensure the idempotency of a write request.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'An identifier used to ensure the idempotency of a write request.',
        }),
    }),
    params: z.object({
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace in which to delete the alert manager definition.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getWorkspacesWorkspaceIdLoggingRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspaceId}/logging',
  description: 'Describes logging configuration.',
  operationId: 'DescribeLoggingConfiguration',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to vend logs to.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putWorkspacesWorkspaceIdLoggingRoute = createRoute({
  method: 'put',
  path: '/workspaces/{workspaceId}/logging',
  description: 'Update logging configuration.',
  operationId: 'UpdateLoggingConfiguration',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to vend logs to.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
              logGroupArn: z
                .string()
                .regex(
                  /^arn:aws[a-z0-9-]*:logs:[a-z0-9-]+:\d{12}:log-group:[A-Za-z0-9\.\-\_\#\/]{1,512}\:\*$/,
                )
                .openapi({
                  description:
                    'The ARN of the CW log group to which the vended log data will be published.',
                }),
            })
            .openapi({ required: ['logGroupArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postWorkspacesWorkspaceIdLoggingRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/logging',
  description: 'Create logging configuration.',
  operationId: 'CreateLoggingConfiguration',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to vend logs to.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
              logGroupArn: z
                .string()
                .regex(
                  /^arn:aws[a-z0-9-]*:logs:[a-z0-9-]+:\d{12}:log-group:[A-Za-z0-9\.\-\_\#\/]{1,512}\:\*$/,
                )
                .openapi({
                  description:
                    'The ARN of the CW log group to which the vended log data will be published.',
                }),
            })
            .openapi({ required: ['logGroupArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteWorkspacesWorkspaceIdLoggingRoute = createRoute({
  method: 'delete',
  path: '/workspaces/{workspaceId}/logging',
  description: 'Delete logging configuration.',
  operationId: 'DeleteLoggingConfiguration',
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
      clientToken: z
        .string()
        .regex(/[!-~]+/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
            schema: {
              type: 'string',
              pattern: '[!-~]+',
              description: 'An identifier used to ensure the idempotency of a write request.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'An identifier used to ensure the idempotency of a write request.',
        }),
    }),
    params: z.object({
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to vend logs to.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getWorkspacesWorkspaceIdRulegroupsnamespacesRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspaceId}/rulegroupsnamespaces',
  description: 'Lists rule groups namespaces.',
  operationId: 'ListRuleGroupsNamespaces',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum results to return in response (default=100, maximum=1000).',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      name: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description:
              'Optional filter for rule groups namespace name. Only the rule groups namespace that begin with this value will be returned.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'The namespace name that the rule group belong to.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'The namespace name that the rule group belong to.',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListRuleGroupsNamespaces request.',
            schema: {
              type: 'string',
              description: 'A token used to access the next page in a paginated result set.',
            },
          },
          description: 'A token used to access the next page in a paginated result set.',
        }),
    }),
    params: z.object({
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRuleGroupsNamespacesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postWorkspacesWorkspaceIdRulegroupsnamespacesRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/rulegroupsnamespaces',
  description: 'Create a rule group namespace.',
  operationId: 'CreateRuleGroupsNamespace',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace in which to create the rule group namespace.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
              data: z.string().openapi({ description: 'The rule groups namespace data.' }),
              name: z
                .string()
                .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
                .min(1)
                .max(64)
                .openapi({ description: 'The namespace name that the rule group belong to.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The list of tags assigned to the resource.' }),
            })
            .openapi({ required: ['data', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRuleGroupsNamespaceResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getWorkspacesRoute = createRoute({
  method: 'get',
  path: '/workspaces',
  description: 'Lists all AMP workspaces, including workspaces being created or deleted.',
  operationId: 'ListWorkspaces',
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
      alias: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: false,
            description:
              'Optional filter for workspace alias. Only the workspaces with aliases that begin with this value will be returned.',
            schema: {
              type: 'string',
              description: 'A user-assigned workspace alias.',
              minLength: 1,
              maxLength: 100,
            },
          },
          description: 'A user-assigned workspace alias.',
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum results to return in response (default=100, maximum=1000).',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
            description:
              'Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListWorkspaces request.',
            schema: {
              type: 'string',
              description: 'A token used to access the next page in a paginated result set.',
            },
          },
          description: 'A token used to access the next page in a paginated result set.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWorkspacesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postWorkspacesRoute = createRoute({
  method: 'post',
  path: '/workspaces',
  description: 'Creates a new AMP workspace.',
  operationId: 'CreateWorkspace',
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
              alias: z
                .string()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'A user-assigned workspace alias.' }),
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The list of tags assigned to the resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkspaceResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspaceId}/rulegroupsnamespaces/{name}',
  description: 'Describe a rule groups namespace.',
  operationId: 'DescribeRuleGroupsNamespace',
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
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The rule groups namespace.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'The namespace name that the rule group belong to.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'The namespace name that the rule group belong to.',
        }),
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to describe.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRuleGroupsNamespaceResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute = createRoute({
  method: 'put',
  path: '/workspaces/{workspaceId}/rulegroupsnamespaces/{name}',
  description: 'Update a rule groups namespace.',
  operationId: 'PutRuleGroupsNamespace',
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
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The rule groups namespace name.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'The namespace name that the rule group belong to.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'The namespace name that the rule group belong to.',
        }),
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace in which to update the rule group namespace.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
              data: z.string().openapi({ description: 'The rule groups namespace data.' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: PutRuleGroupsNamespaceResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const deleteWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute = createRoute({
  method: 'delete',
  path: '/workspaces/{workspaceId}/rulegroupsnamespaces/{name}',
  description: 'Delete a rule groups namespace.',
  operationId: 'DeleteRuleGroupsNamespace',
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
      clientToken: z
        .string()
        .regex(/[!-~]+/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
            schema: {
              type: 'string',
              pattern: '[!-~]+',
              description: 'An identifier used to ensure the idempotency of a write request.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'An identifier used to ensure the idempotency of a write request.',
        }),
    }),
    params: z.object({
      name: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The rule groups namespace name.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'The namespace name that the rule group belong to.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'The namespace name that the rule group belong to.',
        }),
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to delete rule group definition.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getWorkspacesWorkspaceIdRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspaceId}',
  description: 'Describes an existing AMP workspace.',
  operationId: 'DescribeWorkspace',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to describe.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspaceResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteWorkspacesWorkspaceIdRoute = createRoute({
  method: 'delete',
  path: '/workspaces/{workspaceId}',
  description: 'Deletes an AMP workspace.',
  operationId: 'DeleteWorkspace',
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
      clientToken: z
        .string()
        .regex(/[!-~]+/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              'Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.',
            schema: {
              type: 'string',
              pattern: '[!-~]+',
              description: 'An identifier used to ensure the idempotency of a write request.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'An identifier used to ensure the idempotency of a write request.',
        }),
    }),
    params: z.object({
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace to delete.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags you have assigned to the resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Creates tags for the specified resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
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
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The list of tags assigned to the resource.' }),
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
  description: 'Deletes tags from the specified resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'One or more tag keys',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postWorkspacesWorkspaceIdAliasRoute = createRoute({
  method: 'post',
  path: '/workspaces/{workspaceId}/alias',
  description: 'Updates an AMP workspace alias.',
  operationId: 'UpdateWorkspaceAlias',
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
      workspaceId: z
        .string()
        .regex(/[0-9A-Za-z][-.0-9A-Z_a-z]*/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'workspaceId',
            in: 'path',
            required: true,
            description: 'The ID of the workspace being updated.',
            schema: {
              type: 'string',
              pattern: '[0-9A-Za-z][-.0-9A-Z_a-z]*',
              description: 'A workspace ID.',
              minLength: 1,
              maxLength: 64,
            },
          },
          description: 'A workspace ID.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              alias: z
                .string()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'A user-assigned workspace alias.' }),
              clientToken: z
                .string()
                .regex(/[!-~]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'An identifier used to ensure the idempotency of a write request.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})
