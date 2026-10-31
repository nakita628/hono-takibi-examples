import { createRoute, z } from '@hono/zod-openapi'

const TraceIdSchema = z.string().min(1).max(35).openapi('TraceId')

const NullableDoubleSchema = z.float64().openapi('NullableDouble')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const SegmentIdSchema = z.string().openapi('SegmentId')

const SegmentDocumentSchema = z.string().min(1).openapi('SegmentDocument')

const SegmentSchema = z
  .object({
    Id: SegmentIdSchema.and(z.any().openapi({ description: "The segment's ID." })).exactOptional(),
    Document: SegmentDocumentSchema.and(
      z.any().openapi({ description: 'The segment document.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('Segment')

const SegmentListSchema = z.array(SegmentSchema).openapi('SegmentList')

const TraceSchema = z
  .object({
    Id: TraceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the request that generated the trace's segments and subsegments.",
        }),
    ).exactOptional(),
    Duration: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time in seconds between the start time of the root segment and the end time of the last segment that completed.',
        }),
    ).exactOptional(),
    LimitExceeded: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'LimitExceeded is set to true when the trace has exceeded the <code>Trace document size</code> limit. For more information about this limit and other X-Ray limits and quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/xray.html">Amazon Web Services X-Ray endpoints and quotas</a>.',
        }),
    ).exactOptional(),
    Segments: SegmentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Segment documents for the segments and subsegments that comprise the trace.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of segment documents with matching trace IDs.',
    required: [],
  })
  .openapi('Trace')

const TraceListSchema = z.array(TraceSchema).openapi('TraceList')

const UnprocessedTraceIdListSchema = z.array(TraceIdSchema).openapi('UnprocessedTraceIdList')

const StringSchema = z.string().openapi('String')

const BatchGetTracesResultSchema = z
  .object({
    Traces: TraceListSchema.and(
      z.any().openapi({ description: 'Full traces for the specified requests.' }),
    ).exactOptional(),
    UnprocessedTraceIds: UnprocessedTraceIdListSchema.and(
      z.any().openapi({ description: "Trace IDs of requests that haven't been processed." }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetTracesResult')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ThrottledExceptionSchema = z.any().openapi('ThrottledException')

const InsightsConfigurationSchema = z
  .object({
    InsightsEnabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set the InsightsEnabled value to true to enable insights or false to disable insights.',
        }),
    ).exactOptional(),
    NotificationsEnabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The structure containing configurations related to insights.',
    required: [],
  })
  .openapi('InsightsConfiguration')

const GroupSchema = z
  .object({
    GroupName: StringSchema.and(
      z.any().openapi({ description: 'The unique case-sensitive name of the group.' }),
    ).exactOptional(),
    GroupARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the group generated based on the GroupName.',
        }),
    ).exactOptional(),
    FilterExpression: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The filter expression defining the parameters to include traces.',
        }),
    ).exactOptional(),
    InsightsConfiguration: InsightsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The structure containing configurations related to insights.</p> <ul> <li> <p>The InsightsEnabled boolean can be set to true to enable insights for the group or false to disable insights for the group.</p> </li> <li> <p>The NotificationsEnabled boolean can be set to true to enable insights notifications through Amazon EventBridge for the group.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details and metadata for a group.', required: [] })
  .openapi('Group')

const CreateGroupResultSchema = z
  .object({
    Group: GroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The group that was created. Contains the name of the group that was created, the Amazon Resource Name (ARN) of the group that was generated based on the group name, the filter expression, and the insight configuration that was assigned to the group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupResult')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag key, such as <code>Stage</code> or <code>Name</code>. A tag key cannot be empty. The key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> ',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional tag value, such as <code>Production</code> or <code>test-only</code>. The value can be a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> ',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>A map that contains tag keys and tag values to attach to an Amazon Web Services X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don\'t use <code>aws:</code> as a prefix for keys; it\'s reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul>',
  })
  .openapi('Tag')

const RuleNameSchema = z.string().min(1).max(32).openapi('RuleName')

const ResourceARNSchema = z.string().max(500).openapi('ResourceARN')

const PrioritySchema = z.int().min(1).max(9999).openapi('Priority')

const FixedRateSchema = z.float64().min(0).max(1).openapi('FixedRate')

const ReservoirSizeSchema = z.int().min(0).openapi('ReservoirSize')

const ServiceNameSchema = z.string().max(64).openapi('ServiceName')

const ServiceTypeSchema = z.string().max(64).openapi('ServiceType')

const HostSchema = z.string().max(64).openapi('Host')

const HTTPMethodSchema = z.string().max(10).openapi('HTTPMethod')

const URLPathSchema = z.string().max(128).openapi('URLPath')

const VersionSchema = z.int().min(1).openapi('Version')

const AttributeValueSchema = z.string().min(1).max(32).openapi('AttributeValue')

const AttributeMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .refine((val) => Object.keys(val).length <= 5)
  .openapi('AttributeMap')

