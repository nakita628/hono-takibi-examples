import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const AttributeTypeSchema = z
  .enum(['INCLUSIVE', 'EXCLUSIVE', 'CONTAINS', 'BEFORE', 'AFTER', 'ON', 'BETWEEN'])
  .openapi('AttributeType')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const AttributeDimensionSchema = z
  .object({
    AttributeType: AttributeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of segment dimension to use. Valid values are: <ul><li>INCLUSIVE - endpoints that have attributes matching the values are included in the segment.</li><li>EXCLUSIVE - endpoints that have attributes matching the values are excluded in the segment.</li><li>CONTAINS - endpoints that have attributes' substrings match the values are included in the segment.</li><li>BEFORE - endpoints with attributes read as ISO_INSTANT datetimes before the value are included in the segment.</li><li>AFTER - endpoints with attributes read as ISO_INSTANT datetimes after the value are included in the segment.</li><li>ON - endpoints with attributes read as ISO_INSTANT dates on the value are included in the segment. Time is ignored in this comparison.</li><li>BETWEEN - endpoints with attributes read as ISO_INSTANT datetimes between the values are included in the segment.</li>",
        }),
    ).exactOptional(),
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.',
        }),
    ),
  })
  .openapi({
    required: ['Values'],
    description:
      'Specifies attribute-based criteria for including or excluding endpoints from a segment.',
  })
  .openapi('AttributeDimension')

const MapOfAttributeDimensionSchema = z
  .record(z.string(), AttributeDimensionSchema)
  .openapi('MapOfAttributeDimension')

const DimensionTypeSchema = z.enum(['INCLUSIVE', 'EXCLUSIVE']).openapi('DimensionType')

const SetDimensionSchema = z
  .object({
    DimensionType: DimensionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.',
        }),
    ).exactOptional(),
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.',
        }),
    ),
  })
  .openapi({
    required: ['Values'],
    description: 'Specifies the dimension type and values for a segment dimension.',
  })
  .openapi('SetDimension')

const DoubleSchema = z.float64().openapi('Double')

const MetricDimensionSchema = z
  .object({
    ComparisonOperator: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use when comparing metric values. Valid values are: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, and EQUAL.',
        }),
    ),
    Value: DoubleSchema.and(z.any().openapi({ description: 'The value to compare.' })),
  })
  .openapi({
    required: ['ComparisonOperator', 'Value'],
    description:
      'Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.',
  })
  .openapi('MetricDimension')

const MapOfMetricDimensionSchema = z
  .record(z.string(), MetricDimensionSchema)
  .openapi('MapOfMetricDimension')

const EventDimensionsSchema = z
  .object({
    Attributes: MapOfAttributeDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom attributes that your application reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.',
        }),
    ).exactOptional(),
    EventType: SetDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the event that causes the campaign to be sent or the journey activity to be performed. This can be a standard event that Amazon Pinpoint generates, such as _email.delivered. For campaigns, this can also be a custom event that\'s specific to your application. For information about standard events, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html">Streaming Amazon Pinpoint Events</a> in the <i>Amazon Pinpoint Developer Guide</i>.',
        }),
    ).exactOptional(),
    Metrics: MapOfMetricDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom metrics that your application reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.',
    required: [],
  })
  .openapi('EventDimensions')

const FilterTypeSchema = z.enum(['SYSTEM', 'ENDPOINT']).openapi('FilterType')

const EventFilterSchema = z
  .object({
    Dimensions: EventDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dimensions for the event filter to use for the campaign or the journey activity.',
        }),
    ),
    FilterType: FilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event that causes the campaign to be sent or the journey activity to be performed. Valid values are: SYSTEM, sends the campaign or performs the activity when a system event occurs; and, ENDPOINT, sends the campaign or performs the activity when an endpoint event (<link  linkend="apps-application-id-events">Events resource</link>) occurs.',
        }),
    ),
  })
  .openapi({
    required: ['FilterType', 'Dimensions'],
    description:
      'Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.',
  })
  .openapi('EventFilter')

const EventStartConditionSchema = z
  .object({
    EventFilter: EventFilterSchema.exactOptional(),
    SegmentId: StringSchema.exactOptional(),
  })
  .openapi({
    description: 'Specifies the settings for an event that causes a journey activity to start.',
    required: [],
  })
  .openapi('EventStartCondition')

const SegmentConditionSchema = z
  .object({
    SegmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the segment to associate with the activity.',
        }),
    ),
  })
  .openapi({
    required: ['SegmentId'],
    description: 'Specifies a segment to associate with an activity in a journey.',
  })
  .openapi('SegmentCondition')

type StartConditionType = {
  Description?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  EventStartCondition?: z.infer<typeof EventStartConditionSchema>
  SegmentStartCondition?: z.infer<typeof SegmentConditionSchema> & { [key: string]: unknown }
}

const EndpointTypesElementSchema = z
  .enum([
    'PUSH',
    'GCM',
    'APNS',
    'APNS_SANDBOX',
    'APNS_VOIP',
    'APNS_VOIP_SANDBOX',
    'ADM',
    'SMS',
    'VOICE',
    'EMAIL',
    'BAIDU',
    'CUSTOM',
    'IN_APP',
  ])
  .openapi('EndpointTypesElement')

const ListOfEndpointTypesElementSchema = z
  .array(EndpointTypesElementSchema)
  .openapi('ListOfEndpointTypesElement')

const JourneyCustomMessageSchema = z
  .object({
    Data: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message content that's passed to an AWS Lambda function or to a web hook.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the message content for a custom channel message that's sent to participants in a journey.",
    required: [],
  })
  .openapi('JourneyCustomMessage')

const CustomMessageActivitySchema = z
  .object({
    DeliveryUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The destination to send the campaign or treatment to. This value can be one of the following:</p> <ul><li><p>The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.</p></li> <li><p>The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.</p></li></ul>',
        }),
    ).exactOptional(),
    EndpointTypes: ListOfEndpointTypesElementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of endpoints to send the custom message to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.',
        }),
    ).exactOptional(),
    MessageConfig: JourneyCustomMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the message data included in a custom channel message that's sent to participants in a journey.",
        }),
    ).exactOptional(),
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after Amazon Pinpoint calls the AWS Lambda function or web hook.',
        }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom message template to use for the message. If specified, this value must match the name of an existing message template.',
        }),
    ).exactOptional(),
    TemplateVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.',
    required: [],
  })
  .openapi('CustomMessageActivity')

const ConditionSchema: z.ZodType<ConditionType> = z
  .lazy(() =>
    z
      .object({
        Conditions: ListOfSimpleConditionSchema.and(
          z.any().openapi({ description: 'The conditions to evaluate for the activity.' }),
        ).exactOptional(),
        Operator: OperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                'Specifies how to handle multiple conditions for the activity. For example, if you specify two conditions for an activity, whether both or only one of the conditions must be met for the activity to be performed.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.',
        required: [],
      }),
  )
  .openapi('Condition')

const WaitTimeSchema = z
  .object({
    WaitFor: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of time to wait, as a duration in ISO 8601 format, before determining whether the activity's conditions have been met or moving participants to the next activity in the journey.",
        }),
    ).exactOptional(),
    WaitUntil: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in ISO 8601 format, when Amazon Pinpoint determines whether the activity's conditions have been met or the activity moves participants to the next activity in the journey.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.",
    required: [],
  })
  .openapi('WaitTime')

const ConditionalSplitActivitySchema = z
  .object({
    Condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The conditions that define the paths for the activity, and the relationship between the conditions.',
        }),
    ).exactOptional(),
    EvaluationWaitTime: WaitTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to wait before determining whether the conditions are met, or the date and time when Amazon Pinpoint determines whether the conditions are met.',
        }),
    ).exactOptional(),
    FalseActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the activity to perform if the conditions aren't met.",
        }),
    ).exactOptional(),
    TrueActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the activity to perform if the conditions are met.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>',
    required: [],
  })
  .openapi('ConditionalSplitActivity')

const JourneyEmailMessageSchema = z
  .object({
    FromAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The verified email address to send the email message from. The default address is the FromAddress specified for the email channel for the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the "From" address for an email message that\'s sent to participants in a journey.',
    required: [],
  })
  .openapi('JourneyEmailMessage')

const EmailMessageActivitySchema = z
  .object({
    MessageConfig: JourneyEmailMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the sender address for an email message that's sent to participants in the journey.",
        }),
    ).exactOptional(),
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after the message is sent.',
        }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the email message template to use for the message. If specified, this value must match the name of an existing message template.',
        }),
    ).exactOptional(),
    TemplateVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The unique identifier for the version of the email template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.',
    required: [],
  })
  .openapi('EmailMessageActivity')

const IntegerSchema = z.int().openapi('Integer')

const HoldoutActivitySchema = z
  .object({
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after performing the holdout activity.',
        }),
    ).exactOptional(),
    Percentage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The percentage of participants who shouldn't continue the journey.</p> <p>To determine which participants are held out, Amazon Pinpoint applies a probability-based algorithm to the percentage that you specify. Therefore, the actual percentage of participants who are held out may not be equal to the percentage that you specify.</p>",
        }),
    ),
  })
  .openapi({
    required: ['Percentage'],
    description:
      'Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.',
  })
  .openapi('HoldoutActivity')

const EventConditionSchema = z
  .object({
    Dimensions: EventDimensionsSchema.and(
      z
        .any()
        .openapi({ description: 'The dimensions for the event filter to use for the activity.' }),
    ).exactOptional(),
    MessageActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message identifier (message_id) for the message to use when determining whether message events meet the condition.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the conditions to evaluate for an event that applies to an activity in a journey.',
    required: [],
  })
  .openapi('EventCondition')

const DurationSchema = z.enum(['HR_24', 'DAY_7', 'DAY_14', 'DAY_30']).openapi('Duration')

const RecencyTypeSchema = z.enum(['ACTIVE', 'INACTIVE']).openapi('RecencyType')

const RecencyDimensionSchema = z
  .object({
    Duration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration to use when determining whether an endpoint is active or inactive.',
        }),
    ),
    RecencyType: RecencyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of recency dimension to use for the segment. Valid values are: ACTIVE, endpoints that were active within the specified duration are included in the segment; and, INACTIVE, endpoints that weren't active within the specified duration are included in the segment.",
        }),
    ),
  })
  .openapi({
    required: ['Duration', 'RecencyType'],
    description:
      'Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.',
  })
  .openapi('RecencyDimension')

const SegmentBehaviorsSchema = z
  .object({
    Recency: RecencyDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dimension settings that are based on how recently an endpoint was active.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.',
    required: [],
  })
  .openapi('SegmentBehaviors')

const SegmentDemographicsSchema = z
  .object({
    AppVersion: SetDimensionSchema.and(
      z.any().openapi({ description: 'The app version criteria for the segment.' }),
    ).exactOptional(),
    Channel: SetDimensionSchema.and(
      z.any().openapi({ description: 'The channel criteria for the segment.' }),
    ).exactOptional(),
    DeviceType: SetDimensionSchema.and(
      z.any().openapi({ description: 'The device type criteria for the segment.' }),
    ).exactOptional(),
    Make: SetDimensionSchema.and(
      z.any().openapi({ description: 'The device make criteria for the segment.' }),
    ).exactOptional(),
    Model: SetDimensionSchema.and(
      z.any().openapi({ description: 'The device model criteria for the segment.' }),
    ).exactOptional(),
    Platform: SetDimensionSchema.and(
      z.any().openapi({ description: 'The device platform criteria for the segment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.',
    required: [],
  })
  .openapi('SegmentDemographics')

const GPSCoordinatesSchema = z
  .object({
    Latitude: DoubleSchema.and(
      z.any().openapi({ description: 'The latitude coordinate of the location.' }),
    ),
    Longitude: DoubleSchema.and(
      z.any().openapi({ description: 'The longitude coordinate of the location.' }),
    ),
  })
  .openapi({
    required: ['Latitude', 'Longitude'],
    description: 'Specifies the GPS coordinates of a location.',
  })
  .openapi('GPSCoordinates')

const GPSPointDimensionSchema = z
  .object({
    Coordinates: GPSCoordinatesSchema.and(
      z.any().openapi({ description: 'The GPS coordinates to measure distance from.' }),
    ),
    RangeInKilometers: DoubleSchema.and(
      z.any().openapi({ description: 'The range, in kilometers, from the GPS coordinates.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Coordinates'],
    description:
      'Specifies GPS-based criteria for including or excluding endpoints from a segment.',
  })
  .openapi('GPSPointDimension')

const SegmentLocationSchema = z
  .object({
    Country: SetDimensionSchema.and(
      z
        .any()
        .openapi({
          description: 'The country or region code, in ISO 3166-1 alpha-2 format, for the segment.',
        }),
    ).exactOptional(),
    GPSPoint: GPSPointDimensionSchema.and(
      z.any().openapi({ description: 'The GPS location and range for the segment.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies geographical dimension settings for a segment.',
    required: [],
  })
  .openapi('SegmentLocation')

const SegmentDimensionsSchema = z
  .object({
    Attributes: MapOfAttributeDimensionSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more custom attributes to use as criteria for the segment.',
        }),
    ).exactOptional(),
    Behavior: SegmentBehaviorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The behavior-based criteria, such as how recently users have used your app, for the segment.',
        }),
    ).exactOptional(),
    Demographic: SegmentDemographicsSchema.and(
      z
        .any()
        .openapi({
          description: 'The demographic-based criteria, such as device platform, for the segment.',
        }),
    ).exactOptional(),
    Location: SegmentLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location-based criteria, such as region or GPS coordinates, for the segment.',
        }),
    ).exactOptional(),
    Metrics: MapOfMetricDimensionSchema.and(
      z
        .any()
        .openapi({ description: 'One or more custom metrics to use as criteria for the segment.' }),
    ).exactOptional(),
    UserAttributes: MapOfAttributeDimensionSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more custom user attributes to use as criteria for the segment.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the dimension settings for a segment.', required: [] })
  .openapi('SegmentDimensions')

const SimpleConditionSchema = z
  .object({
    EventCondition: EventConditionSchema.and(
      z
        .any()
        .openapi({
          description: "The dimension settings for the event that's associated with the activity.",
        }),
    ).exactOptional(),
    SegmentCondition: SegmentConditionSchema.and(
      z.any().openapi({ description: "The segment that's associated with the activity." }),
    ).exactOptional(),
    SegmentDimensions: SegmentDimensionsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentDimensions' },
          description:
            "The dimension settings for the segment that's associated with the activity.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies a condition to evaluate for an activity in a journey.',
    required: [],
  })
  .openapi('SimpleCondition')

const MultiConditionalBranchSchema = z
  .object({
    Condition: SimpleConditionSchema.and(
      z.any().openapi({ description: 'The condition to evaluate for the activity path.' }),
    ).exactOptional(),
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after completing the activity for the path.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies a condition to evaluate for an activity path in a journey.',
    required: [],
  })
  .openapi('MultiConditionalBranch')

const ListOfMultiConditionalBranchSchema = z
  .array(MultiConditionalBranchSchema)
  .openapi('ListOfMultiConditionalBranch')

const MultiConditionalSplitActivitySchema = z
  .object({
    Branches: ListOfMultiConditionalBranchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The paths for the activity, including the conditions for entering each path and the activity to perform for each path.',
        }),
    ).exactOptional(),
    DefaultActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the activity to perform for participants who don't meet any of the conditions specified for other paths in the activity.",
        }),
    ).exactOptional(),
    EvaluationWaitTime: WaitTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to wait or the date and time when Amazon Pinpoint determines whether the conditions are met.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>',
    required: [],
  })
  .openapi('MultiConditionalSplitActivity')

const JourneyPushMessageSchema = z
  .object({
    TimeToLive: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of seconds that the push notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the message configuration for a push notification that's sent to participants in a journey.",
    required: [],
  })
  .openapi('JourneyPushMessage')

const PushMessageActivitySchema = z
  .object({
    MessageConfig: JourneyPushMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time to live (TTL) value for push notifications that are sent to participants in a journey.',
        }),
    ).exactOptional(),
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after the message is sent.',
        }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the push notification template to use for the message. If specified, this value must match the name of an existing message template.',
        }),
    ).exactOptional(),
    TemplateVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The unique identifier for the version of the push notification template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.',
    required: [],
  })
  .openapi('PushMessageActivity')

const RandomSplitEntrySchema = z
  .object({
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after completing the activity for the path.',
        }),
    ).exactOptional(),
    Percentage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The percentage of participants to send down the activity path.</p> <p>To determine which participants are sent down each path, Amazon Pinpoint applies a probability-based algorithm to the percentages that you specify for the paths. Therefore, the actual percentage of participants who are sent down a path may not be equal to the percentage that you specify.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the settings for a path in a random split activity in a journey.',
    required: [],
  })
  .openapi('RandomSplitEntry')

const ListOfRandomSplitEntrySchema = z
  .array(RandomSplitEntrySchema)
  .openapi('ListOfRandomSplitEntry')

const RandomSplitActivitySchema = z
  .object({
    Branches: ListOfRandomSplitEntrySchema.and(
      z
        .any()
        .openapi({
          description:
            'The paths for the activity, including the percentage of participants to enter each path and the activity to perform for each path.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.',
    required: [],
  })
  .openapi('RandomSplitActivity')

const MessageTypeSchema = z.enum(['TRANSACTIONAL', 'PROMOTIONAL']).openapi('MessageType')

const JourneySMSMessageSchema = z
  .object({
    MessageType: MessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).",
        }),
    ).exactOptional(),
    OriginationNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.",
        }),
    ).exactOptional(),
    SenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sender ID to display as the sender of the message on a recipient\'s device. Support for sender IDs varies by country or region. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-countries.html">Supported Countries and Regions</a> in the Amazon Pinpoint User Guide.',
        }),
    ).exactOptional(),
    EntityId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.',
        }),
    ).exactOptional(),
    TemplateId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The template ID received from the regulatory body for sending SMS in your country.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.",
    required: [],
  })
  .openapi('JourneySMSMessage')

const SMSMessageActivitySchema = z
  .object({
    MessageConfig: JourneySMSMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.",
        }),
    ).exactOptional(),
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after the message is sent.',
        }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the SMS message template to use for the message. If specified, this value must match the name of an existing message template.',
        }),
    ).exactOptional(),
    TemplateVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The unique identifier for the version of the SMS template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.',
    required: [],
  })
  .openapi('SMSMessageActivity')

const WaitActivitySchema = z
  .object({
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform, after performing the wait activity.',
        }),
    ).exactOptional(),
    WaitTime: WaitTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to wait or the date and time when the activity moves participants to the next activity in the journey.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.',
    required: [],
  })
  .openapi('WaitActivity')

const ContactCenterActivitySchema = z
  .object({
    NextActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the next activity to perform after the this activity.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactCenterActivity')

type ActivityType = {
  CUSTOM?: z.infer<typeof CustomMessageActivitySchema> & { [key: string]: unknown }
  ConditionalSplit?: z.infer<typeof ConditionalSplitActivitySchema> & { [key: string]: unknown }
  Description?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  EMAIL?: z.infer<typeof EmailMessageActivitySchema> & { [key: string]: unknown }
  Holdout?: z.infer<typeof HoldoutActivitySchema> & { [key: string]: unknown }
  MultiCondition?: z.infer<typeof MultiConditionalSplitActivitySchema> & { [key: string]: unknown }
  PUSH?: z.infer<typeof PushMessageActivitySchema> & { [key: string]: unknown }
  RandomSplit?: z.infer<typeof RandomSplitActivitySchema> & { [key: string]: unknown }
  SMS?: z.infer<typeof SMSMessageActivitySchema> & { [key: string]: unknown }
  Wait?: z.infer<typeof WaitActivitySchema> & { [key: string]: unknown }
  ContactCenter?: z.infer<typeof ContactCenterActivitySchema> & { [key: string]: unknown }
}

const ListOfSimpleConditionSchema = z.array(SimpleConditionSchema).openapi('ListOfSimpleCondition')

const OperatorSchema = z.enum(['ALL', 'ANY']).openapi('Operator')

type ConditionType = {
  Conditions?: z.infer<typeof ListOfSimpleConditionSchema> & { [key: string]: unknown }
  Operator?: z.infer<typeof OperatorSchema> & { [key: string]: unknown }
}

const EndpointItemResponseSchema = z
  .object({
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The custom message that's returned in the response as a result of processing the endpoint data.",
        }),
    ).exactOptional(),
    StatusCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status code that's returned in the response as a result of processing the endpoint data.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the status code and message that result from processing data for an endpoint.',
    required: [],
  })
  .openapi('EndpointItemResponse')

const EventItemResponseSchema = z
  .object({
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A custom message that's returned in the response as a result of processing the event.",
        }),
    ).exactOptional(),
    StatusCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status code that's returned in the response as a result of processing the event. Possible values are: 202, for events that were accepted; and, 400, for events that weren't valid.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides the status code and message that result from processing an event.',
    required: [],
  })
  .openapi('EventItemResponse')

const MapOfEventItemResponseSchema = z
  .record(z.string(), EventItemResponseSchema)
  .openapi('MapOfEventItemResponse')

type ItemResponseType = {
  EndpointItemResponse?: z.infer<typeof EndpointItemResponseSchema> & { [key: string]: unknown }
  EventsItemResponse?: z.infer<typeof MapOfEventItemResponseSchema> & { [key: string]: unknown }
}

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const ApplicationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the application.' }),
    ),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.',
        }),
    ),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the Application was created.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'Arn', 'Name'],
    description: 'Provides information about an application.',
  })
  .openapi('ApplicationResponse')

const CreateAppResponseSchema = z
  .object({ ApplicationResponse: ApplicationResponseSchema })
  .openapi({ required: ['ApplicationResponse'] })
  .openapi('CreateAppResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const PayloadTooLargeExceptionSchema = z.any().openapi('PayloadTooLargeException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const MethodNotAllowedExceptionSchema = z.any().openapi('MethodNotAllowedException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const CustomDeliveryConfigurationSchema = z
  .object({
    DeliveryUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The destination to send the campaign or treatment to. This value can be one of the following:</p> <ul><li><p>The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.</p></li> <li><p>The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.</p></li></ul> ',
        }),
    ),
    EndpointTypes: ListOfEndpointTypesElementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of endpoints to send the campaign or treatment to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeliveryUri'],
    description:
      'Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.',
  })
  .openapi('CustomDeliveryConfiguration')

const ActionSchema = z.enum(['OPEN_APP', 'DEEP_LINK', 'URL']).openapi('Action')

const BooleanSchema = z.boolean().openapi('Boolean')

const MessageSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The body of the notification message. The maximum number of characters is 200.',
        }),
    ).exactOptional(),
    ImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the image to display as the push-notification icon, such as the icon for the app.',
        }),
    ).exactOptional(),
    ImageSmallIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the image to display as the small, push-notification icon, such as a small version of the icon for the app.',
        }),
    ).exactOptional(),
    ImageUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL of an image to display in the push notification.' }),
    ).exactOptional(),
    JsonBody: StringSchema.and(
      z.any().openapi({ description: 'The JSON payload to use for a silent push notification.' }),
    ).exactOptional(),
    MediaUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL of the image or video to display in the push notification.',
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.',
        }),
    ).exactOptional(),
    SilentPush: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.",
        }),
    ).exactOptional(),
    TimeToLive: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of seconds that the push-notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.</p>",
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to display above the notification message on a recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the content and settings for a push notification that's sent to recipients of a campaign.",
    required: [],
  })
  .openapi('Message')

const CampaignCustomMessageSchema = z
  .object({
    Data: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for the message. The maximum size is 5 KB.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.",
    required: [],
  })
  .openapi('CampaignCustomMessage')

const CampaignEmailMessageSchema = z
  .object({
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The body of the email for recipients whose email clients don't render HTML content.",
        }),
    ).exactOptional(),
    FromAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The verified email address to send the email from. The default address is the FromAddress specified for the email channel for the application.',
        }),
    ).exactOptional(),
    HtmlBody: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The body of the email, in HTML format, for recipients whose email clients render HTML content.',
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z.any().openapi({ description: 'The subject line, or title, of the email.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the content and "From" address for an email message that\'s sent to recipients of a campaign.',
    required: [],
  })
  .openapi('CampaignEmailMessage')

const CampaignSmsMessageSchema = z
  .object({
    Body: StringSchema.and(
      z.any().openapi({ description: 'The body of the SMS message.' }),
    ).exactOptional(),
    MessageType: MessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).",
        }),
    ).exactOptional(),
    OriginationNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.",
        }),
    ).exactOptional(),
    SenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The sender ID to display on recipients' devices when they receive the SMS message.",
        }),
    ).exactOptional(),
    EntityId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.',
        }),
    ).exactOptional(),
    TemplateId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The template ID received from the regulatory body for sending SMS in your country.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the content and settings for an SMS message that's sent to recipients of a campaign.",
    required: [],
  })
  .openapi('CampaignSmsMessage')

const AlignmentSchema = z.enum(['LEFT', 'CENTER', 'RIGHT']).openapi('Alignment')

const InAppMessageBodyConfigSchema = z
  .object({
    Alignment: AlignmentSchema.and(
      z
        .any()
        .openapi({ description: 'The alignment of the text. Valid values: LEFT, CENTER, RIGHT.' }),
    ),
    Body: StringSchema.and(z.any().openapi({ description: 'Message Body.' })),
    TextColor: StringSchema.and(z.any().openapi({ description: 'The text color.' })),
  })
  .openapi({
    required: ['Alignment', 'TextColor', 'Body'],
    description: 'Text config for Message Body.',
  })
  .openapi('InAppMessageBodyConfig')

const InAppMessageHeaderConfigSchema = z
  .object({
    Alignment: AlignmentSchema.and(
      z
        .any()
        .openapi({ description: 'The alignment of the text. Valid values: LEFT, CENTER, RIGHT.' }),
    ),
    Header: StringSchema.and(z.any().openapi({ description: 'Message Header.' })),
    TextColor: StringSchema.and(z.any().openapi({ description: 'The text color.' })),
  })
  .openapi({
    required: ['Alignment', 'Header', 'TextColor'],
    description: 'Text config for Message Header.',
  })
  .openapi('InAppMessageHeaderConfig')

const ButtonActionSchema = z.enum(['LINK', 'DEEP_LINK', 'CLOSE']).openapi('ButtonAction')

const OverrideButtonConfigurationSchema = z
  .object({
    ButtonAction: ButtonActionSchema.and(
      z.any().openapi({ description: 'Action triggered by the button.' }),
    ),
    Link: StringSchema.and(z.any().openapi({ description: 'Button destination.' })).exactOptional(),
  })
  .openapi({ required: ['ButtonAction'], description: 'Override button configuration.' })
  .openapi('OverrideButtonConfiguration')

const DefaultButtonConfigurationSchema = z
  .object({
    BackgroundColor: StringSchema.and(
      z.any().openapi({ description: 'The background color of the button.' }),
    ).exactOptional(),
    BorderRadius: IntegerSchema.and(
      z.any().openapi({ description: 'The border radius of the button.' }),
    ).exactOptional(),
    ButtonAction: ButtonActionSchema.and(
      z.any().openapi({ description: 'Action triggered by the button.' }),
    ),
    Link: StringSchema.and(z.any().openapi({ description: 'Button destination.' })).exactOptional(),
    Text: StringSchema.and(z.any().openapi({ description: 'Button text.' })),
    TextColor: StringSchema.and(
      z.any().openapi({ description: 'The text color of the button.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ButtonAction', 'Text'], description: 'Default button configuration.' })
  .openapi('DefaultButtonConfiguration')

const InAppMessageButtonSchema = z
  .object({
    Android: OverrideButtonConfigurationSchema.and(
      z.any().openapi({ description: 'Default button content.' }),
    ).exactOptional(),
    DefaultConfig: DefaultButtonConfigurationSchema.and(
      z.any().openapi({ description: 'Default button content.' }),
    ).exactOptional(),
    IOS: OverrideButtonConfigurationSchema.and(
      z.any().openapi({ description: 'Default button content.' }),
    ).exactOptional(),
    Web: OverrideButtonConfigurationSchema.and(
      z.any().openapi({ description: 'Default button content.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Button Config for an in-app message.', required: [] })
  .openapi('InAppMessageButton')

const InAppMessageContentSchema = z
  .object({
    BackgroundColor: StringSchema.and(
      z.any().openapi({ description: 'The background color for the message.' }),
    ).exactOptional(),
    BodyConfig: InAppMessageBodyConfigSchema.and(
      z.any().openapi({ description: 'The configuration for the message body.' }),
    ).exactOptional(),
    HeaderConfig: InAppMessageHeaderConfigSchema.and(
      z.any().openapi({ description: 'The configuration for the message header.' }),
    ).exactOptional(),
    ImageUrl: StringSchema.and(
      z.any().openapi({ description: 'The image url for the background of message.' }),
    ).exactOptional(),
    PrimaryBtn: InAppMessageButtonSchema.and(
      z.any().openapi({ description: 'The first button inside the message.' }),
    ).exactOptional(),
    SecondaryBtn: InAppMessageButtonSchema.and(
      z.any().openapi({ description: 'The second button inside message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration for the message content.', required: [] })
  .openapi('InAppMessageContent')

const ListOfInAppMessageContentSchema = z
  .array(InAppMessageContentSchema)
  .openapi('ListOfInAppMessageContent')

const LayoutSchema = z
  .enum(['BOTTOM_BANNER', 'TOP_BANNER', 'OVERLAYS', 'MOBILE_FEED', 'MIDDLE_BANNER', 'CAROUSEL'])
  .openapi('Layout')

const CampaignInAppMessageSchema = z
  .object({
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The message body of the notification, the email body or the text message.',
        }),
    ).exactOptional(),
    Content: ListOfInAppMessageContentSchema.and(
      z.any().openapi({ description: 'In-app message content.' }),
    ).exactOptional(),
    CustomConfig: MapOfStringSchema.and(
      z.any().openapi({ description: 'Custom config to be sent to client.' }),
    ).exactOptional(),
    Layout: LayoutSchema.and(
      z.any().openapi({ description: 'In-app message layout.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'In-app message configuration.', required: [] })
  .openapi('CampaignInAppMessage')

const MessageConfigurationSchema = z
  .object({
    ADMMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that the campaign sends through the ADM (Amazon Device Messaging) channel. If specified, this message overrides the default message.',
        }),
    ).exactOptional(),
    APNSMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that the campaign sends through the APNs (Apple Push Notification service) channel. If specified, this message overrides the default message.',
        }),
    ).exactOptional(),
    BaiduMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. If specified, this message overrides the default message.',
        }),
    ).exactOptional(),
    CustomMessage: CampaignCustomMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The message that the campaign sends through a custom channel, as specified by the delivery configuration (CustomDeliveryConfiguration) settings for the campaign. If specified, this message overrides the default message.</p> ',
        }),
    ).exactOptional(),
    DefaultMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message that the campaign sends through all the channels that are configured for the campaign.',
        }),
    ).exactOptional(),
    EmailMessage: CampaignEmailMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that the campaign sends through the email channel. If specified, this message overrides the default message.',
        }),
    ).exactOptional(),
    GCMMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. If specified, this message overrides the default message.',
        }),
    ).exactOptional(),
    SMSMessage: CampaignSmsMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that the campaign sends through the SMS channel. If specified, this message overrides the default message.',
        }),
    ).exactOptional(),
    InAppMessage: CampaignInAppMessageSchema.and(
      z.any().openapi({ description: 'The in-app message configuration.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the message configuration settings for a campaign.',
    required: [],
  })
  .openapi('MessageConfiguration')

const CampaignEventFilterSchema = z
  .object({
    Dimensions: EventDimensionsSchema.and(
      z
        .any()
        .openapi({ description: 'The dimension settings of the event filter for the campaign.' }),
    ),
    FilterType: FilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event that causes the campaign to be sent. Valid values are: SYSTEM, sends the campaign when a system event occurs; and, ENDPOINT, sends the campaign when an endpoint event (<link  linkend="apps-application-id-events">Events</link> resource) occurs.',
        }),
    ),
  })
  .openapi({
    required: ['FilterType', 'Dimensions'],
    description: 'Specifies the settings for events that cause a campaign to be sent.',
  })
  .openapi('CampaignEventFilter')

