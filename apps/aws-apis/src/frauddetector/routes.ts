import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const IntegerSchema = z.int().openapi('Integer')

const BatchCreateVariableErrorSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name.' })).exactOptional(),
    code: IntegerSchema.and(z.any().openapi({ description: 'The error code. ' })).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides the error of the batch create variable API.', required: [] })
  .openapi('BatchCreateVariableError')

const BatchCreateVariableErrorListSchema = z
  .array(BatchCreateVariableErrorSchema)
  .openapi('BatchCreateVariableErrorList')

const BatchCreateVariableResultSchema = z
  .object({
    errors: BatchCreateVariableErrorListSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the errors for the <code>BatchCreateVariable</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchCreateVariableResult')

const VariableEntrySchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the variable.' }),
    ).exactOptional(),
    dataType: StringSchema.and(
      z.any().openapi({ description: 'The data type of the variable.' }),
    ).exactOptional(),
    dataSource: StringSchema.and(
      z.any().openapi({ description: 'The data source of the variable.' }),
    ).exactOptional(),
    defaultValue: StringSchema.and(
      z.any().openapi({ description: 'The default value of the variable.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the variable.' }),
    ).exactOptional(),
    variableType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p> <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A variable in the list of variables for the batch create variable request.',
    required: [],
  })
  .openapi('VariableEntry')

const VariableEntryListSchema = z
  .array(VariableEntrySchema)
  .min(1)
  .max(25)
  .openapi('VariableEntryList')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: 'A tag key.' })),
    value: TagValueSchema.and(z.any().openapi({ description: 'A value assigned to a tag key.' })),
  })
  .openapi({ required: ['key', 'value'], description: 'A key and value pair. ' })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const BatchCreateVariableRequestSchema = z
  .object({
    variableEntries: VariableEntryListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of variables for the batch create variable request.' }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['variableEntries'], title: 'BatchCreateVariableRequest' })
  .openapi('BatchCreateVariableRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const DataTypeSchema = z.enum(['STRING', 'INTEGER', 'FLOAT', 'BOOLEAN']).openapi('DataType')

const DataSourceSchema = z
  .enum(['EVENT', 'MODEL_SCORE', 'EXTERNAL_MODEL_SCORE'])
  .openapi('DataSource')

const TimeSchema = z.string().min(11).max(30).openapi('Time')

const FraudDetectorArnSchema = z
  .string()
  .regex(/^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$/)
  .min(1)
  .max(256)
  .openapi('FraudDetectorArn')

const VariableSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the variable.' }),
    ).exactOptional(),
    dataType: DataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.',
        }),
    ).exactOptional(),
    dataSource: DataSourceSchema.and(
      z.any().openapi({ description: 'The data source of the variable.' }),
    ).exactOptional(),
    defaultValue: StringSchema.and(
      z.any().openapi({ description: 'The default value of the variable.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the variable. ' }),
    ).exactOptional(),
    variableType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The variable type of the variable.</p> <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code> </p>',
        }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'The time when variable was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'The time when the variable was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The ARN of the variable.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The variable.', required: [] })
  .openapi('Variable')

const VariableListSchema = z.array(VariableSchema).openapi('VariableList')

const BatchGetVariableErrorSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The error name. ' })).exactOptional(),
    code: IntegerSchema.and(z.any().openapi({ description: 'The error code. ' })).exactOptional(),
    message: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides the error of the batch get variable API.', required: [] })
  .openapi('BatchGetVariableError')

const BatchGetVariableErrorListSchema = z
  .array(BatchGetVariableErrorSchema)
  .openapi('BatchGetVariableErrorList')

const BatchGetVariableResultSchema = z
  .object({
    variables: VariableListSchema.and(
      z.any().openapi({ description: 'The returned variables.' }),
    ).exactOptional(),
    errors: BatchGetVariableErrorListSchema.and(
      z.any().openapi({ description: 'The errors from the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetVariableResult')

const NameListSchema = z.array(StringSchema).min(1).max(100).openapi('NameList')

const BatchGetVariableRequestSchema = z
  .object({
    names: NameListSchema.and(
      z.any().openapi({ description: 'The list of variable names to get.' }),
    ),
  })
  .openapi({ required: ['names'], title: 'BatchGetVariableRequest' })
  .openapi('BatchGetVariableRequest')

const CancelBatchImportJobResultSchema = z.object({}).openapi('CancelBatchImportJobResult')

const IdentifierSchema = z
  .string()
  .regex(/^[0-9a-z_-]+$/)
  .min(1)
  .max(64)
  .openapi('Identifier')

const CancelBatchImportJobRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The ID of an in-progress batch import job to cancel. </p> <p>Amazon Fraud Detector will throw an error if the batch import job is in <code>FAILED</code>, <code>CANCELED</code>, or <code>COMPLETED</code> state.</p>',
        }),
    ),
  })
  .openapi({ required: ['jobId'], title: 'CancelBatchImportJobRequest' })
  .openapi('CancelBatchImportJobRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const CancelBatchPredictionJobResultSchema = z.object({}).openapi('CancelBatchPredictionJobResult')

const CancelBatchPredictionJobRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the batch prediction job to cancel.' }),
    ),
  })
  .openapi({ required: ['jobId'], title: 'CancelBatchPredictionJobRequest' })
  .openapi('CancelBatchPredictionJobRequest')

const CreateBatchImportJobResultSchema = z.object({}).openapi('CreateBatchImportJobResult')

const S3BucketLocationSchema = z
  .string()
  .regex(/^s3:\/\/(.+)$/)
  .min(1)
  .max(512)
  .openapi('S3BucketLocation')

const IamRoleArnSchema = z
  .string()
  .regex(/^arn\:aws[a-z-]{0,15}\:iam\:\:[0-9]{12}\:role\/[^\s]{2,64}$/)
  .min(1)
  .max(256)
  .openapi('IamRoleArn')

const CreateBatchImportJobRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the batch import job. The ID cannot be of a past job, unless the job exists in <code>CREATE_FAILED</code> state.',
        }),
    ),
    inputPath: S3BucketLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The URI that points to the Amazon S3 location of your data file.',
        }),
    ),
    outputPath: S3BucketLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The URI that points to the Amazon S3 location for storing your results. ',
        }),
    ),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ),
    iamRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role created for Amazon S3 bucket that holds your data file.</p> <p>The IAM role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket. For more information about bucket permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html">User policy examples</a> in the <i>Amazon S3 User Guide</i>.</p>',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of key-value pairs associated with this request. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobId', 'inputPath', 'outputPath', 'eventTypeName', 'iamRoleArn'],
    title: 'CreateBatchImportJobRequest',
  })
  .openapi('CreateBatchImportJobRequest')

const CreateBatchPredictionJobResultSchema = z.object({}).openapi('CreateBatchPredictionJobResult')

const WholeNumberVersionStringSchema = z
  .string()
  .regex(/^([1-9][0-9]*)$/)
  .min(1)
  .max(5)
  .openapi('WholeNumberVersionString')

const CreateBatchPredictionJobRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the batch prediction job.' }),
    ),
    inputPath: S3BucketLocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of your training file.' }),
    ),
    outputPath: S3BucketLocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of your output file.' }),
    ),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ),
    detectorName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the detector.' }),
    ),
    detectorVersion: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version.' }),
    ).exactOptional(),
    iamRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role to use for this job request.</p> <p>The IAM Role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket. For more information about bucket permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html">User policy examples</a> in the <i>Amazon S3 User Guide</i>.</p>',
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobId', 'inputPath', 'outputPath', 'eventTypeName', 'detectorName', 'iamRoleArn'],
    title: 'CreateBatchPredictionJobRequest',
  })
  .openapi('CreateBatchPredictionJobRequest')

const DetectorVersionStatusSchema = z
  .enum(['DRAFT', 'ACTIVE', 'INACTIVE'])
  .openapi('DetectorVersionStatus')

const CreateDetectorVersionResultSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: "The ID for the created version's parent detector." }),
    ).exactOptional(),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The ID for the created detector. ' }),
    ).exactOptional(),
    status: DetectorVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the detector version.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDetectorVersionResult')

const DescriptionSchema = z.string().min(1).max(128).openapi('Description')

const ListOfStringsSchema = z.array(StringSchema).openapi('ListOfStrings')

const RuleSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: 'The detector for which the rule is associated.' }),
    ),
    ruleId: IdentifierSchema.and(z.any().openapi({ description: 'The rule ID.' })),
    ruleVersion: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The rule version.' }),
    ),
  })
  .openapi({ required: ['detectorId', 'ruleId', 'ruleVersion'], description: 'A rule.' })
  .openapi('Rule')

const RuleListSchema = z.array(RuleSchema).openapi('RuleList')

const ModelIdentifierSchema = z
  .string()
  .regex(/^[0-9a-z_]+$/)
  .min(1)
  .max(64)
  .openapi('ModelIdentifier')

const ModelTypeEnumSchema = z
  .enum(['ONLINE_FRAUD_INSIGHTS', 'TRANSACTION_FRAUD_INSIGHTS', 'ACCOUNT_TAKEOVER_INSIGHTS'])
  .openapi('ModelTypeEnum')

const FloatVersionStringSchema = z
  .string()
  .regex(/^[1-9][0-9]{0,3}\.[0-9]{1,2}$/)
  .min(3)
  .max(7)
  .openapi('FloatVersionString')

const ModelVersionSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(z.any().openapi({ description: 'The model ID.' })),
    modelType: ModelTypeEnumSchema.and(z.any().openapi({ description: 'The model type.' })),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number.' }),
    ),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The model version ARN.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['modelId', 'modelType', 'modelVersionNumber'],
    description: 'The model version.',
  })
  .openapi('ModelVersion')

const ListOfModelVersionsSchema = z.array(ModelVersionSchema).openapi('ListOfModelVersions')

const RuleExecutionModeSchema = z
  .enum(['ALL_MATCHED', 'FIRST_MATCHED'])
  .openapi('RuleExecutionMode')

const CreateDetectorVersionRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the detector under which you want to create a new version.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the detector version.' }),
    ).exactOptional(),
    externalModelEndpoints: ListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Sagemaker model endpoints to include in the detector version.',
        }),
    ).exactOptional(),
    rules: RuleListSchema.and(
      z.any().openapi({ description: 'The rules to include in the detector version.' }),
    ),
    modelVersions: ListOfModelVersionsSchema.and(
      z.any().openapi({ description: 'The model versions to include in the detector version.' }),
    ).exactOptional(),
    ruleExecutionMode: RuleExecutionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rule execution mode for the rules included in the detector version.</p> <p>You can define and edit the rule mode at the detector version level, when it is in draft status.</p> <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p> <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. </p> <p>The default behavior is <code>FIRST_MATCHED</code>.</p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['detectorId', 'rules'], title: 'CreateDetectorVersionRequest' })
  .openapi('CreateDetectorVersionRequest')

const CreateListResultSchema = z.object({}).openapi('CreateListResult')

const NoDashIdentifierSchema = z
  .string()
  .regex(/^[0-9a-z_]+$/)
  .min(1)
  .max(64)
  .openapi('NoDashIdentifier')

const ElementsSchema = z
  .string()
  .regex(/^\S+( +\S+)*$/)
  .min(1)
  .max(320)
  .openapi('Elements')

const ElementsListSchema = z.array(ElementsSchema).min(0).max(100000).openapi('ElementsList')

const VariableTypeSchema = z
  .string()
  .regex(/^[A-Z_]{1,64}$/)
  .min(1)
  .max(64)
  .openapi('VariableType')

const CreateListRequestSchema = z
  .object({
    name: NoDashIdentifierSchema.and(z.any().openapi({ description: ' The name of the list. ' })),
    elements: ElementsListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The names of the elements, if providing. You can also create an empty list and add elements later using the <a href="https://docs.aws.amazon.com/frauddetector/latest/api/API_Updatelist.html">UpdateList</a> API. ',
        }),
    ).exactOptional(),
    variableType: VariableTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The variable type of the list. You can only assign the variable type with String data type. For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>. ',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description of the list. ' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: ' A collection of the key and value pairs. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateListRequest' })
  .openapi('CreateListRequest')

const CreateModelResultSchema = z.object({}).openapi('CreateModelResult')

const CreateModelRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(z.any().openapi({ description: 'The model ID.' })),
    modelType: ModelTypeEnumSchema.and(z.any().openapi({ description: 'The model type. ' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The model description. ' }),
    ).exactOptional(),
    eventTypeName: StringSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['modelId', 'modelType', 'eventTypeName'], title: 'CreateModelRequest' })
  .openapi('CreateModelRequest')

const CreateModelVersionResultSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID.' }),
    ).exactOptional(),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number of the model version created.' }),
    ).exactOptional(),
    status: StringSchema.and(
      z.any().openapi({ description: 'The model version status. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateModelVersionResult')

const TrainingDataSourceEnumSchema = z
  .enum(['EXTERNAL_EVENTS', 'INGESTED_EVENTS'])
  .openapi('TrainingDataSourceEnum')

const LabelMapperSchema = z.record(z.string(), ListOfStringsSchema).openapi('LabelMapper')

const UnlabeledEventsTreatmentSchema = z
  .enum(['IGNORE', 'FRAUD', 'LEGIT', 'AUTO'])
  .openapi('UnlabeledEventsTreatment')

const LabelSchemaSchema = z
  .object({
    labelMapper: LabelMapperSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label mapper maps the Amazon Fraud Detector supported model classification labels (<code>FRAUD</code>, <code>LEGIT</code>) to the appropriate event type labels. For example, if "<code>FRAUD</code>" and "<code>LEGIT</code>" are Amazon Fraud Detector supported labels, this mapper could be: <code>{"FRAUD" =&gt; ["0"]</code>, <code>"LEGIT" =&gt; ["1"]}</code> or <code>{"FRAUD" =&gt; ["false"]</code>, <code>"LEGIT" =&gt; ["true"]}</code> or <code>{"FRAUD" =&gt; ["fraud", "abuse"]</code>, <code>"LEGIT" =&gt; ["legit", "safe"]}</code>. The value part of the mapper is a list, because you may have multiple label variants from your event type for a single Amazon Fraud Detector label. ',
        }),
    ).exactOptional(),
    unlabeledEventsTreatment: UnlabeledEventsTreatmentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action to take for unlabeled events.</p> <ul> <li> <p>Use <code>IGNORE</code> if you want the unlabeled events to be ignored. This is recommended when the majority of the events in the dataset are labeled.</p> </li> <li> <p>Use <code>FRAUD</code> if you want to categorize all unlabeled events as “Fraud”. This is recommended when most of the events in your dataset are fraudulent.</p> </li> <li> <p>Use <code>LEGIT</code> f you want to categorize all unlabeled events as “Legit”. This is recommended when most of the events in your dataset are legitimate.</p> </li> <li> <p>Use <code>AUTO</code> if you want Amazon Fraud Detector to decide how to use the unlabeled data. This is recommended when there is significant unlabeled events in the dataset.</p> </li> </ul> <p>By default, Amazon Fraud Detector ignores the unlabeled data.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The label schema.', required: [] })
  .openapi('LabelSchema')

const TrainingDataSchemaSchema = z
  .object({
    modelVariables: ListOfStringsSchema.and(
      z.any().openapi({ description: 'The training data schema variables.' }),
    ),
    labelSchema: LabelSchemaSchema.exactOptional(),
  })
  .openapi({ required: ['modelVariables'], description: 'The training data schema.' })
  .openapi('TrainingDataSchema')

const ExternalEventsDetailSchema = z
  .object({
    dataLocation: S3BucketLocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket location for the data.' }),
    ),
    dataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that provides Amazon Fraud Detector access to the data location.',
        }),
    ),
  })
  .openapi({
    required: ['dataLocation', 'dataAccessRoleArn'],
    description: 'Details for the external events data used for model version training.',
  })
  .openapi('ExternalEventsDetail')

