import { createRoute, z } from '@hono/zod-openapi'

const ActivatePipelineOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of ActivatePipeline.' })
  .openapi('ActivatePipelineOutput')

const IdSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('Id')

const FieldNameStringSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('FieldNameString')

const FieldStringValueSchema = z
  .string()
  .min(0)
  .max(10240)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('FieldStringValue')

const ParameterValueSchema = z
  .object({
    id: FieldNameStringSchema.and(
      z.any().openapi({ description: 'The ID of the parameter value.' }),
    ),
    stringValue: FieldStringValueSchema.and(
      z.any().openapi({ description: 'The field value, expressed as a String.' }),
    ),
  })
  .openapi({
    required: ['id', 'stringValue'],
    description: 'A value or list of parameter values. ',
  })
  .openapi('ParameterValue')

const ParameterValueListSchema = z.array(ParameterValueSchema).openapi('ParameterValueList')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ActivatePipelineInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    parameterValues: ParameterValueListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of parameter values to pass to the pipeline at activation.',
        }),
    ).exactOptional(),
    startTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId'],
    title: 'ActivatePipelineInput',
    description: 'Contains the parameters for ActivatePipeline.',
  })
  .openapi('ActivatePipelineInput')

const PipelineNotFoundExceptionSchema = z.any().openapi('PipelineNotFoundException')

const PipelineDeletedExceptionSchema = z.any().openapi('PipelineDeletedException')

const InternalServiceErrorSchema = z.any().openapi('InternalServiceError')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const AddTagsOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of AddTags.' })
  .openapi('AddTagsOutput')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key name of a tag defined by a user. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.',
        }),
    ),
    value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional value portion of a tag defined by a user. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      'Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(10).openapi('TagList')

const AddTagsInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to add, as key/value pairs.' }),
    ),
  })
  .openapi({
    required: ['pipelineId', 'tags'],
    title: 'AddTagsInput',
    description: 'Contains the parameters for AddTags.',
  })
  .openapi('AddTagsInput')

const CreatePipelineOutputSchema = z
  .object({
    pipelineId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID that AWS Data Pipeline assigns the newly created pipeline. For example, <code>df-06372391ZG65EXAMPLE</code>.',
        }),
    ),
  })
  .openapi({ required: ['pipelineId'], description: 'Contains the output of CreatePipeline.' })
  .openapi('CreatePipelineOutput')

const StringSchema = z
  .string()
  .min(0)
  .max(1024)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('String')

const CreatePipelineInputSchema = z
  .object({
    name: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account, because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.',
        }),
    ),
    uniqueId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier. This identifier is not the same as the pipeline identifier assigned by AWS Data Pipeline. You are responsible for defining the format and ensuring the uniqueness of this identifier. You use this parameter to ensure idempotency during repeated calls to <code>CreatePipeline</code>. For example, if the first call to <code>CreatePipeline</code> does not succeed, you can pass in the same unique identifier and pipeline name combination on a subsequent call to <code>CreatePipeline</code>. <code>CreatePipeline</code> ensures that if a pipeline already exists with the same name and unique identifier, a new pipeline is not created. Instead, you'll receive the pipeline identifier from the previous attempt. The uniqueness of the name and unique identifier combination is scoped to the AWS account or IAM user credentials.",
        }),
    ),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description for the pipeline.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'uniqueId'],
    title: 'CreatePipelineInput',
    description: 'Contains the parameters for CreatePipeline.',
  })
  .openapi('CreatePipelineInput')

const DeactivatePipelineOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of DeactivatePipeline.' })
  .openapi('DeactivatePipelineOutput')

const CancelActiveSchema = z.boolean().openapi('CancelActive')

const DeactivatePipelineInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    cancelActive: CancelActiveSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to cancel any running objects. The default is true, which sets the state of any running objects to <code>CANCELED</code>. If this value is false, the pipeline is deactivated after all running objects finish.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId'],
    title: 'DeactivatePipelineInput',
    description: 'Contains the parameters for DeactivatePipeline.',
  })
  .openapi('DeactivatePipelineInput')

