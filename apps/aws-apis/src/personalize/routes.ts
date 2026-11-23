import { createRoute, z } from '@hono/zod-openapi'

const NameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .min(1)
  .max(63)
  .openapi('Name')

const ArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
  .max(256)
  .openapi('Arn')

const PerformHPOSchema = z.boolean().openapi('PerformHPO')

const PerformAutoMLSchema = z.boolean().openapi('PerformAutoML')

const EventTypeSchema = z.string().max(256).openapi('EventType')

const EventValueThresholdSchema = z.string().max(256).openapi('EventValueThreshold')

const HPOObjectiveTypeSchema = z.string().max(256).openapi('HPOObjectiveType')

const MetricNameSchema = z.string().max(256).openapi('MetricName')

const MetricRegexSchema = z.string().max(256).openapi('MetricRegex')

const HPOObjectiveSchema = z
  .object({
    type: HPOObjectiveTypeSchema.exactOptional().openapi({
      description:
        'The type of the metric. Valid values are <code>Maximize</code> and <code>Minimize</code>.',
    }),
    metricName: MetricNameSchema.exactOptional().openapi({
      description: 'The name of the metric.',
    }),
    metricRegex: MetricRegexSchema.exactOptional().openapi({
      description: 'A regular expression for finding the metric in the training job logs.',
    }),
  })
  .openapi({
    description:
      "<p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>",
    required: [],
  })
  .openapi('HPOObjective')

const HPOResourceSchema = z.string().max(256).openapi('HPOResource')

const HPOResourceConfigSchema = z
  .object({
    maxNumberOfTrainingJobs: HPOResourceSchema.exactOptional().openapi({
      description:
        'The maximum number of training jobs when you create a solution version. The maximum value for <code>maxNumberOfTrainingJobs</code> is <code>40</code>.',
    }),
    maxParallelTrainingJobs: HPOResourceSchema.exactOptional().openapi({
      description:
        'The maximum number of parallel training jobs when you create a solution version. The maximum value for <code>maxParallelTrainingJobs</code> is <code>10</code>.',
    }),
  })
  .openapi({
    description: 'Describes the resource configuration for hyperparameter optimization (HPO).',
    required: [],
  })
  .openapi('HPOResourceConfig')

const ParameterNameSchema = z.string().max(256).openapi('ParameterName')

const IntegerMinValueSchema = z.int().min(-1000000).openapi('IntegerMinValue')

const IntegerMaxValueSchema = z.int().max(1000000).openapi('IntegerMaxValue')

const IntegerHyperParameterRangeSchema = z
  .object({
    name: ParameterNameSchema.exactOptional().openapi({
      description: 'The name of the hyperparameter.',
    }),
    minValue: IntegerMinValueSchema.exactOptional().openapi({
      description: 'The minimum allowable value for the hyperparameter.',
    }),
    maxValue: IntegerMaxValueSchema.exactOptional().openapi({
      description: 'The maximum allowable value for the hyperparameter.',
    }),
  })
  .openapi({
    description: 'Provides the name and range of an integer-valued hyperparameter.',
    required: [],
  })
  .openapi('IntegerHyperParameterRange')

const IntegerHyperParameterRangesSchema = z
  .array(IntegerHyperParameterRangeSchema)
  .max(100)
  .openapi('IntegerHyperParameterRanges')

const ContinuousMinValueSchema = z.float64().min(-1000000).openapi('ContinuousMinValue')

const ContinuousMaxValueSchema = z.float64().min(-1000000).openapi('ContinuousMaxValue')

const ContinuousHyperParameterRangeSchema = z
  .object({
    name: ParameterNameSchema.exactOptional().openapi({
      description: 'The name of the hyperparameter.',
    }),
    minValue: ContinuousMinValueSchema.exactOptional().openapi({
      description: 'The minimum allowable value for the hyperparameter.',
    }),
    maxValue: ContinuousMaxValueSchema.exactOptional().openapi({
      description: 'The maximum allowable value for the hyperparameter.',
    }),
  })
  .openapi({
    description: 'Provides the name and range of a continuous hyperparameter.',
    required: [],
  })
  .openapi('ContinuousHyperParameterRange')

const ContinuousHyperParameterRangesSchema = z
  .array(ContinuousHyperParameterRangeSchema)
  .max(100)
  .openapi('ContinuousHyperParameterRanges')

const CategoricalValueSchema = z.string().max(1000).openapi('CategoricalValue')

const CategoricalValuesSchema = z
  .array(CategoricalValueSchema)
  .max(100)
  .openapi('CategoricalValues')

const CategoricalHyperParameterRangeSchema = z
  .object({
    name: ParameterNameSchema.exactOptional().openapi({
      description: 'The name of the hyperparameter.',
    }),
    values: CategoricalValuesSchema.exactOptional().openapi({
      description: 'A list of the categories for the hyperparameter.',
    }),
  })
  .openapi({
    description: 'Provides the name and range of a categorical hyperparameter.',
    required: [],
  })
  .openapi('CategoricalHyperParameterRange')

const CategoricalHyperParameterRangesSchema = z
  .array(CategoricalHyperParameterRangeSchema)
  .max(100)
  .openapi('CategoricalHyperParameterRanges')

const HyperParameterRangesSchema = z
  .object({
    integerHyperParameterRanges: IntegerHyperParameterRangesSchema.exactOptional().openapi({
      description: 'The integer-valued hyperparameters and their ranges.',
    }),
    continuousHyperParameterRanges: ContinuousHyperParameterRangesSchema.exactOptional().openapi({
      description: 'The continuous hyperparameters and their ranges.',
    }),
    categoricalHyperParameterRanges: CategoricalHyperParameterRangesSchema.exactOptional().openapi({
      description: 'The categorical hyperparameters and their ranges.',
    }),
  })
  .openapi({
    description:
      'Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.',
    required: [],
  })
  .openapi('HyperParameterRanges')

const HPOConfigSchema = z
  .object({
    hpoObjective: HPOObjectiveSchema.exactOptional().openapi({
      description:
        "<p>The metric to optimize during HPO.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>",
    }),
    hpoResourceConfig: HPOResourceConfigSchema.exactOptional().openapi({
      description: 'Describes the resource configuration for HPO.',
    }),
    algorithmHyperParameterRanges: HyperParameterRangesSchema.exactOptional().openapi({
      description: 'The hyperparameters and their allowable ranges.',
    }),
  })
  .openapi({
    description: 'Describes the properties for hyperparameter optimization (HPO).',
    required: [],
  })
  .openapi('HPOConfig')

const ParameterValueSchema = z.string().max(1000).openapi('ParameterValue')

const HyperParametersSchema = z
  .record(z.string(), ParameterValueSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('HyperParameters')

const FeatureTransformationParametersSchema = z
  .record(z.string(), ParameterValueSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('FeatureTransformationParameters')

const ArnListSchema = z.array(ArnSchema).max(100).openapi('ArnList')

const AutoMLConfigSchema = z
  .object({
    metricName: MetricNameSchema.exactOptional().openapi({
      description: 'The metric to optimize.',
    }),
    recipeList: ArnListSchema.exactOptional().openapi({
      description: 'The list of candidate recipes.',
    }),
  })
  .openapi({
    description:
      'When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.',
    required: [],
  })
  .openapi('AutoMLConfig')

const ItemAttributeSchema = z.string().min(1).max(150).openapi('ItemAttribute')

const ObjectiveSensitivitySchema = z
  .enum(['LOW', 'MEDIUM', 'HIGH', 'OFF'])
  .openapi('ObjectiveSensitivity')

const OptimizationObjectiveSchema = z
  .object({
    itemAttribute: ItemAttributeSchema.exactOptional().openapi({
      description:
        'The numerical metadata column in an Items dataset related to the optimization objective. For example, VIDEO_LENGTH (to maximize streaming minutes), or PRICE (to maximize revenue).',
    }),
    objectiveSensitivity: ObjectiveSensitivitySchema.exactOptional().openapi({
      description:
        'Specifies how Amazon Personalize balances the importance of your optimization objective versus relevance.',
    }),
  })
  .openapi({
    description:
      'Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.',
    required: [],
  })
  .openapi('OptimizationObjective')

const SolutionConfigSchema = z
  .object({
    eventValueThreshold: EventValueThresholdSchema.exactOptional().openapi({
      description:
        'Only events with a value greater than or equal to this threshold are used for training a model.',
    }),
    hpoConfig: HPOConfigSchema.exactOptional().openapi({
      description: 'Describes the properties for hyperparameter optimization (HPO).',
    }),
    algorithmHyperParameters: HyperParametersSchema.exactOptional().openapi({
      description: 'Lists the hyperparameter names and ranges.',
    }),
    featureTransformationParameters: FeatureTransformationParametersSchema.exactOptional().openapi({
      description: 'Lists the feature transformation parameters.',
    }),
    autoMLConfig: AutoMLConfigSchema.exactOptional().openapi({
      description:
        'The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html">AutoMLConfig</a> object containing a list of recipes to search when AutoML is performed.',
    }),
    optimizationObjective: OptimizationObjectiveSchema.exactOptional().openapi({
      description:
        'Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.',
    }),
  })
  .openapi({
    description: 'Describes the configuration properties for the solution.',
    required: [],
  })
  .openapi('SolutionConfig')

const AutoMLResultSchema = z
  .object({
    bestRecipeArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the best recipe.',
    }),
  })
  .openapi({
    description:
      'When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), specifies the recipe that best optimized the specified metric.',
    required: [],
  })
  .openapi('AutoMLResult')

const StatusSchema = z.string().max(256).openapi('Status')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const FailureReasonSchema = z.string().openapi('FailureReason')

const SolutionVersionSummarySchema = z
  .object({
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the solution version.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the solution version.</p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that this version of a solution was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the solution version was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a solution version fails, the reason behind the failure.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a solution version. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> API.',
    required: [],
  })
  .openapi('SolutionVersionSummary')

const SolutionSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the solution.' }),
    solutionArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the solution.' }),
    performHPO: PerformHPOSchema.exactOptional().openapi({
      description:
        'Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is <code>false</code>.',
    }),
    performAutoML: PerformAutoMLSchema.exactOptional().openapi({
      description:
        'When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from the list specified in the solution configuration (<code>recipeArn</code> must not be specified). When false (the default), Amazon Personalize uses <code>recipeArn</code> for training.',
    }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the recipe used to create the solution.',
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset group that provides the training data.',
    }),
    eventType: EventTypeSchema.exactOptional().openapi({
      description:
        "The event type (for example, 'click' or 'like') that is used for training the model. If no <code>eventType</code> is provided, Amazon Personalize uses all interactions for training with equal weight regardless of type.",
    }),
    solutionConfig: SolutionConfigSchema.exactOptional().openapi({
      description: 'Describes the configuration properties for the solution.',
    }),
    autoMLResult: AutoMLResultSchema.exactOptional().openapi({
      description: 'When <code>performAutoML</code> is true, specifies the best recipe found.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the solution.</p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The creation date and time (in Unix time) of the solution.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the solution was last updated.',
    }),
    latestSolutionVersion: SolutionVersionSummarySchema.exactOptional().openapi({
      description:
        'Describes the latest version of the solution, including the status and the ARN.',
    }),
  })
  .openapi({
    description:
      'An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.',
    required: [],
  })
  .openapi('Solution')

type DescribeSolutionResponseType = { solution?: z.infer<typeof SolutionSchema> }

const TrainingHoursSchema = z.float64().min(0).openapi('TrainingHours')

const TrainingModeSchema = z.enum(['FULL', 'UPDATE']).openapi('TrainingMode')

const TunedHPOParamsSchema = z
  .object({
    algorithmHyperParameters: HyperParametersSchema.exactOptional().openapi({
      description: 'A list of the hyperparameter values of the best performing model.',
    }),
  })
  .openapi({
    description:
      'If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.',
    required: [],
  })
  .openapi('TunedHPOParams')

const SolutionVersionSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the solution version.' }),
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the solution version.',
    }),
    solutionArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the solution.' }),
    performHPO: PerformHPOSchema.exactOptional().openapi({
      description:
        'Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is <code>false</code>.',
    }),
    performAutoML: PerformAutoMLSchema.exactOptional().openapi({
      description:
        'When true, Amazon Personalize searches for the most optimal recipe according to the solution configuration. When false (the default), Amazon Personalize uses <code>recipeArn</code>.',
    }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the recipe used in the solution.',
    }),
    eventType: EventTypeSchema.exactOptional().openapi({
      description:
        "The event type (for example, 'click' or 'like') that is used for training the model.",
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset group providing the training data.',
    }),
    solutionConfig: SolutionConfigSchema.exactOptional().openapi({
      description: 'Describes the configuration properties for the solution.',
    }),
    trainingHours: TrainingHoursSchema.exactOptional().openapi({
      description:
        'The time used to train the model. You are billed for the time it takes to train a model. This field is visible only after Amazon Personalize successfully trains a model.',
    }),
    trainingMode: TrainingModeSchema.exactOptional().openapi({
      description:
        '<p>The scope of training to be performed when creating the solution version. The <code>FULL</code> option trains the solution version based on the entirety of the input solution\'s training data, while the <code>UPDATE</code> option processes only the data that has changed in comparison to the input solution. Choose <code>UPDATE</code> when you want to incrementally update your solution version instead of creating an entirely new one.</p> <important> <p>The <code>UPDATE</code> option can only be used when you already have an active solution version created from the input solution using the <code>FULL</code> option and the input solution was trained with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a> recipe or the <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html">HRNN-Coldstart</a> recipe.</p> </important>',
    }),
    tunedHPOParams: TunedHPOParamsSchema.exactOptional().openapi({
      description:
        'If hyperparameter optimization was performed, contains the hyperparameter values of the best performing model.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the solution version.</p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul>',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If training a solution version fails, the reason for the failure.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description:
        'The date and time (in Unix time) that this version of the solution was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the solution was last updated.',
    }),
  })
  .openapi({
    description:
      'An object that provides information about a specific version of a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html">Solution</a> in a Custom dataset group.',
    required: [],
  })
  .openapi('SolutionVersion')

type DescribeSolutionVersionResponseType = {
  solutionVersion?: z.infer<typeof SolutionVersionSchema>
}

const CreateBatchInferenceJobResponseSchema = z
  .object({
    batchInferenceJobArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the batch inference job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBatchInferenceJobResponse')

const NumBatchResultsSchema = z.int().openapi('NumBatchResults')

const S3LocationSchema = z
  .string()
  .regex(/(s3|http|https):\/\/.+/)
  .max(256)
  .openapi('S3Location')

const KmsKeyArnSchema = z
  .string()
  .regex(/arn:aws.*:kms:.*:[0-9]{12}:key\/.*/)
  .max(2048)
  .openapi('KmsKeyArn')

const S3DataConfigSchema = z
  .object({
    path: S3LocationSchema.openapi({ description: 'The file path of the Amazon S3 bucket.' }),
    kmsKeyArn: KmsKeyArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the Key Management Service (KMS) key that Amazon Personalize uses to encrypt or decrypt the input and output files.',
    }),
  })
  .openapi({
    required: ['path'],
    description: 'The configuration details of an Amazon S3 input or output bucket.',
  })
  .openapi('S3DataConfig')

const BatchInferenceJobInputSchema = z
  .object({
    s3DataSource: S3DataConfigSchema.openapi({
      description:
        'The URI of the Amazon S3 location that contains your input data. The Amazon S3 bucket must be in the same region as the API endpoint you are calling.',
    }),
  })
  .openapi({
    required: ['s3DataSource'],
    description: 'The input configuration of a batch inference job.',
  })
  .openapi('BatchInferenceJobInput')

const BatchInferenceJobOutputSchema = z
  .object({
    s3DataDestination: S3DataConfigSchema.openapi({
      description:
        "Information on the Amazon S3 bucket in which the batch inference job's output is stored.",
    }),
  })
  .openapi({
    required: ['s3DataDestination'],
    description: 'The output configuration parameters of a batch inference job.',
  })
  .openapi('BatchInferenceJobOutput')

const RoleArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
  .max(256)
  .openapi('RoleArn')

const BatchInferenceJobConfigSchema = z
  .object({
    itemExplorationConfig: HyperParametersSchema.exactOptional().openapi({
      description:
        'A string to string map specifying the exploration configuration hyperparameters, including <code>explorationWeight</code> and <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when recommending items. See <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>.',
    }),
  })
  .openapi({ description: 'The configuration details of a batch inference job.', required: [] })
  .openapi('BatchInferenceJobConfig')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    tagKey: TagKeySchema.openapi({
      description:
        'One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.',
    }),
    tagValue: TagValueSchema.openapi({
      description:
        'The optional part of a key-value pair that makes up a tag. A value acts as a descriptor within a tag category (key).',
    }),
  })
  .openapi({
    required: ['tagKey', 'tagValue'],
    description:
      'The optional metadata that you apply to resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">Tagging Personalize resources</a>. ',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).min(0).max(200).openapi('Tags')

const CreateBatchInferenceJobRequestSchema = z
  .object({
    jobName: NameSchema.openapi({ description: 'The name of the batch inference job to create.' }),
    solutionVersionArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version that will be used to generate the batch inference recommendations.',
    }),
    filterArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the filter to apply to the batch inference job. For more information on using filters, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering batch recommendations</a>.',
    }),
    numResults: NumBatchResultsSchema.exactOptional().openapi({
      description: 'The number of recommendations to retrieve.',
    }),
    jobInput: BatchInferenceJobInputSchema.openapi({
      description:
        'The Amazon S3 path that leads to the input file to base your recommendations on. The input material must be in JSON format.',
    }),
    jobOutput: BatchInferenceJobOutputSchema.openapi({
      description: "The path to the Amazon S3 bucket where the job's output will be stored.",
    }),
    roleArn: RoleArnSchema.openapi({
      description:
        'The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output Amazon S3 buckets respectively.',
    }),
    batchInferenceJobConfig: BatchInferenceJobConfigSchema.exactOptional().openapi({
      description: 'The configuration details of a batch inference job.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the batch inference job.',
    }),
  })
  .openapi({
    required: ['jobName', 'solutionVersionArn', 'jobInput', 'jobOutput', 'roleArn'],
    title: 'CreateBatchInferenceJobRequest',
  })
  .openapi('CreateBatchInferenceJobRequest')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const CreateBatchSegmentJobResponseSchema = z
  .object({
    batchSegmentJobArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the batch segment job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBatchSegmentJobResponse')

const BatchSegmentJobInputSchema = z
  .object({ s3DataSource: S3DataConfigSchema })
  .openapi({
    required: ['s3DataSource'],
    description: 'The input configuration of a batch segment job.',
  })
  .openapi('BatchSegmentJobInput')

const BatchSegmentJobOutputSchema = z
  .object({ s3DataDestination: S3DataConfigSchema })
  .openapi({
    required: ['s3DataDestination'],
    description: 'The output configuration parameters of a batch segment job.',
  })
  .openapi('BatchSegmentJobOutput')

const CreateBatchSegmentJobRequestSchema = z
  .object({
    jobName: NameSchema.openapi({ description: 'The name of the batch segment job to create.' }),
    solutionVersionArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version you want the batch segment job to use to generate batch segments.',
    }),
    filterArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the filter to apply to the batch segment job. For more information on using filters, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering batch recommendations</a>.',
    }),
    numResults: NumBatchResultsSchema.exactOptional().openapi({
      description:
        'The number of predicted users generated by the batch segment job for each line of input data.',
    }),
    jobInput: BatchSegmentJobInputSchema.openapi({
      description: 'The Amazon S3 path for the input data used to generate the batch segment job.',
    }),
    jobOutput: BatchSegmentJobOutputSchema.openapi({
      description: "The Amazon S3 path for the bucket where the job's output will be stored.",
    }),
    roleArn: RoleArnSchema.openapi({
      description:
        'The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output Amazon S3 buckets respectively.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the batch segment job.',
    }),
  })
  .openapi({
    required: ['jobName', 'solutionVersionArn', 'jobInput', 'jobOutput', 'roleArn'],
    title: 'CreateBatchSegmentJobRequest',
  })
  .openapi('CreateBatchSegmentJobRequest')

const CreateCampaignResponseSchema = z
  .object({
    campaignArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the campaign.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateCampaignResponse')

const TransactionsPerSecondSchema = z.int().min(1).openapi('TransactionsPerSecond')

const CampaignConfigSchema = z
  .object({
    itemExplorationConfig: HyperParametersSchema.exactOptional().openapi({
      description:
        'Specifies the exploration configuration hyperparameters, including <code>explorationWeight</code> and <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when recommending items. Provide <code>itemExplorationConfig</code> data only if your solution uses the <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a> recipe.',
    }),
  })
  .openapi({ description: 'The configuration details of a campaign.', required: [] })
  .openapi('CampaignConfig')

const CreateCampaignRequestSchema = z
  .object({
    name: NameSchema.openapi({
      description:
        'A name for the new campaign. The campaign name must be unique within your account.',
    }),
    solutionVersionArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the solution version to deploy.',
    }),
    minProvisionedTPS: TransactionsPerSecondSchema.exactOptional().openapi({
      description:
        'Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support.',
    }),
    campaignConfig: CampaignConfigSchema.exactOptional().openapi({
      description: 'The configuration details of a campaign.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the campaign.',
    }),
  })
  .openapi({ required: ['name', 'solutionVersionArn'], title: 'CreateCampaignRequest' })
  .openapi('CreateCampaignRequest')

const CreateDatasetResponseSchema = z
  .object({
    datasetArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the dataset.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetResponse')

const DatasetTypeSchema = z.string().max(256).openapi('DatasetType')

const CreateDatasetRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name for the dataset.' }),
    schemaArn: ArnSchema.openapi({
      description:
        'The ARN of the schema to associate with the dataset. The schema defines the dataset fields.',
    }),
    datasetGroupArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset group to add the dataset to.',
    }),
    datasetType: DatasetTypeSchema.openapi({
      description:
        '<p>The type of dataset.</p> <p>One of the following (case insensitive) values:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul>',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset.',
    }),
  })
  .openapi({
    required: ['name', 'schemaArn', 'datasetGroupArn', 'datasetType'],
    title: 'CreateDatasetRequest',
  })
  .openapi('CreateDatasetRequest')

const CreateDatasetExportJobResponseSchema = z
  .object({
    datasetExportJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset export job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetExportJobResponse')

const IngestionModeSchema = z.enum(['BULK', 'PUT', 'ALL']).openapi('IngestionMode')

const DatasetExportJobOutputSchema = z
  .object({ s3DataDestination: S3DataConfigSchema })
  .openapi({
    required: ['s3DataDestination'],
    description: 'The output configuration parameters of a dataset export job.',
  })
  .openapi('DatasetExportJobOutput')

const CreateDatasetExportJobRequestSchema = z
  .object({
    jobName: NameSchema.openapi({ description: 'The name for the dataset export job.' }),
    datasetArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset that contains the data to export.',
    }),
    ingestionMode: IngestionModeSchema.exactOptional().openapi({
      description:
        'The data to export, based on how you imported the data. You can choose to export only <code>BULK</code> data that you imported using a dataset import job, only <code>PUT</code> data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code> for both types. The default value is <code>PUT</code>. ',
    }),
    roleArn: RoleArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket.',
    }),
    jobOutput: DatasetExportJobOutputSchema.openapi({
      description: "The path to the Amazon S3 bucket where the job's output is stored.",
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset export job.',
    }),
  })
  .openapi({
    required: ['jobName', 'datasetArn', 'roleArn', 'jobOutput'],
    title: 'CreateDatasetExportJobRequest',
  })
  .openapi('CreateDatasetExportJobRequest')

const DomainSchema = z.enum(['ECOMMERCE', 'VIDEO_ON_DEMAND']).openapi('Domain')

const CreateDatasetGroupResponseSchema = z
  .object({
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the new dataset group.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description: 'The domain for the new Domain dataset group.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetGroupResponse')

const CreateDatasetGroupRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name for the new dataset group.' }),
    roleArn: RoleArnSchema.exactOptional().openapi({
      description:
        'The ARN of the Identity and Access Management (IAM) role that has permissions to access the Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.',
    }),
    kmsKeyArn: KmsKeyArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of a Key Management Service (KMS) key used to encrypt the datasets.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description:
        "The domain of the dataset group. Specify a domain to create a Domain dataset group. The domain you specify determines the default schemas for datasets and the use cases available for recommenders. If you don't specify a domain, you create a Custom dataset group with solution versions that you deploy with a campaign. ",
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset group.',
    }),
  })
  .openapi({ required: ['name'], title: 'CreateDatasetGroupRequest' })
  .openapi('CreateDatasetGroupRequest')

