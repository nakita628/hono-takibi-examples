import { createRoute, z } from '@hono/zod-openapi'

const StackNameSchema = z
  .string()
  .regex(/^[a-zA-Z*]+[a-zA-Z0-9-]*$/)
  .min(1)
  .max(128)
  .openapi('StackName')

const CostEstimationStackNamesSchema = z
  .array(StackNameSchema)
  .length(1)
  .openapi('CostEstimationStackNames')

const CloudFormationCostEstimationResourceCollectionFilterSchema = z
  .object({
    StackNames: CostEstimationStackNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of CloudFormation stack names. Its size is fixed at 1 item.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an Amazon Web Services CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.',
    required: [],
  })
  .openapi('CloudFormationCostEstimationResourceCollectionFilter')

const AppBoundaryKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('AppBoundaryKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*|\*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const CostEstimationTagValuesSchema = z
  .array(TagValueSchema)
  .length(1)
  .openapi('CostEstimationTagValues')

const TagCostEstimationResourceCollectionFilterSchema = z
  .object({
    AppBoundaryKey: AppBoundaryKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make up your DevOps Guru application and analysis boundary.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ),
    TagValues: CostEstimationTagValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The values in an Amazon Web Services tag collection.</p> <p>The tag's <i>value</i> is an optional field used to associate a string with the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair. Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>",
        }),
    ),
  })
  .openapi({
    required: ['AppBoundaryKey', 'TagValues'],
    description:
      'Information about a collection of Amazon Web Services resources that are identified by an Amazon Web Services tag. This collection of resources is used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of tags you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the tag. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.',
  })
  .openapi('TagCostEstimationResourceCollectionFilter')

const TagCostEstimationResourceCollectionFiltersSchema = z
  .array(TagCostEstimationResourceCollectionFilterSchema)
  .openapi('TagCostEstimationResourceCollectionFilters')

type CostEstimationResourceCollectionFilterType = {
  CloudFormation?: z.infer<typeof CloudFormationCostEstimationResourceCollectionFilterSchema> & {
    [key: string]: unknown
  }
  Tags?: z.infer<typeof TagCostEstimationResourceCollectionFiltersSchema> & {
    [key: string]: unknown
  }
}

const NotificationChannelIdSchema = z
  .string()
  .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
  .length(36)
  .openapi('NotificationChannelId')

const AddNotificationChannelResponseSchema = z
  .object({
    Id: NotificationChannelIdSchema.and(
      z.any().openapi({ description: ' The ID of the added notification channel. ' }),
    ),
  })
  .openapi({ required: ['Id'] })
  .openapi('AddNotificationChannelResponse')

const TopicArnSchema = z
  .string()
  .regex(/^arn:aws[a-z0-9-]*:sns:[a-z0-9-]+:\d{12}:[^:]+$/)
  .min(36)
  .max(1024)
  .openapi('TopicArn')

const SnsChannelConfigSchema = z
  .object({
    TopicArn: TopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>',
    required: [],
  })
  .openapi('SnsChannelConfig')

const InsightSeveritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH']).openapi('InsightSeverity')

const InsightSeveritiesSchema = z
  .array(InsightSeveritySchema)
  .min(0)
  .max(3)
  .openapi('InsightSeverities')

const NotificationMessageTypeSchema = z
  .enum([
    'NEW_INSIGHT',
    'CLOSED_INSIGHT',
    'NEW_ASSOCIATION',
    'SEVERITY_UPGRADED',
    'NEW_RECOMMENDATION',
  ])
  .openapi('NotificationMessageType')

const NotificationMessageTypesSchema = z
  .array(NotificationMessageTypeSchema)
  .min(0)
  .max(5)
  .openapi('NotificationMessageTypes')

const NotificationFilterConfigSchema = z
  .object({
    Severities: InsightSeveritiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The severity levels that you want to receive notifications for. For example, you can choose to receive notifications only for insights with <code>HIGH</code> and <code>MEDIUM</code> severity levels. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a>. ',
        }),
    ).exactOptional(),
    MessageTypes: NotificationMessageTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The events that you want to receive notifications for. For example, you can choose to receive notifications only when the severity level is upgraded or a new insight is created. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. You can choose to specify which events or message types to receive notifications for. You can also choose to specify which severity levels to receive notifications for. ',
    required: [],
  })
  .openapi('NotificationFilterConfig')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const DeleteInsightResponseSchema = z.object({}).openapi('DeleteInsightResponse')

const NumOpenReactiveInsightsSchema = z.int().openapi('NumOpenReactiveInsights')

const NumOpenProactiveInsightsSchema = z.int().openapi('NumOpenProactiveInsights')

const NumMetricsAnalyzedSchema = z.int().openapi('NumMetricsAnalyzed')

const ResourceHoursSchema = z.int().openapi('ResourceHours')

const AnalyzedResourceCountSchema = z.int().openapi('AnalyzedResourceCount')

const DescribeAccountHealthResponseSchema = z
  .object({
    OpenReactiveInsights: NumOpenReactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An integer that specifies the number of open reactive insights in your Amazon Web Services account. ',
        }),
    ),
    OpenProactiveInsights: NumOpenProactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An integer that specifies the number of open proactive insights in your Amazon Web Services account. ',
        }),
    ),
    MetricsAnalyzed: NumMetricsAnalyzedSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An integer that specifies the number of metrics that have been analyzed in your Amazon Web Services account. ',
        }),
    ),
    ResourceHours: ResourceHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in the last hour. ',
        }),
    ),
    AnalyzedResourceCount: AnalyzedResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Number of resources that DevOps Guru is monitoring in your Amazon Web Services account. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OpenReactiveInsights', 'OpenProactiveInsights', 'MetricsAnalyzed', 'ResourceHours'],
  })
  .openapi('DescribeAccountHealthResponse')

const NumReactiveInsightsSchema = z.int().openapi('NumReactiveInsights')

const NumProactiveInsightsSchema = z.int().openapi('NumProactiveInsights')

const MeanTimeToRecoverInMillisecondsSchema = z.int().openapi('MeanTimeToRecoverInMilliseconds')

const DescribeAccountOverviewResponseSchema = z
  .object({
    ReactiveInsights: NumReactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An integer that specifies the number of open reactive insights in your Amazon Web Services account that were created during the time range passed in. ',
        }),
    ),
    ProactiveInsights: NumProactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An integer that specifies the number of open proactive insights in your Amazon Web Services account that were created during the time range passed in. ',
        }),
    ),
    MeanTimeToRecoverInMilliseconds: MeanTimeToRecoverInMillisecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Mean Time to Recover (MTTR) for all closed insights that were created during the time range passed in. ',
        }),
    ),
  })
  .openapi({
    required: ['ReactiveInsights', 'ProactiveInsights', 'MeanTimeToRecoverInMilliseconds'],
  })
  .openapi('DescribeAccountOverviewResponse')

const AnomalyIdSchema = z
  .string()
  .regex(/^[\w~.-]*$/)
  .min(1)
  .max(100)
  .openapi('AnomalyId')

const AnomalySeveritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH']).openapi('AnomalySeverity')

const AnomalyStatusSchema = z.enum(['ONGOING', 'CLOSED']).openapi('AnomalyStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AnomalyTimeRangeSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: ' The time when the anomalous behavior started. ' }),
    ),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: ' The time when the anomalous behavior ended. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartTime'],
    description:
      ' A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. ',
  })
  .openapi('AnomalyTimeRange')

const AnomalyReportedTimeRangeSchema = z
  .object({
    OpenTime: TimestampSchema.and(
      z.any().openapi({ description: ' The time when an anomaly is opened. ' }),
    ),
    CloseTime: TimestampSchema.and(
      z.any().openapi({ description: ' The time when an anomaly is closed. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OpenTime'],
    description:
      ' A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior. ',
  })
  .openapi('AnomalyReportedTimeRange')

const PredictionTimeRangeSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time range during which a metric limit is expected to be exceeded. This applies to proactive insights only. ',
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: ' The time when the behavior in a proactive insight is expected to end. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartTime'],
    description:
      ' The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. ',
  })
  .openapi('PredictionTimeRange')

const CloudWatchMetricsMetricNameSchema = z.string().openapi('CloudWatchMetricsMetricName')

const CloudWatchMetricsNamespaceSchema = z.string().openapi('CloudWatchMetricsNamespace')

const CloudWatchMetricsDimensionNameSchema = z.string().openapi('CloudWatchMetricsDimensionName')

const CloudWatchMetricsDimensionValueSchema = z.string().openapi('CloudWatchMetricsDimensionValue')

const CloudWatchMetricsDimensionSchema = z
  .object({
    Name: CloudWatchMetricsDimensionNameSchema.and(
      z.any().openapi({ description: ' The name of the CloudWatch dimension. ' }),
    ).exactOptional(),
    Value: CloudWatchMetricsDimensionValueSchema.and(
      z.any().openapi({ description: ' The value of the CloudWatch dimension. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The dimension of an Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behavior. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. ',
    required: [],
  })
  .openapi('CloudWatchMetricsDimension')

const CloudWatchMetricsDimensionsSchema = z
  .array(CloudWatchMetricsDimensionSchema)
  .openapi('CloudWatchMetricsDimensions')

const CloudWatchMetricsStatSchema = z
  .enum(['Sum', 'Average', 'SampleCount', 'Minimum', 'Maximum', 'p99', 'p90', 'p50'])
  .openapi('CloudWatchMetricsStat')

const CloudWatchMetricsUnitSchema = z.string().openapi('CloudWatchMetricsUnit')

const CloudWatchMetricsPeriodSchema = z.int().openapi('CloudWatchMetricsPeriod')

const MetricValueSchema = z.float64().openapi('MetricValue')

const TimestampMetricValuePairSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>Timestamp</code> that specifies the time the event occurred. ',
        }),
    ).exactOptional(),
    MetricValue: MetricValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Value of the anomalous metric data point at respective Timestamp.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A pair that contains metric values at the respective timestamp.',
    required: [],
  })
  .openapi('TimestampMetricValuePair')

const TimestampMetricValuePairListSchema = z
  .array(TimestampMetricValuePairSchema)
  .openapi('TimestampMetricValuePairList')

const CloudWatchMetricDataStatusCodeSchema = z
  .enum(['Complete', 'InternalError', 'PartialData'])
  .openapi('CloudWatchMetricDataStatusCode')

const CloudWatchMetricsDataSummarySchema = z
  .object({
    TimestampMetricValuePairList: TimestampMetricValuePairListSchema.and(
      z
        .any()
        .openapi({
          description: 'This is a list of Amazon CloudWatch metric values at given timestamp.',
        }),
    ).exactOptional(),
    StatusCode: CloudWatchMetricDataStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is an enum of the status showing whether the metric value pair list has partial or complete data, or if there was an error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the analyzed metrics that displayed anomalous behavior. ',
    required: [],
  })
  .openapi('CloudWatchMetricsDataSummary')

const CloudWatchMetricsDetailSchema = z
  .object({
    MetricName: CloudWatchMetricsMetricNameSchema.and(
      z.any().openapi({ description: ' The name of the CloudWatch metric. ' }),
    ).exactOptional(),
    Namespace: CloudWatchMetricsNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics. ',
        }),
    ).exactOptional(),
    Dimensions: CloudWatchMetricsDimensionsSchema.and(
      z.any().openapi({ description: ' An array of CloudWatch dimensions associated with ' }),
    ).exactOptional(),
    Stat: CloudWatchMetricsStatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of statistic associated with the CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>. ',
        }),
    ).exactOptional(),
    Unit: CloudWatchMetricsUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unit of measure used for the CloudWatch metric. For example, <code>Bytes</code>, <code>Seconds</code>, <code>Count</code>, and <code>Percent</code>. ',
        }),
    ).exactOptional(),
    Period: CloudWatchMetricsPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The length of time associated with the CloudWatch metric in number of seconds. ',
        }),
    ).exactOptional(),
    MetricDataSummary: CloudWatchMetricsDataSummarySchema.and(
      z.any().openapi({ description: 'This object returns anomaly metric data.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about an Amazon CloudWatch metric. ', required: [] })
  .openapi('CloudWatchMetricsDetail')

const CloudWatchMetricsDetailsSchema = z
  .array(CloudWatchMetricsDetailSchema)
  .openapi('CloudWatchMetricsDetails')

const PerformanceInsightsMetricDisplayNameSchema = z
  .string()
  .openapi('PerformanceInsightsMetricDisplayName')

const PerformanceInsightsMetricUnitSchema = z.string().openapi('PerformanceInsightsMetricUnit')

const PerformanceInsightsMetricNameSchema = z.string().openapi('PerformanceInsightsMetricName')

const PerformanceInsightsMetricGroupSchema = z.string().openapi('PerformanceInsightsMetricGroup')

const PerformanceInsightsMetricDimensionSchema = z
  .string()
  .openapi('PerformanceInsightsMetricDimension')

const PerformanceInsightsMetricDimensionsSchema = z
  .array(PerformanceInsightsMetricDimensionSchema)
  .openapi('PerformanceInsightsMetricDimensions')

const PerformanceInsightsMetricLimitIntegerSchema = z
  .int()
  .min(1)
  .max(10)
  .openapi('PerformanceInsightsMetricLimitInteger')

const PerformanceInsightsMetricDimensionGroupSchema = z
  .object({
    Group: PerformanceInsightsMetricGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the dimension group. Its valid values are:</p> <ul> <li> <p> <code>db</code> - The name of the database to which the client is connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)</p> </li> <li> <p> <code>db.application</code> - The name of the application that is connected to the database (only Aurora PostgreSQL and RDS PostgreSQL)</p> </li> <li> <p> <code>db.host</code> - The host name of the connected client (all engines)</p> </li> <li> <p> <code>db.session_type</code> - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)</p> </li> <li> <p> <code>db.sql</code> - The SQL that is currently executing (all engines)</p> </li> <li> <p> <code>db.sql_tokenized</code> - The SQL digest (all engines)</p> </li> <li> <p> <code>db.wait_event</code> - The event for which the database backend is waiting (all engines)</p> </li> <li> <p> <code>db.wait_event_type</code> - The type of event for which the database backend is waiting (all engines)</p> </li> <li> <p> <code>db.user</code> - The user logged in to the database (all engines)</p> </li> </ul>',
        }),
    ).exactOptional(),
    Dimensions: PerformanceInsightsMetricDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested or are present in the response.</p> <p>Valid values for elements in the <code>Dimensions</code> array are:</p> <ul> <li> <p> <code>db.application.name</code> - The name of the application that is connected to the database (only Aurora PostgreSQL and RDS PostgreSQL)</p> </li> <li> <p> <code>db.host.id</code> - The host ID of the connected client (all engines)</p> </li> <li> <p> <code>db.host.name</code> - The host name of the connected client (all engines)</p> </li> <li> <p> <code>db.name</code> - The name of the database to which the client is connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)</p> </li> <li> <p> <code>db.session_type.name</code> - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)</p> </li> <li> <p> <code>db.sql.id</code> - The SQL ID generated by Performance Insights (all engines)</p> </li> <li> <p> <code>db.sql.db_id</code> - The SQL ID generated by the database (all engines)</p> </li> <li> <p> <code>db.sql.statement</code> - The SQL text that is being executed (all engines)</p> </li> <li> <p> <code>db.sql.tokenized_id</code> </p> </li> <li> <p> <code>db.sql_tokenized.id</code> - The SQL digest ID generated by Performance Insights (all engines)</p> </li> <li> <p> <code>db.sql_tokenized.db_id</code> - SQL digest ID generated by the database (all engines)</p> </li> <li> <p> <code>db.sql_tokenized.statement</code> - The SQL digest text (all engines)</p> </li> <li> <p> <code>db.user.id</code> - The ID of the user logged in to the database (all engines)</p> </li> <li> <p> <code>db.user.name</code> - The name of the user logged in to the database (all engines)</p> </li> <li> <p> <code>db.wait_event.name</code> - The event for which the backend is waiting (all engines)</p> </li> <li> <p> <code>db.wait_event.type</code> - The type of event for which the backend is waiting (all engines)</p> </li> <li> <p> <code>db.wait_event_type.name</code> - The name of the event type for which the backend is waiting (all engines)</p> </li> </ul>',
        }),
    ).exactOptional(),
    Limit: PerformanceInsightsMetricLimitIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of items to fetch for this dimension group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul>',
    required: [],
  })
  .openapi('PerformanceInsightsMetricDimensionGroup')