const FrequencySchema = z
  .enum(['ONCE', 'HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'EVENT', 'IN_APP_EVENT'])
  .openapi('Frequency')

const QuietTimeSchema = z
  .object({
    End: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific time when quiet time ends. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.',
        }),
    ).exactOptional(),
    Start: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific time when quiet time begins. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the start and end times that define a time range when messages aren't sent to endpoints.",
    required: [],
  })
  .openapi('QuietTime')

const ScheduleSchema = z
  .object({
    EndTime: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduled time, in ISO 8601 format, when the campaign ended or will end.',
        }),
    ).exactOptional(),
    EventFilter: CampaignEventFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event that causes the campaign to be sent, if the value of the Frequency property is EVENT.',
        }),
    ).exactOptional(),
    Frequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.',
        }),
    ).exactOptional(),
    IsLocalTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the start and end times for the campaign schedule use each recipient's local time. To base the schedule on each recipient's local time, set this value to true.",
        }),
    ).exactOptional(),
    QuietTime: QuietTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default quiet time for the campaign. Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the campaign.</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the campaign.</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from the campaign, even if quiet time is enabled.</p>",
        }),
    ).exactOptional(),
    StartTime: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduled time when the campaign began or will begin. Valid values are: IMMEDIATE, to start the campaign immediately; or, a specific time in ISO 8601 format.',
        }),
    ),
    Timezone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting UTC offset for the campaign schedule, if the value of the IsLocalTime property is true. Valid values are: UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05,\n                  UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30,\n                  UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06,\n                  UTC-07, UTC-08, UTC-09, UTC-10, and UTC-11.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartTime'],
    description: 'Specifies the schedule settings for a campaign.',
  })
  .openapi('Schedule')

const CampaignStatusSchema = z
  .enum(['SCHEDULED', 'EXECUTING', 'PENDING_NEXT_RUN', 'COMPLETED', 'PAUSED', 'DELETED', 'INVALID'])
  .openapi('CampaignStatus')

const CampaignStateSchema = z
  .object({
    CampaignStatus: CampaignStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the campaign, or the current status of a treatment that belongs to an A/B test campaign.</p> <p>If a campaign uses A/B testing, the campaign has a status of COMPLETED only if all campaign treatments have a status of COMPLETED. If you delete the segment that's associated with a campaign, the campaign fails and has a status of DELETED.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about the status of a campaign.', required: [] })
  .openapi('CampaignState')

const TemplateSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the message template to use for the message. If specified, this value must match the name of an existing message template.',
        }),
    ).exactOptional(),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the name and version of the message template to use for the message.',
    required: [],
  })
  .openapi('Template')

const TemplateConfigurationSchema = z
  .object({
    EmailTemplate: TemplateSchema.and(
      z.any().openapi({ description: 'The email template to use for the message.' }),
    ).exactOptional(),
    PushTemplate: TemplateSchema.and(
      z.any().openapi({ description: 'The push notification template to use for the message.' }),
    ).exactOptional(),
    SMSTemplate: TemplateSchema.and(
      z.any().openapi({ description: 'The SMS template to use for the message.' }),
    ).exactOptional(),
    VoiceTemplate: TemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The voice template to use for the message. This object isn't supported for campaigns.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the message template to use for the message, for each type of channel.',
    required: [],
  })
  .openapi('TemplateConfiguration')

const TreatmentResourceSchema = z
  .object({
    CustomDeliveryConfiguration: CustomDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the treatment.' }),
    ),
    MessageConfiguration: MessageConfigurationSchema.and(
      z.any().openapi({ description: 'The message configuration settings for the treatment.' }),
    ).exactOptional(),
    Schedule: ScheduleSchema.and(
      z.any().openapi({ description: 'The schedule settings for the treatment.' }),
    ).exactOptional(),
    SizePercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The allocated percentage of users (segment members) that the treatment is sent to.',
        }),
    ),
    State: CampaignStateSchema.and(
      z.any().openapi({ description: 'The current status of the treatment.' }),
    ).exactOptional(),
    TemplateConfiguration: TemplateConfigurationSchema.and(
      z.any().openapi({ description: 'The message template to use for the treatment.' }),
    ).exactOptional(),
    TreatmentDescription: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the treatment.' }),
    ).exactOptional(),
    TreatmentName: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the treatment.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'SizePercent'],
    description:
      "Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.",
  })
  .openapi('TreatmentResource')

const ListOfTreatmentResourceSchema = z
  .array(TreatmentResourceSchema)
  .openapi('ListOfTreatmentResource')

const ModeSchema = z.enum(['DELIVERY', 'FILTER']).openapi('Mode')

const CampaignHookSchema = z
  .object({
    LambdaFunctionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to customize a segment for a campaign.',
        }),
    ).exactOptional(),
    Mode: ModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The mode that Amazon Pinpoint uses to invoke the AWS Lambda function. Possible values are:</p> <ul><li><p>FILTER - Invoke the function to customize the segment that's used by a campaign.</p></li> <li><p>DELIVERY - (Deprecated) Previously, invoked the function to send a campaign through a custom channel. This functionality is not supported anymore. To send a campaign through a custom channel, use the CustomDeliveryConfiguration and CampaignCustomMessage objects of the campaign.</p></li></ul>",
        }),
    ).exactOptional(),
    WebUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The web URL that Amazon Pinpoint calls to invoke the AWS Lambda function over HTTPS.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.',
    required: [],
  })
  .openapi('CampaignHook')

const CampaignLimitsSchema = z
  .object({
    Daily: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. For an application, this value specifies the default limit for the number of messages that campaigns and journeys can send to a single endpoint during a 24-hour period. The maximum value is 100.',
        }),
    ).exactOptional(),
    MaximumDuration: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.',
        }),
    ).exactOptional(),
    MessagesPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of messages that a campaign can send each second. For an application, this value specifies the default limit for the number of messages that campaigns can send each second. The minimum value is 50. The maximum value is 20,000.',
        }),
    ).exactOptional(),
    Total: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. If a campaign recurs, this setting applies to all runs of the campaign. The maximum value is 100.',
        }),
    ).exactOptional(),
    Session: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum total number of messages that the campaign can send per user session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.',
    required: [],
  })
  .openapi('CampaignLimits')

const CampaignResponseSchema = z
  .object({
    AdditionalTreatments: ListOfTreatmentResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.',
        }),
    ).exactOptional(),
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the campaign applies to.',
        }),
    ),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the campaign.' }),
    ),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date, in ISO 8601 format, when the campaign was created.' }),
    ),
    CustomDeliveryConfiguration: CustomDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The delivery configuration settings for sending the campaign through a custom channel.',
        }),
    ).exactOptional(),
    DefaultState: CampaignStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment.",
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the campaign.' }),
    ).exactOptional(),
    HoldoutPercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.",
        }),
    ).exactOptional(),
    Hook: CampaignHookSchema.and(
      z
        .any()
        .openapi({
          description:
            "The settings for the AWS Lambda function to use as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.",
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the campaign.' }),
    ),
    IsPaused: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.",
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the campaign was last modified.',
        }),
    ),
    Limits: CampaignLimitsSchema.and(
      z.any().openapi({ description: 'The messaging limits for the campaign.' }),
    ).exactOptional(),
    MessageConfiguration: MessageConfigurationSchema.and(
      z.any().openapi({ description: 'The message configuration settings for the campaign.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the campaign.' }),
    ).exactOptional(),
    Schedule: ScheduleSchema.and(
      z.any().openapi({ description: 'The schedule settings for the campaign.' }),
    ).exactOptional(),
    SegmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The unique identifier for the segment that's associated with the campaign.",
        }),
    ),
    SegmentVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: "The version number of the segment that's associated with the campaign.",
        }),
    ),
    State: CampaignStateSchema.and(
      z.any().openapi({ description: 'The current status of the campaign.' }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateConfiguration: TemplateConfigurationSchema.and(
      z.any().openapi({ description: 'The message template that’s used for the campaign.' }),
    ).exactOptional(),
    TreatmentDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The custom description of the default treatment for the campaign.',
        }),
    ).exactOptional(),
    TreatmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.",
        }),
    ).exactOptional(),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The version number of the campaign.' }),
    ).exactOptional(),
    Priority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'LastModifiedDate',
      'CreationDate',
      'SegmentId',
      'SegmentVersion',
      'Id',
      'Arn',
      'ApplicationId',
    ],
    description:
      'Provides information about the status, configuration, and other settings for a campaign.',
  })
  .openapi('CampaignResponse')

const CreateCampaignResponseSchema = z
  .object({ CampaignResponse: CampaignResponseSchema })
  .openapi({ required: ['CampaignResponse'] })
  .openapi('CreateCampaignResponse')

const WriteTreatmentResourceSchema = z
  .object({
    CustomDeliveryConfiguration: CustomDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.',
        }),
    ).exactOptional(),
    MessageConfiguration: MessageConfigurationSchema.and(
      z.any().openapi({ description: 'The message configuration settings for the treatment.' }),
    ).exactOptional(),
    Schedule: ScheduleSchema.and(
      z.any().openapi({ description: 'The schedule settings for the treatment.' }),
    ).exactOptional(),
    SizePercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The allocated percentage of users (segment members) to send the treatment to.',
        }),
    ),
    TemplateConfiguration: TemplateConfigurationSchema.and(
      z.any().openapi({ description: 'The message template to use for the treatment.' }),
    ).exactOptional(),
    TreatmentDescription: StringSchema.and(
      z.any().openapi({ description: 'A custom description of the treatment.' }),
    ).exactOptional(),
    TreatmentName: StringSchema.and(
      z.any().openapi({ description: 'A custom name for the treatment.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SizePercent'],
    description:
      "Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.",
  })
  .openapi('WriteTreatmentResource')

const ListOfWriteTreatmentResourceSchema = z
  .array(WriteTreatmentResourceSchema)
  .openapi('ListOfWriteTreatmentResource')

const CreateTemplateMessageBodySchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the message template that was created.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message that's returned from the API for the request to create the message template.",
        }),
    ).exactOptional(),
    RequestID: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the request to create the message template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a request to create a message template.',
    required: [],
  })
  .openapi('CreateTemplateMessageBody')

const CreateEmailTemplateResponseSchema = z
  .object({ CreateTemplateMessageBody: CreateTemplateMessageBodySchema })
  .openapi({ required: ['CreateTemplateMessageBody'] })
  .openapi('CreateEmailTemplateResponse')

const ExportJobResourceSchema = z
  .object({
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location where the endpoint definitions were exported to.',
        }),
    ),
    S3UrlPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where the endpoint definitions were exported to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.',
        }),
    ),
    SegmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier for the segment that the endpoint definitions were exported from. If this value isn't present, Amazon Pinpoint exported definitions for all the endpoints that are associated with the application.",
        }),
    ).exactOptional(),
    SegmentVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the segment that the endpoint definitions were exported from.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3UrlPrefix', 'RoleArn'],
    description:
      'Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.',
  })
  .openapi('ExportJobResource')

const JobStatusSchema = z
  .enum([
    'CREATED',
    'PREPARING_FOR_INITIALIZATION',
    'INITIALIZING',
    'PROCESSING',
    'PENDING_JOB',
    'COMPLETING',
    'COMPLETED',
    'FAILING',
    'FAILED',
  ])
  .openapi('JobStatus')

const ExportJobResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the application that's associated with the export job.",
        }),
    ),
    CompletedPieces: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.',
        }),
    ).exactOptional(),
    CompletionDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the export job was completed.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date, in ISO 8601 format, when the export job was created.' }),
    ),
    Definition: ExportJobResourceSchema.and(
      z.any().openapi({ description: 'The resource settings that apply to the export job.' }),
    ),
    FailedPieces: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.",
        }),
    ).exactOptional(),
    Failures: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.",
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the export job.' }),
    ),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.",
        }),
    ),
    TotalFailures: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.",
        }),
    ).exactOptional(),
    TotalPieces: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.',
        }),
    ).exactOptional(),
    TotalProcessed: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of endpoint definitions that were processed by the export job.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The job type. This value is EXPORT for export jobs.' }),
    ),
  })
  .openapi({
    required: ['JobStatus', 'CreationDate', 'Type', 'Definition', 'Id', 'ApplicationId'],
    description:
      'Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.',
  })
  .openapi('ExportJobResponse')

const CreateExportJobResponseSchema = z
  .object({ ExportJobResponse: ExportJobResponseSchema })
  .openapi({ required: ['ExportJobResponse'] })
  .openapi('CreateExportJobResponse')

const FormatSchema = z.enum(['CSV', 'JSON']).openapi('Format')

const ImportJobResourceSchema = z
  .object({
    DefineSegment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the import job creates a segment that contains the endpoints, when the endpoint definitions are imported.',
        }),
    ).exactOptional(),
    ExternalId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.",
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p> <p>If the files are stored in an Amazon S3 location and that location contains multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>',
        }),
    ),
    RegisterEndpoints: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the import job registers the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.',
        }),
    ).exactOptional(),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.',
        }),
    ),
    S3Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>',
        }),
    ),
    SegmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the segment that the import job updates or adds endpoint definitions to, if the import job updates an existing segment.',
        }),
    ).exactOptional(),
    SegmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Format', 'S3Url', 'RoleArn'],
    description:
      'Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.',
  })
  .openapi('ImportJobResource')

const ImportJobResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the application that's associated with the import job.",
        }),
    ),
    CompletedPieces: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.',
        }),
    ).exactOptional(),
    CompletionDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the import job was completed.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date, in ISO 8601 format, when the import job was created.' }),
    ),
    Definition: ImportJobResourceSchema.and(
      z.any().openapi({ description: 'The resource settings that apply to the import job.' }),
    ),
    FailedPieces: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.",
        }),
    ).exactOptional(),
    Failures: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.",
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the import job.' }),
    ),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.",
        }),
    ),
    TotalFailures: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.",
        }),
    ).exactOptional(),
    TotalPieces: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.',
        }),
    ).exactOptional(),
    TotalProcessed: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of endpoint definitions that were processed by the import job.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The job type. This value is IMPORT for import jobs.' }),
    ),
  })
  .openapi({
    required: ['JobStatus', 'CreationDate', 'Type', 'Definition', 'Id', 'ApplicationId'],
    description:
      'Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.',
  })
  .openapi('ImportJobResponse')

const CreateImportJobResponseSchema = z
  .object({ ImportJobResponse: ImportJobResponseSchema })
  .openapi({ required: ['ImportJobResponse'] })
  .openapi('CreateImportJobResponse')

const TemplateCreateMessageBodySchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the message template that was created.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message that's returned from the API for the request to create the message template.",
        }),
    ).exactOptional(),
    RequestID: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the request to create the message template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a request to create a message template.',
    required: [],
  })
  .openapi('TemplateCreateMessageBody')

const CreateInAppTemplateResponseSchema = z
  .object({ TemplateCreateMessageBody: TemplateCreateMessageBodySchema })
  .openapi({ required: ['TemplateCreateMessageBody'] })
  .openapi('CreateInAppTemplateResponse')

const ActivitySchema: z.ZodType<ActivityType> = z
  .lazy(() =>
    z
      .object({
        CUSTOM: CustomMessageActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.',
            }),
        ).exactOptional(),
        ConditionalSplit: ConditionalSplitActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a yes/no split activity. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.',
            }),
        ).exactOptional(),
        Description: StringSchema.and(
          z.any().openapi({ description: 'The custom description of the activity.' }),
        ).exactOptional(),
        EMAIL: EmailMessageActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for an email activity. This type of activity sends an email message to participants.',
            }),
        ).exactOptional(),
        Holdout: HoldoutActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a holdout activity. This type of activity stops a journey for a specified percentage of participants.',
            }),
        ).exactOptional(),
        MultiCondition: MultiConditionalSplitActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a multivariate split activity. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.',
            }),
        ).exactOptional(),
        PUSH: PushMessageActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a push notification activity. This type of activity sends a push notification to participants.',
            }),
        ).exactOptional(),
        RandomSplit: RandomSplitActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a random split activity. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.',
            }),
        ).exactOptional(),
        SMS: SMSMessageActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for an SMS activity. This type of activity sends a text message to participants.',
            }),
        ).exactOptional(),
        Wait: WaitActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a wait activity. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.',
            }),
        ).exactOptional(),
        ContactCenter: ContactCenterActivitySchema.and(
          z
            .any()
            .openapi({
              description:
                'The settings for a connect activity. This type of activity initiates a contact center call to participants.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Specifies the configuration and other settings for an activity in a journey.',
        required: [],
      }),
  )
  .openapi('Activity')

const MapOfActivitySchema = z.record(z.string(), ActivitySchema).openapi('MapOfActivity')

const JourneyLimitsSchema = z
  .object({
    DailyCap: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of messages that the journey can send to a single participant during a 24-hour period. The maximum value is 100.',
        }),
    ).exactOptional(),
    EndpointReentryCap: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of times that a participant can enter the journey. The maximum value is 100. To allow participants to enter the journey an unlimited number of times, set this value to 0.',
        }),
    ).exactOptional(),
    MessagesPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of messages that the journey can send each second.',
        }),
    ).exactOptional(),
    EndpointReentryInterval: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Minimum time that must pass before an endpoint can re-enter a given journey. The duration should use an ISO 8601 format, such as PT1H. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.',
    required: [],
  })
  .openapi('JourneyLimits')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const JourneyScheduleSchema = z
  .object({
    EndTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduled time, in ISO 8601 format, when the journey ended or will end.',
        }),
    ).exactOptional(),
    StartTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduled time, in ISO 8601 format, when the journey began or will begin.',
        }),
    ).exactOptional(),
    Timezone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The starting UTC offset for the journey schedule, if the value of the journey's LocalTime property is true. Valid values are: UTC,\n                  UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30,\n                  UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+08:45, UTC+09, UTC+09:30,\n                  UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+12:45, UTC+13, UTC+13:45, UTC-02,\n                  UTC-02:30, UTC-03, UTC-03:30, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09,\n                  UTC-09:30, UTC-10, and UTC-11.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the schedule settings for a journey.', required: [] })
  .openapi('JourneySchedule')

const StartConditionSchema: z.ZodType<StartConditionType> = z
  .lazy(() =>
    z
      .object({
        Description: StringSchema.and(
          z.any().openapi({ description: 'The custom description of the condition.' }),
        ).exactOptional(),
        EventStartCondition: EventStartConditionSchema.exactOptional(),
        SegmentStartCondition: SegmentConditionSchema.and(
          z
            .any()
            .openapi({
              description:
                "The segment that's associated with the first activity in the journey. This segment determines which users are participants in the journey.",
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.',
        required: [],
      }),
  )
  .openapi('StartCondition')

const StateSchema = z
  .enum(['DRAFT', 'ACTIVE', 'COMPLETED', 'CANCELLED', 'CLOSED', 'PAUSED'])
  .openapi('State')

const JourneyChannelSettingsSchema = z
  .object({
    ConnectCampaignArn: StringSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the Connect Campaign.' }),
    ).exactOptional(),
    ConnectCampaignExecutionRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'IAM role ARN to be assumed when invoking Connect campaign execution APIs for dialing.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The channel-specific configurations for the journey.', required: [] })
  .openapi('JourneyChannelSettings')

const OpenHoursRuleSchema = z
  .object({
    StartTime: StringSchema.and(
      z.any().openapi({ description: 'Local start time in ISO 8601 format.' }),
    ).exactOptional(),
    EndTime: StringSchema.and(
      z.any().openapi({ description: 'Local start time in ISO 8601 format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'List of OpenHours Rules.', required: [] })
  .openapi('OpenHoursRule')

const ListOfOpenHoursRulesSchema = z
  .array(OpenHoursRuleSchema.and(z.any().openapi({ description: 'Open Hour Rule Details.' })))
  .openapi('ListOfOpenHoursRules')

const MapOfListOfOpenHoursRulesSchema = z
  .record(z.string(), ListOfOpenHoursRulesSchema)
  .openapi('MapOfListOfOpenHoursRules')

const OpenHoursSchema = z
  .object({
    EMAIL: MapOfListOfOpenHoursRulesSchema.and(
      z.any().openapi({ description: 'Rules for Email Channel.' }),
    ).exactOptional(),
    SMS: MapOfListOfOpenHoursRulesSchema.and(
      z.any().openapi({ description: 'Rules for SMS Channel.' }),
    ).exactOptional(),
    PUSH: MapOfListOfOpenHoursRulesSchema.and(
      z.any().openapi({ description: 'Rules for Push Channel.' }),
    ).exactOptional(),
    VOICE: MapOfListOfOpenHoursRulesSchema.and(
      z.any().openapi({ description: 'Rules for Voice Channel.' }),
    ).exactOptional(),
    CUSTOM: MapOfListOfOpenHoursRulesSchema.and(
      z.any().openapi({ description: 'Rules for Custom Channel.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.',
    required: [],
  })
  .openapi('OpenHours')

const ClosedDaysRuleSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Name of the rule.' })).exactOptional(),
    StartDateTime: StringSchema.and(
      z.any().openapi({ description: 'Start Datetime in ISO 8601 format.' }),
    ).exactOptional(),
    EndDateTime: StringSchema.and(
      z.any().openapi({ description: 'End Datetime in ISO 8601 format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Closed Days Rule. Part of Journey sending schedule.', required: [] })
  .openapi('ClosedDaysRule')

const ListOfClosedDaysRulesSchema = z
  .array(ClosedDaysRuleSchema.and(z.any().openapi({ description: 'ClosedDays rule details.' })))
  .openapi('ListOfClosedDaysRules')

const ClosedDaysSchema = z
  .object({
    EMAIL: ListOfClosedDaysRulesSchema.and(
      z.any().openapi({ description: 'Rules for Email Channel.' }),
    ).exactOptional(),
    SMS: ListOfClosedDaysRulesSchema.and(
      z.any().openapi({ description: 'Rules for SMS Channel.' }),
    ).exactOptional(),
    PUSH: ListOfClosedDaysRulesSchema.and(
      z.any().openapi({ description: 'Rules for Push Channel.' }),
    ).exactOptional(),
    VOICE: ListOfClosedDaysRulesSchema.and(
      z.any().openapi({ description: 'Rules for Voice Channel.' }),
    ).exactOptional(),
    CUSTOM: ListOfClosedDaysRulesSchema.and(
      z.any().openapi({ description: 'Rules for Custom Channel.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The time when journey will stop sending messages.', required: [] })
  .openapi('ClosedDays')

const JourneyResponseSchema = z
  .object({
    Activities: MapOfActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity.',
        }),
    ).exactOptional(),
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the journey applies to.',
        }),
    ),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date, in ISO 8601 format, when the journey was created.' }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the journey.' }),
    ),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the journey was last modified.',
        }),
    ).exactOptional(),
    Limits: JourneyLimitsSchema.and(
      z.any().openapi({ description: 'The messaging and entry limits for the journey.' }),
    ).exactOptional(),
    LocalTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the journey's scheduled start and end times use each participant's local time. If this value is true, the schedule uses each participant's local time.",
        }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the journey.' })),
    QuietTime: QuietTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>",
        }),
    ).exactOptional(),
    RefreshFrequency: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.',
        }),
    ).exactOptional(),
    Schedule: JourneyScheduleSchema.and(
      z.any().openapi({ description: 'The schedule settings for the journey.' }),
    ).exactOptional(),
    StartActivity: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the first activity in the journey.' }),
    ).exactOptional(),
    StartCondition: StartConditionSchema.and(
      z
        .any()
        .openapi({
          description: 'The segment that defines which users are participants in the journey.',
        }),
    ).exactOptional(),
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the journey. Possible values are:</p> <ul><li><p>DRAFT - The journey is being developed and hasn't been published yet.</p></li> <li><p>ACTIVE - The journey has been developed and published. Depending on the journey's schedule, the journey may currently be running or scheduled to start running at a later time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li> <li><p>COMPLETED - The journey has been published and has finished running. All participants have entered the journey and no participants are waiting to complete the journey or any activities in the journey.</p></li> <li><p>CANCELLED - The journey has been stopped. If a journey's status is CANCELLED, you can't add, change, or remove activities or segment settings from the journey.</p></li> <li><p>CLOSED - The journey has been published and has started running. It may have also passed its scheduled end time, or passed its scheduled start time and a refresh frequency hasn't been specified for it. If a journey's status is CLOSED, you can't add participants to it, and no existing participants can enter the journey for the first time. However, any existing participants who are currently waiting to start an activity may continue the journey.</p></li></ul>",
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z.any().openapi({ description: 'This object is not used or supported.' }),
    ).exactOptional(),
    WaitForQuietTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.',
        }),
    ).exactOptional(),
    RefreshOnSegmentUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether a journey should be refreshed on segment update.',
        }),
    ).exactOptional(),
    JourneyChannelSettings: JourneyChannelSettingsSchema.and(
      z.any().openapi({ description: 'The channel-specific configurations for the journey.' }),
    ).exactOptional(),
    SendingSchedule: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates if journey have Advance Quiet Time (OpenHours and ClosedDays). This flag should be set to true in order to allow (OpenHours and ClosedDays)',
        }),
    ).exactOptional(),
    OpenHours: OpenHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.',
        }),
    ).exactOptional(),
    ClosedDays: ClosedDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when journey will stop sending messages. QuietTime should be configured first and SendingSchedule should be set to true.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Id', 'ApplicationId'],
    description:
      'Provides information about the status, configuration, and other settings for a journey.',
  })
  .openapi('JourneyResponse')

const CreateJourneyResponseSchema = z
  .object({ JourneyResponse: JourneyResponseSchema })
  .openapi({ required: ['JourneyResponse'] })
  .openapi('CreateJourneyResponse')

const CreatePushTemplateResponseSchema = z
  .object({ CreateTemplateMessageBody: CreateTemplateMessageBodySchema })
  .openapi({ required: ['CreateTemplateMessageBody'] })
  .openapi('CreatePushTemplateResponse')

const AndroidPushNotificationTemplateSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message body to use in a push notification that's based on the message template.",
        }),
    ).exactOptional(),
    ImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL of the large icon image to display in the content view of a push notification that's based on the message template.",
        }),
    ).exactOptional(),
    ImageUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL of an image to display in a push notification that's based on the message template.",
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The raw, JSON-formatted string to use as the payload for a push notification that's based on the message template. If specified, this value overrides all other content for the message template.",
        }),
    ).exactOptional(),
    SmallImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.",
        }),
    ).exactOptional(),
    Sound: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.",
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.',
    required: [],
  })
  .openapi('AndroidPushNotificationTemplate')

const APNSPushNotificationTemplateSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message body to use in push notifications that are based on the message template.',
        }),
    ).exactOptional(),
    MediaUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of an image or video to display in push notifications that are based on the message template.',
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for push notifications that are based on the message template. If specified, this value overrides all other content for the message template.',
        }),
    ).exactOptional(),
    Sound: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.",
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in the recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.',
    required: [],
  })
  .openapi('APNSPushNotificationTemplate')

const DefaultPushNotificationTemplateSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message body to use in push notifications that are based on the message template.',
        }),
    ).exactOptional(),
    Sound: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p> <p>For an iOS platform, this value is the key for the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>",
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.',
    required: [],
  })
  .openapi('DefaultPushNotificationTemplate')

const RecommenderConfigurationResponseSchema = z
  .object({
    Attributes: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>",
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date, in extended ISO 8601 format, when the configuration was created for the recommender model.',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The custom description of the configuration for the recommender model.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the recommender model configuration.' }),
    ),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date, in extended ISO 8601 format, when the configuration for the recommender model was last modified.',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The custom name of the configuration for the recommender model.',
        }),
    ).exactOptional(),
    RecommendationProviderIdType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of Amazon Pinpoint ID that's associated with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Possible values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Each user in the model is associated with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Each user in the model is associated with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If this value is specified, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>",
        }),
    ).exactOptional(),
    RecommendationProviderRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.',
        }),
    ),
    RecommendationProviderUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the recommender model that Amazon Pinpoint retrieves the recommendation data from. This value is the ARN of an Amazon Personalize campaign.',
        }),
    ),
    RecommendationTransformerUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to perform additional processing of recommendation data that it retrieves from the recommender model.',
        }),
    ).exactOptional(),
    RecommendationsDisplayName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>",
        }),
    ).exactOptional(),
    RecommendationsPerMessage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of recommended items that are retrieved from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'RecommendationProviderUri',
      'LastModifiedDate',
      'CreationDate',
      'RecommendationProviderRoleArn',
      'Id',
    ],
    description:
      'Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.',
  })
  .openapi('RecommenderConfigurationResponse')

const CreateRecommenderConfigurationResponseSchema = z
  .object({ RecommenderConfigurationResponse: RecommenderConfigurationResponseSchema })
  .openapi({ required: ['RecommenderConfigurationResponse'] })
  .openapi('CreateRecommenderConfigurationResponse')

const MapOfIntegerSchema = z.record(z.string(), IntegerSchema).openapi('MapOfInteger')

