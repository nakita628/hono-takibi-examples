import { createRoute, z } from '@hono/zod-openapi'

const QueryIdentifierSchema = z.string().min(1).max(255).openapi('QueryIdentifier')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimestampListSchema = z.array(TimestampSchema).openapi('TimestampList')

const CounterSchema = z.int().openapi('Counter')

const MetricValueListSchema = z.array(CounterSchema).openapi('MetricValueList')

const MetricDataResultSchema = z
  .object({
    Id: QueryIdentifierSchema.and(
      z.any().openapi({ description: 'The query identifier.' }),
    ).exactOptional(),
    Timestamps: TimestampListSchema.and(
      z.any().openapi({ description: 'A list of timestamps for the metric data results.' }),
    ).exactOptional(),
    Values: MetricValueListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of values (cumulative / sum) for the metric data results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of a single metric data query.', required: [] })
  .openapi('MetricDataResult')

const MetricDataResultListSchema = z.array(MetricDataResultSchema).openapi('MetricDataResultList')

const QueryErrorCodeSchema = z.enum(['INTERNAL_FAILURE', 'ACCESS_DENIED']).openapi('QueryErrorCode')

const QueryErrorMessageSchema = z.string().openapi('QueryErrorMessage')

const MetricDataErrorSchema = z
  .object({
    Id: QueryIdentifierSchema.and(
      z.any().openapi({ description: 'The query identifier.' }),
    ).exactOptional(),
    Code: QueryErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The query error code. Can be one of:</p> <ul> <li> <p> <code>INTERNAL_FAILURE</code> – Amazon SES has failed to process one of the queries.</p> </li> <li> <p> <code>ACCESS_DENIED</code> – You have insufficient access to retrieve metrics based on the given query.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Message: QueryErrorMessageSchema.and(
      z
        .any()
        .openapi({ description: 'The error message associated with the current query error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An error corresponding to the unsuccessful processing of a single metric data query.',
    required: [],
  })
  .openapi('MetricDataError')

const MetricDataErrorListSchema = z.array(MetricDataErrorSchema).openapi('MetricDataErrorList')

const BatchGetMetricDataResponseSchema = z
  .object({
    Results: MetricDataResultListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of successfully retrieved <code>MetricDataResult</code>.',
        }),
    ).exactOptional(),
    Errors: MetricDataErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>MetricDataError</code> encountered while processing your metric data batch request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the result of processing your metric data batch request',
    required: [],
  })
  .openapi('BatchGetMetricDataResponse')

const MetricNamespaceSchema = z.literal('VDM').openapi('MetricNamespace')

const MetricSchema = z
  .enum([
    'SEND',
    'COMPLAINT',
    'PERMANENT_BOUNCE',
    'TRANSIENT_BOUNCE',
    'OPEN',
    'CLICK',
    'DELIVERY',
    'DELIVERY_OPEN',
    'DELIVERY_CLICK',
    'DELIVERY_COMPLAINT',
  ])
  .openapi('Metric')

const MetricDimensionValueSchema = z.string().openapi('MetricDimensionValue')

const DimensionsSchema = z
  .record(z.string(), MetricDimensionValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 3)
  .openapi('Dimensions')

const BatchGetMetricDataQuerySchema = z
  .object({
    Id: QueryIdentifierSchema.and(z.any().openapi({ description: 'The query identifier.' })),
    Namespace: MetricNamespaceSchema.and(
      z.any().openapi({ description: 'The query namespace - e.g. <code>VDM</code> ' }),
    ),
    Metric: MetricSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The queried metric. This can be one of the following:</p> <ul> <li> <p> <code>SEND</code> – Emails sent eligible for tracking in the VDM dashboard. This excludes emails sent to the mailbox simulator and emails addressed to more than one recipient.</p> </li> <li> <p> <code>COMPLAINT</code> – Complaints received for your account. This excludes complaints from the mailbox simulator, those originating from your account-level suppression list (if enabled), and those for emails addressed to more than one recipient</p> </li> <li> <p> <code>PERMANENT_BOUNCE</code> – Permanent bounces - i.e. feedback received for emails sent to non-existent mailboxes. Excludes bounces from the mailbox simulator, those originating from your account-level suppression list (if enabled), and those for emails addressed to more than one recipient.</p> </li> <li> <p> <code>TRANSIENT_BOUNCE</code> – Transient bounces - i.e. feedback received for delivery failures excluding issues with non-existent mailboxes. Excludes bounces from the mailbox simulator, and those for emails addressed to more than one recipient.</p> </li> <li> <p> <code>OPEN</code> – Unique open events for emails including open trackers. Excludes opens for emails addressed to more than one recipient.</p> </li> <li> <p> <code>CLICK</code> – Unique click events for emails including wrapped links. Excludes clicks for emails addressed to more than one recipient.</p> </li> <li> <p> <code>DELIVERY</code> – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator and for emails addressed to more than one recipient.</p> </li> <li> <p> <code>DELIVERY_OPEN</code> – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails without open trackers.</p> </li> <li> <p> <code>DELIVERY_CLICK</code> – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails without click trackers.</p> </li> <li> <p> <code>DELIVERY_COMPLAINT</code> – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails addressed to recipients hosted by ISPs with which Amazon SES does not have a feedback loop agreement.</p> </li> </ul>',
        }),
    ),
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains mapping between <code>MetricDimensionName</code> and <code>MetricDimensionValue</code> to filter metrics by.',
        }),
    ).exactOptional(),
    StartDate: TimestampSchema.and(
      z.any().openapi({ description: 'Represents the start date for the query interval.' }),
    ),
    EndDate: TimestampSchema.and(
      z.any().openapi({ description: 'Represents the end date for the query interval.' }),
    ),
  })
  .openapi({
    required: ['Id', 'Namespace', 'Metric', 'StartDate', 'EndDate'],
    description: 'Represents a single metric data query to include in a batch.',
  })
  .openapi('BatchGetMetricDataQuery')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const CreateConfigurationSetResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('CreateConfigurationSetResponse')

const CustomRedirectDomainSchema = z
  .string()
  .openapi({ description: 'The domain to use for tracking open and click events.' })
  .openapi('CustomRedirectDomain')

const TlsPolicySchema = z
  .enum(['REQUIRE', 'OPTIONAL'])
  .openapi({
    description:
      "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.",
  })
  .openapi('TlsPolicy')

const PoolNameSchema = z
  .string()
  .openapi({ description: 'The name of a dedicated IP pool.' })
  .openapi('PoolName')

const EnabledSchema = z.boolean().openapi('Enabled')

const LastFreshStartSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.',
  })
  .openapi('LastFreshStart')

const TagKeySchema = z.string().openapi('TagKey')

const TagValueSchema = z.string().openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that defines a tag. The maximum length of a tag key is 128 characters. The minimum length is 1 character.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don't want a resource to have a specific tag value, don't specify a value for this parameter. If you don't specify a value, Amazon SES sets the value to an empty string.",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      "<p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by Amazon Web Services; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your Amazon Web Services account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified Amazon Web Services Region for your Amazon Web Services account.</p> </li> </ul>",
  })
  .openapi('Tag')

const SuppressionListReasonSchema = z
  .enum(['BOUNCE', 'COMPLAINT'])
  .openapi({
    description:
      '<p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>',
  })
  .openapi('SuppressionListReason')

const SuppressionListReasonsSchema = z
  .array(SuppressionListReasonSchema)
  .openapi('SuppressionListReasons')

const FeatureStatusSchema = z.enum(['ENABLED', 'DISABLED']).openapi('FeatureStatus')

const DashboardOptionsSchema = z
  .object({
    EngagementMetrics: FeatureStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the status of your VDM engagement metrics collection. Can be one of the following:</p> <ul> <li> <p> <code>ENABLED</code> – Amazon SES enables engagement metrics for the configuration set.</p> </li> <li> <p> <code>DISABLED</code> – Amazon SES disables engagement metrics for the configuration set.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object containing additional settings for your VDM configuration as applicable to the Dashboard.',
    required: [],
  })
  .openapi('DashboardOptions')

const GuardianOptionsSchema = z
  .object({
    OptimizedSharedDelivery: FeatureStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the status of your VDM optimized shared delivery. Can be one of the following:</p> <ul> <li> <p> <code>ENABLED</code> – Amazon SES enables optimized shared delivery for the configuration set.</p> </li> <li> <p> <code>DISABLED</code> – Amazon SES disables optimized shared delivery for the configuration set.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object containing additional settings for your VDM configuration as applicable to the Guardian.',
    required: [],
  })
  .openapi('GuardianOptions')

const AlreadyExistsExceptionSchema = z.any().openapi('AlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const CreateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('CreateConfigurationSetEventDestinationResponse')

const EventTypeSchema = z
  .enum([
    'SEND',
    'REJECT',
    'BOUNCE',
    'COMPLAINT',
    'DELIVERY',
    'OPEN',
    'CLICK',
    'RENDERING_FAILURE',
    'DELIVERY_DELAY',
    'SUBSCRIPTION',
  ])
  .openapi({
    description:
      'An email sending event type. For example, email sends, opens, and bounces are all email events.',
  })
  .openapi('EventType')

const EventTypesSchema = z.array(EventTypeSchema).openapi('EventTypes')

const AmazonResourceNameSchema = z.string().openapi('AmazonResourceName')

const KinesisFirehoseDestinationSchema = z
  .object({
    IamRoleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream.',
        }),
    ),
    DeliveryStreamArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email events to.',
        }),
    ),
  })
  .openapi({
    required: ['IamRoleArn', 'DeliveryStreamArn'],
    description:
      'An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.',
  })
  .openapi('KinesisFirehoseDestination')

const DimensionNameSchema = z
  .string()
  .openapi({
    description:
      '<p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>',
  })
  .openapi('DimensionName')

const DimensionValueSourceSchema = z
  .enum(['MESSAGE_TAG', 'EMAIL_HEADER', 'LINK_TAG'])
  .openapi({
    description:
      'The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. To use your own email headers, choose <code>emailHeader</code>. To use link tags, choose <code>linkTags</code>.',
  })
  .openapi('DimensionValueSource')

const DefaultDimensionValueSchema = z
  .string()
  .openapi({
    description:
      "<p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>",
  })
  .openapi('DefaultDimensionValue')

const CloudWatchDimensionConfigurationSchema = z
  .object({
    DimensionName: DimensionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>',
        }),
    ),
    DimensionValueSource: DimensionValueSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. To use your own email headers, choose <code>emailHeader</code>. To use link tags, choose <code>linkTags</code>.',
        }),
    ),
    DefaultDimensionValue: DefaultDimensionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>Can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-), at signs (@), and periods (.).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['DimensionName', 'DimensionValueSource', 'DefaultDimensionValue'],
    description:
      'An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.',
  })
  .openapi('CloudWatchDimensionConfiguration')

const CloudWatchDimensionConfigurationsSchema = z
  .array(CloudWatchDimensionConfigurationSchema)
  .openapi('CloudWatchDimensionConfigurations')

const CloudWatchDestinationSchema = z
  .object({
    DimensionConfigurations: CloudWatchDimensionConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.',
        }),
    ),
  })
  .openapi({
    required: ['DimensionConfigurations'],
    description:
      'An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.',
  })
  .openapi('CloudWatchDestination')

const SnsDestinationSchema = z
  .object({
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic to publish email events to. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ),
  })
  .openapi({
    required: ['TopicArn'],
    description:
      'An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.',
  })
  .openapi('SnsDestination')

const PinpointDestinationSchema = z
  .object({
    ApplicationArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Pinpoint project to send email events to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.',
    required: [],
  })
  .openapi('PinpointDestination')

const CreateContactResponseSchema = z.object({}).openapi('CreateContactResponse')

const TopicNameSchema = z.string().openapi('TopicName')

const SubscriptionStatusSchema = z.enum(['OPT_IN', 'OPT_OUT']).openapi('SubscriptionStatus')

const TopicPreferenceSchema = z
  .object({
    TopicName: TopicNameSchema.and(z.any().openapi({ description: 'The name of the topic.' })),
    SubscriptionStatus: SubscriptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The contact's subscription status to a topic which is either <code>OPT_IN</code> or <code>OPT_OUT</code>.",
        }),
    ),
  })
  .openapi({
    required: ['TopicName', 'SubscriptionStatus'],
    description: "The contact's preference for being opted-in to or opted-out of a topic.",
  })
  .openapi('TopicPreference')

const CreateContactListResponseSchema = z.object({}).openapi('CreateContactListResponse')

const DisplayNameSchema = z.string().openapi('DisplayName')

const DescriptionSchema = z.string().openapi('Description')

const TopicSchema = z
  .object({
    TopicName: TopicNameSchema.and(z.any().openapi({ description: 'The name of the topic.' })),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name of the topic the contact will see.' }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of what the topic is about, which the contact will see.',
        }),
    ).exactOptional(),
    DefaultSubscriptionStatus: SubscriptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default subscription status to be applied to a contact if the contact has not noted their preference for subscribing to a topic.',
        }),
    ),
  })
  .openapi({
    required: ['TopicName', 'DisplayName', 'DefaultSubscriptionStatus'],
    description:
      'An interest group, theme, or label within a list. Lists can have multiple topics.',
  })
  .openapi('Topic')

const CreateCustomVerificationEmailTemplateResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('CreateCustomVerificationEmailTemplateResponse')

const CreateDedicatedIpPoolResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('CreateDedicatedIpPoolResponse')

const ReportIdSchema = z
  .string()
  .openapi({ description: 'A unique string that identifies a Deliverability dashboard report.' })
  .openapi('ReportId')

const DeliverabilityTestStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETED'])
  .openapi({
    description:
      'The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.',
  })
  .openapi('DeliverabilityTestStatus')

const CreateDeliverabilityTestReportResponseSchema = z
  .object({
    ReportId: ReportIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique string that identifies the predictive inbox placement test.',
        }),
    ),
    DeliverabilityTestStatus: DeliverabilityTestStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> to view the results of the test.',
        }),
    ),
  })
  .openapi({
    required: ['ReportId', 'DeliverabilityTestStatus'],
    description: 'Information about the predictive inbox placement test that you created.',
  })
  .openapi('CreateDeliverabilityTestReportResponse')

const MessageDataSchema = z.string().openapi('MessageData')

const CharsetSchema = z.string().openapi('Charset')

const ContentSchema = z
  .object({
    Data: MessageDataSchema.and(
      z.any().openapi({ description: 'The content of the message itself.' }),
    ),
    Charset: CharsetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The character set for the content. Because of the constraints of the SMTP protocol, Amazon SES uses 7-bit ASCII by default. If the text includes characters outside of the ASCII range, you have to specify a character set. For example, you could specify <code>UTF-8</code>, <code>ISO-8859-1</code>, or <code>Shift_JIS</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Data'],
    description:
      'An object that represents the content of the email, and optionally a character set specification.',
  })
  .openapi('Content')

const BodySchema = z
  .object({
    Text: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that represents the version of the message that is displayed in email clients that don't support HTML, or clients where the recipient has disabled HTML rendering.",
        }),
    ).exactOptional(),
    Html: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the version of the message that is displayed in email clients that support HTML. HTML messages can include formatted text, hyperlinks, images, and more. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the body of the email message.', required: [] })
  .openapi('Body')

const MessageSchema = z
  .object({
    Subject: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject line of the email. The subject line can only contain 7-bit ASCII characters. However, you can specify non-ASCII characters in the subject line by using encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>.',
        }),
    ),
    Body: BodySchema.and(
      z
        .any()
        .openapi({
          description:
            'The body of the message. You can specify an HTML version of the message, a text-only version of the message, or both.',
        }),
    ),
  })
  .openapi({
    required: ['Subject', 'Body'],
    description:
      "Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.",
  })
  .openapi('Message')

const RawMessageDataSchema = z
  .string()
  .openapi({
    description:
      '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
  })
  .openapi('RawMessageData')

const RawMessageSchema = z
  .object({
    Data: RawMessageDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that the Amazon SES supports.</p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['Data'], description: 'Represents the raw content of an email message.' })
  .openapi('RawMessage')

const EmailTemplateNameSchema = z
  .string()
  .min(1)
  .openapi({
    description:
      'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
  })
  .openapi('EmailTemplateName')

const EmailTemplateDataSchema = z
  .string()
  .max(262144)
  .openapi({
    description:
      'An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.',
  })
  .openapi('EmailTemplateData')

const TemplateSchema = z
  .object({
    TemplateName: EmailTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations. ',
        }),
    ).exactOptional(),
    TemplateArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the template.' }),
    ).exactOptional(),
    TemplateData: EmailTemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.',
    required: [],
  })
  .openapi('Template')

const AccountSuspendedExceptionSchema = z.any().openapi('AccountSuspendedException')

const SendingPausedExceptionSchema = z.any().openapi('SendingPausedException')

const MessageRejectedSchema = z.any().openapi('MessageRejected')

const MailFromDomainNotVerifiedExceptionSchema = z
  .any()
  .openapi('MailFromDomainNotVerifiedException')

const IdentityTypeSchema = z
  .enum(['EMAIL_ADDRESS', 'DOMAIN', 'MANAGED_DOMAIN'])
  .openapi('IdentityType')

const DkimStatusSchema = z
  .enum(['PENDING', 'SUCCESS', 'FAILED', 'TEMPORARY_FAILURE', 'NOT_STARTED'])
  .openapi({
    description:
      "<p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>",
  })
  .openapi('DkimStatus')

const DnsTokenSchema = z.string().openapi('DnsToken')

const DnsTokenListSchema = z.array(DnsTokenSchema).openapi('DnsTokenList')

const DkimSigningAttributesOriginSchema = z
  .enum(['AWS_SES', 'EXTERNAL'])
  .openapi('DkimSigningAttributesOrigin')

const DkimSigningKeyLengthSchema = z
  .enum(['RSA_1024_BIT', 'RSA_2048_BIT'])
  .openapi('DkimSigningKeyLength')

const DkimAttributesSchema = z
  .object({
    SigningEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the value is <code>true</code>, then the messages that you send from the identity are signed using DKIM. If the value is <code>false</code>, then the messages that you send from the identity aren't DKIM-signed.",
        }),
    ).exactOptional(),
    Status: DkimStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Describes whether or not Amazon SES has successfully located the DKIM records in the DNS records for the domain. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Tokens: DnsTokenListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete.</p> <p>If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector for the public key.</p> <p>Regardless of the DKIM authentication method you use, Amazon SES searches for the appropriate records in the DNS configuration of the domain for up to 72 hours.</p>',
        }),
    ).exactOptional(),
    SigningAttributesOrigin: DkimSigningAttributesOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that indicates how DKIM was configured for the identity. These are the possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Indicates that DKIM was configured for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Indicates that DKIM was configured for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>',
        }),
    ).exactOptional(),
    NextSigningKeyLength: DkimSigningKeyLengthSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.',
        }),
    ).exactOptional(),
    CurrentSigningKeyLength: DkimSigningKeyLengthSchema.and(
      z.any().openapi({ description: '[Easy DKIM] The key length of the DKIM key pair in use.' }),
    ).exactOptional(),
    LastKeyGenerationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: '[Easy DKIM] The last time a key pair was generated for this identity.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that\'s paired with the private key that you specified in the process of creating the identity</p>',
    required: [],
  })
  .openapi('DkimAttributes')

const CreateEmailIdentityResponseSchema = z
  .object({
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email identity type. Note: the <code>MANAGED_DOMAIN</code> identity type is not supported.',
        }),
    ).exactOptional(),
    VerifiedForSendingStatus: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether or not the identity is verified. You can only send email from verified email addresses or domains. For more information about verifying identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.',
        }),
    ).exactOptional(),
    DkimAttributes: DkimAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the DKIM attributes for the identity.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>',
    required: [],
  })
  .openapi('CreateEmailIdentityResponse')

const SelectorSchema = z
  .string()
  .regex(/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]))$/)
  .min(1)
  .max(63)
  .openapi('Selector')

const PrivateKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9+\/]+={0,2}$/)
  .min(1)
  .max(20480)
  .openapi('PrivateKey')

const CreateEmailIdentityPolicyResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('CreateEmailIdentityPolicyResponse')

const CreateEmailTemplateResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('CreateEmailTemplateResponse')

const EmailTemplateSubjectSchema = z
  .string()
  .openapi({ description: 'The subject line of the email.' })
  .openapi('EmailTemplateSubject')

const EmailTemplateTextSchema = z
  .string()
  .openapi({
    description:
      'The email body that will be visible to recipients whose email clients do not display HTML.',
  })
  .openapi('EmailTemplateText')

const EmailTemplateHtmlSchema = z
  .string()
  .openapi({ description: 'The HTML body of the email.' })
  .openapi('EmailTemplateHtml')

const JobIdSchema = z
  .string()
  .min(1)
  .openapi({ description: 'A string that represents the import job ID.' })
  .openapi('JobId')

const CreateImportJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'A string that represents the import job ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
    required: [],
  })
  .openapi('CreateImportJobResponse')

const SuppressionListImportActionSchema = z
  .enum(['DELETE', 'PUT'])
  .openapi({
    description:
      '<p>The type of action to perform on the address. The following are possible values:</p> <ul> <li> <p>PUT: add the addresses to the suppression list.</p> </li> <li> <p>DELETE: remove the address from the suppression list.</p> </li> </ul>',
  })
  .openapi('SuppressionListImportAction')

const SuppressionListDestinationSchema = z
  .object({
    SuppressionListImportAction: SuppressionListImportActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of action to perform on the address. The following are possible values:</p> <ul> <li> <p>PUT: add the addresses to the suppression list. If the record already exists, it will override it with the new value.</p> </li> <li> <p>DELETE: remove the addresses from the suppression list.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['SuppressionListImportAction'],
    description: 'An object that contains details about the action of suppression list.',
  })
  .openapi('SuppressionListDestination')

const ContactListNameSchema = z.string().openapi('ContactListName')

const ContactListImportActionSchema = z.enum(['DELETE', 'PUT']).openapi('ContactListImportAction')

const ContactListDestinationSchema = z
  .object({
    ContactListName: ContactListNameSchema.and(
      z.any().openapi({ description: 'The name of the contact list.' }),
    ),
    ContactListImportAction: ContactListImportActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>&gt;The type of action to perform on the addresses. The following are the possible values:</p> <ul> <li> <p>PUT: add the addresses to the contact list. If the record already exists, it will override it with the new value.</p> </li> <li> <p>DELETE: remove the addresses from the contact list.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['ContactListName', 'ContactListImportAction'],
    description: 'An object that contains details about the action of a contact list.',
  })
  .openapi('ContactListDestination')