const SamplingRuleSchema = z
  .object({
    RuleName: RuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the sampling rule. Specify a rule by either name or ARN, but not both.',
        }),
    ).exactOptional(),
    RuleARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Matches the ARN of the Amazon Web Services resource on which the service runs.',
        }),
    ),
    Priority: PrioritySchema.and(
      z.any().openapi({ description: 'The priority of the sampling rule.' }),
    ),
    FixedRate: FixedRateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of matching requests to instrument, after the reservoir is exhausted.',
        }),
    ),
    ReservoirSize: ReservoirSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.',
        }),
    ),
    ServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Matches the <code>name</code> that the service uses to identify itself in segments.',
        }),
    ),
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Matches the <code>origin</code> that the service uses to identify its type in segments.',
        }),
    ),
    Host: HostSchema.and(
      z.any().openapi({ description: 'Matches the hostname from a request URL.' }),
    ),
    HTTPMethod: HTTPMethodSchema.and(
      z.any().openapi({ description: 'Matches the HTTP method of a request.' }),
    ),
    URLPath: URLPathSchema.and(
      z.any().openapi({ description: 'Matches the path from a request URL.' }),
    ),
    Version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the sampling rule format (<code>1</code>).' }),
    ),
    Attributes: AttributeMapSchema.and(
      z.any().openapi({ description: 'Matches attributes derived from the request.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ResourceARN',
      'Priority',
      'FixedRate',
      'ReservoirSize',
      'ServiceName',
      'ServiceType',
      'Host',
      'HTTPMethod',
      'URLPath',
      'Version',
    ],
    description:
      "A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.",
  })
  .openapi('SamplingRule')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const SamplingRuleRecordSchema = z
  .object({
    SamplingRule: SamplingRuleSchema.and(
      z.any().openapi({ description: 'The sampling rule.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'When the rule was created.' }),
    ).exactOptional(),
    ModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'When the rule was last modified.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.',
    required: [],
  })
  .openapi('SamplingRuleRecord')

const CreateSamplingRuleResultSchema = z
  .object({
    SamplingRuleRecord: SamplingRuleRecordSchema.and(
      z.any().openapi({ description: 'The saved rule definition and metadata.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSamplingRuleResult')

const RuleLimitExceededExceptionSchema = z.any().openapi('RuleLimitExceededException')

const DeleteGroupResultSchema = z.object({}).openapi('DeleteGroupResult')

const DeleteResourcePolicyResultSchema = z.object({}).openapi('DeleteResourcePolicyResult')

const InvalidPolicyRevisionIdExceptionSchema = z.any().openapi('InvalidPolicyRevisionIdException')

const DeleteSamplingRuleResultSchema = z
  .object({
    SamplingRuleRecord: SamplingRuleRecordSchema.and(
      z.any().openapi({ description: 'The deleted rule definition and metadata.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteSamplingRuleResult')

const EncryptionStatusSchema = z.enum(['UPDATING', 'ACTIVE']).openapi('EncryptionStatus')

const EncryptionTypeSchema = z.enum(['NONE', 'KMS']).openapi('EncryptionType')

const EncryptionConfigSchema = z
  .object({
    KeyId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the KMS key used for encryption, if applicable.' }),
    ).exactOptional(),
    Status: EncryptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption status. While the status is <code>UPDATING</code>, X-Ray may encrypt data with a combination of the new and old settings.',
        }),
    ).exactOptional(),
    Type: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of encryption. Set to <code>KMS</code> for encryption with KMS keys. Set to <code>NONE</code> for default encryption.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A configuration document that specifies encryption configuration settings.',
    required: [],
  })
  .openapi('EncryptionConfig')

const GetEncryptionConfigResultSchema = z
  .object({
    EncryptionConfig: EncryptionConfigSchema.and(
      z.any().openapi({ description: 'The encryption configuration document.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEncryptionConfigResult')

const GetGroupResultSchema = z
  .object({
    Group: GroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The group that was requested. Contains the name of the group, the ARN of the group, the filter expression, and the insight configuration assigned to the group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGroupResult')

const GroupSummarySchema = z
  .object({
    GroupName: StringSchema.and(
      z.any().openapi({ description: 'The unique case-sensitive name of the group.' }),
    ).exactOptional(),
    GroupARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the group generated based on the GroupName.' }),
    ).exactOptional(),
    FilterExpression: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The filter expression defining the parameters to include traces.',
        }),
    ).exactOptional(),
    InsightsConfiguration: InsightsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The structure containing configurations related to insights.</p> <ul> <li> <p>The InsightsEnabled boolean can be set to true to enable insights for the group or false to disable insights for the group.</p> </li> <li> <p>The NotificationsEnabled boolean can be set to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details for a group without metadata.', required: [] })
  .openapi('GroupSummary')

const GroupSummaryListSchema = z.array(GroupSummarySchema).openapi('GroupSummaryList')

const GetGroupsResultSchema = z
  .object({
    Groups: GroupSummaryListSchema.and(
      z.any().openapi({ description: 'The collection of all active groups.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGroupsResult')

const InsightIdSchema = z
  .string()
  .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/)
  .openapi('InsightId')

const GroupARNSchema = z.string().min(1).max(400).openapi('GroupARN')

const GroupNameSchema = z.string().min(1).max(32).openapi('GroupName')

const ServiceNamesSchema = z.array(StringSchema).openapi('ServiceNames')

const ServiceIdSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    Names: ServiceNamesSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    AccountId: StringSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    Type: StringSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ServiceId')

const InsightCategorySchema = z.literal('FAULT').openapi('InsightCategory')

const InsightCategoryListSchema = z.array(InsightCategorySchema).openapi('InsightCategoryList')

const InsightStateSchema = z.enum(['ACTIVE', 'CLOSED']).openapi('InsightState')

const InsightSummaryTextSchema = z.string().openapi('InsightSummaryText')

const NullableLongSchema = z.int().openapi('NullableLong')

const RequestImpactStatisticsSchema = z
  .object({
    FaultCount: NullableLongSchema.and(
      z.any().openapi({ description: 'The number of requests that have resulted in a fault,' }),
    ).exactOptional(),
    OkCount: NullableLongSchema.and(
      z.any().openapi({ description: 'The number of successful requests.' }),
    ).exactOptional(),
    TotalCount: NullableLongSchema.and(
      z.any().openapi({ description: 'The total number of requests to the service.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Statistics that describe how the incident has impacted a service.',
    required: [],
  })
  .openapi('RequestImpactStatistics')

const AnomalousServiceSchema = z
  .object({ ServiceId: ServiceIdSchema.exactOptional() })
  .openapi({
    description: 'The service within the service graph that has anomalously high fault rates. ',
    required: [],
  })
  .openapi('AnomalousService')

const AnomalousServiceListSchema = z.array(AnomalousServiceSchema).openapi('AnomalousServiceList')

const InsightSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z.any().openapi({ description: 'The insights unique identifier. ' }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the group that the insight belongs to.',
        }),
    ).exactOptional(),
    GroupName: GroupNameSchema.and(
      z.any().openapi({ description: 'The name of the group that the insight belongs to.' }),
    ).exactOptional(),
    RootCauseServiceId: ServiceIdSchema.exactOptional(),
    Categories: InsightCategoryListSchema.and(
      z
        .any()
        .openapi({ description: 'The categories that label and describe the type of insight.' }),
    ).exactOptional(),
    State: InsightStateSchema.and(
      z.any().openapi({ description: 'The current state of the insight.' }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time, in Unix seconds, at which the insight began.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time, in Unix seconds, at which the insight ended.' }),
    ).exactOptional(),
    Summary: InsightSummaryTextSchema.and(
      z.any().openapi({ description: 'A brief description of the insight.' }),
    ).exactOptional(),
    ClientRequestImpactStatistics: RequestImpactStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The impact statistics of the client side service. This includes the number of requests to the client service and whether the requests were faults or okay.',
        }),
    ).exactOptional(),
    RootCauseServiceRequestImpactStatistics: RequestImpactStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The impact statistics of the root cause service. This includes the number of requests to the client service and whether the requests were faults or okay.',
        }),
    ).exactOptional(),
    TopAnomalousServices: AnomalousServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The service within the insight that is most impacted by the incident.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.',
    required: [],
  })
  .openapi('Insight')

const GetInsightResultSchema = z
  .object({
    Insight: InsightSchema.and(
      z.any().openapi({ description: 'The summary information of an insight.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInsightResult')

const EventSummaryTextSchema = z.string().openapi('EventSummaryText')

const InsightEventSchema = z
  .object({
    Summary: EventSummaryTextSchema.and(
      z.any().openapi({ description: 'A brief description of the event.' }),
    ).exactOptional(),
    EventTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time, in Unix seconds, at which the event was recorded.' }),
    ).exactOptional(),
    ClientRequestImpactStatistics: RequestImpactStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The impact statistics of the client side service. This includes the number of requests to the client service and whether the requests were faults or okay.',
        }),
    ).exactOptional(),
    RootCauseServiceRequestImpactStatistics: RequestImpactStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The impact statistics of the root cause service. This includes the number of requests to the client service and whether the requests were faults or okay.',
        }),
    ).exactOptional(),
    TopAnomalousServices: AnomalousServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The service during the event that is most impacted by the incident.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.',
    required: [],
  })
  .openapi('InsightEvent')

const InsightEventListSchema = z.array(InsightEventSchema).openapi('InsightEventList')

const TokenSchema = z.string().min(1).max(2000).openapi('Token')

const GetInsightEventsResultSchema = z
  .object({
    InsightEvents: InsightEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A detailed description of the event. This includes the time of the event, client and root cause impact statistics, and the top anomalous service at the time of the event.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({ description: 'Use this token to retrieve the next page of insight events.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInsightEventsResult')

const NullableIntegerSchema = z.int().openapi('NullableInteger')

const InsightImpactGraphEdgeSchema = z
  .object({
    ReferenceId: NullableIntegerSchema.and(
      z.any().openapi({ description: 'Identifier of the edge. Unique within a service map.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The connection between two service in an insight impact graph.',
    required: [],
  })
  .openapi('InsightImpactGraphEdge')

const InsightImpactGraphEdgeListSchema = z
  .array(InsightImpactGraphEdgeSchema)
  .openapi('InsightImpactGraphEdgeList')

const InsightImpactGraphServiceSchema = z
  .object({
    ReferenceId: NullableIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Identifier for the service. Unique within the service map.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifier for the service. Unique within the service map.</p> <ul> <li> <p>Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, AWS::EC2::Instance for an application running on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used. </p> </li> <li> <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table. </p> </li> <li> <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table. </p> </li> <li> <p>remote - A downstream service of indeterminate type.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The canonical name of the service.' }),
    ).exactOptional(),
    Names: ServiceNamesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of names for the service, including the canonical name.' }),
    ).exactOptional(),
    AccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier of the Amazon Web Services account in which the service runs.',
        }),
    ).exactOptional(),
    Edges: InsightImpactGraphEdgeListSchema.and(
      z.any().openapi({ description: 'Connections to downstream services.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. ',
    required: [],
  })
  .openapi('InsightImpactGraphService')

const InsightImpactGraphServiceListSchema = z
  .array(InsightImpactGraphServiceSchema)
  .openapi('InsightImpactGraphServiceList')

const GetInsightImpactGraphResultSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z.any().openapi({ description: "The insight's unique identifier." }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The provided start time.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The provided end time. ' }),
    ).exactOptional(),
    ServiceGraphStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time, in Unix seconds, at which the service graph started.' }),
    ).exactOptional(),
    ServiceGraphEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time, in Unix seconds, at which the service graph ended.' }),
    ).exactOptional(),
    Services: InsightImpactGraphServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services instrumented services related to the insight.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInsightImpactGraphResult')

const InsightSummarySchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z.any().openapi({ description: 'The insights unique identifier. ' }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the group that the insight belongs to.',
        }),
    ).exactOptional(),
    GroupName: GroupNameSchema.and(
      z.any().openapi({ description: 'The name of the group that the insight belongs to.' }),
    ).exactOptional(),
    RootCauseServiceId: ServiceIdSchema.exactOptional(),
    Categories: InsightCategoryListSchema.and(
      z
        .any()
        .openapi({
          description: ' Categories The categories that label and describe the type of insight.',
        }),
    ).exactOptional(),
    State: InsightStateSchema.and(
      z.any().openapi({ description: 'The current state of the insight.' }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time, in Unix seconds, at which the insight began.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time, in Unix seconds, at which the insight ended.' }),
    ).exactOptional(),
    Summary: InsightSummaryTextSchema.and(
      z.any().openapi({ description: 'A brief description of the insight.' }),
    ).exactOptional(),
    ClientRequestImpactStatistics: RequestImpactStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The impact statistics of the client side service. This includes the number of requests to the client service and whether the requests were faults or okay. ',
        }),
    ).exactOptional(),
    RootCauseServiceRequestImpactStatistics: RequestImpactStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The impact statistics of the root cause service. This includes the number of requests to the client service and whether the requests were faults or okay. ',
        }),
    ).exactOptional(),
    TopAnomalousServices: AnomalousServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The service within the insight that is most impacted by the incident.',
        }),
    ).exactOptional(),
    LastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time, in Unix seconds, that the insight was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information that describes an insight.', required: [] })
  .openapi('InsightSummary')

const InsightSummaryListSchema = z.array(InsightSummarySchema).openapi('InsightSummaryList')

const GetInsightSummariesResultSchema = z
  .object({
    InsightSummaries: InsightSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The summary of each insight within the group matching the provided filters. The summary contains the InsightID, start and end time, the root cause service, the root cause and client impact statistics, the top anomalous services, and the status of the insight.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInsightSummariesResult')

const SamplingRuleRecordListSchema = z
  .array(SamplingRuleRecordSchema)
  .openapi('SamplingRuleRecordList')

const GetSamplingRulesResultSchema = z
  .object({
    SamplingRuleRecords: SamplingRuleRecordListSchema.and(
      z.any().openapi({ description: 'Rule definitions and metadata.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSamplingRulesResult')

const IntegerSchema = z.int().openapi('Integer')

const SamplingStatisticSummarySchema = z
  .object({
    RuleName: StringSchema.and(
      z.any().openapi({ description: 'The name of the sampling rule.' }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of the reporting window.' }),
    ).exactOptional(),
    RequestCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of requests that matched the rule.' }),
    ).exactOptional(),
    BorrowCount: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of requests recorded with borrowed reservoir quota.' }),
    ).exactOptional(),
    SampledCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of requests recorded.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Aggregated request sampling data for a sampling rule across all services for a 10-second window.',
    required: [],
  })
  .openapi('SamplingStatisticSummary')

const SamplingStatisticSummaryListSchema = z
  .array(SamplingStatisticSummarySchema)
  .openapi('SamplingStatisticSummaryList')

const GetSamplingStatisticSummariesResultSchema = z
  .object({
    SamplingStatisticSummaries: SamplingStatisticSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the number of requests instrumented for each sampling rule.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSamplingStatisticSummariesResult')

const DoubleSchema = z.float64().openapi('Double')

const SamplingTargetDocumentSchema = z
  .object({
    RuleName: StringSchema.and(
      z.any().openapi({ description: 'The name of the sampling rule.' }),
    ).exactOptional(),
    FixedRate: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of matching requests to instrument, after the reservoir is exhausted.',
        }),
    ).exactOptional(),
    ReservoirQuota: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of requests per second that X-Ray allocated for this service.',
        }),
    ).exactOptional(),
    ReservoirQuotaTTL: TimestampSchema.and(
      z.any().openapi({ description: 'When the reservoir quota expires.' }),
    ).exactOptional(),
    Interval: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds for the service to wait before getting sampling targets again.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.',
    required: [],
  })
  .openapi('SamplingTargetDocument')

const SamplingTargetDocumentListSchema = z
  .array(SamplingTargetDocumentSchema)
  .openapi('SamplingTargetDocumentList')

const UnprocessedStatisticsSchema = z
  .object({
    RuleName: StringSchema.and(
      z.any().openapi({ description: 'The name of the sampling rule.' }),
    ).exactOptional(),
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process.',
    required: [],
  })
  .openapi('UnprocessedStatistics')

const UnprocessedStatisticsListSchema = z
  .array(UnprocessedStatisticsSchema)
  .openapi('UnprocessedStatisticsList')

const GetSamplingTargetsResultSchema = z
  .object({
    SamplingTargetDocuments: SamplingTargetDocumentListSchema.and(
      z
        .any()
        .openapi({ description: 'Updated rules that the service should use to sample requests.' }),
    ).exactOptional(),
    LastRuleModification: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time a user changed the sampling rule configuration. If the sampling rule configuration changed since the service last retrieved it, the service should call <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a> to get the latest version.',
        }),
    ).exactOptional(),
    UnprocessedStatistics: UnprocessedStatisticsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingStatisticsDocument.html">SamplingStatisticsDocument</a> that X-Ray could not process.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSamplingTargetsResult')