const IngestedEventsTimeWindowSchema = z
  .object({
    startTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of the first ingensted event.' }),
    ),
    endTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of the final ingested event.' }),
    ),
  })
  .openapi({
    required: ['startTime', 'endTime'],
    description: 'The start and stop time of the ingested events.',
  })
  .openapi('IngestedEventsTimeWindow')

const IngestedEventsDetailSchema = z
  .object({
    ingestedEventsTimeWindow: IngestedEventsTimeWindowSchema.and(
      z.any().openapi({ description: 'The start and stop time of the ingested events.' }),
    ),
  })
  .openapi({
    required: ['ingestedEventsTimeWindow'],
    description: 'The details of the ingested event.',
  })
  .openapi('IngestedEventsDetail')

const CreateModelVersionRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(z.any().openapi({ description: 'The model ID. ' })),
    modelType: ModelTypeEnumSchema.and(z.any().openapi({ description: 'The model type.' })),
    trainingDataSource: TrainingDataSourceEnumSchema.and(
      z.any().openapi({ description: 'The training data source location in Amazon S3. ' }),
    ),
    trainingDataSchema: TrainingDataSchemaSchema.and(
      z.any().openapi({ description: 'The training data schema.' }),
    ),
    externalEventsDetail: ExternalEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of the external events data used for model version training. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.',
        }),
    ).exactOptional(),
    ingestedEventsDetail: IngestedEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of the ingested events data used for model version training. Required if <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['modelId', 'modelType', 'trainingDataSource', 'trainingDataSchema'],
    title: 'CreateModelVersionRequest',
  })
  .openapi('CreateModelVersionRequest')

const CreateRuleResultSchema = z
  .object({
    rule: RuleSchema.and(z.any().openapi({ description: 'The created rule.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRuleResult')

const RuleExpressionSchema = z.string().min(1).max(4096).openapi('RuleExpression')

const LanguageSchema = z.literal('DETECTORPL').openapi('Language')

const NonEmptyListOfStringsSchema = z.array(StringSchema).min(1).openapi('NonEmptyListOfStrings')

const CreateRuleRequestSchema = z
  .object({
    ruleId: IdentifierSchema.and(z.any().openapi({ description: 'The rule ID.' })),
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: "The detector ID for the rule's parent detector." }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The rule description.' }),
    ).exactOptional(),
    expression: RuleExpressionSchema.and(z.any().openapi({ description: 'The rule expression.' })),
    language: LanguageSchema.and(z.any().openapi({ description: 'The language of the rule.' })),
    outcomes: NonEmptyListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description: 'The outcome or outcomes returned when the rule expression matches.',
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ruleId', 'detectorId', 'expression', 'language', 'outcomes'],
    title: 'CreateRuleRequest',
  })
  .openapi('CreateRuleRequest')

const CreateVariableResultSchema = z.object({}).openapi('CreateVariableResult')

const CreateVariableRequestSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the variable.' })),
    dataType: DataTypeSchema.and(z.any().openapi({ description: 'The data type.' })),
    dataSource: DataSourceSchema.and(z.any().openapi({ description: 'The source of the data.' })),
    defaultValue: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The default value for the variable when no value is received.' }),
    ),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    variableType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>. </p> <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT</code> </p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'dataType', 'dataSource', 'defaultValue'],
    title: 'CreateVariableRequest',
  })
  .openapi('CreateVariableRequest')

const DeleteBatchImportJobResultSchema = z.object({}).openapi('DeleteBatchImportJobResult')

const DeleteBatchImportJobRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the batch import job to delete. ' }),
    ),
  })
  .openapi({ required: ['jobId'], title: 'DeleteBatchImportJobRequest' })
  .openapi('DeleteBatchImportJobRequest')

const DeleteBatchPredictionJobResultSchema = z.object({}).openapi('DeleteBatchPredictionJobResult')

const DeleteBatchPredictionJobRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the batch prediction job to delete.' }),
    ),
  })
  .openapi({ required: ['jobId'], title: 'DeleteBatchPredictionJobRequest' })
  .openapi('DeleteBatchPredictionJobRequest')

const DeleteDetectorResultSchema = z.object({}).openapi('DeleteDetectorResult')

const DeleteDetectorRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the detector to delete.' }),
    ),
  })
  .openapi({ required: ['detectorId'], title: 'DeleteDetectorRequest' })
  .openapi('DeleteDetectorRequest')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const DeleteDetectorVersionResultSchema = z.object({}).openapi('DeleteDetectorVersionResult')

const DeleteDetectorVersionRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the parent detector for the detector version to delete.',
        }),
    ),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The ID of the detector version to delete.' }),
    ),
  })
  .openapi({ required: ['detectorId', 'detectorVersionId'], title: 'DeleteDetectorVersionRequest' })
  .openapi('DeleteDetectorVersionRequest')

const DeleteEntityTypeResultSchema = z.object({}).openapi('DeleteEntityTypeResult')

const DeleteEntityTypeRequestSchema = z
  .object({
    name: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the entity type to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteEntityTypeRequest' })
  .openapi('DeleteEntityTypeRequest')

const DeleteEventResultSchema = z.object({}).openapi('DeleteEventResult')

const DeleteAuditHistorySchema = z.boolean().openapi('DeleteAuditHistory')

const DeleteEventRequestSchema = z
  .object({
    eventId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the event to delete.' }),
    ),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ),
    deleteAuditHistory: DeleteAuditHistorySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether or not to delete any predictions associated with the event.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['eventId', 'eventTypeName'], title: 'DeleteEventRequest' })
  .openapi('DeleteEventRequest')

const DeleteEventTypeResultSchema = z.object({}).openapi('DeleteEventTypeResult')

const DeleteEventTypeRequestSchema = z
  .object({
    name: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteEventTypeRequest' })
  .openapi('DeleteEventTypeRequest')

const DeleteEventsByEventTypeResultSchema = z
  .object({
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'Name of event type for which to delete the events.' }),
    ).exactOptional(),
    eventsDeletionStatus: StringSchema.and(
      z.any().openapi({ description: 'The status of the delete request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteEventsByEventTypeResult')

const DeleteEventsByEventTypeRequestSchema = z
  .object({
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ),
  })
  .openapi({ required: ['eventTypeName'], title: 'DeleteEventsByEventTypeRequest' })
  .openapi('DeleteEventsByEventTypeRequest')

const DeleteExternalModelResultSchema = z.object({}).openapi('DeleteExternalModelResult')

const SageMakerEndpointIdentifierSchema = z
  .string()
  .regex(/^[0-9A-Za-z_-]+$/)
  .min(1)
  .max(63)
  .openapi('SageMakerEndpointIdentifier')

const DeleteExternalModelRequestSchema = z
  .object({
    modelEndpoint: SageMakerEndpointIdentifierSchema.and(
      z.any().openapi({ description: 'The endpoint of the Amazon Sagemaker model to delete.' }),
    ),
  })
  .openapi({ required: ['modelEndpoint'], title: 'DeleteExternalModelRequest' })
  .openapi('DeleteExternalModelRequest')

const DeleteLabelResultSchema = z.object({}).openapi('DeleteLabelResult')

const DeleteLabelRequestSchema = z
  .object({
    name: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the label to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteLabelRequest' })
  .openapi('DeleteLabelRequest')

const DeleteListResultSchema = z.object({}).openapi('DeleteListResult')

const DeleteListRequestSchema = z
  .object({
    name: NoDashIdentifierSchema.and(
      z.any().openapi({ description: ' The name of the list to delete. ' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteListRequest' })
  .openapi('DeleteListRequest')

const DeleteModelResultSchema = z.object({}).openapi('DeleteModelResult')

const DeleteModelRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID of the model to delete.' }),
    ),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type of the model to delete.' }),
    ),
  })
  .openapi({ required: ['modelId', 'modelType'], title: 'DeleteModelRequest' })
  .openapi('DeleteModelRequest')

const DeleteModelVersionResultSchema = z.object({}).openapi('DeleteModelVersionResult')

const DeleteModelVersionRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID of the model version to delete.' }),
    ),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type of the model version to delete.' }),
    ),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number of the model version to delete.' }),
    ),
  })
  .openapi({
    required: ['modelId', 'modelType', 'modelVersionNumber'],
    title: 'DeleteModelVersionRequest',
  })
  .openapi('DeleteModelVersionRequest')

const DeleteOutcomeResultSchema = z.object({}).openapi('DeleteOutcomeResult')

const DeleteOutcomeRequestSchema = z
  .object({
    name: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the outcome to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteOutcomeRequest' })
  .openapi('DeleteOutcomeRequest')

const DeleteRuleResultSchema = z.object({}).openapi('DeleteRuleResult')

const DeleteRuleRequestSchema = z
  .object({ rule: RuleSchema })
  .openapi({ required: ['rule'], title: 'DeleteRuleRequest' })
  .openapi('DeleteRuleRequest')

const DeleteVariableResultSchema = z.object({}).openapi('DeleteVariableResult')

const DeleteVariableRequestSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the variable to delete.' })),
  })
  .openapi({ required: ['name'], title: 'DeleteVariableRequest' })
  .openapi('DeleteVariableRequest')

const DetectorVersionSummarySchema = z
  .object({
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version ID. ' }),
    ).exactOptional(),
    status: DetectorVersionStatusSchema.and(
      z.any().openapi({ description: 'The detector version status. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The detector version description. ' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the detector version was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The summary of the detector version.', required: [] })
  .openapi('DetectorVersionSummary')

const DetectorVersionSummaryListSchema = z
  .array(DetectorVersionSummarySchema)
  .openapi('DetectorVersionSummaryList')

const DescribeDetectorResultSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: 'The detector ID.' }),
    ).exactOptional(),
    detectorVersionSummaries: DetectorVersionSummaryListSchema.and(
      z.any().openapi({ description: 'The status and description for each detector version.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token to be used for subsequent requests.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The detector ARN.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDetectorResult')

const DetectorVersionMaxResultsSchema = z
  .int()
  .min(1000)
  .max(2500)
  .openapi('DetectorVersionMaxResults')

const DescribeDetectorRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(z.any().openapi({ description: 'The detector ID.' })),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token from the previous response.' }),
    ).exactOptional(),
    maxResults: DetectorVersionMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return for the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['detectorId'], title: 'DescribeDetectorRequest' })
  .openapi('DescribeDetectorRequest')

const FileValidationMessageSchema = z
  .object({
    title: StringSchema.and(z.any().openapi({ description: 'The message title.' })).exactOptional(),
    content: StringSchema.and(
      z.any().openapi({ description: 'The message content.' }),
    ).exactOptional(),
    type: StringSchema.and(z.any().openapi({ description: 'The message type.' })).exactOptional(),
  })
  .openapi({ description: 'The message details.', required: [] })
  .openapi('FileValidationMessage')

const FileValidationMessageListSchema = z
  .array(FileValidationMessageSchema)
  .openapi('FileValidationMessageList')

const FieldValidationMessageSchema = z
  .object({
    fieldName: StringSchema.and(
      z.any().openapi({ description: 'The field name.' }),
    ).exactOptional(),
    identifier: StringSchema.and(
      z.any().openapi({ description: 'The message ID.' }),
    ).exactOptional(),
    title: StringSchema.and(z.any().openapi({ description: 'The message title.' })).exactOptional(),
    content: StringSchema.and(
      z.any().openapi({ description: 'The message content.' }),
    ).exactOptional(),
    type: StringSchema.and(z.any().openapi({ description: 'The message type.' })).exactOptional(),
  })
  .openapi({ description: 'The message details.', required: [] })
  .openapi('FieldValidationMessage')

const FieldValidationMessageListSchema = z
  .array(FieldValidationMessageSchema)
  .openapi('FieldValidationMessageList')

const DataValidationMetricsSchema = z
  .object({
    fileLevelMessages: FileValidationMessageListSchema.and(
      z
        .any()
        .openapi({ description: 'The file-specific model training data validation messages.' }),
    ).exactOptional(),
    fieldLevelMessages: FieldValidationMessageListSchema.and(
      z.any().openapi({ description: 'The field-specific model training validation messages.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The model training data validation metrics.', required: [] })
  .openapi('DataValidationMetrics')

const FloatSchema = z.float32().openapi('Float')

const MetricDataPointSchema = z
  .object({
    fpr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.',
        }),
    ).exactOptional(),
    precision: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.',
        }),
    ).exactOptional(),
    tpr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.',
        }),
    ).exactOptional(),
    threshold: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Model performance metrics data points.', required: [] })
  .openapi('MetricDataPoint')

const MetricDataPointsListSchema = z.array(MetricDataPointSchema).openapi('MetricDataPointsList')

const TrainingMetricsSchema = z
  .object({
    auc: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The area under the curve. This summarizes true positive rate (TPR) and false positive rate (FPR) across all possible model score thresholds. A model with no predictive power has an AUC of 0.5, whereas a perfect model has a score of 1.0.',
        }),
    ).exactOptional(),
    metricDataPoints: MetricDataPointsListSchema.and(
      z.any().openapi({ description: 'The data points details.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The training metric details.', required: [] })
  .openapi('TrainingMetrics')

const LogOddsMetricSchema = z
  .object({
    variableName: StringSchema.and(z.any().openapi({ description: 'The name of the variable.' })),
    variableType: StringSchema.and(z.any().openapi({ description: 'The type of variable.' })),
    variableImportance: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative importance of the variable. For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/model-variable-importance.html">Model variable importance</a>.',
        }),
    ),
  })
  .openapi({
    required: ['variableName', 'variableType', 'variableImportance'],
    description: 'The log odds metric details.',
  })
  .openapi('LogOddsMetric')

const ListOfLogOddsMetricsSchema = z.array(LogOddsMetricSchema).openapi('ListOfLogOddsMetrics')

const VariableImportanceMetricsSchema = z
  .object({
    logOddsMetrics: ListOfLogOddsMetricsSchema.and(
      z.any().openapi({ description: 'List of variable metrics.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The variable importance metrics details.', required: [] })
  .openapi('VariableImportanceMetrics')

const TrainingResultSchema = z
  .object({
    dataValidationMetrics: DataValidationMetricsSchema.and(
      z.any().openapi({ description: 'The validation metrics.' }),
    ).exactOptional(),
    trainingMetrics: TrainingMetricsSchema.and(
      z.any().openapi({ description: 'The training metric details.' }),
    ).exactOptional(),
    variableImportanceMetrics: VariableImportanceMetricsSchema.and(
      z.any().openapi({ description: 'The variable importance metrics.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The training result details.', required: [] })
  .openapi('TrainingResult')

const OFIMetricDataPointSchema = z
  .object({
    fpr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud. ',
        }),
    ).exactOptional(),
    precision: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent. ',
        }),
    ).exactOptional(),
    tpr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate. ',
        }),
    ).exactOptional(),
    threshold: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Online Fraud Insights (OFI) model performance metrics data points. ',
    required: [],
  })
  .openapi('OFIMetricDataPoint')

