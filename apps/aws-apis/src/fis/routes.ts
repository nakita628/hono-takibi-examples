import { createRoute, z } from '@hono/zod-openapi'

const ExperimentTemplateIdSchema = z.string().regex(/[\S]+/).max(64).openapi('ExperimentTemplateId')

const ExperimentTemplateDescriptionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('ExperimentTemplateDescription')

const TargetResourceTypeIdSchema = z
  .string()
  .regex(/[\S]+/)
  .max(128)
  .openapi('TargetResourceTypeId')

const ResourceArnSchema = z.string().regex(/[\S]+/).min(20).max(2048).openapi('ResourceArn')

const ResourceArnListSchema = z.array(ResourceArnSchema).max(5).openapi('ResourceArnList')

const TagValueSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ExperimentTemplateTargetFilterPathSchema = z
  .string()
  .regex(/[\S]+/)
  .max(256)
  .openapi('ExperimentTemplateTargetFilterPath')

const ExperimentTemplateTargetFilterValueSchema = z
  .string()
  .regex(/[\S]+/)
  .max(128)
  .openapi('ExperimentTemplateTargetFilterValue')

const ExperimentTemplateTargetFilterValuesSchema = z
  .array(ExperimentTemplateTargetFilterValueSchema)
  .openapi('ExperimentTemplateTargetFilterValues')