const PerformanceInsightsMetricFilterValueSchema = z
  .string()
  .openapi('PerformanceInsightsMetricFilterValue')

const PerformanceInsightsMetricFilterMapSchema = z
  .record(z.string(), PerformanceInsightsMetricFilterValueSchema)
  .openapi('PerformanceInsightsMetricFilterMap')

const PerformanceInsightsMetricQuerySchema = z
  .object({
    Metric: PerformanceInsightsMetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the meteric used used when querying an Performance Insights <code>GetResourceMetrics</code> API for anomaly metrics.</p> <p>Valid values for <code>Metric</code> are:</p> <ul> <li> <p> <code>db.load.avg</code> - a scaled representation of the number of active sessions for the database engine.</p> </li> <li> <p> <code>db.sampledload.avg</code> - the raw number of active sessions for the database engine.</p> </li> </ul> <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code> are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code> showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than <code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code> only. </p>',
        }),
    ).exactOptional(),
    GroupBy: PerformanceInsightsMetricDimensionGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specification for how to aggregate the data points from a Performance Insights <code>GetResourceMetrics</code> API query. The Performance Insights query returns all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.',
        }),
    ).exactOptional(),
    Filter: PerformanceInsightsMetricFilterMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more filters to apply to a Performance Insights <code>GetResourceMetrics</code> API query. Restrictions:</p> <ul> <li> <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> parameter.</p> </li> <li> <p>A single filter for any other dimension in this dimension group.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A single query to be processed. Use these parameters to query the Performance Insights <code>GetResourceMetrics</code> API to retrieve the metrics for an anomaly. For more information, see <code> <a href="https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html">GetResourceMetrics</a> </code> in the <i>Amazon RDS Performance Insights API Reference</i>.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul>',
    required: [],
  })
  .openapi('PerformanceInsightsMetricQuery')

const PerformanceInsightsReferenceNameSchema = z
  .string()
  .openapi('PerformanceInsightsReferenceName')

const PerformanceInsightsValueDoubleSchema = z.float64().openapi('PerformanceInsightsValueDouble')

const PerformanceInsightsReferenceScalarSchema = z
  .object({
    Value: PerformanceInsightsValueDoubleSchema.and(
      z.any().openapi({ description: 'The reference value.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A reference value to compare Performance Insights metrics against to determine if the metrics demonstrate anomalous behavior.',
    required: [],
  })
  .openapi('PerformanceInsightsReferenceScalar')

const PerformanceInsightsReferenceMetricSchema = z
  .object({
    MetricQuery: PerformanceInsightsMetricQuerySchema.and(
      z.any().openapi({ description: 'A query to be processed on the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a reference metric used to evaluate Performance Insights.',
    required: [],
  })
  .openapi('PerformanceInsightsReferenceMetric')

const PerformanceInsightsReferenceComparisonValuesSchema = z
  .object({
    ReferenceScalar: PerformanceInsightsReferenceScalarSchema.and(
      z
        .any()
        .openapi({
          description:
            'A scalar value DevOps Guru for a metric that DevOps Guru compares to actual metric values. This reference value is used to determine if an actual metric value should be considered anomalous.',
        }),
    ).exactOptional(),
    ReferenceMetric: PerformanceInsightsReferenceMetricSchema.and(
      z
        .any()
        .openapi({
          description:
            'A metric that DevOps Guru compares to actual metric values. This reference metric is used to determine if an actual metric should be considered anomalous.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Reference scalar values and other metrics that DevOps Guru displays on a graph in its console along with the actual metrics it analyzed. Compare these reference values to your actual metrics to help you understand anomalous behavior that DevOps Guru detected.',
    required: [],
  })
  .openapi('PerformanceInsightsReferenceComparisonValues')

const PerformanceInsightsReferenceDataSchema = z
  .object({
    Name: PerformanceInsightsReferenceNameSchema.and(
      z.any().openapi({ description: 'The name of the reference data.' }),
    ).exactOptional(),
    ComparisonValues: PerformanceInsightsReferenceComparisonValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific reference values used to evaluate the Performance Insights. For more information, see <code> <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsReferenceComparisonValues.html">PerformanceInsightsReferenceComparisonValues</a> </code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Reference data used to evaluate Performance Insights to determine if its performance is anomalous or not.',
    required: [],
  })
  .openapi('PerformanceInsightsReferenceData')

const PerformanceInsightsReferenceDataListSchema = z
  .array(PerformanceInsightsReferenceDataSchema)
  .openapi('PerformanceInsightsReferenceDataList')

const PerformanceInsightsStatTypeSchema = z.string().openapi('PerformanceInsightsStatType')

const PerformanceInsightsStatSchema = z
  .object({
    Type: PerformanceInsightsStatTypeSchema.and(
      z.any().openapi({ description: 'The statistic type.' }),
    ).exactOptional(),
    Value: PerformanceInsightsValueDoubleSchema.and(
      z.any().openapi({ description: 'The value of the statistic.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A statistic in a Performance Insights collection.', required: [] })
  .openapi('PerformanceInsightsStat')

const PerformanceInsightsStatsSchema = z
  .array(PerformanceInsightsStatSchema)
  .openapi('PerformanceInsightsStats')

const PerformanceInsightsMetricsDetailSchema = z
  .object({
    MetricDisplayName: PerformanceInsightsMetricDisplayNameSchema.and(
      z.any().openapi({ description: 'The name used for a specific Performance Insights metric.' }),
    ).exactOptional(),
    Unit: PerformanceInsightsMetricUnitSchema.and(
      z
        .any()
        .openapi({
          description: 'The unit of measure for a metric. For example, a session or a process.',
        }),
    ).exactOptional(),
    MetricQuery: PerformanceInsightsMetricQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'A single query to be processed for the metric. For more information, see <code> <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsMetricQuery.html">PerformanceInsightsMetricQuery</a> </code>.',
        }),
    ).exactOptional(),
    ReferenceData: PerformanceInsightsReferenceDataListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' For more information, see <code> <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsReferenceData.html">PerformanceInsightsReferenceData</a> </code>. ',
        }),
    ).exactOptional(),
    StatsAtAnomaly: PerformanceInsightsStatsSchema.and(
      z
        .any()
        .openapi({
          description: 'The metric statistics during the anomalous period detected by DevOps Guru;',
        }),
    ).exactOptional(),
    StatsAtBaseline: PerformanceInsightsStatsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Typical metric statistics that are not considered anomalous. When DevOps Guru analyzes metrics, it compares them to <code>StatsAtBaseline</code> to help determine if they are anomalous.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Details about Performance Insights metrics.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul>',
    required: [],
  })
  .openapi('PerformanceInsightsMetricsDetail')

const PerformanceInsightsMetricsDetailsSchema = z
  .array(PerformanceInsightsMetricsDetailSchema)
  .openapi('PerformanceInsightsMetricsDetails')

const AnomalySourceDetailsSchema = z
  .object({
    CloudWatchMetrics: CloudWatchMetricsDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>CloudWatchMetricsDetail</code> objects that contain information about analyzed CloudWatch metrics that show anomalous behavior. ',
        }),
    ).exactOptional(),
    PerformanceInsightsMetrics: PerformanceInsightsMetricsDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>PerformanceInsightsMetricsDetail</code> objects that contain information about analyzed Performance Insights metrics that show anomalous behavior.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Details about the source of the anomalous operational data that triggered the anomaly.',
    required: [],
  })
  .openapi('AnomalySourceDetails')

const InsightIdSchema = z
  .string()
  .regex(/^[\w-]*$/)
  .min(1)
  .max(100)
  .openapi('InsightId')

const StackNamesSchema = z.array(StackNameSchema).openapi('StackNames')

const CloudFormationCollectionSchema = z
  .object({
    StackNames: StackNamesSchema.and(
      z.any().openapi({ description: ' An array of CloudFormation stack names. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>. ',
    required: [],
  })
  .openapi('CloudFormationCollection')

const TagValuesSchema = z.array(TagValueSchema).openapi('TagValues')

const TagCollectionSchema = z
  .object({
    AppBoundaryKey: AppBoundaryKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make up your DevOps Guru application and analysis boundary.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ),
    TagValues: TagValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The values in an Amazon Web Services tag collection.</p> <p>The tag's <i>value</i> is an optional field used to associate a string with the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair. Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>",
        }),
    ),
  })
  .openapi({
    required: ['AppBoundaryKey', 'TagValues'],
    description:
      '<p>A collection of Amazon Web Services tags.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
  })
  .openapi('TagCollection')

const TagCollectionsSchema = z.array(TagCollectionSchema).openapi('TagCollections')

const ResourceCollectionSchema = z
  .object({
    CloudFormation: CloudFormationCollectionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of the names of Amazon Web Services CloudFormation stacks. The stacks define Amazon Web Services resources that DevOps Guru analyzes. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
        }),
    ).exactOptional(),
    Tags: TagCollectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services tags that are used by resources in the resource collection.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
    required: [],
  })
  .openapi('ResourceCollection')

const AnomalyLimitSchema = z.float64().openapi('AnomalyLimit')

const AnomalySourceSchema = z.string().openapi('AnomalySource')

const ResourceNameSchema = z.string().openapi('ResourceName')

const ResourceTypeSchema = z
  .string()
  .regex(/^[a-zA-Z]+[a-zA-Z0-9-_:]*$/)
  .min(1)
  .max(256)
  .openapi('ResourceType')

const AnomalySourceMetadataSchema = z
  .object({
    Source: AnomalySourceSchema.and(
      z.any().openapi({ description: 'The source of the anomaly.' }),
    ).exactOptional(),
    SourceResourceName: ResourceNameSchema.and(
      z.any().openapi({ description: "The name of the anomaly's resource." }),
    ).exactOptional(),
    SourceResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: "The anomaly's resource type." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Metadata about the detection source that generates proactive anomalies. The anomaly is detected using analysis of the metric data&#x2028; over a period of time',
    required: [],
  })
  .openapi('AnomalySourceMetadata')

const AnomalyResourceSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Web Services resource.' }),
    ).exactOptional(),
    Type: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the Amazon Web Services resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Amazon Web Services resources in which DevOps Guru detected unusual behavior that resulted in the generation of an anomaly. When DevOps Guru detects multiple related anomalies, it creates and insight with details about the anomalous behavior and suggestions about how to correct the problem.',
    required: [],
  })
  .openapi('AnomalyResource')

const AnomalyResourcesSchema = z.array(AnomalyResourceSchema).openapi('AnomalyResources')

const AnomalyDescriptionSchema = z.string().openapi('AnomalyDescription')

const ProactiveAnomalySchema = z
  .object({
    Id: AnomalyIdSchema.and(
      z.any().openapi({ description: ' The ID of a proactive anomaly. ' }),
    ).exactOptional(),
    Severity: AnomalySeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the anomaly. The severity of anomalies that generate an insight determine that insight\'s severity. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: AnomalyStatusSchema.and(
      z.any().openapi({ description: ' The status of a proactive anomaly. ' }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z.any().openapi({ description: " The time of the anomaly's most recent update. " }),
    ).exactOptional(),
    AnomalyTimeRange: AnomalyTimeRangeSchema.exactOptional(),
    AnomalyReportedTimeRange: AnomalyReportedTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed. ',
        }),
    ).exactOptional(),
    PredictionTimeRange: PredictionTimeRangeSchema.exactOptional(),
    SourceDetails: AnomalySourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. ',
        }),
    ).exactOptional(),
    AssociatedInsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the insight that contains this anomaly. An insight is composed of related anomalies. ',
        }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    Limit: AnomalyLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A threshold that was exceeded by behavior in analyzed resources. Exceeding this threshold is related to the anomalous behavior that generated this anomaly. ',
        }),
    ).exactOptional(),
    SourceMetadata: AnomalySourceMetadataSchema.and(
      z.any().openapi({ description: 'The metadata for the anomaly.' }),
    ).exactOptional(),
    AnomalyResources: AnomalyResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a resource in which DevOps Guru detected anomalous behavior.',
        }),
    ).exactOptional(),
    Description: AnomalyDescriptionSchema.and(
      z.any().openapi({ description: ' A description of the proactive anomaly. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an anomaly. This object is returned by <code>ListAnomalies</code>.',
    required: [],
  })
  .openapi('ProactiveAnomaly')

const AnomalyTypeSchema = z.enum(['CAUSAL', 'CONTEXTUAL']).openapi('AnomalyType')

const AnomalyNameSchema = z.string().openapi('AnomalyName')

const ReactiveAnomalySchema = z
  .object({
    Id: AnomalyIdSchema.and(
      z.any().openapi({ description: 'The ID of the reactive anomaly. ' }),
    ).exactOptional(),
    Severity: AnomalySeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the anomaly. The severity of anomalies that generate an insight determine that insight\'s severity. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: AnomalyStatusSchema.and(
      z.any().openapi({ description: ' The status of the anomaly. ' }),
    ).exactOptional(),
    AnomalyTimeRange: AnomalyTimeRangeSchema.exactOptional(),
    AnomalyReportedTimeRange: AnomalyReportedTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed. ',
        }),
    ).exactOptional(),
    SourceDetails: AnomalySourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. ',
        }),
    ).exactOptional(),
    AssociatedInsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the insight that contains this anomaly. An insight is composed of related anomalies. ',
        }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    Type: AnomalyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the reactive anomaly. It can be one of the following types.</p> <ul> <li> <p> <code>CAUSAL</code> - the anomaly can cause a new insight.</p> </li> <li> <p> <code>CONTEXTUAL</code> - the anomaly contains additional information about an insight or its causal anomaly.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: AnomalyNameSchema.and(
      z.any().openapi({ description: 'The name of the reactive anomaly.' }),
    ).exactOptional(),
    Description: AnomalyDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the reactive anomaly.' }),
    ).exactOptional(),
    CausalAnomalyId: AnomalyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.',
        }),
    ).exactOptional(),
    AnomalyResources: AnomalyResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>.',
    required: [],
  })
  .openapi('ReactiveAnomaly')