const OFIMetricDataPointsListSchema = z
  .array(OFIMetricDataPointSchema)
  .openapi('OFIMetricDataPointsList')

const UncertaintyRangeSchema = z
  .object({
    lowerBoundValue: FloatSchema.and(
      z.any().openapi({ description: ' The lower bound value of the area under curve (auc). ' }),
    ),
    upperBoundValue: FloatSchema.and(
      z.any().openapi({ description: ' The lower bound value of the area under curve (auc). ' }),
    ),
  })
  .openapi({
    required: ['lowerBoundValue', 'upperBoundValue'],
    description:
      ' Range of area under curve (auc) expected from the model. A range greater than 0.1 indicates higher model uncertainity. A range is the difference between upper and lower bound of auc. ',
  })
  .openapi('UncertaintyRange')

const OFIModelPerformanceSchema = z
  .object({
    auc: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds. ',
        }),
    ).exactOptional(),
    uncertaintyRange: UncertaintyRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the range of area under curve (auc) expected from the OFI model. A range greater than 0.1 indicates higher model uncertainity. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Online Fraud Insights (OFI) model performance score. ',
    required: [],
  })
  .openapi('OFIModelPerformance')

const OFITrainingMetricsValueSchema = z
  .object({
    metricDataPoints: OFIMetricDataPointsListSchema.and(
      z.any().openapi({ description: " The model's performance metrics data points. " }),
    ).exactOptional(),
    modelPerformance: OFIModelPerformanceSchema.and(
      z.any().openapi({ description: " The model's overall performance score. " }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Online Fraud Insights (OFI) model training metric details. ',
    required: [],
  })
  .openapi('OFITrainingMetricsValue')

const TFIMetricDataPointSchema = z
  .object({
    fpr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud. ',
        }),
    ).exactOptional(),
    precision: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent. ',
        }),
    ).exactOptional(),
    tpr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate. ',
        }),
    ).exactOptional(),
    threshold: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The performance metrics data points for Transaction Fraud Insights (TFI) model. ',
    required: [],
  })
  .openapi('TFIMetricDataPoint')

const TFIMetricDataPointsListSchema = z
  .array(TFIMetricDataPointSchema)
  .openapi('TFIMetricDataPointsList')

const TFIModelPerformanceSchema = z
  .object({
    auc: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds. ',
        }),
    ).exactOptional(),
    uncertaintyRange: UncertaintyRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the range of area under curve (auc) expected from the TFI model. A range greater than 0.1 indicates higher model uncertainity. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Transaction Fraud Insights (TFI) model performance score. ',
    required: [],
  })
  .openapi('TFIModelPerformance')

const TFITrainingMetricsValueSchema = z
  .object({
    metricDataPoints: TFIMetricDataPointsListSchema.and(
      z.any().openapi({ description: " The model's performance metrics data points. " }),
    ).exactOptional(),
    modelPerformance: TFIModelPerformanceSchema.and(
      z.any().openapi({ description: ' The model performance score. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Transaction Fraud Insights (TFI) model training metric details. ',
    required: [],
  })
  .openapi('TFITrainingMetricsValue')

const ATIMetricDataPointSchema = z
  .object({
    cr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The challenge rate. This indicates the percentage of login events that the model recommends to challenge such as one-time password, multi-factor authentication, and investigations. ',
        }),
    ).exactOptional(),
    adr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The anomaly discovery rate. This metric quantifies the percentage of anomalies that can be detected by the model at the selected score threshold. A lower score threshold increases the percentage of anomalies captured by the model, but would also require challenging a larger percentage of login events, leading to a higher customer friction. ',
        }),
    ).exactOptional(),
    threshold: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            " The model's threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud. ",
        }),
    ).exactOptional(),
    atodr: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The account takeover discovery rate. This metric quantifies the percentage of account compromise events that can be detected by the model at the selected score threshold. This metric is only available if 50 or more entities with at-least one labeled account takeover event is present in the ingested dataset. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Account Takeover Insights (ATI) model performance metrics data points. ',
    required: [],
  })
  .openapi('ATIMetricDataPoint')

const ATIMetricDataPointsListSchema = z
  .array(ATIMetricDataPointSchema)
  .openapi('ATIMetricDataPointsList')

const ATIModelPerformanceSchema = z
  .object({
    asi: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The anomaly separation index (ASI) score. This metric summarizes the overall ability of the model to separate anomalous activities from the normal behavior. Depending on the business, a large fraction of these anomalous activities can be malicious and correspond to the account takeover attacks. A model with no separability power will have the lowest possible ASI score of 0.5, whereas the a model with a high separability power will have the highest possible ASI score of 1.0 ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Account Takeover Insights (ATI) model performance score. ',
    required: [],
  })
  .openapi('ATIModelPerformance')

const ATITrainingMetricsValueSchema = z
  .object({
    metricDataPoints: ATIMetricDataPointsListSchema.and(
      z.any().openapi({ description: " The model's performance metrics data points. " }),
    ).exactOptional(),
    modelPerformance: ATIModelPerformanceSchema.and(
      z.any().openapi({ description: " The model's overall performance scores. " }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The Account Takeover Insights (ATI) model training metric details. ',
    required: [],
  })
  .openapi('ATITrainingMetricsValue')

const TrainingMetricsV2Schema = z
  .object({
    ofi: OFITrainingMetricsValueSchema.and(
      z
        .any()
        .openapi({
          description: ' The Online Fraud Insights (OFI) model training metric details. ',
        }),
    ).exactOptional(),
    tfi: TFITrainingMetricsValueSchema.and(
      z
        .any()
        .openapi({
          description: ' The Transaction Fraud Insights (TFI) model training metric details. ',
        }),
    ).exactOptional(),
    ati: ATITrainingMetricsValueSchema.and(
      z
        .any()
        .openapi({
          description: ' The Account Takeover Insights (ATI) model training metric details. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The training metrics details. ', required: [] })
  .openapi('TrainingMetricsV2')

const AggregatedLogOddsMetricSchema = z
  .object({
    variableNames: ListOfStringsSchema.and(
      z.any().openapi({ description: ' The names of all the variables. ' }),
    ),
    aggregatedVariablesImportance: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The relative importance of the variables in the list to the other event variable. ',
        }),
    ),
  })
  .openapi({
    required: ['variableNames', 'aggregatedVariablesImportance'],
    description:
      '<p>The log odds metric details.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>',
  })
  .openapi('AggregatedLogOddsMetric')

const ListOfAggregatedLogOddsMetricsSchema = z
  .array(AggregatedLogOddsMetricSchema)
  .openapi('ListOfAggregatedLogOddsMetrics')

const AggregatedVariablesImportanceMetricsSchema = z
  .object({
    logOddsMetrics: ListOfAggregatedLogOddsMetricsSchema.and(
      z.any().openapi({ description: " List of variables' metrics. " }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The details of the relative importance of the aggregated variables.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>',
    required: [],
  })
  .openapi('AggregatedVariablesImportanceMetrics')

const TrainingResultV2Schema = z
  .object({
    dataValidationMetrics: DataValidationMetricsSchema.exactOptional(),
    trainingMetricsV2: TrainingMetricsV2Schema.and(
      z.any().openapi({ description: ' The training metric details. ' }),
    ).exactOptional(),
    variableImportanceMetrics: VariableImportanceMetricsSchema.exactOptional(),
    aggregatedVariablesImportanceMetrics: AggregatedVariablesImportanceMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The variable importance metrics of the aggregated variables. </p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The training result details. ', required: [] })
  .openapi('TrainingResultV2')

const ModelVersionDetailSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID.' }),
    ).exactOptional(),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number.' }),
    ).exactOptional(),
    status: StringSchema.and(
      z.any().openapi({ description: 'The status of the model version.' }),
    ).exactOptional(),
    trainingDataSource: TrainingDataSourceEnumSchema.and(
      z.any().openapi({ description: 'The model version training data source.' }),
    ).exactOptional(),
    trainingDataSchema: TrainingDataSchemaSchema.and(
      z.any().openapi({ description: 'The training data schema.' }),
    ).exactOptional(),
    externalEventsDetail: ExternalEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The external events data details. This will be populated if the <code>trainingDataSource</code> for the model version is specified as <code>EXTERNAL_EVENTS</code>.',
        }),
    ).exactOptional(),
    ingestedEventsDetail: IngestedEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ingested events data details. This will be populated if the <code>trainingDataSource</code> for the model version is specified as <code>INGESTED_EVENTS</code>.',
        }),
    ).exactOptional(),
    trainingResult: TrainingResultSchema.and(
      z.any().openapi({ description: 'The training results.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the model was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the model was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The model version ARN.' }),
    ).exactOptional(),
    trainingResultV2: TrainingResultV2Schema.and(
      z
        .any()
        .openapi({
          description:
            ' The training result details. The details include the relative importance of the variables. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of the model version.', required: [] })
  .openapi('ModelVersionDetail')

const ModelVersionDetailListSchema = z
  .array(ModelVersionDetailSchema)
  .openapi('ModelVersionDetailList')

const DescribeModelVersionsResultSchema = z
  .object({
    modelVersionDetails: ModelVersionDetailListSchema.and(
      z.any().openapi({ description: 'The model version details.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeModelVersionsResult')

const ModelsMaxPageSizeSchema = z.int().min(1).max(10).openapi('ModelsMaxPageSize')

const DescribeModelVersionsRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID.' }),
    ).exactOptional(),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number.' }),
    ).exactOptional(),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token from the previous results.' }),
    ).exactOptional(),
    maxResults: ModelsMaxPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeModelVersionsRequest', required: [] })
  .openapi('DescribeModelVersionsRequest')

const AsyncJobStatusSchema = z
  .enum([
    'IN_PROGRESS_INITIALIZING',
    'IN_PROGRESS',
    'CANCEL_IN_PROGRESS',
    'CANCELED',
    'COMPLETE',
    'FAILED',
  ])
  .openapi('AsyncJobStatus')

const Integer2Schema = z.int().openapi('Integer2')

const BatchImportSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the batch import job. ' }),
    ).exactOptional(),
    status: AsyncJobStatusSchema.and(
      z.any().openapi({ description: 'The status of the batch import job.' }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z.any().openapi({ description: 'The reason batch import job failed.' }),
    ).exactOptional(),
    startTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the batch import job started.' }),
    ).exactOptional(),
    completionTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when batch import job completed.' }),
    ).exactOptional(),
    inputPath: S3BucketLocationSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon S3 location of your data file for batch import.' }),
    ).exactOptional(),
    outputPath: S3BucketLocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of your output file.' }),
    ).exactOptional(),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ).exactOptional(),
    iamRoleArn: IamRoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM role to use for this job request.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The ARN of the batch import job.' }),
    ).exactOptional(),
    processedRecordsCount: Integer2Schema.and(
      z.any().openapi({ description: 'The number of records processed by batch import job.' }),
    ).exactOptional(),
    failedRecordsCount: Integer2Schema.and(
      z.any().openapi({ description: 'The number of records that failed to import. ' }),
    ).exactOptional(),
    totalRecordsCount: Integer2Schema.and(
      z.any().openapi({ description: 'The total number of records in the batch import job.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The batch import job details.', required: [] })
  .openapi('BatchImport')

const BatchImportListSchema = z.array(BatchImportSchema).openapi('BatchImportList')

const GetBatchImportJobsResultSchema = z
  .object({
    batchImports: BatchImportListSchema.and(
      z.any().openapi({ description: 'An array containing the details of each batch import job.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for the subsequent resquest.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBatchImportJobsResult')

const BatchImportsMaxPageSizeSchema = z.int().min(1).max(50).openapi('BatchImportsMaxPageSize')

const GetBatchImportJobsRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the batch import job to get.' }),
    ).exactOptional(),
    maxResults: BatchImportsMaxPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for request.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token from the previous request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetBatchImportJobsRequest', required: [] })
  .openapi('GetBatchImportJobsRequest')

const BatchPredictionSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The job ID for the batch prediction.' }),
    ).exactOptional(),
    status: AsyncJobStatusSchema.and(
      z.any().openapi({ description: 'The batch prediction status.' }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z.any().openapi({ description: 'The reason a batch prediction job failed.' }),
    ).exactOptional(),
    startTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the batch prediction job started.' }),
    ).exactOptional(),
    completionTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the batch prediction job completed.' }),
    ).exactOptional(),
    lastHeartbeatTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp of most recent heartbeat indicating the batch prediction job was making progress.',
        }),
    ).exactOptional(),
    inputPath: S3BucketLocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of your training file.' }),
    ).exactOptional(),
    outputPath: S3BucketLocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 location of your output file.' }),
    ).exactOptional(),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ).exactOptional(),
    detectorName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the detector.' }),
    ).exactOptional(),
    detectorVersion: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version. ' }),
    ).exactOptional(),
    iamRoleArn: IamRoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM role to use for this job request.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The ARN of batch prediction job.' }),
    ).exactOptional(),
    processedRecordsCount: Integer2Schema.and(
      z
        .any()
        .openapi({ description: 'The number of records processed by the batch prediction job.' }),
    ).exactOptional(),
    totalRecordsCount: Integer2Schema.and(
      z.any().openapi({ description: 'The total number of records in the batch prediction job.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The batch prediction details.', required: [] })
  .openapi('BatchPrediction')

const BatchPredictionListSchema = z.array(BatchPredictionSchema).openapi('BatchPredictionList')

const GetBatchPredictionJobsResultSchema = z
  .object({
    batchPredictions: BatchPredictionListSchema.and(
      z
        .any()
        .openapi({ description: 'An array containing the details of each batch prediction job.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for the subsequent request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBatchPredictionJobsResult')

const BatchPredictionsMaxPageSizeSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('BatchPredictionsMaxPageSize')

const GetBatchPredictionJobsRequestSchema = z
  .object({
    jobId: IdentifierSchema.and(
      z.any().openapi({ description: 'The batch prediction job for which to get the details.' }),
    ).exactOptional(),
    maxResults: BatchPredictionsMaxPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token from the previous request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetBatchPredictionJobsRequest', required: [] })
  .openapi('GetBatchPredictionJobsRequest')

const GetDeleteEventsByEventTypeStatusResultSchema = z
  .object({
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The event type name.' }),
    ).exactOptional(),
    eventsDeletionStatus: AsyncJobStatusSchema.and(
      z.any().openapi({ description: 'The deletion status.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeleteEventsByEventTypeStatusResult')

const GetDeleteEventsByEventTypeStatusRequestSchema = z
  .object({
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'Name of event type for which to get the deletion status.' }),
    ),
  })
  .openapi({ required: ['eventTypeName'], title: 'GetDeleteEventsByEventTypeStatusRequest' })
  .openapi('GetDeleteEventsByEventTypeStatusRequest')

const GetDetectorVersionResultSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: 'The detector ID.' }),
    ).exactOptional(),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version ID.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The detector version description.' }),
    ).exactOptional(),
    externalModelEndpoints: ListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon SageMaker model endpoints included in the detector version.',
        }),
    ).exactOptional(),
    modelVersions: ListOfModelVersionsSchema.and(
      z.any().openapi({ description: 'The model versions included in the detector version. ' }),
    ).exactOptional(),
    rules: RuleListSchema.and(
      z.any().openapi({ description: 'The rules included in the detector version.' }),
    ).exactOptional(),
    status: DetectorVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the detector version.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp when the detector version was last updated. ' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the detector version was created. ' }),
    ).exactOptional(),
    ruleExecutionMode: RuleExecutionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The execution mode of the rule in the dectector</p> <p> <code>FIRST_MATCHED</code> indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p> <p> <code>ALL_MATCHED</code> indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>',
        }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The detector version ARN.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDetectorVersionResult')

const GetDetectorVersionRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(z.any().openapi({ description: 'The detector ID.' })),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version ID.' }),
    ),
  })
  .openapi({ required: ['detectorId', 'detectorVersionId'], title: 'GetDetectorVersionRequest' })
  .openapi('GetDetectorVersionRequest')

const DetectorSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: 'The detector ID.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The detector description.' }),
    ).exactOptional(),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the detector was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the detector was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The detector ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The detector.', required: [] })
  .openapi('Detector')

const DetectorListSchema = z.array(DetectorSchema).openapi('DetectorList')

const GetDetectorsResultSchema = z
  .object({
    detectors: DetectorListSchema.and(
      z.any().openapi({ description: 'The detectors.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDetectorsResult')

const DetectorsMaxResultsSchema = z.int().min(5).max(10).openapi('DetectorsMaxResults')

const GetDetectorsRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: 'The detector ID.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for the subsequent request.' }),
    ).exactOptional(),
    maxResults: DetectorsMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDetectorsRequest', required: [] })
  .openapi('GetDetectorsRequest')

const EntityTypeSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The entity type name.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The entity type description.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the entity type was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the entity type was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The entity type ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The entity type details.', required: [] })
  .openapi('EntityType')

const EntityTypeListSchema = z.array(EntityTypeSchema).openapi('EntityTypeList')

const GetEntityTypesResultSchema = z
  .object({
    entityTypes: EntityTypeListSchema.and(
      z.any().openapi({ description: 'An array of entity types.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEntityTypesResult')

const EntityTypesMaxResultsSchema = z.int().min(5).max(10).openapi('EntityTypesMaxResults')

const GetEntityTypesRequestSchema = z
  .object({
    name: IdentifierSchema.and(z.any().openapi({ description: 'The name.' })).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for the subsequent request.' }),
    ).exactOptional(),
    maxResults: EntityTypesMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetEntityTypesRequest', required: [] })
  .openapi('GetEntityTypesRequest')

const AttributeValueSchema = z.string().min(1).max(256).openapi('AttributeValue')

const EventAttributeMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('EventAttributeMap')

const EntityRestrictedStringSchema = z
  .string()
  .regex(/^[0-9A-Za-z_.@+-]+$/)
  .min(1)
  .max(256)
  .openapi('EntityRestrictedString')

const EntitySchema = z
  .object({
    entityType: StringSchema.and(z.any().openapi({ description: 'The entity type.' })),
    entityId: EntityRestrictedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity ID. If you do not know the <code>entityId</code>, you can pass <code>unknown</code>, which is areserved string literal.',
        }),
    ),
  })
  .openapi({ required: ['entityType', 'entityId'], description: 'The entity details. ' })
  .openapi('Entity')

const ListOfEntitiesSchema = z.array(EntitySchema).openapi('ListOfEntities')

const EventSchema = z
  .object({
    eventId: StringSchema.and(z.any().openapi({ description: 'The event ID.' })).exactOptional(),
    eventTypeName: StringSchema.and(
      z.any().openapi({ description: 'The event type.' }),
    ).exactOptional(),
    eventTimestamp: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.',
        }),
    ).exactOptional(),
    eventVariables: EventAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.",
        }),
    ).exactOptional(),
    currentLabel: StringSchema.and(
      z.any().openapi({ description: 'The label associated with the event.' }),
    ).exactOptional(),
    labelTimestamp: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp associated with the label to update. The timestamp must be specified using ISO 8601 standard in UTC.',
        }),
    ).exactOptional(),
    entities: ListOfEntitiesSchema.and(
      z.any().openapi({ description: 'The event entities.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The event details.', required: [] })
  .openapi('Event')

const GetEventResultSchema = z
  .object({
    event: EventSchema.and(
      z.any().openapi({ description: 'The details of the event.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventResult')

const GetEventRequestSchema = z
  .object({
    eventId: StringSchema.and(z.any().openapi({ description: 'The ID of the event to retrieve.' })),
    eventTypeName: StringSchema.and(
      z.any().openapi({ description: 'The event type of the event to retrieve.' }),
    ),
  })
  .openapi({ required: ['eventId', 'eventTypeName'], title: 'GetEventRequest' })
  .openapi('GetEventRequest')

const ModelPredictionMapSchema = z.record(z.string(), FloatSchema).openapi('ModelPredictionMap')

const ModelScoresSchema = z
  .object({
    modelVersion: ModelVersionSchema.and(
      z.any().openapi({ description: 'The model version.' }),
    ).exactOptional(),
    scores: ModelPredictionMapSchema.and(
      z.any().openapi({ description: "The model's fraud prediction scores." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The fraud prediction scores.', required: [] })
  .openapi('ModelScores')

const ListOfModelScoresSchema = z.array(ModelScoresSchema).openapi('ListOfModelScores')

const RuleResultSchema = z
  .object({
    ruleId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The rule ID that was matched, based on the rule execution mode.',
        }),
    ).exactOptional(),
    outcomes: ListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description: 'The outcomes of the matched rule, based on the rule execution mode.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The rule results.', required: [] })
  .openapi('RuleResult')

const ListOfRuleResultsSchema = z.array(RuleResultSchema).openapi('ListOfRuleResults')

const ModelSourceSchema = z.literal('SAGEMAKER').openapi('ModelSource')

const ExternalModelSummarySchema = z
  .object({
    modelEndpoint: StringSchema.and(
      z.any().openapi({ description: 'The endpoint of the Amazon SageMaker model.' }),
    ).exactOptional(),
    modelSource: ModelSourceSchema.and(
      z.any().openapi({ description: 'The source of the model.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The Amazon SageMaker model.', required: [] })
  .openapi('ExternalModelSummary')

const ExternalModelPredictionMapSchema = z
  .record(z.string(), StringSchema)
  .openapi('ExternalModelPredictionMap')

const ExternalModelOutputsSchema = z
  .object({
    externalModel: ExternalModelSummarySchema.and(
      z.any().openapi({ description: 'The Amazon SageMaker model.' }),
    ).exactOptional(),
    outputs: ExternalModelPredictionMapSchema.and(
      z.any().openapi({ description: 'The fraud prediction scores from Amazon SageMaker model.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The fraud prediction scores from Amazon SageMaker model.',
    required: [],
  })
  .openapi('ExternalModelOutputs')

const ListOfExternalModelOutputsSchema = z
  .array(ExternalModelOutputsSchema)
  .openapi('ListOfExternalModelOutputs')

const GetEventPredictionResultSchema = z
  .object({
    modelScores: ListOfModelScoresSchema.and(
      z
        .any()
        .openapi({
          description:
            'The model scores. Amazon Fraud Detector generates model scores between 0 and 1000, where 0 is low fraud risk and 1000 is high fraud risk. Model scores are directly related to the false positive rate (FPR). For example, a score of 600 corresponds to an estimated 10% false positive rate whereas a score of 900 corresponds to an estimated 2% false positive rate.',
        }),
    ).exactOptional(),
    ruleResults: ListOfRuleResultsSchema.and(
      z.any().openapi({ description: 'The results from the rules.' }),
    ).exactOptional(),
    externalModelOutputs: ListOfExternalModelOutputsSchema.and(
      z.any().openapi({ description: 'The model scores for Amazon SageMaker models.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventPredictionResult')

const UtcTimestampISO8601Schema = z.string().min(10).max(30).openapi('UtcTimestampISO8601')

const VariableValueSchema = z.string().min(1).max(8192).openapi('VariableValue')

const EventVariableMapSchema = z
  .record(z.string(), VariableValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .openapi('EventVariableMap')

const BlobSchema = z.string().openapi('Blob')

const ContentTypeSchema = z.string().min(1).max(1024).openapi('ContentType')

const ModelEndpointDataBlobSchema = z
  .object({
    byteBuffer: BlobSchema.and(
      z
        .any()
        .openapi({
          description: 'The byte buffer of the Amazon SageMaker model endpoint input data blob.',
        }),
    ).exactOptional(),
    contentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The content type of the Amazon SageMaker model endpoint input data blob. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.',
    required: [],
  })
  .openapi('ModelEndpointDataBlob')

const ExternalModelEndpointDataBlobMapSchema = z
  .record(z.string(), ModelEndpointDataBlobSchema)
  .openapi('ExternalModelEndpointDataBlobMap')

const GetEventPredictionRequestSchema = z
  .object({
    detectorId: StringSchema.and(z.any().openapi({ description: 'The detector ID.' })),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version ID.' }),
    ).exactOptional(),
    eventId: StringSchema.and(
      z.any().openapi({ description: 'The unique ID used to identify the event.' }),
    ),
    eventTypeName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The event type associated with the detector specified for the prediction.',
        }),
    ),
    entities: ListOfEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity type (associated with the detector\'s event type) and specific entity ID representing who performed the event. If an entity id is not available, use "UNKNOWN."',
        }),
    ),
    eventTimestamp: UtcTimestampISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'Timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.',
        }),
    ),
    eventVariables: EventVariableMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</p> <important> <p>You must provide at least one eventVariable</p> </important> <p>To ensure most accurate fraud prediction and to simplify your data preparation, Amazon Fraud Detector will replace all missing variables or values as follows:</p> <p> <b>For Amazon Fraud Detector trained models:</b> </p> <p>If a null value is provided explicitly for a variable or if a variable is missing, model will replace the null value or the missing variable (no variable name in the eventVariables map) with calculated default mean/medians for numeric variables and with special values for categorical variables.</p> <p> <b>For imported SageMaker models:</b> </p> <p>If a null value is provided explicitly for a variable, the model and rules will use “null” as the value. If a variable is not provided (no variable name in the eventVariables map), model and rules will use the default value that is provided for the variable. </p>",
        }),
    ),
    externalModelEndpointDataBlobs: ExternalModelEndpointDataBlobMapSchema.and(
      z.any().openapi({ description: 'The Amazon SageMaker model endpoint input data blobs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'detectorId',
      'eventId',
      'eventTypeName',
      'entities',
      'eventTimestamp',
      'eventVariables',
    ],
    title: 'GetEventPredictionRequest',
  })
  .openapi('GetEventPredictionRequest')

const ResourceUnavailableExceptionSchema = z.any().openapi('ResourceUnavailableException')

const SensitiveStringSchema = z.string().openapi('SensitiveString')

const EventVariableSummarySchema = z
  .object({
    name: SensitiveStringSchema.and(
      z.any().openapi({ description: ' The event variable name. ' }),
    ).exactOptional(),
    value: SensitiveStringSchema.and(
      z.any().openapi({ description: ' The value of the event variable. ' }),
    ).exactOptional(),
    source: SensitiveStringSchema.and(
      z.any().openapi({ description: ' The event variable source. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the summary of an event variable that was evaluated for generating prediction. ',
    required: [],
  })
  .openapi('EventVariableSummary')

const ListOfEventVariableSummariesSchema = z
  .array(EventVariableSummarySchema)
  .openapi('ListOfEventVariableSummaries')

const BooleanSchema = z.boolean().openapi('Boolean')

const EvaluatedRuleSchema = z
  .object({
    ruleId: IdentifierSchema.and(
      z.any().openapi({ description: ' The rule ID. ' }),
    ).exactOptional(),
    ruleVersion: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: ' The rule version. ' }),
    ).exactOptional(),
    expression: SensitiveStringSchema.and(
      z.any().openapi({ description: ' The rule expression. ' }),
    ).exactOptional(),
    expressionWithValues: SensitiveStringSchema.and(
      z.any().openapi({ description: ' The rule expression value. ' }),
    ).exactOptional(),
    outcomes: ListOfStringsSchema.and(
      z.any().openapi({ description: ' The rule outcome. ' }),
    ).exactOptional(),
    evaluated: BooleanSchema.and(
      z.any().openapi({ description: ' Indicates whether the rule was evaluated. ' }),
    ).exactOptional(),
    matched: BooleanSchema.and(
      z.any().openapi({ description: ' Indicates whether the rule matched. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The details of the rule used for evaluating variable values. ',
    required: [],
  })
  .openapi('EvaluatedRule')

const EvaluatedRuleListSchema = z.array(EvaluatedRuleSchema).openapi('EvaluatedRuleList')

const VariableImpactExplanationSchema = z
  .object({
    eventVariableName: StringSchema.and(
      z.any().openapi({ description: ' The event variable name. ' }),
    ).exactOptional(),
    relativeImpact: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            " The event variable's relative impact in terms of magnitude on the prediction scores. The relative impact values consist of a numerical rating (0-5, 5 being the highest) and direction (increased/decreased) impact of the fraud risk. ",
        }),
    ).exactOptional(),
    logOddsImpact: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The raw, uninterpreted value represented as log-odds of the fraud. These values are usually between -10 to +10, but range from - infinity to + infinity.</p> <ul> <li> <p>A positive value indicates that the variable drove the risk score up.</p> </li> <li> <p>A negative value indicates that the variable drove the risk score down.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: " The details of the event variable's impact on the prediction score. ",
    required: [],
  })
  .openapi('VariableImpactExplanation')

const ListOfVariableImpactExplanationsSchema = z
  .array(VariableImpactExplanationSchema)
  .openapi('ListOfVariableImpactExplanations')

const AggregatedVariablesImpactExplanationSchema = z
  .object({
    eventVariableNames: ListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The names of all the event variables that were used to derive the aggregated variables. ',
        }),
    ).exactOptional(),
    relativeImpact: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The relative impact of the aggregated variables in terms of magnitude on the prediction scores. ',
        }),
    ).exactOptional(),
    logOddsImpact: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The raw, uninterpreted value represented as log-odds of the fraud. These values are usually between -10 to +10, but range from -infinity to +infinity.</p> <ul> <li> <p>A positive value indicates that the variables drove the risk score up.</p> </li> <li> <p>A negative value indicates that the variables drove the risk score down.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> The details of the impact of aggregated variables on the prediction score. </p> <p>Account Takeover Insights (ATI) model uses the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, the model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>',
    required: [],
  })
  .openapi('AggregatedVariablesImpactExplanation')

const ListOfAggregatedVariablesImpactExplanationsSchema = z
  .array(AggregatedVariablesImpactExplanationSchema)
  .openapi('ListOfAggregatedVariablesImpactExplanations')

const PredictionExplanationsSchema = z
  .object({
    variableImpactExplanations: ListOfVariableImpactExplanationsSchema.and(
      z
        .any()
        .openapi({
          description: " The details of the event variable's impact on the prediction score. ",
        }),
    ).exactOptional(),
    aggregatedVariablesImpactExplanations: ListOfAggregatedVariablesImpactExplanationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The details of the aggregated variables impact on the prediction score. </p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " The prediction explanations that provide insight into how each event variable impacted the model version's fraud prediction score. ",
    required: [],
  })
  .openapi('PredictionExplanations')

const ModelVersionEvaluationSchema = z
  .object({
    outputVariableName: StringSchema.and(
      z.any().openapi({ description: ' The output variable name. ' }),
    ).exactOptional(),
    evaluationScore: StringSchema.and(
      z.any().openapi({ description: ' The evaluation score generated for the model version. ' }),
    ).exactOptional(),
    predictionExplanations: PredictionExplanationsSchema.and(
      z
        .any()
        .openapi({ description: ' The prediction explanations generated for the model version. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The model version evalutions. ', required: [] })
  .openapi('ModelVersionEvaluation')

const ListOfModelVersionEvaluationsSchema = z
  .array(ModelVersionEvaluationSchema)
  .openapi('ListOfModelVersionEvaluations')

const EvaluatedModelVersionSchema = z
  .object({
    modelId: StringSchema.and(z.any().openapi({ description: ' The model ID. ' })).exactOptional(),
    modelVersion: StringSchema.and(
      z.any().openapi({ description: ' The model version. ' }),
    ).exactOptional(),
    modelType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The model type. </p> <p>Valid values: <code>ONLINE_FRAUD_INSIGHTS</code> | <code>TRANSACTION_FRAUD_INSIGHTS</code> </p>',
        }),
    ).exactOptional(),
    evaluations: ListOfModelVersionEvaluationsSchema.and(
      z.any().openapi({ description: ' Evaluations generated for the model version. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The model version evaluated for generating prediction. ',
    required: [],
  })
  .openapi('EvaluatedModelVersion')

const ListOfEvaluatedModelVersionsSchema = z
  .array(EvaluatedModelVersionSchema)
  .openapi('ListOfEvaluatedModelVersions')

const MapOfStringsSchema = z.record(z.string(), StringSchema).openapi('MapOfStrings')

const EvaluatedExternalModelSchema = z
  .object({
    modelEndpoint: StringSchema.and(
      z.any().openapi({ description: ' The endpoint of the external (Amazon Sagemaker) model. ' }),
    ).exactOptional(),
    useEventVariables: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' Indicates whether event variables were used to generate predictions. ',
        }),
    ).exactOptional(),
    inputVariables: MapOfStringsSchema.and(
      z.any().openapi({ description: ' Input variables use for generating predictions. ' }),
    ).exactOptional(),
    outputVariables: MapOfStringsSchema.and(
      z.any().openapi({ description: ' Output variables. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The details of the external (Amazon Sagemaker) model evaluated for generating predictions. ',
    required: [],
  })
  .openapi('EvaluatedExternalModel')

const ListOfEvaluatedExternalModelsSchema = z
  .array(EvaluatedExternalModelSchema)
  .openapi('ListOfEvaluatedExternalModels')

const GetEventPredictionMetadataResultSchema = z
  .object({
    eventId: IdentifierSchema.and(
      z.any().openapi({ description: ' The event ID. ' }),
    ).exactOptional(),
    eventTypeName: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The event type associated with the detector specified for this prediction. ',
        }),
    ).exactOptional(),
    entityId: StringSchema.and(
      z.any().openapi({ description: ' The entity ID. ' }),
    ).exactOptional(),
    entityType: StringSchema.and(
      z.any().openapi({ description: ' The entity type. ' }),
    ).exactOptional(),
    eventTimestamp: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The timestamp for when the prediction was generated for the associated event ID. ',
        }),
    ).exactOptional(),
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: ' The detector ID. ' }),
    ).exactOptional(),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: ' The detector version ID. ' }),
    ).exactOptional(),
    detectorVersionStatus: StringSchema.and(
      z.any().openapi({ description: ' The status of the detector version. ' }),
    ).exactOptional(),
    eventVariables: ListOfEventVariableSummariesSchema.and(
      z
        .any()
        .openapi({
          description: ' A list of event variables that influenced the prediction scores. ',
        }),
    ).exactOptional(),
    rules: EvaluatedRuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' List of rules associated with the detector version that were used for evaluating variable values. ',
        }),
    ).exactOptional(),
    ruleExecutionMode: RuleExecutionModeSchema.and(
      z
        .any()
        .openapi({
          description: ' The execution mode of the rule used for evaluating variable values. ',
        }),
    ).exactOptional(),
    outcomes: ListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description: ' The outcomes of the matched rule, based on the rule execution mode. ',
        }),
    ).exactOptional(),
    evaluatedModelVersions: ListOfEvaluatedModelVersionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Model versions that were evaluated for generating predictions. ',
        }),
    ).exactOptional(),
    evaluatedExternalModels: ListOfEvaluatedExternalModelsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' External (Amazon SageMaker) models that were evaluated for generating predictions. ',
        }),
    ).exactOptional(),
    predictionTimestamp: TimeSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that defines when the prediction was generated. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventPredictionMetadataResult')