const ClientIDSchema = z.string().length(24).openapi('ClientID')

const RequestCountSchema = z.int().min(0).openapi('RequestCount')

const SampledCountSchema = z.int().min(0).openapi('SampledCount')

const BorrowCountSchema = z.int().min(0).openapi('BorrowCount')

const SamplingStatisticsDocumentSchema = z
  .object({
    RuleName: RuleNameSchema.and(
      z.any().openapi({ description: 'The name of the sampling rule.' }),
    ),
    ClientID: ClientIDSchema.and(
      z.any().openapi({ description: 'A unique identifier for the service in hexadecimal.' }),
    ),
    Timestamp: TimestampSchema.and(z.any().openapi({ description: 'The current time.' })),
    RequestCount: RequestCountSchema.and(
      z.any().openapi({ description: 'The number of requests that matched the rule.' }),
    ),
    SampledCount: SampledCountSchema.and(
      z.any().openapi({ description: 'The number of requests recorded.' }),
    ),
    BorrowCount: BorrowCountSchema.and(
      z
        .any()
        .openapi({ description: 'The number of requests recorded with borrowed reservoir quota.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleName', 'ClientID', 'Timestamp', 'RequestCount', 'SampledCount'],
    description:
      'Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.',
  })
  .openapi('SamplingStatisticsDocument')

const ErrorStatisticsSchema = z
  .object({
    ThrottleCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of requests that failed with a 419 throttling status code.',
        }),
    ).exactOptional(),
    OtherCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of requests that failed with untracked 4xx Client Error status codes.',
        }),
    ).exactOptional(),
    TotalCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of requests that failed with a 4xx Client Error status code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about requests that failed with a 4xx Client Error status code.',
    required: [],
  })
  .openapi('ErrorStatistics')

const FaultStatisticsSchema = z
  .object({
    OtherCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of requests that failed with untracked 5xx Server Error status codes.',
        }),
    ).exactOptional(),
    TotalCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of requests that failed with a 5xx Server Error status code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about requests that failed with a 5xx Server Error status code.',
    required: [],
  })
  .openapi('FaultStatistics')

const EdgeStatisticsSchema = z
  .object({
    OkCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of requests that completed with a 2xx Success status code.',
        }),
    ).exactOptional(),
    ErrorStatistics: ErrorStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about requests that failed with a 4xx Client Error status code.',
        }),
    ).exactOptional(),
    FaultStatistics: FaultStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about requests that failed with a 5xx Server Error status code.',
        }),
    ).exactOptional(),
    TotalCount: NullableLongSchema.and(
      z.any().openapi({ description: 'The total number of completed requests.' }),
    ).exactOptional(),
    TotalResponseTime: NullableDoubleSchema.and(
      z.any().openapi({ description: 'The aggregate response time of completed requests.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response statistics for an edge.', required: [] })
  .openapi('EdgeStatistics')

const HistogramEntrySchema = z
  .object({
    Value: DoubleSchema.and(
      z.any().openapi({ description: 'The value of the entry.' }),
    ).exactOptional(),
    Count: IntegerSchema.and(
      z.any().openapi({ description: 'The prevalence of the entry.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.',
    required: [],
  })
  .openapi('HistogramEntry')

const HistogramSchema = z.array(HistogramEntrySchema).openapi('Histogram')

const AliasNamesSchema = z.array(StringSchema).openapi('AliasNames')

const AliasSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The canonical name of the alias.' }),
    ).exactOptional(),
    Names: AliasNamesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of names for the alias, including the canonical name.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type of the alias.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An alias for an edge.', required: [] })
  .openapi('Alias')

const AliasListSchema = z.array(AliasSchema).openapi('AliasList')

const EdgeSchema = z
  .object({
    ReferenceId: NullableIntegerSchema.and(
      z.any().openapi({ description: 'Identifier of the edge. Unique within a service map.' }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of the first segment on the edge.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The end time of the last segment on the edge.' }),
    ).exactOptional(),
    SummaryStatistics: EdgeStatisticsSchema.and(
      z.any().openapi({ description: 'Response statistics for segments on the edge.' }),
    ).exactOptional(),
    ResponseTimeHistogram: HistogramSchema.and(
      z
        .any()
        .openapi({
          description:
            'A histogram that maps the spread of client response times on an edge. Only populated for synchronous edges.',
        }),
    ).exactOptional(),
    Aliases: AliasListSchema.and(
      z.any().openapi({ description: 'Aliases for the edge.' }),
    ).exactOptional(),
    EdgeType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes an asynchronous connection, with a value of <code>link</code>.',
        }),
    ).exactOptional(),
    ReceivedEventAgeHistogram: HistogramSchema.and(
      z
        .any()
        .openapi({
          description:
            'A histogram that maps the spread of event age when received by consumers. Age is calculated each time an event is received. Only populated when <i>EdgeType</i> is <code>link</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a connection between two services. An edge can be a synchronous connection, such as typical call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an SNS queue.',
    required: [],
  })
  .openapi('Edge')

const EdgeListSchema = z.array(EdgeSchema).openapi('EdgeList')

const ServiceStatisticsSchema = z
  .object({
    OkCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of requests that completed with a 2xx Success status code.',
        }),
    ).exactOptional(),
    ErrorStatistics: ErrorStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about requests that failed with a 4xx Client Error status code.',
        }),
    ).exactOptional(),
    FaultStatistics: FaultStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about requests that failed with a 5xx Server Error status code.',
        }),
    ).exactOptional(),
    TotalCount: NullableLongSchema.and(
      z.any().openapi({ description: 'The total number of completed requests.' }),
    ).exactOptional(),
    TotalResponseTime: NullableDoubleSchema.and(
      z.any().openapi({ description: 'The aggregate response time of completed requests.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response statistics for a service.', required: [] })
  .openapi('ServiceStatistics')

const ServiceSchema = z
  .object({
    ReferenceId: NullableIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Identifier for the service. Unique within the service map.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The canonical name of the service.' }),
    ).exactOptional(),
    Names: ServiceNamesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of names for the service, including the canonical name.' }),
    ).exactOptional(),
    Root: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates that the service was the first service to process a request.',
        }),
    ).exactOptional(),
    AccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier of the Amazon Web Services account in which the service runs.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of service.</p> <ul> <li> <p>Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, <code>AWS::EC2::Instance</code> for an application running on Amazon EC2 or <code>AWS::DynamoDB::Table</code> for an Amazon DynamoDB table that the application used.</p> </li> <li> <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, <code>AWS::DynamoDB</code> for downstream calls to Amazon DynamoDB that didn't target a specific table.</p> </li> <li> <p> <code>client</code> - Represents the clients that sent requests to a root service.</p> </li> <li> <p> <code>remote</code> - A downstream service of indeterminate type.</p> </li> </ul>",
        }),
    ).exactOptional(),
    State: StringSchema.and(
      z.any().openapi({ description: "The service's state." }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The start time of the first segment that the service generated.',
        }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The end time of the last segment that the service generated.' }),
    ).exactOptional(),
    Edges: EdgeListSchema.and(
      z.any().openapi({ description: 'Connections to downstream services.' }),
    ).exactOptional(),
    SummaryStatistics: ServiceStatisticsSchema.and(
      z.any().openapi({ description: 'Aggregated statistics for the service.' }),
    ).exactOptional(),
    DurationHistogram: HistogramSchema.and(
      z.any().openapi({ description: 'A histogram that maps the spread of service durations.' }),
    ).exactOptional(),
    ResponseTimeHistogram: HistogramSchema.and(
      z
        .any()
        .openapi({ description: 'A histogram that maps the spread of service response times.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.',
    required: [],
  })
  .openapi('Service')

const ServiceListSchema = z.array(ServiceSchema).openapi('ServiceList')

const BooleanSchema = z.boolean().openapi('Boolean')

const GetServiceGraphResultSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The start of the time frame for which the graph was generated.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The end of the time frame for which the graph was generated.' }),
    ).exactOptional(),
    Services: ServiceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The services that have processed a traced request during the specified time frame.',
        }),
    ).exactOptional(),
    ContainsOldGroupVersions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A flag indicating whether the group's filter expression has been consistent, or if the returned service graph may show traces from an older version of the group's filter expression.",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceGraphResult')