const DescribeAnomalyResponseSchema = z
  .object({
    ProactiveAnomaly: ProactiveAnomalySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ProactiveAnomaly</code> object that represents the requested anomaly. ',
        }),
    ).exactOptional(),
    ReactiveAnomaly: ReactiveAnomalySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ReactiveAnomaly</code> object that represents the requested anomaly. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAnomalyResponse')

const EventSourceOptInStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('EventSourceOptInStatus')

const AmazonCodeGuruProfilerIntegrationSchema = z
  .object({
    Status: EventSourceOptInStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume recommendations that are generated from Amazon CodeGuru Profiler.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Information about your account's integration with Amazon CodeGuru Profiler. This returns whether DevOps Guru is configured to consume recommendations generated from Amazon CodeGuru Profiler.",
    required: [],
  })
  .openapi('AmazonCodeGuruProfilerIntegration')

const EventSourcesConfigSchema = z
  .object({
    AmazonCodeGuruProfiler: AmazonCodeGuruProfilerIntegrationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about whether DevOps Guru is configured to consume recommendations which are generated from AWS CodeGuru Profiler.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.',
    required: [],
  })
  .openapi('EventSourcesConfig')

const DescribeEventSourcesConfigResponseSchema = z
  .object({
    EventSources: EventSourcesConfigSchema.and(
      z.any().openapi({ description: 'Lists the event sources in the configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventSourcesConfigResponse')

const InsightFeedbackOptionSchema = z
  .enum([
    'VALID_COLLECTION',
    'RECOMMENDATION_USEFUL',
    'ALERT_TOO_SENSITIVE',
    'DATA_NOISY_ANOMALY',
    'DATA_INCORRECT',
  ])
  .openapi('InsightFeedbackOption')

const InsightFeedbackSchema = z
  .object({
    Id: InsightIdSchema.and(
      z.any().openapi({ description: ' The insight feedback ID. ' }),
    ).exactOptional(),
    Feedback: InsightFeedbackOptionSchema.and(
      z.any().openapi({ description: ' The feedback provided by the customer. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about insight feedback received from a customer. ',
    required: [],
  })
  .openapi('InsightFeedback')

const DescribeFeedbackResponseSchema = z
  .object({ InsightFeedback: InsightFeedbackSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeFeedbackResponse')

const InsightNameSchema = z
  .string()
  .regex(/^[\s\S]*$/)
  .min(1)
  .max(530)
  .openapi('InsightName')

const InsightStatusSchema = z.enum(['ONGOING', 'CLOSED']).openapi('InsightStatus')

const InsightTimeRangeSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: ' The time when the behavior described in an insight started. ' }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: ' The time when the behavior described in an insight ended. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartTime'],
    description:
      ' A time ranged that specifies when the observed behavior in an insight started and ended. ',
  })
  .openapi('InsightTimeRange')

const SsmOpsItemIdSchema = z.string().regex(/^.*$/).min(1).max(100).openapi('SsmOpsItemId')

const InsightDescriptionSchema = z.string().openapi('InsightDescription')

const ProactiveInsightSchema = z
  .object({
    Id: InsightIdSchema.and(
      z.any().openapi({ description: 'The ID of the proactive insight. ' }),
    ).exactOptional(),
    Name: InsightNameSchema.and(
      z.any().openapi({ description: 'The name of the proactive insight. ' }),
    ).exactOptional(),
    Severity: InsightSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the insight. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: InsightStatusSchema.and(
      z.any().openapi({ description: 'The status of the proactive insight. ' }),
    ).exactOptional(),
    InsightTimeRange: InsightTimeRangeSchema.exactOptional(),
    PredictionTimeRange: PredictionTimeRangeSchema.exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    SsmOpsItemId: SsmOpsItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable the creation of OpstItems insights before they are created for each insight. ',
        }),
    ).exactOptional(),
    Description: InsightDescriptionSchema.and(
      z.any().openapi({ description: 'Describes the proactive insight.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a proactive insight. This object is returned by <code>ListInsights</code>.',
    required: [],
  })
  .openapi('ProactiveInsight')

const ReactiveInsightSchema = z
  .object({
    Id: InsightIdSchema.and(
      z.any().openapi({ description: ' The ID of a reactive insight. ' }),
    ).exactOptional(),
    Name: InsightNameSchema.and(
      z.any().openapi({ description: ' The name of a reactive insight. ' }),
    ).exactOptional(),
    Severity: InsightSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the insight. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: InsightStatusSchema.and(
      z.any().openapi({ description: ' The status of a reactive insight. ' }),
    ).exactOptional(),
    InsightTimeRange: InsightTimeRangeSchema.exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    SsmOpsItemId: SsmOpsItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable the creation of OpstItems insights before they are created for each insight. ',
        }),
    ).exactOptional(),
    Description: InsightDescriptionSchema.and(
      z.any().openapi({ description: 'Describes the reactive insight.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a reactive insight. This object is returned by <code>ListInsights</code>. ',
    required: [],
  })
  .openapi('ReactiveInsight')

const DescribeInsightResponseSchema = z
  .object({
    ProactiveInsight: ProactiveInsightSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ProactiveInsight</code> object that represents the requested insight. ',
        }),
    ).exactOptional(),
    ReactiveInsight: ReactiveInsightSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ReactiveInsight</code> object that represents the requested insight. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeInsightResponse')

const DescribeOrganizationHealthResponseSchema = z
  .object({
    OpenReactiveInsights: NumOpenReactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open reactive insights in your Amazon Web Services account.',
        }),
    ),
    OpenProactiveInsights: NumOpenProactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open proactive insights in your Amazon Web Services account.',
        }),
    ),
    MetricsAnalyzed: NumMetricsAnalyzedSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of metrics that have been analyzed in your organization.',
        }),
    ),
    ResourceHours: ResourceHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in the last hour. ',
        }),
    ),
  })
  .openapi({
    required: ['OpenReactiveInsights', 'OpenProactiveInsights', 'MetricsAnalyzed', 'ResourceHours'],
  })
  .openapi('DescribeOrganizationHealthResponse')

const AwsAccountIdSchema = z
  .string()
  .regex(/^\d{12}$/)
  .length(12)
  .openapi('AwsAccountId')

const OrganizationalUnitIdSchema = z
  .string()
  .regex(/^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$/)
  .max(68)
  .openapi('OrganizationalUnitId')

const DescribeOrganizationOverviewResponseSchema = z
  .object({
    ReactiveInsights: NumReactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open reactive insights in your Amazon Web Services account.',
        }),
    ),
    ProactiveInsights: NumProactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open proactive insights in your Amazon Web Services account.',
        }),
    ),
  })
  .openapi({ required: ['ReactiveInsights', 'ProactiveInsights'] })
  .openapi('DescribeOrganizationOverviewResponse')

const InsightHealthSchema = z
  .object({
    OpenProactiveInsights: NumOpenProactiveInsightsSchema.and(
      z.any().openapi({ description: ' The number of open proactive insights. ' }),
    ).exactOptional(),
    OpenReactiveInsights: NumOpenReactiveInsightsSchema.and(
      z.any().openapi({ description: ' The number of open reactive insights. ' }),
    ).exactOptional(),
    MeanTimeToRecoverInMilliseconds: MeanTimeToRecoverInMillisecondsSchema.and(
      z.any().openapi({ description: ' The Meant Time to Recover (MTTR) for the insight. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the number of open reactive and proactive insights that can be used to gauge the health of your system. ',
    required: [],
  })
  .openapi('InsightHealth')

const CloudFormationHealthSchema = z
  .object({
    StackName: StackNameSchema.and(
      z.any().openapi({ description: ' The name of the CloudFormation stack. ' }),
    ).exactOptional(),
    Insight: InsightHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the health of the Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack, including the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights. ',
        }),
    ).exactOptional(),
    AnalyzedResourceCount: AnalyzedResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services CloudFormation stack. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack. ',
    required: [],
  })
  .openapi('CloudFormationHealth')

const CloudFormationHealthsSchema = z
  .array(CloudFormationHealthSchema)
  .openapi('CloudFormationHealths')

const ServiceNameSchema = z
  .enum([
    'API_GATEWAY',
    'APPLICATION_ELB',
    'AUTO_SCALING_GROUP',
    'CLOUD_FRONT',
    'DYNAMO_DB',
    'EC2',
    'ECS',
    'EKS',
    'ELASTIC_BEANSTALK',
    'ELASTI_CACHE',
    'ELB',
    'ES',
    'KINESIS',
    'LAMBDA',
    'NAT_GATEWAY',
    'NETWORK_ELB',
    'RDS',
    'REDSHIFT',
    'ROUTE_53',
    'S3',
    'SAGE_MAKER',
    'SNS',
    'SQS',
    'STEP_FUNCTIONS',
    'SWF',
  ])
  .openapi('ServiceName')

const ServiceInsightHealthSchema = z
  .object({
    OpenProactiveInsights: NumOpenProactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of open proactive insights in the Amazon Web Services service',
        }),
    ).exactOptional(),
    OpenReactiveInsights: NumOpenReactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of open reactive insights in the Amazon Web Services service',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the number of open proactive and reactive insights in an analyzed Amazon Web Services service.',
    required: [],
  })
  .openapi('ServiceInsightHealth')

const ServiceHealthSchema = z
  .object({
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Web Services service.' }),
    ).exactOptional(),
    Insight: ServiceInsightHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the health of an Amazon Web Services service. This is a <code>ServiceInsightHealth</code> that contains the number of open proactive and reactive insights for this service.',
        }),
    ).exactOptional(),
    AnalyzedResourceCount: AnalyzedResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Number of resources that DevOps Guru is monitoring in an analyzed Amazon Web Services service. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the health of an Amazon Web Services service.',
    required: [],
  })
  .openapi('ServiceHealth')

const ServiceHealthsSchema = z.array(ServiceHealthSchema).openapi('ServiceHealths')

const AccountInsightHealthSchema = z
  .object({
    OpenProactiveInsights: NumOpenProactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open proactive insights in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    OpenReactiveInsights: NumOpenReactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open reactive insights in your Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the number of open reactive and proactive insights that can be used to gauge the health of your system. ',
    required: [],
  })
  .openapi('AccountInsightHealth')

const AccountHealthSchema = z
  .object({
    AccountId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account. ' }),
    ).exactOptional(),
    Insight: AccountInsightHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the health of the Amazon Web Services resources in your account, including the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. ',
    required: [],
  })
  .openapi('AccountHealth')

const AccountHealthsSchema = z.array(AccountHealthSchema).openapi('AccountHealths')

const UuidNextTokenSchema = z
  .string()
  .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
  .length(36)
  .openapi('UuidNextToken')

const TagHealthSchema = z
  .object({
    AppBoundaryKey: AppBoundaryKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make up your DevOps Guru application and analysis boundary.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ).exactOptional(),
    TagValue: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value in an Amazon Web Services tag.</p> <p>The tag's <i>value</i> is an optional field used to associate a string with the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair. Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>",
        }),
    ).exactOptional(),
    Insight: InsightHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the health of the Amazon Web Services resources in your account that are specified by an Amazon Web Services tag, including the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights. ',
        }),
    ).exactOptional(),
    AnalyzedResourceCount: AnalyzedResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services tag. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services tag <i>key</i>. ',
    required: [],
  })
  .openapi('TagHealth')

const TagHealthsSchema = z.array(TagHealthSchema).openapi('TagHealths')

const DescribeOrganizationResourceCollectionHealthResponseSchema = z
  .object({
    CloudFormation: CloudFormationHealthsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The returned <code>CloudFormationHealthOverview</code> object that contains an <code>InsightHealthOverview</code> object with the requested system health information.',
        }),
    ).exactOptional(),
    Service: ServiceHealthsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ServiceHealth</code> objects that describes the health of the Amazon Web Services services associated with the resources in the collection.',
        }),
    ).exactOptional(),
    Account: AccountHealthsSchema.and(
      z.any().openapi({ description: "The name of the organization's account." }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
    Tags: TagHealthsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationResourceCollectionHealthResponse')

const DescribeResourceCollectionHealthResponseSchema = z
  .object({
    CloudFormation: CloudFormationHealthsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned <code>CloudFormationHealthOverview</code> object that contains an <code>InsightHealthOverview</code> object with the requested system health information. ',
        }),
    ).exactOptional(),
    Service: ServiceHealthsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ServiceHealth</code> objects that describes the health of the Amazon Web Services services associated with the resources in the collection.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
    Tags: TagHealthsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services tags that are used by resources in the resource collection.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourceCollectionHealthResponse')

const OptInStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      ' Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight. ',
  })
  .openapi('OptInStatus')

const OpsCenterIntegrationSchema = z
  .object({
    OptInStatus: OptInStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. ',
    required: [],
  })
  .openapi('OpsCenterIntegration')

const LogsAnomalyDetectionIntegrationSchema = z
  .object({
    OptInStatus: OptInStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection. ',
    required: [],
  })
  .openapi('LogsAnomalyDetectionIntegration')

const ServiceIntegrationConfigSchema = z
  .object({
    OpsCenter: OpsCenterIntegrationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. ',
        }),
    ).exactOptional(),
    LogsAnomalyDetection: LogsAnomalyDetectionIntegrationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager. ',
    required: [],
  })
  .openapi('ServiceIntegrationConfig')

const DescribeServiceIntegrationResponseSchema = z
  .object({ ServiceIntegration: ServiceIntegrationConfigSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeServiceIntegrationResponse')

const CostEstimationResourceCollectionFilterSchema: z.ZodType<CostEstimationResourceCollectionFilterType> =
  z
    .lazy(() =>
      z
        .object({
          CloudFormation: CloudFormationCostEstimationResourceCollectionFilterSchema.and(
            z
              .any()
              .openapi({
                description:
                  'An object that specifies the CloudFormation stack that defines the Amazon Web Services resources used to create a monthly estimate for DevOps Guru.',
              }),
          ).exactOptional(),
          Tags: TagCostEstimationResourceCollectionFiltersSchema.and(
            z
              .any()
              .openapi({
                description:
                  '<p>The Amazon Web Services tags used to filter the resource collection that is used for a cost estimate.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
              }),
          ).exactOptional(),
        })
        .openapi({
          description:
            'Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. ',
          required: [],
        }),
    )
    .openapi('CostEstimationResourceCollectionFilter')

const CostEstimationStatusSchema = z.enum(['ONGOING', 'COMPLETED']).openapi('CostEstimationStatus')

const CostEstimationServiceResourceStateSchema = z
  .enum(['ACTIVE', 'INACTIVE'])
  .openapi('CostEstimationServiceResourceState')

const CostEstimationServiceResourceCountSchema = z
  .int()
  .openapi('CostEstimationServiceResourceCount')

const CostSchema = z.float64().openapi('Cost')

const ServiceResourceCostSchema = z
  .object({
    Type: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the Amazon Web Services resource.' }),
    ).exactOptional(),
    State: CostEstimationServiceResourceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the resource. The resource is <code>ACTIVE</code> if it produces metrics, events, or logs within an hour, otherwise it is <code>INACTIVE</code>. You pay for the number of active Amazon Web Services resource hours analyzed for each resource. Inactive resources are not charged. ',
        }),
    ).exactOptional(),
    Count: CostEstimationServiceResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of active resources analyzed for this service to create a monthly cost estimate.',
        }),
    ).exactOptional(),
    UnitCost: CostSchema.and(
      z
        .any()
        .openapi({
          description:
            'The price per hour to analyze the resources in the service. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.',
        }),
    ).exactOptional(),
    Cost: CostSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total estimated monthly cost to analyze the active resources for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the estimated monthly cost to analyze an Amazon Web Services resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.',
    required: [],
  })
  .openapi('ServiceResourceCost')