const DeletePipelineInputSchema = z
  .object({ pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })) })
  .openapi({
    required: ['pipelineId'],
    title: 'DeletePipelineInput',
    description: 'Contains the parameters for DeletePipeline.',
  })
  .openapi('DeletePipelineInput')

const FieldSchema = z
  .object({
    key: FieldNameStringSchema.and(z.any().openapi({ description: 'The field identifier.' })),
    stringValue: FieldStringValueSchema.and(
      z.any().openapi({ description: 'The field value, expressed as a String.' }),
    ).exactOptional(),
    refValue: FieldNameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The field value, expressed as the identifier of another object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['key'],
    description:
      'A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.',
  })
  .openapi('Field')

const FieldListSchema = z.array(FieldSchema).openapi('FieldList')

const PipelineObjectSchema = z
  .object({
    id: IdSchema.and(z.any().openapi({ description: 'The ID of the object.' })),
    name: IdSchema.and(z.any().openapi({ description: 'The name of the object.' })),
    fields: FieldListSchema.and(
      z.any().openapi({ description: 'Key-value pairs that define the properties of the object.' }),
    ),
  })
  .openapi({
    required: ['id', 'name', 'fields'],
    description:
      'Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.',
  })
  .openapi('PipelineObject')

const PipelineObjectListSchema = z.array(PipelineObjectSchema).openapi('PipelineObjectList')

const BooleanSchema = z.boolean().openapi('Boolean')

const DescribeObjectsOutputSchema = z
  .object({
    pipelineObjects: PipelineObjectListSchema.and(
      z.any().openapi({ description: 'An array of object definitions.' }),
    ),
    marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting point for the next page of results. To view the next page of results, call <code>DescribeObjects</code> again with this marker value. If the value is null, there are no more results.',
        }),
    ).exactOptional(),
    hasMoreResults: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether there are more results to return.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineObjects'],
    description: 'Contains the output of DescribeObjects.',
  })
  .openapi('DescribeObjectsOutput')

const IdListSchema = z.array(IdSchema).openapi('IdList')

const DescribeObjectsInputSchema = z
  .object({
    pipelineId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the pipeline that contains the object definitions.' }),
    ),
    objectIds: IdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to <code>DescribeObjects</code>.',
        }),
    ),
    evaluateExpressions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether any expressions in the object should be evaluated when the object descriptions are returned.',
        }),
    ).exactOptional(),
    marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call <code>DescribeObjects</code> with the marker value from the previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId', 'objectIds'],
    title: 'DescribeObjectsInput',
    description: 'Contains the parameters for DescribeObjects.',
  })
  .openapi('DescribeObjectsInput')

const PipelineDescriptionSchema = z
  .object({
    pipelineId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.',
        }),
    ),
    name: IdSchema.and(z.any().openapi({ description: 'The name of the pipeline.' })),
    fields: FieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.',
        }),
    ),
    description: StringSchema.and(
      z.any().openapi({ description: 'Description of the pipeline.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associated with a pipeline. Tags let you control access to pipelines. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId', 'name', 'fields'],
    description: 'Contains pipeline metadata.',
  })
  .openapi('PipelineDescription')

const PipelineDescriptionListSchema = z
  .array(PipelineDescriptionSchema)
  .openapi('PipelineDescriptionList')

const DescribePipelinesOutputSchema = z
  .object({
    pipelineDescriptionList: PipelineDescriptionListSchema.and(
      z.any().openapi({ description: 'An array of descriptions for the specified pipelines.' }),
    ),
  })
  .openapi({
    required: ['pipelineDescriptionList'],
    description: 'Contains the output of DescribePipelines.',
  })
  .openapi('DescribePipelinesOutput')

const DescribePipelinesInputSchema = z
  .object({
    pipelineIds: IdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call. To obtain pipeline IDs, call <a>ListPipelines</a>.',
        }),
    ),
  })
  .openapi({
    required: ['pipelineIds'],
    title: 'DescribePipelinesInput',
    description: 'Contains the parameters for DescribePipelines.',
  })
  .openapi('DescribePipelinesInput')

