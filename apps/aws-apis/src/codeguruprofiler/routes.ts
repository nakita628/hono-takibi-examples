import { createRoute, z } from '@hono/zod-openapi'

const EventPublisherSchema = z.literal('AnomalyDetection').openapi('EventPublisher')

const EventPublishersSchema = z.array(EventPublisherSchema).length(1).openapi('EventPublishers')

const ChannelIdSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .openapi('ChannelId')

const ChannelUriSchema = z
  .string()
  .openapi({
    description:
      'Channel URI uniquely identifies a Notification Channel. TopicArn is the uri for an SNS channel, emailId is uri for an email channel etc. Currently we only support SNS channels and thus required to be an ARN',
  })
  .openapi('ChannelUri')

const ChannelSchema = z
  .object({
    eventPublishers: EventPublishersSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of publishers for different type of events that may be detected in an application from the profile. Anomaly detection is the only event publisher in Profiler.',
        }),
    ),
    id: ChannelIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for each <code>Channel</code> in the notification configuration of a Profiling Group. A random UUID for channelId is used when adding a channel to the notification configuration if not specified in the request.',
        }),
    ).exactOptional(),
    uri: ChannelUriSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.',
        }),
    ),
  })
  .openapi({
    required: ['eventPublishers', 'uri'],
    description:
      'Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.',
  })
  .openapi('Channel')

const ChannelsSchema = z.array(ChannelSchema).min(1).max(2).openapi('Channels')

const NotificationConfigurationSchema = z
  .object({
    channels: ChannelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of up to two channels to be used for sending notifications for events detected from the application profile.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.',
    required: [],
  })
  .openapi('NotificationConfiguration')

const AddNotificationChannelsResponseSchema = z
  .object({
    notificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The new notification configuration for this profiling group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The structure representing the AddNotificationChannelsResponse.',
    required: [],
  })
  .openapi('AddNotificationChannelsResponse')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimestampStructureSchema = z
  .object({
    value: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>Timestamp</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ),
  })
  .openapi({
    required: ['value'],
    description:
      ' A data type that contains a <code>Timestamp</code> object. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
  })
  .openapi('TimestampStructure')

const ListOfTimestampsSchema = z.array(TimestampStructureSchema).openapi('ListOfTimestamps')

const StringSchema = z.string().openapi('String')

const ThreadStatesSchema = z.array(StringSchema).openapi('ThreadStates')

const MetricTypeSchema = z.literal('AggregatedRelativeTotalTime').openapi('MetricType')

const FrameMetricSchema = z
  .object({
    frameName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Name of the method common across the multiple occurrences of a frame in an application profile.',
        }),
    ),
    threadStates: ThreadStatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of application runtime thread states used to get the counts for a frame a derive a metric value.',
        }),
    ),
    type: MetricTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A type of aggregation that specifies how a metric for a frame is analyzed. The supported value <code>AggregatedRelativeTotalTime</code> is an aggregation of the metric value for one frame that is calculated across the occurrences of all frames in a profile. ',
        }),
    ),
  })
  .openapi({
    required: ['frameName', 'threadStates', 'type'],
    description:
      ' The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.',
  })
  .openapi('FrameMetric')

const FrameMetricValueSchema = z.float64().openapi('FrameMetricValue')

const FrameMetricValuesSchema = z.array(FrameMetricValueSchema).openapi('FrameMetricValues')

const FrameMetricDatumSchema = z
  .object({
    frameMetric: FrameMetricSchema,
    values: FrameMetricValuesSchema.and(
      z
        .any()
        .openapi({ description: ' A list of values that are associated with a frame metric. ' }),
    ),
  })
  .openapi({
    required: ['frameMetric', 'values'],
    description: ' Information about a frame metric and its values. ',
  })
  .openapi('FrameMetricDatum')

const FrameMetricDataSchema = z.array(FrameMetricDatumSchema).openapi('FrameMetricData')

const AggregationPeriodSchema = z.enum(['PT5M', 'PT1H', 'P1D']).openapi('AggregationPeriod')

const UnprocessedEndTimeMapSchema = z
  .record(z.string(), ListOfTimestampsSchema)
  .openapi('UnprocessedEndTimeMap')

const BatchGetFrameMetricDataResponseSchema = z
  .object({
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ),
    endTimes: ListOfTimestampsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' List of instances, or time steps, in the time series. For example, if the <code>period</code> is one day (<code>PT24H)</code>), and the <code>resolution</code> is five minutes (<code>PT5M</code>), then there are 288 <code>endTimes</code> in the list that are each five minutes appart. ',
        }),
    ),
    frameMetricData: FrameMetricDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of the metrics to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.',
        }),
    ),
    resolution: AggregationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Resolution or granularity of the profile data used to generate the time series. This is the value used to jump through time steps in a time series. There are 3 valid values. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>',
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ),
    unprocessedEndTimes: UnprocessedEndTimeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of instances which remained unprocessed. This will create a missing time step in the list of end times.',
        }),
    ),
  })
  .openapi({
    required: [
      'endTime',
      'endTimes',
      'frameMetricData',
      'resolution',
      'startTime',
      'unprocessedEndTimes',
    ],
    description: 'The structure representing the BatchGetFrameMetricDataResponse.',
  })
  .openapi('BatchGetFrameMetricDataResponse')

const AgentParametersSchema = z.record(z.string(), StringSchema).openapi('AgentParameters')

const IntegerSchema = z.int().openapi('Integer')

const BooleanSchema = z.boolean().openapi('Boolean')

const AgentConfigurationSchema = z
  .object({
    agentParameters: AgentParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Parameters used by the profiler. The valid parameters are: </p> <ul> <li> <p> <code>MaxStackDepth</code> - The maximum depth of the stacks in the code that is represented in the profile. For example, if CodeGuru Profiler finds a method <code>A</code>, which calls method <code>B</code>, which calls method <code>C</code>, which calls method <code>D</code>, then the depth is 4. If the <code>maxDepth</code> is set to 2, then the profiler evaluates <code>A</code> and <code>B</code>. </p> </li> <li> <p> <code>MemoryUsageLimitPercent</code> - The percentage of memory that is used by the profiler.</p> </li> <li> <p> <code>MinimumTimeForReportingInMilliseconds</code> - The minimum time in milliseconds between sending reports. </p> </li> <li> <p> <code>ReportingIntervalInMilliseconds</code> - The reporting interval in milliseconds used to report profiles. </p> </li> <li> <p> <code>SamplingIntervalInMilliseconds</code> - The sampling interval in milliseconds that is used to profile samples. </p> </li> </ul>',
        }),
    ).exactOptional(),
    periodInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' How long a profiling agent should send profiling data using <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>. For example, if this is set to 300, the profiling agent calls <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> every 5 minutes to submit the profiled data collected during that period. ',
        }),
    ),
    shouldProfile: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>Boolean</code> that specifies whether the profiling agent collects profiling data or not. Set to <code>true</code> to enable profiling. ',
        }),
    ),
  })
  .openapi({
    required: ['periodInSeconds', 'shouldProfile'],
    description:
      ' The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data. ',
  })
  .openapi('AgentConfiguration')