const ServiceResourceCostsSchema = z
  .array(ServiceResourceCostSchema)
  .openapi('ServiceResourceCosts')

const CostEstimationTimeRangeSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of the cost estimation.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The end time of the cost estimation.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The time range of a cost estimation.', required: [] })
  .openapi('CostEstimationTimeRange')

const GetCostEstimationResponseSchema = z
  .object({
    ResourceCollection: CostEstimationResourceCollectionFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of the Amazon Web Services resources used to create your monthly DevOps Guru cost estimate.',
        }),
    ).exactOptional(),
    Status: CostEstimationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of creating this cost estimate. If it's still in progress, the status <code>ONGOING</code> is returned. If it is finished, the status <code>COMPLETED</code> is returned.",
        }),
    ).exactOptional(),
    Costs: ServiceResourceCostsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ResourceCost</code> objects that each contains details about the monthly cost estimate to analyze one of your Amazon Web Services resources.',
        }),
    ).exactOptional(),
    TimeRange: CostEstimationTimeRangeSchema.and(
      z.any().openapi({ description: 'The start and end time of the cost estimation.' }),
    ).exactOptional(),
    TotalCost: CostSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated monthly cost to analyze the Amazon Web Services resources. This value is the sum of the estimated costs to analyze each resource in the <code>Costs</code> object in this response.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCostEstimationResponse')

const CloudFormationCollectionFilterSchema = z
  .object({
    StackNames: StackNamesSchema.and(
      z.any().openapi({ description: ' An array of CloudFormation stack names. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>. ',
    required: [],
  })
  .openapi('CloudFormationCollectionFilter')

const TagCollectionFilterSchema = z
  .object({
    AppBoundaryKey: AppBoundaryKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make up your DevOps Guru application and analysis boundary.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ),
    TagValues: TagValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The values in an Amazon Web Services tag collection.</p> <p>The tag's <i>value</i> is an optional field used to associate a string with the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair. Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>",
        }),
    ),
  })
  .openapi({
    required: ['AppBoundaryKey', 'TagValues'],
    description:
      'A collection of Amazon Web Services tags used to filter insights. This is used to return insights generated from only resources that contain the tags in the tag collection.',
  })
  .openapi('TagCollectionFilter')

const TagCollectionFiltersSchema = z
  .array(TagCollectionFilterSchema)
  .openapi('TagCollectionFilters')

const ResourceCollectionFilterSchema = z
  .object({
    CloudFormation: CloudFormationCollectionFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>. ',
        }),
    ).exactOptional(),
    Tags: TagCollectionFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services tags used to filter the resources in the resource collection.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a filter used to specify which Amazon Web Services resources are analyzed for anomalous behavior by DevOps Guru. ',
    required: [],
  })
  .openapi('ResourceCollectionFilter')

const GetResourceCollectionResponseSchema = z
  .object({
    ResourceCollection: ResourceCollectionFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The requested list of Amazon Web Services resource collections. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceCollectionResponse')

const ProactiveAnomalySummarySchema = z
  .object({
    Id: AnomalyIdSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly.' }),
    ).exactOptional(),
    Severity: AnomalySeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the anomaly. The severity of anomalies that generate an insight determine that insight\'s severity. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: AnomalyStatusSchema.and(
      z.any().openapi({ description: 'The status of the anomaly.' }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z.any().openapi({ description: " The time of the anomaly's most recent update. " }),
    ).exactOptional(),
    AnomalyTimeRange: AnomalyTimeRangeSchema.exactOptional(),
    AnomalyReportedTimeRange: AnomalyReportedTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed. ',
        }),
    ).exactOptional(),
    PredictionTimeRange: PredictionTimeRangeSchema.exactOptional(),
    SourceDetails: AnomalySourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. ',
        }),
    ).exactOptional(),
    AssociatedInsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the insight that contains this anomaly. An insight is composed of related anomalies. ',
        }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    Limit: AnomalyLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A threshold that was exceeded by behavior in analyzed resources. Exceeding this threshold is related to the anomalous behavior that generated this anomaly. ',
        }),
    ).exactOptional(),
    SourceMetadata: AnomalySourceMetadataSchema.and(
      z
        .any()
        .openapi({ description: 'The metadata of the source which detects proactive anomalies.' }),
    ).exactOptional(),
    AnomalyResources: AnomalyResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a resource in which DevOps Guru detected anomalous behavior.',
        }),
    ).exactOptional(),
    Description: AnomalyDescriptionSchema.and(
      z.any().openapi({ description: ' A description of the proactive anomaly. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code> ',
    required: [],
  })
  .openapi('ProactiveAnomalySummary')

const ProactiveAnomaliesSchema = z
  .array(ProactiveAnomalySummarySchema)
  .openapi('ProactiveAnomalies')

const ReactiveAnomalySummarySchema = z
  .object({
    Id: AnomalyIdSchema.and(
      z.any().openapi({ description: ' The ID of the reactive anomaly. ' }),
    ).exactOptional(),
    Severity: AnomalySeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the anomaly. The severity of anomalies that generate an insight determine that insight\'s severity. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: AnomalyStatusSchema.and(
      z.any().openapi({ description: ' The status of the reactive anomaly. ' }),
    ).exactOptional(),
    AnomalyTimeRange: AnomalyTimeRangeSchema.exactOptional(),
    AnomalyReportedTimeRange: AnomalyReportedTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed. ',
        }),
    ).exactOptional(),
    SourceDetails: AnomalySourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. ',
        }),
    ).exactOptional(),
    AssociatedInsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the insight that contains this anomaly. An insight is composed of related anomalies. ',
        }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    Type: AnomalyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the reactive anomaly. It can be one of the following types.</p> <ul> <li> <p> <code>CAUSAL</code> - the anomaly can cause a new insight.</p> </li> <li> <p> <code>CONTEXTUAL</code> - the anomaly contains additional information about an insight or its causal anomaly.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: AnomalyNameSchema.and(
      z.any().openapi({ description: 'The name of the reactive anomaly.' }),
    ).exactOptional(),
    Description: AnomalyDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the reactive anomaly.' }),
    ).exactOptional(),
    CausalAnomalyId: AnomalyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.',
        }),
    ).exactOptional(),
    AnomalyResources: AnomalyResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code> ',
    required: [],
  })
  .openapi('ReactiveAnomalySummary')

const ReactiveAnomaliesSchema = z.array(ReactiveAnomalySummarySchema).openapi('ReactiveAnomalies')

const ListAnomaliesForInsightResponseSchema = z
  .object({
    ProactiveAnomalies: ProactiveAnomaliesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>ProactiveAnomalySummary</code> objects that represent the requested anomalies ',
        }),
    ).exactOptional(),
    ReactiveAnomalies: ReactiveAnomaliesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>ReactiveAnomalySummary</code> objects that represent the requested anomalies ',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAnomaliesForInsightResponse')

const ServiceNamesSchema = z.array(ServiceNameSchema).openapi('ServiceNames')

const ServiceCollectionSchema = z
  .object({
    ServiceNames: ServiceNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that each specifies the name of an Amazon Web Services service.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of the names of Amazon Web Services services.',
    required: [],
  })
  .openapi('ServiceCollection')

const LogGroupNameSchema = z.string().min(1).max(512).openapi('LogGroupName')

const NumberOfLogLinesScannedSchema = z.int().openapi('NumberOfLogLinesScanned')

const LogStreamNameSchema = z.string().min(1).max(512).openapi('LogStreamName')

const LogAnomalyTypeSchema = z
  .enum([
    'KEYWORD',
    'KEYWORD_TOKEN',
    'FORMAT',
    'HTTP_CODE',
    'BLOCK_FORMAT',
    'NUMERICAL_POINT',
    'NUMERICAL_NAN',
    'NEW_FIELD_NAME',
  ])
  .openapi('LogAnomalyType')

const LogAnomalyTokenSchema = z.string().min(1).max(2048).openapi('LogAnomalyToken')

const LogEventIdSchema = z.string().min(1).max(512).openapi('LogEventId')

const ExplanationSchema = z.string().min(1).max(2048).openapi('Explanation')

const NumberOfLogLinesOccurrencesSchema = z.int().openapi('NumberOfLogLinesOccurrences')

const LogAnomalyClassSchema = z
  .object({
    LogStreamName: LogStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the Amazon CloudWatch log stream that the anomalous log event belongs to. A log stream is a sequence of log events that share the same source. ',
        }),
    ).exactOptional(),
    LogAnomalyType: LogAnomalyTypeSchema.and(
      z.any().openapi({ description: ' The type of log anomaly that has been detected. ' }),
    ).exactOptional(),
    LogAnomalyToken: LogAnomalyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token where the anomaly was detected. This may refer to an exception or another location, or it may be blank for log anomalies such as format anomalies. ',
        }),
    ).exactOptional(),
    LogEventId: LogEventIdSchema.and(
      z.any().openapi({ description: ' The ID of the log event. ' }),
    ).exactOptional(),
    Explanation: ExplanationSchema.and(
      z
        .any()
        .openapi({
          description: ' The explanation for why the log event is considered an anomaly. ',
        }),
    ).exactOptional(),
    NumberOfLogLinesOccurrences: NumberOfLogLinesOccurrencesSchema.and(
      z
        .any()
        .openapi({
          description: ' The number of log lines where this anomalous log event occurs. ',
        }),
    ).exactOptional(),
    LogEventTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: ' The time of the first occurrence of the anomalous log event. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about an anomalous log event found within a log group. ',
    required: [],
  })
  .openapi('LogAnomalyClass')

const LogAnomalyClassesSchema = z
  .array(LogAnomalyClassSchema)
  .min(0)
  .max(10)
  .openapi('LogAnomalyClasses')

const LogAnomalyShowcaseSchema = z
  .object({
    LogAnomalyClasses: LogAnomalyClassesSchema.and(
      z.any().openapi({ description: ' A list of anomalous log events that may be related. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' A cluster of similar anomalous log events found within a log group. ',
    required: [],
  })
  .openapi('LogAnomalyShowcase')

const LogAnomalyShowcasesSchema = z
  .array(LogAnomalyShowcaseSchema)
  .min(0)
  .max(20)
  .openapi('LogAnomalyShowcases')

const AnomalousLogGroupSchema = z
  .object({
    LogGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: ' The name of the CloudWatch log group. ' }),
    ).exactOptional(),
    ImpactStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time the anomalous log events began. The impact start time indicates the time of the first log anomaly event that occurs. ',
        }),
    ).exactOptional(),
    ImpactEndTime: TimestampSchema.and(
      z.any().openapi({ description: ' The time the anomalous log events stopped. ' }),
    ).exactOptional(),
    NumberOfLogLinesScanned: NumberOfLogLinesScannedSchema.and(
      z
        .any()
        .openapi({
          description: ' The number of log lines that were scanned for anomalous log events. ',
        }),
    ).exactOptional(),
    LogAnomalyShowcases: LogAnomalyShowcasesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The log anomalies in the log group. Each log anomaly displayed represents a cluster of similar anomalous log events. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' An Amazon CloudWatch log group that contains log anomalies and is used to generate an insight. ',
    required: [],
  })
  .openapi('AnomalousLogGroup')

const AnomalousLogGroupsSchema = z.array(AnomalousLogGroupSchema).openapi('AnomalousLogGroups')

const ListAnomalousLogGroupsResponseSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z.any().openapi({ description: ' The ID of the insight containing the log groups. ' }),
    ),
    AnomalousLogGroups: AnomalousLogGroupsSchema.and(
      z
        .any()
        .openapi({
          description: ' The list of Amazon CloudWatch log groups that are related to an insight. ',
        }),
    ),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InsightId', 'AnomalousLogGroups'] })
  .openapi('ListAnomalousLogGroupsResponse')

const EventIdSchema = z.string().openapi('EventId')

const EventSourceSchema = z
  .string()
  .regex(/^[a-z]+[a-z0-9]*\.amazonaws\.com|aws\.events$/)
  .min(10)
  .max(50)
  .openapi('EventSource')

const EventNameSchema = z.string().min(0).max(50).openapi('EventName')

const EventDataSourceSchema = z
  .enum(['AWS_CLOUD_TRAIL', 'AWS_CODE_DEPLOY'])
  .openapi('EventDataSource')

const EventClassSchema = z
  .enum(['INFRASTRUCTURE', 'DEPLOYMENT', 'SECURITY_CHANGE', 'CONFIG_CHANGE', 'SCHEMA_CHANGE'])
  .openapi('EventClass')

const EventResourceTypeSchema = z
  .string()
  .regex(/^.*$/)
  .min(0)
  .max(2048)
  .openapi('EventResourceType')

const EventResourceNameSchema = z
  .string()
  .regex(/^.*$/)
  .min(0)
  .max(2048)
  .openapi('EventResourceName')

const EventResourceArnSchema = z
  .string()
  .regex(/^arn:aws[-a-z]*:[a-z0-9-]*:[a-z0-9-]*:\d{12}:.*$/)
  .min(36)
  .max(2048)
  .openapi('EventResourceArn')

const EventResourceSchema = z
  .object({
    Type: EventResourceTypeSchema.and(
      z.any().openapi({ description: ' The type of resource that emitted an event. ' }),
    ).exactOptional(),
    Name: EventResourceNameSchema.and(
      z.any().openapi({ description: ' The name of the resource that emitted an event. ' }),
    ).exactOptional(),
    Arn: EventResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the resource that emitted an event. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The Amazon Web Services resource that emitted an event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. ',
    required: [],
  })
  .openapi('EventResource')

const EventResourcesSchema = z.array(EventResourceSchema).openapi('EventResources')