const LongStringSchema = z
  .string()
  .min(0)
  .max(20971520)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('LongString')

const EvaluateExpressionOutputSchema = z
  .object({
    evaluatedExpression: LongStringSchema.and(
      z.any().openapi({ description: 'The evaluated expression.' }),
    ),
  })
  .openapi({
    required: ['evaluatedExpression'],
    description: 'Contains the output of EvaluateExpression.',
  })
  .openapi('EvaluateExpressionOutput')

const EvaluateExpressionInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    objectId: IdSchema.and(z.any().openapi({ description: 'The ID of the object.' })),
    expression: LongStringSchema.and(
      z.any().openapi({ description: 'The expression to evaluate.' }),
    ),
  })
  .openapi({
    required: ['pipelineId', 'objectId', 'expression'],
    title: 'EvaluateExpressionInput',
    description: 'Contains the parameters for EvaluateExpression.',
  })
  .openapi('EvaluateExpressionInput')

const TaskNotFoundExceptionSchema = z.any().openapi('TaskNotFoundException')

const AttributeNameStringSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('AttributeNameString')

const AttributeValueStringSchema = z
  .string()
  .min(0)
  .max(10240)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('AttributeValueString')

const ParameterAttributeSchema = z
  .object({
    key: AttributeNameStringSchema.and(z.any().openapi({ description: 'The field identifier.' })),
    stringValue: AttributeValueStringSchema.and(
      z.any().openapi({ description: 'The field value, expressed as a String.' }),
    ),
  })
  .openapi({
    required: ['key', 'stringValue'],
    description: 'The attributes allowed or specified with a parameter object.',
  })
  .openapi('ParameterAttribute')

const ParameterAttributeListSchema = z
  .array(ParameterAttributeSchema)
  .openapi('ParameterAttributeList')

const ParameterObjectSchema = z
  .object({
    id: FieldNameStringSchema.and(
      z.any().openapi({ description: 'The ID of the parameter object. ' }),
    ),
    attributes: ParameterAttributeListSchema.and(
      z.any().openapi({ description: 'The attributes of the parameter object.' }),
    ),
  })
  .openapi({
    required: ['id', 'attributes'],
    description: 'Contains information about a parameter object.',
  })
  .openapi('ParameterObject')

const ParameterObjectListSchema = z.array(ParameterObjectSchema).openapi('ParameterObjectList')

const GetPipelineDefinitionOutputSchema = z
  .object({
    pipelineObjects: PipelineObjectListSchema.and(
      z.any().openapi({ description: 'The objects defined in the pipeline.' }),
    ).exactOptional(),
    parameterObjects: ParameterObjectListSchema.and(
      z.any().openapi({ description: 'The parameter objects used in the pipeline definition.' }),
    ).exactOptional(),
    parameterValues: ParameterValueListSchema.and(
      z.any().openapi({ description: 'The parameter values used in the pipeline definition.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the output of GetPipelineDefinition.', required: [] })
  .openapi('GetPipelineDefinitionOutput')

const GetPipelineDefinitionInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the pipeline definition to retrieve. Set this parameter to <code>latest</code> (default) to use the last definition saved to the pipeline or <code>active</code> to use the last definition that was activated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId'],
    title: 'GetPipelineDefinitionInput',
    description: 'Contains the parameters for GetPipelineDefinition.',
  })
  .openapi('GetPipelineDefinitionInput')

const PipelineIdNameSchema = z
  .object({
    id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.',
        }),
    ).exactOptional(),
    name: IdSchema.and(
      z.any().openapi({ description: 'The name of the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the name and identifier of a pipeline.', required: [] })
  .openapi('PipelineIdName')

const PipelineListSchema = z.array(PipelineIdNameSchema).openapi('PipelineList')

const ListPipelinesOutputSchema = z
  .object({
    pipelineIdList: PipelineListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call <a>DescribePipelines</a> and <a>GetPipelineDefinition</a>.',
        }),
    ),
    marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting point for the next page of results. To view the next page of results, call <code>ListPipelinesOutput</code> again with this marker value. If the value is null, there are no more results.',
        }),
    ).exactOptional(),
    hasMoreResults: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether there are more results that can be obtained by a subsequent call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['pipelineIdList'], description: 'Contains the output of ListPipelines.' })
  .openapi('ListPipelinesOutput')