const GetEventPredictionMetadataRequestSchema = z
  .object({
    eventId: IdentifierSchema.and(z.any().openapi({ description: ' The event ID. ' })),
    eventTypeName: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The event type associated with the detector specified for the prediction. ',
        }),
    ),
    detectorId: IdentifierSchema.and(z.any().openapi({ description: ' The detector ID. ' })),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: ' The detector version ID. ' }),
    ),
    predictionTimestamp: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The timestamp that defines when the prediction was generated. The timestamp must be specified using ISO 8601 standard in UTC.</p> <p>We recommend calling <a href="https://docs.aws.amazon.com/frauddetector/latest/api/API_ListEventPredictions.html">ListEventPredictions</a> first, and using the <code>predictionTimestamp</code> value in the response to provide an accurate prediction timestamp value.</p>',
        }),
    ),
  })
  .openapi({
    required: [
      'eventId',
      'eventTypeName',
      'detectorId',
      'detectorVersionId',
      'predictionTimestamp',
    ],
    title: 'GetEventPredictionMetadataRequest',
  })
  .openapi('GetEventPredictionMetadataRequest')

const EventIngestionSchema = z.enum(['ENABLED', 'DISABLED']).openapi('EventIngestion')

const LongSchema = z.int().openapi('Long')

const IngestedEventStatisticsSchema = z
  .object({
    numberOfEvents: LongSchema.and(
      z.any().openapi({ description: 'The number of stored events.' }),
    ).exactOptional(),
    eventDataSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The total size of the stored events.' }),
    ).exactOptional(),
    leastRecentEvent: TimeSchema.and(
      z.any().openapi({ description: 'The oldest stored event.' }),
    ).exactOptional(),
    mostRecentEvent: TimeSchema.and(
      z.any().openapi({ description: 'The newest stored event.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the stored event was last updated. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Data about the stored events.', required: [] })
  .openapi('IngestedEventStatistics')

const EventTypeSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The event type name.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The event type description.' }),
    ).exactOptional(),
    eventVariables: ListOfStringsSchema.and(
      z.any().openapi({ description: 'The event type event variables.' }),
    ).exactOptional(),
    labels: ListOfStringsSchema.and(
      z.any().openapi({ description: 'The event type labels.' }),
    ).exactOptional(),
    entityTypes: NonEmptyListOfStringsSchema.and(
      z.any().openapi({ description: 'The event type entity types.' }),
    ).exactOptional(),
    eventIngestion: EventIngestionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>Enabled</code>, Amazon Fraud Detector stores event data when you generate a prediction and uses that data to update calculated variables in near real-time. Amazon Fraud Detector uses this data, known as <code>INGESTED_EVENTS</code>, to train your model and improve fraud predictions.',
        }),
    ).exactOptional(),
    ingestedEventStatistics: IngestedEventStatisticsSchema.and(
      z.any().openapi({ description: 'Data about the stored events.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the event type was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the event type was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The entity type ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The event type details.', required: [] })
  .openapi('EventType')

const EventTypeListSchema = z.array(EventTypeSchema).openapi('EventTypeList')

const GetEventTypesResultSchema = z
  .object({
    eventTypes: EventTypeListSchema.and(
      z.any().openapi({ description: 'An array of event types.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventTypesResult')

const EventTypesMaxResultsSchema = z.int().min(5).max(10).openapi('EventTypesMaxResults')

const GetEventTypesRequestSchema = z
  .object({
    name: IdentifierSchema.and(z.any().openapi({ description: 'The name.' })).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for the subsequent request.' }),
    ).exactOptional(),
    maxResults: EventTypesMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetEventTypesRequest', required: [] })
  .openapi('GetEventTypesRequest')

const ModelInputDataFormatSchema = z
  .enum(['TEXT_CSV', 'APPLICATION_JSON'])
  .openapi('ModelInputDataFormat')

const UseEventVariablesSchema = z.boolean().openapi('UseEventVariables')

const ModelInputTemplateSchema = z.string().min(1).max(2000).openapi('ModelInputTemplate')

const ModelInputConfigurationSchema = z
  .object({
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The event type name.' }),
    ).exactOptional(),
    format: ModelInputDataFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The format of the model input configuration. The format differs depending on if it is passed through to SageMaker or constructed by Amazon Fraud Detector.',
        }),
    ).exactOptional(),
    useEventVariables: UseEventVariablesSchema.and(
      z.any().openapi({ description: 'The event variables.' }),
    ),
    jsonInputTemplate: ModelInputTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Template for constructing the JSON input-data sent to SageMaker. At event-evaluation, the placeholders for variable names in the template will be replaced with the variable values before being sent to SageMaker. ',
        }),
    ).exactOptional(),
    csvInputTemplate: ModelInputTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Template for constructing the CSV input-data sent to SageMaker. At event-evaluation, the placeholders for variable-names in the template will be replaced with the variable values before being sent to SageMaker. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['useEventVariables'],
    description: 'The Amazon SageMaker model input configuration.',
  })
  .openapi('ModelInputConfiguration')

const ModelOutputDataFormatSchema = z
  .enum(['TEXT_CSV', 'APPLICATION_JSONLINES'])
  .openapi('ModelOutputDataFormat')

const JsonKeyToVariableMapSchema = z
  .record(z.string(), StringSchema)
  .openapi('JsonKeyToVariableMap')

const CsvIndexToVariableMapSchema = z
  .record(z.string(), StringSchema)
  .openapi('CsvIndexToVariableMap')

const ModelOutputConfigurationSchema = z
  .object({
    format: ModelOutputDataFormatSchema.and(
      z.any().openapi({ description: 'The format of the model output configuration.' }),
    ),
    jsonKeyToVariableMap: JsonKeyToVariableMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables. ',
        }),
    ).exactOptional(),
    csvIndexToVariableMap: CsvIndexToVariableMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['format'],
    description: 'Provides the Amazon Sagemaker model output configuration.',
  })
  .openapi('ModelOutputConfiguration')

const ModelEndpointStatusSchema = z
  .enum(['ASSOCIATED', 'DISSOCIATED'])
  .openapi('ModelEndpointStatus')