const ForecastStatisticsSchema = z
  .object({
    FaultCountHigh: NullableLongSchema.and(
      z.any().openapi({ description: 'The upper limit of fault counts for a service.' }),
    ).exactOptional(),
    FaultCountLow: NullableLongSchema.and(
      z.any().openapi({ description: 'The lower limit of fault counts for a service.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.',
    required: [],
  })
  .openapi('ForecastStatistics')

const TimeSeriesServiceStatisticsSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'Timestamp of the window for which statistics are aggregated.' }),
    ).exactOptional(),
    EdgeSummaryStatistics: EdgeStatisticsSchema.exactOptional(),
    ServiceSummaryStatistics: ServiceStatisticsSchema.exactOptional(),
    ServiceForecastStatistics: ForecastStatisticsSchema.and(
      z.any().openapi({ description: 'The forecasted high and low fault count values.' }),
    ).exactOptional(),
    ResponseTimeHistogram: HistogramSchema.and(
      z.any().openapi({ description: 'The response time histogram for the selected entities.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of TimeSeriesStatistic structures.', required: [] })
  .openapi('TimeSeriesServiceStatistics')

const TimeSeriesServiceStatisticsListSchema = z
  .array(TimeSeriesServiceStatisticsSchema)
  .openapi('TimeSeriesServiceStatisticsList')

const GetTimeSeriesServiceStatisticsResultSchema = z
  .object({
    TimeSeriesServiceStatistics: TimeSeriesServiceStatisticsListSchema.and(
      z.any().openapi({ description: 'The collection of statistics.' }),
    ).exactOptional(),
    ContainsOldGroupVersions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A flag indicating whether or not a group's filter expression has been consistent, or if a returned aggregation might show statistics from an older version of the group's filter expression.",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTimeSeriesServiceStatisticsResult')

const GetTraceGraphResultSchema = z
  .object({
    Services: ServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The services that have processed one of the specified requests.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTraceGraphResult')

const HttpSchema = z
  .object({
    HttpURL: StringSchema.and(z.any().openapi({ description: 'The request URL.' })).exactOptional(),
    HttpStatus: NullableIntegerSchema.and(
      z.any().openapi({ description: 'The response status.' }),
    ).exactOptional(),
    HttpMethod: StringSchema.and(
      z.any().openapi({ description: 'The request method.' }),
    ).exactOptional(),
    UserAgent: StringSchema.and(
      z.any().openapi({ description: "The request's user agent string." }),
    ).exactOptional(),
    ClientIp: StringSchema.and(
      z.any().openapi({ description: 'The IP address of the requestor.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an HTTP request.', required: [] })
  .openapi('Http')

const AnnotationValueSchema = z
  .object({
    NumberValue: NullableDoubleSchema.and(
      z.any().openapi({ description: 'Value for a Number annotation.' }),
    ).exactOptional(),
    BooleanValue: NullableBooleanSchema.and(
      z.any().openapi({ description: 'Value for a Boolean annotation.' }),
    ).exactOptional(),
    StringValue: StringSchema.and(
      z.any().openapi({ description: 'Value for a String annotation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Value of a segment annotation. Has one of three value types: Number, Boolean, or String.',
    required: [],
  })
  .openapi('AnnotationValue')

const ServiceIdsSchema = z.array(ServiceIdSchema).openapi('ServiceIds')

const ValueWithServiceIdsSchema = z
  .object({
    AnnotationValue: AnnotationValueSchema.and(
      z.any().openapi({ description: 'Values of the annotation.' }),
    ).exactOptional(),
    ServiceIds: ServiceIdsSchema.and(
      z.any().openapi({ description: 'Services to which the annotation applies.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a segment annotation.', required: [] })
  .openapi('ValueWithServiceIds')

const ValuesWithServiceIdsSchema = z
  .array(ValueWithServiceIdsSchema)
  .openapi('ValuesWithServiceIds')

const AnnotationsSchema = z.record(z.string(), ValuesWithServiceIdsSchema).openapi('Annotations')

const TraceUserSchema = z
  .object({
    UserName: StringSchema.and(
      z.any().openapi({ description: "The user's name." }),
    ).exactOptional(),
    ServiceIds: ServiceIdsSchema.and(
      z.any().openapi({ description: "Services that the user's request hit." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a user recorded in segment documents.', required: [] })
  .openapi('TraceUser')

const TraceUsersSchema = z.array(TraceUserSchema).openapi('TraceUsers')

const ResourceARNDetailSchema = z
  .object({
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN of a corresponding resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list of resources ARNs corresponding to the segments in a trace.',
    required: [],
  })
  .openapi('ResourceARNDetail')

const TraceResourceARNsSchema = z.array(ResourceARNDetailSchema).openapi('TraceResourceARNs')

const InstanceIdDetailSchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The ID of a corresponding EC2 instance.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list of EC2 instance IDs corresponding to the segments in a trace. ',
    required: [],
  })
  .openapi('InstanceIdDetail')

const TraceInstanceIdsSchema = z.array(InstanceIdDetailSchema).openapi('TraceInstanceIds')

const AvailabilityZoneDetailSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of a corresponding Availability Zone.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list of Availability Zones corresponding to the segments in a trace.',
    required: [],
  })
  .openapi('AvailabilityZoneDetail')

const TraceAvailabilityZonesSchema = z
  .array(AvailabilityZoneDetailSchema)
  .openapi('TraceAvailabilityZones')

const RootCauseExceptionSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the exception.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The message of the exception.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The exception associated with a root cause.', required: [] })
  .openapi('RootCauseException')

const RootCauseExceptionsSchema = z.array(RootCauseExceptionSchema).openapi('RootCauseExceptions')

const FaultRootCauseEntitySchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the entity.' }),
    ).exactOptional(),
    Exceptions: RootCauseExceptionsSchema.and(
      z.any().openapi({ description: 'The types and messages of the exceptions.' }),
    ).exactOptional(),
    Remote: NullableBooleanSchema.and(
      z.any().openapi({ description: 'A flag that denotes a remote subsegment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A collection of segments and corresponding subsegments associated to a trace summary fault error.',
    required: [],
  })
  .openapi('FaultRootCauseEntity')

const FaultRootCauseEntityPathSchema = z
  .array(FaultRootCauseEntitySchema)
  .openapi('FaultRootCauseEntityPath')

const FaultRootCauseServiceSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The service name.' })).exactOptional(),
    Names: ServiceNamesSchema.and(
      z.any().openapi({ description: 'A collection of associated service names.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type associated to the service.' }),
    ).exactOptional(),
    AccountId: StringSchema.and(
      z.any().openapi({ description: 'The account ID associated to the service.' }),
    ).exactOptional(),
    EntityPath: FaultRootCauseEntityPathSchema.and(
      z.any().openapi({ description: 'The path of root cause entities found on the service. ' }),
    ).exactOptional(),
    Inferred: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating if the service is inferred from the trace.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of fields identifying the services in a trace summary fault.',
    required: [],
  })
  .openapi('FaultRootCauseService')

const FaultRootCauseServicesSchema = z
  .array(FaultRootCauseServiceSchema)
  .openapi('FaultRootCauseServices')

const FaultRootCauseSchema = z
  .object({
    Services: FaultRootCauseServicesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of corresponding services. A service identifies a segment and it contains a name, account ID, type, and inferred flag.',
        }),
    ).exactOptional(),
    ClientImpacting: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A flag that denotes that the root cause impacts the trace client.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The root cause information for a trace summary fault.', required: [] })
  .openapi('FaultRootCause')

const FaultRootCausesSchema = z.array(FaultRootCauseSchema).openapi('FaultRootCauses')

const ErrorRootCauseEntitySchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the entity.' }),
    ).exactOptional(),
    Exceptions: RootCauseExceptionsSchema.and(
      z.any().openapi({ description: 'The types and messages of the exceptions.' }),
    ).exactOptional(),
    Remote: NullableBooleanSchema.and(
      z.any().openapi({ description: 'A flag that denotes a remote subsegment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A collection of segments and corresponding subsegments associated to a trace summary error.',
    required: [],
  })
  .openapi('ErrorRootCauseEntity')

const ErrorRootCauseEntityPathSchema = z
  .array(ErrorRootCauseEntitySchema)
  .openapi('ErrorRootCauseEntityPath')

const ErrorRootCauseServiceSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The service name.' })).exactOptional(),
    Names: ServiceNamesSchema.and(
      z.any().openapi({ description: 'A collection of associated service names.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type associated to the service.' }),
    ).exactOptional(),
    AccountId: StringSchema.and(
      z.any().openapi({ description: 'The account ID associated to the service.' }),
    ).exactOptional(),
    EntityPath: ErrorRootCauseEntityPathSchema.and(
      z.any().openapi({ description: 'The path of root cause entities found on the service. ' }),
    ).exactOptional(),
    Inferred: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating if the service is inferred from the trace.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of fields identifying the services in a trace summary error.',
    required: [],
  })
  .openapi('ErrorRootCauseService')

const ErrorRootCauseServicesSchema = z
  .array(ErrorRootCauseServiceSchema)
  .openapi('ErrorRootCauseServices')

const ErrorRootCauseSchema = z
  .object({
    Services: ErrorRootCauseServicesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of services corresponding to an error. A service identifies a segment and it contains a name, account ID, type, and inferred flag.',
        }),
    ).exactOptional(),
    ClientImpacting: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A flag that denotes that the root cause impacts the trace client.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The root cause of a trace summary error.', required: [] })
  .openapi('ErrorRootCause')

const ErrorRootCausesSchema = z.array(ErrorRootCauseSchema).openapi('ErrorRootCauses')

const ResponseTimeRootCauseEntitySchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the entity.' }),
    ).exactOptional(),
    Coverage: NullableDoubleSchema.and(
      z.any().openapi({ description: 'The type and messages of the exceptions.' }),
    ).exactOptional(),
    Remote: NullableBooleanSchema.and(
      z.any().openapi({ description: 'A flag that denotes a remote subsegment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A collection of segments and corresponding subsegments associated to a response time warning.',
    required: [],
  })
  .openapi('ResponseTimeRootCauseEntity')

const ResponseTimeRootCauseEntityPathSchema = z
  .array(ResponseTimeRootCauseEntitySchema)
  .openapi('ResponseTimeRootCauseEntityPath')

const ResponseTimeRootCauseServiceSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The service name.' })).exactOptional(),
    Names: ServiceNamesSchema.and(
      z.any().openapi({ description: 'A collection of associated service names.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type associated to the service.' }),
    ).exactOptional(),
    AccountId: StringSchema.and(
      z.any().openapi({ description: 'The account ID associated to the service.' }),
    ).exactOptional(),
    EntityPath: ResponseTimeRootCauseEntityPathSchema.and(
      z.any().openapi({ description: 'The path of root cause entities found on the service. ' }),
    ).exactOptional(),
    Inferred: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating if the service is inferred from the trace.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of fields identifying the service in a response time warning.',
    required: [],
  })
  .openapi('ResponseTimeRootCauseService')

const ResponseTimeRootCauseServicesSchema = z
  .array(ResponseTimeRootCauseServiceSchema)
  .openapi('ResponseTimeRootCauseServices')

const ResponseTimeRootCauseSchema = z
  .object({
    Services: ResponseTimeRootCauseServicesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of corresponding services. A service identifies a segment and contains a name, account ID, type, and inferred flag.',
        }),
    ).exactOptional(),
    ClientImpacting: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A flag that denotes that the root cause impacts the trace client.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The root cause information for a response time warning.', required: [] })
  .openapi('ResponseTimeRootCause')

const ResponseTimeRootCausesSchema = z
  .array(ResponseTimeRootCauseSchema)
  .openapi('ResponseTimeRootCauses')

const TraceSummarySchema = z
  .object({
    Id: TraceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the request that generated the trace's segments and subsegments.",
        }),
    ).exactOptional(),
    Duration: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time in seconds between the start time of the root segment and the end time of the last segment that completed.',
        }),
    ).exactOptional(),
    ResponseTime: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time in seconds between the start and end times of the root segment. If the service performs work asynchronously, the response time measures the time before the response is sent to the user, while the duration measures the amount of time before the last traced activity completes.',
        }),
    ).exactOptional(),
    HasFault: NullableBooleanSchema.and(
      z.any().openapi({ description: 'The root segment document has a 500 series error.' }),
    ).exactOptional(),
    HasError: NullableBooleanSchema.and(
      z.any().openapi({ description: 'The root segment document has a 400 series error.' }),
    ).exactOptional(),
    HasThrottle: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more of the segment documents has a 429 throttling error.',
        }),
    ).exactOptional(),
    IsPartial: NullableBooleanSchema.and(
      z.any().openapi({ description: 'One or more of the segment documents is in progress.' }),
    ).exactOptional(),
    Http: HttpSchema.and(
      z.any().openapi({ description: 'Information about the HTTP request served by the trace.' }),
    ).exactOptional(),
    Annotations: AnnotationsSchema.and(
      z.any().openapi({ description: "Annotations from the trace's segment documents." }),
    ).exactOptional(),
    Users: TraceUsersSchema.and(
      z.any().openapi({ description: "Users from the trace's segment documents." }),
    ).exactOptional(),
    ServiceIds: ServiceIdsSchema.and(
      z.any().openapi({ description: "Service IDs from the trace's segment documents." }),
    ).exactOptional(),
    ResourceARNs: TraceResourceARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resource ARNs for any resource corresponding to the trace segments.',
        }),
    ).exactOptional(),
    InstanceIds: TraceInstanceIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of EC2 instance IDs for any instance corresponding to the trace segments.',
        }),
    ).exactOptional(),
    AvailabilityZones: TraceAvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Availability Zones for any zone corresponding to the trace segments.',
        }),
    ).exactOptional(),
    EntryPoint: ServiceIdSchema.and(
      z.any().openapi({ description: 'The root of a trace.' }),
    ).exactOptional(),
    FaultRootCauses: FaultRootCausesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of FaultRootCause structures corresponding to the trace segments.',
        }),
    ).exactOptional(),
    ErrorRootCauses: ErrorRootCausesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of ErrorRootCause structures corresponding to the trace segments.',
        }),
    ).exactOptional(),
    ResponseTimeRootCauses: ResponseTimeRootCausesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of ResponseTimeRootCause structures corresponding to the trace segments.',
        }),
    ).exactOptional(),
    Revision: IntegerSchema.and(
      z.any().openapi({ description: 'The revision number of a trace.' }),
    ).exactOptional(),
    MatchedEventTime: TimestampSchema.and(
      z.any().openapi({ description: 'The matched time stamp of a defined event.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Metadata generated from the segment documents in a trace.',
    required: [],
  })
  .openapi('TraceSummary')

const TraceSummaryListSchema = z.array(TraceSummarySchema).openapi('TraceSummaryList')

const GetTraceSummariesResultSchema = z
  .object({
    TraceSummaries: TraceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Trace IDs and annotations for traces that were found in the specified time frame.',
        }),
    ).exactOptional(),
    ApproximateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of this page of results.' }),
    ).exactOptional(),
    TracesProcessedCount: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of traces processed, including traces that did not match the specified filter expression.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the requested time frame contained more than one page of results, you can use this token to retrieve the next page. The first page contains the most recent results, closest to the end of the time frame.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTraceSummariesResult')