const EventSchema = z
  .object({
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    Id: EventIdSchema.and(
      z.any().openapi({ description: ' The ID of the event. ' }),
    ).exactOptional(),
    Time: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: ' A <code>Timestamp</code> that specifies the time the event occurred. ',
        }),
    ).exactOptional(),
    EventSource: EventSourceSchema.and(
      z.any().openapi({ description: ' The Amazon Web Services source that emitted the event. ' }),
    ).exactOptional(),
    Name: EventNameSchema.and(
      z.any().openapi({ description: ' The name of the event. ' }),
    ).exactOptional(),
    DataSource: EventDataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, where DevOps Guru analysis found the event. ',
        }),
    ).exactOptional(),
    EventClass: EventClassSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The class of the event. The class specifies what the event is related to, such as an infrastructure change, a deployment, or a schema change. ',
        }),
    ).exactOptional(),
    Resources: EventResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <code>EventResource</code> object that contains information about the resource that emitted the event. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. ',
    required: [],
  })
  .openapi('Event')

const EventsSchema = z.array(EventSchema).openapi('Events')

const ListEventsResponseSchema = z
  .object({
    Events: EventsSchema.and(z.any().openapi({ description: ' A list of the requested events. ' })),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Events'] })
  .openapi('ListEventsResponse')

const EventTimeRangeSchema = z
  .object({
    FromTime: TimestampSchema.and(
      z.any().openapi({ description: ' The time when the event started. ' }),
    ),
    ToTime: TimestampSchema.and(
      z.any().openapi({ description: ' The time when the event ended. ' }),
    ),
  })
  .openapi({
    required: ['FromTime', 'ToTime'],
    description:
      ' The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. ',
  })
  .openapi('EventTimeRange')

const ResourceArnSchema = z.string().min(20).max(2048).openapi('ResourceArn')

const AssociatedResourceArnsSchema = z.array(ResourceArnSchema).openapi('AssociatedResourceArns')

const ProactiveInsightSummarySchema = z
  .object({
    Id: InsightIdSchema.and(
      z.any().openapi({ description: 'The ID of the proactive insight. ' }),
    ).exactOptional(),
    Name: InsightNameSchema.and(
      z.any().openapi({ description: 'The name of the proactive insight. ' }),
    ).exactOptional(),
    Severity: InsightSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the insight. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: InsightStatusSchema.and(
      z.any().openapi({ description: 'The status of the proactive insight. ' }),
    ).exactOptional(),
    InsightTimeRange: InsightTimeRangeSchema.exactOptional(),
    PredictionTimeRange: PredictionTimeRangeSchema.exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    ServiceCollection: ServiceCollectionSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of the names of Amazon Web Services services.' }),
    ).exactOptional(),
    AssociatedResourceArns: AssociatedResourceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a proactive insight. This object is returned by <code>DescribeInsight.</code> ',
    required: [],
  })
  .openapi('ProactiveInsightSummary')

const ProactiveInsightsSchema = z.array(ProactiveInsightSummarySchema).openapi('ProactiveInsights')

const ReactiveInsightSummarySchema = z
  .object({
    Id: InsightIdSchema.and(
      z.any().openapi({ description: ' The ID of a reactive summary. ' }),
    ).exactOptional(),
    Name: InsightNameSchema.and(
      z.any().openapi({ description: ' The name of a reactive insight. ' }),
    ).exactOptional(),
    Severity: InsightSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity of the insight. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: InsightStatusSchema.and(
      z.any().openapi({ description: ' The status of a reactive insight. ' }),
    ).exactOptional(),
    InsightTimeRange: InsightTimeRangeSchema.exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    ServiceCollection: ServiceCollectionSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of the names of Amazon Web Services services.' }),
    ).exactOptional(),
    AssociatedResourceArns: AssociatedResourceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a reactive insight. This object is returned by <code>DescribeInsight.</code> ',
    required: [],
  })
  .openapi('ReactiveInsightSummary')

const ReactiveInsightsSchema = z.array(ReactiveInsightSummarySchema).openapi('ReactiveInsights')

const ListInsightsResponseSchema = z
  .object({
    ProactiveInsights: ProactiveInsightsSchema.and(
      z.any().openapi({ description: ' The returned list of proactive insights. ' }),
    ).exactOptional(),
    ReactiveInsights: ReactiveInsightsSchema.and(
      z.any().openapi({ description: ' The returned list of reactive insights. ' }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInsightsResponse')

const InsightTypeSchema = z.enum(['REACTIVE', 'PROACTIVE']).openapi('InsightType')

const ListInsightsOngoingStatusFilterSchema = z
  .object({
    Type: InsightTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights. ',
        }),
    ),
  })
  .openapi({
    required: ['Type'],
    description: ' Used to filter for insights that have the status <code>ONGOING</code>. ',
  })
  .openapi('ListInsightsOngoingStatusFilter')

const EndTimeRangeSchema = z
  .object({
    FromTime: TimestampSchema.and(
      z.any().openapi({ description: ' The earliest end time in the time range. ' }),
    ).exactOptional(),
    ToTime: TimestampSchema.and(
      z.any().openapi({ description: ' The latest end time in the time range. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A range of time that specifies when anomalous behavior in an anomaly or insight ended. ',
    required: [],
  })
  .openapi('EndTimeRange')

const ListInsightsClosedStatusFilterSchema = z
  .object({
    Type: InsightTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights. ',
        }),
    ),
    EndTimeRange: EndTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A time range used to specify when the behavior of the filtered insights ended. ',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'EndTimeRange'],
    description: ' Used to filter for insights that have the status <code>CLOSED</code>. ',
  })
  .openapi('ListInsightsClosedStatusFilter')

const StartTimeRangeSchema = z
  .object({
    FromTime: TimestampSchema.and(
      z.any().openapi({ description: ' The start time of the time range. ' }),
    ).exactOptional(),
    ToTime: TimestampSchema.and(
      z.any().openapi({ description: ' The end time of the time range. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A time range used to specify when the behavior of an insight or anomaly started. ',
    required: [],
  })
  .openapi('StartTimeRange')

const ListInsightsAnyStatusFilterSchema = z
  .object({
    Type: InsightTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights. ',
        }),
    ),
    StartTimeRange: StartTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A time range used to specify when the behavior of the filtered insights started. ',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'StartTimeRange'],
    description: ' Used to filter for insights that have any status. ',
  })
  .openapi('ListInsightsAnyStatusFilter')

const MonitoredResourceNameSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9]+/)
  .min(1)
  .max(512)
  .openapi('MonitoredResourceName')

const ResourcePermissionSchema = z
  .enum(['FULL_PERMISSION', 'MISSING_PERMISSION'])
  .openapi('ResourcePermission')

const MonitoredResourceIdentifierSchema = z
  .object({
    MonitoredResourceName: MonitoredResourceNameSchema.and(
      z.any().openapi({ description: ' The name of the resource being monitored. ' }),
    ).exactOptional(),
    Type: ResourceTypeSchema.and(
      z.any().openapi({ description: ' The type of resource being monitored. ' }),
    ).exactOptional(),
    ResourcePermission: ResourcePermissionSchema.and(
      z.any().openapi({ description: ' The permission status of a resource. ' }),
    ).exactOptional(),
    LastUpdated: TimestampSchema.and(
      z
        .any()
        .openapi({ description: ' The time at which DevOps Guru last updated this resource. ' }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource. ',
    required: [],
  })
  .openapi('MonitoredResourceIdentifier')

const MonitoredResourceIdentifiersSchema = z
  .array(MonitoredResourceIdentifierSchema)
  .openapi('MonitoredResourceIdentifiers')

const ListMonitoredResourcesResponseSchema = z
  .object({
    MonitoredResourceIdentifiers: MonitoredResourceIdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource. ',
        }),
    ),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MonitoredResourceIdentifiers'] })
  .openapi('ListMonitoredResourcesResponse')

const ResourceTypeFilterSchema = z
  .enum([
    'LOG_GROUPS',
    'CLOUDFRONT_DISTRIBUTION',
    'DYNAMODB_TABLE',
    'EC2_NAT_GATEWAY',
    'ECS_CLUSTER',
    'ECS_SERVICE',
    'EKS_CLUSTER',
    'ELASTIC_BEANSTALK_ENVIRONMENT',
    'ELASTIC_LOAD_BALANCER_LOAD_BALANCER',
    'ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER',
    'ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP',
    'ELASTICACHE_CACHE_CLUSTER',
    'ELASTICSEARCH_DOMAIN',
    'KINESIS_STREAM',
    'LAMBDA_FUNCTION',
    'OPEN_SEARCH_SERVICE_DOMAIN',
    'RDS_DB_INSTANCE',
    'RDS_DB_CLUSTER',
    'REDSHIFT_CLUSTER',
    'ROUTE53_HOSTED_ZONE',
    'ROUTE53_HEALTH_CHECK',
    'S3_BUCKET',
    'SAGEMAKER_ENDPOINT',
    'SNS_TOPIC',
    'SQS_QUEUE',
    'STEP_FUNCTIONS_ACTIVITY',
    'STEP_FUNCTIONS_STATE_MACHINE',
  ])
  .openapi('ResourceTypeFilter')

const ResourceTypeFiltersSchema = z.array(ResourceTypeFilterSchema).openapi('ResourceTypeFilters')

const NotificationChannelConfigSchema = z
  .object({
    Sns: SnsChannelConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Information about a notification channel configured in DevOps Guru to send notifications when insights are created. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>',
        }),
    ),
    Filters: NotificationFilterConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. If you do not provide filter configurations, the default configurations are to receive notifications for all message types of <code>High</code> or <code>Medium</code> severity. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Sns'],
    description:
      ' Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).',
  })
  .openapi('NotificationChannelConfig')

const NotificationChannelSchema = z
  .object({
    Id: NotificationChannelIdSchema.and(
      z.any().openapi({ description: ' The ID of a notification channel. ' }),
    ).exactOptional(),
    Config: NotificationChannelConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>NotificationChannelConfig</code> object that contains information about configured notification channels. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>',
    required: [],
  })
  .openapi('NotificationChannel')

const ChannelsSchema = z.array(NotificationChannelSchema).openapi('Channels')

const ListNotificationChannelsResponseSchema = z
  .object({
    Channels: ChannelsSchema.and(
      z
        .any()
        .openapi({ description: ' An array that contains the requested notification channels. ' }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNotificationChannelsResponse')

const ProactiveOrganizationInsightSummarySchema = z
  .object({
    Id: InsightIdSchema.and(
      z.any().openapi({ description: 'The ID of the insight summary.' }),
    ).exactOptional(),
    AccountId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account.' }),
    ).exactOptional(),
    OrganizationalUnitId: OrganizationalUnitIdSchema.and(
      z.any().openapi({ description: 'The ID of the organizational unit.' }),
    ).exactOptional(),
    Name: InsightNameSchema.and(
      z.any().openapi({ description: 'The name of the insight summary.' }),
    ).exactOptional(),
    Severity: InsightSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of severity values used to search for insights. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: InsightStatusSchema.and(
      z.any().openapi({ description: ' An array of status values used to search for insights. ' }),
    ).exactOptional(),
    InsightTimeRange: InsightTimeRangeSchema.exactOptional(),
    PredictionTimeRange: PredictionTimeRangeSchema.exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    ServiceCollection: ServiceCollectionSchema.exactOptional(),
  })
  .openapi({
    description:
      'Details about a proactive insight. This object is returned by <code>DescribeInsight</code>.',
    required: [],
  })
  .openapi('ProactiveOrganizationInsightSummary')

const ProactiveOrganizationInsightsSchema = z
  .array(ProactiveOrganizationInsightSummarySchema)
  .openapi('ProactiveOrganizationInsights')

const ReactiveOrganizationInsightSummarySchema = z
  .object({
    Id: InsightIdSchema.and(
      z.any().openapi({ description: 'The ID of the insight summary.' }),
    ).exactOptional(),
    AccountId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account. ' }),
    ).exactOptional(),
    OrganizationalUnitId: OrganizationalUnitIdSchema.and(
      z.any().openapi({ description: 'The ID of the organizational unit.' }),
    ).exactOptional(),
    Name: InsightNameSchema.and(
      z.any().openapi({ description: 'The name of the insight summary.' }),
    ).exactOptional(),
    Severity: InsightSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of severity values used to search for insights. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.',
        }),
    ).exactOptional(),
    Status: InsightStatusSchema.and(
      z.any().openapi({ description: ' An array of status values used to search for insights. ' }),
    ).exactOptional(),
    InsightTimeRange: InsightTimeRangeSchema.exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    ServiceCollection: ServiceCollectionSchema.exactOptional(),
  })
  .openapi({
    description:
      'Information about a reactive insight. This object is returned by <code>DescribeInsight</code>.',
    required: [],
  })
  .openapi('ReactiveOrganizationInsightSummary')

const ReactiveOrganizationInsightsSchema = z
  .array(ReactiveOrganizationInsightSummarySchema)
  .openapi('ReactiveOrganizationInsights')

const ListOrganizationInsightsResponseSchema = z
  .object({
    ProactiveInsights: ProactiveOrganizationInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open proactive insights in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    ReactiveInsights: ReactiveOrganizationInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open reactive insights in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationInsightsResponse')

const RecommendationDescriptionSchema = z.string().openapi('RecommendationDescription')

const RecommendationLinkSchema = z.string().openapi('RecommendationLink')

const RecommendationNameSchema = z.string().openapi('RecommendationName')

const RecommendationReasonSchema = z.string().openapi('RecommendationReason')

const RecommendationRelatedEventNameSchema = z.string().openapi('RecommendationRelatedEventName')

const RecommendationRelatedEventResourceNameSchema = z
  .string()
  .openapi('RecommendationRelatedEventResourceName')

const RecommendationRelatedEventResourceTypeSchema = z
  .string()
  .openapi('RecommendationRelatedEventResourceType')

const RecommendationRelatedEventResourceSchema = z
  .object({
    Name: RecommendationRelatedEventResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the resource that emitted the event. This corresponds to the <code>Name</code> field in an <code>EventResource</code> object. ',
        }),
    ).exactOptional(),
    Type: RecommendationRelatedEventResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of the resource that emitted the event. This corresponds to the <code>Type</code> field in an <code>EventResource</code> object. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about an Amazon Web Services resource that emitted and event that is related to a recommendation in an insight. ',
    required: [],
  })
  .openapi('RecommendationRelatedEventResource')

const RecommendationRelatedEventResourcesSchema = z
  .array(RecommendationRelatedEventResourceSchema)
  .openapi('RecommendationRelatedEventResources')

const RecommendationRelatedEventSchema = z
  .object({
    Name: RecommendationRelatedEventNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the event. This corresponds to the <code>Name</code> field in an <code>Event</code> object. ',
        }),
    ).exactOptional(),
    Resources: RecommendationRelatedEventResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ResourceCollection</code> object that contains arrays of the names of Amazon Web Services CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about an event that is related to a recommendation. ',
    required: [],
  })
  .openapi('RecommendationRelatedEvent')

const RecommendationRelatedEventsSchema = z
  .array(RecommendationRelatedEventSchema)
  .openapi('RecommendationRelatedEvents')

