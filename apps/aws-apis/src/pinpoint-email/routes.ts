import { createRoute, z } from '@hono/zod-openapi'

const CreateConfigurationSetResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('CreateConfigurationSetResponse')

const CustomRedirectDomainSchema = z
  .string()
  .openapi({ description: 'The domain that you want to use for tracking open and click events.' })
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
            'The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don’t want a resource to have a specific tag value, don’t specify a value for this parameter. Amazon Pinpoint will set the value to an empty string.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      "<p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul>",
  })
  .openapi('Tag')

const AlreadyExistsExceptionSchema = z.any().openapi('AlreadyExistsException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const CreateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('CreateConfigurationSetEventDestinationResponse')

const EventTypeSchema = z
  .enum(['SEND', 'REJECT', 'BOUNCE', 'COMPLAINT', 'DELIVERY', 'OPEN', 'CLICK', 'RENDERING_FAILURE'])
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
            'The Amazon Resource Name (ARN) of the IAM role that Amazon Pinpoint uses when sending email events to the Amazon Kinesis Data Firehose stream.',
        }),
    ),
    DeliveryStreamArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that Amazon Pinpoint sends email events to.',
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
      'The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>.',
  })
  .openapi('DimensionValueSource')

const DefaultDimensionValueSchema = z
  .string()
  .openapi({
    description:
      "<p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>",
  })
  .openapi('DefaultDimensionValue')

const CloudWatchDimensionConfigurationSchema = z
  .object({
    DimensionName: DimensionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>',
        }),
    ),
    DimensionValueSource: DimensionValueSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>.',
        }),
    ),
    DefaultDimensionValue: DefaultDimensionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['DimensionName', 'DimensionValueSource', 'DefaultDimensionValue'],
    description:
      'An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.',
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
            'The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish email events to. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
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
            'The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email events to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.',
    required: [],
  })
  .openapi('PinpointDestination')

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
            'The character set for the content. Because of the constraints of the SMTP protocol, Amazon Pinpoint uses 7-bit ASCII by default. If the text includes characters outside of the ASCII range, you have to specify a character set. For example, you could specify <code>UTF-8</code>, <code>ISO-8859-1</code>, or <code>Shift_JIS</code>.',
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
      '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
  })
  .openapi('RawMessageData')

const RawMessageSchema = z
  .object({
    Data: RawMessageDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['Data'], description: 'The raw email message.' })
  .openapi('RawMessage')

const TemplateArnSchema = z.string().openapi('TemplateArn')

const TemplateDataSchema = z.string().max(262144).openapi('TemplateData')

const TemplateSchema = z
  .object({
    TemplateArn: TemplateArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the template.' }),
    ).exactOptional(),
    TemplateData: TemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Template')

const AccountSuspendedExceptionSchema = z.any().openapi('AccountSuspendedException')

const SendingPausedExceptionSchema = z.any().openapi('SendingPausedException')

const MessageRejectedSchema = z.any().openapi('MessageRejected')

const MailFromDomainNotVerifiedExceptionSchema = z
  .any()
  .openapi('MailFromDomainNotVerifiedException')

const IdentityTypeSchema = z
  .enum(['EMAIL_ADDRESS', 'DOMAIN', 'MANAGED_DOMAIN'])
  .openapi({
    description:
      '<p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul>',
  })
  .openapi('IdentityType')

const DkimStatusSchema = z
  .enum(['PENDING', 'SUCCESS', 'FAILED', 'TEMPORARY_FAILURE', 'NOT_STARTED'])
  .openapi({
    description:
      "<p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The DKIM verification process was initiated, and Amazon Pinpoint is still waiting for the required CNAME records to appear in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The DKIM authentication process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The DKIM authentication process failed. This can happen when Amazon Pinpoint fails to find the required CNAME records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon Pinpoint from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>",
  })
  .openapi('DkimStatus')

const DnsTokenSchema = z.string().openapi('DnsToken')

const DnsTokenListSchema = z.array(DnsTokenSchema).openapi('DnsTokenList')

const DkimAttributesSchema = z
  .object({
    SigningEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the value is <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. If the value is <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.",
        }),
    ).exactOptional(),
    Status: DkimStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Describes whether or not Amazon Pinpoint has successfully located the DKIM records in the DNS records for the domain. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't yet located the DKIM records in the DNS configuration for the domain, but will continue to attempt to locate them.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint located the DKIM records in the DNS configuration for the domain and determined that they're correct. Amazon Pinpoint can now send DKIM-signed email from the identity.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint was unable to locate the DKIM records in the DNS settings for the domain, and won't continue to search for them.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the DKIM status for the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – Amazon Pinpoint hasn't yet started searching for the DKIM records in the DKIM records for the domain.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Tokens: DnsTokenListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon Pinpoint detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. Amazon Pinpoint usually detects these records within about 72 hours of adding them to the DNS configuration for your domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the DKIM configuration for an email identity.',
    required: [],
  })
  .openapi('DkimAttributes')

