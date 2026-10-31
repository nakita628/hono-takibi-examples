import { createRoute, z } from '@hono/zod-openapi'

const NameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*/)
  .min(1)
  .max(63)
  .openapi('Name')

const DoubleSchema = z.float64().openapi('Double')

const BaselineMetricSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the metric.' }),
    ).exactOptional(),
    Value: DoubleSchema.and(
      z.any().openapi({ description: 'The value for the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An individual metric that you can use for comparison as you evaluate your monitoring results.',
    required: [],
  })
  .openapi('BaselineMetric')

const BaselineMetricsSchema = z.array(BaselineMetricSchema).openapi('BaselineMetrics')

const PredictorBaselineSchema = z
  .object({
    BaselineMetrics: BaselineMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The initial <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">accuracy metrics</a> for the predictor. Use these metrics as a baseline for comparison purposes as you use your predictor and the metrics change.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.',
    required: [],
  })
  .openapi('PredictorBaseline')

type BaselineType = {
  PredictorBaseline?: z.infer<typeof PredictorBaselineSchema> & { [key: string]: unknown }
}

const ValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\_\-]+$/)
  .max(256)
  .openapi('Value')

const ValuesSchema = z.array(ValueSchema).min(1).max(20).openapi('Values')

const CategoricalParameterRangeSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the categorical hyperparameter to tune.' }),
    ),
    Values: ValuesSchema.and(
      z.any().openapi({ description: 'A list of the tunable categories for the hyperparameter.' }),
    ),
  })
  .openapi({
    required: ['Name', 'Values'],
    description:
      "Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.",
  })
  .openapi('CategoricalParameterRange')

const CategoricalParameterRangesSchema = z
  .array(CategoricalParameterRangeSchema)
  .min(1)
  .max(20)
  .openapi('CategoricalParameterRanges')

const ScalingTypeSchema = z
  .enum(['Auto', 'Linear', 'Logarithmic', 'ReverseLogarithmic'])
  .openapi('ScalingType')

const ContinuousParameterRangeSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the hyperparameter to tune.' }),
    ),
    MaxValue: DoubleSchema.and(
      z.any().openapi({ description: 'The maximum tunable value of the hyperparameter.' }),
    ),
    MinValue: DoubleSchema.and(
      z.any().openapi({ description: 'The minimum tunable value of the hyperparameter.' }),
    ),
    ScalingType: ScalingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values:</p> <dl> <dt>Auto</dt> <dd> <p>Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.</p> </dd> <dt>Linear</dt> <dd> <p>Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.</p> </dd> <dt>Logarithmic</dt> <dd> <p>Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale.</p> <p>Logarithmic scaling works only for ranges that have values greater than 0.</p> </dd> <dt>ReverseLogarithmic</dt> <dd> <p>hyperparameter tuning searches the values in the hyperparameter range by using a reverse logarithmic scale.</p> <p>Reverse logarithmic scaling works only for ranges that are entirely within the range 0 &lt;= x &lt; 1.0.</p> </dd> </dl> <p>For information about choosing a hyperparameter scale, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MaxValue', 'MinValue'],
    description:
      "Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.",
  })
  .openapi('ContinuousParameterRange')

const ContinuousParameterRangesSchema = z
  .array(ContinuousParameterRangeSchema)
  .min(1)
  .max(20)
  .openapi('ContinuousParameterRanges')

const IntegerSchema = z.int().openapi('Integer')

const IntegerParameterRangeSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the hyperparameter to tune.' }),
    ),
    MaxValue: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum tunable value of the hyperparameter.' }),
    ),
    MinValue: IntegerSchema.and(
      z.any().openapi({ description: 'The minimum tunable value of the hyperparameter.' }),
    ),
    ScalingType: ScalingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values:</p> <dl> <dt>Auto</dt> <dd> <p>Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.</p> </dd> <dt>Linear</dt> <dd> <p>Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.</p> </dd> <dt>Logarithmic</dt> <dd> <p>Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale.</p> <p>Logarithmic scaling works only for ranges that have values greater than 0.</p> </dd> <dt>ReverseLogarithmic</dt> <dd> <p>Not supported for <code>IntegerParameterRange</code>.</p> <p>Reverse logarithmic scaling works only for ranges that are entirely within the range 0 &lt;= x &lt; 1.0.</p> </dd> </dl> <p>For information about choosing a hyperparameter scale, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MaxValue', 'MinValue'],
    description:
      "Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.",
  })
  .openapi('IntegerParameterRange')

const IntegerParameterRangesSchema = z
  .array(IntegerParameterRangeSchema)
  .min(1)
  .max(20)
  .openapi('IntegerParameterRanges')

type ParameterRangesType = {
  CategoricalParameterRanges?: z.infer<typeof CategoricalParameterRangesSchema> & {
    [key: string]: unknown
  }
  ContinuousParameterRanges?: z.infer<typeof ContinuousParameterRangesSchema> & {
    [key: string]: unknown
  }
  IntegerParameterRanges?: z.infer<typeof IntegerParameterRangesSchema> & { [key: string]: unknown }
}

const WeightedQuantileLossSchema = z
  .object({
    Quantile: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The quantile. Quantiles divide a probability distribution into regions of equal probability. For example, if the distribution was divided into 5 regions of equal probability, the quantiles would be 0.2, 0.4, 0.6, and 0.8.',
        }),
    ).exactOptional(),
    LossValue: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The difference between the predicted value and the actual value over the quantile, weighted (normalized) by dividing by the sum over all quantiles.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.',
    required: [],
  })
  .openapi('WeightedQuantileLoss')

const WeightedQuantileLossesSchema = z
  .array(WeightedQuantileLossSchema)
  .openapi('WeightedQuantileLosses')

const ForecastTypeSchema = z
  .string()
  .regex(/(^0?\.\d\d?$|^mean$)/)
  .min(2)
  .max(4)
  .openapi('ForecastType')

const ErrorMetricSchema = z
  .object({
    ForecastType: ForecastTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The Forecast type used to compute WAPE, MAPE, MASE, and RMSE. ',
        }),
    ).exactOptional(),
    WAPE: DoubleSchema.and(
      z.any().openapi({ description: ' The weighted absolute percentage error (WAPE). ' }),
    ).exactOptional(),
    RMSE: DoubleSchema.and(
      z.any().openapi({ description: ' The root-mean-square error (RMSE). ' }),
    ).exactOptional(),
    MASE: DoubleSchema.and(
      z.any().openapi({ description: 'The Mean Absolute Scaled Error (MASE)' }),
    ).exactOptional(),
    MAPE: DoubleSchema.and(
      z.any().openapi({ description: 'The Mean Absolute Percentage Error (MAPE)' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object. ',
    required: [],
  })
  .openapi('ErrorMetric')

const ErrorMetricsSchema = z.array(ErrorMetricSchema).openapi('ErrorMetrics')

type MetricsType = {
  RMSE?: z.infer<typeof DoubleSchema> & { [key: string]: unknown }
  WeightedQuantileLosses?: z.infer<typeof WeightedQuantileLossesSchema> & { [key: string]: unknown }
  ErrorMetrics?: z.infer<typeof ErrorMetricsSchema> & { [key: string]: unknown }
  AverageWeightedQuantileLoss?: z.infer<typeof DoubleSchema> & { [key: string]: unknown }
}

const ArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):forecast:.*:.*:.+/)
  .max(256)
  .openapi('Arn')

const BooleanSchema = z.boolean().openapi('Boolean')

const StateSchema = z.enum(['Active', 'Deleted']).openapi('State')

const ReferencePredictorSummarySchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the reference predictor.' }),
    ).exactOptional(),
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the reference predictor is <code>Active</code> or <code>Deleted</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the reference predictor used when retraining or upgrading a predictor.',
    required: [],
  })
  .openapi('ReferencePredictorSummary')

const StatusSchema = z.string().max(256).openapi('Status')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

type PredictorSummaryType = {
  PredictorArn?: z.infer<typeof ArnSchema> & { [key: string]: unknown }
  PredictorName?: z.infer<typeof NameSchema> & { [key: string]: unknown }
  DatasetGroupArn?: z.infer<typeof ArnSchema> & { [key: string]: unknown }
  IsAutoPredictor?: z.infer<typeof BooleanSchema> & { [key: string]: unknown }
  ReferencePredictorSummary?: z.infer<typeof ReferencePredictorSummarySchema> & {
    [key: string]: unknown
  }
  Status?: z.infer<typeof StatusSchema> & { [key: string]: unknown }
  Message?: z.infer<typeof ErrorMessageSchema> & { [key: string]: unknown }
  CreationTime?: z.infer<typeof TimestampSchema> & { [key: string]: unknown }
  LastModificationTime?: z.infer<typeof TimestampSchema> & { [key: string]: unknown }
}

const CreateAutoPredictorResponseSchema = z
  .object({
    PredictorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the predictor.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAutoPredictorResponse')

const ForecastTypesSchema = z.array(ForecastTypeSchema).min(1).max(20).openapi('ForecastTypes')

const ForecastDimensionsSchema = z.array(NameSchema).min(1).max(10).openapi('ForecastDimensions')

const FrequencySchema = z
  .string()
  .regex(/^Y|M|W|D|H|30min|15min|10min|5min|1min$/)
  .min(1)
  .max(5)
  .openapi('Frequency')

const TransformationsSchema = z
  .record(z.string(), ValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('Transformations')

const AttributeConfigSchema = z
  .object({
    AttributeName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the attribute as specified in the schema. Amazon Forecast supports the target field of the target time series and the related time series datasets. For example, for the RETAIL domain, the target is <code>demand</code>.',
        }),
    ),
    Transformations: TransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to override the default values. Related Time Series attributes do not accept aggregation parameters.</p> <p>The following list shows the parameters and their valid values for the "filling" featurization method for a <b>Target Time Series</b> dataset. Default values are bolded.</p> <ul> <li> <p> <code>aggregation</code>: <b>sum</b>, <code>avg</code>, <code>first</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>frontfill</code>: <b>none</b> </p> </li> <li> <p> <code>middlefill</code>: <b>zero</b>, <code>nan</code> (not a number), <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>backfill</code>: <b>zero</b>, <code>nan</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> </ul> <p>The following list shows the parameters and their valid values for a <b>Related Time Series</b> featurization method (there are no defaults):</p> <ul> <li> <p> <code>middlefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>backfill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>futurefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> </ul> <p>To set a filling method to a specific value, set the fill parameter to <code>value</code> and define the value in a corresponding <code>_value</code> parameter. For example, to set backfilling to a value of 2, include the following: <code>"backfill": "value"</code> and <code>"backfill_value":"2"</code>. </p>',
        }),
    ),
  })
  .openapi({
    required: ['AttributeName', 'Transformations'],
    description:
      '<p>Provides information about the method used to transform attributes.</p> <p>The following is an example using the RETAIL domain:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>"Transformations": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>',
  })
  .openapi('AttributeConfig')

const AttributeConfigsSchema = z
  .array(AttributeConfigSchema)
  .min(1)
  .max(50)
  .openapi('AttributeConfigs')

const ConfigurationSchema = z.record(z.string(), ValuesSchema).openapi('Configuration')

const AdditionalDatasetSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the additional dataset. Valid names: <code>"holiday"</code> and <code>"weather"</code>.',
        }),
    ),
    Configuration: ConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>Weather Index</b> </p> <p>To enable the Weather Index, do not specify a value for <code>Configuration</code>.</p> <p> <b>Holidays</b> </p> <p> <b>Holidays</b> </p> <p>To enable Holidays, set <code>CountryCode</code> to one of the following two-letter country codes:</p> <ul> <li> <p>"AL" - ALBANIA</p> </li> <li> <p>"AR" - ARGENTINA</p> </li> <li> <p>"AT" - AUSTRIA</p> </li> <li> <p>"AU" - AUSTRALIA</p> </li> <li> <p>"BA" - BOSNIA HERZEGOVINA</p> </li> <li> <p>"BE" - BELGIUM</p> </li> <li> <p>"BG" - BULGARIA</p> </li> <li> <p>"BO" - BOLIVIA</p> </li> <li> <p>"BR" - BRAZIL</p> </li> <li> <p>"BY" - BELARUS</p> </li> <li> <p>"CA" - CANADA</p> </li> <li> <p>"CL" - CHILE</p> </li> <li> <p>"CO" - COLOMBIA</p> </li> <li> <p>"CR" - COSTA RICA</p> </li> <li> <p>"HR" - CROATIA</p> </li> <li> <p>"CZ" - CZECH REPUBLIC</p> </li> <li> <p>"DK" - DENMARK</p> </li> <li> <p>"EC" - ECUADOR</p> </li> <li> <p>"EE" - ESTONIA</p> </li> <li> <p>"ET" - ETHIOPIA</p> </li> <li> <p>"FI" - FINLAND</p> </li> <li> <p>"FR" - FRANCE</p> </li> <li> <p>"DE" - GERMANY</p> </li> <li> <p>"GR" - GREECE</p> </li> <li> <p>"HU" - HUNGARY</p> </li> <li> <p>"IS" - ICELAND</p> </li> <li> <p>"IN" - INDIA</p> </li> <li> <p>"IE" - IRELAND</p> </li> <li> <p>"IT" - ITALY</p> </li> <li> <p>"JP" - JAPAN</p> </li> <li> <p>"KZ" - KAZAKHSTAN</p> </li> <li> <p>"KR" - KOREA</p> </li> <li> <p>"LV" - LATVIA</p> </li> <li> <p>"LI" - LIECHTENSTEIN</p> </li> <li> <p>"LT" - LITHUANIA</p> </li> <li> <p>"LU" - LUXEMBOURG</p> </li> <li> <p>"MK" - MACEDONIA</p> </li> <li> <p>"MT" - MALTA</p> </li> <li> <p>"MX" - MEXICO</p> </li> <li> <p>"MD" - MOLDOVA</p> </li> <li> <p>"ME" - MONTENEGRO</p> </li> <li> <p>"NL" - NETHERLANDS</p> </li> <li> <p>"NZ" - NEW ZEALAND</p> </li> <li> <p>"NI" - NICARAGUA</p> </li> <li> <p>"NG" - NIGERIA</p> </li> <li> <p>"NO" - NORWAY</p> </li> <li> <p>"PA" - PANAMA</p> </li> <li> <p>"PY" - PARAGUAY</p> </li> <li> <p>"PE" - PERU</p> </li> <li> <p>"PL" - POLAND</p> </li> <li> <p>"PT" - PORTUGAL</p> </li> <li> <p>"RO" - ROMANIA</p> </li> <li> <p>"RU" - RUSSIA</p> </li> <li> <p>"RS" - SERBIA</p> </li> <li> <p>"SK" - SLOVAKIA</p> </li> <li> <p>"SI" - SLOVENIA</p> </li> <li> <p>"ZA" - SOUTH AFRICA</p> </li> <li> <p>"ES" - SPAIN</p> </li> <li> <p>"SE" - SWEDEN</p> </li> <li> <p>"CH" - SWITZERLAND</p> </li> <li> <p>"UA" - UKRAINE</p> </li> <li> <p>"AE" - UNITED ARAB EMIRATES</p> </li> <li> <p>"US" - UNITED STATES</p> </li> <li> <p>"UK" - UNITED KINGDOM</p> </li> <li> <p>"UY" - URUGUAY</p> </li> <li> <p>"VE" - VENEZUELA</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      '<p>Describes an additional dataset. This object is part of the <a>DataConfig</a> object. Forecast supports the Weather Index and Holidays additional datasets.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in dataset that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in dataset that incorporates national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>',
  })
  .openapi('AdditionalDataset')

const AdditionalDatasetsSchema = z
  .array(AdditionalDatasetSchema)
  .min(1)
  .max(2)
  .openapi('AdditionalDatasets')

const DataConfigSchema = z
  .object({
    DatasetGroupArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset group used to train the predictor.' }),
    ),
    AttributeConfigs: AttributeConfigsSchema.and(
      z
        .any()
        .openapi({
          description: 'Aggregation and filling options for attributes in your dataset group.',
        }),
    ).exactOptional(),
    AdditionalDatasets: AdditionalDatasetsSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional built-in datasets like Holidays and the Weather Index.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatasetGroupArn'],
    description: 'The data configuration for your dataset group and any additional datasets.',
  })
  .openapi('DataConfig')

const KMSKeyArnSchema = z
  .string()
  .regex(/arn:aws:kms:.*:key\/.*/)
  .max(256)
  .openapi('KMSKeyArn')

const EncryptionConfigSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of the IAM role that Amazon Forecast can assume to access the KMS key.</p> <p>Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your account, you get an <code>InvalidInputException</code> error.</p>",
        }),
    ),
    KMSKeyArn: KMSKeyArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the KMS key.' }),
    ),
  })
  .openapi({
    required: ['RoleArn', 'KMSKeyArn'],
    description:
      'An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.',
  })
  .openapi('EncryptionConfig')

