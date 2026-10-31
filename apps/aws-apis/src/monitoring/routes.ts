import { createRoute, z } from '@hono/zod-openapi'

const NamespaceSchema = z
  .string()
  .regex(/[^:].*/)
  .min(1)
  .max(255)
  .openapi('Namespace')

const MetricNameSchema = z.string().min(1).max(255).openapi('MetricName')

const DimensionNameSchema = z.string().min(1).max(255).openapi('DimensionName')

const DimensionValueSchema = z.string().min(1).max(1024).openapi('DimensionValue')

const DimensionSchema = z
  .object({
    Name: DimensionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (<code>:</code>). ASCII control characters are not supported as part of dimension names.',
        }),
    ),
    Value: DimensionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      '<p>A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish <code>InstanceId</code> as a dimension name, and the actual instance ID as the value for that dimension.</p> <p>You can assign up to 30 dimensions to a metric.</p>',
  })
  .openapi('Dimension')

const DimensionsSchema = z.array(DimensionSchema).max(30).openapi('Dimensions')

const AnomalyDetectorMetricStatSchema = z
  .string()
  .regex(
    /(SampleCount|Average|Sum|Minimum|Maximum|IQM|(p|tc|tm|ts|wm)(\d{1,2}(\.\d{0,10})?|100)|[ou]\d+(\.\d*)?)(_E|_L|_H)?|(TM|TC|TS|WM)\(((((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?:((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%|((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%:(((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?)\)|(TM|TC|TS|WM|PR)\(((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)):((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?|((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?:(\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))\)/,
  )
  .max(50)
  .openapi('AnomalyDetectorMetricStat')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const RangeSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The start time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.",
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The end time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.",
        }),
    ),
  })
  .openapi({
    required: ['StartTime', 'EndTime'],
    description:
      'Specifies one range of days or times to exclude from use for training an anomaly detection model.',
  })
  .openapi('Range')

const AnomalyDetectorExcludedTimeRangesSchema = z
  .array(RangeSchema)
  .openapi('AnomalyDetectorExcludedTimeRanges')

const AnomalyDetectorMetricTimezoneSchema = z
  .string()
  .regex(/.*/)
  .max(50)
  .openapi('AnomalyDetectorMetricTimezone')

const AnomalyDetectorConfigurationSchema = z
  .object({
    ExcludedTimeRanges: AnomalyDetectorExcludedTimeRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of time ranges to exclude from use when the anomaly detection model is trained. Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates the model.",
        }),
    ).exactOptional(),
    MetricTimezone: AnomalyDetectorMetricTimezoneSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time zone to use for the metric. This is useful to enable the model to automatically account for daylight savings time changes if the metric is sensitive to such time changes.</p> <p>To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information, see <a href="https://en.wikipedia.org/wiki/Tz_database">tz database</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.',
    required: [],
  })
  .openapi('AnomalyDetectorConfiguration')

const AnomalyDetectorStateValueSchema = z
  .enum(['PENDING_TRAINING', 'TRAINED_INSUFFICIENT_DATA', 'TRAINED'])
  .openapi('AnomalyDetectorStateValue')

const SingleMetricAnomalyDetectorSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description: 'The namespace of the metric to create the anomaly detection model for.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the metric to create the anomaly detection model for.',
        }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The metric dimensions to create the anomaly detection model for.',
        }),
    ).exactOptional(),
    Stat: AnomalyDetectorMetricStatSchema.and(
      z
        .any()
        .openapi({
          description: 'The statistic to use for the metric and anomaly detection model.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.',
    required: [],
  })
  .openapi('SingleMetricAnomalyDetector')

const MetricIdSchema = z.string().min(1).max(255).openapi('MetricId')

const MetricSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric.' }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric. This is a required field.' }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z.any().openapi({ description: 'The dimensions for the metric.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a specific metric.', required: [] })
  .openapi('Metric')

const PeriodSchema = z.int().min(1).openapi('Period')

const StatSchema = z.string().openapi('Stat')

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

const MetricStatSchema = z
  .object({
    Metric: MetricSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric to return, including the metric name, namespace, and dimensions.',
        }),
    ),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
        }),
    ),
    Stat: StatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
        }),
    ),
    Unit: StandardUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Metric', 'Period', 'Stat'],
    description:
      'This structure defines the metric to be returned, along with the statistics, period, and units.',
  })
  .openapi('MetricStat')

const MetricExpressionSchema = z.string().min(1).max(2048).openapi('MetricExpression')

const MetricLabelSchema = z.string().openapi('MetricLabel')

const ReturnDataSchema = z.boolean().openapi('ReturnData')

const AccountIdSchema = z.string().min(1).max(255).openapi('AccountId')

const MetricDataQuerySchema = z
  .object({
    Id: MetricIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
        }),
    ),
    MetricStat: MetricStatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
        }),
    ).exactOptional(),
    Expression: MetricExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
        }),
    ).exactOptional(),
    Label: MetricLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
        }),
    ).exactOptional(),
    ReturnData: ReturnDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
        }),
    ).exactOptional(),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
        }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    description:
      '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
  })
  .openapi('MetricDataQuery')

const MetricDataQueriesSchema = z.array(MetricDataQuerySchema).openapi('MetricDataQueries')

const MetricMathAnomalyDetectorSchema = z
  .object({
    MetricDataQueries: MetricDataQueriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of metric data query structures that enables you to create an anomaly detector based on the result of a metric math expression. Each item in <code>MetricDataQueries</code> gets a metric or performs a math expression. One item in <code>MetricDataQueries</code> is the expression that provides the time series that the anomaly detector uses as input. Designate the expression by setting <code>ReturnData</code> to <code>true</code> for this object in the array. For all other expressions and metrics, set <code>ReturnData</code> to <code>false</code>. The designated expression must return a single time series.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.',
    required: [],
  })
  .openapi('MetricMathAnomalyDetector')

type AnomalyDetectorType = {
  Namespace?: z.infer<typeof NamespaceSchema> & { [key: string]: unknown }
  MetricName?: z.infer<typeof MetricNameSchema> & { [key: string]: unknown }
  Dimensions?: z.infer<typeof DimensionsSchema> & { [key: string]: unknown }
  Stat?: z.infer<typeof AnomalyDetectorMetricStatSchema> & { [key: string]: unknown }
  Configuration?: z.infer<typeof AnomalyDetectorConfigurationSchema> & { [key: string]: unknown }
  StateValue?: z.infer<typeof AnomalyDetectorStateValueSchema> & { [key: string]: unknown }
  SingleMetricAnomalyDetector?: z.infer<typeof SingleMetricAnomalyDetectorSchema> & {
    [key: string]: unknown
  }
  MetricMathAnomalyDetector?: z.infer<typeof MetricMathAnomalyDetectorSchema> & {
    [key: string]: unknown
  }
}

const InsightRuleNameSchema = z
  .string()
  .regex(/[\x20-\x7E]+/)
  .min(1)
  .max(128)
  .openapi('InsightRuleName')

const InsightRuleStateSchema = z
  .string()
  .regex(/[\x20-\x7E]+/)
  .min(1)
  .max(32)
  .openapi('InsightRuleState')

const InsightRuleSchemaSchema = z.string().openapi('InsightRuleSchema')

const InsightRuleDefinitionSchema = z
  .string()
  .regex(/[\x00-\x7F]+/)
  .min(1)
  .max(8192)
  .openapi('InsightRuleDefinition')

const InsightRuleIsManagedSchema = z.boolean().openapi('InsightRuleIsManaged')

type InsightRuleType = {
  Name: z.infer<typeof InsightRuleNameSchema> & { [key: string]: unknown }
  State: z.infer<typeof InsightRuleStateSchema> & { [key: string]: unknown }
  Schema: z.infer<typeof InsightRuleSchemaSchema> & { [key: string]: unknown }
  Definition: z.infer<typeof InsightRuleDefinitionSchema> & { [key: string]: unknown }
  ManagedRule?: z.infer<typeof InsightRuleIsManagedSchema> & { [key: string]: unknown }
}

const AlarmNameSchema = z.string().min(1).max(255).openapi('AlarmName')

const ResourceNotFoundSchema = z.any().openapi('ResourceNotFound')

const DeleteAnomalyDetectorOutputSchema = z.object({}).openapi('DeleteAnomalyDetectorOutput')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServiceFaultSchema = z.any().openapi('InternalServiceFault')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const MissingRequiredParameterExceptionSchema = z.any().openapi('MissingRequiredParameterException')

const InvalidParameterCombinationExceptionSchema = z
  .any()
  .openapi('InvalidParameterCombinationException')

const DeleteDashboardsOutputSchema = z.object({}).openapi('DeleteDashboardsOutput')

const DashboardNameSchema = z.string().openapi('DashboardName')

const DashboardNotFoundErrorSchema = z.any().openapi('DashboardNotFoundError')

const FailureResourceSchema = z.string().openapi('FailureResource')

const ExceptionTypeSchema = z.string().openapi('ExceptionType')

const FailureCodeSchema = z.string().openapi('FailureCode')

const FailureDescriptionSchema = z.string().openapi('FailureDescription')

const PartialFailureSchema = z
  .object({
    FailureResource: FailureResourceSchema.and(
      z.any().openapi({ description: 'The specified rule that could not be deleted.' }),
    ).exactOptional(),
    ExceptionType: ExceptionTypeSchema.and(
      z.any().openapi({ description: 'The type of error.' }),
    ).exactOptional(),
    FailureCode: FailureCodeSchema.and(
      z.any().openapi({ description: 'The code of the error.' }),
    ).exactOptional(),
    FailureDescription: FailureDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.',
    required: [],
  })
  .openapi('PartialFailure')

const BatchFailuresSchema = z.array(PartialFailureSchema).openapi('BatchFailures')

const DeleteInsightRulesOutputSchema = z
  .object({
    Failures: BatchFailuresSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array listing the rules that could not be deleted. You cannot delete built-in rules.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteInsightRulesOutput')

const DeleteMetricStreamOutputSchema = z.object({}).openapi('DeleteMetricStreamOutput')

const AlarmTypeSchema = z.enum(['CompositeAlarm', 'MetricAlarm']).openapi('AlarmType')

const HistoryItemTypeSchema = z
  .enum(['ConfigurationUpdate', 'StateUpdate', 'Action'])
  .openapi('HistoryItemType')

const HistorySummarySchema = z.string().min(1).max(255).openapi('HistorySummary')

const HistoryDataSchema = z.string().min(1).max(4095).openapi('HistoryData')

const AlarmHistoryItemSchema = z
  .object({
    AlarmName: AlarmNameSchema.and(
      z.any().openapi({ description: 'The descriptive name for the alarm.' }),
    ).exactOptional(),
    AlarmType: AlarmTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of alarm, either metric alarm or composite alarm.' }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time stamp for the alarm history item.' }),
    ).exactOptional(),
    HistoryItemType: HistoryItemTypeSchema.and(
      z.any().openapi({ description: 'The type of alarm history item.' }),
    ).exactOptional(),
    HistorySummary: HistorySummarySchema.and(
      z.any().openapi({ description: 'A summary of the alarm history, in text format.' }),
    ).exactOptional(),
    HistoryData: HistoryDataSchema.and(
      z.any().openapi({ description: 'Data about the alarm, in JSON format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the history of a specific alarm.', required: [] })
  .openapi('AlarmHistoryItem')

const AlarmHistoryItemsSchema = z.array(AlarmHistoryItemSchema).openapi('AlarmHistoryItems')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeAlarmHistoryOutputSchema = z
  .object({
    AlarmHistoryItems: AlarmHistoryItemsSchema.and(
      z.any().openapi({ description: 'The alarm histories, in JSON format.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token that marks the start of the next batch of returned results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAlarmHistoryOutput')

const InvalidNextTokenSchema = z.any().openapi('InvalidNextToken')

const ActionsEnabledSchema = z.boolean().openapi('ActionsEnabled')

const ResourceNameSchema = z.string().min(1).max(1024).openapi('ResourceName')

const ResourceListSchema = z.array(ResourceNameSchema).max(5).openapi('ResourceList')

const AlarmArnSchema = z.string().min(1).max(1600).openapi('AlarmArn')

const AlarmDescriptionSchema = z.string().min(0).max(1024).openapi('AlarmDescription')

const AlarmRuleSchema = z.string().min(1).max(10240).openapi('AlarmRule')

const StateReasonSchema = z.string().min(0).max(1023).openapi('StateReason')

const StateReasonDataSchema = z.string().min(0).max(4000).openapi('StateReasonData')

const StateValueSchema = z.enum(['OK', 'ALARM', 'INSUFFICIENT_DATA']).openapi('StateValue')

const ActionsSuppressedBySchema = z
  .enum(['WaitPeriod', 'ExtensionPeriod', 'Alarm'])
  .openapi('ActionsSuppressedBy')

const ActionsSuppressedReasonSchema = z.string().min(0).max(1024).openapi('ActionsSuppressedReason')

const SuppressorPeriodSchema = z.int().openapi('SuppressorPeriod')

const CompositeAlarmSchema = z
  .object({
    ActionsEnabled: ActionsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether actions should be executed during any changes to the alarm state.',
        }),
    ).exactOptional(),
    AlarmActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    AlarmArn: AlarmArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the alarm.' }),
    ).exactOptional(),
    AlarmConfigurationUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time stamp of the last update to the alarm configuration.' }),
    ).exactOptional(),
    AlarmDescription: AlarmDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the alarm.' }),
    ).exactOptional(),
    AlarmName: AlarmNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm.' }),
    ).exactOptional(),
    AlarmRule: AlarmRuleSchema.and(
      z
        .any()
        .openapi({ description: 'The rule that this alarm uses to evaluate its alarm state.' }),
    ).exactOptional(),
    InsufficientDataActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    OKActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    StateReason: StateReasonSchema.and(
      z.any().openapi({ description: 'An explanation for the alarm state, in text format.' }),
    ).exactOptional(),
    StateReasonData: StateReasonDataSchema.and(
      z.any().openapi({ description: 'An explanation for the alarm state, in JSON format.' }),
    ).exactOptional(),
    StateUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "Tracks the timestamp of any state update, even if <code>StateValue</code> doesn't change.",
        }),
    ).exactOptional(),
    StateValue: StateValueSchema.and(
      z.any().openapi({ description: 'The state value for the alarm.' }),
    ).exactOptional(),
    StateTransitionedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: " The timestamp of the last change to the alarm's <code>StateValue</code>. ",
        }),
    ).exactOptional(),
    ActionsSuppressedBy: ActionsSuppressedBySchema.and(
      z
        .any()
        .openapi({
          description:
            ' When the value is <code>ALARM</code>, it means that the actions are suppressed because the suppressor alarm is in <code>ALARM</code> When the value is <code>WaitPeriod</code>, it means that the actions are suppressed because the composite alarm is waiting for the suppressor alarm to go into into the <code>ALARM</code> state. The maximum waiting time is as specified in <code>ActionsSuppressorWaitPeriod</code>. After this time, the composite alarm performs its actions. When the value is <code>ExtensionPeriod</code>, it means that the actions are suppressed because the composite alarm is waiting after the suppressor alarm went out of the <code>ALARM</code> state. The maximum waiting time is as specified in <code>ActionsSuppressorExtensionPeriod</code>. After this time, the composite alarm performs its actions. ',
        }),
    ).exactOptional(),
    ActionsSuppressedReason: ActionsSuppressedReasonSchema.and(
      z.any().openapi({ description: ' Captures the reason for action suppression. ' }),
    ).exactOptional(),
    ActionsSuppressor: AlarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Actions will be suppressed if the suppressor alarm is in the <code>ALARM</code> state. <code>ActionsSuppressor</code> can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. ',
        }),
    ).exactOptional(),
    ActionsSuppressorWaitPeriod: SuppressorPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>WaitPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>',
        }),
    ).exactOptional(),
    ActionsSuppressorExtensionPeriod: SuppressorPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>ExtensionPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details about a composite alarm.', required: [] })
  .openapi('CompositeAlarm')

const CompositeAlarmsSchema = z.array(CompositeAlarmSchema).openapi('CompositeAlarms')

const StatisticSchema = z
  .enum(['SampleCount', 'Average', 'Sum', 'Minimum', 'Maximum'])
  .openapi('Statistic')

const ExtendedStatisticSchema = z.string().openapi('ExtendedStatistic')

const EvaluationPeriodsSchema = z.int().min(1).openapi('EvaluationPeriods')

const DatapointsToAlarmSchema = z.int().min(1).openapi('DatapointsToAlarm')

const ThresholdSchema = z.float64().openapi('Threshold')

const ComparisonOperatorSchema = z
  .enum([
    'GreaterThanOrEqualToThreshold',
    'GreaterThanThreshold',
    'LessThanThreshold',
    'LessThanOrEqualToThreshold',
    'LessThanLowerOrGreaterThanUpperThreshold',
    'LessThanLowerThreshold',
    'GreaterThanUpperThreshold',
  ])
  .openapi('ComparisonOperator')

const TreatMissingDataSchema = z.string().min(1).max(255).openapi('TreatMissingData')

const EvaluateLowSampleCountPercentileSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi('EvaluateLowSampleCountPercentile')

const EvaluationStateSchema = z.literal('PARTIAL_DATA').openapi('EvaluationState')

const MetricAlarmSchema = z
  .object({
    AlarmName: AlarmNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm.' }),
    ).exactOptional(),
    AlarmArn: AlarmArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the alarm.' }),
    ).exactOptional(),
    AlarmDescription: AlarmDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the alarm.' }),
    ).exactOptional(),
    AlarmConfigurationUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time stamp of the last update to the alarm configuration.' }),
    ).exactOptional(),
    ActionsEnabled: ActionsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether actions should be executed during any changes to the alarm state.',
        }),
    ).exactOptional(),
    OKActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions to execute when this alarm transitions to the <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    AlarmActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    InsufficientDataActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    StateValue: StateValueSchema.and(
      z.any().openapi({ description: 'The state value for the alarm.' }),
    ).exactOptional(),
    StateReason: StateReasonSchema.and(
      z.any().openapi({ description: 'An explanation for the alarm state, in text format.' }),
    ).exactOptional(),
    StateReasonData: StateReasonDataSchema.and(
      z.any().openapi({ description: 'An explanation for the alarm state, in JSON format.' }),
    ).exactOptional(),
    StateUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time stamp of the last update to the value of either the <code>StateValue</code> or <code>EvaluationState</code> parameters.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric associated with the alarm, if this is an alarm based on a single metric.',
        }),
    ).exactOptional(),
    Namespace: NamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric associated with the alarm.' }),
    ).exactOptional(),
    Statistic: StatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>.',
        }),
    ).exactOptional(),
    ExtendedStatistic: ExtendedStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.',
        }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z.any().openapi({ description: 'The dimensions for the metric associated with the alarm.' }),
    ).exactOptional(),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({ description: 'The period, in seconds, over which the statistic is applied.' }),
    ).exactOptional(),
    Unit: StandardUnitSchema.and(
      z.any().openapi({ description: 'The unit of the metric associated with the alarm.' }),
    ).exactOptional(),
    EvaluationPeriods: EvaluationPeriodsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of periods over which data is compared to the specified threshold.',
        }),
    ).exactOptional(),
    DatapointsToAlarm: DatapointsToAlarmSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of data points that must be breaching to trigger the alarm.',
        }),
    ).exactOptional(),
    Threshold: ThresholdSchema.and(
      z.any().openapi({ description: 'The value to compare with the specified statistic.' }),
    ).exactOptional(),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.',
        }),
    ).exactOptional(),
    TreatMissingData: TreatMissingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets how this alarm is to handle missing data points. The valid values are <code>breaching</code>, <code>notBreaching</code>, <code>ignore</code>, and <code>missing</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring how CloudWatch alarms treat missing data</a>.</p> <p>If this parameter is omitted, the default behavior of <code>missing</code> is used.</p>',
        }),
    ).exactOptional(),
    EvaluateLowSampleCountPercentile: EvaluateLowSampleCountPercentileSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used only for alarms based on percentiles. If <code>ignore</code>, the alarm state does not change during periods with too few data points to be statistically significant. If <code>evaluate</code> or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.',
        }),
    ).exactOptional(),
    Metrics: MetricDataQueriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of MetricDataQuery structures, used in an alarm based on a metric math expression. Each structure either retrieves a metric or performs a math expression. One item in the Metrics array is the math expression that the alarm watches. This expression by designated by having <code>ReturnData</code> set to true.',
        }),
    ).exactOptional(),
    ThresholdMetricId: MetricIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'In an alarm based on an anomaly detection model, this is the ID of the <code>ANOMALY_DETECTION_BAND</code> function used as the threshold for the alarm.',
        }),
    ).exactOptional(),
    EvaluationState: EvaluationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the value of this field is <code>PARTIAL_DATA</code>, the alarm is being evaluated based on only partial data. This happens if the query used for the alarm returns more than 10,000 metrics. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.',
        }),
    ).exactOptional(),
    StateTransitionedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time that the alarm's <code>StateValue</code> most recently changed.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details about a metric alarm.', required: [] })
  .openapi('MetricAlarm')

const MetricAlarmsSchema = z.array(MetricAlarmSchema).openapi('MetricAlarms')