const CreateEmailIdentityResponseSchema = z
  .object({
    IdentityType: IdentityTypeSchema.and(
      z.any().openapi({ description: 'The email identity type.' }),
    ).exactOptional(),
    VerifiedForSendingStatus: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email from verified email addresses or domains. For more information about verifying identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.',
        }),
    ).exactOptional(),
    DkimAttributes: DkimAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the DKIM attributes for the identity. This object includes the tokens that you use to create the CNAME records that are required to complete the DKIM verification process.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p>',
    required: [],
  })
  .openapi('CreateEmailIdentityResponse')

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
            'The maximum number of emails that you can send in the current AWS Region over a 24-hour period. This value is also called your <i>sending quota</i>.',
        }),
    ).exactOptional(),
    MaxSendRate: MaxSendRateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of emails that you can send per second in the current AWS Region. This value is also called your <i>maximum sending rate</i> or your <i>maximum TPS (transactions per second) rate</i>.',
        }),
    ).exactOptional(),
    SentLast24Hours: SentLast24HoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of emails sent from your Amazon Pinpoint account in the current AWS Region over the past 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.',
    required: [],
  })
  .openapi('SendQuota')

const GeneralEnforcementStatusSchema = z.string().openapi('GeneralEnforcementStatus')

const GetAccountResponseSchema = z
  .object({
    SendQuota: SendQuotaSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.',
        }),
    ).exactOptional(),
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not email sending is enabled for your Amazon Pinpoint account in the current AWS Region.',
        }),
    ).exactOptional(),
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
            "<p>The reputation status of your Amazon Pinpoint account. The status can be one of the following:</p> <ul> <li> <p> <code>HEALTHY</code> – There are no reputation-related issues that currently impact your account.</p> </li> <li> <p> <code>PROBATION</code> – We've identified some issues with your Amazon Pinpoint account. We're placing your account under review while you work on correcting these issues.</p> </li> <li> <p> <code>SHUTDOWN</code> – Your account's ability to send email is currently paused because of an issue with the email sent from your account. When you correct the issue, you can contact us and request that your account's ability to send email is resumed.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ProductionAccessEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether or not your account has production access in the current AWS Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.',
    required: [],
  })
  .openapi('GetAccountResponse')

const RblNameSchema = z
  .string()
  .openapi({ description: 'The name of a blacklist that an IP address was found on.' })
  .openapi('RblName')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

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
      z
        .any()
        .openapi({
          description: 'The time when the blacklisting event occurred, shown in Unix time format.',
        }),
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
      '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
  })
  .openapi('ConfigurationSetName')

const TrackingOptionsSchema = z
  .object({
    CustomRedirectDomain: CustomRedirectDomainSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain that you want to use for tracking open and click events.',
        }),
    ),
  })
  .openapi({
    required: ['CustomRedirectDomain'],
    description:
      "<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>",
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
          description:
            'The name of the dedicated IP pool that you want to associate with the configuration set.',
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
      'Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. ',
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
      'Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.',
    required: [],
  })
  .openapi('SendingOptions')