const SegmentImportResourceSchema = z
  .object({
    ChannelCounts: MapOfIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of channel types in the endpoint definitions that were imported to create the segment.',
        }),
    ).exactOptional(),
    ExternalId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.",
        }),
    ),
    Format: FormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the files that were imported to create the segment. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.',
        }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.',
        }),
    ),
    S3Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the Amazon Simple Storage Service (Amazon S3) bucket that the endpoint definitions were imported from to create the segment.',
        }),
    ),
    Size: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of endpoint definitions that were imported successfully to create the segment.',
        }),
    ),
  })
  .openapi({
    required: ['Format', 'S3Url', 'Size', 'ExternalId', 'RoleArn'],
    description:
      'Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.',
  })
  .openapi('SegmentImportResource')

const ListOfSegmentDimensionsSchema = z
  .array(SegmentDimensionsSchema)
  .openapi('ListOfSegmentDimensions')

const SegmentReferenceSchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the segment.' }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The version number of the segment.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    description: 'Specifies the segment identifier and version of a segment.',
  })
  .openapi('SegmentReference')

const ListOfSegmentReferenceSchema = z
  .array(SegmentReferenceSchema)
  .openapi('ListOfSegmentReference')

const SourceTypeSchema = z.enum(['ALL', 'ANY', 'NONE']).openapi('SourceType')

const TypeSchema = z.enum(['ALL', 'ANY', 'NONE']).openapi('Type')

const SegmentGroupSchema = z
  .object({
    Dimensions: ListOfSegmentDimensionsSchema.and(
      z.any().openapi({ description: 'An array that defines the dimensions for the segment.' }),
    ).exactOptional(),
    SourceSegments: ListOfSegmentReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The base segment to build the segment on. A base segment, also referred to as a <i>source segment</i>, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.</p> <p>You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.</p>',
        }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how to handle multiple base segments for the segment. For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.',
        }),
    ).exactOptional(),
    Type: TypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how to handle multiple dimensions for the segment. For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.',
    required: [],
  })
  .openapi('SegmentGroup')

const ListOfSegmentGroupSchema = z.array(SegmentGroupSchema).openapi('ListOfSegmentGroup')

const IncludeSchema = z.enum(['ALL', 'ANY', 'NONE']).openapi('Include')

const SegmentGroupListSchema = z
  .object({
    Groups: ListOfSegmentGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.',
        }),
    ).exactOptional(),
    Include: IncludeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the settings that define the relationships between segment groups for a segment.',
    required: [],
  })
  .openapi('SegmentGroupList')

const SegmentTypeSchema = z.enum(['DIMENSIONAL', 'IMPORT']).openapi('SegmentType')

const SegmentResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the segment is associated with.',
        }),
    ),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the segment.' }),
    ),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the segment was created.' }),
    ),
    Dimensions: SegmentDimensionsSchema.and(
      z.any().openapi({ description: 'The dimension settings for the segment.' }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the segment.' }),
    ),
    ImportDefinition: SegmentImportResourceSchema.and(
      z
        .any()
        .openapi({
          description: "The settings for the import job that's associated with the segment.",
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the segment was last modified.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the segment.' }),
    ).exactOptional(),
    SegmentGroups: SegmentGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.',
        }),
    ).exactOptional(),
    SegmentType: SegmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The segment type. Valid values are:</p> <ul><li><p>DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time.</p></li> <li><p>IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.</p></li></ul>",
        }),
    ),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The version number of the segment.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SegmentType', 'CreationDate', 'Id', 'Arn', 'ApplicationId'],
    description:
      'Provides information about the configuration, dimension, and other settings for a segment.',
  })
  .openapi('SegmentResponse')

const CreateSegmentResponseSchema = z
  .object({ SegmentResponse: SegmentResponseSchema })
  .openapi({ required: ['SegmentResponse'] })
  .openapi('CreateSegmentResponse')

const CreateSmsTemplateResponseSchema = z
  .object({ CreateTemplateMessageBody: CreateTemplateMessageBodySchema })
  .openapi({ required: ['CreateTemplateMessageBody'] })
  .openapi('CreateSmsTemplateResponse')

const CreateVoiceTemplateResponseSchema = z
  .object({ CreateTemplateMessageBody: CreateTemplateMessageBodySchema })
  .openapi({ required: ['CreateTemplateMessageBody'] })
  .openapi('CreateVoiceTemplateResponse')

const ADMChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the ADM channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the ADM channel was enabled.' }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the ADM channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the ADM channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the ADM channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the ADM channel was last modified.' }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the ADM channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.',
  })
  .openapi('ADMChannelResponse')

const DeleteAdmChannelResponseSchema = z
  .object({ ADMChannelResponse: ADMChannelResponseSchema })
  .openapi({ required: ['ADMChannelResponse'] })
  .openapi('DeleteAdmChannelResponse')

const APNSChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the APNs channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the APNs channel was enabled.' }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the APNs channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    HasTokenKey: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the APNs channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the APNs channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the APNs channel was last modified.' }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.</p>',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the APNs channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.',
  })
  .openapi('APNSChannelResponse')

const DeleteApnsChannelResponseSchema = z
  .object({ APNSChannelResponse: APNSChannelResponseSchema })
  .openapi({ required: ['APNSChannelResponse'] })
  .openapi('DeleteApnsChannelResponse')

const APNSSandboxChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the APNs sandbox channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the APNs sandbox channel was enabled.' }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the APNs sandbox channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    HasTokenKey: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the APNs sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the APNs sandbox channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the APNs sandbox channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the APNs sandbox channel was last modified.',
        }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the APNs sandbox channel, this value is APNS_SANDBOX.',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the APNs sandbox channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.',
  })
  .openapi('APNSSandboxChannelResponse')

const DeleteApnsSandboxChannelResponseSchema = z
  .object({ APNSSandboxChannelResponse: APNSSandboxChannelResponseSchema })
  .openapi({ required: ['APNSSandboxChannelResponse'] })
  .openapi('DeleteApnsSandboxChannelResponse')

const APNSVoipChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the APNs VoIP channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the APNs VoIP channel was enabled.' }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the APNs VoIP channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    HasTokenKey: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the APNs VoIP channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the APNs VoIP channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the APNs VoIP channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the APNs VoIP channel was last modified.',
        }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the APNs VoIP channel, this value is APNS_VOIP.',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the APNs VoIP channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.',
  })
  .openapi('APNSVoipChannelResponse')

const DeleteApnsVoipChannelResponseSchema = z
  .object({ APNSVoipChannelResponse: APNSVoipChannelResponseSchema })
  .openapi({ required: ['APNSVoipChannelResponse'] })
  .openapi('DeleteApnsVoipChannelResponse')

const APNSVoipSandboxChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the APNs VoIP sandbox channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the APNs VoIP sandbox channel was enabled.',
        }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the APNs VoIP sandbox channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    HasTokenKey: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the APNs VoIP sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether the APNs VoIP sandbox channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the APNs VoIP sandbox channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the APNs VoIP sandbox channel was last modified.',
        }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the APNs VoIP sandbox channel, this value is APNS_VOIP_SANDBOX.',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the APNs VoIP sandbox channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.',
  })
  .openapi('APNSVoipSandboxChannelResponse')

const DeleteApnsVoipSandboxChannelResponseSchema = z
  .object({ APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponseSchema })
  .openapi({ required: ['APNSVoipSandboxChannelResponse'] })
  .openapi('DeleteApnsVoipSandboxChannelResponse')

const DeleteAppResponseSchema = z
  .object({ ApplicationResponse: ApplicationResponseSchema })
  .openapi({ required: ['ApplicationResponse'] })
  .openapi('DeleteAppResponse')

const BaiduChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the Baidu channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the Baidu channel was enabled.' }),
    ).exactOptional(),
    Credential: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The API key that you received from the Baidu Cloud Push service to communicate with the service.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the Baidu channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the Baidu channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the Baidu channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the Baidu channel was last modified.' }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the Baidu channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Credential', 'Platform'],
    description:
      'Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.',
  })
  .openapi('BaiduChannelResponse')

const DeleteBaiduChannelResponseSchema = z
  .object({ BaiduChannelResponse: BaiduChannelResponseSchema })
  .openapi({ required: ['BaiduChannelResponse'] })
  .openapi('DeleteBaiduChannelResponse')

const DeleteCampaignResponseSchema = z
  .object({ CampaignResponse: CampaignResponseSchema })
  .openapi({ required: ['CampaignResponse'] })
  .openapi('DeleteCampaignResponse')

const EmailChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the email channel applies to.',
        }),
    ).exactOptional(),
    ConfigurationSet: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that\'s applied to messages that are sent through the channel.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the email channel was enabled.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the email channel is enabled for the application.',
        }),
    ).exactOptional(),
    FromAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The verified email address that email is sent from when you send email through the channel.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Identity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            " <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that's used when you send email through the channel.</p>",
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the email channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the email channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format, when the email channel was last modified.',
        }),
    ).exactOptional(),
    MessagesPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of emails that can be sent through the channel each second.',
        }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.',
        }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.</p>',
        }),
    ).exactOptional(),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the email channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the email channel for an application.',
  })
  .openapi('EmailChannelResponse')

const DeleteEmailChannelResponseSchema = z
  .object({ EmailChannelResponse: EmailChannelResponseSchema })
  .openapi({ required: ['EmailChannelResponse'] })
  .openapi('DeleteEmailChannelResponse')

const MessageBodySchema = z
  .object({
    Message: StringSchema.and(
      z.any().openapi({ description: "The message that's returned from the API." }),
    ).exactOptional(),
    RequestID: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the request or response.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about an API request or response.', required: [] })
  .openapi('MessageBody')

const DeleteEmailTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('DeleteEmailTemplateResponse')

const MapOfListOfStringSchema = z
  .record(z.string(), ListOfStringSchema)
  .openapi('MapOfListOfString')

const ChannelTypeSchema = z
  .enum([
    'PUSH',
    'GCM',
    'APNS',
    'APNS_SANDBOX',
    'APNS_VOIP',
    'APNS_VOIP_SANDBOX',
    'ADM',
    'SMS',
    'VOICE',
    'EMAIL',
    'BAIDU',
    'CUSTOM',
    'IN_APP',
  ])
  .openapi('ChannelType')

const EndpointDemographicSchema = z
  .object({
    AppVersion: StringSchema.and(
      z
        .any()
        .openapi({ description: "The version of the app that's associated with the endpoint." }),
    ).exactOptional(),
    Locale: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale of the endpoint, in the following format: the ISO 639-1 alpha-2 code, followed by an underscore (_), followed by an ISO 3166-1 alpha-2 value.',
        }),
    ).exactOptional(),
    Make: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The manufacturer of the endpoint device, such as apple or samsung.',
        }),
    ).exactOptional(),
    Model: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The model name or number of the endpoint device, such as iPhone or SM-G900F.',
        }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z.any().openapi({ description: 'The model version of the endpoint device.' }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z.any().openapi({ description: 'The platform of the endpoint device, such as ios.' }),
    ).exactOptional(),
    PlatformVersion: StringSchema.and(
      z.any().openapi({ description: 'The platform version of the endpoint device.' }),
    ).exactOptional(),
    Timezone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone of the endpoint, specified as a tz database name value, such as America/Los_Angeles.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies demographic information about an endpoint, such as the applicable time zone and platform.',
    required: [],
  })
  .openapi('EndpointDemographic')

const EndpointLocationSchema = z
  .object({
    City: StringSchema.and(
      z.any().openapi({ description: 'The name of the city where the endpoint is located.' }),
    ).exactOptional(),
    Country: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the endpoint is located. For example, US for the United States.',
        }),
    ).exactOptional(),
    Latitude: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The latitude coordinate of the endpoint location, rounded to one decimal place.',
        }),
    ).exactOptional(),
    Longitude: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The longitude coordinate of the endpoint location, rounded to one decimal place.',
        }),
    ).exactOptional(),
    PostalCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The postal or ZIP code for the area where the endpoint is located.',
        }),
    ).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the region where the endpoint is located. For locations in the United States, this value is the name of a state.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies geographic information about an endpoint.', required: [] })
  .openapi('EndpointLocation')

const MapOfDoubleSchema = z.record(z.string(), DoubleSchema).openapi('MapOfDouble')

const EndpointUserSchema = z
  .object({
    UserAttributes: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\\), and slash (/). The Amazon Pinpoint console can\'t display attribute names that contain these characters. This restriction doesn\'t apply to attribute values.</p>',
        }),
    ).exactOptional(),
    UserId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the user.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies data for one or more attributes that describe the user who's associated with an endpoint.",
    required: [],
  })
  .openapi('EndpointUser')

const EndpointResponseSchema = z
  .object({
    Address: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.',
        }),
    ).exactOptional(),
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the application that's associated with the endpoint.",
        }),
    ).exactOptional(),
    Attributes: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments.',
        }),
    ).exactOptional(),
    ChannelType: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The channel that's used when sending messages or push notifications to the endpoint.",
        }),
    ).exactOptional(),
    CohortId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the endpoint was created.',
        }),
    ).exactOptional(),
    Demographic: EndpointDemographicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The demographic information for the endpoint, such as the time zone and platform.',
        }),
    ).exactOptional(),
    EffectiveDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the endpoint was last updated.',
        }),
    ).exactOptional(),
    EndpointStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether messages or push notifications are sent to the endpoint. Possible values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.",
        }),
    ).exactOptional(),
    Location: EndpointLocationSchema.and(
      z.any().openapi({ description: 'The geographic information for the endpoint.' }),
    ).exactOptional(),
    Metrics: MapOfDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.',
        }),
    ).exactOptional(),
    OptOut: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.",
        }),
    ).exactOptional(),
    RequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the most recent request to update the endpoint.',
        }),
    ).exactOptional(),
    User: EndpointUserSchema.and(
      z
        .any()
        .openapi({
          description:
            "One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the channel type and other settings for an endpoint.',
    required: [],
  })
  .openapi('EndpointResponse')

const DeleteEndpointResponseSchema = z
  .object({ EndpointResponse: EndpointResponseSchema })
  .openapi({ required: ['EndpointResponse'] })
  .openapi('DeleteEndpointResponse')

const EventStreamSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application to publish event data for.',
        }),
    ),
    DestinationStreamArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>\n               </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>\n               </p>',
        }),
    ),
    ExternalId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.",
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the event stream was last modified.',
        }),
    ).exactOptional(),
    LastUpdatedBy: StringSchema.and(
      z.any().openapi({ description: 'The IAM user who last modified the event stream.' }),
    ).exactOptional(),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationId', 'RoleArn', 'DestinationStreamArn'],
    description:
      'Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.',
  })
  .openapi('EventStream')

const DeleteEventStreamResponseSchema = z
  .object({ EventStream: EventStreamSchema })
  .openapi({ required: ['EventStream'] })
  .openapi('DeleteEventStreamResponse')

const GCMChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the GCM channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the GCM channel was enabled.' }),
    ).exactOptional(),
    Credential: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the GCM channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the GCM channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the GCM channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the GCM channel was last modified.' }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the GCM channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Credential', 'Platform'],
    description:
      'Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.',
  })
  .openapi('GCMChannelResponse')

const DeleteGcmChannelResponseSchema = z
  .object({ GCMChannelResponse: GCMChannelResponseSchema })
  .openapi({ required: ['GCMChannelResponse'] })
  .openapi('DeleteGcmChannelResponse')

const DeleteInAppTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('DeleteInAppTemplateResponse')

const DeleteJourneyResponseSchema = z
  .object({ JourneyResponse: JourneyResponseSchema })
  .openapi({ required: ['JourneyResponse'] })
  .openapi('DeleteJourneyResponse')

const DeletePushTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('DeletePushTemplateResponse')

const DeleteRecommenderConfigurationResponseSchema = z
  .object({ RecommenderConfigurationResponse: RecommenderConfigurationResponseSchema })
  .openapi({ required: ['RecommenderConfigurationResponse'] })
  .openapi('DeleteRecommenderConfigurationResponse')

const DeleteSegmentResponseSchema = z
  .object({ SegmentResponse: SegmentResponseSchema })
  .openapi({ required: ['SegmentResponse'] })
  .openapi('DeleteSegmentResponse')

const SMSChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the SMS channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the SMS channel was enabled.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the SMS channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the SMS channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the SMS channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format, when the SMS channel was last modified.',
        }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.',
        }),
    ),
    PromotionalMessagesPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of promotional messages that you can send through the SMS channel each second.',
        }),
    ).exactOptional(),
    SenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identity that displays on recipients' devices when they receive messages from the SMS channel.",
        }),
    ).exactOptional(),
    ShortCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The registered short code to use when you send messages through the SMS channel.',
        }),
    ).exactOptional(),
    TransactionalMessagesPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of transactional messages that you can send through the SMS channel each second.',
        }),
    ).exactOptional(),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the SMS channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the SMS channel for an application.',
  })
  .openapi('SMSChannelResponse')

const DeleteSmsChannelResponseSchema = z
  .object({ SMSChannelResponse: SMSChannelResponseSchema })
  .openapi({ required: ['SMSChannelResponse'] })
  .openapi('DeleteSmsChannelResponse')

const DeleteSmsTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('DeleteSmsTemplateResponse')

const ListOfEndpointResponseSchema = z
  .array(EndpointResponseSchema)
  .openapi('ListOfEndpointResponse')

const EndpointsResponseSchema = z
  .object({
    Item: ListOfEndpointResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each endpoint that's associated with the user ID.",
        }),
    ),
  })
  .openapi({
    required: ['Item'],
    description: 'Provides information about all the endpoints that are associated with a user ID.',
  })
  .openapi('EndpointsResponse')

const DeleteUserEndpointsResponseSchema = z
  .object({ EndpointsResponse: EndpointsResponseSchema })
  .openapi({ required: ['EndpointsResponse'] })
  .openapi('DeleteUserEndpointsResponse')

const VoiceChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that the voice channel applies to.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the voice channel was enabled.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the voice channel is enabled for the application.',
        }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the voice channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the voice channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the voice channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format, when the voice channel was last modified.',
        }),
    ).exactOptional(),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of messaging or notification platform for the channel. For the voice channel, this value is VOICE.',
        }),
    ),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the voice channel.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Platform'],
    description:
      'Provides information about the status and settings of the voice channel for an application.',
  })
  .openapi('VoiceChannelResponse')

const DeleteVoiceChannelResponseSchema = z
  .object({ VoiceChannelResponse: VoiceChannelResponseSchema })
  .openapi({ required: ['VoiceChannelResponse'] })
  .openapi('DeleteVoiceChannelResponse')

const DeleteVoiceTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('DeleteVoiceTemplateResponse')

const GetAdmChannelResponseSchema = z
  .object({ ADMChannelResponse: ADMChannelResponseSchema })
  .openapi({ required: ['ADMChannelResponse'] })
  .openapi('GetAdmChannelResponse')

const GetApnsChannelResponseSchema = z
  .object({ APNSChannelResponse: APNSChannelResponseSchema })
  .openapi({ required: ['APNSChannelResponse'] })
  .openapi('GetApnsChannelResponse')

const GetApnsSandboxChannelResponseSchema = z
  .object({ APNSSandboxChannelResponse: APNSSandboxChannelResponseSchema })
  .openapi({ required: ['APNSSandboxChannelResponse'] })
  .openapi('GetApnsSandboxChannelResponse')

const GetApnsVoipChannelResponseSchema = z
  .object({ APNSVoipChannelResponse: APNSVoipChannelResponseSchema })
  .openapi({ required: ['APNSVoipChannelResponse'] })
  .openapi('GetApnsVoipChannelResponse')

const GetApnsVoipSandboxChannelResponseSchema = z
  .object({ APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponseSchema })
  .openapi({ required: ['APNSVoipSandboxChannelResponse'] })
  .openapi('GetApnsVoipSandboxChannelResponse')

const GetAppResponseSchema = z
  .object({ ApplicationResponse: ApplicationResponseSchema })
  .openapi({ required: ['ApplicationResponse'] })
  .openapi('GetAppResponse')

const ResultRowValueSchema = z
  .object({
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The friendly name of the metric whose value is specified by the Value property.',
        }),
    ),
    Type: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The data type of the value specified by the Value property.' }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'In a Values object, the value for the metric that the query retrieved data for. In a GroupedBys object, the value for the field that was used to group data in a result set that contains multiple results (Values objects).',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Value', 'Key'],
    description:
      'Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.',
  })
  .openapi('ResultRowValue')

const ListOfResultRowValueSchema = z.array(ResultRowValueSchema).openapi('ListOfResultRowValue')

const ResultRowSchema = z
  .object({
    GroupedBys: ListOfResultRowValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.',
        }),
    ),
    Values: ListOfResultRowValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that provides pre-aggregated values for a standard metric that applies to an application, campaign, or journey.',
        }),
    ),
  })
  .openapi({
    required: ['GroupedBys', 'Values'],
    description:
      'Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.',
  })
  .openapi('ResultRow')

const ListOfResultRowSchema = z.array(ResultRowSchema).openapi('ListOfResultRow')

const BaseKpiResultSchema = z
  .object({
    Rows: ListOfResultRowSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.',
        }),
    ),
  })
  .openapi({
    required: ['Rows'],
    description:
      'Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.',
  })
  .openapi('BaseKpiResult')

const ApplicationDateRangeKpiResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the metric applies to.',
        }),
    ),
    EndTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.',
        }),
    ),
    KpiName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
        }),
    ),
    KpiResult: BaseKpiResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Application Metrics resource because the resource returns all results in a single page.',
        }),
    ).exactOptional(),
    StartTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.',
        }),
    ),
  })
  .openapi({
    required: ['KpiResult', 'KpiName', 'EndTime', 'StartTime', 'ApplicationId'],
    description:
      'Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.',
  })
  .openapi('ApplicationDateRangeKpiResponse')

const GetApplicationDateRangeKpiResponseSchema = z
  .object({ ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponseSchema })
  .openapi({ required: ['ApplicationDateRangeKpiResponse'] })
  .openapi('GetApplicationDateRangeKpiResponse')

const ApplicationSettingsResourceSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
        }),
    ),
    CampaignHook: CampaignHookSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.',
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in ISO 8601 format, when the application's settings were last modified.",
        }),
    ).exactOptional(),
    Limits: CampaignLimitsSchema.and(
      z
        .any()
        .openapi({ description: 'The default sending limits for campaigns in the application.' }),
    ).exactOptional(),
    QuietTime: QuietTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationId'],
    description:
      'Provides information about an application, including the default settings for an application.',
  })
  .openapi('ApplicationSettingsResource')

const GetApplicationSettingsResponseSchema = z
  .object({ ApplicationSettingsResource: ApplicationSettingsResourceSchema })
  .openapi({ required: ['ApplicationSettingsResource'] })
  .openapi('GetApplicationSettingsResponse')

const ListOfApplicationResponseSchema = z
  .array(ApplicationResponseSchema)
  .openapi('ListOfApplicationResponse')

const ApplicationsResponseSchema = z
  .object({
    Item: ListOfApplicationResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of responses, one for each application that was returned.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about all of your applications.', required: [] })
  .openapi('ApplicationsResponse')

const GetAppsResponseSchema = z
  .object({ ApplicationsResponse: ApplicationsResponseSchema })
  .openapi({ required: ['ApplicationsResponse'] })
  .openapi('GetAppsResponse')

const GetBaiduChannelResponseSchema = z
  .object({ BaiduChannelResponse: BaiduChannelResponseSchema })
  .openapi({ required: ['BaiduChannelResponse'] })
  .openapi('GetBaiduChannelResponse')

const GetCampaignResponseSchema = z
  .object({ CampaignResponse: CampaignResponseSchema })
  .openapi({ required: ['CampaignResponse'] })
  .openapi('GetCampaignResponse')

const ActivityResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the campaign applies to.',
        }),
    ),
    CampaignId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the campaign that the activity applies to.',
        }),
    ),
    End: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actual time, in ISO 8601 format, when the activity was marked CANCELLED or COMPLETED.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the activity.' }),
    ),
    Result: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the activity succeeded. Possible values are SUCCESS and FAIL.',
        }),
    ).exactOptional(),
    ScheduledStart: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The scheduled start time, in ISO 8601 format, for the activity.',
        }),
    ).exactOptional(),
    Start: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The actual start time, in ISO 8601 format, of the activity.' }),
    ).exactOptional(),
    State: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the activity. Possible values are: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, and COMPLETED.',
        }),
    ).exactOptional(),
    SuccessfulEndpointCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of endpoints that the campaign successfully delivered messages to.',
        }),
    ).exactOptional(),
    TimezonesCompletedCount: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of time zones that were completed.' }),
    ).exactOptional(),
    TimezonesTotalCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of unique time zones that are in the segment for the campaign.',
        }),
    ).exactOptional(),
    TotalEndpointCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of endpoints that the campaign attempted to deliver messages to.',
        }),
    ).exactOptional(),
    TreatmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the campaign treatment that the activity applies to. A treatment is a variation of a campaign that's used for A/B testing of a campaign.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CampaignId', 'Id', 'ApplicationId'],
    description: 'Provides information about an activity that was performed by a campaign.',
  })
  .openapi('ActivityResponse')

const ListOfActivityResponseSchema = z
  .array(ActivityResponseSchema)
  .openapi('ListOfActivityResponse')

const ActivitiesResponseSchema = z
  .object({
    Item: ListOfActivityResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of responses, one for each activity that was performed by the campaign.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description: 'Provides information about the activities that were performed by a campaign.',
  })
  .openapi('ActivitiesResponse')

const GetCampaignActivitiesResponseSchema = z
  .object({ ActivitiesResponse: ActivitiesResponseSchema })
  .openapi({ required: ['ActivitiesResponse'] })
  .openapi('GetCampaignActivitiesResponse')

const CampaignDateRangeKpiResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the metric applies to.',
        }),
    ),
    CampaignId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the campaign that the metric applies to.',
        }),
    ),
    EndTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.',
        }),
    ),
    KpiName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
        }),
    ),
    KpiResult: BaseKpiResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Campaign Metrics resource because the resource returns all results in a single page.',
        }),
    ).exactOptional(),
    StartTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.',
        }),
    ),
  })
  .openapi({
    required: ['KpiResult', 'KpiName', 'EndTime', 'CampaignId', 'StartTime', 'ApplicationId'],
    description:
      'Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.',
  })
  .openapi('CampaignDateRangeKpiResponse')

const GetCampaignDateRangeKpiResponseSchema = z
  .object({ CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponseSchema })
  .openapi({ required: ['CampaignDateRangeKpiResponse'] })
  .openapi('GetCampaignDateRangeKpiResponse')

const GetCampaignVersionResponseSchema = z
  .object({ CampaignResponse: CampaignResponseSchema })
  .openapi({ required: ['CampaignResponse'] })
  .openapi('GetCampaignVersionResponse')

const ListOfCampaignResponseSchema = z
  .array(CampaignResponseSchema)
  .openapi('ListOfCampaignResponse')

const CampaignsResponseSchema = z
  .object({
    Item: ListOfCampaignResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each campaign that's associated with the application.",
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description:
      'Provides information about the configuration and other settings for all the campaigns that are associated with an application.',
  })
  .openapi('CampaignsResponse')

const GetCampaignVersionsResponseSchema = z
  .object({ CampaignsResponse: CampaignsResponseSchema })
  .openapi({ required: ['CampaignsResponse'] })
  .openapi('GetCampaignVersionsResponse')

const GetCampaignsResponseSchema = z
  .object({ CampaignsResponse: CampaignsResponseSchema })
  .openapi({ required: ['CampaignsResponse'] })
  .openapi('GetCampaignsResponse')

const ChannelResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the application.' }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the channel was enabled.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether the channel is enabled for the application.' }),
    ).exactOptional(),
    HasCredential: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '(Not used) This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) An identifier for the channel. This property is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    IsArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the channel is archived.' }),
    ).exactOptional(),
    LastModifiedBy: StringSchema.and(
      z.any().openapi({ description: 'The user who last modified the channel.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the channel was last modified.',
        }),
    ).exactOptional(),
    Version: IntegerSchema.and(
      z.any().openapi({ description: 'The current version of the channel.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the general settings and status of a channel for an application.',
    required: [],
  })
  .openapi('ChannelResponse')

const MapOfChannelResponseSchema = z
  .record(z.string(), ChannelResponseSchema)
  .openapi('MapOfChannelResponse')

const ChannelsResponseSchema = z
  .object({
    Channels: MapOfChannelResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.',
        }),
    ),
  })
  .openapi({
    required: ['Channels'],
    description:
      "Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.",
  })
  .openapi('ChannelsResponse')

const GetChannelsResponseSchema = z
  .object({ ChannelsResponse: ChannelsResponseSchema })
  .openapi({ required: ['ChannelsResponse'] })
  .openapi('GetChannelsResponse')

const GetEmailChannelResponseSchema = z
  .object({ EmailChannelResponse: EmailChannelResponseSchema })
  .openapi({ required: ['EmailChannelResponse'] })
  .openapi('GetEmailChannelResponse')

const TemplateTypeSchema = z
  .enum(['EMAIL', 'SMS', 'VOICE', 'PUSH', 'INAPP'])
  .openapi('TemplateType')

const EmailTemplateResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the message template.' }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was created.',
        }),
    ),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.',
        }),
    ).exactOptional(),
    HtmlPart: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message body, in HTML format, that's used in email messages that are based on the message template.",
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was last modified.',
        }),
    ),
    RecommenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the recommender model that's used by the message template.",
        }),
    ).exactOptional(),
    Subject: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The subject line, or title, that's used in email messages that are based on the message template.",
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the message template.' }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z.any().openapi({ description: 'The name of the message template.' }),
    ),
    TemplateType: TemplateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of channel that the message template is designed for. For an email template, this value is EMAIL.',
        }),
    ),
    TextPart: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message body, in plain text format, that's used in email messages that are based on the message template.",
        }),
    ).exactOptional(),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType'],
    description:
      'Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.',
  })
  .openapi('EmailTemplateResponse')

const GetEmailTemplateResponseSchema = z
  .object({ EmailTemplateResponse: EmailTemplateResponseSchema })
  .openapi({ required: ['EmailTemplateResponse'] })
  .openapi('GetEmailTemplateResponse')

const GetEndpointResponseSchema = z
  .object({ EndpointResponse: EndpointResponseSchema })
  .openapi({ required: ['EndpointResponse'] })
  .openapi('GetEndpointResponse')