const ExperimentTemplateTargetFilterSchema = z
  .object({
    path: ExperimentTemplateTargetFilterPathSchema.and(
      z.any().openapi({ description: 'The attribute path for the filter.' }),
    ).exactOptional(),
    values: ExperimentTemplateTargetFilterValuesSchema.and(
      z.any().openapi({ description: 'The attribute values for the filter.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a filter used for the target resources in an experiment template.',
    required: [],
  })
  .openapi('ExperimentTemplateTargetFilter')

const ExperimentTemplateTargetFilterListSchema = z
  .array(ExperimentTemplateTargetFilterSchema)
  .openapi('ExperimentTemplateTargetFilterList')

const ExperimentTemplateTargetSelectionModeSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTemplateTargetSelectionMode')

const ExperimentTemplateTargetParameterValueSchema = z
  .string()
  .regex(/^[\p{L}\p{Z}\p{N}_.:\/=+\-@]+$/u)
  .min(1)
  .max(1024)
  .openapi('ExperimentTemplateTargetParameterValue')

const ExperimentTemplateTargetParameterMapSchema = z
  .record(z.string(), ExperimentTemplateTargetParameterValueSchema)
  .openapi('ExperimentTemplateTargetParameterMap')

const ExperimentTemplateTargetSchema = z
  .object({
    resourceType: TargetResourceTypeIdSchema.and(
      z.any().openapi({ description: 'The resource type.' }),
    ).exactOptional(),
    resourceArns: ResourceArnListSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARNs) of the targets.' }),
    ).exactOptional(),
    resourceTags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the target resources.' }),
    ).exactOptional(),
    filters: ExperimentTemplateTargetFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filters to apply to identify target resources using specific attributes.',
        }),
    ).exactOptional(),
    selectionMode: ExperimentTemplateTargetSelectionModeSchema.and(
      z
        .any()
        .openapi({
          description: 'Scopes the identified resources to a specific count or percentage.',
        }),
    ).exactOptional(),
    parameters: ExperimentTemplateTargetParameterMapSchema.and(
      z.any().openapi({ description: 'The resource type parameters.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a target for an experiment template.', required: [] })
  .openapi('ExperimentTemplateTarget')

const ExperimentTemplateTargetMapSchema = z
  .record(z.string(), ExperimentTemplateTargetSchema)
  .openapi('ExperimentTemplateTargetMap')

const ActionIdSchema = z.string().regex(/[\S]+/).max(128).openapi('ActionId')

const ExperimentTemplateActionDescriptionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('ExperimentTemplateActionDescription')

const ExperimentTemplateActionParameterSchema = z
  .string()
  .regex(/[\S]+/)
  .max(1024)
  .openapi('ExperimentTemplateActionParameter')

const ExperimentTemplateActionParameterMapSchema = z
  .record(z.string(), ExperimentTemplateActionParameterSchema)
  .openapi('ExperimentTemplateActionParameterMap')

const ExperimentTemplateTargetNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTemplateTargetName')

const ExperimentTemplateActionTargetMapSchema = z
  .record(z.string(), ExperimentTemplateTargetNameSchema)
  .openapi('ExperimentTemplateActionTargetMap')

const ExperimentTemplateActionStartAfterSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTemplateActionStartAfter')

const ExperimentTemplateActionStartAfterListSchema = z
  .array(ExperimentTemplateActionStartAfterSchema)
  .openapi('ExperimentTemplateActionStartAfterList')

const ExperimentTemplateActionSchema = z
  .object({
    actionId: ActionIdSchema.and(
      z.any().openapi({ description: 'The ID of the action.' }),
    ).exactOptional(),
    description: ExperimentTemplateActionDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the action.' }),
    ).exactOptional(),
    parameters: ExperimentTemplateActionParameterMapSchema.and(
      z.any().openapi({ description: 'The parameters for the action.' }),
    ).exactOptional(),
    targets: ExperimentTemplateActionTargetMapSchema.and(
      z.any().openapi({ description: 'The targets for the action.' }),
    ).exactOptional(),
    startAfter: ExperimentTemplateActionStartAfterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the action that must be completed before the current action starts.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an action for an experiment template.', required: [] })
  .openapi('ExperimentTemplateAction')

const ExperimentTemplateActionMapSchema = z
  .record(z.string(), ExperimentTemplateActionSchema)
  .openapi('ExperimentTemplateActionMap')

const StopConditionSourceSchema = z.string().regex(/[\S]+/).max(64).openapi('StopConditionSource')

const StopConditionValueSchema = z
  .string()
  .regex(/[\s\S]+/)
  .min(20)
  .max(2048)
  .openapi('StopConditionValue')

const ExperimentTemplateStopConditionSchema = z
  .object({
    source: StopConditionSourceSchema.and(
      z.any().openapi({ description: 'The source for the stop condition.' }),
    ).exactOptional(),
    value: StopConditionValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a stop condition for an experiment template.', required: [] })
  .openapi('ExperimentTemplateStopCondition')

const ExperimentTemplateStopConditionListSchema = z
  .array(ExperimentTemplateStopConditionSchema)
  .openapi('ExperimentTemplateStopConditionList')

const CreationTimeSchema = z.iso.datetime({ offset: true }).openapi('CreationTime')

const LastUpdateTimeSchema = z.iso.datetime({ offset: true }).openapi('LastUpdateTime')

const RoleArnSchema = z.string().regex(/[\S]+/).min(20).max(2048).openapi('RoleArn')

const CloudWatchLogGroupArnSchema = z
  .string()
  .regex(/[\S]+/)
  .min(20)
  .max(2048)
  .openapi('CloudWatchLogGroupArn')

const ExperimentTemplateCloudWatchLogsLogConfigurationSchema = z
  .object({
    logGroupArn: CloudWatchLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the configuration for experiment logging to Amazon CloudWatch Logs.',
    required: [],
  })
  .openapi('ExperimentTemplateCloudWatchLogsLogConfiguration')

const S3BucketNameSchema = z.string().regex(/[\S]+/).min(3).max(63).openapi('S3BucketName')

const S3ObjectKeySchema = z
  .string()
  .regex(/[\s\S]+/)
  .min(1)
  .max(1024)
  .openapi('S3ObjectKey')

const ExperimentTemplateS3LogConfigurationSchema = z
  .object({
    bucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the destination bucket.' }),
    ).exactOptional(),
    prefix: S3ObjectKeySchema.and(
      z.any().openapi({ description: 'The bucket prefix.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the configuration for experiment logging to Amazon S3.',
    required: [],
  })
  .openapi('ExperimentTemplateS3LogConfiguration')

const LogSchemaVersionSchema = z.int().openapi('LogSchemaVersion')

const ExperimentTemplateLogConfigurationSchema = z
  .object({
    cloudWatchLogsConfiguration: ExperimentTemplateCloudWatchLogsLogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for experiment logging to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    s3Configuration: ExperimentTemplateS3LogConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging to Amazon S3.' }),
    ).exactOptional(),
    logSchemaVersion: LogSchemaVersionSchema.and(
      z.any().openapi({ description: 'The schema version.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the configuration for experiment logging.', required: [] })
  .openapi('ExperimentTemplateLogConfiguration')

const ExperimentTemplateSchema = z
  .object({
    id: ExperimentTemplateIdSchema.and(
      z.any().openapi({ description: 'The ID of the experiment template.' }),
    ).exactOptional(),
    description: ExperimentTemplateDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the experiment template.' }),
    ).exactOptional(),
    targets: ExperimentTemplateTargetMapSchema.and(
      z.any().openapi({ description: 'The targets for the experiment.' }),
    ).exactOptional(),
    actions: ExperimentTemplateActionMapSchema.and(
      z.any().openapi({ description: 'The actions for the experiment.' }),
    ).exactOptional(),
    stopConditions: ExperimentTemplateStopConditionListSchema.and(
      z.any().openapi({ description: 'The stop conditions for the experiment.' }),
    ).exactOptional(),
    creationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time the experiment template was created.' }),
    ).exactOptional(),
    lastUpdateTime: LastUpdateTimeSchema.and(
      z.any().openapi({ description: 'The time the experiment template was last updated.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of an IAM role.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the experiment template.' }),
    ).exactOptional(),
    logConfiguration: ExperimentTemplateLogConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an experiment template.', required: [] })
  .openapi('ExperimentTemplate')

const CreateExperimentTemplateResponseSchema = z
  .object({
    experimentTemplate: ExperimentTemplateSchema.and(
      z.any().openapi({ description: 'Information about the experiment template.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateExperimentTemplateResponse')

const CreateExperimentTemplateStopConditionInputSchema = z
  .object({
    source: StopConditionSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop condition.',
        }),
    ),
    value: StopConditionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch alarm. This is required if the source is a CloudWatch alarm.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['source'],
    description: 'Specifies a stop condition for an experiment template.',
  })
  .openapi('CreateExperimentTemplateStopConditionInput')

const ExperimentTemplateTargetInputFilterSchema = z
  .object({
    path: ExperimentTemplateTargetFilterPathSchema.and(
      z.any().openapi({ description: 'The attribute path for the filter.' }),
    ),
    values: ExperimentTemplateTargetFilterValuesSchema.and(
      z.any().openapi({ description: 'The attribute values for the filter.' }),
    ),
  })
  .openapi({
    required: ['path', 'values'],
    description:
      '<p>Specifies a filter used for the target resource input in an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a> in the <i>Fault Injection Simulator User Guide</i>.</p>',
  })
  .openapi('ExperimentTemplateTargetInputFilter')

const ExperimentTemplateTargetFilterInputListSchema = z
  .array(ExperimentTemplateTargetInputFilterSchema)
  .openapi('ExperimentTemplateTargetFilterInputList')

const CreateExperimentTemplateTargetInputSchema = z
  .object({
    resourceType: TargetResourceTypeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type. The resource type must be supported for the specified action.',
        }),
    ),
    resourceArns: ResourceArnListSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARNs) of the resources.' }),
    ).exactOptional(),
    resourceTags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the target resources.' }),
    ).exactOptional(),
    filters: ExperimentTemplateTargetFilterInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filters to apply to identify target resources using specific attributes.',
        }),
    ).exactOptional(),
    selectionMode: ExperimentTemplateTargetSelectionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Scopes the identified resources to a specific count of the resources at random, or a percentage of the resources. All identified resources are included in the target.</p> <ul> <li> <p>ALL - Run the action on all identified targets. This is the default.</p> </li> <li> <p>COUNT(n) - Run the action on the specified number of targets, chosen from the identified targets at random. For example, COUNT(1) selects one of the targets.</p> </li> <li> <p>PERCENT(n) - Run the action on the specified percentage of targets, chosen from the identified targets at random. For example, PERCENT(25) selects 25% of the targets.</p> </li> </ul>',
        }),
    ),
    parameters: ExperimentTemplateTargetParameterMapSchema.and(
      z.any().openapi({ description: 'The resource type parameters.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'selectionMode'],
    description:
      '<p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a> in the <i>Fault Injection Simulator User Guide</i>.</p>',
  })
  .openapi('CreateExperimentTemplateTargetInput')

const CreateExperimentTemplateActionInputSchema = z
  .object({
    actionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the action. The format of the action ID is: aws:<i>service-name</i>:<i>action-type</i>.',
        }),
    ),
    description: ExperimentTemplateActionDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the action.' }),
    ).exactOptional(),
    parameters: ExperimentTemplateActionParameterMapSchema.and(
      z.any().openapi({ description: 'The parameters for the action, if applicable.' }),
    ).exactOptional(),
    targets: ExperimentTemplateActionTargetMapSchema.and(
      z.any().openapi({ description: 'The targets for the action.' }),
    ).exactOptional(),
    startAfter: ExperimentTemplateActionStartAfterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionId'],
    description:
      '<p>Specifies an action for an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a> in the <i>Fault Injection Simulator User Guide</i>.</p>',
  })
  .openapi('CreateExperimentTemplateActionInput')