const TagListSchema = z.array(TagSchema).openapi('TagList')

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
            'An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.',
        }),
    ).exactOptional(),
    SendingOptions: SendingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.',
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
  })
  .openapi({ description: 'Information about a configuration set.', required: [] })
  .openapi('GetConfigurationSetResponse')

const EventDestinationNameSchema = z
  .string()
  .openapi({
    description:
      '<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
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
            'The types of events that Amazon Pinpoint sends to the specified event destinations.',
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
            'An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MatchingEventTypes'],
    description:
      'In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.',
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

const IpSchema = z
  .string()
  .openapi({
    description: 'A dedicated IP address that is associated with your Amazon Pinpoint account.',
  })
  .openapi('Ip')

const WarmupStatusSchema = z
  .enum(['IN_PROGRESS', 'DONE'])
  .openapi({ description: 'The warmup status of a dedicated IP.' })
  .openapi('WarmupStatus')

const Percentage100WrapperSchema = z.int().openapi('Percentage100Wrapper')

const DedicatedIpSchema = z
  .object({
    Ip: IpSchema.and(
      z
        .any()
        .openapi({
          description: 'An IP address that is reserved for use by your Amazon Pinpoint account.',
        }),
    ),
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
      '<p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/>',
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

const DedicatedIpListSchema = z
  .array(DedicatedIpSchema)
  .openapi({
    description:
      'A list of dedicated IP addresses that are associated with your Amazon Pinpoint account.',
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
            'A list of dedicated IP addresses that are reserved for use by your Amazon Pinpoint account.',
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
      'Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.',
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
      'An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation).',
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
            'A verified domain that’s associated with your AWS account and currently has an active Deliverability dashboard subscription.',
        }),
    ).exactOptional(),
    SubscriptionStartDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date, in Unix time format, when you enabled the Deliverability dashboard for the domain.',
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
            'Specifies whether the Deliverability dashboard is enabled for your Amazon Pinpoint account. If this value is <code>true</code>, the dashboard is enabled.',
        }),
    ),
    SubscriptionExpiryDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date, in Unix time format, when your current subscription to the Deliverability dashboard is scheduled to expire, if your subscription is scheduled to expire at the end of the current calendar month. This value is null if you have an active subscription that isn’t due to expire at the end of the month.',
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
    description:
      'An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.',
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

const EmailAddressSchema = z.string().openapi('EmailAddress')

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
          description:
            'The date and time when the predictive inbox placement test was created, in Unix time format.',
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

const IdentitySchema = z.string().openapi('Identity')

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
            'The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.',
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
            "The first time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.",
        }),
    ).exactOptional(),
    LastSeenDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The last time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.",
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
      'An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).',
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
  .openapi({ description: 'The domain that you want to use as a MAIL FROM domain.' })
  .openapi('MailFromDomainName')

const MailFromDomainStatusSchema = z
  .enum(['PENDING', 'SUCCESS', 'FAILED', 'TEMPORARY_FAILURE'])
  .openapi({
    description:
      "<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul>",
  })
  .openapi('MailFromDomainStatus')

const BehaviorOnMxFailureSchema = z
  .enum(['USE_DEFAULT_VALUE', 'REJECT_MESSAGE'])
  .openapi({
    description:
      "<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
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
            "<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul>",
        }),
    ),
    BehaviorOnMxFailure: BehaviorOnMxFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action that Amazon Pinpoint to takes if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
        }),
    ),
  })
  .openapi({
    required: ['MailFromDomain', 'MailFromDomainStatus', 'BehaviorOnMxFailure'],
    description: 'A list of attributes that are associated with a MAIL FROM domain.',
  })
  .openapi('MailFromAttributes')