const CreateDatasetImportJobResponseSchema = z
  .object({
    datasetImportJobArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the dataset import job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetImportJobResponse')

const DataSourceSchema = z
  .object({
    dataLocation: S3LocationSchema.exactOptional().openapi({
      description:
        '<p>The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. For example: </p> <p> <code>s3://bucket-name/folder-name/</code> </p>',
    }),
  })
  .openapi({
    description: 'Describes the data source that contains the data to upload to a dataset.',
    required: [],
  })
  .openapi('DataSource')

const ImportModeSchema = z.enum(['FULL', 'INCREMENTAL']).openapi('ImportMode')

const BooleanSchema = z.boolean().openapi('Boolean')

const CreateDatasetImportJobRequestSchema = z
  .object({
    jobName: NameSchema.openapi({ description: 'The name for the dataset import job.' }),
    datasetArn: ArnSchema.openapi({
      description: 'The ARN of the dataset that receives the imported data.',
    }),
    dataSource: DataSourceSchema.openapi({
      description: 'The Amazon S3 bucket that contains the training data to import.',
    }),
    roleArn: RoleArnSchema.openapi({
      description:
        'The ARN of the IAM role that has permissions to read from the Amazon S3 data source.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset import job.',
    }),
    importMode: ImportModeSchema.exactOptional().openapi({
      description:
        "<p>Specify how to add the new records to an existing dataset. The default import mode is <code>FULL</code>. If you haven't imported bulk records into the dataset previously, you can only specify <code>FULL</code>.</p> <ul> <li> <p>Specify <code>FULL</code> to overwrite all existing bulk data in your dataset. Data you imported individually is not replaced.</p> </li> <li> <p>Specify <code>INCREMENTAL</code> to append the new records to the existing data in your dataset. Amazon Personalize replaces any record with the same ID with the new one.</p> </li> </ul>",
    }),
    publishAttributionMetricsToS3: BooleanSchema.exactOptional().openapi({
      description:
        'If you created a metric attribution, specify whether to publish metrics for this import job to Amazon S3',
    }),
  })
  .openapi({
    required: ['jobName', 'datasetArn', 'dataSource', 'roleArn'],
    title: 'CreateDatasetImportJobRequest',
  })
  .openapi('CreateDatasetImportJobRequest')

const TrackingIdSchema = z.string().max(256).openapi('TrackingId')

const CreateEventTrackerResponseSchema = z
  .object({
    eventTrackerArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the event tracker.',
    }),
    trackingId: TrackingIdSchema.exactOptional().openapi({
      description:
        'The ID of the event tracker. Include this ID in requests to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateEventTrackerResponse')

const CreateEventTrackerRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name for the event tracker.' }),
    datasetGroupArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset group that receives the event data.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the event tracker.',
    }),
  })
  .openapi({ required: ['name', 'datasetGroupArn'], title: 'CreateEventTrackerRequest' })
  .openapi('CreateEventTrackerRequest')

const CreateFilterResponseSchema = z
  .object({
    filterArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the new filter.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateFilterResponse')

const FilterExpressionSchema = z.string().min(1).max(2500).openapi('FilterExpression')

const CreateFilterRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name of the filter to create.' }),
    datasetGroupArn: ArnSchema.openapi({
      description: 'The ARN of the dataset group that the filter will belong to.',
    }),
    filterExpression: FilterExpressionSchema.openapi({
      description:
        'The filter expression defines which items are included or excluded from recommendations. Filter expression must follow specific format rules. For information about filter expression structure and syntax, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html">Filter expressions</a>.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the filter.',
    }),
  })
  .openapi({
    required: ['name', 'datasetGroupArn', 'filterExpression'],
    title: 'CreateFilterRequest',
  })
  .openapi('CreateFilterRequest')

const CreateMetricAttributionResponseSchema = z
  .object({
    metricAttributionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) for the new metric attribution.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateMetricAttributionResponse')

const MetricExpressionSchema = z.string().max(256).openapi('MetricExpression')

const MetricAttributeSchema = z
  .object({
    eventType: EventTypeSchema.openapi({ description: "The metric's event type." }),
    metricName: MetricNameSchema.openapi({
      description:
        "The metric's name. The name helps you identify the metric in Amazon CloudWatch or Amazon S3.",
    }),
    expression: MetricExpressionSchema.openapi({
      description:
        "The attribute's expression. Available functions are <code>SUM()</code> or <code>SAMPLECOUNT()</code>. For SUM() functions, provide the dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).",
    }),
  })
  .openapi({
    required: ['eventType', 'metricName', 'expression'],
    description:
      'Contains information on a metric that a metric attribution reports on. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.',
  })
  .openapi('MetricAttribute')

const MetricAttributesSchema = z.array(MetricAttributeSchema).max(10).openapi('MetricAttributes')

const MetricAttributionOutputSchema = z
  .object({
    s3DataDestination: S3DataConfigSchema.exactOptional(),
    roleArn: RoleArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket and add metrics to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.',
    }),
  })
  .openapi({
    required: ['roleArn'],
    description: 'The output configuration details for a metric attribution.',
  })
  .openapi('MetricAttributionOutput')

const CreateMetricAttributionRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'A name for the metric attribution.' }),
    datasetGroupArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the destination dataset group for the metric attribution.',
    }),
    metrics: MetricAttributesSchema.openapi({
      description:
        'A list of metric attributes for the metric attribution. Each metric attribute specifies an event type to track and a function. Available functions are <code>SUM()</code> or <code>SAMPLECOUNT()</code>. For SUM() functions, provide the dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).',
    }),
    metricsOutputConfig: MetricAttributionOutputSchema.openapi({
      description: 'The output configuration details for the metric attribution.',
    }),
  })
  .openapi({
    required: ['name', 'datasetGroupArn', 'metrics', 'metricsOutputConfig'],
    title: 'CreateMetricAttributionRequest',
  })
  .openapi('CreateMetricAttributionRequest')

const CreateRecommenderResponseSchema = z
  .object({
    recommenderArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateRecommenderResponse')

const RecommenderConfigSchema = z
  .object({
    itemExplorationConfig: HyperParametersSchema.exactOptional().openapi({
      description:
        'Specifies the exploration configuration hyperparameters, including <code>explorationWeight</code> and <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when recommending items. Provide <code>itemExplorationConfig</code> data only if your recommenders generate personalized recommendations for a user (not popular items or similar items).',
    }),
    minRecommendationRequestsPerSecond: TransactionsPerSecondSchema.exactOptional().openapi({
      description:
        'Specifies the requested minimum provisioned recommendation requests per second that Amazon Personalize will support.',
    }),
  })
  .openapi({ description: 'The configuration details of the recommender.', required: [] })
  .openapi('RecommenderConfig')

const CreateRecommenderRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name of the recommender.' }),
    datasetGroupArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the destination domain dataset group for the recommender.',
    }),
    recipeArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the recipe that the recommender will use. For a recommender, a recipe is a Domain dataset group use case. Only Domain dataset group use cases can be used to create a recommender. For information about use cases see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. ',
    }),
    recommenderConfig: RecommenderConfigSchema.exactOptional().openapi({
      description: 'The configuration details of the recommender.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the recommender.',
    }),
  })
  .openapi({
    required: ['name', 'datasetGroupArn', 'recipeArn'],
    title: 'CreateRecommenderRequest',
  })
  .openapi('CreateRecommenderRequest')

const CreateSchemaResponseSchema = z
  .object({
    schemaArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the created schema.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSchemaResponse')

const AvroSchemaSchema = z.string().max(10000).openapi('AvroSchema')

const CreateSchemaRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name for the schema.' }),
    schema: AvroSchemaSchema.openapi({ description: 'A schema in Avro JSON format.' }),
    domain: DomainSchema.exactOptional().openapi({
      description:
        'The domain for the schema. If you are creating a schema for a dataset in a Domain dataset group, specify the domain you chose when you created the Domain dataset group.',
    }),
  })
  .openapi({ required: ['name', 'schema'], title: 'CreateSchemaRequest' })
  .openapi('CreateSchemaRequest')

const CreateSolutionResponseSchema = z
  .object({
    solutionArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the solution.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateSolutionResponse')

const CreateSolutionRequestSchema = z
  .object({
    name: NameSchema.openapi({ description: 'The name for the solution.' }),
    performHPO: BooleanSchema.exactOptional().openapi({
      description:
        '<p>Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is <code>false</code>.</p> <p>When performing AutoML, this parameter is always <code>true</code> and you should not set it to <code>false</code>.</p>',
    }),
    performAutoML: PerformAutoMLSchema.exactOptional().openapi({
      description:
        '<p>Whether to perform automated machine learning (AutoML). The default is <code>false</code>. For this case, you must specify <code>recipeArn</code>.</p> <p>When set to <code>true</code>, Amazon Personalize analyzes your training data and selects the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit <code>recipeArn</code>. Amazon Personalize determines the optimal recipe by running tests with different values for the hyperparameters. AutoML lengthens the training process as compared to selecting a specific recipe.</p>',
    }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the recipe to use for model training. Only specified when <code>performAutoML</code> is false.',
    }),
    datasetGroupArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset group that provides the training data.',
    }),
    eventType: EventTypeSchema.exactOptional().openapi({
      description:
        "<p>When your have multiple event types (using an <code>EVENT_TYPE</code> schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model.</p> <p>If you do not provide an <code>eventType</code>, Amazon Personalize will use all interactions for training with equal weight regardless of type.</p>",
    }),
    solutionConfig: SolutionConfigSchema.exactOptional().openapi({
      description:
        "<p>The configuration to use with the solution. When <code>performAutoML</code> is set to true, Amazon Personalize only evaluates the <code>autoMLConfig</code> section of the solution configuration.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>",
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the solution.',
    }),
  })
  .openapi({ required: ['name', 'datasetGroupArn'], title: 'CreateSolutionRequest' })
  .openapi('CreateSolutionRequest')

const CreateSolutionVersionResponseSchema = z
  .object({
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the new solution version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSolutionVersionResponse')

const CreateSolutionVersionRequestSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the solution version.' }),
    solutionArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution containing the training configuration information.',
    }),
    trainingMode: TrainingModeSchema.exactOptional().openapi({
      description:
        '<p>The scope of training to be performed when creating the solution version. The <code>FULL</code> option trains the solution version based on the entirety of the input solution\'s training data, while the <code>UPDATE</code> option processes only the data that has changed in comparison to the input solution. Choose <code>UPDATE</code> when you want to incrementally update your solution version instead of creating an entirely new one.</p> <important> <p>The <code>UPDATE</code> option can only be used when you already have an active solution version created from the input solution using the <code>FULL</code> option and the input solution was trained with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a> recipe or the <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html">HRNN-Coldstart</a> recipe.</p> </important>',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description:
        'A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the solution version.',
    }),
  })
  .openapi({ required: ['solutionArn'], title: 'CreateSolutionVersionRequest' })
  .openapi('CreateSolutionVersionRequest')

const DeleteCampaignRequestSchema = z
  .object({
    campaignArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the campaign to delete.',
    }),
  })
  .openapi({ required: ['campaignArn'], title: 'DeleteCampaignRequest' })
  .openapi('DeleteCampaignRequest')

const DeleteDatasetRequestSchema = z
  .object({
    datasetArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset to delete.',
    }),
  })
  .openapi({ required: ['datasetArn'], title: 'DeleteDatasetRequest' })
  .openapi('DeleteDatasetRequest')

const DeleteDatasetGroupRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.openapi({ description: 'The ARN of the dataset group to delete.' }),
  })
  .openapi({ required: ['datasetGroupArn'], title: 'DeleteDatasetGroupRequest' })
  .openapi('DeleteDatasetGroupRequest')

const DeleteEventTrackerRequestSchema = z
  .object({
    eventTrackerArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the event tracker to delete.',
    }),
  })
  .openapi({ required: ['eventTrackerArn'], title: 'DeleteEventTrackerRequest' })
  .openapi('DeleteEventTrackerRequest')

const DeleteFilterRequestSchema = z
  .object({ filterArn: ArnSchema.openapi({ description: 'The ARN of the filter to delete.' }) })
  .openapi({ required: ['filterArn'], title: 'DeleteFilterRequest' })
  .openapi('DeleteFilterRequest')

const DeleteMetricAttributionRequestSchema = z
  .object({
    metricAttributionArn: ArnSchema.openapi({
      description: "The metric attribution's Amazon Resource Name (ARN).",
    }),
  })
  .openapi({ required: ['metricAttributionArn'], title: 'DeleteMetricAttributionRequest' })
  .openapi('DeleteMetricAttributionRequest')

const DeleteRecommenderRequestSchema = z
  .object({
    recommenderArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender to delete.',
    }),
  })
  .openapi({ required: ['recommenderArn'], title: 'DeleteRecommenderRequest' })
  .openapi('DeleteRecommenderRequest')

const DeleteSchemaRequestSchema = z
  .object({
    schemaArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the schema to delete.',
    }),
  })
  .openapi({ required: ['schemaArn'], title: 'DeleteSchemaRequest' })
  .openapi('DeleteSchemaRequest')

const DeleteSolutionRequestSchema = z
  .object({ solutionArn: ArnSchema.openapi({ description: 'The ARN of the solution to delete.' }) })
  .openapi({ required: ['solutionArn'], title: 'DeleteSolutionRequest' })
  .openapi('DeleteSolutionRequest')

const DockerURISchema = z.string().max(256).openapi('DockerURI')

const AlgorithmImageSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the algorithm image.' }),
    dockerURI: DockerURISchema.openapi({
      description: 'The URI of the Docker container for the algorithm image.',
    }),
  })
  .openapi({ required: ['dockerURI'], description: 'Describes an algorithm image.' })
  .openapi('AlgorithmImage')

const TunableSchema = z.boolean().openapi('Tunable')

const DefaultIntegerHyperParameterRangeSchema = z
  .object({
    name: ParameterNameSchema.exactOptional().openapi({
      description: 'The name of the hyperparameter.',
    }),
    minValue: IntegerMinValueSchema.exactOptional().openapi({
      description: 'The minimum allowable value for the hyperparameter.',
    }),
    maxValue: IntegerMaxValueSchema.exactOptional().openapi({
      description: 'The maximum allowable value for the hyperparameter.',
    }),
    isTunable: TunableSchema.exactOptional().openapi({
      description: 'Indicates whether the hyperparameter is tunable.',
    }),
  })
  .openapi({
    description:
      'Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).',
    required: [],
  })
  .openapi('DefaultIntegerHyperParameterRange')

const DefaultIntegerHyperParameterRangesSchema = z
  .array(DefaultIntegerHyperParameterRangeSchema)
  .max(100)
  .openapi('DefaultIntegerHyperParameterRanges')

const DefaultContinuousHyperParameterRangeSchema = z
  .object({
    name: ParameterNameSchema.exactOptional().openapi({
      description: 'The name of the hyperparameter.',
    }),
    minValue: ContinuousMinValueSchema.exactOptional().openapi({
      description: 'The minimum allowable value for the hyperparameter.',
    }),
    maxValue: ContinuousMaxValueSchema.exactOptional().openapi({
      description: 'The maximum allowable value for the hyperparameter.',
    }),
    isTunable: TunableSchema.exactOptional().openapi({
      description: 'Whether the hyperparameter is tunable.',
    }),
  })
  .openapi({
    description:
      'Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).',
    required: [],
  })
  .openapi('DefaultContinuousHyperParameterRange')

const DefaultContinuousHyperParameterRangesSchema = z
  .array(DefaultContinuousHyperParameterRangeSchema)
  .max(100)
  .openapi('DefaultContinuousHyperParameterRanges')

const DefaultCategoricalHyperParameterRangeSchema = z
  .object({
    name: ParameterNameSchema.exactOptional().openapi({
      description: 'The name of the hyperparameter.',
    }),
    values: CategoricalValuesSchema.exactOptional().openapi({
      description: 'A list of the categories for the hyperparameter.',
    }),
    isTunable: TunableSchema.exactOptional().openapi({
      description: 'Whether the hyperparameter is tunable.',
    }),
  })
  .openapi({
    description:
      'Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).',
    required: [],
  })
  .openapi('DefaultCategoricalHyperParameterRange')

const DefaultCategoricalHyperParameterRangesSchema = z
  .array(DefaultCategoricalHyperParameterRangeSchema)
  .max(100)
  .openapi('DefaultCategoricalHyperParameterRanges')

const DefaultHyperParameterRangesSchema = z
  .object({
    integerHyperParameterRanges: DefaultIntegerHyperParameterRangesSchema.exactOptional().openapi({
      description: 'The integer-valued hyperparameters and their default ranges.',
    }),
    continuousHyperParameterRanges:
      DefaultContinuousHyperParameterRangesSchema.exactOptional().openapi({
        description: 'The continuous hyperparameters and their default ranges.',
      }),
    categoricalHyperParameterRanges:
      DefaultCategoricalHyperParameterRangesSchema.exactOptional().openapi({
        description: 'The categorical hyperparameters and their default ranges.',
      }),
  })
  .openapi({
    description:
      'Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.',
    required: [],
  })
  .openapi('DefaultHyperParameterRanges')

const ResourceConfigSchema = z
  .record(z.string(), ParameterValueSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('ResourceConfig')

const TrainingInputModeSchema = z.string().max(256).openapi('TrainingInputMode')

const AlgorithmSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the algorithm.' }),
    algorithmArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the algorithm.',
    }),
    algorithmImage: AlgorithmImageSchema.exactOptional().openapi({
      description: 'The URI of the Docker container for the algorithm image.',
    }),
    defaultHyperParameters: HyperParametersSchema.exactOptional().openapi({
      description: 'Specifies the default hyperparameters.',
    }),
    defaultHyperParameterRanges: DefaultHyperParameterRangesSchema.exactOptional().openapi({
      description:
        'Specifies the default hyperparameters, their ranges, and whether they are tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).',
    }),
    defaultResourceConfig: ResourceConfigSchema.exactOptional().openapi({
      description:
        'Specifies the default maximum number of training jobs and parallel training jobs.',
    }),
    trainingInputMode: TrainingInputModeSchema.exactOptional().openapi({
      description: 'The training input mode.',
    }),
    roleArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the role.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the algorithm was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the algorithm was last updated.',
    }),
  })
  .openapi({ description: 'Describes a custom algorithm.', required: [] })
  .openapi('Algorithm')

const DescribeAlgorithmResponseSchema = z
  .object({
    algorithm: AlgorithmSchema.exactOptional().openapi({
      description: 'A listing of the properties of the algorithm.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeAlgorithmResponse')

const DescribeAlgorithmRequestSchema = z
  .object({
    algorithmArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the algorithm to describe.',
    }),
  })
  .openapi({ required: ['algorithmArn'], title: 'DescribeAlgorithmRequest' })
  .openapi('DescribeAlgorithmRequest')

const BatchInferenceJobSchema = z
  .object({
    jobName: NameSchema.exactOptional().openapi({
      description: 'The name of the batch inference job.',
    }),
    batchInferenceJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the batch inference job.',
    }),
    filterArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the filter used on the batch inference job.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If the batch inference job failed, the reason for the failure.',
    }),
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version from which the batch inference job was created.',
    }),
    numResults: NumBatchResultsSchema.exactOptional().openapi({
      description:
        'The number of recommendations generated by the batch inference job. This number includes the error messages generated for failed input records.',
    }),
    jobInput: BatchInferenceJobInputSchema.exactOptional().openapi({
      description:
        'The Amazon S3 path that leads to the input data used to generate the batch inference job.',
    }),
    jobOutput: BatchInferenceJobOutputSchema.exactOptional().openapi({
      description:
        'The Amazon S3 bucket that contains the output data generated by the batch inference job.',
    }),
    batchInferenceJobConfig: BatchInferenceJobConfigSchema.exactOptional().openapi({
      description: 'A string to string map of the configuration details of a batch inference job.',
    }),
    roleArn: RoleArnSchema.exactOptional().openapi({
      description:
        'The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch inference job.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the batch inference job. The status is one of the following values:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>IN PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch inference job was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch inference job was last updated.',
    }),
  })
  .openapi({ description: 'Contains information on a batch inference job.', required: [] })
  .openapi('BatchInferenceJob')

const DescribeBatchInferenceJobResponseSchema = z
  .object({
    batchInferenceJob: BatchInferenceJobSchema.exactOptional().openapi({
      description: 'Information on the specified batch inference job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeBatchInferenceJobResponse')

const DescribeBatchInferenceJobRequestSchema = z
  .object({
    batchInferenceJobArn: ArnSchema.openapi({
      description: 'The ARN of the batch inference job to describe.',
    }),
  })
  .openapi({ required: ['batchInferenceJobArn'], title: 'DescribeBatchInferenceJobRequest' })
  .openapi('DescribeBatchInferenceJobRequest')

const BatchSegmentJobSchema = z
  .object({
    jobName: NameSchema.exactOptional().openapi({
      description: 'The name of the batch segment job.',
    }),
    batchSegmentJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the batch segment job.',
    }),
    filterArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the filter used on the batch segment job.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If the batch segment job failed, the reason for the failure.',
    }),
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.',
    }),
    numResults: NumBatchResultsSchema.exactOptional().openapi({
      description:
        'The number of predicted users generated by the batch segment job for each line of input data.',
    }),
    jobInput: BatchSegmentJobInputSchema.exactOptional().openapi({
      description:
        'The Amazon S3 path that leads to the input data used to generate the batch segment job.',
    }),
    jobOutput: BatchSegmentJobOutputSchema.exactOptional().openapi({
      description:
        'The Amazon S3 bucket that contains the output data generated by the batch segment job.',
    }),
    roleArn: RoleArnSchema.exactOptional().openapi({
      description:
        'The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch segment job.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the batch segment job. The status is one of the following values:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>IN PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch segment job was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch segment job last updated.',
    }),
  })
  .openapi({ description: 'Contains information on a batch segment job.', required: [] })
  .openapi('BatchSegmentJob')

const DescribeBatchSegmentJobResponseSchema = z
  .object({
    batchSegmentJob: BatchSegmentJobSchema.exactOptional().openapi({
      description: 'Information on the specified batch segment job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeBatchSegmentJobResponse')

const DescribeBatchSegmentJobRequestSchema = z
  .object({
    batchSegmentJobArn: ArnSchema.openapi({
      description: 'The ARN of the batch segment job to describe.',
    }),
  })
  .openapi({ required: ['batchSegmentJobArn'], title: 'DescribeBatchSegmentJobRequest' })
  .openapi('DescribeBatchSegmentJobRequest')

const CampaignUpdateSummarySchema = z
  .object({
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the deployed solution version.',
    }),
    minProvisionedTPS: TransactionsPerSecondSchema.exactOptional().openapi({
      description:
        'Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support.',
    }),
    campaignConfig: CampaignConfigSchema.exactOptional(),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the campaign update.</p> <p>A campaign update can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a campaign update fails, the reason behind the failure.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the campaign update was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the campaign update was last updated.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.',
    required: [],
  })
  .openapi('CampaignUpdateSummary')

const CampaignSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the campaign.' }),
    campaignArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the campaign. ',
    }),
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of a specific version of the solution.',
    }),
    minProvisionedTPS: TransactionsPerSecondSchema.exactOptional().openapi({
      description:
        'Specifies the requested minimum provisioned transactions (recommendations) per second.',
    }),
    campaignConfig: CampaignConfigSchema.exactOptional().openapi({
      description: 'The configuration details of a campaign.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the campaign.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a campaign fails, the reason behind the failure.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the campaign was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the campaign was last updated.',
    }),
    latestCampaignUpdate: CampaignUpdateSummarySchema.exactOptional(),
  })
  .openapi({
    description:
      'An object that describes the deployment of a solution version. For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.',
    required: [],
  })
  .openapi('Campaign')

const DescribeCampaignResponseSchema = z
  .object({
    campaign: CampaignSchema.exactOptional().openapi({
      description: 'The properties of the campaign.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeCampaignResponse')

const DescribeCampaignRequestSchema = z
  .object({
    campaignArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the campaign.',
    }),
  })
  .openapi({ required: ['campaignArn'], title: 'DescribeCampaignRequest' })
  .openapi('DescribeCampaignRequest')

const DatasetSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the dataset.' }),
    datasetArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset that you want metadata for.',
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset group.',
    }),
    datasetType: DatasetTypeSchema.exactOptional().openapi({
      description:
        '<p>One of the following values:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul>',
    }),
    schemaArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the associated schema.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the dataset.</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The creation date and time (in Unix time) of the dataset.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'A time stamp that shows when the dataset was updated.',
    }),
  })
  .openapi({ description: 'Provides metadata for a dataset.', required: [] })
  .openapi('Dataset')

const DescribeDatasetResponseSchema = z
  .object({
    dataset: DatasetSchema.exactOptional().openapi({
      description: "A listing of the dataset's properties.",
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetResponse')

const DescribeDatasetRequestSchema = z
  .object({
    datasetArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset to describe.',
    }),
  })
  .openapi({ required: ['datasetArn'], title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const DatasetExportJobSchema = z
  .object({
    jobName: NameSchema.exactOptional().openapi({ description: 'The name of the export job.' }),
    datasetExportJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset export job.',
    }),
    datasetArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset to export.',
    }),
    ingestionMode: IngestionModeSchema.exactOptional().openapi({
      description:
        'The data to export, based on how you imported the data. You can choose to export <code>BULK</code> data that you imported using a dataset import job, <code>PUT</code> data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code> for both types. The default value is <code>PUT</code>. ',
    }),
    roleArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the dataset export job.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    }),
    jobOutput: DatasetExportJobOutputSchema.exactOptional().openapi({
      description:
        "<p>The path to the Amazon S3 bucket where the job's output is stored. For example:</p> <p> <code>s3://bucket-name/folder-name/</code> </p>",
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The creation date and time (in Unix time) of the dataset export job.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description:
        'The date and time (in Unix time) the status of the dataset export job was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a dataset export job fails, provides the reason why.',
    }),
  })
  .openapi({
    description:
      '<p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    required: [],
  })
  .openapi('DatasetExportJob')