const SamplingStrategyNameSchema = z
  .enum(['PartialScan', 'FixedRate'])
  .openapi('SamplingStrategyName')

const PolicyNameSchema = z
  .string()
  .regex(/[\w+=,.@-]+/)
  .min(1)
  .max(128)
  .openapi('PolicyName')

const PolicyDocumentSchema = z.string().openapi('PolicyDocument')

const PolicyRevisionIdSchema = z.string().openapi('PolicyRevisionId')

const ResourcePolicySchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the resource policy. Must be unique within a specific Amazon Web Services account.',
        }),
    ).exactOptional(),
    PolicyDocument: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({ description: 'The resource policy document, which can be up to 5kb in size.' }),
    ).exactOptional(),
    PolicyRevisionId: PolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({ description: 'Returns the current policy revision id for this policy name.' }),
    ).exactOptional(),
    LastUpdatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the policy was last updated, in Unix time seconds.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A resource policy grants one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy is associated with a specific Amazon Web Services account.',
    required: [],
  })
  .openapi('ResourcePolicy')

const ResourcePolicyListSchema = z.array(ResourcePolicySchema).openapi('ResourcePolicyList')

const ResourcePolicyNextTokenSchema = z.string().min(1).max(100).openapi('ResourcePolicyNextToken')

const ListResourcePoliciesResultSchema = z
  .object({
    ResourcePolicies: ResourcePolicyListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of resource policies in the target Amazon Web Services account.',
        }),
    ).exactOptional(),
    NextToken: ResourcePolicyNextTokenSchema.and(
      z.any().openapi({ description: 'Pagination token. Not currently supported.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcePoliciesResult')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with the current page of results to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const PutEncryptionConfigResultSchema = z
  .object({
    EncryptionConfig: EncryptionConfigSchema.and(
      z.any().openapi({ description: 'The new encryption configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutEncryptionConfigResult')

const PutResourcePolicyResultSchema = z
  .object({
    ResourcePolicy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource policy document, as provided in the <code>PutResourcePolicyRequest</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutResourcePolicyResult')

const MalformedPolicyDocumentExceptionSchema = z.any().openapi('MalformedPolicyDocumentException')

const LockoutPreventionExceptionSchema = z.any().openapi('LockoutPreventionException')

const PolicySizeLimitExceededExceptionSchema = z.any().openapi('PolicySizeLimitExceededException')

const PolicyCountLimitExceededExceptionSchema = z.any().openapi('PolicyCountLimitExceededException')

const PutTelemetryRecordsResultSchema = z.object({}).openapi('PutTelemetryRecordsResult')

const BackendConnectionErrorsSchema = z
  .object({
    TimeoutCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ConnectionRefusedCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    HTTPCode4XXCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    HTTPCode5XXCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    UnknownHostCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    OtherCount: NullableIntegerSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('BackendConnectionErrors')

const TelemetryRecordSchema = z
  .object({
    Timestamp: TimestampSchema.and(z.any().openapi({ description: '<p/>' })),
    SegmentsReceivedCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    SegmentsSentCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    SegmentsSpilloverCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    SegmentsRejectedCount: NullableIntegerSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    BackendConnectionErrors: BackendConnectionErrorsSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Timestamp'], description: '<p/>' })
  .openapi('TelemetryRecord')

const UnprocessedTraceSegmentSchema = z
  .object({
    Id: StringSchema.and(z.any().openapi({ description: "The segment's ID." })).exactOptional(),
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error that caused processing to fail.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a segment that failed processing.', required: [] })
  .openapi('UnprocessedTraceSegment')

const UnprocessedTraceSegmentListSchema = z
  .array(UnprocessedTraceSegmentSchema)
  .openapi('UnprocessedTraceSegmentList')

const PutTraceSegmentsResultSchema = z
  .object({
    UnprocessedTraceSegments: UnprocessedTraceSegmentListSchema.and(
      z.any().openapi({ description: 'Segments that failed processing.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutTraceSegmentsResult')

const TraceSegmentDocumentSchema = z.string().openapi('TraceSegmentDocument')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateGroupResultSchema = z
  .object({
    Group: GroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The group that was updated. Contains the name of the group that was updated, the ARN of the group that was updated, the updated filter expression, and the updated insight configuration assigned to the group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGroupResult')

const UpdateSamplingRuleResultSchema = z
  .object({
    SamplingRuleRecord: SamplingRuleRecordSchema.and(
      z.any().openapi({ description: 'The updated rule definition and metadata.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSamplingRuleResult')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const AnnotationKeySchema = z.string().openapi('AnnotationKey')

const AttributeKeySchema = z.string().min(1).max(32).openapi('AttributeKey')

const TraceIdListSchema = z.array(TraceIdSchema).openapi('TraceIdList')

const BatchGetTracesRequestSchema = z
  .object({
    TraceIds: TraceIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'Specify the trace IDs of requests for which to retrieve segments.',
        }),
    ),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TraceIds'], title: 'BatchGetTracesRequest' })
  .openapi('BatchGetTracesRequest')

const FilterExpressionSchema = z.string().openapi('FilterExpression')

const CreateGroupRequestSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The case-sensitive name of the new group. Default is a reserved name and names must be unique.',
        }),
    ),
    FilterExpression: FilterExpressionSchema.and(
      z
        .any()
        .openapi({
          description: 'The filter expression defining criteria by which to group traces.',
        }),
    ).exactOptional(),
    InsightsConfiguration: InsightsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The structure containing configurations related to insights.</p> <ul> <li> <p>The InsightsEnabled boolean can be set to true to enable insights for the new group or false to disable insights for the new group.</p> </li> <li> <p>The NotificationsEnabled boolean can be set to true to enable insights notifications for the new group. Notifications may only be enabled on a group with InsightsEnabled set to true.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don\'t use <code>aws:</code> as a prefix for keys; it\'s reserved for Amazon Web Services use.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GroupName'], title: 'CreateGroupRequest' })
  .openapi('CreateGroupRequest')

const CreateSamplingRuleRequestSchema = z
  .object({
    SamplingRule: SamplingRuleSchema.and(z.any().openapi({ description: 'The rule definition.' })),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don\'t use <code>aws:</code> as a prefix for keys; it\'s reserved for Amazon Web Services use.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SamplingRule'], title: 'CreateSamplingRuleRequest' })
  .openapi('CreateSamplingRuleRequest')

const DeleteGroupRequestSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z.any().openapi({ description: 'The case-sensitive name of the group.' }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z.any().openapi({ description: 'The ARN of the group that was generated on creation.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteGroupRequest', required: [] })
  .openapi('DeleteGroupRequest')

const DeleteResourcePolicyRequestSchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the resource policy to delete.' }),
    ),
    PolicyRevisionId: PolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyName'], title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const DeleteSamplingRuleRequestSchema = z
  .object({
    RuleName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the sampling rule. Specify a rule by either name or ARN, but not both.',
        }),
    ).exactOptional(),
    RuleARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteSamplingRuleRequest', required: [] })
  .openapi('DeleteSamplingRuleRequest')

const EC2InstanceIdSchema = z.string().max(20).openapi('EC2InstanceId')

const EncryptionKeyIdSchema = z.string().min(1).max(3000).openapi('EncryptionKeyId')

const EntitySelectorExpressionSchema = z
  .string()
  .min(1)
  .max(500)
  .openapi('EntitySelectorExpression')

const GetEncryptionConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetEncryptionConfigRequest' })
  .openapi('GetEncryptionConfigRequest')

const GetGroupRequestSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z.any().openapi({ description: 'The case-sensitive name of the group.' }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z.any().openapi({ description: 'The ARN of the group that was generated on creation.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetGroupRequest', required: [] })
  .openapi('GetGroupRequest')

const GetGroupsNextTokenSchema = z.string().min(1).max(100).openapi('GetGroupsNextToken')

const GetGroupsRequestSchema = z
  .object({
    NextToken: GetGroupsNextTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetGroupsRequest', required: [] })
  .openapi('GetGroupsRequest')

const GetInsightEventsMaxResultsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('GetInsightEventsMaxResults')

const GetInsightEventsRequestSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.",
        }),
    ),
    MaxResults: GetInsightEventsMaxResultsSchema.and(
      z.any().openapi({ description: 'Used to retrieve at most the specified value of events.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the pagination token returned by a previous request to retrieve the next page of events. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InsightId'], title: 'GetInsightEventsRequest' })
  .openapi('GetInsightEventsRequest')

const GetInsightImpactGraphRequestSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.",
        }),
    ),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.",
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours. ",
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the pagination token returned by a previous request to retrieve the next page of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InsightId', 'StartTime', 'EndTime'],
    title: 'GetInsightImpactGraphRequest',
  })
  .openapi('GetInsightImpactGraphRequest')

const GetInsightRequestSchema = z
  .object({
    InsightId: InsightIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.",
        }),
    ),
  })
  .openapi({ required: ['InsightId'], title: 'GetInsightRequest' })
  .openapi('GetInsightRequest')

const GetInsightSummariesMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('GetInsightSummariesMaxResults')

const InsightStateListSchema = z.array(InsightStateSchema).min(0).max(1).openapi('InsightStateList')

const GetInsightSummariesRequestSchema = z
  .object({
    States: InsightStateListSchema.and(
      z.any().openapi({ description: 'The list of insight states. ' }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.",
        }),
    ).exactOptional(),
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the group. Required if the GroupARN isn't provided.",
        }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.",
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The end of the time frame in which the insights ended. The end time can't be more than 30 days old.",
        }),
    ),
    MaxResults: GetInsightSummariesMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to display.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StartTime', 'EndTime'], title: 'GetInsightSummariesRequest' })
  .openapi('GetInsightSummariesRequest')

const GetSamplingRulesRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetSamplingRulesRequest', required: [] })
  .openapi('GetSamplingRulesRequest')

const GetSamplingStatisticSummariesRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetSamplingStatisticSummariesRequest', required: [] })
  .openapi('GetSamplingStatisticSummariesRequest')

const SamplingStatisticsDocumentListSchema = z
  .array(SamplingStatisticsDocumentSchema)
  .max(25)
  .openapi('SamplingStatisticsDocumentList')

const GetSamplingTargetsRequestSchema = z
  .object({
    SamplingStatisticsDocuments: SamplingStatisticsDocumentListSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about rules that the service is using to sample requests.',
        }),
    ),
  })
  .openapi({ required: ['SamplingStatisticsDocuments'], title: 'GetSamplingTargetsRequest' })
  .openapi('GetSamplingTargetsRequest')

const GetServiceGraphRequestSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The start of the time frame for which to generate a graph.' }),
    ),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The end of the timeframe for which to generate a graph.' }),
    ),
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a group based on which you want to generate a graph.',
        }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StartTime', 'EndTime'], title: 'GetServiceGraphRequest' })
  .openapi('GetServiceGraphRequest')

const GetTimeSeriesServiceStatisticsRequestSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The start of the time frame for which to aggregate statistics.' }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The end of the time frame for which to aggregate statistics.' }),
    ),
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The case-sensitive name of the group for which to pull statistics from.',
        }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the group for which to pull statistics from.',
        }),
    ).exactOptional(),
    EntitySelectorExpression: EntitySelectorExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned. ',
        }),
    ).exactOptional(),
    Period: NullableIntegerSchema.and(
      z.any().openapi({ description: 'Aggregation period in seconds.' }),
    ).exactOptional(),
    ForecastStatistics: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StartTime', 'EndTime'], title: 'GetTimeSeriesServiceStatisticsRequest' })
  .openapi('GetTimeSeriesServiceStatisticsRequest')

const GetTraceGraphRequestSchema = z
  .object({
    TraceIds: TraceIdListSchema.and(
      z
        .any()
        .openapi({ description: 'Trace IDs of requests for which to generate a service graph.' }),
    ),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TraceIds'], title: 'GetTraceGraphRequest' })
  .openapi('GetTraceGraphRequest')

const TimeRangeTypeSchema = z.enum(['TraceId', 'Event']).openapi('TimeRangeType')

const SamplingStrategySchema = z
  .object({
    Name: SamplingStrategyNameSchema.and(
      z.any().openapi({ description: 'The name of a sampling rule.' }),
    ).exactOptional(),
    Value: NullableDoubleSchema.and(
      z.any().openapi({ description: 'The value of a sampling rule.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The name and value of a sampling rule to apply to a trace summary.',
    required: [],
  })
  .openapi('SamplingStrategy')

const GetTraceSummariesRequestSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The start of the time frame for which to retrieve traces.' }),
    ),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The end of the time frame for which to retrieve traces.' }),
    ),
    TimeRangeType: TimeRangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A parameter to indicate whether to query trace summaries by TraceId or Event time.',
        }),
    ).exactOptional(),
    Sampling: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to get summaries for only a subset of available traces.',
        }),
    ).exactOptional(),
    SamplingStrategy: SamplingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'A parameter to indicate whether to enable sampling on trace summaries. Input parameters are Name and Value.',
        }),
    ).exactOptional(),
    FilterExpression: FilterExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the pagination token returned by a previous request to retrieve the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StartTime', 'EndTime'], title: 'GetTraceSummariesRequest' })
  .openapi('GetTraceSummariesRequest')

const HostnameSchema = z.string().max(255).openapi('Hostname')

const ListResourcePoliciesRequestSchema = z
  .object({
    NextToken: ResourcePolicyNextTokenSchema.and(
      z.any().openapi({ description: 'Not currently supported.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResourcePoliciesRequest', required: [] })
  .openapi('ListResourcePoliciesRequest')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with the current page of results as the value of this parameter to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutEncryptionConfigRequestSchema = z
  .object({
    KeyId: EncryptionKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Amazon Web Services KMS key in one of the following formats:</p> <ul> <li> <p> <b>Alias</b> - The name of the key. For example, <code>alias/MyKey</code>.</p> </li> <li> <p> <b>Key ID</b> - The KMS key ID of the key. For example, <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Amazon Web Services X-Ray does not support asymmetric KMS keys.</p> </li> <li> <p> <b>ARN</b> - The full Amazon Resource Name of the key ID or alias. For example, <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Use this format to specify a key in a different account.</p> </li> </ul> <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>',
        }),
    ).exactOptional(),
    Type: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set to <code>NONE</code> for default encryption.',
        }),
    ),
  })
  .openapi({ required: ['Type'], title: 'PutEncryptionConfigRequest' })
  .openapi('PutEncryptionConfigRequest')

const PutResourcePolicyRequestSchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the resource policy. Must be unique within a specific Amazon Web Services account.',
        }),
    ),
    PolicyDocument: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({ description: 'The resource policy document, which can be up to 5kb in size.' }),
    ),
    PolicyRevisionId: PolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy in the account.</p> <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists. </p>',
        }),
    ).exactOptional(),
    BypassPolicyLockoutCheck: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag to indicate whether to bypass the resource policy lockout safety check.</p> <important> <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p> <p>The default value is false.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyName', 'PolicyDocument'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const TelemetryRecordListSchema = z.array(TelemetryRecordSchema).openapi('TelemetryRecordList')

const PutTelemetryRecordsRequestSchema = z
  .object({
    TelemetryRecords: TelemetryRecordListSchema.and(z.any().openapi({ description: '<p/>' })),
    EC2InstanceId: EC2InstanceIdSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    Hostname: HostnameSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    ResourceARN: ResourceARNSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: ['TelemetryRecords'], title: 'PutTelemetryRecordsRequest' })
  .openapi('PutTelemetryRecordsRequest')

const TraceSegmentDocumentListSchema = z
  .array(TraceSegmentDocumentSchema)
  .openapi('TraceSegmentDocumentList')

const PutTraceSegmentsRequestSchema = z
  .object({
    TraceSegmentDocuments: TraceSegmentDocumentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing a JSON document defining one or more segments or subsegments.',
        }),
    ),
  })
  .openapi({ required: ['TraceSegmentDocuments'], title: 'PutTraceSegmentsRequest' })
  .openapi('PutTraceSegmentsRequest')

const SamplingRuleUpdateSchema = z
  .object({
    RuleName: RuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the sampling rule. Specify a rule by either name or ARN, but not both.',
        }),
    ).exactOptional(),
    RuleARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Matches the ARN of the Amazon Web Services resource on which the service runs.',
        }),
    ).exactOptional(),
    Priority: NullableIntegerSchema.and(
      z.any().openapi({ description: 'The priority of the sampling rule.' }),
    ).exactOptional(),
    FixedRate: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of matching requests to instrument, after the reservoir is exhausted.',
        }),
    ).exactOptional(),
    ReservoirSize: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.',
        }),
    ).exactOptional(),
    Host: HostSchema.and(
      z.any().openapi({ description: 'Matches the hostname from a request URL.' }),
    ).exactOptional(),
    ServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Matches the <code>name</code> that the service uses to identify itself in segments.',
        }),
    ).exactOptional(),
    ServiceType: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Matches the <code>origin</code> that the service uses to identify its type in segments.',
        }),
    ).exactOptional(),
    HTTPMethod: HTTPMethodSchema.and(
      z.any().openapi({ description: 'Matches the HTTP method of a request.' }),
    ).exactOptional(),
    URLPath: URLPathSchema.and(
      z.any().openapi({ description: 'Matches the path from a request URL.' }),
    ).exactOptional(),
    Attributes: AttributeMapSchema.and(
      z.any().openapi({ description: 'Matches attributes derived from the request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: "A document specifying changes to a sampling rule's configuration.",
    required: [],
  })
  .openapi('SamplingRuleUpdate')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don\'t use <code>aws:</code> as a prefix for keys; it\'s reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateGroupRequestSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z.any().openapi({ description: 'The case-sensitive name of the group.' }),
    ).exactOptional(),
    GroupARN: GroupARNSchema.and(
      z.any().openapi({ description: 'The ARN that was generated upon creation.' }),
    ).exactOptional(),
    FilterExpression: FilterExpressionSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated filter expression defining criteria by which to group traces.',
        }),
    ).exactOptional(),
    InsightsConfiguration: InsightsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The structure containing configurations related to insights.</p> <ul> <li> <p>The InsightsEnabled boolean can be set to true to enable insights for the group or false to disable insights for the group.</p> </li> <li> <p>The NotificationsEnabled boolean can be set to true to enable insights notifications for the group. Notifications can only be enabled on a group with InsightsEnabled set to true.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateGroupRequest', required: [] })
  .openapi('UpdateGroupRequest')