const RecommendationRelatedAnomalyResourceNameSchema = z
  .string()
  .openapi('RecommendationRelatedAnomalyResourceName')

const RecommendationRelatedAnomalyResourceTypeSchema = z
  .string()
  .openapi('RecommendationRelatedAnomalyResourceType')

const RecommendationRelatedAnomalyResourceSchema = z
  .object({
    Name: RecommendationRelatedAnomalyResourceNameSchema.and(
      z.any().openapi({ description: ' The name of the resource. ' }),
    ).exactOptional(),
    Type: RecommendationRelatedAnomalyResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of the resource. Resource types take the same form that is used by Amazon Web Services CloudFormation resource type identifiers, <code>service-provider::service-name::data-type-name</code>. For example, <code>AWS::RDS::DBCluster</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about a resource in which DevOps Guru detected anomalous behavior. ',
    required: [],
  })
  .openapi('RecommendationRelatedAnomalyResource')

const RecommendationRelatedAnomalyResourcesSchema = z
  .array(RecommendationRelatedAnomalyResourceSchema)
  .openapi('RecommendationRelatedAnomalyResources')

const RecommendationRelatedCloudWatchMetricsSourceMetricNameSchema = z
  .string()
  .openapi('RecommendationRelatedCloudWatchMetricsSourceMetricName')

const RecommendationRelatedCloudWatchMetricsSourceNamespaceSchema = z
  .string()
  .openapi('RecommendationRelatedCloudWatchMetricsSourceNamespace')

const RecommendationRelatedCloudWatchMetricsSourceDetailSchema = z
  .object({
    MetricName: RecommendationRelatedCloudWatchMetricsSourceMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the CloudWatch metric.' }),
    ).exactOptional(),
    Namespace: RecommendationRelatedCloudWatchMetricsSourceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights. ',
    required: [],
  })
  .openapi('RecommendationRelatedCloudWatchMetricsSourceDetail')

const RecommendationRelatedCloudWatchMetricsSourceDetailsSchema = z
  .array(RecommendationRelatedCloudWatchMetricsSourceDetailSchema)
  .openapi('RecommendationRelatedCloudWatchMetricsSourceDetails')

const RecommendationRelatedAnomalySourceDetailSchema = z
  .object({
    CloudWatchMetrics: RecommendationRelatedCloudWatchMetricsSourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>CloudWatchMetricsDetail</code> objects that contains information about the analyzed metrics that displayed anomalous behavior. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric. ',
    required: [],
  })
  .openapi('RecommendationRelatedAnomalySourceDetail')

const RelatedAnomalySourceDetailsSchema = z
  .array(RecommendationRelatedAnomalySourceDetailSchema)
  .openapi('RelatedAnomalySourceDetails')

const RecommendationRelatedAnomalySchema = z
  .object({
    Resources: RecommendationRelatedAnomalyResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of objects that represent resources in which DevOps Guru detected anomalous behavior. Each object contains the name and type of the resource. ',
        }),
    ).exactOptional(),
    SourceDetails: RelatedAnomalySourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about where the anomalous behavior related the recommendation was found. For example, details in Amazon CloudWatch metrics. ',
        }),
    ).exactOptional(),
    AnomalyId: AnomalyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of an anomaly that generated the insight with this recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about an anomaly that is related to a recommendation. ',
    required: [],
  })
  .openapi('RecommendationRelatedAnomaly')

const RecommendationRelatedAnomaliesSchema = z
  .array(RecommendationRelatedAnomalySchema)
  .openapi('RecommendationRelatedAnomalies')

const RecommendationCategorySchema = z.string().openapi('RecommendationCategory')

const RecommendationSchema = z
  .object({
    Description: RecommendationDescriptionSchema.and(
      z.any().openapi({ description: ' A description of the problem. ' }),
    ).exactOptional(),
    Link: RecommendationLinkSchema.and(
      z
        .any()
        .openapi({ description: ' A hyperlink to information to help you address the problem. ' }),
    ).exactOptional(),
    Name: RecommendationNameSchema.and(
      z.any().openapi({ description: ' The name of the recommendation. ' }),
    ).exactOptional(),
    Reason: RecommendationReasonSchema.and(
      z
        .any()
        .openapi({
          description: ' The reason DevOps Guru flagged the anomalous behavior as a problem. ',
        }),
    ).exactOptional(),
    RelatedEvents: RecommendationRelatedEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            " Events that are related to the problem. Use these events to learn more about what's happening and to help address the issue. ",
        }),
    ).exactOptional(),
    RelatedAnomalies: RecommendationRelatedAnomaliesSchema.and(
      z
        .any()
        .openapi({
          description:
            " Anomalies that are related to the problem. Use these Anomalies to learn more about what's happening and to help address the issue. ",
        }),
    ).exactOptional(),
    Category: RecommendationCategorySchema.and(
      z.any().openapi({ description: 'The category type of the recommendation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Recommendation information to help you remediate detected anomalous behavior that generated an insight. ',
    required: [],
  })
  .openapi('Recommendation')

const RecommendationsSchema = z
  .array(RecommendationSchema)
  .min(0)
  .max(10)
  .openapi('Recommendations')

const ListRecommendationsResponseSchema = z
  .object({
    Recommendations: RecommendationsSchema.and(
      z.any().openapi({ description: ' An array of the requested recommendations. ' }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecommendationsResponse')

const PutFeedbackResponseSchema = z.object({}).openapi('PutFeedbackResponse')

const RemoveNotificationChannelResponseSchema = z
  .object({})
  .openapi('RemoveNotificationChannelResponse')

const SearchInsightsResponseSchema = z
  .object({
    ProactiveInsights: ProactiveInsightsSchema.and(
      z.any().openapi({ description: ' The returned proactive insights. ' }),
    ).exactOptional(),
    ReactiveInsights: ReactiveInsightsSchema.and(
      z.any().openapi({ description: ' The returned reactive insights. ' }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchInsightsResponse')

const InsightStatusesSchema = z.array(InsightStatusSchema).min(0).max(2).openapi('InsightStatuses')

const SearchOrganizationInsightsResponseSchema = z
  .object({
    ProactiveInsights: ProactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open proactive insights in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    ReactiveInsights: ReactiveInsightsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the number of open reactive insights in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchOrganizationInsightsResponse')

const StartCostEstimationResponseSchema = z.object({}).openapi('StartCostEstimationResponse')

const UpdateEventSourcesConfigResponseSchema = z
  .object({})
  .openapi('UpdateEventSourcesConfigResponse')

const UpdateResourceCollectionResponseSchema = z
  .object({})
  .openapi('UpdateResourceCollectionResponse')

const UpdateStackNamesSchema = z.array(StackNameSchema).min(0).max(100).openapi('UpdateStackNames')

const UpdateCloudFormationCollectionFilterSchema = z
  .object({
    StackNames: UpdateStackNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of the names of the Amazon Web Services CloudFormation stacks to update. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Contains the names of Amazon Web Services CloudFormation stacks used to update a collection of stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks.',
    required: [],
  })
  .openapi('UpdateCloudFormationCollectionFilter')

const UpdateTagValuesSchema = z.array(TagValueSchema).min(0).max(100).openapi('UpdateTagValues')

const UpdateTagCollectionFilterSchema = z
  .object({
    AppBoundaryKey: AppBoundaryKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make up your DevOps Guru application and analysis boundary.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ),
    TagValues: UpdateTagValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The values in an Amazon Web Services tag collection.</p> <p>The tag's <i>value</i> is an optional field used to associate a string with the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair. Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>",
        }),
    ),
  })
  .openapi({
    required: ['AppBoundaryKey', 'TagValues'],
    description:
      'A new collection of Amazon Web Services resources that are defined by an Amazon Web Services tag or tag <i>key</i>/<i>value</i> pair.',
  })
  .openapi('UpdateTagCollectionFilter')

const UpdateTagCollectionFiltersSchema = z
  .array(UpdateTagCollectionFilterSchema)
  .openapi('UpdateTagCollectionFilters')

const UpdateServiceIntegrationResponseSchema = z
  .object({})
  .openapi('UpdateServiceIntegrationResponse')

const OpsCenterIntegrationConfigSchema = z
  .object({
    OptInStatus: OptInStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.',
    required: [],
  })
  .openapi('OpsCenterIntegrationConfig')

const LogsAnomalyDetectionIntegrationConfigSchema = z
  .object({
    OptInStatus: OptInStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection. You can use this to update the configuration. ',
    required: [],
  })
  .openapi('LogsAnomalyDetectionIntegrationConfig')

const AccountIdListSchema = z.array(AwsAccountIdSchema).min(0).max(5).openapi('AccountIdList')

const AddNotificationChannelRequestSchema = z
  .object({
    Config: NotificationChannelConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>NotificationChannelConfig</code> object that specifies what type of notification channel to add. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). ',
        }),
    ),
  })
  .openapi({ required: ['Config'], title: 'AddNotificationChannelRequest' })
  .openapi('AddNotificationChannelRequest')

const ClientTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9-]*$/)
  .min(1)
  .max(100)
  .openapi('ClientToken')

const DeleteInsightRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteInsightRequest' })
  .openapi('DeleteInsightRequest')

const DescribeAccountHealthRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAccountHealthRequest' })
  .openapi('DescribeAccountHealthRequest')

const DescribeAccountOverviewRequestSchema = z
  .object({
    FromTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day. ',
        }),
    ),
    ToTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FromTime'], title: 'DescribeAccountOverviewRequest' })
  .openapi('DescribeAccountOverviewRequest')

const DescribeAnomalyRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAnomalyRequest' })
  .openapi('DescribeAnomalyRequest')

const DescribeEventSourcesConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeEventSourcesConfigRequest' })
  .openapi('DescribeEventSourcesConfigRequest')

const DescribeFeedbackRequestSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({ description: ' The ID of the insight for which the feedback was provided. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFeedbackRequest', required: [] })
  .openapi('DescribeFeedbackRequest')

const DescribeInsightRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeInsightRequest' })
  .openapi('DescribeInsightRequest')

const OrganizationalUnitIdListSchema = z
  .array(OrganizationalUnitIdSchema)
  .min(0)
  .max(5)
  .openapi('OrganizationalUnitIdList')

const DescribeOrganizationHealthRequestSchema = z
  .object({
    AccountIds: AccountIdListSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account.' }),
    ).exactOptional(),
    OrganizationalUnitIds: OrganizationalUnitIdListSchema.and(
      z.any().openapi({ description: 'The ID of the organizational unit.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeOrganizationHealthRequest', required: [] })
  .openapi('DescribeOrganizationHealthRequest')

const DescribeOrganizationOverviewRequestSchema = z
  .object({
    FromTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day. ',
        }),
    ),
    ToTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. ',
        }),
    ).exactOptional(),
    AccountIds: AccountIdListSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account.' }),
    ).exactOptional(),
    OrganizationalUnitIds: OrganizationalUnitIdListSchema.and(
      z.any().openapi({ description: 'The ID of the organizational unit.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FromTime'], title: 'DescribeOrganizationOverviewRequest' })
  .openapi('DescribeOrganizationOverviewRequest')

const OrganizationResourceCollectionTypeSchema = z
  .enum(['AWS_CLOUD_FORMATION', 'AWS_SERVICE', 'AWS_ACCOUNT', 'AWS_TAGS'])
  .openapi('OrganizationResourceCollectionType')

const OrganizationResourceCollectionMaxResultsSchema = z
  .int()
  .min(1)
  .max(500)
  .openapi('OrganizationResourceCollectionMaxResults')

const DescribeOrganizationResourceCollectionHealthRequestSchema = z
  .object({
    OrganizationResourceCollectionType: OrganizationResourceCollectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
        }),
    ),
    AccountIds: AccountIdListSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account.' }),
    ).exactOptional(),
    OrganizationalUnitIds: OrganizationalUnitIdListSchema.and(
      z.any().openapi({ description: 'The ID of the organizational unit.' }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    MaxResults: OrganizationResourceCollectionMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationResourceCollectionType'],
    title: 'DescribeOrganizationResourceCollectionHealthRequest',
  })
  .openapi('DescribeOrganizationResourceCollectionHealthRequest')

const ResourceCollectionTypeSchema = z
  .enum(['AWS_CLOUD_FORMATION', 'AWS_SERVICE', 'AWS_TAGS'])
  .openapi('ResourceCollectionType')

const DescribeResourceCollectionHealthRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeResourceCollectionHealthRequest' })
  .openapi('DescribeResourceCollectionHealthRequest')

const DescribeServiceIntegrationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeServiceIntegrationRequest' })
  .openapi('DescribeServiceIntegrationRequest')

const GetCostEstimationRequestSchema = z
  .object({})
  .openapi({ title: 'GetCostEstimationRequest' })
  .openapi('GetCostEstimationRequest')

const GetResourceCollectionRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourceCollectionRequest' })
  .openapi('GetResourceCollectionRequest')

const ListAnomaliesForInsightFiltersSchema = z
  .object({ ServiceCollection: ServiceCollectionSchema.exactOptional() })
  .openapi({
    description: ' Specifies one or more service names that are used to list anomalies. ',
    required: [],
  })
  .openapi('ListAnomaliesForInsightFilters')

const ListAnomaliesForInsightMaxResultsSchema = z
  .int()
  .min(1)
  .max(500)
  .openapi('ListAnomaliesForInsightMaxResults')

const ListAnomaliesForInsightRequestSchema = z
  .object({
    StartTimeRange: StartTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A time range used to specify when the requested anomalies started. All returned anomalies started during this time range. ',
        }),
    ).exactOptional(),
    MaxResults: ListAnomaliesForInsightMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    AccountId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account. ' }),
    ).exactOptional(),
    Filters: ListAnomaliesForInsightFiltersSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies one or more service names that are used to list anomalies. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAnomaliesForInsightRequest', required: [] })
  .openapi('ListAnomaliesForInsightRequest')

const ListAnomalousLogGroupsMaxResultsSchema = z
  .int()
  .min(1)
  .max(200)
  .openapi('ListAnomalousLogGroupsMaxResults')

const ListAnomalousLogGroupsRequestSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z.any().openapi({ description: ' The ID of the insight containing the log groups. ' }),
    ),
    MaxResults: ListAnomalousLogGroupsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InsightId'], title: 'ListAnomalousLogGroupsRequest' })
  .openapi('ListAnomalousLogGroupsRequest')

const ListEventsFiltersSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An ID of an insight that is related to the events you want to filter for. ',
        }),
    ).exactOptional(),
    EventTimeRange: EventTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description: ' A time range during which you want the filtered events to have occurred. ',
        }),
    ).exactOptional(),
    EventClass: EventClassSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema change. ',
        }),
    ).exactOptional(),
    EventSource: EventSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Web Services source that emitted the events you want to filter for. ',
        }),
    ).exactOptional(),
    DataSource: EventDataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, of the events you want returned. ',
        }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Filters you can use to specify which events are returned when <code>ListEvents</code> is called. ',
    required: [],
  })
  .openapi('ListEventsFilters')