const ConfigureAgentResponseSchema = z
  .object({
    configuration: AgentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AgentConfiguration.html"> <code>AgentConfiguration</code> </a> object that specifies if an agent profiles or not and for how long to return profiling data. ',
        }),
    ),
  })
  .openapi({
    required: ['configuration'],
    description: 'The structure representing the configureAgentResponse.',
  })
  .openapi('ConfigureAgentResponse')

const AgentOrchestrationConfigSchema = z
  .object({
    profilingEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>Boolean</code> that specifies whether the profiling agent collects profiling data or not. Set to <code>true</code> to enable profiling. ',
        }),
    ),
  })
  .openapi({
    required: ['profilingEnabled'],
    description:
      ' Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. ',
  })
  .openapi('AgentOrchestrationConfig')

const ProfilingGroupArnSchema = z.string().openapi('ProfilingGroupArn')

const ComputePlatformSchema = z.enum(['Default', 'AWSLambda']).openapi('ComputePlatform')

const ProfilingGroupNameSchema = z
  .string()
  .regex(/^[\w-]+$/)
  .min(1)
  .max(255)
  .openapi('ProfilingGroupName')

const AggregatedProfileTimeSchema = z
  .object({
    period: AggregationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The aggregation period. This indicates the period during which an aggregation profile collects posted agent profiles for a profiling group. Use one of three valid durations that are specified using the ISO 8601 format. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>',
        }),
    ).exactOptional(),
    start: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The time that aggregation of posted agent profiles for a profiling group starts. The aggregation profile contains profiles posted by the agent starting at this time for an aggregation period specified by the <code>period</code> property of the <code>AggregatedProfileTime</code> object. </p> <p> Specify <code>start</code> using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes). ',
    required: [],
  })
  .openapi('AggregatedProfileTime')

const ProfilingStatusSchema = z
  .object({
    latestAgentOrchestratedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the profiling agent most recently pinged back. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.',
        }),
    ).exactOptional(),
    latestAgentProfileReportedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the most recent profile was received. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.',
        }),
    ).exactOptional(),
    latestAggregatedProfile: AggregatedProfileTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html"> <code>AggregatedProfileTime</code> </a> object that contains the aggregation period and start time for an aggregated profile. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile. ',
    required: [],
  })
  .openapi('ProfilingStatus')

const TagsMapSchema = z.record(z.string(), StringSchema).openapi('TagsMap')

const ProfilingGroupDescriptionSchema = z
  .object({
    agentOrchestrationConfig: AgentOrchestrationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AgentOrchestrationConfig.html"> <code>AgentOrchestrationConfig</code> </a> object that indicates if the profiling group is enabled for profiled or not. ',
        }),
    ).exactOptional(),
    arn: ProfilingGroupArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) identifying the profiling group resource.',
        }),
    ).exactOptional(),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The compute platform of the profiling group. If it is set to <code>AWSLambda</code>, then the profiled application runs on AWS Lambda. If it is set to <code>Default</code>, then the profiled application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. The default is <code>Default</code>. ',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the profiling group was created. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ).exactOptional(),
    name: ProfilingGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the profiling group.' }),
    ).exactOptional(),
    profilingStatus: ProfilingStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingStatus.html"> <code>ProfilingStatus</code> </a> object that includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile. ',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: ' A list of the tags that belong to this profiling group. ' }),
    ).exactOptional(),
    updatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date and time when the profiling group was last updated. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Contains information about a profiling group. ', required: [] })
  .openapi('ProfilingGroupDescription')

const CreateProfilingGroupResponseSchema = z
  .object({
    profilingGroup: ProfilingGroupDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the created profiling group. ',
        }),
    ),
  })
  .openapi({
    required: ['profilingGroup'],
    description: 'The structure representing the createProfilingGroupResponse.',
  })
  .openapi('CreateProfilingGroupResponse')

const DeleteProfilingGroupResponseSchema = z
  .object({})
  .openapi({ description: 'The structure representing the deleteProfilingGroupResponse.' })
  .openapi('DeleteProfilingGroupResponse')

const DescribeProfilingGroupResponseSchema = z
  .object({
    profilingGroup: ProfilingGroupDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. ',
        }),
    ),
  })
  .openapi({
    required: ['profilingGroup'],
    description: 'The structure representing the describeProfilingGroupResponse.',
  })
  .openapi('DescribeProfilingGroupResponse')

const PaginationTokenSchema = z
  .string()
  .regex(/^[\w-]+$/)
  .min(1)
  .max(64)
  .openapi('PaginationToken')

const FindingsReportIdSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .openapi('FindingsReportId')

const FindingsReportSummarySchema = z
  .object({
    id: FindingsReportIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The universally unique identifier (UUID) of the recommendation report.',
        }),
    ).exactOptional(),
    profileEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The end time of the period during which the metric is flagged as anomalous. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ).exactOptional(),
    profileStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.',
        }),
    ).exactOptional(),
    profilingGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the profiling group that is associated with the analysis data.',
        }),
    ).exactOptional(),
    totalNumberOfFindings: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of different recommendations that were found by the analysis.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about potential recommendations that might be created from the analysis of profiling data. ',
    required: [],
  })
  .openapi('FindingsReportSummary')

const FindingsReportSummariesSchema = z
  .array(FindingsReportSummarySchema)
  .openapi('FindingsReportSummaries')

const GetFindingsReportAccountSummaryResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>GetFindingsReportAccountSummary</code> request. When the results of a <code>GetFindingsReportAccountSummary</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    reportSummaries: FindingsReportSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The return list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects taht contain summaries of analysis results for all profiling groups in your AWS account.',
        }),
    ),
  })
  .openapi({
    required: ['reportSummaries'],
    description: 'The structure representing the GetFindingsReportAccountSummaryResponse.',
  })
  .openapi('GetFindingsReportAccountSummaryResponse')

const GetNotificationConfigurationResponseSchema = z
  .object({
    notificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The current notification configuration for this profiling group.',
        }),
    ),
  })
  .openapi({
    required: ['notificationConfiguration'],
    description: 'The structure representing the GetNotificationConfigurationResponse.',
  })
  .openapi('GetNotificationConfigurationResponse')

const RevisionIdSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .openapi('RevisionId')

const GetPolicyResponseSchema = z
  .object({
    policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON-formatted resource-based policy attached to the <code>ProfilingGroup</code>.',
        }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the current revision of the returned policy.',
        }),
    ),
  })
  .openapi({
    required: ['policy', 'revisionId'],
    description: 'The structure representing the <code>getPolicyResponse</code>.',
  })
  .openapi('GetPolicyResponse')

const AggregatedProfileSchema = z.string().openapi('AggregatedProfile')

const GetProfileResponseSchema = z
  .object({
    profile: AggregatedProfileSchema.and(
      z.any().openapi({ description: 'Information about the profile.' }),
    ),
  })
  .openapi({
    required: ['profile'],
    description: 'The structure representing the getProfileResponse.',
  })
  .openapi('GetProfileResponse')

const FeedbackTypeSchema = z.enum(['Positive', 'Negative']).openapi('FeedbackType')