const OptimizationMetricSchema = z
  .enum(['WAPE', 'RMSE', 'AverageWeightedQuantileLoss', 'MASE', 'MAPE'])
  .openapi('OptimizationMetric')

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
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that makes up a tag. A <code>key</code> is a general label that acts like a category for more specific tag values.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that makes up a tag. A <code>value</code> acts as a descriptor within a tag category (key).',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>The optional metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).min(0).max(200).openapi('Tags')

const MonitorConfigSchema = z
  .object({
    MonitorName: NameSchema.and(
      z.any().openapi({ description: 'The name of the monitor resource.' }),
    ),
  })
  .openapi({
    required: ['MonitorName'],
    description: 'The configuration details for the predictor monitor.',
  })
  .openapi('MonitorConfig')

const MonthSchema = z
  .enum([
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ])
  .openapi('Month')

const DayOfMonthSchema = z.int().min(1).max(28).openapi('DayOfMonth')

const DayOfWeekSchema = z
  .enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'])
  .openapi('DayOfWeek')

const HourSchema = z.int().min(0).max(23).openapi('Hour')

const TimeAlignmentBoundarySchema = z
  .object({
    Month: MonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The month to use for time alignment during aggregation. The month must be in uppercase.',
        }),
    ).exactOptional(),
    DayOfMonth: DayOfMonthSchema.and(
      z
        .any()
        .openapi({
          description: 'The day of the month to use for time alignment during aggregation.',
        }),
    ).exactOptional(),
    DayOfWeek: DayOfWeekSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day of week to use for time alignment during aggregation. The day must be in uppercase.',
        }),
    ).exactOptional(),
    Hour: HourSchema.and(
      z
        .any()
        .openapi({ description: 'The hour of day to use for time alignment during aggregation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you don\'t provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>. </p> <p>For more information about aggregation, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html">Data Aggregation for Different Forecast Frequencies</a>. For more information setting a custom time boundary, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>. </p>',
    required: [],
  })
  .openapi('TimeAlignmentBoundary')

const CreateAutoPredictorRequestSchema = z
  .object({
    PredictorName: NameSchema.and(
      z.any().openapi({ description: 'A unique name for the predictor' }),
    ),
    ForecastHorizon: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> <p>The maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the TARGET_TIME_SERIES dataset length. If you are retraining an existing AutoPredictor, then the maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset length.</p> <p>If you are upgrading to an AutoPredictor or retraining an existing AutoPredictor, you cannot update the forecast horizon parameter. You can meet this requirement by providing longer time-series in the dataset.</p>',
        }),
    ).exactOptional(),
    ForecastTypes: ForecastTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forecast types used to train a predictor. You can specify up to five forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with <code>mean</code>.',
        }),
    ).exactOptional(),
    ForecastDimensions: ForecastDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of dimension (field) names that specify how to group the generated forecast.</p> <p>For example, if you are generating forecasts for item sales across all your stores, and your dataset contains a <code>store_id</code> field, you would specify <code>store_id</code> as a dimension to group sales forecasts for each store.</p>',
        }),
    ).exactOptional(),
    ForecastFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frequency of predictions in a forecast.</p> <p>Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:</p> <ul> <li> <p>Minute - 1-59</p> </li> <li> <p>Hour - 1-23</p> </li> <li> <p>Day - 1-6</p> </li> <li> <p>Week - 1-4</p> </li> <li> <p>Month - 1-11</p> </li> <li> <p>Year - 1</p> </li> </ul> <p>Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".</p> <p>The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset frequency.</p> <p>When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the RELATED_TIME_SERIES dataset frequency.</p>',
        }),
    ).exactOptional(),
    DataConfig: DataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The data configuration for your dataset group and any additional datasets.',
        }),
    ).exactOptional(),
    EncryptionConfig: EncryptionConfigSchema.exactOptional(),
    ReferencePredictorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the predictor to retrain or upgrade. This parameter is only used when retraining or upgrading a predictor. When creating a new predictor, do not specify a value for this parameter.</p> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. The value for <code>PredictorName</code> must be a unique predictor name.</p>',
        }),
    ).exactOptional(),
    OptimizationMetric: OptimizationMetricSchema.and(
      z.any().openapi({ description: 'The accuracy metric used to optimize the predictor.' }),
    ).exactOptional(),
    ExplainPredictor: BooleanSchema.and(
      z.any().openapi({ description: 'Create an Explainability resource for the predictor.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional metadata to help you categorize and organize your predictors. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>For each resource, each tag key must be unique and each tag key must have one value.</p> </li> <li> <p>Maximum number of tags per resource: 50.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. </p> </li> <li> <p>Key prefixes cannot include any upper or lowercase combination of <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MonitorConfig: MonitorConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration details for predictor monitoring. Provide a name for the monitor resource to enable predictor monitoring.</p> <p>Predictor monitoring allows you to see how your predictor\'s performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>.</p>',
        }),
    ).exactOptional(),
    TimeAlignmentBoundary: TimeAlignmentBoundarySchema.and(
      z
        .any()
        .openapi({
          description:
            'The time boundary Forecast uses to align and aggregate any data that doesn\'t align with your forecast frequency. Provide the unit of time and the time boundary as a key value pair. For more information on specifying a time boundary, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>. If you don\'t provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PredictorName'], title: 'CreateAutoPredictorRequest' })
  .openapi('CreateAutoPredictorRequest')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const CreateDatasetResponseSchema = z
  .object({
    DatasetArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetResponse')

const DomainSchema = z
  .enum([
    'RETAIL',
    'CUSTOM',
    'INVENTORY_PLANNING',
    'EC2_CAPACITY',
    'WORK_FORCE',
    'WEB_TRAFFIC',
    'METRICS',
  ])
  .openapi('Domain')

const DatasetTypeSchema = z
  .enum(['TARGET_TIME_SERIES', 'RELATED_TIME_SERIES', 'ITEM_METADATA'])
  .openapi('DatasetType')

const AttributeTypeSchema = z
  .enum(['string', 'integer', 'float', 'timestamp', 'geolocation'])
  .openapi('AttributeType')

const SchemaAttributeSchema = z
  .object({
    AttributeName: NameSchema.and(
      z.any().openapi({ description: 'The name of the dataset field.' }),
    ).exactOptional(),
    AttributeType: AttributeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type of the field.</p> <p>For a related time series dataset, other than date, item_id, and forecast dimensions attributes, all attributes should be of numerical type (integer/float).</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html">Schema</a> object contains an array of <code>SchemaAttribute</code> objects.',
    required: [],
  })
  .openapi('SchemaAttribute')

const SchemaAttributesSchema = z
  .array(SchemaAttributeSchema)
  .min(1)
  .max(100)
  .openapi('SchemaAttributes')

const SchemaSchema = z
  .object({
    Attributes: SchemaAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of attributes specifying the name and type of each field in a dataset.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Defines the fields of a dataset.', required: [] })
  .openapi('Schema')

const CreateDatasetRequestSchema = z
  .object({
    DatasetName: NameSchema.and(z.any().openapi({ description: 'A name for the dataset.' })),
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The domain associated with the dataset. When you add a dataset to a dataset group, this value and the value specified for the <code>Domain</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation must match.</p> <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields that must be present in the training data that you import to the dataset. For example, if you choose the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the <code>DatasetType</code>, Amazon Forecast requires <code>item_id</code>, <code>timestamp</code>, and <code>demand</code> fields to be present in your data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p>',
        }),
    ),
    DatasetType: DatasetTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The dataset type. Valid values depend on the chosen <code>Domain</code>.',
        }),
    ),
    DataFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frequency of data collection. This parameter is required for RELATED_TIME_SERIES datasets.</p> <p>Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:</p> <ul> <li> <p>Minute - 1-59</p> </li> <li> <p>Hour - 1-23</p> </li> <li> <p>Day - 1-6</p> </li> <li> <p>Week - 1-4</p> </li> <li> <p>Month - 1-11</p> </li> <li> <p>Year - 1</p> </li> </ul> <p>Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".</p>',
        }),
    ).exactOptional(),
    Schema: SchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The schema for the dataset. The schema attributes and their order must match the fields in your data. The dataset <code>Domain</code> and <code>DatasetType</code> that you choose determine the minimum required fields in your training data. For information about the required fields for a specific dataset domain and type, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-domains-ds-types.html">Dataset Domains and Dataset Types</a>.',
        }),
    ),
    EncryptionConfig: EncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional metadata that you apply to the dataset to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatasetName', 'Domain', 'DatasetType', 'Schema'],
    title: 'CreateDatasetRequest',
  })
  .openapi('CreateDatasetRequest')

const CreateDatasetGroupResponseSchema = z
  .object({
    DatasetGroupArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetGroupResponse')

const ArnListSchema = z.array(ArnSchema).openapi('ArnList')

const CreateDatasetGroupRequestSchema = z
  .object({
    DatasetGroupName: NameSchema.and(
      z.any().openapi({ description: 'A name for the dataset group.' }),
    ),
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the <code>Domain</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation must match.</p> <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields that must be present in training data that you import to a dataset. For example, if you choose the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the <code>DatasetType</code>, Amazon Forecast requires that <code>item_id</code>, <code>timestamp</code>, and <code>demand</code> fields are present in your data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p>',
        }),
    ),
    DatasetArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional metadata that you apply to the dataset group to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatasetGroupName', 'Domain'], title: 'CreateDatasetGroupRequest' })
  .openapi('CreateDatasetGroupRequest')

const CreateDatasetImportJobResponseSchema = z
  .object({
    DatasetImportJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset import job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetImportJobResponse')

const S3PathSchema = z
  .string()
  .regex(/^s3:\/\/[a-z0-9].+$/)
  .min(7)
  .max(4096)
  .openapi('S3Path')

const S3ConfigSchema = z
  .object({
    Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket.',
        }),
    ),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket or files. If you provide a value for the <code>KMSKeyArn</code> key, the role must allow access to the key.</p> <p>Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your account, you get an <code>InvalidInputException</code> error.</p>",
        }),
    ),
    KMSKeyArn: KMSKeyArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of an Key Management Service (KMS) key.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Path', 'RoleArn'],
    description:
      'The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.',
  })
  .openapi('S3Config')

const DataSourceSchema = z
  .object({
    S3Config: S3ConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the data stored in an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the data.',
        }),
    ),
  })
  .openapi({
    required: ['S3Config'],
    description:
      'The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.',
  })
  .openapi('DataSource')

const TimestampFormatSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\:\.\,\'\s]+$/)
  .max(256)
  .openapi('TimestampFormat')

const TimeZoneSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\+\-\_]+$/)
  .max(256)
  .openapi('TimeZone')

const UseGeolocationForTimeZoneSchema = z.boolean().openapi('UseGeolocationForTimeZone')

const GeolocationFormatSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]+$/)
  .max(256)
  .openapi('GeolocationFormat')

const FormatSchema = z
  .string()
  .regex(/^CSV|PARQUET$/)
  .max(7)
  .openapi('Format')

const ImportModeSchema = z.enum(['FULL', 'INCREMENTAL']).openapi('ImportMode')

const CreateDatasetImportJobRequestSchema = z
  .object({
    DatasetImportJobName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the dataset import job. We recommend including the current timestamp in the name, for example, <code>20190721DatasetImport</code>. This can help you avoid getting a <code>ResourceAlreadyExistsException</code> exception.',
        }),
    ),
    DatasetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data to.',
        }),
    ),
    DataSource: DataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p> <p>If encryption is used, <code>DataSource</code> must include an Key Management Service (KMS) key and the IAM role must allow Amazon Forecast permission to access the key. The KMS key and IAM role must match those specified in the <code>EncryptionConfig</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p>',
        }),
    ),
    TimestampFormat: TimestampFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of timestamps in the dataset. The format that you specify depends on the <code>DataFrequency</code> specified when the dataset was created. The following formats are supported</p> <ul> <li> <p>"yyyy-MM-dd"</p> <p>For the following data frequencies: Y, M, W, and D</p> </li> <li> <p>"yyyy-MM-dd HH:mm:ss"</p> <p>For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D</p> </li> </ul> <p>If the format isn\'t specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss".</p>',
        }),
    ).exactOptional(),
    TimeZone: TimeZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A single time zone for every item in your dataset. This option is ideal for datasets with all timestamps within a single time zone, or if all timestamps are normalized to a single time zone. </p> <p>Refer to the <a href="http://joda-time.sourceforge.net/timezones.html">Joda-Time API</a> for a complete list of valid time zone names.</p>',
        }),
    ).exactOptional(),
    UseGeolocationForTimeZone: UseGeolocationForTimeZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'Automatically derive time zone information from the geolocation attribute. This option is ideal for datasets that contain timestamps in multiple time zones and those timestamps are expressed in local time.',
        }),
    ).exactOptional(),
    GeolocationFormat: GeolocationFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the geolocation attribute. The geolocation attribute can be formatted in one of two ways:</p> <ul> <li> <p> <code>LAT_LONG</code> - the latitude and longitude in decimal format (Example: 47.61_-122.33).</p> </li> <li> <p> <code>CC_POSTALCODE</code> (US Only) - the country code (US), followed by the 5-digit ZIP code (Example: US_98121).</p> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional metadata that you apply to the dataset import job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z
        .any()
        .openapi({
          description: 'The format of the imported data, CSV or PARQUET. The default value is CSV.',
        }),
    ).exactOptional(),
    ImportMode: ImportModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the dataset import job is a <code>FULL</code> or <code>INCREMENTAL</code> import. A <code>FULL</code> dataset import replaces all of the existing data with the newly imported data. An <code>INCREMENTAL</code> import appends the imported data to the existing data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatasetImportJobName', 'DatasetArn', 'DataSource'],
    title: 'CreateDatasetImportJobRequest',
  })
  .openapi('CreateDatasetImportJobRequest')

const CreateExplainabilityResponseSchema = z
  .object({
    ExplainabilityArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateExplainabilityResponse')

const TimeSeriesGranularitySchema = z.enum(['ALL', 'SPECIFIC']).openapi('TimeSeriesGranularity')

const TimePointGranularitySchema = z.enum(['ALL', 'SPECIFIC']).openapi('TimePointGranularity')

const ExplainabilityConfigSchema = z
  .object({
    TimeSeriesGranularity: TimeSeriesGranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To create an Explainability for all time series in your datasets, use <code>ALL</code>. To create an Explainability for specific time series in your datasets, use <code>SPECIFIC</code>.</p> <p>Specify time series by uploading a CSV or Parquet file to an Amazon S3 bucket and set the location within the <a>DataDestination</a> data type.</p>',
        }),
    ),
    TimePointGranularity: TimePointGranularitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To create an Explainability for all time points in your forecast horizon, use <code>ALL</code>. To create an Explainability for specific time points in your forecast horizon, use <code>SPECIFIC</code>.</p> <p>Specify time points with the <code>StartDateTime</code> and <code>EndDateTime</code> parameters within the <a>CreateExplainability</a> operation.</p>',
        }),
    ),
  })
  .openapi({
    required: ['TimeSeriesGranularity', 'TimePointGranularity'],
    description:
      '<p>The ExplainabilityConfig data type defines the number of time series and time points included in <a>CreateExplainability</a>.</p> <p>If you provide a predictor ARN for <code>ResourceArn</code>, you must set both <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to “ALL”. When creating Predictor Explainability, Amazon Forecast considers all time series and time points.</p> <p>If you provide a forecast ARN for <code>ResourceArn</code>, you can set <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to either “ALL” or “Specific”.</p>',
  })
  .openapi('ExplainabilityConfig')

const LocalDateTimeSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/)
  .max(19)
  .openapi('LocalDateTime')

const CreateExplainabilityRequestSchema = z
  .object({
    ExplainabilityName: NameSchema.and(
      z.any().openapi({ description: 'A unique name for the Explainability.' }),
    ),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.',
        }),
    ),
    ExplainabilityConfig: ExplainabilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that define the granularity of time series and time points for the Explainability.',
        }),
    ),
    DataSource: DataSourceSchema.exactOptional(),
    Schema: SchemaSchema.exactOptional(),
    EnableVisualization: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Create an Explainability visualization that is viewable within the Amazon Web Services console.',
        }),
    ).exactOptional(),
    StartDateTime: LocalDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, define the first point for the Explainability.</p> <p>Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)</p>',
        }),
    ).exactOptional(),
    EndDateTime: LocalDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, define the last time point for the Explainability.</p> <p>Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)</p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>For each resource, each tag key must be unique and each tag key must have one value.</p> </li> <li> <p>Maximum number of tags per resource: 50.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. </p> </li> <li> <p>Key prefixes cannot include any upper or lowercase combination of <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ExplainabilityName', 'ResourceArn', 'ExplainabilityConfig'],
    title: 'CreateExplainabilityRequest',
  })
  .openapi('CreateExplainabilityRequest')