const DescribeAlarmsOutputSchema = z
  .object({
    CompositeAlarms: CompositeAlarmsSchema.and(
      z
        .any()
        .openapi({
          description: 'The information about any composite alarms returned by the operation.',
        }),
    ).exactOptional(),
    MetricAlarms: MetricAlarmsSchema.and(
      z
        .any()
        .openapi({
          description: 'The information about any metric alarms returned by the operation.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token that marks the start of the next batch of returned results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAlarmsOutput')

const DescribeAlarmsForMetricOutputSchema = z
  .object({
    MetricAlarms: MetricAlarmsSchema.and(
      z.any().openapi({ description: 'The information for each alarm with the specified metric.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAlarmsForMetricOutput')

const AnomalyDetectorSchema: z.ZodType<AnomalyDetectorType> = z
  .lazy(() =>
    z
      .object({
        Namespace: NamespaceSchema.and(
          z
            .any()
            .openapi({
              deprecated: true,
              description:
                'The namespace of the metric associated with the anomaly detection model.Use SingleMetricAnomalyDetector.Namespace property.',
            }),
        ).exactOptional(),
        MetricName: MetricNameSchema.and(
          z
            .any()
            .openapi({
              deprecated: true,
              description:
                'The name of the metric associated with the anomaly detection model.Use SingleMetricAnomalyDetector.MetricName property.',
            }),
        ).exactOptional(),
        Dimensions: DimensionsSchema.and(
          z
            .any()
            .openapi({
              deprecated: true,
              description:
                'The metric dimensions associated with the anomaly detection model.Use SingleMetricAnomalyDetector.Dimensions property.',
            }),
        ).exactOptional(),
        Stat: AnomalyDetectorMetricStatSchema.and(
          z
            .any()
            .openapi({
              deprecated: true,
              description:
                'The statistic associated with the anomaly detection model.Use SingleMetricAnomalyDetector.Stat property.',
            }),
        ).exactOptional(),
        Configuration: AnomalyDetectorConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model, and the time zone to use for the metric.',
            }),
        ).exactOptional(),
        StateValue: AnomalyDetectorStateValueSchema.and(
          z
            .any()
            .openapi({
              description:
                "The current status of the anomaly detector's training. The possible values are <code>TRAINED | PENDING_TRAINING | TRAINED_INSUFFICIENT_DATA</code> ",
            }),
        ).exactOptional(),
        SingleMetricAnomalyDetector: SingleMetricAnomalyDetectorSchema.and(
          z
            .any()
            .openapi({
              description: 'The CloudWatch metric and statistic for this anomaly detector.',
            }),
        ).exactOptional(),
        MetricMathAnomalyDetector: MetricMathAnomalyDetectorSchema.and(
          z
            .any()
            .openapi({
              description: 'The CloudWatch metric math expression for this anomaly detector.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'An anomaly detection model associated with a particular CloudWatch metric, statistic, or metric math expression. You can use the model to display a band of expected, normal values when the metric is graphed.',
        required: [],
      }),
  )
  .openapi('AnomalyDetector')

const AnomalyDetectorsSchema = z.array(AnomalyDetectorSchema).openapi('AnomalyDetectors')

const DescribeAnomalyDetectorsOutputSchema = z
  .object({
    AnomalyDetectors: AnomalyDetectorsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of anomaly detection models returned by the operation.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use in a subsequent operation to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAnomalyDetectorsOutput')

const AnomalyDetectorTypeSchema = z
  .enum(['SINGLE_METRIC', 'METRIC_MATH'])
  .openapi('AnomalyDetectorType')

const InsightRuleSchema: z.ZodType<InsightRuleType> = z
  .lazy(() =>
    z
      .object({
        Name: InsightRuleNameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
        State: InsightRuleStateSchema.and(
          z.any().openapi({ description: 'Indicates whether the rule is enabled or disabled.' }),
        ),
        Schema: InsightRuleSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'For rules that you create, this is always <code>{"Name": "CloudWatchLogRule", "Version": 1}</code>. For managed rules, this is <code>{"Name": "ServiceLogRule", "Version": 1}</code> ',
            }),
        ),
        Definition: InsightRuleDefinitionSchema.and(
          z
            .any()
            .openapi({
              description:
                'The definition of the rule, as a JSON object. The definition contains the keywords used to define contributors, the value to aggregate on if this rule returns a sum instead of a count, and the filters. For details on the valid syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights Rule Syntax</a>.',
            }),
        ),
        ManagedRule: InsightRuleIsManagedSchema.and(
          z
            .any()
            .openapi({
              description: ' An optional built-in rule that Amazon Web Services manages. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['Name', 'State', 'Schema', 'Definition'],
        description:
          'This structure contains the definition for a Contributor Insights rule. For more information about this rule, see<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html"> Using Constributor Insights to analyze high-cardinality data</a> in the <i>Amazon CloudWatch User Guide</i>.',
      }),
  )
  .openapi('InsightRule')

const InsightRulesSchema = z.array(InsightRuleSchema).openapi('InsightRules')

const DescribeInsightRulesOutputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is present, it is a token that marks the start of the next batch of returned results. ',
        }),
    ).exactOptional(),
    InsightRules: InsightRulesSchema.and(
      z.any().openapi({ description: 'The rules returned by the operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeInsightRulesOutput')

const DisableInsightRulesOutputSchema = z
  .object({
    Failures: BatchFailuresSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array listing the rules that could not be disabled. You cannot disable built-in rules.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisableInsightRulesOutput')

const EnableInsightRulesOutputSchema = z
  .object({
    Failures: BatchFailuresSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array listing the rules that could not be enabled. You cannot disable or enable built-in rules.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnableInsightRulesOutput')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DashboardArnSchema = z.string().openapi('DashboardArn')

const DashboardBodySchema = z.string().openapi('DashboardBody')

const GetDashboardOutputSchema = z
  .object({
    DashboardArn: DashboardArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dashboard.' }),
    ).exactOptional(),
    DashboardBody: DashboardBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'The detailed information about the dashboard, including what widgets are included and their location on the dashboard. For more information about the <code>DashboardBody</code> syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>. ',
        }),
    ).exactOptional(),
    DashboardName: DashboardNameSchema.and(
      z.any().openapi({ description: 'The name of the dashboard.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDashboardOutput')

const InsightRuleContributorKeyLabelSchema = z.string().openapi('InsightRuleContributorKeyLabel')

const InsightRuleContributorKeyLabelsSchema = z
  .array(InsightRuleContributorKeyLabelSchema)
  .openapi('InsightRuleContributorKeyLabels')

const InsightRuleAggregationStatisticSchema = z.string().openapi('InsightRuleAggregationStatistic')

const InsightRuleUnboundDoubleSchema = z.float64().openapi('InsightRuleUnboundDouble')

const InsightRuleUnboundLongSchema = z.int().openapi('InsightRuleUnboundLong')

const InsightRuleContributorKeySchema = z.string().openapi('InsightRuleContributorKey')

const InsightRuleContributorKeysSchema = z
  .array(InsightRuleContributorKeySchema)
  .openapi('InsightRuleContributorKeys')

const InsightRuleContributorDatapointSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the data point.' }),
    ),
    ApproximateValue: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The approximate value that this contributor added during this timestamp.',
        }),
    ),
  })
  .openapi({
    required: ['Timestamp', 'ApproximateValue'],
    description:
      '<p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>',
  })
  .openapi('InsightRuleContributorDatapoint')

const InsightRuleContributorDatapointsSchema = z
  .array(InsightRuleContributorDatapointSchema)
  .openapi('InsightRuleContributorDatapoints')

const InsightRuleContributorSchema = z
  .object({
    Keys: InsightRuleContributorKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'One of the log entry field keywords that is used to define contributors for this rule.',
        }),
    ),
    ApproximateAggregateValue: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'An approximation of the aggregate value that comes from this contributor.',
        }),
    ),
    Datapoints: InsightRuleContributorDatapointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the data points where this contributor is present. Only the data points when this contributor appeared are included in the array.',
        }),
    ),
  })
  .openapi({
    required: ['Keys', 'ApproximateAggregateValue', 'Datapoints'],
    description:
      '<p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>',
  })
  .openapi('InsightRuleContributor')

const InsightRuleContributorsSchema = z
  .array(InsightRuleContributorSchema)
  .openapi('InsightRuleContributors')

const InsightRuleMetricDatapointSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the data point.' }),
    ),
    UniqueContributors: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of unique contributors who published data during this timestamp.</p> <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>',
        }),
    ).exactOptional(),
    MaxContributorValue: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum value provided by one contributor during this timestamp. Each timestamp is evaluated separately, so the identity of the max contributor could be different for each timestamp.</p> <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>',
        }),
    ).exactOptional(),
    SampleCount: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of occurrences that matched the rule during this data point.</p> <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>',
        }),
    ).exactOptional(),
    Average: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The average value from all contributors during the time period represented by that data point.</p> <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>',
        }),
    ).exactOptional(),
    Sum: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The sum of the values from all contributors during the time period represented by that data point.</p> <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>',
        }),
    ).exactOptional(),
    Minimum: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum value from a single contributor during the time period represented by that data point.</p> <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>',
        }),
    ).exactOptional(),
    Maximum: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum value from a single occurence from a single contributor during the time period represented by that data point.</p> <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Timestamp'],
    description:
      '<p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>',
  })
  .openapi('InsightRuleMetricDatapoint')

const InsightRuleMetricDatapointsSchema = z
  .array(InsightRuleMetricDatapointSchema)
  .openapi('InsightRuleMetricDatapoints')

const GetInsightRuleReportOutputSchema = z
  .object({
    KeyLabels: InsightRuleContributorKeyLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the strings used as the keys for this rule. The keys are the dimensions used to classify contributors. If the rule contains more than one key, then each unique combination of values for the keys is counted as a unique contributor.',
        }),
    ).exactOptional(),
    AggregationStatistic: InsightRuleAggregationStatisticSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether this rule aggregates contributor data by COUNT or SUM.',
        }),
    ).exactOptional(),
    AggregateValue: InsightRuleUnboundDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sum of the values from all individual contributors that match the rule.',
        }),
    ).exactOptional(),
    ApproximateUniqueCount: InsightRuleUnboundLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'An approximate count of the unique contributors found by this rule in this time period.',
        }),
    ).exactOptional(),
    Contributors: InsightRuleContributorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the unique contributors found by this rule in this time period. If the rule contains multiple keys, each combination of values for the keys counts as a unique contributor.',
        }),
    ).exactOptional(),
    MetricDatapoints: InsightRuleMetricDatapointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time series of metric data points that matches the time period in the rule request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInsightRuleReportOutput')

const InsightRuleMetricNameSchema = z
  .string()
  .regex(/[\x20-\x7E]+/)
  .min(1)
  .max(32)
  .openapi('InsightRuleMetricName')

const TimestampsSchema = z.array(TimestampSchema).openapi('Timestamps')

const DatapointValueSchema = z.float64().openapi('DatapointValue')

const DatapointValuesSchema = z.array(DatapointValueSchema).openapi('DatapointValues')

const StatusCodeSchema = z
  .enum(['Complete', 'InternalError', 'PartialData', 'Forbidden'])
  .openapi('StatusCode')

const MessageDataCodeSchema = z.string().openapi('MessageDataCode')

const MessageDataValueSchema = z.string().openapi('MessageDataValue')

const MessageDataSchema = z
  .object({
    Code: MessageDataCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The error code or status code associated with the message.' }),
    ).exactOptional(),
    Value: MessageDataValueSchema.and(
      z.any().openapi({ description: 'The message text.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A message returned by the <code>GetMetricData</code>API, including a code and a description.</p> <p>If a cross-Region <code>GetMetricData</code> operation fails with a code of <code>Forbidden</code> and a value of <code>Authentication too complex to retrieve cross region data</code>, you can correct the problem by running the <code>GetMetricData</code> operation in the same Region where the metric data is.</p>',
    required: [],
  })
  .openapi('MessageData')

const MetricDataResultMessagesSchema = z
  .array(MessageDataSchema)
  .openapi('MetricDataResultMessages')

const MetricDataResultSchema = z
  .object({
    Id: MetricIdSchema.and(
      z.any().openapi({ description: 'The short name you specified to represent this metric.' }),
    ).exactOptional(),
    Label: MetricLabelSchema.and(
      z.any().openapi({ description: 'The human-readable label associated with the data.' }),
    ).exactOptional(),
    Timestamps: TimestampsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamps for the data points, formatted in Unix timestamp format. The number of timestamps always matches the number of values and the value for Timestamps[x] is Values[x].',
        }),
    ).exactOptional(),
    Values: DatapointValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data points for the metric corresponding to <code>Timestamps</code>. The number of values always matches the number of timestamps and the timestamp for Values[x] is Timestamps[x].',
        }),
    ).exactOptional(),
    StatusCode: StatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the returned data. <code>Complete</code> indicates that all data points in the requested time range were returned. <code>PartialData</code> means that an incomplete set of data points were returned. You can use the <code>NextToken</code> value that was returned and repeat your request to get more data points. <code>NextToken</code> is not returned if you are performing a math expression. <code>InternalError</code> indicates that an error occurred. Retry your request using <code>NextToken</code>, if present.',
        }),
    ).exactOptional(),
    Messages: MetricDataResultMessagesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of messages with additional information about the data returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.',
    required: [],
  })
  .openapi('MetricDataResult')

const MetricDataResultsSchema = z.array(MetricDataResultSchema).openapi('MetricDataResults')

const GetMetricDataOutputSchema = z
  .object({
    MetricDataResults: MetricDataResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metrics that are returned, including the metric name, namespace, and dimensions.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A token that marks the next batch of returned results.' }),
    ).exactOptional(),
    Messages: MetricDataResultMessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains a message about this <code>GetMetricData</code> operation, if the operation results in such a message. An example of a message that might be returned is <code>Maximum number of allowed metrics exceeded</code>. If there is a message, as much of the operation as possible is still executed.</p> <p>A message appears here only if it is related to the global <code>GetMetricData</code> operation. Any message about a specific metric returned by the operation appears in the <code>MetricDataResult</code> object returned for that metric.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMetricDataOutput')

const GetMetricDataLabelTimezoneSchema = z.string().openapi('GetMetricDataLabelTimezone')

const DatapointValueMapSchema = z
  .record(z.string(), DatapointValueSchema)
  .openapi('DatapointValueMap')

const DatapointSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time stamp used for the data point.' }),
    ).exactOptional(),
    SampleCount: DatapointValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of metric values that contributed to the aggregate value of this data point.',
        }),
    ).exactOptional(),
    Average: DatapointValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The average of the metric values that correspond to the data point.',
        }),
    ).exactOptional(),
    Sum: DatapointValueSchema.and(
      z.any().openapi({ description: 'The sum of the metric values for the data point.' }),
    ).exactOptional(),
    Minimum: DatapointValueSchema.and(
      z.any().openapi({ description: 'The minimum metric value for the data point.' }),
    ).exactOptional(),
    Maximum: DatapointValueSchema.and(
      z.any().openapi({ description: 'The maximum metric value for the data point.' }),
    ).exactOptional(),
    Unit: StandardUnitSchema.and(
      z.any().openapi({ description: 'The standard unit for the data point.' }),
    ).exactOptional(),
    ExtendedStatistics: DatapointValueMapSchema.and(
      z.any().openapi({ description: 'The percentile statistic for the data point.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Encapsulates the statistical data that CloudWatch computes from metric data.',
    required: [],
  })
  .openapi('Datapoint')

const DatapointsSchema = z.array(DatapointSchema).openapi('Datapoints')

const GetMetricStatisticsOutputSchema = z
  .object({
    Label: MetricLabelSchema.and(
      z.any().openapi({ description: 'A label for the specified metric.' }),
    ).exactOptional(),
    Datapoints: DatapointsSchema.and(
      z.any().openapi({ description: 'The data points for the specified metric.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMetricStatisticsOutput')

const AmazonResourceNameSchema = z.string().min(1).max(1024).openapi('AmazonResourceName')

const MetricStreamNameSchema = z.string().min(1).max(255).openapi('MetricStreamName')

const MetricStreamFilterMetricNamesSchema = z
  .array(MetricNameSchema)
  .openapi('MetricStreamFilterMetricNames')

const MetricStreamFilterSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the metric namespace for this filter.</p> <p>The namespace can contain only ASCII printable characters (ASCII range 32 through 126). It must contain at least one non-whitespace character.</p>',
        }),
    ).exactOptional(),
    MetricNames: MetricStreamFilterMetricNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The names of the metrics to either include or exclude from the metric stream. </p> <p>If you omit this parameter, all metrics in the namespace are included or excluded, depending on whether this filter is specified as an exclude filter or an include filter.</p> <p>Each metric name can contain only ASCII printable characters (ASCII range 32 through 126). Each metric name must contain at least one non-whitespace character.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>This structure contains a metric namespace and optionally, a list of metric names, to either include in a metric stream or exclude from a metric stream.</p> <p>A metric stream's filters can include up to 1000 total names. This limit applies to the sum of namespace names and metric names in the filters. For example, this could include 10 metric namespace filters with 99 metrics each, or 20 namespace filters with 49 metrics specified in each filter.</p>",
    required: [],
  })
  .openapi('MetricStreamFilter')

const MetricStreamFiltersSchema = z.array(MetricStreamFilterSchema).openapi('MetricStreamFilters')

const MetricStreamStateSchema = z.string().openapi('MetricStreamState')

const MetricStreamOutputFormatSchema = z
  .enum(['json', 'opentelemetry0.7'])
  .openapi('MetricStreamOutputFormat')

const MetricStreamStatisticsMetricSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric.' }),
    ),
    MetricName: MetricNameSchema.and(z.any().openapi({ description: 'The name of the metric.' })),
  })
  .openapi({
    required: ['Namespace', 'MetricName'],
    description:
      'This object contains the information for one metric that is to be streamed with additional statistics.',
  })
  .openapi('MetricStreamStatisticsMetric')

const MetricStreamStatisticsIncludeMetricsSchema = z
  .array(MetricStreamStatisticsMetricSchema)
  .openapi('MetricStreamStatisticsIncludeMetrics')

const MetricStreamStatisticSchema = z.string().openapi('MetricStreamStatistic')

const MetricStreamStatisticsAdditionalStatisticsSchema = z
  .array(MetricStreamStatisticSchema)
  .openapi('MetricStreamStatisticsAdditionalStatistics')

const MetricStreamStatisticsConfigurationSchema = z
  .object({
    IncludeMetrics: MetricStreamStatisticsIncludeMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of metric name and namespace pairs that stream the additional statistics listed in the value of the <code>AdditionalStatistics</code> parameter. There can be as many as 100 pairs in the array.</p> <p>All metrics that match the combination of metric name and namespace will be streamed with the additional statistics, no matter their dimensions.</p>',
        }),
    ),
    AdditionalStatistics: MetricStreamStatisticsAdditionalStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of additional statistics that are to be streamed for the metrics listed in the <code>IncludeMetrics</code> array in this structure. This list can include as many as 20 statistics.</p> <p>If the <code>OutputFormat</code> for the stream is <code>opentelemetry0.7</code>, the only valid values are <code>p<i>??</i> </code> percentile statistics such as <code>p90</code>, <code>p99</code> and so on.</p> <p>If the <code>OutputFormat</code> for the stream is <code>json</code>, the valid values include the abbreviations for all of the statistics listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html"> CloudWatch statistics definitions</a>. For example, this includes <code>tm98, </code> <code>wm90</code>, <code>PR(:300)</code>, and so on.</p>',
        }),
    ),
  })
  .openapi({
    required: ['IncludeMetrics', 'AdditionalStatistics'],
    description:
      'By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. This structure contains information for one metric that includes additional statistics in the stream. For more information about statistics, see CloudWatch, listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html"> CloudWatch statistics definitions</a>.',
  })
  .openapi('MetricStreamStatisticsConfiguration')

const MetricStreamStatisticsConfigurationsSchema = z
  .array(MetricStreamStatisticsConfigurationSchema)
  .openapi('MetricStreamStatisticsConfigurations')

const IncludeLinkedAccountsMetricsSchema = z.boolean().openapi('IncludeLinkedAccountsMetrics')

const GetMetricStreamOutputSchema = z
  .object({
    Arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the metric stream.' }),
    ).exactOptional(),
    Name: MetricStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the metric stream.' }),
    ).exactOptional(),
    IncludeFilters: MetricStreamFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this array of metric namespaces is present, then these namespaces are the only metric namespaces that are streamed by this metric stream.',
        }),
    ).exactOptional(),
    ExcludeFilters: MetricStreamFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this array of metric namespaces is present, then these namespaces are the only metric namespaces that are not streamed by this metric stream. In this case, all other metric namespaces in the account are streamed by this metric stream.',
        }),
    ).exactOptional(),
    FirehoseArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon Kinesis Data Firehose delivery stream that is used by this metric stream.',
        }),
    ).exactOptional(),
    RoleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the IAM role that is used by this metric stream.' }),
    ).exactOptional(),
    State: MetricStreamStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the metric stream. The possible values are <code>running</code> and <code>stopped</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the metric stream was created.' }),
    ).exactOptional(),
    LastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: "The date of the most recent update to the metric stream's configuration.",
        }),
    ).exactOptional(),
    OutputFormat: MetricStreamOutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output format for the stream. Valid values are <code>json</code> and <code>opentelemetry0.7</code>. For more information about metric stream output formats, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html">Metric streams output formats</a>.',
        }),
    ).exactOptional(),
    StatisticsConfigurations: MetricStreamStatisticsConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each entry in this array displays information about one or more metrics that include additional statistics in the metric stream. For more information about the additional statistics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html"> CloudWatch statistics definitions</a>. ',
        }),
    ).exactOptional(),
    IncludeLinkedAccountsMetrics: IncludeLinkedAccountsMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this is <code>true</code> and this metric stream is in a monitoring account, then the stream includes metrics from source accounts that the monitoring account is linked to.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMetricStreamOutput')

const MetricWidgetImageSchema = z.string().openapi('MetricWidgetImage')

const GetMetricWidgetImageOutputSchema = z
  .object({
    MetricWidgetImage: MetricWidgetImageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image of the graph, in the output format specified. The output is base64-encoded.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMetricWidgetImageOutput')

const LastModifiedSchema = z.iso.datetime({ offset: true }).openapi('LastModified')

const SizeSchema = z.int().openapi('Size')

const DashboardEntrySchema = z
  .object({
    DashboardName: DashboardNameSchema.and(
      z.any().openapi({ description: 'The name of the dashboard.' }),
    ).exactOptional(),
    DashboardArn: DashboardArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the dashboard.' }),
    ).exactOptional(),
    LastModified: LastModifiedSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time stamp of when the dashboard was last modified, either by an API call or through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.',
        }),
    ).exactOptional(),
    Size: SizeSchema.and(
      z.any().openapi({ description: 'The size of the dashboard, in bytes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a specific dashboard.', required: [] })
  .openapi('DashboardEntry')

const DashboardEntriesSchema = z.array(DashboardEntrySchema).openapi('DashboardEntries')

const ListDashboardsOutputSchema = z
  .object({
    DashboardEntries: DashboardEntriesSchema.and(
      z.any().openapi({ description: 'The list of matching dashboards.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token that marks the start of the next batch of returned results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDashboardsOutput')

const TemplateNameSchema = z
  .string()
  .regex(/[0-9A-Za-z][\-\.\_0-9A-Za-z]{0,126}[0-9A-Za-z]/)
  .min(1)
  .max(128)
  .openapi('TemplateName')

const ManagedRuleStateSchema = z
  .object({
    RuleName: InsightRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the Contributor Insights rule that contains data for the specified Amazon Web Services resource. ',
        }),
    ),
    State: InsightRuleStateSchema.and(
      z.any().openapi({ description: ' Indicates whether the rule is enabled or disabled. ' }),
    ),
  })
  .openapi({
    required: ['RuleName', 'State'],
    description: ' The status of a managed Contributor Insights rule. ',
  })
  .openapi('ManagedRuleState')

const ManagedRuleDescriptionSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The template name for the managed rule. Used to enable managed rules using <code>PutManagedInsightRules</code>. ',
        }),
    ).exactOptional(),
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If a managed rule is enabled, this is the ARN for the related Amazon Web Services resource. ',
        }),
    ).exactOptional(),
    RuleState: ManagedRuleStateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the state of a managed rule. If present, it contains information about the Contributor Insights rule that contains information about the related Amazon Web Services resource. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Contains information about managed Contributor Insights rules, as returned by <code>ListManagedInsightRules</code>. ',
    required: [],
  })
  .openapi('ManagedRuleDescription')

const ManagedRuleDescriptionsSchema = z
  .array(ManagedRuleDescriptionSchema)
  .openapi('ManagedRuleDescriptions')

const ListManagedInsightRulesOutputSchema = z
  .object({
    ManagedRules: ManagedRuleDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The managed rules that are available for the specified Amazon Web Services resource. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Include this value to get the next set of rules if the value was returned by the previous operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListManagedInsightRulesOutput')

const MetricStreamEntrySchema = z
  .object({
    Arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the metric stream.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the metric stream was originally created.' }),
    ).exactOptional(),
    LastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the configuration of this metric stream was most recently updated.',
        }),
    ).exactOptional(),
    Name: MetricStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the metric stream.' }),
    ).exactOptional(),
    FirehoseArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Kinesis Firehose devlivery stream that is used for this metric stream.',
        }),
    ).exactOptional(),
    State: MetricStreamStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of this stream. Valid values are <code>running</code> and <code>stopped</code>.',
        }),
    ).exactOptional(),
    OutputFormat: MetricStreamOutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output format of this metric stream. Valid values are <code>json</code> and <code>opentelemetry0.7</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'This structure contains the configuration information about one metric stream.',
    required: [],
  })
  .openapi('MetricStreamEntry')

const MetricStreamEntriesSchema = z.array(MetricStreamEntrySchema).openapi('MetricStreamEntries')

const ListMetricStreamsOutputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that marks the start of the next batch of returned results. You can use this token in a subsequent operation to get the next batch of results.',
        }),
    ).exactOptional(),
    Entries: MetricStreamEntriesSchema.and(
      z.any().openapi({ description: 'The array of metric stream information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMetricStreamsOutput')

const MetricsSchema = z.array(MetricSchema).openapi('Metrics')

const OwningAccountsSchema = z.array(AccountIdSchema).openapi('OwningAccounts')

const ListMetricsOutputSchema = z
  .object({
    Metrics: MetricsSchema.and(
      z.any().openapi({ description: 'The metrics that match your request. ' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token that marks the start of the next batch of returned results. ',
        }),
    ).exactOptional(),
    OwningAccounts: OwningAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you are using this operation in a monitoring account, this array contains the account IDs of the source accounts where the metrics in the returned data are from.</p> <p>This field is a 1:1 mapping between each metric that is returned and the ID of the owning account.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMetricsOutput')

const DimensionFilterSchema = z
  .object({
    Name: DimensionNameSchema.and(
      z.any().openapi({ description: 'The dimension name to be matched.' }),
    ),
    Value: DimensionValueSchema.and(
      z.any().openapi({ description: 'The value of the dimension to be matched.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Represents filters for a dimension.' })
  .openapi('DimensionFilter')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.',
        }),
    ),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value for the specified tag key.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A key-value pair associated with a CloudWatch resource.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ListTagsForResourceOutputSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of tag keys and values associated with the resource you specified.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const PutAnomalyDetectorOutputSchema = z.object({}).openapi('PutAnomalyDetectorOutput')

const LimitExceededFaultSchema = z.any().openapi('LimitExceededFault')

const DataPathSchema = z.string().openapi('DataPath')

const MessageSchema = z.string().openapi('Message')

const DashboardValidationMessageSchema = z
  .object({
    DataPath: DataPathSchema.and(
      z.any().openapi({ description: 'The data path related to the message.' }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z.any().openapi({ description: 'A message describing the error or warning.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An error or warning for the operation.', required: [] })
  .openapi('DashboardValidationMessage')

const DashboardValidationMessagesSchema = z
  .array(DashboardValidationMessageSchema)
  .openapi('DashboardValidationMessages')

const PutDashboardOutputSchema = z
  .object({
    DashboardValidationMessages: DashboardValidationMessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the input for <code>PutDashboard</code> was correct and the dashboard was successfully created or modified, this result is empty.</p> <p>If this result includes only warning messages, then the input was valid enough for the dashboard to be created or modified, but some elements of the dashboard might not render.</p> <p>If this result includes error messages, the input was not valid and the operation failed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutDashboardOutput')

const DashboardInvalidInputErrorSchema = z.any().openapi('DashboardInvalidInputError')

const PutInsightRuleOutputSchema = z.object({}).openapi('PutInsightRuleOutput')

const PutManagedInsightRulesOutputSchema = z
  .object({
    Failures: BatchFailuresSchema.and(
      z
        .any()
        .openapi({ description: ' An array that lists the rules that could not be enabled. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutManagedInsightRulesOutput')

const ManagedRuleSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The template name for the managed Contributor Insights rule, as returned by <code>ListManagedInsightRules</code>. ',
        }),
    ),
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of an Amazon Web Services resource that has managed Contributor Insights rules. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of key-value pairs that you can associate with a managed Contributor Insights rule. You can associate as many as 50 tags with a rule. Tags can help you organize and categorize your resources. You also can use them to scope user permissions by granting a user permission to access or change only the resources that have certain tag values. To associate tags with a rule, you must have the <code>cloudwatch:TagResource</code> permission in addition to the <code>cloudwatch:PutInsightRule</code> permission. If you are using this operation to update an existing Contributor Insights rule, any tags that you specify in this parameter are ignored. To change the tags of an existing rule, use <code>TagResource</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TemplateName', 'ResourceARN'],
    description:
      " Contains the information that's required to enable a managed Contributor Insights rule for an Amazon Web Services resource. ",
  })
  .openapi('ManagedRule')

const StatisticSetSchema = z
  .object({
    SampleCount: DatapointValueSchema.and(
      z.any().openapi({ description: 'The number of samples used for the statistic set.' }),
    ),
    Sum: DatapointValueSchema.and(
      z.any().openapi({ description: 'The sum of values for the sample set.' }),
    ),
    Minimum: DatapointValueSchema.and(
      z.any().openapi({ description: 'The minimum value of the sample set.' }),
    ),
    Maximum: DatapointValueSchema.and(
      z.any().openapi({ description: 'The maximum value of the sample set.' }),
    ),
  })
  .openapi({
    required: ['SampleCount', 'Sum', 'Minimum', 'Maximum'],
    description: 'Represents a set of statistics that describes a specific metric. ',
  })
  .openapi('StatisticSet')

const ValuesSchema = z.array(DatapointValueSchema).openapi('Values')

const CountsSchema = z.array(DatapointValueSchema).openapi('Counts')

const StorageResolutionSchema = z.int().min(1).openapi('StorageResolution')

const MetricDatumSchema = z
  .object({
    MetricName: MetricNameSchema.and(z.any().openapi({ description: 'The name of the metric.' })),
    Dimensions: DimensionsSchema.and(
      z.any().openapi({ description: 'The dimensions associated with the metric. ' }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.',
        }),
    ).exactOptional(),
    Value: DatapointValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value for the metric.</p> <p>Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>',
        }),
    ).exactOptional(),
    StatisticValues: StatisticSetSchema.and(
      z.any().openapi({ description: 'The statistical values for the metric.' }),
    ).exactOptional(),
    Values: ValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Array of numbers representing the values for the metric during the period. Each unique value is listed just once in this array, and the corresponding number in the <code>Counts</code> array specifies the number of times that value occurred during the period. You can include up to 150 unique values in each <code>PutMetricData</code> action that specifies a <code>Values</code> array.</p> <p>Although the <code>Values</code> array accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>',
        }),
    ).exactOptional(),
    Counts: CountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Array of numbers that is used along with the <code>Values</code> array. Each number in the <code>Count</code> array is the number of times the corresponding value in the <code>Values</code> array occurred during the period. </p> <p>If you omit the <code>Counts</code> array, the default of 1 is used as the value for each count. If you include a <code>Counts</code> array, it must include the same amount of values as the <code>Values</code> array.</p>',
        }),
    ).exactOptional(),
    Unit: StandardUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, this displays the unit that is used for the metric.</p>',
        }),
    ).exactOptional(),
    StorageResolution: StorageResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with sub-minute resolution down to one second. Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available only for custom metrics. For more information about high-resolution metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>This field is optional, if you do not specify it the default of 60 is used.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MetricName'],
    description:
      'Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.',
  })
  .openapi('MetricDatum')

const PutMetricStreamOutputSchema = z
  .object({
    Arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the metric stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutMetricStreamOutput')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const InvalidFormatFaultSchema = z.any().openapi('InvalidFormatFault')

const StartMetricStreamsOutputSchema = z.object({}).openapi('StartMetricStreamsOutput')

const StopMetricStreamsOutputSchema = z.object({}).openapi('StopMetricStreamsOutput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const ActionPrefixSchema = z.string().min(1).max(1024).openapi('ActionPrefix')

const AlarmNamePrefixSchema = z.string().min(1).max(255).openapi('AlarmNamePrefix')

const AlarmNamesSchema = z.array(AlarmNameSchema).max(100).openapi('AlarmNames')

const AlarmTypesSchema = z.array(AlarmTypeSchema).openapi('AlarmTypes')

const AnomalyDetectorTypesSchema = z
  .array(AnomalyDetectorTypeSchema)
  .max(2)
  .openapi('AnomalyDetectorTypes')

const DashboardNamePrefixSchema = z.string().openapi('DashboardNamePrefix')

const DashboardNamesSchema = z.array(DashboardNameSchema).openapi('DashboardNames')

const DeleteAlarmsInputSchema = z
  .object({
    AlarmNames: AlarmNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'The alarms to be deleted. Do not enclose the alarm names in quote marks.',
        }),
    ),
  })
  .openapi({ required: ['AlarmNames'], title: 'DeleteAlarmsInput' })
  .openapi('DeleteAlarmsInput')

const DeleteAnomalyDetectorInputSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The namespace associated with the anomaly detection model to delete.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The metric name associated with the anomaly detection model to delete.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The metric dimensions associated with the anomaly detection model to delete.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    Stat: AnomalyDetectorMetricStatSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The statistic associated with the anomaly detection model to delete.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    SingleMetricAnomalyDetector: SingleMetricAnomalyDetectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A single metric anomaly detector to be deleted.</p> <p>When using <code>SingleMetricAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code>,</p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>MetricMathAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the single metric anomaly detector attributes as part of the <code>SingleMetricAnomalyDetector</code> property.</p>',
        }),
    ).exactOptional(),
    MetricMathAnomalyDetector: MetricMathAnomalyDetectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric math anomaly detector to be deleted.</p> <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code>,</p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the metric math anomaly detector attributes as part of the <code>MetricMathAnomalyDetector</code> property.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteAnomalyDetectorInput', required: [] })
  .openapi('DeleteAnomalyDetectorInput')

const DeleteDashboardsInputSchema = z
  .object({
    DashboardNames: DashboardNamesSchema.and(
      z.any().openapi({ description: 'The dashboards to be deleted. This parameter is required.' }),
    ),
  })
  .openapi({ required: ['DashboardNames'], title: 'DeleteDashboardsInput' })
  .openapi('DeleteDashboardsInput')

const InsightRuleNamesSchema = z.array(InsightRuleNameSchema).openapi('InsightRuleNames')

const DeleteInsightRulesInputSchema = z
  .object({
    RuleNames: InsightRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the rule names to delete. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleNames'], title: 'DeleteInsightRulesInput' })
  .openapi('DeleteInsightRulesInput')

const DeleteMetricStreamInputSchema = z
  .object({
    Name: MetricStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the metric stream to delete.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteMetricStreamInput' })
  .openapi('DeleteMetricStreamInput')

const MaxRecordsSchema = z.int().min(1).max(100).openapi('MaxRecords')

const ScanBySchema = z.enum(['TimestampDescending', 'TimestampAscending']).openapi('ScanBy')

const DescribeAlarmHistoryInputSchema = z
  .object({
    AlarmName: AlarmNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm.' }),
    ).exactOptional(),
    AlarmTypes: AlarmTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.',
        }),
    ).exactOptional(),
    HistoryItemType: HistoryItemTypeSchema.and(
      z.any().openapi({ description: 'The type of alarm histories to retrieve.' }),
    ).exactOptional(),
    StartDate: TimestampSchema.and(
      z.any().openapi({ description: 'The starting date to retrieve alarm history.' }),
    ).exactOptional(),
    EndDate: TimestampSchema.and(
      z.any().openapi({ description: 'The ending date to retrieve alarm history.' }),
    ).exactOptional(),
    MaxRecords: MaxRecordsSchema.and(
      z.any().openapi({ description: 'The maximum number of alarm history records to retrieve.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned by a previous call to indicate that there is more data available.',
        }),
    ).exactOptional(),
    ScanBy: ScanBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAlarmHistoryInput', required: [] })
  .openapi('DescribeAlarmHistoryInput')

const DescribeAlarmsForMetricInputSchema = z
  .object({
    MetricName: MetricNameSchema.and(z.any().openapi({ description: 'The name of the metric.' })),
    Namespace: NamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric.' }),
    ),
    Statistic: StatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The statistic for the metric, other than percentiles. For percentile statistics, use <code>ExtendedStatistics</code>.',
        }),
    ).exactOptional(),
    ExtendedStatistic: ExtendedStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentile statistic for the metric. Specify a value between p0.0 and p100.',
        }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed.',
        }),
    ).exactOptional(),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({ description: 'The period, in seconds, over which the statistic is applied.' }),
    ).exactOptional(),
    Unit: StandardUnitSchema.and(
      z.any().openapi({ description: 'The unit for the metric.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MetricName', 'Namespace'], title: 'DescribeAlarmsForMetricInput' })
  .openapi('DescribeAlarmsForMetricInput')

const DescribeAlarmsInputSchema = z
  .object({
    AlarmNames: AlarmNamesSchema.and(
      z.any().openapi({ description: 'The names of the alarms to retrieve information about.' }),
    ).exactOptional(),
    AlarmNamePrefix: AlarmNamePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix.</p> <p>If this parameter is specified, you cannot specify <code>AlarmNames</code>.</p>',
        }),
    ).exactOptional(),
    AlarmTypes: AlarmTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.',
        }),
    ).exactOptional(),
    ChildrenOfAlarmName: AlarmNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the <code>AlarmRule</code> field of the composite alarm that you specify in <code>ChildrenOfAlarmName</code>. Information about the composite alarm that you name in <code>ChildrenOfAlarmName</code> is not returned.</p> <p>If you specify <code>ChildrenOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation error.</p> <note> <p>Only the <code>Alarm Name</code>, <code>ARN</code>, <code>StateValue</code> (OK/ALARM/INSUFFICIENT_DATA), and <code>StateUpdatedTimestamp</code> information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>',
        }),
    ).exactOptional(),
    ParentsOfAlarmName: AlarmNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have <code>AlarmRule</code> parameters that reference the alarm named in <code>ParentsOfAlarmName</code>. Information about the alarm that you specify in <code>ParentsOfAlarmName</code> is not returned.</p> <p>If you specify <code>ParentsOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation error.</p> <note> <p>Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>',
        }),
    ).exactOptional(),
    StateValue: StateValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to receive information only about alarms that are currently in the state that you specify.',
        }),
    ).exactOptional(),
    ActionPrefix: ActionPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic.',
        }),
    ).exactOptional(),
    MaxRecords: MaxRecordsSchema.and(
      z.any().openapi({ description: 'The maximum number of alarm descriptions to retrieve.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned by a previous call to indicate that there is more data available.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAlarmsInput', required: [] })
  .openapi('DescribeAlarmsInput')

const MaxReturnedResultsCountSchema = z.int().min(1).openapi('MaxReturnedResultsCount')

const DescribeAnomalyDetectorsInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the token returned by the previous operation to request the next page of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxReturnedResultsCountSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return in one operation. The maximum value that you can specify is 100.</p> <p>To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. </p>',
        }),
    ).exactOptional(),
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Limits the results to only the anomaly detection models that are associated with the specified namespace.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "Limits the results to only the anomaly detection models that are associated with the specified metric name. If there are multiple metrics with this name in different namespaces that have anomaly detection models, they're all returned.",
        }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Limits the results to only the anomaly detection models that are associated with the specified metric dimensions. If there are multiple metrics that have these dimensions and have anomaly detection models associated, they're all returned.",
        }),
    ).exactOptional(),
    AnomalyDetectorTypes: AnomalyDetectorTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The anomaly detector types to request when using <code>DescribeAnomalyDetectorsInput</code>. If empty, defaults to <code>SINGLE_METRIC</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAnomalyDetectorsInput', required: [] })
  .openapi('DescribeAnomalyDetectorsInput')

const InsightRuleMaxResultsSchema = z.int().min(1).max(500).openapi('InsightRuleMaxResults')

const DescribeInsightRulesInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Include this value, if it was returned by the previous operation, to get the next set of rules.',
        }),
    ).exactOptional(),
    MaxResults: InsightRuleMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in one operation. If you omit this parameter, the default of 500 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeInsightRulesInput', required: [] })
  .openapi('DescribeInsightRulesInput')

const DimensionFiltersSchema = z.array(DimensionFilterSchema).max(10).openapi('DimensionFilters')

const DisableAlarmActionsInputSchema = z
  .object({
    AlarmNames: AlarmNamesSchema.and(z.any().openapi({ description: 'The names of the alarms.' })),
  })
  .openapi({ required: ['AlarmNames'], title: 'DisableAlarmActionsInput' })
  .openapi('DisableAlarmActionsInput')

const DisableInsightRulesInputSchema = z
  .object({
    RuleNames: InsightRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the rule names to disable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleNames'], title: 'DisableInsightRulesInput' })
  .openapi('DisableInsightRulesInput')

const EnableAlarmActionsInputSchema = z
  .object({
    AlarmNames: AlarmNamesSchema.and(z.any().openapi({ description: 'The names of the alarms.' })),
  })
  .openapi({ required: ['AlarmNames'], title: 'EnableAlarmActionsInput' })
  .openapi('EnableAlarmActionsInput')

const EnableInsightRulesInputSchema = z
  .object({
    RuleNames: InsightRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the rule names to enable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleNames'], title: 'EnableInsightRulesInput' })
  .openapi('EnableInsightRulesInput')

const ExtendedStatisticsSchema = z
  .array(ExtendedStatisticSchema)
  .min(1)
  .max(10)
  .openapi('ExtendedStatistics')

const GetDashboardInputSchema = z
  .object({
    DashboardName: DashboardNameSchema.and(
      z.any().openapi({ description: 'The name of the dashboard to be described.' }),
    ),
  })
  .openapi({ required: ['DashboardName'], title: 'GetDashboardInput' })
  .openapi('GetDashboardInput')

const InsightRuleUnboundIntegerSchema = z.int().openapi('InsightRuleUnboundInteger')

const InsightRuleMetricListSchema = z
  .array(InsightRuleMetricNameSchema)
  .openapi('InsightRuleMetricList')

const InsightRuleOrderBySchema = z
  .string()
  .regex(/[\x20-\x7E]+/)
  .min(1)
  .max(32)
  .openapi('InsightRuleOrderBy')

const GetInsightRuleReportInputSchema = z
  .object({
    RuleName: InsightRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the rule that you want to see data from.' }),
    ),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.",
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.",
        }),
    ),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period, in seconds, to use for the statistics in the <code>InsightRuleMetricDatapoint</code> results.',
        }),
    ),
    MaxContributorCount: InsightRuleUnboundIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used.',
        }),
    ).exactOptional(),
    Metrics: InsightRuleMetricListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>",
        }),
    ).exactOptional(),
    OrderBy: InsightRuleOrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines what statistic to use to rank the contributors. Valid values are SUM and MAXIMUM.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleName', 'StartTime', 'EndTime', 'Period'],
    title: 'GetInsightRuleReportInput',
  })
  .openapi('GetInsightRuleReportInput')

const GetMetricDataMaxDatapointsSchema = z.int().openapi('GetMetricDataMaxDatapoints')

const LabelOptionsSchema = z
  .object({
    Timezone: GetMetricDataLabelTimezoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone to use for metric data return in this operation. The format is <code>+</code> or <code>-</code> followed by four digits. The first two digits indicate the number of hours ahead or behind of UTC, and the final two digits are the number of minutes. For example, +0130 indicates a time zone that is 1 hour and 30 minutes ahead of UTC. The default is +0000. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels that are associated with returned metrics display the correct time for your time zone. </p> <p>The <code>Timezone</code> value affects a label only if you have a time-based dynamic expression in the label. For more information about dynamic expressions in labels, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
    required: [],
  })
  .openapi('LabelOptions')

const GetMetricDataInputSchema = z
  .object({
    MetricDataQueries: MetricDataQueriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric queries to be returned. A single <code>GetMetricData</code> call can include as many as 500 <code>MetricDataQuery</code> structures. Each of these structures can specify either a metric to retrieve, a Metrics Insights query, or a math expression to perform on retrieved data. ',
        }),
    ),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time stamp indicating the earliest data to be returned.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. </p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>StartTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>StartTime</code>.</p>",
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time stamp indicating the latest data to be returned.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp.</p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>EndTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>EndTime</code>.</p>",
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Include this value, if it was returned by the previous <code>GetMetricData</code> operation, to get the next set of data points.',
        }),
    ).exactOptional(),
    ScanBy: ScanBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The order in which data points should be returned. <code>TimestampDescending</code> returns the newest data first and paginates when the <code>MaxDatapoints</code> limit is reached. <code>TimestampAscending</code> returns the oldest data first and paginates when the <code>MaxDatapoints</code> limit is reached.',
        }),
    ).exactOptional(),
    MaxDatapoints: GetMetricDataMaxDatapointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used.',
        }),
    ).exactOptional(),
    LabelOptions: LabelOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels of returned data display the correct time for your time zone. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MetricDataQueries', 'StartTime', 'EndTime'], title: 'GetMetricDataInput' })
  .openapi('GetMetricDataInput')

const StatisticsSchema = z.array(StatisticSchema).min(1).max(5).openapi('Statistics')

const GetMetricStatisticsInputSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric, with or without spaces.' }),
    ),
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric, with or without spaces.' }),
    ),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric. If a specific combination of dimensions was not published, you can\'t retrieve statistics for it. You must specify the same dimensions that were used when the metrics were created. For an example, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#dimension-combinations">Dimension Combinations</a> in the <i>Amazon CloudWatch User Guide</i>. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.',
        }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time stamp that determines the first data point to return. Start times are evaluated relative to the time that CloudWatch receives the request.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z).</p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p>',
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time stamp that determines the last data point to return.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).</p>',
        }),
    ),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
        }),
    ),
    Statistics: StatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric statistics, other than percentile. For percentile statistics, use <code>ExtendedStatistics</code>. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both.',
        }),
    ).exactOptional(),
    ExtendedStatistics: ExtendedStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentile statistics. Specify values between p0.0 and p100. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both. Percentile statistics are not available for metrics when any of the metric values are negative numbers.',
        }),
    ).exactOptional(),
    Unit: StandardUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit for a given metric. If you omit <code>Unit</code>, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Namespace', 'MetricName', 'StartTime', 'EndTime', 'Period'],
    title: 'GetMetricStatisticsInput',
  })
  .openapi('GetMetricStatisticsInput')

const GetMetricStreamInputSchema = z
  .object({
    Name: MetricStreamNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the metric stream to retrieve information about.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'GetMetricStreamInput' })
  .openapi('GetMetricStreamInput')

const MetricWidgetSchema = z.string().openapi('MetricWidget')

const OutputFormatSchema = z.string().openapi('OutputFormat')

const GetMetricWidgetImageInputSchema = z
  .object({
    MetricWidget: MetricWidgetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON string that defines the bitmap graph to be retrieved. The string includes the metrics to include in the graph, statistics, annotations, title, axis limits, and so on. You can include only one <code>MetricWidget</code> parameter in each <code>GetMetricWidgetImage</code> call.</p> <p>For more information about the syntax of <code>MetricWidget</code> see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Metric-Widget-Structure.html">GetMetricWidgetImage: Metric Widget Structure and Syntax</a>.</p> <p>If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation point appears next to the graph legend.</p>',
        }),
    ),
    OutputFormat: OutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the resulting image. Only PNG images are supported.</p> <p>The default is <code>png</code>. If you specify <code>png</code>, the API returns an HTTP response with the content-type set to <code>text/xml</code>. The image data is in a <code>MetricWidgetImage</code> field. For example:</p> <p> <code> &lt;GetMetricWidgetImageResponse xmlns=&lt;URLstring&gt;&gt;</code> </p> <p> <code> &lt;GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;MetricWidgetImage&gt;</code> </p> <p> <code> iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...</code> </p> <p> <code> &lt;/MetricWidgetImage&gt;</code> </p> <p> <code> &lt;/GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;ResponseMetadata&gt;</code> </p> <p> <code> &lt;RequestId&gt;6f0d4192-4d42-11e8-82c1-f539a07e0e3b&lt;/RequestId&gt;</code> </p> <p> <code> &lt;/ResponseMetadata&gt;</code> </p> <p> <code>&lt;/GetMetricWidgetImageResponse&gt;</code> </p> <p>The <code>image/png</code> setting is intended only for custom HTTP requests. For most use cases, and all actions using an Amazon Web Services SDK, you should use <code>png</code>. If you specify <code>image/png</code>, the HTTP response has a content-type set to <code>image/png</code>, and the body of the response is a PNG image. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MetricWidget'], title: 'GetMetricWidgetImageInput' })
  .openapi('GetMetricWidgetImageInput')

const IncludeLinkedAccountsSchema = z.boolean().openapi('IncludeLinkedAccounts')