const S3UrlSchema = z
  .string()
  .regex(/^s3:\/\/([^\/]+)\/(.*?([^\/]+)\/?)$/)
  .openapi({
    description:
      'An Amazon S3 URL in the format s3://<i>&lt;bucket_name&gt;</i>/<i>&lt;object&gt;</i>.',
  })
  .openapi('S3Url')

const DataFormatSchema = z
  .enum(['CSV', 'JSON'])
  .openapi({ description: "The data format of the import job's data source." })
  .openapi('DataFormat')

const DeleteConfigurationSetResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('DeleteConfigurationSetResponse')

const DeleteConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('DeleteConfigurationSetEventDestinationResponse')

const DeleteContactResponseSchema = z.object({}).openapi('DeleteContactResponse')

const DeleteContactListResponseSchema = z.object({}).openapi('DeleteContactListResponse')

const DeleteCustomVerificationEmailTemplateResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('DeleteCustomVerificationEmailTemplateResponse')

const DeleteDedicatedIpPoolResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('DeleteDedicatedIpPoolResponse')

const DeleteEmailIdentityResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('DeleteEmailIdentityResponse')

const DeleteEmailIdentityPolicyResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('DeleteEmailIdentityPolicyResponse')

const DeleteEmailTemplateResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('DeleteEmailTemplateResponse')

const DeleteSuppressedDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('DeleteSuppressedDestinationResponse')

const GeneralEnforcementStatusSchema = z.string().openapi('GeneralEnforcementStatus')

const Max24HourSendSchema = z.float64().openapi('Max24HourSend')

const MaxSendRateSchema = z.float64().openapi('MaxSendRate')

const SentLast24HoursSchema = z.float64().openapi('SentLast24Hours')

const SendQuotaSchema = z
  .object({
    Max24HourSend: Max24HourSendSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of emails that you can send in the current Amazon Web Services Region over a 24-hour period. A value of -1 signifies an unlimited quota. (This value is also referred to as your <i>sending quota</i>.)',
        }),
    ).exactOptional(),
    MaxSendRate: MaxSendRateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of emails that you can send per second in the current Amazon Web Services Region. This value is also called your <i>maximum sending rate</i> or your <i>maximum TPS (transactions per second) rate</i>.',
        }),
    ).exactOptional(),
    SentLast24Hours: SentLast24HoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of emails sent from your Amazon SES account in the current Amazon Web Services Region over the past 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region.',
    required: [],
  })
  .openapi('SendQuota')

const SuppressionAttributesSchema = z
  .object({
    SuppressedReasons: SuppressionListReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region.',
    required: [],
  })
  .openapi('SuppressionAttributes')

const MailTypeSchema = z.enum(['MARKETING', 'TRANSACTIONAL']).openapi('MailType')

const WebsiteURLSchema = z
  .string()
  .regex(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)
  .min(1)
  .max(1000)
  .openapi('WebsiteURL')

const ContactLanguageSchema = z.enum(['EN', 'JA']).openapi('ContactLanguage')

const UseCaseDescriptionSchema = z.string().min(1).max(5000).openapi('UseCaseDescription')

const AdditionalContactEmailAddressSchema = z
  .string()
  .regex(/^(.+)@(.+)$/)
  .min(6)
  .max(254)
  .openapi('AdditionalContactEmailAddress')

const AdditionalContactEmailAddressesSchema = z
  .array(AdditionalContactEmailAddressSchema)
  .min(1)
  .max(4)
  .openapi('AdditionalContactEmailAddresses')

const ReviewStatusSchema = z
  .enum(['PENDING', 'FAILED', 'GRANTED', 'DENIED'])
  .openapi('ReviewStatus')

const CaseIdSchema = z.string().openapi('CaseId')

const ReviewDetailsSchema = z
  .object({
    Status: ReviewStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the latest review of your account. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – We have received your appeal and are in the process of reviewing it.</p> </li> <li> <p> <code>GRANTED</code> – Your appeal has been reviewed and your production access has been granted.</p> </li> <li> <p> <code>DENIED</code> – Your appeal has been reviewed and your production access has been denied.</p> </li> <li> <p> <code>FAILED</code> – An internal error occurred and we didn't receive your appeal. You can submit your appeal again.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CaseId: CaseIdSchema.and(
      z.any().openapi({ description: 'The associated support center case ID (if any).' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains information about your account details review.',
    required: [],
  })
  .openapi('ReviewDetails')

const AccountDetailsSchema = z
  .object({
    MailType: MailTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of email your account is sending. The mail type can be one of the following:</p> <ul> <li> <p> <code>MARKETING</code> – Most of your sending traffic is to keep your customers informed of your latest offering.</p> </li> <li> <p> <code>TRANSACTIONAL</code> – Most of your sending traffic is to communicate during a transaction with a customer.</p> </li> </ul>',
        }),
    ).exactOptional(),
    WebsiteURL: WebsiteURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of your website. This information helps us better understand the type of content that you plan to send.',
        }),
    ).exactOptional(),
    ContactLanguage: ContactLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language you would prefer for the case. The contact language can be one of <code>ENGLISH</code> or <code>JAPANESE</code>.',
        }),
    ).exactOptional(),
    UseCaseDescription: UseCaseDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the types of email that you plan to send.' }),
    ).exactOptional(),
    AdditionalContactEmailAddresses: AdditionalContactEmailAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional email addresses where updates are sent about your account review process.',
        }),
    ).exactOptional(),
    ReviewDetails: ReviewDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the review of the latest details you submitted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains information about your account details.',
    required: [],
  })
  .openapi('AccountDetails')

const DashboardAttributesSchema = z
  .object({
    EngagementMetrics: FeatureStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the status of your VDM engagement metrics collection. Can be one of the following:</p> <ul> <li> <p> <code>ENABLED</code> – Amazon SES enables engagement metrics for your account.</p> </li> <li> <p> <code>DISABLED</code> – Amazon SES disables engagement metrics for your account.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object containing additional settings for your VDM configuration as applicable to the Dashboard.',
    required: [],
  })
  .openapi('DashboardAttributes')

const GuardianAttributesSchema = z
  .object({
    OptimizedSharedDelivery: FeatureStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the status of your VDM optimized shared delivery. Can be one of the following:</p> <ul> <li> <p> <code>ENABLED</code> – Amazon SES enables optimized shared delivery for your account.</p> </li> <li> <p> <code>DISABLED</code> – Amazon SES disables optimized shared delivery for your account.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object containing additional settings for your VDM configuration as applicable to the Guardian.',
    required: [],
  })
  .openapi('GuardianAttributes')

const VdmAttributesSchema = z
  .object({
    VdmEnabled: FeatureStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the status of your VDM configuration. Can be one of the following:</p> <ul> <li> <p> <code>ENABLED</code> – Amazon SES enables VDM for your account.</p> </li> <li> <p> <code>DISABLED</code> – Amazon SES disables VDM for your account.</p> </li> </ul>',
        }),
    ),
    DashboardAttributes: DashboardAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies additional settings for your VDM configuration as applicable to the Dashboard.',
        }),
    ).exactOptional(),
    GuardianAttributes: GuardianAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies additional settings for your VDM configuration as applicable to the Guardian.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VdmEnabled'],
    description: 'The VDM attributes that apply to your Amazon SES account.',
  })
  .openapi('VdmAttributes')

const GetAccountResponseSchema = z
  .object({
    DedicatedIpAutoWarmupEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the automatic warm-up feature is enabled for dedicated IP addresses that are associated with your account.',
        }),
    ).exactOptional(),
    EnforcementStatus: GeneralEnforcementStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The reputation status of your Amazon SES account. The status can be one of the following:</p> <ul> <li> <p> <code>HEALTHY</code> – There are no reputation-related issues that currently impact your account.</p> </li> <li> <p> <code>PROBATION</code> – We've identified potential issues with your Amazon SES account. We're placing your account under review while you work on correcting these issues.</p> </li> <li> <p> <code>SHUTDOWN</code> – Your account's ability to send email is currently paused because of an issue with the email sent from your account. When you correct the issue, you can contact us and request that your account's ability to send email is resumed.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ProductionAccessEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether or not your account has production access in the current Amazon Web Services Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>',
        }),
    ).exactOptional(),
    SendQuota: SendQuotaSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region.',
        }),
    ).exactOptional(),
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not email sending is enabled for your Amazon SES account in the current Amazon Web Services Region.',
        }),
    ).exactOptional(),
    SuppressionAttributes: SuppressionAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region.',
        }),
    ).exactOptional(),
    Details: AccountDetailsSchema.and(
      z.any().openapi({ description: 'An object that defines your account details.' }),
    ).exactOptional(),
    VdmAttributes: VdmAttributesSchema.and(
      z.any().openapi({ description: 'The VDM attributes that apply to your Amazon SES account.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of details about the email-sending capabilities of your Amazon SES account in the current Amazon Web Services Region.',
    required: [],
  })
  .openapi('GetAccountResponse')

const RblNameSchema = z
  .string()
  .openapi({ description: 'The name of a blacklist that an IP address was found on.' })
  .openapi('RblName')

const BlacklistingDescriptionSchema = z
  .string()
  .openapi({ description: 'A description of the blacklisting event.' })
  .openapi('BlacklistingDescription')

const BlacklistEntrySchema = z
  .object({
    RblName: RblNameSchema.and(
      z.any().openapi({ description: 'The name of the blacklist that the IP address appears on.' }),
    ).exactOptional(),
    ListingTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the blacklisting event occurred.' }),
    ).exactOptional(),
    Description: BlacklistingDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information about the blacklisting event, as provided by the blacklist maintainer.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.',
    required: [],
  })
  .openapi('BlacklistEntry')

const BlacklistEntriesSchema = z.array(BlacklistEntrySchema).openapi('BlacklistEntries')

const BlacklistReportSchema = z
  .record(z.string(), BlacklistEntriesSchema)
  .openapi('BlacklistReport')

const GetBlacklistReportsResponseSchema = z
  .object({
    BlacklistReport: BlacklistReportSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about a blacklist that one of your dedicated IP addresses appears on.',
        }),
    ),
  })
  .openapi({
    required: ['BlacklistReport'],
    description: 'An object that contains information about blacklist events.',
  })
  .openapi('GetBlacklistReportsResponse')

const BlacklistItemNameSchema = z
  .string()
  .openapi({ description: 'An IP address that you want to obtain blacklist information for.' })
  .openapi('BlacklistItemName')

const ConfigurationSetNameSchema = z
  .string()
  .openapi({
    description:
      '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
  })
  .openapi('ConfigurationSetName')

const TrackingOptionsSchema = z
  .object({
    CustomRedirectDomain: CustomRedirectDomainSchema.and(
      z.any().openapi({ description: 'The domain to use for tracking open and click events.' }),
    ),
  })
  .openapi({
    required: ['CustomRedirectDomain'],
    description:
      "<p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>",
  })
  .openapi('TrackingOptions')

const DeliveryOptionsSchema = z
  .object({
    TlsPolicy: TlsPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.",
        }),
    ).exactOptional(),
    SendingPoolName: PoolNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the dedicated IP pool to associate with the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Used to associate a configuration set with a dedicated IP pool.',
    required: [],
  })
  .openapi('DeliveryOptions')

const ReputationOptionsSchema = z
  .object({
    ReputationMetricsEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set.',
        }),
    ).exactOptional(),
    LastFreshStart: LastFreshStartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region. ',
    required: [],
  })
  .openapi('ReputationOptions')

const SendingOptionsSchema = z
  .object({
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.',
    required: [],
  })
  .openapi('SendingOptions')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const SuppressionOptionsSchema = z
  .object({
    SuppressedReasons: SuppressionListReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the suppression list preferences for your account.',
    required: [],
  })
  .openapi('SuppressionOptions')

const VdmOptionsSchema = z
  .object({
    DashboardOptions: DashboardOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies additional settings for your VDM configuration as applicable to the Dashboard.',
        }),
    ).exactOptional(),
    GuardianOptions: GuardianOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies additional settings for your VDM configuration as applicable to the Guardian.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines the VDM settings that apply to emails that you send using the configuration set.',
    required: [],
  })
  .openapi('VdmOptions')

const GetConfigurationSetResponseSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration set.' }),
    ).exactOptional(),
    TrackingOptions: TrackingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the open and click tracking options for emails that you send using the configuration set.',
        }),
    ).exactOptional(),
    DeliveryOptions: DeliveryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.',
        }),
    ).exactOptional(),
    ReputationOptions: ReputationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.',
        }),
    ).exactOptional(),
    SendingOptions: SendingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines whether or not Amazon SES can send email that you send using the configuration set.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) that are associated with the configuration set.',
        }),
    ).exactOptional(),
    SuppressionOptions: SuppressionOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the suppression list preferences for your account.',
        }),
    ).exactOptional(),
    VdmOptions: VdmOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the VDM preferences for your configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a configuration set.', required: [] })
  .openapi('GetConfigurationSetResponse')

const EventDestinationNameSchema = z
  .string()
  .openapi({
    description:
      '<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
  })
  .openapi('EventDestinationName')

const EventDestinationSchema = z
  .object({
    Name: EventDestinationNameSchema.and(
      z.any().openapi({ description: 'A name that identifies the event destination.' }),
    ),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If <code>true</code>, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this <code>EventDestinationDefinition</code>.</p> <p>If <code>false</code>, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.</p>",
        }),
    ).exactOptional(),
    MatchingEventTypes: EventTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The types of events that Amazon SES sends to the specified event destinations.</p> <ul> <li> <p> <code>SEND</code> - The send request was successful and SES will attempt to deliver the message to the recipient’s mail server. (If account-level or global suppression is being used, SES will still count it as a send, but delivery is suppressed.)</p> </li> <li> <p> <code>REJECT</code> - SES accepted the email, but determined that it contained a virus and didn’t attempt to deliver it to the recipient’s mail server.</p> </li> <li> <p> <code>BOUNCE</code> - (<i>Hard bounce</i>) The recipient\'s mail server permanently rejected the email. (<i>Soft bounces</i> are only included when SES fails to deliver the email after retrying for a period of time.)</p> </li> <li> <p> <code>COMPLAINT</code> - The email was successfully delivered to the recipient’s mail server, but the recipient marked it as spam.</p> </li> <li> <p> <code>DELIVERY</code> - SES successfully delivered the email to the recipient\'s mail server.</p> </li> <li> <p> <code>OPEN</code> - The recipient received the message and opened it in their email client.</p> </li> <li> <p> <code>CLICK</code> - The recipient clicked one or more links in the email.</p> </li> <li> <p> <code>RENDERING_FAILURE</code> - The email wasn\'t sent because of a template rendering issue. This event type can occur when template data is missing, or when there is a mismatch between template parameters and data. (This event type only occurs when you send email using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html"> <code>SendTemplatedEmail</code> </a> or <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html"> <code>SendBulkTemplatedEmail</code> </a> API operations.) </p> </li> <li> <p> <code>DELIVERY_DELAY</code> - The email couldn\'t be delivered to the recipient’s mail server because a temporary issue occurred. Delivery delays can occur, for example, when the recipient\'s inbox is full, or when the receiving email server experiences a transient issue.</p> </li> <li> <p> <code>SUBSCRIPTION</code> - The email was successfully delivered, but the recipient updated their subscription preferences by clicking on an <i>unsubscribe</i> link as part of your <a href="https://docs.aws.amazon.com/ses/latest/dg/sending-email-subscription-management.html">subscription management</a>.</p> </li> </ul>',
        }),
    ),
    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.',
        }),
    ).exactOptional(),
    CloudWatchDestination: CloudWatchDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.',
        }),
    ).exactOptional(),
    SnsDestination: SnsDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.',
        }),
    ).exactOptional(),
    PinpointDestination: PinpointDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MatchingEventTypes'],
    description:
      'In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.',
  })
  .openapi('EventDestination')

const EventDestinationsSchema = z.array(EventDestinationSchema).openapi('EventDestinations')

const GetConfigurationSetEventDestinationsResponseSchema = z
  .object({
    EventDestinations: EventDestinationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that includes all of the events destinations that have been configured for the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about an event destination for a configuration set.',
    required: [],
  })
  .openapi('GetConfigurationSetEventDestinationsResponse')

const EmailAddressSchema = z.string().openapi('EmailAddress')

const TopicPreferenceListSchema = z.array(TopicPreferenceSchema).openapi('TopicPreferenceList')

const UnsubscribeAllSchema = z.boolean().openapi('UnsubscribeAll')

const AttributesDataSchema = z.string().openapi('AttributesData')

const GetContactResponseSchema = z
  .object({
    ContactListName: ContactListNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the contact list to which the contact belongs.' }),
    ).exactOptional(),
    EmailAddress: EmailAddressSchema.and(
      z.any().openapi({ description: "The contact's email address." }),
    ).exactOptional(),
    TopicPreferences: TopicPreferenceListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The contact's preference for being opted-in to or opted-out of a topic.&gt;",
        }),
    ).exactOptional(),
    TopicDefaultPreferences: TopicPreferenceListSchema.and(
      z.any().openapi({ description: 'The default topic preferences applied to the contact.' }),
    ).exactOptional(),
    UnsubscribeAll: UnsubscribeAllSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value status noting if the contact is unsubscribed from all contact list topics.',
        }),
    ).exactOptional(),
    AttributesData: AttributesDataSchema.and(
      z.any().openapi({ description: 'The attribute data attached to a contact.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp noting when the contact was created.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: "A timestamp noting the last time the contact's information was updated.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContactResponse')

const TopicsSchema = z.array(TopicSchema).openapi('Topics')

const GetContactListResponseSchema = z
  .object({
    ContactListName: ContactListNameSchema.and(
      z.any().openapi({ description: 'The name of the contact list.' }),
    ).exactOptional(),
    Topics: TopicsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An interest group, theme, or label within a list. A contact list can have multiple topics.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of what the contact list is about.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp noting when the contact list was created.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp noting the last time the contact list was updated.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with a contact list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContactListResponse')

const TemplateContentSchema = z
  .string()
  .openapi({ description: 'The content of the custom verification email template.' })
  .openapi('TemplateContent')

const SuccessRedirectionURLSchema = z
  .string()
  .openapi({
    description:
      'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
  })
  .openapi('SuccessRedirectionURL')

const FailureRedirectionURLSchema = z
  .string()
  .openapi({
    description:
      'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
  })
  .openapi('FailureRedirectionURL')

const GetCustomVerificationEmailTemplateResponseSchema = z
  .object({
    TemplateName: EmailTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the custom verification email template.' }),
    ).exactOptional(),
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ).exactOptional(),
    TemplateSubject: EmailTemplateSubjectSchema.and(
      z.any().openapi({ description: 'The subject line of the custom verification email.' }),
    ).exactOptional(),
    TemplateContent: TemplateContentSchema.and(
      z.any().openapi({ description: 'The content of the custom verification email.' }),
    ).exactOptional(),
    SuccessRedirectionURL: SuccessRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
        }),
    ).exactOptional(),
    FailureRedirectionURL: FailureRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The following elements are returned by the service.', required: [] })
  .openapi('GetCustomVerificationEmailTemplateResponse')

const IpSchema = z.string().openapi({ description: 'An IPv4 address.' }).openapi('Ip')

const WarmupStatusSchema = z
  .enum(['IN_PROGRESS', 'DONE'])
  .openapi({ description: 'The warmup status of a dedicated IP.' })
  .openapi('WarmupStatus')

const Percentage100WrapperSchema = z.int().openapi('Percentage100Wrapper')

const DedicatedIpSchema = z
  .object({
    Ip: IpSchema.and(z.any().openapi({ description: 'An IPv4 address.' })),
    WarmupStatus: WarmupStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The warm-up status of a dedicated IP address. The status can have one of the following values:</p> <ul> <li> <p> <code>IN_PROGRESS</code> – The IP address isn't ready to use because the dedicated IP warm-up process is ongoing.</p> </li> <li> <p> <code>DONE</code> – The dedicated IP warm-up process is complete, and the IP address is ready to use.</p> </li> </ul>",
        }),
    ),
    WarmupPercentage: Percentage100WrapperSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates how complete the dedicated IP warm-up process is. When this value equals 1, the address has completed the warm-up process and is ready for use.',
        }),
    ),
    PoolName: PoolNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the dedicated IP pool that the IP address is associated with.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Ip', 'WarmupStatus', 'WarmupPercentage'],
    description:
      '<p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>',
  })
  .openapi('DedicatedIp')

const GetDedicatedIpResponseSchema = z
  .object({
    DedicatedIp: DedicatedIpSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about a dedicated IP address.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a dedicated IP address.', required: [] })
  .openapi('GetDedicatedIpResponse')

const ScalingModeSchema = z.enum(['STANDARD', 'MANAGED']).openapi('ScalingMode')

const DedicatedIpPoolSchema = z
  .object({
    PoolName: PoolNameSchema.and(
      z.any().openapi({ description: 'The name of the dedicated IP pool.' }),
    ),
    ScalingMode: ScalingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the dedicated IP pool.</p> <ul> <li> <p> <code>STANDARD</code> – A dedicated IP pool where you can control which IPs are part of the pool.</p> </li> <li> <p> <code>MANAGED</code> – A dedicated IP pool where the reputation and number of IPs are automatically managed by Amazon SES.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['PoolName', 'ScalingMode'],
    description: 'Contains information about a dedicated IP pool.',
  })
  .openapi('DedicatedIpPool')

const GetDedicatedIpPoolResponseSchema = z
  .object({
    DedicatedIpPool: DedicatedIpPoolSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains information about a dedicated IP pool.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The following element is returned by the service.', required: [] })
  .openapi('GetDedicatedIpPoolResponse')

const DedicatedIpListSchema = z
  .array(DedicatedIpSchema)
  .openapi({
    description:
      'A list of dedicated IP addresses that are associated with your Amazon Web Services account.',
  })
  .openapi('DedicatedIpList')

const NextTokenSchema = z.string().openapi('NextToken')

const GetDedicatedIpsResponseSchema = z
  .object({
    DedicatedIps: DedicatedIpListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of dedicated IP addresses that are associated with your Amazon Web Services account.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there are additional dedicated IP addresses to list. To view additional addresses, issue another request to <code>GetDedicatedIps</code>, passing this token in the <code>NextToken</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the dedicated IP addresses that are associated with your Amazon Web Services account.',
    required: [],
  })
  .openapi('GetDedicatedIpsResponse')

const DeliverabilityDashboardAccountStatusSchema = z
  .enum(['ACTIVE', 'PENDING_EXPIRATION', 'DISABLED'])
  .openapi({
    description:
      'The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month.',
  })
  .openapi('DeliverabilityDashboardAccountStatus')

const DomainSchema = z.string().openapi('Domain')

const IspNameSchema = z
  .string()
  .openapi({ description: 'The name of an email provider.' })
  .openapi('IspName')

const IspNameListSchema = z.array(IspNameSchema).openapi('IspNameList')

const InboxPlacementTrackingOptionSchema = z
  .object({
    Global: EnabledSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether inbox placement data is being tracked for the domain.',
        }),
    ).exactOptional(),
    TrackedIsps: IspNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings, one for each major email provider that the inbox placement data applies to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the inbox placement data settings for a verified domain that’s associated with your Amazon Web Services account. This data is available only if you enabled the Deliverability dashboard for the domain.',
    required: [],
  })
  .openapi('InboxPlacementTrackingOption')

const DomainDeliverabilityTrackingOptionSchema = z
  .object({
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'A verified domain that’s associated with your Amazon Web Services account and currently has an active Deliverability dashboard subscription.',
        }),
    ).exactOptional(),
    SubscriptionStartDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date when you enabled the Deliverability dashboard for the domain.',
        }),
    ).exactOptional(),
    InboxPlacementTrackingOption: InboxPlacementTrackingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the inbox placement data settings for the domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.',
    required: [],
  })
  .openapi('DomainDeliverabilityTrackingOption')