const ExternalModelSchema = z
  .object({
    modelEndpoint: StringSchema.and(
      z.any().openapi({ description: 'The Amazon SageMaker model endpoints.' }),
    ).exactOptional(),
    modelSource: ModelSourceSchema.and(
      z.any().openapi({ description: 'The source of the model.' }),
    ).exactOptional(),
    invokeModelEndpointRoleArn: StringSchema.and(
      z.any().openapi({ description: 'The role used to invoke the model. ' }),
    ).exactOptional(),
    inputConfiguration: ModelInputConfigurationSchema.and(
      z.any().openapi({ description: 'The input configuration.' }),
    ).exactOptional(),
    outputConfiguration: ModelOutputConfigurationSchema.and(
      z.any().openapi({ description: 'The output configuration.' }),
    ).exactOptional(),
    modelEndpointStatus: ModelEndpointStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Fraud Detector status for the external model endpoint',
        }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the model was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the model was last created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The model ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The Amazon SageMaker model.', required: [] })
  .openapi('ExternalModel')

const ExternalModelListSchema = z.array(ExternalModelSchema).openapi('ExternalModelList')

const GetExternalModelsResultSchema = z
  .object({
    externalModels: ExternalModelListSchema.and(
      z.any().openapi({ description: 'Gets the Amazon SageMaker models.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token to be used in subsequent requests.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetExternalModelsResult')

const ExternalModelsMaxResultsSchema = z.int().min(5).max(10).openapi('ExternalModelsMaxResults')

const GetExternalModelsRequestSchema = z
  .object({
    modelEndpoint: StringSchema.and(
      z.any().openapi({ description: 'The Amazon SageMaker model endpoint.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token for the request.' }),
    ).exactOptional(),
    maxResults: ExternalModelsMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetExternalModelsRequest', required: [] })
  .openapi('GetExternalModelsRequest')

const KmsEncryptionKeyArnSchema = z
  .string()
  .regex(/^DEFAULT|arn:[a-zA-Z0-9-]+:kms:[a-zA-Z0-9-]+:\d{12}:key\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)
  .min(7)
  .max(90)
  .openapi('KmsEncryptionKeyArn')

const KMSKeySchema = z
  .object({
    kmsEncryptionKeyArn: KmsEncryptionKeyArnSchema.and(
      z.any().openapi({ description: 'The encryption key ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The KMS key details.', required: [] })
  .openapi('KMSKey')

const GetKMSEncryptionKeyResultSchema = z
  .object({
    kmsKey: KMSKeySchema.and(
      z.any().openapi({ description: 'The KMS encryption key.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetKMSEncryptionKeyResult')

const LabelSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The label name.' })).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The label description.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the label was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the event type was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The label ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The label details.', required: [] })
  .openapi('Label')

const LabelListSchema = z.array(LabelSchema).openapi('LabelList')

const GetLabelsResultSchema = z
  .object({
    labels: LabelListSchema.and(
      z.any().openapi({ description: 'An array of labels.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLabelsResult')

const LabelsMaxResultsSchema = z.int().min(10).max(50).openapi('LabelsMaxResults')

const GetLabelsRequestSchema = z
  .object({
    name: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the label or labels to get.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for the subsequent request.' }),
    ).exactOptional(),
    maxResults: LabelsMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetLabelsRequest', required: [] })
  .openapi('GetLabelsRequest')

const NextTokenSchema = z.string().regex(/.*/).min(0).max(8192).openapi('NextToken')

const GetListElementsResultSchema = z
  .object({
    elements: ElementsListSchema.and(
      z.any().openapi({ description: ' The list elements. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The next page token. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetListElementsResult')

const ListsElementsMaxResultsSchema = z.int().min(500).max(5000).openapi('ListsElementsMaxResults')

const GetListElementsRequestSchema = z
  .object({
    name: NoDashIdentifierSchema.and(z.any().openapi({ description: ' The name of the list. ' })),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The next token for the subsequent request. ' }),
    ).exactOptional(),
    maxResults: ListsElementsMaxResultsSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of objects to return for the request. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'GetListElementsRequest' })
  .openapi('GetListElementsRequest')

const AllowDenyListSchema = z
  .object({
    name: NoDashIdentifierSchema.and(z.any().openapi({ description: ' The name of the list. ' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description of the list. ' }),
    ).exactOptional(),
    variableType: VariableTypeSchema.and(
      z.any().openapi({ description: ' The variable type of the list. ' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: ' The time the list was created. ' }),
    ).exactOptional(),
    updatedTime: TimeSchema.and(
      z.any().openapi({ description: ' The time the list was last updated. ' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: ' The ARN of the list. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], description: ' The metadata of a list. ' })
  .openapi('AllowDenyList')

const AllowDenyListsSchema = z.array(AllowDenyListSchema).openapi('AllowDenyLists')

const GetListsMetadataResultSchema = z
  .object({
    lists: AllowDenyListsSchema.and(
      z
        .any()
        .openapi({
          description: ' The metadata of the specified list or all lists under the account. ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The next page token. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetListsMetadataResult')

const ListsMetadataMaxResultsSchema = z.int().min(5).max(50).openapi('ListsMetadataMaxResults')

const GetListsMetadataRequestSchema = z
  .object({
    name: NoDashIdentifierSchema.and(
      z.any().openapi({ description: ' The name of the list. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The next token for the subsequent request. ' }),
    ).exactOptional(),
    maxResults: ListsMetadataMaxResultsSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of objects to return for the request. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetListsMetadataRequest', required: [] })
  .openapi('GetListsMetadataRequest')

const GetModelVersionResultSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID.' }),
    ).exactOptional(),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number.' }),
    ).exactOptional(),
    trainingDataSource: TrainingDataSourceEnumSchema.and(
      z.any().openapi({ description: 'The training data source.' }),
    ).exactOptional(),
    trainingDataSchema: TrainingDataSchemaSchema.and(
      z.any().openapi({ description: 'The training data schema.' }),
    ).exactOptional(),
    externalEventsDetail: ExternalEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the external events data used for training the model version. This will be populated if the <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code> ',
        }),
    ).exactOptional(),
    ingestedEventsDetail: IngestedEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the ingested events data used for training the model version. This will be populated if the <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.',
        }),
    ).exactOptional(),
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The model version status.</p> <p>Possible values are:</p> <ul> <li> <p> <code>TRAINING_IN_PROGRESS</code> </p> </li> <li> <p> <code>TRAINING_COMPLETE</code> </p> </li> <li> <p> <code>ACTIVATE_REQUESTED</code> </p> </li> <li> <p> <code>ACTIVATE_IN_PROGRESS</code> </p> </li> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>INACTIVATE_REQUESTED</code> </p> </li> <li> <p> <code>INACTIVATE_IN_PROGRESS</code> </p> </li> <li> <p> <code>INACTIVE</code> </p> </li> <li> <p> <code>ERROR</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The model version ARN.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetModelVersionResult')

const GetModelVersionRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(z.any().openapi({ description: 'The model ID.' })),
    modelType: ModelTypeEnumSchema.and(z.any().openapi({ description: 'The model type.' })),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number.' }),
    ),
  })
  .openapi({
    required: ['modelId', 'modelType', 'modelVersionNumber'],
    title: 'GetModelVersionRequest',
  })
  .openapi('GetModelVersionRequest')

const ModelSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID.' }),
    ).exactOptional(),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The model description.' }),
    ).exactOptional(),
    eventTypeName: StringSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of when the model was created.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of last time the model was updated.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The ARN of the model.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The model.', required: [] })
  .openapi('Model')

const ModelListSchema = z.array(ModelSchema).openapi('ModelList')

const GetModelsResultSchema = z
  .object({
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token to be used in subsequent requests.' }),
    ).exactOptional(),
    models: ModelListSchema.and(
      z.any().openapi({ description: 'The array of models.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetModelsResult')

const GetModelsRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID.' }),
    ).exactOptional(),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for the subsequent request.' }),
    ).exactOptional(),
    maxResults: ModelsMaxPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetModelsRequest', required: [] })
  .openapi('GetModelsRequest')

const OutcomeSchema = z
  .object({
    name: IdentifierSchema.and(
      z.any().openapi({ description: 'The outcome name.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The outcome description.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the outcome was last updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the outcome was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The outcome ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The outcome.', required: [] })
  .openapi('Outcome')

const OutcomeListSchema = z.array(OutcomeSchema).openapi('OutcomeList')

const GetOutcomesResultSchema = z
  .object({
    outcomes: OutcomeListSchema.and(
      z.any().openapi({ description: 'The outcomes. ' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token for subsequent requests.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOutcomesResult')

const OutcomesMaxResultsSchema = z.int().min(50).max(100).openapi('OutcomesMaxResults')

const GetOutcomesRequestSchema = z
  .object({
    name: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the outcome or outcomes to get.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token for the request. ' }),
    ).exactOptional(),
    maxResults: OutcomesMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetOutcomesRequest', required: [] })
  .openapi('GetOutcomesRequest')

const RuleDetailSchema = z
  .object({
    ruleId: IdentifierSchema.and(z.any().openapi({ description: 'The rule ID.' })).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The rule description.' }),
    ).exactOptional(),
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: 'The detector for which the rule is associated.' }),
    ).exactOptional(),
    ruleVersion: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The rule version.' }),
    ).exactOptional(),
    expression: RuleExpressionSchema.and(
      z.any().openapi({ description: 'The rule expression.' }),
    ).exactOptional(),
    language: LanguageSchema.and(
      z.any().openapi({ description: 'The rule language.' }),
    ).exactOptional(),
    outcomes: NonEmptyListOfStringsSchema.and(
      z.any().openapi({ description: 'The rule outcomes.' }),
    ).exactOptional(),
    lastUpdatedTime: TimeSchema.and(
      z.any().openapi({ description: 'Timestamp of the last time the rule was updated.' }),
    ).exactOptional(),
    createdTime: TimeSchema.and(
      z.any().openapi({ description: 'The timestamp of when the rule was created.' }),
    ).exactOptional(),
    arn: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The rule ARN.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of the rule.', required: [] })
  .openapi('RuleDetail')

const RuleDetailListSchema = z.array(RuleDetailSchema).openapi('RuleDetailList')

const GetRulesResultSchema = z
  .object({
    ruleDetails: RuleDetailListSchema.and(
      z.any().openapi({ description: 'The details of the requested rule.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token to be used in subsequent requests.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRulesResult')

const RulesMaxResultsSchema = z.int().min(50).max(100).openapi('RulesMaxResults')

const GetRulesRequestSchema = z
  .object({
    ruleId: IdentifierSchema.and(z.any().openapi({ description: 'The rule ID.' })).exactOptional(),
    detectorId: IdentifierSchema.and(z.any().openapi({ description: 'The detector ID.' })),
    ruleVersion: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The rule version.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token.' }),
    ).exactOptional(),
    maxResults: RulesMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of rules to return for the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['detectorId'], title: 'GetRulesRequest' })
  .openapi('GetRulesRequest')

const GetVariablesResultSchema = z
  .object({
    variables: VariableListSchema.and(
      z.any().openapi({ description: 'The names of the variables returned. ' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token to be used in subsequent requests. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVariablesResult')

const VariablesMaxResultsSchema = z.int().min(50).max(100).openapi('VariablesMaxResults')

const GetVariablesRequestSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the variable. ' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next page token of the get variable request. ' }),
    ).exactOptional(),
    maxResults: VariablesMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The max size per page determined for the get variable request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetVariablesRequest', required: [] })
  .openapi('GetVariablesRequest')

const EventPredictionSummarySchema = z
  .object({
    eventId: IdentifierSchema.and(
      z.any().openapi({ description: ' The event ID. ' }),
    ).exactOptional(),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: ' The event type. ' }),
    ).exactOptional(),
    eventTimestamp: TimeSchema.and(
      z.any().openapi({ description: ' The timestamp of the event. ' }),
    ).exactOptional(),
    predictionTimestamp: TimeSchema.and(
      z.any().openapi({ description: ' The timestamp when the prediction was generated. ' }),
    ).exactOptional(),
    detectorId: IdentifierSchema.and(
      z.any().openapi({ description: ' The detector ID. ' }),
    ).exactOptional(),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: ' The detector version ID. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about the summary of an event prediction. ', required: [] })
  .openapi('EventPredictionSummary')

const ListOfEventPredictionSummariesSchema = z
  .array(EventPredictionSummarySchema)
  .openapi('ListOfEventPredictionSummaries')

const ListEventPredictionsResultSchema = z
  .object({
    eventPredictionSummaries: ListOfEventPredictionSummariesSchema.and(
      z.any().openapi({ description: ' The summary of the past predictions. ' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventPredictionsResult')

const FilterStringSchema = z
  .string()
  .regex(/^[0-9A-Za-z_-]+$/)
  .min(1)
  .max(256)
  .openapi('FilterString')

const FilterConditionSchema = z
  .object({
    value: FilterStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A statement containing a resource property and a value to specify filter condition. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' A conditional statement for filtering a list of past predictions. ',
    required: [],
  })
  .openapi('FilterCondition')

const PredictionTimeRangeSchema = z
  .object({
    startTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start time of the time period for when the predictions were generated. ',
        }),
    ),
    endTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description: ' The end time of the time period for when the predictions were generated. ',
        }),
    ),
  })
  .openapi({
    required: ['startTime', 'endTime'],
    description: ' The time period for when the predictions were generated. ',
  })
  .openapi('PredictionTimeRange')

const EventPredictionsMaxResultsSchema = z
  .int()
  .min(50)
  .max(100)
  .openapi('EventPredictionsMaxResults')

const ListEventPredictionsRequestSchema = z
  .object({
    eventId: FilterConditionSchema.and(
      z.any().openapi({ description: ' The event ID. ' }),
    ).exactOptional(),
    eventType: FilterConditionSchema.and(
      z.any().openapi({ description: ' The event type associated with the detector. ' }),
    ).exactOptional(),
    detectorId: FilterConditionSchema.and(
      z.any().openapi({ description: ' The detector ID. ' }),
    ).exactOptional(),
    detectorVersionId: FilterConditionSchema.and(
      z.any().openapi({ description: ' The detector version ID. ' }),
    ).exactOptional(),
    predictionTimeRange: PredictionTimeRangeSchema.and(
      z
        .any()
        .openapi({ description: ' The time period for when the predictions were generated. ' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. ',
        }),
    ).exactOptional(),
    maxResults: EventPredictionsMaxResultsSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of predictions to return for the request. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEventPredictionsRequest', required: [] })
  .openapi('ListEventPredictionsRequest')

const ListTagsForResourceResultSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token for subsequent requests. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResult')

const TagsMaxResultsSchema = z.int().min(50).max(50).openapi('TagsMaxResults')

const ListTagsForResourceRequestSchema = z
  .object({
    resourceARN: FraudDetectorArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN that specifies the resource whose tags you want to list.',
        }),
    ),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'The next token from the previous results.' }),
    ).exactOptional(),
    maxResults: TagsMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return for the request. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutDetectorResultSchema = z.object({}).openapi('PutDetectorResult')

const PutDetectorRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(z.any().openapi({ description: 'The detector ID. ' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the detector.' }),
    ).exactOptional(),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The name of the event type.' }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['detectorId', 'eventTypeName'], title: 'PutDetectorRequest' })
  .openapi('PutDetectorRequest')

const PutEntityTypeResultSchema = z.object({}).openapi('PutEntityTypeResult')

const PutEntityTypeRequestSchema = z
  .object({
    name: IdentifierSchema.and(z.any().openapi({ description: 'The name of the entity type.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'PutEntityTypeRequest' })
  .openapi('PutEntityTypeRequest')

const PutEventTypeResultSchema = z.object({}).openapi('PutEventTypeResult')

const PutEventTypeRequestSchema = z
  .object({
    name: IdentifierSchema.and(z.any().openapi({ description: 'The name.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the event type.' }),
    ).exactOptional(),
    eventVariables: NonEmptyListOfStringsSchema.and(
      z.any().openapi({ description: 'The event type variables.' }),
    ),
    labels: ListOfStringsSchema.and(
      z.any().openapi({ description: 'The event type labels.' }),
    ).exactOptional(),
    entityTypes: NonEmptyListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity type for the event type. Example entity types: customer, merchant, account.',
        }),
    ),
    eventIngestion: EventIngestionSchema.and(
      z.any().openapi({ description: 'Specifies if ingenstion is enabled or disabled.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'eventVariables', 'entityTypes'], title: 'PutEventTypeRequest' })
  .openapi('PutEventTypeRequest')

const PutExternalModelResultSchema = z.object({}).openapi('PutExternalModelResult')

const PutExternalModelRequestSchema = z
  .object({
    modelEndpoint: SageMakerEndpointIdentifierSchema.and(
      z.any().openapi({ description: 'The model endpoints name.' }),
    ),
    modelSource: ModelSourceSchema.and(
      z.any().openapi({ description: 'The source of the model.' }),
    ),
    invokeModelEndpointRoleArn: StringSchema.and(
      z.any().openapi({ description: 'The IAM role used to invoke the model endpoint.' }),
    ),
    inputConfiguration: ModelInputConfigurationSchema.and(
      z.any().openapi({ description: 'The model endpoint input configuration.' }),
    ),
    outputConfiguration: ModelOutputConfigurationSchema.and(
      z.any().openapi({ description: 'The model endpoint output configuration.' }),
    ),
    modelEndpointStatus: ModelEndpointStatusSchema.and(
      z.any().openapi({ description: 'The model endpoint’s status in Amazon Fraud Detector.' }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'modelEndpoint',
      'modelSource',
      'invokeModelEndpointRoleArn',
      'inputConfiguration',
      'outputConfiguration',
      'modelEndpointStatus',
    ],
    title: 'PutExternalModelRequest',
  })
  .openapi('PutExternalModelRequest')

const PutKMSEncryptionKeyResultSchema = z.object({}).openapi('PutKMSEncryptionKeyResult')

const PutKMSEncryptionKeyRequestSchema = z
  .object({
    kmsEncryptionKeyArn: KmsEncryptionKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS encryption key ARN.</p> <p>The KMS key must be single-Region key. Amazon Fraud Detector does not support multi-Region KMS key.</p>',
        }),
    ),
  })
  .openapi({ required: ['kmsEncryptionKeyArn'], title: 'PutKMSEncryptionKeyRequest' })
  .openapi('PutKMSEncryptionKeyRequest')

const PutLabelResultSchema = z.object({}).openapi('PutLabelResult')

const PutLabelRequestSchema = z
  .object({
    name: IdentifierSchema.and(z.any().openapi({ description: 'The label name.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The label description.' }),
    ).exactOptional(),
    tags: TagListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'PutLabelRequest' })
  .openapi('PutLabelRequest')

const PutOutcomeResultSchema = z.object({}).openapi('PutOutcomeResult')

const PutOutcomeRequestSchema = z
  .object({
    name: IdentifierSchema.and(z.any().openapi({ description: 'The name of the outcome.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The outcome description.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'PutOutcomeRequest' })
  .openapi('PutOutcomeRequest')

const SendEventResultSchema = z.object({}).openapi('SendEventResult')

const SendEventRequestSchema = z
  .object({
    eventId: IdentifierSchema.and(z.any().openapi({ description: 'The event ID to upload.' })),
    eventTypeName: IdentifierSchema.and(
      z.any().openapi({ description: 'The event type name of the event.' }),
    ),
    eventTimestamp: UtcTimestampISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.',
        }),
    ),
    eventVariables: EventVariableMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.",
        }),
    ),
    assignedLabel: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label to associate with the event. Required if specifying <code>labelTimestamp</code>.',
        }),
    ).exactOptional(),
    labelTimestamp: UtcTimestampISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp associated with the label. Required if specifying <code>assignedLabel</code>.',
        }),
    ).exactOptional(),
    entities: ListOfEntitiesSchema.and(z.any().openapi({ description: 'An array of entities.' })),
  })
  .openapi({
    required: ['eventId', 'eventTypeName', 'eventTimestamp', 'eventVariables', 'entities'],
    title: 'SendEventRequest',
  })
  .openapi('SendEventRequest')

const TagResourceResultSchema = z.object({}).openapi('TagResourceResult')

const TagResourceRequestSchema = z
  .object({
    resourceARN: FraudDetectorArnSchema.and(z.any().openapi({ description: 'The resource ARN.' })),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the resource.' }),
    ),
  })
  .openapi({ required: ['resourceARN', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResultSchema = z.object({}).openapi('UntagResourceResult')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceARN: FraudDetectorArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource from which to remove the tag.' }),
    ),
    tagKeys: TagKeyListSchema.and(z.any().openapi({ description: 'The resource ARN.' })),
  })
  .openapi({ required: ['resourceARN', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDetectorVersionResultSchema = z.object({}).openapi('UpdateDetectorVersionResult')

const UpdateDetectorVersionRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The parent detector ID for the detector version you want to update.',
        }),
    ),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version ID. ' }),
    ),
    externalModelEndpoints: ListOfStringsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon SageMaker model endpoints to include in the detector version.',
        }),
    ),
    rules: RuleListSchema.and(
      z.any().openapi({ description: 'The rules to include in the detector version.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The detector version description. ' }),
    ).exactOptional(),
    modelVersions: ListOfModelVersionsSchema.and(
      z.any().openapi({ description: 'The model versions to include in the detector version.' }),
    ).exactOptional(),
    ruleExecutionMode: RuleExecutionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rule execution mode to add to the detector.</p> <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p> <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p> <p>The default behavior is <code>FIRST_MATCHED</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['detectorId', 'detectorVersionId', 'externalModelEndpoints', 'rules'],
    title: 'UpdateDetectorVersionRequest',
  })
  .openapi('UpdateDetectorVersionRequest')

const UpdateDetectorVersionMetadataResultSchema = z
  .object({})
  .openapi('UpdateDetectorVersionMetadataResult')

const UpdateDetectorVersionMetadataRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(z.any().openapi({ description: 'The detector ID.' })),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version ID. ' }),
    ),
    description: DescriptionSchema.and(z.any().openapi({ description: 'The description.' })),
  })
  .openapi({
    required: ['detectorId', 'detectorVersionId', 'description'],
    title: 'UpdateDetectorVersionMetadataRequest',
  })
  .openapi('UpdateDetectorVersionMetadataRequest')

const UpdateDetectorVersionStatusResultSchema = z
  .object({})
  .openapi('UpdateDetectorVersionStatusResult')

const UpdateDetectorVersionStatusRequestSchema = z
  .object({
    detectorId: IdentifierSchema.and(z.any().openapi({ description: 'The detector ID. ' })),
    detectorVersionId: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The detector version ID. ' }),
    ),
    status: DetectorVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new status.</p> <p>The only supported values are <code>ACTIVE</code> and <code>INACTIVE</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['detectorId', 'detectorVersionId', 'status'],
    title: 'UpdateDetectorVersionStatusRequest',
  })
  .openapi('UpdateDetectorVersionStatusRequest')

const UpdateEventLabelResultSchema = z.object({}).openapi('UpdateEventLabelResult')

const UpdateEventLabelRequestSchema = z
  .object({
    eventId: IdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the event associated with the label to update.' }),
    ),
    eventTypeName: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The event type of the event associated with the label to update.',
        }),
    ),
    assignedLabel: IdentifierSchema.and(
      z.any().openapi({ description: 'The new label to assign to the event.' }),
    ),
    labelTimestamp: UtcTimestampISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp associated with the label. The timestamp must be specified using ISO 8601 standard in UTC. ',
        }),
    ),
  })
  .openapi({
    required: ['eventId', 'eventTypeName', 'assignedLabel', 'labelTimestamp'],
    title: 'UpdateEventLabelRequest',
  })
  .openapi('UpdateEventLabelRequest')

const UpdateListResultSchema = z.object({}).openapi('UpdateListResult')

const ListUpdateModeSchema = z.enum(['REPLACE', 'APPEND', 'REMOVE']).openapi('ListUpdateMode')

const UpdateListRequestSchema = z
  .object({
    name: NoDashIdentifierSchema.and(
      z.any().openapi({ description: ' The name of the list to update. ' }),
    ),
    elements: ElementsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> One or more list elements to add or replace. If you are providing the elements, make sure to specify the <code>updateMode</code> to use. </p> <p>If you are deleting all elements from the list, use <code>REPLACE</code> for the <code>updateMode</code> and provide an empty list (0 elements).</p>',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The new description. ' }),
    ).exactOptional(),
    updateMode: ListUpdateModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The update mode (type). </p> <ul> <li> <p>Use <code>APPEND</code> if you are adding elements to the list.</p> </li> <li> <p>Use <code>REPLACE</code> if you replacing existing elements in the list.</p> </li> <li> <p>Use <code>REMOVE</code> if you are removing elements from the list.</p> </li> </ul>',
        }),
    ).exactOptional(),
    variableType: VariableTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The variable type you want to assign to the list. </p> <note> <p>You cannot update a variable type of a list that already has a variable type assigned to it. You can assign a variable type to a list only if the list does not already have a variable type.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'UpdateListRequest' })
  .openapi('UpdateListRequest')

const UpdateModelResultSchema = z.object({}).openapi('UpdateModelResult')

const UpdateModelRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(z.any().openapi({ description: 'The model ID.' })),
    modelType: ModelTypeEnumSchema.and(z.any().openapi({ description: 'The model type.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The new model description.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['modelId', 'modelType'], title: 'UpdateModelRequest' })
  .openapi('UpdateModelRequest')

const UpdateModelVersionResultSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID.' }),
    ).exactOptional(),
    modelType: ModelTypeEnumSchema.and(
      z.any().openapi({ description: 'The model type.' }),
    ).exactOptional(),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number of the model version updated.' }),
    ).exactOptional(),
    status: StringSchema.and(
      z.any().openapi({ description: 'The status of the updated model version.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateModelVersionResult')

const UpdateModelVersionRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(z.any().openapi({ description: 'The model ID.' })),
    modelType: ModelTypeEnumSchema.and(z.any().openapi({ description: 'The model type.' })),
    majorVersionNumber: WholeNumberVersionStringSchema.and(
      z.any().openapi({ description: 'The major version number.' }),
    ),
    externalEventsDetail: ExternalEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the external events data used for training the model version. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.',
        }),
    ).exactOptional(),
    ingestedEventsDetail: IngestedEventsDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the ingested event used for training the model version. Required if your <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A collection of key and value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['modelId', 'modelType', 'majorVersionNumber'],
    title: 'UpdateModelVersionRequest',
  })
  .openapi('UpdateModelVersionRequest')