const GetEventStreamResponseSchema = z
  .object({ EventStream: EventStreamSchema })
  .openapi({ required: ['EventStream'] })
  .openapi('GetEventStreamResponse')

const GetExportJobResponseSchema = z
  .object({ ExportJobResponse: ExportJobResponseSchema })
  .openapi({ required: ['ExportJobResponse'] })
  .openapi('GetExportJobResponse')

const ListOfExportJobResponseSchema = z
  .array(ExportJobResponseSchema)
  .openapi('ListOfExportJobResponse')

const ExportJobsResponseSchema = z
  .object({
    Item: ListOfExportJobResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).",
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description:
      'Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.',
  })
  .openapi('ExportJobsResponse')

const GetExportJobsResponseSchema = z
  .object({ ExportJobsResponse: ExportJobsResponseSchema })
  .openapi({ required: ['ExportJobsResponse'] })
  .openapi('GetExportJobsResponse')

const GetGcmChannelResponseSchema = z
  .object({ GCMChannelResponse: GCMChannelResponseSchema })
  .openapi({ required: ['GCMChannelResponse'] })
  .openapi('GetGcmChannelResponse')

const GetImportJobResponseSchema = z
  .object({ ImportJobResponse: ImportJobResponseSchema })
  .openapi({ required: ['ImportJobResponse'] })
  .openapi('GetImportJobResponse')

const ListOfImportJobResponseSchema = z
  .array(ImportJobResponseSchema)
  .openapi('ListOfImportJobResponse')

const ImportJobsResponseSchema = z
  .object({
    Item: ListOfImportJobResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).",
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description:
      'Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.',
  })
  .openapi('ImportJobsResponse')

const GetImportJobsResponseSchema = z
  .object({ ImportJobsResponse: ImportJobsResponseSchema })
  .openapi({ required: ['ImportJobsResponse'] })
  .openapi('GetImportJobsResponse')

const InAppMessageSchema = z
  .object({
    Content: ListOfInAppMessageContentSchema.and(
      z.any().openapi({ description: 'In-app message content.' }),
    ).exactOptional(),
    CustomConfig: MapOfStringSchema.and(
      z.any().openapi({ description: 'Custom config to be sent to SDK.' }),
    ).exactOptional(),
    Layout: LayoutSchema.and(
      z.any().openapi({ description: 'The layout of the message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides all fields required for building an in-app message.',
    required: [],
  })
  .openapi('InAppMessage')

const InAppCampaignScheduleSchema = z
  .object({
    EndDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scheduled time after which the in-app message should not be shown. Timestamp is in ISO 8601 format.',
        }),
    ).exactOptional(),
    EventFilter: CampaignEventFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event filter the SDK has to use to show the in-app message in the application.',
        }),
    ).exactOptional(),
    QuietTime: QuietTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'Time during which the in-app message should not be shown to the user.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Schedule of the campaign.', required: [] })
  .openapi('InAppCampaignSchedule')

const InAppMessageCampaignSchema = z
  .object({
    CampaignId: StringSchema.and(
      z.any().openapi({ description: 'Campaign id of the corresponding campaign.' }),
    ).exactOptional(),
    DailyCap: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Daily cap which controls the number of times any in-app messages can be shown to the endpoint during a day.',
        }),
    ).exactOptional(),
    InAppMessage: InAppMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'In-app message content with all fields required for rendering an in-app message.',
        }),
    ).exactOptional(),
    Priority: IntegerSchema.and(
      z.any().openapi({ description: 'Priority of the in-app message.' }),
    ).exactOptional(),
    Schedule: InAppCampaignScheduleSchema.and(
      z.any().openapi({ description: 'Schedule of the campaign.' }),
    ).exactOptional(),
    SessionCap: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Session cap which controls the number of times an in-app message can be shown to the endpoint during an application session.',
        }),
    ).exactOptional(),
    TotalCap: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total cap which controls the number of times an in-app message can be shown to the endpoint.',
        }),
    ).exactOptional(),
    TreatmentId: StringSchema.and(
      z.any().openapi({ description: 'Treatment id of the campaign.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Targeted in-app message campaign.', required: [] })
  .openapi('InAppMessageCampaign')

const ListOfInAppMessageCampaignSchema = z
  .array(InAppMessageCampaignSchema)
  .openapi('ListOfInAppMessageCampaign')

const InAppMessagesResponseSchema = z
  .object({
    InAppMessageCampaigns: ListOfInAppMessageCampaignSchema.and(
      z.any().openapi({ description: 'List of targeted in-app message campaigns.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Get in-app messages response object.', required: [] })
  .openapi('InAppMessagesResponse')

const GetInAppMessagesResponseSchema = z
  .object({ InAppMessagesResponse: InAppMessagesResponseSchema })
  .openapi({ required: ['InAppMessagesResponse'] })
  .openapi('GetInAppMessagesResponse')

const InAppTemplateResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The resource arn of the template.' }),
    ).exactOptional(),
    Content: ListOfInAppMessageContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z.any().openapi({ description: 'The creation date of the template.' }),
    ),
    CustomConfig: MapOfStringSchema.and(
      z.any().openapi({ description: 'Custom config to be sent to client.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z.any().openapi({ description: 'The last modified date of the template.' }),
    ),
    Layout: LayoutSchema.and(
      z.any().openapi({ description: 'The layout of the message.' }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the template.' }),
    ).exactOptional(),
    TemplateName: StringSchema.and(z.any().openapi({ description: 'The name of the template.' })),
    TemplateType: TemplateTypeSchema.and(
      z.any().openapi({ description: 'The type of the template.' }),
    ),
    Version: StringSchema.and(
      z.any().openapi({ description: 'The version id of the template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType'],
    description: 'In-App Template Response.',
  })
  .openapi('InAppTemplateResponse')

const GetInAppTemplateResponseSchema = z
  .object({ InAppTemplateResponse: InAppTemplateResponseSchema })
  .openapi({ required: ['InAppTemplateResponse'] })
  .openapi('GetInAppTemplateResponse')

const GetJourneyResponseSchema = z
  .object({ JourneyResponse: JourneyResponseSchema })
  .openapi({ required: ['JourneyResponse'] })
  .openapi('GetJourneyResponse')

const JourneyDateRangeKpiResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the metric applies to.',
        }),
    ),
    EndTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.',
        }),
    ),
    JourneyId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the journey that the metric applies to.',
        }),
    ),
    KpiName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
        }),
    ),
    KpiResult: BaseKpiResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Journey Engagement Metrics resource because the resource returns all results in a single page.',
        }),
    ).exactOptional(),
    StartTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.',
        }),
    ),
  })
  .openapi({
    required: ['KpiResult', 'KpiName', 'JourneyId', 'EndTime', 'StartTime', 'ApplicationId'],
    description:
      'Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.',
  })
  .openapi('JourneyDateRangeKpiResponse')

const GetJourneyDateRangeKpiResponseSchema = z
  .object({ JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponseSchema })
  .openapi({ required: ['JourneyDateRangeKpiResponse'] })
  .openapi('GetJourneyDateRangeKpiResponse')

const JourneyExecutionActivityMetricsResponseSchema = z
  .object({
    ActivityType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of activity that the metric applies to. Possible values are:</p> <ul><li><p>CONDITIONAL_SPLIT - For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey.</p></li> <li><p>HOLDOUT - For a holdout activity, which is an activity that stops a journey for a specified percentage of participants.</p></li> <li><p>MESSAGE - For an email activity, which is an activity that sends an email message to participants.</p></li> <li><p>MULTI_CONDITIONAL_SPLIT - For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey.</p></li> <li><p>RANDOM_SPLIT - For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey.</p></li> <li><p>WAIT - For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p></li></ul>',
        }),
    ),
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the metric applies to.',
        }),
    ),
    JourneyActivityId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the activity that the metric applies to.',
        }),
    ),
    JourneyId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the journey that the metric applies to.',
        }),
    ),
    LastEvaluatedTime: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity and updated the data for the metric.',
        }),
    ),
    Metrics: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON object that contains the results of the query. The results vary depending on the type of activity (ActivityType). For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
        }),
    ),
  })
  .openapi({
    required: [
      'Metrics',
      'JourneyId',
      'LastEvaluatedTime',
      'JourneyActivityId',
      'ActivityType',
      'ApplicationId',
    ],
    description:
      'Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.',
  })
  .openapi('JourneyExecutionActivityMetricsResponse')

const GetJourneyExecutionActivityMetricsResponseSchema = z
  .object({
    JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponseSchema,
  })
  .openapi({ required: ['JourneyExecutionActivityMetricsResponse'] })
  .openapi('GetJourneyExecutionActivityMetricsResponse')

const JourneyExecutionMetricsResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the application that the metric applies to.',
        }),
    ),
    JourneyId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the journey that the metric applies to.',
        }),
    ),
    LastEvaluatedTime: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey and updated the data for the metric.',
        }),
    ),
    Metrics: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON object that contains the results of the query. For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Metrics', 'JourneyId', 'LastEvaluatedTime', 'ApplicationId'],
    description:
      'Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.',
  })
  .openapi('JourneyExecutionMetricsResponse')

const GetJourneyExecutionMetricsResponseSchema = z
  .object({ JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponseSchema })
  .openapi({ required: ['JourneyExecutionMetricsResponse'] })
  .openapi('GetJourneyExecutionMetricsResponse')

const PushNotificationTemplateResponseSchema = z
  .object({
    ADM: AndroidPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message template that's used for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).",
        }),
    ).exactOptional(),
    APNS: APNSPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message template that's used for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).",
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the message template.' }),
    ).exactOptional(),
    Baidu: AndroidPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message template that's used for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).",
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was created.',
        }),
    ),
    Default: DefaultPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description: "The default message template that's used for push notification channels.",
        }),
    ).exactOptional(),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.',
        }),
    ).exactOptional(),
    GCM: AndroidPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message template that's used for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).",
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was last modified.',
        }),
    ),
    RecommenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the recommender model that's used by the message template.",
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the message template.' }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z.any().openapi({ description: 'The name of the message template.' }),
    ),
    TemplateType: TemplateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of channel that the message template is designed for. For a push notification template, this value is PUSH.',
        }),
    ),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LastModifiedDate', 'CreationDate', 'TemplateType', 'TemplateName'],
    description:
      'Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.',
  })
  .openapi('PushNotificationTemplateResponse')

const GetPushTemplateResponseSchema = z
  .object({ PushNotificationTemplateResponse: PushNotificationTemplateResponseSchema })
  .openapi({ required: ['PushNotificationTemplateResponse'] })
  .openapi('GetPushTemplateResponse')

const GetRecommenderConfigurationResponseSchema = z
  .object({ RecommenderConfigurationResponse: RecommenderConfigurationResponseSchema })
  .openapi({ required: ['RecommenderConfigurationResponse'] })
  .openapi('GetRecommenderConfigurationResponse')

const ListOfRecommenderConfigurationResponseSchema = z
  .array(RecommenderConfigurationResponseSchema)
  .openapi('ListOfRecommenderConfigurationResponse')

const ListRecommenderConfigurationsResponseSchema = z
  .object({
    Item: ListOfRecommenderConfigurationResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each recommender model configuration that's associated with your Amazon Pinpoint account.",
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description:
      'Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.',
  })
  .openapi('ListRecommenderConfigurationsResponse')

const GetRecommenderConfigurationsResponseSchema = z
  .object({ ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponseSchema })
  .openapi({ required: ['ListRecommenderConfigurationsResponse'] })
  .openapi('GetRecommenderConfigurationsResponse')

const GetSegmentResponseSchema = z
  .object({ SegmentResponse: SegmentResponseSchema })
  .openapi({ required: ['SegmentResponse'] })
  .openapi('GetSegmentResponse')

const GetSegmentExportJobsResponseSchema = z
  .object({ ExportJobsResponse: ExportJobsResponseSchema })
  .openapi({ required: ['ExportJobsResponse'] })
  .openapi('GetSegmentExportJobsResponse')

const GetSegmentImportJobsResponseSchema = z
  .object({ ImportJobsResponse: ImportJobsResponseSchema })
  .openapi({ required: ['ImportJobsResponse'] })
  .openapi('GetSegmentImportJobsResponse')

const GetSegmentVersionResponseSchema = z
  .object({ SegmentResponse: SegmentResponseSchema })
  .openapi({ required: ['SegmentResponse'] })
  .openapi('GetSegmentVersionResponse')

const ListOfSegmentResponseSchema = z.array(SegmentResponseSchema).openapi('ListOfSegmentResponse')

const SegmentsResponseSchema = z
  .object({
    Item: ListOfSegmentResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).",
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description:
      'Provides information about all the segments that are associated with an application.',
  })
  .openapi('SegmentsResponse')

const GetSegmentVersionsResponseSchema = z
  .object({ SegmentsResponse: SegmentsResponseSchema })
  .openapi({ required: ['SegmentsResponse'] })
  .openapi('GetSegmentVersionsResponse')

const GetSegmentsResponseSchema = z
  .object({ SegmentsResponse: SegmentsResponseSchema })
  .openapi({ required: ['SegmentsResponse'] })
  .openapi('GetSegmentsResponse')

const GetSmsChannelResponseSchema = z
  .object({ SMSChannelResponse: SMSChannelResponseSchema })
  .openapi({ required: ['SMSChannelResponse'] })
  .openapi('GetSmsChannelResponse')

const SMSTemplateResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the message template.' }),
    ).exactOptional(),
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message body that's used in text messages that are based on the message template.",
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was created.',
        }),
    ),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.',
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was last modified.',
        }),
    ),
    RecommenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the recommender model that's used by the message template.",
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the message template.' }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z.any().openapi({ description: 'The name of the message template.' }),
    ),
    TemplateType: TemplateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of channel that the message template is designed for. For an SMS template, this value is SMS.',
        }),
    ),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType'],
    description:
      'Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.',
  })
  .openapi('SMSTemplateResponse')

const GetSmsTemplateResponseSchema = z
  .object({ SMSTemplateResponse: SMSTemplateResponseSchema })
  .openapi({ required: ['SMSTemplateResponse'] })
  .openapi('GetSmsTemplateResponse')

const GetUserEndpointsResponseSchema = z
  .object({ EndpointsResponse: EndpointsResponseSchema })
  .openapi({ required: ['EndpointsResponse'] })
  .openapi('GetUserEndpointsResponse')

const GetVoiceChannelResponseSchema = z
  .object({ VoiceChannelResponse: VoiceChannelResponseSchema })
  .openapi({ required: ['VoiceChannelResponse'] })
  .openapi('GetVoiceChannelResponse')

const VoiceTemplateResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the message template.' }),
    ).exactOptional(),
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The text of the script that's used in messages that are based on the message template, in plain text format.",
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was created.',
        }),
    ),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.',
        }),
    ).exactOptional(),
    LanguageCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the language that\'s used when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was last modified.',
        }),
    ),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the message template.' }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z.any().openapi({ description: 'The name of the message template.' }),
    ),
    TemplateType: TemplateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of channel that the message template is designed for. For a voice template, this value is VOICE.',
        }),
    ),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.',
        }),
    ).exactOptional(),
    VoiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the voice that\'s used when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType'],
    description:
      'Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.',
  })
  .openapi('VoiceTemplateResponse')

const GetVoiceTemplateResponseSchema = z
  .object({ VoiceTemplateResponse: VoiceTemplateResponseSchema })
  .openapi({ required: ['VoiceTemplateResponse'] })
  .openapi('GetVoiceTemplateResponse')

const ListOfJourneyResponseSchema = z.array(JourneyResponseSchema).openapi('ListOfJourneyResponse')

const JourneysResponseSchema = z
  .object({
    Item: ListOfJourneyResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each journey that's associated with the application.",
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description:
      'Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.',
  })
  .openapi('JourneysResponse')

const ListJourneysResponseSchema = z
  .object({ JourneysResponse: JourneysResponseSchema })
  .openapi({ required: ['JourneysResponse'] })
  .openapi('ListJourneysResponse')

const TagsModelSchema = z
  .object({
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, message template, or segment. Each of these resources can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
        }),
    ),
  })
  .openapi({
    required: ['tags'],
    description:
      'Specifies the tags (keys and values) for an application, campaign, message template, or segment.',
  })
  .openapi('TagsModel')

const ListTagsForResourceResponseSchema = z
  .object({ TagsModel: TagsModelSchema })
  .openapi({ required: ['TagsModel'] })
  .openapi('ListTagsForResourceResponse')

const TemplateVersionResponseSchema = z
  .object({
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date, in ISO 8601 format, when the version of the message template was created.',
        }),
    ),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON object that specifies the default values that are used for message variables in the version of the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.',
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date, in ISO 8601 format, when the version of the message template was last modified.',
        }),
    ),
    TemplateDescription: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The custom description of the version of the message template.' }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z.any().openapi({ description: 'The name of the message template.' }),
    ),
    TemplateType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, and VOICE.',
        }),
    ),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the version of the message template. This value is an integer that Amazon Pinpoint automatically increments and assigns to each new version of a template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType'],
    description: 'Provides information about a specific version of a message template.',
  })
  .openapi('TemplateVersionResponse')

const ListOfTemplateVersionResponseSchema = z
  .array(TemplateVersionResponseSchema)
  .openapi('ListOfTemplateVersionResponse')

const TemplateVersionsResponseSchema = z
  .object({
    Item: ListOfTemplateVersionResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of responses, one for each version of the message template.',
        }),
    ),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message that's returned from the API for the request to retrieve information about all the versions of the message template.",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
    RequestID: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the request to retrieve information about all the versions of the message template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description: 'Provides information about all the versions of a specific message template.',
  })
  .openapi('TemplateVersionsResponse')

const ListTemplateVersionsResponseSchema = z
  .object({ TemplateVersionsResponse: TemplateVersionsResponseSchema })
  .openapi({ required: ['TemplateVersionsResponse'] })
  .openapi('ListTemplateVersionsResponse')

const TemplateResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the message template. This value isn't included in a TemplateResponse object. To retrieve the ARN of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the ARN for.",
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was created.',
        }),
    ),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The JSON object that specifies the default values that are used for message variables in the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.",
        }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the message template was last modified.',
        }),
    ),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A map of key-value pairs that identifies the tags that are associated with the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.",
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The custom description of the message template. This value isn't included in a TemplateResponse object. To retrieve the description of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the description for.",
        }),
    ).exactOptional(),
    TemplateName: StringSchema.and(
      z.any().openapi({ description: 'The name of the message template.' }),
    ),
    TemplateType: TemplateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, and VOICE.',
        }),
    ),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier, as an integer, for the active version of the message template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType'],
    description:
      "Provides information about a message template that's associated with your Amazon Pinpoint account.",
  })
  .openapi('TemplateResponse')

const ListOfTemplateResponseSchema = z
  .array(TemplateResponseSchema)
  .openapi('ListOfTemplateResponse')

const TemplatesResponseSchema = z
  .object({
    Item: ListOfTemplateResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of responses, one for each message template that's associated with your Amazon Pinpoint account and meets any filter criteria that you specified in the request.",
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Item'],
    description:
      'Provides information about all the message templates that are associated with your Amazon Pinpoint account.',
  })
  .openapi('TemplatesResponse')

const ListTemplatesResponseSchema = z
  .object({ TemplatesResponse: TemplatesResponseSchema })
  .openapi({ required: ['TemplatesResponse'] })
  .openapi('ListTemplatesResponse')

const NumberValidateResponseSchema = z
  .object({
    Carrier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.',
        }),
    ).exactOptional(),
    City: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the city where the phone number was originally registered.',
        }),
    ).exactOptional(),
    CleansedPhoneNumberE164: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cleansed phone number, in E.164 format, for the location where the phone number was originally registered.',
        }),
    ).exactOptional(),
    CleansedPhoneNumberNational: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cleansed phone number, in the format for the location where the phone number was originally registered.',
        }),
    ).exactOptional(),
    Country: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the country or region where the phone number was originally registered.',
        }),
    ).exactOptional(),
    CountryCodeIso2: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.',
        }),
    ).exactOptional(),
    CountryCodeNumeric: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The numeric code for the country or region where the phone number was originally registered.',
        }),
    ).exactOptional(),
    County: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the county where the phone number was originally registered.',
        }),
    ).exactOptional(),
    OriginalCountryCodeIso2: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The two-character code, in ISO 3166-1 alpha-2 format, that was sent in the request body.',
        }),
    ).exactOptional(),
    OriginalPhoneNumber: StringSchema.and(
      z.any().openapi({ description: 'The phone number that was sent in the request body.' }),
    ).exactOptional(),
    PhoneType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the phone type. Valid values are: MOBILE, LANDLINE, VOIP,\n                  INVALID, PREPAID, and OTHER.',
        }),
    ).exactOptional(),
    PhoneTypeCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone type, represented by an integer. Valid values are: 0 (mobile), 1 (landline), 2 (VoIP), 3 (invalid), 4 (other), and 5 (prepaid).',
        }),
    ).exactOptional(),
    Timezone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone for the location where the phone number was originally registered.',
        }),
    ).exactOptional(),
    ZipCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The postal or ZIP code for the location where the phone number was originally registered.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a phone number.', required: [] })
  .openapi('NumberValidateResponse')

const PhoneNumberValidateResponseSchema = z
  .object({ NumberValidateResponse: NumberValidateResponseSchema })
  .openapi({ required: ['NumberValidateResponse'] })
  .openapi('PhoneNumberValidateResponse')

const PutEventStreamResponseSchema = z
  .object({ EventStream: EventStreamSchema })
  .openapi({ required: ['EventStream'] })
  .openapi('PutEventStreamResponse')

const ItemResponseSchema: z.ZodType<ItemResponseType> = z
  .lazy(() =>
    z
      .object({
        EndpointItemResponse: EndpointItemResponseSchema.and(
          z
            .any()
            .openapi({
              description: 'The response that was received after the endpoint data was accepted.',
            }),
        ).exactOptional(),
        EventsItemResponse: MapOfEventItemResponseSchema.and(
          z
            .any()
            .openapi({
              description:
                'A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          "Provides information about the results of a request to create or update an endpoint that's associated with an event.",
        required: [],
      }),
  )
  .openapi('ItemResponse')

const MapOfItemResponseSchema = z
  .record(z.string(), ItemResponseSchema)
  .openapi('MapOfItemResponse')

const EventsResponseSchema = z
  .object({
    Results: MapOfItemResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about endpoints and the events that they're associated with.",
    required: [],
  })
  .openapi('EventsResponse')

const PutEventsResponseSchema = z
  .object({ EventsResponse: EventsResponseSchema })
  .openapi({ required: ['EventsResponse'] })
  .openapi('PutEventsResponse')

const PublicEndpointSchema = z
  .object({
    Address: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the recipient, such as a device token, email address, or mobile phone number.',
        }),
    ).exactOptional(),
    Attributes: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom attributes that describe the endpoint by associating a name with an array of values. You can use these attributes as filter criteria when you create segments.',
        }),
    ).exactOptional(),
    ChannelType: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The channel that's used when sending messages or push notifications to the endpoint.",
        }),
    ).exactOptional(),
    Demographic: EndpointDemographicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The demographic information for the endpoint, such as the time zone and platform.',
        }),
    ).exactOptional(),
    EffectiveDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the endpoint was last updated.',
        }),
    ).exactOptional(),
    EndpointStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>',
        }),
    ).exactOptional(),
    Location: EndpointLocationSchema.and(
      z.any().openapi({ description: 'The geographic information for the endpoint.' }),
    ).exactOptional(),
    Metrics: MapOfDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.',
        }),
    ).exactOptional(),
    OptOut: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.",
        }),
    ).exactOptional(),
    RequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description: "A unique identifier that's generated each time the endpoint is updated.",
        }),
    ).exactOptional(),
    User: EndpointUserSchema.and(
      z
        .any()
        .openapi({
          description:
            "One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the properties and attributes of an endpoint that's associated with an event.",
    required: [],
  })
  .openapi('PublicEndpoint')

const SessionSchema = z
  .object({
    Duration: IntegerSchema.and(
      z.any().openapi({ description: 'The duration of the session, in milliseconds.' }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the session.' }),
    ),
    StartTimestamp: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the session began.' }),
    ),
    StopTimestamp: StringSchema.and(
      z.any().openapi({ description: 'The date and time when the session ended.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartTimestamp', 'Id'],
    description: 'Provides information about a session.',
  })
  .openapi('Session')

const EventSchema = z
  .object({
    AppPackageName: StringSchema.and(
      z.any().openapi({ description: "The package name of the app that's recording the event." }),
    ).exactOptional(),
    AppTitle: StringSchema.and(
      z.any().openapi({ description: "The title of the app that's recording the event." }),
    ).exactOptional(),
    AppVersionCode: StringSchema.and(
      z.any().openapi({ description: "The version number of the app that's recording the event." }),
    ).exactOptional(),
    Attributes: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more custom attributes that are associated with the event.',
        }),
    ).exactOptional(),
    ClientSdkVersion: StringSchema.and(
      z
        .any()
        .openapi({ description: "The version of the SDK that's running on the client device." }),
    ).exactOptional(),
    EventType: StringSchema.and(z.any().openapi({ description: 'The name of the event.' })),
    Metrics: MapOfDoubleSchema.and(
      z
        .any()
        .openapi({ description: 'One or more custom metrics that are associated with the event.' }),
    ).exactOptional(),
    SdkName: StringSchema.and(
      z
        .any()
        .openapi({ description: "The name of the SDK that's being used to record the event." }),
    ).exactOptional(),
    Session: SessionSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the session in which the event occurred.' }),
    ).exactOptional(),
    Timestamp: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the event occurred.',
        }),
    ),
  })
  .openapi({
    required: ['EventType', 'Timestamp'],
    description: 'Specifies information about an event that reports data to Amazon Pinpoint.',
  })
  .openapi('Event')

const MapOfEventSchema = z.record(z.string(), EventSchema).openapi('MapOfEvent')

const EventsBatchSchema = z
  .object({
    Endpoint: PublicEndpointSchema.and(
      z
        .any()
        .openapi({
          description: 'A set of properties and attributes that are associated with the endpoint.',
        }),
    ),
    Events: MapOfEventSchema.and(
      z.any().openapi({ description: 'A set of properties that are associated with the event.' }),
    ),
  })
  .openapi({
    required: ['Endpoint', 'Events'],
    description: 'Specifies a batch of endpoints and events to process.',
  })
  .openapi('EventsBatch')

const MapOfEventsBatchSchema = z.record(z.string(), EventsBatchSchema).openapi('MapOfEventsBatch')

const AttributesResourceSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the application.' }),
    ),
    AttributeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of attribute or attributes that were removed from the endpoints. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users.</p></li></ul>',
        }),
    ),
    Attributes: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that specifies the names of the attributes that were removed from the endpoints.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AttributeType', 'ApplicationId'],
    description:
      'Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.',
  })
  .openapi('AttributesResource')

const RemoveAttributesResponseSchema = z
  .object({ AttributesResource: AttributesResourceSchema })
  .openapi({ required: ['AttributesResource'] })
  .openapi('RemoveAttributesResponse')

const DeliveryStatusSchema = z
  .enum([
    'SUCCESSFUL',
    'THROTTLED',
    'TEMPORARY_FAILURE',
    'PERMANENT_FAILURE',
    'UNKNOWN_FAILURE',
    'OPT_OUT',
    'DUPLICATE',
  ])
  .openapi('DeliveryStatus')

const EndpointMessageResultSchema = z
  .object({
    Address: StringSchema.and(
      z.any().openapi({ description: 'The endpoint address that the message was delivered to.' }),
    ).exactOptional(),
    DeliveryStatus: DeliveryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>OPT_OUT - The user who's associated with the endpoint has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.</p></li>    <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint.</p></li> <li><p>TIMEOUT - The message couldn't be sent within the timeout period.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>",
        }),
    ),
    MessageId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the message that was sent.' }),
    ).exactOptional(),
    StatusCode: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The downstream service status code for delivering the message.' }),
    ),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for delivering the message.' }),
    ).exactOptional(),
    UpdatedToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeliveryStatus', 'StatusCode'],
    description:
      'Provides information about the delivery status and results of sending a message directly to an endpoint.',
  })
  .openapi('EndpointMessageResult')

const MapOfEndpointMessageResultSchema = z
  .record(z.string(), EndpointMessageResultSchema)
  .openapi('MapOfEndpointMessageResult')

const MessageResultSchema = z
  .object({
    DeliveryStatus: DeliveryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>OPT_OUT - The user who's associated with the endpoint address has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint address.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint address.</p></li> <li><p>TIMEOUT - The message couldn't be sent within the timeout period.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>",
        }),
    ),
    MessageId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the message that was sent.' }),
    ).exactOptional(),
    StatusCode: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The downstream service status code for delivering the message.' }),
    ),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for delivering the message.' }),
    ).exactOptional(),
    UpdatedToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeliveryStatus', 'StatusCode'],
    description:
      'Provides information about the results of sending a message directly to an endpoint address.',
  })
  .openapi('MessageResult')

const MapOfMessageResultSchema = z
  .record(z.string(), MessageResultSchema)
  .openapi('MapOfMessageResult')

const MessageResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that was used to send the message.',
        }),
    ),
    EndpointResult: MapOfEndpointMessageResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.',
        }),
    ).exactOptional(),
    RequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the original request that the message was delivered for.',
        }),
    ).exactOptional(),
    Result: MapOfMessageResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationId'],
    description:
      'Provides information about the results of a request to send a message to an endpoint address.',
  })
  .openapi('MessageResponse')

const SendMessagesResponseSchema = z
  .object({ MessageResponse: MessageResponseSchema })
  .openapi({ required: ['MessageResponse'] })
  .openapi('SendMessagesResponse')

const AddressConfigurationSchema = z
  .object({
    BodyOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message body to use instead of the default message body. This value overrides the default message body.',
        }),
    ).exactOptional(),
    ChannelType: ChannelTypeSchema.and(
      z.any().openapi({ description: 'The channel to use when sending the message.' }),
    ).exactOptional(),
    Context: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object that maps custom attributes to attributes for the address and is attached to the message. Attribute names are case sensitive.</p> <p>For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>',
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.',
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of the message variables to merge with the variables specified by properties of the DefaultMessage object. The variables specified in this map take precedence over all other variables.',
        }),
    ).exactOptional(),
    TitleOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message title to use instead of the default message title. This value overrides the default message title.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies address-based configuration settings for a message that's sent directly to an endpoint.",
    required: [],
  })
  .openapi('AddressConfiguration')

const MapOfAddressConfigurationSchema = z
  .record(z.string(), AddressConfigurationSchema)
  .openapi('MapOfAddressConfiguration')