const DomainDeliverabilityTrackingOptionsSchema = z
  .array(DomainDeliverabilityTrackingOptionSchema)
  .openapi({
    description:
      'An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.',
  })
  .openapi('DomainDeliverabilityTrackingOptions')

const GetDeliverabilityDashboardOptionsResponseSchema = z
  .object({
    DashboardEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the Deliverability dashboard is enabled. If this value is <code>true</code>, the dashboard is enabled.',
        }),
    ),
    SubscriptionExpiryDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when your current subscription to the Deliverability dashboard is scheduled to expire, if your subscription is scheduled to expire at the end of the current calendar month. This value is null if you have an active subscription that isn’t due to expire at the end of the month.',
        }),
    ).exactOptional(),
    AccountStatus: DeliverabilityDashboardAccountStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month.',
        }),
    ).exactOptional(),
    ActiveSubscribedDomains: DomainDeliverabilityTrackingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at the end of the current calendar month.',
        }),
    ).exactOptional(),
    PendingExpirationSubscribedDomains: DomainDeliverabilityTrackingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that's scheduled to expire at the end of the current calendar month.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DashboardEnabled'],
    description: 'An object that shows the status of the Deliverability dashboard.',
  })
  .openapi('GetDeliverabilityDashboardOptionsResponse')

const ReportNameSchema = z
  .string()
  .openapi({
    description:
      'A name that helps you identify a report generated by the Deliverability dashboard.',
  })
  .openapi('ReportName')

const DeliverabilityTestSubjectSchema = z
  .string()
  .openapi({
    description:
      'The subject line for an email that you submitted in a predictive inbox placement test.',
  })
  .openapi('DeliverabilityTestSubject')

const DeliverabilityTestReportSchema = z
  .object({
    ReportId: ReportIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique string that identifies the predictive inbox placement test.',
        }),
    ).exactOptional(),
    ReportName: ReportNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name that helps you identify a predictive inbox placement test report.',
        }),
    ).exactOptional(),
    Subject: DeliverabilityTestSubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject line for an email that you submitted in a predictive inbox placement test.',
        }),
    ).exactOptional(),
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sender address that you specified for the predictive inbox placement test.',
        }),
    ).exactOptional(),
    CreateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the predictive inbox placement test was created.',
        }),
    ).exactOptional(),
    DeliverabilityTestStatus: DeliverabilityTestStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> to view the results of the test.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains metadata related to a predictive inbox placement test.',
    required: [],
  })
  .openapi('DeliverabilityTestReport')

const PercentageSchema = z
  .float64()
  .openapi({
    description: 'An object that contains information about inbox placement percentages.',
  })
  .openapi('Percentage')

const PlacementStatisticsSchema = z
  .object({
    InboxPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "The percentage of emails that arrived in recipients' inboxes during the predictive inbox placement test.",
        }),
    ).exactOptional(),
    SpamPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "The percentage of emails that arrived in recipients' spam or junk mail folders during the predictive inbox placement test.",
        }),
    ).exactOptional(),
    MissingPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "The percentage of emails that didn't arrive in recipients' inboxes at all during the predictive inbox placement test.",
        }),
    ).exactOptional(),
    SpfPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of emails that were authenticated by using Sender Policy Framework (SPF) during the predictive inbox placement test.',
        }),
    ).exactOptional(),
    DkimPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of emails that were authenticated by using DomainKeys Identified Mail (DKIM) during the predictive inbox placement test.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains inbox placement data for an email provider.',
    required: [],
  })
  .openapi('PlacementStatistics')

const IspPlacementSchema = z
  .object({
    IspName: IspNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the email provider that the inbox placement data applies to.',
        }),
    ).exactOptional(),
    PlacementStatistics: PlacementStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains inbox placement metrics for a specific email provider.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.',
    required: [],
  })
  .openapi('IspPlacement')

const IspPlacementsSchema = z.array(IspPlacementSchema).openapi('IspPlacements')

const MessageContentSchema = z
  .string()
  .openapi({ description: 'The body of an email message.' })
  .openapi('MessageContent')

const GetDeliverabilityTestReportResponseSchema = z
  .object({
    DeliverabilityTestReport: DeliverabilityTestReportSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the results of the predictive inbox placement test.',
        }),
    ),
    OverallPlacement: PlacementStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that specifies how many test messages that were sent during the predictive inbox placement test were delivered to recipients' inboxes, how many were sent to recipients' spam folders, and how many weren't delivered.",
        }),
    ),
    IspPlacements: IspPlacementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes how the test email was handled by several email providers, including Gmail, Hotmail, Yahoo, AOL, and others.',
        }),
    ),
    Message: MessageContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the message that you sent when you performed this predictive inbox placement test.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) that are associated with the predictive inbox placement test.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeliverabilityTestReport', 'OverallPlacement', 'IspPlacements'],
    description: 'The results of the predictive inbox placement test.',
  })
  .openapi('GetDeliverabilityTestReportResponse')

const CampaignIdSchema = z.string().openapi('CampaignId')

const ImageUrlSchema = z.string().openapi('ImageUrl')

const SubjectSchema = z.string().openapi('Subject')

const IdentitySchema = z.string().min(1).openapi('Identity')

const IpListSchema = z.array(IpSchema).openapi('IpList')

const VolumeSchema = z
  .int()
  .openapi({ description: 'An object that contains information about inbox placement volume.' })
  .openapi('Volume')

const EspSchema = z.string().openapi('Esp')

const EspsSchema = z.array(EspSchema).openapi('Esps')

const DomainDeliverabilityCampaignSchema = z
  .object({
    CampaignId: CampaignIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.',
        }),
    ).exactOptional(),
    ImageUrl: ImageUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of an image that contains a snapshot of the email message that was sent.',
        }),
    ).exactOptional(),
    Subject: SubjectSchema.and(
      z.any().openapi({ description: 'The subject line, or title, of the email message.' }),
    ).exactOptional(),
    FromAddress: IdentitySchema.and(
      z
        .any()
        .openapi({
          description: 'The verified email address that the email message was sent from.',
        }),
    ).exactOptional(),
    SendingIps: IpListSchema.and(
      z
        .any()
        .openapi({ description: 'The IP addresses that were used to send the email message.' }),
    ).exactOptional(),
    FirstSeenDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The first time when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.",
        }),
    ).exactOptional(),
    LastSeenDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The last time when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.",
        }),
    ).exactOptional(),
    InboxCount: VolumeSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of email messages that were delivered to recipients’ inboxes.',
        }),
    ).exactOptional(),
    SpamCount: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of email messages that were delivered to recipients' spam or junk mail folders.",
        }),
    ).exactOptional(),
    ReadRate: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of email messages that were opened by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.',
        }),
    ).exactOptional(),
    DeleteRate: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of email messages that were deleted by recipients, without being opened first. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.',
        }),
    ).exactOptional(),
    ReadDeleteRate: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of email messages that were opened and then deleted by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.',
        }),
    ).exactOptional(),
    ProjectedVolume: VolumeSchema.and(
      z
        .any()
        .openapi({
          description: 'The projected number of recipients that the email message was sent to.',
        }),
    ).exactOptional(),
    Esps: EspsSchema.and(
      z.any().openapi({ description: 'The major email providers who handled the email message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).',
    required: [],
  })
  .openapi('DomainDeliverabilityCampaign')

const GetDomainDeliverabilityCampaignResponseSchema = z
  .object({
    DomainDeliverabilityCampaign: DomainDeliverabilityCampaignSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the deliverability data for the campaign.',
        }),
    ),
  })
  .openapi({
    required: ['DomainDeliverabilityCampaign'],
    description:
      'An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.',
  })
  .openapi('GetDomainDeliverabilityCampaignResponse')

const VolumeStatisticsSchema = z
  .object({
    InboxRawCount: VolumeSchema.and(
      z
        .any()
        .openapi({
          description: "The total number of emails that arrived in recipients' inboxes.",
        }),
    ).exactOptional(),
    SpamRawCount: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of emails that arrived in recipients' spam or junk mail folders.",
        }),
    ).exactOptional(),
    ProjectedInbox: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            "An estimate of the percentage of emails sent from the current domain that will arrive in recipients' inboxes.",
        }),
    ).exactOptional(),
    ProjectedSpam: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            "An estimate of the percentage of emails sent from the current domain that will arrive in recipients' spam or junk mail folders.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the amount of email that was delivered to recipients.',
    required: [],
  })
  .openapi('VolumeStatistics')

const DomainIspPlacementSchema = z
  .object({
    IspName: IspNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the email provider that the inbox placement data applies to.',
        }),
    ).exactOptional(),
    InboxRawCount: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of messages that were sent from the selected domain to the specified email provider that arrived in recipients' inboxes.",
        }),
    ).exactOptional(),
    SpamRawCount: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of messages that were sent from the selected domain to the specified email provider that arrived in recipients' spam or junk mail folders.",
        }),
    ).exactOptional(),
    InboxPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "The percentage of messages that were sent from the selected domain to the specified email provider that arrived in recipients' inboxes.",
        }),
    ).exactOptional(),
    SpamPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "The percentage of messages that were sent from the selected domain to the specified email provider that arrived in recipients' spam or junk mail folders.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.',
    required: [],
  })
  .openapi('DomainIspPlacement')

const DomainIspPlacementsSchema = z.array(DomainIspPlacementSchema).openapi('DomainIspPlacements')

const OverallVolumeSchema = z
  .object({
    VolumeStatistics: VolumeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that contains information about the numbers of messages that arrived in recipients' inboxes and junk mail folders.",
        }),
    ).exactOptional(),
    ReadRatePercent: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of emails that were sent from the domain that were read by their recipients.',
        }),
    ).exactOptional(),
    DomainIspPlacements: DomainIspPlacementsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains inbox and junk mail placement metrics for individual email providers.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about email that was sent from the selected domain.',
    required: [],
  })
  .openapi('OverallVolume')

const DailyVolumeSchema = z
  .object({
    StartDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date that the DailyVolume metrics apply to, in Unix time.' }),
    ).exactOptional(),
    VolumeStatistics: VolumeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains inbox placement metrics for a specific day in the analysis period.',
        }),
    ).exactOptional(),
    DomainIspPlacements: DomainIspPlacementsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that contains inbox placement metrics for a specified day in the analysis period, broken out by the recipient's email provider.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the volume of email sent on each day of the analysis period.',
    required: [],
  })
  .openapi('DailyVolume')

const DailyVolumesSchema = z.array(DailyVolumeSchema).openapi('DailyVolumes')

const GetDomainStatisticsReportResponseSchema = z
  .object({
    OverallVolume: OverallVolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains deliverability metrics for the domain that you specified. The data in this object is a summary of all of the data that was collected from the <code>StartDate</code> to the <code>EndDate</code>.',
        }),
    ),
    DailyVolumes: DailyVolumesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains deliverability metrics for the domain that you specified. This object contains data for each day, starting on the <code>StartDate</code> and ending on the <code>EndDate</code>.',
        }),
    ),
  })
  .openapi({
    required: ['OverallVolume', 'DailyVolumes'],
    description:
      'An object that includes statistics that are related to the domain that you specified.',
  })
  .openapi('GetDomainStatisticsReportResponse')

const MailFromDomainNameSchema = z
  .string()
  .openapi({ description: 'The domain to use as a MAIL FROM domain.' })
  .openapi('MailFromDomainName')

const MailFromDomainStatusSchema = z
  .enum(['PENDING', 'SUCCESS', 'FAILED', 'TEMPORARY_FAILURE'])
  .openapi({
    description:
      "<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul>",
  })
  .openapi('MailFromDomainStatus')

const BehaviorOnMxFailureSchema = z
  .enum(['USE_DEFAULT_VALUE', 'REJECT_MESSAGE'])
  .openapi({
    description:
      "<p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
  })
  .openapi('BehaviorOnMxFailure')

const MailFromAttributesSchema = z
  .object({
    MailFromDomain: MailFromDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a domain that an email identity uses as a custom MAIL FROM domain.',
        }),
    ),
    MailFromDomainStatus: MailFromDomainStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul>",
        }),
    ),
    BehaviorOnMxFailure: BehaviorOnMxFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>USE_DEFAULT_VALUE</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>REJECT_MESSAGE</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
        }),
    ),
  })
  .openapi({
    required: ['MailFromDomain', 'MailFromDomainStatus', 'BehaviorOnMxFailure'],
    description: 'A list of attributes that are associated with a MAIL FROM domain.',
  })
  .openapi('MailFromAttributes')

const PolicySchema = z
  .string()
  .min(1)
  .openapi({
    description:
      '<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('Policy')

const PolicyMapSchema = z
  .record(z.string(), PolicySchema)
  .openapi({
    description:
      'An object that contains mapping between <code>PolicyName</code> and <code>Policy</code> text.',
  })
  .openapi('PolicyMap')

const VerificationStatusSchema = z
  .enum(['PENDING', 'SUCCESS', 'FAILED', 'TEMPORARY_FAILURE', 'NOT_STARTED'])
  .openapi('VerificationStatus')

const GetEmailIdentityResponseSchema = z
  .object({
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email identity type. Note: the <code>MANAGED_DOMAIN</code> identity type is not supported.',
        }),
    ).exactOptional(),
    FeedbackForwardingStatus: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>",
        }),
    ).exactOptional(),
    VerifiedForSendingStatus: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether or not the identity is verified. You can only send email from verified email addresses or domains. For more information about verifying identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.',
        }),
    ).exactOptional(),
    DkimAttributes: DkimAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the DKIM attributes for the identity.',
        }),
    ).exactOptional(),
    MailFromAttributes: MailFromAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the Mail-From attributes for the email identity.',
        }),
    ).exactOptional(),
    Policies: PolicyMapSchema.and(
      z.any().openapi({ description: 'A map of policy names to policies.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) that are associated with the email identity.',
        }),
    ).exactOptional(),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration set used by default when sending from this identity.',
        }),
    ).exactOptional(),
    VerificationStatus: VerificationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The verification status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet been able to verify the identity.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the verification status of the identity.</p> </li> <li> <p> <code>NOT_STARTED</code> – The verification process hasn't been initiated for the identity.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about an email identity.', required: [] })
  .openapi('GetEmailIdentityResponse')

const GetEmailIdentityPoliciesResponseSchema = z
  .object({
    Policies: PolicyMapSchema.and(
      z.any().openapi({ description: 'A map of policy names to policies.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Identity policies associated with email identity.', required: [] })
  .openapi('GetEmailIdentityPoliciesResponse')

const EmailTemplateContentSchema = z
  .object({
    Subject: EmailTemplateSubjectSchema.and(
      z.any().openapi({ description: 'The subject line of the email.' }),
    ).exactOptional(),
    Text: EmailTemplateTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email body that will be visible to recipients whose email clients do not display HTML.',
        }),
    ).exactOptional(),
    Html: EmailTemplateHtmlSchema.and(
      z.any().openapi({ description: 'The HTML body of the email.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
    required: [],
  })
  .openapi('EmailTemplateContent')

const GetEmailTemplateResponseSchema = z
  .object({
    TemplateName: EmailTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template.' }),
    ),
    TemplateContent: EmailTemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the email template, composed of a subject line, an HTML part, and a text-only part.',
        }),
    ),
  })
  .openapi({
    required: ['TemplateName', 'TemplateContent'],
    description: 'The following element is returned by the service.',
  })
  .openapi('GetEmailTemplateResponse')

const ImportDestinationSchema = z
  .object({
    SuppressionListDestination: SuppressionListDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the action of the import job towards suppression list.',
        }),
    ).exactOptional(),
    ContactListDestination: ContactListDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the action of the import job towards a contact list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains details about the resource destination the import job is going to target.',
    required: [],
  })
  .openapi('ImportDestination')

const ImportDataSourceSchema = z
  .object({
    S3Url: S3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon S3 URL in the format s3://<i>&lt;bucket_name&gt;</i>/<i>&lt;object&gt;</i>.',
        }),
    ),
    DataFormat: DataFormatSchema.and(
      z.any().openapi({ description: "The data format of the import job's data source." }),
    ),
  })
  .openapi({
    required: ['S3Url', 'DataFormat'],
    description: 'An object that contains details about the data source of the import job.',
  })
  .openapi('ImportDataSource')

const FailedRecordsS3UrlSchema = z.string().openapi('FailedRecordsS3Url')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const FailureInfoSchema = z
  .object({
    FailedRecordsS3Url: FailedRecordsS3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon S3 presigned URL that contains all the failed records and related information.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message about why the import job failed.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains the failure details about an import job.',
    required: [],
  })
  .openapi('FailureInfo')

const JobStatusSchema = z
  .enum(['CREATED', 'PROCESSING', 'COMPLETED', 'FAILED'])
  .openapi({ description: 'The status of the import job.' })
  .openapi('JobStatus')

const ProcessedRecordsCountSchema = z.int().openapi('ProcessedRecordsCount')

const FailedRecordsCountSchema = z.int().openapi('FailedRecordsCount')

const GetImportJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'A string that represents the import job ID.' }),
    ).exactOptional(),
    ImportDestination: ImportDestinationSchema.and(
      z.any().openapi({ description: 'The destination of the import job.' }),
    ).exactOptional(),
    ImportDataSource: ImportDataSourceSchema.and(
      z.any().openapi({ description: 'The data source of the import job.' }),
    ).exactOptional(),
    FailureInfo: FailureInfoSchema.and(
      z.any().openapi({ description: 'The failure details about an import job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the import job.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time stamp of when the import job was created.' }),
    ).exactOptional(),
    CompletedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time stamp of when the import job was completed.' }),
    ).exactOptional(),
    ProcessedRecordsCount: ProcessedRecordsCountSchema.and(
      z.any().openapi({ description: 'The current number of records processed.' }),
    ).exactOptional(),
    FailedRecordsCount: FailedRecordsCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of records that failed processing because of invalid input or other reasons.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
    required: [],
  })
  .openapi('GetImportJobResponse')

const OutboundMessageIdSchema = z.string().openapi('OutboundMessageId')

const FeedbackIdSchema = z.string().openapi('FeedbackId')

const SuppressedDestinationAttributesSchema = z
  .object({
    MessageId: OutboundMessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the email message that caused the email address to be added to the suppression list for your account.',
        }),
    ).exactOptional(),
    FeedbackId: FeedbackIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier that's generated when an email address is added to the suppression list for your account.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains additional attributes that are related an email address that is on the suppression list for your account.',
    required: [],
  })
  .openapi('SuppressedDestinationAttributes')

const SuppressedDestinationSchema = z
  .object({
    EmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that is on the suppression list for your account.',
        }),
    ),
    Reason: SuppressionListReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason that the address was added to the suppression list for your account.',
        }),
    ),
    LastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the suppressed destination was last updated, shown in Unix time format.',
        }),
    ),
    Attributes: SuppressedDestinationAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional value that can contain additional information about the reasons that the address was added to the suppression list for your account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EmailAddress', 'Reason', 'LastUpdateTime'],
    description:
      'An object that contains information about an email address that is on the suppression list for your account.',
  })
  .openapi('SuppressedDestination')

const GetSuppressedDestinationResponseSchema = z
  .object({
    SuppressedDestination: SuppressedDestinationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing information about the suppressed email address.',
        }),
    ),
  })
  .openapi({
    required: ['SuppressedDestination'],
    description: 'Information about the suppressed email address.',
  })
  .openapi('GetSuppressedDestinationResponse')

const ConfigurationSetNameListSchema = z
  .array(ConfigurationSetNameSchema)
  .openapi('ConfigurationSetNameList')

const ListConfigurationSetsResponseSchema = z
  .object({
    ConfigurationSets: ConfigurationSetNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains all of the configuration sets in your Amazon SES account in the current Amazon Web Services Region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there are additional configuration sets to list. To view additional configuration sets, issue another request to <code>ListConfigurationSets</code>, and pass this token in the <code>NextToken</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region.',
    required: [],
  })
  .openapi('ListConfigurationSetsResponse')