const DescribeDatasetExportJobResponseSchema = z
  .object({
    datasetExportJob: DatasetExportJobSchema.exactOptional().openapi({
      description:
        '<p>Information about the dataset export job, including the status.</p> <p>The status is one of the following values:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> </ul>',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetExportJobResponse')

const DescribeDatasetExportJobRequestSchema = z
  .object({
    datasetExportJobArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset export job to describe.',
    }),
  })
  .openapi({ required: ['datasetExportJobArn'], title: 'DescribeDatasetExportJobRequest' })
  .openapi('DescribeDatasetExportJobRequest')

const DatasetGroupSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the dataset group.' }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset group.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The current status of the dataset group.</p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul>',
    }),
    roleArn: RoleArnSchema.exactOptional().openapi({
      description: 'The ARN of the IAM role that has permissions to create the dataset group.',
    }),
    kmsKeyArn: KmsKeyArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the datasets.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The creation date and time (in Unix time) of the dataset group.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The last update date and time (in Unix time) of the dataset group.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If creating a dataset group fails, provides the reason why.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description: 'The domain of a Domain dataset group.',
    }),
  })
  .openapi({
    description:
      '<p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>. The dataset group is used to create and train a solution by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p>',
    required: [],
  })
  .openapi('DatasetGroup')

const DescribeDatasetGroupResponseSchema = z
  .object({
    datasetGroup: DatasetGroupSchema.exactOptional().openapi({
      description: "A listing of the dataset group's properties.",
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetGroupResponse')

const DescribeDatasetGroupRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset group to describe.',
    }),
  })
  .openapi({ required: ['datasetGroupArn'], title: 'DescribeDatasetGroupRequest' })
  .openapi('DescribeDatasetGroupRequest')

const DatasetImportJobSchema = z
  .object({
    jobName: NameSchema.exactOptional().openapi({ description: 'The name of the import job.' }),
    datasetImportJobArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the dataset import job.',
    }),
    datasetArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset that receives the imported data.',
    }),
    dataSource: DataSourceSchema.exactOptional().openapi({
      description: 'The Amazon S3 bucket that contains the training data to import.',
    }),
    roleArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the IAM role that has permissions to read from the Amazon S3 data source.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the dataset import job.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The creation date and time (in Unix time) of the dataset import job.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) the dataset was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a dataset import job fails, provides the reason why.',
    }),
    importMode: ImportModeSchema.exactOptional().openapi({
      description: 'The import mode used by the dataset import job to import new records.',
    }),
    publishAttributionMetricsToS3: BooleanSchema.exactOptional().openapi({
      description: 'Whether the job publishes metrics to Amazon S3 for a metric attribution.',
    }),
  })
  .openapi({
    description:
      '<p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    required: [],
  })
  .openapi('DatasetImportJob')

const DescribeDatasetImportJobResponseSchema = z
  .object({
    datasetImportJob: DatasetImportJobSchema.exactOptional().openapi({
      description:
        '<p>Information about the dataset import job, including the status.</p> <p>The status is one of the following values:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> </ul>',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetImportJobResponse')

const DescribeDatasetImportJobRequestSchema = z
  .object({
    datasetImportJobArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset import job to describe.',
    }),
  })
  .openapi({ required: ['datasetImportJobArn'], title: 'DescribeDatasetImportJobRequest' })
  .openapi('DescribeDatasetImportJobRequest')

const AccountIdSchema = z.string().max(256).openapi('AccountId')

const EventTrackerSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the event tracker.' }),
    eventTrackerArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the event tracker.',
    }),
    accountId: AccountIdSchema.exactOptional().openapi({
      description: 'The Amazon Web Services account that owns the event tracker.',
    }),
    trackingId: TrackingIdSchema.exactOptional().openapi({
      description:
        'The ID of the event tracker. Include this ID in requests to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.',
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset group that receives the event data.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the event tracker.</p> <p>An event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the event tracker was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the event tracker was last updated.',
    }),
  })
  .openapi({ description: 'Provides information about an event tracker.', required: [] })
  .openapi('EventTracker')

const DescribeEventTrackerResponseSchema = z
  .object({
    eventTracker: EventTrackerSchema.exactOptional().openapi({
      description: 'An object that describes the event tracker.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventTrackerResponse')

const DescribeEventTrackerRequestSchema = z
  .object({
    eventTrackerArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the event tracker to describe.',
    }),
  })
  .openapi({ required: ['eventTrackerArn'], title: 'DescribeEventTrackerRequest' })
  .openapi('DescribeEventTrackerRequest')

const FeaturizationParametersSchema = z
  .record(z.string(), ParameterValueSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('FeaturizationParameters')

const FeatureTransformationSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({
      description: 'The name of the feature transformation.',
    }),
    featureTransformationArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the FeatureTransformation object.',
    }),
    defaultParameters: FeaturizationParametersSchema.exactOptional().openapi({
      description: 'Provides the default parameters for feature transformation.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The creation date and time (in Unix time) of the feature transformation.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The last update date and time (in Unix time) of the feature transformation.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the feature transformation.</p> <p>A feature transformation can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    }),
  })
  .openapi({
    description:
      'Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.',
    required: [],
  })
  .openapi('FeatureTransformation')

const DescribeFeatureTransformationResponseSchema = z
  .object({
    featureTransformation: FeatureTransformationSchema.exactOptional().openapi({
      description: 'A listing of the FeatureTransformation properties.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeFeatureTransformationResponse')

const DescribeFeatureTransformationRequestSchema = z
  .object({
    featureTransformationArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the feature transformation to describe.',
    }),
  })
  .openapi({
    required: ['featureTransformationArn'],
    title: 'DescribeFeatureTransformationRequest',
  })
  .openapi('DescribeFeatureTransformationRequest')

const FilterSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the filter.' }),
    filterArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the filter.' }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the filter was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the filter was last updated.',
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the dataset group to which the filter belongs.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If the filter failed, the reason for its failure.',
    }),
    filterExpression: FilterExpressionSchema.exactOptional().openapi({
      description:
        'Specifies the type of item interactions to filter out of recommendation results. The filter expression must follow specific format rules. For information about filter expression structure and syntax, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html">Filter expressions</a>.',
    }),
    status: StatusSchema.exactOptional().openapi({ description: 'The status of the filter.' }),
  })
  .openapi({
    description:
      'Contains information on a recommendation filter, including its ARN, status, and filter expression.',
    required: [],
  })
  .openapi('Filter')

const DescribeFilterResponseSchema = z
  .object({
    filter: FilterSchema.exactOptional().openapi({ description: "The filter's details." }),
  })
  .openapi({ required: [] })
  .openapi('DescribeFilterResponse')

const DescribeFilterRequestSchema = z
  .object({ filterArn: ArnSchema.openapi({ description: 'The ARN of the filter to describe.' }) })
  .openapi({ required: ['filterArn'], title: 'DescribeFilterRequest' })
  .openapi('DescribeFilterRequest')

const MetricAttributionSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: "The metric attribution's name." }),
    metricAttributionArn: ArnSchema.exactOptional().openapi({
      description: "The metric attribution's Amazon Resource Name (ARN).",
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: "The metric attribution's dataset group Amazon Resource Name (ARN).",
    }),
    metricsOutputConfig: MetricAttributionOutputSchema.exactOptional().openapi({
      description: "The metric attribution's output configuration.",
    }),
    status: StatusSchema.exactOptional().openapi({
      description: "The metric attribution's status.",
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: "The metric attribution's creation date time.",
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: "The metric attribution's last updated date time.",
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: "The metric attribution's failure reason.",
    }),
  })
  .openapi({
    description:
      'Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.',
    required: [],
  })
  .openapi('MetricAttribution')

const DescribeMetricAttributionResponseSchema = z
  .object({
    metricAttribution: MetricAttributionSchema.exactOptional().openapi({
      description: 'The details of the metric attribution.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeMetricAttributionResponse')

const DescribeMetricAttributionRequestSchema = z
  .object({
    metricAttributionArn: ArnSchema.openapi({
      description: "The metric attribution's Amazon Resource Name (ARN).",
    }),
  })
  .openapi({ required: ['metricAttributionArn'], title: 'DescribeMetricAttributionRequest' })
  .openapi('DescribeMetricAttributionRequest')

const DescriptionSchema = z.string().openapi('Description')

const RecipeTypeSchema = z.string().max(256).openapi('RecipeType')

const RecipeSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the recipe.' }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recipe.',
    }),
    algorithmArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train the model.',
    }),
    featureTransformationArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the FeatureTransformation object.',
    }),
    status: StatusSchema.exactOptional().openapi({ description: 'The status of the recipe.' }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the recipe.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the recipe was created.',
    }),
    recipeType: RecipeTypeSchema.exactOptional().openapi({
      description:
        '<p>One of the following values:</p> <ul> <li> <p>PERSONALIZED_RANKING</p> </li> <li> <p>RELATED_ITEMS</p> </li> <li> <p>USER_PERSONALIZATION</p> </li> </ul>',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the recipe was last updated.',
    }),
  })
  .openapi({
    description:
      'Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation. ',
    required: [],
  })
  .openapi('Recipe')

const DescribeRecipeResponseSchema = z
  .object({
    recipe: RecipeSchema.exactOptional().openapi({
      description: 'An object that describes the recipe.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecipeResponse')

const DescribeRecipeRequestSchema = z
  .object({
    recipeArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the recipe to describe.',
    }),
  })
  .openapi({ required: ['recipeArn'], title: 'DescribeRecipeRequest' })
  .openapi('DescribeRecipeRequest')

const RecommenderUpdateSummarySchema = z
  .object({
    recommenderConfig: RecommenderConfigSchema.exactOptional().openapi({
      description: 'The configuration details of the recommender update.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the recommender update was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the recommender update was last updated.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the recommender update.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a recommender update fails, the reason behind the failure.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a recommender update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> API.',
    required: [],
  })
  .openapi('RecommenderUpdateSummary')

const MetricValueSchema = z.float64().openapi('MetricValue')

const MetricsSchema = z
  .record(z.string(), MetricValueSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('Metrics')

const RecommenderSchema = z
  .object({
    recommenderArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender.',
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.',
    }),
    name: NameSchema.exactOptional().openapi({ description: 'The name of the recommender.' }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for. ',
    }),
    recommenderConfig: RecommenderConfigSchema.exactOptional().openapi({
      description: 'The configuration details of the recommender.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the recommender was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the recommender was last updated.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the recommender.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a recommender fails, the reason behind the failure.',
    }),
    latestRecommenderUpdate: RecommenderUpdateSummarySchema.exactOptional().openapi({
      description: 'Provides a summary of the latest updates to the recommender. ',
    }),
    modelMetrics: MetricsSchema.exactOptional().openapi({
      description:
        'Provides evaluation metrics that help you determine the performance of a recommender. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/evaluating-recommenders.html"> Evaluating a recommender</a>.',
    }),
  })
  .openapi({
    description:
      'Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group for a specific domain use case (domain recipe), and specify the recommender in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.',
    required: [],
  })
  .openapi('Recommender')

const DescribeRecommenderResponseSchema = z
  .object({
    recommender: RecommenderSchema.exactOptional().openapi({
      description: 'The properties of the recommender.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecommenderResponse')

const DescribeRecommenderRequestSchema = z
  .object({
    recommenderArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender to describe.',
    }),
  })
  .openapi({ required: ['recommenderArn'], title: 'DescribeRecommenderRequest' })
  .openapi('DescribeRecommenderRequest')

const DatasetSchemaSchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the schema.' }),
    schemaArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the schema.',
    }),
    schema: AvroSchemaSchema.exactOptional().openapi({ description: 'The schema.' }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the schema was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the schema was last updated.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description:
        'The domain of a schema that you created for a dataset in a Domain dataset group.',
    }),
  })
  .openapi({
    description:
      'Describes the schema for a dataset. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.',
    required: [],
  })
  .openapi('DatasetSchema')

const DescribeSchemaResponseSchema = z
  .object({
    schema: DatasetSchemaSchema.exactOptional().openapi({ description: 'The requested schema.' }),
  })
  .openapi({ required: [] })
  .openapi('DescribeSchemaResponse')

const DescribeSchemaRequestSchema = z
  .object({
    schemaArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the schema to retrieve.',
    }),
  })
  .openapi({ required: ['schemaArn'], title: 'DescribeSchemaRequest' })
  .openapi('DescribeSchemaRequest')