const EndpointSendConfigurationSchema = z
  .object({
    BodyOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The body of the message. If specified, this value overrides the default message body.',
        }),
    ).exactOptional(),
    Context: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of custom attributes to attach to the message for the address. Attribute names are case sensitive.</p> <p>For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>',
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.',
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.',
        }),
    ).exactOptional(),
    TitleOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The title or subject line of the message. If specified, this value overrides the default message title or subject line.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.",
    required: [],
  })
  .openapi('EndpointSendConfiguration')

const MapOfEndpointSendConfigurationSchema = z
  .record(z.string(), EndpointSendConfigurationSchema)
  .openapi('MapOfEndpointSendConfiguration')

const ADMMessageSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z.any().openapi({ description: 'The body of the notification message.' }),
    ).exactOptional(),
    ConsolidationKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An arbitrary string that indicates that multiple messages are logically the same and that Amazon Device Messaging (ADM) can drop previously enqueued messages in favor of this message.',
        }),
    ).exactOptional(),
    Data: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.',
        }),
    ).exactOptional(),
    ExpiresAfter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of time, in seconds, that ADM should store the message if the recipient's device is offline. Amazon Pinpoint specifies this value in the expiresAfter parameter when it sends the notification message to ADM.",
        }),
    ).exactOptional(),
    IconReference: StringSchema.and(
      z.any().openapi({ description: 'The icon image name of the asset saved in your app.' }),
    ).exactOptional(),
    ImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the large icon image to display in the content view of the push notification.',
        }),
    ).exactOptional(),
    ImageUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL of an image to display in the push notification.' }),
    ).exactOptional(),
    MD5: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64-encoded, MD5 checksum of the value specified by the Data property. ADM uses the MD5 value to verify the integrity of the data.',
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.',
        }),
    ).exactOptional(),
    SilentPush: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.",
        }),
    ).exactOptional(),
    SmallImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the small icon image to display in the status bar and the content view of the push notification.',
        }),
    ).exactOptional(),
    Sound: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.",
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the notification message. You can override the default variables with individual address variables.',
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to display above the notification message on the recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.",
    required: [],
  })
  .openapi('ADMMessage')

const APNSMessageSchema = z
  .object({
    APNSPushType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of push notification to send. Valid values are:</p> <ul><li><p>alert - For a standard notification that's displayed on recipients' devices and prompts a recipient to interact with the notification.</p></li> <li><p>background - For a silent notification that delivers content in the background and isn't displayed on recipients' devices.</p></li> <li><p>complication - For a notification that contains update information for an app’s complication timeline.</p></li> <li><p>fileprovider - For a notification that signals changes to a File Provider extension.</p></li> <li><p>mdm - For a notification that tells managed devices to contact the MDM server.</p></li> <li><p>voip - For a notification that provides information about an incoming VoIP call.</p></li></ul> <p>Amazon Pinpoint specifies this value in the apns-push-type request header when it sends the notification message to APNs. If you don't specify a value for this property, Amazon Pinpoint sets the value to alert or background automatically, based on the value that you specify for the SilentPush or RawContent property of the message.</p> <p>For more information about the apns-push-type request header, see <a href=\"https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns\">Sending Notification Requests to APNs</a> on the Apple Developer website.</p>",
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Badge: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key that indicates whether and how to modify the badge of your app's icon when the recipient receives the push notification. If this key isn't included in the dictionary, the badge doesn't change. To remove the badge, set this value to 0.",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z.any().openapi({ description: 'The body of the notification message.' }),
    ).exactOptional(),
    Category: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key that indicates the notification type for the push notification. This key is a value that's defined by the identifier property of one of your app's registered categories.",
        }),
    ).exactOptional(),
    CollapseId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An arbitrary identifier that, if assigned to multiple messages, APNs uses to coalesce the messages into a single push notification instead of delivering each message individually. This value can't exceed 64 bytes.</p> <p>Amazon Pinpoint specifies this value in the apns-collapse-id request header when it sends the notification message to APNs.</p>",
        }),
    ).exactOptional(),
    Data: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON payload to use for a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.',
        }),
    ).exactOptional(),
    MediaUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL of an image or video to display in the push notification.',
        }),
    ).exactOptional(),
    PreferredAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication method that you want Amazon Pinpoint to use when authenticating with APNs, CERTIFICATE or TOKEN.',
        }),
    ).exactOptional(),
    Priority: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>para>5 - Low priority, the notification might be delayed, delivered as part of a group, or throttled.</p>/listitem> <li><p>10 - High priority, the notification is sent immediately. This is the default value. A high priority notification should trigger an alert, play a sound, or badge your app's icon on the recipient's device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the apns-priority request header when it sends the notification message to APNs.</p> <p>The equivalent values for Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), are normal, for 5, and high, for 10. If you specify an FCM value for this property, Amazon Pinpoint accepts and converts the value to the corresponding APNs value.</p>",
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. The value of the content-available key has to be an integer, and can only be 0 or 1. If you\'re sending a standard notification, set the value of content-available to 0. If you\'re sending a silent (background) notification, set the value of content-available to 1. Additionally, silent notification payloads can\'t include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p></note>',
        }),
    ).exactOptional(),
    SilentPush: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the notification is a silent push notification. A silent (or background) push notification isn\'t displayed on recipients\' devices. You can use silent push notifications to make small updates to your app, or to display messages in an in-app message center.</p> <p>Amazon Pinpoint uses this property to determine the correct value for the apns-push-type request header when it sends the notification message to APNs. If you specify a value of true for this property, Amazon Pinpoint sets the value for the apns-push-type header field to background.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. For silent (background) notifications, set the value of content-available to 1. Additionally, the message payload for a silent notification can\'t include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p> <p>Apple has indicated that they will throttle "excessive" background notifications based on current traffic volumes. To prevent your notifications being throttled, Apple recommends that you send no more than 3 silent push notifications to each recipient per hour.</p></note>',
        }),
    ).exactOptional(),
    Sound: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key for the sound to play when the recipient receives the push notification. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.",
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the notification message. You can override these default variables with individual address variables.',
        }),
    ).exactOptional(),
    ThreadId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key that represents your app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.',
        }),
    ).exactOptional(),
    TimeToLive: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in seconds, that APNs should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If this value is 0, APNs treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>Amazon Pinpoint specifies this value in the apns-expiration request header when it sends the notification message to APNs.</p>",
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to display above the notification message on the recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.",
    required: [],
  })
  .openapi('APNSMessage')

const BaiduMessageSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z.any().openapi({ description: 'The body of the notification message.' }),
    ).exactOptional(),
    Data: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.',
        }),
    ).exactOptional(),
    IconReference: StringSchema.and(
      z.any().openapi({ description: 'The icon image name of the asset saved in your app.' }),
    ).exactOptional(),
    ImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the large icon image to display in the content view of the push notification.',
        }),
    ).exactOptional(),
    ImageUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL of an image to display in the push notification.' }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.',
        }),
    ).exactOptional(),
    SilentPush: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.",
        }),
    ).exactOptional(),
    SmallImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the small icon image to display in the status bar and the content view of the push notification.',
        }),
    ).exactOptional(),
    Sound: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.",
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the notification message. You can override the default variables with individual address variables.',
        }),
    ).exactOptional(),
    TimeToLive: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of time, in seconds, that the Baidu Cloud Push service should store the message if the recipient's device is offline. The default value and maximum supported time is 604,800 seconds (7 days).",
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to display above the notification message on the recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.",
    required: [],
  })
  .openapi('BaiduMessage')

const DefaultMessageSchema = z
  .object({
    Body: StringSchema.and(
      z.any().openapi({ description: 'The default body of the message.' }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the message. You can override these default variables with individual address variables.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the default message for all channels.', required: [] })
  .openapi('DefaultMessage')

const DefaultPushNotificationMessageSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z.any().openapi({ description: 'The default body of the notification message.' }),
    ).exactOptional(),
    Data: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.',
        }),
    ).exactOptional(),
    SilentPush: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the default notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or delivering messages to an in-app notification center.",
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the notification message. You can override the default variables with individual address variables.',
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The default title to display above the notification message on a recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The default URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the default settings and content for a push notification that's sent directly to an endpoint.",
    required: [],
  })
  .openapi('DefaultPushNotificationMessage')

const BlobSchema = z.string().openapi('Blob')

const RawEmailSchema = z
  .object({
    Data: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email message, represented as a raw MIME message. The entire message must be base64 encoded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the contents of an email message, represented as a raw MIME message.',
    required: [],
  })
  .openapi('RawEmail')

const SimpleEmailPartSchema = z
  .object({
    Charset: StringSchema.and(
      z.any().openapi({ description: 'The applicable character set for the message content.' }),
    ).exactOptional(),
    Data: StringSchema.and(
      z.any().openapi({ description: 'The textual data of the message content.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the subject or body of an email message, represented as textual email data and the applicable character set.',
    required: [],
  })
  .openapi('SimpleEmailPart')

const SimpleEmailSchema = z
  .object({
    HtmlPart: SimpleEmailPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The body of the email message, in HTML format. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.',
        }),
    ).exactOptional(),
    Subject: SimpleEmailPartSchema.and(
      z.any().openapi({ description: 'The subject line, or title, of the email.' }),
    ).exactOptional(),
    TextPart: SimpleEmailPartSchema.and(
      z
        .any()
        .openapi({
          description:
            "The body of the email message, in plain text format. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.',
    required: [],
  })
  .openapi('SimpleEmail')

const EmailMessageSchema = z
  .object({
    Body: StringSchema.and(
      z.any().openapi({ description: 'The body of the email message.' }),
    ).exactOptional(),
    FeedbackForwardingAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address to forward bounces and complaints to, if feedback forwarding is enabled.',
        }),
    ).exactOptional(),
    FromAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The verified email address to send the email message from. The default value is the FromAddress specified for the email channel.',
        }),
    ).exactOptional(),
    RawEmail: RawEmailSchema.and(
      z.any().openapi({ description: 'The email message, represented as a raw MIME message.' }),
    ).exactOptional(),
    ReplyToAddresses: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.',
        }),
    ).exactOptional(),
    SimpleEmail: SimpleEmailSchema.and(
      z
        .any()
        .openapi({
          description: 'The email message, composed of a subject, a text part, and an HTML part.',
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the email message. You can override the default variables with individual address variables.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.",
    required: [],
  })
  .openapi('EmailMessage')

const GCMMessageSchema = z
  .object({
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>",
        }),
    ).exactOptional(),
    Body: StringSchema.and(
      z.any().openapi({ description: 'The body of the notification message.' }),
    ).exactOptional(),
    CollapseKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An arbitrary string that identifies a group of messages that can be collapsed to ensure that only the last message is sent when delivery can resume. This helps avoid sending too many instances of the same messages when the recipient's device comes online again or becomes active.</p> <p>Amazon Pinpoint specifies this value in the Firebase Cloud Messaging (FCM) collapse_key parameter when it sends the notification message to FCM.</p>",
        }),
    ).exactOptional(),
    Data: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.',
        }),
    ).exactOptional(),
    IconReference: StringSchema.and(
      z.any().openapi({ description: 'The icon image name of the asset saved in your app.' }),
    ).exactOptional(),
    ImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the large icon image to display in the content view of the push notification.',
        }),
    ).exactOptional(),
    ImageUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL of an image to display in the push notification.' }),
    ).exactOptional(),
    Priority: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>para>normal - The notification might be delayed. Delivery is optimized for battery usage on the recipient's device. Use this value unless immediate delivery is required.</p>/listitem> <li><p>high - The notification is sent immediately and might wake a sleeping device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the FCM priority parameter when it sends the notification message to FCM.</p> <p>The equivalent values for Apple Push Notification service (APNs) are 5, for normal, and 10, for high. If you specify an APNs value for this property, Amazon Pinpoint accepts and converts the value to the corresponding FCM value.</p>",
        }),
    ).exactOptional(),
    RawContent: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.',
        }),
    ).exactOptional(),
    RestrictedPackageName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The package name of the application where registration tokens must match in order for the recipient to receive the message.',
        }),
    ).exactOptional(),
    SilentPush: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.",
        }),
    ).exactOptional(),
    SmallImageIconUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the small icon image to display in the status bar and the content view of the push notification.',
        }),
    ).exactOptional(),
    Sound: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.",
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the notification message. You can override the default variables with individual address variables.',
        }),
    ).exactOptional(),
    TimeToLive: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in seconds, that FCM should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If you don't specify this value, FCM defaults to the maximum value, which is 2,419,200 seconds (28 days).</p> <p>Amazon Pinpoint specifies this value in the FCM time_to_live parameter when it sends the notification message to FCM.</p>",
        }),
    ).exactOptional(),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The title to display above the notification message on the recipient's device.",
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.",
    required: [],
  })
  .openapi('GCMMessage')

const SMSMessageSchema = z
  .object({
    Body: StringSchema.and(
      z.any().openapi({ description: 'The body of the SMS message.' }),
    ).exactOptional(),
    Keyword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SMS program name that you provided to AWS Support when you requested your dedicated number.',
        }),
    ).exactOptional(),
    MediaUrl: StringSchema.and(
      z.any().openapi({ description: 'This field is reserved for future use.' }),
    ).exactOptional(),
    MessageType: MessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).",
        }),
    ).exactOptional(),
    OriginationNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number to send the SMS message from. This value should be one of the dedicated long or short codes that's assigned to your AWS account. If you don't specify a long or short code, Amazon Pinpoint assigns a random long code to the SMS message and sends the message from that code.",
        }),
    ).exactOptional(),
    SenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region.",
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message variables to use in the SMS message. You can override the default variables with individual address variables.',
        }),
    ).exactOptional(),
    EntityId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.',
        }),
    ).exactOptional(),
    TemplateId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The template ID received from the regulatory body for sending SMS in your country.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.",
    required: [],
  })
  .openapi('SMSMessage')

const VoiceMessageSchema = z
  .object({
    Body: StringSchema.and(
      z.any().openapi({ description: 'The text of the script to use for the voice message.' }),
    ).exactOptional(),
    LanguageCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the language to use when synthesizing the text of the message script. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
        }),
    ).exactOptional(),
    OriginationNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The long code to send the voice message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code in E.164 format, for example +12065550100, to ensure prompt and accurate delivery of the message.",
        }),
    ).exactOptional(),
    Substitutions: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message variables to use in the voice message. You can override the default variables with individual address variables.',
        }),
    ).exactOptional(),
    VoiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the voice to use when delivering the message. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.",
    required: [],
  })
  .openapi('VoiceMessage')

const DirectMessageConfigurationSchema = z
  .object({
    ADMMessage: ADMMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).',
        }),
    ).exactOptional(),
    APNSMessage: APNSMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).',
        }),
    ).exactOptional(),
    BaiduMessage: BaiduMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).',
        }),
    ).exactOptional(),
    DefaultMessage: DefaultMessageSchema.and(
      z.any().openapi({ description: 'The default message for all channels.' }),
    ).exactOptional(),
    DefaultPushNotificationMessage: DefaultPushNotificationMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The default push notification message for all push notification channels.',
        }),
    ).exactOptional(),
    EmailMessage: EmailMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message for the email channel. This message overrides the default message (DefaultMessage).',
        }),
    ).exactOptional(),
    GCMMessage: GCMMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).',
        }),
    ).exactOptional(),
    SMSMessage: SMSMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message for the SMS channel. This message overrides the default message (DefaultMessage).',
        }),
    ).exactOptional(),
    VoiceMessage: VoiceMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default message for the voice channel. This message overrides the default message (DefaultMessage).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the settings and content for the default message and any default messages that you tailored for specific channels.',
    required: [],
  })
  .openapi('DirectMessageConfiguration')

const SendOTPMessageResponseSchema = z
  .object({ MessageResponse: MessageResponseSchema })
  .openapi({ required: ['MessageResponse'] })
  .openapi('SendOTPMessageResponse')

const MapOfMapOfEndpointMessageResultSchema = z
  .record(z.string(), MapOfEndpointMessageResultSchema)
  .openapi('MapOfMapOfEndpointMessageResult')

const SendUsersMessageResponseSchema = z
  .object({
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the application that was used to send the message.',
        }),
    ),
    RequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier that was assigned to the message request.',
        }),
    ).exactOptional(),
    Result: MapOfMapOfEndpointMessageResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationId'],
    description: 'Provides information about which users and endpoints a message was sent to.',
  })
  .openapi('SendUsersMessageResponse')

const SendUsersMessagesResponseSchema = z
  .object({ SendUsersMessageResponse: SendUsersMessageResponseSchema })
  .openapi({ required: ['SendUsersMessageResponse'] })
  .openapi('SendUsersMessagesResponse')

const UpdateAdmChannelResponseSchema = z
  .object({ ADMChannelResponse: ADMChannelResponseSchema })
  .openapi({ required: ['ADMChannelResponse'] })
  .openapi('UpdateAdmChannelResponse')

const UpdateApnsChannelResponseSchema = z
  .object({ APNSChannelResponse: APNSChannelResponseSchema })
  .openapi({ required: ['APNSChannelResponse'] })
  .openapi('UpdateApnsChannelResponse')

const UpdateApnsSandboxChannelResponseSchema = z
  .object({ APNSSandboxChannelResponse: APNSSandboxChannelResponseSchema })
  .openapi({ required: ['APNSSandboxChannelResponse'] })
  .openapi('UpdateApnsSandboxChannelResponse')

const UpdateApnsVoipChannelResponseSchema = z
  .object({ APNSVoipChannelResponse: APNSVoipChannelResponseSchema })
  .openapi({ required: ['APNSVoipChannelResponse'] })
  .openapi('UpdateApnsVoipChannelResponse')

const UpdateApnsVoipSandboxChannelResponseSchema = z
  .object({ APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponseSchema })
  .openapi({ required: ['APNSVoipSandboxChannelResponse'] })
  .openapi('UpdateApnsVoipSandboxChannelResponse')

const UpdateApplicationSettingsResponseSchema = z
  .object({ ApplicationSettingsResource: ApplicationSettingsResourceSchema })
  .openapi({ required: ['ApplicationSettingsResource'] })
  .openapi('UpdateApplicationSettingsResponse')

const UpdateBaiduChannelResponseSchema = z
  .object({ BaiduChannelResponse: BaiduChannelResponseSchema })
  .openapi({ required: ['BaiduChannelResponse'] })
  .openapi('UpdateBaiduChannelResponse')

const UpdateCampaignResponseSchema = z
  .object({ CampaignResponse: CampaignResponseSchema })
  .openapi({ required: ['CampaignResponse'] })
  .openapi('UpdateCampaignResponse')

const UpdateEmailChannelResponseSchema = z
  .object({ EmailChannelResponse: EmailChannelResponseSchema })
  .openapi({ required: ['EmailChannelResponse'] })
  .openapi('UpdateEmailChannelResponse')

const UpdateEmailTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdateEmailTemplateResponse')

const UpdateEndpointResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdateEndpointResponse')

const UpdateEndpointsBatchResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdateEndpointsBatchResponse')

const EndpointBatchItemSchema = z
  .object({
    Address: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.',
        }),
    ).exactOptional(),
    Attributes: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\\), and slash (/). The Amazon Pinpoint console can\'t display attribute names that contain these characters. This restriction doesn\'t apply to attribute values.</p>',
        }),
    ).exactOptional(),
    ChannelType: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The channel to use when sending messages or push notifications to the endpoint.',
        }),
    ).exactOptional(),
    Demographic: EndpointDemographicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The demographic information for the endpoint, such as the time zone and platform.',
        }),
    ).exactOptional(),
    EffectiveDate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format, when the endpoint was created or updated.',
        }),
    ).exactOptional(),
    EndpointStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the endpoint in the context of the batch.',
        }),
    ).exactOptional(),
    Location: EndpointLocationSchema.and(
      z.any().openapi({ description: 'The geographic information for the endpoint.' }),
    ).exactOptional(),
    Metrics: MapOfDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.',
        }),
    ).exactOptional(),
    OptOut: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.",
        }),
    ).exactOptional(),
    RequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the request to create or update the endpoint.',
        }),
    ).exactOptional(),
    User: EndpointUserSchema.and(
      z
        .any()
        .openapi({
          description:
            "One or more custom attributes that describe the user who's associated with the endpoint.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.',
    required: [],
  })
  .openapi('EndpointBatchItem')

const ListOfEndpointBatchItemSchema = z
  .array(EndpointBatchItemSchema)
  .openapi('ListOfEndpointBatchItem')

const UpdateGcmChannelResponseSchema = z
  .object({ GCMChannelResponse: GCMChannelResponseSchema })
  .openapi({ required: ['GCMChannelResponse'] })
  .openapi('UpdateGcmChannelResponse')

const UpdateInAppTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdateInAppTemplateResponse')

const UpdateJourneyResponseSchema = z
  .object({ JourneyResponse: JourneyResponseSchema })
  .openapi({ required: ['JourneyResponse'] })
  .openapi('UpdateJourneyResponse')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const UpdateJourneyStateResponseSchema = z
  .object({ JourneyResponse: JourneyResponseSchema })
  .openapi({ required: ['JourneyResponse'] })
  .openapi('UpdateJourneyStateResponse')

const UpdatePushTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdatePushTemplateResponse')

const UpdateRecommenderConfigurationResponseSchema = z
  .object({ RecommenderConfigurationResponse: RecommenderConfigurationResponseSchema })
  .openapi({ required: ['RecommenderConfigurationResponse'] })
  .openapi('UpdateRecommenderConfigurationResponse')

const UpdateSegmentResponseSchema = z
  .object({ SegmentResponse: SegmentResponseSchema })
  .openapi({ required: ['SegmentResponse'] })
  .openapi('UpdateSegmentResponse')

const UpdateSmsChannelResponseSchema = z
  .object({ SMSChannelResponse: SMSChannelResponseSchema })
  .openapi({ required: ['SMSChannelResponse'] })
  .openapi('UpdateSmsChannelResponse')

const UpdateSmsTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdateSmsTemplateResponse')

const UpdateTemplateActiveVersionResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdateTemplateActiveVersionResponse')

const UpdateVoiceChannelResponseSchema = z
  .object({ VoiceChannelResponse: VoiceChannelResponseSchema })
  .openapi({ required: ['VoiceChannelResponse'] })
  .openapi('UpdateVoiceChannelResponse')

const UpdateVoiceTemplateResponseSchema = z
  .object({ MessageBody: MessageBodySchema })
  .openapi({ required: ['MessageBody'] })
  .openapi('UpdateVoiceTemplateResponse')

const VerificationResponseSchema = z
  .object({
    Valid: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the OTP is valid or not.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Verify OTP Message Response.', required: [] })
  .openapi('VerificationResponse')

const VerifyOTPMessageResponseSchema = z
  .object({ VerificationResponse: VerificationResponseSchema })
  .openapi({ required: ['VerificationResponse'] })
  .openapi('VerifyOTPMessageResponse')

const ADMChannelRequestSchema = z
  .object({
    ClientId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Client ID that you received from Amazon to send messages by using ADM.',
        }),
    ),
    ClientSecret: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Client Secret that you received from Amazon to send messages by using ADM.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the ADM channel for the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientSecret', 'ClientId'],
    description:
      'Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.',
  })
  .openapi('ADMChannelRequest')

const APNSChannelRequestSchema = z
  .object({
    BundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    Certificate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.',
        }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the APNs channel for the application.',
        }),
    ).exactOptional(),
    PrivateKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.',
        }),
    ).exactOptional(),
    TeamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    TokenKey: StringSchema.and(
      z.any().openapi({ description: 'The authentication key to use for APNs tokens.' }),
    ).exactOptional(),
    TokenKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.',
    required: [],
  })
  .openapi('APNSChannelRequest')

const APNSSandboxChannelRequestSchema = z
  .object({
    BundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    Certificate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.',
        }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the APNs sandbox channel for the application.',
        }),
    ).exactOptional(),
    PrivateKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.',
        }),
    ).exactOptional(),
    TeamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    TokenKey: StringSchema.and(
      z.any().openapi({ description: 'The authentication key to use for APNs tokens.' }),
    ).exactOptional(),
    TokenKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.',
    required: [],
  })
  .openapi('APNSSandboxChannelRequest')

const APNSVoipChannelRequestSchema = z
  .object({
    BundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    Certificate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.',
        }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the APNs VoIP channel for the application.',
        }),
    ).exactOptional(),
    PrivateKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.',
        }),
    ).exactOptional(),
    TeamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    TokenKey: StringSchema.and(
      z.any().openapi({ description: 'The authentication key to use for APNs tokens.' }),
    ).exactOptional(),
    TokenKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.',
    required: [],
  })
  .openapi('APNSVoipChannelRequest')

const APNSVoipSandboxChannelRequestSchema = z
  .object({
    BundleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    Certificate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.',
        }),
    ).exactOptional(),
    DefaultAuthenticationMethod: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the APNs VoIP sandbox channel is enabled for the application.',
        }),
    ).exactOptional(),
    PrivateKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.',
        }),
    ).exactOptional(),
    TeamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
        }),
    ).exactOptional(),
    TokenKey: StringSchema.and(
      z.any().openapi({ description: 'The authentication key to use for APNs tokens.' }),
    ).exactOptional(),
    TokenKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.',
    required: [],
  })
  .openapi('APNSVoipSandboxChannelRequest')

const BaiduChannelRequestSchema = z
  .object({
    ApiKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The API key that you received from the Baidu Cloud Push service to communicate with the service.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the Baidu channel for the application.',
        }),
    ).exactOptional(),
    SecretKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secret key that you received from the Baidu Cloud Push service to communicate with the service.',
        }),
    ),
  })
  .openapi({
    required: ['SecretKey', 'ApiKey'],
    description:
      'Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.',
  })
  .openapi('BaiduChannelRequest')

const CreateApplicationRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.',
        }),
    ),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'Specifies the display name of an application and the tags to associate with the application.',
  })
  .openapi('CreateApplicationRequest')

const CreateAppRequestSchema = z
  .object({ CreateApplicationRequest: CreateApplicationRequestSchema })
  .openapi({ required: ['CreateApplicationRequest'], title: 'CreateAppRequest' })
  .openapi('CreateAppRequest')

const WriteCampaignRequestSchema = z
  .object({
    AdditionalTreatments: ListOfWriteTreatmentResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.',
        }),
    ).exactOptional(),
    CustomDeliveryConfiguration: CustomDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The delivery configuration settings for sending the campaign through a custom channel. This object is required if the MessageConfiguration object for the campaign specifies a CustomMessage object.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A custom description of the campaign.' }),
    ).exactOptional(),
    HoldoutPercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.",
        }),
    ).exactOptional(),
    Hook: CampaignHookSchema.and(
      z
        .any()
        .openapi({
          description:
            "The settings for the AWS Lambda function to invoke as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.",
        }),
    ).exactOptional(),
    IsPaused: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to false.",
        }),
    ).exactOptional(),
    Limits: CampaignLimitsSchema.and(
      z.any().openapi({ description: 'The messaging limits for the campaign.' }),
    ).exactOptional(),
    MessageConfiguration: MessageConfigurationSchema.and(
      z.any().openapi({ description: 'The message configuration settings for the campaign.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'A custom name for the campaign.' }),
    ).exactOptional(),
    Schedule: ScheduleSchema.and(
      z.any().openapi({ description: 'The schedule settings for the campaign.' }),
    ).exactOptional(),
    SegmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the segment to associate with the campaign.',
        }),
    ).exactOptional(),
    SegmentVersion: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the segment to associate with the campaign.' }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateConfiguration: TemplateConfigurationSchema.and(
      z.any().openapi({ description: 'The message template to use for the campaign.' }),
    ).exactOptional(),
    TreatmentDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A custom description of the default treatment for the campaign.',
        }),
    ).exactOptional(),
    TreatmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.",
        }),
    ).exactOptional(),
    Priority: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the configuration and other settings for a campaign.',
    required: [],
  })
  .openapi('WriteCampaignRequest')

const CreateCampaignRequestSchema = z
  .object({ WriteCampaignRequest: WriteCampaignRequestSchema })
  .openapi({ required: ['WriteCampaignRequest'], title: 'CreateCampaignRequest' })
  .openapi('CreateCampaignRequest')

const EmailTemplateRequestSchema = z
  .object({
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
        }),
    ).exactOptional(),
    HtmlPart: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.',
        }),
    ).exactOptional(),
    RecommenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
        }),
    ).exactOptional(),
    Subject: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject line, or title, to use in email messages that are based on the message template.',
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'A custom description of the message template.' }),
    ).exactOptional(),
    TextPart: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.',
    required: [],
  })
  .openapi('EmailTemplateRequest')

const CreateEmailTemplateRequestSchema = z
  .object({ EmailTemplateRequest: EmailTemplateRequestSchema })
  .openapi({ required: ['EmailTemplateRequest'], title: 'CreateEmailTemplateRequest' })
  .openapi('CreateEmailTemplateRequest')

const ExportJobRequestSchema = z
  .object({
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.',
        }),
    ),
    S3UrlPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.',
        }),
    ),
    SegmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.",
        }),
    ).exactOptional(),
    SegmentVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the segment to export endpoint definitions from, if specified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3UrlPrefix', 'RoleArn'],
    description:
      'Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.',
  })
  .openapi('ExportJobRequest')

const CreateExportJobRequestSchema = z
  .object({ ExportJobRequest: ExportJobRequestSchema })
  .openapi({ required: ['ExportJobRequest'], title: 'CreateExportJobRequest' })
  .openapi('CreateExportJobRequest')

const ImportJobRequestSchema = z
  .object({
    DefineSegment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.',
        }),
    ).exactOptional(),
    ExternalId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.",
        }),
    ).exactOptional(),
    Format: FormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.',
        }),
    ),
    RegisterEndpoints: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.',
        }),
    ).exactOptional(),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.',
        }),
    ),
    S3Url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>',
        }),
    ),
    SegmentId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.',
        }),
    ).exactOptional(),
    SegmentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Format', 'S3Url', 'RoleArn'],
    description:
      'Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.',
  })
  .openapi('ImportJobRequest')

const CreateImportJobRequestSchema = z
  .object({ ImportJobRequest: ImportJobRequestSchema })
  .openapi({ required: ['ImportJobRequest'], title: 'CreateImportJobRequest' })
  .openapi('CreateImportJobRequest')

const InAppTemplateRequestSchema = z
  .object({
    Content: ListOfInAppMessageContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.',
        }),
    ).exactOptional(),
    CustomConfig: MapOfStringSchema.and(
      z.any().openapi({ description: 'Custom config to be sent to client.' }),
    ).exactOptional(),
    Layout: LayoutSchema.and(
      z.any().openapi({ description: 'The layout of the message.' }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the template.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'InApp Template Request.', required: [] })
  .openapi('InAppTemplateRequest')