const ListPipelinesInputSchema = z
  .object({
    marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call <code>ListPipelines</code> with the marker value from the previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListPipelinesInput',
    description: 'Contains the parameters for ListPipelines.',
    required: [],
  })
  .openapi('ListPipelinesInput')

const TaskIdSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('TaskId')

const PipelineObjectMapSchema = z
  .record(z.string(), PipelineObjectSchema)
  .openapi('PipelineObjectMap')

const TaskObjectSchema = z
  .object({
    taskId: TaskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An internal identifier for the task. This ID is passed to the <a>SetTaskStatus</a> and <a>ReportTaskProgress</a> actions.',
        }),
    ).exactOptional(),
    pipelineId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the pipeline that provided the task.' }),
    ).exactOptional(),
    attemptId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.',
        }),
    ).exactOptional(),
    objects: PipelineObjectMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Connection information for the location where the task runner will publish the output of the task.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a pipeline task that is assigned to a task runner.',
    required: [],
  })
  .openapi('TaskObject')

const PollForTaskOutputSchema = z
  .object({
    taskObject: TaskObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is <code>taskId</code>, which contains an identifier for the task being assigned. The calling task runner uses <code>taskId</code> in subsequent calls to <a>ReportTaskProgress</a> and <a>SetTaskStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the output of PollForTask.', required: [] })
  .openapi('PollForTaskOutput')

const InstanceIdentitySchema = z
  .object({
    document: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of an EC2 instance that is generated when the instance is launched and exposed to the instance via the instance metadata service in the form of a JSON representation of an object.',
        }),
    ).exactOptional(),
    signature: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A signature which can be used to verify the accuracy and authenticity of the information provided in the instance identity document.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>',
    required: [],
  })
  .openapi('InstanceIdentity')

const PollForTaskInputSchema = z
  .object({
    workerGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for <code>workerGroup</code> in the call to <code>PollForTask</code>. There are no wildcard values permitted in <code>workerGroup</code>; the string must be an exact, case-sensitive, match.',
        }),
    ),
    hostname: IdSchema.and(
      z.any().openapi({ description: 'The public DNS name of the calling task runner.' }),
    ).exactOptional(),
    instanceIdentity: InstanceIdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using <code>http://169.254.169.254/latest/meta-data/instance-id</code>. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['workerGroup'],
    title: 'PollForTaskInput',
    description: 'Contains the parameters for PollForTask.',
  })
  .openapi('PollForTaskInput')

const ValidationMessageSchema = z
  .string()
  .min(0)
  .max(10000)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('ValidationMessage')

const ValidationMessagesSchema = z.array(ValidationMessageSchema).openapi('ValidationMessages')

const ValidationErrorSchema = z
  .object({
    id: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the object that contains the validation error.',
        }),
    ).exactOptional(),
    errors: ValidationMessagesSchema.and(
      z.any().openapi({ description: 'A description of the validation error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.',
    required: [],
  })
  .openapi('ValidationError')

const ValidationErrorsSchema = z.array(ValidationErrorSchema).openapi('ValidationErrors')

const ValidationWarningSchema = z
  .object({
    id: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the object that contains the validation warning.',
        }),
    ).exactOptional(),
    warnings: ValidationMessagesSchema.and(
      z.any().openapi({ description: 'A description of the validation warning.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.',
    required: [],
  })
  .openapi('ValidationWarning')

const ValidationWarningsSchema = z.array(ValidationWarningSchema).openapi('ValidationWarnings')

const PutPipelineDefinitionOutputSchema = z
  .object({
    validationErrors: ValidationErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The validation errors that are associated with the objects defined in <code>pipelineObjects</code>.',
        }),
    ).exactOptional(),
    validationWarnings: ValidationWarningsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The validation warnings that are associated with the objects defined in <code>pipelineObjects</code>.',
        }),
    ).exactOptional(),
    errored: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether there were validation errors, and the pipeline definition is stored but cannot be activated until you correct the pipeline and call <code>PutPipelineDefinition</code> to commit the corrected pipeline.',
        }),
    ),
  })
  .openapi({ required: ['errored'], description: 'Contains the output of PutPipelineDefinition.' })
  .openapi('PutPipelineDefinitionOutput')

const PutPipelineDefinitionInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    pipelineObjects: PipelineObjectListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The objects that define the pipeline. These objects overwrite the existing pipeline definition.',
        }),
    ),
    parameterObjects: ParameterObjectListSchema.and(
      z.any().openapi({ description: 'The parameter objects used with the pipeline.' }),
    ).exactOptional(),
    parameterValues: ParameterValueListSchema.and(
      z.any().openapi({ description: 'The parameter values used with the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId', 'pipelineObjects'],
    title: 'PutPipelineDefinitionInput',
    description: 'Contains the parameters for PutPipelineDefinition.',
  })
  .openapi('PutPipelineDefinitionInput')

const QueryObjectsOutputSchema = z
  .object({
    ids: IdListSchema.and(
      z.any().openapi({ description: 'The identifiers that match the query selectors.' }),
    ).exactOptional(),
    marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting point for the next page of results. To view the next page of results, call <code>QueryObjects</code> again with this marker value. If the value is null, there are no more results.',
        }),
    ).exactOptional(),
    hasMoreResults: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether there are more results that can be obtained by a subsequent call.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the output of QueryObjects.', required: [] })
  .openapi('QueryObjectsOutput')

const OperatorTypeSchema = z.enum(['EQ', 'REF_EQ', 'LE', 'GE', 'BETWEEN']).openapi('OperatorType')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const OperatorSchema = z
  .object({
    type: OperatorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The logical operation to be performed: equal (<code>EQ</code>), equal reference (<code>REF_EQ</code>), less than or equal (<code>LE</code>), greater than or equal (<code>GE</code>), or between (<code>BETWEEN</code>). Equal reference (<code>REF_EQ</code>) can be used only with reference fields. The other comparison types can be used only with String fields. The comparison types you can use apply only to certain object fields, as detailed below. </p> <p> The comparison operators EQ and REF_EQ act on the following fields: </p> <ul> <li>name</li> <li>@sphere</li> <li>parent</li> <li>@componentParent</li> <li>@instanceParent</li> <li>@status</li> <li>@scheduledStartTime</li> <li>@scheduledEndTime</li> <li>@actualStartTime</li> <li>@actualEndTime</li> </ul> <p> The comparison operators <code>GE</code>, <code>LE</code>, and <code>BETWEEN</code> act on the following fields: </p> <ul> <li>@scheduledStartTime</li> <li>@scheduledEndTime</li> <li>@actualStartTime</li> <li>@actualEndTime</li> </ul> <p>Note that fields beginning with the at sign (@) are read-only and set by the web service. When you name fields, you should choose names containing only alpha-numeric values, as symbols may be reserved by AWS Data Pipeline. User-defined fields that you add to a pipeline should prefix their name with the string "my".</p>',
        }),
    ).exactOptional(),
    values: StringListSchema.and(
      z
        .any()
        .openapi({ description: 'The value that the actual field value will be compared with.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains a logical operation for comparing the value of a field with a specified value.',
    required: [],
  })
  .openapi('Operator')

const SelectorSchema = z
  .object({
    fieldName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the field that the operator will be applied to. The field name is the "key" portion of the field definition in the pipeline definition syntax that is used by the AWS Data Pipeline API. If the field is not set on the object, the condition fails.',
        }),
    ).exactOptional(),
    operator: OperatorSchema.exactOptional(),
  })
  .openapi({
    description:
      'A comparision that is used to determine whether a query should return this object.',
    required: [],
  })
  .openapi('Selector')

const SelectorListSchema = z
  .array(SelectorSchema)
  .openapi({ description: 'The list of Selectors that define queries on individual fields.' })
  .openapi('SelectorList')