const ContactListSchema = z
  .object({
    ContactListName: ContactListNameSchema.and(
      z.any().openapi({ description: 'The name of the contact list.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp noting the last time the contact list was updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list that contains contacts that have subscribed to a particular topic or topics.',
    required: [],
  })
  .openapi('ContactList')

const ListOfContactListsSchema = z.array(ContactListSchema).openapi('ListOfContactLists')

const ListContactListsResponseSchema = z
  .object({
    ContactLists: ListOfContactListsSchema.and(
      z.any().openapi({ description: 'The available contact lists.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string token indicating that there might be additional contact lists available to be listed. Copy this token to a subsequent call to <code>ListContactLists</code> with the same parameters to retrieve the next page of contact lists.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListContactListsResponse')

const ContactSchema = z
  .object({
    EmailAddress: EmailAddressSchema.and(
      z.any().openapi({ description: "The contact's email address." }),
    ).exactOptional(),
    TopicPreferences: TopicPreferenceListSchema.and(
      z
        .any()
        .openapi({
          description: "The contact's preference for being opted-in to or opted-out of a topic.",
        }),
    ).exactOptional(),
    TopicDefaultPreferences: TopicPreferenceListSchema.and(
      z.any().openapi({ description: 'The default topic preferences applied to the contact.' }),
    ).exactOptional(),
    UnsubscribeAll: UnsubscribeAllSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value status noting if the contact is unsubscribed from all contact list topics.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: "A timestamp noting the last time the contact's information was updated.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A contact is the end-user who is receiving the email.', required: [] })
  .openapi('Contact')

const ListOfContactsSchema = z.array(ContactSchema).openapi('ListOfContacts')

const ListContactsResponseSchema = z
  .object({
    Contacts: ListOfContactsSchema.and(
      z.any().openapi({ description: 'The contacts present in a specific contact list.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string token indicating that there might be additional contacts available to be listed. Copy this token to a subsequent call to <code>ListContacts</code> with the same parameters to retrieve the next page of contacts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListContactsResponse')

const UseDefaultIfPreferenceUnavailableSchema = z
  .boolean()
  .openapi('UseDefaultIfPreferenceUnavailable')

const TopicFilterSchema = z
  .object({
    TopicName: TopicNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a topic on which you wish to apply the filter.' }),
    ).exactOptional(),
    UseDefaultIfPreferenceUnavailable: UseDefaultIfPreferenceUnavailableSchema.and(
      z
        .any()
        .openapi({
          description:
            'Notes that the default subscription status should be applied to a contact because the contact has not noted their preference for subscribing to a topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Used for filtering by a specific topic preference.', required: [] })
  .openapi('TopicFilter')

const CustomVerificationEmailTemplateMetadataSchema = z
  .object({
    TemplateName: EmailTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the custom verification email template.' }),
    ).exactOptional(),
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ).exactOptional(),
    TemplateSubject: EmailTemplateSubjectSchema.and(
      z.any().openapi({ description: 'The subject line of the custom verification email.' }),
    ).exactOptional(),
    SuccessRedirectionURL: SuccessRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
        }),
    ).exactOptional(),
    FailureRedirectionURL: FailureRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a custom verification email template.',
    required: [],
  })
  .openapi('CustomVerificationEmailTemplateMetadata')

const CustomVerificationEmailTemplatesListSchema = z
  .array(CustomVerificationEmailTemplateMetadataSchema)
  .openapi({
    description: 'A list of the custom verification email templates that exist in your account.',
  })
  .openapi('CustomVerificationEmailTemplatesList')

const ListCustomVerificationEmailTemplatesResponseSchema = z
  .object({
    CustomVerificationEmailTemplates: CustomVerificationEmailTemplatesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the custom verification email templates that exist in your account.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token indicating that there are additional custom verification email templates available to be listed. Pass this token to a subsequent call to <code>ListCustomVerificationEmailTemplates</code> to retrieve the next 50 custom verification email templates.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The following elements are returned by the service.', required: [] })
  .openapi('ListCustomVerificationEmailTemplatesResponse')

const ListOfDedicatedIpPoolsSchema = z
  .array(PoolNameSchema)
  .openapi({
    description:
      'A list of dedicated IP pools that are associated with your Amazon Web Services account.',
  })
  .openapi('ListOfDedicatedIpPools')

const ListDedicatedIpPoolsResponseSchema = z
  .object({
    DedicatedIpPools: ListOfDedicatedIpPoolsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of all of the dedicated IP pools that are associated with your Amazon Web Services account in the current Region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there are additional IP pools to list. To view additional IP pools, issue another request to <code>ListDedicatedIpPools</code>, passing this token in the <code>NextToken</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of dedicated IP pools.', required: [] })
  .openapi('ListDedicatedIpPoolsResponse')

const DeliverabilityTestReportsSchema = z
  .array(DeliverabilityTestReportSchema)
  .openapi('DeliverabilityTestReports')

const ListDeliverabilityTestReportsResponseSchema = z
  .object({
    DeliverabilityTestReports: DeliverabilityTestReportsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that contains a lists of predictive inbox placement tests that you've performed.",
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there are additional predictive inbox placement tests to list. To view additional predictive inbox placement tests, issue another request to <code>ListDeliverabilityTestReports</code>, and pass this token in the <code>NextToken</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeliverabilityTestReports'],
    description:
      'A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.',
  })
  .openapi('ListDeliverabilityTestReportsResponse')

const DomainDeliverabilityCampaignListSchema = z
  .array(DomainDeliverabilityCampaignSchema)
  .openapi({ description: '<p/>' })
  .openapi('DomainDeliverabilityCampaignList')

const ListDomainDeliverabilityCampaignsResponseSchema = z
  .object({
    DomainDeliverabilityCampaigns: DomainDeliverabilityCampaignListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of responses, one for each campaign that used the domain to send email during the specified time range.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of the campaign in the list of campaigns.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainDeliverabilityCampaigns'],
    description:
      'An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.',
  })
  .openapi('ListDomainDeliverabilityCampaignsResponse')

const IdentityInfoSchema = z
  .object({
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email identity type. Note: the <code>MANAGED_DOMAIN</code> type is not supported for email identity types.',
        }),
    ).exactOptional(),
    IdentityName: IdentitySchema.and(
      z.any().openapi({ description: 'The address or domain of the identity.' }),
    ).exactOptional(),
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether or not you can send email from the identity.</p> <p>An <i>identity</i> is an email address or domain that you send email from. Before you can send email from an identity, you have to demostrate that you own the identity, and that you authorize Amazon SES to send email from that identity.</p>',
        }),
    ).exactOptional(),
    VerificationStatus: VerificationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The verification status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet been able to verify the identity.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the verification status of the identity.</p> </li> <li> <p> <code>NOT_STARTED</code> – The verification process hasn't been initiated for the identity.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an email identity.', required: [] })
  .openapi('IdentityInfo')

const IdentityInfoListSchema = z.array(IdentityInfoSchema).openapi('IdentityInfoList')

const ListEmailIdentitiesResponseSchema = z
  .object({
    EmailIdentities: IdentityInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that includes all of the email identities associated with your Amazon Web Services account.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there are additional configuration sets to list. To view additional configuration sets, issue another request to <code>ListEmailIdentities</code>, and pass this token in the <code>NextToken</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified.",
    required: [],
  })
  .openapi('ListEmailIdentitiesResponse')

const EmailTemplateMetadataSchema = z
  .object({
    TemplateName: EmailTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time and date the template was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an email template.', required: [] })
  .openapi('EmailTemplateMetadata')

const EmailTemplateMetadataListSchema = z
  .array(EmailTemplateMetadataSchema)
  .openapi({ description: 'A list of the EmailTemplateMetadata object.' })
  .openapi('EmailTemplateMetadataList')

const ListEmailTemplatesResponseSchema = z
  .object({
    TemplatesMetadata: EmailTemplateMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array the contains the name and creation time stamp for each template in your Amazon SES account.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token indicating that there are additional email templates available to be listed. Pass this token to a subsequent <code>ListEmailTemplates</code> call to retrieve the next 10 email templates.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The following elements are returned by the service.', required: [] })
  .openapi('ListEmailTemplatesResponse')

const ImportJobSummarySchema = z
  .object({
    JobId: JobIdSchema.exactOptional(),
    ImportDestination: ImportDestinationSchema.exactOptional(),
    JobStatus: JobStatusSchema.exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the import job was created.' }),
    ).exactOptional(),
    ProcessedRecordsCount: ProcessedRecordsCountSchema.and(
      z.any().openapi({ description: 'The current number of records processed.' }),
    ).exactOptional(),
    FailedRecordsCount: FailedRecordsCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of records that failed processing because of invalid input or other reasons.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of the import job.', required: [] })
  .openapi('ImportJobSummary')

const ImportJobSummaryListSchema = z
  .array(ImportJobSummarySchema)
  .openapi({ description: 'A list of the import job summaries.' })
  .openapi('ImportJobSummaryList')

const ListImportJobsResponseSchema = z
  .object({
    ImportJobs: ImportJobSummaryListSchema.and(
      z.any().openapi({ description: 'A list of the import job summaries.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string token indicating that there might be additional import jobs available to be listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the same parameters to retrieve the next page of import jobs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
    required: [],
  })
  .openapi('ListImportJobsResponse')

const RecommendationTypeSchema = z
  .enum(['DKIM', 'DMARC', 'SPF', 'BIMI'])
  .openapi('RecommendationType')

const RecommendationDescriptionSchema = z.string().openapi('RecommendationDescription')

const RecommendationStatusSchema = z.enum(['OPEN', 'FIXED']).openapi('RecommendationStatus')

const RecommendationImpactSchema = z.enum(['LOW', 'HIGH']).openapi('RecommendationImpact')

const RecommendationSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource affected by the recommendation, with values like <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.',
        }),
    ).exactOptional(),
    Type: RecommendationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation type, with values like <code>DKIM</code>, <code>SPF</code>, <code>DMARC</code> or <code>BIMI</code>.',
        }),
    ).exactOptional(),
    Description: RecommendationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation description / disambiguator - e.g. <code>DKIM1</code> and <code>DKIM2</code> are different recommendations about your DKIM setup.',
        }),
    ).exactOptional(),
    Status: RecommendationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation status, with values like <code>OPEN</code> or <code>FIXED</code>.',
        }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first time this issue was encountered and the recommendation was generated.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the recommendation was updated.' }),
    ).exactOptional(),
    Impact: RecommendationImpactSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation impact, with values like <code>HIGH</code> or <code>LOW</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A recommendation generated for your account.', required: [] })
  .openapi('Recommendation')

const RecommendationsListSchema = z.array(RecommendationSchema).openapi('RecommendationsList')

const ListRecommendationsResponseSchema = z
  .object({
    Recommendations: RecommendationsListSchema.and(
      z.any().openapi({ description: 'The recommendations applicable to your account.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string token indicating that there might be additional recommendations available to be listed. Use the token provided in the <code>ListRecommendationsResponse</code> to use in the subsequent call to <code>ListRecommendations</code> with the same parameters to retrieve the next page of recommendations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the response to your request to retrieve the list of recommendations for your account.',
    required: [],
  })
  .openapi('ListRecommendationsResponse')

const ListRecommendationFilterValueSchema = z
  .string()
  .min(1)
  .max(512)
  .openapi('ListRecommendationFilterValue')

const SuppressedDestinationSummarySchema = z
  .object({
    EmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: "The email address that's on the suppression list for your account.",
        }),
    ),
    Reason: SuppressionListReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason that the address was added to the suppression list for your account.',
        }),
    ),
    LastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the suppressed destination was last updated, shown in Unix time format.',
        }),
    ),
  })
  .openapi({
    required: ['EmailAddress', 'Reason', 'LastUpdateTime'],
    description: 'A summary that describes the suppressed email address.',
  })
  .openapi('SuppressedDestinationSummary')

const SuppressedDestinationSummariesSchema = z
  .array(SuppressedDestinationSummarySchema)
  .openapi('SuppressedDestinationSummaries')

const ListSuppressedDestinationsResponseSchema = z
  .object({
    SuppressedDestinationSummaries: SuppressedDestinationSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of summaries, each containing a summary for a suppressed email destination.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates that there are additional email addresses on the suppression list for your account. To view additional suppressed addresses, issue another request to <code>ListSuppressedDestinations</code>, and pass this token in the <code>NextToken</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of suppressed email addresses.', required: [] })
  .openapi('ListSuppressedDestinationsResponse')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists all the tags that are associated with the resource. Each tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>)',
        }),
    ),
  })
  .openapi({ required: ['Tags'] })
  .openapi('ListTagsForResourceResponse')

const PutAccountDedicatedIpWarmupAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutAccountDedicatedIpWarmupAttributesResponse')

const PutAccountDetailsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutAccountDetailsResponse')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const PutAccountSendingAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutAccountSendingAttributesResponse')

const PutAccountSuppressionAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutAccountSuppressionAttributesResponse')

const PutAccountVdmAttributesResponseSchema = z
  .object({})
  .openapi('PutAccountVdmAttributesResponse')

const PutConfigurationSetDeliveryOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetDeliveryOptionsResponse')

const PutConfigurationSetReputationOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetReputationOptionsResponse')

const PutConfigurationSetSendingOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetSendingOptionsResponse')

const PutConfigurationSetSuppressionOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetSuppressionOptionsResponse')

const PutConfigurationSetTrackingOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetTrackingOptionsResponse')

const PutConfigurationSetVdmOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetVdmOptionsResponse')

const PutDedicatedIpInPoolResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutDedicatedIpInPoolResponse')

const PutDedicatedIpPoolScalingAttributesResponseSchema = z
  .object({})
  .openapi({
    example: {},
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutDedicatedIpPoolScalingAttributesResponse')

const PutDedicatedIpWarmupAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutDedicatedIpWarmupAttributesResponse')

const PutDeliverabilityDashboardOptionResponseSchema = z
  .object({})
  .openapi({
    description: 'A response that indicates whether the Deliverability dashboard is enabled.',
  })
  .openapi('PutDeliverabilityDashboardOptionResponse')

const PutEmailIdentityConfigurationSetAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('PutEmailIdentityConfigurationSetAttributesResponse')

const PutEmailIdentityDkimAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutEmailIdentityDkimAttributesResponse')

const PutEmailIdentityDkimSigningAttributesResponseSchema = z
  .object({
    DkimStatus: DkimStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The DKIM authentication status of the identity. Amazon SES determines the authentication status by searching for specific records in the DNS configuration for your domain. If you used <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain.</p> <p>If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity.</p> <p>The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>",
        }),
    ).exactOptional(),
    DkimTokens: DnsTokenListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete.</p> <p>If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector that\'s associated with your public key.</p> <p>Regardless of the DKIM authentication method you use, Amazon SES searches for the appropriate records in the DNS configuration of the domain for up to 72 hours.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>',
    required: [],
  })
  .openapi('PutEmailIdentityDkimSigningAttributesResponse')

const PutEmailIdentityFeedbackAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutEmailIdentityFeedbackAttributesResponse')

const PutEmailIdentityMailFromAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutEmailIdentityMailFromAttributesResponse')

const PutSuppressedDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutSuppressedDestinationResponse')

const BulkEmailStatusSchema = z
  .enum([
    'SUCCESS',
    'MESSAGE_REJECTED',
    'MAIL_FROM_DOMAIN_NOT_VERIFIED',
    'CONFIGURATION_SET_NOT_FOUND',
    'TEMPLATE_NOT_FOUND',
    'ACCOUNT_SUSPENDED',
    'ACCOUNT_THROTTLED',
    'ACCOUNT_DAILY_QUOTA_EXCEEDED',
    'INVALID_SENDING_POOL_NAME',
    'ACCOUNT_SENDING_PAUSED',
    'CONFIGURATION_SET_SENDING_PAUSED',
    'INVALID_PARAMETER',
    'TRANSIENT_FAILURE',
    'FAILED',
  ])
  .openapi('BulkEmailStatus')

const BulkEmailEntryResultSchema = z
  .object({
    Status: BulkEmailStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of a message sent using the <code>SendBulkTemplatedEmail</code> operation.</p> <p>Possible values for this parameter include:</p> <ul> <li> <p>SUCCESS: Amazon SES accepted the message, and will attempt to deliver it to the recipients.</p> </li> <li> <p>MESSAGE_REJECTED: The message was rejected because it contained a virus.</p> </li> <li> <p>MAIL_FROM_DOMAIN_NOT_VERIFIED: The sender\'s email address or domain was not verified.</p> </li> <li> <p>CONFIGURATION_SET_DOES_NOT_EXIST: The configuration set you specified does not exist.</p> </li> <li> <p>TEMPLATE_DOES_NOT_EXIST: The template you specified does not exist.</p> </li> <li> <p>ACCOUNT_SUSPENDED: Your account has been shut down because of issues related to your email sending practices.</p> </li> <li> <p>ACCOUNT_THROTTLED: The number of emails you can send has been reduced because your account has exceeded its allocated sending limit.</p> </li> <li> <p>ACCOUNT_DAILY_QUOTA_EXCEEDED: You have reached or exceeded the maximum number of emails you can send from your account in a 24-hour period.</p> </li> <li> <p>INVALID_SENDING_POOL_NAME: The configuration set you specified refers to an IP pool that does not exist.</p> </li> <li> <p>ACCOUNT_SENDING_PAUSED: Email sending for the Amazon SES account was disabled using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html">UpdateAccountSendingEnabled</a> operation.</p> </li> <li> <p>CONFIGURATION_SET_SENDING_PAUSED: Email sending for this configuration set was disabled using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html">UpdateConfigurationSetSendingEnabled</a> operation.</p> </li> <li> <p>INVALID_PARAMETER_VALUE: One or more of the parameters you specified when calling this operation was invalid. See the error message for additional information.</p> </li> <li> <p>TRANSIENT_FAILURE: Amazon SES was unable to process your request because of a temporary issue.</p> </li> <li> <p>FAILED: Amazon SES was unable to process your request. See the error message for additional information.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Error: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of an error that prevented a message being sent using the <code>SendBulkTemplatedEmail</code> operation.',
        }),
    ).exactOptional(),
    MessageId: OutboundMessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique message identifier returned from the <code>SendBulkTemplatedEmail</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.',
    required: [],
  })
  .openapi('BulkEmailEntryResult')

const BulkEmailEntryResultListSchema = z
  .array(BulkEmailEntryResultSchema)
  .openapi({ description: 'A list of <code>BulkMailEntry</code> objects.' })
  .openapi('BulkEmailEntryResultList')

const SendBulkEmailResponseSchema = z
  .object({
    BulkEmailEntryResults: BulkEmailEntryResultListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One object per intended recipient. Check each response object and retry any messages with a failure status.',
        }),
    ),
  })
  .openapi({
    required: ['BulkEmailEntryResults'],
    description: 'The following data is returned in JSON format by the service.',
  })
  .openapi('SendBulkEmailResponse')

const MessageTagNameSchema = z
  .string()
  .openapi({
    description:
      '<p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>',
  })
  .openapi('MessageTagName')

const MessageTagValueSchema = z
  .string()
  .openapi({
    description:
      '<p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>',
  })
  .openapi('MessageTagValue')

const MessageTagSchema = z
  .object({
    Name: MessageTagNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>',
        }),
    ),
    Value: MessageTagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events. ',
  })
  .openapi('MessageTag')

const EmailAddressListSchema = z.array(EmailAddressSchema).openapi('EmailAddressList')

const DestinationSchema = z
  .object({
    ToAddresses: EmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains the email addresses of the "To" recipients for the email.',
        }),
    ).exactOptional(),
    CcAddresses: EmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains the email addresses of the "CC" (carbon copy) recipients for the email.',
        }),
    ).exactOptional(),
    BccAddresses: EmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains the email addresses of the "BCC" (blind carbon copy) recipients for the email.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
    required: [],
  })
  .openapi('Destination')

const MessageTagListSchema = z
  .array(MessageTagSchema)
  .openapi({ description: 'A list of message tags.' })
  .openapi('MessageTagList')

const ReplacementTemplateSchema = z
  .object({
    ReplacementTemplateData: EmailTemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.',
    required: [],
  })
  .openapi('ReplacementTemplate')

const ReplacementEmailContentSchema = z
  .object({
    ReplacementTemplate: ReplacementTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ReplacementTemplate</code> associated with <code>ReplacementEmailContent</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object.',
    required: [],
  })
  .openapi('ReplacementEmailContent')

const BulkEmailEntrySchema = z
  .object({
    Destination: DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the local part of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the domain part of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
        }),
    ),
    ReplacementTags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send using the <code>SendBulkTemplatedEmail</code> operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
        }),
    ).exactOptional(),
    ReplacementEmailContent: ReplacementEmailContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ReplacementEmailContent</code> associated with a <code>BulkEmailEntry</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Destination'] })
  .openapi('BulkEmailEntry')

const SendCustomVerificationEmailResponseSchema = z
  .object({
    MessageId: OutboundMessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique message identifier returned from the <code>SendCustomVerificationEmail</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The following element is returned by the service.', required: [] })
  .openapi('SendCustomVerificationEmailResponse')

const SendEmailResponseSchema = z
  .object({
    MessageId: OutboundMessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique identifier for the message that is generated when the message is accepted.</p> <note> <p>It's possible for Amazon SES to accept a message without sending it. This can happen when the message that you're trying to send has an attachment contains a virus, or when you send a templated email that contains invalid personalization content, for example.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A unique message ID that you receive when an email is accepted for sending.',
    required: [],
  })
  .openapi('SendEmailResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const RenderedEmailTemplateSchema = z
  .string()
  .openapi({
    description:
      'The complete MIME message rendered by applying the data in the TemplateData parameter to the template specified in the TemplateName parameter.',
  })
  .openapi('RenderedEmailTemplate')

const TestRenderEmailTemplateResponseSchema = z
  .object({
    RenderedTemplate: RenderedEmailTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The complete MIME message rendered by applying the data in the <code>TemplateData</code> parameter to the template specified in the TemplateName parameter.',
        }),
    ),
  })
  .openapi({
    required: ['RenderedTemplate'],
    description: 'The following element is returned by the service.',
  })
  .openapi('TestRenderEmailTemplateResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('UpdateConfigurationSetEventDestinationResponse')

const UpdateContactResponseSchema = z.object({}).openapi('UpdateContactResponse')

const UpdateContactListResponseSchema = z.object({}).openapi('UpdateContactListResponse')

const UpdateCustomVerificationEmailTemplateResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('UpdateCustomVerificationEmailTemplateResponse')

const UpdateEmailIdentityPolicyResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('UpdateEmailIdentityPolicyResponse')

const UpdateEmailTemplateResponseSchema = z
  .object({})
  .openapi({
    description:
      'If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.',
  })
  .openapi('UpdateEmailTemplateResponse')

const BatchGetMetricDataQueriesSchema = z
  .array(BatchGetMetricDataQuerySchema)
  .min(1)
  .max(10)
  .openapi('BatchGetMetricDataQueries')

const BatchGetMetricDataRequestSchema = z
  .object({
    Queries: BatchGetMetricDataQueriesSchema.and(
      z.any().openapi({ description: 'A list of queries for metrics to be retrieved.' }),
    ),
  })
  .openapi({
    required: ['Queries'],
    title: 'BatchGetMetricDataRequest',
    description: 'Represents a request to retrieve a batch of metric data.',
  })
  .openapi('BatchGetMetricDataRequest')

const BlacklistItemNamesSchema = z.array(BlacklistItemNameSchema).openapi('BlacklistItemNames')

const BulkEmailContentSchema = z
  .object({
    Template: TemplateSchema.and(
      z.any().openapi({ description: 'The template to use for the bulk email message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains the body of the message. You can specify a template message.',
    required: [],
  })
  .openapi('BulkEmailContent')

const BulkEmailEntryListSchema = z
  .array(BulkEmailEntrySchema)
  .openapi({ description: 'A list of <code>BulkEmailEntry</code> objects.' })
  .openapi('BulkEmailEntryList')

const EventDestinationDefinitionSchema = z
  .object({
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If <code>true</code>, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this <code>EventDestinationDefinition</code>.</p> <p>If <code>false</code>, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.</p>",
        }),
    ).exactOptional(),
    MatchingEventTypes: EventTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that specifies which events the Amazon SES API v2 should send to the destinations in this <code>EventDestinationDefinition</code>.',
        }),
    ).exactOptional(),
    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.',
        }),
    ).exactOptional(),
    CloudWatchDestination: CloudWatchDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.',
        }),
    ).exactOptional(),
    SnsDestination: SnsDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.',
        }),
    ).exactOptional(),
    PinpointDestination: PinpointDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.',
    required: [],
  })
  .openapi('EventDestinationDefinition')