const ListDashboardsInputSchema = z
  .object({
    DashboardNamePrefix: DashboardNamePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_". ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned by a previous call to indicate that there is more data available.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDashboardsInput', required: [] })
  .openapi('ListDashboardsInput')

const ListManagedInsightRulesInputSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of an Amazon Web Services resource that has managed Contributor Insights rules. ',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Include this value to get the next set of rules if the value was returned by the previous operation. ',
        }),
    ).exactOptional(),
    MaxResults: InsightRuleMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of results to return in one operation. If you omit this parameter, the default number is used. The default number is <code>100</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListManagedInsightRulesInput' })
  .openapi('ListManagedInsightRulesInput')

const ListMetricStreamsMaxResultsSchema = z
  .int()
  .min(1)
  .max(500)
  .openapi('ListMetricStreamsMaxResults')

const ListMetricStreamsInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Include this value, if it was returned by the previous call, to get the next set of metric streams.',
        }),
    ).exactOptional(),
    MaxResults: ListMetricStreamsMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in one operation.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMetricStreamsInput', required: [] })
  .openapi('ListMetricStreamsInput')

const RecentlyActiveSchema = z.literal('PT3H').openapi('RecentlyActive')

const ListMetricsInputSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric namespace to filter against. Only the namespace that matches exactly will be returned.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric to filter against. Only the metrics with names that match exactly will be returned.',
        }),
    ).exactOptional(),
    Dimensions: DimensionFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dimensions to filter against. Only the dimensions that match exactly will be returned.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned by a previous call to indicate that there is more data available.',
        }),
    ).exactOptional(),
    RecentlyActive: RecentlyActiveSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To filter the results to show only metrics that have had data points published in the past three hours, specify this parameter with a value of <code>PT3H</code>. This is the only valid value for this parameter.</p> <p>The results that are returned are an approximation of the value you specify. There is a low probability that the returned results include metrics with last published data as much as 40 minutes more than the specified time interval.</p>',
        }),
    ).exactOptional(),
    IncludeLinkedAccounts: IncludeLinkedAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you are using this operation in a monitoring account, specify <code>true</code> to include metrics from source accounts in the returned data.</p> <p>The default is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    OwningAccount: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you use this operation in a monitoring account, use this field to return metrics only from one source account. To do so, specify that source account ID in this field, and also specify <code>true</code> for <code>IncludeLinkedAccounts</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMetricsInput', required: [] })
  .openapi('ListMetricsInput')

const ListTagsForResourceInputSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the CloudWatch resource that you want to view tags for.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const ManagedRulesSchema = z.array(ManagedRuleSchema).openapi('ManagedRules')

const MetricDataSchema = z.array(MetricDatumSchema).openapi('MetricData')

const MetricStreamNamesSchema = z.array(MetricStreamNameSchema).openapi('MetricStreamNames')

const PutAnomalyDetectorInputSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The namespace of the metric to create the anomaly detection model for.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The name of the metric to create the anomaly detection model for.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The metric dimensions to create the anomaly detection model for.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    Stat: AnomalyDetectorMetricStatSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The statistic to use for the metric and the anomaly detection model.Use SingleMetricAnomalyDetector.',
        }),
    ).exactOptional(),
    Configuration: AnomalyDetectorConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges.</p> <p>The configuration can also include the time zone to use for the metric.</p>',
        }),
    ).exactOptional(),
    SingleMetricAnomalyDetector: SingleMetricAnomalyDetectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A single metric anomaly detector to be created.</p> <p>When using <code>SingleMetricAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code> </p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>MetricMatchAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the single metric anomaly detector attributes as part of the property <code>SingleMetricAnomalyDetector</code>.</p>',
        }),
    ).exactOptional(),
    MetricMathAnomalyDetector: MetricMathAnomalyDetectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metric math anomaly detector to be created.</p> <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code> </p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the metric math anomaly detector attributes as part of the property <code>MetricMathAnomalyDetector</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutAnomalyDetectorInput', required: [] })
  .openapi('PutAnomalyDetectorInput')

const PutCompositeAlarmInputSchema = z
  .object({
    ActionsEnabled: ActionsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is <code>TRUE</code>.',
        }),
    ).exactOptional(),
    AlarmActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> | <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i> </code> </p>',
        }),
    ).exactOptional(),
    AlarmDescription: AlarmDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the composite alarm.' }),
    ).exactOptional(),
    AlarmName: AlarmNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the composite alarm. This name must be unique within the Region.',
        }),
    ),
    AlarmRule: AlarmRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An expression that specifies which other alarms are to be evaluated to determine this composite alarm\'s state. For each alarm that you reference, you designate a function that specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the functions in your expression.</p> <p>You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.</p> <p>Functions can include the following:</p> <ul> <li> <p> <code>ALARM("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in ALARM state.</p> </li> <li> <p> <code>OK("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in OK state.</p> </li> <li> <p> <code>INSUFFICIENT_DATA("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in INSUFFICIENT_DATA state.</p> </li> <li> <p> <code>TRUE</code> always evaluates to TRUE.</p> </li> <li> <p> <code>FALSE</code> always evaluates to FALSE.</p> </li> </ul> <p>TRUE and FALSE are useful for testing a complex <code>AlarmRule</code> structure, and for testing your alarm actions.</p> <p>Alarm names specified in <code>AlarmRule</code> can be surrounded with double-quotes ("), but do not have to be.</p> <p>The following are some examples of <code>AlarmRule</code>:</p> <ul> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh)</code> specifies that the composite alarm goes into ALARM state only if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.</p> </li> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress)</code> specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state and DeploymentInProgress is not in ALARM state. This example reduces alarm noise during a known deployment window.</p> </li> <li> <p> <code>(ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh)</code> goes into ALARM state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state. This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an alarm action on high CPU or disk usage if a known network problem is also occurring.</p> </li> </ul> <p>The <code>AlarmRule</code> can specify as many as 100 "children" alarms. The <code>AlarmRule</code> expression can have as many as 500 elements. Elements are child alarms, TRUE or FALSE statements, and parentheses.</p>',
        }),
    ),
    InsufficientDataActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>',
        }),
    ).exactOptional(),
    OKActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p>',
        }),
    ).exactOptional(),
    ActionsSuppressor: AlarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Actions will be suppressed if the suppressor alarm is in the <code>ALARM</code> state. <code>ActionsSuppressor</code> can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. ',
        }),
    ).exactOptional(),
    ActionsSuppressorWaitPeriod: SuppressorPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>WaitPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>',
        }),
    ).exactOptional(),
    ActionsSuppressorExtensionPeriod: SuppressorPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>ExtensionPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AlarmName', 'AlarmRule'], title: 'PutCompositeAlarmInput' })
  .openapi('PutCompositeAlarmInput')

const PutDashboardInputSchema = z
  .object({
    DashboardName: DashboardNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, "-", and "_". This parameter is required.',
        }),
    ),
    DashboardBody: DashboardBodySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.</p> <p>For more information about the syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['DashboardName', 'DashboardBody'], title: 'PutDashboardInput' })
  .openapi('PutDashboardInput')

const PutInsightRuleInputSchema = z
  .object({
    RuleName: InsightRuleNameSchema.and(
      z.any().openapi({ description: 'A unique name for the rule.' }),
    ),
    RuleState: InsightRuleStateSchema.and(
      z
        .any()
        .openapi({ description: 'The state of the rule. Valid values are ENABLED and DISABLED.' }),
    ).exactOptional(),
    RuleDefinition: InsightRuleDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The definition of the rule, as a JSON object. For details on the valid syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights Rule Syntax</a>.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key-value pairs to associate with the Contributor Insights rule. You can associate as many as 50 tags with a rule.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> <p>To be able to associate tags with a rule, you must have the <code>cloudwatch:TagResource</code> permission in addition to the <code>cloudwatch:PutInsightRule</code> permission.</p> <p>If you are using this operation to update an existing Contributor Insights rule, any tags you specify in this parameter are ignored. To change the tags of an existing rule, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RuleName', 'RuleDefinition'], title: 'PutInsightRuleInput' })
  .openapi('PutInsightRuleInput')

const PutManagedInsightRulesInputSchema = z
  .object({
    ManagedRules: ManagedRulesSchema.and(
      z.any().openapi({ description: ' A list of <code>ManagedRules</code> to enable. ' }),
    ),
  })
  .openapi({ required: ['ManagedRules'], title: 'PutManagedInsightRulesInput' })
  .openapi('PutManagedInsightRulesInput')

const PutMetricAlarmInputSchema = z
  .object({
    AlarmName: AlarmNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name for the alarm. This name must be unique within the Region.</p> <p>The name must contain only UTF-8 characters, and can't contain ASCII control characters</p>",
        }),
    ),
    AlarmDescription: AlarmDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the alarm.' }),
    ).exactOptional(),
    ActionsEnabled: ActionsEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether actions should be executed during any changes to the alarm state. The default is <code>TRUE</code>.',
        }),
    ).exactOptional(),
    OKActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    AlarmActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    InsufficientDataActions: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the metric associated with the alarm. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters. Instead, you specify all this information in the <code>Metrics</code> array.</p>',
        }),
    ).exactOptional(),
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace for the metric associated specified in <code>MetricName</code>.',
        }),
    ).exactOptional(),
    Statistic: StatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The statistic for the metric specified in <code>MetricName</code>, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.',
        }),
    ).exactOptional(),
    ExtendedStatistic: ExtendedStatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentile statistic for the metric specified in <code>MetricName</code>. Specify a value between p0.0 and p100. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.',
        }),
    ).exactOptional(),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The dimensions for the metric specified in <code>MetricName</code>.',
        }),
    ).exactOptional(),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The length, in seconds, used each time the metric specified in <code>MetricName</code> is evaluated. Valid values are 10, 30, and any multiple of 60.</p> <p> <code>Period</code> is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the <code>Metrics</code> array.</p> <p>Be sure to specify 10 or 30 only for metrics that are stored by a <code>PutMetricData</code> call with a <code>StorageResolution</code> of 1. If you specify a period of 10 or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm might often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>An alarm\'s total current evaluation period can be no longer than one day, so <code>Period</code> multiplied by <code>EvaluationPeriods</code> cannot be more than 86,400 seconds.</p>',
        }),
    ).exactOptional(),
    Unit: StandardUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately.</p> <p>If you don't specify <code>Unit</code>, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually, metrics are published with only one unit, so the alarm works as intended.</p> <p>However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and it behaves unpredictably.</p> <p>We recommend omitting <code>Unit</code> so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the <code>INSUFFICIENT DATA</code> state.</p>",
        }),
    ).exactOptional(),
    EvaluationPeriods: EvaluationPeriodsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N.</p> <p>An alarm\'s total current evaluation period can be no longer than one day, so this number multiplied by <code>Period</code> cannot be more than 86,400 seconds.</p>',
        }),
    ),
    DatapointsToAlarm: DatapointsToAlarmSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of data points that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation">Evaluating an Alarm</a> in the <i>Amazon CloudWatch User Guide</i>.',
        }),
    ).exactOptional(),
    Threshold: ThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value against which the specified statistic is compared.</p> <p>This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.</p>',
        }),
    ).exactOptional(),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.</p> <p>The values <code>LessThanLowerOrGreaterThanUpperThreshold</code>, <code>LessThanLowerThreshold</code>, and <code>GreaterThanUpperThreshold</code> are used only for alarms based on anomaly detection models.</p>',
        }),
    ),
    TreatMissingData: TreatMissingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Sets how this alarm is to handle missing data points. If <code>TreatMissingData</code> is omitted, the default behavior of <code>missing</code> is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>Valid Values: <code>breaching | notBreaching | ignore | missing</code> </p> <note> <p>Alarms that evaluate metrics in the <code>AWS/DynamoDB</code> namespace always <code>ignore</code> missing data even if you choose a different option for <code>TreatMissingData</code>. When an <code>AWS/DynamoDB</code> metric has missing data, alarms that evaluate that metric remain in their current state.</p> </note>',
        }),
    ).exactOptional(),
    EvaluateLowSampleCountPercentile: EvaluateLowSampleCountPercentileSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Used only for alarms based on percentiles. If you specify <code>ignore</code>, the alarm state does not change during periods with too few data points to be statistically significant. If you specify <code>evaluate</code> or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples">Percentile-Based CloudWatch Alarms and Low Data Samples</a>.</p> <p>Valid Values: <code>evaluate | ignore</code> </p>',
        }),
    ).exactOptional(),
    Metrics: MetricDataQueriesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>MetricDataQuery</code> structures that enable you to create an alarm based on the result of a metric math expression. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>Each item in the <code>Metrics</code> array either retrieves a metric or performs a math expression.</p> <p>One item in the <code>Metrics</code> array is the expression that the alarm watches. You designate this expression by setting <code>ReturnData</code> to true for this object in the array. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html">MetricDataQuery</a>.</p> <p>If you use the <code>Metrics</code> parameter, you cannot include the <code>MetricName</code>, <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters of <code>PutMetricAlarm</code> in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the <code>Metrics</code> array.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>',
        }),
    ).exactOptional(),
    ThresholdMetricId: MetricIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If this is an alarm based on an anomaly detection model, make this value match the ID of the <code>ANOMALY_DETECTION_BAND</code> function.</p> <p>For an example of how to use this parameter, see the <b>Anomaly Detection Model Alarm</b> example on this page.</p> <p>If your alarm uses this parameter, it cannot have Auto Scaling actions.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AlarmName', 'EvaluationPeriods', 'ComparisonOperator'],
    title: 'PutMetricAlarmInput',
  })
  .openapi('PutMetricAlarmInput')

const PutMetricDataInputSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace for the metric data. You can use ASCII characters for the namespace, except for control characters which are not supported.</p> <p>To avoid conflicts with Amazon Web Services service namespaces, you should not specify a namespace that begins with <code>AWS/</code> </p>',
        }),
    ),
    MetricData: MetricDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data for the metric. The array can include no more than 1000 metrics per call.',
        }),
    ),
  })
  .openapi({ required: ['Namespace', 'MetricData'], title: 'PutMetricDataInput' })
  .openapi('PutMetricDataInput')

const PutMetricStreamInputSchema = z
  .object({
    Name: MetricStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you are creating a new metric stream, this is the name for the new stream. The name must be different than the names of other metric streams in this account and Region.</p> <p>If you are updating a metric stream, specify the name of that stream here.</p> <p>Valid characters are A-Z, a-z, 0-9, "-" and "_".</p>',
        }),
    ),
    IncludeFilters: MetricStreamFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here.</p> <p>You cannot include <code>IncludeFilters</code> and <code>ExcludeFilters</code> in the same operation.</p>',
        }),
    ).exactOptional(),
    ExcludeFilters: MetricStreamFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here.</p> <p>You cannot include <code>ExcludeFilters</code> and <code>IncludeFilters</code> in the same operation.</p>',
        }),
    ).exactOptional(),
    FirehoseArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon Kinesis Data Firehose delivery stream to use for this metric stream. This Amazon Kinesis Data Firehose delivery stream must already exist and must be in the same account as the metric stream.',
        }),
    ),
    RoleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Data Firehose resources. This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the following permissions:</p> <ul> <li> <p>firehose:PutRecord</p> </li> <li> <p>firehose:PutRecordBatch</p> </li> </ul>',
        }),
    ),
    OutputFormat: MetricStreamOutputFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output format for the stream. Valid values are <code>json</code> and <code>opentelemetry0.7</code>. For more information about metric stream output formats, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html"> Metric streams output formats</a>.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key-value pairs to associate with the metric stream. You can associate as many as 50 tags with a metric stream.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use this parameter only when you are creating a new metric stream. If you are using this operation to update an existing metric stream, any tags you specify in this parameter are ignored. To change the tags of an existing metric stream, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>',
        }),
    ).exactOptional(),
    StatisticsConfigurations: MetricStreamStatisticsConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.</p> <p>For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream\'s <code>OutputFormat</code>. If the <code>OutputFormat</code> is <code>json</code>, you can stream any additional statistic that is supported by CloudWatch, listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html"> CloudWatch statistics definitions</a>. If the <code>OutputFormat</code> is <code>opentelemetry0.7</code>, you can stream percentile statistics such as p95, p99.9, and so on.</p>',
        }),
    ).exactOptional(),
    IncludeLinkedAccountsMetrics: IncludeLinkedAccountsMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you are creating a metric stream in a monitoring account, specify <code>true</code> to include metrics from source accounts in the metric stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'FirehoseArn', 'RoleArn', 'OutputFormat'],
    title: 'PutMetricStreamInput',
  })
  .openapi('PutMetricStreamInput')

const SetAlarmStateInputSchema = z
  .object({
    AlarmName: AlarmNameSchema.and(z.any().openapi({ description: 'The name of the alarm.' })),
    StateValue: StateValueSchema.and(z.any().openapi({ description: 'The value of the state.' })),
    StateReason: StateReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason that this alarm is set to this specific state, in text format.',
        }),
    ),
    StateReasonData: StateReasonDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reason that this alarm is set to this specific state, in JSON format.</p> <p>For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AlarmName', 'StateValue', 'StateReason'], title: 'SetAlarmStateInput' })
  .openapi('SetAlarmStateInput')

const StartMetricStreamsInputSchema = z
  .object({
    Names: MetricStreamNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The array of the names of metric streams to start streaming.</p> <p>This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will start streaming.</p>',
        }),
    ),
  })
  .openapi({ required: ['Names'], title: 'StartMetricStreamsInput' })
  .openapi('StartMetricStreamsInput')

const StopMetricStreamsInputSchema = z
  .object({
    Names: MetricStreamNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The array of the names of metric streams to stop streaming.</p> <p>This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will stop streaming.</p>',
        }),
    ),
  })
  .openapi({ required: ['Names'], title: 'StopMetricStreamsInput' })
  .openapi('StopMetricStreamsInput')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceInputSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the CloudWatch resource that you\'re adding tags to.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The list of key-value pairs to associate with the alarm.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceInputSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the CloudWatch resource that you\'re removing tags from.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The list of tag keys to remove from the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

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

export const getActionDeleteAlarmsRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteAlarms',
  description:
    '<p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can\'t delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can\'t delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>',
  operationId: 'GET_DeleteAlarms',
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
      AlarmNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlarmNameSchema).max(100),
        )
        .openapi({
          param: {
            name: 'AlarmNames',
            in: 'query',
            required: true,
            description: 'The alarms to be deleted. Do not enclose the alarm names in quote marks.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AlarmName' },
              maxItems: 100,
            },
          },
        }),
      Action: z
        .literal('DeleteAlarms')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteAlarms'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFound',
      content: { 'text/xml': { schema: ResourceNotFoundSchema } },
    },
  },
})

export const postActionDeleteAlarmsRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteAlarms',
  description:
    '<p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can\'t delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can\'t delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>',
  operationId: 'POST_DeleteAlarms',
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
      Action: z
        .literal('DeleteAlarms')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteAlarms'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteAlarmsInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFound',
      content: { 'text/xml': { schema: ResourceNotFoundSchema } },
    },
  },
})

export const getActionDeleteAnomalyDetectorRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteAnomalyDetector',
  description:
    ' Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a> in the <i>CloudWatch User Guide</i>. ',
  operationId: 'GET_DeleteAnomalyDetector',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['MetricDataQueries', ['MetricMathAnomalyDetector']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Namespace: z
            .string()
            .regex(/[^:].*/)
            .min(1)
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                name: 'Namespace',
                in: 'query',
                required: false,
                description: 'The namespace associated with the anomaly detection model to delete.',
                schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
              },
            }),
          MetricName: z
            .string()
            .min(1)
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                name: 'MetricName',
                in: 'query',
                required: false,
                description:
                  'The metric name associated with the anomaly detection model to delete.',
                schema: { type: 'string', minLength: 1, maxLength: 255 },
              },
            }),
          Dimensions: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(DimensionSchema).max(30),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Dimensions',
                in: 'query',
                required: false,
                description:
                  'The metric dimensions associated with the anomaly detection model to delete.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Dimension' },
                  maxItems: 30,
                },
              },
            }),
          Stat: z
            .string()
            .regex(
              /(SampleCount|Average|Sum|Minimum|Maximum|IQM|(p|tc|tm|ts|wm)(\d{1,2}(\.\d{0,10})?|100)|[ou]\d+(\.\d*)?)(_E|_L|_H)?|(TM|TC|TS|WM)\(((((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?:((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%|((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%:(((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?)\)|(TM|TC|TS|WM|PR)\(((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)):((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?|((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?:(\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))\)/,
            )
            .max(50)
            .exactOptional()
            .openapi({
              param: {
                name: 'Stat',
                in: 'query',
                required: false,
                description: 'The statistic associated with the anomaly detection model to delete.',
                schema: {
                  type: 'string',
                  pattern:
                    '(SampleCount|Average|Sum|Minimum|Maximum|IQM|(p|tc|tm|ts|wm)(\\d{1,2}(\\.\\d{0,10})?|100)|[ou]\\d+(\\.\\d*)?)(_E|_L|_H)?|(TM|TC|TS|WM)\\(((((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%)?:((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%|((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%:(((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%)?)\\)|(TM|TC|TS|WM|PR)\\(((\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)):((\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)))?|((\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)))?:(\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)))\\)',
                  maxLength: 50,
                },
              },
            }),
          SingleMetricAnomalyDetector: z
            .object({
              Namespace: NamespaceSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The namespace of the metric to create the anomaly detection model for.',
                  }),
              ).exactOptional(),
              MetricName: MetricNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The name of the metric to create the anomaly detection model for.',
                  }),
              ).exactOptional(),
              Dimensions: DimensionsSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The metric dimensions to create the anomaly detection model for.',
                  }),
              ).exactOptional(),
              Stat: AnomalyDetectorMetricStatSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The statistic to use for the metric and anomaly detection model.',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'SingleMetricAnomalyDetector',
                in: 'query',
                required: false,
                description:
                  '<p>A single metric anomaly detector to be deleted.</p> <p>When using <code>SingleMetricAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code>,</p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>MetricMathAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the single metric anomaly detector attributes as part of the <code>SingleMetricAnomalyDetector</code> property.</p>',
                schema: {
                  type: 'object',
                  properties: {
                    Namespace: {
                      allOf: [
                        { $ref: '#/components/schemas/Namespace' },
                        {
                          description:
                            'The namespace of the metric to create the anomaly detection model for.',
                        },
                      ],
                    },
                    MetricName: {
                      allOf: [
                        { $ref: '#/components/schemas/MetricName' },
                        {
                          description:
                            'The name of the metric to create the anomaly detection model for.',
                        },
                      ],
                    },
                    Dimensions: {
                      allOf: [
                        { $ref: '#/components/schemas/Dimensions' },
                        {
                          description:
                            'The metric dimensions to create the anomaly detection model for.',
                        },
                      ],
                    },
                    Stat: {
                      allOf: [
                        { $ref: '#/components/schemas/AnomalyDetectorMetricStat' },
                        {
                          description:
                            'The statistic to use for the metric and anomaly detection model.',
                        },
                      ],
                    },
                  },
                  description:
                    'Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.',
                },
              },
              description:
                'Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.',
              required: [],
            }),
          MetricMathAnomalyDetector: z
            .object({
              MetricDataQueries: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: MetricIdSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                            }),
                        ),
                        MetricStat: z
                          .object({
                            Metric: MetricSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The metric to return, including the metric name, namespace, and dimensions.',
                                }),
                            ),
                            Period: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                PeriodSchema,
                              )
                              .and(
                                z
                                  .any()
                                  .openapi({
                                    description:
                                      '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                                  }),
                              ),
                            Stat: StatSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                                }),
                            ),
                            Unit: StandardUnitSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                                }),
                            ).exactOptional(),
                          })
                          .openapi({
                            required: ['Metric', 'Period', 'Stat'],
                            description:
                              'This structure defines the metric to be returned, along with the statistics, period, and units.',
                          })
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                              }),
                          )
                          .exactOptional(),
                        Expression: MetricExpressionSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                            }),
                        ).exactOptional(),
                        Label: MetricLabelSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                            }),
                        ).exactOptional(),
                        ReturnData: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            ReturnDataSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                              }),
                          )
                          .exactOptional(),
                        Period: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            PeriodSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                              }),
                          )
                          .exactOptional(),
                        AccountId: AccountIdSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                            }),
                        ).exactOptional(),
                      })
                      .openapi({
                        required: ['Id'],
                        description:
                          '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
                      }),
                  ),
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'An array of metric data query structures that enables you to create an anomaly detector based on the result of a metric math expression. Each item in <code>MetricDataQueries</code> gets a metric or performs a math expression. One item in <code>MetricDataQueries</code> is the expression that provides the time series that the anomaly detector uses as input. Designate the expression by setting <code>ReturnData</code> to <code>true</code> for this object in the array. For all other expressions and metrics, set <code>ReturnData</code> to <code>false</code>. The designated expression must return a single time series.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'MetricMathAnomalyDetector',
                in: 'query',
                required: false,
                description:
                  '<p>The metric math anomaly detector to be deleted.</p> <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code>,</p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the metric math anomaly detector attributes as part of the <code>MetricMathAnomalyDetector</code> property.</p>',
                schema: {
                  type: 'object',
                  properties: {
                    MetricDataQueries: {
                      allOf: [
                        {
                          type: 'array',
                          items: {
                            type: 'object',
                            required: ['Id'],
                            properties: {
                              Id: {
                                allOf: [
                                  { $ref: '#/components/schemas/MetricId' },
                                  {
                                    description:
                                      'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                                  },
                                ],
                              },
                              MetricStat: {
                                allOf: [
                                  {
                                    type: 'object',
                                    required: ['Metric', 'Period', 'Stat'],
                                    properties: {
                                      Metric: {
                                        allOf: [
                                          { $ref: '#/components/schemas/Metric' },
                                          {
                                            description:
                                              'The metric to return, including the metric name, namespace, and dimensions.',
                                          },
                                        ],
                                      },
                                      Period: {
                                        allOf: [
                                          { $ref: '#/components/schemas/Period' },
                                          {
                                            description:
                                              '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                                          },
                                        ],
                                      },
                                      Stat: {
                                        allOf: [
                                          { $ref: '#/components/schemas/Stat' },
                                          {
                                            description:
                                              'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                                          },
                                        ],
                                      },
                                      Unit: {
                                        allOf: [
                                          { $ref: '#/components/schemas/StandardUnit' },
                                          {
                                            description:
                                              '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                                          },
                                        ],
                                      },
                                    },
                                    description:
                                      'This structure defines the metric to be returned, along with the statistics, period, and units.',
                                  },
                                  {
                                    description:
                                      '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                                  },
                                ],
                              },
                              Expression: {
                                allOf: [
                                  { $ref: '#/components/schemas/MetricExpression' },
                                  {
                                    description:
                                      '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                                  },
                                ],
                              },
                              Label: {
                                allOf: [
                                  { $ref: '#/components/schemas/MetricLabel' },
                                  {
                                    description:
                                      '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                                  },
                                ],
                              },
                              ReturnData: {
                                allOf: [
                                  { $ref: '#/components/schemas/ReturnData' },
                                  {
                                    description:
                                      '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                                  },
                                ],
                              },
                              Period: {
                                allOf: [
                                  { $ref: '#/components/schemas/Period' },
                                  {
                                    description:
                                      'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                                  },
                                ],
                              },
                              AccountId: {
                                allOf: [
                                  { $ref: '#/components/schemas/AccountId' },
                                  {
                                    description:
                                      '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                                  },
                                ],
                              },
                            },
                            description:
                              '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
                          },
                        },
                        {
                          description:
                            'An array of metric data query structures that enables you to create an anomaly detector based on the result of a metric math expression. Each item in <code>MetricDataQueries</code> gets a metric or performs a math expression. One item in <code>MetricDataQueries</code> is the expression that provides the time series that the anomaly detector uses as input. Designate the expression by setting <code>ReturnData</code> to <code>true</code> for this object in the array. For all other expressions and metrics, set <code>ReturnData</code> to <code>false</code>. The designated expression must return a single time series.',
                        },
                      ],
                    },
                  },
                  description:
                    'Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.',
                },
              },
              description:
                'Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.',
              required: [],
            }),
          Action: z
            .literal('DeleteAnomalyDetector')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['DeleteAnomalyDetector'] },
              },
            }),
          Version: z
            .literal('2010-08-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-08-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteAnomalyDetectorOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDeleteAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteAnomalyDetector',
  description:
    ' Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a> in the <i>CloudWatch User Guide</i>. ',
  operationId: 'POST_DeleteAnomalyDetector',
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
      Action: z
        .literal('DeleteAnomalyDetector')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteAnomalyDetector'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteAnomalyDetectorInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteAnomalyDetectorOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDeleteDashboardsRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDashboards',
  description:
    'Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.',
  operationId: 'GET_DeleteDashboards',
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
      DashboardNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DashboardNameSchema),
        )
        .openapi({
          param: {
            name: 'DashboardNames',
            in: 'query',
            required: true,
            description: 'The dashboards to be deleted. This parameter is required.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/DashboardName' } },
          },
        }),
      Action: z
        .literal('DeleteDashboards')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDashboards'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDashboardsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'DashboardNotFoundError',
      content: { 'text/xml': { schema: DashboardNotFoundErrorSchema } },
    },
    482: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionDeleteDashboardsRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDashboards',
  description:
    'Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.',
  operationId: 'POST_DeleteDashboards',
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
      Action: z
        .literal('DeleteDashboards')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDashboards'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteDashboardsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDashboardsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'DashboardNotFoundError',
      content: { 'text/xml': { schema: DashboardNotFoundErrorSchema } },
    },
    482: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionDeleteInsightRulesRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteInsightRules',
  description:
    '<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>',
  operationId: 'GET_DeleteInsightRules',
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
      RuleNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InsightRuleNameSchema),
        )
        .openapi({
          param: {
            name: 'RuleNames',
            in: 'query',
            required: true,
            description:
              'An array of the rule names to delete. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/InsightRuleName' } },
          },
        }),
      Action: z
        .literal('DeleteInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const postActionDeleteInsightRulesRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteInsightRules',
  description:
    '<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>',
  operationId: 'POST_DeleteInsightRules',
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
      Action: z
        .literal('DeleteInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteInsightRulesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const getActionDeleteMetricStreamRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteMetricStream',
  description: 'Permanently deletes the metric stream that you specify.',
  operationId: 'GET_DeleteMetricStream',
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
      Name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Name',
            in: 'query',
            required: true,
            description: 'The name of the metric stream to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Action: z
        .literal('DeleteMetricStream')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteMetricStream'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteMetricStreamOutputSchema } },
    },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const postActionDeleteMetricStreamRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteMetricStream',
  description: 'Permanently deletes the metric stream that you specify.',
  operationId: 'POST_DeleteMetricStream',
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
      Action: z
        .literal('DeleteMetricStream')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteMetricStream'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteMetricStreamInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteMetricStreamOutputSchema } },
    },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const getActionDescribeAlarmHistoryRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAlarmHistory',
  description:
    "<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>",
  operationId: 'GET_DescribeAlarmHistory',
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
      AlarmName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmName',
            in: 'query',
            required: false,
            description: 'The name of the alarm.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      AlarmTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlarmTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmTypes',
            in: 'query',
            required: false,
            description:
              'Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AlarmType' } },
          },
        }),
      HistoryItemType: z
        .enum(['ConfigurationUpdate', 'StateUpdate', 'Action'])
        .exactOptional()
        .openapi({
          param: {
            name: 'HistoryItemType',
            in: 'query',
            required: false,
            description: 'The type of alarm histories to retrieve.',
            schema: { type: 'string', enum: ['ConfigurationUpdate', 'StateUpdate', 'Action'] },
          },
        }),
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            required: false,
            description: 'The starting date to retrieve alarm history.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            required: false,
            description: 'The ending date to retrieve alarm history.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      MaxRecords: z
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
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description: 'The maximum number of alarm history records to retrieve.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to indicate that there is more data available.',
            schema: { type: 'string' },
          },
        }),
      ScanBy: z
        .enum(['TimestampDescending', 'TimestampAscending'])
        .exactOptional()
        .openapi({
          param: {
            name: 'ScanBy',
            in: 'query',
            required: false,
            description:
              'Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.',
            schema: { type: 'string', enum: ['TimestampDescending', 'TimestampAscending'] },
          },
        }),
      Action: z
        .literal('DescribeAlarmHistory')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAlarmHistory'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAlarmHistoryOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const postActionDescribeAlarmHistoryRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAlarmHistory',
  description:
    "<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>",
  operationId: 'POST_DescribeAlarmHistory',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeAlarmHistory')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAlarmHistory'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAlarmHistoryInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAlarmHistoryOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const getActionDescribeAlarmsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAlarms',
  description:
    "<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>",
  operationId: 'GET_DescribeAlarms',
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
      AlarmNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlarmNameSchema).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmNames',
            in: 'query',
            required: false,
            description: 'The names of the alarms to retrieve information about.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AlarmName' },
              maxItems: 100,
            },
          },
        }),
      AlarmNamePrefix: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmNamePrefix',
            in: 'query',
            required: false,
            description:
              '<p>An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix.</p> <p>If this parameter is specified, you cannot specify <code>AlarmNames</code>.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      AlarmTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlarmTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmTypes',
            in: 'query',
            required: false,
            description:
              'Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AlarmType' } },
          },
        }),
      ChildrenOfAlarmName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'ChildrenOfAlarmName',
            in: 'query',
            required: false,
            description:
              '<p>If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the <code>AlarmRule</code> field of the composite alarm that you specify in <code>ChildrenOfAlarmName</code>. Information about the composite alarm that you name in <code>ChildrenOfAlarmName</code> is not returned.</p> <p>If you specify <code>ChildrenOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation error.</p> <note> <p>Only the <code>Alarm Name</code>, <code>ARN</code>, <code>StateValue</code> (OK/ALARM/INSUFFICIENT_DATA), and <code>StateUpdatedTimestamp</code> information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      ParentsOfAlarmName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'ParentsOfAlarmName',
            in: 'query',
            required: false,
            description:
              '<p>If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have <code>AlarmRule</code> parameters that reference the alarm named in <code>ParentsOfAlarmName</code>. Information about the alarm that you specify in <code>ParentsOfAlarmName</code> is not returned.</p> <p>If you specify <code>ParentsOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation error.</p> <note> <p>Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      StateValue: z
        .enum(['OK', 'ALARM', 'INSUFFICIENT_DATA'])
        .exactOptional()
        .openapi({
          param: {
            name: 'StateValue',
            in: 'query',
            required: false,
            description:
              'Specify this parameter to receive information only about alarms that are currently in the state that you specify.',
            schema: { type: 'string', enum: ['OK', 'ALARM', 'INSUFFICIENT_DATA'] },
          },
        }),
      ActionPrefix: z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'ActionPrefix',
            in: 'query',
            required: false,
            description:
              'Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      MaxRecords: z
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
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description: 'The maximum number of alarm descriptions to retrieve.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to indicate that there is more data available.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeAlarms')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAlarms'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAlarmsOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const postActionDescribeAlarmsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAlarms',
  description:
    "<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>",
  operationId: 'POST_DescribeAlarms',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeAlarms')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAlarms'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAlarmsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAlarmsOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const getActionDescribeAlarmsForMetricRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAlarmsForMetric',
  description:
    '<p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p> <p>This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric.</p>',
  operationId: 'GET_DescribeAlarmsForMetric',
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
      MetricName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'MetricName',
            in: 'query',
            required: true,
            description: 'The name of the metric.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Namespace: z
        .string()
        .regex(/[^:].*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Namespace',
            in: 'query',
            required: true,
            description: 'The namespace of the metric.',
            schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
          },
        }),
      Statistic: z
        .enum(['SampleCount', 'Average', 'Sum', 'Minimum', 'Maximum'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Statistic',
            in: 'query',
            required: false,
            description:
              'The statistic for the metric, other than percentiles. For percentile statistics, use <code>ExtendedStatistics</code>.',
            schema: {
              type: 'string',
              enum: ['SampleCount', 'Average', 'Sum', 'Minimum', 'Maximum'],
            },
          },
        }),
      ExtendedStatistic: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ExtendedStatistic',
            in: 'query',
            required: false,
            description:
              'The percentile statistic for the metric. Specify a value between p0.0 and p100.',
            schema: { type: 'string' },
          },
        }),
      Dimensions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DimensionSchema).max(30),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Dimensions',
            in: 'query',
            required: false,
            description:
              'The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Dimension' },
              maxItems: 30,
            },
          },
        }),
      Period: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Period',
            in: 'query',
            required: false,
            description: 'The period, in seconds, over which the statistic is applied.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Unit: z
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
        .exactOptional()
        .openapi({
          param: {
            name: 'Unit',
            in: 'query',
            required: false,
            description: 'The unit for the metric.',
            schema: {
              type: 'string',
              enum: [
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
              ],
            },
          },
        }),
      Action: z
        .literal('DescribeAlarmsForMetric')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAlarmsForMetric'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAlarmsForMetricOutputSchema } },
    },
  },
})

export const postActionDescribeAlarmsForMetricRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAlarmsForMetric',
  description:
    '<p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p> <p>This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric.</p>',
  operationId: 'POST_DescribeAlarmsForMetric',
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
      Action: z
        .literal('DescribeAlarmsForMetric')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAlarmsForMetric'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAlarmsForMetricInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAlarmsForMetricOutputSchema } },
    },
  },
})

export const getActionDescribeAnomalyDetectorsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAnomalyDetectors',
  description:
    'Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will return all metric math anomaly detectors in your account.',
  operationId: 'GET_DescribeAnomalyDetectors',
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
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'Use the token returned by the previous operation to request the next page of results.',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return in one operation. The maximum value that you can specify is 100.</p> <p>To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. </p>',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Namespace: z
        .string()
        .regex(/[^:].*/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'Namespace',
            in: 'query',
            required: false,
            description:
              'Limits the results to only the anomaly detection models that are associated with the specified namespace.',
            schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
          },
        }),
      MetricName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'MetricName',
            in: 'query',
            required: false,
            description:
              "Limits the results to only the anomaly detection models that are associated with the specified metric name. If there are multiple metrics with this name in different namespaces that have anomaly detection models, they're all returned.",
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Dimensions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DimensionSchema).max(30),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Dimensions',
            in: 'query',
            required: false,
            description:
              "Limits the results to only the anomaly detection models that are associated with the specified metric dimensions. If there are multiple metrics that have these dimensions and have anomaly detection models associated, they're all returned.",
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Dimension' },
              maxItems: 30,
            },
          },
        }),
      AnomalyDetectorTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AnomalyDetectorTypeSchema).max(2),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AnomalyDetectorTypes',
            in: 'query',
            required: false,
            description:
              'The anomaly detector types to request when using <code>DescribeAnomalyDetectorsInput</code>. If empty, defaults to <code>SINGLE_METRIC</code>.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AnomalyDetectorType' },
              maxItems: 2,
            },
          },
        }),
      Action: z
        .literal('DescribeAnomalyDetectors')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAnomalyDetectors'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAnomalyDetectorsOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeAnomalyDetectorsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAnomalyDetectors',
  description:
    'Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will return all metric math anomaly detectors in your account.',
  operationId: 'POST_DescribeAnomalyDetectors',
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
      Action: z
        .literal('DescribeAnomalyDetectors')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAnomalyDetectors'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAnomalyDetectorsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAnomalyDetectorsOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeInsightRulesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeInsightRules',
  description:
    '<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>',
  operationId: 'GET_DescribeInsightRules',
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
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'Include this value, if it was returned by the previous operation, to get the next set of rules.',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in one operation. If you omit this parameter, the default of 500 is used.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      Action: z
        .literal('DescribeInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const postActionDescribeInsightRulesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeInsightRules',
  description:
    '<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>',
  operationId: 'POST_DescribeInsightRules',
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
      Action: z
        .literal('DescribeInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeInsightRulesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const getActionDisableAlarmActionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DisableAlarmActions',
  description:
    "Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.",
  operationId: 'GET_DisableAlarmActions',
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
      AlarmNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlarmNameSchema).max(100),
        )
        .openapi({
          param: {
            name: 'AlarmNames',
            in: 'query',
            required: true,
            description: 'The names of the alarms.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AlarmName' },
              maxItems: 100,
            },
          },
        }),
      Action: z
        .literal('DisableAlarmActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisableAlarmActions'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionDisableAlarmActionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DisableAlarmActions',
  description:
    "Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.",
  operationId: 'POST_DisableAlarmActions',
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
      Action: z
        .literal('DisableAlarmActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisableAlarmActions'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DisableAlarmActionsInputSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionDisableInsightRulesRoute = createRoute({
  method: 'get',
  path: '/#Action=DisableInsightRules',
  description:
    'Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.',
  operationId: 'GET_DisableInsightRules',
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
      RuleNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InsightRuleNameSchema),
        )
        .openapi({
          param: {
            name: 'RuleNames',
            in: 'query',
            required: true,
            description:
              'An array of the rule names to disable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/InsightRuleName' } },
          },
        }),
      Action: z
        .literal('DisableInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisableInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DisableInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const postActionDisableInsightRulesRoute = createRoute({
  method: 'post',
  path: '/#Action=DisableInsightRules',
  description:
    'Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.',
  operationId: 'POST_DisableInsightRules',
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
      Action: z
        .literal('DisableInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisableInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DisableInsightRulesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DisableInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const getActionEnableAlarmActionsRoute = createRoute({
  method: 'get',
  path: '/#Action=EnableAlarmActions',
  description: 'Enables the actions for the specified alarms.',
  operationId: 'GET_EnableAlarmActions',
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
      AlarmNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlarmNameSchema).max(100),
        )
        .openapi({
          param: {
            name: 'AlarmNames',
            in: 'query',
            required: true,
            description: 'The names of the alarms.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AlarmName' },
              maxItems: 100,
            },
          },
        }),
      Action: z
        .literal('EnableAlarmActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['EnableAlarmActions'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionEnableAlarmActionsRoute = createRoute({
  method: 'post',
  path: '/#Action=EnableAlarmActions',
  description: 'Enables the actions for the specified alarms.',
  operationId: 'POST_EnableAlarmActions',
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
      Action: z
        .literal('EnableAlarmActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['EnableAlarmActions'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: EnableAlarmActionsInputSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionEnableInsightRulesRoute = createRoute({
  method: 'get',
  path: '/#Action=EnableInsightRules',
  description:
    'Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.',
  operationId: 'GET_EnableInsightRules',
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
      RuleNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InsightRuleNameSchema),
        )
        .openapi({
          param: {
            name: 'RuleNames',
            in: 'query',
            required: true,
            description:
              'An array of the rule names to enable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/InsightRuleName' } },
          },
        }),
      Action: z
        .literal('EnableInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['EnableInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnableInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionEnableInsightRulesRoute = createRoute({
  method: 'post',
  path: '/#Action=EnableInsightRules',
  description:
    'Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.',
  operationId: 'POST_EnableInsightRules',
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
      Action: z
        .literal('EnableInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['EnableInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: EnableInsightRulesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnableInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionGetDashboardRoute = createRoute({
  method: 'get',
  path: '/#Action=GetDashboard',
  description:
    '<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>',
  operationId: 'GET_GetDashboard',
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
      DashboardName: z
        .string()
        .openapi({
          param: {
            name: 'DashboardName',
            in: 'query',
            required: true,
            description: 'The name of the dashboard to be described.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetDashboard')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetDashboard'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetDashboardOutputSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'DashboardNotFoundError',
      content: { 'text/xml': { schema: DashboardNotFoundErrorSchema } },
    },
    482: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionGetDashboardRoute = createRoute({
  method: 'post',
  path: '/#Action=GetDashboard',
  description:
    '<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>',
  operationId: 'POST_GetDashboard',
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
      Action: z
        .literal('GetDashboard')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetDashboard'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetDashboardInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetDashboardOutputSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'DashboardNotFoundError',
      content: { 'text/xml': { schema: DashboardNotFoundErrorSchema } },
    },
    482: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionGetInsightRuleReportRoute = createRoute({
  method: 'get',
  path: '/#Action=GetInsightRuleReport',
  description:
    "<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>",
  operationId: 'GET_GetInsightRuleReport',
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
      RuleName: z
        .string()
        .regex(/[\x20-\x7E]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'RuleName',
            in: 'query',
            required: true,
            description: 'The name of the rule that you want to see data from.',
            schema: { type: 'string', pattern: '[\\x20-\\x7E]+', minLength: 1, maxLength: 128 },
          },
        }),
      StartTime: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'StartTime',
            in: 'query',
            required: true,
            description:
              "The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.",
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      EndTime: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'EndTime',
            in: 'query',
            required: true,
            description:
              "The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.",
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      Period: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            name: 'Period',
            in: 'query',
            required: true,
            description:
              'The period, in seconds, to use for the statistics in the <code>InsightRuleMetricDatapoint</code> results.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      MaxContributorCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxContributorCount',
            in: 'query',
            required: false,
            description:
              'The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used.',
            schema: { type: 'integer' },
          },
        }),
      Metrics: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InsightRuleMetricNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Metrics',
            in: 'query',
            required: false,
            description:
              "<p>Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>",
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/InsightRuleMetricName' },
            },
          },
        }),
      OrderBy: z
        .string()
        .regex(/[\x20-\x7E]+/)
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'OrderBy',
            in: 'query',
            required: false,
            description:
              'Determines what statistic to use to rank the contributors. Valid values are SUM and MAXIMUM.',
            schema: { type: 'string', pattern: '[\\x20-\\x7E]+', minLength: 1, maxLength: 32 },
          },
        }),
      Action: z
        .literal('GetInsightRuleReport')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetInsightRuleReport'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetInsightRuleReportOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postActionGetInsightRuleReportRoute = createRoute({
  method: 'post',
  path: '/#Action=GetInsightRuleReport',
  description:
    "<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>",
  operationId: 'POST_GetInsightRuleReport',
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
      Action: z
        .literal('GetInsightRuleReport')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetInsightRuleReport'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetInsightRuleReportInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetInsightRuleReportOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getActionGetMetricDataRoute = createRoute({
  method: 'get',
  path: '/#Action=GetMetricData',
  description:
    '<p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions.</p> <p>A <code>GetMetricData</code> operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can include only one query. But the same <code>GetMetricData</code> operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p> <p> <b>Using Metrics Insights queries with metric math</b> </p> <p>You can\'t mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a <b>GROUP BY</b> clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a <b>GROUP BY</b> clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series. </p>',
  operationId: 'GET_GetMetricData',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([['Timezone', ['LabelOptions']]])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          MetricDataQueries: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    Id: MetricIdSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                        }),
                    ),
                    MetricStat: z
                      .object({
                        Metric: MetricSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                'The metric to return, including the metric name, namespace, and dimensions.',
                            }),
                        ),
                        Period: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            PeriodSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                              }),
                          ),
                        Stat: StatSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                            }),
                        ),
                        Unit: StandardUnitSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                            }),
                        ).exactOptional(),
                      })
                      .openapi({
                        required: ['Metric', 'Period', 'Stat'],
                        description:
                          'This structure defines the metric to be returned, along with the statistics, period, and units.',
                      })
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                          }),
                      )
                      .exactOptional(),
                    Expression: MetricExpressionSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                        }),
                    ).exactOptional(),
                    Label: MetricLabelSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                        }),
                    ).exactOptional(),
                    ReturnData: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        ReturnDataSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                          }),
                      )
                      .exactOptional(),
                    Period: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        PeriodSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                          }),
                      )
                      .exactOptional(),
                    AccountId: AccountIdSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    required: ['Id'],
                    description:
                      '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
                  }),
              ),
            )
            .openapi({
              param: {
                name: 'MetricDataQueries',
                in: 'query',
                required: true,
                description:
                  'The metric queries to be returned. A single <code>GetMetricData</code> call can include as many as 500 <code>MetricDataQuery</code> structures. Each of these structures can specify either a metric to retrieve, a Metrics Insights query, or a math expression to perform on retrieved data. ',
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    required: ['Id'],
                    properties: {
                      Id: {
                        allOf: [
                          { $ref: '#/components/schemas/MetricId' },
                          {
                            description:
                              'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                          },
                        ],
                      },
                      MetricStat: {
                        allOf: [
                          {
                            type: 'object',
                            required: ['Metric', 'Period', 'Stat'],
                            properties: {
                              Metric: {
                                allOf: [
                                  { $ref: '#/components/schemas/Metric' },
                                  {
                                    description:
                                      'The metric to return, including the metric name, namespace, and dimensions.',
                                  },
                                ],
                              },
                              Period: {
                                allOf: [
                                  { $ref: '#/components/schemas/Period' },
                                  {
                                    description:
                                      '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                                  },
                                ],
                              },
                              Stat: {
                                allOf: [
                                  { $ref: '#/components/schemas/Stat' },
                                  {
                                    description:
                                      'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                                  },
                                ],
                              },
                              Unit: {
                                allOf: [
                                  { $ref: '#/components/schemas/StandardUnit' },
                                  {
                                    description:
                                      '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                                  },
                                ],
                              },
                            },
                            description:
                              'This structure defines the metric to be returned, along with the statistics, period, and units.',
                          },
                          {
                            description:
                              '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                          },
                        ],
                      },
                      Expression: {
                        allOf: [
                          { $ref: '#/components/schemas/MetricExpression' },
                          {
                            description:
                              '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                          },
                        ],
                      },
                      Label: {
                        allOf: [
                          { $ref: '#/components/schemas/MetricLabel' },
                          {
                            description:
                              '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                          },
                        ],
                      },
                      ReturnData: {
                        allOf: [
                          { $ref: '#/components/schemas/ReturnData' },
                          {
                            description:
                              '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                          },
                        ],
                      },
                      Period: {
                        allOf: [
                          { $ref: '#/components/schemas/Period' },
                          {
                            description:
                              'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                          },
                        ],
                      },
                      AccountId: {
                        allOf: [
                          { $ref: '#/components/schemas/AccountId' },
                          {
                            description:
                              '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                          },
                        ],
                      },
                    },
                    description:
                      '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
                  },
                },
              },
            }),
          StartTime: z.iso
            .datetime({ offset: true })
            .openapi({
              param: {
                name: 'StartTime',
                in: 'query',
                required: true,
                description:
                  "<p>The time stamp indicating the earliest data to be returned.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. </p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>StartTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>StartTime</code>.</p>",
                schema: { type: 'string', format: 'date-time' },
              },
            }),
          EndTime: z.iso
            .datetime({ offset: true })
            .openapi({
              param: {
                name: 'EndTime',
                in: 'query',
                required: true,
                description:
                  "<p>The time stamp indicating the latest data to be returned.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp.</p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>EndTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>EndTime</code>.</p>",
                schema: { type: 'string', format: 'date-time' },
              },
            }),
          NextToken: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'NextToken',
                in: 'query',
                required: false,
                description:
                  'Include this value, if it was returned by the previous <code>GetMetricData</code> operation, to get the next set of data points.',
                schema: { type: 'string' },
              },
            }),
          ScanBy: z
            .enum(['TimestampDescending', 'TimestampAscending'])
            .exactOptional()
            .openapi({
              param: {
                name: 'ScanBy',
                in: 'query',
                required: false,
                description:
                  'The order in which data points should be returned. <code>TimestampDescending</code> returns the newest data first and paginates when the <code>MaxDatapoints</code> limit is reached. <code>TimestampAscending</code> returns the oldest data first and paginates when the <code>MaxDatapoints</code> limit is reached.',
                schema: { type: 'string', enum: ['TimestampDescending', 'TimestampAscending'] },
              },
            }),
          MaxDatapoints: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'MaxDatapoints',
                in: 'query',
                required: false,
                description:
                  'The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used.',
                schema: { type: 'integer' },
              },
            }),
          LabelOptions: z
            .object({
              Timezone: GetMetricDataLabelTimezoneSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The time zone to use for metric data return in this operation. The format is <code>+</code> or <code>-</code> followed by four digits. The first two digits indicate the number of hours ahead or behind of UTC, and the final two digits are the number of minutes. For example, +0130 indicates a time zone that is 1 hour and 30 minutes ahead of UTC. The default is +0000. ',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'LabelOptions',
                in: 'query',
                required: false,
                description:
                  'This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels of returned data display the correct time for your time zone. ',
                schema: {
                  type: 'object',
                  properties: {
                    Timezone: {
                      allOf: [
                        { $ref: '#/components/schemas/GetMetricDataLabelTimezone' },
                        {
                          description:
                            'The time zone to use for metric data return in this operation. The format is <code>+</code> or <code>-</code> followed by four digits. The first two digits indicate the number of hours ahead or behind of UTC, and the final two digits are the number of minutes. For example, +0130 indicates a time zone that is 1 hour and 30 minutes ahead of UTC. The default is +0000. ',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels that are associated with returned metrics display the correct time for your time zone. </p> <p>The <code>Timezone</code> value affects a label only if you have a time-based dynamic expression in the label. For more information about dynamic expressions in labels, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                },
              },
              description:
                '<p>This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels that are associated with returned metrics display the correct time for your time zone. </p> <p>The <code>Timezone</code> value affects a label only if you have a time-based dynamic expression in the label. For more information about dynamic expressions in labels, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
              required: [],
            }),
          Action: z
            .literal('GetMetricData')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['GetMetricData'] },
              },
            }),
          Version: z
            .literal('2010-08-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-08-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetMetricDataOutputSchema } } },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const postActionGetMetricDataRoute = createRoute({
  method: 'post',
  path: '/#Action=GetMetricData',
  description:
    '<p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions.</p> <p>A <code>GetMetricData</code> operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can include only one query. But the same <code>GetMetricData</code> operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p> <p> <b>Using Metrics Insights queries with metric math</b> </p> <p>You can\'t mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a <b>GROUP BY</b> clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a <b>GROUP BY</b> clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series. </p>',
  operationId: 'POST_GetMetricData',
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
      MaxDatapoints: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxDatapoints',
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
      Action: z
        .literal('GetMetricData')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetMetricData'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetMetricDataInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetMetricDataOutputSchema } } },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const getActionGetMetricStatisticsRoute = createRoute({
  method: 'get',
  path: '/#Action=GetMetricStatistics',
  description:
    '<p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>',
  operationId: 'GET_GetMetricStatistics',
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
      Namespace: z
        .string()
        .regex(/[^:].*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Namespace',
            in: 'query',
            required: true,
            description: 'The namespace of the metric, with or without spaces.',
            schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
          },
        }),
      MetricName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'MetricName',
            in: 'query',
            required: true,
            description: 'The name of the metric, with or without spaces.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Dimensions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DimensionSchema).max(30),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Dimensions',
            in: 'query',
            required: false,
            description:
              'The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric. If a specific combination of dimensions was not published, you can\'t retrieve statistics for it. You must specify the same dimensions that were used when the metrics were created. For an example, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#dimension-combinations">Dimension Combinations</a> in the <i>Amazon CloudWatch User Guide</i>. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Dimension' },
              maxItems: 30,
            },
          },
        }),
      StartTime: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'StartTime',
            in: 'query',
            required: true,
            description:
              '<p>The time stamp that determines the first data point to return. Start times are evaluated relative to the time that CloudWatch receives the request.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z).</p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p>',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      EndTime: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'EndTime',
            in: 'query',
            required: true,
            description:
              '<p>The time stamp that determines the last data point to return.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).</p>',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      Period: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            name: 'Period',
            in: 'query',
            required: true,
            description:
              '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Statistics: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StatisticSchema).min(1).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Statistics',
            in: 'query',
            required: false,
            description:
              'The metric statistics, other than percentile. For percentile statistics, use <code>ExtendedStatistics</code>. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Statistic' },
              minItems: 1,
              maxItems: 5,
            },
          },
        }),
      ExtendedStatistics: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ExtendedStatisticSchema).min(1).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ExtendedStatistics',
            in: 'query',
            required: false,
            description:
              'The percentile statistics. Specify values between p0.0 and p100. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both. Percentile statistics are not available for metrics when any of the metric values are negative numbers.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ExtendedStatistic' },
              minItems: 1,
              maxItems: 10,
            },
          },
        }),
      Unit: z
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
        .exactOptional()
        .openapi({
          param: {
            name: 'Unit',
            in: 'query',
            required: false,
            description:
              'The unit for a given metric. If you omit <code>Unit</code>, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.',
            schema: {
              type: 'string',
              enum: [
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
              ],
            },
          },
        }),
      Action: z
        .literal('GetMetricStatistics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetMetricStatistics'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMetricStatisticsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionGetMetricStatisticsRoute = createRoute({
  method: 'post',
  path: '/#Action=GetMetricStatistics',
  description:
    '<p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>',
  operationId: 'POST_GetMetricStatistics',
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
      Action: z
        .literal('GetMetricStatistics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetMetricStatistics'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetMetricStatisticsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMetricStatisticsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionGetMetricStreamRoute = createRoute({
  method: 'get',
  path: '/#Action=GetMetricStream',
  description: 'Returns information about the metric stream that you specify.',
  operationId: 'GET_GetMetricStream',
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
      Name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Name',
            in: 'query',
            required: true,
            description: 'The name of the metric stream to retrieve information about.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Action: z
        .literal('GetMetricStream')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetMetricStream'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMetricStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionGetMetricStreamRoute = createRoute({
  method: 'post',
  path: '/#Action=GetMetricStream',
  description: 'Returns information about the metric stream that you specify.',
  operationId: 'POST_GetMetricStream',
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
      Action: z
        .literal('GetMetricStream')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetMetricStream'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetMetricStreamInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMetricStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionGetMetricWidgetImageRoute = createRoute({
  method: 'get',
  path: '/#Action=GetMetricWidgetImage',
  description:
    '<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>',
  operationId: 'GET_GetMetricWidgetImage',
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
      MetricWidget: z
        .string()
        .openapi({
          param: {
            name: 'MetricWidget',
            in: 'query',
            required: true,
            description:
              '<p>A JSON string that defines the bitmap graph to be retrieved. The string includes the metrics to include in the graph, statistics, annotations, title, axis limits, and so on. You can include only one <code>MetricWidget</code> parameter in each <code>GetMetricWidgetImage</code> call.</p> <p>For more information about the syntax of <code>MetricWidget</code> see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Metric-Widget-Structure.html">GetMetricWidgetImage: Metric Widget Structure and Syntax</a>.</p> <p>If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation point appears next to the graph legend.</p>',
            schema: { type: 'string' },
          },
        }),
      OutputFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'OutputFormat',
            in: 'query',
            required: false,
            description:
              '<p>The format of the resulting image. Only PNG images are supported.</p> <p>The default is <code>png</code>. If you specify <code>png</code>, the API returns an HTTP response with the content-type set to <code>text/xml</code>. The image data is in a <code>MetricWidgetImage</code> field. For example:</p> <p> <code> &lt;GetMetricWidgetImageResponse xmlns=&lt;URLstring&gt;&gt;</code> </p> <p> <code> &lt;GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;MetricWidgetImage&gt;</code> </p> <p> <code> iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...</code> </p> <p> <code> &lt;/MetricWidgetImage&gt;</code> </p> <p> <code> &lt;/GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;ResponseMetadata&gt;</code> </p> <p> <code> &lt;RequestId&gt;6f0d4192-4d42-11e8-82c1-f539a07e0e3b&lt;/RequestId&gt;</code> </p> <p> <code> &lt;/ResponseMetadata&gt;</code> </p> <p> <code>&lt;/GetMetricWidgetImageResponse&gt;</code> </p> <p>The <code>image/png</code> setting is intended only for custom HTTP requests. For most use cases, and all actions using an Amazon Web Services SDK, you should use <code>png</code>. If you specify <code>image/png</code>, the HTTP response has a content-type set to <code>image/png</code>, and the body of the response is a PNG image. </p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetMetricWidgetImage')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetMetricWidgetImage'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMetricWidgetImageOutputSchema } },
    },
  },
})

export const postActionGetMetricWidgetImageRoute = createRoute({
  method: 'post',
  path: '/#Action=GetMetricWidgetImage',
  description:
    '<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>',
  operationId: 'POST_GetMetricWidgetImage',
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
      Action: z
        .literal('GetMetricWidgetImage')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetMetricWidgetImage'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetMetricWidgetImageInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMetricWidgetImageOutputSchema } },
    },
  },
})

export const getActionListDashboardsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListDashboards',
  description:
    '<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>',
  operationId: 'GET_ListDashboards',
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
      DashboardNamePrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DashboardNamePrefix',
            in: 'query',
            required: false,
            description:
              'If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_". ',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to indicate that there is more data available.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListDashboards')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDashboards'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDashboardsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionListDashboardsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListDashboards',
  description:
    '<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>',
  operationId: 'POST_ListDashboards',
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
      Action: z
        .literal('ListDashboards')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListDashboards'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListDashboardsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDashboardsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionListManagedInsightRulesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListManagedInsightRules',
  description:
    ' Returns a list that contains the number of managed Contributor Insights rules in your account. ',
  operationId: 'GET_ListManagedInsightRules',
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
      ResourceARN: z
        .string()
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ResourceARN',
            in: 'query',
            required: true,
            description:
              ' The ARN of an Amazon Web Services resource that has managed Contributor Insights rules. ',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              ' Include this value to get the next set of rules if the value was returned by the previous operation. ',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              ' The maximum number of results to return in one operation. If you omit this parameter, the default number is used. The default number is <code>100</code>. ',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      Action: z
        .literal('ListManagedInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListManagedInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListManagedInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const postActionListManagedInsightRulesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListManagedInsightRules',
  description:
    ' Returns a list that contains the number of managed Contributor Insights rules in your account. ',
  operationId: 'POST_ListManagedInsightRules',
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
      Action: z
        .literal('ListManagedInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListManagedInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListManagedInsightRulesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListManagedInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
  },
})