const QuerySchema = z
  .object({
    selectors: SelectorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of selectors that define the query. An object must satisfy all of the selectors to match the query.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Defines the query to run against an object.', required: [] })
  .openapi('Query')

const IntSchema = z.int().openapi('Int')

const QueryObjectsInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    query: QuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The query that defines the objects to be returned. The <code>Query</code> object can contain a maximum of ten selectors. The conditions in the query are limited to top-level String fields in the object. These filters can be applied to components, instances, and attempts.',
        }),
    ).exactOptional(),
    sphere: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the query applies to components or instances. The possible values are: <code>COMPONENT</code>, <code>INSTANCE</code>, and <code>ATTEMPT</code>.',
        }),
    ),
    marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call <code>QueryObjects</code> with the marker value from the previous call to retrieve the next set of results.',
        }),
    ).exactOptional(),
    limit: IntSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of object names that <code>QueryObjects</code> will return in a single call. The default value is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId', 'sphere'],
    title: 'QueryObjectsInput',
    description: 'Contains the parameters for QueryObjects.',
  })
  .openapi('QueryObjectsInput')

const RemoveTagsOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of RemoveTags.' })
  .openapi('RemoveTagsOutput')

const RemoveTagsInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    tagKeys: StringListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to remove.' }),
    ),
  })
  .openapi({
    required: ['pipelineId', 'tagKeys'],
    title: 'RemoveTagsInput',
    description: 'Contains the parameters for RemoveTags.',
  })
  .openapi('RemoveTagsInput')

const ReportTaskProgressOutputSchema = z
  .object({
    canceled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If true, the calling task runner should cancel processing of the task. The task runner does not need to call <a>SetTaskStatus</a> for canceled tasks.',
        }),
    ),
  })
  .openapi({ required: ['canceled'], description: 'Contains the output of ReportTaskProgress.' })
  .openapi('ReportTaskProgressOutput')

const ReportTaskProgressInputSchema = z
  .object({
    taskId: TaskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.',
        }),
    ),
    fields: FieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that define the properties of the ReportTaskProgressInput object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['taskId'],
    title: 'ReportTaskProgressInput',
    description: 'Contains the parameters for ReportTaskProgress.',
  })
  .openapi('ReportTaskProgressInput')

const ReportTaskRunnerHeartbeatOutputSchema = z
  .object({
    terminate: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the calling task runner should terminate.' }),
    ),
  })
  .openapi({
    required: ['terminate'],
    description: 'Contains the output of ReportTaskRunnerHeartbeat.',
  })
  .openapi('ReportTaskRunnerHeartbeatOutput')

const ReportTaskRunnerHeartbeatInputSchema = z
  .object({
    taskrunnerId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the task runner. This value should be unique across your AWS account. In the case of AWS Data Pipeline Task Runner launched on a resource managed by AWS Data Pipeline, the web service provides a unique identifier when it launches the application. If you have written a custom task runner, you should assign a unique identifier for the task runner.',
        }),
    ),
    workerGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for <code>workerGroup</code>. There are no wildcard values permitted in <code>workerGroup</code>; the string must be an exact, case-sensitive, match.',
        }),
    ).exactOptional(),
    hostname: IdSchema.and(
      z.any().openapi({ description: 'The public DNS name of the task runner.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['taskrunnerId'],
    title: 'ReportTaskRunnerHeartbeatInput',
    description: 'Contains the parameters for ReportTaskRunnerHeartbeat.',
  })
  .openapi('ReportTaskRunnerHeartbeatInput')

const SetStatusInputSchema = z
  .object({
    pipelineId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the pipeline that contains the objects.' }),
    ),
    objectIds: IdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types.',
        }),
    ),
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status to be set on all the objects specified in <code>objectIds</code>. For components, use <code>PAUSE</code> or <code>RESUME</code>. For instances, use <code>TRY_CANCEL</code>, <code>RERUN</code>, or <code>MARK_FINISHED</code>.',
        }),
    ),
  })
  .openapi({
    required: ['pipelineId', 'objectIds', 'status'],
    title: 'SetStatusInput',
    description: 'Contains the parameters for SetStatus.',
  })
  .openapi('SetStatusInput')

const SetTaskStatusOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of SetTaskStatus.' })
  .openapi('SetTaskStatusOutput')

const TaskStatusSchema = z.enum(['FINISHED', 'FAILED', 'FALSE']).openapi('TaskStatus')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const SetTaskStatusInputSchema = z
  .object({
    taskId: TaskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.',
        }),
    ),
    taskStatus: TaskStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>FINISHED</code>, the task successfully completed. If <code>FAILED</code>, the task ended unsuccessfully. Preconditions use false.',
        }),
    ),
    errorId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If an error occurred during the task, this value specifies the error code. This value is set on the physical attempt object. It is used to display error information to the user. It should not start with string "Service_" which is reserved by the system.',
        }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If an error occurred during the task, this value specifies a text description of the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.',
        }),
    ).exactOptional(),
    errorStackTrace: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If an error occurred during the task, this value specifies the stack trace associated with the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['taskId', 'taskStatus'],
    title: 'SetTaskStatusInput',
    description: 'Contains the parameters for SetTaskStatus.',
  })
  .openapi('SetTaskStatusInput')

const ValidatePipelineDefinitionOutputSchema = z
  .object({
    validationErrors: ValidationErrorsSchema.and(
      z.any().openapi({ description: 'Any validation errors that were found.' }),
    ).exactOptional(),
    validationWarnings: ValidationWarningsSchema.and(
      z.any().openapi({ description: 'Any validation warnings that were found.' }),
    ).exactOptional(),
    errored: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether there were validation errors.' }),
    ),
  })
  .openapi({
    required: ['errored'],
    description: 'Contains the output of ValidatePipelineDefinition.',
  })
  .openapi('ValidatePipelineDefinitionOutput')

const ValidatePipelineDefinitionInputSchema = z
  .object({
    pipelineId: IdSchema.and(z.any().openapi({ description: 'The ID of the pipeline.' })),
    pipelineObjects: PipelineObjectListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The objects that define the pipeline changes to validate against the pipeline.',
        }),
    ),
    parameterObjects: ParameterObjectListSchema.and(
      z.any().openapi({ description: 'The parameter objects used with the pipeline.' }),
    ).exactOptional(),
    parameterValues: ParameterValueListSchema.and(
      z.any().openapi({ description: 'The parameter values used with the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineId', 'pipelineObjects'],
    title: 'ValidatePipelineDefinitionInput',
    description: 'Contains the parameters for ValidatePipelineDefinition.',
  })
  .openapi('ValidatePipelineDefinitionInput')

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

export const postXAmzTargetDataPipelineActivatePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.ActivatePipeline',
  description:
    '<p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>',
  operationId: 'ActivatePipeline',
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
        .literal('DataPipeline.ActivatePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.ActivatePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ActivatePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivatePipelineOutputSchema } },
    },
    480: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    481: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineAddTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.AddTags',
  description: 'Adds or modifies tags for the specified pipeline.',
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
        .literal('DataPipeline.AddTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.AddTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddTagsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddTagsOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineCreatePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.CreatePipeline',
  description:
    'Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.',
  operationId: 'CreatePipeline',
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
        .literal('DataPipeline.CreatePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.CreatePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePipelineOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineDeactivatePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.DeactivatePipeline',
  description:
    '<p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>',
  operationId: 'DeactivatePipeline',
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
        .literal('DataPipeline.DeactivatePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.DeactivatePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeactivatePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeactivatePipelineOutputSchema } },
    },
    480: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    481: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineDeletePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.DeletePipeline',
  description:
    '<p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>',
  operationId: 'DeletePipeline',
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
        .literal('DataPipeline.DeletePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.DeletePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineDescribeObjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.DescribeObjects',
  description:
    'Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.',
  operationId: 'DescribeObjects',
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
        .literal('DataPipeline.DescribeObjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.DescribeObjects'] },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeObjectsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeObjectsOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineDescribePipelinesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.DescribePipelines',
  description:
    '<p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>',
  operationId: 'DescribePipelines',
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
        .literal('DataPipeline.DescribePipelines')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.DescribePipelines'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePipelinesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePipelinesOutputSchema } },
    },
    480: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    481: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineEvaluateExpressionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.EvaluateExpression',
  description:
    'Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.',
  operationId: 'EvaluateExpression',
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
        .literal('DataPipeline.EvaluateExpression')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.EvaluateExpression'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EvaluateExpressionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EvaluateExpressionOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'TaskNotFoundException',
      content: { 'application/json': { schema: TaskNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    484: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineGetPipelineDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.GetPipelineDefinition',
  description:
    'Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.',
  operationId: 'GetPipelineDefinition',
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
        .literal('DataPipeline.GetPipelineDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.GetPipelineDefinition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPipelineDefinitionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPipelineDefinitionOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineListPipelinesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.ListPipelines',
  description:
    'Lists the pipeline identifiers for all active pipelines that you have permission to access.',
  operationId: 'ListPipelines',
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
        .literal('DataPipeline.ListPipelines')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.ListPipelines'] },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListPipelinesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPipelinesOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelinePollForTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.PollForTask',
  description:
    '<p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>',
  operationId: 'PollForTask',
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
        .literal('DataPipeline.PollForTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.PollForTask'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PollForTaskInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PollForTaskOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TaskNotFoundException',
      content: { 'application/json': { schema: TaskNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelinePutPipelineDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.PutPipelineDefinition',
  description:
    '<p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>',
  operationId: 'PutPipelineDefinition',
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
        .literal('DataPipeline.PutPipelineDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.PutPipelineDefinition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutPipelineDefinitionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPipelineDefinitionOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineQueryObjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.QueryObjects',
  description:
    'Queries the specified pipeline for the names of objects that match the specified set of conditions.',
  operationId: 'QueryObjects',
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
        .literal('DataPipeline.QueryObjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.QueryObjects'] },
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
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryObjectsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueryObjectsOutputSchema } },
    },
    480: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    481: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineRemoveTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.RemoveTags',
  description: 'Removes existing tags from the specified pipeline.',
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
        .literal('DataPipeline.RemoveTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.RemoveTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveTagsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTagsOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineReportTaskProgressRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.ReportTaskProgress',
  description:
    '<p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>',
  operationId: 'ReportTaskProgress',
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
        .literal('DataPipeline.ReportTaskProgress')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.ReportTaskProgress'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReportTaskProgressInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportTaskProgressOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'TaskNotFoundException',
      content: { 'application/json': { schema: TaskNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    484: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineReportTaskRunnerHeartbeatRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat',
  description:
    'Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.',
  operationId: 'ReportTaskRunnerHeartbeat',
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
        .literal('DataPipeline.ReportTaskRunnerHeartbeat')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.ReportTaskRunnerHeartbeat'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReportTaskRunnerHeartbeatInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReportTaskRunnerHeartbeatOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineSetStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.SetStatus',
  description:
    'Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.',
  operationId: 'SetStatus',
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
        .literal('DataPipeline.SetStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.SetStatus'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetStatusInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    481: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineSetTaskStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.SetTaskStatus',
  description:
    'Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.',
  operationId: 'SetTaskStatus',
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
        .literal('DataPipeline.SetTaskStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.SetTaskStatus'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetTaskStatusInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetTaskStatusOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'TaskNotFoundException',
      content: { 'application/json': { schema: TaskNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    484: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetDataPipelineValidatePipelineDefinitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DataPipeline.ValidatePipelineDefinition',
  description:
    'Validates the specified pipeline definition to ensure that it is well formed and can be run without error.',
  operationId: 'ValidatePipelineDefinition',
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
        .literal('DataPipeline.ValidatePipelineDefinition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DataPipeline.ValidatePipelineDefinition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ValidatePipelineDefinitionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ValidatePipelineDefinitionOutputSchema } },
    },
    480: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineDeletedException',
      content: { 'application/json': { schema: PipelineDeletedExceptionSchema } },
    },
  },
})