const CreateConfigurationSetEventDestinationRequestSchema = z
  .object({
    EventDestinationName: EventDestinationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name that identifies the event destination within the configuration set.',
        }),
    ),
    EventDestination: EventDestinationDefinitionSchema.and(
      z.any().openapi({ description: 'An object that defines the event destination.' }),
    ),
  })
  .openapi({
    required: ['EventDestinationName', 'EventDestination'],
    title: 'CreateConfigurationSetEventDestinationRequest',
    description: 'A request to add an event destination to a configuration set.',
  })
  .openapi('CreateConfigurationSetEventDestinationRequest')

const CreateConfigurationSetRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.',
        }),
    ),
    TrackingOptions: TrackingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the open and click tracking options for emails that you send using the configuration set.',
        }),
    ).exactOptional(),
    DeliveryOptions: DeliveryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.',
        }),
    ).exactOptional(),
    ReputationOptions: ReputationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.',
        }),
    ).exactOptional(),
    SendingOptions: SendingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines whether or not Amazon SES can send email that you send using the configuration set.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) to associate with the configuration set.',
        }),
    ).exactOptional(),
    SuppressionOptions: SuppressionOptionsSchema.exactOptional(),
    VdmOptions: VdmOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the VDM options for emails that you send using the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationSetName'],
    title: 'CreateConfigurationSetRequest',
    description: 'A request to create a configuration set.',
  })
  .openapi('CreateConfigurationSetRequest')

const CreateContactListRequestSchema = z
  .object({
    ContactListName: ContactListNameSchema.and(
      z.any().openapi({ description: 'The name of the contact list.' }),
    ),
    Topics: TopicsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An interest group, theme, or label within a list. A contact list can have multiple topics.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of what the contact list is about.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with a contact list.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContactListName'], title: 'CreateContactListRequest' })
  .openapi('CreateContactListRequest')

const CreateContactRequestSchema = z
  .object({
    EmailAddress: EmailAddressSchema.and(
      z.any().openapi({ description: "The contact's email address." }),
    ),
    TopicPreferences: TopicPreferenceListSchema.and(
      z
        .any()
        .openapi({
          description: "The contact's preferences for being opted-in to or opted-out of topics.",
        }),
    ).exactOptional(),
    UnsubscribeAll: UnsubscribeAllSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value status noting if the contact is unsubscribed from all contact list topics.',
        }),
    ).exactOptional(),
    AttributesData: AttributesDataSchema.and(
      z.any().openapi({ description: 'The attribute data attached to a contact.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['EmailAddress'], title: 'CreateContactRequest' })
  .openapi('CreateContactRequest')

const CreateCustomVerificationEmailTemplateRequestSchema = z
  .object({
    TemplateName: EmailTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the custom verification email template.' }),
    ),
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ),
    TemplateSubject: EmailTemplateSubjectSchema.and(
      z.any().openapi({ description: 'The subject line of the custom verification email.' }),
    ),
    TemplateContent: TemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq">Custom verification email frequently asked questions</a> in the <i>Amazon SES Developer Guide</i>.',
        }),
    ),
    SuccessRedirectionURL: SuccessRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
        }),
    ),
    FailureRedirectionURL: FailureRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
        }),
    ),
  })
  .openapi({
    required: [
      'TemplateName',
      'FromEmailAddress',
      'TemplateSubject',
      'TemplateContent',
      'SuccessRedirectionURL',
      'FailureRedirectionURL',
    ],
    title: 'CreateCustomVerificationEmailTemplateRequest',
    description: 'Represents a request to create a custom verification email template.',
  })
  .openapi('CreateCustomVerificationEmailTemplateRequest')

const CreateDedicatedIpPoolRequestSchema = z
  .object({
    PoolName: PoolNameSchema.and(
      z.any().openapi({ description: 'The name of the dedicated IP pool.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the tags (keys and values) that you want to associate with the pool.',
        }),
    ).exactOptional(),
    ScalingMode: ScalingModeSchema.and(
      z.any().openapi({ description: 'The type of scaling mode.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PoolName'],
    title: 'CreateDedicatedIpPoolRequest',
    description: 'A request to create a new dedicated IP pool.',
  })
  .openapi('CreateDedicatedIpPoolRequest')

const EmailContentSchema = z
  .object({
    Simple: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The simple email message. The message consists of a subject and a message body.',
        }),
    ).exactOptional(),
    Raw: RawMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>If you include attachments, they must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Template: TemplateSchema.and(
      z.any().openapi({ description: 'The template to use for the email message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.',
    required: [],
  })
  .openapi('EmailContent')

const CreateDeliverabilityTestReportRequestSchema = z
  .object({
    ReportName: ReportNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique name that helps you to identify the predictive inbox placement test when you retrieve the results.',
        }),
    ).exactOptional(),
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address that the predictive inbox placement test email was sent from.',
        }),
    ),
    Content: EmailContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTML body of the message that you sent when you performed the predictive inbox placement test.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FromEmailAddress', 'Content'],
    title: 'CreateDeliverabilityTestReportRequest',
    description:
      'A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. We send that message to special email addresses spread across several major email providers around the world. The test takes about 24 hours to complete. When the test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.',
  })
  .openapi('CreateDeliverabilityTestReportRequest')

const PolicyNameSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({
    description:
      '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
  })
  .openapi('PolicyName')

const CreateEmailIdentityPolicyRequestSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Policy'],
    title: 'CreateEmailIdentityPolicyRequest',
    description:
      'Represents a request to create a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateEmailIdentityPolicyRequest')

const DkimSigningAttributesSchema = z
  .object({
    DomainSigningSelector: SelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            "[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.",
        }),
    ).exactOptional(),
    DomainSigningPrivateKey: PrivateKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.</p> <p>The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.</p>",
        }),
    ).exactOptional(),
    NextSigningKeyLength: DkimSigningKeyLengthSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM',
    required: [],
  })
  .openapi('DkimSigningAttributes')

const CreateEmailIdentityRequestSchema = z
  .object({
    EmailIdentity: IdentitySchema.and(
      z.any().openapi({ description: 'The email address or domain to verify.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) to associate with the email identity.',
        }),
    ).exactOptional(),
    DkimSigningAttributes: DkimSigningAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>You can only specify this object if the email identity is a domain, as opposed to an address.</p>',
        }),
    ).exactOptional(),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EmailIdentity'],
    title: 'CreateEmailIdentityRequest',
    description:
      'A request to begin the verification process for an email identity (an email address or domain).',
  })
  .openapi('CreateEmailIdentityRequest')

const CreateEmailTemplateRequestSchema = z
  .object({
    TemplateName: EmailTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template.' }),
    ),
    TemplateContent: EmailTemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the email template, composed of a subject line, an HTML part, and a text-only part.',
        }),
    ),
  })
  .openapi({
    required: ['TemplateName', 'TemplateContent'],
    title: 'CreateEmailTemplateRequest',
    description:
      'Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateEmailTemplateRequest')

const CreateImportJobRequestSchema = z
  .object({
    ImportDestination: ImportDestinationSchema.and(
      z.any().openapi({ description: 'The destination for the import job.' }),
    ),
    ImportDataSource: ImportDataSourceSchema.and(
      z.any().openapi({ description: 'The data source for the import job.' }),
    ),
  })
  .openapi({
    required: ['ImportDestination', 'ImportDataSource'],
    title: 'CreateImportJobRequest',
    description:
      'Represents a request to create an import job from a data source for a data destination.',
  })
  .openapi('CreateImportJobRequest')

const DeleteConfigurationSetEventDestinationRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteConfigurationSetEventDestinationRequest',
    description: 'A request to delete an event destination from a configuration set.',
  })
  .openapi('DeleteConfigurationSetEventDestinationRequest')

const DeleteConfigurationSetRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteConfigurationSetRequest',
    description: 'A request to delete a configuration set.',
  })
  .openapi('DeleteConfigurationSetRequest')

const DeleteContactListRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteContactListRequest' })
  .openapi('DeleteContactListRequest')

const DeleteContactRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteContactRequest' })
  .openapi('DeleteContactRequest')

const DeleteCustomVerificationEmailTemplateRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteCustomVerificationEmailTemplateRequest',
    description: 'Represents a request to delete an existing custom verification email template.',
  })
  .openapi('DeleteCustomVerificationEmailTemplateRequest')

const DeleteDedicatedIpPoolRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDedicatedIpPoolRequest',
    description: 'A request to delete a dedicated IP pool.',
  })
  .openapi('DeleteDedicatedIpPoolRequest')

const DeleteEmailIdentityPolicyRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteEmailIdentityPolicyRequest',
    description:
      'Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteEmailIdentityPolicyRequest')

const DeleteEmailIdentityRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteEmailIdentityRequest',
    description:
      'A request to delete an existing email identity. When you delete an identity, you lose the ability to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.',
  })
  .openapi('DeleteEmailIdentityRequest')

const DeleteEmailTemplateRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteEmailTemplateRequest',
    description:
      'Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteEmailTemplateRequest')

const DeleteSuppressedDestinationRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteSuppressedDestinationRequest',
    description: 'A request to remove an email address from the suppression list for your account.',
  })
  .openapi('DeleteSuppressedDestinationRequest')

const EnabledWrapperSchema = z.boolean().openapi('EnabledWrapper')

const GetAccountRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAccountRequest',
    description:
      'A request to obtain information about the email-sending capabilities of your Amazon SES account.',
  })
  .openapi('GetAccountRequest')

const GetBlacklistReportsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetBlacklistReportsRequest',
    description:
      'A request to retrieve a list of the blacklists that your dedicated IP addresses appear on.',
  })
  .openapi('GetBlacklistReportsRequest')

const GetConfigurationSetEventDestinationsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetConfigurationSetEventDestinationsRequest',
    description:
      'A request to obtain information about the event destinations for a configuration set.',
  })
  .openapi('GetConfigurationSetEventDestinationsRequest')

const GetConfigurationSetRequestSchema = z
  .object({})
  .openapi({
    title: 'GetConfigurationSetRequest',
    description: 'A request to obtain information about a configuration set.',
  })
  .openapi('GetConfigurationSetRequest')

const GetContactListRequestSchema = z
  .object({})
  .openapi({ title: 'GetContactListRequest' })
  .openapi('GetContactListRequest')

const GetContactRequestSchema = z
  .object({})
  .openapi({ title: 'GetContactRequest' })
  .openapi('GetContactRequest')

const GetCustomVerificationEmailTemplateRequestSchema = z
  .object({})
  .openapi({
    title: 'GetCustomVerificationEmailTemplateRequest',
    description: 'Represents a request to retrieve an existing custom verification email template.',
  })
  .openapi('GetCustomVerificationEmailTemplateRequest')

const GetDedicatedIpPoolRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDedicatedIpPoolRequest',
    description: 'A request to obtain more information about a dedicated IP pool.',
  })
  .openapi('GetDedicatedIpPoolRequest')

const GetDedicatedIpRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDedicatedIpRequest',
    description: 'A request to obtain more information about a dedicated IP address.',
  })
  .openapi('GetDedicatedIpRequest')

const MaxItemsSchema = z.int().openapi('MaxItems')

const GetDedicatedIpsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDedicatedIpsRequest',
    description: 'A request to obtain more information about dedicated IP pools.',
  })
  .openapi('GetDedicatedIpsRequest')

const GetDeliverabilityDashboardOptionsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDeliverabilityDashboardOptionsRequest',
    description:
      '<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Web Services account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>',
  })
  .openapi('GetDeliverabilityDashboardOptionsRequest')

const GetDeliverabilityTestReportRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDeliverabilityTestReportRequest',
    description: 'A request to retrieve the results of a predictive inbox placement test.',
  })
  .openapi('GetDeliverabilityTestReportRequest')

const GetDomainDeliverabilityCampaignRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDomainDeliverabilityCampaignRequest',
    description:
      'Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).',
  })
  .openapi('GetDomainDeliverabilityCampaignRequest')

const GetDomainStatisticsReportRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDomainStatisticsReportRequest',
    description: 'A request to obtain deliverability metrics for a domain.',
  })
  .openapi('GetDomainStatisticsReportRequest')

const GetEmailIdentityPoliciesRequestSchema = z
  .object({})
  .openapi({
    title: 'GetEmailIdentityPoliciesRequest',
    description: 'A request to return the policies of an email identity.',
  })
  .openapi('GetEmailIdentityPoliciesRequest')

const GetEmailIdentityRequestSchema = z
  .object({})
  .openapi({
    title: 'GetEmailIdentityRequest',
    description: 'A request to return details about an email identity.',
  })
  .openapi('GetEmailIdentityRequest')

const GetEmailTemplateRequestSchema = z
  .object({})
  .openapi({
    title: 'GetEmailTemplateRequest',
    description:
      'Represents a request to display the template object (which includes the subject line, HTML part and text part) for the template you specify.',
  })
  .openapi('GetEmailTemplateRequest')

const GetImportJobRequestSchema = z
  .object({})
  .openapi({
    title: 'GetImportJobRequest',
    description:
      'Represents a request for information about an import job using the import job ID.',
  })
  .openapi('GetImportJobRequest')

const GetSuppressedDestinationRequestSchema = z
  .object({})
  .openapi({
    title: 'GetSuppressedDestinationRequest',
    description:
      "A request to retrieve information about an email address that's on the suppression list for your account.",
  })
  .openapi('GetSuppressedDestinationRequest')

const ImportDestinationTypeSchema = z
  .enum(['SUPPRESSION_LIST', 'CONTACT_LIST'])
  .openapi({
    description:
      'The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>.',
  })
  .openapi('ImportDestinationType')

const ListConfigurationSetsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListConfigurationSetsRequest',
    description:
      'A request to obtain a list of configuration sets for your Amazon SES account in the current Amazon Web Services Region.',
  })
  .openapi('ListConfigurationSetsRequest')

const ListContactListsRequestSchema = z
  .object({})
  .openapi({ title: 'ListContactListsRequest' })
  .openapi('ListContactListsRequest')

const ListContactsFilterSchema = z
  .object({
    FilteredStatus: SubscriptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status by which you are filtering: <code>OPT_IN</code> or <code>OPT_OUT</code>.',
        }),
    ).exactOptional(),
    TopicFilter: TopicFilterSchema.and(
      z.any().openapi({ description: 'Used for filtering by a specific topic preference.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A filter that can be applied to a list of contacts.', required: [] })
  .openapi('ListContactsFilter')

const ListContactsRequestSchema = z
  .object({
    Filter: ListContactsFilterSchema.and(
      z.any().openapi({ description: 'A filter that can be applied to a list of contacts.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListContactsRequest', required: [] })
  .openapi('ListContactsRequest')

const ListCustomVerificationEmailTemplatesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListCustomVerificationEmailTemplatesRequest',
    description:
      'Represents a request to list the existing custom verification email templates for your account.',
  })
  .openapi('ListCustomVerificationEmailTemplatesRequest')

const ListDedicatedIpPoolsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDedicatedIpPoolsRequest',
    description: 'A request to obtain a list of dedicated IP pools.',
  })
  .openapi('ListDedicatedIpPoolsRequest')

const ListDeliverabilityTestReportsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDeliverabilityTestReportsRequest',
    description:
      "A request to list all of the predictive inbox placement tests that you've performed.",
  })
  .openapi('ListDeliverabilityTestReportsRequest')

const ListDomainDeliverabilityCampaignsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDomainDeliverabilityCampaignsRequest',
    description:
      'Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard.',
  })
  .openapi('ListDomainDeliverabilityCampaignsRequest')

const ListEmailIdentitiesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListEmailIdentitiesRequest',
    description:
      "A request to list all of the email identities associated with your Amazon Web Services account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.",
  })
  .openapi('ListEmailIdentitiesRequest')

const ListEmailTemplatesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListEmailTemplatesRequest',
    description:
      'Represents a request to list the email templates present in your Amazon SES account in the current Amazon Web Services Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('ListEmailTemplatesRequest')

const ListImportJobsRequestSchema = z
  .object({
    ImportDestinationType: ImportDestinationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListImportJobsRequest',
    description:
      'Represents a request to list all of the import jobs for a data destination within the specified maximum number of import jobs.',
    required: [],
  })
  .openapi('ListImportJobsRequest')

const ListManagementOptionsSchema = z
  .object({
    ContactListName: ContactListNameSchema.and(
      z.any().openapi({ description: 'The name of the contact list.' }),
    ),
    TopicName: TopicNameSchema.and(
      z.any().openapi({ description: 'The name of the topic.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ContactListName'],
    description:
      'An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.',
  })
  .openapi('ListManagementOptions')

const ListRecommendationsFilterSchema = z
  .record(z.string(), ListRecommendationFilterValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 2)
  .openapi({
    description:
      'An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by.',
  })
  .openapi('ListRecommendationsFilter')

const ListRecommendationsFilterKeySchema = z
  .enum(['TYPE', 'IMPACT', 'STATUS', 'RESOURCE_ARN'])
  .openapi({
    description:
      '<p>The <code>ListRecommendations</code> filter type. This can be one of the following:</p> <ul> <li> <p> <code>TYPE</code> – The recommendation type, with values like <code>DKIM</code>, <code>SPF</code>, <code>DMARC</code> or <code>BIMI</code>.</p> </li> <li> <p> <code>IMPACT</code> – The recommendation impact, with values like <code>HIGH</code> or <code>LOW</code>.</p> </li> <li> <p> <code>STATUS</code> – The recommendation status, with values like <code>OPEN</code> or <code>FIXED</code>.</p> </li> <li> <p> <code>RESOURCE_ARN</code> – The resource affected by the recommendation, with values like <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> </li> </ul>',
  })
  .openapi('ListRecommendationsFilterKey')

const ListRecommendationsRequestSchema = z
  .object({
    Filter: ListRecommendationsFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters applied when retrieving recommendations. Can eiter be an individual filter, or combinations of <code>STATUS</code> and <code>IMPACT</code> or <code>STATUS</code> and <code>TYPE</code> ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token returned from a previous call to <code>ListRecommendations</code> to indicate the position in the list of recommendations.',
        }),
    ).exactOptional(),
    PageSize: MaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of results to show in a single call to <code>ListRecommendations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 100.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListRecommendationsRequest',
    description: 'Represents a request to list the existing recommendations for your account.',
    required: [],
  })
  .openapi('ListRecommendationsRequest')

const ListSuppressedDestinationsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListSuppressedDestinationsRequest',
    description:
      'A request to obtain a list of email destinations that are on the suppression list for your account.',
  })
  .openapi('ListSuppressedDestinationsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const MetricDimensionNameSchema = z
  .enum(['EMAIL_IDENTITY', 'CONFIGURATION_SET', 'ISP'])
  .openapi({
    description:
      '<p>The <code>BatchGetMetricDataQuery</code> dimension name. This can be one of the following:</p> <ul> <li> <p> <code>EMAIL_IDENTITY</code> – The email identity used when sending messages.</p> </li> <li> <p> <code>CONFIGURATION_SET</code> – The configuration set used when sending messages (if one was used).</p> </li> <li> <p> <code>ISP</code> – The recipient ISP (e.g. <code>Gmail</code>, <code>Yahoo</code>, etc.).</p> </li> </ul>',
  })
  .openapi('MetricDimensionName')

const PutAccountDedicatedIpWarmupAttributesRequestSchema = z
  .object({
    AutoWarmupEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current Amazon Web Services Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutAccountDedicatedIpWarmupAttributesRequest',
    description: 'A request to enable or disable the automatic IP address warm-up feature.',
    required: [],
  })
  .openapi('PutAccountDedicatedIpWarmupAttributesRequest')

const PutAccountDetailsRequestSchema = z
  .object({
    MailType: MailTypeSchema.and(
      z.any().openapi({ description: 'The type of email your account will send.' }),
    ),
    WebsiteURL: WebsiteURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of your website. This information helps us better understand the type of content that you plan to send.',
        }),
    ),
    ContactLanguage: ContactLanguageSchema.and(
      z.any().openapi({ description: 'The language you would prefer to be contacted with.' }),
    ).exactOptional(),
    UseCaseDescription: UseCaseDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the types of email that you plan to send.' }),
    ),
    AdditionalContactEmailAddresses: AdditionalContactEmailAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional email addresses that you would like to be notified regarding Amazon SES matters.',
        }),
    ).exactOptional(),
    ProductionAccessEnabled: EnabledWrapperSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether or not your account should have production access in the current Amazon Web Services Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MailType', 'WebsiteURL', 'UseCaseDescription'],
    title: 'PutAccountDetailsRequest',
    description: 'A request to submit new account details.',
  })
  .openapi('PutAccountDetailsRequest')

const PutAccountSendingAttributesRequestSchema = z
  .object({
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If Amazon Web Services paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutAccountSendingAttributesRequest',
    description: 'A request to change the ability of your account to send email.',
    required: [],
  })
  .openapi('PutAccountSendingAttributesRequest')

const PutAccountSuppressionAttributesRequestSchema = z
  .object({
    SuppressedReasons: SuppressionListReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutAccountSuppressionAttributesRequest',
    description: "A request to change your account's suppression preferences.",
    required: [],
  })
  .openapi('PutAccountSuppressionAttributesRequest')

const PutAccountVdmAttributesRequestSchema = z
  .object({
    VdmAttributes: VdmAttributesSchema.and(
      z
        .any()
        .openapi({
          description: 'The VDM attributes that you wish to apply to your Amazon SES account.',
        }),
    ),
  })
  .openapi({
    required: ['VdmAttributes'],
    title: 'PutAccountVdmAttributesRequest',
    description: 'A request to submit new account VDM attributes.',
  })
  .openapi('PutAccountVdmAttributesRequest')