const DescribeSolutionResponseSchema: z.ZodType<DescribeSolutionResponseType> = z
  .object({
    solution: SolutionSchema.exactOptional().openapi({
      description: 'An object that describes the solution.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeSolutionResponse')

const DescribeSolutionRequestSchema = z
  .object({
    solutionArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the solution to describe.',
    }),
  })
  .openapi({ required: ['solutionArn'], title: 'DescribeSolutionRequest' })
  .openapi('DescribeSolutionRequest')

const DescribeSolutionVersionResponseSchema: z.ZodType<DescribeSolutionVersionResponseType> = z
  .object({
    solutionVersion: SolutionVersionSchema.exactOptional().openapi({
      description: 'The solution version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeSolutionVersionResponse')

const DescribeSolutionVersionRequestSchema = z
  .object({
    solutionVersionArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the solution version.',
    }),
  })
  .openapi({ required: ['solutionVersionArn'], title: 'DescribeSolutionVersionRequest' })
  .openapi('DescribeSolutionVersionRequest')

const GetSolutionMetricsResponseSchema = z
  .object({
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The same solution version ARN as specified in the request.',
    }),
    metrics: MetricsSchema.exactOptional().openapi({
      description:
        'The metrics for the solution version. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/working-with-training-metrics.html"> Evaluating a solution version with metrics </a>.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSolutionMetricsResponse')

const GetSolutionMetricsRequestSchema = z
  .object({
    solutionVersionArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version for which to get metrics.',
    }),
  })
  .openapi({ required: ['solutionVersionArn'], title: 'GetSolutionMetricsRequest' })
  .openapi('GetSolutionMetricsRequest')

const BatchInferenceJobSummarySchema = z
  .object({
    batchInferenceJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the batch inference job.',
    }),
    jobName: NameSchema.exactOptional().openapi({
      description: 'The name of the batch inference job.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the batch inference job. The status is one of the following values:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>IN PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch inference job was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch inference job was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If the batch inference job failed, the reason for the failure.',
    }),
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the solution version used by the batch inference job.',
    }),
  })
  .openapi({
    description:
      'A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html">BatchInferenceJob</a>. The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html">ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries.',
    required: [],
  })
  .openapi('BatchInferenceJobSummary')

const BatchInferenceJobsSchema = z
  .array(BatchInferenceJobSummarySchema)
  .max(100)
  .openapi('BatchInferenceJobs')

const NextTokenSchema = z.string().max(1500).openapi('NextToken')

const ListBatchInferenceJobsResponseSchema = z
  .object({
    batchInferenceJobs: BatchInferenceJobsSchema.exactOptional().openapi({
      description: 'A list containing information on each job that is returned.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListBatchInferenceJobsResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListBatchInferenceJobsRequestSchema = z
  .object({
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version from which the batch inference jobs were created.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token to request the next page of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of batch inference job results to return in each page. The default value is 100.',
    }),
  })
  .openapi({ title: 'ListBatchInferenceJobsRequest', required: [] })
  .openapi('ListBatchInferenceJobsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const BatchSegmentJobSummarySchema = z
  .object({
    batchSegmentJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the batch segment job.',
    }),
    jobName: NameSchema.exactOptional().openapi({
      description: 'The name of the batch segment job.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the batch segment job. The status is one of the following values:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>IN PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch segment job was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the batch segment job was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If the batch segment job failed, the reason for the failure.',
    }),
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.',
    }),
  })
  .openapi({
    description:
      'A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html">BatchSegmentJob</a> datatype. <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html">ListBatchSegmentJobs</a> operation returns a list of batch segment job summaries.',
    required: [],
  })
  .openapi('BatchSegmentJobSummary')

const BatchSegmentJobsSchema = z
  .array(BatchSegmentJobSummarySchema)
  .max(100)
  .openapi('BatchSegmentJobs')

const ListBatchSegmentJobsResponseSchema = z
  .object({
    batchSegmentJobs: BatchSegmentJobsSchema.exactOptional().openapi({
      description: 'A list containing information on each job that is returned.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListBatchSegmentJobsResponse')

const ListBatchSegmentJobsRequestSchema = z
  .object({
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version that the batch segment jobs used to generate batch segments.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token to request the next page of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of batch segment job results to return in each page. The default value is 100.',
    }),
  })
  .openapi({ title: 'ListBatchSegmentJobsRequest', required: [] })
  .openapi('ListBatchSegmentJobsRequest')

const CampaignSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the campaign.' }),
    campaignArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the campaign.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the campaign.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the campaign was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the campaign was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a campaign fails, the reason behind the failure.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a campaign. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.',
    required: [],
  })
  .openapi('CampaignSummary')

const CampaignsSchema = z.array(CampaignSummarySchema).max(100).openapi('Campaigns')

const ListCampaignsResponseSchema = z
  .object({
    campaigns: CampaignsSchema.exactOptional().openapi({ description: 'A list of the campaigns.' }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of campaigns (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListCampaignsResponse')

const ListCampaignsRequestSchema = z
  .object({
    solutionArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution to list the campaigns for. When a solution is not specified, all the campaigns associated with the account are listed.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> for getting the next set of campaigns (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of campaigns to return.',
    }),
  })
  .openapi({ title: 'ListCampaignsRequest', required: [] })
  .openapi('ListCampaignsRequest')

const DatasetExportJobSummarySchema = z
  .object({
    datasetExportJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset export job.',
    }),
    jobName: NameSchema.exactOptional().openapi({
      description: 'The name of the dataset export job.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the dataset export job.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the dataset export job was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description:
        'The date and time (in Unix time) that the dataset export job status was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a dataset export job fails, the reason behind the failure.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a dataset export job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a> API.',
    required: [],
  })
  .openapi('DatasetExportJobSummary')

const DatasetExportJobsSchema = z
  .array(DatasetExportJobSummarySchema)
  .max(100)
  .openapi('DatasetExportJobs')

const ListDatasetExportJobsResponseSchema = z
  .object({
    datasetExportJobs: DatasetExportJobsSchema.exactOptional().openapi({
      description: 'The list of dataset export jobs.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of dataset export jobs (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetExportJobsResponse')

const ListDatasetExportJobsRequestSchema = z
  .object({
    datasetArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset to list the dataset export jobs for.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListDatasetExportJobs</code> for getting the next set of dataset export jobs (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of dataset export jobs to return.',
    }),
  })
  .openapi({ title: 'ListDatasetExportJobsRequest', required: [] })
  .openapi('ListDatasetExportJobsRequest')

const DatasetGroupSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the dataset group.' }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset group.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the dataset group.</p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the dataset group was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the dataset group was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If creating a dataset group fails, the reason behind the failure.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description: 'The domain of a Domain dataset group.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a dataset group. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> API.',
    required: [],
  })
  .openapi('DatasetGroupSummary')

const DatasetGroupsSchema = z.array(DatasetGroupSummarySchema).max(100).openapi('DatasetGroups')

const ListDatasetGroupsResponseSchema = z
  .object({
    datasetGroups: DatasetGroupsSchema.exactOptional().openapi({
      description: 'The list of your dataset groups.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of dataset groups (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetGroupsResponse')

const ListDatasetGroupsRequestSchema = z
  .object({
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListDatasetGroups</code> for getting the next set of dataset groups (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of dataset groups to return.',
    }),
  })
  .openapi({ title: 'ListDatasetGroupsRequest', required: [] })
  .openapi('ListDatasetGroupsRequest')

const DatasetImportJobSummarySchema = z
  .object({
    datasetImportJobArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset import job.',
    }),
    jobName: NameSchema.exactOptional().openapi({
      description: 'The name of the dataset import job.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the dataset import job.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the dataset import job was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description:
        'The date and time (in Unix time) that the dataset import job status was last updated.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If a dataset import job fails, the reason behind the failure.',
    }),
    importMode: ImportModeSchema.exactOptional().openapi({
      description:
        'The import mode the dataset import job used to update the data in the dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/updating-existing-bulk-data.html">Updating existing bulk data</a>. ',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a dataset import job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> API.',
    required: [],
  })
  .openapi('DatasetImportJobSummary')

const DatasetImportJobsSchema = z
  .array(DatasetImportJobSummarySchema)
  .max(100)
  .openapi('DatasetImportJobs')

const ListDatasetImportJobsResponseSchema = z
  .object({
    datasetImportJobs: DatasetImportJobsSchema.exactOptional().openapi({
      description: 'The list of dataset import jobs.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of dataset import jobs (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetImportJobsResponse')

const ListDatasetImportJobsRequestSchema = z
  .object({
    datasetArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset to list the dataset import jobs for.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListDatasetImportJobs</code> for getting the next set of dataset import jobs (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of dataset import jobs to return.',
    }),
  })
  .openapi({ title: 'ListDatasetImportJobsRequest', required: [] })
  .openapi('ListDatasetImportJobsRequest')

const DatasetSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the dataset.' }),
    datasetArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset.',
    }),
    datasetType: DatasetTypeSchema.exactOptional().openapi({
      description:
        '<p>The dataset type. One of the following values:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> <li> <p>Event-Interactions</p> </li> </ul>',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the dataset.</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the dataset was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the dataset was last updated.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a dataset. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> API.',
    required: [],
  })
  .openapi('DatasetSummary')

const DatasetsSchema = z.array(DatasetSummarySchema).max(100).openapi('Datasets')

const ListDatasetsResponseSchema = z
  .object({
    datasets: DatasetsSchema.exactOptional().openapi({
      description:
        'An array of <code>Dataset</code> objects. Each object provides metadata information.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of datasets (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetsResponse')

const ListDatasetsRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset group that contains the datasets to list.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListDatasetImportJobs</code> for getting the next set of dataset import jobs (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of datasets to return.',
    }),
  })
  .openapi({ title: 'ListDatasetsRequest', required: [] })
  .openapi('ListDatasetsRequest')

const EventTrackerSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the event tracker.' }),
    eventTrackerArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the event tracker.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the event tracker.</p> <p>An event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the event tracker was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the event tracker was last updated.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of an event tracker. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> API.',
    required: [],
  })
  .openapi('EventTrackerSummary')

const EventTrackersSchema = z.array(EventTrackerSummarySchema).max(100).openapi('EventTrackers')

const ListEventTrackersResponseSchema = z
  .object({
    eventTrackers: EventTrackersSchema.exactOptional().openapi({
      description: 'A list of event trackers.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of event trackers (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListEventTrackersResponse')

const ListEventTrackersRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of a dataset group used to filter the response.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListEventTrackers</code> for getting the next set of event trackers (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of event trackers to return.',
    }),
  })
  .openapi({ title: 'ListEventTrackersRequest', required: [] })
  .openapi('ListEventTrackersRequest')

const FilterSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the filter.' }),
    filterArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the filter.' }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the filter was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The time at which the filter was last updated.',
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the dataset group to which the filter belongs.',
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: 'If the filter failed, the reason for the failure.',
    }),
    status: StatusSchema.exactOptional().openapi({ description: 'The status of the filter.' }),
  })
  .openapi({ description: "A short summary of a filter's attributes.", required: [] })
  .openapi('FilterSummary')

const FiltersSchema = z.array(FilterSummarySchema).max(100).openapi('Filters')

const ListFiltersResponseSchema = z
  .object({
    Filters: FiltersSchema.exactOptional().openapi({ description: 'A list of returned filters.' }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of filters (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFiltersResponse')

const ListFiltersRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the dataset group that contains the filters.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListFilters</code> for getting the next set of filters (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of filters to return.',
    }),
  })
  .openapi({ title: 'ListFiltersRequest', required: [] })
  .openapi('ListFiltersRequest')

const ListMetricAttributionMetricsResponseSchema = z
  .object({
    metrics: MetricAttributesSchema.exactOptional().openapi({
      description: 'The metrics for the specified metric attribution.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'Specify the pagination token from a previous <code>ListMetricAttributionMetricsResponse</code> request to retrieve the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListMetricAttributionMetricsResponse')

const ListMetricAttributionMetricsRequestSchema = z
  .object({
    metricAttributionArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the metric attribution to retrieve attributes for.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'Specify the pagination token from a previous request to retrieve the next page of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of metrics to return in one page of results.',
    }),
  })
  .openapi({ title: 'ListMetricAttributionMetricsRequest', required: [] })
  .openapi('ListMetricAttributionMetricsRequest')

const MetricAttributionSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({
      description: 'The name of the metric attribution.',
    }),
    metricAttributionArn: ArnSchema.exactOptional().openapi({
      description: "The metric attribution's Amazon Resource Name (ARN).",
    }),
    status: StatusSchema.exactOptional().openapi({
      description: "The metric attribution's status.",
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: "The metric attribution's creation date time.",
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: "The metric attribution's last updated date time.",
    }),
    failureReason: FailureReasonSchema.exactOptional().openapi({
      description: "The metric attribution's failure reason.",
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a metric attribution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html">DescribeMetricAttribution</a>.',
    required: [],
  })
  .openapi('MetricAttributionSummary')

const MetricAttributionsSchema = z
  .array(MetricAttributionSummarySchema)
  .max(100)
  .openapi('MetricAttributions')

const ListMetricAttributionsResponseSchema = z
  .object({
    metricAttributions: MetricAttributionsSchema.exactOptional().openapi({
      description: 'The list of metric attributions.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'Specify the pagination token from a previous request to retrieve the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListMetricAttributionsResponse')

const ListMetricAttributionsRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: "The metric attributions' dataset group Amazon Resource Name (ARN).",
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'Specify the pagination token from a previous request to retrieve the next page of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of metric attributions to return in one page of results.',
    }),
  })
  .openapi({ title: 'ListMetricAttributionsRequest', required: [] })
  .openapi('ListMetricAttributionsRequest')

const RecipeSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the recipe.' }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recipe.',
    }),
    status: StatusSchema.exactOptional().openapi({ description: 'The status of the recipe.' }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the recipe was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the recipe was last updated.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description: 'The domain of the recipe (if the recipe is a Domain dataset group use case).',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a recipe. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html">DescribeRecipe</a> API.',
    required: [],
  })
  .openapi('RecipeSummary')