const UserFeedbackSchema = z
  .object({
    type: FeedbackTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional <code>Positive</code> or <code>Negative</code> feedback submitted by the user about whether the recommendation is useful or not.',
        }),
    ),
  })
  .openapi({
    required: ['type'],
    description:
      'Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.',
  })
  .openapi('UserFeedback')

const AnomalyInstanceSchema = z
  .object({
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The end time of the period during which the metric is flagged as anomalous. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ).exactOptional(),
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The universally unique identifier (UUID) of an instance of an anomaly in a metric. ',
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start time of the period during which the metric is flagged as anomalous. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ),
    userFeedback: UserFeedbackSchema.and(
      z
        .any()
        .openapi({
          description: 'Feedback type on a specific instance of anomaly submitted by the user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['id', 'startTime'],
    description: 'The specific duration in which the metric is flagged as anomalous.',
  })
  .openapi('AnomalyInstance')

const AnomalyInstancesSchema = z.array(AnomalyInstanceSchema).openapi('AnomalyInstances')

const StringsSchema = z.array(StringSchema).openapi('Strings')

const MetricSchema = z
  .object({
    frameName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the method that appears as a frame in any stack in a profile. ',
        }),
    ),
    threadStates: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of application runtime thread states that is used to calculate the metric value for the frame. ',
        }),
    ),
    type: MetricTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A type that specifies how a metric for a frame is analyzed. The supported value <code>AggregatedRelativeTotalTime</code> is an aggregation of the metric value for one frame that is calculated across the occurences of all frames in a profile.',
        }),
    ),
  })
  .openapi({
    required: ['frameName', 'threadStates', 'type'],
    description:
      ' Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame. ',
  })
  .openapi('Metric')

const AnomalySchema = z
  .object({
    instances: AnomalyInstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of the instances of the detected anomalies during the requested period. ',
        }),
    ),
    metric: MetricSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Details about the metric that the analysis used when it detected the anomaly. The metric includes the name of the frame that was analyzed with the type and thread states used to derive the metric value for that frame. ',
        }),
    ),
    reason: StringSchema.and(
      z.any().openapi({ description: 'The reason for which metric was flagged as anomalous.' }),
    ),
  })
  .openapi({
    required: ['instances', 'metric', 'reason'],
    description:
      ' Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time. ',
  })
  .openapi('Anomaly')

const AnomaliesSchema = z.array(AnomalySchema).openapi('Anomalies')

const DoubleSchema = z.float64().openapi('Double')

const TargetFrameSchema = z.array(StringSchema).openapi('TargetFrame')

const TargetFramesSchema = z.array(TargetFrameSchema).openapi('TargetFrames')

const PercentageSchema = z.float64().min(0).max(100).openapi('Percentage')

const PatternSchema = z
  .object({
    countersToAggregate: StringsSchema.and(
      z
        .any()
        .openapi({
          description: ' A list of the different counters used to determine if there is a match. ',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the recommendation. This explains a potential inefficiency in a profiled application.',
        }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The universally unique identifier (UUID) of this pattern.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name for this pattern.' }),
    ).exactOptional(),
    resolutionSteps: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A string that contains the steps recommended to address the potential inefficiency. ',
        }),
    ).exactOptional(),
    targetFrames: TargetFramesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of frame names that were searched during the analysis that generated a recommendation.',
        }),
    ).exactOptional(),
    thresholdPercent: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The percentage of time an application spends in one method that triggers a recommendation. The percentage of time is the same as the percentage of the total gathered sample counts during analysis. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' A set of rules used to make a recommendation during an analysis. ',
    required: [],
  })
  .openapi('Pattern')

const MatchSchema = z
  .object({
    frameAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location in the profiling graph that contains a recommendation found during analysis.',
        }),
    ).exactOptional(),
    targetFramesIndex: IntegerSchema.and(
      z.any().openapi({ description: 'The target frame that triggered a match.' }),
    ).exactOptional(),
    thresholdBreachValue: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The value in the profile data that exceeded the recommendation threshold.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The part of a profile that contains a recommendation found during analysis.',
    required: [],
  })
  .openapi('Match')

const MatchesSchema = z.array(MatchSchema).openapi('Matches')

const RecommendationSchema = z
  .object({
    allMatchesCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'How many different places in the profile graph triggered a match.',
        }),
    ),
    allMatchesSum: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'How much of the total sample count is potentially affected.' }),
    ),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'End time of the profile that was used by this analysis. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.',
        }),
    ),
    pattern: PatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pattern that analysis recognized in the profile to make this recommendation.',
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time of the profile that was used by this analysis. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.',
        }),
    ),
    topMatches: MatchesSchema.and(
      z.any().openapi({ description: 'List of the matches with most impact. ' }),
    ),
  })
  .openapi({
    required: ['allMatchesCount', 'allMatchesSum', 'endTime', 'pattern', 'startTime', 'topMatches'],
    description: 'A potential improvement that was found from analyzing the profiling data.',
  })
  .openapi('Recommendation')

const RecommendationsSchema = z.array(RecommendationSchema).openapi('Recommendations')

const GetRecommendationsResponseSchema = z
  .object({
    anomalies: AnomaliesSchema.and(
      z
        .any()
        .openapi({
          description: ' The list of anomalies that the analysis has found for this profile. ',
        }),
    ),
    profileEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The end time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ),
    profileStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
        }),
    ),
    profilingGroupName: ProfilingGroupNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the profiling group the analysis data is about.' }),
    ),
    recommendations: RecommendationsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of recommendations that the analysis found for this profile.',
        }),
    ),
  })
  .openapi({
    required: [
      'anomalies',
      'profileEndTime',
      'profileStartTime',
      'profilingGroupName',
      'recommendations',
    ],
    description: 'The structure representing the GetRecommendationsResponse.',
  })
  .openapi('GetRecommendationsResponse')

const ListFindingsReportsResponseSchema = z
  .object({
    findingsReportSummaries: FindingsReportSummariesSchema.and(
      z.any().openapi({ description: 'The list of analysis results summaries.' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListFindingsReports</code> request. When the results of a <code>ListFindingsReports</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['findingsReportSummaries'],
    description: 'The structure representing the ListFindingsReportsResponse.',
  })
  .openapi('ListFindingsReportsResponse')

const ProfileTimeSchema = z
  .object({
    start: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time of a profile. It is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Contains the start time of a profile. ', required: [] })
  .openapi('ProfileTime')

const ProfileTimesSchema = z.array(ProfileTimeSchema).openapi('ProfileTimes')

const ListProfileTimesResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListProfileTimes</code> request. When the results of a <code>ListProfileTimes</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. ',
        }),
    ).exactOptional(),
    profileTimes: ProfileTimesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of start times of the available profiles for the aggregation period in the specified time range. ',
        }),
    ),
  })
  .openapi({
    required: ['profileTimes'],
    description: 'The structure representing the listProfileTimesResponse.',
  })
  .openapi('ListProfileTimesResponse')

const ProfilingGroupNamesSchema = z.array(ProfilingGroupNameSchema).openapi('ProfilingGroupNames')