const CreateInAppTemplateRequestSchema = z
  .object({ InAppTemplateRequest: InAppTemplateRequestSchema })
  .openapi({ required: ['InAppTemplateRequest'], title: 'CreateInAppTemplateRequest' })
  .openapi('CreateInAppTemplateRequest')

const WriteJourneyRequestSchema = z
  .object({
    Activities: MapOfActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 100 characters. The characters must be alphanumeric characters.',
        }),
    ).exactOptional(),
    CreationDate: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The date, in ISO 8601 format, when the journey was created.' }),
    ).exactOptional(),
    LastModifiedDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date, in ISO 8601 format, when the journey was last modified.',
        }),
    ).exactOptional(),
    Limits: JourneyLimitsSchema.and(
      z.any().openapi({ description: 'The messaging and entry limits for the journey.' }),
    ).exactOptional(),
    LocalTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.",
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.",
        }),
    ),
    QuietTime: QuietTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>",
        }),
    ).exactOptional(),
    RefreshFrequency: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.',
        }),
    ).exactOptional(),
    Schedule: JourneyScheduleSchema.and(
      z.any().openapi({ description: 'The schedule settings for the journey.' }),
    ).exactOptional(),
    StartActivity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the first activity in the journey. The identifier for this activity can contain a maximum of 128 characters. The characters must be alphanumeric characters.',
        }),
    ).exactOptional(),
    StartCondition: StartConditionSchema.and(
      z
        .any()
        .openapi({
          description: 'The segment that defines which users are participants in the journey.',
        }),
    ).exactOptional(),
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the journey. Valid values are:</p> <ul><li><p>DRAFT - Saves the journey and doesn't publish it.</p></li> <li><p>ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li></ul> <p>PAUSED, CANCELLED, COMPLETED, and CLOSED states are not supported in requests to create or update a journey. To cancel, pause, or resume a journey, use the <link  linkend=\"apps-application-id-journeys-journey-id-state\">Journey State</link> resource.</p>",
        }),
    ).exactOptional(),
    WaitForQuietTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.',
        }),
    ).exactOptional(),
    RefreshOnSegmentUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether a journey should be refreshed on segment update.',
        }),
    ).exactOptional(),
    JourneyChannelSettings: JourneyChannelSettingsSchema.and(
      z.any().openapi({ description: 'The channel-specific configurations for the journey.' }),
    ).exactOptional(),
    SendingSchedule: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates if journey have Advance Quiet Time (OpenHours and ClosedDays). This flag should be set to true in order to allow (OpenHours and ClosedDays)',
        }),
    ).exactOptional(),
    OpenHours: OpenHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.',
        }),
    ).exactOptional(),
    ClosedDays: ClosedDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when journey will stop sending messages. QuietTime should be configured first and SendingSchedule should be set to true.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'Specifies the configuration and other settings for a journey.',
  })
  .openapi('WriteJourneyRequest')

const CreateJourneyRequestSchema = z
  .object({ WriteJourneyRequest: WriteJourneyRequestSchema })
  .openapi({ required: ['WriteJourneyRequest'], title: 'CreateJourneyRequest' })
  .openapi('CreateJourneyRequest')

const PushNotificationTemplateRequestSchema = z
  .object({
    ADM: AndroidPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
        }),
    ).exactOptional(),
    APNS: APNSPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
        }),
    ).exactOptional(),
    Baidu: AndroidPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
        }),
    ).exactOptional(),
    Default: DefaultPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description: 'The default message template to use for push notification channels.',
        }),
    ).exactOptional(),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
        }),
    ).exactOptional(),
    GCM: AndroidPushNotificationTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
        }),
    ).exactOptional(),
    RecommenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'A custom description of the message template.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.',
    required: [],
  })
  .openapi('PushNotificationTemplateRequest')

const CreatePushTemplateRequestSchema = z
  .object({ PushNotificationTemplateRequest: PushNotificationTemplateRequestSchema })
  .openapi({ required: ['PushNotificationTemplateRequest'], title: 'CreatePushTemplateRequest' })
  .openapi('CreatePushTemplateRequest')

const CreateRecommenderConfigurationSchema = z
  .object({
    Attributes: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>",
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).',
        }),
    ).exactOptional(),
    RecommendationProviderIdType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>",
        }),
    ).exactOptional(),
    RecommendationProviderRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.',
        }),
    ),
    RecommendationProviderUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.',
        }),
    ),
    RecommendationTransformerUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.",
        }),
    ).exactOptional(),
    RecommendationsDisplayName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>",
        }),
    ).exactOptional(),
    RecommendationsPerMessage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RecommendationProviderUri', 'RecommendationProviderRoleArn'],
    description:
      'Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.',
  })
  .openapi('CreateRecommenderConfiguration')

const CreateRecommenderConfigurationRequestSchema = z
  .object({ CreateRecommenderConfiguration: CreateRecommenderConfigurationSchema })
  .openapi({
    required: ['CreateRecommenderConfiguration'],
    title: 'CreateRecommenderConfigurationRequest',
  })
  .openapi('CreateRecommenderConfigurationRequest')

const WriteSegmentRequestSchema = z
  .object({
    Dimensions: SegmentDimensionsSchema.and(
      z.any().openapi({ description: 'The criteria that define the dimensions for the segment.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the segment.' }),
    ).exactOptional(),
    SegmentGroups: SegmentGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.",
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.',
    required: [],
  })
  .openapi('WriteSegmentRequest')

const CreateSegmentRequestSchema = z
  .object({ WriteSegmentRequest: WriteSegmentRequestSchema })
  .openapi({ required: ['WriteSegmentRequest'], title: 'CreateSegmentRequest' })
  .openapi('CreateSegmentRequest')

const SMSTemplateRequestSchema = z
  .object({
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message body to use in text messages that are based on the message template.',
        }),
    ).exactOptional(),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
        }),
    ).exactOptional(),
    RecommenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'A custom description of the message template.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.',
    required: [],
  })
  .openapi('SMSTemplateRequest')

const CreateSmsTemplateRequestSchema = z
  .object({ SMSTemplateRequest: SMSTemplateRequestSchema })
  .openapi({ required: ['SMSTemplateRequest'], title: 'CreateSmsTemplateRequest' })
  .openapi('CreateSmsTemplateRequest')

const VoiceTemplateRequestSchema = z
  .object({
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the script to use in messages that are based on the message template, in plain text format.',
        }),
    ).exactOptional(),
    DefaultSubstitutions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
        }),
    ).exactOptional(),
    LanguageCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
        }),
    ).exactOptional(),
    tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
        }),
    ).exactOptional(),
    TemplateDescription: StringSchema.and(
      z.any().openapi({ description: 'A custom description of the message template.' }),
    ).exactOptional(),
    VoiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.',
    required: [],
  })
  .openapi('VoiceTemplateRequest')

const CreateVoiceTemplateRequestSchema = z
  .object({ VoiceTemplateRequest: VoiceTemplateRequestSchema })
  .openapi({ required: ['VoiceTemplateRequest'], title: 'CreateVoiceTemplateRequest' })
  .openapi('CreateVoiceTemplateRequest')

const DeleteAdmChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAdmChannelRequest' })
  .openapi('DeleteAdmChannelRequest')

const DeleteApnsChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApnsChannelRequest' })
  .openapi('DeleteApnsChannelRequest')

const DeleteApnsSandboxChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApnsSandboxChannelRequest' })
  .openapi('DeleteApnsSandboxChannelRequest')

const DeleteApnsVoipChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApnsVoipChannelRequest' })
  .openapi('DeleteApnsVoipChannelRequest')

const DeleteApnsVoipSandboxChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApnsVoipSandboxChannelRequest' })
  .openapi('DeleteApnsVoipSandboxChannelRequest')

const DeleteAppRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAppRequest' })
  .openapi('DeleteAppRequest')

const DeleteBaiduChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBaiduChannelRequest' })
  .openapi('DeleteBaiduChannelRequest')

const DeleteCampaignRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCampaignRequest' })
  .openapi('DeleteCampaignRequest')

const DeleteEmailChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEmailChannelRequest' })
  .openapi('DeleteEmailChannelRequest')

const DeleteEmailTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEmailTemplateRequest' })
  .openapi('DeleteEmailTemplateRequest')

const DeleteEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEndpointRequest' })
  .openapi('DeleteEndpointRequest')

const DeleteEventStreamRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEventStreamRequest' })
  .openapi('DeleteEventStreamRequest')

const DeleteGcmChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteGcmChannelRequest' })
  .openapi('DeleteGcmChannelRequest')

const DeleteInAppTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteInAppTemplateRequest' })
  .openapi('DeleteInAppTemplateRequest')

const DeleteJourneyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteJourneyRequest' })
  .openapi('DeleteJourneyRequest')

const DeletePushTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePushTemplateRequest' })
  .openapi('DeletePushTemplateRequest')

const DeleteRecommenderConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRecommenderConfigurationRequest' })
  .openapi('DeleteRecommenderConfigurationRequest')

const DeleteSegmentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSegmentRequest' })
  .openapi('DeleteSegmentRequest')

const DeleteSmsChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSmsChannelRequest' })
  .openapi('DeleteSmsChannelRequest')

const DeleteSmsTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSmsTemplateRequest' })
  .openapi('DeleteSmsTemplateRequest')

const DeleteUserEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteUserEndpointsRequest' })
  .openapi('DeleteUserEndpointsRequest')

const DeleteVoiceChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceChannelRequest' })
  .openapi('DeleteVoiceChannelRequest')

const DeleteVoiceTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceTemplateRequest' })
  .openapi('DeleteVoiceTemplateRequest')

const EmailChannelRequestSchema = z
  .object({
    ConfigurationSet: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that you want to apply to messages that you send through the channel.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the email channel for the application.',
        }),
    ).exactOptional(),
    FromAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The verified email address that you want to send email from when you send email through the channel.</p>',
        }),
    ),
    Identity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.</p>',
        }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FromAddress', 'Identity'],
    description: 'Specifies the status and settings of the email channel for an application.',
  })
  .openapi('EmailChannelRequest')

const EndpointBatchRequestSchema = z
  .object({
    Item: ListOfEndpointBatchItemSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.',
        }),
    ),
  })
  .openapi({
    required: ['Item'],
    description:
      'Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.',
  })
  .openapi('EndpointBatchRequest')

const EndpointRequestSchema = z
  .object({
    Address: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.',
        }),
    ).exactOptional(),
    Attributes: MapOfListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\\), and slash (/). The Amazon Pinpoint console can\'t display attribute names that contain these characters. This restriction doesn\'t apply to attribute values.</p>',
        }),
    ).exactOptional(),
    ChannelType: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The channel to use when sending messages or push notifications to the endpoint.',
        }),
    ).exactOptional(),
    Demographic: EndpointDemographicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The demographic information for the endpoint, such as the time zone and platform.',
        }),
    ).exactOptional(),
    EffectiveDate: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time, in ISO 8601 format, when the endpoint is updated.',
        }),
    ).exactOptional(),
    EndpointStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>',
        }),
    ).exactOptional(),
    Location: EndpointLocationSchema.and(
      z.any().openapi({ description: 'The geographic information for the endpoint.' }),
    ).exactOptional(),
    Metrics: MapOfDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.',
        }),
    ).exactOptional(),
    OptOut: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.",
        }),
    ).exactOptional(),
    RequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the most recent request to update the endpoint.',
        }),
    ).exactOptional(),
    User: EndpointUserSchema.and(
      z
        .any()
        .openapi({
          description:
            "One or more custom attributes that describe the user who's associated with the endpoint.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the channel type and other settings for an endpoint.',
    required: [],
  })
  .openapi('EndpointRequest')

const EventsRequestSchema = z
  .object({
    BatchItem: MapOfEventsBatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.',
        }),
    ),
  })
  .openapi({ required: ['BatchItem'], description: 'Specifies a batch of events to process.' })
  .openapi('EventsRequest')

const GCMChannelRequestSchema = z
  .object({
    ApiKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the GCM channel for the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApiKey'],
    description:
      'Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.',
  })
  .openapi('GCMChannelRequest')

const GetAdmChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetAdmChannelRequest' })
  .openapi('GetAdmChannelRequest')

const GetApnsChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetApnsChannelRequest' })
  .openapi('GetApnsChannelRequest')

const GetApnsSandboxChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetApnsSandboxChannelRequest' })
  .openapi('GetApnsSandboxChannelRequest')

const GetApnsVoipChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetApnsVoipChannelRequest' })
  .openapi('GetApnsVoipChannelRequest')

const GetApnsVoipSandboxChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetApnsVoipSandboxChannelRequest' })
  .openapi('GetApnsVoipSandboxChannelRequest')

const GetAppRequestSchema = z
  .object({})
  .openapi({ title: 'GetAppRequest' })
  .openapi('GetAppRequest')

const GetApplicationDateRangeKpiRequestSchema = z
  .object({})
  .openapi({ title: 'GetApplicationDateRangeKpiRequest' })
  .openapi('GetApplicationDateRangeKpiRequest')

const GetApplicationSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetApplicationSettingsRequest' })
  .openapi('GetApplicationSettingsRequest')

const GetAppsRequestSchema = z
  .object({})
  .openapi({ title: 'GetAppsRequest' })
  .openapi('GetAppsRequest')

const GetBaiduChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetBaiduChannelRequest' })
  .openapi('GetBaiduChannelRequest')

const GetCampaignActivitiesRequestSchema = z
  .object({})
  .openapi({ title: 'GetCampaignActivitiesRequest' })
  .openapi('GetCampaignActivitiesRequest')

const GetCampaignDateRangeKpiRequestSchema = z
  .object({})
  .openapi({ title: 'GetCampaignDateRangeKpiRequest' })
  .openapi('GetCampaignDateRangeKpiRequest')

const GetCampaignRequestSchema = z
  .object({})
  .openapi({ title: 'GetCampaignRequest' })
  .openapi('GetCampaignRequest')

const GetCampaignVersionRequestSchema = z
  .object({})
  .openapi({ title: 'GetCampaignVersionRequest' })
  .openapi('GetCampaignVersionRequest')

const GetCampaignVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'GetCampaignVersionsRequest' })
  .openapi('GetCampaignVersionsRequest')

const GetCampaignsRequestSchema = z
  .object({})
  .openapi({ title: 'GetCampaignsRequest' })
  .openapi('GetCampaignsRequest')

const GetChannelsRequestSchema = z
  .object({})
  .openapi({ title: 'GetChannelsRequest' })
  .openapi('GetChannelsRequest')

const GetEmailChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetEmailChannelRequest' })
  .openapi('GetEmailChannelRequest')

const GetEmailTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetEmailTemplateRequest' })
  .openapi('GetEmailTemplateRequest')

const GetEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'GetEndpointRequest' })
  .openapi('GetEndpointRequest')

const GetEventStreamRequestSchema = z
  .object({})
  .openapi({ title: 'GetEventStreamRequest' })
  .openapi('GetEventStreamRequest')

const GetExportJobRequestSchema = z
  .object({})
  .openapi({ title: 'GetExportJobRequest' })
  .openapi('GetExportJobRequest')

const GetExportJobsRequestSchema = z
  .object({})
  .openapi({ title: 'GetExportJobsRequest' })
  .openapi('GetExportJobsRequest')

const GetGcmChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetGcmChannelRequest' })
  .openapi('GetGcmChannelRequest')

const GetImportJobRequestSchema = z
  .object({})
  .openapi({ title: 'GetImportJobRequest' })
  .openapi('GetImportJobRequest')

const GetImportJobsRequestSchema = z
  .object({})
  .openapi({ title: 'GetImportJobsRequest' })
  .openapi('GetImportJobsRequest')

const GetInAppMessagesRequestSchema = z
  .object({})
  .openapi({ title: 'GetInAppMessagesRequest' })
  .openapi('GetInAppMessagesRequest')

const GetInAppTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetInAppTemplateRequest' })
  .openapi('GetInAppTemplateRequest')

const GetJourneyDateRangeKpiRequestSchema = z
  .object({})
  .openapi({ title: 'GetJourneyDateRangeKpiRequest' })
  .openapi('GetJourneyDateRangeKpiRequest')

const GetJourneyExecutionActivityMetricsRequestSchema = z
  .object({})
  .openapi({ title: 'GetJourneyExecutionActivityMetricsRequest' })
  .openapi('GetJourneyExecutionActivityMetricsRequest')

const GetJourneyExecutionMetricsRequestSchema = z
  .object({})
  .openapi({ title: 'GetJourneyExecutionMetricsRequest' })
  .openapi('GetJourneyExecutionMetricsRequest')

const GetJourneyRequestSchema = z
  .object({})
  .openapi({ title: 'GetJourneyRequest' })
  .openapi('GetJourneyRequest')

const GetPushTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetPushTemplateRequest' })
  .openapi('GetPushTemplateRequest')

const GetRecommenderConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetRecommenderConfigurationRequest' })
  .openapi('GetRecommenderConfigurationRequest')

const GetRecommenderConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'GetRecommenderConfigurationsRequest' })
  .openapi('GetRecommenderConfigurationsRequest')

const GetSegmentExportJobsRequestSchema = z
  .object({})
  .openapi({ title: 'GetSegmentExportJobsRequest' })
  .openapi('GetSegmentExportJobsRequest')

const GetSegmentImportJobsRequestSchema = z
  .object({})
  .openapi({ title: 'GetSegmentImportJobsRequest' })
  .openapi('GetSegmentImportJobsRequest')

const GetSegmentRequestSchema = z
  .object({})
  .openapi({ title: 'GetSegmentRequest' })
  .openapi('GetSegmentRequest')

const GetSegmentVersionRequestSchema = z
  .object({})
  .openapi({ title: 'GetSegmentVersionRequest' })
  .openapi('GetSegmentVersionRequest')

const GetSegmentVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'GetSegmentVersionsRequest' })
  .openapi('GetSegmentVersionsRequest')

const GetSegmentsRequestSchema = z
  .object({})
  .openapi({ title: 'GetSegmentsRequest' })
  .openapi('GetSegmentsRequest')

const GetSmsChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetSmsChannelRequest' })
  .openapi('GetSmsChannelRequest')

const GetSmsTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetSmsTemplateRequest' })
  .openapi('GetSmsTemplateRequest')

const GetUserEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'GetUserEndpointsRequest' })
  .openapi('GetUserEndpointsRequest')

const GetVoiceChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceChannelRequest' })
  .openapi('GetVoiceChannelRequest')

const GetVoiceTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceTemplateRequest' })
  .openapi('GetVoiceTemplateRequest')

const JourneyStateRequestSchema = z
  .object({
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the journey. Currently, Supported values are ACTIVE, PAUSED, and CANCELLED</p> <p>If you cancel a journey, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Amazon Pinpoint also continues to collect and aggregate analytics data for those activities, until they are complete, and any activities that were complete when you cancelled the journey.</p> <p>After you cancel a journey, you can't add, change, or remove any activities from the journey. In addition, Amazon Pinpoint stops evaluating the journey and doesn't perform any activities that haven't started.</p> <p>When the journey is paused, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Endpoints will stop entering journeys when the journey is paused and will resume entering the journey after the journey is resumed. For wait activities, wait time is paused when the journey is paused. Currently, PAUSED only supports journeys with a segment refresh interval.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Changes the status of a journey.', required: [] })
  .openapi('JourneyStateRequest')

const ListJourneysRequestSchema = z
  .object({})
  .openapi({ title: 'ListJourneysRequest' })
  .openapi('ListJourneysRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTemplateVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListTemplateVersionsRequest' })
  .openapi('ListTemplateVersionsRequest')

const ListTemplatesRequestSchema = z
  .object({})
  .openapi({ title: 'ListTemplatesRequest' })
  .openapi('ListTemplatesRequest')

const MessageRequestSchema = z
  .object({
    Addresses: MapOfAddressConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs, where each key is an address and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object. An address can be a push notification token, a phone number, or an email address. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object to tailor the message for an address by specifying settings such as content overrides and message variables.',
        }),
    ).exactOptional(),
    Context: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.',
        }),
    ).exactOptional(),
    Endpoints: MapOfEndpointSendConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs, where each key is an endpoint ID and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.',
        }),
    ).exactOptional(),
    MessageConfiguration: DirectMessageConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings and content for the default message and any default messages that you defined for specific channels.',
        }),
    ),
    TemplateConfiguration: TemplateConfigurationSchema.and(
      z.any().openapi({ description: 'The message template to use for the message.' }),
    ).exactOptional(),
    TraceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for tracing the message. This identifier is visible to message recipients.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MessageConfiguration'],
    description: 'Specifies the configuration and other settings for a message.',
  })
  .openapi('MessageRequest')

const NumberValidateRequestSchema = z
  .object({
    IsoCountryCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.',
        }),
    ).exactOptional(),
    PhoneNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies a phone number to validate and retrieve information about.',
    required: [],
  })
  .openapi('NumberValidateRequest')

const PhoneNumberValidateRequestSchema = z
  .object({ NumberValidateRequest: NumberValidateRequestSchema })
  .openapi({ required: ['NumberValidateRequest'], title: 'PhoneNumberValidateRequest' })
  .openapi('PhoneNumberValidateRequest')

const WriteEventStreamSchema = z
  .object({
    DestinationStreamArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>\n               </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>\n               </p>',
        }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.',
        }),
    ),
  })
  .openapi({
    required: ['RoleArn', 'DestinationStreamArn'],
    description:
      'Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.',
  })
  .openapi('WriteEventStream')

const PutEventStreamRequestSchema = z
  .object({ WriteEventStream: WriteEventStreamSchema })
  .openapi({ required: ['WriteEventStream'], title: 'PutEventStreamRequest' })
  .openapi('PutEventStreamRequest')

const PutEventsRequestSchema = z
  .object({ EventsRequest: EventsRequestSchema })
  .openapi({ required: ['EventsRequest'], title: 'PutEventsRequest' })
  .openapi('PutEventsRequest')

const UpdateAttributesRequestSchema = z
  .object({
    Blacklist: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies one or more attributes to remove from all the endpoints that are associated with an application.',
    required: [],
  })
  .openapi('UpdateAttributesRequest')

const RemoveAttributesRequestSchema = z
  .object({ UpdateAttributesRequest: UpdateAttributesRequestSchema })
  .openapi({ required: ['UpdateAttributesRequest'], title: 'RemoveAttributesRequest' })
  .openapi('RemoveAttributesRequest')

const SMSChannelRequestSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the SMS channel for the application.',
        }),
    ).exactOptional(),
    SenderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identity that you want to display on recipients' devices when they receive messages from the SMS channel.",
        }),
    ).exactOptional(),
    ShortCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The registered short code that you want to use when you send messages through the SMS channel.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the status and settings of the SMS channel for an application.',
    required: [],
  })
  .openapi('SMSChannelRequest')

const SendMessagesRequestSchema = z
  .object({ MessageRequest: MessageRequestSchema })
  .openapi({ required: ['MessageRequest'], title: 'SendMessagesRequest' })
  .openapi('SendMessagesRequest')

const SendOTPMessageRequestParametersSchema = z
  .object({
    AllowedAttempts: IntegerSchema.and(
      z.any().openapi({ description: 'The attempts allowed to validate an OTP.' }),
    ).exactOptional(),
    BrandName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The brand name that will be substituted into the OTP message body. Should be owned by calling AWS account.',
        }),
    ),
    Channel: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Channel type for the OTP message. Supported values: [SMS].' }),
    ),
    CodeLength: IntegerSchema.and(
      z.any().openapi({ description: 'The number of characters in the generated OTP.' }),
    ).exactOptional(),
    DestinationIdentity: StringSchema.and(
      z.any().openapi({ description: 'The destination identity to send OTP to.' }),
    ),
    EntityId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique Entity ID received from DLT after entity registration is approved.',
        }),
    ).exactOptional(),
    Language: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The language to be used for the outgoing message body containing the OTP.',
        }),
    ).exactOptional(),
    OriginationIdentity: StringSchema.and(
      z.any().openapi({ description: 'The origination identity used to send OTP from.' }),
    ),
    ReferenceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Developer-specified reference identifier. Required to match during OTP verification.',
        }),
    ),
    TemplateId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique Template ID received from DLT after entity registration is approved.',
        }),
    ).exactOptional(),
    ValidityPeriod: IntegerSchema.and(
      z.any().openapi({ description: 'The time in minutes before the OTP is no longer valid.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BrandName', 'ReferenceId', 'Channel', 'DestinationIdentity', 'OriginationIdentity'],
    description: 'Send OTP message request parameters.',
  })
  .openapi('SendOTPMessageRequestParameters')

const SendOTPMessageRequestSchema = z
  .object({ SendOTPMessageRequestParameters: SendOTPMessageRequestParametersSchema })
  .openapi({ required: ['SendOTPMessageRequestParameters'], title: 'SendOTPMessageRequest' })
  .openapi('SendOTPMessageRequest')

const SendUsersMessageRequestSchema = z
  .object({
    Context: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.',
        }),
    ).exactOptional(),
    MessageConfiguration: DirectMessageConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings and content for the default message and any default messages that you defined for specific channels.',
        }),
    ),
    TemplateConfiguration: TemplateConfigurationSchema.and(
      z.any().openapi({ description: 'The message template to use for the message.' }),
    ).exactOptional(),
    TraceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for tracing the message. This identifier is visible to message recipients.',
        }),
    ).exactOptional(),
    Users: MapOfEndpointSendConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that associates user IDs with <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> objects. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for a user by specifying settings such as content overrides and message variables.',
        }),
    ),
  })
  .openapi({
    required: ['MessageConfiguration', 'Users'],
    description:
      'Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.',
  })
  .openapi('SendUsersMessageRequest')

const SendUsersMessagesRequestSchema = z
  .object({ SendUsersMessageRequest: SendUsersMessageRequestSchema })
  .openapi({ required: ['SendUsersMessageRequest'], title: 'SendUsersMessagesRequest' })
  .openapi('SendUsersMessagesRequest')

const TagResourceRequestSchema = z
  .object({ TagsModel: TagsModelSchema })
  .openapi({ required: ['TagsModel'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TemplateActiveVersionRequestSchema = z
  .object({
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the message template to use as the active version of the template. Valid values are: latest, for the most recent version of the template; or, the unique identifier for any existing version of the template. If you specify an identifier, the value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies which version of a message template to use as the active version of the template.',
    required: [],
  })
  .openapi('TemplateActiveVersionRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAdmChannelRequestSchema = z
  .object({ ADMChannelRequest: ADMChannelRequestSchema })
  .openapi({ required: ['ADMChannelRequest'], title: 'UpdateAdmChannelRequest' })
  .openapi('UpdateAdmChannelRequest')

const UpdateApnsChannelRequestSchema = z
  .object({ APNSChannelRequest: APNSChannelRequestSchema })
  .openapi({ required: ['APNSChannelRequest'], title: 'UpdateApnsChannelRequest' })
  .openapi('UpdateApnsChannelRequest')

const UpdateApnsSandboxChannelRequestSchema = z
  .object({ APNSSandboxChannelRequest: APNSSandboxChannelRequestSchema })
  .openapi({ required: ['APNSSandboxChannelRequest'], title: 'UpdateApnsSandboxChannelRequest' })
  .openapi('UpdateApnsSandboxChannelRequest')

const UpdateApnsVoipChannelRequestSchema = z
  .object({ APNSVoipChannelRequest: APNSVoipChannelRequestSchema })
  .openapi({ required: ['APNSVoipChannelRequest'], title: 'UpdateApnsVoipChannelRequest' })
  .openapi('UpdateApnsVoipChannelRequest')

const UpdateApnsVoipSandboxChannelRequestSchema = z
  .object({ APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequestSchema })
  .openapi({
    required: ['APNSVoipSandboxChannelRequest'],
    title: 'UpdateApnsVoipSandboxChannelRequest',
  })
  .openapi('UpdateApnsVoipSandboxChannelRequest')

const WriteApplicationSettingsRequestSchema = z
  .object({
    CampaignHook: CampaignHookSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</p> <p>To override these settings and define custom settings for a specific campaign, use the CampaignHook object of the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource.</p>',
        }),
    ).exactOptional(),
    CloudWatchMetricsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to enable application-related alarms in Amazon CloudWatch.',
        }),
    ).exactOptional(),
    EventTaggingEnabled: BooleanSchema.exactOptional(),
    Limits: CampaignLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default sending limits for campaigns in the application. To override these limits and define custom limits for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource, respectively.',
        }),
    ).exactOptional(),
    QuietTime: QuietTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren\'t sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint\'s time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint\'s time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn\'t met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource to define a custom quiet time for the campaign or journey.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the default settings for an application.', required: [] })
  .openapi('WriteApplicationSettingsRequest')

const UpdateApplicationSettingsRequestSchema = z
  .object({ WriteApplicationSettingsRequest: WriteApplicationSettingsRequestSchema })
  .openapi({
    required: ['WriteApplicationSettingsRequest'],
    title: 'UpdateApplicationSettingsRequest',
  })
  .openapi('UpdateApplicationSettingsRequest')

const UpdateBaiduChannelRequestSchema = z
  .object({ BaiduChannelRequest: BaiduChannelRequestSchema })
  .openapi({ required: ['BaiduChannelRequest'], title: 'UpdateBaiduChannelRequest' })
  .openapi('UpdateBaiduChannelRequest')

const UpdateCampaignRequestSchema = z
  .object({ WriteCampaignRequest: WriteCampaignRequestSchema })
  .openapi({ required: ['WriteCampaignRequest'], title: 'UpdateCampaignRequest' })
  .openapi('UpdateCampaignRequest')

const UpdateEmailChannelRequestSchema = z
  .object({ EmailChannelRequest: EmailChannelRequestSchema })
  .openapi({ required: ['EmailChannelRequest'], title: 'UpdateEmailChannelRequest' })
  .openapi('UpdateEmailChannelRequest')

const UpdateEmailTemplateRequestSchema = z
  .object({ EmailTemplateRequest: EmailTemplateRequestSchema })
  .openapi({ required: ['EmailTemplateRequest'], title: 'UpdateEmailTemplateRequest' })
  .openapi('UpdateEmailTemplateRequest')

const UpdateEndpointRequestSchema = z
  .object({ EndpointRequest: EndpointRequestSchema })
  .openapi({ required: ['EndpointRequest'], title: 'UpdateEndpointRequest' })
  .openapi('UpdateEndpointRequest')