const GetEmailIdentityResponseSchema = z
  .object({
    IdentityType: IdentityTypeSchema.and(
      z.any().openapi({ description: 'The email identity type.' }),
    ).exactOptional(),
    FeedbackForwardingStatus: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>",
        }),
    ).exactOptional(),
    VerifiedForSendingStatus: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email from verified email addresses or domains. For more information about verifying identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.',
        }),
    ).exactOptional(),
    DkimAttributes: DkimAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the DKIM attributes for the identity. This object includes the tokens that you use to create the CNAME records that are required to complete the DKIM verification process.',
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
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) that are associated with the email identity.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about an email identity.', required: [] })
  .openapi('GetEmailIdentityResponse')

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
            'An array that contains all of the configuration sets in your Amazon Pinpoint account in the current AWS Region.',
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
      'A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.',
    required: [],
  })
  .openapi('ListConfigurationSetsResponse')

const ListOfDedicatedIpPoolsSchema = z
  .array(PoolNameSchema)
  .openapi({
    description:
      'A list of dedicated IP pools that are associated with your Amazon Pinpoint account.',
  })
  .openapi('ListOfDedicatedIpPools')

const ListDedicatedIpPoolsResponseSchema = z
  .object({
    DedicatedIpPools: ListOfDedicatedIpPoolsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of all of the dedicated IP pools that are associated with your Amazon Pinpoint account.',
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
      'An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.',
  })
  .openapi('ListDomainDeliverabilityCampaignsResponse')

const IdentityInfoSchema = z
  .object({
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> <li> <p> <code>MANAGED_DOMAIN</code> – The identity is a domain that is managed by AWS.</p> </li> </ul>',
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
            '<p>Indicates whether or not you can send email from the identity.</p> <p>In Amazon Pinpoint, an identity is an email address or domain that you send email from. Before you can send email from an identity, you have to demostrate that you own the identity, and that you authorize Amazon Pinpoint to send email from that identity.</p>',
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
            'An array that includes all of the identities associated with your Amazon Pinpoint account.',
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
      "A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.",
    required: [],
  })
  .openapi('ListEmailIdentitiesResponse')

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

const PutAccountSendingAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutAccountSendingAttributesResponse')

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

const PutConfigurationSetTrackingOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetTrackingOptionsResponse')

const PutDedicatedIpInPoolResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutDedicatedIpInPoolResponse')

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
    description:
      'A response that indicates whether the Deliverability dashboard is enabled for your Amazon Pinpoint account.',
  })
  .openapi('PutDeliverabilityDashboardOptionResponse')

const PutEmailIdentityDkimAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutEmailIdentityDkimAttributesResponse')

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

const OutboundMessageIdSchema = z.string().openapi('OutboundMessageId')

const SendEmailResponseSchema = z
  .object({
    MessageId: OutboundMessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique identifier for the message that is generated when Amazon Pinpoint accepts the message.</p> <note> <p>It is possible for Amazon Pinpoint to accept a message without sending it. This can happen when the message you're trying to send has an attachment doesn't pass a virus check, or when you send a templated email that contains invalid personalization content, for example.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.',
    required: [],
  })
  .openapi('SendEmailResponse')

const EmailAddressListSchema = z.array(EmailAddressSchema).openapi('EmailAddressList')

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

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('UpdateConfigurationSetEventDestinationResponse')

const BlacklistItemNamesSchema = z.array(BlacklistItemNameSchema).openapi('BlacklistItemNames')

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
            'An array that specifies which events Amazon Pinpoint should send to the destinations in this <code>EventDestinationDefinition</code>.',
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
            'An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.',
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
      z.any().openapi({ description: 'The name of the configuration set.' }),
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
            'An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.',
        }),
    ).exactOptional(),
    SendingOptions: SendingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) that you want to associate with the configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationSetName'],
    title: 'CreateConfigurationSetRequest',
    description: 'A request to create a configuration set.',
  })
  .openapi('CreateConfigurationSetRequest')

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
            '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>If you include attachments, they must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
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
      'A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.',
  })
  .openapi('CreateDeliverabilityTestReportRequest')