const SendingPoolNameSchema = z
  .string()
  .openapi({
    description: 'The name of the dedicated IP pool to associate with the configuration set.',
  })
  .openapi('SendingPoolName')

const PutConfigurationSetDeliveryOptionsRequestSchema = z
  .object({
    TlsPolicy: TlsPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.",
        }),
    ).exactOptional(),
    SendingPoolName: SendingPoolNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the dedicated IP pool to associate with the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutConfigurationSetDeliveryOptionsRequest',
    description: 'A request to associate a configuration set with a dedicated IP pool.',
    required: [],
  })
  .openapi('PutConfigurationSetDeliveryOptionsRequest')

const PutConfigurationSetReputationOptionsRequestSchema = z
  .object({
    ReputationMetricsEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutConfigurationSetReputationOptionsRequest',
    description:
      'A request to enable or disable tracking of reputation metrics for a configuration set.',
    required: [],
  })
  .openapi('PutConfigurationSetReputationOptionsRequest')

const PutConfigurationSetSendingOptionsRequestSchema = z
  .object({
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutConfigurationSetSendingOptionsRequest',
    description:
      'A request to enable or disable the ability of Amazon SES to send emails that use a specific configuration set.',
    required: [],
  })
  .openapi('PutConfigurationSetSendingOptionsRequest')

const PutConfigurationSetSuppressionOptionsRequestSchema = z
  .object({
    SuppressedReasons: SuppressionListReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutConfigurationSetSuppressionOptionsRequest',
    description:
      'A request to change the account suppression list preferences for a specific configuration set.',
    required: [],
  })
  .openapi('PutConfigurationSetSuppressionOptionsRequest')

const PutConfigurationSetTrackingOptionsRequestSchema = z
  .object({
    CustomRedirectDomain: CustomRedirectDomainSchema.and(
      z.any().openapi({ description: 'The domain to use to track open and click events.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutConfigurationSetTrackingOptionsRequest',
    description:
      'A request to add a custom domain for tracking open and click events to a configuration set.',
    required: [],
  })
  .openapi('PutConfigurationSetTrackingOptionsRequest')

const PutConfigurationSetVdmOptionsRequestSchema = z
  .object({
    VdmOptions: VdmOptionsSchema.and(
      z.any().openapi({ description: 'The VDM options to apply to the configuration set.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutConfigurationSetVdmOptionsRequest',
    description: 'A request to add specific VDM settings to a configuration set.',
    required: [],
  })
  .openapi('PutConfigurationSetVdmOptionsRequest')

const PutDedicatedIpInPoolRequestSchema = z
  .object({
    DestinationPoolName: PoolNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IP pool that you want to add the dedicated IP address to. You have to specify an IP pool that already exists.',
        }),
    ),
  })
  .openapi({
    required: ['DestinationPoolName'],
    title: 'PutDedicatedIpInPoolRequest',
    description: 'A request to move a dedicated IP address to a dedicated IP pool.',
  })
  .openapi('PutDedicatedIpInPoolRequest')

const PutDedicatedIpPoolScalingAttributesRequestSchema = z
  .object({
    ScalingMode: ScalingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scaling mode to apply to the dedicated IP pool.</p> <note> <p>Changing the scaling mode from <code>MANAGED</code> to <code>STANDARD</code> is not supported.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['ScalingMode'],
    title: 'PutDedicatedIpPoolScalingAttributesRequest',
    description: 'A request to convert a dedicated IP pool to a different scaling mode.',
  })
  .openapi('PutDedicatedIpPoolScalingAttributesRequest')

const PutDedicatedIpWarmupAttributesRequestSchema = z
  .object({
    WarmupPercentage: Percentage100WrapperSchema.and(
      z
        .any()
        .openapi({
          description:
            'The warm-up percentage that you want to associate with the dedicated IP address.',
        }),
    ),
  })
  .openapi({
    required: ['WarmupPercentage'],
    title: 'PutDedicatedIpWarmupAttributesRequest',
    description:
      'A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address.',
  })
  .openapi('PutDedicatedIpWarmupAttributesRequest')

const PutDeliverabilityDashboardOptionRequestSchema = z
  .object({
    DashboardEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this value to <code>true</code>.',
        }),
    ),
    SubscribedDomains: DomainDeliverabilityTrackingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each verified domain that you use to send email and enabled the Deliverability dashboard for.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DashboardEnabled'],
    title: 'PutDeliverabilityDashboardOptionRequest',
    description:
      '<p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>',
  })
  .openapi('PutDeliverabilityDashboardOptionRequest')

const PutEmailIdentityConfigurationSetAttributesRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration set to associate with an email identity.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutEmailIdentityConfigurationSetAttributesRequest',
    description: 'A request to associate a configuration set with an email identity.',
    required: [],
  })
  .openapi('PutEmailIdentityConfigurationSetAttributesRequest')

const PutEmailIdentityDkimAttributesRequestSchema = z
  .object({
    SigningEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that are sent from the identity are signed using DKIM. If you set this value to <code>false</code>, your messages are sent without DKIM signing.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutEmailIdentityDkimAttributesRequest',
    description:
      'A request to enable or disable DKIM signing of email that you send from an email identity.',
    required: [],
  })
  .openapi('PutEmailIdentityDkimAttributesRequest')

const PutEmailIdentityDkimSigningAttributesRequestSchema = z
  .object({
    SigningAttributesOrigin: DkimSigningAttributesOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The method to use to configure DKIM for the identity. There are the following possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>',
        }),
    ),
    SigningAttributes: DkimSigningAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the private key and selector that you want to use to configure DKIM for the identity for Bring Your Own DKIM (BYODKIM) for the identity, or, configures the key length to be used for <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SigningAttributesOrigin'],
    title: 'PutEmailIdentityDkimSigningAttributesRequest',
    description: 'A request to change the DKIM attributes for an email identity.',
  })
  .openapi('PutEmailIdentityDkimSigningAttributesRequest')

const PutEmailIdentityFeedbackAttributesRequestSchema = z
  .object({
    EmailForwardingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutEmailIdentityFeedbackAttributesRequest',
    description:
      'A request to set the attributes that control how bounce and complaint events are processed.',
    required: [],
  })
  .openapi('PutEmailIdentityFeedbackAttributesRequest')

const PutEmailIdentityMailFromAttributesRequestSchema = z
  .object({
    MailFromDomain: MailFromDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must meet the following criteria:</p> <ul> <li> <p>It has to be a subdomain of the verified identity.</p> </li> <li> <p>It can\'t be used to receive email.</p> </li> <li> <p>It can\'t be used in a "From" address if the MAIL FROM domain is a destination for feedback forwarding emails.</p> </li> </ul>',
        }),
    ).exactOptional(),
    BehaviorOnMxFailure: BehaviorOnMxFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to take if the required MX record isn't found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutEmailIdentityMailFromAttributesRequest',
    description: 'A request to configure the custom MAIL FROM domain for a verified identity.',
    required: [],
  })
  .openapi('PutEmailIdentityMailFromAttributesRequest')

const PutSuppressedDestinationRequestSchema = z
  .object({
    EmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address that should be added to the suppression list for your account.',
        }),
    ),
    Reason: SuppressionListReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The factors that should cause the email address to be added to the suppression list for your account.',
        }),
    ),
  })
  .openapi({
    required: ['EmailAddress', 'Reason'],
    title: 'PutSuppressedDestinationRequest',
    description: 'A request to add an email destination to the suppression list for your account.',
  })
  .openapi('PutSuppressedDestinationRequest')

const SendBulkEmailRequestSchema = z
  .object({
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address to use as the "From" address for the email. The address that you specify has to be verified.',
        }),
    ).exactOptional(),
    FromEmailAddressIdentityArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    ReplyToAddresses: EmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.',
        }),
    ).exactOptional(),
    FeedbackForwardingEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address that you want bounce and complaint notifications to be sent to.',
        }),
    ).exactOptional(),
    FeedbackForwardingEmailAddressIdentityArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    DefaultEmailTags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send using the <code>SendEmail</code> operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
        }),
    ).exactOptional(),
    DefaultContent: BulkEmailContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the body of the message. You can specify a template message.',
        }),
    ),
    BulkEmailEntries: BulkEmailEntryListSchema.and(
      z.any().openapi({ description: 'The list of bulk email entry objects.' }),
    ),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the configuration set to use when sending the email.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DefaultContent', 'BulkEmailEntries'],
    title: 'SendBulkEmailRequest',
    description:
      'Represents a request to send email messages to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SendBulkEmailRequest')

const SendCustomVerificationEmailRequestSchema = z
  .object({
    EmailAddress: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email address to verify.' }),
    ),
    TemplateName: EmailTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom verification email template to use when sending the verification email.',
        }),
    ),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of a configuration set to use when sending the verification email.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EmailAddress', 'TemplateName'],
    title: 'SendCustomVerificationEmailRequest',
    description:
      'Represents a request to send a custom verification email to a specified recipient.',
  })
  .openapi('SendCustomVerificationEmailRequest')

const SendEmailRequestSchema = z
  .object({
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address to use as the "From" address for the email. The address that you specify has to be verified. ',
        }),
    ).exactOptional(),
    FromEmailAddressIdentityArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.</p>',
        }),
    ).exactOptional(),
    Destination: DestinationSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains the recipients of the email message.' }),
    ).exactOptional(),
    ReplyToAddresses: EmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.',
        }),
    ).exactOptional(),
    FeedbackForwardingEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address that you want bounce and complaint notifications to be sent to.',
        }),
    ).exactOptional(),
    FeedbackForwardingEmailAddressIdentityArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    Content: EmailContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the body of the message. You can send either a Simple message Raw message or a template Message.',
        }),
    ),
    EmailTags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send using the <code>SendEmail</code> operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events. ',
        }),
    ).exactOptional(),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the configuration set to use when sending the email.',
        }),
    ).exactOptional(),
    ListManagementOptions: ListManagementOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Content'],
    title: 'SendEmailRequest',
    description:
      'Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SendEmailRequest')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TestRenderEmailTemplateRequestSchema = z
  .object({
    TemplateData: EmailTemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.',
        }),
    ),
  })
  .openapi({
    required: ['TemplateData'],
    title: 'TestRenderEmailTemplateRequest',
    description:
      '&gt;Represents a request to create a preview of the MIME content of an email when provided with a template and a set of replacement data.',
  })
  .openapi('TestRenderEmailTemplateRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateConfigurationSetEventDestinationRequestSchema = z
  .object({
    EventDestination: EventDestinationDefinitionSchema.and(
      z.any().openapi({ description: 'An object that defines the event destination.' }),
    ),
  })
  .openapi({
    required: ['EventDestination'],
    title: 'UpdateConfigurationSetEventDestinationRequest',
    description:
      'A request to change the settings for an event destination for a configuration set.',
  })
  .openapi('UpdateConfigurationSetEventDestinationRequest')

const UpdateContactListRequestSchema = z
  .object({
    Topics: TopicsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An interest group, theme, or label within a list. A contact list can have multiple topics.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of what the contact list is about.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateContactListRequest', required: [] })
  .openapi('UpdateContactListRequest')

const UpdateContactRequestSchema = z
  .object({
    TopicPreferences: TopicPreferenceListSchema.and(
      z
        .any()
        .openapi({
          description: "The contact's preference for being opted-in to or opted-out of a topic.",
        }),
    ).exactOptional(),
    UnsubscribeAll: UnsubscribeAllSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value status noting if the contact is unsubscribed from all contact list topics.',
        }),
    ).exactOptional(),
    AttributesData: AttributesDataSchema.and(
      z.any().openapi({ description: 'The attribute data attached to a contact.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateContactRequest', required: [] })
  .openapi('UpdateContactRequest')

const UpdateCustomVerificationEmailTemplateRequestSchema = z
  .object({
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ),
    TemplateSubject: EmailTemplateSubjectSchema.and(
      z.any().openapi({ description: 'The subject line of the custom verification email.' }),
    ),
    TemplateContent: TemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq">Custom verification email frequently asked questions</a> in the <i>Amazon SES Developer Guide</i>.',
        }),
    ),
    SuccessRedirectionURL: SuccessRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
        }),
    ),
    FailureRedirectionURL: FailureRedirectionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
        }),
    ),
  })
  .openapi({
    required: [
      'FromEmailAddress',
      'TemplateSubject',
      'TemplateContent',
      'SuccessRedirectionURL',
      'FailureRedirectionURL',
    ],
    title: 'UpdateCustomVerificationEmailTemplateRequest',
    description: 'Represents a request to update an existing custom verification email template.',
  })
  .openapi('UpdateCustomVerificationEmailTemplateRequest')

const UpdateEmailIdentityPolicyRequestSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p> For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Policy'],
    title: 'UpdateEmailIdentityPolicyRequest',
    description:
      'Represents a request to update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('UpdateEmailIdentityPolicyRequest')