const CreateExplainabilityExportResponseSchema = z
  .object({
    ExplainabilityExportArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the export.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateExplainabilityExportResponse')

const DataDestinationSchema = z
  .object({
    S3Config: S3ConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the bucket.',
        }),
    ),
  })
  .openapi({
    required: ['S3Config'],
    description:
      'The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). ',
  })
  .openapi('DataDestination')

const CreateExplainabilityExportRequestSchema = z
  .object({
    ExplainabilityExportName: NameSchema.and(
      z.any().openapi({ description: 'A unique name for the Explainability export.' }),
    ),
    ExplainabilityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Explainability to export.',
        }),
    ),
    Destination: DataDestinationSchema,
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>For each resource, each tag key must be unique and each tag key must have one value.</p> </li> <li> <p>Maximum number of tags per resource: 50.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. </p> </li> <li> <p>Key prefixes cannot include any upper or lowercase combination of <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the exported data, CSV or PARQUET.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ExplainabilityExportName', 'ExplainabilityArn', 'Destination'],
    title: 'CreateExplainabilityExportRequest',
  })
  .openapi('CreateExplainabilityExportRequest')

const CreateForecastResponseSchema = z
  .object({
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the forecast.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateForecastResponse')

const TimeSeriesIdentifiersSchema = z
  .object({
    DataSource: DataSourceSchema.exactOptional(),
    Schema: SchemaSchema.exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the data, either CSV or PARQUET.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the import file that contains the time series for which you want to create forecasts.',
    required: [],
  })
  .openapi('TimeSeriesIdentifiers')

const TimeSeriesSelectorSchema = z
  .object({
    TimeSeriesIdentifiers: TimeSeriesIdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the import file that contains the time series for which you want to create forecasts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul>',
    required: [],
  })
  .openapi('TimeSeriesSelector')

const CreateForecastRequestSchema = z
  .object({
    ForecastName: NameSchema.and(z.any().openapi({ description: 'A name for the forecast.' })),
    PredictorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.',
        }),
    ),
    ForecastTypes: ForecastTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The quantiles at which probabilistic forecasts are generated. <b>You can currently specify up to 5 quantiles per forecast</b>. Accepted values include <code>0.01 to 0.99</code> (increments of .01 only) and <code>mean</code>. The mean forecast is different from the median (0.50) when the distribution is not symmetric (for example, Beta and Negative Binomial). </p> <p>The default quantiles are the quantiles you specified during predictor creation. If you didn\'t specify quantiles, the default values are <code>["0.1", "0.5", "0.9"]</code>. </p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional metadata that you apply to the forecast to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TimeSeriesSelector: TimeSeriesSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ForecastName', 'PredictorArn'], title: 'CreateForecastRequest' })
  .openapi('CreateForecastRequest')

const CreateForecastExportJobResponseSchema = z
  .object({
    ForecastExportJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the export job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateForecastExportJobResponse')

const CreateForecastExportJobRequestSchema = z
  .object({
    ForecastExportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name for the forecast export job.' }),
    ),
    ForecastArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the forecast that you want to export.',
        }),
    ),
    Destination: DataDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location where you want to save the forecast and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3 bucket.</p> <p>If encryption is used, <code>Destination</code> must include an Key Management Service (KMS) key. The IAM role must allow Amazon Forecast permission to access the key.</p>',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional metadata that you apply to the forecast export job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z
        .any()
        .openapi({
          description: 'The format of the exported data, CSV or PARQUET. The default value is CSV.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ForecastExportJobName', 'ForecastArn', 'Destination'],
    title: 'CreateForecastExportJobRequest',
  })
  .openapi('CreateForecastExportJobRequest')

const CreateMonitorResponseSchema = z
  .object({
    MonitorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the monitor resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMonitorResponse')

const CreateMonitorRequestSchema = z
  .object({
    MonitorName: NameSchema.and(
      z.any().openapi({ description: 'The name of the monitor resource.' }),
    ),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the predictor to monitor.' }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the monitor resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MonitorName', 'ResourceArn'], title: 'CreateMonitorRequest' })
  .openapi('CreateMonitorRequest')

const CreatePredictorResponseSchema = z
  .object({
    PredictorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the predictor.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePredictorResponse')

const AutoMLOverrideStrategySchema = z
  .enum(['LatencyOptimized', 'AccuracyOptimized'])
  .openapi('AutoMLOverrideStrategy')

const ParameterValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_\.\/\[\]\,\"\\\s]+$/)
  .max(256)
  .openapi('ParameterValue')

const TrainingParametersSchema = z
  .record(z.string(), ParameterValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('TrainingParameters')

const EvaluationParametersSchema = z
  .object({
    NumberOfBacktestWindows: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of times to split the input data. The default is 1. Valid values are 1 through 5.',
        }),
    ).exactOptional(),
    BackTestWindowOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The point from the end of the dataset where you want to split the data for model training and testing (evaluation). Specify the value as the number of data points. The default is the value of the forecast horizon. <code>BackTestWindowOffset</code> can be used to mimic a past virtual forecast start date. This value must be greater than or equal to the forecast horizon and less than half of the TARGET_TIME_SERIES dataset length.</p> <p> <code>ForecastHorizon</code> &lt;= <code>BackTestWindowOffset</code> &lt; 1/2 * TARGET_TIME_SERIES dataset length</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request.',
    required: [],
  })
  .openapi('EvaluationParameters')

const ParameterRangesSchema: z.ZodType<ParameterRangesType> = z
  .lazy(() =>
    z
      .object({
        CategoricalParameterRanges: CategoricalParameterRangesSchema.and(
          z
            .any()
            .openapi({
              description: 'Specifies the tunable range for each categorical hyperparameter.',
            }),
        ).exactOptional(),
        ContinuousParameterRanges: ContinuousParameterRangesSchema.and(
          z
            .any()
            .openapi({
              description: 'Specifies the tunable range for each continuous hyperparameter.',
            }),
        ).exactOptional(),
        IntegerParameterRanges: IntegerParameterRangesSchema.and(
          z
            .any()
            .openapi({
              description: 'Specifies the tunable range for each integer hyperparameter.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.',
        required: [],
      }),
  )
  .openapi('ParameterRanges')

const HyperParameterTuningJobConfigSchema = z
  .object({
    ParameterRanges: ParameterRangesSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the ranges of valid values for the hyperparameters.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p>',
    required: [],
  })
  .openapi('HyperParameterTuningJobConfig')

const SupplementaryFeatureSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the feature. Valid values: <code>"holiday"</code> and <code>"weather"</code>.',
        }),
    ),
    Value: ValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>Weather Index</b> </p> <p>To enable the Weather Index, set the value to <code>"true"</code> </p> <p> <b>Holidays</b> </p> <p>To enable Holidays, specify a country with one of the following two-letter country codes:</p> <ul> <li> <p>"AL" - ALBANIA</p> </li> <li> <p>"AR" - ARGENTINA</p> </li> <li> <p>"AT" - AUSTRIA</p> </li> <li> <p>"AU" - AUSTRALIA</p> </li> <li> <p>"BA" - BOSNIA HERZEGOVINA</p> </li> <li> <p>"BE" - BELGIUM</p> </li> <li> <p>"BG" - BULGARIA</p> </li> <li> <p>"BO" - BOLIVIA</p> </li> <li> <p>"BR" - BRAZIL</p> </li> <li> <p>"BY" - BELARUS</p> </li> <li> <p>"CA" - CANADA</p> </li> <li> <p>"CL" - CHILE</p> </li> <li> <p>"CO" - COLOMBIA</p> </li> <li> <p>"CR" - COSTA RICA</p> </li> <li> <p>"HR" - CROATIA</p> </li> <li> <p>"CZ" - CZECH REPUBLIC</p> </li> <li> <p>"DK" - DENMARK</p> </li> <li> <p>"EC" - ECUADOR</p> </li> <li> <p>"EE" - ESTONIA</p> </li> <li> <p>"ET" - ETHIOPIA</p> </li> <li> <p>"FI" - FINLAND</p> </li> <li> <p>"FR" - FRANCE</p> </li> <li> <p>"DE" - GERMANY</p> </li> <li> <p>"GR" - GREECE</p> </li> <li> <p>"HU" - HUNGARY</p> </li> <li> <p>"IS" - ICELAND</p> </li> <li> <p>"IN" - INDIA</p> </li> <li> <p>"IE" - IRELAND</p> </li> <li> <p>"IT" - ITALY</p> </li> <li> <p>"JP" - JAPAN</p> </li> <li> <p>"KZ" - KAZAKHSTAN</p> </li> <li> <p>"KR" - KOREA</p> </li> <li> <p>"LV" - LATVIA</p> </li> <li> <p>"LI" - LIECHTENSTEIN</p> </li> <li> <p>"LT" - LITHUANIA</p> </li> <li> <p>"LU" - LUXEMBOURG</p> </li> <li> <p>"MK" - MACEDONIA</p> </li> <li> <p>"MT" - MALTA</p> </li> <li> <p>"MX" - MEXICO</p> </li> <li> <p>"MD" - MOLDOVA</p> </li> <li> <p>"ME" - MONTENEGRO</p> </li> <li> <p>"NL" - NETHERLANDS</p> </li> <li> <p>"NZ" - NEW ZEALAND</p> </li> <li> <p>"NI" - NICARAGUA</p> </li> <li> <p>"NG" - NIGERIA</p> </li> <li> <p>"NO" - NORWAY</p> </li> <li> <p>"PA" - PANAMA</p> </li> <li> <p>"PY" - PARAGUAY</p> </li> <li> <p>"PE" - PERU</p> </li> <li> <p>"PL" - POLAND</p> </li> <li> <p>"PT" - PORTUGAL</p> </li> <li> <p>"RO" - ROMANIA</p> </li> <li> <p>"RU" - RUSSIA</p> </li> <li> <p>"RS" - SERBIA</p> </li> <li> <p>"SK" - SLOVAKIA</p> </li> <li> <p>"SI" - SLOVENIA</p> </li> <li> <p>"ZA" - SOUTH AFRICA</p> </li> <li> <p>"ES" - SPAIN</p> </li> <li> <p>"SE" - SWEDEN</p> </li> <li> <p>"CH" - SWITZERLAND</p> </li> <li> <p>"UA" - UKRAINE</p> </li> <li> <p>"AE" - UNITED ARAB EMIRATES</p> </li> <li> <p>"US" - UNITED STATES</p> </li> <li> <p>"UK" - UNITED KINGDOM</p> </li> <li> <p>"UY" - URUGUAY</p> </li> <li> <p>"VE" - VENEZUELA</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      '<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AdditionalDataset</a>.</p> </note> <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in featurizations.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>',
  })
  .openapi('SupplementaryFeature')

const SupplementaryFeaturesSchema = z
  .array(SupplementaryFeatureSchema)
  .min(1)
  .max(2)
  .openapi('SupplementaryFeatures')

const InputDataConfigSchema = z
  .object({
    DatasetGroupArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset group.' }),
    ),
    SupplementaryFeatures: SupplementaryFeaturesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of supplementary features. The only supported feature is a holiday calendar.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatasetGroupArn'],
    description:
      '<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>DataConfig</a>.</p> </note> <p>The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.</p>',
  })
  .openapi('InputDataConfig')

const FeaturizationMethodNameSchema = z.literal('filling').openapi('FeaturizationMethodName')

const FeaturizationMethodParametersSchema = z
  .record(z.string(), ParameterValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('FeaturizationMethodParameters')

const FeaturizationMethodSchema = z
  .object({
    FeaturizationMethodName: FeaturizationMethodNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the method. The "filling" method is the only supported method.',
        }),
    ),
    FeaturizationMethodParameters: FeaturizationMethodParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to override the default values. Related Time Series attributes do not accept aggregation parameters.</p> <p>The following list shows the parameters and their valid values for the "filling" featurization method for a <b>Target Time Series</b> dataset. Bold signifies the default value.</p> <ul> <li> <p> <code>aggregation</code>: <b>sum</b>, <code>avg</code>, <code>first</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>frontfill</code>: <b>none</b> </p> </li> <li> <p> <code>middlefill</code>: <b>zero</b>, <code>nan</code> (not a number), <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>backfill</code>: <b>zero</b>, <code>nan</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> </ul> <p>The following list shows the parameters and their valid values for a <b>Related Time Series</b> featurization method (there are no defaults):</p> <ul> <li> <p> <code>middlefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>backfill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> <li> <p> <code>futurefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code> </p> </li> </ul> <p>To set a filling method to a specific value, set the fill parameter to <code>value</code> and define the value in a corresponding <code>_value</code> parameter. For example, to set backfilling to a value of 2, include the following: <code>"backfill": "value"</code> and <code>"backfill_value":"2"</code>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FeaturizationMethodName'],
    description:
      '<p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>',
  })
  .openapi('FeaturizationMethod')

const FeaturizationPipelineSchema = z
  .array(FeaturizationMethodSchema)
  .length(1)
  .openapi('FeaturizationPipeline')

const FeaturizationSchema = z
  .object({
    AttributeName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the schema attribute that specifies the data field to be featurized. Amazon Forecast supports the target field of the <code>TARGET_TIME_SERIES</code> and the <code>RELATED_TIME_SERIES</code> datasets. For example, for the <code>RETAIL</code> domain, the target is <code>demand</code>, and for the <code>CUSTOM</code> domain, the target is <code>target_value</code>. For more information, see <a>howitworks-missing-values</a>.',
        }),
    ),
    FeaturizationPipeline: FeaturizationPipelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of one <code>FeaturizationMethod</code> object that specifies the feature transformation method.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AttributeName'],
    description:
      '<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p>',
  })
  .openapi('Featurization')

const FeaturizationsSchema = z.array(FeaturizationSchema).min(1).max(50).openapi('Featurizations')

const FeaturizationConfigSchema = z
  .object({
    ForecastFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frequency of predictions in a forecast.</p> <p>Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:</p> <ul> <li> <p>Minute - 1-59</p> </li> <li> <p>Hour - 1-23</p> </li> <li> <p>Day - 1-6</p> </li> <li> <p>Week - 1-4</p> </li> <li> <p>Month - 1-11</p> </li> <li> <p>Year - 1</p> </li> </ul> <p>Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".</p> <p>The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset frequency.</p> <p>When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the TARGET_TIME_SERIES dataset frequency.</p>',
        }),
    ),
    ForecastDimensions: ForecastDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of dimension (field) names that specify how to group the generated forecast.</p> <p>For example, suppose that you are generating a forecast for item sales across all of your stores, and your dataset contains a <code>store_id</code> field. If you want the sales forecast for each item by store, you would specify <code>store_id</code> as the dimension.</p> <p>All forecast dimensions specified in the <code>TARGET_TIME_SERIES</code> dataset don't need to be specified in the <code>CreatePredictor</code> request. All forecast dimensions specified in the <code>RELATED_TIME_SERIES</code> dataset must be specified in the <code>CreatePredictor</code> request.</p>",
        }),
    ).exactOptional(),
    Featurizations: FeaturizationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of featurization (transformation) information for the fields of a dataset.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ForecastFrequency'],
    description:
      '<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p>',
  })
  .openapi('FeaturizationConfig')