const UpdateEndpointsBatchRequestSchema = z
  .object({ EndpointBatchRequest: EndpointBatchRequestSchema })
  .openapi({ required: ['EndpointBatchRequest'], title: 'UpdateEndpointsBatchRequest' })
  .openapi('UpdateEndpointsBatchRequest')

const UpdateGcmChannelRequestSchema = z
  .object({ GCMChannelRequest: GCMChannelRequestSchema })
  .openapi({ required: ['GCMChannelRequest'], title: 'UpdateGcmChannelRequest' })
  .openapi('UpdateGcmChannelRequest')

const UpdateInAppTemplateRequestSchema = z
  .object({ InAppTemplateRequest: InAppTemplateRequestSchema })
  .openapi({ required: ['InAppTemplateRequest'], title: 'UpdateInAppTemplateRequest' })
  .openapi('UpdateInAppTemplateRequest')

const UpdateJourneyRequestSchema = z
  .object({ WriteJourneyRequest: WriteJourneyRequestSchema })
  .openapi({ required: ['WriteJourneyRequest'], title: 'UpdateJourneyRequest' })
  .openapi('UpdateJourneyRequest')

const UpdateJourneyStateRequestSchema = z
  .object({ JourneyStateRequest: JourneyStateRequestSchema })
  .openapi({ required: ['JourneyStateRequest'], title: 'UpdateJourneyStateRequest' })
  .openapi('UpdateJourneyStateRequest')

const UpdatePushTemplateRequestSchema = z
  .object({ PushNotificationTemplateRequest: PushNotificationTemplateRequestSchema })
  .openapi({ required: ['PushNotificationTemplateRequest'], title: 'UpdatePushTemplateRequest' })
  .openapi('UpdatePushTemplateRequest')

const UpdateRecommenderConfigurationSchema = z
  .object({
    Attributes: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>",
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).',
        }),
    ).exactOptional(),
    RecommendationProviderIdType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>",
        }),
    ).exactOptional(),
    RecommendationProviderRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.',
        }),
    ),
    RecommendationProviderUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.',
        }),
    ),
    RecommendationTransformerUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.",
        }),
    ).exactOptional(),
    RecommendationsDisplayName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>",
        }),
    ).exactOptional(),
    RecommendationsPerMessage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RecommendationProviderUri', 'RecommendationProviderRoleArn'],
    description:
      'Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.',
  })
  .openapi('UpdateRecommenderConfiguration')

const UpdateRecommenderConfigurationRequestSchema = z
  .object({ UpdateRecommenderConfiguration: UpdateRecommenderConfigurationSchema })
  .openapi({
    required: ['UpdateRecommenderConfiguration'],
    title: 'UpdateRecommenderConfigurationRequest',
  })
  .openapi('UpdateRecommenderConfigurationRequest')

const UpdateSegmentRequestSchema = z
  .object({ WriteSegmentRequest: WriteSegmentRequestSchema })
  .openapi({ required: ['WriteSegmentRequest'], title: 'UpdateSegmentRequest' })
  .openapi('UpdateSegmentRequest')

const UpdateSmsChannelRequestSchema = z
  .object({ SMSChannelRequest: SMSChannelRequestSchema })
  .openapi({ required: ['SMSChannelRequest'], title: 'UpdateSmsChannelRequest' })
  .openapi('UpdateSmsChannelRequest')

const UpdateSmsTemplateRequestSchema = z
  .object({ SMSTemplateRequest: SMSTemplateRequestSchema })
  .openapi({ required: ['SMSTemplateRequest'], title: 'UpdateSmsTemplateRequest' })
  .openapi('UpdateSmsTemplateRequest')

const UpdateTemplateActiveVersionRequestSchema = z
  .object({ TemplateActiveVersionRequest: TemplateActiveVersionRequestSchema })
  .openapi({
    required: ['TemplateActiveVersionRequest'],
    title: 'UpdateTemplateActiveVersionRequest',
  })
  .openapi('UpdateTemplateActiveVersionRequest')

const VoiceChannelRequestSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to enable the voice channel for the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the status and settings of the voice channel for an application.',
    required: [],
  })
  .openapi('VoiceChannelRequest')

const UpdateVoiceChannelRequestSchema = z
  .object({ VoiceChannelRequest: VoiceChannelRequestSchema })
  .openapi({ required: ['VoiceChannelRequest'], title: 'UpdateVoiceChannelRequest' })
  .openapi('UpdateVoiceChannelRequest')

const UpdateVoiceTemplateRequestSchema = z
  .object({ VoiceTemplateRequest: VoiceTemplateRequestSchema })
  .openapi({ required: ['VoiceTemplateRequest'], title: 'UpdateVoiceTemplateRequest' })
  .openapi('UpdateVoiceTemplateRequest')

const VerifyOTPMessageRequestParametersSchema = z
  .object({
    DestinationIdentity: StringSchema.and(
      z.any().openapi({ description: 'The destination identity to send OTP to.' }),
    ),
    Otp: StringSchema.and(
      z.any().openapi({ description: 'The OTP the end user provided for verification.' }),
    ),
    ReferenceId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The reference identifier provided when the OTP was previously sent.',
        }),
    ),
  })
  .openapi({
    required: ['ReferenceId', 'Otp', 'DestinationIdentity'],
    description: 'Verify OTP message request.',
  })
  .openapi('VerifyOTPMessageRequestParameters')

const VerifyOTPMessageRequestSchema = z
  .object({ VerifyOTPMessageRequestParameters: VerifyOTPMessageRequestParametersSchema })
  .openapi({ required: ['VerifyOTPMessageRequestParameters'], title: 'VerifyOTPMessageRequest' })
  .openapi('VerifyOTPMessageRequest')

const DayOfWeekSchema = z
  .enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'])
  .openapi('DayOfWeek')

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