const ListEventsMaxResultsSchema = z.int().min(1).max(200).openapi('ListEventsMaxResults')

const ListEventsRequestSchema = z
  .object({
    Filters: ListEventsFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ListEventsFilters</code> object used to specify which events to return. ',
        }),
    ),
    MaxResults: ListEventsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    AccountId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Filters'], title: 'ListEventsRequest' })
  .openapi('ListEventsRequest')

const ListInsightsAccountIdListSchema = z
  .array(AwsAccountIdSchema)
  .min(0)
  .max(1)
  .openapi('ListInsightsAccountIdList')

const ListInsightsMaxResultsSchema = z.int().min(1).max(100).openapi('ListInsightsMaxResults')

const ListInsightsOrganizationalUnitIdListSchema = z
  .array(OrganizationalUnitIdSchema)
  .min(0)
  .max(1)
  .openapi('ListInsightsOrganizationalUnitIdList')

const ListInsightsStatusFilterSchema = z
  .object({
    Ongoing: ListInsightsOngoingStatusFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ListInsightsAnyStatusFilter</code> that specifies ongoing insights that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
        }),
    ).exactOptional(),
    Closed: ListInsightsClosedStatusFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ListInsightsClosedStatusFilter</code> that specifies closed insights that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
        }),
    ).exactOptional(),
    Any: ListInsightsAnyStatusFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ListInsightsAnyStatusFilter</code> that specifies insights of any status that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A filter used by <code>ListInsights</code> to specify which insights to return. ',
    required: [],
  })
  .openapi('ListInsightsStatusFilter')

const ListInsightsRequestSchema = z
  .object({
    StatusFilter: ListInsightsStatusFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A filter used to filter the returned insights by their status. You can specify one status filter. ',
        }),
    ),
    MaxResults: ListInsightsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StatusFilter'], title: 'ListInsightsRequest' })
  .openapi('ListInsightsRequest')

const ListMonitoredResourcesFiltersSchema = z
  .object({
    ResourcePermission: ResourcePermissionSchema.and(
      z.any().openapi({ description: ' The permission status of a resource. ' }),
    ),
    ResourceTypeFilters: ResourceTypeFiltersSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of resource that you wish to retrieve, such as log groups. ',
        }),
    ),
  })
  .openapi({
    required: ['ResourcePermission', 'ResourceTypeFilters'],
    description:
      ' Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status. ',
  })
  .openapi('ListMonitoredResourcesFilters')

const ListMonitoredResourcesMaxResultsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListMonitoredResourcesMaxResults')

const ListMonitoredResourcesRequestSchema = z
  .object({
    Filters: ListMonitoredResourcesFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status. ',
        }),
    ).exactOptional(),
    MaxResults: ListMonitoredResourcesMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMonitoredResourcesRequest', required: [] })
  .openapi('ListMonitoredResourcesRequest')

const ListNotificationChannelsRequestSchema = z
  .object({
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListNotificationChannelsRequest', required: [] })
  .openapi('ListNotificationChannelsRequest')

const ListOrganizationInsightsRequestSchema = z
  .object({
    StatusFilter: ListInsightsStatusFilterSchema,
    MaxResults: ListInsightsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    AccountIds: ListInsightsAccountIdListSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account. ' }),
    ).exactOptional(),
    OrganizationalUnitIds: ListInsightsOrganizationalUnitIdListSchema.and(
      z.any().openapi({ description: 'The ID of the organizational unit.' }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StatusFilter'], title: 'ListOrganizationInsightsRequest' })
  .openapi('ListOrganizationInsightsRequest')

const LocaleSchema = z
  .enum([
    'DE_DE',
    'EN_US',
    'EN_GB',
    'ES_ES',
    'FR_FR',
    'IT_IT',
    'JA_JP',
    'KO_KR',
    'PT_BR',
    'ZH_CN',
    'ZH_TW',
  ])
  .openapi('Locale')

const ListRecommendationsRequestSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z.any().openapi({ description: ' The ID of the requested insight. ' }),
    ),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    Locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description: 'A locale that specifies the language to use for recommendations.',
        }),
    ).exactOptional(),
    AccountId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['InsightId'], title: 'ListRecommendationsRequest' })
  .openapi('ListRecommendationsRequest')

const PerformanceInsightsMetricFilterKeySchema = z
  .string()
  .openapi('PerformanceInsightsMetricFilterKey')

const PutFeedbackRequestSchema = z
  .object({
    InsightFeedback: InsightFeedbackSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The feedback from customers is about the recommendations in this insight. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutFeedbackRequest', required: [] })
  .openapi('PutFeedbackRequest')

const RemoveNotificationChannelRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveNotificationChannelRequest' })
  .openapi('RemoveNotificationChannelRequest')

const SearchInsightsAccountIdListSchema = z
  .array(AwsAccountIdSchema)
  .length(1)
  .openapi('SearchInsightsAccountIdList')

const SearchInsightsFiltersSchema = z
  .object({
    Severities: InsightSeveritiesSchema.and(
      z
        .any()
        .openapi({ description: ' An array of severity values used to search for insights. ' }),
    ).exactOptional(),
    Statuses: InsightStatusesSchema.and(
      z.any().openapi({ description: ' An array of status values used to search for insights. ' }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    ServiceCollection: ServiceCollectionSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of the names of Amazon Web Services services.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.',
    required: [],
  })
  .openapi('SearchInsightsFilters')

const SearchInsightsMaxResultsSchema = z.int().min(1).max(100).openapi('SearchInsightsMaxResults')

const SearchInsightsRequestSchema = z
  .object({
    StartTimeRange: StartTimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start of the time range passed in. Returned insights occurred after this time. ',
        }),
    ),
    Filters: SearchInsightsFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>SearchInsightsFilters</code> object that is used to set the severity and status filters on your insight search. ',
        }),
    ).exactOptional(),
    MaxResults: SearchInsightsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    Type: InsightTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>). ',
        }),
    ),
  })
  .openapi({ required: ['StartTimeRange', 'Type'], title: 'SearchInsightsRequest' })
  .openapi('SearchInsightsRequest')

const SearchOrganizationInsightsFiltersSchema = z
  .object({
    Severities: InsightSeveritiesSchema.and(
      z
        .any()
        .openapi({ description: ' An array of severity values used to search for insights. ' }),
    ).exactOptional(),
    Statuses: InsightStatusesSchema.and(
      z.any().openapi({ description: ' An array of status values used to search for insights. ' }),
    ).exactOptional(),
    ResourceCollection: ResourceCollectionSchema.exactOptional(),
    ServiceCollection: ServiceCollectionSchema.exactOptional(),
  })
  .openapi({
    description:
      ' Filters you can use to specify which events are returned when <code>ListEvents</code> is called. ',
    required: [],
  })
  .openapi('SearchOrganizationInsightsFilters')

const SearchOrganizationInsightsMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('SearchOrganizationInsightsMaxResults')

const SearchOrganizationInsightsRequestSchema = z
  .object({
    AccountIds: SearchInsightsAccountIdListSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services account. ' }),
    ),
    StartTimeRange: StartTimeRangeSchema,
    Filters: SearchOrganizationInsightsFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>SearchOrganizationInsightsFilters</code> object that is used to set the severity and status filters on your insight search. ',
        }),
    ).exactOptional(),
    MaxResults: SearchOrganizationInsightsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: UuidNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    Type: InsightTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>). ',
        }),
    ),
  })
  .openapi({
    required: ['AccountIds', 'StartTimeRange', 'Type'],
    title: 'SearchOrganizationInsightsRequest',
  })
  .openapi('SearchOrganizationInsightsRequest')

const StartCostEstimationRequestSchema = z
  .object({
    ResourceCollection: CostEstimationResourceCollectionFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of Amazon Web Services resources used to create a monthly DevOps Guru cost estimate.',
        }),
    ),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The idempotency token used to identify each cost estimate request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceCollection'], title: 'StartCostEstimationRequest' })
  .openapi('StartCostEstimationRequest')

const UpdateEventSourcesConfigRequestSchema = z
  .object({
    EventSources: EventSourcesConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information about the integration of DevOps Guru as the Consumer via EventBridge with another AWS Service.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEventSourcesConfigRequest', required: [] })
  .openapi('UpdateEventSourcesConfigRequest')

const UpdateResourceCollectionActionSchema = z
  .enum(['ADD', 'REMOVE'])
  .openapi('UpdateResourceCollectionAction')

const UpdateResourceCollectionFilterSchema = z
  .object({
    CloudFormation: UpdateCloudFormationCollectionFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A collection of Amazon Web Services CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
        }),
    ).exactOptional(),
    Tags: UpdateTagCollectionFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The updated Amazon Web Services tags used to filter the resources in the resource collection.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Contains information used to update a collection of Amazon Web Services resources. ',
    required: [],
  })
  .openapi('UpdateResourceCollectionFilter')

const UpdateResourceCollectionRequestSchema = z
  .object({
    Action: UpdateResourceCollectionActionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies if the resource collection in the request is added or deleted to the resource collection. ',
        }),
    ),
    ResourceCollection: UpdateResourceCollectionFilterSchema,
  })
  .openapi({ required: ['Action', 'ResourceCollection'], title: 'UpdateResourceCollectionRequest' })
  .openapi('UpdateResourceCollectionRequest')

const UpdateServiceIntegrationConfigSchema = z
  .object({
    OpsCenter: OpsCenterIntegrationConfigSchema.exactOptional(),
    LogsAnomalyDetection: LogsAnomalyDetectionIntegrationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru. ',
    required: [],
  })
  .openapi('UpdateServiceIntegrationConfig')

const UpdateServiceIntegrationRequestSchema = z
  .object({
    ServiceIntegration: UpdateServiceIntegrationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <code>IntegratedServiceConfig</code> object used to specify the integrated service you want to update, and whether you want to update it to enabled or disabled. ',
        }),
    ),
  })
  .openapi({ required: ['ServiceIntegration'], title: 'UpdateServiceIntegrationRequest' })
  .openapi('UpdateServiceIntegrationRequest')

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