const CreatePredictorRequestSchema = z
  .object({
    PredictorName: NameSchema.and(z.any().openapi({ description: 'A name for the predictor.' })),
    AlgorithmArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the algorithm to use for model training. Required if <code>PerformAutoML</code> is not set to <code>true</code>.</p> <p class="title"> <b>Supported algorithms:</b> </p> <ul> <li> <p> <code>arn:aws:forecast:::algorithm/ARIMA</code> </p> </li> <li> <p> <code>arn:aws:forecast:::algorithm/CNN-QR</code> </p> </li> <li> <p> <code>arn:aws:forecast:::algorithm/Deep_AR_Plus</code> </p> </li> <li> <p> <code>arn:aws:forecast:::algorithm/ETS</code> </p> </li> <li> <p> <code>arn:aws:forecast:::algorithm/NPTS</code> </p> </li> <li> <p> <code>arn:aws:forecast:::algorithm/Prophet</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ForecastHorizon: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the number of time-steps that the model is trained to predict. The forecast horizon is also called the prediction length.</p> <p>For example, if you configure a dataset for daily data collection (using the <code>DataFrequency</code> parameter of the <a>CreateDataset</a> operation) and set the forecast horizon to 10, the model returns predictions for 10 days.</p> <p>The maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset length.</p>',
        }),
    ),
    ForecastTypes: ForecastTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the forecast types used to train a predictor. You can specify up to five forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with <code>mean</code>. </p> <p>The default value is <code>["0.10", "0.50", "0.9"]</code>.</p>',
        }),
    ).exactOptional(),
    PerformAutoML: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Whether to perform AutoML. When Amazon Forecast performs AutoML, it evaluates the algorithms it provides and chooses the best algorithm and configuration for your training dataset.</p> <p>The default value is <code>false</code>. In this case, you are required to specify an algorithm.</p> <p>Set <code>PerformAutoML</code> to <code>true</code> to have Amazon Forecast perform AutoML. This is a good option if you aren't sure which algorithm is suitable for your training data. In this case, <code>PerformHPO</code> must be false.</p>",
        }),
    ).exactOptional(),
    AutoMLOverrideStrategy: AutoMLOverrideStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. </p> </note> <p>Used to overide the default AutoML strategy, which is to optimize predictor accuracy. To apply an AutoML strategy that minimizes training time, use <code>LatencyOptimized</code>.</p> <p>This parameter is only valid for predictors trained using AutoML.</p>',
        }),
    ).exactOptional(),
    PerformHPO: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to perform hyperparameter optimization (HPO). HPO finds optimal hyperparameter values for your training data. The process of performing HPO is known as running a hyperparameter tuning job.</p> <p>The default value is <code>false</code>. In this case, Amazon Forecast uses default hyperparameter values from the chosen algorithm.</p> <p>To override the default values, set <code>PerformHPO</code> to <code>true</code> and, optionally, supply the <a>HyperParameterTuningJobConfig</a> object. The tuning job specifies a metric to optimize, which hyperparameters participate in tuning, and the valid range for each tunable hyperparameter. In this case, you are required to specify an algorithm and <code>PerformAutoML</code> must be false.</p> <p>The following algorithms support HPO:</p> <ul> <li> <p>DeepAR+</p> </li> <li> <p>CNN-QR</p> </li> </ul>',
        }),
    ).exactOptional(),
    TrainingParameters: TrainingParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The hyperparameters to override for model training. The hyperparameters that you can override are listed in the individual algorithms. For the list of supported algorithms, see <a>aws-forecast-choosing-recipes</a>.',
        }),
    ).exactOptional(),
    EvaluationParameters: EvaluationParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.',
        }),
    ).exactOptional(),
    HPOConfig: HyperParameterTuningJobConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Provides hyperparameter override values for the algorithm. If you don't provide this parameter, Amazon Forecast uses default values. The individual algorithms specify which hyperparameters support hyperparameter optimization (HPO). For more information, see <a>aws-forecast-choosing-recipes</a>.</p> <p>If you included the <code>HPOConfig</code> object, you must set <code>PerformHPO</code> to true.</p>",
        }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the dataset group that contains the data to use to train the predictor.',
        }),
    ),
    FeaturizationConfig: FeaturizationConfigSchema.and(
      z.any().openapi({ description: 'The featurization configuration.' }),
    ),
    EncryptionConfig: EncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional metadata that you apply to the predictor to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OptimizationMetric: OptimizationMetricSchema.and(
      z.any().openapi({ description: 'The accuracy metric used to optimize the predictor.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PredictorName', 'ForecastHorizon', 'InputDataConfig', 'FeaturizationConfig'],
    title: 'CreatePredictorRequest',
  })
  .openapi('CreatePredictorRequest')

const CreatePredictorBacktestExportJobResponseSchema = z
  .object({
    PredictorBacktestExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the predictor backtest export job that you want to export.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePredictorBacktestExportJobResponse')

const CreatePredictorBacktestExportJobRequestSchema = z
  .object({
    PredictorBacktestExportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name for the backtest export job.' }),
    ),
    PredictorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the predictor that you want to export.',
        }),
    ),
    Destination: DataDestinationSchema,
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional metadata to help you categorize and organize your backtests. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>For each resource, each tag key must be unique and each tag key must have one value.</p> </li> <li> <p>Maximum number of tags per resource: 50.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. </p> </li> <li> <p>Key prefixes cannot include any upper or lowercase combination of <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z
        .any()
        .openapi({
          description: 'The format of the exported data, CSV or PARQUET. The default value is CSV.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PredictorBacktestExportJobName', 'PredictorArn', 'Destination'],
    title: 'CreatePredictorBacktestExportJobRequest',
  })
  .openapi('CreatePredictorBacktestExportJobRequest')

const CreateWhatIfAnalysisResponseSchema = z
  .object({
    WhatIfAnalysisArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if analysis.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWhatIfAnalysisResponse')

const CreateWhatIfAnalysisRequestSchema = z
  .object({
    WhatIfAnalysisName: NameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the what-if analysis. Each name must be unique.' }),
    ),
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the baseline forecast.' }),
    ),
    TimeSeriesSelector: TimeSeriesSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the set of time series that are used in the what-if analysis with a <code>TimeSeriesIdentifiers</code> object. What-if analyses are performed only for the time series in this object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WhatIfAnalysisName', 'ForecastArn'],
    title: 'CreateWhatIfAnalysisRequest',
  })
  .openapi('CreateWhatIfAnalysisRequest')

const LongArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):forecast:.*:.*:.+/)
  .max(300)
  .openapi('LongArn')

const CreateWhatIfForecastResponseSchema = z
  .object({
    WhatIfForecastArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if forecast.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWhatIfForecastResponse')

const OperationSchema = z.enum(['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE']).openapi('Operation')

const ActionSchema = z
  .object({
    AttributeName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The related time series that you are modifying. This value is case insensitive.',
        }),
    ),
    Operation: OperationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operation that is applied to the provided attribute. Operations include:</p> <ul> <li> <p> <code>ADD</code> - adds <code>Value</code> to all rows of <code>AttributeName</code>.</p> </li> <li> <p> <code>SUBTRACT</code> - subtracts <code>Value</code> from all rows of <code>AttributeName</code>.</p> </li> <li> <p> <code>MULTIPLY</code> - multiplies all rows of <code>AttributeName</code> by <code>Value</code>.</p> </li> <li> <p> <code>DIVIDE</code> - divides all rows of <code>AttributeName</code> by <code>Value</code>.</p> </li> </ul>',
        }),
    ),
    Value: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that is applied for the chosen <code>Operation</code>.',
        }),
    ),
  })
  .openapi({
    required: ['AttributeName', 'Operation', 'Value'],
    description:
      'Defines the modifications that you are making to an attribute for a what-if forecast. For example, you can use this operation to create a what-if forecast that investigates a 10% off sale on all shoes. To do this, you specify <code>"AttributeName": "shoes"</code>, <code>"Operation": "MULTIPLY"</code>, and <code>"Value": "0.90"</code>. Pair this operation with the <a>TimeSeriesCondition</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define a subset of attribute items that are modified.',
  })
  .openapi('Action')

const AttributeValueSchema = z.string().regex(/.+/).max(256).openapi('AttributeValue')

const ConditionSchema = z
  .enum(['EQUALS', 'NOT_EQUALS', 'LESS_THAN', 'GREATER_THAN'])
  .openapi('Condition')

const TimeSeriesConditionSchema = z
  .object({
    AttributeName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The item_id, dimension name, IM name, or timestamp that you are modifying.',
        }),
    ),
    AttributeValue: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that is applied for the chosen <code>Condition</code>.',
        }),
    ),
    Condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The condition to apply. Valid values are <code>EQUALS</code>, <code>NOT_EQUALS</code>, <code>LESS_THAN</code> and <code>GREATER_THAN</code>.',
        }),
    ),
  })
  .openapi({
    required: ['AttributeName', 'AttributeValue', 'Condition'],
    description:
      'Creates a subset of items within an attribute that are modified. For example, you can use this operation to create a subset of items that cost $5 or less. To do this, you specify <code>"AttributeName": "price"</code>, <code>"AttributeValue": "5"</code>, and <code>"Condition": "LESS_THAN"</code>. Pair this operation with the <a>Action</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define how the attribute is modified.',
  })
  .openapi('TimeSeriesCondition')

const TimeSeriesConditionsSchema = z
  .array(TimeSeriesConditionSchema)
  .min(0)
  .max(10)
  .openapi('TimeSeriesConditions')

const TimeSeriesTransformationSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of actions that define a time series and how it is transformed. These transformations create a new time series that is used for the what-if analysis.',
        }),
    ).exactOptional(),
    TimeSeriesConditions: TimeSeriesConditionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of conditions that define which members of the related time series are transformed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed.',
    required: [],
  })
  .openapi('TimeSeriesTransformation')

const TimeSeriesTransformationsSchema = z
  .array(TimeSeriesTransformationSchema)
  .min(0)
  .max(30)
  .openapi('TimeSeriesTransformations')

const TimeSeriesReplacementsDataSourceSchema = z
  .object({
    S3Config: S3ConfigSchema,
    Schema: SchemaSchema,
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the replacement data, CSV or PARQUET.' }),
    ).exactOptional(),
    TimestampFormat: TimestampFormatSchema.and(
      z.any().openapi({ description: 'The timestamp format of the replacement data.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Config', 'Schema'],
    description:
      'A replacement dataset is a modified version of the baseline related time series that contains only the values that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is merged with the baseline related time series to create a transformed dataset that is used for the what-if forecast.',
  })
  .openapi('TimeSeriesReplacementsDataSource')

const CreateWhatIfForecastRequestSchema = z
  .object({
    WhatIfForecastName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the what-if forecast. Names must be unique within each what-if analysis.',
        }),
    ),
    WhatIfAnalysisArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if analysis.' }),
    ),
    TimeSeriesTransformations: TimeSeriesTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The transformations that are applied to the baseline time series. Each transformation contains an action and a set of conditions. An action is applied only when all conditions are met. If no conditions are provided, the action is applied to all items.',
        }),
    ).exactOptional(),
    TimeSeriesReplacementsDataSource: TimeSeriesReplacementsDataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The replacement time series dataset, which contains the rows that you want to change in the related time series dataset. A replacement time series does not need to contain all rows that are in the baseline related time series. Include only the rows (measure-dimension combinations) that you want to include in the what-if forecast.</p> <p>This dataset is merged with the original time series to create a transformed dataset that is used for the what-if analysis.</p> <p>This dataset should contain the items to modify (such as item_id or workforce_type), any relevant dimensions, the timestamp column, and at least one of the related time series columns. This file should not contain duplicate timestamps for the same time series.</p> <p>Timestamps and item_ids not included in this dataset are not included in the what-if analysis. </p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WhatIfForecastName', 'WhatIfAnalysisArn'],
    title: 'CreateWhatIfForecastRequest',
  })
  .openapi('CreateWhatIfForecastRequest')

const CreateWhatIfForecastExportResponseSchema = z
  .object({
    WhatIfForecastExportArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if forecast.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWhatIfForecastExportResponse')

const WhatIfForecastArnListForExportSchema = z
  .array(LongArnSchema)
  .min(1)
  .max(50)
  .openapi('WhatIfForecastArnListForExport')

const CreateWhatIfForecastExportRequestSchema = z
  .object({
    WhatIfForecastExportName: NameSchema.and(
      z.any().openapi({ description: 'The name of the what-if forecast to export.' }),
    ),
    WhatIfForecastArns: WhatIfForecastArnListForExportSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of what-if forecast Amazon Resource Names (ARNs) to export.',
        }),
    ),
    Destination: DataDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location where you want to save the forecast and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3 bucket.</p> <p>If encryption is used, <code>Destination</code> must include an Key Management Service (KMS) key. The IAM role must allow Amazon Forecast permission to access the key.</p>',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the exported data, CSV or PARQUET.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WhatIfForecastExportName', 'WhatIfForecastArns', 'Destination'],
    title: 'CreateWhatIfForecastExportRequest',
  })
  .openapi('CreateWhatIfForecastExportRequest')

const DeleteDatasetRequestSchema = z
  .object({
    DatasetArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset to delete.' }),
    ),
  })
  .openapi({ required: ['DatasetArn'], title: 'DeleteDatasetRequest' })
  .openapi('DeleteDatasetRequest')

const DeleteDatasetGroupRequestSchema = z
  .object({
    DatasetGroupArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the dataset group to delete.' }),
    ),
  })
  .openapi({ required: ['DatasetGroupArn'], title: 'DeleteDatasetGroupRequest' })
  .openapi('DeleteDatasetGroupRequest')

const DeleteDatasetImportJobRequestSchema = z
  .object({
    DatasetImportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the dataset import job to delete.',
        }),
    ),
  })
  .openapi({ required: ['DatasetImportJobArn'], title: 'DeleteDatasetImportJobRequest' })
  .openapi('DeleteDatasetImportJobRequest')

const DeleteExplainabilityRequestSchema = z
  .object({
    ExplainabilityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Explainability resource to delete.',
        }),
    ),
  })
  .openapi({ required: ['ExplainabilityArn'], title: 'DeleteExplainabilityRequest' })
  .openapi('DeleteExplainabilityRequest')

const DeleteExplainabilityExportRequestSchema = z
  .object({
    ExplainabilityExportArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Explainability export to delete. ',
        }),
    ),
  })
  .openapi({ required: ['ExplainabilityExportArn'], title: 'DeleteExplainabilityExportRequest' })
  .openapi('DeleteExplainabilityExportRequest')

const DeleteForecastRequestSchema = z
  .object({
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the forecast to delete.' }),
    ),
  })
  .openapi({ required: ['ForecastArn'], title: 'DeleteForecastRequest' })
  .openapi('DeleteForecastRequest')

const DeleteForecastExportJobRequestSchema = z
  .object({
    ForecastExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the forecast export job to delete.',
        }),
    ),
  })
  .openapi({ required: ['ForecastExportJobArn'], title: 'DeleteForecastExportJobRequest' })
  .openapi('DeleteForecastExportJobRequest')

const DeleteMonitorRequestSchema = z
  .object({
    MonitorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the monitor resource to delete.',
        }),
    ),
  })
  .openapi({ required: ['MonitorArn'], title: 'DeleteMonitorRequest' })
  .openapi('DeleteMonitorRequest')

const DeletePredictorRequestSchema = z
  .object({
    PredictorArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the predictor to delete.' }),
    ),
  })
  .openapi({ required: ['PredictorArn'], title: 'DeletePredictorRequest' })
  .openapi('DeletePredictorRequest')

const DeletePredictorBacktestExportJobRequestSchema = z
  .object({
    PredictorBacktestExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the predictor backtest export job to delete.',
        }),
    ),
  })
  .openapi({
    required: ['PredictorBacktestExportJobArn'],
    title: 'DeletePredictorBacktestExportJobRequest',
  })
  .openapi('DeletePredictorBacktestExportJobRequest')

const DeleteResourceTreeRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the parent resource to delete. All child resources of the parent resource will also be deleted.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeleteResourceTreeRequest' })
  .openapi('DeleteResourceTreeRequest')

const DeleteWhatIfAnalysisRequestSchema = z
  .object({
    WhatIfAnalysisArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if analysis that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['WhatIfAnalysisArn'], title: 'DeleteWhatIfAnalysisRequest' })
  .openapi('DeleteWhatIfAnalysisRequest')

const DeleteWhatIfForecastRequestSchema = z
  .object({
    WhatIfForecastArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if forecast that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['WhatIfForecastArn'], title: 'DeleteWhatIfForecastRequest' })
  .openapi('DeleteWhatIfForecastRequest')

const DeleteWhatIfForecastExportRequestSchema = z
  .object({
    WhatIfForecastExportArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if forecast export that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['WhatIfForecastExportArn'], title: 'DeleteWhatIfForecastExportRequest' })
  .openapi('DeleteWhatIfForecastExportRequest')

const LongSchema = z.int().openapi('Long')

const MessageSchema = z.string().openapi('Message')