const UpdateSamplingRuleRequestSchema = z
  .object({
    SamplingRuleUpdate: SamplingRuleUpdateSchema.and(
      z.any().openapi({ description: 'The rule and fields to change.' }),
    ),
  })
  .openapi({ required: ['SamplingRuleUpdate'], title: 'UpdateSamplingRuleRequest' })
  .openapi('UpdateSamplingRuleRequest')

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

export const postTracesRoute = createRoute({
  method: 'post',
  path: '/Traces',
  description:
    'Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.',
  operationId: 'BatchGetTraces',
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
              TraceIds: z
                .array(TraceIdSchema)
                .openapi({
                  description: 'Specify the trace IDs of requests for which to retrieve segments.',
                }),
              NextToken: z.string().exactOptional().openapi({ description: 'Pagination token.' }),
            })
            .openapi({ required: ['TraceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetTracesResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postCreateGroupRoute = createRoute({
  method: 'post',
  path: '/CreateGroup',
  description: 'Creates a group resource with a name and a filter expression. ',
  operationId: 'CreateGroup',
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
              GroupName: z
                .string()
                .min(1)
                .max(32)
                .openapi({
                  description:
                    'The case-sensitive name of the new group. Default is a reserved name and names must be unique.',
                }),
              FilterExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The filter expression defining criteria by which to group traces.',
                }),
              InsightsConfiguration: z
                .object({
                  InsightsEnabled: NullableBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set the InsightsEnabled value to true to enable insights or false to disable insights.',
                      }),
                  ).exactOptional(),
                  NotificationsEnabled: NullableBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The structure containing configurations related to insights.',
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don\'t use <code>aws:</code> as a prefix for keys; it\'s reserved for Amazon Web Services use.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['GroupName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postCreateSamplingRuleRoute = createRoute({
  method: 'post',
  path: '/CreateSamplingRule',
  description:
    'Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.',
  operationId: 'CreateSamplingRule',
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
              SamplingRule: z
                .object({
                  RuleName: RuleNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the sampling rule. Specify a rule by either name or ARN, but not both.',
                      }),
                  ).exactOptional(),
                  RuleARN: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.',
                      }),
                  ).exactOptional(),
                  ResourceARN: ResourceARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Matches the ARN of the Amazon Web Services resource on which the service runs.',
                      }),
                  ).exactOptional(),
                  Priority: PrioritySchema.and(
                    z.any().openapi({ description: 'The priority of the sampling rule.' }),
                  ).exactOptional(),
                  FixedRate: FixedRateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The percentage of matching requests to instrument, after the reservoir is exhausted.',
                      }),
                  ).exactOptional(),
                  ReservoirSize: ReservoirSizeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.',
                      }),
                  ).exactOptional(),
                  ServiceName: ServiceNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Matches the <code>name</code> that the service uses to identify itself in segments.',
                      }),
                  ).exactOptional(),
                  ServiceType: ServiceTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Matches the <code>origin</code> that the service uses to identify its type in segments.',
                      }),
                  ).exactOptional(),
                  Host: HostSchema.and(
                    z.any().openapi({ description: 'Matches the hostname from a request URL.' }),
                  ).exactOptional(),
                  HTTPMethod: HTTPMethodSchema.and(
                    z.any().openapi({ description: 'Matches the HTTP method of a request.' }),
                  ).exactOptional(),
                  URLPath: URLPathSchema.and(
                    z.any().openapi({ description: 'Matches the path from a request URL.' }),
                  ).exactOptional(),
                  Version: VersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The version of the sampling rule format (<code>1</code>).',
                      }),
                  ).exactOptional(),
                  Attributes: AttributeMapSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Matches attributes derived from the request.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.",
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don\'t use <code>aws:</code> as a prefix for keys; it\'s reserved for Amazon Web Services use.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['SamplingRule'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSamplingRuleResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'RuleLimitExceededException',
      content: { 'application/json': { schema: RuleLimitExceededExceptionSchema } },
    },
  },
})