const CreateEmailIdentityRequestSchema = z
  .object({
    EmailIdentity: IdentitySchema.and(
      z.any().openapi({ description: 'The email address or domain that you want to verify.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that define the tags (keys and values) that you want to associate with the email identity.',
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

const DeleteDedicatedIpPoolRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDedicatedIpPoolRequest',
    description: 'A request to delete a dedicated IP pool.',
  })
  .openapi('DeleteDedicatedIpPoolRequest')

const DeleteEmailIdentityRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteEmailIdentityRequest',
    description:
      'A request to delete an existing email identity. When you delete an identity, you lose the ability to use Amazon Pinpoint to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.',
  })
  .openapi('DeleteEmailIdentityRequest')

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
  .openapi({ description: 'An object that describes the recipients for an email.', required: [] })
  .openapi('Destination')

const GetAccountRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAccountRequest',
    description:
      'A request to obtain information about the email-sending capabilities of your Amazon Pinpoint account.',
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
      '<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>',
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

const GetEmailIdentityRequestSchema = z
  .object({})
  .openapi({
    title: 'GetEmailIdentityRequest',
    description: 'A request to return details about an email identity.',
  })
  .openapi('GetEmailIdentityRequest')

const ListConfigurationSetsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListConfigurationSetsRequest',
    description:
      'A request to obtain a list of configuration sets for your Amazon Pinpoint account in the current AWS Region.',
  })
  .openapi('ListConfigurationSetsRequest')

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
      'Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.',
  })
  .openapi('ListDomainDeliverabilityCampaignsRequest')

const ListEmailIdentitiesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListEmailIdentitiesRequest',
    description:
      "A request to list all of the email identities associated with your Amazon Pinpoint account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.",
  })
  .openapi('ListEmailIdentitiesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const MessageTagListSchema = z
  .array(MessageTagSchema)
  .openapi({ description: 'A list of message tags.' })
  .openapi('MessageTagList')

const PutAccountDedicatedIpWarmupAttributesRequestSchema = z
  .object({
    AutoWarmupEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutAccountDedicatedIpWarmupAttributesRequest',
    description: 'A request to enable or disable the automatic IP address warm-up feature.',
    required: [],
  })
  .openapi('PutAccountDedicatedIpWarmupAttributesRequest')

const PutAccountSendingAttributesRequestSchema = z
  .object({
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutAccountSendingAttributesRequest',
    description: 'A request to change the ability of your account to send email.',
    required: [],
  })
  .openapi('PutAccountSendingAttributesRequest')

const SendingPoolNameSchema = z
  .string()
  .openapi({
    description:
      'The name of the dedicated IP pool that you want to associate with the configuration set.',
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
          description:
            'The name of the dedicated IP pool that you want to associate with the configuration set.',
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
      'A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set.',
    required: [],
  })
  .openapi('PutConfigurationSetSendingOptionsRequest')

const PutConfigurationSetTrackingOptionsRequestSchema = z
  .object({
    CustomRedirectDomain: CustomRedirectDomainSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain that you want to use to track open and click events.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutConfigurationSetTrackingOptionsRequest',
    description:
      'A request to add a custom domain for tracking open and click events to a configuration set.',
    required: [],
  })
  .openapi('PutConfigurationSetTrackingOptionsRequest')

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
            'Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.',
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
      '<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>',
  })
  .openapi('PutDeliverabilityDashboardOptionRequest')

const PutEmailIdentityDkimAttributesRequestSchema = z
  .object({
    SigningEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>",
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

const PutEmailIdentityFeedbackAttributesRequestSchema = z
  .object({
    EmailForwardingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>",
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
            "<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record when you send an email. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutEmailIdentityMailFromAttributesRequest',
    description: 'A request to configure the custom MAIL FROM domain for a verified identity.',
    required: [],
  })
  .openapi('PutEmailIdentityMailFromAttributesRequest')

const SendEmailRequestSchema = z
  .object({
    FromEmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. ',
        }),
    ).exactOptional(),
    Destination: DestinationSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains the recipients of the email message.' }),
    ),
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
            'The address that Amazon Pinpoint should send bounce and complaint notifications to.',
        }),
    ).exactOptional(),
    Content: EmailContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the body of the message. You can send either a Simple message or a Raw message.',
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
          description:
            'The name of the configuration set that you want to use when sending the email.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Destination', 'Content'],
    title: 'SendEmailRequest',
    description: 'A request to send an email message.',
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