const ExplainabilityInfoSchema = z
  .object({
    ExplainabilityArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Explainability. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about the Explainability resource.', required: [] })
  .openapi('ExplainabilityInfo')

const MonitorInfoSchema = z
  .object({
    MonitorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the monitor resource.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the monitor. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>ACTIVE_STOPPING</code>, <code>ACTIVE_STOPPED</code> </p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about the monitor resource.', required: [] })
  .openapi('MonitorInfo')

const DescribeAutoPredictorResponseSchema = z
  .object({
    PredictorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the predictor' }),
    ).exactOptional(),
    PredictorName: NameSchema.and(
      z.any().openapi({ description: 'The name of the predictor.' }),
    ).exactOptional(),
    ForecastHorizon: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.',
        }),
    ).exactOptional(),
    ForecastTypes: ForecastTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forecast types used during predictor training. Default value is ["0.1","0.5","0.9"].',
        }),
    ).exactOptional(),
    ForecastFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frequency of predictions in a forecast.</p> <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "Y" indicates every year and "5min" indicates every five minutes.</p>',
        }),
    ).exactOptional(),
    ForecastDimensions: ForecastDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of dimension (field) names that specify the attributes used to group your time series.',
        }),
    ).exactOptional(),
    DatasetImportJobArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the ARNs of the dataset import jobs used to import training data for the predictor.',
        }),
    ).exactOptional(),
    DataConfig: DataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The data configuration for your dataset group and any additional datasets.',
        }),
    ).exactOptional(),
    EncryptionConfig: EncryptionConfigSchema.exactOptional(),
    ReferencePredictorSummary: ReferencePredictorSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN and state of the reference predictor. This parameter is only valid for retrained or upgraded predictors.',
        }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated time remaining in minutes for the predictor training job to complete.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the predictor. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'In the event of an error, a message detailing the cause of the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the CreateAutoPredictor request.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OptimizationMetric: OptimizationMetricSchema.and(
      z.any().openapi({ description: 'The accuracy metric used to optimize the predictor.' }),
    ).exactOptional(),
    ExplainabilityInfo: ExplainabilityInfoSchema.and(
      z
        .any()
        .openapi({ description: 'Provides the status and ARN of the Predictor Explainability.' }),
    ).exactOptional(),
    MonitorInfo: MonitorInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A object with the Amazon Resource Name (ARN) and status of the monitor resource.',
        }),
    ).exactOptional(),
    TimeAlignmentBoundary: TimeAlignmentBoundarySchema.and(
      z.any().openapi({ description: 'The time boundary Forecast uses when aggregating data.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAutoPredictorResponse')

const DescribeAutoPredictorRequestSchema = z
  .object({
    PredictorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the predictor.' }),
    ),
  })
  .openapi({ required: ['PredictorArn'], title: 'DescribeAutoPredictorRequest' })
  .openapi('DescribeAutoPredictorRequest')

const DescribeDatasetResponseSchema = z
  .object({
    DatasetArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset.' }),
    ).exactOptional(),
    DatasetName: NameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    Domain: DomainSchema.and(
      z.any().openapi({ description: 'The domain associated with the dataset.' }),
    ).exactOptional(),
    DatasetType: DatasetTypeSchema.and(
      z.any().openapi({ description: 'The dataset type.' }),
    ).exactOptional(),
    DataFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frequency of data collection.</p> <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "M" indicates every month and "30min" indicates every 30 minutes.</p>',
        }),
    ).exactOptional(),
    Schema: SchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>SchemaAttribute</code> objects that specify the dataset fields. Each <code>SchemaAttribute</code> specifies the name and data type of a field.',
        }),
    ).exactOptional(),
    EncryptionConfig: EncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the dataset. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> <li> <p> <code>UPDATE_PENDING</code>, <code>UPDATE_IN_PROGRESS</code>, <code>UPDATE_FAILED</code> </p> </li> </ul> <p>The <code>UPDATE</code> states apply while data is imported to the dataset from a call to the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation and reflect the status of the dataset import job. For example, when the import job status is <code>CREATE_IN_PROGRESS</code>, the status of the dataset is <code>UPDATE_IN_PROGRESS</code>.</p> <note> <p>The <code>Status</code> of the dataset must be <code>ACTIVE</code> before you can import training data.</p> </note>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the dataset was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you create a dataset, <code>LastModificationTime</code> is the same as <code>CreationTime</code>. While data is being imported to the dataset, <code>LastModificationTime</code> is the current time of the <code>DescribeDataset</code> call. After a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation has finished, <code>LastModificationTime</code> is when the import job completed or failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetResponse')

const DescribeDatasetRequestSchema = z
  .object({
    DatasetArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset.' }),
    ),
  })
  .openapi({ required: ['DatasetArn'], title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const DescribeDatasetGroupResponseSchema = z
  .object({
    DatasetGroupName: NameSchema.and(
      z.any().openapi({ description: 'The name of the dataset group.' }),
    ).exactOptional(),
    DatasetGroupArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset group.' }),
    ).exactOptional(),
    DatasetArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset group.',
        }),
    ).exactOptional(),
    Domain: DomainSchema.and(
      z.any().openapi({ description: 'The domain associated with the dataset group.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the dataset group. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> <li> <p> <code>UPDATE_PENDING</code>, <code>UPDATE_IN_PROGRESS</code>, <code>UPDATE_FAILED</code> </p> </li> </ul> <p>The <code>UPDATE</code> states apply when you call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor.</p> </note>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the dataset group was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the dataset group was created or last updated from a call to the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation. While the dataset group is being updated, <code>LastModificationTime</code> is the current time of the <code>DescribeDatasetGroup</code> call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetGroupResponse')

const DescribeDatasetGroupRequestSchema = z
  .object({
    DatasetGroupArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset group.' }),
    ),
  })
  .openapi({ required: ['DatasetGroupArn'], title: 'DescribeDatasetGroupRequest' })
  .openapi('DescribeDatasetGroupRequest')

const StringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\_]+$/)
  .max(256)
  .openapi('String')

const StatisticsSchema = z
  .object({
    Count: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of values in the field. If the response value is -1, refer to <code>CountLong</code>.',
        }),
    ).exactOptional(),
    CountDistinct: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of distinct values in the field. If the response value is -1, refer to <code>CountDistinctLong</code>.',
        }),
    ).exactOptional(),
    CountNull: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of null values in the field. If the response value is -1, refer to <code>CountNullLong</code>.',
        }),
    ).exactOptional(),
    CountNan: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of NAN (not a number) values in the field. If the response value is -1, refer to <code>CountNanLong</code>.',
        }),
    ).exactOptional(),
    Min: StringSchema.and(
      z.any().openapi({ description: 'For a numeric field, the minimum value in the field.' }),
    ).exactOptional(),
    Max: StringSchema.and(
      z.any().openapi({ description: 'For a numeric field, the maximum value in the field.' }),
    ).exactOptional(),
    Avg: DoubleSchema.and(
      z.any().openapi({ description: 'For a numeric field, the average value in the field.' }),
    ).exactOptional(),
    Stddev: DoubleSchema.and(
      z.any().openapi({ description: 'For a numeric field, the standard deviation.' }),
    ).exactOptional(),
    CountLong: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of values in the field. <code>CountLong</code> is used instead of <code>Count</code> if the value is greater than 2,147,483,647.',
        }),
    ).exactOptional(),
    CountDistinctLong: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of distinct values in the field. <code>CountDistinctLong</code> is used instead of <code>CountDistinct</code> if the value is greater than 2,147,483,647.',
        }),
    ).exactOptional(),
    CountNullLong: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of null values in the field. <code>CountNullLong</code> is used instead of <code>CountNull</code> if the value is greater than 2,147,483,647.',
        }),
    ).exactOptional(),
    CountNanLong: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of NAN (not a number) values in the field. <code>CountNanLong</code> is used instead of <code>CountNan</code> if the value is greater than 2,147,483,647.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.',
    required: [],
  })
  .openapi('Statistics')

const FieldStatisticsSchema = z.record(z.string(), StatisticsSchema).openapi('FieldStatistics')

const DescribeDatasetImportJobResponseSchema = z
  .object({
    DatasetImportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name of the dataset import job.' }),
    ).exactOptional(),
    DatasetImportJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset import job.' }),
    ).exactOptional(),
    DatasetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the dataset that the training data was imported to.',
        }),
    ).exactOptional(),
    TimestampFormat: TimestampFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of timestamps in the dataset. The format that you specify depends on the <code>DataFrequency</code> specified when the dataset was created. The following formats are supported</p> <ul> <li> <p>"yyyy-MM-dd"</p> <p>For the following data frequencies: Y, M, W, and D</p> </li> <li> <p>"yyyy-MM-dd HH:mm:ss"</p> <p>For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D</p> </li> </ul>',
        }),
    ).exactOptional(),
    TimeZone: TimeZoneSchema.and(
      z.any().openapi({ description: 'The single time zone applied to every item in the dataset' }),
    ).exactOptional(),
    UseGeolocationForTimeZone: UseGeolocationForTimeZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether <code>TimeZone</code> is automatically derived from the geolocation attribute.',
        }),
    ).exactOptional(),
    GeolocationFormat: GeolocationFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the geolocation attribute. Valid Values:<code>"LAT_LONG"</code> and <code>"CC_POSTALCODE"</code>.',
        }),
    ).exactOptional(),
    DataSource: DataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data.</p> <p>If encryption is used, <code>DataSource</code> includes an Key Management Service (KMS) key.</p>',
        }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated time remaining in minutes for the dataset import job to complete.',
        }),
    ).exactOptional(),
    FieldStatistics: FieldStatisticsSchema.and(
      z
        .any()
        .openapi({ description: 'Statistical information about each field in the input data.' }),
    ).exactOptional(),
    DataSize: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the dataset in gigabytes (GB) after the import job has finished.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the dataset import job. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the dataset import job was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the imported data, CSV or PARQUET.' }),
    ).exactOptional(),
    ImportMode: ImportModeSchema.and(
      z
        .any()
        .openapi({
          description: 'The import mode of the dataset import job, FULL or INCREMENTAL.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetImportJobResponse')

const DescribeDatasetImportJobRequestSchema = z
  .object({
    DatasetImportJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset import job.' }),
    ),
  })
  .openapi({ required: ['DatasetImportJobArn'], title: 'DescribeDatasetImportJobRequest' })
  .openapi('DescribeDatasetImportJobRequest')

const DescribeExplainabilityResponseSchema = z
  .object({
    ExplainabilityArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability.' }),
    ).exactOptional(),
    ExplainabilityName: NameSchema.and(
      z.any().openapi({ description: 'The name of the Explainability.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability resource.',
        }),
    ).exactOptional(),
    ExplainabilityConfig: ExplainabilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that define the granularity of time series and time points for the Explainability.',
        }),
    ).exactOptional(),
    EnableVisualization: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the visualization was enabled for the Explainability resource.',
        }),
    ).exactOptional(),
    DataSource: DataSourceSchema.exactOptional(),
    Schema: SchemaSchema.exactOptional(),
    StartDateTime: LocalDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, the first time point in the Explainability.',
        }),
    ).exactOptional(),
    EndDateTime: LocalDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, the last time point in the Explainability.',
        }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated time remaining in minutes for the <a>CreateExplainability</a> job to complete.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z.any().openapi({ description: 'If an error occurred, a message about the error.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Explainability resource. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the Explainability resource was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExplainabilityResponse')

const DescribeExplainabilityRequestSchema = z
  .object({
    ExplainabilityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Explaianability to describe.',
        }),
    ),
  })
  .openapi({ required: ['ExplainabilityArn'], title: 'DescribeExplainabilityRequest' })
  .openapi('DescribeExplainabilityRequest')

const DescribeExplainabilityExportResponseSchema = z
  .object({
    ExplainabilityExportArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability export.' }),
    ).exactOptional(),
    ExplainabilityExportName: NameSchema.and(
      z.any().openapi({ description: 'The name of the Explainability export.' }),
    ).exactOptional(),
    ExplainabilityArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability export.' }),
    ).exactOptional(),
    Destination: DataDestinationSchema.exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({ description: 'Information about any errors that occurred during the export.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Explainability export. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the Explainability export was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the exported data, CSV or PARQUET.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExplainabilityExportResponse')

const DescribeExplainabilityExportRequestSchema = z
  .object({
    ExplainabilityExportArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability export.' }),
    ),
  })
  .openapi({ required: ['ExplainabilityExportArn'], title: 'DescribeExplainabilityExportRequest' })
  .openapi('DescribeExplainabilityExportRequest')

const DescribeForecastResponseSchema = z
  .object({
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The forecast ARN as specified in the request.' }),
    ).exactOptional(),
    ForecastName: NameSchema.and(
      z.any().openapi({ description: 'The name of the forecast.' }),
    ).exactOptional(),
    ForecastTypes: ForecastTypesSchema.and(
      z
        .any()
        .openapi({ description: 'The quantiles at which probabilistic forecasts were generated.' }),
    ).exactOptional(),
    PredictorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the predictor used to generate the forecast.' }),
    ).exactOptional(),
    DatasetGroupArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the dataset group that provided the data used to train the predictor.',
        }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The estimated time remaining in minutes for the forecast job to complete.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the forecast. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the forecast creation task was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TimeSeriesSelector: TimeSeriesSelectorSchema.and(
      z.any().openapi({ description: 'The time series to include in the forecast.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeForecastResponse')

const DescribeForecastRequestSchema = z
  .object({
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the forecast.' }),
    ),
  })
  .openapi({ required: ['ForecastArn'], title: 'DescribeForecastRequest' })
  .openapi('DescribeForecastRequest')

const DescribeForecastExportJobResponseSchema = z
  .object({
    ForecastExportJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the forecast export job.' }),
    ).exactOptional(),
    ForecastExportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name of the forecast export job.' }),
    ).exactOptional(),
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the exported forecast.' }),
    ).exactOptional(),
    Destination: DataDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the forecast export job. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your S3 bucket.</p> </note>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the forecast export job was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the exported data, CSV or PARQUET.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeForecastExportJobResponse')

const DescribeForecastExportJobRequestSchema = z
  .object({
    ForecastExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the forecast export job.' }),
    ),
  })
  .openapi({ required: ['ForecastExportJobArn'], title: 'DescribeForecastExportJobRequest' })
  .openapi('DescribeForecastExportJobRequest')

const EvaluationStateSchema = z.string().max(256).openapi('EvaluationState')

const BaselineSchema: z.ZodType<BaselineType> = z
  .lazy(() =>
    z
      .object({
        PredictorBaseline: PredictorBaselineSchema.and(
          z
            .any()
            .openapi({
              description:
                'The initial <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">accuracy metrics</a> for the predictor you are monitoring. Use these metrics as a baseline for comparison purposes as you use your predictor and the metrics change.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.',
        required: [],
      }),
  )
  .openapi('Baseline')

const DescribeMonitorResponseSchema = z
  .object({
    MonitorName: NameSchema.and(
      z.any().openapi({ description: 'The name of the monitor.' }),
    ).exactOptional(),
    MonitorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the monitor resource described.',
        }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the auto predictor being monitored.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the monitor resource.' }),
    ).exactOptional(),
    LastEvaluationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the latest evaluation completed by the monitor.',
        }),
    ).exactOptional(),
    LastEvaluationState: EvaluationStateSchema.and(
      z.any().openapi({ description: "The state of the monitor's latest evaluation." }),
    ).exactOptional(),
    Baseline: BaselineSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metrics you can use as a baseline for comparison purposes. Use these values you interpret monitoring results for an auto predictor.',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z.any().openapi({ description: 'An error message, if any, for the monitor.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp for when the monitor resource was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the latest modification to the monitor.' }),
    ).exactOptional(),
    EstimatedEvaluationTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated number of minutes remaining before the monitor resource finishes its current evaluation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMonitorResponse')

const DescribeMonitorRequestSchema = z
  .object({
    MonitorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the monitor resource to describe.',
        }),
    ),
  })
  .openapi({ required: ['MonitorArn'], title: 'DescribeMonitorRequest' })
  .openapi('DescribeMonitorRequest')

const TestWindowSummarySchema = z
  .object({
    TestWindowStart: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the test began.' }),
    ).exactOptional(),
    TestWindowEnd: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the test ended.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the test. Possible status values are:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> </p> </li> <li> <p> <code>CREATE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z.any().openapi({ description: 'If the test failed, the reason why it failed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The status, start time, and end time of a backtest, as well as a failure reason if applicable.',
    required: [],
  })
  .openapi('TestWindowSummary')

const TestWindowDetailsSchema = z.array(TestWindowSummarySchema).openapi('TestWindowDetails')

const PredictorExecutionSchema = z
  .object({
    AlgorithmArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the algorithm used to test the predictor.' }),
    ).exactOptional(),
    TestWindows: TestWindowDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of test windows used to evaluate the algorithm. The <code>NumberOfBacktestWindows</code> from the object determines the number of windows in the array.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The algorithm used to perform a backtest and the status of those tests.',
    required: [],
  })
  .openapi('PredictorExecution')

const PredictorExecutionsSchema = z
  .array(PredictorExecutionSchema)
  .min(1)
  .max(5)
  .openapi('PredictorExecutions')

const PredictorExecutionDetailsSchema = z
  .object({
    PredictorExecutions: PredictorExecutionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the backtests performed to evaluate the accuracy of the predictor against a particular algorithm. The <code>NumberOfBacktestWindows</code> from the object determines the number of windows in the array.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.',
    required: [],
  })
  .openapi('PredictorExecutionDetails')