export const getActionListMetricStreamsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListMetricStreams',
  description: 'Returns a list of metric streams in this account.',
  operationId: 'GET_ListMetricStreams',
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
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'Include this value, if it was returned by the previous call, to get the next set of metric streams.',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in one operation.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      Action: z
        .literal('ListMetricStreams')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListMetricStreams'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListMetricStreamsOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const postActionListMetricStreamsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListMetricStreams',
  description: 'Returns a list of metric streams in this account.',
  operationId: 'POST_ListMetricStreams',
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
      Action: z
        .literal('ListMetricStreams')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListMetricStreams'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListMetricStreamsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListMetricStreamsOutputSchema } },
    },
    480: {
      description: 'InvalidNextToken',
      content: { 'text/xml': { schema: InvalidNextTokenSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const getActionListMetricsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListMetrics',
  description:
    '<p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p> <code>ListMetrics</code> doesn\'t return information about metrics if those metrics haven\'t reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>',
  operationId: 'GET_ListMetrics',
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
      Namespace: z
        .string()
        .regex(/[^:].*/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'Namespace',
            in: 'query',
            required: false,
            description:
              'The metric namespace to filter against. Only the namespace that matches exactly will be returned.',
            schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
          },
        }),
      MetricName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'MetricName',
            in: 'query',
            required: false,
            description:
              'The name of the metric to filter against. Only the metrics with names that match exactly will be returned.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Dimensions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DimensionFilterSchema).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Dimensions',
            in: 'query',
            required: false,
            description:
              'The dimensions to filter against. Only the dimensions that match exactly will be returned.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/DimensionFilter' },
              maxItems: 10,
            },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The token returned by a previous call to indicate that there is more data available.',
            schema: { type: 'string' },
          },
        }),
      RecentlyActive: z
        .literal('PT3H')
        .exactOptional()
        .openapi({
          param: {
            name: 'RecentlyActive',
            in: 'query',
            required: false,
            description:
              '<p>To filter the results to show only metrics that have had data points published in the past three hours, specify this parameter with a value of <code>PT3H</code>. This is the only valid value for this parameter.</p> <p>The results that are returned are an approximation of the value you specify. There is a low probability that the returned results include metrics with last published data as much as 40 minutes more than the specified time interval.</p>',
            schema: { type: 'string', enum: ['PT3H'] },
          },
        }),
      IncludeLinkedAccounts: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludeLinkedAccounts',
            in: 'query',
            required: false,
            description:
              '<p>If you are using this operation in a monitoring account, specify <code>true</code> to include metrics from source accounts in the returned data.</p> <p>The default is <code>false</code>.</p>',
            schema: { type: 'boolean' },
          },
        }),
      OwningAccount: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'OwningAccount',
            in: 'query',
            required: false,
            description:
              'When you use this operation in a monitoring account, use this field to return metrics only from one source account. To do so, specify that source account ID in this field, and also specify <code>true</code> for <code>IncludeLinkedAccounts</code>.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Action: z
        .literal('ListMetrics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListMetrics'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListMetricsOutputSchema } } },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionListMetricsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListMetrics',
  description:
    '<p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p> <code>ListMetrics</code> doesn\'t return information about metrics if those metrics haven\'t reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>',
  operationId: 'POST_ListMetrics',
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
      Action: z
        .literal('ListMetrics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListMetrics'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListMetricsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListMetricsOutputSchema } } },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionListTagsForResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTagsForResource',
  description:
    'Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.',
  operationId: 'GET_ListTagsForResource',
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
      ResourceARN: z
        .string()
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ResourceARN',
            in: 'query',
            required: true,
            description:
              '<p>The ARN of the CloudWatch resource that you want to view tags for.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      Action: z
        .literal('ListTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTagsForResource'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=ListTagsForResource',
  description:
    'Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.',
  operationId: 'POST_ListTagsForResource',
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
      Action: z
        .literal('ListTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTagsForResource'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListTagsForResourceInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionPutAnomalyDetectorRoute = createRoute({
  method: 'get',
  path: '/#Action=PutAnomalyDetector',
  description:
    '<p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>',
  operationId: 'GET_PutAnomalyDetector',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['ExcludedTimeRanges', ['Configuration']],
          ['MetricTimezone', ['Configuration']],
          ['MetricDataQueries', ['MetricMathAnomalyDetector']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Namespace: z
            .string()
            .regex(/[^:].*/)
            .min(1)
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                name: 'Namespace',
                in: 'query',
                required: false,
                description:
                  'The namespace of the metric to create the anomaly detection model for.',
                schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
              },
            }),
          MetricName: z
            .string()
            .min(1)
            .max(255)
            .exactOptional()
            .openapi({
              param: {
                name: 'MetricName',
                in: 'query',
                required: false,
                description: 'The name of the metric to create the anomaly detection model for.',
                schema: { type: 'string', minLength: 1, maxLength: 255 },
              },
            }),
          Dimensions: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(DimensionSchema).max(30),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Dimensions',
                in: 'query',
                required: false,
                description: 'The metric dimensions to create the anomaly detection model for.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Dimension' },
                  maxItems: 30,
                },
              },
            }),
          Stat: z
            .string()
            .regex(
              /(SampleCount|Average|Sum|Minimum|Maximum|IQM|(p|tc|tm|ts|wm)(\d{1,2}(\.\d{0,10})?|100)|[ou]\d+(\.\d*)?)(_E|_L|_H)?|(TM|TC|TS|WM)\(((((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?:((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%|((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%:(((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?)\)|(TM|TC|TS|WM|PR)\(((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)):((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?|((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?:(\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))\)/,
            )
            .max(50)
            .exactOptional()
            .openapi({
              param: {
                name: 'Stat',
                in: 'query',
                required: false,
                description: 'The statistic to use for the metric and the anomaly detection model.',
                schema: {
                  type: 'string',
                  pattern:
                    '(SampleCount|Average|Sum|Minimum|Maximum|IQM|(p|tc|tm|ts|wm)(\\d{1,2}(\\.\\d{0,10})?|100)|[ou]\\d+(\\.\\d*)?)(_E|_L|_H)?|(TM|TC|TS|WM)\\(((((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%)?:((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%|((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%:(((\\d{1,2})(\\.\\d{0,10})?|100(\\.0{0,10})?)%)?)\\)|(TM|TC|TS|WM|PR)\\(((\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)):((\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)))?|((\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)))?:(\\d+(\\.\\d{0,10})?|(\\d+(\\.\\d{0,10})?[Ee][+-]?\\d+)))\\)',
                  maxLength: 50,
                },
              },
            }),
          Configuration: z
            .object({
              ExcludedTimeRanges: AnomalyDetectorExcludedTimeRangesSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      "An array of time ranges to exclude from use when the anomaly detection model is trained. Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates the model.",
                  }),
              ).exactOptional(),
              MetricTimezone: AnomalyDetectorMetricTimezoneSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The time zone to use for the metric. This is useful to enable the model to automatically account for daylight savings time changes if the metric is sensitive to such time changes.</p> <p>To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information, see <a href="https://en.wikipedia.org/wiki/Tz_database">tz database</a>.</p>',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'Configuration',
                in: 'query',
                required: false,
                description:
                  '<p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges.</p> <p>The configuration can also include the time zone to use for the metric.</p>',
                schema: {
                  type: 'object',
                  properties: {
                    ExcludedTimeRanges: {
                      allOf: [
                        { $ref: '#/components/schemas/AnomalyDetectorExcludedTimeRanges' },
                        {
                          description:
                            "An array of time ranges to exclude from use when the anomaly detection model is trained. Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates the model.",
                        },
                      ],
                    },
                    MetricTimezone: {
                      allOf: [
                        { $ref: '#/components/schemas/AnomalyDetectorMetricTimezone' },
                        {
                          description:
                            '<p>The time zone to use for the metric. This is useful to enable the model to automatically account for daylight savings time changes if the metric is sensitive to such time changes.</p> <p>To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information, see <a href="https://en.wikipedia.org/wiki/Tz_database">tz database</a>.</p>',
                        },
                      ],
                    },
                  },
                  description:
                    'The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.',
                },
              },
              description:
                'The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.',
              required: [],
            }),
          SingleMetricAnomalyDetector: z
            .object({
              Namespace: NamespaceSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The namespace of the metric to create the anomaly detection model for.',
                  }),
              ).exactOptional(),
              MetricName: MetricNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The name of the metric to create the anomaly detection model for.',
                  }),
              ).exactOptional(),
              Dimensions: DimensionsSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The metric dimensions to create the anomaly detection model for.',
                  }),
              ).exactOptional(),
              Stat: AnomalyDetectorMetricStatSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The statistic to use for the metric and anomaly detection model.',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'SingleMetricAnomalyDetector',
                in: 'query',
                required: false,
                description:
                  '<p>A single metric anomaly detector to be created.</p> <p>When using <code>SingleMetricAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code> </p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>MetricMatchAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the single metric anomaly detector attributes as part of the property <code>SingleMetricAnomalyDetector</code>.</p>',
                schema: {
                  type: 'object',
                  properties: {
                    Namespace: {
                      allOf: [
                        { $ref: '#/components/schemas/Namespace' },
                        {
                          description:
                            'The namespace of the metric to create the anomaly detection model for.',
                        },
                      ],
                    },
                    MetricName: {
                      allOf: [
                        { $ref: '#/components/schemas/MetricName' },
                        {
                          description:
                            'The name of the metric to create the anomaly detection model for.',
                        },
                      ],
                    },
                    Dimensions: {
                      allOf: [
                        { $ref: '#/components/schemas/Dimensions' },
                        {
                          description:
                            'The metric dimensions to create the anomaly detection model for.',
                        },
                      ],
                    },
                    Stat: {
                      allOf: [
                        { $ref: '#/components/schemas/AnomalyDetectorMetricStat' },
                        {
                          description:
                            'The statistic to use for the metric and anomaly detection model.',
                        },
                      ],
                    },
                  },
                  description:
                    'Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.',
                },
              },
              description:
                'Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.',
              required: [],
            }),
          MetricMathAnomalyDetector: z
            .object({
              MetricDataQueries: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Id: MetricIdSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                            }),
                        ),
                        MetricStat: z
                          .object({
                            Metric: MetricSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The metric to return, including the metric name, namespace, and dimensions.',
                                }),
                            ),
                            Period: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                PeriodSchema,
                              )
                              .and(
                                z
                                  .any()
                                  .openapi({
                                    description:
                                      '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                                  }),
                              ),
                            Stat: StatSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                                }),
                            ),
                            Unit: StandardUnitSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                                }),
                            ).exactOptional(),
                          })
                          .openapi({
                            required: ['Metric', 'Period', 'Stat'],
                            description:
                              'This structure defines the metric to be returned, along with the statistics, period, and units.',
                          })
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                              }),
                          )
                          .exactOptional(),
                        Expression: MetricExpressionSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                            }),
                        ).exactOptional(),
                        Label: MetricLabelSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                            }),
                        ).exactOptional(),
                        ReturnData: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            ReturnDataSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                              }),
                          )
                          .exactOptional(),
                        Period: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            PeriodSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                              }),
                          )
                          .exactOptional(),
                        AccountId: AccountIdSchema.and(
                          z
                            .any()
                            .openapi({
                              description:
                                '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                            }),
                        ).exactOptional(),
                      })
                      .openapi({
                        required: ['Id'],
                        description:
                          '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
                      }),
                  ),
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'An array of metric data query structures that enables you to create an anomaly detector based on the result of a metric math expression. Each item in <code>MetricDataQueries</code> gets a metric or performs a math expression. One item in <code>MetricDataQueries</code> is the expression that provides the time series that the anomaly detector uses as input. Designate the expression by setting <code>ReturnData</code> to <code>true</code> for this object in the array. For all other expressions and metrics, set <code>ReturnData</code> to <code>false</code>. The designated expression must return a single time series.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'MetricMathAnomalyDetector',
                in: 'query',
                required: false,
                description:
                  '<p>The metric math anomaly detector to be created.</p> <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code> </p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the metric math anomaly detector attributes as part of the property <code>MetricMathAnomalyDetector</code>.</p>',
                schema: {
                  type: 'object',
                  properties: {
                    MetricDataQueries: {
                      allOf: [
                        {
                          type: 'array',
                          items: {
                            type: 'object',
                            required: ['Id'],
                            properties: {
                              Id: {
                                allOf: [
                                  { $ref: '#/components/schemas/MetricId' },
                                  {
                                    description:
                                      'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                                  },
                                ],
                              },
                              MetricStat: {
                                allOf: [
                                  {
                                    type: 'object',
                                    required: ['Metric', 'Period', 'Stat'],
                                    properties: {
                                      Metric: {
                                        allOf: [
                                          { $ref: '#/components/schemas/Metric' },
                                          {
                                            description:
                                              'The metric to return, including the metric name, namespace, and dimensions.',
                                          },
                                        ],
                                      },
                                      Period: {
                                        allOf: [
                                          { $ref: '#/components/schemas/Period' },
                                          {
                                            description:
                                              '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                                          },
                                        ],
                                      },
                                      Stat: {
                                        allOf: [
                                          { $ref: '#/components/schemas/Stat' },
                                          {
                                            description:
                                              'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                                          },
                                        ],
                                      },
                                      Unit: {
                                        allOf: [
                                          { $ref: '#/components/schemas/StandardUnit' },
                                          {
                                            description:
                                              '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                                          },
                                        ],
                                      },
                                    },
                                    description:
                                      'This structure defines the metric to be returned, along with the statistics, period, and units.',
                                  },
                                  {
                                    description:
                                      '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                                  },
                                ],
                              },
                              Expression: {
                                allOf: [
                                  { $ref: '#/components/schemas/MetricExpression' },
                                  {
                                    description:
                                      '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                                  },
                                ],
                              },
                              Label: {
                                allOf: [
                                  { $ref: '#/components/schemas/MetricLabel' },
                                  {
                                    description:
                                      '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                                  },
                                ],
                              },
                              ReturnData: {
                                allOf: [
                                  { $ref: '#/components/schemas/ReturnData' },
                                  {
                                    description:
                                      '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                                  },
                                ],
                              },
                              Period: {
                                allOf: [
                                  { $ref: '#/components/schemas/Period' },
                                  {
                                    description:
                                      'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                                  },
                                ],
                              },
                              AccountId: {
                                allOf: [
                                  { $ref: '#/components/schemas/AccountId' },
                                  {
                                    description:
                                      '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                                  },
                                ],
                              },
                            },
                            description:
                              '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
                          },
                        },
                        {
                          description:
                            'An array of metric data query structures that enables you to create an anomaly detector based on the result of a metric math expression. Each item in <code>MetricDataQueries</code> gets a metric or performs a math expression. One item in <code>MetricDataQueries</code> is the expression that provides the time series that the anomaly detector uses as input. Designate the expression by setting <code>ReturnData</code> to <code>true</code> for this object in the array. For all other expressions and metrics, set <code>ReturnData</code> to <code>false</code>. The designated expression must return a single time series.',
                        },
                      ],
                    },
                  },
                  description:
                    'Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.',
                },
              },
              description:
                'Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.',
              required: [],
            }),
          Action: z
            .literal('PutAnomalyDetector')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['PutAnomalyDetector'] },
              },
            }),
          Version: z
            .literal('2010-08-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-08-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutAnomalyDetectorOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionPutAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/#Action=PutAnomalyDetector',
  description:
    '<p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>',
  operationId: 'POST_PutAnomalyDetector',
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
      Action: z
        .literal('PutAnomalyDetector')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutAnomalyDetector'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutAnomalyDetectorInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutAnomalyDetectorOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionPutCompositeAlarmRoute = createRoute({
  method: 'get',
  path: '/#Action=PutCompositeAlarm',
  description:
    "<p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>To use this operation, you must be signed on with the <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to <code>*</code>. You can't create a composite alarms if your <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p> <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has Systems Manager OpsItem actions.</p>",
  operationId: 'GET_PutCompositeAlarm',
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
      ActionsEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ActionsEnabled',
            in: 'query',
            required: false,
            description:
              'Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is <code>TRUE</code>.',
            schema: { type: 'boolean' },
          },
        }),
      AlarmActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceNameSchema).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmActions',
            in: 'query',
            required: false,
            description:
              '<p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> | <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i> </code> </p>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ResourceName' },
              maxItems: 5,
            },
          },
        }),
      AlarmDescription: z
        .string()
        .min(0)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmDescription',
            in: 'query',
            required: false,
            description: 'The description for the composite alarm.',
            schema: { type: 'string', minLength: 0, maxLength: 1024 },
          },
        }),
      AlarmName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'AlarmName',
            in: 'query',
            required: true,
            description:
              'The name for the composite alarm. This name must be unique within the Region.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      AlarmRule: z
        .string()
        .min(1)
        .max(10240)
        .openapi({
          param: {
            name: 'AlarmRule',
            in: 'query',
            required: true,
            description:
              '<p>An expression that specifies which other alarms are to be evaluated to determine this composite alarm\'s state. For each alarm that you reference, you designate a function that specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the functions in your expression.</p> <p>You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.</p> <p>Functions can include the following:</p> <ul> <li> <p> <code>ALARM("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in ALARM state.</p> </li> <li> <p> <code>OK("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in OK state.</p> </li> <li> <p> <code>INSUFFICIENT_DATA("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in INSUFFICIENT_DATA state.</p> </li> <li> <p> <code>TRUE</code> always evaluates to TRUE.</p> </li> <li> <p> <code>FALSE</code> always evaluates to FALSE.</p> </li> </ul> <p>TRUE and FALSE are useful for testing a complex <code>AlarmRule</code> structure, and for testing your alarm actions.</p> <p>Alarm names specified in <code>AlarmRule</code> can be surrounded with double-quotes ("), but do not have to be.</p> <p>The following are some examples of <code>AlarmRule</code>:</p> <ul> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh)</code> specifies that the composite alarm goes into ALARM state only if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.</p> </li> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress)</code> specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state and DeploymentInProgress is not in ALARM state. This example reduces alarm noise during a known deployment window.</p> </li> <li> <p> <code>(ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh)</code> goes into ALARM state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state. This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an alarm action on high CPU or disk usage if a known network problem is also occurring.</p> </li> </ul> <p>The <code>AlarmRule</code> can specify as many as 100 "children" alarms. The <code>AlarmRule</code> expression can have as many as 500 elements. Elements are child alarms, TRUE or FALSE statements, and parentheses.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 10240 },
          },
        }),
      InsufficientDataActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceNameSchema).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'InsufficientDataActions',
            in: 'query',
            required: false,
            description:
              '<p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ResourceName' },
              maxItems: 5,
            },
          },
        }),
      OKActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceNameSchema).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OKActions',
            in: 'query',
            required: false,
            description:
              '<p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ResourceName' },
              maxItems: 5,
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description:
              '<p>A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
          },
        }),
      ActionsSuppressor: z
        .string()
        .min(1)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'ActionsSuppressor',
            in: 'query',
            required: false,
            description:
              ' Actions will be suppressed if the suppressor alarm is in the <code>ALARM</code> state. <code>ActionsSuppressor</code> can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. ',
            schema: { type: 'string', minLength: 1, maxLength: 1600 },
          },
        }),
      ActionsSuppressorWaitPeriod: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ActionsSuppressorWaitPeriod',
            in: 'query',
            required: false,
            description:
              '<p> The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>WaitPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>',
            schema: { type: 'integer' },
          },
        }),
      ActionsSuppressorExtensionPeriod: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ActionsSuppressorExtensionPeriod',
            in: 'query',
            required: false,
            description:
              '<p> The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>ExtensionPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('PutCompositeAlarm')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutCompositeAlarm'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'LimitExceededFault',
      content: { 'text/xml': { schema: LimitExceededFaultSchema } },
    },
  },
})

export const postActionPutCompositeAlarmRoute = createRoute({
  method: 'post',
  path: '/#Action=PutCompositeAlarm',
  description:
    "<p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>To use this operation, you must be signed on with the <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to <code>*</code>. You can't create a composite alarms if your <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p> <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has Systems Manager OpsItem actions.</p>",
  operationId: 'POST_PutCompositeAlarm',
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
      Action: z
        .literal('PutCompositeAlarm')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutCompositeAlarm'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutCompositeAlarmInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'LimitExceededFault',
      content: { 'text/xml': { schema: LimitExceededFaultSchema } },
    },
  },
})

export const getActionPutDashboardRoute = createRoute({
  method: 'get',
  path: '/#Action=PutDashboard',
  description:
    '<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>',
  operationId: 'GET_PutDashboard',
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
      DashboardName: z
        .string()
        .openapi({
          param: {
            name: 'DashboardName',
            in: 'query',
            required: true,
            description:
              'The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, "-", and "_". This parameter is required.',
            schema: { type: 'string' },
          },
        }),
      DashboardBody: z
        .string()
        .openapi({
          param: {
            name: 'DashboardBody',
            in: 'query',
            required: true,
            description:
              '<p>The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.</p> <p>For more information about the syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('PutDashboard')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutDashboard'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: PutDashboardOutputSchema } } },
    480: {
      description: 'DashboardInvalidInputError',
      content: { 'text/xml': { schema: DashboardInvalidInputErrorSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionPutDashboardRoute = createRoute({
  method: 'post',
  path: '/#Action=PutDashboard',
  description:
    '<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>',
  operationId: 'POST_PutDashboard',
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
      Action: z
        .literal('PutDashboard')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutDashboard'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutDashboardInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: PutDashboardOutputSchema } } },
    480: {
      description: 'DashboardInvalidInputError',
      content: { 'text/xml': { schema: DashboardInvalidInputErrorSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionPutInsightRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=PutInsightRule',
  description:
    '<p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>',
  operationId: 'GET_PutInsightRule',
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
      RuleName: z
        .string()
        .regex(/[\x20-\x7E]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'RuleName',
            in: 'query',
            required: true,
            description: 'A unique name for the rule.',
            schema: { type: 'string', pattern: '[\\x20-\\x7E]+', minLength: 1, maxLength: 128 },
          },
        }),
      RuleState: z
        .string()
        .regex(/[\x20-\x7E]+/)
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'RuleState',
            in: 'query',
            required: false,
            description: 'The state of the rule. Valid values are ENABLED and DISABLED.',
            schema: { type: 'string', pattern: '[\\x20-\\x7E]+', minLength: 1, maxLength: 32 },
          },
        }),
      RuleDefinition: z
        .string()
        .regex(/[\x00-\x7F]+/)
        .min(1)
        .max(8192)
        .openapi({
          param: {
            name: 'RuleDefinition',
            in: 'query',
            required: true,
            description:
              'The definition of the rule, as a JSON object. For details on the valid syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights Rule Syntax</a>.',
            schema: { type: 'string', pattern: '[\\x00-\\x7F]+', minLength: 1, maxLength: 8192 },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description:
              '<p>A list of key-value pairs to associate with the Contributor Insights rule. You can associate as many as 50 tags with a rule.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> <p>To be able to associate tags with a rule, you must have the <code>cloudwatch:TagResource</code> permission in addition to the <code>cloudwatch:PutInsightRule</code> permission.</p> <p>If you are using this operation to update an existing Contributor Insights rule, any tags you specify in this parameter are ignored. To change the tags of an existing rule, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
          },
        }),
      Action: z
        .literal('PutInsightRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutInsightRule'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutInsightRuleOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionPutInsightRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=PutInsightRule',
  description:
    '<p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>',
  operationId: 'POST_PutInsightRule',
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
      Action: z
        .literal('PutInsightRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutInsightRule'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutInsightRuleInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutInsightRuleOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionPutManagedInsightRulesRoute = createRoute({
  method: 'get',
  path: '/#Action=PutManagedInsightRules',
  description:
    ' Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use <code>ListManagedInsightRules</code> to describe all available rules. ',
  operationId: 'GET_PutManagedInsightRules',
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
      ManagedRules: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ManagedRuleSchema),
        )
        .openapi({
          param: {
            name: 'ManagedRules',
            in: 'query',
            required: true,
            description: ' A list of <code>ManagedRules</code> to enable. ',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ManagedRule' } },
          },
        }),
      Action: z
        .literal('PutManagedInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutManagedInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutManagedInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const postActionPutManagedInsightRulesRoute = createRoute({
  method: 'post',
  path: '/#Action=PutManagedInsightRules',
  description:
    ' Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use <code>ListManagedInsightRules</code> to describe all available rules. ',
  operationId: 'POST_PutManagedInsightRules',
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
      Action: z
        .literal('PutManagedInsightRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutManagedInsightRules'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutManagedInsightRulesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutManagedInsightRulesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const getActionPutMetricAlarmRoute = createRoute({
  method: 'get',
  path: '/#Action=PutMetricAlarm',
  description:
    '<p>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p> </li> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm with Systems Manager OpsItem or response plan actions.</p> </li> </ul> <p>The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called <code>AWSServiceRoleForCloudWatchEvents</code> and <code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p> <p>Each <code>PutMetricAlarm</code> action has a maximum uncompressed payload of 120 KB.</p> <p> <b>Cross-account alarms</b> </p> <p>You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:</p> <ul> <li> <p>The account where the metrics are located (the <i>sharing account</i>) must already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already have this role, you must create it using the instructions in <b>Set up a sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>. The policy for that role must grant access to the ID of the account where you are creating the alarm. </p> </li> <li> <p>The account where you are creating the alarm (the <i>monitoring account</i>) must already have a service-linked role named <b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>.</p> </li> </ul>',
  operationId: 'GET_PutMetricAlarm',
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
      AlarmName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'AlarmName',
            in: 'query',
            required: true,
            description:
              "<p>The name for the alarm. This name must be unique within the Region.</p> <p>The name must contain only UTF-8 characters, and can't contain ASCII control characters</p>",
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      AlarmDescription: z
        .string()
        .min(0)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmDescription',
            in: 'query',
            required: false,
            description: 'The description for the alarm.',
            schema: { type: 'string', minLength: 0, maxLength: 1024 },
          },
        }),
      ActionsEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ActionsEnabled',
            in: 'query',
            required: false,
            description:
              'Indicates whether actions should be executed during any changes to the alarm state. The default is <code>TRUE</code>.',
            schema: { type: 'boolean' },
          },
        }),
      OKActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceNameSchema).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OKActions',
            in: 'query',
            required: false,
            description:
              '<p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ResourceName' },
              maxItems: 5,
            },
          },
        }),
      AlarmActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceNameSchema).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AlarmActions',
            in: 'query',
            required: false,
            description:
              '<p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ResourceName' },
              maxItems: 5,
            },
          },
        }),
      InsufficientDataActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceNameSchema).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'InsufficientDataActions',
            in: 'query',
            required: false,
            description:
              '<p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ResourceName' },
              maxItems: 5,
            },
          },
        }),
      MetricName: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'MetricName',
            in: 'query',
            required: false,
            description:
              '<p>The name for the metric associated with the alarm. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters. Instead, you specify all this information in the <code>Metrics</code> array.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Namespace: z
        .string()
        .regex(/[^:].*/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'Namespace',
            in: 'query',
            required: false,
            description:
              'The namespace for the metric associated specified in <code>MetricName</code>.',
            schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
          },
        }),
      Statistic: z
        .enum(['SampleCount', 'Average', 'Sum', 'Minimum', 'Maximum'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Statistic',
            in: 'query',
            required: false,
            description:
              'The statistic for the metric specified in <code>MetricName</code>, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.',
            schema: {
              type: 'string',
              enum: ['SampleCount', 'Average', 'Sum', 'Minimum', 'Maximum'],
            },
          },
        }),
      ExtendedStatistic: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ExtendedStatistic',
            in: 'query',
            required: false,
            description:
              'The percentile statistic for the metric specified in <code>MetricName</code>. Specify a value between p0.0 and p100. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.',
            schema: { type: 'string' },
          },
        }),
      Dimensions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DimensionSchema).max(30),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Dimensions',
            in: 'query',
            required: false,
            description: 'The dimensions for the metric specified in <code>MetricName</code>.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Dimension' },
              maxItems: 30,
            },
          },
        }),
      Period: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Period',
            in: 'query',
            required: false,
            description:
              '<p>The length, in seconds, used each time the metric specified in <code>MetricName</code> is evaluated. Valid values are 10, 30, and any multiple of 60.</p> <p> <code>Period</code> is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the <code>Metrics</code> array.</p> <p>Be sure to specify 10 or 30 only for metrics that are stored by a <code>PutMetricData</code> call with a <code>StorageResolution</code> of 1. If you specify a period of 10 or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm might often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>An alarm\'s total current evaluation period can be no longer than one day, so <code>Period</code> multiplied by <code>EvaluationPeriods</code> cannot be more than 86,400 seconds.</p>',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Unit: z
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
        .exactOptional()
        .openapi({
          param: {
            name: 'Unit',
            in: 'query',
            required: false,
            description:
              "<p>The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately.</p> <p>If you don't specify <code>Unit</code>, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually, metrics are published with only one unit, so the alarm works as intended.</p> <p>However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and it behaves unpredictably.</p> <p>We recommend omitting <code>Unit</code> so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the <code>INSUFFICIENT DATA</code> state.</p>",
            schema: {
              type: 'string',
              enum: [
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
              ],
            },
          },
        }),
      EvaluationPeriods: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            name: 'EvaluationPeriods',
            in: 'query',
            required: true,
            description:
              '<p>The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N.</p> <p>An alarm\'s total current evaluation period can be no longer than one day, so this number multiplied by <code>Period</code> cannot be more than 86,400 seconds.</p>',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      DatapointsToAlarm: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'DatapointsToAlarm',
            in: 'query',
            required: false,
            description:
              'The number of data points that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation">Evaluating an Alarm</a> in the <i>Amazon CloudWatch User Guide</i>.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Threshold',
            in: 'query',
            required: false,
            description:
              '<p>The value against which the specified statistic is compared.</p> <p>This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.</p>',
            schema: { type: 'number', format: 'double' },
          },
        }),
      ComparisonOperator: z
        .enum([
          'GreaterThanOrEqualToThreshold',
          'GreaterThanThreshold',
          'LessThanThreshold',
          'LessThanOrEqualToThreshold',
          'LessThanLowerOrGreaterThanUpperThreshold',
          'LessThanLowerThreshold',
          'GreaterThanUpperThreshold',
        ])
        .openapi({
          param: {
            name: 'ComparisonOperator',
            in: 'query',
            required: true,
            description:
              '<p> The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.</p> <p>The values <code>LessThanLowerOrGreaterThanUpperThreshold</code>, <code>LessThanLowerThreshold</code>, and <code>GreaterThanUpperThreshold</code> are used only for alarms based on anomaly detection models.</p>',
            schema: {
              type: 'string',
              enum: [
                'GreaterThanOrEqualToThreshold',
                'GreaterThanThreshold',
                'LessThanThreshold',
                'LessThanOrEqualToThreshold',
                'LessThanLowerOrGreaterThanUpperThreshold',
                'LessThanLowerThreshold',
                'GreaterThanUpperThreshold',
              ],
            },
          },
        }),
      TreatMissingData: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'TreatMissingData',
            in: 'query',
            required: false,
            description:
              '<p> Sets how this alarm is to handle missing data points. If <code>TreatMissingData</code> is omitted, the default behavior of <code>missing</code> is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>Valid Values: <code>breaching | notBreaching | ignore | missing</code> </p> <note> <p>Alarms that evaluate metrics in the <code>AWS/DynamoDB</code> namespace always <code>ignore</code> missing data even if you choose a different option for <code>TreatMissingData</code>. When an <code>AWS/DynamoDB</code> metric has missing data, alarms that evaluate that metric remain in their current state.</p> </note>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      EvaluateLowSampleCountPercentile: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'EvaluateLowSampleCountPercentile',
            in: 'query',
            required: false,
            description:
              '<p> Used only for alarms based on percentiles. If you specify <code>ignore</code>, the alarm state does not change during periods with too few data points to be statistically significant. If you specify <code>evaluate</code> or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples">Percentile-Based CloudWatch Alarms and Low Data Samples</a>.</p> <p>Valid Values: <code>evaluate | ignore</code> </p>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Metrics: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Id: MetricIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                    }),
                ),
                MetricStat: z
                  .object({
                    Metric: MetricSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The metric to return, including the metric name, namespace, and dimensions.',
                        }),
                    ),
                    Period: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        PeriodSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                          }),
                      ),
                    Stat: StatSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                        }),
                    ),
                    Unit: StandardUnitSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    required: ['Metric', 'Period', 'Stat'],
                    description:
                      'This structure defines the metric to be returned, along with the statistics, period, and units.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                      }),
                  )
                  .exactOptional(),
                Expression: MetricExpressionSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                    }),
                ).exactOptional(),
                Label: MetricLabelSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                    }),
                ).exactOptional(),
                ReturnData: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    ReturnDataSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                      }),
                  )
                  .exactOptional(),
                Period: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    PeriodSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                      }),
                  )
                  .exactOptional(),
                AccountId: AccountIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                    }),
                ).exactOptional(),
              })
              .openapi({
                required: ['Id'],
                description:
                  '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
              }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Metrics',
            in: 'query',
            required: false,
            description:
              '<p>An array of <code>MetricDataQuery</code> structures that enable you to create an alarm based on the result of a metric math expression. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>Each item in the <code>Metrics</code> array either retrieves a metric or performs a math expression.</p> <p>One item in the <code>Metrics</code> array is the expression that the alarm watches. You designate this expression by setting <code>ReturnData</code> to true for this object in the array. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html">MetricDataQuery</a>.</p> <p>If you use the <code>Metrics</code> parameter, you cannot include the <code>MetricName</code>, <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters of <code>PutMetricAlarm</code> in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the <code>Metrics</code> array.</p>',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Id'],
                properties: {
                  Id: {
                    allOf: [
                      { $ref: '#/components/schemas/MetricId' },
                      {
                        description:
                          'A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.',
                      },
                    ],
                  },
                  MetricStat: {
                    allOf: [
                      {
                        type: 'object',
                        required: ['Metric', 'Period', 'Stat'],
                        properties: {
                          Metric: {
                            allOf: [
                              { $ref: '#/components/schemas/Metric' },
                              {
                                description:
                                  'The metric to return, including the metric name, namespace, and dimensions.',
                              },
                            ],
                          },
                          Period: {
                            allOf: [
                              { $ref: '#/components/schemas/Period' },
                              {
                                description:
                                  '<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>',
                              },
                            ],
                          },
                          Stat: {
                            allOf: [
                              { $ref: '#/components/schemas/Stat' },
                              {
                                description:
                                  'The statistic to return. It can include any CloudWatch statistic or extended statistic.',
                              },
                            ],
                          },
                          Unit: {
                            allOf: [
                              { $ref: '#/components/schemas/StandardUnit' },
                              {
                                description:
                                  '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>',
                              },
                            ],
                          },
                        },
                        description:
                          'This structure defines the metric to be returned, along with the statistics, period, and units.',
                      },
                      {
                        description:
                          '<p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</p> <p>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                      },
                    ],
                  },
                  Expression: {
                    allOf: [
                      { $ref: '#/components/schemas/MetricExpression' },
                      {
                        description:
                          '<p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>A math expression can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</p>',
                      },
                    ],
                  },
                  Label: {
                    allOf: [
                      { $ref: '#/components/schemas/MetricLabel' },
                      {
                        description:
                          '<p>A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.</p> <p>You can put dynamic expressions into a label, so that it is more descriptive. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>',
                      },
                    ],
                  },
                  ReturnData: {
                    allOf: [
                      { $ref: '#/components/schemas/ReturnData' },
                      {
                        description:
                          '<p>When used in <code>GetMetricData</code>, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify <code>false</code>. If you omit this, the default of <code>true</code> is used.</p> <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>',
                      },
                    ],
                  },
                  Period: {
                    allOf: [
                      { $ref: '#/components/schemas/Period' },
                      {
                        description:
                          'The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.',
                      },
                    ],
                  },
                  AccountId: {
                    allOf: [
                      { $ref: '#/components/schemas/AccountId' },
                      {
                        description:
                          '<p>The ID of the account where the metrics are located.</p> <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify which account to retrieve this metric from.</p> <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify which account contains the metric that the alarm is watching.</p>',
                      },
                    ],
                  },
                },
                description:
                  '<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>',
              },
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description:
              '<p>A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
          },
        }),
      ThresholdMetricId: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'ThresholdMetricId',
            in: 'query',
            required: false,
            description:
              '<p>If this is an alarm based on an anomaly detection model, make this value match the ID of the <code>ANOMALY_DETECTION_BAND</code> function.</p> <p>For an example of how to use this parameter, see the <b>Anomaly Detection Model Alarm</b> example on this page.</p> <p>If your alarm uses this parameter, it cannot have Auto Scaling actions.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      Action: z
        .literal('PutMetricAlarm')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutMetricAlarm'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'LimitExceededFault',
      content: { 'text/xml': { schema: LimitExceededFaultSchema } },
    },
  },
})