const ProfilingGroupDescriptionsSchema = z
  .array(ProfilingGroupDescriptionSchema)
  .openapi('ProfilingGroupDescriptions')

const ListProfilingGroupsResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListProfilingGroups</code> request. When the results of a <code>ListProfilingGroups</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. ',
        }),
    ).exactOptional(),
    profilingGroupNames: ProfilingGroupNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A returned list of profiling group names. A list of the names is returned only if <code>includeDescription</code> is <code>false</code>, otherwise a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects is returned. ',
        }),
    ),
    profilingGroups: ProfilingGroupDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A returned list <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects is returned only if <code>includeDescription</code> is <code>true</code>, otherwise a list of profiling group names is returned. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['profilingGroupNames'],
    description: 'The structure representing the listProfilingGroupsResponse.',
  })
  .openapi('ListProfilingGroupsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of tags assigned to the specified resource. This is the list of tags returned in the response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PostAgentProfileResponseSchema = z
  .object({})
  .openapi({ description: 'The structure representing the postAgentProfileResponse.' })
  .openapi('PostAgentProfileResponse')

const PutPermissionResponseSchema = z
  .object({
    policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The JSON-formatted resource-based policy on the profiling group that includes the added permissions. ',
        }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A universally unique identifier (UUID) for the revision of the resource-based policy that includes the added permissions. The JSON-formatted policy is in the <code>policy</code> element of the response. ',
        }),
    ),
  })
  .openapi({
    required: ['policy', 'revisionId'],
    description: 'The structure representing the <code>putPermissionResponse</code>.',
  })
  .openapi('PutPermissionResponse')

const PrincipalSchema = z.string().openapi('Principal')

const RemoveNotificationChannelResponseSchema = z
  .object({
    notificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The new notification configuration for this profiling group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The structure representing the RemoveNotificationChannelResponse.',
    required: [],
  })
  .openapi('RemoveNotificationChannelResponse')

const RemovePermissionResponseSchema = z
  .object({
    policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The JSON-formatted resource-based policy on the profiling group after the specified permissions were removed. ',
        }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A universally unique identifier (UUID) for the revision of the resource-based policy after the specified permissions were removed. The updated JSON-formatted policy is in the <code>policy</code> element of the response. ',
        }),
    ),
  })
  .openapi({
    required: ['policy', 'revisionId'],
    description: 'The structure representing the <code>removePermissionResponse</code>.',
  })
  .openapi('RemovePermissionResponse')

const SubmitFeedbackResponseSchema = z
  .object({})
  .openapi({ description: 'The structure representing the SubmitFeedbackResponse.' })
  .openapi('SubmitFeedbackResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateProfilingGroupResponseSchema = z
  .object({
    profilingGroup: ProfilingGroupDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> that contains information about the returned updated profiling group. ',
        }),
    ),
  })
  .openapi({
    required: ['profilingGroup'],
    description: 'The structure representing the updateProfilingGroupResponse.',
  })
  .openapi('UpdateProfilingGroupResponse')

const ActionGroupSchema = z.literal('agentPermissions').openapi('ActionGroup')

const AddNotificationChannelsRequestSchema = z
  .object({
    channels: ChannelsSchema.and(
      z
        .any()
        .openapi({ description: 'One or 2 channels to report to when anomalies are detected.' }),
    ),
  })
  .openapi({
    required: ['channels'],
    title: 'AddNotificationChannelsRequest',
    description: 'The structure representing the AddNotificationChannelsRequest.',
  })
  .openapi('AddNotificationChannelsRequest')

const AgentParameterFieldSchema = z
  .enum([
    'SamplingIntervalInMilliseconds',
    'ReportingIntervalInMilliseconds',
    'MinimumTimeForReportingInMilliseconds',
    'MemoryUsageLimitPercent',
    'MaxStackDepth',
  ])
  .openapi('AgentParameterField')

const AgentProfileSchema = z.string().openapi('AgentProfile')

const AnomalyInstanceIdSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .openapi('AnomalyInstanceId')

const FrameMetricsSchema = z.array(FrameMetricSchema).openapi('FrameMetrics')

const PeriodSchema = z.string().min(1).max(64).openapi('Period')

const BatchGetFrameMetricDataRequestSchema = z
  .object({
    frameMetrics: FrameMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The details of the metrics that are used to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'BatchGetFrameMetricDataRequest',
    description: 'The structure representing the BatchGetFrameMetricDataRequest.',
    required: [],
  })
  .openapi('BatchGetFrameMetricDataRequest')

const ClientTokenSchema = z
  .string()
  .regex(/^[\w-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientToken')

const FleetInstanceIdSchema = z.string().min(1).max(255).openapi('FleetInstanceId')

const MetadataSchema = z.record(z.string(), StringSchema).openapi('Metadata')

const ConfigureAgentRequestSchema = z
  .object({
    fleetInstanceId: FleetInstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            " A universally unique identifier (UUID) for a profiling instance. For example, if the profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS Fargate container, it is the container's task ID. ",
        }),
    ).exactOptional(),
    metadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Metadata captured about the compute platform the agent is running on. It includes information about sampling and reporting. The valid fields are:</p> <ul> <li> <p> <code>COMPUTE_PLATFORM</code> - The compute platform on which the agent is running </p> </li> <li> <p> <code>AGENT_ID</code> - The ID for an agent instance. </p> </li> <li> <p> <code>AWS_REQUEST_ID</code> - The AWS request ID of a Lambda invocation. </p> </li> <li> <p> <code>EXECUTION_ENVIRONMENT</code> - The execution environment a Lambda function is running on. </p> </li> <li> <p> <code>LAMBDA_FUNCTION_ARN</code> - The Amazon Resource Name (ARN) that is used to invoke a Lambda function. </p> </li> <li> <p> <code>LAMBDA_MEMORY_LIMIT_IN_MB</code> - The memory allocated to a Lambda function. </p> </li> <li> <p> <code>LAMBDA_REMAINING_TIME_IN_MILLISECONDS</code> - The time in milliseconds before execution of a Lambda function times out. </p> </li> <li> <p> <code>LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS</code> - The time in milliseconds between two invocations of a Lambda function. </p> </li> <li> <p> <code>LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS</code> - The time in milliseconds for the previous Lambda invocation. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ConfigureAgentRequest',
    description: 'The structure representing the configureAgentRequest.',
    required: [],
  })
  .openapi('ConfigureAgentRequest')

const CreateProfilingGroupRequestSchema = z
  .object({
    agentOrchestrationConfig: AgentOrchestrationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether profiling is enabled or disabled for the created profiling group. ',
        }),
    ).exactOptional(),
    computePlatform: ComputePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used. ',
        }),
    ).exactOptional(),
    profilingGroupName: ProfilingGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the profiling group to create.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: ' A list of tags to add to the created profiling group. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['profilingGroupName'],
    title: 'CreateProfilingGroupRequest',
    description: 'The structure representing the createProfiliingGroupRequest.',
  })
  .openapi('CreateProfilingGroupRequest')

const DeleteProfilingGroupRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteProfilingGroupRequest',
    description: 'The structure representing the deleteProfilingGroupRequest.',
  })
  .openapi('DeleteProfilingGroupRequest')

const DescribeProfilingGroupRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeProfilingGroupRequest',
    description: 'The structure representing the describeProfilingGroupRequest.',
  })
  .openapi('DescribeProfilingGroupRequest')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const GetFindingsReportAccountSummaryRequestSchema = z
  .object({})
  .openapi({
    title: 'GetFindingsReportAccountSummaryRequest',
    description: 'The structure representing the GetFindingsReportAccountSummaryRequest.',
  })
  .openapi('GetFindingsReportAccountSummaryRequest')

const GetNotificationConfigurationRequestSchema = z
  .object({})
  .openapi({
    title: 'GetNotificationConfigurationRequest',
    description: 'The structure representing the GetNotificationConfigurationRequest.',
  })
  .openapi('GetNotificationConfigurationRequest')

const GetPolicyRequestSchema = z
  .object({})
  .openapi({
    title: 'GetPolicyRequest',
    description: ' The structure representing the <code>getPolicyRequest</code>. ',
  })
  .openapi('GetPolicyRequest')

const MaxDepthSchema = z.int().min(1).max(10000).openapi('MaxDepth')

const GetProfileRequestSchema = z
  .object({})
  .openapi({
    title: 'GetProfileRequest',
    description: 'The structure representing the getProfileRequest.',
  })
  .openapi('GetProfileRequest')

const LocaleSchema = z
  .string()
  .openapi({
    description:
      'BCP47 language code. Supported locales: de-DE, en-GB, en-US, es-ES, fr-FR, it-IT, ja-JP, ko-KR, pt-BR, zh-CN, zh-TW',
  })
  .openapi('Locale')

const GetRecommendationsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetRecommendationsRequest',
    description: 'The structure representing the GetRecommendationsRequest.',
  })
  .openapi('GetRecommendationsRequest')

const ListFindingsReportsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListFindingsReportsRequest',
    description: 'The structure representing the ListFindingsReportsRequest.',
  })
  .openapi('ListFindingsReportsRequest')

const OrderBySchema = z.enum(['TimestampDescending', 'TimestampAscending']).openapi('OrderBy')

const ListProfileTimesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListProfileTimesRequest',
    description: 'The structure representing the listProfileTimesRequest.',
  })
  .openapi('ListProfileTimesRequest')

const ListProfilingGroupsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListProfilingGroupsRequest',
    description: 'The structure representing the listProfilingGroupsRequest.',
  })
  .openapi('ListProfilingGroupsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const MetadataFieldSchema = z
  .enum([
    'ComputePlatform',
    'AgentId',
    'AwsRequestId',
    'ExecutionEnvironment',
    'LambdaFunctionArn',
    'LambdaMemoryLimitInMB',
    'LambdaRemainingTimeInMilliseconds',
    'LambdaTimeGapBetweenInvokesInMilliseconds',
    'LambdaPreviousExecutionTimeInMilliseconds',
  ])
  .openapi('MetadataField')

const PostAgentProfileRequestSchema = z
  .object({
    agentProfile: AgentProfileSchema.and(
      z.any().openapi({ description: ' The submitted profiling data. ' }),
    ),
  })
  .openapi({
    required: ['agentProfile'],
    title: 'PostAgentProfileRequest',
    description: 'The structure representing the postAgentProfileRequest.',
  })
  .openapi('PostAgentProfileRequest')

const PrincipalsSchema = z.array(PrincipalSchema).min(1).max(50).openapi('Principals')

const PutPermissionRequestSchema = z
  .object({
    principals: PrincipalsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not are supported in the ARNs. ',
        }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A universally unique identifier (UUID) for the revision of the policy you are adding to the profiling group. Do not specify this when you add permissions to a profiling group for the first time. If a policy already exists on the profiling group, you must specify the <code>revisionId</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['principals'],
    title: 'PutPermissionRequest',
    description: 'The structure representing the <code>putPermissionRequest</code>.',
  })
  .openapi('PutPermissionRequest')

const RemoveNotificationChannelRequestSchema = z
  .object({})
  .openapi({
    title: 'RemoveNotificationChannelRequest',
    description: 'The structure representing the RemoveNotificationChannelRequest.',
  })
  .openapi('RemoveNotificationChannelRequest')

const RemovePermissionRequestSchema = z
  .object({})
  .openapi({
    title: 'RemovePermissionRequest',
    description:
      ' <pre><code> The structure representing the &lt;code&gt;removePermissionRequest&lt;/code&gt;.&lt;/p&gt; </code></pre>',
  })
  .openapi('RemovePermissionRequest')

const SubmitFeedbackRequestSchema = z
  .object({
    comment: StringSchema.and(
      z.any().openapi({ description: 'Optional feedback about this anomaly.' }),
    ).exactOptional(),
    type: FeedbackTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['type'],
    title: 'SubmitFeedbackRequest',
    description: 'The structure representing the SubmitFeedbackRequest.',
  })
  .openapi('SubmitFeedbackRequest')

const TagKeysSchema = z.array(StringSchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({ description: ' The list of tags that are added to the specified resource. ' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateProfilingGroupRequestSchema = z
  .object({
    agentOrchestrationConfig: AgentOrchestrationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether profiling is enabled or disabled for a profiling group. ',
        }),
    ),
  })
  .openapi({
    required: ['agentOrchestrationConfig'],
    title: 'UpdateProfilingGroupRequest',
    description: 'The structure representing the updateProfilingGroupRequest.',
  })
  .openapi('UpdateProfilingGroupRequest')

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