export const getV1EmailConfigurationSetsRoute = createRoute({
  method: 'get',
  path: '/v1/email/configuration-sets',
  description:
    '<p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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

export const postV1EmailConfigurationSetsRoute = createRoute({
  method: 'post',
  path: '/v1/email/configuration-sets',
  description:
    'Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. ',
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
                    '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
                }),
              TrackingOptions: z
                .object({
                  CustomRedirectDomain: CustomRedirectDomainSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The domain that you want to use for tracking open and click events.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>",
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
                          'The name of the dedicated IP pool that you want to associate with the configuration set.',
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
                    'Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. ',
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
                    'Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.',
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of objects that define the tags (keys and values) that you want to associate with the configuration set.',
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

export const getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute = createRoute({
  method: 'get',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations',
  description:
    '<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
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
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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

export const postV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute = createRoute({
  method: 'post',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations',
  description:
    '<p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>',
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
            description:
              'The name of the configuration set that you want to add an event destination to.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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
                    '<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
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
                          'An array that specifies which events Amazon Pinpoint should send to the destinations in this <code>EventDestinationDefinition</code>.',
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
                          'An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.',
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

export const getV1EmailDedicatedIpPoolsRoute = createRoute({
  method: 'get',
  path: '/v1/email/dedicated-ip-pools',
  description:
    'List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.',
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

export const postV1EmailDedicatedIpPoolsRoute = createRoute({
  method: 'post',
  path: '/v1/email/dedicated-ip-pools',
  description:
    'Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.',
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

export const postV1EmailDeliverabilityDashboardTestRoute = createRoute({
  method: 'post',
  path: '/v1/email/deliverability-dashboard/test',
  description:
    'Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.',
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
                          '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>If you include attachments, they must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
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

export const getV1EmailIdentitiesRoute = createRoute({
  method: 'get',
  path: '/v1/email/identities',
  description:
    "Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.",
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

export const postV1EmailIdentitiesRoute = createRoute({
  method: 'post',
  path: '/v1/email/identities',
  description:
    "<p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>",
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
                .openapi({ description: 'The email address or domain that you want to verify.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of objects that define the tags (keys and values) that you want to associate with the email identity.',
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
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

export const getV1EmailConfigurationSetsConfigurationSetNameRoute = createRoute({
  method: 'get',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}',
  description:
    "<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>",
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
            description:
              'The name of the configuration set that you want to obtain more information about.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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

export const deleteV1EmailConfigurationSetsConfigurationSetNameRoute = createRoute({
  method: 'delete',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}',
  description:
    '<p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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
            description: 'The name of the configuration set that you want to delete.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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

export const putV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute =
  createRoute({
    method: 'put',
    path: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
    description:
      '<p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
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
                'The name of the configuration set that contains the event destination that you want to modify.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
              },
            },
            description:
              '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
          }),
        EventDestinationName: z
          .string()
          .openapi({
            param: {
              name: 'EventDestinationName',
              in: 'path',
              required: true,
              description: 'The name of the event destination that you want to modify.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
              },
            },
            description:
              '<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
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
                            'An array that specifies which events Amazon Pinpoint should send to the destinations in this <code>EventDestinationDefinition</code>.',
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
                            'An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.',
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

export const deleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute =
  createRoute({
    method: 'delete',
    path: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
    description:
      '<p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
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
                'The name of the configuration set that contains the event destination that you want to delete.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
              },
            },
            description:
              '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
          }),
        EventDestinationName: z
          .string()
          .openapi({
            param: {
              name: 'EventDestinationName',
              in: 'path',
              required: true,
              description: 'The name of the event destination that you want to delete.',
              schema: {
                type: 'string',
                description:
                  '<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
              },
            },
            description:
              '<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>',
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

export const deleteV1EmailDedicatedIpPoolsPoolNameRoute = createRoute({
  method: 'delete',
  path: '/v1/email/dedicated-ip-pools/{PoolName}',
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

export const getV1EmailIdentitiesEmailIdentityRoute = createRoute({
  method: 'get',
  path: '/v1/email/identities/{EmailIdentity}',
  description:
    "Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.",
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
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity that you want to retrieve details for.',
            schema: { type: 'string' },
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

export const deleteV1EmailIdentitiesEmailIdentityRoute = createRoute({
  method: 'delete',
  path: '/v1/email/identities/{EmailIdentity}',
  description:
    'Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.',
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
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description:
              'The identity (that is, the email address or domain) that you want to delete from your Amazon Pinpoint account.',
            schema: { type: 'string' },
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

export const getV1EmailAccountRoute = createRoute({
  method: 'get',
  path: '/v1/email/account',
  description:
    'Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.',
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

export const getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute = createRoute({
  method: 'get',
  path: '/v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames',
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
              'A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon Pinpoint or Amazon SES.',
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

export const getV1EmailDedicatedIpsIPRoute = createRoute({
  method: 'get',
  path: '/v1/email/dedicated-ips/{IP}',
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
              "The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Pinpoint account.",
            schema: {
              type: 'string',
              description:
                'A dedicated IP address that is associated with your Amazon Pinpoint account.',
            },
          },
          description:
            'A dedicated IP address that is associated with your Amazon Pinpoint account.',
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

export const getV1EmailDedicatedIpsRoute = createRoute({
  method: 'get',
  path: '/v1/email/dedicated-ips',
  description:
    'List the dedicated IP addresses that are associated with your Amazon Pinpoint account.',
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

export const getV1EmailDeliverabilityDashboardRoute = createRoute({
  method: 'get',
  path: '/v1/email/deliverability-dashboard',
  description:
    '<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>',
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

export const putV1EmailDeliverabilityDashboardRoute = createRoute({
  method: 'put',
  path: '/v1/email/deliverability-dashboard',
  description:
    '<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>',
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
                    'Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.',
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

export const getV1EmailDeliverabilityDashboardTestReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/v1/email/deliverability-dashboard/test-reports/{ReportId}',
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

export const getV1EmailDeliverabilityDashboardCampaignsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/v1/email/deliverability-dashboard/campaigns/{CampaignId}',
  description:
    'Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).',
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
              'The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.',
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

export const getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute =
  createRoute({
    method: 'get',
    path: '/v1/email/deliverability-dashboard/statistics-report/{Domain}#StartDate&EndDate',
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
          .openapi({
            param: {
              name: 'Domain',
              in: 'path',
              required: true,
              description: 'The domain that you want to obtain deliverability metrics for.',
              schema: { type: 'string' },
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

export const getV1EmailDeliverabilityDashboardTestReportsRoute = createRoute({
  method: 'get',
  path: '/v1/email/deliverability-dashboard/test-reports',
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

export const getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute =
  createRoute({
    method: 'get',
    path: '/v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns#StartDate&EndDate',
    description:
      'Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.',
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
              description:
                'The first day, in Unix time format, that you want to obtain deliverability data for.',
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
                'The last day, in Unix time format, that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.',
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

export const getV1EmailTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v1/email/tags#ResourceArn',
  description:
    'Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.',
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

export const putV1EmailAccountDedicatedIpsWarmupRoute = createRoute({
  method: 'put',
  path: '/v1/email/account/dedicated-ips/warmup',
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
                    'Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.',
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

export const putV1EmailAccountSendingRoute = createRoute({
  method: 'put',
  path: '/v1/email/account/sending',
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
                    "<p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>",
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

export const putV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute = createRoute({
  method: 'put',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}/delivery-options',
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
            description:
              'The name of the configuration set that you want to associate with a dedicated IP pool.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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
                    'The name of the dedicated IP pool that you want to associate with the configuration set.',
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

export const putV1EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute = createRoute({
  method: 'put',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}/reputation-options',
  description:
    'Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.',
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
            description:
              'The name of the configuration set that you want to enable or disable reputation metric tracking for.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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

export const putV1EmailConfigurationSetsConfigurationSetNameSendingRoute = createRoute({
  method: 'put',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}/sending',
  description:
    'Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.',
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
              'The name of the configuration set that you want to enable or disable email sending for.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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

export const putV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute = createRoute({
  method: 'put',
  path: '/v1/email/configuration-sets/{ConfigurationSetName}/tracking-options',
  description:
    'Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.',
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
            description:
              'The name of the configuration set that you want to add a custom tracking domain to.',
            schema: {
              type: 'string',
              description:
                '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
            },
          },
          description:
            '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
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
                .openapi({
                  description:
                    'The domain that you want to use for tracking open and click events.',
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

export const putV1EmailDedicatedIpsIPPoolRoute = createRoute({
  method: 'put',
  path: '/v1/email/dedicated-ips/{IP}/pool',
  description:
    '<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>',
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
              "The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Pinpoint account.",
            schema: {
              type: 'string',
              description:
                'A dedicated IP address that is associated with your Amazon Pinpoint account.',
            },
          },
          description:
            'A dedicated IP address that is associated with your Amazon Pinpoint account.',
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

export const putV1EmailDedicatedIpsIPWarmupRoute = createRoute({
  method: 'put',
  path: '/v1/email/dedicated-ips/{IP}/warmup',
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
            schema: {
              type: 'string',
              description:
                'A dedicated IP address that is associated with your Amazon Pinpoint account.',
            },
          },
          description:
            'A dedicated IP address that is associated with your Amazon Pinpoint account.',
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

export const putV1EmailIdentitiesEmailIdentityDkimRoute = createRoute({
  method: 'put',
  path: '/v1/email/identities/{EmailIdentity}/dkim',
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
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description: 'The email identity that you want to change the DKIM settings for.',
            schema: { type: 'string' },
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
                    "<p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>",
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

export const putV1EmailIdentitiesEmailIdentityFeedbackRoute = createRoute({
  method: 'put',
  path: '/v1/email/identities/{EmailIdentity}/feedback',
  description:
    "<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>",
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
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description:
              'The email identity that you want to configure bounce and complaint feedback forwarding for.',
            schema: { type: 'string' },
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
                    "<p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>",
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

export const putV1EmailIdentitiesEmailIdentityMailFromRoute = createRoute({
  method: 'put',
  path: '/v1/email/identities/{EmailIdentity}/mail-from',
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
        .openapi({
          param: {
            name: 'EmailIdentity',
            in: 'path',
            required: true,
            description:
              'The verified email identity that you want to set up the custom MAIL FROM domain for.',
            schema: { type: 'string' },
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
                .openapi({ description: 'The domain that you want to use as a MAIL FROM domain.' }),
              BehaviorOnMxFailure: z
                .enum(['USE_DEFAULT_VALUE', 'REJECT_MESSAGE'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>",
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

export const postV1EmailOutboundEmailsRoute = createRoute({
  method: 'post',
  path: '/v1/email/outbound-emails',
  description:
    '<p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>',
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
                    'The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. ',
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
                .openapi({
                  description: 'An object that describes the recipients for an email.',
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
                    'The address that Amazon Pinpoint should send bounce and complaint notifications to.',
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
                          '<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>If you include attachments, they must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients\' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can\'t exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>',
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
                    '<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>',
                }),
            })
            .openapi({ required: ['Destination', 'Content'] }),
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

export const postV1EmailTagsRoute = createRoute({
  method: 'post',
  path: '/v1/email/tags',
  description:
    '<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>',
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

export const deleteV1EmailTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/v1/email/tags#ResourceArn&TagKeys',
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
              '<p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the resource, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. For example: <code>/v1/email/tags?ResourceArn=ResourceArn&amp;TagKeys=Key1&amp;TagKeys=Key2</code> </p>',
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