const ExperimentTemplateCloudWatchLogsLogConfigurationInputSchema = z
  .object({
    logGroupArn: CloudWatchLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.',
        }),
    ),
  })
  .openapi({
    required: ['logGroupArn'],
    description: 'Specifies the configuration for experiment logging to Amazon CloudWatch Logs.',
  })
  .openapi('ExperimentTemplateCloudWatchLogsLogConfigurationInput')

const ExperimentTemplateS3LogConfigurationInputSchema = z
  .object({
    bucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the destination bucket.' }),
    ),
    prefix: S3ObjectKeySchema.and(
      z.any().openapi({ description: 'The bucket prefix.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bucketName'],
    description: 'Specifies the configuration for experiment logging to Amazon S3.',
  })
  .openapi('ExperimentTemplateS3LogConfigurationInput')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const DeleteExperimentTemplateResponseSchema = z
  .object({
    experimentTemplate: ExperimentTemplateSchema.and(
      z.any().openapi({ description: 'Information about the experiment template.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteExperimentTemplateResponse')

const ActionDescriptionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('ActionDescription')

const ActionParameterDescriptionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('ActionParameterDescription')

const ActionParameterRequiredSchema = z.boolean().openapi('ActionParameterRequired')

const ActionParameterSchema = z
  .object({
    description: ActionParameterDescriptionSchema.and(
      z.any().openapi({ description: 'The parameter description.' }),
    ).exactOptional(),
    required: ActionParameterRequiredSchema.and(
      z.any().openapi({ description: 'Indicates whether the parameter is required.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a parameter for an action.', required: [] })
  .openapi('ActionParameter')

const ActionParameterMapSchema = z
  .record(z.string(), ActionParameterSchema)
  .openapi('ActionParameterMap')

const ActionTargetSchema = z
  .object({
    resourceType: TargetResourceTypeIdSchema.and(
      z.any().openapi({ description: 'The resource type of the target.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a target for an action.', required: [] })
  .openapi('ActionTarget')

const ActionTargetMapSchema = z.record(z.string(), ActionTargetSchema).openapi('ActionTargetMap')

const ActionSchema = z
  .object({
    id: ActionIdSchema.and(
      z.any().openapi({ description: 'The ID of the action.' }),
    ).exactOptional(),
    description: ActionDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the action.' }),
    ).exactOptional(),
    parameters: ActionParameterMapSchema.and(
      z.any().openapi({ description: 'The action parameters, if applicable.' }),
    ).exactOptional(),
    targets: ActionTargetMapSchema.and(
      z.any().openapi({ description: 'The supported targets for the action.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the action.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a> in the <i>Fault Injection Simulator User Guide</i>.',
    required: [],
  })
  .openapi('Action')

const GetActionResponseSchema = z
  .object({
    action: ActionSchema.and(
      z.any().openapi({ description: 'Information about the action.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetActionResponse')

const ExperimentIdSchema = z.string().regex(/[\S]+/).max(64).openapi('ExperimentId')

const ExperimentStatusSchema = z
  .enum(['pending', 'initiating', 'running', 'completed', 'stopping', 'stopped', 'failed'])
  .openapi('ExperimentStatus')

const ExperimentStatusReasonSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('ExperimentStatusReason')

const ExperimentStateSchema = z
  .object({
    status: ExperimentStatusSchema.and(
      z.any().openapi({ description: 'The state of the experiment.' }),
    ).exactOptional(),
    reason: ExperimentStatusReasonSchema.and(
      z.any().openapi({ description: 'The reason for the state.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the state of an experiment.', required: [] })
  .openapi('ExperimentState')

const ExperimentTargetFilterPathSchema = z
  .string()
  .regex(/[\S]+/)
  .max(256)
  .openapi('ExperimentTargetFilterPath')

const ExperimentTargetFilterValueSchema = z
  .string()
  .regex(/[\S]+/)
  .max(128)
  .openapi('ExperimentTargetFilterValue')

const ExperimentTargetFilterValuesSchema = z
  .array(ExperimentTargetFilterValueSchema)
  .openapi('ExperimentTargetFilterValues')

const ExperimentTargetFilterSchema = z
  .object({
    path: ExperimentTargetFilterPathSchema.and(
      z.any().openapi({ description: 'The attribute path for the filter.' }),
    ).exactOptional(),
    values: ExperimentTargetFilterValuesSchema.and(
      z.any().openapi({ description: 'The attribute values for the filter.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a filter used for the target resources in an experiment.',
    required: [],
  })
  .openapi('ExperimentTargetFilter')

const ExperimentTargetFilterListSchema = z
  .array(ExperimentTargetFilterSchema)
  .openapi('ExperimentTargetFilterList')

const ExperimentTargetSelectionModeSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTargetSelectionMode')

const ExperimentTargetParameterValueSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('ExperimentTargetParameterValue')

const ExperimentTargetParameterMapSchema = z
  .record(z.string(), ExperimentTargetParameterValueSchema)
  .openapi('ExperimentTargetParameterMap')

const ExperimentTargetSchema = z
  .object({
    resourceType: TargetResourceTypeIdSchema.and(
      z.any().openapi({ description: 'The resource type.' }),
    ).exactOptional(),
    resourceArns: ResourceArnListSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARNs) of the resources.' }),
    ).exactOptional(),
    resourceTags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the target resources.' }),
    ).exactOptional(),
    filters: ExperimentTargetFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filters to apply to identify target resources using specific attributes.',
        }),
    ).exactOptional(),
    selectionMode: ExperimentTargetSelectionModeSchema.and(
      z
        .any()
        .openapi({
          description: 'Scopes the identified resources to a specific count or percentage.',
        }),
    ).exactOptional(),
    parameters: ExperimentTargetParameterMapSchema.and(
      z.any().openapi({ description: 'The resource type parameters.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a target for an experiment.', required: [] })
  .openapi('ExperimentTarget')

const ExperimentTargetMapSchema = z
  .record(z.string(), ExperimentTargetSchema)
  .openapi('ExperimentTargetMap')

const ExperimentActionDescriptionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('ExperimentActionDescription')

const ExperimentActionParameterSchema = z
  .string()
  .regex(/[\S]+/)
  .max(1024)
  .openapi('ExperimentActionParameter')

const ExperimentActionParameterMapSchema = z
  .record(z.string(), ExperimentActionParameterSchema)
  .openapi('ExperimentActionParameterMap')

const ExperimentTargetNameSchema = z.string().regex(/[\S]+/).max(64).openapi('ExperimentTargetName')

const ExperimentActionTargetMapSchema = z
  .record(z.string(), ExperimentTargetNameSchema)
  .openapi('ExperimentActionTargetMap')

const ExperimentActionStartAfterSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentActionStartAfter')

const ExperimentActionStartAfterListSchema = z
  .array(ExperimentActionStartAfterSchema)
  .openapi('ExperimentActionStartAfterList')

const ExperimentActionStatusSchema = z
  .enum([
    'pending',
    'initiating',
    'running',
    'completed',
    'cancelled',
    'stopping',
    'stopped',
    'failed',
  ])
  .openapi('ExperimentActionStatus')

const ExperimentActionStatusReasonSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('ExperimentActionStatusReason')

const ExperimentActionStateSchema = z
  .object({
    status: ExperimentActionStatusSchema.and(
      z.any().openapi({ description: 'The state of the action.' }),
    ).exactOptional(),
    reason: ExperimentActionStatusReasonSchema.and(
      z.any().openapi({ description: 'The reason for the state.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the state of an action.', required: [] })
  .openapi('ExperimentActionState')

const ExperimentActionStartTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('ExperimentActionStartTime')

const ExperimentActionEndTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('ExperimentActionEndTime')

const ExperimentActionSchema = z
  .object({
    actionId: ActionIdSchema.and(
      z.any().openapi({ description: 'The ID of the action.' }),
    ).exactOptional(),
    description: ExperimentActionDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the action.' }),
    ).exactOptional(),
    parameters: ExperimentActionParameterMapSchema.and(
      z.any().openapi({ description: 'The parameters for the action.' }),
    ).exactOptional(),
    targets: ExperimentActionTargetMapSchema.and(
      z.any().openapi({ description: 'The targets for the action.' }),
    ).exactOptional(),
    startAfter: ExperimentActionStartAfterListSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the action that must be completed before this action starts.',
        }),
    ).exactOptional(),
    state: ExperimentActionStateSchema.and(
      z.any().openapi({ description: 'The state of the action.' }),
    ).exactOptional(),
    startTime: ExperimentActionStartTimeSchema.and(
      z.any().openapi({ description: 'The time that the action started.' }),
    ).exactOptional(),
    endTime: ExperimentActionEndTimeSchema.and(
      z.any().openapi({ description: 'The time that the action ended.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the action for an experiment.', required: [] })
  .openapi('ExperimentAction')

const ExperimentActionMapSchema = z
  .record(z.string(), ExperimentActionSchema)
  .openapi('ExperimentActionMap')

const ExperimentStopConditionSchema = z
  .object({
    source: StopConditionSourceSchema.and(
      z.any().openapi({ description: 'The source for the stop condition.' }),
    ).exactOptional(),
    value: StopConditionValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the stop condition for an experiment.', required: [] })
  .openapi('ExperimentStopCondition')

const ExperimentStopConditionListSchema = z
  .array(ExperimentStopConditionSchema)
  .openapi('ExperimentStopConditionList')

const ExperimentStartTimeSchema = z.iso.datetime({ offset: true }).openapi('ExperimentStartTime')

const ExperimentEndTimeSchema = z.iso.datetime({ offset: true }).openapi('ExperimentEndTime')

const ExperimentCloudWatchLogsLogConfigurationSchema = z
  .object({
    logGroupArn: CloudWatchLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the configuration for experiment logging to Amazon CloudWatch Logs.',
    required: [],
  })
  .openapi('ExperimentCloudWatchLogsLogConfiguration')

const ExperimentS3LogConfigurationSchema = z
  .object({
    bucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the destination bucket.' }),
    ).exactOptional(),
    prefix: S3ObjectKeySchema.and(
      z.any().openapi({ description: 'The bucket prefix.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the configuration for experiment logging to Amazon S3.',
    required: [],
  })
  .openapi('ExperimentS3LogConfiguration')

const ExperimentLogConfigurationSchema = z
  .object({
    cloudWatchLogsConfiguration: ExperimentCloudWatchLogsLogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for experiment logging to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    s3Configuration: ExperimentS3LogConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging to Amazon S3.' }),
    ).exactOptional(),
    logSchemaVersion: LogSchemaVersionSchema.and(
      z.any().openapi({ description: 'The schema version.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the configuration for experiment logging.', required: [] })
  .openapi('ExperimentLogConfiguration')

const ExperimentSchema = z
  .object({
    id: ExperimentIdSchema.and(
      z.any().openapi({ description: 'The ID of the experiment.' }),
    ).exactOptional(),
    experimentTemplateId: ExperimentTemplateIdSchema.and(
      z.any().openapi({ description: 'The ID of the experiment template.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.',
        }),
    ).exactOptional(),
    state: ExperimentStateSchema.and(
      z.any().openapi({ description: 'The state of the experiment.' }),
    ).exactOptional(),
    targets: ExperimentTargetMapSchema.and(
      z.any().openapi({ description: 'The targets for the experiment.' }),
    ).exactOptional(),
    actions: ExperimentActionMapSchema.and(
      z.any().openapi({ description: 'The actions for the experiment.' }),
    ).exactOptional(),
    stopConditions: ExperimentStopConditionListSchema.and(
      z.any().openapi({ description: 'The stop conditions for the experiment.' }),
    ).exactOptional(),
    creationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time that the experiment was created.' }),
    ).exactOptional(),
    startTime: ExperimentStartTimeSchema.and(
      z.any().openapi({ description: 'The time that the experiment started.' }),
    ).exactOptional(),
    endTime: ExperimentEndTimeSchema.and(
      z.any().openapi({ description: 'The time that the experiment ended.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the experiment.' }),
    ).exactOptional(),
    logConfiguration: ExperimentLogConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an experiment.', required: [] })
  .openapi('Experiment')

const GetExperimentResponseSchema = z
  .object({
    experiment: ExperimentSchema.and(
      z.any().openapi({ description: 'Information about the experiment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetExperimentResponse')

const GetExperimentTemplateResponseSchema = z
  .object({
    experimentTemplate: ExperimentTemplateSchema.and(
      z.any().openapi({ description: 'Information about the experiment template.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetExperimentTemplateResponse')

const TargetResourceTypeDescriptionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('TargetResourceTypeDescription')

const TargetResourceTypeParameterDescriptionSchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(512)
  .openapi('TargetResourceTypeParameterDescription')

const TargetResourceTypeParameterRequiredSchema = z
  .boolean()
  .openapi('TargetResourceTypeParameterRequired')

const TargetResourceTypeParameterSchema = z
  .object({
    description: TargetResourceTypeParameterDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the parameter.' }),
    ).exactOptional(),
    required: TargetResourceTypeParameterRequiredSchema.and(
      z.any().openapi({ description: 'Indicates whether the parameter is required.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the parameters for a resource type. Use parameters to determine which tasks are identified during target resolution.',
    required: [],
  })
  .openapi('TargetResourceTypeParameter')

const TargetResourceTypeParameterMapSchema = z
  .record(z.string(), TargetResourceTypeParameterSchema)
  .openapi('TargetResourceTypeParameterMap')

const TargetResourceTypeSchema = z
  .object({
    resourceType: TargetResourceTypeIdSchema.and(
      z.any().openapi({ description: 'The resource type.' }),
    ).exactOptional(),
    description: TargetResourceTypeDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the resource type.' }),
    ).exactOptional(),
    parameters: TargetResourceTypeParameterMapSchema.and(
      z.any().openapi({ description: 'The parameters for the resource type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a resource type.', required: [] })
  .openapi('TargetResourceType')

const GetTargetResourceTypeResponseSchema = z
  .object({
    targetResourceType: TargetResourceTypeSchema.and(
      z.any().openapi({ description: 'Information about the resource type.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTargetResourceTypeResponse')

const ActionSummarySchema = z
  .object({
    id: ActionIdSchema.and(
      z.any().openapi({ description: 'The ID of the action.' }),
    ).exactOptional(),
    description: ActionDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the action.' }),
    ).exactOptional(),
    targets: ActionTargetMapSchema.and(
      z.any().openapi({ description: 'The targets for the action.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the action.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides a summary of an action.', required: [] })
  .openapi('ActionSummary')

const ActionSummaryListSchema = z.array(ActionSummarySchema).openapi('ActionSummaryList')

const NextTokenSchema = z.string().regex(/[\S]+/).min(1).max(1024).openapi('NextToken')

const ListActionsResponseSchema = z
  .object({
    actions: ActionSummaryListSchema.and(
      z.any().openapi({ description: 'The actions.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListActionsResponse')

const ExperimentTemplateSummarySchema = z
  .object({
    id: ExperimentTemplateIdSchema.and(
      z.any().openapi({ description: 'The ID of the experiment template.' }),
    ).exactOptional(),
    description: ExperimentTemplateDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the experiment template.' }),
    ).exactOptional(),
    creationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time that the experiment template was created.' }),
    ).exactOptional(),
    lastUpdateTime: LastUpdateTimeSchema.and(
      z.any().openapi({ description: 'The time that the experiment template was last updated.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the experiment template.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides a summary of an experiment template.', required: [] })
  .openapi('ExperimentTemplateSummary')

const ExperimentTemplateSummaryListSchema = z
  .array(ExperimentTemplateSummarySchema)
  .openapi('ExperimentTemplateSummaryList')

const ListExperimentTemplatesResponseSchema = z
  .object({
    experimentTemplates: ExperimentTemplateSummaryListSchema.and(
      z.any().openapi({ description: 'The experiment templates.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExperimentTemplatesResponse')

const ExperimentSummarySchema = z
  .object({
    id: ExperimentIdSchema.and(
      z.any().openapi({ description: 'The ID of the experiment.' }),
    ).exactOptional(),
    experimentTemplateId: ExperimentTemplateIdSchema.and(
      z.any().openapi({ description: 'The ID of the experiment template.' }),
    ).exactOptional(),
    state: ExperimentStateSchema.and(
      z.any().openapi({ description: 'The state of the experiment.' }),
    ).exactOptional(),
    creationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time that the experiment was created.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the experiment.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides a summary of an experiment.', required: [] })
  .openapi('ExperimentSummary')

const ExperimentSummaryListSchema = z
  .array(ExperimentSummarySchema)
  .openapi('ExperimentSummaryList')

const ListExperimentsResponseSchema = z
  .object({
    experiments: ExperimentSummaryListSchema.and(
      z.any().openapi({ description: 'The experiments.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExperimentsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TargetResourceTypeSummarySchema = z
  .object({
    resourceType: TargetResourceTypeIdSchema.and(
      z.any().openapi({ description: 'The resource type.' }),
    ).exactOptional(),
    description: TargetResourceTypeDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the resource type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a resource type.', required: [] })
  .openapi('TargetResourceTypeSummary')

const TargetResourceTypeSummaryListSchema = z
  .array(TargetResourceTypeSummarySchema)
  .openapi('TargetResourceTypeSummaryList')

const ListTargetResourceTypesResponseSchema = z
  .object({
    targetResourceTypes: TargetResourceTypeSummaryListSchema.and(
      z.any().openapi({ description: 'The target resource types.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTargetResourceTypesResponse')

const StartExperimentResponseSchema = z
  .object({
    experiment: ExperimentSchema.and(
      z.any().openapi({ description: 'Information about the experiment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartExperimentResponse')

const StopExperimentResponseSchema = z
  .object({
    experiment: ExperimentSchema.and(
      z.any().openapi({ description: 'Information about the experiment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopExperimentResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/[\s\S]+/)
  .max(128)
  .openapi('TagKey')

const UpdateExperimentTemplateResponseSchema = z
  .object({
    experimentTemplate: ExperimentTemplateSchema.and(
      z.any().openapi({ description: 'Information about the experiment template.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateExperimentTemplateResponse')

const UpdateExperimentTemplateStopConditionInputSchema = z
  .object({
    source: StopConditionSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop condition.',
        }),
    ),
    value: StopConditionValueSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the CloudWatch alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['source'],
    description:
      'Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.',
  })
  .openapi('UpdateExperimentTemplateStopConditionInput')

const UpdateExperimentTemplateTargetInputSchema = z
  .object({
    resourceType: TargetResourceTypeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type. The resource type must be supported for the specified action.',
        }),
    ),
    resourceArns: ResourceArnListSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARNs) of the targets.' }),
    ).exactOptional(),
    resourceTags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the target resources.' }),
    ).exactOptional(),
    filters: ExperimentTemplateTargetFilterInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filters to apply to identify target resources using specific attributes.',
        }),
    ).exactOptional(),
    selectionMode: ExperimentTemplateTargetSelectionModeSchema.and(
      z
        .any()
        .openapi({
          description: 'Scopes the identified resources to a specific count or percentage.',
        }),
    ),
    parameters: ExperimentTemplateTargetParameterMapSchema.and(
      z.any().openapi({ description: 'The resource type parameters.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'selectionMode'],
    description:
      'Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.',
  })
  .openapi('UpdateExperimentTemplateTargetInput')

const UpdateExperimentTemplateActionInputItemSchema = z
  .object({
    actionId: ActionIdSchema.and(
      z.any().openapi({ description: 'The ID of the action.' }),
    ).exactOptional(),
    description: ExperimentTemplateActionDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the action.' }),
    ).exactOptional(),
    parameters: ExperimentTemplateActionParameterMapSchema.and(
      z.any().openapi({ description: 'The parameters for the action, if applicable.' }),
    ).exactOptional(),
    targets: ExperimentTemplateActionTargetMapSchema.and(
      z.any().openapi({ description: 'The targets for the action.' }),
    ).exactOptional(),
    startAfter: ExperimentTemplateActionStartAfterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies an action for an experiment template.', required: [] })
  .openapi('UpdateExperimentTemplateActionInputItem')

const ActionParameterNameSchema = z.string().regex(/[\S]+/).max(64).openapi('ActionParameterName')

const ActionTargetNameSchema = z.string().regex(/[\S]+/).max(64).openapi('ActionTargetName')

const ClientTokenSchema = z.string().regex(/[\S]+/).min(1).max(1024).openapi('ClientToken')

const CreateExperimentTemplateActionInputMapSchema = z
  .record(z.string(), CreateExperimentTemplateActionInputSchema)
  .openapi('CreateExperimentTemplateActionInputMap')

const CreateExperimentTemplateLogConfigurationInputSchema = z
  .object({
    cloudWatchLogsConfiguration: ExperimentTemplateCloudWatchLogsLogConfigurationInputSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for experiment logging to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    s3Configuration: ExperimentTemplateS3LogConfigurationInputSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging to Amazon S3.' }),
    ).exactOptional(),
    logSchemaVersion: LogSchemaVersionSchema.and(
      z.any().openapi({ description: 'The schema version.' }),
    ),
  })
  .openapi({
    required: ['logSchemaVersion'],
    description: 'Specifies the configuration for experiment logging.',
  })
  .openapi('CreateExperimentTemplateLogConfigurationInput')

const CreateExperimentTemplateStopConditionInputListSchema = z
  .array(CreateExperimentTemplateStopConditionInputSchema)
  .openapi('CreateExperimentTemplateStopConditionInputList')

const CreateExperimentTemplateTargetInputMapSchema = z
  .record(z.string(), CreateExperimentTemplateTargetInputSchema)
  .openapi('CreateExperimentTemplateTargetInputMap')

const CreateExperimentTemplateRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    description: ExperimentTemplateDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the experiment template.' }),
    ),
    stopConditions: CreateExperimentTemplateStopConditionInputListSchema.and(
      z.any().openapi({ description: 'The stop conditions.' }),
    ),
    targets: CreateExperimentTemplateTargetInputMapSchema.and(
      z.any().openapi({ description: 'The targets for the experiment.' }),
    ).exactOptional(),
    actions: CreateExperimentTemplateActionInputMapSchema.and(
      z.any().openapi({ description: 'The actions for the experiment.' }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.',
        }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags to apply to the experiment template.' }),
    ).exactOptional(),
    logConfiguration: CreateExperimentTemplateLogConfigurationInputSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clientToken', 'description', 'stopConditions', 'actions', 'roleArn'],
    title: 'CreateExperimentTemplateRequest',
  })
  .openapi('CreateExperimentTemplateRequest')

const DeleteExperimentTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteExperimentTemplateRequest' })
  .openapi('DeleteExperimentTemplateRequest')

const ExperimentActionNameSchema = z.string().regex(/[\S]+/).max(64).openapi('ExperimentActionName')

const ExperimentActionParameterNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentActionParameterName')

const ExperimentActionTargetNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentActionTargetName')

const ExperimentTargetParameterNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTargetParameterName')

const ExperimentTemplateActionNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTemplateActionName')

const ExperimentTemplateActionParameterNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTemplateActionParameterName')

const ExperimentTemplateActionTargetNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTemplateActionTargetName')

const ExperimentTemplateTargetParameterNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('ExperimentTemplateTargetParameterName')

const GetActionRequestSchema = z
  .object({})
  .openapi({ title: 'GetActionRequest' })
  .openapi('GetActionRequest')

const GetExperimentRequestSchema = z
  .object({})
  .openapi({ title: 'GetExperimentRequest' })
  .openapi('GetExperimentRequest')

const GetExperimentTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetExperimentTemplateRequest' })
  .openapi('GetExperimentTemplateRequest')

const GetTargetResourceTypeRequestSchema = z
  .object({})
  .openapi({ title: 'GetTargetResourceTypeRequest' })
  .openapi('GetTargetResourceTypeRequest')

const ListActionsMaxResultsSchema = z.int().min(1).max(100).openapi('ListActionsMaxResults')

const ListActionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListActionsRequest' })
  .openapi('ListActionsRequest')

const ListExperimentTemplatesMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListExperimentTemplatesMaxResults')

const ListExperimentTemplatesRequestSchema = z
  .object({})
  .openapi({ title: 'ListExperimentTemplatesRequest' })
  .openapi('ListExperimentTemplatesRequest')

const ListExperimentsMaxResultsSchema = z.int().min(1).max(100).openapi('ListExperimentsMaxResults')

const ListExperimentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListExperimentsRequest' })
  .openapi('ListExperimentsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTargetResourceTypesMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListTargetResourceTypesMaxResults')

const ListTargetResourceTypesRequestSchema = z
  .object({})
  .openapi({ title: 'ListTargetResourceTypesRequest' })
  .openapi('ListTargetResourceTypesRequest')

const StartExperimentRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
        }),
    ),
    experimentTemplateId: ExperimentTemplateIdSchema.and(
      z.any().openapi({ description: 'The ID of the experiment template.' }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags to apply to the experiment.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['clientToken', 'experimentTemplateId'], title: 'StartExperimentRequest' })
  .openapi('StartExperimentRequest')

const StopExperimentRequestSchema = z
  .object({})
  .openapi({ title: 'StopExperimentRequest' })
  .openapi('StopExperimentRequest')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(z.any().openapi({ description: 'The tags for the resource.' })),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TargetResourceTypeParameterNameSchema = z
  .string()
  .regex(/[\S]+/)
  .max(64)
  .openapi('TargetResourceTypeParameterName')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateExperimentTemplateActionInputMapSchema = z
  .record(z.string(), UpdateExperimentTemplateActionInputItemSchema)
  .openapi('UpdateExperimentTemplateActionInputMap')

const UpdateExperimentTemplateLogConfigurationInputSchema = z
  .object({
    cloudWatchLogsConfiguration: ExperimentTemplateCloudWatchLogsLogConfigurationInputSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for experiment logging to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    s3Configuration: ExperimentTemplateS3LogConfigurationInputSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging to Amazon S3.' }),
    ).exactOptional(),
    logSchemaVersion: LogSchemaVersionSchema.and(
      z.any().openapi({ description: 'The schema version.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the configuration for experiment logging.', required: [] })
  .openapi('UpdateExperimentTemplateLogConfigurationInput')

const UpdateExperimentTemplateStopConditionInputListSchema = z
  .array(UpdateExperimentTemplateStopConditionInputSchema)
  .openapi('UpdateExperimentTemplateStopConditionInputList')

const UpdateExperimentTemplateTargetInputMapSchema = z
  .record(z.string(), UpdateExperimentTemplateTargetInputSchema)
  .openapi('UpdateExperimentTemplateTargetInputMap')

const UpdateExperimentTemplateRequestSchema = z
  .object({
    description: ExperimentTemplateDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the template.' }),
    ).exactOptional(),
    stopConditions: UpdateExperimentTemplateStopConditionInputListSchema.and(
      z.any().openapi({ description: 'The stop conditions for the experiment.' }),
    ).exactOptional(),
    targets: UpdateExperimentTemplateTargetInputMapSchema.and(
      z.any().openapi({ description: 'The targets for the experiment.' }),
    ).exactOptional(),
    actions: UpdateExperimentTemplateActionInputMapSchema.and(
      z.any().openapi({ description: 'The actions for the experiment.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.',
        }),
    ).exactOptional(),
    logConfiguration: UpdateExperimentTemplateLogConfigurationInputSchema.and(
      z.any().openapi({ description: 'The configuration for experiment logging.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateExperimentTemplateRequest', required: [] })
  .openapi('UpdateExperimentTemplateRequest')

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

export const getExperimentTemplatesRoute = createRoute({
  method: 'get',
  path: '/experimentTemplates',
  description: 'Lists your experiment templates.',
  operationId: 'ListExperimentTemplates',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\S]+/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\S]+', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExperimentTemplatesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postExperimentTemplatesRoute = createRoute({
  method: 'post',
  path: '/experimentTemplates',
  description:
    '<p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>',
  operationId: 'CreateExperimentTemplate',
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
              clientToken: z
                .string()
                .regex(/[\S]+/)
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              description: z
                .string()
                .regex(/[\s\S]+/)
                .max(512)
                .openapi({ description: 'A description for the experiment template.' }),
              stopConditions: z
                .array(CreateExperimentTemplateStopConditionInputSchema)
                .openapi({ description: 'The stop conditions.' }),
              targets: z
                .record(z.string(), CreateExperimentTemplateTargetInputSchema)
                .exactOptional()
                .openapi({ description: 'The targets for the experiment.' }),
              actions: z
                .record(z.string(), CreateExperimentTemplateActionInputSchema)
                .openapi({ description: 'The actions for the experiment.' }),
              roleArn: z
                .string()
                .regex(/[\S]+/)
                .min(20)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the experiment template.' }),
              logConfiguration: z
                .object({
                  cloudWatchLogsConfiguration:
                    ExperimentTemplateCloudWatchLogsLogConfigurationInputSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The configuration for experiment logging to Amazon CloudWatch Logs.',
                        }),
                    ).exactOptional(),
                  s3Configuration: ExperimentTemplateS3LogConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The configuration for experiment logging to Amazon S3.',
                      }),
                  ).exactOptional(),
                  logSchemaVersion: LogSchemaVersionSchema.and(
                    z.any().openapi({ description: 'The schema version.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies the configuration for experiment logging.',
                  required: [],
                }),
            })
            .openapi({
              required: ['clientToken', 'description', 'stopConditions', 'actions', 'roleArn'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExperimentTemplateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getExperimentTemplatesIdRoute = createRoute({
  method: 'get',
  path: '/experimentTemplates/{id}',
  description: 'Gets information about the specified experiment template.',
  operationId: 'GetExperimentTemplate',
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
      id: z
        .string()
        .regex(/[\S]+/)
        .max(64)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the experiment template.',
            schema: { type: 'string', pattern: '[\\S]+', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExperimentTemplateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteExperimentTemplatesIdRoute = createRoute({
  method: 'delete',
  path: '/experimentTemplates/{id}',
  description: 'Deletes the specified experiment template.',
  operationId: 'DeleteExperimentTemplate',
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
      id: z
        .string()
        .regex(/[\S]+/)
        .max(64)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the experiment template.',
            schema: { type: 'string', pattern: '[\\S]+', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteExperimentTemplateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const patchExperimentTemplatesIdRoute = createRoute({
  method: 'patch',
  path: '/experimentTemplates/{id}',
  description: 'Updates the specified experiment template.',
  operationId: 'UpdateExperimentTemplate',
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
      id: z
        .string()
        .regex(/[\S]+/)
        .max(64)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the experiment template.',
            schema: { type: 'string', pattern: '[\\S]+', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .regex(/[\s\S]+/)
                .max(512)
                .exactOptional()
                .openapi({ description: 'A description for the template.' }),
              stopConditions: z
                .array(UpdateExperimentTemplateStopConditionInputSchema)
                .exactOptional()
                .openapi({ description: 'The stop conditions for the experiment.' }),
              targets: z
                .record(z.string(), UpdateExperimentTemplateTargetInputSchema)
                .exactOptional()
                .openapi({ description: 'The targets for the experiment.' }),
              actions: z
                .record(z.string(), UpdateExperimentTemplateActionInputItemSchema)
                .exactOptional()
                .openapi({ description: 'The actions for the experiment.' }),
              roleArn: z
                .string()
                .regex(/[\S]+/)
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.',
                }),
              logConfiguration: z
                .object({
                  cloudWatchLogsConfiguration:
                    ExperimentTemplateCloudWatchLogsLogConfigurationInputSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The configuration for experiment logging to Amazon CloudWatch Logs.',
                        }),
                    ).exactOptional(),
                  s3Configuration: ExperimentTemplateS3LogConfigurationInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The configuration for experiment logging to Amazon S3.',
                      }),
                  ).exactOptional(),
                  logSchemaVersion: LogSchemaVersionSchema.and(
                    z.any().openapi({ description: 'The schema version.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies the configuration for experiment logging.',
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
      content: { 'application/json': { schema: UpdateExperimentTemplateResponseSchema } },
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
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getActionsIdRoute = createRoute({
  method: 'get',
  path: '/actions/{id}',
  description: 'Gets information about the specified FIS action.',
  operationId: 'GetAction',
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
      id: z
        .string()
        .regex(/[\S]+/)
        .max(128)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the action.',
            schema: { type: 'string', pattern: '[\\S]+', maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetActionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getExperimentsIdRoute = createRoute({
  method: 'get',
  path: '/experiments/{id}',
  description: 'Gets information about the specified experiment.',
  operationId: 'GetExperiment',
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
      id: z
        .string()
        .regex(/[\S]+/)
        .max(64)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the experiment.',
            schema: { type: 'string', pattern: '[\\S]+', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExperimentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteExperimentsIdRoute = createRoute({
  method: 'delete',
  path: '/experiments/{id}',
  description: 'Stops the specified experiment.',
  operationId: 'StopExperiment',
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
      id: z
        .string()
        .regex(/[\S]+/)
        .max(64)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the experiment.',
            schema: { type: 'string', pattern: '[\\S]+', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopExperimentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getTargetResourceTypesResourceTypeRoute = createRoute({
  method: 'get',
  path: '/targetResourceTypes/{resourceType}',
  description: 'Gets information about the specified resource type.',
  operationId: 'GetTargetResourceType',
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
      resourceType: z
        .string()
        .regex(/[\S]+/)
        .max(128)
        .openapi({
          param: {
            name: 'resourceType',
            in: 'path',
            required: true,
            description: 'The resource type.',
            schema: { type: 'string', pattern: '[\\S]+', maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTargetResourceTypeResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionsRoute = createRoute({
  method: 'get',
  path: '/actions',
  description: 'Lists the available FIS actions.',
  operationId: 'ListActions',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\S]+/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\S]+', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListActionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getExperimentsRoute = createRoute({
  method: 'get',
  path: '/experiments',
  description: 'Lists your experiments.',
  operationId: 'ListExperiments',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\S]+/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\S]+', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExperimentsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postExperimentsRoute = createRoute({
  method: 'post',
  path: '/experiments',
  description: 'Starts running an experiment from the specified experiment template.',
  operationId: 'StartExperiment',
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
              clientToken: z
                .string()
                .regex(/[\S]+/)
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.',
                }),
              experimentTemplateId: z
                .string()
                .regex(/[\S]+/)
                .max(64)
                .openapi({ description: 'The ID of the experiment template.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the experiment.' }),
            })
            .openapi({ required: ['clientToken', 'experimentTemplateId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartExperimentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags for the specified resource.',
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
        .regex(/[\S]+/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string', pattern: '[\\S]+', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Applies the specified tags to the specified resource.',
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
        .regex(/[\S]+/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string', pattern: '[\\S]+', minLength: 20, maxLength: 2048 },
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
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The tags for the resource.' }),
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
  },
})

export const deleteTagsResourceArnRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}',
  description: 'Removes the specified tags from the specified resource.',
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
        .regex(/[\S]+/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string', pattern: '[\\S]+', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: false,
            description: 'The tag keys to remove.',
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
  },
})

export const getTargetResourceTypesRoute = createRoute({
  method: 'get',
  path: '/targetResourceTypes',
  description: 'Lists the target resource types.',
  operationId: 'ListTargetResourceTypes',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\S]+/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\S]+', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTargetResourceTypesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