const RecipesSchema = z.array(RecipeSummarySchema).max(100).openapi('Recipes')

const ListRecipesResponseSchema = z
  .object({
    recipes: RecipesSchema.exactOptional().openapi({
      description: 'The list of available recipes.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of recipes.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListRecipesResponse')

const RecipeProviderSchema = z.literal('SERVICE').openapi('RecipeProvider')

const ListRecipesRequestSchema = z
  .object({
    recipeProvider: RecipeProviderSchema.exactOptional().openapi({
      description: 'The default is <code>SERVICE</code>.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListRecipes</code> for getting the next set of recipes (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of recipes to return.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description:
        " Filters returned recipes by domain for a Domain dataset group. Only recipes (Domain dataset group use cases) for this domain are included in the response. If you don't specify a domain, all recipes are returned. ",
    }),
  })
  .openapi({ title: 'ListRecipesRequest', required: [] })
  .openapi('ListRecipesRequest')

const RecommenderSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the recommender.' }),
    recommenderArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender.',
    }),
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.',
    }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for.',
    }),
    recommenderConfig: RecommenderConfigSchema.exactOptional().openapi({
      description: 'The configuration details of the recommender.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the recommender. A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the recommender was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix format) that the recommender was last updated.',
    }),
  })
  .openapi({
    description: 'Provides a summary of the properties of the recommender.',
    required: [],
  })
  .openapi('RecommenderSummary')

const RecommendersSchema = z.array(RecommenderSummarySchema).max(100).openapi('Recommenders')

const ListRecommendersResponseSchema = z
  .object({
    recommenders: RecommendersSchema.exactOptional().openapi({
      description: 'A list of the recommenders.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of recommenders (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListRecommendersResponse')

const ListRecommendersRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the Domain dataset group to list the recommenders for. When a Domain dataset group is not specified, all the recommenders associated with the account are listed.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListRecommenders</code> for getting the next set of recommenders (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of recommenders to return.',
    }),
  })
  .openapi({ title: 'ListRecommendersRequest', required: [] })
  .openapi('ListRecommendersRequest')

const DatasetSchemaSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the schema.' }),
    schemaArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the schema.',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the schema was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the schema was last updated.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description:
        'The domain of a schema that you created for a dataset in a Domain dataset group.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a dataset schema. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> API.',
    required: [],
  })
  .openapi('DatasetSchemaSummary')

const SchemasSchema = z.array(DatasetSchemaSummarySchema).max(100).openapi('Schemas')

const ListSchemasResponseSchema = z
  .object({
    schemas: SchemasSchema.exactOptional().openapi({ description: 'A list of schemas.' }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token used to get the next set of schemas (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSchemasResponse')

const ListSchemasRequestSchema = z
  .object({
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListSchemas</code> for getting the next set of schemas (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of schemas to return.',
    }),
  })
  .openapi({ title: 'ListSchemasRequest', required: [] })
  .openapi('ListSchemasRequest')

const SolutionVersionsSchema = z
  .array(SolutionVersionSummarySchema)
  .max(100)
  .openapi('SolutionVersions')

const ListSolutionVersionsResponseSchema = z
  .object({
    solutionVersions: SolutionVersionsSchema.exactOptional().openapi({
      description: 'A list of solution versions describing the version properties.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of solution versions (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSolutionVersionsResponse')

const ListSolutionVersionsRequestSchema = z
  .object({
    solutionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the solution.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListSolutionVersions</code> for getting the next set of solution versions (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of solution versions to return.',
    }),
  })
  .openapi({ title: 'ListSolutionVersionsRequest', required: [] })
  .openapi('ListSolutionVersionsRequest')

const SolutionSummarySchema = z
  .object({
    name: NameSchema.exactOptional().openapi({ description: 'The name of the solution.' }),
    solutionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the solution.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>The status of the solution.</p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>',
    }),
    creationDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the solution was created.',
    }),
    lastUpdatedDateTime: DateSchema.exactOptional().openapi({
      description: 'The date and time (in Unix time) that the solution was last updated.',
    }),
    recipeArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recipe used by the solution.',
    }),
  })
  .openapi({
    description:
      'Provides a summary of the properties of a solution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API.',
    required: [],
  })
  .openapi('SolutionSummary')

const SolutionsSchema = z.array(SolutionSummarySchema).max(100).openapi('Solutions')

const ListSolutionsResponseSchema = z
  .object({
    solutions: SolutionsSchema.exactOptional().openapi({
      description: 'A list of the current solutions.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'A token for getting the next set of solutions (if they exist).',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSolutionsResponse')

const ListSolutionsRequestSchema = z
  .object({
    datasetGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset group.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token returned from the previous call to <code>ListSolutions</code> for getting the next set of solutions (if they exist).',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of solutions to return.',
    }),
  })
  .openapi({ title: 'ListSolutionsRequest', required: [] })
  .openapi('ListSolutionsRequest')

const ListTagsForResourceResponseSchema = z
  .object({ tags: TagsSchema.exactOptional().openapi({ description: "The resource's tags." }) })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.openapi({ description: "The resource's Amazon Resource Name." }),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartRecommenderResponseSchema = z
  .object({
    recommenderArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender you started.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartRecommenderResponse')

const StartRecommenderRequestSchema = z
  .object({
    recommenderArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender to start.',
    }),
  })
  .openapi({ required: ['recommenderArn'], title: 'StartRecommenderRequest' })
  .openapi('StartRecommenderRequest')

const StopRecommenderResponseSchema = z
  .object({
    recommenderArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender you stopped.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StopRecommenderResponse')

const StopRecommenderRequestSchema = z
  .object({
    recommenderArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender to stop.',
    }),
  })
  .openapi({ required: ['recommenderArn'], title: 'StopRecommenderRequest' })
  .openapi('StopRecommenderRequest')

const StopSolutionVersionCreationRequestSchema = z
  .object({
    solutionVersionArn: ArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the solution version you want to stop creating.',
    }),
  })
  .openapi({ required: ['solutionVersionArn'], title: 'StopSolutionVersionCreationRequest' })
  .openapi('StopSolutionVersionCreationRequest')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.openapi({ description: "The resource's Amazon Resource Name (ARN)." }),
    tags: TagsSchema.openapi({
      description:
        'Tags to apply to the resource. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">Tagging Personalize resources</a>.',
    }),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeysSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.openapi({ description: "The resource's Amazon Resource Name (ARN)." }),
    tagKeys: TagKeysSchema.openapi({ description: "Keys to remove from the resource's tags." }),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const TooManyTagKeysExceptionSchema = z.any().openapi('TooManyTagKeysException')

const UpdateCampaignResponseSchema = z
  .object({
    campaignArn: ArnSchema.exactOptional().openapi({
      description: 'The same campaign ARN as given in the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateCampaignResponse')

const UpdateCampaignRequestSchema = z
  .object({
    campaignArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the campaign.',
    }),
    solutionVersionArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of a new solution version to deploy.',
    }),
    minProvisionedTPS: TransactionsPerSecondSchema.exactOptional().openapi({
      description:
        'Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support.',
    }),
    campaignConfig: CampaignConfigSchema.exactOptional().openapi({
      description: 'The configuration details of a campaign.',
    }),
  })
  .openapi({ required: ['campaignArn'], title: 'UpdateCampaignRequest' })
  .openapi('UpdateCampaignRequest')

const UpdateMetricAttributionResponseSchema = z
  .object({
    metricAttributionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) for the metric attribution that you updated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateMetricAttributionResponse')

const MetricAttributesNamesListSchema = z
  .array(MetricNameSchema)
  .max(10)
  .openapi('MetricAttributesNamesList')

const UpdateMetricAttributionRequestSchema = z
  .object({
    addMetrics: MetricAttributesSchema.exactOptional().openapi({
      description: 'Add new metric attributes to the metric attribution.',
    }),
    removeMetrics: MetricAttributesNamesListSchema.exactOptional().openapi({
      description: 'Remove metric attributes from the metric attribution.',
    }),
    metricsOutputConfig: MetricAttributionOutputSchema.exactOptional().openapi({
      description: 'An output config for the metric attribution.',
    }),
    metricAttributionArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) for the metric attribution to update.',
    }),
  })
  .openapi({ title: 'UpdateMetricAttributionRequest', required: [] })
  .openapi('UpdateMetricAttributionRequest')