const UpdateModelVersionStatusResultSchema = z.object({}).openapi('UpdateModelVersionStatusResult')

const ModelVersionStatusSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'TRAINING_CANCELLED'])
  .openapi('ModelVersionStatus')

const UpdateModelVersionStatusRequestSchema = z
  .object({
    modelId: ModelIdentifierSchema.and(
      z.any().openapi({ description: 'The model ID of the model version to update.' }),
    ),
    modelType: ModelTypeEnumSchema.and(z.any().openapi({ description: 'The model type.' })),
    modelVersionNumber: FloatVersionStringSchema.and(
      z.any().openapi({ description: 'The model version number.' }),
    ),
    status: ModelVersionStatusSchema.and(
      z.any().openapi({ description: 'The model version status.' }),
    ),
  })
  .openapi({
    required: ['modelId', 'modelType', 'modelVersionNumber', 'status'],
    title: 'UpdateModelVersionStatusRequest',
  })
  .openapi('UpdateModelVersionStatusRequest')

const UpdateRuleMetadataResultSchema = z.object({}).openapi('UpdateRuleMetadataResult')

const UpdateRuleMetadataRequestSchema = z
  .object({
    rule: RuleSchema.and(z.any().openapi({ description: 'The rule to update.' })),
    description: DescriptionSchema.and(z.any().openapi({ description: 'The rule description.' })),
  })
  .openapi({ required: ['rule', 'description'], title: 'UpdateRuleMetadataRequest' })
  .openapi('UpdateRuleMetadataRequest')