export const putChannelsRoute = createRoute({
  method: 'put',
  path: '/channels',
  description:
    '<p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>',
  operationId: 'AddNotificationChannel',
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
              Config: z
                .object({
                  Sns: SnsChannelConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> Information about a notification channel configured in DevOps Guru to send notifications when insights are created. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>',
                      }),
                  ).exactOptional(),
                  Filters: NotificationFilterConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. If you do not provide filter configurations, the default configurations are to receive notifications for all message types of <code>High</code> or <code>Medium</code> severity. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).',
                  required: [],
                }),
            })
            .openapi({ required: ['Config'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddNotificationChannelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postChannelsRoute = createRoute({
  method: 'post',
  path: '/channels',
  description:
    ' Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). ',
  operationId: 'ListNotificationChannels',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
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
      content: { 'application/json': { schema: ListNotificationChannelsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getInsightsIdRoute = createRoute({
  method: 'get',
  path: '/insights/{Id}',
  description: ' Returns details about an insight that you specify using its ID. ',
  operationId: 'DescribeInsight',
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
      Id: z
        .string()
        .regex(/^[\w-]*$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: ' The ID of the insight. ',
            schema: { type: 'string', pattern: '^[\\w-]*$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      AccountId: z
        .string()
        .regex(/^\d{12}$/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'AccountId',
            in: 'query',
            required: false,
            description: 'The ID of the member account in the organization.',
            schema: { type: 'string', pattern: '^\\d{12}$', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInsightResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteInsightsIdRoute = createRoute({
  method: 'delete',
  path: '/insights/{Id}',
  description:
    'Deletes the insight along with the associated anomalies, events and recommendations.',
  operationId: 'DeleteInsight',
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
      Id: z
        .string()
        .regex(/^[\w-]*$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the insight.',
            schema: { type: 'string', pattern: '^[\\w-]*$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInsightResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getAccountsHealthRoute = createRoute({
  method: 'get',
  path: '/accounts/health',
  description:
    ' Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. ',
  operationId: 'DescribeAccountHealth',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountHealthResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postAccountsOverviewRoute = createRoute({
  method: 'post',
  path: '/accounts/overview',
  description:
    ' For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. ',
  operationId: 'DescribeAccountOverview',
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
              FromTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    ' The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day. ',
                }),
              ToTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    ' The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. ',
                }),
            })
            .openapi({ required: ['FromTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountOverviewResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getAnomaliesIdRoute = createRoute({
  method: 'get',
  path: '/anomalies/{Id}',
  description: ' Returns details about an anomaly that you specify using its ID. ',
  operationId: 'DescribeAnomaly',
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
      Id: z
        .string()
        .regex(/^[\w~.-]*$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: ' The ID of the anomaly. ',
            schema: { type: 'string', pattern: '^[\\w~.-]*$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      AccountId: z
        .string()
        .regex(/^\d{12}$/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'AccountId',
            in: 'query',
            required: false,
            description: 'The ID of the member account.',
            schema: { type: 'string', pattern: '^\\d{12}$', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAnomalyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putEventSourcesRoute = createRoute({
  method: 'put',
  path: '/event-sources',
  description:
    'Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.',
  operationId: 'UpdateEventSourcesConfig',
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
              EventSources: z
                .object({
                  AmazonCodeGuruProfiler: AmazonCodeGuruProfilerIntegrationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about whether DevOps Guru is configured to consume recommendations which are generated from AWS CodeGuru Profiler.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.',
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
      content: { 'application/json': { schema: UpdateEventSourcesConfigResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postEventSourcesRoute = createRoute({
  method: 'post',
  path: '/event-sources',
  description:
    'Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.',
  operationId: 'DescribeEventSourcesConfig',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventSourcesConfigResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putFeedbackRoute = createRoute({
  method: 'put',
  path: '/feedback',
  description: ' Collects customer feedback about the specified insight. ',
  operationId: 'PutFeedback',
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
              InsightFeedback: z
                .object({
                  Id: InsightIdSchema.and(
                    z.any().openapi({ description: ' The insight feedback ID. ' }),
                  ).exactOptional(),
                  Feedback: InsightFeedbackOptionSchema.and(
                    z.any().openapi({ description: ' The feedback provided by the customer. ' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: ' Information about insight feedback received from a customer. ',
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
      content: { 'application/json': { schema: PutFeedbackResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postFeedbackRoute = createRoute({
  method: 'post',
  path: '/feedback',
  description:
    ' Returns the most recent feedback submitted in the current Amazon Web Services account and Region. ',
  operationId: 'DescribeFeedback',
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
              InsightId: z
                .string()
                .regex(/^[\w-]*$/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description: ' The ID of the insight for which the feedback was provided. ',
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
      content: { 'application/json': { schema: DescribeFeedbackResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrganizationHealthRoute = createRoute({
  method: 'post',
  path: '/organization/health',
  description:
    'Returns active insights, predictive insights, and resource hours analyzed in last hour.',
  operationId: 'DescribeOrganizationHealth',
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
              AccountIds: z
                .array(AwsAccountIdSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Web Services account.' }),
              OrganizationalUnitIds: z
                .array(OrganizationalUnitIdSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The ID of the organizational unit.' }),
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
      content: { 'application/json': { schema: DescribeOrganizationHealthResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrganizationOverviewRoute = createRoute({
  method: 'post',
  path: '/organization/overview',
  description:
    "Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.",
  operationId: 'DescribeOrganizationOverview',
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
              FromTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    ' The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day. ',
                }),
              ToTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    ' The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. ',
                }),
              AccountIds: z
                .array(AwsAccountIdSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Web Services account.' }),
              OrganizationalUnitIds: z
                .array(OrganizationalUnitIdSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The ID of the organizational unit.' }),
            })
            .openapi({ required: ['FromTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOrganizationOverviewResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrganizationHealthResourceCollectionRoute = createRoute({
  method: 'post',
  path: '/organization/health/resource-collection',
  description:
    "Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.",
  operationId: 'DescribeOrganizationResourceCollectionHealth',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              OrganizationResourceCollectionType: z
                .enum(['AWS_CLOUD_FORMATION', 'AWS_SERVICE', 'AWS_ACCOUNT', 'AWS_TAGS'])
                .openapi({
                  description:
                    ' An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
                }),
              AccountIds: z
                .array(AwsAccountIdSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Web Services account.' }),
              OrganizationalUnitIds: z
                .array(OrganizationalUnitIdSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The ID of the organizational unit.' }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
            })
            .openapi({ required: ['OrganizationResourceCollectionType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeOrganizationResourceCollectionHealthResponseSchema },
      },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getAccountsHealthResourceCollectionResourceCollectionTypeRoute = createRoute({
  method: 'get',
  path: '/accounts/health/resource-collection/{ResourceCollectionType}',
  description:
    ' Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
  operationId: 'DescribeResourceCollectionHealth',
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
      ResourceCollectionType: z
        .enum(['AWS_CLOUD_FORMATION', 'AWS_SERVICE', 'AWS_TAGS'])
        .openapi({
          param: {
            name: 'ResourceCollectionType',
            in: 'path',
            required: true,
            description:
              ' An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
            schema: { type: 'string', enum: ['AWS_CLOUD_FORMATION', 'AWS_SERVICE', 'AWS_TAGS'] },
          },
        }),
    }),
    query: z.object({
      NextToken: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourceCollectionHealthResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getServiceIntegrationsRoute = createRoute({
  method: 'get',
  path: '/service-integrations',
  description:
    ' Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. ',
  operationId: 'DescribeServiceIntegration',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServiceIntegrationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putServiceIntegrationsRoute = createRoute({
  method: 'put',
  path: '/service-integrations',
  description:
    ' Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. ',
  operationId: 'UpdateServiceIntegration',
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
              ServiceIntegration: z
                .object({
                  OpsCenter: OpsCenterIntegrationConfigSchema.exactOptional(),
                  LogsAnomalyDetection: LogsAnomalyDetectionIntegrationConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru. ',
                  required: [],
                }),
            })
            .openapi({ required: ['ServiceIntegration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceIntegrationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getCostEstimationRoute = createRoute({
  method: 'get',
  path: '/cost-estimation',
  description:
    'Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.',
  operationId: 'GetCostEstimation',
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
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCostEstimationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putCostEstimationRoute = createRoute({
  method: 'put',
  path: '/cost-estimation',
  description:
    'Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.',
  operationId: 'StartCostEstimation',
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
              ResourceCollection: z
                .object({
                  CloudFormation: CloudFormationCostEstimationResourceCollectionFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that specifies the CloudFormation stack that defines the Amazon Web Services resources used to create a monthly estimate for DevOps Guru.',
                      }),
                  ).exactOptional(),
                  Tags: TagCostEstimationResourceCollectionFiltersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon Web Services tags used to filter the resource collection that is used for a cost estimate.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. ',
                  required: [],
                }),
              ClientToken: z
                .string()
                .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9-]*$/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The idempotency token used to identify each cost estimate request.',
                }),
            })
            .openapi({ required: ['ResourceCollection'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartCostEstimationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getResourceCollectionsResourceCollectionTypeRoute = createRoute({
  method: 'get',
  path: '/resource-collections/{ResourceCollectionType}',
  description:
    ' Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
  operationId: 'GetResourceCollection',
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
      ResourceCollectionType: z
        .enum(['AWS_CLOUD_FORMATION', 'AWS_SERVICE', 'AWS_TAGS'])
        .openapi({
          param: {
            name: 'ResourceCollectionType',
            in: 'path',
            required: true,
            description:
              ' The type of Amazon Web Services resource collections to return. The one valid value is <code>CLOUD_FORMATION</code> for Amazon Web Services CloudFormation stacks. ',
            schema: { type: 'string', enum: ['AWS_CLOUD_FORMATION', 'AWS_SERVICE', 'AWS_TAGS'] },
          },
        }),
    }),
    query: z.object({
      NextToken: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceCollectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postAnomaliesInsightInsightIdRoute = createRoute({
  method: 'post',
  path: '/anomalies/insight/{InsightId}',
  description:
    ' Returns a list of the anomalies that belong to an insight that you specify using its ID. ',
  operationId: 'ListAnomaliesForInsight',
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
      InsightId: z
        .string()
        .regex(/^[\w-]*$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'InsightId',
            in: 'path',
            required: true,
            description: ' The ID of the insight. The returned anomalies belong to this insight. ',
            schema: { type: 'string', pattern: '^[\\w-]*$', minLength: 1, maxLength: 100 },
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
              StartTimeRange: z
                .object({
                  FromTime: TimestampSchema.and(
                    z.any().openapi({ description: ' The start time of the time range. ' }),
                  ).exactOptional(),
                  ToTime: TimestampSchema.and(
                    z.any().openapi({ description: ' The end time of the time range. ' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' A time range used to specify when the behavior of an insight or anomaly started. ',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              AccountId: z
                .string()
                .regex(/^\d{12}$/)
                .length(12)
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Web Services account. ' }),
              Filters: z
                .object({ ServiceCollection: ServiceCollectionSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    ' Specifies one or more service names that are used to list anomalies. ',
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
      content: { 'application/json': { schema: ListAnomaliesForInsightResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListLogAnomaliesRoute = createRoute({
  method: 'post',
  path: '/list-log-anomalies',
  description: ' Returns the list of log groups that contain log anomalies. ',
  operationId: 'ListAnomalousLogGroups',
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
              InsightId: z
                .string()
                .regex(/^[\w-]*$/)
                .min(1)
                .max(100)
                .openapi({ description: ' The ID of the insight containing the log groups. ' }),
              MaxResults: z
                .int()
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
            })
            .openapi({ required: ['InsightId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAnomalousLogGroupsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postEventsRoute = createRoute({
  method: 'post',
  path: '/events',
  description:
    ' Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. ',
  operationId: 'ListEvents',
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
              Filters: z
                .object({
                  InsightId: InsightIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' An ID of an insight that is related to the events you want to filter for. ',
                      }),
                  ).exactOptional(),
                  EventTimeRange: EventTimeRangeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A time range during which you want the filtered events to have occurred. ',
                      }),
                  ).exactOptional(),
                  EventClass: EventClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema change. ',
                      }),
                  ).exactOptional(),
                  EventSource: EventSourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The Amazon Web Services source that emitted the events you want to filter for. ',
                      }),
                  ).exactOptional(),
                  DataSource: EventDataSourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, of the events you want returned. ',
                      }),
                  ).exactOptional(),
                  ResourceCollection: ResourceCollectionSchema.exactOptional(),
                })
                .openapi({
                  description:
                    ' Filters you can use to specify which events are returned when <code>ListEvents</code> is called. ',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              AccountId: z
                .string()
                .regex(/^\d{12}$/)
                .length(12)
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Web Services account. ' }),
            })
            .openapi({ required: ['Filters'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postInsightsRoute = createRoute({
  method: 'post',
  path: '/insights',
  description:
    ' Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). ',
  operationId: 'ListInsights',
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
              StatusFilter: z
                .object({
                  Ongoing: ListInsightsOngoingStatusFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>ListInsightsAnyStatusFilter</code> that specifies ongoing insights that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
                      }),
                  ).exactOptional(),
                  Closed: ListInsightsClosedStatusFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>ListInsightsClosedStatusFilter</code> that specifies closed insights that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
                      }),
                  ).exactOptional(),
                  Any: ListInsightsAnyStatusFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>ListInsightsAnyStatusFilter</code> that specifies insights of any status that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' A filter used by <code>ListInsights</code> to specify which insights to return. ',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
            })
            .openapi({ required: ['StatusFilter'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInsightsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postMonitoredResourcesRoute = createRoute({
  method: 'post',
  path: '/monitoredResources',
  description:
    ' Returns the list of all log groups that are being monitored and tagged by DevOps Guru. ',
  operationId: 'ListMonitoredResources',
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
              Filters: z
                .object({
                  ResourcePermission: ResourcePermissionSchema.and(
                    z.any().openapi({ description: ' The permission status of a resource. ' }),
                  ).exactOptional(),
                  ResourceTypeFilters: ResourceTypeFiltersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The type of resource that you wish to retrieve, such as log groups. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status. ',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
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
      content: { 'application/json': { schema: ListMonitoredResourcesResponseSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrganizationInsightsRoute = createRoute({
  method: 'post',
  path: '/organization/insights',
  description: 'Returns a list of insights associated with the account or OU Id.',
  operationId: 'ListOrganizationInsights',
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
              StatusFilter: z
                .object({
                  Ongoing: ListInsightsOngoingStatusFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>ListInsightsAnyStatusFilter</code> that specifies ongoing insights that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
                      }),
                  ).exactOptional(),
                  Closed: ListInsightsClosedStatusFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>ListInsightsClosedStatusFilter</code> that specifies closed insights that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
                      }),
                  ).exactOptional(),
                  Any: ListInsightsAnyStatusFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>ListInsightsAnyStatusFilter</code> that specifies insights of any status that are either <code>REACTIVE</code> or <code>PROACTIVE</code>. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' A filter used by <code>ListInsights</code> to specify which insights to return. ',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              AccountIds: z
                .array(AwsAccountIdSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Web Services account. ' }),
              OrganizationalUnitIds: z
                .array(OrganizationalUnitIdSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({ description: 'The ID of the organizational unit.' }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
            })
            .openapi({ required: ['StatusFilter'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOrganizationInsightsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRecommendationsRoute = createRoute({
  method: 'post',
  path: '/recommendations',
  description:
    " Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. ",
  operationId: 'ListRecommendations',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InsightId: z
                .string()
                .regex(/^[\w-]*$/)
                .min(1)
                .max(100)
                .openapi({ description: ' The ID of the requested insight. ' }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              Locale: z
                .enum([
                  'DE_DE',
                  'EN_US',
                  'EN_GB',
                  'ES_ES',
                  'FR_FR',
                  'IT_IT',
                  'JA_JP',
                  'KO_KR',
                  'PT_BR',
                  'ZH_CN',
                  'ZH_TW',
                ])
                .exactOptional()
                .openapi({
                  description: 'A locale that specifies the language to use for recommendations.',
                }),
              AccountId: z
                .string()
                .regex(/^\d{12}$/)
                .length(12)
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Web Services account. ' }),
            })
            .openapi({ required: ['InsightId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecommendationsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteChannelsIdRoute = createRoute({
  method: 'delete',
  path: '/channels/{Id}',
  description:
    ' Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. ',
  operationId: 'RemoveNotificationChannel',
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
      Id: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: ' The ID of the notification channel to be removed. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveNotificationChannelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postInsightsSearchRoute = createRoute({
  method: 'post',
  path: '/insights/search',
  description:
    '<p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>',
  operationId: 'SearchInsights',
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
              StartTimeRange: z
                .object({
                  FromTime: TimestampSchema.and(
                    z.any().openapi({ description: ' The start time of the time range. ' }),
                  ).exactOptional(),
                  ToTime: TimestampSchema.and(
                    z.any().openapi({ description: ' The end time of the time range. ' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' A time range used to specify when the behavior of an insight or anomaly started. ',
                  required: [],
                }),
              Filters: z
                .object({
                  Severities: InsightSeveritiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' An array of severity values used to search for insights. ',
                      }),
                  ).exactOptional(),
                  Statuses: InsightStatusesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' An array of status values used to search for insights. ',
                      }),
                  ).exactOptional(),
                  ResourceCollection: ResourceCollectionSchema.exactOptional(),
                  ServiceCollection: ServiceCollectionSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A collection of the names of Amazon Web Services services.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              Type: z
                .enum(['REACTIVE', 'PROACTIVE'])
                .openapi({
                  description:
                    ' The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>). ',
                }),
            })
            .openapi({ required: ['StartTimeRange', 'Type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchInsightsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrganizationInsightsSearchRoute = createRoute({
  method: 'post',
  path: '/organization/insights/search',
  description:
    '<p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>',
  operationId: 'SearchOrganizationInsights',
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
              AccountIds: z
                .array(AwsAccountIdSchema)
                .length(1)
                .openapi({ description: 'The ID of the Amazon Web Services account. ' }),
              StartTimeRange: z
                .object({
                  FromTime: TimestampSchema.and(
                    z.any().openapi({ description: ' The start time of the time range. ' }),
                  ).exactOptional(),
                  ToTime: TimestampSchema.and(
                    z.any().openapi({ description: ' The end time of the time range. ' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' A time range used to specify when the behavior of an insight or anomaly started. ',
                  required: [],
                }),
              Filters: z
                .object({
                  Severities: InsightSeveritiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' An array of severity values used to search for insights. ',
                      }),
                  ).exactOptional(),
                  Statuses: InsightStatusesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' An array of status values used to search for insights. ',
                      }),
                  ).exactOptional(),
                  ResourceCollection: ResourceCollectionSchema.exactOptional(),
                  ServiceCollection: ServiceCollectionSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' Filters you can use to specify which events are returned when <code>ListEvents</code> is called. ',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
                }),
              Type: z
                .enum(['REACTIVE', 'PROACTIVE'])
                .openapi({
                  description:
                    ' The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>). ',
                }),
            })
            .openapi({ required: ['AccountIds', 'StartTimeRange', 'Type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchOrganizationInsightsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putResourceCollectionsRoute = createRoute({
  method: 'put',
  path: '/resource-collections',
  description:
    ' Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. ',
  operationId: 'UpdateResourceCollection',
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
              Action: z
                .enum(['ADD', 'REMOVE'])
                .openapi({
                  description:
                    ' Specifies if the resource collection in the request is added or deleted to the resource collection. ',
                }),
              ResourceCollection: z
                .object({
                  CloudFormation: UpdateCloudFormationCollectionFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A collection of Amazon Web Services CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. ',
                      }),
                  ).exactOptional(),
                  Tags: UpdateTagCollectionFiltersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The updated Amazon Web Services tags used to filter the resources in the resource collection.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' Contains information used to update a collection of Amazon Web Services resources. ',
                  required: [],
                }),
            })
            .openapi({ required: ['Action', 'ResourceCollection'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourceCollectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