const UpdateRecommenderResponseSchema = z
  .object({
    recommenderArn: ArnSchema.exactOptional().openapi({
      description: 'The same recommender Amazon Resource Name (ARN) as given in the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateRecommenderResponse')

const UpdateRecommenderRequestSchema = z
  .object({
    recommenderArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the recommender to modify.',
    }),
    recommenderConfig: RecommenderConfigSchema.openapi({
      description: 'The configuration details of the recommender.',
    }),
  })
  .openapi({ required: ['recommenderArn', 'recommenderConfig'], title: 'UpdateRecommenderRequest' })
  .openapi('UpdateRecommenderRequest')

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

export const postXAmzTargetAmazonPersonalizeCreateBatchInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob',
  description:
    'Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>. ',
  operationId: 'CreateBatchInferenceJob',
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
        .literal('AmazonPersonalize.CreateBatchInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateBatchInferenceJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBatchInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBatchInferenceJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateBatchSegmentJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob',
  description:
    'Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.',
  operationId: 'CreateBatchSegmentJob',
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
        .literal('AmazonPersonalize.CreateBatchSegmentJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateBatchSegmentJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBatchSegmentJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBatchSegmentJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateCampaignRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateCampaign',
  description:
    '<p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There\'s a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>',
  operationId: 'CreateCampaign',
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
        .literal('AmazonPersonalize.CreateCampaign')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateCampaign'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCampaignResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateDataset',
  description:
    '<p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>',
  operationId: 'CreateDataset',
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
        .literal('AmazonPersonalize.CreateDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateDatasetExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob',
  description:
    '<p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>',
  operationId: 'CreateDatasetExportJob',
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
        .literal('AmazonPersonalize.CreateDatasetExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateDatasetExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetExportJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateDatasetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup',
  description:
    '<p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>',
  operationId: 'CreateDatasetGroup',
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
        .literal('AmazonPersonalize.CreateDatasetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateDatasetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetGroupResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
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
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateDatasetImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob',
  description:
    '<p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>',
  operationId: 'CreateDatasetImportJob',
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
        .literal('AmazonPersonalize.CreateDatasetImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateDatasetImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetImportJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateEventTrackerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateEventTracker',
  description:
    '<p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>',
  operationId: 'CreateEventTracker',
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
        .literal('AmazonPersonalize.CreateEventTracker')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateEventTracker'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEventTrackerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEventTrackerResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateFilter',
  description:
    'Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.',
  operationId: 'CreateFilter',
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
        .literal('AmazonPersonalize.CreateFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFilterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFilterResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateMetricAttributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution',
  description:
    'Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.',
  operationId: 'CreateMetricAttribution',
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
        .literal('AmazonPersonalize.CreateMetricAttribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateMetricAttribution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateMetricAttributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMetricAttributionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateRecommenderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateRecommender',
  description:
    '<p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender\'s Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <p>When you create a recommender, you can configure the recommender\'s minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There\'s a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>',
  operationId: 'CreateRecommender',
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
        .literal('AmazonPersonalize.CreateRecommender')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateRecommender'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRecommenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRecommenderResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateSchemaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateSchema',
  description:
    '<p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>',
  operationId: 'CreateSchema',
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
        .literal('AmazonPersonalize.CreateSchema')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateSchema'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSchemaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSchemaResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateSolutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateSolution',
  description:
    '<p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn\'t support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>',
  operationId: 'CreateSolution',
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
        .literal('AmazonPersonalize.CreateSolution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateSolution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSolutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSolutionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeCreateSolutionVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion',
  description:
    '<p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>',
  operationId: 'CreateSolutionVersion',
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
        .literal('AmazonPersonalize.CreateSolutionVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.CreateSolutionVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSolutionVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSolutionVersionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    485: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteCampaignRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteCampaign',
  description:
    'Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.',
  operationId: 'DeleteCampaign',
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
        .literal('AmazonPersonalize.DeleteCampaign')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteCampaign'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteDataset',
  description:
    'Deletes a dataset. You can\'t delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.',
  operationId: 'DeleteDataset',
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
        .literal('AmazonPersonalize.DeleteDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteDatasetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup',
  description:
    '<p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>',
  operationId: 'DeleteDatasetGroup',
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
        .literal('AmazonPersonalize.DeleteDatasetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteDatasetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDatasetGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteEventTrackerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteEventTracker',
  description:
    'Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.',
  operationId: 'DeleteEventTracker',
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
        .literal('AmazonPersonalize.DeleteEventTracker')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteEventTracker'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEventTrackerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteFilter',
  description: 'Deletes a filter.',
  operationId: 'DeleteFilter',
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
        .literal('AmazonPersonalize.DeleteFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFilterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteMetricAttributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution',
  description: 'Deletes a metric attribution.',
  operationId: 'DeleteMetricAttribution',
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
        .literal('AmazonPersonalize.DeleteMetricAttribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteMetricAttribution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMetricAttributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteRecommenderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteRecommender',
  description:
    'Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.',
  operationId: 'DeleteRecommender',
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
        .literal('AmazonPersonalize.DeleteRecommender')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteRecommender'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRecommenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteSchemaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteSchema',
  description:
    'Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.',
  operationId: 'DeleteSchema',
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
        .literal('AmazonPersonalize.DeleteSchema')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteSchema'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSchemaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDeleteSolutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DeleteSolution',
  description:
    'Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can\'t delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.',
  operationId: 'DeleteSolution',
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
        .literal('AmazonPersonalize.DeleteSolution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DeleteSolution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSolutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeAlgorithmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm',
  description: 'Describes the given algorithm.',
  operationId: 'DescribeAlgorithm',
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
        .literal('AmazonPersonalize.DescribeAlgorithm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeAlgorithm'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAlgorithmRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAlgorithmResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob',
  description:
    'Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.',
  operationId: 'DescribeBatchInferenceJob',
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
        .literal('AmazonPersonalize.DescribeBatchInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeBatchInferenceJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBatchInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBatchInferenceJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob',
  description:
    'Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.',
  operationId: 'DescribeBatchSegmentJob',
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
        .literal('AmazonPersonalize.DescribeBatchSegmentJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeBatchSegmentJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBatchSegmentJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBatchSegmentJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeCampaignRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeCampaign',
  description:
    '<p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>',
  operationId: 'DescribeCampaign',
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
        .literal('AmazonPersonalize.DescribeCampaign')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeCampaign'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCampaignResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeDataset',
  description:
    'Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.',
  operationId: 'DescribeDataset',
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
        .literal('AmazonPersonalize.DescribeDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeDatasetExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob',
  description:
    'Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.',
  operationId: 'DescribeDatasetExportJob',
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
        .literal('AmazonPersonalize.DescribeDatasetExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeDatasetExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatasetExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetExportJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeDatasetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup',
  description:
    'Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.',
  operationId: 'DescribeDatasetGroup',
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
        .literal('AmazonPersonalize.DescribeDatasetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeDatasetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatasetGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetGroupResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeDatasetImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob',
  description:
    'Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.',
  operationId: 'DescribeDatasetImportJob',
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
        .literal('AmazonPersonalize.DescribeDatasetImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeDatasetImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatasetImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetImportJobResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeEventTrackerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeEventTracker',
  description:
    'Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.',
  operationId: 'DescribeEventTracker',
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
        .literal('AmazonPersonalize.DescribeEventTracker')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeEventTracker'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventTrackerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventTrackerResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeFeatureTransformationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation',
  description: 'Describes the given feature transformation.',
  operationId: 'DescribeFeatureTransformation',
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
        .literal('AmazonPersonalize.DescribeFeatureTransformation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeFeatureTransformation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFeatureTransformationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFeatureTransformationResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeFilterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeFilter',
  description: "Describes a filter's properties.",
  operationId: 'DescribeFilter',
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
        .literal('AmazonPersonalize.DescribeFilter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeFilter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFilterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFilterResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeMetricAttributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution',
  description: 'Describes a metric attribution.',
  operationId: 'DescribeMetricAttribution',
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
        .literal('AmazonPersonalize.DescribeMetricAttribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeMetricAttribution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMetricAttributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMetricAttributionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeRecipeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeRecipe',
  description:
    '<p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>',
  operationId: 'DescribeRecipe',
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
        .literal('AmazonPersonalize.DescribeRecipe')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeRecipe'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRecipeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecipeResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeRecommenderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeRecommender',
  description:
    '<p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>',
  operationId: 'DescribeRecommender',
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
        .literal('AmazonPersonalize.DescribeRecommender')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeRecommender'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRecommenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecommenderResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeSchemaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeSchema',
  description:
    'Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.',
  operationId: 'DescribeSchema',
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
        .literal('AmazonPersonalize.DescribeSchema')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeSchema'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSchemaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSchemaResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeSolutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeSolution',
  description:
    'Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.',
  operationId: 'DescribeSolution',
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
        .literal('AmazonPersonalize.DescribeSolution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeSolution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSolutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSolutionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeDescribeSolutionVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion',
  description:
    'Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> ',
  operationId: 'DescribeSolutionVersion',
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
        .literal('AmazonPersonalize.DescribeSolutionVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.DescribeSolutionVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSolutionVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSolutionVersionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeGetSolutionMetricsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics',
  description: 'Gets the metrics for the specified solution version.',
  operationId: 'GetSolutionMetrics',
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
        .literal('AmazonPersonalize.GetSolutionMetrics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.GetSolutionMetrics'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSolutionMetricsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSolutionMetricsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListBatchInferenceJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs',
  description:
    'Gets a list of the batch inference jobs that have been performed off of a solution version.',
  operationId: 'ListBatchInferenceJobs',
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
        .literal('AmazonPersonalize.ListBatchInferenceJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListBatchInferenceJobs'] },
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
      content: { 'application/json': { schema: ListBatchInferenceJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBatchInferenceJobsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListBatchSegmentJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs',
  description:
    'Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.',
  operationId: 'ListBatchSegmentJobs',
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
        .literal('AmazonPersonalize.ListBatchSegmentJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListBatchSegmentJobs'] },
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
      content: { 'application/json': { schema: ListBatchSegmentJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBatchSegmentJobsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListCampaignsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListCampaigns',
  description:
    'Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.',
  operationId: 'ListCampaigns',
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
        .literal('AmazonPersonalize.ListCampaigns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListCampaigns'] },
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
      content: { 'application/json': { schema: ListCampaignsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCampaignsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListDatasetExportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs',
  description:
    'Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.',
  operationId: 'ListDatasetExportJobs',
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
        .literal('AmazonPersonalize.ListDatasetExportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListDatasetExportJobs'] },
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
      content: { 'application/json': { schema: ListDatasetExportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetExportJobsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListDatasetGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListDatasetGroups',
  description:
    'Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.',
  operationId: 'ListDatasetGroups',
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
        .literal('AmazonPersonalize.ListDatasetGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListDatasetGroups'] },
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
      content: { 'application/json': { schema: ListDatasetGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetGroupsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListDatasetImportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs',
  description:
    'Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.',
  operationId: 'ListDatasetImportJobs',
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
        .literal('AmazonPersonalize.ListDatasetImportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListDatasetImportJobs'] },
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
      content: { 'application/json': { schema: ListDatasetImportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetImportJobsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListDatasetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListDatasets',
  description:
    'Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.',
  operationId: 'ListDatasets',
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
        .literal('AmazonPersonalize.ListDatasets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListDatasets'] },
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
      content: { 'application/json': { schema: ListDatasetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListEventTrackersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListEventTrackers',
  description:
    'Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.',
  operationId: 'ListEventTrackers',
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
        .literal('AmazonPersonalize.ListEventTrackers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListEventTrackers'] },
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
      content: { 'application/json': { schema: ListEventTrackersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventTrackersResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListFiltersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListFilters',
  description: 'Lists all filters that belong to a given dataset group.',
  operationId: 'ListFilters',
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
        .literal('AmazonPersonalize.ListFilters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListFilters'] },
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
    body: { content: { 'application/json': { schema: ListFiltersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFiltersResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListMetricAttributionMetricsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics',
  description: 'Lists the metrics for the metric attribution.',
  operationId: 'ListMetricAttributionMetrics',
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
        .literal('AmazonPersonalize.ListMetricAttributionMetrics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListMetricAttributionMetrics'] },
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
      content: { 'application/json': { schema: ListMetricAttributionMetricsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMetricAttributionMetricsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListMetricAttributionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributions',
  description: 'Lists metric attributions.',
  operationId: 'ListMetricAttributions',
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
        .literal('AmazonPersonalize.ListMetricAttributions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListMetricAttributions'] },
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
      content: { 'application/json': { schema: ListMetricAttributionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMetricAttributionsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListRecipesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListRecipes',
  description:
    "Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).",
  operationId: 'ListRecipes',
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
        .literal('AmazonPersonalize.ListRecipes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListRecipes'] },
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
    body: { content: { 'application/json': { schema: ListRecipesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecipesResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListRecommendersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListRecommenders',
  description:
    'Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.',
  operationId: 'ListRecommenders',
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
        .literal('AmazonPersonalize.ListRecommenders')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListRecommenders'] },
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
      content: { 'application/json': { schema: ListRecommendersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecommendersResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListSchemasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListSchemas',
  description:
    'Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.',
  operationId: 'ListSchemas',
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
        .literal('AmazonPersonalize.ListSchemas')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListSchemas'] },
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
    body: { content: { 'application/json': { schema: ListSchemasRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSchemasResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListSolutionVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListSolutionVersions',
  description:
    'Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).',
  operationId: 'ListSolutionVersions',
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
        .literal('AmazonPersonalize.ListSolutionVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListSolutionVersions'] },
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
      content: { 'application/json': { schema: ListSolutionVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSolutionVersionsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListSolutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListSolutions',
  description:
    'Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.',
  operationId: 'ListSolutions',
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
        .literal('AmazonPersonalize.ListSolutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListSolutions'] },
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
      content: { 'application/json': { schema: ListSolutionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSolutionsResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.ListTagsForResource',
  description:
    'Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.',
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
        .literal('AmazonPersonalize.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.ListTagsForResource'] },
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
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeStartRecommenderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.StartRecommender',
  description:
    'Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.',
  operationId: 'StartRecommender',
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
        .literal('AmazonPersonalize.StartRecommender')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.StartRecommender'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartRecommenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartRecommenderResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeStopRecommenderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.StopRecommender',
  description:
    'Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.',
  operationId: 'StopRecommender',
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
        .literal('AmazonPersonalize.StopRecommender')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.StopRecommender'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopRecommenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopRecommenderResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeStopSolutionVersionCreationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation',
  description:
    '<p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>',
  operationId: 'StopSolutionVersionCreation',
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
        .literal('AmazonPersonalize.StopSolutionVersionCreation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.StopSolutionVersionCreation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopSolutionVersionCreationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.TagResource',
  description: 'Add a list of tags to a resource.',
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
        .literal('AmazonPersonalize.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.UntagResource',
  description:
    'Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.',
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
        .literal('AmazonPersonalize.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.UntagResource'] },
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
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyTagKeysException',
      content: { 'application/json': { schema: TooManyTagKeysExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeUpdateCampaignRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.UpdateCampaign',
  description:
    '<p>Updates a campaign by either deploying a new solution or changing the value of the campaign\'s <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>',
  operationId: 'UpdateCampaign',
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
        .literal('AmazonPersonalize.UpdateCampaign')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.UpdateCampaign'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCampaignResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeUpdateMetricAttributionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution',
  description: 'Updates a metric attribution.',
  operationId: 'UpdateMetricAttribution',
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
        .literal('AmazonPersonalize.UpdateMetricAttribution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.UpdateMetricAttribution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateMetricAttributionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMetricAttributionResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonPersonalizeUpdateRecommenderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonPersonalize.UpdateRecommender',
  description: 'Updates the recommender to modify the recommender configuration.',
  operationId: 'UpdateRecommender',
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
        .literal('AmazonPersonalize.UpdateRecommender')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonPersonalize.UpdateRecommender'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRecommenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRecommenderResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})