const UpdateRuleVersionResultSchema = z
  .object({
    rule: RuleSchema.and(
      z.any().openapi({ description: 'The new rule version that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRuleVersionResult')

const UpdateRuleVersionRequestSchema = z
  .object({
    rule: RuleSchema.and(z.any().openapi({ description: 'The rule to update.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    expression: RuleExpressionSchema.and(z.any().openapi({ description: 'The rule expression.' })),
    language: LanguageSchema.and(z.any().openapi({ description: 'The language.' })),
    outcomes: NonEmptyListOfStringsSchema.and(z.any().openapi({ description: 'The outcomes.' })),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the rule version.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['rule', 'expression', 'language', 'outcomes'],
    title: 'UpdateRuleVersionRequest',
  })
  .openapi('UpdateRuleVersionRequest')

const UpdateVariableResultSchema = z.object({}).openapi('UpdateVariableResult')

const UpdateVariableRequestSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the variable.' })),
    defaultValue: StringSchema.and(
      z.any().openapi({ description: 'The new default value of the variable.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The new description.' }),
    ).exactOptional(),
    variableType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'UpdateVariableRequest' })
  .openapi('UpdateVariableRequest')

const AttributeKeySchema = z.string().min(1).max(64).openapi('AttributeKey')

const VariableNameSchema = z.string().min(1).max(64).openapi('VariableName')

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

export const postXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable',
  description: 'Creates a batch of variables.',
  operationId: 'BatchCreateVariable',
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
        .literal('AWSHawksNestServiceFacade.BatchCreateVariable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.BatchCreateVariable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchCreateVariableRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchCreateVariableResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable',
  description: 'Gets a batch of variables.',
  operationId: 'BatchGetVariable',
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
        .literal('AWSHawksNestServiceFacade.BatchGetVariable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.BatchGetVariable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetVariableRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetVariableResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob',
  description: ' Cancels an in-progress batch import job.',
  operationId: 'CancelBatchImportJob',
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
        .literal('AWSHawksNestServiceFacade.CancelBatchImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CancelBatchImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelBatchImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelBatchImportJobResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob',
  description: 'Cancels the specified batch prediction job.',
  operationId: 'CancelBatchPredictionJob',
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
        .literal('AWSHawksNestServiceFacade.CancelBatchPredictionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSHawksNestServiceFacade.CancelBatchPredictionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelBatchPredictionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelBatchPredictionJobResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob',
  description: 'Creates a batch import job. ',
  operationId: 'CreateBatchImportJob',
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
        .literal('AWSHawksNestServiceFacade.CreateBatchImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CreateBatchImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBatchImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBatchImportJobResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob',
  description: 'Creates a batch prediction job.',
  operationId: 'CreateBatchPredictionJob',
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
        .literal('AWSHawksNestServiceFacade.CreateBatchPredictionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSHawksNestServiceFacade.CreateBatchPredictionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBatchPredictionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBatchPredictionJobResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion',
  description:
    'Creates a detector version. The detector version starts in a <code>DRAFT</code> status.',
  operationId: 'CreateDetectorVersion',
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
        .literal('AWSHawksNestServiceFacade.CreateDetectorVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CreateDetectorVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDetectorVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDetectorVersionResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateList',
  description:
    '<p> Creates a list. </p> <p>List is a set of input data for a variable in your event dataset. You use the input data in a rule that\'s associated with your detector. For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/lists.html">Lists</a>.</p>',
  operationId: 'CreateList',
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
        .literal('AWSHawksNestServiceFacade.CreateList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CreateList'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateListResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel',
  description: 'Creates a model using the specified model type.',
  operationId: 'CreateModel',
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
        .literal('AWSHawksNestServiceFacade.CreateModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CreateModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateModelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateModelResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion',
  description: 'Creates a version of the model using the specified model type and model id. ',
  operationId: 'CreateModelVersion',
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
        .literal('AWSHawksNestServiceFacade.CreateModelVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CreateModelVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateModelVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateModelVersionResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule',
  description: 'Creates a rule for use with the specified detector. ',
  operationId: 'CreateRule',
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
        .literal('AWSHawksNestServiceFacade.CreateRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CreateRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateRuleRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRuleResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeCreateVariableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable',
  description: 'Creates a variable.',
  operationId: 'CreateVariable',
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
        .literal('AWSHawksNestServiceFacade.CreateVariable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.CreateVariable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVariableRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVariableResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob',
  description:
    'Deletes the specified batch import job ID record. This action does not delete the data that was batch imported. ',
  operationId: 'DeleteBatchImportJob',
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
        .literal('AWSHawksNestServiceFacade.DeleteBatchImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteBatchImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBatchImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBatchImportJobResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob',
  description: 'Deletes a batch prediction job.',
  operationId: 'DeleteBatchPredictionJob',
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
        .literal('AWSHawksNestServiceFacade.DeleteBatchPredictionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSHawksNestServiceFacade.DeleteBatchPredictionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBatchPredictionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBatchPredictionJobResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector',
  description:
    '<p>Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.</p> <p>When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteDetector',
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
        .literal('AWSHawksNestServiceFacade.DeleteDetector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteDetector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDetectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDetectorResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion',
  description:
    '<p>Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.</p> <p>When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteDetectorVersion',
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
        .literal('AWSHawksNestServiceFacade.DeleteDetectorVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteDetectorVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDetectorVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDetectorVersionResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType',
  description:
    '<p>Deletes an entity type.</p> <p>You cannot delete an entity type that is included in an event type.</p> <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteEntityType',
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
        .literal('AWSHawksNestServiceFacade.DeleteEntityType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteEntityType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEntityTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEntityTypeResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteEventRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent',
  description:
    '<p>Deletes the specified event.</p> <p>When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteEvent',
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
        .literal('AWSHawksNestServiceFacade.DeleteEvent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteEvent'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteEventRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEventResultSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType',
  description:
    '<p>Deletes an event type.</p> <p>You cannot delete an event type that is used in a detector or a model.</p> <p>When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteEventType',
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
        .literal('AWSHawksNestServiceFacade.DeleteEventType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteEventType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEventTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEventTypeResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType',
  description: 'Deletes all events of a particular event type.',
  operationId: 'DeleteEventsByEventType',
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
        .literal('AWSHawksNestServiceFacade.DeleteEventsByEventType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteEventsByEventType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEventsByEventTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEventsByEventTypeResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel',
  description:
    '<p>Removes a SageMaker model from Amazon Fraud Detector.</p> <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>',
  operationId: 'DeleteExternalModel',
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
        .literal('AWSHawksNestServiceFacade.DeleteExternalModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteExternalModel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteExternalModelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteExternalModelResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteLabelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel',
  description:
    '<p>Deletes a label.</p> <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p> <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p> <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteLabel',
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
        .literal('AWSHawksNestServiceFacade.DeleteLabel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteLabel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteLabelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLabelResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList',
  description:
    '<p> Deletes the list, provided it is not used in a rule. </p> <p> When you delete a list, Amazon Fraud Detector permanently deletes that list and the elements in the list.</p>',
  operationId: 'DeleteList',
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
        .literal('AWSHawksNestServiceFacade.DeleteList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteList'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteListResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel',
  description:
    '<p>Deletes a model.</p> <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p> <p> When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteModel',
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
        .literal('AWSHawksNestServiceFacade.DeleteModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteModelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteModelResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion',
  description:
    '<p>Deletes a model version.</p> <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p> <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteModelVersion',
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
        .literal('AWSHawksNestServiceFacade.DeleteModelVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteModelVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteModelVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteModelVersionResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome',
  description:
    '<p>Deletes an outcome.</p> <p>You cannot delete an outcome that is used in a rule version.</p> <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteOutcome',
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
        .literal('AWSHawksNestServiceFacade.DeleteOutcome')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteOutcome'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteOutcomeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteOutcomeResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule',
  description:
    '<p>Deletes the rule. You cannot delete a rule if it is used by an <code>ACTIVE</code> or <code>INACTIVE</code> detector version.</p> <p>When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.</p>',
  operationId: 'DeleteRule',
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
        .literal('AWSHawksNestServiceFacade.DeleteRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteRuleRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRuleResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDeleteVariableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable',
  description:
    "<p>Deletes a variable.</p> <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p> <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p> <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>",
  operationId: 'DeleteVariable',
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
        .literal('AWSHawksNestServiceFacade.DeleteVariable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DeleteVariable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVariableRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVariableResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector',
  description: 'Gets all versions for a specified detector.',
  operationId: 'DescribeDetector',
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
        .literal('AWSHawksNestServiceFacade.DescribeDetector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DescribeDetector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDetectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDetectorResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions',
  description:
    'Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. ',
  operationId: 'DescribeModelVersions',
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
        .literal('AWSHawksNestServiceFacade.DescribeModelVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.DescribeModelVersions'] },
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
      content: { 'application/json': { schema: DescribeModelVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeModelVersionsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs',
  description:
    'Gets all batch import jobs or a specific job of the specified ID. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 50. To get the next page results, provide the pagination token from the <code>GetBatchImportJobsResponse</code> as part of your request. A null pagination token fetches the records from the beginning.',
  operationId: 'GetBatchImportJobs',
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
        .literal('AWSHawksNestServiceFacade.GetBatchImportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetBatchImportJobs'] },
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
      content: { 'application/json': { schema: GetBatchImportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBatchImportJobsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs',
  description:
    'Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.',
  operationId: 'GetBatchPredictionJobs',
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
        .literal('AWSHawksNestServiceFacade.GetBatchPredictionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetBatchPredictionJobs'] },
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
      content: { 'application/json': { schema: GetBatchPredictionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBatchPredictionJobsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus',
    description: 'Retrieves the status of a <code>DeleteEventsByEventType</code> action.',
    operationId: 'GetDeleteEventsByEventTypeStatus',
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
          .literal('AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetDeleteEventsByEventTypeStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetDeleteEventsByEventTypeStatusResultSchema } },
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
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion',
  description: 'Gets a particular detector version. ',
  operationId: 'GetDetectorVersion',
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
        .literal('AWSHawksNestServiceFacade.GetDetectorVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetDetectorVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDetectorVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDetectorVersionResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetDetectorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors',
  description:
    'Gets all detectors or a single detector if a <code>detectorId</code> is specified. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetDetectorsResponse</code> as part of your request. A null pagination token fetches the records from the beginning. ',
  operationId: 'GetDetectors',
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
        .literal('AWSHawksNestServiceFacade.GetDetectors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetDetectors'] },
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
      content: { 'application/json': { schema: GetDetectorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDetectorsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes',
  description:
    'Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEntityTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning. ',
  operationId: 'GetEntityTypes',
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
        .literal('AWSHawksNestServiceFacade.GetEntityTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetEntityTypes'] },
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
      content: { 'application/json': { schema: GetEntityTypesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEntityTypesResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetEventRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent',
  description:
    'Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.',
  operationId: 'GetEvent',
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
        .literal('AWSHawksNestServiceFacade.GetEvent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetEvent'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetEventRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction',
  description:
    'Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.',
  operationId: 'GetEventPrediction',
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
        .literal('AWSHawksNestServiceFacade.GetEventPrediction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetEventPrediction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEventPredictionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventPredictionResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata',
  description:
    ' Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period. ',
  operationId: 'GetEventPredictionMetadata',
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
        .literal('AWSHawksNestServiceFacade.GetEventPredictionMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSHawksNestServiceFacade.GetEventPredictionMetadata'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEventPredictionMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventPredictionMetadataResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetEventTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes',
  description:
    'Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEventTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning. ',
  operationId: 'GetEventTypes',
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
        .literal('AWSHawksNestServiceFacade.GetEventTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetEventTypes'] },
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
      content: { 'application/json': { schema: GetEventTypesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventTypesResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels',
  description:
    'Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetExternalModelsResult</code> as part of your request. A null pagination token fetches the records from the beginning. ',
  operationId: 'GetExternalModels',
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
        .literal('AWSHawksNestServiceFacade.GetExternalModels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetExternalModels'] },
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
      content: { 'application/json': { schema: GetExternalModelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExternalModelsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey',
  description:
    'Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.',
  operationId: 'GetKMSEncryptionKey',
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
        .literal('AWSHawksNestServiceFacade.GetKMSEncryptionKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetKMSEncryptionKey'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetKMSEncryptionKeyResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetLabelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels',
  description:
    'Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50. To get the next page results, provide the pagination token from the <code>GetGetLabelsResponse</code> as part of your request. A null pagination token fetches the records from the beginning. ',
  operationId: 'GetLabels',
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
        .literal('AWSHawksNestServiceFacade.GetLabels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetLabels'] },
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
    body: { content: { 'application/json': { schema: GetLabelsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLabelsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetListElementsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements',
  description: ' Gets all the elements in the specified list. ',
  operationId: 'GetListElements',
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
        .literal('AWSHawksNestServiceFacade.GetListElements')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetListElements'] },
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
      content: { 'application/json': { schema: GetListElementsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetListElementsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata',
  description:
    ' Gets the metadata of either all the lists under the account or the specified list. ',
  operationId: 'GetListsMetadata',
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
        .literal('AWSHawksNestServiceFacade.GetListsMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetListsMetadata'] },
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
      content: { 'application/json': { schema: GetListsMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetListsMetadataResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetModelVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion',
  description: 'Gets the details of the specified model version.',
  operationId: 'GetModelVersion',
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
        .literal('AWSHawksNestServiceFacade.GetModelVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetModelVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetModelVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetModelVersionResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetModelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModels',
  description:
    '<p>Gets one or more models. Gets all models for the Amazon Web Services account if no model type and no model id provided. Gets all models for the Amazon Web Services account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. </p> <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 10. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.</p>',
  operationId: 'GetModels',
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
        .literal('AWSHawksNestServiceFacade.GetModels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetModels'] },
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
    body: { content: { 'application/json': { schema: GetModelsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetModelsResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetOutcomesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes',
  description:
    'Gets one or more outcomes. This is a paginated API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of 100 records per page. If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide the pagination token from the <code>GetOutcomesResult</code> as part of your request. A null pagination token fetches the records from the beginning. ',
  operationId: 'GetOutcomes',
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
        .literal('AWSHawksNestServiceFacade.GetOutcomes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetOutcomes'] },
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
    body: { content: { 'application/json': { schema: GetOutcomesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOutcomesResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetRules',
  description:
    '<p>Get all rules for a detector (paginated) if <code>ruleId</code> and <code>ruleVersion</code> are not specified. Gets all rules for the detector and the <code>ruleId</code> if present (paginated). Gets a specific rule if both the <code>ruleId</code> and the <code>ruleVersion</code> are specified.</p> <p>This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</p>',
  operationId: 'GetRules',
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
        .literal('AWSHawksNestServiceFacade.GetRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetRules'] },
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
    body: { content: { 'application/json': { schema: GetRulesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRulesResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeGetVariablesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables',
  description:
    'Gets all of the variables or the specific variable. This is a paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of 100 records per page. If you provide <code>maxSizePerPage</code> the value must be between 50 and 100. To get the next page result, a provide a pagination token from <code>GetVariablesResult</code> as part of your request. Null pagination token fetches the records from the beginning. ',
  operationId: 'GetVariables',
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
        .literal('AWSHawksNestServiceFacade.GetVariables')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.GetVariables'] },
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
      content: { 'application/json': { schema: GetVariablesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVariablesResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions',
  description:
    '<p>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period. If filter is not specified, the most recent prediction is returned.</p> <p>For example, the following filter lists all past predictions for <code>xyz</code> event type - <code>{ "eventType":{ "value": "xyz" }” } </code> </p> <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action will retrieve a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide the <code>nextToken</code> from the response as part of your request. A null <code>nextToken</code> fetches the records from the beginning. </p>',
  operationId: 'ListEventPredictions',
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
        .literal('AWSHawksNestServiceFacade.ListEventPredictions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.ListEventPredictions'] },
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
      content: { 'application/json': { schema: ListEventPredictionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventPredictionsResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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

export const postXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource',
  description:
    'Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning. ',
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
        .literal('AWSHawksNestServiceFacade.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.ListTagsForResource'] },
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
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadePutDetectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector',
  description: 'Creates or updates a detector. ',
  operationId: 'PutDetector',
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
        .literal('AWSHawksNestServiceFacade.PutDetector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.PutDetector'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutDetectorRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDetectorResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadePutEntityTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType',
  description:
    'Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.',
  operationId: 'PutEntityType',
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
        .literal('AWSHawksNestServiceFacade.PutEntityType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.PutEntityType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutEntityTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutEntityTypeResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadePutEventTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType',
  description:
    'Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.',
  operationId: 'PutEventType',
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
        .literal('AWSHawksNestServiceFacade.PutEventType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.PutEventType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutEventTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutEventTypeResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadePutExternalModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel',
  description:
    'Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables. ',
  operationId: 'PutExternalModel',
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
        .literal('AWSHawksNestServiceFacade.PutExternalModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.PutExternalModel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutExternalModelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutExternalModelResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey',
  description: 'Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.',
  operationId: 'PutKMSEncryptionKey',
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
        .literal('AWSHawksNestServiceFacade.PutKMSEncryptionKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.PutKMSEncryptionKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutKMSEncryptionKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutKMSEncryptionKeyResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadePutLabelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel',
  description:
    'Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector. ',
  operationId: 'PutLabel',
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
        .literal('AWSHawksNestServiceFacade.PutLabel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.PutLabel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutLabelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutLabelResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadePutOutcomeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome',
  description: 'Creates or updates an outcome. ',
  operationId: 'PutOutcome',
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
        .literal('AWSHawksNestServiceFacade.PutOutcome')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.PutOutcome'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutOutcomeRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutOutcomeResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeSendEventRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent',
  description:
    'Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use <code>SendEvent</code> to upload a historical dataset, which you can then later use to train a model.',
  operationId: 'SendEvent',
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
        .literal('AWSHawksNestServiceFacade.SendEvent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.SendEvent'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendEventRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendEventResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.TagResource',
  description: 'Assigns tags to a resource.',
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
        .literal('AWSHawksNestServiceFacade.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource',
  description: 'Removes tags from a resource.',
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
        .literal('AWSHawksNestServiceFacade.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion',
  description:
    ' Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a <code>DRAFT</code> detector version.',
  operationId: 'UpdateDetectorVersion',
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
        .literal('AWSHawksNestServiceFacade.UpdateDetectorVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateDetectorVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDetectorVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDetectorVersionResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata',
    description:
      "Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or <code>INACTIVE</code>). ",
    operationId: 'UpdateDetectorVersionMetadata',
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
          .literal('AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateDetectorVersionMetadataRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateDetectorVersionMetadataResultSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus',
  description:
    'Updates the detector version’s status. You can perform the following promotions or demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.',
  operationId: 'UpdateDetectorVersionStatus',
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
        .literal('AWSHawksNestServiceFacade.UpdateDetectorVersionStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSHawksNestServiceFacade.UpdateDetectorVersionStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDetectorVersionStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDetectorVersionStatusResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel',
  description: 'Updates the specified event with a new label.',
  operationId: 'UpdateEventLabel',
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
        .literal('AWSHawksNestServiceFacade.UpdateEventLabel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateEventLabel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEventLabelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEventLabelResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList',
  description: ' Updates a list. ',
  operationId: 'UpdateList',
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
        .literal('AWSHawksNestServiceFacade.UpdateList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateList'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateListResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel',
  description: 'Updates model description.',
  operationId: 'UpdateModel',
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
        .literal('AWSHawksNestServiceFacade.UpdateModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateModelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateModelResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion',
  description:
    'Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.',
  operationId: 'UpdateModelVersion',
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
        .literal('AWSHawksNestServiceFacade.UpdateModelVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateModelVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateModelVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateModelVersionResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus',
  description:
    '<p>Updates the status of a model version.</p> <p>You can perform the following status updates:</p> <ol> <li> <p>Change the <code>TRAINING_IN_PROGRESS</code> status to <code>TRAINING_CANCELLED</code>.</p> </li> <li> <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p> </li> <li> <p>Change <code>ACTIVE</code> to <code>INACTIVE</code>.</p> </li> </ol>',
  operationId: 'UpdateModelVersionStatus',
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
        .literal('AWSHawksNestServiceFacade.UpdateModelVersionStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSHawksNestServiceFacade.UpdateModelVersionStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateModelVersionStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateModelVersionStatusResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata',
  description: "Updates a rule's metadata. The description attribute can be updated.",
  operationId: 'UpdateRuleMetadata',
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
        .literal('AWSHawksNestServiceFacade.UpdateRuleMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateRuleMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRuleMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRuleMetadataResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion',
  description:
    'Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...). ',
  operationId: 'UpdateRuleVersion',
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
        .literal('AWSHawksNestServiceFacade.UpdateRuleVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateRuleVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRuleVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRuleVersionResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSHawksNestServiceFacadeUpdateVariableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable',
  description: 'Updates a variable.',
  operationId: 'UpdateVariable',
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
        .literal('AWSHawksNestServiceFacade.UpdateVariable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSHawksNestServiceFacade.UpdateVariable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateVariableRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVariableResultSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