export const postDeleteGroupRoute = createRoute({
  method: 'post',
  path: '/DeleteGroup',
  description: 'Deletes a group resource.',
  operationId: 'DeleteGroup',
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
              GroupName: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({ description: 'The case-sensitive name of the group.' }),
              GroupARN: z
                .string()
                .min(1)
                .max(400)
                .exactOptional()
                .openapi({ description: 'The ARN of the group that was generated on creation.' }),
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
      content: { 'application/json': { schema: DeleteGroupResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postDeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/DeleteResourcePolicy',
  description: 'Deletes a resource policy from the target Amazon Web Services account.',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PolicyName: z
                .string()
                .regex(/[\w+=,.@-]+/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the resource policy to delete.' }),
              PolicyRevisionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned. ',
                }),
            })
            .openapi({ required: ['PolicyName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InvalidPolicyRevisionIdException',
      content: { 'application/json': { schema: InvalidPolicyRevisionIdExceptionSchema } },
    },
    482: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postDeleteSamplingRuleRoute = createRoute({
  method: 'post',
  path: '/DeleteSamplingRule',
  description: 'Deletes a sampling rule.',
  operationId: 'DeleteSamplingRule',
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
              RuleName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the sampling rule. Specify a rule by either name or ARN, but not both.',
                }),
              RuleARN: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.',
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
      content: { 'application/json': { schema: DeleteSamplingRuleResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postEncryptionConfigRoute = createRoute({
  method: 'post',
  path: '/EncryptionConfig',
  description: 'Retrieves the current encryption configuration for X-Ray data.',
  operationId: 'GetEncryptionConfig',
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
      content: { 'application/json': { schema: GetEncryptionConfigResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postGetGroupRoute = createRoute({
  method: 'post',
  path: '/GetGroup',
  description: 'Retrieves group resource details.',
  operationId: 'GetGroup',
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
              GroupName: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({ description: 'The case-sensitive name of the group.' }),
              GroupARN: z
                .string()
                .min(1)
                .max(400)
                .exactOptional()
                .openapi({ description: 'The ARN of the group that was generated on creation.' }),
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
      content: { 'application/json': { schema: GetGroupResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/Groups',
  description: 'Retrieves all active group details.',
  operationId: 'GetGroups',
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
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Pagination token.' }),
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
      content: { 'application/json': { schema: GetGroupsResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postInsightRoute = createRoute({
  method: 'post',
  path: '/Insight',
  description:
    'Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.',
  operationId: 'GetInsight',
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
                .regex(
                  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/,
                )
                .openapi({
                  description:
                    "The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.",
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
      content: { 'application/json': { schema: GetInsightResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postInsightEventsRoute = createRoute({
  method: 'post',
  path: '/InsightEvents',
  description:
    "X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.",
  operationId: 'GetInsightEvents',
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
                .regex(
                  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/,
                )
                .openapi({
                  description:
                    "The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.",
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'Used to retrieve at most the specified value of events.',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    'Specify the pagination token returned by a previous request to retrieve the next page of events. ',
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
      content: { 'application/json': { schema: GetInsightEventsResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postInsightImpactGraphRoute = createRoute({
  method: 'post',
  path: '/InsightImpactGraph',
  description:
    'Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.',
  operationId: 'GetInsightImpactGraph',
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
                .regex(
                  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/,
                )
                .openapi({
                  description:
                    "The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.",
                }),
              StartTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.",
                }),
              EndTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours. ",
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    'Specify the pagination token returned by a previous request to retrieve the next page of results. ',
                }),
            })
            .openapi({ required: ['InsightId', 'StartTime', 'EndTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInsightImpactGraphResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postInsightSummariesRoute = createRoute({
  method: 'post',
  path: '/InsightSummaries',
  description:
    'Retrieves the summaries of all insights in the specified group matching the provided filter values.',
  operationId: 'GetInsightSummaries',
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
              States: z
                .array(InsightStateSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({ description: 'The list of insight states. ' }),
              GroupARN: z
                .string()
                .min(1)
                .max(400)
                .exactOptional()
                .openapi({
                  description:
                    "The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.",
                }),
              GroupName: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description: "The name of the group. Required if the GroupARN isn't provided.",
                }),
              StartTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.",
                }),
              EndTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "The end of the time frame in which the insights ended. The end time can't be more than 30 days old.",
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to display.' }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({ description: 'Pagination token.' }),
            })
            .openapi({ required: ['StartTime', 'EndTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInsightSummariesResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postGetSamplingRulesRoute = createRoute({
  method: 'post',
  path: '/GetSamplingRules',
  description: 'Retrieves all sampling rules.',
  operationId: 'GetSamplingRules',
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
              NextToken: z.string().exactOptional().openapi({ description: 'Pagination token.' }),
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
      content: { 'application/json': { schema: GetSamplingRulesResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postSamplingStatisticSummariesRoute = createRoute({
  method: 'post',
  path: '/SamplingStatisticSummaries',
  description: 'Retrieves information about recent sampling results for all sampling rules.',
  operationId: 'GetSamplingStatisticSummaries',
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
              NextToken: z.string().exactOptional().openapi({ description: 'Pagination token.' }),
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
      content: { 'application/json': { schema: GetSamplingStatisticSummariesResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postSamplingTargetsRoute = createRoute({
  method: 'post',
  path: '/SamplingTargets',
  description: 'Requests a sampling quota for rules that the service is using to sample requests. ',
  operationId: 'GetSamplingTargets',
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
              SamplingStatisticsDocuments: z
                .array(SamplingStatisticsDocumentSchema)
                .max(25)
                .openapi({
                  description:
                    'Information about rules that the service is using to sample requests.',
                }),
            })
            .openapi({ required: ['SamplingStatisticsDocuments'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSamplingTargetsResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postServiceGraphRoute = createRoute({
  method: 'post',
  path: '/ServiceGraph',
  description:
    'Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.',
  operationId: 'GetServiceGraph',
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
              StartTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The start of the time frame for which to generate a graph.',
                }),
              EndTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The end of the timeframe for which to generate a graph.',
                }),
              GroupName: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description: 'The name of a group based on which you want to generate a graph.',
                }),
              GroupARN: z
                .string()
                .min(1)
                .max(400)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.',
                }),
              NextToken: z.string().exactOptional().openapi({ description: 'Pagination token.' }),
            })
            .openapi({ required: ['StartTime', 'EndTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceGraphResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postTimeSeriesServiceStatisticsRoute = createRoute({
  method: 'post',
  path: '/TimeSeriesServiceStatistics',
  description: 'Get an aggregation of service statistics defined by a specific time range.',
  operationId: 'GetTimeSeriesServiceStatistics',
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
              StartTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The start of the time frame for which to aggregate statistics.',
                }),
              EndTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The end of the time frame for which to aggregate statistics.',
                }),
              GroupName: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'The case-sensitive name of the group for which to pull statistics from.',
                }),
              GroupARN: z
                .string()
                .min(1)
                .max(400)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the group for which to pull statistics from.',
                }),
              EntitySelectorExpression: z
                .string()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned. ',
                }),
              Period: z
                .int()
                .exactOptional()
                .openapi({ description: 'Aggregation period in seconds.' }),
              ForecastStatistics: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided.',
                }),
              NextToken: z.string().exactOptional().openapi({ description: 'Pagination token.' }),
            })
            .openapi({ required: ['StartTime', 'EndTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTimeSeriesServiceStatisticsResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postTraceGraphRoute = createRoute({
  method: 'post',
  path: '/TraceGraph',
  description: 'Retrieves a service graph for one or more specific trace IDs.',
  operationId: 'GetTraceGraph',
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
              TraceIds: z
                .array(TraceIdSchema)
                .openapi({
                  description: 'Trace IDs of requests for which to generate a service graph.',
                }),
              NextToken: z.string().exactOptional().openapi({ description: 'Pagination token.' }),
            })
            .openapi({ required: ['TraceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTraceGraphResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postTraceSummariesRoute = createRoute({
  method: 'post',
  path: '/TraceSummaries',
  description:
    '<p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>',
  operationId: 'GetTraceSummaries',
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
              StartTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The start of the time frame for which to retrieve traces.',
                }),
              EndTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The end of the time frame for which to retrieve traces.',
                }),
              TimeRangeType: z
                .enum(['TraceId', 'Event'])
                .exactOptional()
                .openapi({
                  description:
                    'A parameter to indicate whether to query trace summaries by TraceId or Event time.',
                }),
              Sampling: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to <code>true</code> to get summaries for only a subset of available traces.',
                }),
              SamplingStrategy: z
                .object({
                  Name: SamplingStrategyNameSchema.and(
                    z.any().openapi({ description: 'The name of a sampling rule.' }),
                  ).exactOptional(),
                  Value: NullableDoubleSchema.and(
                    z.any().openapi({ description: 'The value of a sampling rule.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The name and value of a sampling rule to apply to a trace summary.',
                  required: [],
                }),
              FilterExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify the pagination token returned by a previous request to retrieve the next page of results.',
                }),
            })
            .openapi({ required: ['StartTime', 'EndTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTraceSummariesResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postListResourcePoliciesRoute = createRoute({
  method: 'post',
  path: '/ListResourcePolicies',
  description: 'Returns the list of resource policies in the target Amazon Web Services account.',
  operationId: 'ListResourcePolicies',
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
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Not currently supported.' }),
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
      content: { 'application/json': { schema: ListResourcePoliciesResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/ListTagsForResource',
  description:
    'Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.',
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
              ResourceARN: z
                .string()
                .min(1)
                .max(1011)
                .openapi({
                  description:
                    'The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with the current page of results as the value of this parameter to get the next page of results.',
                }),
            })
            .openapi({ required: ['ResourceARN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postPutEncryptionConfigRoute = createRoute({
  method: 'post',
  path: '/PutEncryptionConfig',
  description: 'Updates the encryption configuration for X-Ray data.',
  operationId: 'PutEncryptionConfig',
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
              KeyId: z
                .string()
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An Amazon Web Services KMS key in one of the following formats:</p> <ul> <li> <p> <b>Alias</b> - The name of the key. For example, <code>alias/MyKey</code>.</p> </li> <li> <p> <b>Key ID</b> - The KMS key ID of the key. For example, <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Amazon Web Services X-Ray does not support asymmetric KMS keys.</p> </li> <li> <p> <b>ARN</b> - The full Amazon Resource Name of the key ID or alias. For example, <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Use this format to specify a key in a different account.</p> </li> </ul> <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>',
                }),
              Type: z
                .enum(['NONE', 'KMS'])
                .openapi({
                  description:
                    'The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set to <code>NONE</code> for default encryption.',
                }),
            })
            .openapi({ required: ['Type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutEncryptionConfigResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postPutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/PutResourcePolicy',
  description:
    ' Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. ',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PolicyName: z
                .string()
                .regex(/[\w+=,.@-]+/)
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'The name of the resource policy. Must be unique within a specific Amazon Web Services account.',
                }),
              PolicyDocument: z
                .string()
                .openapi({
                  description: 'The resource policy document, which can be up to 5kb in size.',
                }),
              PolicyRevisionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy in the account.</p> <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists. </p>',
                }),
              BypassPolicyLockoutCheck: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A flag to indicate whether to bypass the resource policy lockout safety check.</p> <important> <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p> <p>The default value is false.</p>',
                }),
            })
            .openapi({ required: ['PolicyName', 'PolicyDocument'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyResultSchema } },
    },
    480: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    481: {
      description: 'LockoutPreventionException',
      content: { 'application/json': { schema: LockoutPreventionExceptionSchema } },
    },
    482: {
      description: 'InvalidPolicyRevisionIdException',
      content: { 'application/json': { schema: InvalidPolicyRevisionIdExceptionSchema } },
    },
    483: {
      description: 'PolicySizeLimitExceededException',
      content: { 'application/json': { schema: PolicySizeLimitExceededExceptionSchema } },
    },
    484: {
      description: 'PolicyCountLimitExceededException',
      content: { 'application/json': { schema: PolicyCountLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postTelemetryRecordsRoute = createRoute({
  method: 'post',
  path: '/TelemetryRecords',
  description: 'Used by the Amazon Web Services X-Ray daemon to upload telemetry.',
  operationId: 'PutTelemetryRecords',
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
              TelemetryRecords: z.array(TelemetryRecordSchema).openapi({ description: '<p/>' }),
              EC2InstanceId: z.string().max(20).exactOptional().openapi({ description: '<p/>' }),
              Hostname: z.string().max(255).exactOptional().openapi({ description: '<p/>' }),
              ResourceARN: z.string().max(500).exactOptional().openapi({ description: '<p/>' }),
            })
            .openapi({ required: ['TelemetryRecords'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutTelemetryRecordsResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postTraceSegmentsRoute = createRoute({
  method: 'post',
  path: '/TraceSegments',
  description:
    '<p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>',
  operationId: 'PutTraceSegments',
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
              TraceSegmentDocuments: z
                .array(TraceSegmentDocumentSchema)
                .openapi({
                  description:
                    'A string containing a JSON document defining one or more segments or subsegments.',
                }),
            })
            .openapi({ required: ['TraceSegmentDocuments'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutTraceSegmentsResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postTagResourceRoute = createRoute({
  method: 'post',
  path: '/TagResource',
  description: 'Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceARN: z
                .string()
                .min(1)
                .max(1011)
                .openapi({
                  description:
                    'The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .openapi({
                  description:
                    '<p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don\'t use <code>aws:</code> as a prefix for keys; it\'s reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['ResourceARN', 'Tags'] }),
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postUntagResourceRoute = createRoute({
  method: 'post',
  path: '/UntagResource',
  description:
    'Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceARN: z
                .string()
                .min(1)
                .max(1011)
                .openapi({
                  description:
                    'The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.',
                }),
              TagKeys: z
                .array(TagKeySchema)
                .min(0)
                .max(200)
                .openapi({
                  description:
                    'Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.',
                }),
            })
            .openapi({ required: ['ResourceARN', 'TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postUpdateGroupRoute = createRoute({
  method: 'post',
  path: '/UpdateGroup',
  description: 'Updates a group resource.',
  operationId: 'UpdateGroup',
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
              GroupName: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({ description: 'The case-sensitive name of the group.' }),
              GroupARN: z
                .string()
                .min(1)
                .max(400)
                .exactOptional()
                .openapi({ description: 'The ARN that was generated upon creation.' }),
              FilterExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The updated filter expression defining criteria by which to group traces.',
                }),
              InsightsConfiguration: z
                .object({
                  InsightsEnabled: NullableBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set the InsightsEnabled value to true to enable insights or false to disable insights.',
                      }),
                  ).exactOptional(),
                  NotificationsEnabled: NullableBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The structure containing configurations related to insights.',
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
      content: { 'application/json': { schema: UpdateGroupResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postUpdateSamplingRuleRoute = createRoute({
  method: 'post',
  path: '/UpdateSamplingRule',
  description: "Modifies a sampling rule's configuration.",
  operationId: 'UpdateSamplingRule',
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
              SamplingRuleUpdate: z
                .object({
                  RuleName: RuleNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the sampling rule. Specify a rule by either name or ARN, but not both.',
                      }),
                  ).exactOptional(),
                  RuleARN: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.',
                      }),
                  ).exactOptional(),
                  ResourceARN: ResourceARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Matches the ARN of the Amazon Web Services resource on which the service runs.',
                      }),
                  ).exactOptional(),
                  Priority: NullableIntegerSchema.and(
                    z.any().openapi({ description: 'The priority of the sampling rule.' }),
                  ).exactOptional(),
                  FixedRate: NullableDoubleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The percentage of matching requests to instrument, after the reservoir is exhausted.',
                      }),
                  ).exactOptional(),
                  ReservoirSize: NullableIntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.',
                      }),
                  ).exactOptional(),
                  Host: HostSchema.and(
                    z.any().openapi({ description: 'Matches the hostname from a request URL.' }),
                  ).exactOptional(),
                  ServiceName: ServiceNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Matches the <code>name</code> that the service uses to identify itself in segments.',
                      }),
                  ).exactOptional(),
                  ServiceType: ServiceTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Matches the <code>origin</code> that the service uses to identify its type in segments.',
                      }),
                  ).exactOptional(),
                  HTTPMethod: HTTPMethodSchema.and(
                    z.any().openapi({ description: 'Matches the HTTP method of a request.' }),
                  ).exactOptional(),
                  URLPath: URLPathSchema.and(
                    z.any().openapi({ description: 'Matches the path from a request URL.' }),
                  ).exactOptional(),
                  Attributes: AttributeMapSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Matches attributes derived from the request.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: "A document specifying changes to a sampling rule's configuration.",
                  required: [],
                }),
            })
            .openapi({ required: ['SamplingRuleUpdate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSamplingRuleResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})