export const getV1AppsRoute = createRoute({
  method: 'get',
  path: '/v1/apps',
  description:
    'Retrieves information about all the applications that are associated with your Amazon Pinpoint account.',
  operationId: 'GetApps',
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
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAppsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsRoute = createRoute({
  method: 'post',
  path: '/v1/apps',
  description: ' <p>Creates an application.</p>',
  operationId: 'CreateApp',
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
              CreateApplicationRequest: z
                .object({
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the display name of an application and the tags to associate with the application.',
                  required: [],
                }),
            })
            .openapi({ required: ['CreateApplicationRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdCampaignsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/campaigns',
  description:
    'Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.',
  operationId: 'GetCampaigns',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCampaignsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdCampaignsRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/campaigns',
  description:
    'Creates a new campaign for an application or updates the settings of an existing campaign for an application.',
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
    }),
    params: z.object({
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteCampaignRequest: z
                .object({
                  AdditionalTreatments: ListOfWriteTreatmentResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.',
                      }),
                  ).exactOptional(),
                  CustomDeliveryConfiguration: CustomDeliveryConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The delivery configuration settings for sending the campaign through a custom channel. This object is required if the MessageConfiguration object for the campaign specifies a CustomMessage object.',
                      }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z.any().openapi({ description: 'A custom description of the campaign.' }),
                  ).exactOptional(),
                  HoldoutPercent: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.",
                      }),
                  ).exactOptional(),
                  Hook: CampaignHookSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The settings for the AWS Lambda function to invoke as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.",
                      }),
                  ).exactOptional(),
                  IsPaused: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to false.",
                      }),
                  ).exactOptional(),
                  Limits: CampaignLimitsSchema.and(
                    z.any().openapi({ description: 'The messaging limits for the campaign.' }),
                  ).exactOptional(),
                  MessageConfiguration: MessageConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The message configuration settings for the campaign.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A custom name for the campaign.' }),
                  ).exactOptional(),
                  Schedule: ScheduleSchema.and(
                    z.any().openapi({ description: 'The schedule settings for the campaign.' }),
                  ).exactOptional(),
                  SegmentId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the segment to associate with the campaign.',
                      }),
                  ).exactOptional(),
                  SegmentVersion: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The version of the segment to associate with the campaign.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateConfiguration: TemplateConfigurationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The message template to use for the campaign.' }),
                  ).exactOptional(),
                  TreatmentDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A custom description of the default treatment for the campaign.',
                      }),
                  ).exactOptional(),
                  TreatmentName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.",
                      }),
                  ).exactOptional(),
                  Priority: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the configuration and other settings for a campaign.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteCampaignRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCampaignResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1TemplatesTemplateNameEmailRoute = createRoute({
  method: 'get',
  path: '/v1/templates/{template-name}/email',
  description:
    'Retrieves the content and settings of a message template for messages that are sent through the email channel.',
  operationId: 'GetEmailTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEmailTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1TemplatesTemplateNameEmailRoute = createRoute({
  method: 'put',
  path: '/v1/templates/{template-name}/email',
  description:
    'Updates an existing message template for messages that are sent through the email channel.',
  operationId: 'UpdateEmailTemplate',
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
      'create-new-version': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'create-new-version',
            in: 'query',
            required: false,
            description:
              "<p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>",
            schema: { type: 'boolean' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EmailTemplateRequest: z
                .object({
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  HtmlPart: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.',
                      }),
                  ).exactOptional(),
                  RecommenderId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
                      }),
                  ).exactOptional(),
                  Subject: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The subject line, or title, to use in email messages that are based on the message template.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                  TextPart: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['EmailTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEmailTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1TemplatesTemplateNameEmailRoute = createRoute({
  method: 'post',
  path: '/v1/templates/{template-name}/email',
  description: 'Creates a message template for messages that are sent through the email channel.',
  operationId: 'CreateEmailTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EmailTemplateRequest: z
                .object({
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  HtmlPart: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.',
                      }),
                  ).exactOptional(),
                  RecommenderId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
                      }),
                  ).exactOptional(),
                  Subject: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The subject line, or title, to use in email messages that are based on the message template.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                  TextPart: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['EmailTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEmailTemplateResponseSchema } },
    },
    480: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1TemplatesTemplateNameEmailRoute = createRoute({
  method: 'delete',
  path: '/v1/templates/{template-name}/email',
  description: 'Deletes a message template for messages that were sent through the email channel.',
  operationId: 'DeleteEmailTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEmailTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJobsExportRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/jobs/export',
  description:
    'Retrieves information about the status and settings of all the export jobs for an application.',
  operationId: 'GetExportJobs',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExportJobsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdJobsExportRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/jobs/export',
  description: 'Creates an export job for an application.',
  operationId: 'CreateExportJob',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ExportJobRequest: z
                .object({
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.',
                      }),
                  ).exactOptional(),
                  S3UrlPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.',
                      }),
                  ).exactOptional(),
                  SegmentId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.",
                      }),
                  ).exactOptional(),
                  SegmentVersion: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The version of the segment to export endpoint definitions from, if specified.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.',
                  required: [],
                }),
            })
            .openapi({ required: ['ExportJobRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExportJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJobsImportRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/jobs/import',
  description:
    'Retrieves information about the status and settings of all the import jobs for an application.',
  operationId: 'GetImportJobs',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImportJobsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdJobsImportRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/jobs/import',
  description: 'Creates an import job for an application.',
  operationId: 'CreateImportJob',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ImportJobRequest: z
                .object({
                  DefineSegment: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.',
                      }),
                  ).exactOptional(),
                  ExternalId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.",
                      }),
                  ).exactOptional(),
                  Format: FormatSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.',
                      }),
                  ).exactOptional(),
                  RegisterEndpoints: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.',
                      }),
                  ).exactOptional(),
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.',
                      }),
                  ).exactOptional(),
                  S3Url: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>',
                      }),
                  ).exactOptional(),
                  SegmentId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.',
                      }),
                  ).exactOptional(),
                  SegmentName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.',
                  required: [],
                }),
            })
            .openapi({ required: ['ImportJobRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateImportJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1TemplatesTemplateNameInappRoute = createRoute({
  method: 'get',
  path: '/v1/templates/{template-name}/inapp',
  description:
    'Retrieves the content and settings of a message template for messages sent through the in-app channel.',
  operationId: 'GetInAppTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInAppTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1TemplatesTemplateNameInappRoute = createRoute({
  method: 'put',
  path: '/v1/templates/{template-name}/inapp',
  description:
    'Updates an existing message template for messages sent through the in-app message channel.',
  operationId: 'UpdateInAppTemplate',
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
      'create-new-version': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'create-new-version',
            in: 'query',
            required: false,
            description:
              "<p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>",
            schema: { type: 'boolean' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InAppTemplateRequest: z
                .object({
                  Content: ListOfInAppMessageContentSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.',
                      }),
                  ).exactOptional(),
                  CustomConfig: MapOfStringSchema.and(
                    z.any().openapi({ description: 'Custom config to be sent to client.' }),
                  ).exactOptional(),
                  Layout: LayoutSchema.and(
                    z.any().openapi({ description: 'The layout of the message.' }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z.any().openapi({ description: 'The description of the template.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'InApp Template Request.', required: [] }),
            })
            .openapi({ required: ['InAppTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateInAppTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1TemplatesTemplateNameInappRoute = createRoute({
  method: 'post',
  path: '/v1/templates/{template-name}/inapp',
  description: 'Creates a new message template for messages using the in-app message channel.',
  operationId: 'CreateInAppTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InAppTemplateRequest: z
                .object({
                  Content: ListOfInAppMessageContentSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.',
                      }),
                  ).exactOptional(),
                  CustomConfig: MapOfStringSchema.and(
                    z.any().openapi({ description: 'Custom config to be sent to client.' }),
                  ).exactOptional(),
                  Layout: LayoutSchema.and(
                    z.any().openapi({ description: 'The layout of the message.' }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z.any().openapi({ description: 'The description of the template.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'InApp Template Request.', required: [] }),
            })
            .openapi({ required: ['InAppTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInAppTemplateResponseSchema } },
    },
    480: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1TemplatesTemplateNameInappRoute = createRoute({
  method: 'delete',
  path: '/v1/templates/{template-name}/inapp',
  description: 'Deletes a message template for messages sent using the in-app message channel.',
  operationId: 'DeleteInAppTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInAppTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJourneysRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/journeys',
  description:
    'Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.',
  operationId: 'ListJourneys',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJourneysResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdJourneysRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/journeys',
  description: 'Creates a journey for an application.',
  operationId: 'CreateJourney',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteJourneyRequest: z
                .object({
                  Activities: MapOfActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 100 characters. The characters must be alphanumeric characters.',
                      }),
                  ).exactOptional(),
                  CreationDate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The date, in ISO 8601 format, when the journey was created.',
                      }),
                  ).exactOptional(),
                  LastModifiedDate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The date, in ISO 8601 format, when the journey was last modified.',
                      }),
                  ).exactOptional(),
                  Limits: JourneyLimitsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The messaging and entry limits for the journey.' }),
                  ).exactOptional(),
                  LocalTime: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.",
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.",
                      }),
                  ).exactOptional(),
                  QuietTime: QuietTimeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>",
                      }),
                  ).exactOptional(),
                  RefreshFrequency: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.',
                      }),
                  ).exactOptional(),
                  Schedule: JourneyScheduleSchema.and(
                    z.any().openapi({ description: 'The schedule settings for the journey.' }),
                  ).exactOptional(),
                  StartActivity: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the first activity in the journey. The identifier for this activity can contain a maximum of 128 characters. The characters must be alphanumeric characters.',
                      }),
                  ).exactOptional(),
                  StartCondition: StartConditionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The segment that defines which users are participants in the journey.',
                      }),
                  ).exactOptional(),
                  State: StateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The status of the journey. Valid values are:</p> <ul><li><p>DRAFT - Saves the journey and doesn't publish it.</p></li> <li><p>ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li></ul> <p>PAUSED, CANCELLED, COMPLETED, and CLOSED states are not supported in requests to create or update a journey. To cancel, pause, or resume a journey, use the <link  linkend=\"apps-application-id-journeys-journey-id-state\">Journey State</link> resource.</p>",
                      }),
                  ).exactOptional(),
                  WaitForQuietTime: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.',
                      }),
                  ).exactOptional(),
                  RefreshOnSegmentUpdate: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether a journey should be refreshed on segment update.',
                      }),
                  ).exactOptional(),
                  JourneyChannelSettings: JourneyChannelSettingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The channel-specific configurations for the journey.',
                      }),
                  ).exactOptional(),
                  SendingSchedule: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates if journey have Advance Quiet Time (OpenHours and ClosedDays). This flag should be set to true in order to allow (OpenHours and ClosedDays)',
                      }),
                  ).exactOptional(),
                  OpenHours: OpenHoursSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.',
                      }),
                  ).exactOptional(),
                  ClosedDays: ClosedDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time when journey will stop sending messages. QuietTime should be configured first and SendingSchedule should be set to true.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the configuration and other settings for a journey.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteJourneyRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJourneyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1TemplatesTemplateNamePushRoute = createRoute({
  method: 'get',
  path: '/v1/templates/{template-name}/push',
  description:
    'Retrieves the content and settings of a message template for messages that are sent through a push notification channel.',
  operationId: 'GetPushTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPushTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1TemplatesTemplateNamePushRoute = createRoute({
  method: 'put',
  path: '/v1/templates/{template-name}/push',
  description:
    'Updates an existing message template for messages that are sent through a push notification channel.',
  operationId: 'UpdatePushTemplate',
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
      'create-new-version': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'create-new-version',
            in: 'query',
            required: false,
            description:
              "<p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>",
            schema: { type: 'boolean' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PushNotificationTemplateRequest: z
                .object({
                  ADM: AndroidPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  APNS: APNSPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  Baidu: AndroidPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  Default: DefaultPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default message template to use for push notification channels.',
                      }),
                  ).exactOptional(),
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  GCM: AndroidPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  RecommenderId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['PushNotificationTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePushTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1TemplatesTemplateNamePushRoute = createRoute({
  method: 'post',
  path: '/v1/templates/{template-name}/push',
  description:
    'Creates a message template for messages that are sent through a push notification channel.',
  operationId: 'CreatePushTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PushNotificationTemplateRequest: z
                .object({
                  ADM: AndroidPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  APNS: APNSPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  Baidu: AndroidPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  Default: DefaultPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default message template to use for push notification channels.',
                      }),
                  ).exactOptional(),
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  GCM: AndroidPushNotificationTemplateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).',
                      }),
                  ).exactOptional(),
                  RecommenderId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['PushNotificationTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePushTemplateResponseSchema } },
    },
    480: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1TemplatesTemplateNamePushRoute = createRoute({
  method: 'delete',
  path: '/v1/templates/{template-name}/push',
  description:
    'Deletes a message template for messages that were sent through a push notification channel.',
  operationId: 'DeletePushTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePushTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1RecommendersRoute = createRoute({
  method: 'get',
  path: '/v1/recommenders',
  description:
    'Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.',
  operationId: 'GetRecommenderConfigurations',
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
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecommenderConfigurationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1RecommendersRoute = createRoute({
  method: 'post',
  path: '/v1/recommenders',
  description: 'Creates an Amazon Pinpoint configuration for a recommender model.',
  operationId: 'CreateRecommenderConfiguration',
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
              CreateRecommenderConfiguration: z
                .object({
                  Attributes: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>",
                      }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).',
                      }),
                  ).exactOptional(),
                  RecommendationProviderIdType: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>",
                      }),
                  ).exactOptional(),
                  RecommendationProviderRoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.',
                      }),
                  ).exactOptional(),
                  RecommendationProviderUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.',
                      }),
                  ).exactOptional(),
                  RecommendationTransformerUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.",
                      }),
                  ).exactOptional(),
                  RecommendationsDisplayName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>",
                      }),
                  ).exactOptional(),
                  RecommendationsPerMessage: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.',
                  required: [],
                }),
            })
            .openapi({ required: ['CreateRecommenderConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRecommenderConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdSegmentsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/segments',
  description:
    'Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.',
  operationId: 'GetSegments',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSegmentsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdSegmentsRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/segments',
  description:
    "Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.",
  operationId: 'CreateSegment',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteSegmentRequest: z
                .object({
                  Dimensions: SegmentDimensionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The criteria that define the dimensions for the segment.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'The name of the segment.' }),
                  ).exactOptional(),
                  SegmentGroups: SegmentGroupListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.",
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteSegmentRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSegmentResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1TemplatesTemplateNameSmsRoute = createRoute({
  method: 'get',
  path: '/v1/templates/{template-name}/sms',
  description:
    'Retrieves the content and settings of a message template for messages that are sent through the SMS channel.',
  operationId: 'GetSmsTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSmsTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1TemplatesTemplateNameSmsRoute = createRoute({
  method: 'put',
  path: '/v1/templates/{template-name}/sms',
  description:
    'Updates an existing message template for messages that are sent through the SMS channel.',
  operationId: 'UpdateSmsTemplate',
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
      'create-new-version': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'create-new-version',
            in: 'query',
            required: false,
            description:
              "<p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>",
            schema: { type: 'boolean' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SMSTemplateRequest: z
                .object({
                  Body: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message body to use in text messages that are based on the message template.',
                      }),
                  ).exactOptional(),
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  RecommenderId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['SMSTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSmsTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1TemplatesTemplateNameSmsRoute = createRoute({
  method: 'post',
  path: '/v1/templates/{template-name}/sms',
  description: 'Creates a message template for messages that are sent through the SMS channel.',
  operationId: 'CreateSmsTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SMSTemplateRequest: z
                .object({
                  Body: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The message body to use in text messages that are based on the message template.',
                      }),
                  ).exactOptional(),
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  RecommenderId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['SMSTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSmsTemplateResponseSchema } },
    },
    480: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1TemplatesTemplateNameSmsRoute = createRoute({
  method: 'delete',
  path: '/v1/templates/{template-name}/sms',
  description: 'Deletes a message template for messages that were sent through the SMS channel.',
  operationId: 'DeleteSmsTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSmsTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1TemplatesTemplateNameVoiceRoute = createRoute({
  method: 'get',
  path: '/v1/templates/{template-name}/voice',
  description:
    'Retrieves the content and settings of a message template for messages that are sent through the voice channel.',
  operationId: 'GetVoiceTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1TemplatesTemplateNameVoiceRoute = createRoute({
  method: 'put',
  path: '/v1/templates/{template-name}/voice',
  description:
    'Updates an existing message template for messages that are sent through the voice channel.',
  operationId: 'UpdateVoiceTemplate',
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
      'create-new-version': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'create-new-version',
            in: 'query',
            required: false,
            description:
              "<p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>",
            schema: { type: 'boolean' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              VoiceTemplateRequest: z
                .object({
                  Body: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The text of the script to use in messages that are based on the message template, in plain text format.',
                      }),
                  ).exactOptional(),
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  LanguageCode: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                  VoiceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['VoiceTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVoiceTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1TemplatesTemplateNameVoiceRoute = createRoute({
  method: 'post',
  path: '/v1/templates/{template-name}/voice',
  description: 'Creates a message template for messages that are sent through the voice channel.',
  operationId: 'CreateVoiceTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              VoiceTemplateRequest: z
                .object({
                  Body: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The text of the script to use in messages that are based on the message template, in plain text format.',
                      }),
                  ).exactOptional(),
                  DefaultSubstitutions: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
                      }),
                  ).exactOptional(),
                  LanguageCode: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A custom description of the message template.' }),
                  ).exactOptional(),
                  VoiceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.',
                  required: [],
                }),
            })
            .openapi({ required: ['VoiceTemplateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVoiceTemplateResponseSchema } },
    },
    480: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1TemplatesTemplateNameVoiceRoute = createRoute({
  method: 'delete',
  path: '/v1/templates/{template-name}/voice',
  description: 'Deletes a message template for messages that were sent through the voice channel.',
  operationId: 'DeleteVoiceTemplate',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            description:
              "<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\"templates-template-name-template-type-versions\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVoiceTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsAdmRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/adm',
  description:
    'Retrieves information about the status and settings of the ADM channel for an application.',
  operationId: 'GetAdmChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAdmChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsAdmRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/adm',
  description:
    'Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.',
  operationId: 'UpdateAdmChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ADMChannelRequest: z
                .object({
                  ClientId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Client ID that you received from Amazon to send messages by using ADM.',
                      }),
                  ).exactOptional(),
                  ClientSecret: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Client Secret that you received from Amazon to send messages by using ADM.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the ADM channel for the application.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['ADMChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAdmChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsAdmRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/adm',
  description:
    'Disables the ADM channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteAdmChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAdmChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsApnsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/apns',
  description:
    'Retrieves information about the status and settings of the APNs channel for an application.',
  operationId: 'GetApnsChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApnsChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsApnsRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/apns',
  description:
    'Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.',
  operationId: 'UpdateApnsChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              APNSChannelRequest: z
                .object({
                  BundleId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  Certificate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.',
                      }),
                  ).exactOptional(),
                  DefaultAuthenticationMethod: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the APNs channel for the application.',
                      }),
                  ).exactOptional(),
                  PrivateKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.',
                      }),
                  ).exactOptional(),
                  TeamId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  TokenKey: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The authentication key to use for APNs tokens.' }),
                  ).exactOptional(),
                  TokenKeyId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['APNSChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApnsChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsApnsRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/apns',
  description:
    'Disables the APNs channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteApnsChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApnsChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsApnsSandboxRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/apns_sandbox',
  description:
    'Retrieves information about the status and settings of the APNs sandbox channel for an application.',
  operationId: 'GetApnsSandboxChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApnsSandboxChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsApnsSandboxRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/apns_sandbox',
  description:
    'Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.',
  operationId: 'UpdateApnsSandboxChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              APNSSandboxChannelRequest: z
                .object({
                  BundleId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  Certificate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.',
                      }),
                  ).exactOptional(),
                  DefaultAuthenticationMethod: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the APNs sandbox channel for the application.',
                      }),
                  ).exactOptional(),
                  PrivateKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.',
                      }),
                  ).exactOptional(),
                  TeamId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  TokenKey: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The authentication key to use for APNs tokens.' }),
                  ).exactOptional(),
                  TokenKeyId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['APNSSandboxChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApnsSandboxChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsApnsSandboxRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/apns_sandbox',
  description:
    'Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteApnsSandboxChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApnsSandboxChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsApnsVoipRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/apns_voip',
  description:
    'Retrieves information about the status and settings of the APNs VoIP channel for an application.',
  operationId: 'GetApnsVoipChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApnsVoipChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsApnsVoipRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/apns_voip',
  description:
    'Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.',
  operationId: 'UpdateApnsVoipChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              APNSVoipChannelRequest: z
                .object({
                  BundleId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  Certificate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.',
                      }),
                  ).exactOptional(),
                  DefaultAuthenticationMethod: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the APNs VoIP channel for the application.',
                      }),
                  ).exactOptional(),
                  PrivateKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.',
                      }),
                  ).exactOptional(),
                  TeamId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  TokenKey: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The authentication key to use for APNs tokens.' }),
                  ).exactOptional(),
                  TokenKeyId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['APNSVoipChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApnsVoipChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsApnsVoipRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/apns_voip',
  description:
    'Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteApnsVoipChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApnsVoipChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsApnsVoipSandboxRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/apns_voip_sandbox',
  description:
    'Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.',
  operationId: 'GetApnsVoipSandboxChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApnsVoipSandboxChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsApnsVoipSandboxRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/apns_voip_sandbox',
  description:
    'Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.',
  operationId: 'UpdateApnsVoipSandboxChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              APNSVoipSandboxChannelRequest: z
                .object({
                  BundleId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  Certificate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.',
                      }),
                  ).exactOptional(),
                  DefaultAuthenticationMethod: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether the APNs VoIP sandbox channel is enabled for the application.',
                      }),
                  ).exactOptional(),
                  PrivateKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.',
                      }),
                  ).exactOptional(),
                  TeamId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.",
                      }),
                  ).exactOptional(),
                  TokenKey: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The authentication key to use for APNs tokens.' }),
                  ).exactOptional(),
                  TokenKeyId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['APNSVoipSandboxChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApnsVoipSandboxChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsApnsVoipSandboxRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/apns_voip_sandbox',
  description:
    'Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteApnsVoipSandboxChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApnsVoipSandboxChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}',
  description: 'Retrieves information about an application.',
  operationId: 'GetApp',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAppResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}',
  description: 'Deletes an application.',
  operationId: 'DeleteApp',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAppResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsBaiduRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/baidu',
  description:
    'Retrieves information about the status and settings of the Baidu channel for an application.',
  operationId: 'GetBaiduChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBaiduChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsBaiduRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/baidu',
  description:
    'Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.',
  operationId: 'UpdateBaiduChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BaiduChannelRequest: z
                .object({
                  ApiKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The API key that you received from the Baidu Cloud Push service to communicate with the service.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the Baidu channel for the application.',
                      }),
                  ).exactOptional(),
                  SecretKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The secret key that you received from the Baidu Cloud Push service to communicate with the service.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['BaiduChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBaiduChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsBaiduRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/baidu',
  description:
    'Disables the Baidu channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteBaiduChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBaiduChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdCampaignsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/campaigns/{campaign-id}',
  description:
    'Retrieves information about the status, configuration, and other settings for a campaign.',
  operationId: 'GetCampaign',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'campaign-id': z
        .string()
        .openapi({
          param: {
            name: 'campaign-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the campaign.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCampaignResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdCampaignsCampaignIdRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/campaigns/{campaign-id}',
  description: 'Updates the configuration and other settings for a campaign.',
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
    }),
    params: z.object({
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'campaign-id': z
        .string()
        .openapi({
          param: {
            name: 'campaign-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the campaign.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteCampaignRequest: z
                .object({
                  AdditionalTreatments: ListOfWriteTreatmentResourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.',
                      }),
                  ).exactOptional(),
                  CustomDeliveryConfiguration: CustomDeliveryConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The delivery configuration settings for sending the campaign through a custom channel. This object is required if the MessageConfiguration object for the campaign specifies a CustomMessage object.',
                      }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z.any().openapi({ description: 'A custom description of the campaign.' }),
                  ).exactOptional(),
                  HoldoutPercent: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.",
                      }),
                  ).exactOptional(),
                  Hook: CampaignHookSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The settings for the AWS Lambda function to invoke as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.",
                      }),
                  ).exactOptional(),
                  IsPaused: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to false.",
                      }),
                  ).exactOptional(),
                  Limits: CampaignLimitsSchema.and(
                    z.any().openapi({ description: 'The messaging limits for the campaign.' }),
                  ).exactOptional(),
                  MessageConfiguration: MessageConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The message configuration settings for the campaign.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A custom name for the campaign.' }),
                  ).exactOptional(),
                  Schedule: ScheduleSchema.and(
                    z.any().openapi({ description: 'The schedule settings for the campaign.' }),
                  ).exactOptional(),
                  SegmentId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the segment to associate with the campaign.',
                      }),
                  ).exactOptional(),
                  SegmentVersion: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The version of the segment to associate with the campaign.',
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                  TemplateConfiguration: TemplateConfigurationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The message template to use for the campaign.' }),
                  ).exactOptional(),
                  TreatmentDescription: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A custom description of the default treatment for the campaign.',
                      }),
                  ).exactOptional(),
                  TreatmentName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.",
                      }),
                  ).exactOptional(),
                  Priority: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the configuration and other settings for a campaign.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteCampaignRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCampaignResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdCampaignsCampaignIdRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/campaigns/{campaign-id}',
  description: 'Deletes a campaign from an application.',
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
    }),
    params: z.object({
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'campaign-id': z
        .string()
        .openapi({
          param: {
            name: 'campaign-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the campaign.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCampaignResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsEmailRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/email',
  description:
    'Retrieves information about the status and settings of the email channel for an application.',
  operationId: 'GetEmailChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEmailChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsEmailRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/email',
  description:
    'Enables the email channel for an application or updates the status and settings of the email channel for an application.',
  operationId: 'UpdateEmailChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EmailChannelRequest: z
                .object({
                  ConfigurationSet: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that you want to apply to messages that you send through the channel.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the email channel for the application.',
                      }),
                  ).exactOptional(),
                  FromAddress: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <p>The verified email address that you want to send email from when you send email through the channel.</p>',
                      }),
                  ).exactOptional(),
                  Identity: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.</p>',
                      }),
                  ).exactOptional(),
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <p>The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the email channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['EmailChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEmailChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsEmailRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/email',
  description:
    'Disables the email channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteEmailChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEmailChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdEndpointsEndpointIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/endpoints/{endpoint-id}',
  description:
    'Retrieves information about the settings and attributes of a specific endpoint for an application.',
  operationId: 'GetEndpoint',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'endpoint-id': z
        .string()
        .openapi({
          param: {
            name: 'endpoint-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the endpoint.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEndpointResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdEndpointsEndpointIdRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/endpoints/{endpoint-id}',
  description:
    'Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.',
  operationId: 'UpdateEndpoint',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'endpoint-id': z
        .string()
        .openapi({
          param: {
            name: 'endpoint-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the endpoint.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EndpointRequest: z
                .object({
                  Address: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.',
                      }),
                  ).exactOptional(),
                  Attributes: MapOfListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\\), and slash (/). The Amazon Pinpoint console can\'t display attribute names that contain these characters. This restriction doesn\'t apply to attribute values.</p>',
                      }),
                  ).exactOptional(),
                  ChannelType: ChannelTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The channel to use when sending messages or push notifications to the endpoint.',
                      }),
                  ).exactOptional(),
                  Demographic: EndpointDemographicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The demographic information for the endpoint, such as the time zone and platform.',
                      }),
                  ).exactOptional(),
                  EffectiveDate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The date and time, in ISO 8601 format, when the endpoint is updated.',
                      }),
                  ).exactOptional(),
                  EndpointStatus: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>',
                      }),
                  ).exactOptional(),
                  Location: EndpointLocationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The geographic information for the endpoint.' }),
                  ).exactOptional(),
                  Metrics: MapOfDoubleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.',
                      }),
                  ).exactOptional(),
                  OptOut: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.",
                      }),
                  ).exactOptional(),
                  RequestId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the most recent request to update the endpoint.',
                      }),
                  ).exactOptional(),
                  User: EndpointUserSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "One or more custom attributes that describe the user who's associated with the endpoint.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the channel type and other settings for an endpoint.',
                  required: [],
                }),
            })
            .openapi({ required: ['EndpointRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEndpointResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdEndpointsEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/endpoints/{endpoint-id}',
  description: 'Deletes an endpoint from an application.',
  operationId: 'DeleteEndpoint',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'endpoint-id': z
        .string()
        .openapi({
          param: {
            name: 'endpoint-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the endpoint.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEndpointResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdEventstreamRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/eventstream',
  description: 'Retrieves information about the event stream settings for an application.',
  operationId: 'GetEventStream',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventStreamResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdEventstreamRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/eventstream',
  description:
    'Creates a new event stream for an application or updates the settings of an existing event stream for an application.',
  operationId: 'PutEventStream',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteEventStream: z
                .object({
                  DestinationStreamArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>\n               </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>\n               </p>',
                      }),
                  ).exactOptional(),
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteEventStream'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutEventStreamResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdEventstreamRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/eventstream',
  description: 'Deletes the event stream for an application.',
  operationId: 'DeleteEventStream',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEventStreamResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsGcmRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/gcm',
  description:
    'Retrieves information about the status and settings of the GCM channel for an application.',
  operationId: 'GetGcmChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGcmChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsGcmRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/gcm',
  description:
    'Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.',
  operationId: 'UpdateGcmChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GCMChannelRequest: z
                .object({
                  ApiKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the GCM channel for the application.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.',
                  required: [],
                }),
            })
            .openapi({ required: ['GCMChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGcmChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsGcmRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/gcm',
  description:
    'Disables the GCM channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteGcmChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGcmChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJourneysJourneyIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/journeys/{journey-id}',
  description:
    'Retrieves information about the status, configuration, and other settings for a journey.',
  operationId: 'GetJourney',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'journey-id': z
        .string()
        .openapi({
          param: {
            name: 'journey-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the journey.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJourneyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdJourneysJourneyIdRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/journeys/{journey-id}',
  description: 'Updates the configuration and other settings for a journey.',
  operationId: 'UpdateJourney',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'journey-id': z
        .string()
        .openapi({
          param: {
            name: 'journey-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the journey.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteJourneyRequest: z
                .object({
                  Activities: MapOfActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 100 characters. The characters must be alphanumeric characters.',
                      }),
                  ).exactOptional(),
                  CreationDate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The date, in ISO 8601 format, when the journey was created.',
                      }),
                  ).exactOptional(),
                  LastModifiedDate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The date, in ISO 8601 format, when the journey was last modified.',
                      }),
                  ).exactOptional(),
                  Limits: JourneyLimitsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The messaging and entry limits for the journey.' }),
                  ).exactOptional(),
                  LocalTime: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.",
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.",
                      }),
                  ).exactOptional(),
                  QuietTime: QuietTimeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>",
                      }),
                  ).exactOptional(),
                  RefreshFrequency: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.',
                      }),
                  ).exactOptional(),
                  Schedule: JourneyScheduleSchema.and(
                    z.any().openapi({ description: 'The schedule settings for the journey.' }),
                  ).exactOptional(),
                  StartActivity: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for the first activity in the journey. The identifier for this activity can contain a maximum of 128 characters. The characters must be alphanumeric characters.',
                      }),
                  ).exactOptional(),
                  StartCondition: StartConditionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The segment that defines which users are participants in the journey.',
                      }),
                  ).exactOptional(),
                  State: StateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The status of the journey. Valid values are:</p> <ul><li><p>DRAFT - Saves the journey and doesn't publish it.</p></li> <li><p>ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li></ul> <p>PAUSED, CANCELLED, COMPLETED, and CLOSED states are not supported in requests to create or update a journey. To cancel, pause, or resume a journey, use the <link  linkend=\"apps-application-id-journeys-journey-id-state\">Journey State</link> resource.</p>",
                      }),
                  ).exactOptional(),
                  WaitForQuietTime: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.',
                      }),
                  ).exactOptional(),
                  RefreshOnSegmentUpdate: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether a journey should be refreshed on segment update.',
                      }),
                  ).exactOptional(),
                  JourneyChannelSettings: JourneyChannelSettingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The channel-specific configurations for the journey.',
                      }),
                  ).exactOptional(),
                  SendingSchedule: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates if journey have Advance Quiet Time (OpenHours and ClosedDays). This flag should be set to true in order to allow (OpenHours and ClosedDays)',
                      }),
                  ).exactOptional(),
                  OpenHours: OpenHoursSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.',
                      }),
                  ).exactOptional(),
                  ClosedDays: ClosedDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time when journey will stop sending messages. QuietTime should be configured first and SendingSchedule should be set to true.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the configuration and other settings for a journey.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteJourneyRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateJourneyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdJourneysJourneyIdRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/journeys/{journey-id}',
  description: 'Deletes a journey from an application.',
  operationId: 'DeleteJourney',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'journey-id': z
        .string()
        .openapi({
          param: {
            name: 'journey-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the journey.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteJourneyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1RecommendersRecommenderIdRoute = createRoute({
  method: 'get',
  path: '/v1/recommenders/{recommender-id}',
  description:
    'Retrieves information about an Amazon Pinpoint configuration for a recommender model.',
  operationId: 'GetRecommenderConfiguration',
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
      'recommender-id': z
        .string()
        .openapi({
          param: {
            name: 'recommender-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecommenderConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1RecommendersRecommenderIdRoute = createRoute({
  method: 'put',
  path: '/v1/recommenders/{recommender-id}',
  description: 'Updates an Amazon Pinpoint configuration for a recommender model.',
  operationId: 'UpdateRecommenderConfiguration',
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
      'recommender-id': z
        .string()
        .openapi({
          param: {
            name: 'recommender-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UpdateRecommenderConfiguration: z
                .object({
                  Attributes: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>",
                      }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).',
                      }),
                  ).exactOptional(),
                  RecommendationProviderIdType: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>",
                      }),
                  ).exactOptional(),
                  RecommendationProviderRoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.',
                      }),
                  ).exactOptional(),
                  RecommendationProviderUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.',
                      }),
                  ).exactOptional(),
                  RecommendationTransformerUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.",
                      }),
                  ).exactOptional(),
                  RecommendationsDisplayName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>",
                      }),
                  ).exactOptional(),
                  RecommendationsPerMessage: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.',
                  required: [],
                }),
            })
            .openapi({ required: ['UpdateRecommenderConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRecommenderConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1RecommendersRecommenderIdRoute = createRoute({
  method: 'delete',
  path: '/v1/recommenders/{recommender-id}',
  description: 'Deletes an Amazon Pinpoint configuration for a recommender model.',
  operationId: 'DeleteRecommenderConfiguration',
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
      'recommender-id': z
        .string()
        .openapi({
          param: {
            name: 'recommender-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRecommenderConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdSegmentsSegmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/segments/{segment-id}',
  description:
    "Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.",
  operationId: 'GetSegment',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'segment-id': z
        .string()
        .openapi({
          param: {
            name: 'segment-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the segment.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSegmentResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdSegmentsSegmentIdRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/segments/{segment-id}',
  description:
    "Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.",
  operationId: 'UpdateSegment',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'segment-id': z
        .string()
        .openapi({
          param: {
            name: 'segment-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the segment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteSegmentRequest: z
                .object({
                  Dimensions: SegmentDimensionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The criteria that define the dimensions for the segment.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'The name of the segment.' }),
                  ).exactOptional(),
                  SegmentGroups: SegmentGroupListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.",
                      }),
                  ).exactOptional(),
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteSegmentRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSegmentResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdSegmentsSegmentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/segments/{segment-id}',
  description: 'Deletes a segment from an application.',
  operationId: 'DeleteSegment',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'segment-id': z
        .string()
        .openapi({
          param: {
            name: 'segment-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the segment.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSegmentResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsSmsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/sms',
  description:
    'Retrieves information about the status and settings of the SMS channel for an application.',
  operationId: 'GetSmsChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSmsChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsSmsRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/sms',
  description:
    'Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.',
  operationId: 'UpdateSmsChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SMSChannelRequest: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the SMS channel for the application.',
                      }),
                  ).exactOptional(),
                  SenderId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The identity that you want to display on recipients' devices when they receive messages from the SMS channel.",
                      }),
                  ).exactOptional(),
                  ShortCode: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The registered short code that you want to use when you send messages through the SMS channel.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the SMS channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['SMSChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSmsChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsSmsRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/sms',
  description:
    'Disables the SMS channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteSmsChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSmsChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/users/{user-id}',
  description:
    'Retrieves information about all the endpoints that are associated with a specific user ID.',
  operationId: 'GetUserEndpoints',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: {
            name: 'user-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUserEndpointsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/users/{user-id}',
  description: 'Deletes all the endpoints that are associated with a specific user ID.',
  operationId: 'DeleteUserEndpoints',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: {
            name: 'user-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserEndpointsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsVoiceRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels/voice',
  description:
    'Retrieves information about the status and settings of the voice channel for an application.',
  operationId: 'GetVoiceChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdChannelsVoiceRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/channels/voice',
  description:
    'Enables the voice channel for an application or updates the status and settings of the voice channel for an application.',
  operationId: 'UpdateVoiceChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              VoiceChannelRequest: z
                .object({
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable the voice channel for the application.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the status and settings of the voice channel for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['VoiceChannelRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVoiceChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1AppsApplicationIdChannelsVoiceRoute = createRoute({
  method: 'delete',
  path: '/v1/apps/{application-id}/channels/voice',
  description:
    'Disables the voice channel for an application and deletes any existing settings for the channel.',
  operationId: 'DeleteVoiceChannel',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVoiceChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdKpisDaterangeKpiNameRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/kpis/daterange/{kpi-name}',
  description:
    'Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.',
  operationId: 'GetApplicationDateRangeKpi',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'kpi-name': z
        .string()
        .openapi({
          param: {
            name: 'kpi-name',
            in: 'path',
            required: true,
            description:
              'The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'end-time': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end-time',
            in: 'query',
            required: false,
            description:
              'The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'start-time': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start-time',
            in: 'query',
            required: false,
            description:
              'The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApplicationDateRangeKpiResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/settings',
  description: 'Retrieves information about the settings for an application.',
  operationId: 'GetApplicationSettings',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApplicationSettingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdSettingsRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/settings',
  description: 'Updates the settings for an application.',
  operationId: 'UpdateApplicationSettings',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WriteApplicationSettingsRequest: z
                .object({
                  CampaignHook: CampaignHookSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</p> <p>To override these settings and define custom settings for a specific campaign, use the CampaignHook object of the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource.</p>',
                      }),
                  ).exactOptional(),
                  CloudWatchMetricsEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to enable application-related alarms in Amazon CloudWatch.',
                      }),
                  ).exactOptional(),
                  EventTaggingEnabled: BooleanSchema.exactOptional(),
                  Limits: CampaignLimitsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default sending limits for campaigns in the application. To override these limits and define custom limits for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource, respectively.',
                      }),
                  ).exactOptional(),
                  QuietTime: QuietTimeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren\'t sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint\'s time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint\'s time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn\'t met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource to define a custom quiet time for the campaign or journey.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the default settings for an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['WriteApplicationSettingsRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApplicationSettingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdCampaignsCampaignIdActivitiesRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/campaigns/{campaign-id}/activities',
  description: 'Retrieves information about all the activities for a campaign.',
  operationId: 'GetCampaignActivities',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'campaign-id': z
        .string()
        .openapi({
          param: {
            name: 'campaign-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the campaign.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCampaignActivitiesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/campaigns/{campaign-id}/kpis/daterange/{kpi-name}',
  description:
    'Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.',
  operationId: 'GetCampaignDateRangeKpi',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'campaign-id': z
        .string()
        .openapi({
          param: {
            name: 'campaign-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the campaign.',
            schema: { type: 'string' },
          },
        }),
      'kpi-name': z
        .string()
        .openapi({
          param: {
            name: 'kpi-name',
            in: 'path',
            required: true,
            description:
              'The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'end-time': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end-time',
            in: 'query',
            required: false,
            description:
              'The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'start-time': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start-time',
            in: 'query',
            required: false,
            description:
              'The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCampaignDateRangeKpiResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/campaigns/{campaign-id}/versions/{version}',
  description:
    'Retrieves information about the status, configuration, and other settings for a specific version of a campaign.',
  operationId: 'GetCampaignVersion',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'campaign-id': z
        .string()
        .openapi({
          param: {
            name: 'campaign-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the campaign.',
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            description: 'The unique version number (Version property) for the campaign version.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCampaignVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdCampaignsCampaignIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/campaigns/{campaign-id}/versions',
  description:
    'Retrieves information about the status, configuration, and other settings for all versions of a campaign.',
  operationId: 'GetCampaignVersions',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'campaign-id': z
        .string()
        .openapi({
          param: {
            name: 'campaign-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the campaign.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCampaignVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdChannelsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/channels',
  description:
    'Retrieves information about the history and status of each channel for an application.',
  operationId: 'GetChannels',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChannelsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJobsExportJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/jobs/export/{job-id}',
  description:
    'Retrieves information about the status and settings of a specific export job for an application.',
  operationId: 'GetExportJob',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'job-id': z
        .string()
        .openapi({
          param: {
            name: 'job-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExportJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJobsImportJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/jobs/import/{job-id}',
  description:
    'Retrieves information about the status and settings of a specific import job for an application.',
  operationId: 'GetImportJob',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'job-id': z
        .string()
        .openapi({
          param: {
            name: 'job-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImportJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/endpoints/{endpoint-id}/inappmessages',
  description: 'Retrieves the in-app messages targeted for the provided endpoint ID.',
  operationId: 'GetInAppMessages',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'endpoint-id': z
        .string()
        .openapi({
          param: {
            name: 'endpoint-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the endpoint.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInAppMessagesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/journeys/{journey-id}/kpis/daterange/{kpi-name}',
  description:
    'Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.',
  operationId: 'GetJourneyDateRangeKpi',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'journey-id': z
        .string()
        .openapi({
          param: {
            name: 'journey-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the journey.',
            schema: { type: 'string' },
          },
        }),
      'kpi-name': z
        .string()
        .openapi({
          param: {
            name: 'kpi-name',
            in: 'path',
            required: true,
            description:
              'The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'end-time': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end-time',
            in: 'query',
            required: false,
            description:
              'The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'start-time': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start-time',
            in: 'query',
            required: false,
            description:
              'The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJourneyDateRangeKpiResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRoute =
  createRoute({
    method: 'get',
    path: '/v1/apps/{application-id}/journeys/{journey-id}/activities/{journey-activity-id}/execution-metrics',
    description:
      'Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.',
    operationId: 'GetJourneyExecutionActivityMetrics',
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
        'application-id': z
          .string()
          .openapi({
            param: {
              name: 'application-id',
              in: 'path',
              required: true,
              description:
                'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
              schema: { type: 'string' },
            },
          }),
        'journey-activity-id': z
          .string()
          .openapi({
            param: {
              name: 'journey-activity-id',
              in: 'path',
              required: true,
              description: 'The unique identifier for the journey activity.',
              schema: { type: 'string' },
            },
          }),
        'journey-id': z
          .string()
          .openapi({
            param: {
              name: 'journey-id',
              in: 'path',
              required: true,
              description: 'The unique identifier for the journey.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        'next-token': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'next-token',
              in: 'query',
              required: false,
              description:
                'The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
              schema: { type: 'string' },
            },
          }),
        'page-size': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'page-size',
              in: 'query',
              required: false,
              description:
                'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetJourneyExecutionActivityMetricsResponseSchema },
        },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      482: {
        description: 'PayloadTooLargeException',
        content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      485: {
        description: 'MethodNotAllowedException',
        content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
      },
      486: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/journeys/{journey-id}/execution-metrics',
  description:
    'Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.',
  operationId: 'GetJourneyExecutionMetrics',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'journey-id': z
        .string()
        .openapi({
          param: {
            name: 'journey-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the journey.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJourneyExecutionMetricsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdSegmentsSegmentIdJobsExportRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/segments/{segment-id}/jobs/export',
  description:
    'Retrieves information about the status and settings of the export jobs for a segment.',
  operationId: 'GetSegmentExportJobs',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'segment-id': z
        .string()
        .openapi({
          param: {
            name: 'segment-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the segment.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSegmentExportJobsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdSegmentsSegmentIdJobsImportRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/segments/{segment-id}/jobs/import',
  description:
    'Retrieves information about the status and settings of the import jobs for a segment.',
  operationId: 'GetSegmentImportJobs',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'segment-id': z
        .string()
        .openapi({
          param: {
            name: 'segment-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the segment.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSegmentImportJobsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/segments/{segment-id}/versions/{version}',
  description:
    "Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.",
  operationId: 'GetSegmentVersion',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'segment-id': z
        .string()
        .openapi({
          param: {
            name: 'segment-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the segment.',
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            description: 'The unique version number (Version property) for the campaign version.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSegmentVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1AppsApplicationIdSegmentsSegmentIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{application-id}/segments/{segment-id}/versions',
  description:
    "Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.",
  operationId: 'GetSegmentVersions',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'segment-id': z
        .string()
        .openapi({
          param: {
            name: 'segment-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the segment.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              'The NextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSegmentVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v1/tags/{resource-arn}',
  description:
    'Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
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
  },
})

export const postV1TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/v1/tags/{resource-arn}',
  description:
    'Adds one or more tags (keys and values) to an application, campaign, message template, or segment.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TagsModel: z
                .object({
                  tags: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, message template, or segment. Each of these resources can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the tags (keys and values) for an application, campaign, message template, or segment.',
                  required: [],
                }),
            })
            .openapi({ required: ['TagsModel'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV1TemplatesTemplateNameTemplateTypeVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/templates/{template-name}/{template-type}/versions',
  description: 'Retrieves information about all the versions of a specific message template.',
  operationId: 'ListTemplateVersions',
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
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
      'template-type': z
        .string()
        .openapi({
          param: {
            name: 'template-type',
            in: 'path',
            required: true,
            description:
              'The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTemplateVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1TemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/templates',
  description:
    'Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.',
  operationId: 'ListTemplates',
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
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      'page-size': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page-size',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.',
            schema: { type: 'string' },
          },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefix',
            in: 'query',
            required: false,
            description:
              'The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.',
            schema: { type: 'string' },
          },
        }),
      'template-type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'template-type',
            in: 'query',
            required: false,
            description:
              "The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTemplatesResponseSchema } },
    },
    480: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1PhoneNumberValidateRoute = createRoute({
  method: 'post',
  path: '/v1/phone/number/validate',
  description: 'Retrieves information about a phone number.',
  operationId: 'PhoneNumberValidate',
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
              NumberValidateRequest: z
                .object({
                  IsoCountryCode: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.',
                      }),
                  ).exactOptional(),
                  PhoneNumber: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies a phone number to validate and retrieve information about.',
                  required: [],
                }),
            })
            .openapi({ required: ['NumberValidateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PhoneNumberValidateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdEventsRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/events',
  description:
    'Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.',
  operationId: 'PutEvents',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EventsRequest: z
                .object({
                  BatchItem: MapOfEventsBatchSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Specifies a batch of events to process.', required: [] }),
            })
            .openapi({ required: ['EventsRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: PutEventsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdAttributesAttributeTypeRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/attributes/{attribute-type}',
  description:
    'Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.',
  operationId: 'RemoveAttributes',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'attribute-type': z
        .string()
        .openapi({
          param: {
            name: 'attribute-type',
            in: 'path',
            required: true,
            description:
              ' <p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UpdateAttributesRequest: z
                .object({
                  Blacklist: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies one or more attributes to remove from all the endpoints that are associated with an application.',
                  required: [],
                }),
            })
            .openapi({ required: ['UpdateAttributesRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveAttributesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdMessagesRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/messages',
  description: 'Creates and sends a direct message.',
  operationId: 'SendMessages',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MessageRequest: z
                .object({
                  Addresses: MapOfAddressConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A map of key-value pairs, where each key is an address and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object. An address can be a push notification token, a phone number, or an email address. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object to tailor the message for an address by specifying settings such as content overrides and message variables.',
                      }),
                  ).exactOptional(),
                  Context: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.',
                      }),
                  ).exactOptional(),
                  Endpoints: MapOfEndpointSendConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A map of key-value pairs, where each key is an endpoint ID and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.',
                      }),
                  ).exactOptional(),
                  MessageConfiguration: DirectMessageConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The settings and content for the default message and any default messages that you defined for specific channels.',
                      }),
                  ).exactOptional(),
                  TemplateConfiguration: TemplateConfigurationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The message template to use for the message.' }),
                  ).exactOptional(),
                  TraceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for tracing the message. This identifier is visible to message recipients.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the configuration and other settings for a message.',
                  required: [],
                }),
            })
            .openapi({ required: ['MessageRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendMessagesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdOtpRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/otp',
  description: 'Send an OTP message',
  operationId: 'SendOTPMessage',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description: 'The unique ID of your Amazon Pinpoint application.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SendOTPMessageRequestParameters: z
                .object({
                  AllowedAttempts: IntegerSchema.and(
                    z.any().openapi({ description: 'The attempts allowed to validate an OTP.' }),
                  ).exactOptional(),
                  BrandName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The brand name that will be substituted into the OTP message body. Should be owned by calling AWS account.',
                      }),
                  ).exactOptional(),
                  Channel: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Channel type for the OTP message. Supported values: [SMS].',
                      }),
                  ).exactOptional(),
                  CodeLength: IntegerSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The number of characters in the generated OTP.' }),
                  ).exactOptional(),
                  DestinationIdentity: StringSchema.and(
                    z.any().openapi({ description: 'The destination identity to send OTP to.' }),
                  ).exactOptional(),
                  EntityId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique Entity ID received from DLT after entity registration is approved.',
                      }),
                  ).exactOptional(),
                  Language: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The language to be used for the outgoing message body containing the OTP.',
                      }),
                  ).exactOptional(),
                  OriginationIdentity: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The origination identity used to send OTP from.' }),
                  ).exactOptional(),
                  ReferenceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Developer-specified reference identifier. Required to match during OTP verification.',
                      }),
                  ).exactOptional(),
                  TemplateId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A unique Template ID received from DLT after entity registration is approved.',
                      }),
                  ).exactOptional(),
                  ValidityPeriod: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The time in minutes before the OTP is no longer valid.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Send OTP message request parameters.', required: [] }),
            })
            .openapi({ required: ['SendOTPMessageRequestParameters'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendOTPMessageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdUsersMessagesRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/users-messages',
  description: 'Creates and sends a message to a list of users.',
  operationId: 'SendUsersMessages',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SendUsersMessageRequest: z
                .object({
                  Context: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.',
                      }),
                  ).exactOptional(),
                  MessageConfiguration: DirectMessageConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The settings and content for the default message and any default messages that you defined for specific channels.',
                      }),
                  ).exactOptional(),
                  TemplateConfiguration: TemplateConfigurationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The message template to use for the message.' }),
                  ).exactOptional(),
                  TraceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The unique identifier for tracing the message. This identifier is visible to message recipients.',
                      }),
                  ).exactOptional(),
                  Users: MapOfEndpointSendConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A map that associates user IDs with <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> objects. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for a user by specifying settings such as content overrides and message variables.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.',
                  required: [],
                }),
            })
            .openapi({ required: ['SendUsersMessageRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendUsersMessagesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1TagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/v1/tags/{resource-arn}#tagKeys',
  description:
    'Removes one or more tags (keys and values) from an application, campaign, message template, or segment.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
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
              'The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const putV1AppsApplicationIdEndpointsRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/endpoints',
  description:
    'Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.',
  operationId: 'UpdateEndpointsBatch',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EndpointBatchRequest: z
                .object({
                  Item: ListOfEndpointBatchItemSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.',
                  required: [],
                }),
            })
            .openapi({ required: ['EndpointBatchRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEndpointsBatchResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1AppsApplicationIdJourneysJourneyIdStateRoute = createRoute({
  method: 'put',
  path: '/v1/apps/{application-id}/journeys/{journey-id}/state',
  description: 'Cancels (stops) an active journey.',
  operationId: 'UpdateJourneyState',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.',
            schema: { type: 'string' },
          },
        }),
      'journey-id': z
        .string()
        .openapi({
          param: {
            name: 'journey-id',
            in: 'path',
            required: true,
            description: 'The unique identifier for the journey.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              JourneyStateRequest: z
                .object({
                  State: StateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The status of the journey. Currently, Supported values are ACTIVE, PAUSED, and CANCELLED</p> <p>If you cancel a journey, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Amazon Pinpoint also continues to collect and aggregate analytics data for those activities, until they are complete, and any activities that were complete when you cancelled the journey.</p> <p>After you cancel a journey, you can't add, change, or remove any activities from the journey. In addition, Amazon Pinpoint stops evaluating the journey and doesn't perform any activities that haven't started.</p> <p>When the journey is paused, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Endpoints will stop entering journeys when the journey is paused and will resume entering the journey after the journey is resumed. For wait activities, wait time is paused when the journey is paused. Currently, PAUSED only supports journeys with a segment refresh interval.</p>",
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Changes the status of a journey.', required: [] }),
            })
            .openapi({ required: ['JourneyStateRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateJourneyStateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1TemplatesTemplateNameTemplateTypeActiveVersionRoute = createRoute({
  method: 'put',
  path: '/v1/templates/{template-name}/{template-type}/active-version',
  description: 'Changes the status of a specific version of a message template to <i>active</i>.',
  operationId: 'UpdateTemplateActiveVersion',
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
      'template-name': z
        .string()
        .openapi({
          param: {
            name: 'template-name',
            in: 'path',
            required: true,
            description:
              'The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
            schema: { type: 'string' },
          },
        }),
      'template-type': z
        .string()
        .openapi({
          param: {
            name: 'template-type',
            in: 'path',
            required: true,
            description:
              'The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TemplateActiveVersionRequest: z
                .object({
                  Version: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The version of the message template to use as the active version of the template. Valid values are: latest, for the most recent version of the template; or, the unique identifier for any existing version of the template. If you specify an identifier, the value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies which version of a message template to use as the active version of the template.',
                  required: [],
                }),
            })
            .openapi({ required: ['TemplateActiveVersionRequest'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTemplateActiveVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1AppsApplicationIdVerifyOtpRoute = createRoute({
  method: 'post',
  path: '/v1/apps/{application-id}/verify-otp',
  description: 'Verify an OTP',
  operationId: 'VerifyOTPMessage',
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
      'application-id': z
        .string()
        .openapi({
          param: {
            name: 'application-id',
            in: 'path',
            required: true,
            description: 'The unique ID of your Amazon Pinpoint application.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              VerifyOTPMessageRequestParameters: z
                .object({
                  DestinationIdentity: StringSchema.and(
                    z.any().openapi({ description: 'The destination identity to send OTP to.' }),
                  ).exactOptional(),
                  Otp: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The OTP the end user provided for verification.' }),
                  ).exactOptional(),
                  ReferenceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The reference identifier provided when the OTP was previously sent.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Verify OTP message request.', required: [] }),
            })
            .openapi({ required: ['VerifyOTPMessageRequestParameters'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifyOTPMessageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})