export const postActionPutMetricAlarmRoute = createRoute({
  method: 'post',
  path: '/#Action=PutMetricAlarm',
  description:
    '<p>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p> </li> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm with Systems Manager OpsItem or response plan actions.</p> </li> </ul> <p>The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called <code>AWSServiceRoleForCloudWatchEvents</code> and <code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p> <p>Each <code>PutMetricAlarm</code> action has a maximum uncompressed payload of 120 KB.</p> <p> <b>Cross-account alarms</b> </p> <p>You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:</p> <ul> <li> <p>The account where the metrics are located (the <i>sharing account</i>) must already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already have this role, you must create it using the instructions in <b>Set up a sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>. The policy for that role must grant access to the ID of the account where you are creating the alarm. </p> </li> <li> <p>The account where you are creating the alarm (the <i>monitoring account</i>) must already have a service-linked role named <b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>.</p> </li> </ul>',
  operationId: 'POST_PutMetricAlarm',
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
      Action: z
        .literal('PutMetricAlarm')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutMetricAlarm'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutMetricAlarmInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'LimitExceededFault',
      content: { 'text/xml': { schema: LimitExceededFaultSchema } },
    },
  },
})

export const getActionPutMetricDataRoute = createRoute({
  method: 'get',
  path: '/#Action=PutMetricData',
  description:
    '<p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>',
  operationId: 'GET_PutMetricData',
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
      Namespace: z
        .string()
        .regex(/[^:].*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Namespace',
            in: 'query',
            required: true,
            description:
              '<p>The namespace for the metric data. You can use ASCII characters for the namespace, except for control characters which are not supported.</p> <p>To avoid conflicts with Amazon Web Services service namespaces, you should not specify a namespace that begins with <code>AWS/</code> </p>',
            schema: { type: 'string', pattern: '[^:].*', minLength: 1, maxLength: 255 },
          },
        }),
      MetricData: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                MetricName: MetricNameSchema.and(
                  z.any().openapi({ description: 'The name of the metric.' }),
                ),
                Dimensions: DimensionsSchema.and(
                  z.any().openapi({ description: 'The dimensions associated with the metric. ' }),
                ).exactOptional(),
                Timestamp: TimestampSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.',
                    }),
                ).exactOptional(),
                Value: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    DatapointValueSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The value for the metric.</p> <p>Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>',
                      }),
                  )
                  .exactOptional(),
                StatisticValues: z
                  .object({
                    SampleCount: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        DatapointValueSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description: 'The number of samples used for the statistic set.',
                          }),
                      ),
                    Sum: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        DatapointValueSchema,
                      )
                      .and(
                        z.any().openapi({ description: 'The sum of values for the sample set.' }),
                      ),
                    Minimum: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        DatapointValueSchema,
                      )
                      .and(
                        z.any().openapi({ description: 'The minimum value of the sample set.' }),
                      ),
                    Maximum: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        DatapointValueSchema,
                      )
                      .and(
                        z.any().openapi({ description: 'The maximum value of the sample set.' }),
                      ),
                  })
                  .openapi({
                    required: ['SampleCount', 'Sum', 'Minimum', 'Maximum'],
                    description:
                      'Represents a set of statistics that describes a specific metric. ',
                  })
                  .and(z.any().openapi({ description: 'The statistical values for the metric.' }))
                  .exactOptional(),
                Values: z
                  .array(
                    z.preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      DatapointValueSchema,
                    ),
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Array of numbers representing the values for the metric during the period. Each unique value is listed just once in this array, and the corresponding number in the <code>Counts</code> array specifies the number of times that value occurred during the period. You can include up to 150 unique values in each <code>PutMetricData</code> action that specifies a <code>Values</code> array.</p> <p>Although the <code>Values</code> array accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>',
                      }),
                  )
                  .exactOptional(),
                Counts: z
                  .array(
                    z.preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      DatapointValueSchema,
                    ),
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Array of numbers that is used along with the <code>Values</code> array. Each number in the <code>Count</code> array is the number of times the corresponding value in the <code>Values</code> array occurred during the period. </p> <p>If you omit the <code>Counts</code> array, the default of 1 is used as the value for each count. If you include a <code>Counts</code> array, it must include the same amount of values as the <code>Values</code> array.</p>',
                      }),
                  )
                  .exactOptional(),
                Unit: StandardUnitSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, this displays the unit that is used for the metric.</p>',
                    }),
                ).exactOptional(),
                StorageResolution: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    StorageResolutionSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with sub-minute resolution down to one second. Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available only for custom metrics. For more information about high-resolution metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>This field is optional, if you do not specify it the default of 60 is used.</p>',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                required: ['MetricName'],
                description:
                  'Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.',
              }),
          ),
        )
        .openapi({
          param: {
            name: 'MetricData',
            in: 'query',
            required: true,
            description:
              'The data for the metric. The array can include no more than 1000 metrics per call.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['MetricName'],
                properties: {
                  MetricName: {
                    allOf: [
                      { $ref: '#/components/schemas/MetricName' },
                      { description: 'The name of the metric.' },
                    ],
                  },
                  Dimensions: {
                    allOf: [
                      { $ref: '#/components/schemas/Dimensions' },
                      { description: 'The dimensions associated with the metric. ' },
                    ],
                  },
                  Timestamp: {
                    allOf: [
                      { $ref: '#/components/schemas/Timestamp' },
                      {
                        description:
                          'The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.',
                      },
                    ],
                  },
                  Value: {
                    allOf: [
                      { $ref: '#/components/schemas/DatapointValue' },
                      {
                        description:
                          '<p>The value for the metric.</p> <p>Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>',
                      },
                    ],
                  },
                  StatisticValues: {
                    allOf: [
                      {
                        type: 'object',
                        required: ['SampleCount', 'Sum', 'Minimum', 'Maximum'],
                        properties: {
                          SampleCount: {
                            allOf: [
                              { $ref: '#/components/schemas/DatapointValue' },
                              { description: 'The number of samples used for the statistic set.' },
                            ],
                          },
                          Sum: {
                            allOf: [
                              { $ref: '#/components/schemas/DatapointValue' },
                              { description: 'The sum of values for the sample set.' },
                            ],
                          },
                          Minimum: {
                            allOf: [
                              { $ref: '#/components/schemas/DatapointValue' },
                              { description: 'The minimum value of the sample set.' },
                            ],
                          },
                          Maximum: {
                            allOf: [
                              { $ref: '#/components/schemas/DatapointValue' },
                              { description: 'The maximum value of the sample set.' },
                            ],
                          },
                        },
                        description:
                          'Represents a set of statistics that describes a specific metric. ',
                      },
                      { description: 'The statistical values for the metric.' },
                    ],
                  },
                  Values: {
                    allOf: [
                      { type: 'array', items: { $ref: '#/components/schemas/DatapointValue' } },
                      {
                        description:
                          '<p>Array of numbers representing the values for the metric during the period. Each unique value is listed just once in this array, and the corresponding number in the <code>Counts</code> array specifies the number of times that value occurred during the period. You can include up to 150 unique values in each <code>PutMetricData</code> action that specifies a <code>Values</code> array.</p> <p>Although the <code>Values</code> array accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>',
                      },
                    ],
                  },
                  Counts: {
                    allOf: [
                      { type: 'array', items: { $ref: '#/components/schemas/DatapointValue' } },
                      {
                        description:
                          '<p>Array of numbers that is used along with the <code>Values</code> array. Each number in the <code>Count</code> array is the number of times the corresponding value in the <code>Values</code> array occurred during the period. </p> <p>If you omit the <code>Counts</code> array, the default of 1 is used as the value for each count. If you include a <code>Counts</code> array, it must include the same amount of values as the <code>Values</code> array.</p>',
                      },
                    ],
                  },
                  Unit: {
                    allOf: [
                      { $ref: '#/components/schemas/StandardUnit' },
                      {
                        description:
                          '<p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p> <p>In a <code>Get</code> operation, this displays the unit that is used for the metric.</p>',
                      },
                    ],
                  },
                  StorageResolution: {
                    allOf: [
                      { $ref: '#/components/schemas/StorageResolution' },
                      {
                        description:
                          '<p>Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with sub-minute resolution down to one second. Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available only for custom metrics. For more information about high-resolution metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>This field is optional, if you do not specify it the default of 60 is used.</p>',
                      },
                    ],
                  },
                },
                description:
                  'Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.',
              },
            },
          },
        }),
      Action: z
        .literal('PutMetricData')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutMetricData'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionPutMetricDataRoute = createRoute({
  method: 'post',
  path: '/#Action=PutMetricData',
  description:
    '<p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>',
  operationId: 'POST_PutMetricData',
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
      Action: z
        .literal('PutMetricData')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutMetricData'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutMetricDataInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionPutMetricStreamRoute = createRoute({
  method: 'get',
  path: '/#Action=PutMetricStream',
  description:
    '<p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using Metric Streams</a>.</p> <p>To create a metric stream, you must be signed in to an account that has the <code>iam:PassRole</code> permission and either the <code>CloudWatchFullAccess</code> policy or the <code>cloudwatch:PutMetricStream</code> permission.</p> <p>When you create or update a metric stream, you choose one of the following:</p> <ul> <li> <p>Stream metrics from all metric namespaces in the account.</p> </li> <li> <p>Stream metrics from all metric namespaces in the account, except for the namespaces that you list in <code>ExcludeFilters</code>.</p> </li> <li> <p>Stream metrics from only the metric namespaces that you list in <code>IncludeFilters</code>.</p> </li> </ul> <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p> <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is created in the <code>running</code> state. If you use it to update an existing stream, the state of the stream is not changed.</p> <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>',
  operationId: 'GET_PutMetricStream',
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
      Name: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Name',
            in: 'query',
            required: true,
            description:
              '<p>If you are creating a new metric stream, this is the name for the new stream. The name must be different than the names of other metric streams in this account and Region.</p> <p>If you are updating a metric stream, specify the name of that stream here.</p> <p>Valid characters are A-Z, a-z, 0-9, "-" and "_".</p>',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      IncludeFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(MetricStreamFilterSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludeFilters',
            in: 'query',
            required: false,
            description:
              '<p>If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here.</p> <p>You cannot include <code>IncludeFilters</code> and <code>ExcludeFilters</code> in the same operation.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/MetricStreamFilter' } },
          },
        }),
      ExcludeFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(MetricStreamFilterSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ExcludeFilters',
            in: 'query',
            required: false,
            description:
              '<p>If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here.</p> <p>You cannot include <code>ExcludeFilters</code> and <code>IncludeFilters</code> in the same operation.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/MetricStreamFilter' } },
          },
        }),
      FirehoseArn: z
        .string()
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'FirehoseArn',
            in: 'query',
            required: true,
            description:
              'The ARN of the Amazon Kinesis Data Firehose delivery stream to use for this metric stream. This Amazon Kinesis Data Firehose delivery stream must already exist and must be in the same account as the metric stream.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      RoleArn: z
        .string()
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'RoleArn',
            in: 'query',
            required: true,
            description:
              '<p>The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Data Firehose resources. This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the following permissions:</p> <ul> <li> <p>firehose:PutRecord</p> </li> <li> <p>firehose:PutRecordBatch</p> </li> </ul>',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      OutputFormat: z
        .enum(['json', 'opentelemetry0.7'])
        .openapi({
          param: {
            name: 'OutputFormat',
            in: 'query',
            required: true,
            description:
              'The output format for the stream. Valid values are <code>json</code> and <code>opentelemetry0.7</code>. For more information about metric stream output formats, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html"> Metric streams output formats</a>.',
            schema: {
              type: 'string',
              enum: ['json', 'opentelemetry0.7'],
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description:
              '<p>A list of key-value pairs to associate with the metric stream. You can associate as many as 50 tags with a metric stream.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use this parameter only when you are creating a new metric stream. If you are using this operation to update an existing metric stream, any tags you specify in this parameter are ignored. To change the tags of an existing metric stream, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
          },
        }),
      StatisticsConfigurations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(MetricStreamStatisticsConfigurationSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'StatisticsConfigurations',
            in: 'query',
            required: false,
            description:
              '<p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.</p> <p>For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream\'s <code>OutputFormat</code>. If the <code>OutputFormat</code> is <code>json</code>, you can stream any additional statistic that is supported by CloudWatch, listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html"> CloudWatch statistics definitions</a>. If the <code>OutputFormat</code> is <code>opentelemetry0.7</code>, you can stream percentile statistics such as p95, p99.9, and so on.</p>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/MetricStreamStatisticsConfiguration' },
            },
          },
        }),
      IncludeLinkedAccountsMetrics: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludeLinkedAccountsMetrics',
            in: 'query',
            required: false,
            description:
              'If you are creating a metric stream in a monitoring account, specify <code>true</code> to include metrics from source accounts in the metric stream.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('PutMetricStream')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutMetricStream'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutMetricStreamOutputSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'text/xml': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionPutMetricStreamRoute = createRoute({
  method: 'post',
  path: '/#Action=PutMetricStream',
  description:
    '<p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using Metric Streams</a>.</p> <p>To create a metric stream, you must be signed in to an account that has the <code>iam:PassRole</code> permission and either the <code>CloudWatchFullAccess</code> policy or the <code>cloudwatch:PutMetricStream</code> permission.</p> <p>When you create or update a metric stream, you choose one of the following:</p> <ul> <li> <p>Stream metrics from all metric namespaces in the account.</p> </li> <li> <p>Stream metrics from all metric namespaces in the account, except for the namespaces that you list in <code>ExcludeFilters</code>.</p> </li> <li> <p>Stream metrics from only the metric namespaces that you list in <code>IncludeFilters</code>.</p> </li> </ul> <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p> <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is created in the <code>running</code> state. If you use it to update an existing stream, the state of the stream is not changed.</p> <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>',
  operationId: 'POST_PutMetricStream',
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
      Action: z
        .literal('PutMetricStream')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutMetricStream'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutMetricStreamInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutMetricStreamOutputSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'text/xml': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionSetAlarmStateRoute = createRoute({
  method: 'get',
  path: '/#Action=SetAlarmState',
  description:
    '<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm\'s <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>',
  operationId: 'GET_SetAlarmState',
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
      AlarmName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'AlarmName',
            in: 'query',
            required: true,
            description: 'The name of the alarm.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      StateValue: z
        .enum(['OK', 'ALARM', 'INSUFFICIENT_DATA'])
        .openapi({
          param: {
            name: 'StateValue',
            in: 'query',
            required: true,
            description: 'The value of the state.',
            schema: { type: 'string', enum: ['OK', 'ALARM', 'INSUFFICIENT_DATA'] },
          },
        }),
      StateReason: z
        .string()
        .min(0)
        .max(1023)
        .openapi({
          param: {
            name: 'StateReason',
            in: 'query',
            required: true,
            description:
              'The reason that this alarm is set to this specific state, in text format.',
            schema: { type: 'string', minLength: 0, maxLength: 1023 },
          },
        }),
      StateReasonData: z
        .string()
        .min(0)
        .max(4000)
        .exactOptional()
        .openapi({
          param: {
            name: 'StateReasonData',
            in: 'query',
            required: false,
            description:
              '<p>The reason that this alarm is set to this specific state, in JSON format.</p> <p>For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.</p>',
            schema: { type: 'string', minLength: 0, maxLength: 4000 },
          },
        }),
      Action: z
        .literal('SetAlarmState')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetAlarmState'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFound',
      content: { 'text/xml': { schema: ResourceNotFoundSchema } },
    },
    481: {
      description: 'InvalidFormatFault',
      content: { 'text/xml': { schema: InvalidFormatFaultSchema } },
    },
  },
})

export const postActionSetAlarmStateRoute = createRoute({
  method: 'post',
  path: '/#Action=SetAlarmState',
  description:
    '<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm\'s <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>',
  operationId: 'POST_SetAlarmState',
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
      Action: z
        .literal('SetAlarmState')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetAlarmState'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetAlarmStateInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFound',
      content: { 'text/xml': { schema: ResourceNotFoundSchema } },
    },
    481: {
      description: 'InvalidFormatFault',
      content: { 'text/xml': { schema: InvalidFormatFaultSchema } },
    },
  },
})

export const getActionStartMetricStreamsRoute = createRoute({
  method: 'get',
  path: '/#Action=StartMetricStreams',
  description: 'Starts the streaming of metrics for one or more of your metric streams.',
  operationId: 'GET_StartMetricStreams',
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
      Names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(MetricStreamNameSchema),
        )
        .openapi({
          param: {
            name: 'Names',
            in: 'query',
            required: true,
            description:
              '<p>The array of the names of metric streams to start streaming.</p> <p>This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will start streaming.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/MetricStreamName' } },
          },
        }),
      Action: z
        .literal('StartMetricStreams')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartMetricStreams'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartMetricStreamsOutputSchema } },
    },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const postActionStartMetricStreamsRoute = createRoute({
  method: 'post',
  path: '/#Action=StartMetricStreams',
  description: 'Starts the streaming of metrics for one or more of your metric streams.',
  operationId: 'POST_StartMetricStreams',
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
      Action: z
        .literal('StartMetricStreams')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartMetricStreams'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: StartMetricStreamsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartMetricStreamsOutputSchema } },
    },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const getActionStopMetricStreamsRoute = createRoute({
  method: 'get',
  path: '/#Action=StopMetricStreams',
  description: 'Stops the streaming of metrics for one or more of your metric streams.',
  operationId: 'GET_StopMetricStreams',
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
      Names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(MetricStreamNameSchema),
        )
        .openapi({
          param: {
            name: 'Names',
            in: 'query',
            required: true,
            description:
              '<p>The array of the names of metric streams to stop streaming.</p> <p>This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will stop streaming.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/MetricStreamName' } },
          },
        }),
      Action: z
        .literal('StopMetricStreams')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StopMetricStreams'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StopMetricStreamsOutputSchema } },
    },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const postActionStopMetricStreamsRoute = createRoute({
  method: 'post',
  path: '/#Action=StopMetricStreams',
  description: 'Stops the streaming of metrics for one or more of your metric streams.',
  operationId: 'POST_StopMetricStreams',
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
      Action: z
        .literal('StopMetricStreams')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StopMetricStreams'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: StopMetricStreamsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StopMetricStreamsOutputSchema } },
    },
    480: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'text/xml': { schema: MissingRequiredParameterExceptionSchema } },
    },
  },
})

export const getActionTagResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=TagResource',
  description:
    "<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>",
  operationId: 'GET_TagResource',
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
      ResourceARN: z
        .string()
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ResourceARN',
            in: 'query',
            required: true,
            description:
              '<p>The ARN of the CloudWatch resource that you\'re adding tags to.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema),
        )
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: true,
            description: 'The list of key-value pairs to associate with the alarm.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
          },
        }),
      Action: z
        .literal('TagResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TagResource'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagResourceOutputSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'text/xml': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionTagResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=TagResource',
  description:
    "<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>",
  operationId: 'POST_TagResource',
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
      Action: z
        .literal('TagResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TagResource'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: TagResourceInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagResourceOutputSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'text/xml': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const getActionUntagResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=UntagResource',
  description: 'Removes one or more tags from the specified resource.',
  operationId: 'GET_UntagResource',
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
      ResourceARN: z
        .string()
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ResourceARN',
            in: 'query',
            required: true,
            description:
              '<p>The ARN of the CloudWatch resource that you\'re removing tags from.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
          },
        }),
      TagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'TagKeys',
            in: 'query',
            required: true,
            description: 'The list of tag keys to remove from the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
      Action: z
        .literal('UntagResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UntagResource'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UntagResourceOutputSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'text/xml': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})

export const postActionUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=UntagResource',
  description: 'Removes one or more tags from the specified resource.',
  operationId: 'POST_UntagResource',
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
      Action: z
        .literal('UntagResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UntagResource'] },
          },
        }),
      Version: z
        .literal('2010-08-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-08-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UntagResourceInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UntagResourceOutputSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'text/xml': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InternalServiceFault',
      content: { 'text/xml': { schema: InternalServiceFaultSchema } },
    },
  },
})