export const getProfilingGroupsProfilingGroupNameNotificationConfigurationRoute = createRoute({
  method: 'get',
  path: '/profilingGroups/{profilingGroupName}/notificationConfiguration',
  description: 'Get the current configuration for anomaly notifications for a profiling group.',
  operationId: 'GetNotificationConfiguration',
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
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description:
              'The name of the profiling group we want to get the notification configuration for.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNotificationConfigurationResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postProfilingGroupsProfilingGroupNameNotificationConfigurationRoute = createRoute({
  method: 'post',
  path: '/profilingGroups/{profilingGroupName}/notificationConfiguration',
  description: 'Add up to 2 anomaly notifications channels for a profiling group.',
  operationId: 'AddNotificationChannels',
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
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description:
              'The name of the profiling group that we are setting up notifications for.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              channels: z
                .array(ChannelSchema)
                .min(1)
                .max(2)
                .openapi({
                  description: 'One or 2 channels to report to when anomalies are detected.',
                }),
            })
            .openapi({ required: ['channels'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddNotificationChannelsResponseSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postProfilingGroupsProfilingGroupNameFramesDashMetricsRoute = createRoute({
  method: 'post',
  path: '/profilingGroups/{profilingGroupName}/frames/-/metrics',
  description:
    ' Returns the time series of values for a requested list of frame metrics from a time period.',
  operationId: 'BatchGetFrameMetricData',
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
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            description:
              ' The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      period: z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'period',
            in: 'query',
            required: false,
            description:
              ' The duration of the frame metrics used to return the time series values. Specify using the ISO 8601 format. The maximum period duration is one day (<code>PT24H</code> or <code>P1D</code>). ',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            description:
              ' The start time of the time period for the frame metrics used to return the time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      targetResolution: z
        .enum(['PT5M', 'PT1H', 'P1D'])
        .exactOptional()
        .openapi({
          param: {
            name: 'targetResolution',
            in: 'query',
            required: false,
            description:
              '<p>The requested resolution of time steps for the returned time series of values. If the requested target resolution is not available due to data not being retained we provide a best effort result by falling back to the most granular available resolution after the target resolution. There are 3 valid values. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>',
            schema: { type: 'string', enum: ['PT5M', 'PT1H', 'P1D'] },
          },
        }),
    }),
    params: z.object({
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description:
              ' The name of the profiling group associated with the the frame metrics used to return the time series values. ',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              frameMetrics: z
                .array(FrameMetricSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' The details of the metrics that are used to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.',
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
      content: { 'application/json': { schema: BatchGetFrameMetricDataResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postProfilingGroupsProfilingGroupNameConfigureAgentRoute = createRoute({
  method: 'post',
  path: '/profilingGroups/{profilingGroupName}/configureAgent',
  description:
    ' Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. ',
  operationId: 'ConfigureAgent',
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
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description:
              ' The name of the profiling group for which the configured agent is collecting profiling data. ',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fleetInstanceId: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    " A universally unique identifier (UUID) for a profiling instance. For example, if the profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS Fargate container, it is the container's task ID. ",
                }),
              metadata: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p> Metadata captured about the compute platform the agent is running on. It includes information about sampling and reporting. The valid fields are:</p> <ul> <li> <p> <code>COMPUTE_PLATFORM</code> - The compute platform on which the agent is running </p> </li> <li> <p> <code>AGENT_ID</code> - The ID for an agent instance. </p> </li> <li> <p> <code>AWS_REQUEST_ID</code> - The AWS request ID of a Lambda invocation. </p> </li> <li> <p> <code>EXECUTION_ENVIRONMENT</code> - The execution environment a Lambda function is running on. </p> </li> <li> <p> <code>LAMBDA_FUNCTION_ARN</code> - The Amazon Resource Name (ARN) that is used to invoke a Lambda function. </p> </li> <li> <p> <code>LAMBDA_MEMORY_LIMIT_IN_MB</code> - The memory allocated to a Lambda function. </p> </li> <li> <p> <code>LAMBDA_REMAINING_TIME_IN_MILLISECONDS</code> - The time in milliseconds before execution of a Lambda function times out. </p> </li> <li> <p> <code>LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS</code> - The time in milliseconds between two invocations of a Lambda function. </p> </li> <li> <p> <code>LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS</code> - The time in milliseconds for the previous Lambda invocation. </p> </li> </ul>',
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
      content: { 'application/json': { schema: ConfigureAgentResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postProfilingGroupsClientTokenRoute = createRoute({
  method: 'post',
  path: '/profilingGroups#clientToken',
  description: 'Creates a profiling group.',
  operationId: 'CreateProfilingGroup',
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
        .regex(/^[\w-]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: true,
            description:
              ' Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental creation of duplicate profiling groups if there are failures and retries. ',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              agentOrchestrationConfig: z
                .object({
                  profilingEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>Boolean</code> that specifies whether the profiling agent collects profiling data or not. Set to <code>true</code> to enable profiling. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. ',
                  required: [],
                }),
              computePlatform: z
                .enum(['Default', 'AWSLambda'])
                .exactOptional()
                .openapi({
                  description:
                    ' The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used. ',
                }),
              profilingGroupName: z
                .string()
                .regex(/^[\w-]+$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the profiling group to create.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description: ' A list of tags to add to the created profiling group. ',
                }),
            })
            .openapi({ required: ['profilingGroupName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProfilingGroupResponseSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getProfilingGroupsProfilingGroupNameRoute = createRoute({
  method: 'get',
  path: '/profilingGroups/{profilingGroupName}',
  description:
    ' Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. ',
  operationId: 'DescribeProfilingGroup',
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
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description: ' The name of the profiling group to get information about. ',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProfilingGroupResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putProfilingGroupsProfilingGroupNameRoute = createRoute({
  method: 'put',
  path: '/profilingGroups/{profilingGroupName}',
  description: 'Updates a profiling group.',
  operationId: 'UpdateProfilingGroup',
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
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description: 'The name of the profiling group to update.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              agentOrchestrationConfig: z
                .object({
                  profilingEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A <code>Boolean</code> that specifies whether the profiling agent collects profiling data or not. Set to <code>true</code> to enable profiling. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. ',
                  required: [],
                }),
            })
            .openapi({ required: ['agentOrchestrationConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProfilingGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteProfilingGroupsProfilingGroupNameRoute = createRoute({
  method: 'delete',
  path: '/profilingGroups/{profilingGroupName}',
  description: 'Deletes a profiling group.',
  operationId: 'DeleteProfilingGroup',
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
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description: 'The name of the profiling group to delete.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProfilingGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getInternalFindingsReportsRoute = createRoute({
  method: 'get',
  path: '/internal/findingsReports',
  description:
    ' Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. ',
  operationId: 'GetFindingsReportAccountSummary',
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
      dailyReportsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dailyReportsOnly',
            in: 'query',
            required: false,
            description:
              'A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>, analysis data is returned from smaller time windows (for example, one hour).',
            schema: { type: 'boolean' },
          },
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
            description:
              'The maximum number of results returned by <code> GetFindingsReportAccountSummary</code> in paginated output. When this parameter is used, <code>GetFindingsReportAccountSummary</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>GetFindingsReportAccountSummary</code> request with the returned <code>nextToken</code> value.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              '<p>The <code>nextToken</code> value returned from a previous paginated <code>GetFindingsReportAccountSummary</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFindingsReportAccountSummaryResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getProfilingGroupsProfilingGroupNamePolicyRoute = createRoute({
  method: 'get',
  path: '/profilingGroups/{profilingGroupName}/policy',
  description: ' Returns the JSON-formatted resource-based policy on a profiling group. ',
  operationId: 'GetPolicy',
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
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description: 'The name of the profiling group.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPolicyResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getProfilingGroupsProfilingGroupNameProfileRoute = createRoute({
  method: 'get',
  path: '/profilingGroups/{profilingGroupName}/profile',
  description:
    "<p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>",
  operationId: 'GetProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept',
            in: 'header',
            required: false,
            description:
              '<p> The format of the returned profiling data. The format maps to the <code>Accept</code> and <code>Content-Type</code> headers of the HTTP request. You can specify one of the following: or the default . </p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/json&lt;/code&gt; — standard JSON format &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/x-amzn-ion&lt;/code&gt; — the Amazon Ion data format. For more information, see &lt;a href=&quot;http://amzn.github.io/ion-docs/&quot;&gt;Amazon Ion&lt;/a&gt;. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; </code></pre>',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            description:
              '<p> The end time of the requested profile. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. </p> <p> If you specify <code>endTime</code>, then you must also specify <code>period</code> or <code>startTime</code>, but not both. </p>',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      maxDepth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxDepth',
            in: 'query',
            required: false,
            description:
              ' The maximum depth of the stacks in the code that is represented in the aggregated profile. For example, if CodeGuru Profiler finds a method <code>A</code>, which calls method <code>B</code>, which calls method <code>C</code>, which calls method <code>D</code>, then the depth is 4. If the <code>maxDepth</code> is set to 2, then the aggregated profile contains representations of methods <code>A</code> and <code>B</code>. ',
            schema: { type: 'integer', minimum: 1, maximum: 10000 },
          },
        }),
      period: z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'period',
            in: 'query',
            required: false,
            description:
              '<p> Used with <code>startTime</code> or <code>endTime</code> to specify the time range for the returned aggregated profile. Specify using the ISO 8601 format. For example, <code>P1DT1H1M1S</code>. </p> <pre><code> &lt;p&gt; To get the latest aggregated profile, specify only &lt;code&gt;period&lt;/code&gt;. &lt;/p&gt; </code></pre>',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            description:
              '<p>The start time of the profile to get. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</p> <pre><code> &lt;p&gt; If you specify &lt;code&gt;startTime&lt;/code&gt;, then you must also specify &lt;code&gt;period&lt;/code&gt; or &lt;code&gt;endTime&lt;/code&gt;, but not both. &lt;/p&gt; </code></pre>',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
    params: z.object({
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description: 'The name of the profiling group to get.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProfileResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRoute =
  createRoute({
    method: 'get',
    path: '/internal/profilingGroups/{profilingGroupName}/recommendations#endTime&startTime',
    description:
      ' Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. ',
    operationId: 'GetRecommendations',
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
        endTime: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'endTime',
              in: 'query',
              required: true,
              description:
                ' The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
              schema: { type: 'string', format: 'date-time' },
            },
          }),
        locale: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'locale',
              in: 'query',
              required: false,
              description:
                '<p> The language used to provide analysis. Specify using a string that is one of the following <code>BCP 47</code> language codes. </p> <ul> <li> <p> <code>de-DE</code> - German, Germany </p> </li> <li> <p> <code>en-GB</code> - English, United Kingdom </p> </li> <li> <p> <code>en-US</code> - English, United States </p> </li> <li> <p> <code>es-ES</code> - Spanish, Spain </p> </li> <li> <p> <code>fr-FR</code> - French, France </p> </li> <li> <p> <code>it-IT</code> - Italian, Italy </p> </li> <li> <p> <code>ja-JP</code> - Japanese, Japan </p> </li> <li> <p> <code>ko-KR</code> - Korean, Republic of Korea </p> </li> <li> <p> <code>pt-BR</code> - Portugese, Brazil </p> </li> <li> <p> <code>zh-CN</code> - Chinese, China </p> </li> <li> <p> <code>zh-TW</code> - Chinese, Taiwan </p> </li> </ul>',
              schema: {
                type: 'string',
                description:
                  'BCP47 language code. Supported locales: de-DE, en-GB, en-US, es-ES, fr-FR, it-IT, ja-JP, ko-KR, pt-BR, zh-CN, zh-TW',
              },
            },
            description:
              'BCP47 language code. Supported locales: de-DE, en-GB, en-US, es-ES, fr-FR, it-IT, ja-JP, ko-KR, pt-BR, zh-CN, zh-TW',
          }),
        startTime: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'startTime',
              in: 'query',
              required: true,
              description:
                ' The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
              schema: { type: 'string', format: 'date-time' },
            },
          }),
      }),
      params: z.object({
        profilingGroupName: z
          .string()
          .regex(/^[\w-]+$/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'profilingGroupName',
              in: 'path',
              required: true,
              description: ' The name of the profiling group to get analysis data about. ',
              schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetRecommendationsResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRoute =
  createRoute({
    method: 'get',
    path: '/internal/profilingGroups/{profilingGroupName}/findingsReports#endTime&startTime',
    description: 'List the available reports for a given profiling group and time range.',
    operationId: 'ListFindingsReports',
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
        dailyReportsOnly: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'dailyReportsOnly',
              in: 'query',
              required: false,
              description:
                'A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>, analysis data is returned from smaller time windows (for example, one hour).',
              schema: { type: 'boolean' },
            },
          }),
        endTime: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'endTime',
              in: 'query',
              required: true,
              description:
                ' The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
              schema: { type: 'string', format: 'date-time' },
            },
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
              description:
                'The maximum number of report results returned by <code>ListFindingsReports</code> in paginated output. When this parameter is used, <code>ListFindingsReports</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFindingsReports</code> request with the returned <code>nextToken</code> value.',
              schema: { type: 'integer', minimum: 1, maximum: 1000 },
            },
          }),
        nextToken: z
          .string()
          .regex(/^[\w-]+$/)
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description:
                '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListFindingsReportsRequest</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
              schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 64 },
            },
          }),
        startTime: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'startTime',
              in: 'query',
              required: true,
              description:
                ' The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. ',
              schema: { type: 'string', format: 'date-time' },
            },
          }),
      }),
      params: z.object({
        profilingGroupName: z
          .string()
          .regex(/^[\w-]+$/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'profilingGroupName',
              in: 'path',
              required: true,
              description:
                'The name of the profiling group from which to search for analysis data.',
              schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListFindingsReportsResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeRoute =
  createRoute({
    method: 'get',
    path: '/profilingGroups/{profilingGroupName}/profileTimes#endTime&period&startTime',
    description:
      'Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.',
    operationId: 'ListProfileTimes',
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
        endTime: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'endTime',
              in: 'query',
              required: true,
              description: 'The end time of the time range from which to list the profiles.',
              schema: { type: 'string', format: 'date-time' },
            },
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
              description:
                'The maximum number of profile time results returned by <code>ListProfileTimes</code> in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfileTimes</code> request with the returned <code>nextToken</code> value. ',
              schema: { type: 'integer', minimum: 1, maximum: 1000 },
            },
          }),
        nextToken: z
          .string()
          .regex(/^[\w-]+$/)
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description:
                '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
              schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 64 },
            },
          }),
        orderBy: z
          .enum(['TimestampDescending', 'TimestampAscending'])
          .exactOptional()
          .openapi({
            param: {
              name: 'orderBy',
              in: 'query',
              required: false,
              description:
                'The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>. ',
              schema: { type: 'string', enum: ['TimestampDescending', 'TimestampAscending'] },
            },
          }),
        period: z
          .enum(['PT5M', 'PT1H', 'P1D'])
          .openapi({
            param: {
              name: 'period',
              in: 'query',
              required: true,
              description:
                '<p> The aggregation period. This specifies the period during which an aggregation profile collects posted agent profiles for a profiling group. There are 3 valid values. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>',
              schema: { type: 'string', enum: ['PT5M', 'PT1H', 'P1D'] },
            },
          }),
        startTime: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'startTime',
              in: 'query',
              required: true,
              description: 'The start time of the time range from which to list the profiles.',
              schema: { type: 'string', format: 'date-time' },
            },
          }),
      }),
      params: z.object({
        profilingGroupName: z
          .string()
          .regex(/^[\w-]+$/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'profilingGroupName',
              in: 'path',
              required: true,
              description: 'The name of the profiling group.',
              schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListProfileTimesResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const getProfilingGroupsRoute = createRoute({
  method: 'get',
  path: '/profilingGroups',
  description:
    ' Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. ',
  operationId: 'ListProfilingGroups',
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
      includeDescription: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDescription',
            in: 'query',
            required: false,
            description:
              'A <code>Boolean</code> value indicating whether to include a description. If <code>true</code>, then a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects that contain detailed information about profiling groups is returned. If <code>false</code>, then a list of profiling group names is returned.',
            schema: { type: 'boolean' },
          },
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
            description:
              'The maximum number of profiling groups results returned by <code>ListProfilingGroups</code> in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfilingGroups</code> request with the returned <code>nextToken</code> value. ',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProfilingGroupsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: ' Returns a list of the tags that are assigned to a specified resource. ',
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
            description:
              ' The Amazon Resource Name (ARN) of the resource that contains the tags to return. ',
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

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: ' Use to assign one or more tags to a resource. ',
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
            description:
              ' The Amazon Resource Name (ARN) of the resource that the tags are added to. ',
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
                .record(z.string(), StringSchema)
                .openapi({
                  description: ' The list of tags that are added to the specified resource. ',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
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

export const postProfilingGroupsProfilingGroupNameAgentProfileContentTypeRoute = createRoute({
  method: 'post',
  path: '/profilingGroups/{profilingGroupName}/agentProfile#Content-Type',
  description:
    ' Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. ',
  operationId: 'PostAgentProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'Content-Type': z
        .string()
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            required: true,
            description:
              '<p> The format of the submitted profiling data. The format maps to the <code>Accept</code> and <code>Content-Type</code> headers of the HTTP request. You can specify one of the following: or the default . </p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/json&lt;/code&gt; — standard JSON format &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;application/x-amzn-ion&lt;/code&gt; — the Amazon Ion data format. For more information, see &lt;a href=&quot;http://amzn.github.io/ion-docs/&quot;&gt;Amazon Ion&lt;/a&gt;. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; </code></pre>',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      profileToken: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'profileToken',
            in: 'query',
            required: false,
            description:
              ' Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental submission of duplicate profiling data if there are failures and retries. ',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description:
              ' The name of the profiling group with the aggregated profile that receives the submitted profiling data. ',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              agentProfile: z.string().openapi({ description: ' The submitted profiling data. ' }),
            })
            .openapi({ required: ['agentProfile'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: PostAgentProfileResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putProfilingGroupsProfilingGroupNamePolicyActionGroupRoute = createRoute({
  method: 'put',
  path: '/profilingGroups/{profilingGroupName}/policy/{actionGroup}',
  description:
    "<p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>",
  operationId: 'PutPermission',
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
      actionGroup: z
        .literal('agentPermissions')
        .openapi({
          param: {
            name: 'actionGroup',
            in: 'path',
            required: true,
            description:
              ' Specifies an action group that contains permissions to add to a profiling group resource. One action group is supported, <code>agentPermissions</code>, which grants permission to perform actions required by the profiling agent, <code>ConfigureAgent</code> and <code>PostAgentProfile</code> permissions. ',
            schema: { type: 'string', enum: ['agentPermissions'] },
          },
        }),
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description: 'The name of the profiling group to grant access to.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              principals: z
                .array(PrincipalSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    ' A list ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not are supported in the ARNs. ',
                }),
              revisionId: z
                .string()
                .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
                .exactOptional()
                .openapi({
                  description:
                    ' A universally unique identifier (UUID) for the revision of the policy you are adding to the profiling group. Do not specify this when you add permissions to a profiling group for the first time. If a policy already exists on the profiling group, you must specify the <code>revisionId</code>. ',
                }),
            })
            .openapi({ required: ['principals'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPermissionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdRoute =
  createRoute({
    method: 'delete',
    path: '/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}',
    description: 'Remove one anomaly notifications channel for a profiling group.',
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
        channelId: z
          .string()
          .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
          .openapi({
            param: {
              name: 'channelId',
              in: 'path',
              required: true,
              description: 'The id of the channel that we want to stop receiving notifications.',
              schema: {
                type: 'string',
                pattern: '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}',
              },
            },
          }),
        profilingGroupName: z
          .string()
          .regex(/^[\w-]+$/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'profilingGroupName',
              in: 'path',
              required: true,
              description:
                'The name of the profiling group we want to change notification configuration for.',
              schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
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
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdRoute = createRoute({
  method: 'delete',
  path: '/profilingGroups/{profilingGroupName}/policy/{actionGroup}#revisionId',
  description:
    ' Removes permissions from a profiling group\'s resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. ',
  operationId: 'RemovePermission',
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
      actionGroup: z
        .literal('agentPermissions')
        .openapi({
          param: {
            name: 'actionGroup',
            in: 'path',
            required: true,
            description:
              " Specifies an action group that contains the permissions to remove from a profiling group's resource-based policy. One action group is supported, <code>agentPermissions</code>, which grants <code>ConfigureAgent</code> and <code>PostAgentProfile</code> permissions. ",
            schema: { type: 'string', enum: ['agentPermissions'] },
          },
        }),
      profilingGroupName: z
        .string()
        .regex(/^[\w-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'profilingGroupName',
            in: 'path',
            required: true,
            description: 'The name of the profiling group.',
            schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      revisionId: z
        .string()
        .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
        .openapi({
          param: {
            name: 'revisionId',
            in: 'query',
            required: true,
            description:
              ' A universally unique identifier (UUID) for the revision of the resource-based policy from which you want to remove permissions. ',
            schema: {
              type: 'string',
              pattern: '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemovePermissionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRoute =
  createRoute({
    method: 'post',
    path: '/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback',
    description:
      'Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.',
    operationId: 'SubmitFeedback',
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
        anomalyInstanceId: z
          .string()
          .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
          .openapi({
            param: {
              name: 'anomalyInstanceId',
              in: 'path',
              required: true,
              description:
                'The universally unique identifier (UUID) of the <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AnomalyInstance.html"> <code>AnomalyInstance</code> </a> object that is included in the analysis data.',
              schema: {
                type: 'string',
                pattern: '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}',
              },
            },
          }),
        profilingGroupName: z
          .string()
          .regex(/^[\w-]+$/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'profilingGroupName',
              in: 'path',
              required: true,
              description:
                'The name of the profiling group that is associated with the analysis data.',
              schema: { type: 'string', pattern: '^[\\w-]+$', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                comment: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Optional feedback about this anomaly.' }),
                type: z
                  .enum(['Positive', 'Negative'])
                  .openapi({
                    description:
                      ' The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>. ',
                  }),
              })
              .openapi({ required: ['type'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      204: {
        description: 'Success',
        content: { 'application/json': { schema: SubmitFeedbackResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: ' Use to remove one or more tags from a resource. ',
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
            description:
              ' The Amazon Resource Name (ARN) of the resource that contains the tags to remove. ',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              ' A list of tag keys. Existing tags of resources with keys in this list are removed from the specified resource. ',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
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