const UpdateEmailTemplateRequestSchema = z
  .object({
    TemplateContent: EmailTemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the email template, composed of a subject line, an HTML part, and a text-only part.',
        }),
    ),
  })
  .openapi({
    required: ['TemplateContent'],
    title: 'UpdateEmailTemplateRequest',
    description:
      'Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('UpdateEmailTemplateRequest')

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

export const postV2EmailMetricsBatchRoute = createRoute({
  method: 'post',
  path: '/v2/email/metrics/batch',
  description:
    '<p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>',
  operationId: 'BatchGetMetricData',
  request: {
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
              Queries: z
                .array(BatchGetMetricDataQuerySchema)
                .min(1)
                .max(10)
                .openapi({ description: 'A list of queries for metrics to be retrieved.' }),
            })
            .openapi({ required: ['Queries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetMetricDataResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getV2EmailConfigurationSetsRoute = createRoute({
  method: 'get',
  path: '/v2/email/configuration-sets',
  description:
    '<p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
  operationId: 'ListConfigurationSets',
  request: {
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
              'A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position in the list of configuration sets.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'The number of results to show in a single call to <code>ListConfigurationSets</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConfigurationSetsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailConfigurationSetsRoute = createRoute({
  method: 'post',
  path: '/v2/email/configuration-sets',
  description:
    'Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. ',
  operationId: 'CreateConfigurationSet',
  request: {
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
              ConfigurationSetName: z
                .string()
                .openapi({
                  description:
                    '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
                }),
              TrackingOptions: z
                .object({
                  CustomRedirectDomain: CustomRedirectDomainSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The domain to use for tracking open and click events.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "<p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>",
                  required: [],
                }),
              DeliveryOptions: z
                .object({
                  TlsPolicy: TlsPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.",
                      }),
                  ).exactOptional(),
                  SendingPoolName: PoolNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the dedicated IP pool to associate with the configuration set.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Used to associate a configuration set with a dedicated IP pool.',
                  required: [],
                }),
              ReputationOptions: z
                .object({
                  ReputationMetricsEnabled: EnabledSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set.',
                      }),
                  ).exactOptional(),
                  LastFreshStart: LastFreshStartSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region. ',
                  required: [],
                }),
              SendingOptions: z
                .object({
                  SendingEnabled: EnabledSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.',
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of objects that define the tags (keys and values) to associate with the configuration set.',
                }),
              SuppressionOptions: z
                .object({
                  SuppressedReasons: SuppressionListReasonsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains information about the suppression list preferences for your account.',
                  required: [],
                }),
              VdmOptions: z
                .object({
                  DashboardOptions: DashboardOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies additional settings for your VDM configuration as applicable to the Dashboard.',
                      }),
                  ).exactOptional(),
                  GuardianOptions: GuardianOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies additional settings for your VDM configuration as applicable to the Guardian.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that defines the VDM settings that apply to emails that you send using the configuration set.',
                  required: [],
                }),
            })
            .openapi({ required: ['ConfigurationSetName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConfigurationSetResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute = createRoute({
  method: 'get',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations',
  description:
    '<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
  operationId: 'GetConfigurationSetEventDestinations',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set that contains the event destination.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetConfigurationSetEventDestinationsResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute = createRoute({
  method: 'post',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations',
  description:
    '<p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>',
  operationId: 'CreateConfigurationSetEventDestination',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set .',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EventDestinationName: z
                .string()
                .openapi({
                  description:
                    '<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
                }),
              EventDestination: z
                .object({
                  Enabled: EnabledSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>If <code>true</code>, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this <code>EventDestinationDefinition</code>.</p> <p>If <code>false</code>, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.</p>",
                      }),
                  ).exactOptional(),
                  MatchingEventTypes: EventTypesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array that specifies which events the Amazon SES API v2 should send to the destinations in this <code>EventDestinationDefinition</code>.',
                      }),
                  ).exactOptional(),
                  KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.',
                      }),
                  ).exactOptional(),
                  CloudWatchDestination: CloudWatchDestinationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.',
                      }),
                  ).exactOptional(),
                  SnsDestination: SnsDestinationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.',
                      }),
                  ).exactOptional(),
                  PinpointDestination: PinpointDestinationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.',
                  required: [],
                }),
            })
            .openapi({ required: ['EventDestinationName', 'EventDestination'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateConfigurationSetEventDestinationResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailContactListsContactListNameContactsRoute = createRoute({
  method: 'get',
  path: '/v2/email/contact-lists/{ContactListName}/contacts',
  description: 'Lists the contacts present in a specific contact list.',
  operationId: 'ListContacts',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'The number of contacts that may be returned at once, which is dependent on if there are more or less contacts than the value of the PageSize. Use this parameter to paginate results. If additional contacts exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional contacts.',
            schema: { type: 'integer' },
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
              'A string token indicating that there might be additional contacts available to be listed. Use the token provided in the Response to use in the subsequent call to ListContacts with the same parameters to retrieve the next page of contacts.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Filter: z
                .object({
                  FilteredStatus: SubscriptionStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The status by which you are filtering: <code>OPT_IN</code> or <code>OPT_OUT</code>.',
                      }),
                  ).exactOptional(),
                  TopicFilter: TopicFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Used for filtering by a specific topic preference.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A filter that can be applied to a list of contacts.',
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
      content: { 'application/json': { schema: ListContactsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postV2EmailContactListsContactListNameContactsRoute = createRoute({
  method: 'post',
  path: '/v2/email/contact-lists/{ContactListName}/contacts',
  description:
    'Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.',
  operationId: 'CreateContact',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list to which the contact should be added.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EmailAddress: z.string().openapi({ description: "The contact's email address." }),
              TopicPreferences: z
                .array(TopicPreferenceSchema)
                .exactOptional()
                .openapi({
                  description:
                    "The contact's preferences for being opted-in to or opted-out of topics.",
                }),
              UnsubscribeAll: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A boolean value status noting if the contact is unsubscribed from all contact list topics.',
                }),
              AttributesData: z
                .string()
                .exactOptional()
                .openapi({ description: 'The attribute data attached to a contact.' }),
            })
            .openapi({ required: ['EmailAddress'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContactResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const getV2EmailContactListsRoute = createRoute({
  method: 'get',
  path: '/v2/email/contact-lists',
  description: 'Lists all of the contact lists available.',
  operationId: 'ListContactLists',
  request: {
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
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'Maximum number of contact lists to return at once. Use this parameter to paginate results. If additional contact lists exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional lists.',
            schema: { type: 'integer' },
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
              'A string token indicating that there might be additional contact lists available to be listed. Use the token provided in the Response to use in the subsequent call to ListContactLists with the same parameters to retrieve the next page of contact lists.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListContactListsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV2EmailContactListsRoute = createRoute({
  method: 'post',
  path: '/v2/email/contact-lists',
  description: 'Creates a contact list.',
  operationId: 'CreateContactList',
  request: {
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
              ContactListName: z.string().openapi({ description: 'The name of the contact list.' }),
              Topics: z
                .array(TopicSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An interest group, theme, or label within a list. A contact list can have multiple topics.',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A description of what the contact list is about.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags associated with a contact list.' }),
            })
            .openapi({ required: ['ContactListName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContactListResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV2EmailCustomVerificationEmailTemplatesRoute = createRoute({
  method: 'get',
  path: '/v2/email/custom-verification-email-templates',
  description:
    '<p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'ListCustomVerificationEmailTemplates',
  request: {
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
              'A token returned from a previous call to <code>ListCustomVerificationEmailTemplates</code> to indicate the position in the list of custom verification email templates.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              '<p>The number of results to show in a single call to <code>ListCustomVerificationEmailTemplates</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 50.</p>',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListCustomVerificationEmailTemplatesResponseSchema },
      },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailCustomVerificationEmailTemplatesRoute = createRoute({
  method: 'post',
  path: '/v2/email/custom-verification-email-templates',
  description:
    '<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'CreateCustomVerificationEmailTemplate',
  request: {
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
              TemplateName: z
                .string()
                .min(1)
                .openapi({
                  description:
                    'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
                }),
              FromEmailAddress: z
                .string()
                .openapi({
                  description: 'The email address that the custom verification email is sent from.',
                }),
              TemplateSubject: z
                .string()
                .openapi({ description: 'The subject line of the email.' }),
              TemplateContent: z
                .string()
                .openapi({ description: 'The content of the custom verification email template.' }),
              SuccessRedirectionURL: z
                .string()
                .openapi({
                  description:
                    'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
                }),
              FailureRedirectionURL: z
                .string()
                .openapi({
                  description:
                    'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
                }),
            })
            .openapi({
              required: [
                'TemplateName',
                'FromEmailAddress',
                'TemplateSubject',
                'TemplateContent',
                'SuccessRedirectionURL',
                'FailureRedirectionURL',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateCustomVerificationEmailTemplateResponseSchema },
      },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV2EmailDedicatedIpPoolsRoute = createRoute({
  method: 'get',
  path: '/v2/email/dedicated-ip-pools',
  description:
    'List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.',
  operationId: 'ListDedicatedIpPools',
  request: {
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
              'A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate the position in the list of dedicated IP pools.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'The number of results to show in a single call to <code>ListDedicatedIpPools</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDedicatedIpPoolsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailDedicatedIpPoolsRoute = createRoute({
  method: 'post',
  path: '/v2/email/dedicated-ip-pools',
  description:
    'Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.',
  operationId: 'CreateDedicatedIpPool',
  request: {
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
              PoolName: z.string().openapi({ description: 'The name of a dedicated IP pool.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An object that defines the tags (keys and values) that you want to associate with the pool.',
                }),
              ScalingMode: z
                .enum(['STANDARD', 'MANAGED'])
                .exactOptional()
                .openapi({ description: 'The type of scaling mode.' }),
            })
            .openapi({ required: ['PoolName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDedicatedIpPoolResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postV2EmailDeliverabilityDashboardTestRoute = createRoute({
  method: 'post',
  path: '/v2/email/deliverability-dashboard/test',
  description:
    'Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.',
  operationId: 'CreateDeliverabilityTestReport',
  request: {
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
              ReportName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A name that helps you identify a report generated by the Deliverability dashboard.',
                }),
              FromEmailAddress: z
                .string()
                .openapi({
                  description:
                    'The email address that the predictive inbox placement test email was sent from.',
                }),
              Content: z
                .object({
                  Simple: MessageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The simple email message. The message consists of a subject and a message body.',
                      }),
                  ).exactOptional(),
                  Raw: RawMessageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>If you include attachments, they must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  Template: TemplateSchema.and(
                    z.any().openapi({ description: 'The template to use for the email message.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.',
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test.',
                }),
            })
            .openapi({ required: ['FromEmailAddress', 'Content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeliverabilityTestReportResponseSchema } },
    },
    480: {
      description: 'AccountSuspendedException',
      content: { 'application/json': { schema: AccountSuspendedExceptionSchema } },
    },
    481: {
      description: 'SendingPausedException',
      content: { 'application/json': { schema: SendingPausedExceptionSchema } },
    },
    482: {
      description: 'MessageRejected',
      content: { 'application/json': { schema: MessageRejectedSchema } },
    },
    483: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'application/json': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    487: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    488: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const getV2EmailIdentitiesRoute = createRoute({
  method: 'get',
  path: '/v2/email/identities',
  description:
    "Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.",
  operationId: 'ListEmailIdentities',
  request: {
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
              'A token returned from a previous call to <code>ListEmailIdentities</code> to indicate the position in the list of identities.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              '<p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEmailIdentitiesResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailIdentitiesRoute = createRoute({
  method: 'post',
  path: '/v2/email/identities',
  description:
    "<p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>",
  operationId: 'CreateEmailIdentity',
  request: {
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
              EmailIdentity: z
                .string()
                .min(1)
                .openapi({ description: 'The email address or domain to verify.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of objects that define the tags (keys and values) to associate with the email identity.',
                }),
              DkimSigningAttributes: z
                .object({
                  DomainSigningSelector: SelectorSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.",
                      }),
                  ).exactOptional(),
                  DomainSigningPrivateKey: PrivateKeySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.</p> <p>The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.</p>",
                      }),
                  ).exactOptional(),
                  NextSigningKeyLength: DkimSigningKeyLengthSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM',
                  required: [],
                }),
              ConfigurationSetName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
                }),
            })
            .openapi({ required: ['EmailIdentity'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEmailIdentityResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const putV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute = createRoute({
  method: 'put',
  path: '/v2/email/identities/{EmailIdentity}/policies/{PolicyName}',
  description:
    '<p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'UpdateEmailIdentityPolicy',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      PolicyName: z
        .string()
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
            schema: {
              type: 'string',
              description:
                '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Policy: z
                .string()
                .min(1)
                .openapi({
                  description:
                    '<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEmailIdentityPolicyResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute = createRoute({
  method: 'post',
  path: '/v2/email/identities/{EmailIdentity}/policies/{PolicyName}',
  description:
    '<p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'CreateEmailIdentityPolicy',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      PolicyName: z
        .string()
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
            schema: {
              type: 'string',
              description:
                '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Policy: z
                .string()
                .min(1)
                .openapi({
                  description:
                    '<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEmailIdentityPolicyResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute = createRoute({
  method: 'delete',
  path: '/v2/email/identities/{EmailIdentity}/policies/{PolicyName}',
  description:
    '<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'DeleteEmailIdentityPolicy',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      PolicyName: z
        .string()
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
            schema: {
              type: 'string',
              description:
                '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEmailIdentityPolicyResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailTemplatesRoute = createRoute({
  method: 'get',
  path: '/v2/email/templates',
  description:
    '<p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'ListEmailTemplates',
  request: {
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
              'A token returned from a previous call to <code>ListEmailTemplates</code> to indicate the position in the list of email templates.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              '<p>The number of results to show in a single call to <code>ListEmailTemplates</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 10.</p>',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEmailTemplatesResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailTemplatesRoute = createRoute({
  method: 'post',
  path: '/v2/email/templates',
  description:
    '<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TemplateName: z
                .string()
                .min(1)
                .openapi({
                  description:
                    'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
                }),
              TemplateContent: z
                .object({
                  Subject: EmailTemplateSubjectSchema.and(
                    z.any().openapi({ description: 'The subject line of the email.' }),
                  ).exactOptional(),
                  Text: EmailTemplateTextSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The email body that will be visible to recipients whose email clients do not display HTML.',
                      }),
                  ).exactOptional(),
                  Html: EmailTemplateHtmlSchema.and(
                    z.any().openapi({ description: 'The HTML body of the email.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
                  required: [],
                }),
            })
            .openapi({ required: ['TemplateName', 'TemplateContent'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEmailTemplateResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV2EmailImportJobsRoute = createRoute({
  method: 'get',
  path: '/v2/email/import-jobs',
  description: 'Lists all of the import jobs.',
  operationId: 'ListImportJobs',
  request: {
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
              'A string token indicating that there might be additional import jobs available to be listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the same parameters to retrieve the next page of import jobs.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'Maximum number of import jobs to return at once. Use this parameter to paginate results. If additional import jobs exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional addresses.',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ImportDestinationType: z
                .enum(['SUPPRESSION_LIST', 'CONTACT_LIST'])
                .exactOptional()
                .openapi({
                  description:
                    'The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>.',
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
      content: { 'application/json': { schema: ListImportJobsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailImportJobsRoute = createRoute({
  method: 'post',
  path: '/v2/email/import-jobs',
  description: 'Creates an import job for a data destination.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ImportDestination: z
                .object({
                  SuppressionListDestination: SuppressionListDestinationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that contains the action of the import job towards suppression list.',
                      }),
                  ).exactOptional(),
                  ContactListDestination: ContactListDestinationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that contains the action of the import job towards a contact list.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that contains details about the resource destination the import job is going to target.',
                  required: [],
                }),
              ImportDataSource: z
                .object({
                  S3Url: S3UrlSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An Amazon S3 URL in the format s3://<i>&lt;bucket_name&gt;</i>/<i>&lt;object&gt;</i>.',
                      }),
                  ).exactOptional(),
                  DataFormat: DataFormatSchema.and(
                    z
                      .any()
                      .openapi({ description: "The data format of the import job's data source." }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that contains details about the data source of the import job.',
                  required: [],
                }),
            })
            .openapi({ required: ['ImportDestination', 'ImportDataSource'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateImportJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2EmailConfigurationSetsConfigurationSetNameRoute = createRoute({
  method: 'get',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}',
  description:
    "<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>",
  operationId: 'GetConfigurationSet',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConfigurationSetResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2EmailConfigurationSetsConfigurationSetNameRoute = createRoute({
  method: 'delete',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}',
  description:
    '<p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
  operationId: 'DeleteConfigurationSet',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConfigurationSetResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
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
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const putV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute =
  createRoute({
    method: 'put',
    path: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
    description:
      '<p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
    operationId: 'UpdateConfigurationSetEventDestination',
    request: {
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
        ConfigurationSetName: z
          .string()
          .openapi({
            param: {
              name: 'ConfigurationSetName',
              in: 'path',
              required: true,
              description:
                'The name of the configuration set that contains the event destination to modify.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
              },
            },
            description:
              '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
          }),
        EventDestinationName: z
          .string()
          .openapi({
            param: {
              name: 'EventDestinationName',
              in: 'path',
              required: true,
              description: 'The name of the event destination.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
              },
            },
            description:
              '<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                EventDestination: z
                  .object({
                    Enabled: EnabledSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "<p>If <code>true</code>, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this <code>EventDestinationDefinition</code>.</p> <p>If <code>false</code>, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.</p>",
                        }),
                    ).exactOptional(),
                    MatchingEventTypes: EventTypesSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An array that specifies which events the Amazon SES API v2 should send to the destinations in this <code>EventDestinationDefinition</code>.',
                        }),
                    ).exactOptional(),
                    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.',
                        }),
                    ).exactOptional(),
                    CloudWatchDestination: CloudWatchDestinationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.',
                        }),
                    ).exactOptional(),
                    SnsDestination: SnsDestinationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.',
                        }),
                    ).exactOptional(),
                    PinpointDestination: PinpointDestinationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.',
                    required: [],
                  }),
              })
              .openapi({ required: ['EventDestination'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateConfigurationSetEventDestinationResponseSchema },
        },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const deleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute =
  createRoute({
    method: 'delete',
    path: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
    description:
      '<p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
    operationId: 'DeleteConfigurationSetEventDestination',
    request: {
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
        ConfigurationSetName: z
          .string()
          .openapi({
            param: {
              name: 'ConfigurationSetName',
              in: 'path',
              required: true,
              description:
                'The name of the configuration set that contains the event destination to delete.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
              },
            },
            description:
              '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
          }),
        EventDestinationName: z
          .string()
          .openapi({
            param: {
              name: 'EventDestinationName',
              in: 'path',
              required: true,
              description: 'The name of the event destination to delete.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
              },
            },
            description:
              '<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteConfigurationSetEventDestinationResponseSchema },
        },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getV2EmailContactListsContactListNameContactsEmailAddressRoute = createRoute({
  method: 'get',
  path: '/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}',
  description: 'Returns a contact from a contact list.',
  operationId: 'GetContact',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list to which the contact belongs.',
            schema: { type: 'string' },
          },
        }),
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'path',
            required: true,
            description: "The contact's email address.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const putV2EmailContactListsContactListNameContactsEmailAddressRoute = createRoute({
  method: 'put',
  path: '/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}',
  description:
    "Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.",
  operationId: 'UpdateContact',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list.',
            schema: { type: 'string' },
          },
        }),
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'path',
            required: true,
            description: "The contact's email address.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TopicPreferences: z
                .array(TopicPreferenceSchema)
                .exactOptional()
                .openapi({
                  description:
                    "The contact's preference for being opted-in to or opted-out of a topic.",
                }),
              UnsubscribeAll: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A boolean value status noting if the contact is unsubscribed from all contact list topics.',
                }),
              AttributesData: z
                .string()
                .exactOptional()
                .openapi({ description: 'The attribute data attached to a contact.' }),
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
      content: { 'application/json': { schema: UpdateContactResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const deleteV2EmailContactListsContactListNameContactsEmailAddressRoute = createRoute({
  method: 'delete',
  path: '/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}',
  description: 'Removes a contact from a contact list.',
  operationId: 'DeleteContact',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list from which the contact should be removed.',
            schema: { type: 'string' },
          },
        }),
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'path',
            required: true,
            description: "The contact's email address.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContactResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getV2EmailContactListsContactListNameRoute = createRoute({
  method: 'get',
  path: '/v2/email/contact-lists/{ContactListName}',
  description:
    'Returns contact list metadata. It does not return any information about the contacts present in the list.',
  operationId: 'GetContactList',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactListResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailContactListsContactListNameRoute = createRoute({
  method: 'put',
  path: '/v2/email/contact-lists/{ContactListName}',
  description: 'Updates contact list metadata. This operation does a complete replacement.',
  operationId: 'UpdateContactList',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Topics: z
                .array(TopicSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An interest group, theme, or label within a list. A contact list can have multiple topics.',
                }),
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A description of what the contact list is about.' }),
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
      content: { 'application/json': { schema: UpdateContactListResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const deleteV2EmailContactListsContactListNameRoute = createRoute({
  method: 'delete',
  path: '/v2/email/contact-lists/{ContactListName}',
  description: 'Deletes a contact list and all of the contacts on that list.',
  operationId: 'DeleteContactList',
  request: {
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
      ContactListName: z
        .string()
        .openapi({
          param: {
            name: 'ContactListName',
            in: 'path',
            required: true,
            description: 'The name of the contact list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContactListResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const getV2EmailCustomVerificationEmailTemplatesTemplateNameRoute = createRoute({
  method: 'get',
  path: '/v2/email/custom-verification-email-templates/{TemplateName}',
  description:
    '<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GetCustomVerificationEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'path',
            required: true,
            description:
              'The name of the custom verification email template that you want to retrieve.',
            schema: {
              type: 'string',
              description:
                'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
              minLength: 1,
            },
          },
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCustomVerificationEmailTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailCustomVerificationEmailTemplatesTemplateNameRoute = createRoute({
  method: 'put',
  path: '/v2/email/custom-verification-email-templates/{TemplateName}',
  description:
    '<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'UpdateCustomVerificationEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'path',
            required: true,
            description:
              'The name of the custom verification email template that you want to update.',
            schema: {
              type: 'string',
              description:
                'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
              minLength: 1,
            },
          },
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FromEmailAddress: z
                .string()
                .openapi({
                  description: 'The email address that the custom verification email is sent from.',
                }),
              TemplateSubject: z
                .string()
                .openapi({ description: 'The subject line of the email.' }),
              TemplateContent: z
                .string()
                .openapi({ description: 'The content of the custom verification email template.' }),
              SuccessRedirectionURL: z
                .string()
                .openapi({
                  description:
                    'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
                }),
              FailureRedirectionURL: z
                .string()
                .openapi({
                  description:
                    'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
                }),
            })
            .openapi({
              required: [
                'FromEmailAddress',
                'TemplateSubject',
                'TemplateContent',
                'SuccessRedirectionURL',
                'FailureRedirectionURL',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateCustomVerificationEmailTemplateResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2EmailCustomVerificationEmailTemplatesTemplateNameRoute = createRoute({
  method: 'delete',
  path: '/v2/email/custom-verification-email-templates/{TemplateName}',
  description:
    '<p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'DeleteCustomVerificationEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'path',
            required: true,
            description:
              'The name of the custom verification email template that you want to delete.',
            schema: {
              type: 'string',
              description:
                'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
              minLength: 1,
            },
          },
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DeleteCustomVerificationEmailTemplateResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDedicatedIpPoolsPoolNameRoute = createRoute({
  method: 'get',
  path: '/v2/email/dedicated-ip-pools/{PoolName}',
  description: 'Retrieve information about the dedicated pool.',
  operationId: 'GetDedicatedIpPool',
  request: {
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
      PoolName: z
        .string()
        .openapi({
          param: {
            name: 'PoolName',
            in: 'path',
            required: true,
            description: 'The name of the dedicated IP pool to retrieve.',
            schema: { type: 'string', description: 'The name of a dedicated IP pool.' },
          },
          description: 'The name of a dedicated IP pool.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDedicatedIpPoolResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2EmailDedicatedIpPoolsPoolNameRoute = createRoute({
  method: 'delete',
  path: '/v2/email/dedicated-ip-pools/{PoolName}',
  description: 'Delete a dedicated IP pool.',
  operationId: 'DeleteDedicatedIpPool',
  request: {
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
      PoolName: z
        .string()
        .openapi({
          param: {
            name: 'PoolName',
            in: 'path',
            required: true,
            description: 'The name of the dedicated IP pool that you want to delete.',
            schema: { type: 'string', description: 'The name of a dedicated IP pool.' },
          },
          description: 'The name of a dedicated IP pool.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDedicatedIpPoolResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
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
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const getV2EmailIdentitiesEmailIdentityRoute = createRoute({
  method: 'get',
  path: '/v2/email/identities/{EmailIdentity}',
  description:
    "Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.",
  operationId: 'GetEmailIdentity',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEmailIdentityResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2EmailIdentitiesEmailIdentityRoute = createRoute({
  method: 'delete',
  path: '/v2/email/identities/{EmailIdentity}',
  description:
    'Deletes an email identity. An identity can be either an email address or a domain name.',
  operationId: 'DeleteEmailIdentity',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The identity (that is, the email address or domain) to delete.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEmailIdentityResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
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
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const getV2EmailTemplatesTemplateNameRoute = createRoute({
  method: 'get',
  path: '/v2/email/templates/{TemplateName}',
  description:
    '<p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>',
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
      TemplateName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'path',
            required: true,
            description: 'The name of the template.',
            schema: {
              type: 'string',
              description:
                'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
              minLength: 1,
            },
          },
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEmailTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailTemplatesTemplateNameRoute = createRoute({
  method: 'put',
  path: '/v2/email/templates/{TemplateName}',
  description:
    '<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
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
    params: z.object({
      TemplateName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'path',
            required: true,
            description: 'The name of the template.',
            schema: {
              type: 'string',
              description:
                'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
              minLength: 1,
            },
          },
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TemplateContent: z
                .object({
                  Subject: EmailTemplateSubjectSchema.and(
                    z.any().openapi({ description: 'The subject line of the email.' }),
                  ).exactOptional(),
                  Text: EmailTemplateTextSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The email body that will be visible to recipients whose email clients do not display HTML.',
                      }),
                  ).exactOptional(),
                  Html: EmailTemplateHtmlSchema.and(
                    z.any().openapi({ description: 'The HTML body of the email.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
                  required: [],
                }),
            })
            .openapi({ required: ['TemplateContent'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEmailTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2EmailTemplatesTemplateNameRoute = createRoute({
  method: 'delete',
  path: '/v2/email/templates/{TemplateName}',
  description:
    '<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>',
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
      TemplateName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'path',
            required: true,
            description: 'The name of the template to be deleted.',
            schema: {
              type: 'string',
              description:
                'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
              minLength: 1,
            },
          },
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEmailTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailSuppressionAddressesEmailAddressRoute = createRoute({
  method: 'get',
  path: '/v2/email/suppression/addresses/{EmailAddress}',
  description:
    "Retrieves information about a specific email address that's on the suppression list for your account.",
  operationId: 'GetSuppressedDestination',
  request: {
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
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'path',
            required: true,
            description: "The email address that's on the account suppression list.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSuppressedDestinationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const deleteV2EmailSuppressionAddressesEmailAddressRoute = createRoute({
  method: 'delete',
  path: '/v2/email/suppression/addresses/{EmailAddress}',
  description: 'Removes an email address from the suppression list for your account.',
  operationId: 'DeleteSuppressedDestination',
  request: {
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
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'path',
            required: true,
            description:
              'The suppressed email destination to remove from the account suppression list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSuppressedDestinationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2EmailAccountRoute = createRoute({
  method: 'get',
  path: '/v2/email/account',
  description:
    'Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.',
  operationId: 'GetAccount',
  request: {
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
      content: { 'application/json': { schema: GetAccountResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute = createRoute({
  method: 'get',
  path: '/v2/email/deliverability-dashboard/blacklist-report#BlacklistItemNames',
  description: 'Retrieve a list of the blacklists that your dedicated IP addresses appear on.',
  operationId: 'GetBlacklistReports',
  request: {
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
      BlacklistItemNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(BlacklistItemNameSchema),
        )
        .openapi({
          param: {
            name: 'BlacklistItemNames',
            in: 'query',
            required: true,
            description:
              'A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon SES or Amazon Pinpoint.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/BlacklistItemName' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBlacklistReportsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDedicatedIpsIPRoute = createRoute({
  method: 'get',
  path: '/v2/email/dedicated-ips/{IP}',
  description:
    "Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.",
  operationId: 'GetDedicatedIp',
  request: {
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
      IP: z
        .string()
        .openapi({
          param: {
            name: 'IP',
            in: 'path',
            required: true,
            description:
              "The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Web Services account.",
            schema: { type: 'string', description: 'An IPv4 address.' },
          },
          description: 'An IPv4 address.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDedicatedIpResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDedicatedIpsRoute = createRoute({
  method: 'get',
  path: '/v2/email/dedicated-ips',
  description:
    'List the dedicated IP addresses that are associated with your Amazon Web Services account.',
  operationId: 'GetDedicatedIps',
  request: {
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
      PoolName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PoolName',
            in: 'query',
            required: false,
            description:
              'The name of the IP pool that the dedicated IP address is associated with.',
            schema: { type: 'string', description: 'The name of a dedicated IP pool.' },
          },
          description: 'The name of a dedicated IP pool.',
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
              'A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the position of the dedicated IP pool in the list of IP pools.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDedicatedIpsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDeliverabilityDashboardRoute = createRoute({
  method: 'get',
  path: '/v2/email/deliverability-dashboard',
  description:
    '<p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>',
  operationId: 'GetDeliverabilityDashboardOptions',
  request: {
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
      content: { 'application/json': { schema: GetDeliverabilityDashboardOptionsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailDeliverabilityDashboardRoute = createRoute({
  method: 'put',
  path: '/v2/email/deliverability-dashboard',
  description:
    '<p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>',
  operationId: 'PutDeliverabilityDashboardOption',
  request: {
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
              DashboardEnabled: z
                .boolean()
                .openapi({
                  description:
                    'Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this value to <code>true</code>.',
                }),
              SubscribedDomains: z
                .array(DomainDeliverabilityTrackingOptionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.',
                }),
            })
            .openapi({ required: ['DashboardEnabled'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDeliverabilityDashboardOptionResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDeliverabilityDashboardTestReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/v2/email/deliverability-dashboard/test-reports/{ReportId}',
  description: 'Retrieve the results of a predictive inbox placement test.',
  operationId: 'GetDeliverabilityTestReport',
  request: {
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
      ReportId: z
        .string()
        .openapi({
          param: {
            name: 'ReportId',
            in: 'path',
            required: true,
            description: 'A unique string that identifies the predictive inbox placement test.',
            schema: {
              type: 'string',
              description: 'A unique string that identifies a Deliverability dashboard report.',
            },
          },
          description: 'A unique string that identifies a Deliverability dashboard report.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeliverabilityTestReportResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDeliverabilityDashboardCampaignsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/v2/email/deliverability-dashboard/campaigns/{CampaignId}',
  description:
    'Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.',
  operationId: 'GetDomainDeliverabilityCampaign',
  request: {
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
      CampaignId: z
        .string()
        .openapi({
          param: {
            name: 'CampaignId',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainDeliverabilityCampaignResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute =
  createRoute({
    method: 'get',
    path: '/v2/email/deliverability-dashboard/statistics-report/{Domain}#StartDate&EndDate',
    description:
      'Retrieve inbox placement and engagement rates for the domains that you use to send email.',
    operationId: 'GetDomainStatisticsReport',
    request: {
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
        Domain: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'Domain',
              in: 'path',
              required: true,
              description: 'The domain that you want to obtain deliverability metrics for.',
              schema: { type: 'string', minLength: 1 },
            },
          }),
      }),
      query: z.object({
        StartDate: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'StartDate',
              in: 'query',
              required: true,
              description:
                'The first day (in Unix time) that you want to obtain domain deliverability metrics for.',
              schema: { type: 'string', format: 'date-time' },
            },
          }),
        EndDate: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'EndDate',
              in: 'query',
              required: true,
              description:
                'The last day (in Unix time) that you want to obtain domain deliverability metrics for. The <code>EndDate</code> that you specify has to be less than or equal to 30 days after the <code>StartDate</code>.',
              schema: { type: 'string', format: 'date-time' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetDomainStatisticsReportResponseSchema } },
      },
      480: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getV2EmailIdentitiesEmailIdentityPoliciesRoute = createRoute({
  method: 'get',
  path: '/v2/email/identities/{EmailIdentity}/policies',
  description:
    '<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GetEmailIdentityPolicies',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEmailIdentityPoliciesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailImportJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v2/email/import-jobs/{JobId}',
  description: 'Provides information about an import job.',
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
      JobId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'JobId',
            in: 'path',
            required: true,
            description: 'The ID of the import job.',
            schema: {
              type: 'string',
              description: 'A string that represents the import job ID.',
              minLength: 1,
            },
          },
          description: 'A string that represents the import job ID.',
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
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2EmailDeliverabilityDashboardTestReportsRoute = createRoute({
  method: 'get',
  path: '/v2/email/deliverability-dashboard/test-reports',
  description:
    "Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.",
  operationId: 'ListDeliverabilityTestReports',
  request: {
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
              'A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to indicate the position in the list of predictive inbox placement tests.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              '<p>The number of results to show in a single call to <code>ListDeliverabilityTestReports</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeliverabilityTestReportsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute =
  createRoute({
    method: 'get',
    path: '/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns#StartDate&EndDate',
    description:
      'Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.',
    operationId: 'ListDomainDeliverabilityCampaigns',
    request: {
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
        StartDate: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'StartDate',
              in: 'query',
              required: true,
              description: 'The first day that you want to obtain deliverability data for.',
              schema: { type: 'string', format: 'date-time' },
            },
          }),
        EndDate: z.iso
          .datetime({ offset: true })
          .openapi({
            param: {
              name: 'EndDate',
              in: 'query',
              required: true,
              description:
                'The last day that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.',
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
                'A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of a campaign in the list of campaigns.',
              schema: { type: 'string' },
            },
          }),
        PageSize: z
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
              name: 'PageSize',
              in: 'query',
              required: false,
              description:
                'The maximum number of results to include in response to a single call to the <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results is larger than the number that you specify in this parameter, the response includes a <code>NextToken</code> element, which you can use to obtain additional results.',
              schema: { type: 'integer' },
            },
          }),
      }),
      params: z.object({
        SubscribedDomain: z
          .string()
          .openapi({
            param: {
              name: 'SubscribedDomain',
              in: 'path',
              required: true,
              description: 'The domain to obtain deliverability data for.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListDomainDeliverabilityCampaignsResponseSchema },
        },
      },
      480: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
    },
  })

export const postV2EmailVdmRecommendationsRoute = createRoute({
  method: 'post',
  path: '/v2/email/vdm/recommendations',
  description:
    '<p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>',
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
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
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
              Filter: z
                .record(z.string(), ListRecommendationFilterValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 2)
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A token returned from a previous call to <code>ListRecommendations</code> to indicate the position in the list of recommendations.',
                }),
              PageSize: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The number of results to show in a single call to <code>ListRecommendations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 100.</p>',
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
      content: { 'application/json': { schema: ListRecommendationsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getV2EmailSuppressionAddressesRoute = createRoute({
  method: 'get',
  path: '/v2/email/suppression/addresses',
  description:
    'Retrieves a list of email addresses that are on the suppression list for your account.',
  operationId: 'ListSuppressedDestinations',
  request: {
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
      Reason: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SuppressionListReasonSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Reason',
            in: 'query',
            required: false,
            description: 'The factors that caused the email address to be added to .',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/SuppressionListReason' },
            },
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
            description:
              'Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list after a specific date.',
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
            description:
              'Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list before a specific date.',
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
              'A token returned from a previous call to <code>ListSuppressedDestinations</code> to indicate the position in the list of suppressed email addresses.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'The number of results to show in a single call to <code>ListSuppressedDestinations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSuppressedDestinationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const putV2EmailSuppressionAddressesRoute = createRoute({
  method: 'put',
  path: '/v2/email/suppression/addresses',
  description: 'Adds an email address to the suppression list for your account.',
  operationId: 'PutSuppressedDestination',
  request: {
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
              EmailAddress: z
                .string()
                .openapi({
                  description:
                    'The email address that should be added to the suppression list for your account.',
                }),
              Reason: z
                .enum(['BOUNCE', 'COMPLAINT'])
                .openapi({
                  description:
                    '<p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['EmailAddress', 'Reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutSuppressedDestinationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2EmailTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v2/email/tags#ResourceArn',
  description:
    'Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.',
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
      ResourceArn: z
        .string()
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource that you want to retrieve tag information for.',
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV2EmailAccountDedicatedIpsWarmupRoute = createRoute({
  method: 'put',
  path: '/v2/email/account/dedicated-ips/warmup',
  description: 'Enable or disable the automatic warm-up feature for dedicated IP addresses.',
  operationId: 'PutAccountDedicatedIpWarmupAttributes',
  request: {
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
              AutoWarmupEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current Amazon Web Services Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.',
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
      content: {
        'application/json': { schema: PutAccountDedicatedIpWarmupAttributesResponseSchema },
      },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailAccountDetailsRoute = createRoute({
  method: 'post',
  path: '/v2/email/account/details',
  description: 'Update your Amazon SES account details.',
  operationId: 'PutAccountDetails',
  request: {
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
              MailType: z
                .enum(['MARKETING', 'TRANSACTIONAL'])
                .openapi({ description: 'The type of email your account will send.' }),
              WebsiteURL: z
                .string()
                .regex(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)
                .min(1)
                .max(1000)
                .openapi({
                  description:
                    'The URL of your website. This information helps us better understand the type of content that you plan to send.',
                }),
              ContactLanguage: z
                .enum(['EN', 'JA'])
                .exactOptional()
                .openapi({ description: 'The language you would prefer to be contacted with.' }),
              UseCaseDescription: z
                .string()
                .min(1)
                .max(5000)
                .openapi({
                  description: 'A description of the types of email that you plan to send.',
                }),
              AdditionalContactEmailAddresses: z
                .array(AdditionalContactEmailAddressSchema)
                .min(1)
                .max(4)
                .exactOptional()
                .openapi({
                  description:
                    'Additional email addresses that you would like to be notified regarding Amazon SES matters.',
                }),
              ProductionAccessEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Indicates whether or not your account should have production access in the current Amazon Web Services Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>',
                }),
            })
            .openapi({ required: ['MailType', 'WebsiteURL', 'UseCaseDescription'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAccountDetailsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putV2EmailAccountSendingRoute = createRoute({
  method: 'put',
  path: '/v2/email/account/sending',
  description: 'Enable or disable the ability of your account to send email.',
  operationId: 'PutAccountSendingAttributes',
  request: {
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
              SendingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If Amazon Web Services paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>",
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
      content: { 'application/json': { schema: PutAccountSendingAttributesResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailAccountSuppressionRoute = createRoute({
  method: 'put',
  path: '/v2/email/account/suppression',
  description: 'Change the settings for the account-level suppression list.',
  operationId: 'PutAccountSuppressionAttributes',
  request: {
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
              SuppressedReasons: z
                .array(SuppressionListReasonSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>',
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
      content: { 'application/json': { schema: PutAccountSuppressionAttributesResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailAccountVdmRoute = createRoute({
  method: 'put',
  path: '/v2/email/account/vdm',
  description:
    '<p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'PutAccountVdmAttributes',
  request: {
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
              VdmAttributes: z
                .object({
                  VdmEnabled: FeatureStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies the status of your VDM configuration. Can be one of the following:</p> <ul> <li> <p> <code>ENABLED</code> – Amazon SES enables VDM for your account.</p> </li> <li> <p> <code>DISABLED</code> – Amazon SES disables VDM for your account.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  DashboardAttributes: DashboardAttributesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies additional settings for your VDM configuration as applicable to the Dashboard.',
                      }),
                  ).exactOptional(),
                  GuardianAttributes: GuardianAttributesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies additional settings for your VDM configuration as applicable to the Guardian.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The VDM attributes that apply to your Amazon SES account.',
                  required: [],
                }),
            })
            .openapi({ required: ['VdmAttributes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAccountVdmAttributesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute = createRoute({
  method: 'put',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options',
  description:
    'Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.',
  operationId: 'PutConfigurationSetDeliveryOptions',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set to associate with a dedicated IP pool.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TlsPolicy: z
                .enum(['REQUIRE', 'OPTIONAL'])
                .exactOptional()
                .openapi({
                  description:
                    "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.",
                }),
              SendingPoolName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the dedicated IP pool to associate with the configuration set.',
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
      content: { 'application/json': { schema: PutConfigurationSetDeliveryOptionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute = createRoute({
  method: 'put',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options',
  description:
    'Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.',
  operationId: 'PutConfigurationSetReputationOptions',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ReputationMetricsEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set.',
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
      content: {
        'application/json': { schema: PutConfigurationSetReputationOptionsResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailConfigurationSetsConfigurationSetNameSendingRoute = createRoute({
  method: 'put',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/sending',
  description:
    'Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.',
  operationId: 'PutConfigurationSetSendingOptions',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description:
              'The name of the configuration set to enable or disable email sending for.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SendingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.',
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
      content: { 'application/json': { schema: PutConfigurationSetSendingOptionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsRoute = createRoute({
  method: 'put',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options',
  description: 'Specify the account suppression list preferences for a configuration set.',
  operationId: 'PutConfigurationSetSuppressionOptions',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description:
              'The name of the configuration set to change the suppression list preferences for.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SuppressedReasons: z
                .array(SuppressionListReasonSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>',
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
      content: {
        'application/json': { schema: PutConfigurationSetSuppressionOptionsResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute = createRoute({
  method: 'put',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options',
  description:
    'Specify a custom domain to use for open and click tracking elements in email that you send.',
  operationId: 'PutConfigurationSetTrackingOptions',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CustomRedirectDomain: z
                .string()
                .exactOptional()
                .openapi({ description: 'The domain to use for tracking open and click events.' }),
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
      content: { 'application/json': { schema: PutConfigurationSetTrackingOptionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailConfigurationSetsConfigurationSetNameVdmOptionsRoute = createRoute({
  method: 'put',
  path: '/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options',
  description:
    '<p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'PutConfigurationSetVdmOptions',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'The name of the configuration set.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              VdmOptions: z
                .object({
                  DashboardOptions: DashboardOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies additional settings for your VDM configuration as applicable to the Dashboard.',
                      }),
                  ).exactOptional(),
                  GuardianOptions: GuardianOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies additional settings for your VDM configuration as applicable to the Guardian.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that defines the VDM settings that apply to emails that you send using the configuration set.',
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
      content: { 'application/json': { schema: PutConfigurationSetVdmOptionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailDedicatedIpsIPPoolRoute = createRoute({
  method: 'put',
  path: '/v2/email/dedicated-ips/{IP}/pool',
  description:
    '<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>',
  operationId: 'PutDedicatedIpInPool',
  request: {
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
      IP: z
        .string()
        .openapi({
          param: {
            name: 'IP',
            in: 'path',
            required: true,
            description:
              "The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Web Services account.",
            schema: { type: 'string', description: 'An IPv4 address.' },
          },
          description: 'An IPv4 address.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DestinationPoolName: z
                .string()
                .openapi({ description: 'The name of a dedicated IP pool.' }),
            })
            .openapi({ required: ['DestinationPoolName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDedicatedIpInPoolResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailDedicatedIpPoolsPoolNameScalingRoute = createRoute({
  method: 'put',
  path: '/v2/email/dedicated-ip-pools/{PoolName}/scaling',
  description:
    '<p>Used to convert a dedicated IP pool to a different scaling mode.</p> <note> <p> <code>MANAGED</code> pools cannot be converted to <code>STANDARD</code> scaling mode.</p> </note>',
  operationId: 'PutDedicatedIpPoolScalingAttributes',
  request: {
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
      PoolName: z
        .string()
        .openapi({
          param: {
            name: 'PoolName',
            in: 'path',
            required: true,
            description: 'The name of the dedicated IP pool.',
            schema: { type: 'string', description: 'The name of a dedicated IP pool.' },
          },
          description: 'The name of a dedicated IP pool.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ScalingMode: z
                .enum(['STANDARD', 'MANAGED'])
                .openapi({
                  description:
                    '<p>The scaling mode to apply to the dedicated IP pool.</p> <note> <p>Changing the scaling mode from <code>MANAGED</code> to <code>STANDARD</code> is not supported.</p> </note>',
                }),
            })
            .openapi({ required: ['ScalingMode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PutDedicatedIpPoolScalingAttributesResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailDedicatedIpsIPWarmupRoute = createRoute({
  method: 'put',
  path: '/v2/email/dedicated-ips/{IP}/warmup',
  description: '<p/>',
  operationId: 'PutDedicatedIpWarmupAttributes',
  request: {
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
      IP: z
        .string()
        .openapi({
          param: {
            name: 'IP',
            in: 'path',
            required: true,
            description:
              'The dedicated IP address that you want to update the warm-up attributes for.',
            schema: { type: 'string', description: 'An IPv4 address.' },
          },
          description: 'An IPv4 address.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WarmupPercentage: z
                .int()
                .openapi({
                  description:
                    'The warm-up percentage that you want to associate with the dedicated IP address.',
                }),
            })
            .openapi({ required: ['WarmupPercentage'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDedicatedIpWarmupAttributesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailIdentitiesEmailIdentityConfigurationSetRoute = createRoute({
  method: 'put',
  path: '/v2/email/identities/{EmailIdentity}/configuration-set',
  description: 'Used to associate a configuration set with an email identity.',
  operationId: 'PutEmailIdentityConfigurationSetAttributes',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email address or domain to associate with a configuration set.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ConfigurationSetName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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
      content: {
        'application/json': { schema: PutEmailIdentityConfigurationSetAttributesResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailIdentitiesEmailIdentityDkimRoute = createRoute({
  method: 'put',
  path: '/v2/email/identities/{EmailIdentity}/dkim',
  description: 'Used to enable or disable DKIM authentication for an email identity.',
  operationId: 'PutEmailIdentityDkimAttributes',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SigningEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that are sent from the identity are signed using DKIM. If you set this value to <code>false</code>, your messages are sent without DKIM signing.</p>',
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
      content: { 'application/json': { schema: PutEmailIdentityDkimAttributesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV1EmailIdentitiesEmailIdentityDkimSigningRoute = createRoute({
  method: 'put',
  path: '/v1/email/identities/{EmailIdentity}/dkim/signing',
  description:
    '<p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>',
  operationId: 'PutEmailIdentityDkimSigningAttributes',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SigningAttributesOrigin: z
                .enum(['AWS_SES', 'EXTERNAL'])
                .openapi({
                  description:
                    '<p>The method to use to configure DKIM for the identity. There are the following possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>',
                }),
              SigningAttributes: z
                .object({
                  DomainSigningSelector: SelectorSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.",
                      }),
                  ).exactOptional(),
                  DomainSigningPrivateKey: PrivateKeySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.</p> <p>The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.</p>",
                      }),
                  ).exactOptional(),
                  NextSigningKeyLength: DkimSigningKeyLengthSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM',
                  required: [],
                }),
            })
            .openapi({ required: ['SigningAttributesOrigin'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PutEmailIdentityDkimSigningAttributesResponseSchema },
      },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailIdentitiesEmailIdentityFeedbackRoute = createRoute({
  method: 'put',
  path: '/v2/email/identities/{EmailIdentity}/feedback',
  description:
    "<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>",
  operationId: 'PutEmailIdentityFeedbackAttributes',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EmailForwardingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>",
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
      content: { 'application/json': { schema: PutEmailIdentityFeedbackAttributesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2EmailIdentitiesEmailIdentityMailFromRoute = createRoute({
  method: 'put',
  path: '/v2/email/identities/{EmailIdentity}/mail-from',
  description:
    'Used to enable or disable the custom Mail-From domain configuration for an email identity.',
  operationId: 'PutEmailIdentityMailFromAttributes',
  request: {
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
      EmailIdentity: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The verified email identity.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MailFromDomain: z
                .string()
                .exactOptional()
                .openapi({ description: 'The domain to use as a MAIL FROM domain.' }),
              BehaviorOnMxFailure: z
                .enum(['USE_DEFAULT_VALUE', 'REJECT_MESSAGE'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
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
      content: { 'application/json': { schema: PutEmailIdentityMailFromAttributesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailOutboundBulkEmailsRoute = createRoute({
  method: 'post',
  path: '/v2/email/outbound-bulk-emails',
  description: 'Composes an email message to multiple destinations.',
  operationId: 'SendBulkEmail',
  request: {
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
              FromEmailAddress: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The email address to use as the "From" address for the email. The address that you specify has to be verified.',
                }),
              FromEmailAddressIdentityArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                }),
              ReplyToAddresses: z
                .array(EmailAddressSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.',
                }),
              FeedbackForwardingEmailAddress: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The address that you want bounce and complaint notifications to be sent to.',
                }),
              FeedbackForwardingEmailAddressIdentityArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                }),
              DefaultEmailTags: z
                .array(MessageTagSchema)
                .exactOptional()
                .openapi({ description: 'A list of message tags.' }),
              DefaultContent: z
                .object({
                  Template: TemplateSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The template to use for the bulk email message.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that contains the body of the message. You can specify a template message.',
                  required: [],
                }),
              BulkEmailEntries: z
                .array(BulkEmailEntrySchema)
                .openapi({ description: 'A list of <code>BulkEmailEntry</code> objects.' }),
              ConfigurationSetName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
                }),
            })
            .openapi({ required: ['DefaultContent', 'BulkEmailEntries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendBulkEmailResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'AccountSuspendedException',
      content: { 'application/json': { schema: AccountSuspendedExceptionSchema } },
    },
    483: {
      description: 'SendingPausedException',
      content: { 'application/json': { schema: SendingPausedExceptionSchema } },
    },
    484: {
      description: 'MessageRejected',
      content: { 'application/json': { schema: MessageRejectedSchema } },
    },
    485: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'application/json': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    487: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailOutboundCustomVerificationEmailsRoute = createRoute({
  method: 'post',
  path: '/v2/email/outbound-custom-verification-emails',
  description:
    '<p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'SendCustomVerificationEmail',
  request: {
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
              EmailAddress: z.string().openapi({ description: 'The email address to verify.' }),
              TemplateName: z
                .string()
                .min(1)
                .openapi({
                  description:
                    'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
                }),
              ConfigurationSetName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
                }),
            })
            .openapi({ required: ['EmailAddress', 'TemplateName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendCustomVerificationEmailResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'MessageRejected',
      content: { 'application/json': { schema: MessageRejectedSchema } },
    },
    483: {
      description: 'SendingPausedException',
      content: { 'application/json': { schema: SendingPausedExceptionSchema } },
    },
    484: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'application/json': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailOutboundEmailsRoute = createRoute({
  method: 'post',
  path: '/v2/email/outbound-emails',
  description:
    '<p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>',
  operationId: 'SendEmail',
  request: {
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
              FromEmailAddress: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The email address to use as the "From" address for the email. The address that you specify has to be verified. ',
                }),
              FromEmailAddressIdentityArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.</p>',
                }),
              Destination: z
                .object({
                  ToAddresses: EmailAddressListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array that contains the email addresses of the "To" recipients for the email.',
                      }),
                  ).exactOptional(),
                  CcAddresses: EmailAddressListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array that contains the email addresses of the "CC" (carbon copy) recipients for the email.',
                      }),
                  ).exactOptional(),
                  BccAddresses: EmailAddressListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array that contains the email addresses of the "BCC" (blind carbon copy) recipients for the email.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
                  required: [],
                }),
              ReplyToAddresses: z
                .array(EmailAddressSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.',
                }),
              FeedbackForwardingEmailAddress: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The address that you want bounce and complaint notifications to be sent to.',
                }),
              FeedbackForwardingEmailAddressIdentityArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                }),
              Content: z
                .object({
                  Simple: MessageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The simple email message. The message consists of a subject and a message body.',
                      }),
                  ).exactOptional(),
                  Raw: RawMessageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>If you include attachments, they must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  Template: TemplateSchema.and(
                    z.any().openapi({ description: 'The template to use for the email message.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.',
                  required: [],
                }),
              EmailTags: z
                .array(MessageTagSchema)
                .exactOptional()
                .openapi({ description: 'A list of message tags.' }),
              ConfigurationSetName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
                }),
              ListManagementOptions: z
                .object({
                  ContactListName: ContactListNameSchema.and(
                    z.any().openapi({ description: 'The name of the contact list.' }),
                  ).exactOptional(),
                  TopicName: TopicNameSchema.and(
                    z.any().openapi({ description: 'The name of the topic.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.',
                  required: [],
                }),
            })
            .openapi({ required: ['Content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendEmailResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'AccountSuspendedException',
      content: { 'application/json': { schema: AccountSuspendedExceptionSchema } },
    },
    483: {
      description: 'SendingPausedException',
      content: { 'application/json': { schema: SendingPausedExceptionSchema } },
    },
    484: {
      description: 'MessageRejected',
      content: { 'application/json': { schema: MessageRejectedSchema } },
    },
    485: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'application/json': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    487: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2EmailTagsRoute = createRoute({
  method: 'post',
  path: '/v2/email/tags',
  description:
    '<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>',
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
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.',
                }),
              Tags: z
                .array(TagSchema)
                .openapi({
                  description:
                    'A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.',
                }),
            })
            .openapi({ required: ['ResourceArn', 'Tags'] }),
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV2EmailTemplatesTemplateNameRenderRoute = createRoute({
  method: 'post',
  path: '/v2/email/templates/{TemplateName}/render',
  description:
    '<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'TestRenderEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'path',
            required: true,
            description: 'The name of the template.',
            schema: {
              type: 'string',
              description:
                'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
              minLength: 1,
            },
          },
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TemplateData: z
                .string()
                .max(262144)
                .openapi({
                  description:
                    'An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.',
                }),
            })
            .openapi({ required: ['TemplateData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestRenderEmailTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2EmailTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/v2/email/tags#ResourceArn&TagKeys',
  description: 'Remove one or more tags (keys and values) from a specified resource.',
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
    query: z.object({
      ResourceArn: z
        .string()
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.',
            schema: { type: 'string' },
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
            description:
              '<p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the resource, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. For example: <code>/v2/email/tags?ResourceArn=ResourceArn&amp;TagKeys=Key1&amp;TagKeys=Key2</code> </p>',
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
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})