const DescribePredictorResponseSchema = z
  .object({
    PredictorArn: NameSchema.and(
      z.any().openapi({ description: 'The ARN of the predictor.' }),
    ).exactOptional(),
    PredictorName: NameSchema.and(
      z.any().openapi({ description: 'The name of the predictor.' }),
    ).exactOptional(),
    AlgorithmArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the algorithm used for model training.',
        }),
    ).exactOptional(),
    AutoMLAlgorithmArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>PerformAutoML</code> is specified, the ARN of the chosen algorithm.',
        }),
    ).exactOptional(),
    ForecastHorizon: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of time-steps of the forecast. The forecast horizon is also called the prediction length.',
        }),
    ).exactOptional(),
    ForecastTypes: ForecastTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forecast types used during predictor training. Default value is <code>["0.1","0.5","0.9"]</code> ',
        }),
    ).exactOptional(),
    PerformAutoML: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the predictor is set to perform AutoML.' }),
    ).exactOptional(),
    AutoMLOverrideStrategy: AutoMLOverrideStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. </p> </note> <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code> is specified, the AutoML strategy optimizes predictor accuracy.</p> <p>This parameter is only valid for predictors trained using AutoML.</p>',
        }),
    ).exactOptional(),
    PerformHPO: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the predictor is set to perform hyperparameter optimization (HPO).',
        }),
    ).exactOptional(),
    TrainingParameters: TrainingParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default training parameters or overrides selected during model training. When running AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen hyperparameters are returned. For more information, see <a>aws-forecast-choosing-recipes</a>.',
        }),
    ).exactOptional(),
    EvaluationParameters: EvaluationParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.',
        }),
    ).exactOptional(),
    HPOConfig: HyperParameterTuningJobConfigSchema.and(
      z.any().openapi({ description: 'The hyperparameter override values for the algorithm.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the dataset group that contains the data to use to train the predictor.',
        }),
    ).exactOptional(),
    FeaturizationConfig: FeaturizationConfigSchema.and(
      z.any().openapi({ description: 'The featurization configuration.' }),
    ).exactOptional(),
    EncryptionConfig: EncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.',
        }),
    ).exactOptional(),
    PredictorExecutionDetails: PredictorExecutionDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details on the the status and results of the backtests performed to evaluate the accuracy of the predictor. You specify the number of backtests to perform when you call the operation.',
        }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated time remaining in minutes for the predictor training job to complete.',
        }),
    ).exactOptional(),
    IsAutoPredictor: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the predictor was created with <a>CreateAutoPredictor</a>.',
        }),
    ).exactOptional(),
    DatasetImportJobArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the ARNs of the dataset import jobs used to import training data for the predictor.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the predictor. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the predictor must be <code>ACTIVE</code> before you can use the predictor to create a forecast.</p> </note>',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the model training task was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OptimizationMetric: OptimizationMetricSchema.and(
      z.any().openapi({ description: 'The accuracy metric used to optimize the predictor.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePredictorResponse')

const DescribePredictorRequestSchema = z
  .object({
    PredictorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the predictor that you want information about.',
        }),
    ),
  })
  .openapi({ required: ['PredictorArn'], title: 'DescribePredictorRequest' })
  .openapi('DescribePredictorRequest')

const DescribePredictorBacktestExportJobResponseSchema = z
  .object({
    PredictorBacktestExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the predictor backtest export job.',
        }),
    ).exactOptional(),
    PredictorBacktestExportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name of the predictor backtest export job.' }),
    ).exactOptional(),
    PredictorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the predictor.' }),
    ).exactOptional(),
    Destination: DataDestinationSchema.exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about any errors that may have occurred during the backtest export.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the predictor backtest export job. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the predictor backtest export job was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the exported data, CSV or PARQUET.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePredictorBacktestExportJobResponse')

const DescribePredictorBacktestExportJobRequestSchema = z
  .object({
    PredictorBacktestExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the predictor backtest export job.',
        }),
    ),
  })
  .openapi({
    required: ['PredictorBacktestExportJobArn'],
    title: 'DescribePredictorBacktestExportJobRequest',
  })
  .openapi('DescribePredictorBacktestExportJobRequest')

const DescribeWhatIfAnalysisResponseSchema = z
  .object({
    WhatIfAnalysisName: NameSchema.and(
      z.any().openapi({ description: 'The name of the what-if analysis.' }),
    ).exactOptional(),
    WhatIfAnalysisArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if analysis.' }),
    ).exactOptional(),
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if forecast.' }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate time remaining to complete the what-if analysis, in minutes.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the what-if analysis. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the analysis.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the what-if analysis was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TimeSeriesSelector: TimeSeriesSelectorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWhatIfAnalysisResponse')

const DescribeWhatIfAnalysisRequestSchema = z
  .object({
    WhatIfAnalysisArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if analysis that you are interested in.',
        }),
    ),
  })
  .openapi({ required: ['WhatIfAnalysisArn'], title: 'DescribeWhatIfAnalysisRequest' })
  .openapi('DescribeWhatIfAnalysisRequest')

const DescribeWhatIfForecastResponseSchema = z
  .object({
    WhatIfForecastName: NameSchema.and(
      z.any().openapi({ description: 'The name of the what-if forecast.' }),
    ).exactOptional(),
    WhatIfForecastArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if forecast.' }),
    ).exactOptional(),
    WhatIfAnalysisArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if analysis that contains this forecast.',
        }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate time remaining to complete the what-if forecast, in minutes.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the what-if forecast. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the what-if forecast must be <code>ACTIVE</code> before you can access the forecast.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the what-if forecast was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TimeSeriesTransformations: TimeSeriesTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Action</code> and <code>TimeSeriesConditions</code> elements that describe what transformations were applied to which time series.',
        }),
    ).exactOptional(),
    TimeSeriesReplacementsDataSource: TimeSeriesReplacementsDataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>S3Config</code>, <code>Schema</code>, and <code>Format</code> elements that describe the replacement time series.',
        }),
    ).exactOptional(),
    ForecastTypes: ForecastTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The quantiles at which probabilistic forecasts are generated. You can specify up to five quantiles per what-if forecast in the <a>CreateWhatIfForecast</a> operation. If you didn\'t specify quantiles, the default values are <code>["0.1", "0.5", "0.9"]</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWhatIfForecastResponse')

const DescribeWhatIfForecastRequestSchema = z
  .object({
    WhatIfForecastArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if forecast that you are interested in.',
        }),
    ),
  })
  .openapi({ required: ['WhatIfForecastArn'], title: 'DescribeWhatIfForecastRequest' })
  .openapi('DescribeWhatIfForecastRequest')

const LongArnListSchema = z.array(LongArnSchema).openapi('LongArnList')

const DescribeWhatIfForecastExportResponseSchema = z
  .object({
    WhatIfForecastExportArn: LongArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the what-if forecast export.' }),
    ).exactOptional(),
    WhatIfForecastExportName: NameSchema.and(
      z.any().openapi({ description: 'The name of the what-if forecast export.' }),
    ).exactOptional(),
    WhatIfForecastArns: LongArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon Resource Names (ARNs) that represent all of the what-if forecasts exported in this resource.',
        }),
    ).exactOptional(),
    Destination: DataDestinationSchema.exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the what-if forecast. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the what-if forecast export must be <code>ACTIVE</code> before you can access the forecast export.</p> </note>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the what-if forecast export was created.' }),
    ).exactOptional(),
    EstimatedTimeRemainingInMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate time remaining to complete the what-if forecast export, in minutes.',
        }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format of the exported data, CSV or PARQUET.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWhatIfForecastExportResponse')

const DescribeWhatIfForecastExportRequestSchema = z
  .object({
    WhatIfForecastExportArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if forecast export that you are interested in.',
        }),
    ),
  })
  .openapi({ required: ['WhatIfForecastExportArn'], title: 'DescribeWhatIfForecastExportRequest' })
  .openapi('DescribeWhatIfForecastExportRequest')

const EvaluationTypeSchema = z.enum(['SUMMARY', 'COMPUTED']).openapi('EvaluationType')

const MetricsSchema: z.ZodType<MetricsType> = z
  .lazy(() =>
    z
      .object({
        RMSE: DoubleSchema.and(
          z
            .any()
            .openapi({
              deprecated: true,
              description:
                'The root-mean-square error (RMSE).This property is deprecated, please refer to ErrorMetrics for both RMSE and WAPE',
            }),
        ).exactOptional(),
        WeightedQuantileLosses: WeightedQuantileLossesSchema.and(
          z
            .any()
            .openapi({
              description:
                'An array of weighted quantile losses. Quantiles divide a probability distribution into regions of equal probability. The distribution in this case is the loss function.',
            }),
        ).exactOptional(),
        ErrorMetrics: ErrorMetricsSchema.and(
          z
            .any()
            .openapi({
              description:
                ' Provides detailed error metrics for each forecast type. Metrics include root-mean square-error (RMSE), mean absolute percentage error (MAPE), mean absolute scaled error (MASE), and weighted average percentage error (WAPE). ',
            }),
        ).exactOptional(),
        AverageWeightedQuantileLoss: DoubleSchema.and(
          z.any().openapi({ description: 'The average value of all weighted quantile losses.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.',
        required: [],
      }),
  )
  .openapi('Metrics')

const WindowSummarySchema = z
  .object({
    TestWindowStart: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp that defines the start of the window.' }),
    ).exactOptional(),
    TestWindowEnd: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp that defines the end of the window.' }),
    ).exactOptional(),
    ItemCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of data points within the window.' }),
    ).exactOptional(),
    EvaluationType: EvaluationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of evaluation.</p> <ul> <li> <p> <code>SUMMARY</code> - The average metrics across all windows.</p> </li> <li> <p> <code>COMPUTED</code> - The metrics for the specified window.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Metrics: MetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides metrics used to evaluate the performance of a predictor.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>',
    required: [],
  })
  .openapi('WindowSummary')

const TestWindowsSchema = z.array(WindowSummarySchema).openapi('TestWindows')

const EvaluationResultSchema = z
  .object({
    AlgorithmArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the algorithm that was evaluated.',
        }),
    ).exactOptional(),
    TestWindows: TestWindowsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of test windows used for evaluating the algorithm. The <code>NumberOfBacktestWindows</code> from the <a>EvaluationParameters</a> object determines the number of windows in the array.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.',
    required: [],
  })
  .openapi('EvaluationResult')

const PredictorEvaluationResultsSchema = z
  .array(EvaluationResultSchema)
  .openapi('PredictorEvaluationResults')

const GetAccuracyMetricsResponseSchema = z
  .object({
    PredictorEvaluationResults: PredictorEvaluationResultsSchema.and(
      z.any().openapi({ description: 'An array of results from evaluating the predictor.' }),
    ).exactOptional(),
    IsAutoPredictor: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the predictor was created with <a>CreateAutoPredictor</a>.',
        }),
    ).exactOptional(),
    AutoMLOverrideStrategy: AutoMLOverrideStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. </p> </note> <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code> is specified, the AutoML strategy optimizes predictor accuracy.</p> <p>This parameter is only valid for predictors trained using AutoML.</p>',
        }),
    ).exactOptional(),
    OptimizationMetric: OptimizationMetricSchema.and(
      z.any().openapi({ description: 'The accuracy metric used to optimize the predictor.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccuracyMetricsResponse')

const GetAccuracyMetricsRequestSchema = z
  .object({
    PredictorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the predictor to get metrics for.',
        }),
    ),
  })
  .openapi({ required: ['PredictorArn'], title: 'GetAccuracyMetricsRequest' })
  .openapi('GetAccuracyMetricsRequest')

const DatasetGroupSummarySchema = z
  .object({
    DatasetGroupArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset group.' }),
    ).exactOptional(),
    DatasetGroupName: NameSchema.and(
      z.any().openapi({ description: 'The name of the dataset group.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the dataset group was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the dataset group was created or last updated from a call to the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation. While the dataset group is being updated, <code>LastModificationTime</code> is the current time of the <code>ListDatasetGroups</code> call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the dataset group properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.',
    required: [],
  })
  .openapi('DatasetGroupSummary')

const DatasetGroupsSchema = z.array(DatasetGroupSummarySchema).openapi('DatasetGroups')

const NextTokenSchema = z.string().regex(/.+/).min(1).max(3000).openapi('NextToken')

const ListDatasetGroupsResponseSchema = z
  .object({
    DatasetGroups: DatasetGroupsSchema.and(
      z
        .any()
        .openapi({
          description: "An array of objects that summarize each dataset group's properties.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetGroupsResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListDatasetGroupsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDatasetGroupsRequest', required: [] })
  .openapi('ListDatasetGroupsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const DatasetImportJobSummarySchema = z
  .object({
    DatasetImportJobArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset import job.' }),
    ).exactOptional(),
    DatasetImportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name of the dataset import job.' }),
    ).exactOptional(),
    DataSource: DataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p> <p>If encryption is used, <code>DataSource</code> includes an Key Management Service (KMS) key.</p>',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the dataset import job. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the dataset import job was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ImportMode: ImportModeSchema.and(
      z
        .any()
        .openapi({
          description: 'The import mode of the dataset import job, FULL or INCREMENTAL.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the dataset import job properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.',
    required: [],
  })
  .openapi('DatasetImportJobSummary')

const DatasetImportJobsSchema = z.array(DatasetImportJobSummarySchema).openapi('DatasetImportJobs')

const ListDatasetImportJobsResponseSchema = z
  .object({
    DatasetImportJobs: DatasetImportJobsSchema.and(
      z
        .any()
        .openapi({
          description: "An array of objects that summarize each dataset import job's properties.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetImportJobsResponse')

const FilterConditionStringSchema = z.enum(['IS', 'IS_NOT']).openapi('FilterConditionString')

const FilterSchema = z
  .object({
    Key: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter to filter on.' }),
    ),
    Value: ArnSchema.and(z.any().openapi({ description: 'The value to match.' })),
    Condition: FilterConditionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The condition to apply. To include the objects that match the statement, specify <code>IS</code>. To exclude matching objects, specify <code>IS_NOT</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value', 'Condition'],
    description:
      'Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value.',
  })
  .openapi('Filter')

const FiltersSchema = z.array(FilterSchema).openapi('Filters')

const ListDatasetImportJobsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the datasets that match the statement from the list, respectively. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the datasets that match the statement, specify <code>IS</code>. To exclude matching datasets, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>DatasetArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all dataset import jobs whose status is ACTIVE, you specify the following filter:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "Status", "Value": "ACTIVE" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDatasetImportJobsRequest', required: [] })
  .openapi('ListDatasetImportJobsRequest')

const DatasetSummarySchema = z
  .object({
    DatasetArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dataset.' }),
    ).exactOptional(),
    DatasetName: NameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    DatasetType: DatasetTypeSchema.and(
      z.any().openapi({ description: 'The dataset type.' }),
    ).exactOptional(),
    Domain: DomainSchema.and(
      z.any().openapi({ description: 'The domain associated with the dataset.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the dataset was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you create a dataset, <code>LastModificationTime</code> is the same as <code>CreationTime</code>. While data is being imported to the dataset, <code>LastModificationTime</code> is the current time of the <code>ListDatasets</code> call. After a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation has finished, <code>LastModificationTime</code> is when the import job completed or failed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the dataset properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.',
    required: [],
  })
  .openapi('DatasetSummary')

const DatasetsSchema = z.array(DatasetSummarySchema).openapi('Datasets')

const ListDatasetsResponseSchema = z
  .object({
    Datasets: DatasetsSchema.and(
      z
        .any()
        .openapi({ description: "An array of objects that summarize each dataset's properties." }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetsResponse')

const ListDatasetsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDatasetsRequest', required: [] })
  .openapi('ListDatasetsRequest')

const ExplainabilitySummarySchema = z
  .object({
    ExplainabilityArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability.' }),
    ).exactOptional(),
    ExplainabilityName: NameSchema.and(
      z.any().openapi({ description: 'The name of the Explainability.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.',
        }),
    ).exactOptional(),
    ExplainabilityConfig: ExplainabilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that define the granularity of time series and time points for the Explainability.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Explainability. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about any errors that may have occurred during the Explainability creation process.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the Explainability was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the Explainability properties used in the <a>ListExplainabilities</a> operation. To get a complete set of properties, call the <a>DescribeExplainability</a> operation, and provide the listed <code>ExplainabilityArn</code>.',
    required: [],
  })
  .openapi('ExplainabilitySummary')

const ExplainabilitiesSchema = z.array(ExplainabilitySummarySchema).openapi('Explainabilities')

const ListExplainabilitiesResponseSchema = z
  .object({
    Explainabilities: ExplainabilitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that summarize the properties of each Explainability resource.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExplainabilitiesResponse')

const ListExplainabilitiesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items returned in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the resources that match the statement from the list. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>ResourceArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListExplainabilitiesRequest', required: [] })
  .openapi('ListExplainabilitiesRequest')

const ExplainabilityExportSummarySchema = z
  .object({
    ExplainabilityExportArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the Explainability export.' }),
    ).exactOptional(),
    ExplainabilityExportName: NameSchema.and(
      z.any().openapi({ description: 'The name of the Explainability export' }),
    ).exactOptional(),
    Destination: DataDestinationSchema.exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Explainability export. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about any errors that may have occurred during the Explainability export.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the Explainability was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the Explainability export properties used in the <a>ListExplainabilityExports</a> operation. To get a complete set of properties, call the <a>DescribeExplainabilityExport</a> operation, and provide the <code>ExplainabilityExportArn</code>.',
    required: [],
  })
  .openapi('ExplainabilityExportSummary')

const ExplainabilityExportsSchema = z
  .array(ExplainabilityExportSummarySchema)
  .openapi('ExplainabilityExports')

const ListExplainabilityExportsResponseSchema = z
  .object({
    ExplainabilityExports: ExplainabilityExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that summarize the properties of each Explainability export.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExplainabilityExportsResponse')

const ListExplainabilityExportsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude resources that match the statement from the list. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>ResourceArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListExplainabilityExportsRequest', required: [] })
  .openapi('ListExplainabilityExportsRequest')

const ForecastExportJobSummarySchema = z
  .object({
    ForecastExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the forecast export job.' }),
    ).exactOptional(),
    ForecastExportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name of the forecast export job.' }),
    ).exactOptional(),
    Destination: DataDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the forecast export job. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your S3 bucket.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the forecast export job was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>.',
    required: [],
  })
  .openapi('ForecastExportJobSummary')

const ForecastExportJobsSchema = z
  .array(ForecastExportJobSummarySchema)
  .openapi('ForecastExportJobs')

const ListForecastExportJobsResponseSchema = z
  .object({
    ForecastExportJobs: ForecastExportJobsSchema.and(
      z
        .any()
        .openapi({
          description: "An array of objects that summarize each export job's properties.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListForecastExportJobsResponse')

const ListForecastExportJobsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the forecast export jobs that match the statement from the list, respectively. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the forecast export jobs that match the statement, specify <code>IS</code>. To exclude matching forecast export jobs, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>ForecastArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all jobs that export a forecast named <i>electricityforecast</i>, specify the following filter:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "ForecastArn", "Value": "arn:aws:forecast:us-west-2:&lt;acct-id&gt;:forecast/electricityforecast" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListForecastExportJobsRequest', required: [] })
  .openapi('ListForecastExportJobsRequest')

const ForecastSummarySchema = z
  .object({
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the forecast.' }),
    ).exactOptional(),
    ForecastName: NameSchema.and(
      z.any().openapi({ description: 'The name of the forecast.' }),
    ).exactOptional(),
    PredictorArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the predictor used to generate the forecast.' }),
    ).exactOptional(),
    CreatedUsingAutoPredictor: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the Forecast was created from an AutoPredictor.' }),
    ).exactOptional(),
    DatasetGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the dataset group that provided the data used to train the predictor.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the forecast. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the forecast creation task was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary.',
    required: [],
  })
  .openapi('ForecastSummary')

const ForecastsSchema = z.array(ForecastSummarySchema).openapi('Forecasts')

const ListForecastsResponseSchema = z
  .object({
    Forecasts: ForecastsSchema.and(
      z
        .any()
        .openapi({ description: "An array of objects that summarize each forecast's properties." }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListForecastsResponse')

const ListForecastsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the forecasts that match the statement from the list, respectively. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the forecasts that match the statement, specify <code>IS</code>. To exclude matching forecasts, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>DatasetGroupArn</code>, <code>PredictorArn</code>, and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all forecasts whose status is not ACTIVE, you would specify:</p> <p> <code>"Filters": [ { "Condition": "IS_NOT", "Key": "Status", "Value": "ACTIVE" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListForecastsRequest', required: [] })
  .openapi('ListForecastsRequest')

const DetailSchema = z.string().max(256).openapi('Detail')

const PredictorEventSchema = z
  .object({
    Detail: DetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event. For example, <code>Retrain</code>. A retraining event denotes the timepoint when a predictor was retrained. Any monitor results from before the <code>Datetime</code> are from the previous predictor. Any new metrics are for the newly retrained predictor.',
        }),
    ).exactOptional(),
    Datetime: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp for when the event occurred.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides details about a predictor event, such as a retraining.',
    required: [],
  })
  .openapi('PredictorEvent')

const MonitorDataSourceSchema = z
  .object({
    DatasetImportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the dataset import job used to import the data that initiated the monitor evaluation.',
        }),
    ).exactOptional(),
    ForecastArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the forecast the monitor used during the evaluation.',
        }),
    ).exactOptional(),
    PredictorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the predictor resource you are monitoring.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The source of the data the monitor used during the evaluation.',
    required: [],
  })
  .openapi('MonitorDataSource')

const MetricNameSchema = z.string().max(256).openapi('MetricName')

const MetricResultSchema = z
  .object({
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric.' }),
    ).exactOptional(),
    MetricValue: DoubleSchema.and(
      z.any().openapi({ description: 'The value for the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An individual metric Forecast calculated when monitoring predictor usage. You can compare the value for this metric to the metric\'s value in the <a>Baseline</a> to see how your predictor\'s performance is changing.</p> <p>For more information about metrics generated by Forecast see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Evaluating Predictor Accuracy</a> </p>',
    required: [],
  })
  .openapi('MetricResult')

const MetricResultsSchema = z.array(MetricResultSchema).openapi('MetricResults')

const PredictorMonitorEvaluationSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the resource to monitor.' }),
    ).exactOptional(),
    MonitorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the monitor resource.' }),
    ).exactOptional(),
    EvaluationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the monitor evaluation was started. ',
        }),
    ).exactOptional(),
    EvaluationState: EvaluationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the monitor evaluation. The state can be <code>SUCCESS</code> or <code>FAILURE</code>.',
        }),
    ).exactOptional(),
    WindowStartDatetime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp that indicates the start of the window that is used for monitor evaluation.',
        }),
    ).exactOptional(),
    WindowEndDatetime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp that indicates the end of the window that is used for monitor evaluation.',
        }),
    ).exactOptional(),
    PredictorEvent: PredictorEventSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides details about a predictor event, such as a retraining.',
        }),
    ).exactOptional(),
    MonitorDataSource: MonitorDataSourceSchema.and(
      z
        .any()
        .openapi({
          description: 'The source of the data the monitor resource used during the evaluation.',
        }),
    ).exactOptional(),
    MetricResults: MetricResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of metrics Forecast calculated when monitoring a predictor. You can compare the value for each metric in the list to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.",
        }),
    ).exactOptional(),
    NumItemsEvaluated: LongSchema.and(
      z.any().openapi({ description: 'The number of items considered during the evaluation.' }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about any errors that may have occurred during the monitor evaluation.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the results of a monitor evaluation.', required: [] })
  .openapi('PredictorMonitorEvaluation')

const PredictorMonitorEvaluationsSchema = z
  .array(PredictorMonitorEvaluationSchema)
  .openapi('PredictorMonitorEvaluations')

const ListMonitorEvaluationsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    PredictorMonitorEvaluations: PredictorMonitorEvaluationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The monitoring results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMonitorEvaluationsResponse')

const ListMonitorEvaluationsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of monitoring results to return.' }),
    ).exactOptional(),
    MonitorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the monitor resource to get results from.',
        }),
    ),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the resources that match the statement from the list. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. The only valid value is <code>EvaluationState</code>.</p> </li> <li> <p> <code>Value</code> - The value to match. Valid values are only <code>SUCCESS</code> or <code>FAILURE</code>.</p> </li> </ul> <p>For example, to list only successful monitor evaluations, you would specify:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "EvaluationState", "Value": "SUCCESS" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MonitorArn'], title: 'ListMonitorEvaluationsRequest' })
  .openapi('ListMonitorEvaluationsRequest')

const MonitorSummarySchema = z
  .object({
    MonitorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the monitor resource.' }),
    ).exactOptional(),
    MonitorName: NameSchema.and(
      z.any().openapi({ description: 'The name of the monitor resource.' }),
    ).exactOptional(),
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the predictor being monitored.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the monitor. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>ACTIVE_STOPPING</code>, <code>ACTIVE_STOPPED</code> </p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the monitor resource was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the monitor resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>STOPPED</code> - When the resource stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the monitor creation finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the monitor properties used in the <a>ListMonitors</a> operation. To get a complete set of properties, call the <a>DescribeMonitor</a> operation, and provide the listed <code>MonitorArn</code>.',
    required: [],
  })
  .openapi('MonitorSummary')

const MonitorsSchema = z.array(MonitorSummarySchema).openapi('Monitors')

const ListMonitorsResponseSchema = z
  .object({
    Monitors: MonitorsSchema.and(
      z
        .any()
        .openapi({ description: "An array of objects that summarize each monitor's properties." }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMonitorsResponse')

const ListMonitorsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of monitors to include in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the resources that match the statement from the list. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. The only valid value is <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all monitors who\'s status is ACTIVE, you would specify:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "Status", "Value": "ACTIVE" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMonitorsRequest', required: [] })
  .openapi('ListMonitorsRequest')

const PredictorBacktestExportJobSummarySchema = z
  .object({
    PredictorBacktestExportJobArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the predictor backtest export job.',
        }),
    ).exactOptional(),
    PredictorBacktestExportJobName: NameSchema.and(
      z.any().openapi({ description: 'The name of the predictor backtest export job.' }),
    ).exactOptional(),
    Destination: DataDestinationSchema.exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the predictor backtest export job. States include: </p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about any errors that may have occurred during the backtest export.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the predictor backtest export job was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.',
    required: [],
  })
  .openapi('PredictorBacktestExportJobSummary')

const PredictorBacktestExportJobsSchema = z
  .array(PredictorBacktestExportJobSummarySchema)
  .openapi('PredictorBacktestExportJobs')

const ListPredictorBacktestExportJobsResponseSchema = z
  .object({
    PredictorBacktestExportJobs: PredictorBacktestExportJobsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that summarize the properties of each predictor backtest export job.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPredictorBacktestExportJobsResponse')

const ListPredictorBacktestExportJobsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the predictor backtest export jobs that match the statement from the list. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the predictor backtest export jobs that match the statement, specify <code>IS</code>. To exclude matching predictor backtest export jobs, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>PredictorArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPredictorBacktestExportJobsRequest', required: [] })
  .openapi('ListPredictorBacktestExportJobsRequest')

const PredictorSummarySchema: z.ZodType<PredictorSummaryType> = z
  .lazy(() =>
    z
      .object({
        PredictorArn: ArnSchema.and(
          z.any().openapi({ description: 'The ARN of the predictor.' }),
        ).exactOptional(),
        PredictorName: NameSchema.and(
          z.any().openapi({ description: 'The name of the predictor.' }),
        ).exactOptional(),
        DatasetGroupArn: ArnSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon Resource Name (ARN) of the dataset group that contains the data used to train the predictor.',
            }),
        ).exactOptional(),
        IsAutoPredictor: BooleanSchema.and(
          z
            .any()
            .openapi({ description: 'Whether AutoPredictor was used to create the predictor.' }),
        ).exactOptional(),
        ReferencePredictorSummary: ReferencePredictorSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                'A summary of the reference predictor used if the predictor was retrained or upgraded.',
            }),
        ).exactOptional(),
        Status: StatusSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The status of the predictor. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the predictor must be <code>ACTIVE</code> before you can use the predictor to create a forecast.</p> </note>',
            }),
        ).exactOptional(),
        Message: ErrorMessageSchema.and(
          z
            .any()
            .openapi({
              description: 'If an error occurred, an informational message about the error.',
            }),
        ).exactOptional(),
        CreationTime: TimestampSchema.and(
          z.any().openapi({ description: 'When the model training task was created.' }),
        ).exactOptional(),
        LastModificationTime: TimestampSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.',
        required: [],
      }),
  )
  .openapi('PredictorSummary')

const PredictorsSchema = z.array(PredictorSummarySchema).openapi('Predictors')

const ListPredictorsResponseSchema = z
  .object({
    Predictors: PredictorsSchema.and(
      z
        .any()
        .openapi({
          description: "An array of objects that summarize each predictor's properties.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPredictorsResponse')

const ListPredictorsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the predictors that match the statement from the list, respectively. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the predictors that match the statement, specify <code>IS</code>. To exclude matching predictors, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>DatasetGroupArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all predictors whose status is ACTIVE, you would specify:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "Status", "Value": "ACTIVE" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPredictorsRequest', required: [] })
  .openapi('ListPredictorsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const WhatIfAnalysisSummarySchema = z
  .object({
    WhatIfAnalysisArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if analysis.' }),
    ).exactOptional(),
    WhatIfAnalysisName: NameSchema.and(
      z.any().openapi({ description: 'The name of the what-if analysis.' }),
    ).exactOptional(),
    ForecastArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the baseline forecast that is being used in this what-if analysis.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the what-if analysis. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the analysis.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the what-if analysis was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the what-if analysis properties used in the <a>ListWhatIfAnalyses</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfAnalysis</a> operation, and provide the <code>WhatIfAnalysisArn</code> that is listed in the summary.',
    required: [],
  })
  .openapi('WhatIfAnalysisSummary')

const WhatIfAnalysesSchema = z.array(WhatIfAnalysisSummarySchema).openapi('WhatIfAnalyses')

const ListWhatIfAnalysesResponseSchema = z
  .object({
    WhatIfAnalyses: WhatIfAnalysesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>WhatIfAnalysisSummary</code> objects that describe the matched analyses.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWhatIfAnalysesResponse')

const ListWhatIfAnalysesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the what-if analysis jobs that match the statement from the list, respectively. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the what-if analysis jobs that match the statement, specify <code>IS</code>. To exclude matching what-if analysis jobs, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>WhatIfAnalysisArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all jobs that export a forecast named <i>electricityWhatIf</i>, specify the following filter:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "WhatIfAnalysisArn", "Value": "arn:aws:forecast:us-west-2:&lt;acct-id&gt;:forecast/electricityWhatIf" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWhatIfAnalysesRequest', required: [] })
  .openapi('ListWhatIfAnalysesRequest')

const WhatIfForecastExportSummarySchema = z
  .object({
    WhatIfForecastExportArn: LongArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the what-if forecast export.' }),
    ).exactOptional(),
    WhatIfForecastArns: WhatIfForecastArnListForExportSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the export.',
        }),
    ).exactOptional(),
    WhatIfForecastExportName: NameSchema.and(
      z.any().openapi({ description: 'The what-if forecast export name.' }),
    ).exactOptional(),
    Destination: DataDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the what-if forecast export. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the analysis.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the what-if forecast export was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the what-if forecast export properties used in the <a>ListWhatIfForecastExports</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecastExport</a> operation, and provide the <code>WhatIfForecastExportArn</code> that is listed in the summary.',
    required: [],
  })
  .openapi('WhatIfForecastExportSummary')

const WhatIfForecastExportsSchema = z
  .array(WhatIfForecastExportSummarySchema)
  .openapi('WhatIfForecastExports')

const ListWhatIfForecastExportsResponseSchema = z
  .object({
    WhatIfForecastExports: WhatIfForecastExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>WhatIfForecastExports</code> objects that describe the matched forecast exports.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWhatIfForecastExportsResponse')

const ListWhatIfForecastExportsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next&#x2028; request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the what-if forecast export jobs that match the statement from the list, respectively. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the forecast export jobs that match the statement, specify <code>IS</code>. To exclude matching forecast export jobs, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>WhatIfForecastExportArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all jobs that export a forecast named <i>electricityWIFExport</i>, specify the following filter:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "WhatIfForecastExportArn", "Value": "arn:aws:forecast:us-west-2:&lt;acct-id&gt;:forecast/electricityWIFExport" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWhatIfForecastExportsRequest', required: [] })
  .openapi('ListWhatIfForecastExportsRequest')

const WhatIfForecastSummarySchema = z
  .object({
    WhatIfForecastArn: LongArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the what-if forecast.' }),
    ).exactOptional(),
    WhatIfForecastName: NameSchema.and(
      z.any().openapi({ description: 'The name of the what-if forecast.' }),
    ).exactOptional(),
    WhatIfAnalysisArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the what-if analysis that contains this what-if forecast.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the what-if forecast. States include:</p> <ul> <li> <p> <code>ACTIVE</code> </p> </li> <li> <p> <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code> </p> </li> <li> <p> <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code> </p> </li> <li> <p> <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code> </p> </li> </ul> <note> <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the analysis.</p> </note>',
        }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'If an error occurred, an informational message about the error.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the what-if forecast was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time the resource was modified. The timestamp depends on the status of the job:</p> <ul> <li> <p> <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPING</code> - The current timestamp.</p> </li> <li> <p> <code>CREATE_STOPPED</code> - When the job stopped.</p> </li> <li> <p> <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a summary of the what-if forecast properties used in the <a>ListWhatIfForecasts</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecast</a> operation, and provide the <code>WhatIfForecastArn</code> that is listed in the summary.',
    required: [],
  })
  .openapi('WhatIfForecastSummary')

const WhatIfForecastsSchema = z.array(WhatIfForecastSummarySchema).openapi('WhatIfForecasts')

const ListWhatIfForecastsResponseSchema = z
  .object({
    WhatIfForecasts: WhatIfForecastsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>WhatIfForecasts</code> objects that describe the matched forecasts.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next&#x2028; request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWhatIfForecastsResponse')

const ListWhatIfForecastsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next&#x2028; request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the what-if forecast export jobs that match the statement from the list, respectively. The match statement consists of a key and a value.</p> <p> <b>Filter properties</b> </p> <ul> <li> <p> <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and <code>IS_NOT</code>. To include the forecast export jobs that match the statement, specify <code>IS</code>. To exclude matching forecast export jobs, specify <code>IS_NOT</code>.</p> </li> <li> <p> <code>Key</code> - The name of the parameter to filter on. Valid values are <code>WhatIfForecastArn</code> and <code>Status</code>.</p> </li> <li> <p> <code>Value</code> - The value to match.</p> </li> </ul> <p>For example, to list all jobs that export a forecast named <i>electricityWhatIfForecast</i>, specify the following filter:</p> <p> <code>"Filters": [ { "Condition": "IS", "Key": "WhatIfForecastArn", "Value": "arn:aws:forecast:us-west-2:&lt;acct-id&gt;:forecast/electricityWhatIfForecast" } ]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWhatIfForecastsRequest', required: [] })
  .openapi('ListWhatIfForecastsRequest')

const ResumeResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the monitor resource to resume.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ResumeResourceRequest' })
  .openapi('ResumeResourceRequest')

const StopResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource to stop. The supported ARNs are <code>DatasetImportJobArn</code>, <code>PredictorArn</code>, <code>PredictorBacktestExportJobArn</code>, <code>ForecastArn</code>, <code>ForecastExportJobArn</code>, <code>ExplainabilityArn</code>, and <code>ExplainabilityExportArn</code>. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'StopResourceRequest' })
  .openapi('StopResourceRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. ',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags to add to the resource. A tag is an array of key-value pairs.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeysSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. ',
        }),
    ),
    TagKeys: TagKeysSchema.and(
      z.any().openapi({ description: 'The keys of the tags to be removed.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDatasetGroupResponseSchema = z.object({}).openapi('UpdateDatasetGroupResponse')

const UpdateDatasetGroupRequestSchema = z
  .object({
    DatasetGroupArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset group.' }),
    ),
    DatasetArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset group.',
        }),
    ),
  })
  .openapi({ required: ['DatasetGroupArn', 'DatasetArns'], title: 'UpdateDatasetGroupRequest' })
  .openapi('UpdateDatasetGroupRequest')

const ParameterKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_\.\/\[\]\,\\]+$/)
  .max(256)
  .openapi('ParameterKey')

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

export const postXAmzTargetAmazonForecastCreateAutoPredictorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateAutoPredictor',
  description:
    '<p>Creates an Amazon Forecast predictor.</p> <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain existing predictors.</p> <p> <b>Creating new predictors</b> </p> <p>The following parameters are required when creating a new predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the predictor.</p> </li> <li> <p> <code>ForecastFrequency</code> - The granularity of your forecasts (hourly, daily, weekly, etc).</p> </li> <li> <p> <code>ForecastHorizon</code> - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> </li> </ul> <p>When creating a new predictor, do not specify a value for <code>ReferencePredictorArn</code>.</p> <p> <b>Upgrading and retraining predictors</b> </p> <p>The following parameters are required when retraining or upgrading a predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or upgrade.</p> </li> </ul> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>',
  operationId: 'CreateAutoPredictor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateAutoPredictor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateAutoPredictor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAutoPredictorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAutoPredictorResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateDataset',
  description:
    '<p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>',
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
        .literal('AmazonForecast.CreateDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateDataset'] },
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
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateDatasetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateDatasetGroup',
  description:
    '<p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>',
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
        .literal('AmazonForecast.CreateDatasetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateDatasetGroup'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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

export const postXAmzTargetAmazonForecastCreateDatasetImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateDatasetImportJob',
  description:
    '<p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>',
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
        .literal('AmazonForecast.CreateDatasetImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateDatasetImportJob'] },
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
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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

export const postXAmzTargetAmazonForecastCreateExplainabilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateExplainability',
  description:
    '<note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>',
  operationId: 'CreateExplainability',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateExplainability')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateExplainability'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateExplainabilityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExplainabilityResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateExplainabilityExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateExplainabilityExport',
  description:
    '<p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>',
  operationId: 'CreateExplainabilityExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateExplainabilityExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateExplainabilityExport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateExplainabilityExportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExplainabilityExportResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateForecast',
  description:
    '<p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>',
  operationId: 'CreateForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateForecastResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateForecastExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateForecastExportJob',
  description:
    '<p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>',
  operationId: 'CreateForecastExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateForecastExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateForecastExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateForecastExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateForecastExportJobResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateMonitorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateMonitor',
  description:
    'Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor\'s performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>. ',
  operationId: 'CreateMonitor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateMonitor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateMonitor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateMonitorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMonitorResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreatePredictorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreatePredictor',
  description:
    "<note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>",
  operationId: 'CreatePredictor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreatePredictor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreatePredictor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePredictorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePredictorResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreatePredictorBacktestExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob',
  description:
    '<p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>',
  operationId: 'CreatePredictorBacktestExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreatePredictorBacktestExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreatePredictorBacktestExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePredictorBacktestExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePredictorBacktestExportJobResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateWhatIfAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis',
  description:
    '<p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>',
  operationId: 'CreateWhatIfAnalysis',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateWhatIfAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateWhatIfAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWhatIfAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWhatIfAnalysisResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateWhatIfForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecast',
  description:
    'A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. ',
  operationId: 'CreateWhatIfForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateWhatIfForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateWhatIfForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWhatIfForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWhatIfForecastResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastCreateWhatIfForecastExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport',
  description:
    '<p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>',
  operationId: 'CreateWhatIfForecastExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.CreateWhatIfForecastExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.CreateWhatIfForecastExport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWhatIfForecastExportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWhatIfForecastExportResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastDeleteDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteDataset',
  description:
    '<p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset\'s ARN.</p> </note>',
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
        .literal('AmazonForecast.DeleteDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteDataset'] },
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

export const postXAmzTargetAmazonForecastDeleteDatasetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteDatasetGroup',
  description:
    '<p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>',
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
        .literal('AmazonForecast.DeleteDatasetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteDatasetGroup'] },
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

export const postXAmzTargetAmazonForecastDeleteDatasetImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob',
  description:
    'Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.',
  operationId: 'DeleteDatasetImportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteDatasetImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteDatasetImportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDatasetImportJobRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteExplainabilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteExplainability',
  description:
    '<p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>',
  operationId: 'DeleteExplainability',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteExplainability')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteExplainability'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteExplainabilityRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteExplainabilityExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport',
  description: 'Deletes an Explainability export.',
  operationId: 'DeleteExplainabilityExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteExplainabilityExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteExplainabilityExport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteExplainabilityExportRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteForecast',
  description:
    "<p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>",
  operationId: 'DeleteForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteForecastRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteForecastExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteForecastExportJob',
  description:
    'Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.',
  operationId: 'DeleteForecastExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteForecastExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteForecastExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteForecastExportJobRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteMonitorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteMonitor',
  description:
    'Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.',
  operationId: 'DeleteMonitor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteMonitor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteMonitor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMonitorRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeletePredictorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeletePredictor',
  description:
    'Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.',
  operationId: 'DeletePredictor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeletePredictor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeletePredictor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePredictorRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeletePredictorBacktestExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob',
  description: 'Deletes a predictor backtest export job.',
  operationId: 'DeletePredictorBacktestExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeletePredictorBacktestExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeletePredictorBacktestExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePredictorBacktestExportJobRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteResourceTreeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteResourceTree',
  description:
    '<p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>',
  operationId: 'DeleteResourceTree',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteResourceTree')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteResourceTree'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourceTreeRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteWhatIfAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis',
  description:
    "<p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>",
  operationId: 'DeleteWhatIfAnalysis',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteWhatIfAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteWhatIfAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWhatIfAnalysisRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteWhatIfForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast',
  description:
    "<p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>",
  operationId: 'DeleteWhatIfForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteWhatIfForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteWhatIfForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWhatIfForecastRequestSchema } },
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

export const postXAmzTargetAmazonForecastDeleteWhatIfForecastExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport',
  description:
    'Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. ',
  operationId: 'DeleteWhatIfForecastExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DeleteWhatIfForecastExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DeleteWhatIfForecastExport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWhatIfForecastExportRequestSchema } },
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

export const postXAmzTargetAmazonForecastDescribeAutoPredictorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeAutoPredictor',
  description: 'Describes a predictor created using the CreateAutoPredictor operation.',
  operationId: 'DescribeAutoPredictor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeAutoPredictor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeAutoPredictor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAutoPredictorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAutoPredictorResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeDataset',
  description:
    '<p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
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
        .literal('AmazonForecast.DescribeDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeDataset'] },
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

export const postXAmzTargetAmazonForecastDescribeDatasetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeDatasetGroup',
  description:
    '<p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
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
        .literal('AmazonForecast.DescribeDatasetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeDatasetGroup'] },
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

export const postXAmzTargetAmazonForecastDescribeDatasetImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob',
  description:
    '<p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>',
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
        .literal('AmazonForecast.DescribeDatasetImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeDatasetImportJob'] },
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

export const postXAmzTargetAmazonForecastDescribeExplainabilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeExplainability',
  description:
    'Describes an Explainability resource created using the <a>CreateExplainability</a> operation.',
  operationId: 'DescribeExplainability',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeExplainability')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeExplainability'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExplainabilityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExplainabilityResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeExplainabilityExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport',
  description:
    'Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.',
  operationId: 'DescribeExplainabilityExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeExplainabilityExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeExplainabilityExport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExplainabilityExportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExplainabilityExportResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeForecast',
  description:
    '<p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>',
  operationId: 'DescribeForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeForecastResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeForecastExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeForecastExportJob',
  description:
    '<p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>',
  operationId: 'DescribeForecastExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeForecastExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeForecastExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeForecastExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeForecastExportJobResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeMonitorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeMonitor',
  description:
    '<p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
  operationId: 'DescribeMonitor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeMonitor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeMonitor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMonitorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMonitorResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribePredictorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribePredictor',
  description:
    '<note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>',
  operationId: 'DescribePredictor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribePredictor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribePredictor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePredictorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePredictorResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribePredictorBacktestExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob',
  description:
    '<p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>',
  operationId: 'DescribePredictorBacktestExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribePredictorBacktestExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribePredictorBacktestExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePredictorBacktestExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePredictorBacktestExportJobResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeWhatIfAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis',
  description:
    '<p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
  operationId: 'DescribeWhatIfAnalysis',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeWhatIfAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeWhatIfAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWhatIfAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWhatIfAnalysisResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeWhatIfForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast',
  description:
    '<p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
  operationId: 'DescribeWhatIfForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeWhatIfForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeWhatIfForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWhatIfForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWhatIfForecastResponseSchema } },
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

export const postXAmzTargetAmazonForecastDescribeWhatIfForecastExportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport',
  description:
    '<p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>',
  operationId: 'DescribeWhatIfForecastExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.DescribeWhatIfForecastExport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.DescribeWhatIfForecastExport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWhatIfForecastExportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWhatIfForecastExportResponseSchema } },
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

export const postXAmzTargetAmazonForecastGetAccuracyMetricsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.GetAccuracyMetrics',
  description:
    '<p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn\'t specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>',
  operationId: 'GetAccuracyMetrics',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.GetAccuracyMetrics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.GetAccuracyMetrics'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAccuracyMetricsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccuracyMetricsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListDatasetGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListDatasetGroups',
  description:
    'Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.',
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
        .literal('AmazonForecast.ListDatasetGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListDatasetGroups'] },
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

export const postXAmzTargetAmazonForecastListDatasetImportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListDatasetImportJobs',
  description:
    'Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.',
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
        .literal('AmazonForecast.ListDatasetImportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListDatasetImportJobs'] },
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
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastListDatasetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListDatasets',
  description:
    'Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.',
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
        .literal('AmazonForecast.ListDatasets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListDatasets'] },
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
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastListExplainabilitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListExplainabilities',
  description:
    '<p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>',
  operationId: 'ListExplainabilities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListExplainabilities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListExplainabilities'] },
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
      content: { 'application/json': { schema: ListExplainabilitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExplainabilitiesResponseSchema } },
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

export const postXAmzTargetAmazonForecastListExplainabilityExportsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListExplainabilityExports',
  description:
    '<p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>',
  operationId: 'ListExplainabilityExports',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListExplainabilityExports')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListExplainabilityExports'] },
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
      content: { 'application/json': { schema: ListExplainabilityExportsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExplainabilityExportsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListForecastExportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListForecastExportJobs',
  description:
    'Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.',
  operationId: 'ListForecastExportJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListForecastExportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListForecastExportJobs'] },
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
      content: { 'application/json': { schema: ListForecastExportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListForecastExportJobsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListForecastsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListForecasts',
  description:
    'Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.',
  operationId: 'ListForecasts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListForecasts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListForecasts'] },
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
      content: { 'application/json': { schema: ListForecastsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListForecastsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListMonitorEvaluationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListMonitorEvaluations',
  description:
    '<p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>',
  operationId: 'ListMonitorEvaluations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListMonitorEvaluations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListMonitorEvaluations'] },
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
      content: { 'application/json': { schema: ListMonitorEvaluationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMonitorEvaluationsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastListMonitorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListMonitors',
  description:
    "Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.",
  operationId: 'ListMonitors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListMonitors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListMonitors'] },
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
      content: { 'application/json': { schema: ListMonitorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMonitorsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListPredictorBacktestExportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs',
  description:
    '<p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>',
  operationId: 'ListPredictorBacktestExportJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListPredictorBacktestExportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListPredictorBacktestExportJobs'] },
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
      content: { 'application/json': { schema: ListPredictorBacktestExportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPredictorBacktestExportJobsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListPredictorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListPredictors',
  description:
    '<p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>',
  operationId: 'ListPredictors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListPredictors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListPredictors'] },
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
      content: { 'application/json': { schema: ListPredictorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPredictorsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListTagsForResource',
  description: 'Lists the tags for an Amazon Forecast resource.',
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
        .literal('AmazonForecast.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListTagsForResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastListWhatIfAnalysesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses',
  description:
    'Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.',
  operationId: 'ListWhatIfAnalyses',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListWhatIfAnalyses')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListWhatIfAnalyses'] },
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
      content: { 'application/json': { schema: ListWhatIfAnalysesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWhatIfAnalysesResponseSchema } },
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

export const postXAmzTargetAmazonForecastListWhatIfForecastExportsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports',
  description:
    'Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.',
  operationId: 'ListWhatIfForecastExports',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListWhatIfForecastExports')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListWhatIfForecastExports'] },
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
      content: { 'application/json': { schema: ListWhatIfForecastExportsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWhatIfForecastExportsResponseSchema } },
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

export const postXAmzTargetAmazonForecastListWhatIfForecastsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ListWhatIfForecasts',
  description:
    'Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.',
  operationId: 'ListWhatIfForecasts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ListWhatIfForecasts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ListWhatIfForecasts'] },
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
      content: { 'application/json': { schema: ListWhatIfForecastsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWhatIfForecastsResponseSchema } },
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

export const postXAmzTargetAmazonForecastResumeResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.ResumeResource',
  description: 'Resumes a stopped monitor resource.',
  operationId: 'ResumeResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.ResumeResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.ResumeResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResumeResourceRequestSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastStopResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.StopResource',
  description:
    '<p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>',
  operationId: 'StopResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.StopResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.StopResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopResourceRequestSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.TagResource',
  description:
    'Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.',
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
        .literal('AmazonForecast.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.TagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.UntagResource',
  description: 'Deletes the specified tags from a resource.',
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
        .literal('AmazonForecast.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.UntagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastUpdateDatasetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecast.UpdateDatasetGroup',
  description:
    '<p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>',
  operationId: 'UpdateDatasetGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecast.UpdateDatasetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecast.UpdateDatasetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDatasetGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDatasetGroupResponseSchema } },
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
